import React from 'react';
import { Row, Col } from 'antd';

function Footer() {
  return (
    <footer id="footer" className="dark">
      <Row className="bottom-bar">
        <Col lg={6} sm={24} />
        <Col lg={18} sm={24}>        
          <span style={{ marginRight: 12 }}>Copyright © Javier Andrés Burgos 2020</span>
        </Col>
      </Row>
    </footer>
  );
}


export default Footer;
