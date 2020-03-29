import React from "react";

import "../utils/blogStyle.css";
import { Title, Heading, Subtitle } from "../components";
import Link from "next/link";
import { NextSeo } from "next-seo";

export default function Blog() {
  let posts = [
    {
      title: "My Take on Atomic Design in React",
      date: "2020-03-28",
      tags: ["javascript", "design", "react"],
      link: "/blog/my-take-on-atomic-design-in-react"
    },
    {
      title: "User Authentication, In 2020",
      date: "2020-03-25",
      tags: ["security", "privacy"],
      link: "/blog/user-authentication-in-2020"
    }
  ];
  return (
    <>
      <NextSeo
        openGraph={{
          title: "My Blog",
          description: "A collection of blog posts -- by Andrew Kachnic",
          url: "https://ajkachnic.now.sh/blog/",

        }}
        description="A collection of blog posts -- by Andrew Kachnic"
        title="My Blog"
      />        
      <nav>
      <ul className="nav">
        <li className="nav__item">
          <Link href="/">
              <a>Home</a>
           </Link>
        </li>
        <li className="nav__item">
          <Link href="/blog">
            <a href="/blog" target="_parent">Blog</a>
          </Link>
        </li>
      </ul>
    </nav>
      <Title style={{
        padding:"5rem 0 0 0"
      }}>My Blog</Title>
      <div className="grid">
        {posts.map((val, i) => (
          <div key={i}>
            <Subtitle>
              <Link href={val.link}>
                <a>
                {val.title}  
                </a>
              </Link>
            </Subtitle>
            <p
              style={{
                textTransform: "capitalize",
                fontWeight: "600",
                letterSpacing: ".05em"
              }}
            >
              {val.date}
            </p>
            <div className="tags">
              {val.tags.map((val, i) => (
                <p className="tag" key={i}>{val}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
