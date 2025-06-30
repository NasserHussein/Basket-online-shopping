import blogImg1 from '../../assets/blog-3.jpg.png';
import blogImg2 from '../../assets/blog-5.jpg.png';
import blogImg3 from '../../assets/blog-1.jpg.png';

const PostsContainer = () => {
  const posts = [{ image: blogImg1, order: 1 },
  { image: blogImg2, order: 2 },
  { image: blogImg3, order: 3 }];
  return (
    <>
      {posts.map((post, index) => {
        return (
          <div key={index} className="mt-5 w-full">
            <div className="flex items-center gap-5 w-full">

              <div className="relative size-[50px] min-w-[50px] rounded-full ">
                <span className="absolute -right-2 -top-1 size-6 text-center text-sm text-white rounded-full bg-green-400 flex items-center justify-center z-10">
                  {post.order}
                </span>

                <img
                  src={post.image}
                  alt="post image"
                  className="w-full h-full object-cover rounded-full"
                  loading="lazy"
                />
              </div>

              <p className="post-text">
                But I must explain to you how all this mistaken idea
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default PostsContainer;
