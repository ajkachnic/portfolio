import React, { useContext } from 'react';
import { ThemeContext } from '../provider/ThemeContext';

const Button = ({ children, link }) => {
  const theme = useContext(ThemeContext);

  return (
    <>
      <style jsx>
        {`
        button {
          color: #ffffff;
          font-size: 2rem;
          font-weight:700;
          background: ${theme.colors.primary};
          padding: 1rem 2rem;
          border:none;
          border-radius: 2px;
          margin:2rem 0;
        }
        
        @media (max-width: 1200px) {
            button {
              margin: 1.5rem 0;
            }
          }
          @media (max-width: 800px) {
            button {
              margin: 1.25rem 0;

          font-size: 1.5rem;
            }
          }
          @media (max-width: 600px) {
            button {
              margin: 1rem 0;
            }
          }
          a {
            text-decoration: none;
            color: ${theme.colors.foreground};
          }
   
      `}
      </style>
      <button type="button">
        { link ? <a href={link}>{children}</a> : children }
      </button>
    </>
  );
};

export default Button;
