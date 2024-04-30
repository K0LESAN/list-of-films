import { Link, NavLink, useParams } from 'react-router-dom';
import { IProps } from './Paginator.interface';
import styles from './Paginator.module.scss';

const Paginator = ({ totalPages }: IProps) => {
  function setClassToNavLink({ isActive }: { isActive: boolean }): string {
    return `${isActive ? `${styles.disabled} ${styles.active}` : ''} ${styles.pageItem}`;
  }

  const pageItems = [];
  const page: number = Number(useParams().page);
  const start: number = Math.max(1, page - 5);
  const end: number = Math.max(Math.min(totalPages, page + 5), 11);

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
    <>
      <div className={styles.wrapper}>
        <Link
          className={`${styles.arrow} first-letter:${page === 1 ? styles.disabled : ''}`}
          to={`/pages/${String(page - 1)}`}
        >
          {'<'}
        </Link>
        {pageItems}
        <Link
          className={`${styles.arrow} ${page === totalPages ? styles.disabled : ''}`}
          to={`/pages/${String(page + 1)}`}
        >
          {'>'}
        </Link>
      </div>
    </>
  );
};

export default Paginator;
