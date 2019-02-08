import React from 'react';
import PropTypes from 'prop-types';
import './DotsNavigation.css';

class DotsNavigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      navIndex: 0,
      sections: [],
      sectionNames: [],
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    const { selector } = this.props;
    const sections = Array.from(document.querySelectorAll(selector));
    const sectionNames = sections.map(el => el.getAttribute('name'));
    this.setState({ sections, sectionNames });

    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    // TODO: this may be slow, optimize
    const { sections, navIndex } = this.state;
    const { scrollY } = event.currentTarget;

    for (let i = 0; i < sections.length; i++) {
      const { offsetTop, clientHeight } = sections[i];
      if (scrollY >= offsetTop && scrollY < (offsetTop + clientHeight)) {
        if (navIndex === i) break;
        this.setState({ navIndex: i });
      }
    }
  }

  render() {
    const { sectionNames, navIndex } = this.state;

    return (
      <nav className='navigation'>
        {sectionNames.map((name, i) => (
          <a key={name} className='nav-element' href={`#${name.toLowerCase()}`}>
            <div className={(i === navIndex) ? 'active' : ''}>
              <span className='nav-text'>{name}</span>
            </div>
          </a>
        ))}
      </nav>
    );
  }
}

DotsNavigation.propTypes = {
  selector: PropTypes.string,
};

export default DotsNavigation;
