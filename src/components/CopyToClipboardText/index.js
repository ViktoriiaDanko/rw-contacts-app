import propTypes from "prop-types";
import Button from "@material-ui/core/Button";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { useCopyToClipboard } from "react-use";
import Tooltip from "@material-ui/core/Tooltip";
import { forwardRef } from "react";

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

const CopyToClipboardTextView = forwardRef(function CopyToClipboardTextView(
  props,
  ref
) {
  //  Spread the props to the underlying DOM element.
  return (
    <div {...props} ref={ref}>
      {props.children}
    </div>
  );
});

export const CopyToClipboardText = ({ text }) => {
  const classes = useStyles();
  const [state, copyToClipboard] = useCopyToClipboard();
  return (
    <Tooltip title="Copy" placement="top" arrow>
      <CopyToClipboardTextView>
        <Button className={classes.root} onClick={() => copyToClipboard(text)}>
          <FileCopyOutlinedIcon fontSize="small" className={classes.icon} />
          {text}
        </Button>
      </CopyToClipboardTextView>
    </Tooltip>
  );
};

CopyToClipboardText.propTypes = {
  text: propTypes.string.isRequired,
};
