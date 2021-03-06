import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import axios from "axios";


const deleteCampus = async (campus) =>{
  await axios
    .delete(`/api/campuses/${campus}`)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    })
    window.location.replace(`/campuses`);
}
const AllCampusesView = (props) => {
  if (!props.allCampuses.length) {
    return <div>There are no campuses.</div>;
  }

  return (
    <div>
      {props.allCampuses.map((campus) => (
        <div style = {{
          border: "5px solid black"
        }}
         key={campus.id}>
          <Link to={`/campus/${campus.id}`}>
            <h1>{campus.name}</h1>
          </Link>
          <img src = {campus.imageUrl}>
          </img>
          <p>{campus.description}</p>
          <p>{campus.address}</p>
          <button onClick = {() => deleteCampus(campus.id)}>Delete</button>
        </div>
      ))}
      <Link to={`/newcampus`}>
        <button>Add New Campus</button>
      </Link>

      <h2>
        <Link style = {{
          border: "5px dotted black",
          backgroundColor: "#3791e6"
        }}
        to={`/`}>
          Home
        </Link>
      </h2>
    </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;