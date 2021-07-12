import { Link } from "react-router-dom";

const CampusView = (props) => {
  const {campus} = props;
  return (
    <div>      
      <h1>{campus.name}</h1>
      <h2>{campus.address}</h2>
      <p>{campus.description}</p>
      <h2 style = {{
        backgroundColor: "#b3ff03"
      }}>
        <Link to = {{
          pathname:`/editcampus/${campus.id}`
        }}>
          Edit Campus
        </Link>
      </h2>
      <h2 style = {{
        backgroundColor: "#b3ff03"
      }}>
        <Link to = {'/campuses'} key={campus.id + "backCampus"} >
            Back To Campuses
        </Link>
      </h2>
      {campus.students.map( student => {
        let name = student.firstname + " " + student.lastname;
        return (
          <div>
            <h2>
            <Link to = {`/student/${student.id}`} key={student.id}>
              {name}
            </Link>
            </h2>

          </div>
        );
      })}
    </div>
  );

};

export default CampusView;