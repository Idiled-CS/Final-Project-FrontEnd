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
        <div key={campus.id}>
          <Link to={`/campus/${campus.id}`}>
            <h1>{campus.name}</h1>
          </Link>
          <img src = {campus.imageUrl}
          style = {{
            display:"block",
            margin: "10px",
            height: "100px",
            width: "200px",
          }}>
          </img>
          <p>{campus.description}</p>
          <p>{campus.address}</p>
          <button onClick = {() => deleteCampus(campus.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;