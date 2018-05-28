import React, {Component} from "react";
import "./skills.css";

export class SkillsComponent extends Component {
    render() {
        const skills= Object.assign({}, this.props.skills);
        return(
            <div>
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