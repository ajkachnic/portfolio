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
      <Title>My Blog</Title>
      <div className="grid">
        {posts.map(val => (
          <div>
            <Subtitle>
              <Link href={val.link}>{val.title}</Link>
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
              {val.tags.map(val => (
                <p className="tag">{val}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
