import React from "react";

import Head from "next/head";

export const Meta = () => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta
        name="description"
        content="Professional Hair Stylist at Shear Madness Salon - Surrey, Guildford B.C. Nicola provides balayages, toners, hair cuts and more!"
      />
      <meta
        property="og:description"
        content="Professional Hair Stylist providing balayges, toners, hair cuts and more in Surrey, Guildford B.C."
      />
      <meta name="keywords" content="Surrey Hairstylist" />

      <meta property="og:image" content="../assets/METADATA.png" />

      <link rel="icon" href="" />

      <title>Surrey Hair and Color Stylist | Nicola Narido </title>
    </Head>
  );
};

export default Meta;
