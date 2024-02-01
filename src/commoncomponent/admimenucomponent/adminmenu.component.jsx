import './adminmenu.component.css';
import menu from "../../Assets/menu.png"
import doctor from "../../Assets/doctor.jpg";
import user from "../../Assets/user.jpg";
import { Link } from "react-router-dom";
import { BellFill, CalculatorFill, Capsule, CapsulePill, CurrencyDollar, Diagram3Fill, DisplayFill, EnvelopeFill, GearFill, HeartPulseFill, PersonFill, PlusSquareDotted, } from "react-bootstrap-icons";


export function Adminmenu(){
    return(
        <div>
         <div className="col-lg-4">
                    <div className="admin-header">
                    <img src={menu} className='menu-icon'></img>
                        <div className="admin-img">
                            <img src={doctor} style={{width:"60px", height:"60px"}}></img>
                        </div>
                        <hr></hr>

                        <div>
                            <div className="row">
                                <div className="col-6">
                                    <img src={user} style={{width:"50px"}}></img>
                                </div>
                                <div className="col-6">
                                    <p className="pt-2" style={{color:"white", fontSize:"small", marginLeft:"-40px"}}>Welcome,</p>
                                    <h3 style={{color:"white", fontSize:"large", marginLeft:"-110px"}}>Mr.Admin</h3>
                                </div>
                            </div>
                                
                                <ul className="admin-body">
                                    <Link to="/admin/dashboard"> <li className="pt-2"><DisplayFill></DisplayFill> &nbsp; Dashboard</li></Link>
                                    <Link to="/admin/Doctor"><li className="pt-2"><HeartPulseFill></HeartPulseFill> &nbsp; Doctor</li></Link>
                                    <Link to="/admin/patient"><li className="pt-2"><PersonFill></PersonFill> &nbsp; Patient</li></Link>
                                    <Link to="/admin/department"><li className="pt-2"><Diagram3Fill></Diagram3Fill> &nbsp; Department</li></Link>
                                    <Link to="/admin/nurse"><li className="pt-2"><PlusSquareDotted></PlusSquareDotted> &nbsp; Nurse</li></Link>
                                    <Link to="/admin/pharmacist"><li className="pt-2"><Capsule></Capsule> &nbsp; Pharmacist</li></Link>
                                    <Link to="/admin/receptionist"><li className="pt-2"><CalculatorFill></CalculatorFill> &nbsp; Receptionist</li></Link>
                                    <Link to="/admin/laboraterist"><li className="pt-2"><CapsulePill></CapsulePill> &nbsp; Laboratorist</li></Link>
                                    <Link to="/admin/accountant"><li className="pt-2"><CurrencyDollar></CurrencyDollar> &nbsp; Accountant</li></Link>
                                    <Link to=""><li className="pt-2"><BellFill></BellFill> &nbsp; Noticeboard</li></Link>
                                    <Link to=""><li className="pt-2"><GearFill></GearFill> &nbsp; Setting</li></Link>
                                    <Link to=""><li className="pt-2"><EnvelopeFill></EnvelopeFill> &nbsp; Contact Emails</li></Link>
                                    <Link to=""><li className="pt-2"><PersonFill></PersonFill> &nbsp; Manage Profile</li></Link>
                                </ul>
                                
                                
                        </div>
                    </div>
                </div>

        </div>
    )
}












               