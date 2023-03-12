import React, { useState, useRef, useMemo } from "react";
import SanityImageURLBuilder from "@sanity/image-url";
import Image from "next/image";

export const Gallery = ({ posts }) => {
  const [mappedServices, setMappedServices] = useState([]);
  const containerRef = useRef(null);

  //Image Builder for Sanity
  const imgBuilder = useMemo(
    () =>
      SanityImageURLBuilder({
        projectId: "63zzpw0j",
        dataset: "production",
      }),
    []
  );

  useMemo(() => {
    if (posts.length) {
      const sortedPosts = posts
        .map((service) => ({
          ...service,
          mainImage: imgBuilder.image(service.mainImage),
        }))
        .sort((a, b) => a.title.localeCompare(b.title));
      setMappedServices(sortedPosts);
    } else {
      setMappedServices([]);
    }
  }, [posts, imgBuilder]);

  const handleMouseDown = (e) => {
    e.preventDefault();
    const startX = e.pageX - containerRef.current.offsetLeft;
    const scrollLeft = containerRef.current.scrollLeft;

    document.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseup", handleMouseUp, { passive: true });

    function handleMouseMove(e) {
      const x = e.pageX - containerRef.current.offsetLeft;
      const walk = (x - startX) * 2;
      containerRef.current.scrollLeft = scrollLeft - walk;
    }

    function handleMouseUp() {
      document.removeEventListener("mousemove", handleMouseMove, {
        passive: true,
      });
      document.removeEventListener("mouseup", handleMouseUp, { passive: true });
    }
  };

  return (
    <div className="scrollableGallery">
      <div className="gallery" ref={containerRef} onMouseDown={handleMouseDown}>
        {mappedServices.length ? (
          mappedServices.map((service) => (
            <div className="gallery-horizontal" key={service._id}>
              <div className="gallery-img-wrapper">
                <Image
                  src={service.mainImage.url()}
                  alt={`${service.title} image.`}
                  width={450}
                  height={450}
                  loading="lazy"
                  className="gallery-image"
                />
              </div>
              <div className="gallery-title">{service.title}</div>
            </div>
          ))
        ) : (
          <p>No services available at this time.</p>
        )}
      </div>
    </div>
  );
};

export default Gallery;
