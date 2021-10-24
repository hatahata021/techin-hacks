import React from "react";
import { Typography, Box, Divider } from "@material-ui/core";
import { OutlinedButton } from "../atoms/OutlinedButton";

interface Props {
  height: number;
}

type StampAudio = {
  id: string;
  name: string;
  url: string;
};

export const Stamps: React.FC<Props> = (props) => {
  const height = props.height;

  const stampList: StampAudio[] = [
    {
      id: "1",
      name: "拍手",
      url: "https://soundeffect-lab.info/sound/voice/mp3/people/people-performance-cheer1.mp3",
    },
    {
      id: "2",
      name: "うまい！",
      url: "https://soundeffect-lab.info/sound/voice/mp3/people/people-performance-cheer1.mp3",
    },
    {
      id: "3",
      name: "おしい〜",
      url: "https://soundeffect-lab.info/sound/voice/mp3/people/people-performance-cheer1.mp3",
    },
    {
      id: "4",
      name: "やった！",
      url: "https://soundeffect-lab.info/sound/voice/mp3/people/people-performance-cheer1.mp3",
    },
    {
      id: "5",
      name: "がんばれ！",
      url: "https://soundeffect-lab.info/sound/voice/mp3/people/people-performance-cheer1.mp3",
    },
    {
      id: "6",
      name: "いける！",
      url: "https://soundeffect-lab.info/sound/voice/mp3/people/people-performance-cheer1.mp3",
    },
  ];

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
              <OutlinedButton url={stamp.url} title={stamp.name} />
              <Box mt={1} />
              {/* <audio className="audio-element">
                <source src={stamp.url}></source>
              </audio> */}
            </React.Fragment>
          );
        })}
      </Box>
    </Box>
  );
};
