import SanityImageURLBuilder from "@sanity/image-url";

import { useState, useEffect } from "react";

import Meta from "../src/layouts/Meta";
import Header from "../src/layouts/Header";
// Work in Progress
// import GridView from "../src/components/GridView";
import Gallery from "../src/layouts/Gallery";
import Footer from "../src/layouts/Footer";

/*
*
* [ ] Deploy to Vercel
* [ ] Mobile responsiveness
* [ ] Grid View
*
*/ 

export const Home = ({ galleryProps, authorProps }) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const imgBuilder = SanityImageURLBuilder({
      projectId: "63zzpw0j",
      dataset: "production",
    });

    setImageUrl(imgBuilder.image(authorProps.result[1].image));
  }, [authorProps]);

  return (
    <>
      <Meta />
      <Header />

      <main>
        <div className="serviceContainer">
          <div className="serviceDescription">
            <h2 className="serviceTitle">Hello, I&rsquo;m Nicola Narido!</h2>
            <h2 className="serviceSlogan">The artist behind the chair.</h2>
            <p className="serviceInfo">
              I specialize in colour with all hair types for any transformation
              from; a dimensional sun kissed balayage to creative colour
              placements.
            </p>

            <p className="serviceInfo">
              My goal is to help you express your best self with the perfect
              hair cut and colour combo!
            </p>

            <p className="serviceInfo">
              The possibilities are endless! Treat yourself and go get the hair
              you`ve always dreamed of.
            </p>
          </div>

          <div className="serviceImageWrapper">
            {imageUrl && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                className="serviceImg"
                src={imageUrl}
                alt="Nicola Narido image."
              />
            )}
          </div>

          <Gallery posts={galleryProps.result} />
        </div>
      </main>

      <Footer />
    </>
  );
};

export const getServerSideProps = async (pageContext) => {
  const galleryQuery = encodeURIComponent('*[ _type == "post" ]');
  const galleryUrl = `https://63zzpw0j.api.sanity.io/v1/data/query/production?query=${galleryQuery}`;
  const galleryResult = await fetch(galleryUrl).then((res) => res.json());
  const galleryProps = galleryResult;

  const authorQuery = encodeURIComponent('*[ _type == "author" ]');
  const authorUrl = `https://63zzpw0j.api.sanity.io/v1/data/query/production?query=${authorQuery}`;
  const authorResult = await fetch(authorUrl).then((res) => res.json());
  const authorProps = authorResult;

  if (!galleryResult.result || !galleryResult.result.length) {
    return {
      props: {
        posts: [],
      },
    };
  } else {
    return {
      props: {
        galleryProps,
        authorProps,
      },
    };
  }
};

export default Home;
