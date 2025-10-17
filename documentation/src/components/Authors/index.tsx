import React from 'react';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type Author = {
  name: string;
  about: string;
  avatar?: string; // Optional photo URL
};

const authors: Author[] = [
  {
    name: 'Nate Washburn',
    about: 'A professional web developer and student at Utah State University.',
    avatar: 'img/natePic.jpg',
  },
  {
    name: 'Saxton Calvert',
    about:
      'A software developer assistant at Space Dynamics Laboratory and student at Utah State University.',
    avatar: 'img/saxtonPic.jpg',
  },
  {
    name: 'Alex Johnson',
    about: 'Contributor focusing on VS Code customization and UI design.',
  },
  {
    name: 'Sam Lee',
    about: 'Technical writer and documentation enthusiast.',
  },
];

function AuthorCard({ name, about, avatar }: Author) {
  return (
    <div className={styles.authorCard}>
      <div className={styles.avatarContainer}>
        {avatar ? (
          <img
            src={avatar}
            alt={`${name}'s avatar`}
            className={styles.avatar}
          />
        ) : (
          <div className={styles.placeholderAvatar}>{name[0]}</div>
        )}
      </div>
      <Heading as='h3' className={styles.authorName}>
        {name}
      </Heading>
      <p className={styles.authorAbout}>{about}</p>
    </div>
  );
}

export default function AuthorsSection(): React.ReactNode {
  return (
    <section className={styles.authorsSection}>
      <Heading as='h1' className={styles.sectionTitle}>
        Authors
      </Heading>
      <div className={styles.cardsContainer}>
        {authors.map((author, idx) => (
          <AuthorCard key={idx} {...author} />
        ))}
      </div>
    </section>
  );
}
