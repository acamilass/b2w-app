import React,{Component} from "react";
import "./header.css";
import {SidebarComponent} from "../sidebar/sidebar.component";
import {WorkExperienceComponent} from "../work_experience/work_experience.component";
import {EducationComponent} from "../education/education.component"

export class HeaderComponent extends Component {
   
    render() {
        const {image, name, profession}= this.props;
        return ( 
            <header>
                <div className="losango--top"> 
                    <div className="losango"> 
                        <img src={`${image}?raw=true`} id="imagem" alt="fotoAvatar"/> 
                    </div>
                </div>
                <br/>
                <h1 className="displayName">{name}</h1> 
                <p className="profession">{profession}</p>
            </header>  

        )
    }
}