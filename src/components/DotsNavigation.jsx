import React from 'react';
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
    const sectionNames = elsArray.map(el => el.getAttribute('name').toLowerCase());
    this.setState({ sectionNames });
  }

  render() {
    const { sectionNames } = this.state;
    const { index } = this.props;

    return (
      <nav className='navigation'>
        {sectionNames.map((el, i) => (
          <a key={el} className='nav-element' href={`#${el}`}>
            <div className={(i === index) ? 'active' : ''}>
              <span className='nav-text'>{el}</span>
            </div>
          </a>
        ))}
      </nav>
    );
  }
}

export default DotsNavigation;
