import Head from 'next/head';
import {Warning} from '../components/common';

const Page404 = () => {
  return (
    <>
      <Head>
        <title>Github Jobs - 404 Page Not Found</title>
      </Head>
      <Warning status={404}/>
    </>
  );
};

export default Page404;
