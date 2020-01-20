import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { Row, Col } from 'antd';
import { page5 } from './data';
import img from './elpost.png';

export default function Page5() {
  const children = page5.map((card, i) => (
    <Col className="card-wrapper" key={i.toString()} md={8} xs={24}>
      <a className="card" href={card.href}>
        <h3>{card.title}</h3>
        <img src={require('./' + card.img)} alt="" className="card-img-top" />
        <div className="card-body">
          <span className="description text-secondary">{card.description}</span>
        </div>
      </a>
    </Col>
  ));

  return (
    <section className="page-wrapper page5">
      <QueueAnim
        component={Row}
        type="bottom"
        className="page row text-center"
        delay={500}
      >
        <h2 key="h2">Latest Projects</h2>
        <span className="separator" key="span" />
        <Row
          className="page text-center"
          key="a"
        ></Row>
        {children}
      </QueueAnim>
    </section>);
}

