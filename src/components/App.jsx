import React from 'react';

import './App.css';
import DotsNavigation from './DotsNavigation';
import SocialContact from './SocialContact';
import SelfTimeline from './SelfTimeline';
import SelfCard from './SelfCard';
import Section from './Section';

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
    // TODO: this may be slow, optimize
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
      <div>
        <DotsNavigation index={navIndex} />
        <main>
          <Section name="Disclaimer">
            <div>* still under construction *</div>
            <div>pls no judge desu</div>
            <div>arigatou</div>
          </Section>
          <Section name="Landing" className="full flex-center">
            <div className="flex-element">
              <SelfCard />
            </div>
          </Section>
          <Section name="About" className="full">
            <p>JavaScript is love</p>
            <p>Trail is life</p>
            <p>Cenas</p>
          </Section>
          <Section name="Timeline" className="full">
            <SelfTimeline />
          </Section>
          <Section name="Projects" className="full">
            <div>
              <h2>Cool things that I made</h2>
              <div className="flex-center">
                <div className="card flex-element">T1</div>
                <div className="card flex-element">T2</div>
                <div className="card flex-element">T3</div>
              </div>
            </div>
            <div>
              <h2>Things that I am proud of</h2>
              <div>
                <div className="card">nullptr</div>
                <div className="card">undefined</div>
                <div className="card">NaN</div>
                <div className="card">RIP</div>
              </div>
            </div>
          </Section>
          <Section name="Contact" className="flex-center">
            <div className="card social-contacts flex-element">
              <SocialContact fill="#2CA5E0" name="telegram" text="zettca" url="https://telegram.me/zettca" />
              <SocialContact fill="#0084FF" name="messenger" text="zettca" url="https://www.messenger.com/t/zettca" />
              <SocialContact fill="#7289DA" name="discord" text="zettca#3742" url="" />
              <SocialContact fill="#00AFF0" name="skype" text="sael-corruption" url="" />
              <SocialContact fill="#D14836" name="gmail" text="bruno@zettca.xyz" url="mailto:bruno@zettca.xyz" />
            </div>
          </Section>
        </main>
      </div>
    );
  }
}

export default App;
