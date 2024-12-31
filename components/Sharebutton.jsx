import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const InstagramShareButton = ({ url, text }) => {
  const handleClick = () => {
    const shareText = encodeURIComponent(text || 'Check this out!');
    const shareUrl = encodeURIComponent(url);

    window.open("https://www.instagram.com/proghostwritingservices");
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-2 px-3 py-[0.05rem] text-white rounded-full h-9 bg-gradient-to-r from-pink-500 to-yellow-500 "
    >
      <FontAwesomeIcon icon={faInstagram} size="lg" />
 
    </button>
  );
};

export default InstagramShareButton;
