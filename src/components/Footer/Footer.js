import React from 'react';
import {
  BsFacebook,
  BsTwitter,
  BsGithub,
  BsPinterest,
  BsYoutube,
  BsShop,
} from 'react-icons/bs';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className='bg-gray-400 text-white py-8 xs:px-0 px-2'>
      <div className='flex justify-between container mx-auto'>
        <Link to='/' className='text-4xl text-white hover:text-white'>
          <BsShop />
        </Link>
        <div className='flex space-x-4 text-2xl'>
          <BsFacebook />
          <BsTwitter />
          <BsGithub />
          <BsPinterest />
          <BsYoutube />
        </div>
      </div>
    </footer>
  );
};
