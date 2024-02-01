import { useForm } from 'react-hook-form';
// import {saveUser} from "../services/user";
import "./contact.component.css";
import {Menucomponent} from "../menucomponent/menu.component";
import {FooterComponent} from "../../featurecomponent/footercomponent/footer.component";

import background from "../../Assets/background.jpg";
import {TelephoneFill } from 'react-bootstrap-icons';


export function ContactComponent() {
    const {
                register,
                handleSubmit,
                formState: { errors }
            } = useForm();
        
            function saveContactData() {
                let data = {
                    id: 0,
                    name: document.getElementById("name").value,
                    email: document.getElementById("email").value,
                    number: document.getElementById("number").value,
                    address: document.getElementById("address").value,
                    message: document.getElementById("message").value,

                }
                // saveUser(data).then(() => {
                //     alert("Data saved")
                //     clearForm();
                // }).catch(() => {
                //     alert("Data Not Saved")
                // })
            }
            function clearForm() {
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("number").value = "";
                document.getElementById("address").value = "";
                document.getElementById("message").value = "";
            }
    return (
        <div>
            <Menucomponent></Menucomponent>
            {/*--------banner title---------- */}
            <section className='section-banner'>
                <img src={background} style={{height:"60vh", width:"100%"}}></img>
                    <div className='contact-banner'>
                        <h4>CONTACT US</h4>
                        <li><a href='/homecomponent'>Home</a>&nbsp;/&nbsp;<span>Contact us</span></li>
                    </div>
            </section>
            <br></br> <br></br> <br></br> <br></br>
             
             {/*--------section title---------- */}
            <section>
                <div className="section-title">
                    <h2>Contact Us For Help</h2>
                    <p>Please Call Us Or Complete The Form Below And We Will Get To You Shortly</p>
                    <button className='btn btn-primary' style={{width:"230px", height:"50px"}}><TelephoneFill></TelephoneFill>7702286442</button>
                </div>
            </section>
            <br/>  
            <hr/>
            
            {/*--------form---------- */}
            <section>
                <div className="contact">
                    <div className="row" data-aos="fade-in">
                        <div className="col-lg-9 mt-lg-0 d-flex align-items-stretch">
                            <form action="" method="post" role="form" className="contact-form">
                                <div className="row">
                                    <div className="form-group col-lg-6">
                                        <label htmlFor="name">YOUR NAME:</label>
                                        <input className='form-control w-100' {...register("name", { required: true })}
                                            type="text" id="name" name="name" required />
                                       {
                                           errors && errors.name ? <span className='text-danger'>Please Enter Your Name</span> : ""
                                         }
                                     
                                    </div>

                                    <div className="form-group col-lg-6">
                                        <label htmlFor="email">YOUR EMAIL:</label>
                                        <input className='form-control'   {...register("email", {
                                            required: true, pattern: {
                                                value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                                message: "Email format should be name@gmail.com"
                                            }
                                        })}
                                            type="email" id="email" name="email" required />
                                        {
                                            errors.email && errors.email.type === 'required' ? <span className='text-danger'> Enter Your Email</span> :
                                            errors.email && errors.email.message ? <span className='text-danger'>{errors.email.message}</span> : ''

                                        }
                                    </div>

                                    <div className="form-group col-lg-6">
                                        <label htmlFor="number">PHONE:</label>
                                        <input className='form-control' {...register("number", { required: true,
                                        pattern:{
                                            value:/^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/gm,
                                            message:'number should be 10 digits'
                                        }
                                    })}
                                            type="text" id="number" name="number" required />
                                        {
                                            errors && errors.number ? <sapn className="text-danger">Please Enter Phone</sapn> : ""
                                        }
                                    </div>

                                    <div className="form-group col-lg-6">
                                        <label htmlFor="address">ADDRESS:</label>
                                        <input className='form-control'  {...register("address", { required: true })}
                                            id="address" name="address"  required></input>
                                        {
                                            errors && errors.address ? <sapn className="text-danger">Please Enter Address</sapn> : ""
                                        }
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message">MESSAGE:</label>
                                        <textarea className='form-control'   {...register("message", { required: true })}
                                            id="message" name="message" rows="4" required></textarea>
                                        {
                                            errors && errors.message ? <sapn className="text-danger">Please Fill Message</sapn> : ""
                                        }
                                    </div>
                                </div>

                                <div className="text-center">
                                <button type="submit" className='btn btn-primary' onClick={handleSubmit((data) => { saveContactData(data) })}>Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <FooterComponent></FooterComponent>
           
        </div >
    )
}