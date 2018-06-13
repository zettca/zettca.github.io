import React from 'react';
import './App.css';
import portrait from '../img/portrait.png';

import DotsNavigation from './DotsNavigation';
import Section from './Section';
import Timeline from './Timeline';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      navIndex: 0,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    const { navIndex } = this.state;
    const { scrollY } = event.currentTarget;
    const sections = document.querySelectorAll('section');
    for (let i = 0; i < sections.length; i++) {
      const { offsetTop, clientHeight } = sections[i];
      if (scrollY >= offsetTop && scrollY < (offsetTop + clientHeight)) {
        if (navIndex === i) break;
        this.setState({ navIndex: i });
      }
    }
  }

  render() {
    const { navIndex } = this.state;

    return (
      <main>
        <DotsNavigation elements={['landing', 'timeline', 'projects', 'hobbies', 'contact']} index={navIndex} />
        <Section name="Landing" color="red">
          <figure id="idCard" className="card">
            <div className="portrait">
              <img src={portrait} alt="portrait" />
            </div>
            <div>Cenas</div>
          </figure>
        </Section>
        <Section name="Timeline">
          <Timeline />
        </Section>
        <Section name="Projects"></Section>
        <Section name="Hobbies"></Section>
        <Section name="Contact"></Section>
      </main>
    );
  }
}

export default App;
