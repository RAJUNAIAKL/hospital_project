import "./about.component.css";
import background from "../../Assets/background.jpg";
import { Link } from "react-router-dom";
import {Menucomponent} from "../menucomponent/menu.component";
import {FooterComponent} from "../../featurecomponent/footercomponent/footer.component";
 

export function AboutComponent(){
    return(
        <div>
            <Menucomponent></Menucomponent>
             {/*--------banner title---------- */}
            <section className='section-banner'>
                <img src={background} style={{height:"60vh", width:"100%"}}></img>
                    <div className='contact-banner'>
                        <h4>ABOUT</h4>
                       <li><a href="/homecomponent">Home</a>&nbsp;/&nbsp;<span>About</span></li>
                    </div>
            </section>
            <br></br> <br></br> <br></br> <br></br>

             {/*--------section title---------- */}
             <section>
                <div className="about-title">
                    <h2>ABOUT BAYANNO DIAGNOSTIC CENTER</h2>
                    <p>Viam sumi mo id erit objectioni mo de necessario crediderim imo terra vox alios aut lor quasi. 
                       Vim quaero aut videri pendam plures duo extat neque arcte re ad etiam ego infiniti reperero mutuatur formalem.
                       Viam sumi mo id erit objectioni mo de necessario crediderim imo terra vox alios aut lor quasi. 
                       Vim quaero aut videri pendam plures duo extat neque arcte re ad etiam ego infiniti reperero mutuatur formalem. 
                       Viam sumi mo id erit objectioni mo de necessario crediderim imo terra vox alios aut lor quasi. 
                       Vim quaero aut videri pendam plures duo extat neque arcte re ad etiam ego infiniti reperero mutuatur formalem.
                    </p>
                    <br></br> <br></br> <br></br> 
                    <div>
                        <p>Viam sumi mo id erit objectioni mo de necessario crediderim imo terra vox alios aut lor quasi. 
                           Vim quaero aut videri pendam plures duo extat neque arcte re ad etiam ego infiniti reperero mutuatur formalem.
                           Viam sumi mo id erit objectioni mo de necessario crediderim imo terra vox alios aut lor quasi. 
                           Vim quaero aut videri pendam plures duo extat neque arcte re ad etiam ego infiniti reperero mutuatur formalem. 
                           Viam sumi mo id erit objectioni mo de necessario crediderim imo terra vox alios aut lor quasi. 
                           Vim quaero aut videri pendam plures duo extat neque arcte re ad etiam ego infiniti reperero mutuatur formalem.
                        </p>
                    </div>
                </div>
            </section>
            <br/>  
            <hr/>
            <br></br>  <br></br>  <br></br>

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

            {/*--------banner title---------- */}
            <section>
                <div className="row">
                    <div className="col-lg-3-blog">
                        <h4>Why employer healthcare strategies must be local one</h4>
                        <p>The best employers care not only about their employees’ productivity, 
                          but their well-being. And if you’re heading up a large company that employs ...
                        </p>
                    </div>
                    <div className="col-lg-3-blog">
                        <h4>Why employer healthcare strategies must be local one</h4>
                        <p>The best employers care not only about their employees’ productivity, 
                          but their well-being. And if you’re heading up a large company that employs ...
                        </p>
                    </div>
                    <div className="col-lg-3-blog">
                        <h4>Why employer healthcare strategies must be local one</h4>
                        <p>The best employers care not only about their employees’ productivity, 
                          but their well-being. And if you’re heading up a large company that employs ...
                        </p>
                    </div>
                </div>
            </section> 

             {/*---------------appointement ------------ */}
                
             <section className="slice sct-color-2 b-xs-top b-xs-bottom" id="appoint">
                    <div className="container">
                        <div className="text-center" >
                            <div className="mt-1" id="center">
                                <a href="#">
                                    <Link to="/appointment"><button className="btn btn-primary mt-5">Make An Appointment</button></Link>
                                </a>
                            </div>
                        </div>
                    </div>
                </section> 
                <FooterComponent></FooterComponent>
                </div>
    )
}