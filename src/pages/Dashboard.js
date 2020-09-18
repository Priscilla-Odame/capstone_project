import React, { Component } from 'react';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import PowerSettingsNewRoundedIcon from '@material-ui/icons/PowerSettingsNewRounded';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';


class dashboard extends Component{
    constructor(props){
        super(props);
        
    }
   
    
    render(){
        var imgStyle={
            width: "100px",
            height :"30px",
          }
         
         
        return(
            <div className="db">
                <div className="dashbar">
                    
                    <div className="logo"><center><img className="sty" style={imgStyle}  src={require("../assets/images/icon3.png")}/></center>
                    </div>
                    <p className="username" >{this.props.username}| User <AccountCircleRoundedIcon/></p>
                </div>
                <div className="navigate">
                    <a className="dash_icon1" href="/"><HomeOutlinedIcon/>Home</a> 
                    
                    <a className="dash_icon2" href="/events"><BookmarkBorderIcon/>Bookings</a>           
                    <a className="dash_icon2" href="/events"><EventAvailableIcon/>Bookings</a>  
                    <a className="dash_icon3" href="/"><SettingsOutlinedIcon/>Settings</a>
                    
                    <a className="dash_icon4" href="/"><HelpOutlineOutlinedIcon/>Help</a>
                    <a className="dash_icon2"><ThumbUpOutlinedIcon/>Promote
                    
                    </a>
                    <ul class="dash_container">
                        <a href="/"><FacebookIcon/>Facebook</a>
                        <a href="/"><InstagramIcon/>Instagram</a>
                        <a href="/"><TwitterIcon/>Twitter</a>
                    </ul>  
                    <a className="dash_icon3" href="/login"><PowerSettingsNewRoundedIcon/>SignOut</a>
                
            </div>
                
            </div>
            
        )
    }
}


export default dashboard