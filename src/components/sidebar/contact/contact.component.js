import React, {Component} from "react";
import "./contact.css";

export class ContactComponent extends Component {
    render() {
        const contact= Object.assign({}, this.props.contact);
        return(
            <div>
                <h2 className="text-title">CONTACT</h2>
                <p className="text"> 
                    {contact.tel}
                    <br/>
                    {contact.cel}
                </p>
                <p className="text text_address"> {contact.address}</p>
                <p className="text"> 
                    {contact.website}
                    <br/>
                    {contact.mail}
                </p>
            </div>
        )
    } 
}
