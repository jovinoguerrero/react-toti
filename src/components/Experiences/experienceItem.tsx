import { Card, CardContent, CardMedia, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: '2rem',
    width: '30vh',
    marginLeft: 'auto',
    marginRight: 'auto',
    boxShadow: 'rgba(0,0,0,0.8) 0 0 10px',
    backgroundColor: '#292929',
    '&:hover': {
      textShadow: '#ea80fc 0 0 10px',
    }
  },
  media: {
    width: '25vh',
    height: '20vh',
    margin: '2rem',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  text: {
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
    '&:hover': {
      color: '#ea80fc',
    }
  }
});

export default function ExperienceItem({name, image}) {
  const classes = useStyles();

  return(
    <>
      <Card className={classes.root}>
        <CardMedia
          component="img"
          className={classes.media}
          image={image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.text}>
              {name}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
