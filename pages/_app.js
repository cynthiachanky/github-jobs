import '../styles/custom.scss';
import Head from 'next/head';
import {Footer, Header} from '../components/layout';

const GithubJobs = ({Component, pageProps}) => (
  <>
    <Head>
      <title>Github Jobs</title>
      <meta name="description" content="A job search app with Github Jobs API"/>
      <meta name="author" content="Cynthia Chan"/>
      <link rel="icon" href="/devchallenges.png"/>
    </Head>
    <Header/>
    <Component {...pageProps}/>
    <Footer/>
  </>
);

export default GithubJobs;
