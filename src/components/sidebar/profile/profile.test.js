import { ProfileComponent } from './profile.component';
import React from 'react';
import { shallow, mount, render } from 'enzyme';


const profile = {description: "Texto para teste"};

describe("Profile", () => {
    const wrapper = mount(<ProfileComponent {...profile} />)
    const wrapper2 = shallow(<ProfileComponent {...profile} />)
    test('Gerar perfil', () => {  
        expect(wrapper.text()).toContain("PROFILE")
    });

    test('Checando propriedades', () => {
        expect(wrapper.props().description).toBe(profile.description);
        wrapper.setProps({
            description: "Novo texto para teste"
        });
        expect(wrapper.props().description).not.toBe(profile.description);
    });

    test("Testando elementos", () => {
       const html = wrapper2.html();
       expect(html.includes(`<p class="text"> ${profile.description}</p>`)).toBe(true);
    })
})