import { FC } from "react";
import { GetServerSideProps } from "next";
import Head from "next/head";
import ContactInfo from "../../components/ContactInfo";
import { contactType } from "../../types";

type contactTypeProps = {
  contact: contactType;
};

const Contact: FC<contactTypeProps> = ({ contact }) => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <ContactInfo contact={contact} />
    </>
  );
};

export default Contact;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      contact: data,
    },
  };
};
