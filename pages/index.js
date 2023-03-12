import Meta from "../src/layouts/Meta";
import Header from "../src/layouts/Header";
import Gallery from "../src/layouts/Gallery";
import SelectedWork from "../src/layouts/SelectedWork";
import Goal from "../src/layouts/Goal";
import Services from "../src/layouts/Services";
import Slogan from "../src/layouts/Slogan";
import Footer from "../src/layouts/Footer";

/*
 * To Do
 * [ ] Purchase and link a domain.
 * [ ] When viewing from screens > 1560px, adjust padding.
 * [ ] Display image when hovering over Services.
 *
 * Important
 * [ ] Complete /blog/[slug].js
 *
 * Extras
 * [ ] Add hover effects to horizontal scrolling
 */

export const Home = ({ galleryResult }) => {
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

  const [galleryResult] = await Promise.all([
    fetch(galleryUrl).then((res) => res.json()),
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
      },
    };
  }
};

export default Home;
