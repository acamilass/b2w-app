import React, {Component} from "react";
import "./profile.css";

export class ProfileComponent extends Component {
    render() {
        return(
            <div>
                <h2 className="text-title">PROFILE</h2>
                <p className="text"> {this.props.description}</p>
            </div>
        )
    } 
}