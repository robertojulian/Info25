import styles from'./Navbar.module.css';

function Navbar() {
  return (
    <header className={styles.nav && styles.navBlack}>
      <img className={styles.navLogo}src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png" alt="Logo" />
      <img className={styles.navAvatar}src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png" 
      alt="avatar" />
      <img className={styles.lupa}src="https://us.123rf.com/450wm/designofire/designofire1901/designofire190106320/114730781-vector-find-icon.jpg" alt="" />
      <img className={styles.campana} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwbjtTF_RuMukm_F4BJm1bCHpyFIY0yjEpBw&s" alt="" />
      <ul>
        <li className={styles.nav1}>
            <a href="">Inicio</a>
            <a href="">Series</a>
            <a href="">Peliculas</a>
            <a href="">Juegos</a>
            <a href="">Novedades populares</a>
            <a href="">Mi lista</a>
            <a href="">Explorar por idiomas</a>
        </li>
      </ul>
    </header>
);
}

export default Navbar;


