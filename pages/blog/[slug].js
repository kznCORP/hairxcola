import SanityImageURLBuilder from "@sanity/image-url";
import { useState, useMemo } from "react";

import Header from "../../src/layouts/Header";
import Image from "next/image";
import Footer from "../../src/layouts/Footer";

export const Blogs = ({ currentBlogs, otherBlogs }) => {
  const [currentArticle, setCurrentArticle] = useState([]);
  const [otherArticles, setOtherArticles] = useState([]);

  const currentBlogsProps = currentBlogs?.result;
  const otherBlogsProps = otherBlogs?.result;

  console.log(currentBlogs);

  const imgBuilder = useMemo(
    () =>
      SanityImageURLBuilder({
        projectId: "63zzpw0j",
        dataset: "production",
      }),
    []
  );

  useMemo(() => {
    if (currentBlogsProps?.length && otherBlogsProps?.length) {
      setCurrentArticle(
        currentBlogsProps.map((curr) => ({
          ...curr,
          mainImage: imgBuilder.image(curr.mainImage),
        }))
      );
      setOtherArticles(
        otherBlogsProps.map((other) => ({
          ...other,
          mainImage: imgBuilder.image(other.mainImage),
        }))
      );
    }
  }, [currentBlogsProps, otherBlogsProps, imgBuilder]);

  return (
    <>
      <Header />
      <div className="blogPosts">
        <div className="bp-container">
          <h2 className="bp-title">Blog.</h2>
          <div className="horizontal-line"></div>

          <div className="bp-content">
            {currentArticle?.length ? (
              currentArticle.map((curr) => (
                <div className="article" key={curr._id}>
                  <div className="ai-wrapper">
                    <Image
                      src={curr.mainImage.url()}
                      alt={`${curr.title} image`}
                      width={450}
                      height={450}
                      loading="lazy"
                      className="article-image"
                    />
                  </div>

                  <div className="article-content">
                    <h3 className="article-title">{curr.title}</h3>

                    <div className="article-header">
                      <div className="article-category">{curr.category}</div>
                      <div className="article-date">
                        {new Date(curr._createdAt).toLocaleString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </div>
                    </div>

                    <div>
                      <p className="article-paragraph">{curr.description}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No Blog Posts available.</p>
            )}
          </div>
        </div>
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
