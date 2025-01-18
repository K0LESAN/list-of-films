import { Link, NavLink } from 'react-router-dom';
import type { ReactNode } from 'react';
import type { Props } from './index.interface';
import styles from './index.module.scss';

const Paginator = ({ totalPages, page }: Props) => {
  function setClassToNavLink({ isActive }: { isActive: boolean }): string {
    return `${isActive ? `${styles.disabled} ${styles.active}` : ''} ${styles.pageItem}`;
  }

  const pageItems: ReactNode[] = [];
  const start: number = Math.max(1, page - 5);
  const end: number = totalPages
    ? Math.max(Math.min(totalPages || 0, page + 5), 11)
    : 0;

  for (let index: number = start; index <= end; index++) {
    const path: string = `/pages/${String(index)}`;

    pageItems.push(
      <NavLink
        key={path}
        className={setClassToNavLink}
        to={path}
      >
        {index}
      </NavLink>
    );
  }

  return (
    <div className={styles.wrapper}>
      <Link
        className={`${styles.arrow} ${!totalPages || page <= 1 ? styles.disabled : ''}`}
        to={`/pages/${String(page - 1)}`}
      >
        {'<'}
      </Link>
      {pageItems}
      <Link
        className={`${styles.arrow} ${!totalPages || page >= totalPages ? styles.disabled : ''}`}
        to={`/pages/${String(page + 1)}`}
      >
        {'>'}
      </Link>
    </div>
  );
};

export default Paginator;
