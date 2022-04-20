import PropTypes  from 'prop-types';

 function Section ({title, children}){
    return (
        <div>
          {title && <h2>{title}</h2>}
          {children}
        </div>
      );
 }

 Section.propType = {
    title: PropTypes.string,
    children: PropTypes.node,
 };

 export default Section;