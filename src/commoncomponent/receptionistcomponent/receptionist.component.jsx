import { useEffect, useRef } from "react";
import { deletereceptdata, getreceptionist, savedoctors } from '../../services/receptionist.service';
import { useState } from "react";
import { Gridcomponent } from '../gridcomponent/grid.component';
import { ArrowRightCircle,BoxArrowRight,Plus,Google,PersonFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import './receptionist.component.css';

export function Receptionistcomponent() {

  //create a ref variable 
  const recnameRef = useRef();
  const recEmailRef = useRef();
  const recpasswordRef = useRef();
  const recaddressRef = useRef();
  const recphoneRef = useRef();
  const receptionidref = useRef(0);



  //create a variable for header section
  const [receptionisttypegridheaders, setreceptionisttypegridheaders] = useState(["ID", "Name", "Email", "Password","options"]);

  // create a variable for body section
  const [receptionisttypeofdata, setreceptionisttypeofdata] = useState([]);


  //create a function for get data from API.
  function getreceptionisttypedata() {
      getreceptionist().then((res) => { setreceptionisttypeofdata(res.data) });
  }

  useEffect(() => {
      getreceptionisttypedata();
  }, []);

  const [receptionid, setreceptionid] = useState(0);


  function editreceptiondata(value) {
      // nameref.current.value = value.name;
      // descref.current.value = value.description;

      recnameRef.current.value = value.Name;
      recEmailRef.current.value = value.Email;
      recpasswordRef.current.value = value.Password;
      

      setSavebtn('update');
    
      receptionidref.current.value = value.id;
    }

    
function deletereceptionistdata(value) {
  let confrimDelete = window.confirm("Are You sure you want to delete the record")
  if (confrimDelete == true) {
      deletereceptdata(value.id)
      .then((res) => {

      //   clearDoctordata();
      getreceptionisttypedata();
        
      }).catch(() => {
        alert("failed to delete your property")
      })


  }
}


  //create alert
  const [savemsg, setUpdatamsg] = useState(false);
  //savebtn
  const [savebtn, setSavebtn] = useState("save");
  //show form and hideform
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
        <div id='account-width'>
            
        <div className="admin-title">
                    <h4>Bayanno Hospital Management System</h4>
                    <div className="row">
                        <div className="col-8">
                            <h6><PersonFill></PersonFill> admin</h6>
                        </div>
                        <div className="col-2">
                            <Link to="/homecomponent"><h6><Google></Google> website</h6></Link>
                        </div>
                        <div className="col-2">
                            <Link to="/login"><h6><BoxArrowRight></BoxArrowRight> Logout</h6></Link>
                        </div>
                    </div>
                </div>
                    <hr></hr>

      <h2>
        <ArrowRightCircle style={{ fontSize: '39px' }}></ArrowRightCircle>

        &nbsp;
        Receptionist
      </h2>

      <div className="showform">
        <button onClick={() => setShowForm(!showForm)}  className="btn btn-primary">+Receptionist</button>
      </div>



      {showForm && (

<form method="post" action="http://localhost:4000/savereception">
    <div>
        <input type="hidden" ref={receptionidref} name="receptionimptid"></input>
    </div>
    <div className="recept-container" >

        <div className="form-group ">
            <label for="field-1" className="col-sm-3 control-label namehead">Name</label>

            <div className="col-sm-7 namebox">
                <input type="text" name="Name" className="form-control" id="field-1" required="" ref={recnameRef} />
            </div>
        </div>
        <div className="form-group">
            <label for="field-1" className="col-sm-3 control-label namehead">Email</label>

            <div className="col-sm-7">
                <input type="email" name="Email" className="form-control namebox" id="field-1" required="" ref={recEmailRef} />
            </div>
        </div>
        <div className="form-group">
            <label for="field-1" className="col-sm-3 control-label passwordhead">Password</label>

            <div className="col-sm-7">
                <input type="password" name="Password" className="form-control namebox" id="field-1" required="" ref={recpasswordRef} />
            </div>
        </div>

        {/* <div className="form-group">
            <label for="field-ta" className="col-sm-3 control-label namehead">Address</label>

            <div className="col-sm-7">
                <textarea name="Address" className="form-control namebox" id="field-ta" rows="5" ref={recaddressRef}></textarea>
            </div>
        </div>

        <div className="form-group">
            <label for="field-1" className="col-sm-3 control-label namehead">Phone</label>

            <div className="col-sm-7">
                <input type="text" name="Phone" className="form-control namebox" id="field-1" ref={recphoneRef} />
            </div>
        </div> */}




        <div className="mt-3">
            <input type="submit" value={savebtn} className="btn btn-success" style={{ backgroundColor: 'green', color: 'white', width: '99px', fontSize: '16px', padding: '4px', borderRadius: '16px' }}></input>
            &nbsp;&nbsp;&nbsp;&nbsp;

            <input type="button" value="cancel" className="btn btn-danger "
                style={{ backgroundColor: 'red', color: 'white', width: '99px', fontSize: '16px', padding: '4px', borderRadius: '20px' }} ></input>

            <div>
                {
                    savemsg && <div> data saved</div>
                }
            </div>
        </div>
    </div>
</form>
)}
{/* <div className="grid-reception">
<Gridcomponent tittle={""} 
headers={receptionisttypegridheaders} 
body={receptionisttypeofdata}
editdeptitemfromgrid={(value) => { editreceptiondata(value) }}
deleteRecord={(value) => { deletereceptionistdata(value)}}
></Gridcomponent>
</div> */}

    </div>
        </div>
       
  );
}