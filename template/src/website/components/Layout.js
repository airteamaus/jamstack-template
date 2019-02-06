import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import emotionReset from 'emotion-reset';
import { Global, css } from '@emotion/core';
import Navbar from './Navbar';

const wrapper = css`
  width: 100%;
  height: 100%;
`;

const TemplateWrapper = ({ children }) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <div>
        <Helmet>
          <html lang="en" />
          <title>{data.site.siteMetadata.title}</title>
          <meta
            name="description"
            content={data.site.siteMetadata.description}
          />

          <meta name="theme-color" content="#fff" />
          <meta property="og:type" content="business.business" />
          <meta property="og:title" content={data.site.siteMetadata.title} />
          <meta property="og:url" content="/" />
        </Helmet>
        <Global
          styles={css`
            ${emotionReset}

            *, *::after, *::before {
              box-sizing: border-box;
              -moz-osx-font-smoothing: grayscale;
              -webkit-font-smoothing: antialiased;
              font-smoothing: antialiased;
            }

            html,
            body,
            input,
            textarea,
            select,
            button,
            h1,h2,h3,h4,h5,h6 {
              font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"
            }

            body {
              font-size: 14px;
            }
          `}
        />
        <Navbar />
        <div css={wrapper}>{children}</div>
      </div>
    )}
  />
);

export default TemplateWrapper;
