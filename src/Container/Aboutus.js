import { Component } from 'react';
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";

class AboutUs extends Component{
    render(){
        return(
            <div>
                <Header />
                <div className="form-pic">
                    <p className="text-center form-contact">ABOUT US</p>
                    <h2 className="text-center"><a href="/">Home</a> - <span style={{color:"whitesmoke"}}>About Us</span></h2>
                </div>

                <div className="pattern-image">
                <div className="pattern-image-text">
                <h1>WE’RE THE BEST AGENCY IN DOWNTOWN</h1>
                <br />
                <p id="pattern-image-text">We are committed to providing our customers with exceptional service
                    <br /> while offering our employees the best training.</p>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <img src="https://www.logocent.com/assets/images/bg-images/About%20Us%20Page.png" style={{width:"600px",height:"500px",float:"right", marginTop:"50px"}}/>
                    </div>

                    <div className="col-md-6">
                        <h1 style={{fontSize:"50px",marginTop:"80px"}}>Bring Your Development Imagination to Life!</h1>
                        <h5 className="fw-bold">Get your brand noticed at the - First Sight.</h5>
                        <p>
                            Each brain is a battleground, and nobody understands this idea better<br/> than us.
                            Through long periods of encounters with clients, developers, and<br/> graphic designers,
                            we've assembled a group of capable individuals who<br/> simply love inventive,
                            illustrative, and expertly designed logos
                        </p>

                        <p style={{marginTop:"20px"}}>
                            Software House has impressive experience within the field of logo design,<br/> marketing
                            activation, and software & web development. It all begun with<br/> development. Yet,
                            presently our services include each digital service one<br/> can consider.
                        </p>    

                        <p style={{marginTop:"20px"}}>
                            Our organization plans a-z Digital Solutions for Businesses across<br/> Numerous
                            Industries such as Logo Designing, Marketing Activation, Search<br/> Engine Optimization
                            (SEO), and Web & Software development.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="about-image" style={{marginTop:"70px"}}>
                <marquee width="60%" direction="up" height="500px">
                    <h1 className="fw-bold text-white" style={{fontSize:"60px"}}>IN AN EVER-CHANGING,
                    EVOLUTIONARY BUSINESS WORLD OF TODAY,<span style={{color:"#880808"}}> HAVE A BETTER
                    INSIGHT FOR THE REPRESENTATION OF YOUR HARD WORK, TO ENSURE THAT THE COMPANY’S MOTIVES
                    ARE DISPLAYED AT BEST.</span></h1>
                    </marquee>
                </div>
            </div>
            <Footer/>

</div>
               
        )
    }
}

export default AboutUs;