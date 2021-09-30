import ExperienceItem from "./experienceItem";
import raizen from "../../assets/raizen-logo.svg";
import cosan from "../../assets/cosan-logo.svg";
import shell from "../../assets/shell-logo.svg";
import osirion from "../../assets/osirion-logo.jpg";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    backgroundColor: '#2d0f1b',
    margin: '1rem 2rem',
    boxShadow: 'rgba(0,0,0,0.8) 0 0 10px',
    borderRadius: '0 0 5px 5px',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },

})

export default function Experiences() {
  const classes = useStyles();

  return(
    <div style={{backgroundColor:'#201118', padding: '1rem 0'}}>
      <div className={classes.container}>
        <Typography
          variant="h3"
          component="h2"
          style={{
            'fontWeight': 'bold',
            'textAlign': 'center',
            'paddingTop': '1rem',
            'color': '#ffffff',
          }}>
            Experiências
        </Typography>
        <Typography
          variant="h4"
          component="h2"
          style={{
            'fontWeight': 'bold',
            'textAlign': 'center',
            'marginTop': '1rem',
            'color': '#ffffff',
          }}
        >
            Analista de Desenvolvimento de Sistemas
        </Typography>
        <div className={classes.row}>
          <ExperienceItem name="Dev BE" image={shell}></ExperienceItem>
          <ExperienceItem name="Dev BE" image={raizen}></ExperienceItem>
          <ExperienceItem name="Dev BE" image={cosan}></ExperienceItem>
        </div>
        <div className={classes.row}>
          <ExperienceItem name="Dev BE" image={raizen}></ExperienceItem>
          <ExperienceItem name="Robotics Specialist" image={osirion}></ExperienceItem>
          <ExperienceItem name="Dev BE" image={shell}></ExperienceItem>
        </div>
      </div>
    </div>
  );
}
