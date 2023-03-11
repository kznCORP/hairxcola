import SanityImageURLBuilder from "@sanity/image-url";
import SanityBlockContent from "@sanity/block-content-to-react";
import { useState, useEffect } from "react";

import Header from "../../src/layouts/Header";

export const Blogs = ({ currentBlogs, otherBlogs }) => {
  const [imageUrl, setImageUrl] = useState("");

  const currentBlogsProps = currentBlogs.result;
  const otherBlogsProps = otherBlogs.result;

  console.log(currentBlogsProps);

  useEffect(() => {
    const imgBuilder = SanityImageURLBuilder({
      projectId: "63zzpw0j",
      dataset: "production",
    });

    setImageUrl(imgBuilder.image(currentBlogsProps[0].mainImage));
  }, [currentBlogsProps]);

  return (
    <>
      <Header />

      <div className="blogPosts">
        <div className="bp-container">
          <h2 className="bp-title">{currentBlogsProps[0].title}</h2>
          <div className="horizontal-line"></div>

          <div className="bp-post"></div>
        </div>
      </div>
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

  const currentBlogQuery = encodeURIComponent(
    `*[ _type == "blogPost" && slug.current == "${pageSlug}" ]`
  );

  const otherBlogQuery = encodeURIComponent(
    `*[ _type == "blogPost" && slug.current != "${pageSlug}" ]`
  );

  const currentBlogURL = `https://63zzpw0j.api.sanity.io/v1/data/query/production?query=${currentBlogQuery}`;
  const otherBlogURL = `https://63zzpw0j.api.sanity.io/v1/data/query/production?query=${otherBlogQuery}`;

  try {
    const [currentBlogsRes, otherBlogsRes] = await Promise.all([
      fetch(currentBlogURL),
      fetch(otherBlogURL),
    ]);

    if (!currentBlogsRes.ok || !otherBlogsRes.ok) {
      throw new Error("Failed to fetch data");
    }

    const currentBlogs = await currentBlogsRes.json();
    const otherBlogs = await otherBlogsRes.json();

    return {
      props: {
        currentBlogs,
        otherBlogs,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default Blogs;
