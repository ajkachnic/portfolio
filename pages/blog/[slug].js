import React from "react";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Head from 'next/head';
import { NextSeo } from 'next-seo'
import Link from 'next/link';
import '../../utils/blogStyle.css'
import { Title } from "../../components";

export default function PostTemplate({ content, data, slug }) {
  const frontmatter = data;
  return (
    <>
        <NextSeo
          openGraph={{
            title: frontmatter.title,
            description: frontmatter.description,
            url: 'https://ajkachnic.now.sh/blog/' + slug,
            type: 'article',
            article: {
              authors: [
                "Andrew Kachnic"
              ],
              tags: frontmatter.tags,
              section: 'Programming',
              publishedTime: frontmatter.date,
            },
          }}
          description={frontmatter.description}
          title={frontmatter.title}

        />
      <Head>
        <meta name="description" content={frontmatter.description} />
        <title>{frontmatter.title}</title>
      </Head>
      <div>
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
          padding: "7rem 0 1rem 0"
        }}>{frontmatter.title}</Title>

        <ReactMarkdown source={content} />
      </div>
    </>
  );
}

PostTemplate.getInitialProps = async context => {
  const { slug } = context.query;
  let content;
  try {
    content = await import(`../../content/${slug}.md`);
    const data = matter(content.default);
    return { ...data, slug };
  } catch {
    return {
      content: "The article you are looking for cannot be found",
      data: {
        title: "Article not found"
      }
    };
  }
};
