
import Imgsrc1 from "../../assets/blog-3.jpg (1).png"
import Imgsrc2 from "../../assets/blog-5.jpg (1).png"
import { GoChevronRight } from "react-icons/go";

const BlogCard = () => {

  const cardDetails = [
    {
      Imgsrc: Imgsrc1,
      subTitle: 'Grocery',
      title: 'But I must explain to you how all this mistaken idea',
      date: { date: 'Jan 13 2025 ', address: ' Sinan ISIK' },
      description:
        ' Donec rhoncus quis diam sit amet faucibus. Vivamus pellentesque, sem sed convallis ultricies, ante eros laoreet libero,vitae suscipit lorem turpis sit amet lectus. Quisque egestas lorem ut mauris ultrices,...'
    },

    {
      Imgsrc: Imgsrc2,
      subTitle: 'Grocery',
      title: 'The Problem With Typefaces on the Web',
      date: { date: 'Jan 13 2025 ', address: ' Sinan ISIK' },
      description:
        ' Donec rhoncus quis diam sit amet faucibus. Vivamus pellentesque, sem sed convallis ultricies, ante eros laoreet libero,vitae suscipit lorem turpis sit amet lectus. Quisque egestas lorem ut mauris ultrices,...'
    }
  ];

  return (
    <>
      {cardDetails.map((item, index) => {
        return (
          <div key={index} className="px-2.5 py-5">
            <img
              src={item.Imgsrc}
              alt="Blog Image"
              className=" object-cover"
              loading="lazy"
            />
            <div>
              <h6 className="my-5 text-[#9B9BB4]">{item.subTitle}</h6>
              <p className="text-blog-text font-medium sm:text-3xl md:text-4xl">
                {item.title}
              </p>
              <p>
                <span className="pr-2 text-sm font-medium text-[#71778E]">
                  {item.date.date}
                </span>
                <span className="text-blog-text text-sm font-medium">
                  {item.date.address}
                </span>
              </p>
              <p className="text-blog-text my-5 pr-14 text-sm font-medium">
                {item.description}
              </p>
            </div>

          </div>

        );
      })}

      <div className="flex items-center gap-3 justify-center my-6">
        <button className="size-8 rounded-full bg-teal-500 text-white flex items-center justify-center font-medium">
          1
        </button>

        <button className="text-gray-800 font-medium hover:text-teal-500 transition">
          2
        </button>

        <button className="text-gray-800 hover:text-teal-500 transition text-lg">
          <GoChevronRight />
        </button>
      </div>
    </>
  );
};

export default BlogCard;
