import React, { useState, useMemo } from "react";
import SanityImageURLBuilder from "@sanity/image-url";

export const Services = ({ services }) => {
  const [mappedServices, setMappedServices] = useState([]);

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
    if (services.length) {
      setMappedServices(
        services.map((service) => ({
          ...service,
          mainImage: imgBuilder.image(service.mainImage),
        }))
      );
    } else {
      setMappedServices([]);
    }
  }, [services, imgBuilder]);

  return (
    <div className="my-services">
      <h2 className="ms-title">My Services.</h2>
      <div className="horizontal-line"></div>

      <div className="service-container">
        {mappedServices.length ? (
          mappedServices.map((service) => (
            <div className="service" key={service._id}>
              {/* Insert below - line of code here for Images */}
              <div className="service-name">
                <p className="placeholder">Name</p>
                <h3 className="service-title">{service.title}</h3>
              </div>

              <div className="service-category">
                <div className="duration">
                  <p className="placeholder">Duration</p>
                  <h4 className="service-time">{service.duration}</h4>
                </div>

                <div className="price">
                  <p className="placeholder">Price</p>
                  <h4 className="service-price">{service.price}</h4>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No services available at this time.</p>
        )}
      </div>
    </div>
  );
};

export default Services;

{
  /*eslint-disable-next-line @next/next/no-img-element */
}

{
  /* <img
      src={service.mainImage}
      alt={`${service.title} image.`}
      className="gallery-image"
    /> */
}
