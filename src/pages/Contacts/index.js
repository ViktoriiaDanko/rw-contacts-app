import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles"; //createStyles - theme
import { useContacts } from "./useContacts";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(3),
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
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <div>Contacts</div>
        </Grid>
        <Grid item xs={12}>
          <div>{contacts.data[0].name.first}</div>
        </Grid>
      </Grid>
    </Container>
  );
};
