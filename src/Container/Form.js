import { Component } from 'react';
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";

class Form1 extends Component{
    render(){
        return(
            <div>
                <Header />
                <div className="form-pic">
                    <p className="text-center form-contact">CONTACT US</p>
                    <h2 className="text-center"><a href="/">Home</a> - <span style={{color:"whitesmoke"}}>Contact Us</span></h2>
                </div>

                <div className="container" style={{backgroundColor:"#F3F3F3"}}>
                    <h1 className="mt-5 text-center" style={{textShadow:"3px 3px black"}}>OFFICES NEAR YOU.</h1>
                    <div className="row mt-5 form-row">
                        <div className="col-md-6">
                            <div class="card form-card1">
                                <div class="card-body">
                                    <h5 class="card-title" style={{marginTop:"20px"}}>Pakistan</h5>
                                    <p class="card-text form-text" style={{color:"grey"}}>Bungalow No B-13, Block B, Kazimabad, Jinnah Avenue, Karachi
                                    <br/>+(92) 336 357 2754</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div class="card form-card1">
                                <div class="card-body">
                                    <h5 class="card-title" style={{marginTop:"20px"}}>UNITED STATES</h5>
                                    <p class="card-text form-text" style={{color:"grey"}}>539 W.Commerce St, SUITE 3743, Dallas TX, 75208
                                    <br/>+1 (715) 804-8424</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="row mt-5">
                        <div className="col-md-6">
                            <div class="card form-card1">
                                <div class="card-body">
                                    <h5 class="card-title" style={{marginTop:"20px"}}>GERMANY</h5>
                                    <p class="card-text form-text" style={{color:"grey"}}>Bahnhof Straße 70, 09111, Chemnitz, Germany
                                     <br/> +491739030485</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div class="card form-card1">
                                <div class="card-body">
                                    <h5 class="card-title" style={{marginTop:"20px"}}>UNITED ARAB EMIRATES</h5>
                                    <p class="card-text form-text" style={{color:"grey"}}>Suite 713, Warsan Akacia, International City
                                    Dubai, UAE
                                    <br/>+971 52 1724592</p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>



            </div>

        )
    }
}

class Form2 extends Component{
    constructor(props) {
        super(props)
    

    this.state = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      }
      this.handleSubmit=this.handleSubmit.bind(this);
    } 
    
    firstHandler = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    lastHandler = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    emailHandler = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    phoneHandler = (event) => {
        this.setState({
            phone: event.target.value
        })
    }

    messageHandler = (event) => {
        this.setState({
            message: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.firstName} ${this.state.lastName} Your Message Registered Successfully !`)
        console.log(this.state);
        this.setState({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
        })
        event.preventDefault()
    }


    render(){
        return(
         <div>
            <div className="mt-5">
                <form onSubmit={this.handleSubmit}>
                    <h1 className="text-center" style={{textShadow:"3px 3px black", marginTop:"100px"}}>REACH OUT TO US.</h1>
                    <div className="form-bg mt-5">
                        <div className="form-bgcolor" style={{float:"right"}}>
                            <div className="continer-fluid text-center form-input mt-5">
                            <label className="label">First Name: </label><input className="firstName" type="text" value={this.state.firstName} onChange={this.firstHandler} required placeholder="First Name..." /><br/>
                            <label className="label" style={{marginTop:"15px"}}>Last Name: </label><input className="lastName" type="text" value={this.state.lastName} onChange={this.lastHandler} required placeholder="Last Name..." /><br/>
                            <label className="label" style={{marginTop:"15px", marginRight:"50px"}}>Email: </label><input className="email" type="email" value={this.state.email} onChange={this.emailHandler} required placeholder="Email..." /><br/>
                            <label className="label" style={{marginTop:"15px", marginRight:"50px"}}>Phone: </label><input className="phone" type="number" value={this.state.phone} onChange={this.phoneHandler} required placeholder="Phone..." /><br/>
                            <label className="label" style={{marginTop:"15px", marginRight:"20px"}}>Message:</label> <textarea className="message" rows="4" cols="50" type="text" value={this.state.message} onChange={this.messageHandler} required placeholder="Message...">
                            </textarea><br/>
                            <input className="submit" type="submit" value="Submit" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            
        <div>

          </div>
          <Footer/>
        </div>
        )
    }
}

export {Form1, Form2};