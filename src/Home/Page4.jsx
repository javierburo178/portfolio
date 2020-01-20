import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'antd';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { page4, assets } from './data';
import img from './profile.png';


export default function Page4(props) {
  const children = page4.map((item, i) => (
    <QueueAnim type="bottom" key={i.toString()}>
      <img key="user" className="user" src={img} alt="" />
      <div key="comment" className="comment">
        <span >{item.comment}</span>
      </div>
    </QueueAnim>
  ));
  return (
    <OverPack component="section" className="page-wrapper page4">
      <QueueAnim
        type="bottom"
        className="page text-center"
        leaveReverse
        key="a"
      >
        <div key="1" className="carousel-wrapper">
          <Carousel effect={props.isMobile ? 'scrollx' : 'fade'}>
            {children}
          </Carousel>
        </div>
      </QueueAnim>
    </OverPack>
  );
}

Page4.propTypes = {
  isMobile: PropTypes.bool,
};
