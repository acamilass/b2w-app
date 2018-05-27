import React,{Component} from "react";
import "./education.css";

export class EducationComponent extends Component{
    
    render() {
        const educations = Object.assign({}, this.props.education);
        return (
            <div className="education"> 
                <h1 className="education--title">EDUCATION</h1>
                    {
                        Object.keys(educations).map(index => {
                            
                            const education = educations[index];

                            return (
                                <div className="education--context" key={index}>
                                    <div className="educ_title">{education.name}</div>
                                    <div className="educ_date">{education.date}</div>
                                    <div className="educ_description">{education.description}</div>
                                </div>
                            )
                        })
                    }
            </div>
        )
    }
}