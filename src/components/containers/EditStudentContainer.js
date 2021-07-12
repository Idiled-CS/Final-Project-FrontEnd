import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addStudentThunk } from '../../store/thunks'
import { EditStudentView } from '../views'

class EditStudentContainer extends Component {
    render() {
        return (
            <div>
                <EditStudentView/>
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
    addStudent: () => dispatch(addStudentThunk()),
  };
};

export default connect(mapState, mapDispatchToProps)(EditStudentContainer);