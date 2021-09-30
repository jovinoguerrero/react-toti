import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core/'
import React from 'react';

//  npm install @material-ui/core
//  npm install @material-ui/styles

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#201118',
    padding: '1rem 0',
  },
  nav: {
    boxShadow: 'rgba(0,0,0,0.8) 0 0 10px',
    backgroundColor: '#24292d',
    margingTop: '2rem',
  },
  name: {
    marginLeft: 'auto',
  },
}));

export default function NavBar() {
  const name = "👨‍💻 Analista e Desenvolvedor de Sistemas - Dev BE/AND"
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.nav}>
        <Toolbar>
          <Typography variant="h6" className={classes.name}>
            {name}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
