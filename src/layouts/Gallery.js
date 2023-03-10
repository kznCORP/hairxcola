import React, { useState, useRef, useMemo } from "react";
import SanityImageURLBuilder from "@sanity/image-url";

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
      setMappedServices(
        posts.map((service) => ({
          ...service,
          mainImage: imgBuilder.image(service.mainImage),
        }))
      );
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
                {/*eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={service.mainImage}
                  alt={`${service.title} image.`}
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
