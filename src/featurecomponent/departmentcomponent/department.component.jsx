import "./department.component.css";
import background from "../../Assets/background.jpg";
import Gastroenterology from "../../Assets/Gastroenterology.png";
import deptment from "../../Assets/deptment.jpg";
import deptmentone from "../../Assets/deptmentone.jpg"
import user from "../../Assets/user.jpg";
import {Menucomponent} from "../menucomponent/menu.component";
import {FooterComponent} from "../../featurecomponent/footercomponent/footer.component";


export function DepartmentComponent(){
    return(
        <div>
            <Menucomponent></Menucomponent>
            {/*--------banner title---------- */}
            <section className='section-banner'>
                <img src={background} style={{height:"60vh", width:"100%"}}></img>
                    <div className='contact-banner'>
                        <h4>DEPARTMENT</h4>
                        <li><a href="/homecomponent">Home</a>&nbsp;/&nbsp;<span>Department</span></li>
                    </div>
            </section>
             {/*---------------Our Awesome Doctors------------ */}

            <section className="slice sct-color-1 relative" id="doctor">
                <div className="container" id="heart">
                    <div className="row">
                        <div className="col-lg-3" id="doctors-details">
                            <p className="doctors-text">DOCTORS OF</p> 
                                <ul className="doctors-text"> 
                                    <li>All Departments</li> <hr></hr>
                                    <li><a href="#">Anesthetics</a></li>   <hr></hr>
                                    <li><a href="#">Cardiology</a></li>  <hr></hr>
                                    <li><a href="#">Gastroenterology</a></li>  <hr></hr>
                                </ul>  
                        </div> &nbsp; &nbsp; 
                        <div className="col-lg-8">
                            <h2>ANESTHETICS</h2>
                            <p className="pt-3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
                                by injected humour, or randomised words which don't look even slightly believable. If you are going to use a 
                                passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. 
                                All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this 
                                the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a 
                                handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated 
                                Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                            </p>
                            <img src={deptment} style={{width:"36%", height:"50vh"}}></img>
                                <hr></hr>
                                <div>
                                    <h5>Anesthetics Department Facilities</h5>
                                </div>
                                    <hr></hr>
                                <div className="pt-6">
                                    <h6>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet</h6>
                                </div>
                                    <br></br>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                                    <hr></hr>
                                
                                <div >
                                    Neque porro quisquam est qui dolorem ipsum quia dolor sit amet
                                    <hr></hr>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-10">
                            <h2>Cardiology</h2>
                            <p className="pt-3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
                                by injected humour, or randomised words which don't look even slightly believable. If you are going to use a 
                                passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. 
                                All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this 
                                the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a 
                                handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated 
                                Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                            </p>
                            <img src={deptmentone}></img>
                            <hr></hr>
                                <div>
                                    <h5>Anesthetics Department Facilities</h5>
                                </div>
                                    <hr></hr>
                                <div className="pt-6">
                                    <h6>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet</h6>
                                </div>
                                    <br></br>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                                    <hr></hr>
                                
                                <div >
                                    Neque porro quisquam est qui dolorem ipsum quia dolor sit amet
                                    <hr></hr>
                                </div>
                               
                        </div>
                        <div className="col-lg-10">
                            <h2>Gastroenterology</h2>
                            <p className="pt-3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
                                by injected humour, or randomised words which don't look even slightly believable. If you are going to use a 
                                passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. 
                                All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this 
                                the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a 
                                handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated 
                                Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                            </p>
                            <img src={Gastroenterology} style={{width:"25%", height:"50vh"}}></img>
                            <hr></hr>
                                <div>
                                    <h5>Anesthetics Department Facilities</h5>
                                </div>
                                    <hr></hr>
                                <div className="pt-6">
                                    <h6>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet</h6>
                                </div>
                                    <br></br>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                                    <hr></hr>
                                
                                <div >
                                    Neque porro quisquam est qui dolorem ipsum quia dolor sit amet
                                    <hr></hr>
                                </div>
                                
                        </div>
                        
                    </div>
            </section>
            <FooterComponent></FooterComponent>
        </div>
    )
}