
import styles from './PostCard.module.css';
type PostCardProps = {
    src: string;
    titulo: string;
    alt: string;
    descripcion: string;

}
function PostCard(props: PostCardProps) {
    const {src,titulo,descripcion,alt} = props;
    return(
        <article className={styles.content}>
            <h1 className={styles.title}>{titulo}</h1>
            <img className={styles.img} src={src} alt={alt} />
            <p className={styles.descripcion}> {descripcion}</p>
        </article>
    );
}

// type Card1Props = {
//     titulo: string;
//     buttom: string;
//     precio: string;
//     descripcion?: string;
//     src: string;
//     alt: string;

// }

// function Card1(props: Card1Props) {
//     const {titulo,descripcion,buttom,src,alt} = props;
//     return (
//         <div class="card" style="width: 18rem;">
//         <img src={src} class="card-img-top" alt={alt}/>
//         <div class="card-body">
//         <h5 class="card-title">{titulo}</h5>
//         <p class="card-text">{descripcion}</p>
//         <a href="#" class="btn btn-primary">{buttom}</a>
//         </div>
//         </div>
//     );
// }

// export default Card1;
export default PostCard;
