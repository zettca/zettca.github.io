import React from 'react';
import profilePhoto from '../img/profile.jpg';

import './IdCard.css';

class IdCard extends React.PureComponent {
  render() {

    return (
      <div id="idCard" className="card">
        <div>
          <div className="portrait">
            <img width="128" height="128" src={profilePhoto} alt="portrait" />
          </div>
          <div className="idCard-content">
            <div className="separator">
              <h3 className="no-separator">Bruno Henriques</h3>
              <div>zettca</div>
            </div>
            <div className="separator">
              <strong>
                <div>Full-Stack Developer</div>
                <div>Front-End Developer</div>
              </strong>
            </div>
            <div className="separator">
              <div>Cyber-Security</div>
              <div>Distributed Systems</div>
            </div>
            <div className="separator">
              <span>JavaScript • Java • Python • C • C#</span>
            </div>
            <div className="separator">
              <span>~ stuffies ~</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default IdCard;
