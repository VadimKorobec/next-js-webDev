import { FC } from "react";
import Head from "next/head";
import Link from "next/link";
import Heading from "../../components/Heading";
import { GetStaticProps } from "next";
import { contactType } from "../../types";

type contactsTypeProps = {
  contacts: [contactType];
};

const Contacts: FC<contactsTypeProps> = ({ contacts }) => {
  return (
    <>
      <Head>
        <title>Contacts</title>
      </Head>
      <Heading tag="h2" text="Contacts Page:" />
      <ul>
        {contacts &&
          contacts.map(({ id, name }) => (
            <li key={id}>
              <Link href={`/contacts/${id}`}>{name}</Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Contacts;

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      contacts: data,
    },
  };
};
