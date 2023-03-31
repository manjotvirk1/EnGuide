import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemAction';
import { Container, ListGroup, ListGroupItem, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Assignment = ({ getItems, deleteItem, item, auth: { user }, isAuthenticated }) => {
  
  useEffect(() => {
    getItems();
  }, []);

  const onDeleteClick = (id) => {
    deleteItem(id);
  };

  const { items } = item;

  return isAuthenticated ? (
    <Container>
      <ListGroup>
        <TransitionGroup className='assignment-list'>
          {items.map(({ _id, name, subject, task }) => (
            <CSSTransition key={_id} timeout={500} classNames='fade'>
              <ListGroupItem>
                <CardBody>
                  <CardTitle tag='h5'>{subject}</CardTitle>
                  <CardSubtitle tag='h6' className='mb-2 text-muted'>
                    {name}
                  </CardSubtitle>
                  <CardText>{task}</CardText>
                  {isAuthenticated && user.usertype === 'Teacher' ? (
                    <Button
                      className='remove-btn'
                      color='danger'
                      onClick={() => onDeleteClick(_id)}
                    >
                      Delete
                    </Button>
                  ) : null}
                </CardBody>
              </ListGroupItem>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ListGroup>
    </Container>
  ) : (<h3>Please login to view assignments</h3>);
};

Assignment.propTypes = {
  getItems: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  item: state.item,
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { getItems, deleteItem })(Assignment);

