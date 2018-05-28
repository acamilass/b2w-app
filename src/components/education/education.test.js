import {EducationComponent} from './education.component'; 
import React from 'react'; 
import { shallow, mount, render } from 'enzyme';  

    
const educations = {education: [         
    { ex: { name: 'UFPE', date: '2010-2016', description: 'Administração' } }     
] };

describe("Education",() => {
    const wrapper=mount(<EducationComponent {...educations}/>)  
    const wrapper2=shallow(<EducationComponent {...educations}/>)
    test('Gerar histórico de educação', () => { 
        //const wrapper=mount(<WorkExperienceComponent {...experiences}/>)    
        expect(wrapper.text()).toContain("EDUCATION")
    
    });
    
    test('Checando propriedades', () => {
      //  const wrapper = mount(<WorkExperienceComponent {...experiences} />);
        expect(wrapper.props().education[0].ex.name).toBe('UFPE');
        expect(wrapper.props().education[0].ex.date).toBe('2010-2016');
        expect(wrapper.props().education[0].ex.description).toBe('Administração');
        wrapper.setProps({education: [         
            { ex: { name: 'José', date: 'Junho de 2018', description: 'Trabalho no Google' } }     
        ] });
        expect(wrapper.props().education[0].ex.name).not.toBe('UFPE');
        expect(wrapper.props().education[0].ex.date).not.toBe('2010-2016');
        expect(wrapper.props().education[0].ex.description).not.toBe('Administração');
      });
      
      test("Testando elementos", () => {
        
        const html=wrapper2.html();
        expect(html.includes('<div class="educ_title"></div>')).toBe(true);
        expect(html.includes('<div class="educ_date"></div>')).toBe(true);
        expect(html.includes('<div class="educ_description"></div>')).toBe(true);
        
    })
})