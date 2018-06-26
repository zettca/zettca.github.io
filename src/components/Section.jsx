import React from 'react';
import PropTypes from 'prop-types';
import './Section.css';

class Section extends React.PureComponent {
  render() {
    const { name, children } = this.props;
    const nameLower = name.toLowerCase();

    return (
      <section id={nameLower} className={'section'}>
        <div className='title'>
          <a href={'#' + nameLower}>{name}</a>
        </div>
        {children}
      </section>
    );
  }
}

Section.propTypes = {
  name: PropTypes.string,
  children: PropTypes.element,
};

export default Section;
