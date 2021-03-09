import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const appFooterStyles = makeStyles({
  root: {
    paddingTop: 24,
    paddingBottom: 24,
    textAlign: 'center',
  },
  a: {
    color: '#ff5722',
    '&:hover, &:focus': {
      color: '#e64a19',
    }
  },
});

export const AppFooter = () => {
  const classes = appFooterStyles();

  return(
    <Container maxWidth="lg" className={classes.root}>
      <p>React based project using <a href="https://www.thecocktaildb.com" target="_blank" rel="noopener noreferrer" className={classes.a}>The CocktailDB</a> API. <br/>Created by Terrence Chan 2021. Check out the repository on <a href="https://github.com/tkhc/elixir" target="_blank" rel="noopener noreferrer" className={classes.a}>GitHub</a>.</p>
    </Container>
  );
}