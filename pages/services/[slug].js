import SanityImageURLBuilder from "@sanity/image-url";
import SanityBlockContent from "@sanity/block-content-to-react";
import { useState, useEffect } from "react";

import Header from "../../src/layouts/Header";
import Image from "next/image";
import Gallery from "../../src/layouts/Gallery";
import Footer from "../../src/layouts/Footer";

import Arrow from "../../src/assets/arrow.svg";

export const Services = ({ currentServices, otherServices }) => {
  const [imageUrl, setImageUrl] = useState("");

  const currentServiceProps = currentServices.result;
  const otherServiceProps = otherServices.result;

  useEffect(() => {
    const imgBuilder = SanityImageURLBuilder({
      projectId: "63zzpw0j",
      dataset: "production",
    });

    setImageUrl(imgBuilder.image(currentServiceProps[0].mainImage));
  }, [currentServiceProps]);

  return (
    <>
      <Header />

      <div className="serviceContainer">
        <div className="serviceDescription">
          <h2 className="serviceTitle">{currentServiceProps[0].title}</h2>

          <div className="serviceInfo">
            <SanityBlockContent blocks={currentServiceProps[0].description} />
          </div>

          <div className="serviceInfo">
            <p className="duration">{currentServiceProps[0].duration}</p>
            <p className="price">{currentServiceProps[0].price}</p>
          </div>

          <div className="bookNowWrapper">
            <button className="bookNow">
              <h3>Book an Appointment</h3>
              <Image src={Arrow} className="arrow" alt="Book now arrow icon." />
            </button>
          </div>
        </div>

        <div className="serviceImageWrapper">
          {imageUrl && (
            // eslint-disable-next-line @next/next/no-img-element
            <img className="serviceImg" src={imageUrl} alt="Service image." />
          )}
        </div>

        <Gallery posts={otherServiceProps} />
      </div>

      <Footer />
    </>
  );
};

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug;

  // 404 page
  if (!pageSlug) {
    return {
      notFound: true,
    };
  }

  const currentServiceQuery = encodeURIComponent(
    `*[ _type == "post" && slug.current == "${pageSlug}" ]`
  );

  const otherServiceQuery = encodeURIComponent(
    `*[ _type == "post" && slug.current != "${pageSlug}" ]`
  );

  const currentServiceURL = `https://63zzpw0j.api.sanity.io/v1/data/query/production?query=${currentServiceQuery}`;
  const otherServiceURL = `https://63zzpw0j.api.sanity.io/v1/data/query/production?query=${otherServiceQuery}`;

  const currentServices = await fetch(currentServiceURL).then((res) =>
    res.json()
  );
  const otherServices = await fetch(otherServiceURL).then((res) => res.json());

  if (!currentServices) {
    return {
      notFound: true,
    };
  } else {
    return {
      props: {
        currentServices,
        otherServices,
      },
    };
  }
};

export default Services;
