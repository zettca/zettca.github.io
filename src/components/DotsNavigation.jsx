import React from 'react';
import PropTypes from 'prop-types';

import './DotsNavigation.css';

class DotsNavigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sectionNames: []
    };
  }

  componentDidMount() {
    const elsArray = [].slice.call(document.querySelectorAll('.section'));
    const sectionNames = elsArray.map(el => el.getAttribute('name'));
    this.setState({ sectionNames });
  }

  render() {
    const { sectionNames } = this.state;
    const { index } = this.props;

    return (
      <nav className='navigation'>
        {sectionNames.map((name, i) => (
          <a key={name} className='nav-element' href={`#${name.toLowerCase()}`}>
            <div className={(i === index) ? 'active' : ''}>
              <span className='nav-text'>{name}</span>
            </div>
          </a>
        ))}
      </nav>
    );
  }
}

DotsNavigation.propTypes = {
  index: PropTypes.number,
};

export default DotsNavigation;
