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
              <h3 className="no-separator">Bruno Henriques</h3>
              <div><a href="https://github.com/zettca">zettca</a></div>
            </div>
            <div className="separator">
              <strong>
                <div>Full-Stack Developer</div>
              </strong>
            </div>
            <div className="separator">
              <div>Cyber-Security</div>
              <div>Distributed Systems</div>
            </div>
            <div className="separator">
              <span>JavaScript • Java • Python • C • C#</span>
            </div>
            <div className="social-icons">
              <SocialIcon fill="#3B5998" name="facebook" url="https://www.facebook.com/zettca" />
              <SocialIcon fill="#0077B5" name="linkedin" url="https://www.linkedin.com/in/zettca/" />
              <SocialIcon fill="#E4405F" name="instagram" url="https://www.instagram.com/zettca/" />
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
