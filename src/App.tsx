// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import PostCard from './componentes/tarjeta-fotos'
// import Card1 from './componentes/tarjeta-fotos'
import PostCards from './Cards'
import CardsContainer from './componentes/CardsContainer'
import styles from './componentes/CardsConteiner.module.css'
import  Navbar  from './componentes/navbar'



type Post = {
  titulo:string;
  descripcion:string;
  categoria:string;
  src:string;
};

type Post1 = {
  titulo:string;
  descripcion:string;
  categoria:string;
  src:string;
};

type Post2 = {
  titulo:string;
  descripcion:string;
  categoria:string;
  src:string;
};
type Post3 = {
  titulo:string;
  descripcion:string;
  categoria:string;
  src:string;
};



type Response = {
  mostViews: {
    categoryTitle: string;
    categoryDescription:string;
    posts: Post[];  
    };
  forYou:{
    categoryTitle:string;
    categoryDescription:string;
    posts1: Post1[];
  };
  popular:{
    categoryTitle:string;
    categoryDescription:string;
    posts2: Post2[];
  };
  onlySeries:{
    categoryTitle:string;
    categoryDescription:string;
    posts3: Post3[];
  }
  
};


const response: Response = {
  mostViews: 
    {
      categoryTitle:'Peliculas para ver en familia',
      categoryDescription:'',
      posts: [
        {
          titulo:'Gato con botas',
          descripcion:'', 
          categoria:'Magico apacionante comedia de accion',
          src: './src/componentes/fotos/gato.jpg',
        },
        {
          titulo:'Django',
          descripcion:'', 
          categoria:'Ingenioso Excentrico Oeste',
          src: './src/componentes/fotos/django.jpg',
        },
        {
          titulo:'Mi Villano Favorito 3',
          descripcion:'', 
          categoria:'Familiar Animado',
          src: './src/componentes/fotos/mvf3.jpg',
        },
        {
          titulo:'Hotel Transylvania 3',
          descripcion:'', 
          categoria:'Animado Familiar comedia',
          src: './src/componentes/fotos/hotel.jpg',
        },
        {
          titulo:'Los Hombres Lobos',
          descripcion:'', 
          categoria:'Animado Entretenido',
          src: './src/componentes/fotos/lobo.jpg',
        },
        {
          titulo:'Shrek',
          descripcion:'', 
          categoria:'Magico Comedia',
          src: './src/componentes/fotos/shrek.jpg',
        },
        {
          titulo:'El Castillo vagabundo',
          descripcion:'', 
          categoria:'Magico Imaginativo Películas de anime',
          src: './src/componentes/fotos/castillo.jpg',
        },
      ]
      
    },
  forYou:
  {
    categoryTitle:'Sugeridos para ti',
    categoryDescription:'',
    posts1:[
          {
          titulo:'Dark',
          descripcion:'', 
          categoria:'De Misterio ',
          src: './src/componentes/fotos/dark.jpg',
        },
        {
          titulo:'La Niebla',
          descripcion:'', 
          categoria:'De Suspenso',
          src: './src/componentes/fotos/lani.jpg',
        },
        {
          titulo:'La Brea',
          descripcion:'', 
          categoria:'Inquietante Intigra',
          src: './src/componentes/fotos/lb.jpg',
        },
        {
          titulo:'Strenger Things',
          descripcion:'', 
          categoria:'De Misterio Escalofriante',
          src: './src/componentes/fotos/st.jpg',
        },
        {
          titulo:'You',
          descripcion:'', 
          categoria:'De Intriga',
          src: './src/componentes/fotos/tu.jpg',
        },
        {
          titulo:'Vinagre de Manzana',
          descripcion:'', 
          categoria:'Drama Provocador',
          src: './src/componentes/fotos/vin.jpg',
        },
        {
          titulo:'La Señal',
          descripcion:'', 
          categoria:'Surrealista',
          src: './src/componentes/fotos/sig.jpg',
        },
    ]
  },
  popular: 
    {
      categoryTitle:'Peliculas y Series Populares',
      categoryDescription:'',
      posts2: [
        {
          titulo:'Esta Estrella',
          descripcion:'', 
          categoria:'Animacion',
          src: './src/componentes/fotos/anime.jpg',
        },
        {
          titulo:'',
          descripcion:'', 
          categoria:'Ingenioso Excentrico Oeste',
          src: './src/componentes/fotos/django.jpg',
        },
        {
          titulo:'Ginny y Geogina',
          descripcion:'', 
          categoria:'serie',
          src: './src/componentes/fotos/ginny.jpg',
        },
        {
          titulo:'Megan',
          descripcion:'', 
          categoria:'Skifi',
          src: './src/componentes/fotos/megan.jpg',
        },
        {
          titulo:'Corazon Delator',
          descripcion:'', 
          categoria:'De Misterio',
          src: './src/componentes/fotos/heart.jpg',
        },
        {
          titulo:'Sara',
          descripcion:'', 
          categoria:'Suspenso',
          src: './src/componentes/fotos/sara.jpg',
        },
        {
          titulo:'La Viuda Negra',
          descripcion:'', 
          categoria:'Thriller',
          src: './src/componentes/fotos/viuda.jpg',
        },
      ]
      
    },
  onlySeries: 
    {
      categoryTitle:'Solo Series',
      categoryDescription:'',
      posts3: [
        {
          titulo:'Dark',
          descripcion:'', 
          categoria:'De Misterio ',
          src: './src/componentes/fotos/dark.jpg',
        },
        {
          titulo:'La Niebla',
          descripcion:'', 
          categoria:'De Suspenso',
          src: './src/componentes/fotos/lani.jpg',
        },
        {
          titulo:'La Brea',
          descripcion:'', 
          categoria:'Inquietante Intigra',
          src: './src/componentes/fotos/lb.jpg',
        },
        {
          titulo:'Strenger Things',
          descripcion:'', 
          categoria:'De Misterio Escalofriante',
          src: './src/componentes/fotos/st.jpg',
        },
        {
          titulo:'You',
          descripcion:'', 
          categoria:'De Intriga',
          src: './src/componentes/fotos/tu.jpg',
        },
        {
          titulo:'Vinagre de Manzana',
          descripcion:'', 
          categoria:'Drama Provocador',
          src: './src/componentes/fotos/vin.jpg',
        },
        {
          titulo:'La Señal',
          descripcion:'', 
          categoria:'Surrealista',
          src: './src/componentes/fotos/sig.jpg',
        },
      ]
      
    },
};


function App() {
  const {mostViews, forYou,popular,onlySeries} = response;
  return(
    <div className={styles.body && styles.code}>
      <Navbar/>
      <CardsContainer title = {mostViews.categoryTitle} description={mostViews.categoryDescription}>
        {mostViews.posts.map((post)=>{
          return(
            <div className={styles.container}>
              <PostCards
                titulo={post.titulo} categoria={post.categoria} src={post.src}>
              </PostCards>
            </div>
          );
        })}
      </CardsContainer>

      <CardsContainer title={forYou.categoryTitle} description={forYou.categoryDescription}>
        {forYou.posts1.map((post1) =>{
          return (
            <div className={styles.container}>
              <PostCards
                titulo={post1.titulo} categoria={post1.categoria} src={post1.src}>
              </PostCards>
            </div>
          )
        })}
      </CardsContainer>

      <CardsContainer title={popular.categoryTitle} description={popular.categoryDescription}>
        {popular.posts2.map((post2) =>{
          return (
            <div className={styles.container}>
              <PostCards
                titulo={post2.titulo} categoria={post2.categoria} src={post2.src}>
              </PostCards>
            </div>
          )
        })}
      </CardsContainer>

      <CardsContainer title={onlySeries.categoryTitle} description={onlySeries.categoryDescription}>
        {onlySeries.posts3.map((post3) =>{
          return (
            <div className={styles.container}>
              <PostCards
                titulo={post3.titulo} categoria={post3.categoria} src={post3.src}>
              </PostCards>
            </div>
          )
        })}
      </CardsContainer>
    </div>
  );

};


export default App

// function Card() {
//   return(
//     <>
//     <Card1
//       titulo ='title'
//       buttom ='boton'
//       precio = 'presio'
//       descripcion = 'description'
//       src = 'src'
//       alt = 'desc' 
//     />
//     </>
//   )
// }
// export default Card
