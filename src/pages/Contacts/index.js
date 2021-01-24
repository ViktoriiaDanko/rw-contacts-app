import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles"; //createStyles - theme
import { useContacts } from "./useContacts";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(4),
    },
  })
);

export const Contacts = () => {
  const classes = useStyles();
  const contacts = useContacts();
  if (contacts.isLoading) {
    return <div>...loading</div>;
  }

  if (contacts.isError) {
    return <div>...error</div>;
  }

  return (
    <Container className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h4" component="h1">
            Contacts
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <div>{contacts.data[0].name.first}</div>
        </Grid>
      </Grid>
    </Container>
  );
};
