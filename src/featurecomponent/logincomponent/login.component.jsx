import './login.component.css';
import doctor from "../../Assets/doctor.jpg";
import login from "../../Assets/login.png"
import { getdoctor } from '../../services/doctor.service';
import { useNavigate } from 'react-router-dom';
import { BagPlusFill, CalculatorFill, CapsulePill, Coin, HeartPulseFill, LockFill, PersonBadgeFill, PersonCircle } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import {Menucomponent} from "../menucomponent/menu.component";
import {FooterComponent} from "../../featurecomponent/footercomponent/footer.component";
;


export function Loginmodule(){
 

    function Loginuser() {
        //create a variable 
        const RegisterEmail = document.getElementById("email").value;
        const RegisterPassword = document.getElementById("password").value;

        getdoctor().then((res) => {
            let filterData = res.data.filter((item, index, arr) => item.Email == RegisterEmail && item.Password == RegisterPassword);
            if (filterData.length > 0) {
               alert("user exist");
      
            }
            else {
               
            }
        }).catch((ex) => {  
            alert(ex.message)
        })

    }

     
   
    return(
        <div>
            <div className="log-responce">
            <Menucomponent></Menucomponent>
            <div className="login-container">
                <img className='img' src={doctor} style={{width:"60px", height:"60px"}}></img>
                <h3>Bayanno Hospital Management System</h3> &nbsp; &nbsp;
            <form>
                <div className="input-group pt-25">
                    <label for="username"></label>
                    <input type="text" className='form-control' id="username" name="username" placeholder="Enter your username" />
                </div>
                <div className="input-group">
                    <label for="password"></label>
                    <input type="password"  className='form-control' id="password" name="password" placeholder="Enter your password" />
                </div>
                <div className="btn-container " id='login-form'>
                    <Link  to="/admin/dashboard"><button className='btn btn-primary w-100' onClick={(()=>{Loginuser()})}><LockFill></LockFill> Log In</button></Link>
                </div>
                
            
           

            <div className="user-type-btns">
                <div className="btn-row">
                    <button className="user-type-btn superadmin-btn"><BagPlusFill></BagPlusFill> Superadmin</button>
                    <button className="user-type-btn admin-btn"><PersonBadgeFill></PersonBadgeFill>Admin</button>
                    <button className="user-type-btn doctor-btn"><CapsulePill></CapsulePill> Doctor</button>
                </div>
                
                <div className="btn-row">
                    <button className="user-type-btn pharmacist-btn"><HeartPulseFill></HeartPulseFill>Pharmacist</button>
                    <button className="user-type-btn pathologist-btn"><PersonCircle></PersonCircle> Pathologist</button>
                    <button className="user-type-btn radiologist-btn"><PersonCircle></PersonCircle> Radiologist</button>
                </div>

                <div className="btn-row">
                    <button className="user-type-btn accountant-btn"><CalculatorFill></CalculatorFill>Accountant</button>
                    <button className="user-type-btn receptionist-btn"><Coin></Coin> Receptionist</button>
                    <button className="user-type-btn nurse-btn"><PersonCircle></PersonCircle> Nurse</button>
                </div>
            </div>
            </form>
       </div>
            <FooterComponent></FooterComponent>
            </div>
        </div>
    )
}























// import React from 'react';
// import "./login-page.component.css";
// import {MDBBtn,MDBContainer,MDBRow,MDBCol,MDBIcon,MDBInput}from 'mdb-react-ui-kit';
// import loginbg from '../../assets/images/loginbg.jpg';
// import { getLoginUser} from '../services/login.service';
// import { useNavigate } from 'react-router-dom';


// export function LoginPageComponent() {

//     //creation of variable in navigate
//     const navigate = useNavigate();

//     function loginUser(){
//         const registeredEmail = document.getElementById("email").value;
//         const registeredPassword = document.getElementById("password").value;
//         getLoginUser().
//         then((res)=>{
//             let filterData = res.data.filter((item,index,arr) => item.email == registeredEmail && item.password == registeredPassword);
//             if(filterData.length>0){
              
//                 navigate("/admin/admin-page");
//             }
//             else{
//                 alert("User not exist")
//             }

//         })

//     }

//     return (
//         <MDBContainer fluid>
            
//             <MDBRow>

//                 <MDBCol sm='5' style={{ backgroundColor: 'black', height:"685px" }}>

//                     <div className='d-flex flex-row ps-5 pt-5'>
//                         <MDBIcon fas icon="crow fa-3x me-3" style={{ color: '#709085' }} />
//                         <span className="h1 fw-bold mb-0"></span>
//                     </div>

//                     <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>
//                         <a href="http://localhost:3000/" >
//                             <img src="https://demo.creativeitem.com/bayanno/uploads/logo.png" height="60" className="rounded mx-auto d-block" alt="" ></img>
//                         </a>
//                         <h3 className="fw-normal mb-3 ps-5 pb-3 fw-bold mb-0" style={{ letterSpacing: '1px', color: 'white' }}>&nbsp;&nbsp;&nbsp;Bayanno Hospital Management System</h3>

//                         <MDBInput wrapperClass='mb-4 mx-5 w-100' placeholder='Email' id='email' type='email' size="lg" />
//                         <MDBInput wrapperClass='mb-4 mx-5 w-100' placeholder='Password' id='password' type='password' size="lg" />

//                         <input type='button' className='form-control mb-4 px-5 mx-5 w-100 ' style={{backgroundColor:'#2191bf',color:'white'}} size="lg" value="Login" onClick={()=>{loginUser()}}></input>
                        

//                         <p style={{ color: 'white', textAlign:'center' }}>Forgot Your Password ?</p>
//                     </div>

//                 </MDBCol>

//                 <MDBCol sm='7' className='d-none d-sm-block px-0'>
//                     <img src={loginbg}
//                         alt="Login image" className="w-100" style={{ objectFit: 'cover', objectPosition: 'left', height: '100%' }} />
//                 </MDBCol>

//             </MDBRow>

//         </MDBContainer>
//     );
// }