import React from "react";
import "./StudentInfoStyles.css";

class StudentInfo extends React.Component {
    render() {
        let stuInfo = this.props.studentInfo;

        return (
            <div className="Student_Info">
                <h3 className="name">{stuInfo.name}</h3>
                <p>{stuInfo.branch}</p>
                <p>{stuInfo.college}</p>
            </div>
        );
    }
}
export default StudentInfo;
