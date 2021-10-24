import React, { useEffect } from "react";
import { Typography, Box, Divider } from "@material-ui/core";
import { OutlinedButton } from "../atoms/OutlinedButton";
import * as APIt from "../../API";
import API, { GraphQLResult, graphqlOperation } from "@aws-amplify/api-graphql";
import { createStamp } from "../../graphql/mutations";
import { onCreateStamp } from "../../graphql/subscriptions";
import { useParams } from "react-router";
import Observable from "zen-observable-ts";
import { useAudio } from "react-use";

interface Props {
  height: number;
}

type StampAudio = {
  id: string;
  name: string;
  url: string;
};

type SubscriptionValue = {
  data: APIt.OnCreateStampSubscription;
};
type SubscriptionEvent = {
  value: SubscriptionValue;
};

type Params = {
  id: string;
};

export const Stamps: React.FC<Props> = (props) => {
  const height = props.height;
  const { id: CompetitionID } = useParams<Params>()

  const stampList: StampAudio[] = [
    {
      id: "1",
      name: "拍手",
      url: "https://soundeffect-lab.info/sound/voice/mp3/people/people-performance-cheer1.mp3",
    },
    {
      id: "2",
      name: "やるじゃないか",
      url: "https://soundeffect-lab.info/sound/voice/mp3//game/swordman-guard2.mp3",
    },
    {
      id: "3",
      name: "おしい〜",
      url: "https://soundeffect-lab.info/sound/voice/mp3/info-girl1/info-girl1-oshii1.mp3",
    },
    {
      id: "4",
      name: "やった！",
      url: "https://soundeffect-lab.info/sound/voice/mp3/game/swordman-win1.mp3",
    },
    {
      id: "5",
      name: "がんばれ！",
      url: "https://soundeffect-lab.info/sound/voice/mp3/line-girl1/line-girl1-ganbare1.mp3",
    },
    {
      id: "6",
      name: "おめでとう！",
      url: "https://soundeffect-lab.info/sound/voice/mp3/info-girl1/info-girl1-omedetou1.mp3",
    },
  ];

  const onClickCreateStamp = async (stampID: string) => {
    const response = (await API.graphql(
      graphqlOperation(createStamp, {
        input: {
          CompetitionID,
          stampID
        } as APIt.CreateStampInput,
      })
    )) as GraphQLResult<APIt.CreateStampMutation>;
    console.log(response);
  };

  // Subscriptionを設定
  useEffect(() => {
    const client = API.graphql(
      graphqlOperation(onCreateStamp)
    ) as Observable<SubscriptionEvent>;
    const subscription = client.subscribe({
      next: async ({ value: { data } }) => {
        console.log("onCreateStamp", data.onCreateStamp);
        if (data.onCreateStamp?.stampID) {
          const audioE = document.getElementById(`audio-${data.onCreateStamp?.stampID}`) as HTMLAudioElement;
          if (audioE) {
            audioE.play()
          }
        }
      },
    });
    return () => subscription.unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box height={height ? height - 56 : height} bgcolor="#FFFFFF">
      <Box pt={1} />
      <Typography color="primary">スタンプ機能</Typography>
      <Box mt={1} />
      <Divider />
      <Box m={1}>
        {stampList.map((stamp) => {
          return (
            <React.Fragment key={stamp.id}>
              <OutlinedButton id={stamp.id} url={stamp.url} title={stamp.name} onClick={() => { onClickCreateStamp(stamp.id) }} />
              <Box mt={1} />
              <audio src={stamp.url} id={`audio-${stamp.id}`}></audio>
            </React.Fragment>
          );
        })}
      </Box>
    </Box>
  );
};
