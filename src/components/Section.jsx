import React from 'react';
import PropTypes from 'prop-types';

class Section extends React.PureComponent {
  render() {
    const { name, children } = this.props;
    const nameLower = name.toLowerCase();

    return (
      <section id={nameLower} name={name} className={'section flex-vertical'}>
        <div className='title'>
          <a href={'#' + nameLower}>{name}</a>
        </div>
        <div>
          {children}
        </div>
      </section>
    );
  }
}

Section.propTypes = {
  name: PropTypes.string,
  children: PropTypes.element,
};

export default Section;
