import React from 'react';
import App from 'next/app';
import { NextSeo } from 'next-seo'
import Head from 'next/head';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
        <NextSeo
          title="I'm Andrew Kachnic"
          description="Meet a passionate, energetic web developer."
          canonical="https://andrewkachnic.now.sh"

          openGraph={{
            type: 'website',
            url: 'https://andrewkachnic.now.sh',
            site_name: 'Andrew Kachnic',
            locale: 'en_US',
            title: 'I\' Andrew Kachnic',
            description: 'Meet a passionate, energetic web developer.',
          }}
          twitter={{
            handle: '@su_andrewk',
            site: "@su_andrewk",
            cardType: 'summary_large',
          }}
          additionalMetaTags={{
            name: 'keywords',
            content: 'Andrew Kachnic,developer,Kachnic,project,web developer'
          }}
        />
      <Component {...pageProps} />
      </>
    );
  }
}
