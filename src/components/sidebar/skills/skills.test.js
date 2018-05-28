import { SkillsComponent } from './skills.component';
import React from 'react';
import { shallow, mount, render } from 'enzyme';


const habilidades = {skills: [ {name: "Teste", value: "40%"} ]};

describe("Skills", () => {
    const wrapper = mount(<SkillsComponent {...habilidades} />)
    const wrapper2 = shallow(<SkillsComponent {...habilidades} />)
    test('Gerar habilidades', () => {  
        expect(wrapper.text()).toContain("SKILLS")
    });

    test('Checando propriedades', () => {
        expect(wrapper.props().skills[0].name).toBe(habilidades.skills[0].name);
        expect(wrapper.props().skills[0].value).toBe(habilidades.skills[0].value);
        wrapper.setProps({
            skills: [ {name: "TesteTeste", value: "50%"} ]
        });
        expect(wrapper.props().skills[0].name).not.toBe(habilidades.skills[0].name);
        expect(wrapper.props().skills[0].value).not.toBe(habilidades.skills[0].value);
    });

    test("Testando elementos", () => {
       const html = wrapper2.html();
       expect(html.includes(`<div class="progressbar_color" style="height:10px;width:${habilidades.skills[0].value}"></div>`)).toBe(true);
    })
})