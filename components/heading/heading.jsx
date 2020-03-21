import React, { useContext } from 'react';
import { ThemeContext } from '../provider/ThemeContext';

const Heading = ({ children }) => {
  const theme = useContext(ThemeContext);

  return (
    <>
      <style jsx>
        {`
          h3.heading {
            color: ${theme.colors.foreground};
            font-size: 4em;
            font-weight: 900;
            margin: 4rem 0;
          }

          @media (max-width: 1200px) {
            h3.heading {
              font-size: 3rem;

              margin: 3rem 0;
            }
          }
          @media (max-width: 800px) {
            h3.heading {
              font-size: 2.5rem;

              margin: 2rem 0;
            }
          }
        `}
      </style>
      <h3 className="heading">{children}</h3>
    </>
  );
};

export default Heading;
