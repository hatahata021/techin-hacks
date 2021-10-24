import React from "react";
import { Button } from "@material-ui/core";
import { useAudio } from "react-use";

interface Props {
  title: string;
  url: string;
}

export const OutlinedButton: React.FC<Props> = (props) => {
  const [audio, state, controls, ref] = useAudio({
    src: props.url,
    autoPlay: false,
  });

  const onClick = async () => {
    console.log(props.url);
    state.playing ? await controls.pause : await controls.play;
  };

  return (
    <div>
      {audio}
      <Button
        onClick={controls.play}
        variant="outlined"
        color="primary"
        fullWidth
      >
        {props.title}
      </Button>
    </div>
  );
};
