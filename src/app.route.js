import { Route, Routes } from "react-router-dom";
import { Loginmodule } from "./featurecomponent/logincomponent/login.component";

import { Authroutes } from "./services/authroute";

import {HomeComponent} from "../src/featurecomponent/homecomponent/home.component";
import { Adminmenu } from "./commoncomponent/admimenucomponent/adminmenu.component";
import { Headcomonent } from "./commoncomponent/headcomponent/head.component";
import { Dashboard } from "./commoncomponent/dashboardcomonent/dashboard.component";
import { Doctorcomonent } from "./commoncomponent/doctorcomponent/doctor.component";
import { Department } from "./commoncomponent/departmentcomponent/department.component";
import { Patientcomponent } from "./commoncomponent/patientcomponent/patient.component";
import { Nursecomponent } from "./commoncomponent/nursecomponent/nurse.component";
import { Pharmaicstcomponent } from "./commoncomponent/pharamistcomponent/pharmacist.component";
import { Laboratristcomponent } from "./commoncomponent/laboratoristcomonent/laboratorist.component";
import { Accountantcomponent } from "./commoncomponent/Acountantcomponent/acountant.component";
import { Receptionistcomponent } from "./commoncomponent/receptionistcomponent/receptionist.component";
import { AppointmentComponent } from "./featurecomponent/appointmentcomponent/appointment.component";
import { DooctorsComponent } from "./featurecomponent/doctorcomponent/doctorh.component";
import { AboutComponent } from "./featurecomponent/aboutcomponent/about.component";
import {DepartmentComponent} from "../src/featurecomponent/departmentcomponent/department.component";
import {ContactComponent} from "../src/featurecomponent/contactcomponent/contact.componet";
import {Blogcomponent} from "../src/featurecomponent/blogcomponent/blog.component";
import {Menucomponent} from "../src/featurecomponent/menucomponent/menu.component"


export function Approute() {
    return (
        <Routes>
            <Route element={<Menucomponent></Menucomponent>}></Route>
            <Route path="/homecomponent" element={<HomeComponent></HomeComponent>}></Route>
            <Route path="/department" element={<DepartmentComponent></DepartmentComponent>}></Route>
            <Route path="/login" element={<Loginmodule></Loginmodule>}></Route>
            <Route path="/blog" element={<Blogcomponent></Blogcomponent>}></Route>
            <Route path="/contact" element={<ContactComponent></ContactComponent>}></Route>
            <Route path="/doctor" element={<DooctorsComponent></DooctorsComponent>}></Route>
            <Route path="/about" element={<AboutComponent></AboutComponent>}></Route>
            <Route path="/appointment" element={<AppointmentComponent></AppointmentComponent>}></Route>


            <Route path="/admin/dashboard" element={<Navigatedashboard></Navigatedashboard>}></Route>
            <Route path="/admin/dashboard" element={<Navigatedashboard></Navigatedashboard>}></Route>
            <Route path="/admin/Doctor" element={<Navigatedoctor></Navigatedoctor>}></Route>
            <Route path="/admin/department" element={<Navigatedepartment></Navigatedepartment>}></Route>
            <Route path="/admin/patient" element={<Navigatepatient></Navigatepatient>}> </Route>
            <Route path="/admin/nurse" element={<Navigatenurse></Navigatenurse>}></Route>
            <Route path="/admin/pharmacist" element={<Navigatepharmcist></Navigatepharmcist>}></Route>
            <Route path="/admin/laboraterist" element={<Navigatelaboratrist></Navigatelaboratrist>}></Route>
            <Route path="/admin/accountant" element={<Navigateaccountant></Navigateaccountant>}></Route>
            <Route path="/admin/receptionist" element={<Navigatereceptionist></Navigatereceptionist>}></Route>

        </Routes>
    )
}




function Navigatedashboard() {
    return (

        <div className="row">
            
                <div className="col-2">
                    <Adminmenu></Adminmenu>
                </div>
                <div className="col-10">
                    <Dashboard></Dashboard>

                </div>
           
        </div>
    )
}

function Navigatedepartment() {
    return (

        <div className="row">
            <div className="col-2">
                    <Adminmenu></Adminmenu>
                </div>
                <div className="col-10">
                    <Department></Department>
                </div>
            </div>
      

    )
}

function Navigatedoctor() {
    return (

        <div className="row">
               <div className="col-2">
                    <Adminmenu></Adminmenu>
                </div>
                <div className="col-10">
                    <Doctorcomonent></Doctorcomonent>
                </div>
         </div>
      

    )
}

function Navigatepatient() {
    return (

        <div className="row">
           <div className="col-2">
                    <Adminmenu></Adminmenu>
                </div>
                <div className="col-10">
                    <Patientcomponent></Patientcomponent>
                </div>
            </div>
       

    )
}

function Navigatenurse() {
    return (

        <div className="row">
             <div className="col-2">
                    <Adminmenu></Adminmenu>
                </div>
                <div className="col-10">
                    <Nursecomponent></Nursecomponent>
                </div>
            </div>
       

    )
}

function Navigatepharmcist() {
    return (

        <div className="row">
            <div className="col-2">
                    <Adminmenu></Adminmenu>
                </div>
                <div className="col-10">
                    <Pharmaicstcomponent></Pharmaicstcomponent>
                </div>
            </div>
       

    )
}


function Navigatelaboratrist() {
    return (

        <div className="row">
             <div className="col-2">
                    <Adminmenu></Adminmenu>
                </div>
                <div className="col-10">
                    <Laboratristcomponent></Laboratristcomponent>
                </div>
            </div>
       

    )
}


function Navigateaccountant() {
    return (

        <div className="row">
             <div className="col-2">
                    <Adminmenu></Adminmenu>
                </div>
                <div className="col-10">
                    <Accountantcomponent></Accountantcomponent>
                </div>
            </div>
        

    )
}

function Navigatereceptionist() {
    return (

        <div className="row">
            
                <div className="col-2">
                    <Adminmenu></Adminmenu>
                </div>
                <div className="col-10">
                    <Receptionistcomponent></Receptionistcomponent>
                </div>
            
        </div>

    )
}



function Ndoctor() {
    return (

        <div >
            <div >
                <Adminmenu></Adminmenu>
            </div>
            <div >
                <DooctorsComponent></DooctorsComponent>
            </div>
        </div>

    )
}

