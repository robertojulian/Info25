import { type ReactNode } from 'react';
import styles from './CardsConteiner.module.css'



type CardsContainerProps = {
  title: string;
  description: string;
  children: ReactNode;
};

function CardsContainer(props: CardsContainerProps) {
  const { title, description, children } = props;
  return (
    <section className={styles.content}>
      <h2 className={styles.title}>{title}</h2>
      <p>{description}</p>
      <div className={styles.postsContainer}>{children}</div>
    </section>
  );
}

export default CardsContainer;