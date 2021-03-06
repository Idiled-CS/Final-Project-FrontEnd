import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { 
  fetchAllCampusesThunk,
  deleteCampusThunk
} from '../../store/thunks';

import AllCampusesView from '../views/AllCampusesView';

class AllCampusesContainer extends Component {
  componentDidMount() {
    this.props.fetchAllCampuses();
    console.log(this.props)
  }

  render() {
    return (
      <div>
        <AllCampusesView 
        allCampuses={this.props.allCampuses}
        />
      </div>
    );
  }
}

// Map state to props;
const mapState = (state) => {
  return {
    allCampuses: state.allCampuses,
  };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
  return {
    fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),
  };
};

// Type check props;
AllCampusesContainer.propTypes = {
  allCampuses: PropTypes.array.isRequired,
  fetchAllCampuses: PropTypes.func.isRequired,
};

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(AllCampusesContainer);