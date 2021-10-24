import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { AppBar, Grid, Typography, Box } from "@material-ui/core";
import API, { GraphQLResult, graphqlOperation } from "@aws-amplify/api-graphql";
import { getCompetition, listComments } from "./graphql/queries";
import { createComment } from "./graphql/mutations";
import { onCreateComment } from "./graphql/subscriptions";
import * as APIt from "./API";
import Observable from "zen-observable-ts";
import { useParams } from "react-router";
import { useWindowSize } from "./useWindowSize";
import CommentComponents from "./components/Comment";
import { Stamps } from "./components/organisms/Stamps";
import YouTube from "react-youtube";

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
  const [currentTime, setCurrentTime] = useState<number>(0);
  const { id } = useParams<Params>();
  const [createCommentInput, setCreateCommentInput] = useState<
    Partial<APIt.CreateCommentInput>
  >({ CompetitionID: id });
  const height = useWindowSize().height;
  useEffect(() => {
    fetchCompetition();
    fetchListComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const playerRef = useRef<YouTube | null>(null);

  useEffect(() => {
    const interval = setInterval(async () => {
      if (playerRef && playerRef.current) {
        const player = playerRef.current.getInternalPlayer();
        const time = await player.getCurrentTime();
        setCurrentTime(time);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [playerRef]);

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
        input: {
          ...createCommentInput,
          talkTime: `${Math.floor(currentTime)}`,
        } as APIt.CreateCommentInput,
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
              {competition ? competition.title : ""} {currentTime}
            </Typography>
          </Box>
        </AppBar>
        <Box style={{ width: "100%" }}>
          <Box mt={7} />
          <Grid container style={{ width: "100%" }}>
            <Grid item xs={2}>
              <CommentComponents
                height={height ? height - 56 : height}
                comments={comments}
                createComment={useCreateComment}
                handleOnChange={handleOnChange}
              />
            </Grid>
            <Grid item xs={8}>
              {/* <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/-0GfAas8O-8"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe> */}
              {/* <video
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/-0GfAas8O-8"
              ></video> */}
              <YouTube
                ref={playerRef}
                videoId="-0GfAas8O-8"
                opts={{
                  height: height ? `${height - 56}` : `${height}`,
                  width: "100%",
                  playerVars: {
                    // https://developers.google.com/youtube/player_parameters
                    autoplay: 1,
                  },
                }}
                onPlaybackRateChange={(event) => {
                  console.log(event);
                }}
                onStateChange={(event) => {
                  console.log(event);
                }}
              ></YouTube>
            </Grid>
            <Grid item xs={2}>
              <Stamps height={height ? height : 300} />
            </Grid>
          </Grid>
        </Box>
      </header>
    </div>
  );
}

export default App;
