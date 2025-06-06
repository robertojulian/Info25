
import styles from './componentes/PostCard.module.css';

type CardsProps = {
  titulo: string;
  categoria : string;
  alt?:string;
  src:string;

}


function PostCards
(props:CardsProps){
  const { titulo,categoria,src,alt} = props;
    return(
    <>
      <article className={styles.row}>
        <div className={styles.row_poster && styles.container}>
          <img className={styles.row_poster && styles.img}src={src} alt={alt} />
            <h1 className={styles.title}>{titulo}</h1>
            <p className={styles.categoria}>{categoria}</p>
        </div>
         <button className={styles.boton}>Reproducir</button>
      </article>
    </>
  );
}

export default PostCards;




