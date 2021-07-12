import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCampusThunk } from '../../store/thunks'
import { EditCampusView } from '../views'

class EditCampusContainer extends Component {
    render() {
        return (
            <div>
                <EditCampusView/>
            </div>
        )
    }
}
const mapState = (state) => {
  return {
    campus: state.campus,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCampus: () => dispatch(addCampusThunk()),
  };
};

export default connect(mapState, mapDispatchToProps)(EditCampusContainer);