const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock;
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

function imgUrl(img) {
  return siteConfig.baseUrl + 'img/' + img;
}

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? language + '/' : '') + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} />
  </div>
);

const ProjectTitle = props => (
  <h2 className="projectTitle">
    {siteConfig.title}
    <small>{siteConfig.tagline}</small>
  </h2>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    let language = this.props.language || '';
    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle />
          <PromoSection>
            <Button href={docUrl('installation.html', language)}>Get Started</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
);

const Features = props => (
  <Block layout="fourColumn">
    {[
      {
        content: 'asm-dom is a low-level virtual DOM library. It is unopinionated with regards to how you should structure your application.',
        image: imgUrl('hammer-and-wrench.png'),
        imageAlign: 'top',
        title: 'Flexibility',
      },
      {
        content: 'Write only once in C++ and share as much code as possible with desktop/mobile apps and web site.',
        image: imgUrl('black-universal-recycling-symbol.png'),
        imageAlign: 'top',
        title: 'Shared C++ Codebase',
      },
    ]}
  </Block>
);

const FeatureCallout = props => (
  <div
    className="productShowcaseSection paddingBottom"
    style={{ textAlign: 'center' }}>
    <h2>Cutting Edge Technologies</h2>
    <MarkdownBlock>
      asm-dom allows you to write an entire SPA in C++ and compile it to WebAssembly (or asmjs as fallback) using Emscripten. This will produce an app that aims to execute at native speed by taking advantage of common hardware capabilities!
    </MarkdownBlock>
  </div>
);

const SSR = props => (
  <Block background="light">
    {[
      {
        content: 'asm-dom supports server-side rendering, you can write your server in C++ and run it on Node.js with WebAssembly',
        image: imgUrl('ssr.png'),
        imageAlign: 'right',
        title: 'Server Side Rendering',
      },
    ]}
  </Block>
);

const JSXLike = props => (
  <Block id="jsxlike">
    {[
      {
        content: 'asm-dom can be used with a JSX like syntax to make your developer experience even better',
        image: imgUrl('cpx.png'),
        imageAlign: 'left',
        title: 'JSX like syntax',
      },
    ]}
  </Block>
);

class Index extends React.Component {
  render() {
    let language = this.props.language || '';

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          <Features />
          <FeatureCallout />
          <JSXLike />
          <SSR />
        </div>
      </div>
    );
  }
}

module.exports = Index;
