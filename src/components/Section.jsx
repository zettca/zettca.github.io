import React from 'react';
import PropTypes from 'prop-types';

class Section extends React.PureComponent {
  render() {
    const { name, children, className } = this.props;
    const nameLower = name.toLowerCase();
    const useTitle = false;

    return (
      <section id={nameLower} name={name} className={`section ${className}`}>
        <div className='title'>
          <a href={'#' + nameLower}>{useTitle && name}</a>
        </div>
        <div className="flex-center">
          {children}
        </div>
      </section>
    );
  }
}

Section.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
