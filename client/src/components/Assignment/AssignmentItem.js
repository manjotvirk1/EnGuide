import React, { useContext } from 'react'
import assignmentContext from '../../context/assignment/assignmentContext';

const AssignmentItem = (props) => {
    const context=useContext(assignmentContext);
    const { assignment } = props;
    const { deleteAssignment } = context;
    return (
        <div className='col-md-4'>
            <div className="card my-4" >
                <div className="card-body">
                    <div className='d-flex align-items-center'>
                        <h5 className="card-title">{assignment.name}</h5>
                        {localStorage.getItem("userType")==='Teacher' &&<i className='far fa-trash-alt mx-2' onClick={()=>{deleteAssignment(assignment._id); }}></i>}
                        {/* <i className='far fa-edit mx-2' onClick={()=>{updateAssignment(assignment); }}></i> */}
                    </div>
                    <h6 className="card-title">{assignment.subject}</h6>
                    <p className="card-text">{assignment.task}</p>

                </div>
            </div>
        </div>
    )
}

export default AssignmentItem