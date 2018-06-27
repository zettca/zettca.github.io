import React from 'react';
import PropTypes from 'prop-types';
import SVG from 'react-inlinesvg';

class SocialIcon extends React.PureComponent {
  render() {
    const { name, url, fill } = this.props;
    const myStyle = { fill };

    return (
      <a href={url}>
        <span className="icon icon-32">
          <SVG style={myStyle} src={require(`../res/img/svg/${name}.svg`)} />
        </span>
      </a>
    );
  }
}

SocialIcon.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  fill: PropTypes.string,
};

export default SocialIcon;
