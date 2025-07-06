import { Helmet } from 'react-helmet';
import BlogCard from './BlogCard';
import SocialSide from './SocialSide';

const Blog = () => {
  return <>
    <Helmet>
      <title>Blog</title>
    </Helmet>
    <section className="container mx-auto mt-5">
      <div className="grid sm:grid-cols-[60%_40%] lg:grid-cols-[70%_30%]">
        <div>
          <BlogCard />
        </div>
        <div className="h-full">
          <SocialSide />
        </div>
      </div>
    </section>
    </>
};

export default Blog;
