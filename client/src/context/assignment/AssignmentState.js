import React, { useState } from "react";
import AssignmentContext from "./assignmentContext";

const AssignmentState=(props)=>{
  const host="http://localhost:5000"
    const assignmentInitial=[];
    const[assignments,setAssignments]=useState(assignmentInitial);

    const getAssignments=async()=>{
      const response=await fetch(`${host}/api/auth/assignment`,{
        method:'GET',
        headers:{
          'Content-Type':'application/JSON',
          "authToken":localStorage.getItem('token')
        }
      });

      const json=await response.json();
      console.log(json);
      setAssignments(json)
    }

    const addAssignment=async(name,subject,task)=>{
      const response=await fetch(`${host}/api/auth/assignment`,{
        method:'POST',
        headers:{
          'Content-Type':'application/JSON',
          "authToken":localStorage.getItem('token')
        },
        body:JSON.stringify({name,subject,task})
      })
      const assignment =await response.json();

      setAssignments(assignments.concat(assignment));
      console.log(assignments);
    }

    const deleteAssignment=async(id)=> {
      const response=await fetch(`${host}/api/auth/assignment/deleteassignment/${id}`,{
        method:'DELETE',
        headers:{
          'Content-Type':'application/json',
          "authToken":localStorage.getItem('token')
        }
      })
      const json= response.json();
      console.log(json);

      const newAssignments=assignments.filter((assignment)=>{return assignment._id!==id});
      setAssignments(newAssignments);
    }

    // const editAssignment=async(id,title,description,tag)=>{

    //   const response=await fetch(`${host}/api/auth/assignments/updatenote/${id}`,{
    //     method:'PUT',
    //     headers:{
    //       'Content-Type':'application/JSON',
    //       "auth-token":localStorage.getItem('token')
    //     },
    //     body:JSON.stringify({id,title,description})
    //   })
    //   const json= await response.json();
    //   console.log(json);
    
    //   let newAssignments=JSON.parse(JSON.stringify(assignments))
    //   for (let index = 0; index < newAssignments.length; index++) {
    //     const element = newAssignments[index];
    //     if(element._id===id){
    //       newAssignments[index].title=title;
    //       newAssignments[index].description=description;
    //       newAssignments[index].tag=tag;
    //       break;
    //     }
        
    //   }
    //   setAssignments(newAssignments);
    // }

    return (
        <AssignmentContext.Provider value={{assignments,addAssignment,deleteAssignment,getAssignments}}>
            {props.children}
        </AssignmentContext.Provider>
    )
}

export default AssignmentState;