import React,{Component} from "react";
import "./sidebar.css";

//componentes
import {ProfileComponent} from "./profile/profile.component";
import {ContactComponent} from "./contact/contact.component";
import {SkillsComponent} from "./skills/skills.component"; 

export class SidebarComponent extends Component {
   constructor(props){
       super(props)
   } 
    
    render() {
        return (
            <div className="context"> 
                <ProfileComponent {...this.props} />
                <ContactComponent {...this.props} />
                <SkillsComponent {...this.props} />
           
            </div>
        )
    }
}