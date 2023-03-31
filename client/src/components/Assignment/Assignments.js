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
      <AddAssignment/>
      
      <div className='row my-3'>
        <h2>Your Assignments</h2>
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



// import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { getItems, deleteItem } fro../../actions/itemActionion';
// import { Container, ListGroup, ListGroupItem, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';

// const Assignment = ({ getItems, deleteItem, item, auth: { user }, isAuthenticated }) => {
  
//   useEffect(() => {
//     getItems();
//   }, []);

//   const onDeleteClick = (id) => {
//     deleteItem(id);
//   };

//   const { items } = item;

//   return isAuthenticated ? (
//     <Container>
//       <ListGroup>
//         <TransitionGroup className='assignment-list'>
//           {items.map(({ _id, name, subject, task }) => (
//             <CSSTransition key={_id} timeout={500} classNames='fade'>
//               <ListGroupItem>
//                 <CardBody>
//                   <CardTitle tag='h5'>{subject}</CardTitle>
//                   <CardSubtitle tag='h6' className='mb-2 text-muted'>
//                     {name}
//                   </CardSubtitle>
//                   <CardText>{task}</CardText>
//                   {isAuthenticated && user.usertype === 'Teacher' ? (
//                     <Button
//                       className='remove-btn'
//                       color='danger'
//                       onClick={() => onDeleteClick(_id)}
//                     >
//                       Delete
//                     </Button>
//                   ) : null}
//                 </CardBody>
//               </ListGroupItem>
//             </CSSTransition>
//           ))}
//         </TransitionGroup>
//       </ListGroup>
//     </Container>
//   ) : (<h3>Please login to view assignments</h3>);
// };

// Assignment.propTypes = {
//   getItems: PropTypes.func.isRequired,
//   deleteItem: PropTypes.func.isRequired,
//   item: PropTypes.object.isRequired,
//   isAuthenticated: PropTypes.bool,
//   auth: PropTypes.object.isRequired,
// };

// const mapStateToProps = (state) => ({
//   item: state.item,
//   auth: state.auth,
//   isAuthenticated: state.auth.isAuthenticated,
// });

// export default connect(mapStateToProps, { getItems, deleteItem })(Assignment);

