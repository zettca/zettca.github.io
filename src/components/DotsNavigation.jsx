import React from 'react';
import './DotsNavigation.css';

class DotsNavigation extends React.PureComponent {
  componentDidMount() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const ref = this.getAttribute('href');
        const refElement = document.querySelector(ref);
        if (refElement) {
          refElement.scrollIntoView({
            block: 'start',
            behavior: 'smooth'
          });
          window.history.pushState('', '', ref);
        }
      });
    });
  }

  render() {
    const { elements, index } = this.props;

    return (
      <nav className='navigation'>
        {elements.map((el, i) => (
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
