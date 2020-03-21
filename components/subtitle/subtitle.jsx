import React, { useContext } from 'react';
import { ThemeContext } from '../provider/ThemeContext';

const Subtitle = ({ children }) => {
  const theme = useContext(ThemeContext);

  return (
    <>
      <style jsx>
        {`
          h2.subtitle {
            color: ${theme.colors.foreground};
            font-size: 3rem;
            font-weight: 700;
          }

          @media (max-width: 1200px) {
            h2.subtitle {
              font-size: 2rem;
            }
          }
          @media (max-width: 800px) {
            h2.subtitle {
              font-size: 1.5rem;
            }
          }
          @media (max-width: 600px) {
            h2.subtitle {
              font-size: 1.5rem;
            }
          }
        `}
      </style>
      <h2 className="subtitle">{children}</h2>
    </>
  );
};

export default Subtitle;
