import { ContactComponent } from './contact.component';
import React from 'react';
import { shallow, mount, render } from 'enzyme';


const contacts = {
    contact:
        {
            "tel": "123-456-7890",
            "cel": "012-345-6789",
            "address": "1490 General Woods. Colorado Springs",
            "website": "brianwalker.co",
            "mail": "mail@brianwalker.co"
        }
};

describe("Contact", () => {
    const wrapper = mount(<ContactComponent {...contacts} />)
    const wrapper2 = shallow(<ContactComponent {...contacts} />)
    test('Gerar contatos', () => {
        expect(wrapper.text()).toContain("CONTACT")
    });

    test('Checando propriedades', () => {
        expect(wrapper.props().contact.tel).toBe(contacts.contact.tel);
        expect(wrapper.props().contact.cel).toBe(contacts.contact.cel);
        expect(wrapper.props().contact.address).toBe(contacts.contact.address);
        expect(wrapper.props().contact.website).toBe(contacts.contact.website);
        expect(wrapper.props().contact.mail).toBe(contacts.contact.mail);
        wrapper.setProps({ contact:
            {"tel": "123-456-4500",
            "cel": "012-345-1234",
            "address": "2234 General Woods. New York",
            "website": "josephwalker.co",
            "mail": "mail@josephwalker.co"}
        });
        expect(wrapper.props().contact.tel).not.toBe(contacts.contact.tel);
        expect(wrapper.props().contact.cel).not.toBe(contacts.contact.cel);
        expect(wrapper.props().contact.address).not.toBe(contacts.contact.address);
        expect(wrapper.props().contact.website).not.toBe(contacts.contact.website);
        expect(wrapper.props().contact.mail).not.toBe(contacts.contact.mail);
    });

    test("Testando elementos", () => {
        const html = wrapper2.html();
        expect(html.includes(`<p class="text text_address"> ${contacts.contact.address}</p>`)).toBe(true);
        expect(wrapper2.text()).toContain("CONTACT");
    })
})