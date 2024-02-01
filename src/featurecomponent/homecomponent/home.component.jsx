import "./home.component.css";
import slider1 from "../../Assets/slider1.jpg";
import slider2 from "../../Assets/slider2.jpg";
import slider3 from "../../Assets/slider3.jpg";
import imgone from "../../Assets/imgone.png";
import deptment from "../../Assets/deptment.jpg";
import Gastroenterology from "../../Assets/Gastroenterology.png";
import deptmentone from "../../Assets/deptmentone.jpg";
import user from "../../Assets/user.jpg";
import { AlarmFill, Calendar2DateFill, TelephoneFill } from "react-bootstrap-icons";
import {Menucomponent} from "../menucomponent/menu.component";
import {FooterComponent} from "../../featurecomponent/footercomponent/footer.component";



export function HomeComponent(){
    return(
        <div>
        <div className="home-responce">
           <Menucomponent></Menucomponent>
                <div id="carouselExampleCaptions" className="carousel slide" >
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    </div>
                    <div className="carousel-inner" >
                        <div className="carousel-item active">
                            <img src={slider1} className="d-block imgs" align='center' style={{ width: '100%', height:'80vh' }} alt="..."></img>
                        </div>
                        
                        <div className="carousel-item">
                            <img src={slider2} className="d-block imgs" align='center'style={{ width: '100%', height:'80vh' }} alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src={slider1} className="d-block imgs" align='center' style={{ width: '100%', height:'80vh' }}alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src={slider3} className="d-block imgs" align='center' style={{ width: '100%', height:'80vh' }} alt="..."></img>
                           
                        </div> 
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="Next">
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>  &nbsp; &nbsp; &nbsp;

                 {/*---------------emergency------------ */}


                <section className="home-top-widgets" id="contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4" id="">
                                <div className="home-widget widget-1" id="phone">
                                    <i className="icon"><TelephoneFill></TelephoneFill></i> 
                                    <h4 className="time">Emergency Contact</h4>
                                    <h3 className="pt-5">1-800-400-7400</h3>
                                </div>
                            </div>
                            <div className="col-lg-4" id="">
                                <div className="home-widget widget-2" id="phone">
                                    <i className="icon"><Calendar2DateFill></Calendar2DateFill></i> 
                                    <h4 className="time">Doctor AppointmeNt</h4>
                                    <a href="/appointment" className="btn">Book An Appointment</a>
                                </div>
                            </div>
                            <div className="col-lg-4" id="">
                                <div className="home-widget widget-3" id="phone">
                                    <i className="icon"><AlarmFill></AlarmFill></i> 
                                    <h4 className="time">Opening Hours</h4>
                                        <ul className="pt-4">
                                            <li className="clearfix">Monday - Friday &nbsp; &nbsp; &nbsp; &nbsp;
                                                <span className="float-right">10.00-21.00</span>
                                            </li> <hr></hr>
                                            <li className="clearfix" id="hours">Saturday  &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;  &nbsp; 
                                                <span className="float-right">10.00-18.00</span>
                                            </li> <hr></hr>
                                            <li className="clearfix" id="hours">Sunday  &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  
                                                <span className="float-right">11.00-17.00</span>
                                            </li> 
                                        </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                 {/*---------------welcome banner------------ */}


                <section className="slice sct-color-2 pb-0" >
                    <div className="container" id="welcome">
                        <div className="row align-items-md-center">
                            <div className="col col-md-6 col-sm-12 col-12" id="">
                                <img src={imgone} style={{width:"100%"}}></img>
                            </div>
                            <div className="col col-md-6 col-sm-12 col-12">
                                <div className="px-3 py-3 text-center text-lg-left">
                                    <h3 className="heading heading-3 strong-500" id="mt-4">
                                        Welcome To Bayanno Diagnostic Center                
                                    </h3>
                                    <p className="mt-4">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Ut enim ad minim veniam, 
                                        quis nostrud exercitation ullamco laboris quisque adipiscing lobortis aptent cras et justo. 
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Ut enim ad minim veniam, 
                                        quis nostrud exercitation ullamco laboris quisque adipiscing lobortis aptent cras et justo.         
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                  {/*---------------world class------------ */}


                <section className="slice slice--arrow bg-base-1" id="world">
                    <div className="sct-inner container">
                        <div className="section-title section-title-inverse section-title--style-1 text-center">
                            <h3 className="section-title-inner">
                                <span className="span">Our World classname Services</span>
                            </h3>
                                <span className="section-title-delimiter clearfix d-none"></span>
                        </div>
                        <div className="fluid-paragraph fluid-paragraph-sm text-center " id="span">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Ut enim ad minim veniam.        </div>
                        </div>
                </section>

                {/*---------------Departments------------ */}

                <section>
                    <div class="testimonial">
                        <div class="small-container">
                            <div class="row">
                                <h3>Departments</h3>
                                <div class="col-lg-3">
                                        <img src={deptment} style={{width:"50%"}}></img>
                                        <h3>Anesthetics</h3>
                                </div>
                                <div class="col-lg-3">
                                        <img src={deptmentone} style={{width:"50%"}} ></img>
                                        <h3>Cardiology</h3>
                                </div>
                                <div class="col-lg-3">
                                        <img src={Gastroenterology} style={{width:"40%", height:"30vh"}}></img>
                                        <h3>Gastroenterology</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/*---------------brands------------ */}

                {/* <section>
                    <div className="brands">
                        <div className="small-container">
                            <div className="row">
                                <div className="col-5">
                                    <img src={amazon}></img>
                                </div>
                                <div className="col-5 pt-2">
                                    <img src={oppo} ></img>
                                </div>
                                <div className="col-5 pt-2">
                                    <img src={flipkart} ></img>
                                </div>
                                <div className="col-5">
                                    <img src={paytm} ></img>
                                </div>
                                <div className="col-5 pt-4">
                                    <img src={philips}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

                {/*---------------Our Awesome Doctors------------ */}

                
                <section className="slice sct-color-1 relative" id="doctor">
                    <div className="container" id="heart">
                        <div className="section-title section-title--style-1 text-center mb-4">
                            <h3 className="section-title-inner text-normal">
                                <span>Our Awesome Doctors</span>
                            </h3>
                                <span className="section-title-delimiter clearfix d-none"></span>
                        </div>
                                <span className="clearfix"></span>
                                <span className="space-xs-xl"></span>
                            <div className="row-wrapper">
                                <div className="row department-doctor-list">
                                    <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                                        <div className="block block--style-4 list doctor-list">
                                            <div className="block-image">
                                                <div className="view view-fifth">
                                                    <img src={user} style={{width:"100%", height:"50vh"}}></img>
                                                </div>
                                            </div>
                                            <div className="block-content w-100">
                                                <div className="block-body py-2 px-0">
                                                    <small>Cardiology</small>
                                                        <h3 className="heading heading-5 strong-500">
                                                            <a href="#" className="btn-st-trigger" data-effect="st-effect-1" id="https://demo.creativeitem.com/bayanno/home/get_doctor_details/1">
                                                                Micheal Pewd             
                                                            </a>
                                                        </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                                        <div className="block block--style-4 list doctor-list">
                                            <div className="block-image">
                                                <div className="view view-fifth">
                                                <img src={user} style={{width:"100%", height:"50vh"}}></img>
                                                </div>
                                            </div>
                                             <div className="block-content w-100">
                                                <div className="block-body py-2 px-0">
                                                    <small>Anesthetics</small>
                                                    <h3 className="heading heading-5 strong-500">
                                                        <a href="#" className="btn-st-trigger" data-effect="st-effect-1" id="https://demo.creativeitem.com/bayanno/home/get_doctor_details/2">
                                                             Erich Mcbride                                   
                                                        </a>
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                                        <div className="block block--style-4 list doctor-list">
                                            <div className="block-image">
                                                <div className="view view-fifth">
                                                <img src={user} style={{width:"100%", height:"50vh"}}></img>
                                                </div>
                                            </div>
                                             <div className="block-content w-100">
                                                <div className="block-body py-2 px-0">
                                                    <small>Anesthetics</small>
                                                    <h3 className="heading heading-5 strong-500">
                                                        <a href="#" className="btn-st-trigger" data-effect="st-effect-1" id="https://demo.creativeitem.com/bayanno/home/get_doctor_details/2">
                                                             Erich Mcbride                                   
                                                        </a>
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                                        <div className="block block--style-4 list doctor-list">
                                            <div className="block-image">
                                                <div className="view view-fifth">
                                                <img src={user} style={{width:"100%", height:"50vh"}}></img>
                                                </div>
                                            </div>
                                             <div className="block-content w-100">
                                                <div className="block-body py-2 px-0">
                                                    <small>Anesthetics</small>
                                                    <h3 className="heading heading-5 strong-500">
                                                        <a href="#" className="btn-st-trigger" data-effect="st-effect-1" id="https://demo.creativeitem.com/bayanno/home/get_doctor_details/2">
                                                             Erich Mcbride                                   
                                                        </a>
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </section>


                 {/*---------------appointement ------------ */}
                
                <section className="slice sct-color-2 b-xs-top b-xs-bottom" id="appoint">
                    <div className="container">
                        <div className="text-center">
                            <div className="section-title section-title--style-1 text-center mb-4">
                                <h3 className="section-title-inner text-normal">
                                        <span className="touch mt-8">Get In Touch With Our Professionals</span>
                                </h3>
                                        <span className="section-title-delimiter clearfix d-none"></span>
                            </div>
                                        <span className="clearfix"></span>
                            <div className="mt-1">
                                <a href="/appointment" className="btn btn-styled  btn-base-1">
                                    <button className="btn btn-primary">Make An Appointment</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </section> 

                <FooterComponent></FooterComponent> 
         
        
           </div>
        </div>
    )
}