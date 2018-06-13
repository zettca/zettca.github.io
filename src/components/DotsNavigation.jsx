import React from 'react';
import './DotsNavigation.css';

class DotsNavigation extends React.PureComponent {
  componentDidMount() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const ref = this.getAttribute('href');
        document.querySelector(ref).scrollIntoView({
          block: 'start',
          behavior: 'smooth'
        });
        window.history.pushState('', '', ref);
      });
    });
  }

  render() {
    const { elements, index } = this.props;

    return (
      <nav className='navigation'>
        <ul>
          {elements.map((el, i) => (
            <li key={el} className='nav-element'>
              <a className={(i === index) ? 'active' : ''} href={`#${el}`} />
            </li>))}
        </ul>
      </nav>
    );
  }
}

export default DotsNavigation;
