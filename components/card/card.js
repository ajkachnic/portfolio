import React, { useContext } from 'react';
import { ThemeContext } from '../provider/ThemeContext';

const Heading = ({
  body, title, link, linkText,
}) => {
  const theme = useContext(ThemeContext);

  return (
    <>
      <style jsx>
        {`
          div.card {
              box-shadow: 0px 5px 5px rgba(0, 0, 0, .15);
              padding: 2rem;
              background: ${theme.colors.cardBackground}
          }
          h3.card__title {
            color: ${theme.colors.foreground};
            font-size: 2em;
            font-weight: 900;
            margin: 0 0 1rem;
          }
          p.card__body{
              font-size:1.25rem;
          }

          @media (max-width: 1200px) {
           
          }
          @media (max-width: 800px) {
           
          }
        `}
      </style>
      <div className="card">
        {title ? <h3 className="card__title">{title}</h3> : ''}
        {body ? <p className="card__body">{body}</p> : ''}
        {title ? <a className="card__link" href={link}>{linkText}</a> : ''}
      </div>
    </>
  );
};

export default Heading;
