import React from 'react';
import PropTypes from 'prop-types';
import SVG from 'react-inlinesvg';

class SocialContact extends React.PureComponent {
  render() {
    const { name, url, fill, text } = this.props;
    const myStyle = { fill };

    return (
      <div>
        <span className="icon icon-24">
          <SVG style={myStyle} src={require(`../res/img/svg/${name}.svg`)} />
        </span>
        <a href={url || null} className="text">{text}</a>
      </div>

    );
  }
}

SocialContact.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  fill: PropTypes.string,
  text: PropTypes.string,
};

export default SocialContact;
