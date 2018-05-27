import React,{Component} from "react";
import "./sidebar.css";

export class SidebarComponent extends Component {
   constructor(props){
       super(props)
   } 
    
    render() {
        const contact= Object.assign({}, this.props.contact);
        const skills= Object.assign({}, this.props.skills);
        return (
            <div className="context"> 
                <h2 className="text-title">PROFILE</h2>
                <p className="text"> {this.props.description}</p>
                
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
               
                <h2 className="text-title">SKILLS</h2>
                    {
                        Object.keys(skills).map(index => {
                            
                            const skill = skills[index];

                            return (
                                <div className="progressbar" key={index}>
                                    <p className="progressbar_title">{skill.name}</p>
                                    <div className="progressbar_border">
                                        <div className="progressbar_color" style={
                                            {height:'10px', width: skill.value}
                                        }>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
            </div>
        )
    }
}