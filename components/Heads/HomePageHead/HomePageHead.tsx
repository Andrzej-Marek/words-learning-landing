import Head from "next/head";
import React, { FC } from "react";

interface OwnProps {}

type Props = OwnProps;

const HomePageHead: FC<Props> = () => {
  return (
    <Head>
      <title>Learn an new words in your favourite language</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta charSet="UTF-8" />
      <meta
        name="description"
        content="The application allows you to select words and translate them. You can even save them and use them later!"
      />
    </Head>
  );
};

export default HomePageHead;
