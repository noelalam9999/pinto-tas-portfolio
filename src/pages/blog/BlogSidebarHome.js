import React from "react";
import Loader from "../../components/Loader/Loader";
import HeaderOne from "../../components/Header/HeaderHome";
import PageTitleBlog from "../../components/PageTitle/PageTitleBlog";
import BlogContent from "../../components/Blog/BlogContent";
import FooterOne from "../../components/Footer/FooterOne";

const BlogSidebar = () => (
  <Loader>
    <HeaderOne />
    <PageTitleBlog title="My Blogs" tagline="A Repository of my Thoughts" />
    <BlogContent type="sidebar" />
    <FooterOne />
  </Loader>
);

export default BlogSidebar;
