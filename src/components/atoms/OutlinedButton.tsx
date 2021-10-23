import React from "react";
import { Button } from "@material-ui/core";

interface Props {
  title: string;
  onClick: () => void;
}

export const OutlinedButton: React.FC<Props> = (props) => {
  return (
    <Button
      onClick={props.onClick}
      variant="outlined"
      color="primary"
      fullWidth
    >
      {props.title}
    </Button>
  );
};
