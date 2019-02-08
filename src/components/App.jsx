import React from 'react';

import './App.css';
import DotsNavigation from './DotsNavigation';
import SocialContact from './SocialContact';
import SelfTimeline from './SelfTimeline';
import SelfCard from './SelfCard';
import Section from './Section';

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <DotsNavigation selector={'section'} />
        <main>
          <Section name="Disclaimer" className="">
            <div>websiterino still under constructiorino</div>
            <div>pls no judge です, ありがとうございます</div>
          </Section>
          <Section name="Landing" className="full flex-center">
            <div className="flex-element">
              <SelfCard />
            </div>
          </Section>
          <Section name="Projects" className="full">
            <p>JavaScript is love, Trail is life</p>
            <p>Cenas</p>
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
          <Section name="Timeline" className="full">
            <SelfTimeline />
          </Section>
          <Section name="Contact" className="flex-center">
            <div className="card social-contacts flex-element">
              <SocialContact fill="#2CA5E0" name="telegram" text="zettca" url="https://telegram.me/zettca" />
              <SocialContact fill="#0084FF" name="messenger" text="zettca" url="https://messenger.com/t/zettca" />
              <SocialContact fill="#00AFF0" name="skype" text="zettca" url="" />
              <SocialContact fill="#7289DA" name="discord" text="zettca#3742" url="" />
              <SocialContact fill="#D14836" name="gmail" text="bruno@zettca.xyz" url="mailto:bruno@zettca.xyz" />
            </div>
          </Section>
        </main>
      </div>
    );
  }
}

export default App;
