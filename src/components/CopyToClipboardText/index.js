import propTypes from "prop-types";
import Box from "@material-ui/core/Box";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { useCopyToClipboard } from "react-use";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      cursor: "pointer",
    },
    icon: {
      marginRight: theme.spacing(1),
    },
  })
);

export const CopyToClipboardText = ({ text }) => {
  const classes = useStyles();
  const [state, copyToClipboard] = useCopyToClipboard();
  return (
    <Box
      display="flex"
      alignItems="center"
      className={classes.root}
      onClick={() => copyToClipboard(text)}
    >
      <FileCopyOutlinedIcon fontSize="small" className={classes.icon} />
      {text}
    </Box>
  );
};

CopyToClipboardText.propTypes = {
  text: propTypes.string.isRequired,
};
