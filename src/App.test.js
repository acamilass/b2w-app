import App from './App';
import React from 'react';
import { shallow, mount, render } from 'enzyme';


describe("App", () => {
    const wrapper = mount(<App />)
    const wrapper2 = render(<App />)
    test('Gerar App', () => {
        expect(wrapper.text()).toContain("PROFILE");
        expect(wrapper.text()).toContain("CONTACT");
        expect(wrapper.text()).toContain("SKILLS");
    });
    test('Snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

})