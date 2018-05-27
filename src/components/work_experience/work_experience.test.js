import {WorkExperienceComponent} from './work_experience.component'; 
import React from 'react'; 
import { shallow, mount, render } from 'enzyme';  

    
const experience = {     experience: [         
    { ex: { name: 'Vagner', date: 'Hoje', description: 'Trabalho na VASP' } }     
] }

test('Gerar experiência profissional', () => { 
    const wrapper = mount(<WorkExperienceComponent {...experience}/>)    
    expect(wrapper.text()).toContain("WORK EXPERIENCE")

});