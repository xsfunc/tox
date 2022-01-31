import Head from "next/head";
import { Typography } from "@mui/material";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Multi Wallet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Typography variant="h6">
        Sorry, there is nothing here. Have a nice day :)
      </Typography>
    </>
  );
}
