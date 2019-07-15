import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  }
 
}));

const cards = [1, 2, 3, 4, 5, 6];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={6} >
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4} >
                <Card className={classes.card}>           
                  <CardContent className={classes.cardContent}>                        
                    <Typography variant="h10" gutterBottom>
                      직무 - 경력사항
                    </Typography> 
                    <Typography><p /></Typography>                       
                    <Typography gutterBottom variant="h4" component="h2" align="center">
                      기업명
                    </Typography>
                    <Typography><p /></Typography>    
                    <Typography align="center" gutterBottom variant="h6" >
                      #1  #2  #3
                    </Typography>
                    <Typography><p /></Typography>    
                    <Typography align="right" >
                     진행상태
                    </Typography>
                   
                  </CardContent>
                {/*   <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions> */}
                </Card>
              </Grid>
            ))}
            
          </Grid>
        </Container>
    

    </React.Fragment>
  );
}