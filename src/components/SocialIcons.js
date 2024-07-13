import React from 'react';
import { FaLinkedin, FaTwitter, FaFacebook, FaEnvelope, FaGithub } from 'react-icons/fa';
import './SocialIcons.css';

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <a href="https://www.facebook.com/profile.php?id=100011179215456" target="_blank" rel="noopener noreferrer">
        <FaFacebook />
      </a>
      <a href="https://www.linkedin.com/in/nandan-mogili-67a12a1b2" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://github.com/nandanmogili" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="mailto:nan.mogili@gmail.com">
        <FaEnvelope />
      </a>
    </div>
  );
}

export default SocialIcons;
