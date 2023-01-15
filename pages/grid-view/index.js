import SanityImageURLBuilder from "@sanity/image-url";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Header from "../../src/layouts/Header";
import Footer from "../../src/layouts/Footer";

export const GridView = ({ gridViewProps }) => {
  const router = useRouter();
  const [gridItems, setGridItems] = useState([]);

  useEffect(() => {
    if (gridViewProps.result.length) {
      const imgBuilder = SanityImageURLBuilder({
        projectId: "63zzpw0j",
        dataset: "production",
      });

      setGridItems(
        gridViewProps.result.map((service) => {
          return {
            ...service,
            mainImage: imgBuilder.image(service.mainImage),
          };
        })
      );

      console.log(gridItems);
    } else {
      setGridItems([]);
    }
  }, [gridItems, gridViewProps]);

  return (
    <>
      <Header />

      <div className="gridWrapper">
        {gridItems.length ? (
          gridItems.map((item, id) => {
            return (
              <>
                <div key={id} className="gridImageWrapper">
                  <div
                    className="gridTitle"
                    onClick={() =>
                      (window.location.href = `/services/${item.slug.current}`)
                    }
                  >
                    {item.title}
                  </div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.mainImage}
                    alt={`${item.title} image.`}
                    className="gridImg"
                    onClick={() =>
                      (window.location.href = `/services/${item.slug.current}`)
                    }
                  />
                </div>
              </>
            );
          })
        ) : (
          <> No services available at this time. </>
        )}
      </div>
      <Footer />
    </>
  );
};

export const getServerSideProps = async () => {
  const gridViewQuery = encodeURIComponent('*[ _type == "post" ]');
  const gridViewUrl = `https://63zzpw0j.api.sanity.io/v1/data/query/production?query=${gridViewQuery}`;
  const gridViewResult = await fetch(gridViewUrl).then((res) => res.json());
  const gridViewProps = gridViewResult;

  if (!gridViewResult.result || !gridViewResult.result.length) {
    return {
      props: {
        posts: [],
      },
    };
  } else {
    return {
      props: {
        gridViewProps,
      },
    };
  }
};

export default GridView;
