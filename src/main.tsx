// import { createElement, StrictMode } from 'react'
import { createElement} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import PostCard from './componentes/tarjeta-fotos.tsx'
// import Card1 from './componentes/tarjeta-fotos.tsx'

const post=createElement(PostCard, {
    titulo: 'hello-title',
    src: 'urldelaimagen',
    descripcion: 'descripcion',
    precio: 'precio',
    alt: 'alt', 
});

// const card = createElement(Card1,{
//     titulo: 'title',
//     buttom: 'boton',
//     precio: 'presio',
//     descripcion: 'description',
//     src: 'src',
//     alt: 'desc',
// });

// console.log(card);
// createRoot(document.getElementById('card')!).render(<Card/>);

console.log(post);

createRoot(document.getElementById('root')!).render(<App/>);



//createRoot(document.getElementById('root')!).render(
//  <StrictMode>
 //   <App />
//</StrictMode>,
//)
