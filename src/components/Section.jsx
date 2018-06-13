import React from 'react';
import './Section.css';

class Section extends React.PureComponent {
  render() {
    const { name, children } = this.props;
    const nameLower = name.toLowerCase();

    return (
      <section className={'section'}>
        <div className='title'>
          <a id={nameLower} href={'#' + nameLower}>{name}</a>
        </div>
        {children}
      </section>
    );
  }
}

export default Section;
