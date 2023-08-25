import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Heading from "../components/Heading";
import Socials from "../components/Socials";

const { API_HOST } = process.env;

const Home = ({ socials }) => {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Home</title>
      </Head>
      <Heading tag="h1" text="Hello World" />
      <Socials socials={socials} />
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const response = await fetch(`${API_HOST}/socials`);
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      socials: data,
    },
  };
};
