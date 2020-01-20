import React from 'react';
import DocumentTitle from 'react-document-title';
import { enquireScreen } from 'enquire-js';

import Banner from './Banner';
import Page1 from './Page1';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import Footer from './Footer';
import './static/style';


let isMobile = false;
enquireScreen((b) => {
  isMobile = b;
});


class Home extends React.PureComponent {
  state = {
    isMobile,
    showShadow: false,
  };

  componentDidMount() {
    enquireScreen((b) => {
      this.setState({
        isMobile: !!b,
      });
    });
  }
  navToShadow = (e) => {
    this.setState({ showShadow: e.mode === 'leave' });
  }
  render() {
    return (
      [
        <Banner key="banner" isMobile={this.state.isMobile} navToShadow={this.navToShadow} />,
        <Page1 key="page1" />,
        <Page3 key="page3" />,
        <Page4 key="page4" isMobile={this.state.isMobile} />,
        <Page5 key="page5" />,
        <Footer key="footer" />,
        <DocumentTitle title="Javier-Burgos Portfolio" />,
      ]
    );
  }
}
export default Home;
