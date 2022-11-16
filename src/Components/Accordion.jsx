import { useState } from 'react';
import { Link } from 'react-router-dom';

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion__item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div className="accordion__header">
          {title} {isActive ? '⇓' : '⇑'}
        </div>
      </div>
      <Link to="/hellopage">
        {isActive && <div className="accordion__content">{content}</div>}
      </Link>
    </div>
  );
};

export default Accordion;
