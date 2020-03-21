import React, { useContext } from 'react';
import { ThemeContext } from '../provider/ThemeContext';

const Container = ({ children }) => {
  const theme = useContext(ThemeContext);

  return (
    <>
      <style jsx>
        {`
        div.container {
          background: ${theme.colors.background};
          color: ${theme.colors.foreground};
          width: 100%;
          max-width: 1200px;
          height: 100vh;
          margin: auto;
          padding: 3rem;
        }

        @media (max-width: 1200px) {
          div.container {
            max-width: 8000px;
            padding: 2rem;
          }
        }
        @media (max-width: 800px) {
          div.container {
            max-width: 600px;
            padding: 1rem;
          }
        }
        @media (max-width: 600px) {
          div.container {
            max-width: 100%;
            padding: 1rem;
          }
        }
      `}
      </style>
      <div className="container">{children}</div>
    </>
  );
};

export default Container;
