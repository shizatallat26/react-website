import { Component } from 'react';
import { Link } from "react-router-dom";


class Header extends Component{
    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light">
                <img src = "https://shayasdigitalsolutions.com/wp-content/uploads/2021/03/cropped-SDS-LOGO-HORIZONTAL-white.png" className="logo" style={{width:"200px", height:"100px"}} />
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                    <a className="nav-link text-white" id="item1" href="/">Home</a>
                    {/* <Link to="/">Home</Link> */}
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-white" id="item2" href="/Services">Services</a>
                    {/* <link to="/Services">Services</link> */}
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-white" id="item3" href="/Aboutus">About</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-white" id="item4" href="/Form">Contact</a>
                    </li>
                </ul>
                </div>

                <div className="text-white call">
                    <h5>Call Anytime</h5>
                    <h5>+0900-786-01</h5>
                </div>
             </nav>
             </div>

        )
    }
}

export default Header;