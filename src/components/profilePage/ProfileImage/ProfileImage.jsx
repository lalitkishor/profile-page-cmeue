import React from "react";
import "./ProfileImagesStyles.css";
import defaultPic from "../../../utils/icons/profile.png";

class ProfileImage extends React.Component {
    render() {
        return (
            <div className="profile_picture">
                <img className="img-responsive size_of_dp" src={this.props.imgSrc || defaultPic} alt={this.props.alt || "profile image"}/>
            </div>
        );
    }
}
export default ProfileImage;
