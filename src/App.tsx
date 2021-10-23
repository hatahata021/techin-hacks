import React, { useEffect, useState } from "react";
import "./App.css";
import {
  AppBar,
  Grid,
  Typography,
  Box,
  Button,
  FormControl,
  Input,
} from "@material-ui/core";
import API, { GraphQLResult, graphqlOperation } from "@aws-amplify/api-graphql";
import { getCompetition, listComments } from "./graphql/queries";
import { createComment } from "./graphql/mutations";
import { onCreateComment } from "./graphql/subscriptions";
import * as APIt from "./API";
import Observable from "zen-observable-ts";
import { useParams } from "react-router";

type SubscriptionValue = {
  data: APIt.OnCreateCommentSubscription;
};
type SubscriptionEvent = {
  value: SubscriptionValue;
};

type Params = {
  id: string;
};

function App() {
  const [competition, setCompetition] = useState<APIt.Competition>();

  const [comments, setComments] = useState<any[]>([]);
  const { id } = useParams<Params>();
  const [createCommentInput, setCreateCommentInput] = useState<
    Partial<APIt.CreateCommentInput>
  >({ CompetitionID: id });

  useEffect(() => {
    fetchCompetition();
    fetchListComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 競技情報を取得
  async function fetchCompetition() {
    try {
      const competition = (await API.graphql(
        graphqlOperation(getCompetition, { id })
      )) as GraphQLResult<APIt.GetCompetitionQuery>;
      console.log(competition);

      if (competition.data?.getCompetition) {
        setCompetition(competition.data.getCompetition);
      }
    } catch (err) {
      console.error(err);
    }
  }

  // コメント一覧を取得
  async function fetchListComments() {
    try {
      const result = (await API.graphql(
        graphqlOperation(listComments, {
          filter: { CompetitionID: { eq: id } },
        } as APIt.ListCommentsQueryVariables)
      )) as GraphQLResult<APIt.ListCommentsQuery>;

      if (result.data?.listComments && result.data?.listComments.items) {
        setComments(result.data.listComments.items);
      }
      console.log(result);
    } catch (err) {
      console.error(err);
    }
  }

  const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (
    input
  ) => {
    setCreateCommentInput({
      ...createCommentInput,
      [input.target.name]: input.target.value,
    });
  };

  // Subscriptionを設定
  useEffect(() => {
    const client = API.graphql(
      graphqlOperation(onCreateComment)
    ) as Observable<SubscriptionEvent>;
    const subscription = client.subscribe({
      next: async ({ value: { data } }) => {
        console.log("", data.onCreateComment);
        fetchListComments();
      },
    });
    return () => subscription.unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const useCreateComment = async () => {
    const response = (await API.graphql(
      graphqlOperation(createComment, {
        input: createCommentInput as APIt.CreateCommentInput,
      })
    )) as GraphQLResult<APIt.CreateCommentMutation>;
    console.log(response);
  };

  if (!competition) {
    return <div>loading...</div>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <AppBar color="primary">
          <Box textAlign="start">
            <Typography variant="h3">
              {competition ? competition.title : ""}{" "}
            </Typography>
          </Box>
        </AppBar>
        <Box style={{}}>
          <Grid container spacing={2}>
            <Grid>
              <Box height={130} color="white">
                {comments.map((comment) => (
                  <Typography>
                    {" "}
                    {comment.talkTime} {comment.content}{" "}
                  </Typography>
                ))}
                <FormControl>
                  <Input
                    id="my-input"
                    aria-describedby="my-helper-text"
                    name={"content"}
                    onChange={handleOnChange}
                  />
                </FormControl>
                <Button
                  color="primary"
                  variant="contained"
                  onClick={useCreateComment}
                >
                  <Typography>語るぼたん</Typography>
                </Button>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <iframe
                width="100"
                height="100"
                src="https://www.youtube.com/embed/-0GfAas8O-8"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
              {/* <video controls={true}>
              <source
                src="https://www.youtube.com/embed/-0GfAas8O-8"
                type="video/mp4"
              />
            </video> */}
            </Grid>
            <Grid item xs={4}>
              スタンプ
            </Grid>
          </Grid>
        </Box>
      </header>
    </div>
  );
}

export default App;
