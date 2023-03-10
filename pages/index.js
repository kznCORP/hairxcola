import SanityImageURLBuilder from "@sanity/image-url";

import { useState, useEffect, useMemo } from "react";

import Meta from "../src/layouts/Meta";
import Header from "../src/layouts/Header";
import Gallery from "../src/layouts/Gallery";
import SelectedWork from "../src/layouts/SelectedWork";
import Goal from "../src/layouts/Goal";
import Services from "../src/layouts/Services";
import Slogan from "../src/layouts/Slogan";
import Footer from "../src/layouts/Footer";

/*
 * Important
 * [x] Deploy to Vercel
 * [ ] When viewing from screens > 1560px, adjust padding.
 * [ ] Add links to every thing.
 * [ ] Display image when hovering over Services.
 * 
 * Extras
 * [ ] Add hover effects to horizontal scrolling
 */

export const Home = ({ galleryResult, authorResult }) => {
  const [imageUrl, setImageUrl] = useState("");

  const imgBuilder = useMemo(
    () =>
      SanityImageURLBuilder({
        projectId: "63zzpw0j",
        dataset: "production",
      }),
    []
  );

  useEffect(() => {
    if (authorResult.result && authorResult.result.length) {
      setImageUrl(imgBuilder.image(authorResult.result[1].image));
    }
  }, [authorResult, imgBuilder]);

  return (
    <>
      <Meta />
      <Header />
      <SelectedWork />
      <Gallery posts={galleryResult.result} />
      <Goal />
      <Services services={galleryResult.result} />
      <Slogan />
      <Footer />
    </>
  );
};

export const getServerSideProps = async (pageContext) => {
  const galleryQuery = encodeURIComponent('*[ _type == "post" ]');
  const galleryUrl = `https://63zzpw0j.api.sanity.io/v1/data/query/production?query=${galleryQuery}`;

  const authorQuery = encodeURIComponent('*[ _type == "author" ]');
  const authorUrl = `https://63zzpw0j.api.sanity.io/v1/data/query/production?query=${authorQuery}`;

  const [galleryResult, authorResult] = await Promise.all([
    fetch(galleryUrl).then((res) => res.json()),
    fetch(authorUrl).then((res) => res.json()),
  ]);

  if (!galleryResult.result || !galleryResult.result.length) {
    return {
      props: {
        posts: [],
      },
    };
  } else {
    return {
      props: {
        galleryResult,
        authorResult,
      },
    };
  }
};

export default Home;
