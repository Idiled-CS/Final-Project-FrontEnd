import { Link } from "react-router-dom";

const StudentView = (props) => {
  const { student } = props;
  return (
    <div>
      <h1>{student.firstname + " " + student.lastname}</h1>
      <h1>GPA: {student.gpa}</h1>
      <h2>
      <Link to = {`/campus/${student.campus.id}`} key={student.id}>
          {student.campus.name}
      </Link>
      </h2>
      <h2>
        <Link to={{
          pathname: `/editstudent/${student.id}`,
          // state: {
          //   Id: student.id,
          //   firstname: student.firstname,
          //   lastname: student.lastname,
          //   gpa:student.gpa
          // },
          }}
          >
          Edit
        </Link>
      </h2>
      <h2>
        <Link to = {'/students'} key={student.id + "back"} >
          Back To Students
        </Link>
      </h2>
    </div>
  );

};

export default StudentView;