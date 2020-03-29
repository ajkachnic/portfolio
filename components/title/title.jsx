import React, { useContext } from 'react';
import { ThemeContext } from '../provider/ThemeContext';

const Title = ({ children,style }) => {
  const theme = useContext(ThemeContext);

  return (
    <>
      <style jsx global>
        {`
        .title {
          color: ${theme.colors.foreground};
          font-size: 5rem;
          font-weight:900;
          margin:  2rem 0;
        }

        @media (max-width: 1200px) {
          .title {
            font-size: 4rem;

          margin: 1.5rem 0;
          }
        }
        @media (max-width: 800px) {
          .title {
            font-size: 3rem;

          margin: 1rem 0;
          }
        }
        @media (max-width: 600px) {
          .title {
            font-size: 2.75rem;
          }
        }
      `}
      </style>
      <h1 className="title" style={style}>{children}</h1>
    </>
  );
};

export default Title;
