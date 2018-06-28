import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const images = {};
['ist.png', 'playfun.png', 'tr.png', 'esjm.png'].forEach((imgName) => {
  const key = imgName.slice(0, imgName.indexOf('.'));
  images[key] = require('../res/img/' + imgName);
});

const istStyle = { background: `url(${images.ist}) no-repeat center/90% #009DE0` };
const esjmStyle = { background: `url(${images.esjm}) no-repeat center/90% #CCCCCC` };
const pfStyle = { background: `url(${images.playfun}) no-repeat center/60% #304050` };
const trStyle = { background: `url(${images.tr}) no-repeat center/90% #111111` };

class SelfTimeline extends React.PureComponent {
  render() {

    return (
      <VerticalTimeline animate={true}>
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
    );
  }
}


export default SelfTimeline;
