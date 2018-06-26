import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import './App.css';
import istLogo from '../img/logo/ist.png';
import pfLogo from '../img/logo/playfun.png';
import trLogo from '../img/logo/tr.png';
import esjmLogo from '../img/logo/esjm.png';
import DotsNavigation from './DotsNavigation';
import Section from './Section';
import IdCard from './IdCard';

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

    const istStyle = { background: `url(${istLogo}) no-repeat center/90% #009DE0` };
    const esjmStyle = { background: `url(${esjmLogo}) no-repeat center/90% #CCCCCC` };
    const pfStyle = { background: `url(${pfLogo}) no-repeat center/70% #304050` };
    const trStyle = { background: `url(${trLogo}) no-repeat center/90% #111111` };

    return (
      <div>
        <DotsNavigation elements={['landing', 'timeline', 'projects', 'hobbies', 'contact']} index={navIndex} />
        <main>
          <Section name="Landing">
            <div>
              <IdCard />
            </div>
          </Section>
          <Section name="Timeline">
            <VerticalTimeline>
              <VerticalTimelineElement
                date="Movember 2018"
                iconStyle={{ background: 'silver' }}>
                <h2 className="vertical-timeline-element-title">Something Something</h2>
                <h4 className="vertical-timeline-element-subtitle gray">
                  <a href="">CompanyXPTO</a>
                </h4>
                <p>Something more</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                date="2017 - present"
                iconStyle={istStyle}>
                <h2 className="vertical-timeline-element-title">MSc in Computer Science and Engineering</h2>
                <h4 className="vertical-timeline-element-subtitle gray">
                  <a href="">Instituto Superior Técnico</a>
                </h4>
                <p>Distributed Systems, Cyber-Security</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                date="2013 - 2017"
                iconStyle={istStyle}>
                <h2 className="vertical-timeline-element-title">BSc in Computer Science and Engineering</h2>
                <h4 className="vertical-timeline-element-subtitle gray">
                  <a href="https://tecnico.ulisboa.pt/">Instituto Superior Técnico</a>
                </h4>
                <p>...</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                date="2013"
                iconStyle={esjmStyle}>
                <h2 className="vertical-timeline-element-title">Front-End Developer Internship</h2>
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
                <h2 className="vertical-timeline-element-title">IT Technician</h2>
                <h4 className="vertical-timeline-element-subtitle gray">
                  <a href="https://www.jaimemoniz.com/">Escola Secundária Jaime Moniz</a>
                </h4>
                <p>Teeworlds! <span role="img" aria-label="heart">❤️</span></p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                date="2011 - present"
                iconStyle={pfStyle}>
                <h2 className="vertical-timeline-element-title">Community Management</h2>
                <h4 className="vertical-timeline-element-subtitle gray">
                  <a href="https://playfun.pt/">PlayFun Gaming community</a>
                </h4>
                <p>welp</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                date="2007 - 2010"
                iconStyle={trStyle}>
                <h2 className="vertical-timeline-element-title">Community Management</h2>
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
          <Section name="Hobbies"></Section>
          <Section name="Contact"></Section>
        </main>
      </div>
    );
  }
}

export default App;
