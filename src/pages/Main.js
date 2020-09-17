import React, { Component } from 'react';
import { Row, Col, Label, Form, Input, FormGroup } from 'reactstrap'
import { Link } from 'react-router-dom';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import CameraOutlinedIcon from '@material-ui/icons/CameraOutlined';
import BuildOutlinedIcon from '@material-ui/icons/BuildOutlined';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import CopyrightIcon from '@material-ui/icons/Copyright';

class Main extends Component{
    constructor(props){
        super(props)
    }

  render(){
    var imgStyle={
      width: "100px",
      height :"30px",
    },
    ingStyle = {
      width: "100%",
      height:"600px",
    }
    
   return(
    <div className="icons">
      <div className="logo"><center><img className="sty" style={imgStyle}  src={require("../assets/images/icon3.png")}/></center>
      </div>
      <div class="navbar">
        <Link to="/"><i class="fa fa-fw fa-home"></i> Home</Link>
        <Link to="/" ><i class="fa fa-fw fa-calendar"></i> Events</Link>
        <Link to="/login"><i class="fa fa-fw fa-user"></i> Login</Link>
        <Link to="/signup"><i class="fa fa-fw fa-sign-in"></i> SignUp</Link>
      </div>  
      <div>
        <img style={ingStyle}src= {require("../assets/images/banner.jpg")} />
        <div >
          <div className="centered">
            <center>EXPLORE THE FUN
            <p className="paragraph">Discover awesome events around you! And not only you!! Get ready for an awesome ride!!</p></center>
          </div>
          <div>
          <Form className="fon">
            <Row form>
              <Col md={4}>
                <FormGroup>
                  <Label sm="3"><h6>Event</h6></Label>
                  <Input type="text" placeholder="search event"/>
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label sm="3"><h6>When</h6></Label>
                  <Input type="date"placeholder="DD/MM/YY"/>
                </FormGroup>
              </Col>
              <Col md={4}>
               <FormGroup>
                  <Label sm="3"><h6><center>where</center></h6></Label>
                  <Input type="text" placeholder="search a location"/>
                </FormGroup>  
             </Col>
             <button class="btn"><center>show me fun!</center></button>
            </Row>
          </Form>
          </div>
        </div>
      </div>
      <div className="ne">
        <div className="first"><center>
          <h3 className="upcoming">Upcoming Events</h3>  
          <p>A mashup of the words “blob” and “architecture,” blobitecture is the name for the architectural style of buildings designed with totally unique, organic forms, often</p></center>
          <div className="square">
            <div className="sq1">
              <center>
              <WorkOutlineOutlinedIcon color="secondary" style={{ fontSize: 60}}/>
              <h3>Event Launch/Logistics</h3>
              <p>At eripuit signiferumque sea, vel ad mucius molestie, cu labitur iuvaret vulputate sed.</p>
              </center>
              </div>
                <div className="sq2">
                  <center>
                    <CameraOutlinedIcon color="secondary" style={{ fontSize: 60}} />
                    <h3>Customer Satisfaction</h3>
                    <p>At eripuit signiferumque sea, vel ad mucius molestie, cu labitur iuvaret vulputate sed.</p>
                  </center>
                </div>
                <div className="sq3">
                  <center>
                    <BuildOutlinedIcon color="secondary" style={{ fontSize: 60}}/>
                    <h3>Marketing/Customer Retention</h3>
                    <p>At eripuit signiferumque sea, vel ad mucius molestie, cu labitur iuvaret vulputate sed.</p>
                  </center>
                </div>
          </div>
          <div >
          <div className="abt1">
          <h4 className="abt">About Us</h4>
          <p>An award-winning and nationally-recognized event design and production company .this is simply amazing. Whether you are planning a two-day virtual conference, a fundraising gala or the social event of the season, The Event Company will create an unforgettable experience for you and your guests. Etiam dictum porttitor malesuada. In justo massa, venenatis eu laoreet vel, pellentesque non ligula. Nulla laoreet ut eros id maximus. Quisque odio orci, vulputate varius rutrum ut, elementum id sapien.Cras elementum nec quam ut molestie. Donec eu nibh sem. Praesent quis congue justo, pharetra mollis ipsum. Sed scelerisque nunc eu finibus pellentesque. Etiam non eros ev x. Maecenas eu faucibus lectus. v </p>
          </div>
          <div className="abt1">
          <h4 className="abt">Enjoy All Benefits</h4>
          <p>An award-winning and nationally-recognized event design and production company .this is simply amazing. Whether you are planning a two-day virtual conference, a fundraising gala or the social event of the season, The Event Company will create an unforgettable experience for you and your guests. Etiam dictum porttitor malesuada. In justo massa, venenatis eu laoreet vel, pellentesque non ligula. Nulla laoreet ut eros id maximus. Quisque odio orci, vulputate varius rutrum ut, elementum id sapien.Cras elementum nec quam ut molestie. Donec eu nibh sem. Praesent quis congue justo, pharetra mollis ipsum. Sed scelerisque nunc eu finibus pellentesque. Etiam non eros ev x. Maecenas eu faucibus lectus. v </p>
          </div>
        </div>
        </div>
        <div className="foot">
          <div className="contact1">
           <div className="sq4">
             <h3>Contact Us</h3>
             <p>An award-winning and nationally-recognized event design and production company Etiam dictum porttitor malesuada. In justo massa, venenatis eu laoreet vel, pellentesque non ligula. Nulla laoreet ut eros id maximus. Quisque odio orci, vulputate varius rutrum ut, elementum id sapien.Cras elementum nec quam ut molestie. Donec eu nibh sem. Praesent quis congue justo, pharetra mollis ipsum. Sed scelerisque nunc eu finibus pellentesque. Etiam non eros ev x. Maecenas eu faucibus lectus.</p>
           </div>
           <div className="sq5">
             <h3>Find out More</h3>
             <p>An award-winning and nationally-recognized event design and production company Etiam dictum porttitor malesuada. In justo massa, venenatis eu laoreet vel, pellentesque non ligula. Nulla laoreet ut eros id maximus. Quisque odio orci, vulputate varius rutrum ut, elementum id sapien.Cras elementum nec quam ut molestie. Donec eu nibh sem. Praesent quis congue justo, pharetra mollis ipsum. Sed scelerisque nunc eu finibus pellentesque. Etiam non eros ev x. Maecenas eu faucibus lectus.</p>
           </div>
            <div className="bottom_icons">
              <div className="icn1">
                <p>
                  <CopyrightIcon/>cpyright 2020</p>
              </div>
              <div className="icn2">
              <center>
                <FacebookIcon/>
                <TwitterIcon/>
                <InstagramIcon/>
              </center>
              </div>
              <div className="icn3">
                <p>Privacy Policy |Terms of Service</p>
              </div>
             

            </div>       
          </div>
        </div>
      </div>
    </div>
  );}   
}

export default Main;