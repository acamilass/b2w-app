import {WorkExperienceComponent} from './work_experience.component'; 
import React from 'react'; 
import { shallow, mount, render } from 'enzyme';  

    
const experiences = {experience: [         
    { ex: { name: 'Vagner', date: 'Hoje', description: 'Trabalho na VASP' } }     
] };

describe("Work Experience",() => {
    const wrapper=mount(<WorkExperienceComponent {...experiences}/>) 
    const wrapper2=shallow(<WorkExperienceComponent {...experiences}/>)  
    test('Gerar experiência profissional', () => { 
        //const wrapper=mount(<WorkExperienceComponent {...experiences}/>)    
        expect(wrapper.text()).toContain("WORK EXPERIENCE")
    
    });
    
    test('Checando propriedades', () => {
      //  const wrapper = mount(<WorkExperienceComponent {...experiences} />);
        expect(wrapper.props().experience[0].ex.name).toBe('Vagner');
        expect(wrapper.props().experience[0].ex.date).toBe('Hoje');
        expect(wrapper.props().experience[0].ex.description).toBe('Trabalho na VASP');
        wrapper.setProps({experience: [         
            { ex: { name: 'José', date: 'Junho de 2018', description: 'Trabalho no Google' } }     
        ] });
        expect(wrapper.props().experience[0].ex.name).not.toBe('Vagner');
        expect(wrapper.props().experience[0].ex.date).not.toBe('Hoje');
        expect(wrapper.props().experience[0].ex.description).not.toBe('Trabalho na VASP');
      });
    
      test("Testando elementos", () => {
        
        const html=wrapper2.html();
        expect(html.includes('<div class="exper_title"></div>')).toBe(true);
        expect(html.includes('<div class="exper_date"></div>')).toBe(true);
        expect(html.includes('<div class="exper_description"></div>')).toBe(true);
        
    }

    )  
})

                                   
