import "./footer.component.css";
import doctor from "../../Assets/doctor.jpg"
import { Facebook, Instagram, Linkedin,Twitter, Whatsapp } from "react-bootstrap-icons";
import { Link } from "react-router-dom";



export function FooterComponent(){
    return(
        <div>
            <footer className="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 ">
                                <div className="footer-info container">
                                    <img src={doctor} style={{width:"50px", height:"50px", borderRadius: '40px' }}></img>
                                    <h3 style={{ fontWeight: 'bolder', fontSize: '29px' }} className='mb-4'>Bayanno Diagnostic Center</h3>
                                    <p>
                                        <strong>Phone:</strong>7702286442<br />
                                        <strong>Email:</strong> nayakraju77022@gmail.com<br />
                                        <strong>Address:</strong> Hyderabad<br />
                                        
                                    </p>
                                    <div className="social-links mt-3">
                                        <a href="#" className="twitter" id="facebook"
                                        style={{ color: 'white', borderRadius: '8px' ,fontSize:'24px'}}>
                                        <Twitter /></a> &nbsp;

                                        <a href="#" className="facebook" id="facebook"
                                         style={{color: 'white', borderRadius: '8px' ,fontSize:'24px'}}>
                                        <Facebook /></a>
                                        &nbsp;
                                        <a href="#" className="instagram" id="facebook"
                                         style={{color: 'white', borderRadius: '8px' ,fontSize:'24px'}}>
                                        <Instagram /></a>
                                        &nbsp;

                                        <a href="#" className="google-plus" id="facebook"
                                         style={{color: 'white', borderRadius: '8px' ,fontSize:'24px'}}>
                                        </a>
                                        &nbsp;
                                        <a href="#" className="linkedin" 
                                         style={{color: 'white', borderRadius: '8px' ,fontSize:'24px'}}>
                                        <Linkedin/></a>
                                        <a href="#" className="linkedin" id="what"
                                         style={{color: 'white', borderRadius: '8px' ,fontSize:'24px'}}>
                                        <Whatsapp/></a>
                                    </div>
                                </div>
                            </div>

                           
                            <div className="col-lg-3   mt-5">
                                <h4 style={{ fontWeight: 'bold', fontSize: '25px' }}>Main Menu</h4>
                                <ul className="pt-4">
                                    <Link to="/homecomponent"><li className="pt-2">Home</li></Link>
                                    <Link to="/doctor"><li className="pt-2">Doctors</li></Link>
                                    <Link to="/appointment"><li className="pt-2">Appointment</li></Link>
                                    <Link to="/department"><li className="pt-2">Department</li></Link>
                                    <Link to="/about"><li className="pt-2">About Us </li></Link>
                                    <Link to="/blog"><li className="pt-2">Blog</li></Link>
                                </ul>
                            </div>
                            
                            <div className="col-lg-3   mt-5 ">
                                <h4 style={{ fontWeight: 'bold', fontSize: '25px' }}>Get Help</h4>
                                <ul className="pt-4">
                                    <Link to="/contact"><li className="pt-3">Contact</li></Link>
                                    <Link><li className="pt-3">Terms of service</li></Link> 
                                    <Link><li className="pt-3">Privacy policy</li> </Link>
                                </ul>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}








