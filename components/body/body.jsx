import React, { useContext } from 'react';
import { ThemeContext } from '../provider/ThemeContext';

const Body = ({ children }) => {
  const theme = useContext(ThemeContext);

  return (
    <>
      <style jsx>
        {`
        p.body {
          color: ${theme.colors.foreground};
          font-size: 2rem;
          font-weight:500;
          margin: 1rem 0;
        }

        @media (max-width: 1200px) {
          p.body {
            font-size: 1.75rem;

          margin: .75rem 0;
          }
        }
        @media (max-width: 800px) {
          p.body {
            font-size: 1.5rem;

          margin: .5rem 0;
          }
        }
        @media (max-width: 600px) {
          p.body {
            font-size: 1.25rem;
          }
        }
      `}
      </style>
      <p className="body">{children}</p>
    </>
  );
};

export default Body;
