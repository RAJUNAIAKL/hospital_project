import './doctorh.compopnent.css';
import background from "../../Assets/background.jpg";
import user from "../../Assets/user.jpg";
import { Link } from "react-router-dom";
import {Menucomponent} from "../menucomponent/menu.component";
import {FooterComponent} from "../../featurecomponent/footercomponent/footer.component";

export function DooctorsComponent() {
    return (
        <div>
            <Menucomponent></Menucomponent>
             {/*--------banner title---------- */}
             <section className='section-banner'>
                <img src={background} style={{height:"60vh", width:"100%"}}></img>
                    <div className='contact-banner'>
                        <h4>DOCTOR</h4>
                        <li><a href="/homecomponent">Home</a>&nbsp;/&nbsp;<span>Doctor</span></li>
                    </div>
            </section>

            {/*---------------Our Awesome Doctors------------ */}

                <section className="slice sct-color-1 relative" id="doctor">
                    <div className="container" id="heart">
                        <div className="row">
                            <div className="col-lg-4" id="doctors-details">
                                 <p className="doctors-text">DOCTORS OF</p> 
                                 <ul className="doctors-text"> 
                                    <li>All Departments</li> <hr></hr>
                                    <li>Anesthetics</li>   <hr></hr>
                                    <li>Cardiology</li>  <hr></hr>
                                    <li>Gastroenterology</li>  <hr></hr>
                                 </ul>  
                            </div> &nbsp; &nbsp; 
                            <div className="row-wrapper col-lg-8">
                                <div className="row department-doctor-list">
                                    <div className="col-lg-3 col-md-6 col-sm-12 col-12" >
                                        <div className="block block--style-4 list doctor-list">
                                            <div className="block-image">
                                                <div className="view view-fifth">
                                                    <img src={user} style={{ height:"50vh"}}></img>
                                                </div>
                                            </div>
                                            <div className="block-content w-100">
                                                <div className="block-body py-2 px-0">
                                                    <small>Cardiology</small>
                                                        <h6 className="">
                                                            <a href="#" className="btn-st-trigger" data-effect="st-effect-1" id="https://demo.creativeitem.com/bayanno/home/get_doctor_details/1">
                                                                Micheal Pewd             
                                                            </a>
                                                        </h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>  &#160; &#160; &nbsp; &nbsp; &nbsp; &nbsp; 
                                            &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                            &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
                                    <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                                        <div className="block block--style-4 list doctor-list">
                                            <div className="block-image">
                                                <div className="view view-fifth" id="doctor-img">
                                                <img src={user} style={{ height:"50vh"}}></img>
                                                </div>
                                            </div>
                                             <div className="block-content w-100">
                                                <div className="block-body py-2 px-0">
                                                    <small>Anesthetics</small>
                                                    <h6 className="heading heading-5 strong-500">
                                                        <a href="#" className="btn-st-trigger" data-effect="st-effect-1" id="https://demo.creativeitem.com/bayanno/home/get_doctor_details/2">
                                                             Erich Mcbride                                   
                                                        </a>
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="doctor-book">
                        <div className="row">
                            <div className="col-lg-6">
                                <h4>Get In Touch With Our Specialists</h4>
                            </div>
                            <div className="col-lg-6">
                                <Link to="/appointment"><button className="btn btn-primary">BOOK APPOINTMENT</button></Link>
                            </div>
                        </div>
                    </div>
                </section>
                <FooterComponent></FooterComponent>
        </div>

    )
}