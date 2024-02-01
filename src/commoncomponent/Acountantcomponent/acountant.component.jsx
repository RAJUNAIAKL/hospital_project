import { useEffect, useRef } from "react";
import { deletedoctortypess, getdoctor, savedoctors } from '../../services/doctor.service';
import { useState } from "react";
import { Gridcomponent } from '../gridcomponent/grid.component';
import { ArrowRightCircle,BoxArrowRight,Plus,Google,PersonFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import './acountant.component.css';

export function Accountantcomponent() {

  //show form and hideform
  const [showForm, setShowForm] = useState(false);

  //create alert
  const [savemsg, setUpdatamsg] = useState(false);

  const [doctorid, setdoctorid] = useState(0);
  //head
  const [doctorHead, setDoctorHead] = useState(["ID", "NAME", "DESCRIPTION", "ACTION"]);

  //savebtn
  const [savebtn, setSavebtn] = useState("save");

  //headdata
  const [doctorData, HeadDoctorData] = useState([]);
  
  useEffect(() => {
    getDoctordata()
  }, [])

  function getDoctordata() {
    getdoctor().then((res) => {
      HeadDoctorData(res.data)
    }
    )
  }


  function settime() {
    setTimeout(() => {
      setUpdatamsg(false);
    }, 2000)
  }


  const nameref = useRef();
  const descref = useRef();

  function clearDoctordata() {
    nameref.current.value = "";
    descref.current.value = "";
    setSavebtn("save")
    setdoctorid(0);
    settime();
  }


  const doctoridref = useRef(0);

  function editdoctordata(value) {
    nameref.current.value = value.name;
    descref.current.value = value.description;
    setSavebtn('update');
    setdoctorid(value.id);
    doctoridref.current.value = value.id;



  }


  function deletedoctordata(value) {
    let confrimDelete = window.confirm("Are You sure you want to delete the record")
    if (confrimDelete == true) {
        deletedoctortypess(value.id)
        .then((res) => {

          clearDoctordata();

          getDoctordata();
        }).catch(() => {
          alert("failed to delete your property")
        })


    }
  }


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
        Accountant
      </h2>

      <div className="showform">
        <button onClick={() => setShowForm(!showForm)}  className="btn btn-primary"> Add Accountant</button>
      </div>



      {showForm && (

        <form method="post" action="http://localhost:4000/saveDoctordata">
          <div>
            <input type="hidden" ref={doctoridref} name="doctorimptid"></input>
          </div> 
          <div>
            <label style={{ fontSize: '20px',marginLeft:"80px"}}>Name</label>
            <input type="text" className="form-control w-50" style={{marginLeft:"80px"  }} id="namejs" ref={nameref} name="name"></input>
          </div>

          <div className="mt-3">
            <label style={{ fontSize: '20px' }}>Description</label>
            <textarea type="text" className="form-control" style={{width:"55%"  }} id="descjs"  ref={descref} name="description"></textarea>
          </div>

          <div className="mt-3">
            <input type="submit" className="btn btn-success" value={savebtn} style={{ color: 'white', width: '99px', fontSize: '16px', padding: '4px', borderRadius: '16px' }}></input>
            &nbsp;&nbsp;&nbsp;&nbsp;

            <input type="button" value="cancel" className="btn btn-danger"
              style={{ color: 'white', width: '99px', fontSize: '16px', padding: '4px', borderRadius: '20px' }} onClick={() => {
                clearDoctordata()
              }}></input>

            <div>
              {
                savemsg && <div> data saved</div>
              }
            </div>
          </div>
        </form>
      )}


    <div className="grid-doctor">
      <Gridcomponent tittle={""} 
       headers={doctorHead} 
       body={doctorData}
       editdeptitemfromgrid={(value) => { editdoctordata(value) }}                 
       deleteRecord={(value) => {deletedoctordata (value) }}           
       ></Gridcomponent>
      </div>
    </div>
        </div>
       
  );
}