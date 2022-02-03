import React from 'react';
import classes from './SocialNetworks.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const SocialNetworks = () => {
  return (
    <div className={classes.socialNet}>
        <div className='facebook'>
            <a href='https://uk-ua.facebook.com/'>
                <FontAwesomeIcon icon={faFacebookF} />
            </a>
        </div>
        <div className='instagramm'>
            <a href='https://www.instagram.com/'>
                <FontAwesomeIcon icon={faInstagram} />
            </a>
        </div>
        <div className='twitter'>
            <a href='https://twitter.com/?lang=ru'>
                <FontAwesomeIcon icon={faTwitter} />
            </a>
        </div>
    </div>
  );
}

export default SocialNetworks;
