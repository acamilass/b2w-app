import React,{Component} from "react";
import "./work_experience.css";

export class WorkExperienceComponent extends Component{
    
    render() {
        const experiences = Object.assign({}, this.props.experience);
        return (
            <div className="work_experience"> 
                <h1 className="work_experience--title">WORK EXPERIENCE</h1>
                    {
                        Object.keys(experiences).map(index => {
                            
                            const experience = experiences[index];

                            return (
                                <div className="work_experience--context" key={index}>
                                    <div className="exper_title">{experience.name}</div>
                                    <div className="exper_date">{experience.date}</div>
                                    <div className="exper_description">{experience.description}</div>
                                </div>
                            )
                        })
                    }
            </div>
        )
    }
}
    
    
    