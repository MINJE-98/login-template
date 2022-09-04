/* eslint-disable no-underscore-dangle */
import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';

import axios from 'axios';
import { useQuery } from 'react-query';
import withAuthServerSideProps from 'src/hocs/withAuthGetServerSideProps';
import { useAuth } from 'src/hooks/auth/context/AuthContext';

import styles from '../../styles/Home.module.css';

const Home: NextPage = () => {
  const { userInfo, handleLogout } = useAuth();
  const result = useQuery('userInfo', () => axios.get('/api/user'), {
    retry: false,
    refetchOnWindowFocus: false,
    cacheTime: 0,
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>🙃Welcome {userInfo && userInfo.username}🙃</title>
        <meta
          name="description"
          content="passport로 Session을 이용한 로그인 구현"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h3>Provider: {userInfo?.provider}</h3>
        <h1 className={styles.title}>ServerSide</h1>
        <h3>🙃Welcome {userInfo && userInfo.username}🙃</h3>
        <h1 className={styles.title}>ClientSide</h1>
        <h3>
          {result.isLoading && <>loading....</>}
          {result.isSuccess && (
            <>🙃Welcome {result.data && result.data.data.user.username}🙃</>
          )}
        </h3>
        <button type="button" onClick={handleLogout} className={styles.button}>
          로그아웃
        </button>
      </main>
    </div>
  );
};

export default Home;
export const getServerSideProps: GetServerSideProps = withAuthServerSideProps();
