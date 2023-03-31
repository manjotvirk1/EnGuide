import React, { useContext, useEffect, useRef,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import assignmentContext from '../../context/assignment/assignmentContext';
import AddAssignment from './AddAssignment';
import AssignmentItem from './AssignmentItem';


const Assignments = (props) => {
  let navigate=useNavigate(assignmentContext)
  const context = useContext(assignmentContext);
  const { assignments, getAssignments } = context;
  useEffect(() => {
    if(localStorage.getItem('token')){
      getAssignments();
    }
    else{
      navigate('/login');
    }
  }, [])

  // const [assignment,setAssignment]=useState({name:'',subject:'',task:''});
  

  // const onChange=(e)=>{
  //   setAssignment({...assignment,[e.target.name]:e.target.value})
  // }
  // const ref = useRef(null);
  // const refClose = useRef(null);
  


  
  return (
    <>
    {localStorage.getItem("userType")==='Teacher' &&
      <AddAssignment/>}
      
      <div className='row my-3'>
        <h2>Assignments</h2>
        <div className='container'>
        {(assignments.length===0) && 'No assignments to display'}
        </div>
        {assignments.map((assignment) => {
          return <AssignmentItem key={assignment._id} assignment={assignment} />
        })}
      </div>
    </>
  )
}

export default Assignments

