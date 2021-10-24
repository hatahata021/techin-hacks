import React from "react";
import { Button } from "@material-ui/core";

interface Props {
  title: string;
  url: string;
  id: string;
  onClick: () => void
}

export const OutlinedButton: React.FC<Props> = (props) => {


  return (
    <div>
      <Button
        id={props.id}
        onClick={props.onClick}
        variant="outlined"
        color="primary"
        fullWidth
      >
        {props.title}
      </Button>
    </div>
  );
};
