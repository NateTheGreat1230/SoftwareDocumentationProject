import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type Author = {
  name: string;
  about: string;
  avatar?: string; // optional author photo or icon
};

const authors: Author[] = [
  {
    name: 'Nate Washburn',
    about: 'A professional web developer and student at Utah State University.',
    // avatar: '/img/nate-avatar.png',
  },
  {
    name: 'Saxton Calvert',
    about: 'A software developer assistant at Space Dynamics Laboratory and student at Utah State University.',
    // avatar: '/img/jane-avatar.png',
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
    <div className={clsx('col col--6 col--md--3', styles.authorCard)}>
      <div className='text--center'>
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
      <div className='text--center padding-horiz--md'>
        <Heading as='h3'>{name}</Heading>
        <p>{about}</p>
      </div>
    </div>
  );
}

export default function AuthorsSection(): React.ReactNode {
  return (
    <section className={styles.authorsSection}>
      <div className='container'>
        <Heading as='h1' className='text--center margin-bottom--lg'>
          Authors
        </Heading>
        <div className='row'>
          {authors.map((author, idx) => (
            <AuthorCard key={idx} {...author} />
          ))}
        </div>
      </div>
    </section>
  );
}
