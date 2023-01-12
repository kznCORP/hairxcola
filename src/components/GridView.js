import SanityImageURLBuilder from "@sanity/image-url";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

export const GridView = ({ posts }) => {
  const router = useRouter();
  const [displayGrid, setDisplayGrid] = useState([]);

  useEffect(() => {
    if (posts.result.length) {
      const imgBuilder = SanityImageURLBuilder({
        projectId: "63zzpw0j",
        dataset: "production",
      });

      setDisplayGrid(
        posts.result.map((service) => {
          return {
            ...service,
            mainImage: imgBuilder.image(service.mainImage),
          };
        })
      );

      console.log(displayGrid);
    } else {
      setDisplayGrid([]);
    }
  }, [displayGrid, posts.result]);

  return (
    <>
      <Header />
      <div>
        {displayGrid.length ? (
          displayGrid.map((item, id) => {
            return (
              <>
                <div key={id}>
                  <div>{item.title}</div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.mainImage} alt={`${item.title} image.`} />
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
export default GridView;
