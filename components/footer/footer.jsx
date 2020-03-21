import React, { useContext } from 'react';
import { ThemeContext } from '../index';

const Footer = ({
  body,
}) => {
  const theme = useContext(ThemeContext);
  return (
    <>
      <style jsx>
        {`
        .footer {
            padding:3rem 0;
            background: ${theme.colors.cardBackground};
        }
        p {
            font-size:1.5rem;
            text-align:center;
        }
        `}
      </style>
      <section className="footer">
        <p className="footer__text">{body}</p>
      </section>
    </>
  );
};

export default Footer;
