import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

export interface Post {
    id: string
    excerpt: string
    frontmatter: {
        title: string
        last_modified_at: string
        categories: string[]
        path: string
    }
}

interface Props {
    post: Post
}

const PostItem: React.SFC<Props> = ({ post }) => {
    return (
        <Wrapper key={post.id}>
            <PostWrapper to={post.frontmatter.path}>
                <PostTop>
                    <PostTitle>{post.frontmatter.title}</PostTitle>
                    <PublishedDate>{post.frontmatter.last_modified_at}</PublishedDate>
                </PostTop>
                <Description>{post.excerpt}</Description>
                <TagList>
                    {post.frontmatter.categories.map(cat => (
                        <Tag key={cat}>{`#${cat}`}</Tag>
                    ))}
                </TagList>
            </PostWrapper>
        </Wrapper>
    )
}

export default PostItem

const Wrapper = styled.li`
    padding: 24px;
    list-style-type: none;
    transition: background-color 0.25s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    border-radius: 8px;
    &:hover {
        background-color: rgba(0, 0, 0, 0.02);
    }
    &:nth-child(n + 2) {
        margin-top: 12px;
    }
    @media screen and (max-width: 800px) {
        padding: 12px;
    }
`

const PostWrapper = styled(Link)`
    text-decoration: none;
`

const PostTop = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    flex-wrap: wrap;
`

const PostTitle = styled.h2`
    margin-right: 8px;
    word-break: keep-all;
    overflow-wrap: break-word;
`

const PublishedDate = styled.small``

const Description = styled.div`
    word-break: keep-all;
    overflow-wrap: break-word;
`

const TagList = styled.ul`
    display: flex;
    align-items: center;
    margin-top: 12px;
    flex-wrap: wrap;
`

const Tag = styled.li`
    list-style-type: none;
    font-size: 0.75em;
    display: block;
    margin-bottom: 4px;
    &:not(:last-child) {
        margin-right: 0.5em;
    }
`

export const PostList = styled.ol`
    margin: 0 -24px;
    @media screen and (max-width: 800px) {
        margin: 0 -12px;
    }
`
