import { SidebarComponent } from './sidebar.component';
import React from 'react';
import { shallow, mount, render } from 'enzyme';


const sidebar = {
    skills: [{ name: "Teste", value: "40%" }],
    contact:
        {
            "tel": "123-456-7890",
            "cel": "012-345-6789",
            "address": "1490 General Woods. Colorado Springs",
            "website": "brianwalker.co",
            "mail": "mail@brianwalker.co"
        },
    description: "Texto para teste"
};

describe("Sidebar", () => {
    const wrapper = mount(<SidebarComponent {...sidebar} />)
    const wrapper2 = shallow(<SidebarComponent {...sidebar} />)
    test('Gerar sidebar', () => {
        expect(wrapper.text()).toContain("PROFILE");
        expect(wrapper.text()).toContain("CONTACT");
        expect(wrapper.text()).toContain("SKILLS");
    });

})