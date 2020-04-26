// Transforme os seguintes trechos de código utilizando sync/await:
import axios from 'axios';

//1.1
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
const umPorSegundo = async () => {
    await delay(console.log('1s'));
    await delay(console.log('2s'));
    await delay(console.log('3s'));
}

umPorSegundo();


//1.2
const getUserFromGithub = async (user) => {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`);
        console.log(response.data);
    } catch (err) {
        console.log('Usúario não existe');
    }
}

getUserFromGithub('reidyllalima');
getUserFromGithub('reidyllalima111');


//1.3
class Github {
    static async getRepositories(repo) {
        try {
            const response = await axios.get(`https:/api.github.com/repos/${repo}`);
            console.log(response.data);
        } catch (err) {
            console.log('Repositório não existe')
        }
    }
}

Github.getRepositories('reidyllalima/rocketseatCursoES6-rocketseat-javascriptES6');
Github.getRepositories('reidyllalima/aaaa');


//1.4
const buscaUsuario = async usuario => {
    try {
        const responseUsuario = await axios.get(`https://api.github.com/users/${usuario}`);
        console.log(responseUsuario.data);
    } catch (err) {
        console.log('Usuário não existe');
    }
}
buscaUsuario('reidyllalima')