import React, {Component} from 'react';
import axios from 'axios';
import{ Link } from 'react-router-dom';

class SignUp extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password1: '',
            username: '',
            firstname: '',
            lastname: '',
            password2: '',
            terms: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value,
          
        });
    }

    handleSubmit(e) {
        e.preventDefault()
        console.log('The form was submitted with the following data:');
        console.log(this.state);
        const data ={
         "username":this.state.username,
          "password1":this.state.password1,
          "password2" :this.state.password2,
          "email":this.state.email,
          "firstname":this.state.firstname,
          "lastname":this.state.lastname,
          "terms":this.state.terms,
        }
        const {password1, password2} =this.state;
        if (password1 !== password2){
          alert("Passwords dont match");
        } else{
       axios.post("http://13.81.46.121:8080/usermanagements/", data)

       .then(response =>{
        console.log(response);
        if(response.status === 201){
        console.log("SignUp successful");
        }
        else{
        console.log(response)
        };
      })
      .catch(error => {
        console.log(error);
      
    });
  }
  
}


    render() {
        return (
    <div className="App">
      <div className="App__Form">
        <div className="FormCenter">
          <h2><center>Sign Up</center></h2>
            <form onSubmit={this.handleSubmit} className="FormFields">
            
              <div className="FormField">
                <label className="FormField__Label" htmlFor="name">firstName</label> 
                <input type="text" id="name" className="FormField__Input" placeholder="Enter your first name" name="firstname" value={this.state.firstname} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="name">lastName</label> 
                <input type="text" id="name" className="FormField__Input" placeholder="Enter your first name" name="lastname" value={this.state.lastname} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="name">Username</label> 
                <input type="text" id="name" className="FormField__Input" placeholder="Enter your first name" name="username" value={this.state.username} onChange={this.handleChange} />
              </div>
              {/* <div className="FormField">
                <label className="FormField__Label" htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" className="FormField__Input" placeholder="Enter your last name" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
              </div> */}
              <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="Password1">Password</label>
                <input type="password" id="Password1" className="FormField__Input" placeholder="Enter your password" name="password1" value={this.state.password1} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="Password2">Confirm Password</label>
                <input type="password" id="Password2" className="FormField__Input" placeholder="Confirm your password" name="password2" value={this.state.password2} onChange={this.handleChange} />
              </div>
              {/* <div className="FormField">
                <label className="FormField__Label" htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" id="confirmPassword" className="FormField__Input" placeholder="Confirm your password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange} />
              </div> */}
        

              <div className="FormField">
                <label className="FormField__CheckboxLabel">
                    <input className="FormField__Checkbox" type="checkbox" name="terms" value={this.state.terms} onChange={this.handleChange} /> I agree all statements in <a href="" className="FormField__TermsLink">terms of service</a>
                </label>
              </div>

              <div className="FormField">
                  <button type="submit" className="FormField__Button mr-20"><Link to="/login">Sign Up</Link></button> 
                  {/* <Link to="/sign-in" className="FormField__Link">I'm already member</Link> */}
              </div>
              <Link to="/login" className="FormField__Link">Already Signed up ? Click here</Link> 
              
            </form>
          </div>
        </div>
      </div>

        );
    }
}

export default SignUp;