import React, { Component } from "react";
import "./Student.css";
import students from "../students.json"


class Student extends Component {
  render() {
    const { student } = this.props;
    return (
      <div className="student-card">
        <img src={student.image} alt={student.name} />
        <p className="student-name">Name: {student.name}</p>
        <p className="student-age">Age: {student.age}</p>
        <p className="student-faculty">Faculty: {student.faculty}</p>
      </div>
    );
  }
}

class StudentsList extends Component {
  render() {
    const { students } = this.props;
    return (
      <div className="students-list">
        {students.map((student) => (
          <Student key={student.name} student={student} />
        ))}
      </div>
    );
  }
}

class Students extends Component {
  state = {
    display: "all",
  };

  display = (display) => {
    this.setState({ display });
  };

  render() {
    const { display } = this.state;
    return (
      <div className="student-page">
        <div className="buttons">
          <button onClick={() => this.display("all")}>All</button>
          <button onClick={() => this.display("TDI")}>Filière TDI</button>
          <button onClick={() => this.display("TRI")}>Filière TRI</button>
          <button onClick={() => this.display("")}>Clear</button>
        </div>
        {display === "all" && <StudentsList students={students} />}
        {display === "TDI" && (
          <StudentsList
            students={students.filter((s) => s.faculty === "TRI")}
          />
        )}
        {display === "TRI" && (
          <StudentsList
            students={students.filter((s) => s.faculty === "TDI")}
          />
        )}
        {display === "" && (
          <p className="no-students">No students to display</p>
        )}
      </div>
   
    )
  }
}

export default Students;