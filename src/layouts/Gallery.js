import React from "react";
import SanityImageURLBuilder from "@sanity/image-url";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export const Gallery = ({ posts }) => {
  const router = useRouter();
  const [mappedServices, setMappedServices] = useState([]);

  useEffect(() => {
    if (posts.length) {
      const imgBuilder = SanityImageURLBuilder({
        projectId: "63zzpw0j",
        dataset: "production",
      });

      setMappedServices(
        posts.map((service) => {
          return {
            ...service,
            mainImage: imgBuilder.image(service.mainImage),
          };
        })
      );
    } else {
      setMappedServices([]);
    }
  }, [posts]);

  return (
    <>
      <div className="scrollableGallery">
        <div className="gallery">
          {mappedServices.length ? (
            mappedServices.map((s, id) => {
              return (
                <>
                  <div key={id} className="galleryImageWrapper">
                    <div
                      className="galleryTitle"
                      onClick={() => router.push(`/services/${s.slug.current}`)}
                    >
                      {s.title}
                    </div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={s.mainImage}
                      alt={`${s.title} image.`}
                      className="galleryImg"
                      onClick={() => router.push(`/services/${s.slug.current}`)}
                    />
                  </div>
                </>
              );
            })
          ) : (
            <> No services available at this time. </>
          )}
        </div>
      </div>
    </>
  );
};

export default Gallery;
