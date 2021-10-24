import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { AppBar, Grid, Typography, Box, IconButton } from "@material-ui/core";
import API, { GraphQLResult, graphqlOperation } from "@aws-amplify/api-graphql";
import { getCompetition, commentsByDate } from "./graphql/queries";
import { createComment } from "./graphql/mutations";
import { onCreateComment } from "./graphql/subscriptions";
import * as APIt from "./API";
import Observable from "zen-observable-ts";
import { useParams } from "react-router";
import { useWindowSize } from "./useWindowSize";
import CommentComponents from "./components/Comment";
import { Stamps } from "./components/organisms/Stamps";
import YouTube from "react-youtube";
import { Comment } from "@material-ui/icons";
import { theme } from "./theme";

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
  const [isOpen, setIsOpen] = useState(false)
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
        graphqlOperation(commentsByDate, {
          CompetitionID: id,
        } as APIt.CommentsByDateQueryVariables)
      )) as GraphQLResult<APIt.CommentsByDateQuery>;

      if (result.data?.commentsByDate && result.data?.commentsByDate.items) {
        setComments(result.data.commentsByDate.items);
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
          talkTime: Math.floor(currentTime),
        } as APIt.CreateCommentInput,
      })
    )) as GraphQLResult<APIt.CreateCommentMutation>;
    console.log(response);
  };

  const handleOnClickTalkTime = async (talkTime: number) => {
    if (playerRef && playerRef.current) {
      const player = playerRef.current.getInternalPlayer();
      const time = await player.seekTo(talkTime, true);
      await player.playVideo();
    }
  }

  if (!competition) {
    return <div>loading...</div>;
  }

  const searchParams = (new URL(competition.url)).searchParams;
  const videoId = searchParams.get("v")

  return (
    <div className="App">
      <header className="App-header">
        <AppBar color="primary">
          <Box textAlign="start" px={3.5} py={1.5} >
            <Typography variant="h5" >
              {competition ? competition.title : ""}
            </Typography>
          </Box>
        </AppBar>
        <Box style={{ width: "100%" }}>
          <Box mt={7} />
          <Grid container style={{ width: "100%" }}>
            {
              isOpen ?
                <Grid item xs={4}>
                  <CommentComponents
                    height={height ? height - 56 : height}
                    comments={comments}
                    onClick={() => { setIsOpen(false) }}
                    createComment={useCreateComment}
                    handleOnChange={handleOnChange}
                    handleOnClickTalkTime={handleOnClickTalkTime}
                  />
                </Grid>
                :
                <Grid item xs={1}>
                  <Box
                    height={height ? height - 56 : height}
                    bgcolor={theme.palette.grey[800]}
                    sx={{ display: "flex", flexDirection: "column" }}
                  >
                    <Box m={1} display='flex' textAlign="start" width='24'>
                      <IconButton color='secondary' size='medium' onClick={() => { setIsOpen(true) }}>
                        <Comment />
                      </IconButton>
                    </Box>

                  </Box>
                </Grid>
            }

            <Grid item xs={isOpen ? 8 : 9}>
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
                videoId={videoId ? videoId : "23EfsN7vEOA"}
                opts={{
                  height: height ? `${height - 56}` : `${height}`,
                  width: "100%",
                  playerVars: {
                    // https://developers.google.com/youtube/player_parameters
                    autoplay: 1,
                  },
                }}
              ></YouTube>
            </Grid>
            {
              isOpen ?
                <>
                </>
                :
                <Grid item xs={2}>
                  <Stamps height={height ? height : 300} />
                </Grid>
            }
          </Grid>
        </Box>
      </header>
    </div>
  );
}

export default App;
