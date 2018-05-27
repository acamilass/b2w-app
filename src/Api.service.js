export class ApiService {
    static getApi=async (url) => {
        const resposta=await fetch(url);
        const body=await resposta.json();
            if(resposta.status !== 200) {
                throw Error ("Não foi possível carregar a informação");
            }
        return (body);
    }
}