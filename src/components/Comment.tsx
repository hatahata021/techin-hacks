import {
  Box,
  Typography,
  Button,
  FormControl,
  Input,
  useTheme,
  IconButton,
  Divider
  , Link
} from "@material-ui/core";
import { ChangeEventHandler } from "react";
import dayjs from "dayjs";
import { KeyboardArrowLeft, Send } from "@material-ui/icons";
import { TextField } from "@mui/material";

type CommentProps = {
  height?: number;
  comments?: any[];
  handleOnChange: ChangeEventHandler<HTMLInputElement>;
  handleOnClickTalkTime: (talkTime: number) => void
  createComment: () => void;
  onClick: () => void
};

const Comment = ({
  height,
  comments,
  onClick,
  handleOnChange,
  createComment,
  handleOnClickTalkTime
}: CommentProps) => {
  const theme = useTheme();

  const handleOnClick = (talkTime: number) => {
    handleOnClickTalkTime(talkTime)
  }

  const displayTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    console.log(minutes)
    return `${('00' + minutes).slice(-2)}:${('00' + seconds).slice(-2)}`
  }

  return (
    <Box
      height={height}
      bgcolor={theme.palette.grey[800]}
      // style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}
      sx={{ display: "flex", flexDirection: "column" }}
    >
      <Box display='flex' justifyContent="flex-start">
        <IconButton color='secondary' onClick={onClick}>
          <KeyboardArrowLeft />
        </IconButton>
      </Box>

      <Box sx={{ flexGrow: 1 }} style={{ overflowY: "scroll" }}>
        {comments &&
          comments.map((comment) => (

            <Box display='flex' textAlign="start" key={comment.id} mb={2} px={2} >
              {/* <Typography>
                {dayjs(comment.createdAt).format("YYYY-MM-DD HH:mm:ss")}
              </Typography> */}

              <Typography onClick={() => handleOnClick(comment.talkTime)} style={{ color: '#4682b4', flex: "none" }} >
                {displayTime(comment.talkTime)}
              </Typography>
              <Box pl={1} />
              <Typography >
                {comment.content}
              </Typography>
            </Box>
          ))}
      </Box>
      <Box m={2}>
        <Divider style={{ backgroundColor: '#BDBDBD' }} />
      </Box>

      <Box height={40} m={2} display='flex' alignItems='center' justifyContent='center' >
        <Box mt={3} />
        <FormControl style={{ width: '80%' }}>
          <Input
            style={{ backgroundColor: '#BDBDBD' }}
            id="my-input"
            aria-describedby="my-helper-text"
            name={"content"}
            onChange={handleOnChange}
            fullWidth
            multiline
            rows={3}
            maxRows={3}
          />

        </FormControl>
        <IconButton color="secondary" onClick={createComment}>
          <Send />
        </IconButton>
      </Box>
      <Box mb={2} />
    </Box >
  );
};
export default Comment;
