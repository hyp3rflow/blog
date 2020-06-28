import { CreatePagesArgs } from 'gatsby'
import path from 'path'
import { Query } from '../graphql-types'

export const createPages = async ({ actions, graphql }: CreatePagesArgs) => {
    const { createPage } = actions

    const { data, errors } = await graphql<Query>(`
        {
            allMarkdownRemark {
                edges {
                    node {
                        html
                        frontmatter {
                            title
                            path
                            categories
                        }
                    }
                }
            }
        }
    `)

    if (errors) {
        throw errors
    }

    data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: node.frontmatter.path,
            context: {
                html: node.html,
                title: node.frontmatter.title,
            },
            component: path.resolve(__dirname, '../templates/PostTemplate.tsx'),
        })
    })
}
