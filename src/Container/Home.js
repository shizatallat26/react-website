import { Component } from 'react';
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";

class Home extends Component{
    contactMe = () => {
        this.props.history.push("/Form");
    }
    render(){
        return(
        <div>
        <div>
            <Header />
            <div className="slider-image">
                <div className="inner">
                    {/* <img src = "https://projectpeople.pl/wp-content/uploads/2019/08/jak-wybrac-dobry-software-house-1-1024x684.png" style={{width:"1583px"}}/> */}
                    <h2>WELCOME TO THE SOFTWARE HOUSE</h2>
                    <h3>We shape the perfect solutions</h3>
                </div>
                    <div id="inner1">
                        <h4 className="highlight">SOFTWARE HOUSE IS A DYNAMIC SOFTWARE HOUSE THAT ENABLES YOU TO ENGAGE YOUR
                             CUSTOMER AT THE RIGHT TIME THROUGH THE RIGHT PLATFORM.
                        <br/><br/>
                        No worries if you don’t know how to use digital technologies because we are here to create new or modify
                        existing business processes, culture, and customer experiences to meet changing business and market requirements.
                        Software House is a platform for serious software developers who want to grow their technical and
                        professional skills. We believe that one trait of good software developers is their curiosity and 
                        hunger for knowledge. Therefore they keep up-to-date with the latest trends and developments.
                        </h4>
                    </div>
            </div>

            <div className="pattern-image">
                <div className="pattern-image-text">
                <h1>WE’RE THE BEST AGENCY IN DOWNTOWN</h1>
                <br />
                <p id="pattern-image-text">We are committed to providing our customers with exceptional service
                    <br /> while offering our employees the best training.</p>
                </div>
            </div>

            <div >
                <div className="text-center mt-5 text-secondary">
                    <h1>EXPERIENCE US</h1>
                </div>

                <div className="mt-5 experience">
                    <div className="red-image">
                        <div className="expereince-text">
                            <h2 style={{paddingLeft:"25px", marginBottom:"20px", color:"whitesmoke"}}>BEST DESIGN AGENCY SOLUTIONS.</h2>
                        </div>
                     </div>
                </div>
            </div>
            </div>

        <div>
            <div className="bg-secondary">
                <div className="row mt-5">
                    <div className="col-md-6">
                        <img src="http://layerdrops.com/linoorwp/wp-content/uploads/2021/01/featured-image-6.jpg" style={{width: "800px", height: "500px"}}/>
                    </div>

                    <div className="col-md-6 fs-5 text-white">
                        <p style={{marginTop:"90px", marginLeft:"40px"}}>IN AN EVER-CHANGING, EVOLUTIONARY BUSINESS WORLD OF TODAY, HAVE A BETTER INSIGHT FOR
                            THE REPRESENTATION OF YOUR HARD WORK, TO ENSURE THAT THE COMPANY’S MOTIVES ARE
                            DISPLAYED AT BEST.</p>
                        <p>
                        <ul style={{marginTop:"50px", marginLeft: "40px"}}>
                            <li>Social Media</li>
                            <li>Campaign Design</li>
                            <li>Content Marketing</li>
                            <li>Technology Sevices</li>
                            <li>Marketing Activations</li>
                            <li>Search Engine Optimization (SEO)</li>
                        </ul>
                        </p>
                    </div>
                </div>
            </div>
        </div>


        <div>
            <div className="grey-image">
                    <h1 style={{paddingTop: "110px", paddingLeft: "50px"}}>LET'S GET YOUR PROJECT <br /> STARTED!</h1>
                    <button className="btn-contact" onClick={this.contactMe}>CONTACT WITH US</button>
            </div>
        </div>

        <Footer />
        

        </div>
        
        )
    }
}

export default Home;
