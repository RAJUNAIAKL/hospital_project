import './appointment.component.css';
import background from "../../Assets/background.jpg";
import { useRef } from 'react';
import { saveappointment } from '../../services/appointment.service';
import {Menucomponent} from "../menucomponent/menu.component";
import {FooterComponent} from "../../featurecomponent/footercomponent/footer.component";


export function AppointmentComponent() {

    //create a ref variable
    const nameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const dateRef = useRef();
    const departmentRef =useRef();
    const doctorRef = useRef();
   const messageRef =useRef();

  //create a save function for patiemt
function Saveappointmentdata(){
    let data = {
        id:0,
        Name:nameRef.current.value,
        Email:emailRef.current.value,
        Phone:phoneRef.current.value,
        Date:dateRef.current.value,
        Department:departmentRef.current.value,
        doctor:doctorRef.current.value,
        message:messageRef.current.value,
        
    };
    saveappointment(data).then(()=>{
        alert("saved successfull    ");
    }).catch(()=>{
        alert("not added");
    })
}
   

    return (
        <>
            <div>
                <Menucomponent></Menucomponent>
                {/*--------banner title---------- */}
            <section className='section-banner'>
                <img src={background} style={{height:"60vh", width:"100%"}}></img>
                    <div className='contact-banner'>
                        <h4>APPOINTMENT</h4>
                        <li><a href='/homecomponent'>Home</a>&nbsp;/&nbsp;<span>Appointment</span></li>
                    </div>
            </section>
            <br></br> <br></br> <br></br> <br></br>
                <div className='bg-light '>

                    <h2 className='text-center mt-3'>Make An Appointment</h2>
                    <br></br>
                    <hr></hr>
                    <form className='form container' style={{ width: '750px' }}>
                        <div>
                            <label>Name :</label>
                        </div>
                        <div>
                            <input type='text' className='form-control' id='appointmentName' ref={nameRef}></input>
                        </div>
                        <div>
                            <label>Email :</label>
                        </div>
                        <div>
                            <input type='email' className='form-control' id='appointmentEmail' ref={emailRef}></input>
                        </div>
                        <div>
                            <label>Phone :</label>
                        </div>
                        <div>
                            <input type='number'  className='form-control' id='appointmentPhone' ref={phoneRef}></input>
                        </div>
                        <div>
                            <label>Date :</label>
                        </div>
                        <div>
                            <input type='date' className='form-control' id='appointmentDate' ref={dateRef}></input>
                        </div>
                        <div>
                            <label >Department :</label>
                        </div>
                        <div>
                            <select className='form-control' id='appointmentDepartment' ref={departmentRef}>
                                <option>Select Deartment</option>
                                <option>Anesthetics</option>
                                <option>Cardiology</option>
                                <option>Gastroenterology</option>
                            </select>
                        </div>
                        <div>
                            <label>Doctor :</label>
                        </div>
                        <div>
                            <select className='form-control' id='appointmentDoctor' ref={doctorRef}>
                                <option>Select Doctor</option>
                                <option>DR.Sakru</option>
                                <option>DR.Sharvani</option>
                                <option>DR.Nirmala</option>
                            </select>
                        </div>
                        <div>
                            <label>Message :</label>
                        </div>
                        <div>
                            <textarea rows={5} className='form-control'  id='appointmentMessage' ref={messageRef}></textarea>
                        </div>
                        <br></br>
                        <button className='btn btn-primary' onClick={(()=>{Saveappointmentdata()})}> Book Now </button>
                        <br></br>
                        <br></br>
                    </form>
                </div>
              <FooterComponent></FooterComponent>
            </div>
        </>
    )
}