import gitPixelArt from '../imagens/pixel-art-1.gif';
import gitOnlineStore from '../imagens/gravacao-online-store-2.gif.gif';
import gitTodoList from '../imagens/todo-list-docker.gif';

const projetosApi = [
    {
      id: 1,
      title: 'Pixel-Art',
      href: 'https://github.com/RegislaineRegis/pixel-art',
      git: gitPixelArt,
      descrição: 'Implementei uma página web que contém uma paleta de cores funcional que poderá ser utilizada para criar desenhos em pixels. Para isto utilizamos javascript, css e html, para acessar o projeto no GitHub so clicar no ícone abaixo do gif'
    },
    {
      id: 2,
      title: 'Online-Store',
      href: 'https://github.com/RegislaineRegis/Project-online-store',
      git: gitOnlineStore,
      descrição: 'Criamos uma versão simplificada, sem persistência no banco de dados, de uma loja online, apenas o acesso a uma API do mercado livre, foi desenvolvendo em grupo'
    },
    {
      id: 3,
      title: 'Todo-List',
      href: 'https://github.com/RegislaineRegis/todolist',
      git: gitTodoList,
      descrição: 'Lista de tarefas com conteinerizar aplicações criando uma conxeção entre elas'
    },

  ];
  
  export default projetosApi;