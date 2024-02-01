import { Accountantcomponent } from "../Acountantcomponent/acountant.component";
import { Adminmenu } from "../admimenucomponent/adminmenu.component";
import { Dashboard } from "../dashboardcomonent/dashboard.component";
import { Department } from "../departmentcomponent/department.component";
import { Doctorcomonent } from "../doctorcomponent/doctor.component";
import { Headcomonent } from "../headcomponent/head.component";
import { Laboratristcomponent } from "../laboratoristcomonent/laboratorist.component";
import { Nursecomponent } from "../nursecomponent/nurse.component";
import { Patientcomponent } from "../patientcomponent/patient.component";
import { Pharmaicstcomponent } from "../pharamistcomponent/pharmacist.component";
import { Receptionistcomponent } from "../receptionistcomponent/receptionist.component";

export function Adminlayout(){
    return(
        <div>
            <div className="row">
                <div className="col-3">
                <Adminmenu></Adminmenu>
                </div>
                <div className="col-8">
                    <div>
                        <Headcomonent></Headcomonent>
                    </div>
                    <div>
                  <Doctorcomonent></Doctorcomonent>
                    </div>
                </div>
            </div>
        </div>
    )
}