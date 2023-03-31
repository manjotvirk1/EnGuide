import React,{useContext,useState} from 'react'
import assignmentContext from '../../context/assignment/assignmentContext';

const AddAssignment = (props) => {
    const context =useContext(assignmentContext);
  const {addAssignment}=context;

  const [assignment,setAssignment]=useState({name:'',subject:'',task:''});
  const handleClick=(e)=>{
    e.preventDefault();
    addAssignment(assignment.name,assignment.subject,assignment.task);
    setAssignment({name:'',subject:'',task:''});
    // props.showAlert("Added successfully","success");
  }

  const onChange=(e)=>{
    setAssignment({...assignment,[e.target.name]:e.target.value})
  }
   return(
    
    <div>
        <div className='container my-3'>
      <h2>Add an assignment</h2>
      <form>
        <div className="form-group">
          <label htmlFor='name'>Name</label>
          <input type="text" className="form-control" id="name" name='name' value={assignment.name} aria-describedby="emailHelp" placeholder="title" onChange={onChange} minLength={5} required/>
        </div>
        <div className="form-group">
          <label htmlFor='subject'>Subject</label>
          <input type="text" className="form-control" id='subject' name='subject' value={assignment.subject} placeholder="description" onChange={onChange} minLength={5} required/>
        </div>
        <div className="form-group">
          <label htmlFor='task'>Task</label>
          <input type="text" className="form-control" id='task' name='task' value={assignment.task} placeholder="tag" onChange={onChange} minLength={5} required/>
        </div>
        <button disabled={assignment.name.length<5 || assignment.task.length<5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Assignment</button>
      </form>
      </div>
    </div>
  )
}

export default AddAssignment;