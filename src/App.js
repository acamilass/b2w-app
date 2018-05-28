import React, { Component } from 'react';
import './App.css';
import { HeaderComponent } from "./components/header/header.component";
import { EducationComponent } from "./components/education/education.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { WorkExperienceComponent } from "./components/work_experience/work_experience.component";
import { ApiService } from "./Api.service";

class App extends Component {


  constructor() {
    super();
    this.state = {
      res: {},
      loading: true
    };
    this.url = 'http://www.mocky.io/v2/5a5e38f3330000b0261923a5';
  }

  componentDidMount() {
    ApiService.getApi(this.url)
      .then(res => {
        this.setState({ res: res.profile, loading: false })
      })
      .catch(console.log)
  }
  render() {
    if (this.state.loading) { // if your component doesn't have to wait for an async action, remove this block 
      return null; // render null when app is not ready
    }
    return (

      <div className="main">
        <div className="container">
          <HeaderComponent {...this.state.res} />
          <SidebarComponent {...this.state.res} />
        </div>
        <div className="context_2">
          <WorkExperienceComponent {...this.state.res} />
          <EducationComponent {...this.state.res} />
        </div>
      </div>

    );
  }
}

export default App;
