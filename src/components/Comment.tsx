import {
  Box,
  Typography,
  Button,
  FormControl,
  Input,
  useTheme,
} from "@material-ui/core";
import { ChangeEventHandler } from "react";
import dayjs from "dayjs";

type CommentProps = {
  height?: number;
  comments?: any[];
  handleOnChange: ChangeEventHandler<HTMLInputElement>;
  createComment: () => void;
};

const Comment = ({
  height,
  comments,
  handleOnChange,
  createComment,
}: CommentProps) => {
  const theme = useTheme();
  return (
    <Box
      height={height}
      bgcolor={theme.palette.grey[800]}
      style={{ overflowY: "scroll" }}
      p={2}
      mb={2}
    >
      {comments &&
        comments.map((comment) => (
          <Box textAlign="start" key={comment.id}>
            <Typography>
              {dayjs(comment.createdAt).format("YYYY-MM-DD HH:mm:ss")}
            </Typography>
            <Typography>
              {comment.talkTime} {comment.content}
            </Typography>
          </Box>
        ))}

      <FormControl>
        <Input
          id="my-input"
          aria-describedby="my-helper-text"
          name={"content"}
          onChange={handleOnChange}
        />
      </FormControl>
      <Button color="primary" variant="contained" onClick={createComment}>
        <Typography>うんちく</Typography>
      </Button>
    </Box>
  );
};
export default Comment;
