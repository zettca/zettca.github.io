import React from 'react';
import './SelfCard.css';

import SocialIcon from './SocialIcon';

class SelfCard extends React.PureComponent {
  render() {

    return (
      <div id="idCard" className="card">
        <div>
          <div className="portrait">
            <img width="128" height="128" src="https://avatars2.githubusercontent.com/u/638946" alt="portrait" />
          </div>
          <div className="idCard-content">
            <div className="separator">
              <h1 className="no-separator">Bruno Henriques</h1>
              <div>
                <a href="https://github.com/zettca">zettca</a>
              </div>
            </div>
            <div className="separator">
              <div>UI • UX</div>
              <div>Cybersecurity</div>
              <div>Distributed Systems</div>
            </div>
            <div className="separator">
              <span>JavaScript • Java • Python</span>
            </div>
            <div className="separator dots"></div>
            <div className="separator social-icons">
              <SocialIcon fill="#3B5998" name="facebook" url="https://facebook.com/zettca" />
              <SocialIcon fill="#0077B5" name="linkedin" url="https://linkedin.com/in/zettca/" />
              <SocialIcon fill="#E4405F" name="instagram" url="https://instagram.com/zettca/" />
              <SocialIcon fill="#181717" name="github" url="https://github.com/zettca" />
              <SocialIcon fill="#1DA1F2" name="twitter" url="https://twitter.com/zettca" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SelfCard;
