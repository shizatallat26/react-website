import { Component } from 'react';
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";

class Services extends Component{
    contactMe = () => {
        this.props.history.push("/Form");
    }
    render(){
        return(
            <div>
                <Header />
                <div className="form-pic">
                    <p className="text-center form-contact">ALL SERVICES</p>
                    <h2 className="text-center"><a href="/">Home</a> - <span style={{color:"whitesmoke"}}>All Services</span></h2>
                </div>

                <div className="mt-5">
                    <div className="service-image">
                        <div>
                            <h1 className="text-white text-center pt-5  ">Services We Offer</h1>
                            <marquee className="text-white pt-5 service-text" behavior="scroll" direction="left" scrollamount="15">
                            We give extreme importance to <span style={{color:"#6495ED"}}>Design</span> and focus on finding the perfect balance
                            between Design and <span style={{color:"#6495ED"}}>Functionality</span>, to maximize the <span style={{color:"#6495ED"}}>User Experience</span>, which deliver
                            engaging and smooth user experiences <span style={{color:"#6495ED"}}>across all devices</span>.
                            </marquee>
                        </div>
                    </div>
                </div>


            <div className="container">
                <div className="row" style={{marginTop:"80px"}}>
                    <div className="col-md-8">
                        <h2 className="mt-5">Graphic Design</h2>
                        <p style={{textAlign:"justify", marginTop:"20px"}}>Our creative team is consist of highly talented Graphic and User Interface
                            Designers, who make sure that the design look upto current standards and portray
                            the image of the company in a consistent manner. Plus information is structured
                            in a way that it assists user in finding the information quickly and easily. 
                            Graphic Design is all about catching an eye and making sure that it communicate
                            the clear message or information.</p>
                    </div>

                    <div className="col-md-4">
                        <img src="http://www.hwtech.org/wp-content/uploads/2015/10/ui-design-img.jpg" style={{width:"400px", height:"300px"}}/>
                    </div>
                </div>
                <hr className="mt-5"/>
            </div> 

            <div className="container">
                <div className="row" style={{marginTop:"80px"}}>
                    
                <div className="col-md-4">
                        <img src="http://www.hwtech.org/wp-content/uploads/2015/10/web-development-start-point-img.png" style={{width:"400px", height:"300px"}}/>
                 </div>

                <div className="col-md-8">
                        <h2 className="mt-5">Web Development</h2>
                        <p style={{textAlign:"justify", marginTop:"20px"}}>Our web development team consists
                        of many hardcore coders and testers. they make sure that the end product is upto
                        standards and offer all the functionalities which client desired or agreed upon, plus
                        additional features which they think is going to be beneficial for the clients because
                        they tabs on current technologies and trends.</p>
                    </div>
                </div>
                <hr className="mt-5"/>
            </div> 

            <div className="container">
                <div className="row" style={{marginTop:"80px"}}>
                    <div className="col-md-8">
                        <h2 className="mt-5">Online Marketing</h2>
                        <p style={{textAlign:"justify", marginTop:"20px"}}>Our online marketing experts and
                        social media team knows that to run an effective online campaign you have to build a
                        connection with the audience whether you do that by story telling or letting them
                        know the benefits of the product you are promoting. To stay ahead in this competitive
                        market we encourage our clients to go through trail and error phase to find a perfect
                        combination for promotion strategy that works for them in achieving long term goals.</p>
                    </div>

                    <div className="col-md-4">
                        <img src="http://www.hwtech.org/wp-content/uploads/2015/09/lead-generation.jpg" style={{width:"400px", height:"300px"}}/>
                    </div>
                </div>
                <hr className="mt-5"/>
            </div> 

            <div className="container">
                <div className="row" style={{marginTop:"80px"}}>
                    
                <div className="col-md-4">
                        <img src="http://www.hwtech.org/wp-content/uploads/2015/09/maintenance-and-support-img.jpg" style={{width:"400px", height:"300px"}}/>
                 </div>

                <div className="col-md-8">
                        <h2 className="mt-5">SEO Service</h2>
                        <p style={{textAlign:"justify", marginTop:"20px"}}>After sales service is what sets
                        us apart from our competitors because we believe, success is not if you have many
                        clients, success is when you win the confidence of your client and to gain their
                        confidence you have to serve them until they are satisfied with the solution you
                        created.</p>
                        <hr/>
                        <p>Note: We also offer dedicated team members if you wish to outsource the development
                            completely and having a virtual development department in your company which is
                            cost effective and better then hiring a full-time employees and setting up a new 
                            department.</p>
                        <hr/>    
                    </div>
                </div>
                <hr className="mt-5"/>
            </div> 

            <div>
            <div className="grey-image">
                    <h1 style={{paddingTop: "110px", paddingLeft: "50px"}}>WE’RE READY TO BRING BIGGER <br/>& STRONGER PROJECTS STARTED!</h1>
                    <button className="btn-contact" onClick={this.contactMe}>CONTACT WITH US</button>
            </div>
        </div>


        <Footer />

            </div>
        )
    }
}

export default Services;