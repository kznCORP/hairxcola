import { useState, useMemo } from "react";
import SanityImageURLBuilder from "@sanity/image-url";
import Header from "../../src/layouts/Header";
import BlogPost from "../../src/components/BlogPost";

export const BlogPage = ({ blogPosts }) => {
  const [mappedBlogPosts, setMappedBlogPosts] = useState([]);

  const posts = blogPosts?.result;

  const imgBuilder = useMemo(
    () =>
      SanityImageURLBuilder({
        projectId: "63zzpw0j",
        dataset: "production",
      }),
    []
  );

  useMemo(() => {
    if (posts?.length) {
      setMappedBlogPosts(
        posts.map((post) => ({
          ...post,
          mainImage: imgBuilder.image(post.mainImage),
        }))
      );
    } else {
      setMappedBlogPosts([]);
    }
  }, [posts, imgBuilder]);

  mappedBlogPosts.sort(
    (a, b) => new Date(b._createdAt) - new Date(a._createdAt)
  );

  return (
    <>
      <Header />
      <div className="blogPosts">
        <div className="bp-container">
          <h2 className="bp-title">Blogs.</h2>
          <div className="horizontal-line"></div>

          <div className="bp-post">
            {mappedBlogPosts?.length ? (
              mappedBlogPosts.map((post) => (
                <BlogPost key={post._id} post={post} />
              ))
            ) : (
              <p>No Blog Posts available.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;

export const getServerSideProps = async (pageContext) => {
  const blogPostsQuery = encodeURIComponent('*[ _type == "blogPost" ]');
  const blogPostsUrl = `https://63zzpw0j.api.sanity.io/v1/data/query/production?query=${blogPostsQuery}`;

  const [blogPosts] = await Promise.all([
    fetch(blogPostsUrl).then((res) => res.json()),
  ]);

  return {
    props: {
      blogPosts,
    },
  };
};
