import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import DotsNavigation from './DotsNavigation';
import SocialContact from './SocialContact';
import SocialIcon from './SocialIcon';
import Section from './Section';
import IdCard from './IdCard';
import './App.css';

const images = {};
['ist.png', 'playfun.png', 'tr.png', 'esjm.png'].forEach((imgName) => {
  const key = imgName.slice(0, imgName.indexOf('.'));
  images[key] = require('../res/img/' + imgName);
});

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

    const istStyle = { background: `url(${images.ist}) no-repeat center/90% #009DE0` };
    const esjmStyle = { background: `url(${images.esjm}) no-repeat center/90% #CCCCCC` };
    const pfStyle = { background: `url(${images.playfun}) no-repeat center/60% #304050` };
    const trStyle = { background: `url(${images.tr}) no-repeat center/90% #111111` };

    return (
      <div>
        <DotsNavigation elements={['landing', 'projects', 'timeline', 'hobbies', 'contact']} index={navIndex} />
        <main>
          <Section name="Disclaimer">
            <div>* still under construction *</div>
            <div>pls no judge desu</div>
            <div>arigatou</div>
          </Section>
          <Section name="Landing">
            <div className="flex-element">
              <IdCard />
            </div>
            <div className="flex-element">
              <div className="card social-icons">
                <SocialIcon fill="#3B5998" name="facebook" url="https://www.facebook.com/zettca" />
                <SocialIcon fill="#0077B5" name="linkedin" url="https://www.linkedin.com/in/zettca/" />
                <SocialIcon fill="#E4405F" name="instagram" url="https://www.instagram.com/zettca/" />
                <SocialIcon fill="#181717" name="github" url="https://github.com/zettca" />
                <SocialIcon fill="#1DA1F2" name="twitter" url="https://twitter.com/zettca" />
              </div>
            </div>
            <div className="flex-element">
              <div className="card social-contacts">
                <SocialContact fill="#2CA5E0" name="telegram" text="zettca" url="https://telegram.me/zettca" />
                <SocialContact fill="#0084FF" name="messenger" text="zettca" url="https://www.messenger.com/t/zettca" />
                <SocialContact fill="#7289DA" name="discord" text="zettca#3742" url="" />
                <SocialContact fill="#00AFF0" name="skype" text="sael-corruption" url="" />
                <SocialContact fill="#D14836" name="gmail" text="bruno@zettca.xyz" url="mailto:bruno@zettca.xyz" />
                {/*<SocialContact fill="#8B89CC" name="protonmail" text="zettca@protonmail.com" url="mailto:zettca@protonmail.com" />*/}
              </div>
            </div>
          </Section>
          <Section name="About">
            <p>JavaScript is love</p>
            <p>Trail is life</p>
            <p>Cenas</p>
          </Section>
          <Section name="Timeline">
            <VerticalTimeline animate={false}>
              <VerticalTimelineElement
                date="Movember 2021"
                iconStyle={{ background: 'silver' }}>
                <h3 className="vertical-timeline-element-title">Something Something</h3>
                <h4 className="vertical-timeline-element-subtitle gray">
                  <a href="">CompanyXPTO</a>
                </h4>
                <p>Something more</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                date="2017 - present"
                iconStyle={istStyle}>
                <h3 className="vertical-timeline-element-title">MSc in Computer Science and Engineering</h3>
                <h4 className="vertical-timeline-element-subtitle gray">
                  <a href="https://tecnico.ulisboa.pt/">Instituto Superior Técnico</a>
                </h4>
                <p>Distributed Systems, Cyber-Security</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                date="2013 - 2017"
                iconStyle={istStyle}>
                <h3 className="vertical-timeline-element-title">BSc in Computer Science and Engineering</h3>
                <h4 className="vertical-timeline-element-subtitle gray">
                  <a href="https://tecnico.ulisboa.pt/">Instituto Superior Técnico</a>
                </h4>
                <p>...</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                date="2013"
                iconStyle={esjmStyle}>
                <h3 className="vertical-timeline-element-title">Front-End Developer Internship</h3>
                <h4 className="vertical-timeline-element-subtitle gray">
                  <a href="http://www.expedita.com/">Expedita Lda.</a>
                </h4>
                <p>
                  <a href="https://web.tecnico.ulisboa.pt/~bruno.s.henriques/reservations/">Reservations App</a>
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                date="2010 - 2013"
                iconStyle={esjmStyle}>
                <h3 className="vertical-timeline-element-title">IT Technician</h3>
                <h4 className="vertical-timeline-element-subtitle gray">
                  <a href="https://www.jaimemoniz.com/">Escola Secundária Jaime Moniz</a>
                </h4>
                <p>Teeworlds! <span role="img" aria-label="heart">❤️</span></p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                date="2011 - present"
                iconStyle={pfStyle}>
                <h3 className="vertical-timeline-element-title">Community Management</h3>
                <h4 className="vertical-timeline-element-subtitle gray">
                  <a href="https://playfun.pt/">PlayFun Gaming community</a>
                </h4>
                <p>welp</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                date="2007 - 2010"
                iconStyle={trStyle}>
                <h3 className="vertical-timeline-element-title">Community Management</h3>
                <h4 className="vertical-timeline-element-subtitle gray">
                  <span>
                    <a href="http://s1.zetaboards.com/Tugas_Revolution/">Tugas Revolution</a>
                    <span> • </span>
                    <a href="http://z15.invisionfree.com/RsPortugal/">RSPortugal</a>
                  </span>
                </h4>
                <p>gud times man</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement date="1995"
                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }} />
            </VerticalTimeline>
          </Section>
          <Section name="Projects"></Section>
          <Section name="Contact"></Section>
        </main>
      </div>
    );
  }
}

export default App;
