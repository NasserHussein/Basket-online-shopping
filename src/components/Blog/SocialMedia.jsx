import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaReddit,
  FaPinterestP
} from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="mt-5 lg:w-full">
      <h6 className="font-semibold text-[#202435]">SOCIAL MEDIA</h6>
      <div className="mt-3.5 flex flex-wrap gap-2 sm:flex-col">
        <div className="social-style bg-[#3B5998]">
          <span>
            <FaFacebookF />
          </span>
          <span>FACEBOOK</span>
        </div>

        <div className="social-style bg-[#CC2366]">
          <span>
            <FaInstagram />
          </span>
          <span>INSTGRAM</span>
        </div>

        <div className="social-style bg-[#1DA1F2]">
          <span>
            <FaTwitter />
          </span>
          <span>TWITTER</span>
        </div>

        <div className="social-style bg-[#FF4500]">
          <span>
            <FaReddit />
          </span>
          <span>RIDDET</span>
        </div>

        <div className="social-style bg-[#E60023]">
          <span>
            <FaPinterestP />
          </span>
          <span>PINTEREST</span>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
