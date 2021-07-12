import { Link } from "react-router-dom";

const CampusView = (props) => {
  const {campus} = props;
  return (
    <div>      
      <h1>{campus.name}</h1>
      <h2>{campus.address}</h2>
      <p>{campus.description}</p>
      <ul>
      {campus.students.map( student => {
        let name = student.firstname + " " + student.lastname;
        return (
          <Link to = {`/student/${student.id}`} key={student.id}>
            {name}
          </Link>
          
        );
      })}
      </ul>
    </div>
  );

};

export default CampusView;