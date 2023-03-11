import React from "react";

export const BlogPost = ({ post }) => {
  const formattedDate = new Date(post._createdAt).toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="post" key={post._id}>
      <div className="post-content">
        <div className="post-header">
          <div className="post-category">{post.category}</div>
          <div className="post-date">{formattedDate}</div>
        </div>
        <div className="post-main">
          <h2 className="post-title">{post.title}</h2>
        </div>
      </div>

      <div className="post-media">
        <div className="post-image-wrapper">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.mainImage}
            alt={`${post.title} image.`}
            className="post-image"
          />
        </div>

        <div className="post-link">
          <div className="post-button">
            <div className="btn">Learn More</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
