import { Component } from 'react';

class Footer extends Component{
    render(){
      return(
        <div>
          <div className="main-footer" style={{height:"330px"}}>
            <div className="container">
                <div className="row">
                    {/* Column 1 */}
                    <div className="col-lg-4 mt-5">
                        <div>
                        <img src = "https://shayasdigitalsolutions.com/wp-content/uploads/2021/03/cropped-SDS-LOGO-HORIZONTAL-white.png" className="logo" style={{width:"150px", height:"80px"}} />
                            <p style={{marginLeft: "50px", marginTop:"10px"}}>Software House is a dynamic software house that enables you to 
                                engage your customer at the right time through the right platform.</p>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className="col-lg-4 mt-5">
                        <div>
                            <h4 className="text-center">Explore</h4>
                            <ul className="list-unstyled" style={{marginTop:"30px"}}>
                                <li className="text-center"><a href="/Services">Services</a></li>
                                <li className="text-center"><a href="/Form">Contact</a></li>
                                <li className="text-center"><a href="/Aboutus">About</a></li>
                                <li className="text-center"><a href="/">Home</a></li>
                            </ul>
                        </div>
                    </div>


                    {/* Column 3 */}
                    <div className="col-lg-4 mt-5">
                        <div>
                            <h4 className="text-center">Head Office</h4>
                            <ul className="list-unstyled" style={{marginTop:"30px"}}>
                                <p className="text-center"> Sub office Lahore: Nazeer Park ,Ghazi Road
                                 Defence Lahore, Pakistan.</p>
                                <p className="text-center">0900-786-01</p>
                                <p className="text-center">info@softwarehouse.com</p>
                            </ul>
                        </div>
                    </div>

                    <div>
                    <hr style={{backgroundColor:"black", width: "1000px", height: "2px", marginLeft:"100px",}} />
                    <p style={{marginLeft: "500px"}}>© Copyright 2021 by softwarehouse.com</p>
                    </div>

                </div>
            </div>
          </div>
        </div>
      )
    }
  }
export default Footer;