const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? language + '/' : '') + doc;
  }

  githubUrl(url) {
    return this.props.config.repoUrl + (url || '');
  }

  render() {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Docs</h5>
            <a href={this.docUrl('motivation.html' /* , this.props.language */)}>
              Introduction
            </a>
            <a href={this.docUrl('memory-management.html' /* , this.props.language */)}>
              Guides
            </a>
            <a href={this.docUrl('init.html' /* , this.props.language */)}>
              API Reference
            </a>
          </div>
          <div>
            <h5>Community</h5>
            <a
              href="http://stackoverflow.com/questions/tagged/asm-dom"
              target="_blank"
              rel="noopener noreferrer"
            >
              Stack Overflow
            </a>
            <a href="https://gitter.im/mbasso/asm-dom">Chat on Gitter</a>
            <a href="https://twitter.com/teo_basso">
              <img
                alt="Follow teo_basso on Twitter"
                src="https://img.shields.io/twitter/follow/teo_basso.svg?label=Follow+teo_basso&style=social"
              />
            </a>
          </div>
          <div>
            <h5>More</h5>
            <a href={this.githubUrl()}>GitHub</a>
            <a href={this.githubUrl('/issues')}>Issues</a>
            <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-count-href="/mbasso/asm-dom/stargazers"
              data-show-count={true}
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub"
            >
              Star
            </a>
          </div>
        </section>
      </footer>
    );
  }
}

module.exports = Footer;
