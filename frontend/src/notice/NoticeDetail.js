/* import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';


class Notice extends Component{
    constructor(props){
        super(props);
        this.state={            
            title : '',      
            cor_name: '', 
            state : '',
            career : '',
            area :'',              
            tag_location :'',
            tag_attribute :'',
            tag_career :'',  
            arr : [] 
        }
    }
    render(){
        return(<div>
                <div class="cards">
                <ul >   
                    <li  v-for="item in arr" class="cardlist"  >
                    <span class="card"  >   
                    <div class="col-md-4 mb-5" id="card" onClick="goContent(item)">
                        <div class="cardAll" >
                        <div class="card-body">
                            <p class="area">{{item.industry}} - {{item.career}}</p>
                            <br>
                            <p class="card-title" >{{item.offerName}}</p>
                            <br>
                            <p class="tags">#{{item.tag1}}   #{{item.tag2}}    #{{item.tag3}} </p>  
                            </div> 
                            <div class="card-footer">         
                            <p class="card-text">{{item.state}} </p>            
                            </div>                        
                        </div>    
                    </div>
                    </span>
                    </li>
                </ul>   
               
                </div>
            </div>

        )
    }
}  */