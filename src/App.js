
import { BrowserRouter } from 'react-router-dom';
import { Approute } from './app.route';


import {Menucomponent} from "../src/featurecomponent/menucomponent/menu.component";
import {HomeComponent} from "../src/featurecomponent/homecomponent/home.component";
import {Blogcomponent} from "../src/featurecomponent/blogcomponent/blog.component";
import {ContactComponent} from "../src/featurecomponent/contactcomponent/contact.componet";
import {DooctorsComponent} from "../src/featurecomponent/doctorcomponent/doctorh.component";
import {AboutComponent} from "../src/featurecomponent/aboutcomponent/about.component";
import {AppointmentComponent} from "../src/featurecomponent/appointmentcomponent/appointment.component";
import {DepartmentComponent} from "../src/featurecomponent/departmentcomponent/department.component";
import {FooterComponent} from "../src/featurecomponent/footercomponent/footer.component";




function App() {
  return (
    <div>
 
      <BrowserRouter>
     
     <Approute></Approute>
     {/* <Menucomponent></Menucomponent> */}
    {/* <HomeComponent></HomeComponent> */}
    {/* <FooterComponent></FooterComponent> */}


     
      </BrowserRouter>     

    </div>
  );
}

export default App;
