import type { PropsWithChildren } from 'react';
import styles from './index.module.scss';

const Container = ({ children }: PropsWithChildren) => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;
