import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#e3ecf4'
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  root: {
    flexShrink: 0,
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing(2.5),
    textAlign:'center',
    marginTop: '30px'
  },
  searching: {
    padding: '2px 4px',  
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    textAlign:'center',
    margin:'auto',
    marginTop: '30px',      
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4,
  },
  area:{
    color: '#404040',
    
  },
  title:{
    textAlign: 'center',
    color: '#336699 ',
    fontWeight: 'bold'
  },
  state : {
    textAlign: 'right',
    color: '#ba3838',
    fontWeight: 'bold'
  },
  tags: {
    textAlign: 'center',
    color: 'SteelBlue '
  }

 
}));

const cards = [1, 2, 3, 4, 5, 6];

export default function Album(props) {
  const classes = useStyles();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  function handleFirstPageButtonClick(event) {
    onChangePage(event, 0);
  }

  function handleBackButtonClick(event) {
    onChangePage(event, page - 1);
  }

  function handleNextButtonClick(event) {
    onChangePage(event, page + 1);
  }

  function handleLastPageButtonClick(event) {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  }
  return (
    <React.Fragment>
          {/*검색 */}
          <Container  maxWidth="md">   
          <Paper className={classes.searching} >
      {/*    <IconButton className={classes.iconButton} aria-label="Menu">
            <MenuIcon />
          </IconButton> */}
          <InputBase
            className={classes.input}
            placeholder="지역. 직무 등 키워드를 입력해주세요."
            inputProps={{ 'aria-label': '검색' }}
          />
          <IconButton className={classes.iconButton} aria-label="Search">
            <SearchIcon />
          </IconButton>
        {/*  <Divider className={classes.divider} />
          <IconButton color="primary" className={classes.iconButton} aria-label="Directions">
            <DirectionsIcon />
          </IconButton> */}
        </Paper>
       </Container>

           {/*메인 */}
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={6} >
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4} >
                <Card className={classes.card}>           
                  <CardContent className={classes.cardContent}>                        
                    <Typography className={classes.area} variant="h10" gutterBottom>
                      직무 - 경력사항
                    </Typography> 
                    <Typography><p /></Typography>                       
                    <Typography  className={classes.title} gutterBottom variant="h4" component="h2" >
                      기업명
                    </Typography>
                    <Typography><p /></Typography>    
                    <Typography className={classes.tags}  gutterBottom variant="h6" >
                      #1  #2  #3
                    </Typography>
                    <Typography><p /></Typography>    
                    <Typography  className={classes.state}  >
                     진행상태
                    </Typography>
                   
                  </CardContent>
              
                </Card>
              </Grid>
            ))}
            
          </Grid>
          {/*페이징 */}
          <div className={classes.root}>
            <IconButton
              onClick={handleFirstPageButtonClick}
              disabled={page === 0}
              aria-label="First Page"
            >
              {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="Previous Page">
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton
              onClick={handleNextButtonClick}
              disabled={page >= Math.ceil(count / rowsPerPage) - 1}
              aria-label="Next Page"
            >
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton
              onClick={handleLastPageButtonClick}
              disabled={page >= Math.ceil(count / rowsPerPage) - 1}
              aria-label="Last Page"
            >
              {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
          </div>
        </Container>
    

    </React.Fragment>
  );
}