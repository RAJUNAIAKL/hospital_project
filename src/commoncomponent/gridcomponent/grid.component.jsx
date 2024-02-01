import React from "react";
import { PencilSquare, Trash3 } from "react-bootstrap-icons";
import './grid.component.css';

export function Gridcomponent(props) {
    // creating function for editItem
    function edititem(item) {
        alert("grid");
        props.editdeptitemfromgrid(item)
    }

    //crreating function for deleteItem
    function deleteitem(item){
        props.deleteRecord(item)
    }

    return (
        <React.Fragment>

            <h3>{props.tittle}</h3>
            <table className="table table-bordered table-hover " style={{backgroundColor:"pink"}} >
                <thead className="table-light">
                    <tr>
                        {props.headers.map((item) => <th>{item}</th>)}

                    </tr>
                </thead>
                <tbody>
                    {
                        props.body.map((item) => <tr>
                            {
                                Object.values(item).map((item) => <td>{item}</td>)
                            }
                            <td>
                                <button className="editbutton" onClick={(()=>{edititem(item)})} ><PencilSquare></PencilSquare>Edit</button>
                                <button className="deletebutton" onClick={(()=>{deleteitem(item)})}  ><Trash3></Trash3>Delete</button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </React.Fragment>
    )
}