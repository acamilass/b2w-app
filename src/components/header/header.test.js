import {HeaderComponent} from './header.component'; 
import React from 'react'; 
import { shallow, mount, render } from 'enzyme';  

    
const profiles = {image: "https://www.clickgratis.com.br/fotos-imagens/imagens/aHR0cHM6Ly8xaDRoZmUxMHh6OG0zZzN4a2gyd2I5bGMtd3BlbmdpbmUubmV0ZG5hLXNzbC5jb20vYmxvZy9maWxlcy8yMDE1LzA4L3RoZXN0b2Nrcy1pbWFnZW0uanBn.jpg", 
    name: "Maria", profession: "Professora"};

describe("Profile",() => {
    const wrapper=mount(<HeaderComponent {...profiles}/>) 
    const wrapper2=shallow(<HeaderComponent {...profiles}/>)  
    test('Gerar histórico de educação', () => { 
        //const wrapper=mount(<WorkExperienceComponent {...experiences}/>)    
        expect(wrapper.text()).toContain("Professora")
    
    });
    
    test('Checando propriedades', () => {
      //  const wrapper = mount(<WorkExperienceComponent {...experiences} />);
        expect(wrapper.props().image).toBe(profiles.image);
        expect(wrapper.props().name).toBe(profiles.name);
        expect(wrapper.props().profession).toBe(profiles.profession);
        wrapper.setProps({education: [         
            { ex: { name: 'José', date: 'Junho de 2018', description: 'Trabalho no Google' } }     
        ] });
        expect(wrapper.props().image).not.toBe(profiles.image +"?raw=true");
        expect(wrapper.props().name).not.toBe("Rosa");
        expect(wrapper.props().profession).not.toBe("Vendedora");
    });

    test("Testando elementos", () => {
        
        const html=wrapper2.html();
        expect(html.includes(`<img src="${profiles.image}?raw=true" id="imagem" alt="fotoAvatar"/>`)).toBe(true);
        expect(html.includes(`<h1 class="displayName">${profiles.name}</h1>`)).toBe(true);
        expect(html.includes(`<p class="profession">${profiles.profession}</p>`)).toBe(true);
        
    })
      
})
 
                