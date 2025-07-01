import bannerImg from '../../assets/sidebar-banner.gif.png';

const WidgetBaner = () => {
  return (
    <div className="lg:w-full">
      <div>
        <h6 className="my-5 font-semibold text-[#202435]">WIDGET BANNER</h6>
        <img src={bannerImg} alt="banner image" className="w-full" loading='lazy'/>
      </div>
    </div>
  );
};

export default WidgetBaner;
