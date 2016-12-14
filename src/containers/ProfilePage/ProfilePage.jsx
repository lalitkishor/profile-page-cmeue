import React from "react";
import "./ProfilePageStyles.css";
import Image from "../../components/profilePage/ProfileImage/ProfileImage";
import Info from "../../components/profilePage/StudentInfo/StudentInfo";
import AboutStudent from "../../components/profilePage/AboutStudent/AboutStudent";
import SkillSet from "../../components/common/SkillArea/SkillArea";
class ProfilePage extends React.Component {
    render() {
        let stud = {
            name: "John Doe",
            userName: "johndoe",
            college: "Govt. Engineering College Bikaner",
            branch: "Computer Science & Engineering"
        };
        return (
            <div className="container">
                <div className="row">
                    <div className = "col-xs-4 col-md-3 col-lg-4 Image">
                        <Image/>
                    </div>
                    <div className="col-xs-8 col-md-9 col-lg-8 Info">
                        <Info studentInfo={stud}/>
                    </div>
                </div>
                <div className="row">
                    <AboutStudent/>
                </div>
                <div>
                    <SkillSet skillSet={["c++,c,JavaScript,java"]}/>
                </div>
            </div>
        );
    }
}
export default ProfilePage;
