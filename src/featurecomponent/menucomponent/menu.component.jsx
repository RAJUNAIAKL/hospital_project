import './menu.component.css';
import { Link } from "react-router-dom";
import doctor from "../../Assets/doctor.jpg"

export function Menucomponent() {
    return (
        <div>
             <header>
                <div className="header">
                    <div className="container">
                        <div className="navbar">
                            <div className="logo">
                                <img src={doctor} style={{width:"60px", height:"60px"}}></img> &nbsp; <span>Bayanno Diagnostic Center</span>
                            </div>
                            <nav>
                                <ol className="menu">
                                    <Link to="/homecomponent" style={{color:""}}>
                                        <li>HOME</li> 
                                    </Link>
                                    <Link to="/department">
                                        <li>DEPARTMENT</li>
                                    </Link>
                                    <Link to="/doctor"><li>DOCTOR</li> </Link>
                                    <Link to="/about"><li>ABOUT</li> </Link>
                                    <Link to="/appointment"><li>APPOINTMENT</li> </Link>
                                    <Link to="/blog"><li>BLOG</li></Link>
                                    <Link to="/contact"><li>CONTACT</li></Link>
                                    <Link to="/login"><li>LOGIN</li></Link>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </div>
            


       
        

    )
}









