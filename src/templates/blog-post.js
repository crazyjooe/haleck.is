import React from "react"
import { Link, graphql } from "gatsby"

import ShortBio from "../components/shortBio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale, supportColor } from "../utils/typography"
import Image from "gatsby-image"
import Tags from "../components/tagList"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteURL = this.props.data.site.siteMetadata.siteUrl
    const publicImageURL = post.frontmatter.seoImage.publicURL
    const { previous, next } = this.props.pageContext
    const greenTags = post.frontmatter.greenTags
    const purpleTags = post.frontmatter.purpleTags

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
          imageURL={siteURL + publicImageURL}
          keywords={greenTags.concat(purpleTags)}
        />
        <article>
          <header>
            {post.frontmatter.previewImage && (
              <Image
                fluid={post.frontmatter.previewImage.childImageSharp.fluid}
                alt={post.frontmatter.title}
              />
            )}
            <h1 style={style.header}>{post.frontmatter.title}</h1>
            <p style={style.subtitle}>
              {post.frontmatter.date} {"\u2022"} {post.timeToRead} min read
            </p>
          </header>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
          <p>
            <Tags purpleTags={purpleTags} greenTags={greenTags}></Tags>
          </p>
          <hr style={style.bottomLine} />
          <footer>
            <ShortBio />
          </footer>
        </article>

        <nav>
          <ul style={style.bottomNavigationList}>
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </Layout>
    )
  }
}

const headerStyle = {
  marginTop: rhythm(1),
  marginBottom: 0,
}

const subtitleStyle = {
  ...scale(-1 / 5),
  display: `block`,
  marginBottom: rhythm(1),
  color: supportColor,
}

const bottomLineStyle = {
  marginBottom: rhythm(1),
}

const bottomNavigationListStyle = {
  display: `flex`,
  flexWrap: `wrap`,
  justifyContent: `space-between`,
  listStyle: `none`,
  padding: 0,
}

const style = {
  header: headerStyle,
  subtitle: subtitleStyle,
  bottomLine: bottomLineStyle,
  bottomNavigationList: bottomNavigationListStyle,
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        previewImage {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        seoImage {
          publicURL
        }
        greenTags
        purpleTags
      }
      timeToRead
    }
  }
`
