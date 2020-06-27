import { graphql, useStaticQuery, Link } from 'gatsby'
import React from 'react'
import SEO from '../components/seo'
import Layout from '../components/layout'
import TextLoop from 'react-text-loop'
import styled from 'styled-components'

const texts = ['뉴비 프론트엔드 개발자 🚀', 'UI/UX 디자이너 워너비 🧐', '알고리즘을 좋아하는 🧑🏻‍💻']

const Resume: React.FC = () => {
    return (
        <Layout>
            <SEO title="About" url="/about" />
            <h1>
                Say Hi to the Internet!
                <br />
                저는&nbsp;
                <TextLoop interval={2000} children={texts} springConfig={{ stiffness: 100, damping: 10 }} />
                <br />
                hyperflow 입니다.
            </h1>
            <Linespace />
            <ResumeTitle>최용욱</ResumeTitle>
            <ResumeContext>
                진주고등학교 졸업
                <br />
                고려대학교 컴퓨터학과 학부과정 (2019 ~)
                <br />
                프로그래밍으로 세상을 바꾸는 일을 합니다.
            </ResumeContext>
            <Linespace />
            <ResumeTitle>알고리즘과 웹을 좋아합니다.</ResumeTitle>
            <ResumeContext>
                고려대학교 알고리즘 학회 ALPS에서 부회장을 맡고 있습니다.
                <br />
                요즘은 웹에 관심이 많아 리액트를 공부하면서 프론트엔드의 덕을 쌓고 있습니다.
                <br />
                동료와의 코딩을 좋아하기에 개발팀 ALT_TAB에서 함께 공부하고 있습니다.
            </ResumeContext>
            <Linespace />
            <ResumeTitle>심플하고 아름다운 것을 좋아합니다.</ResumeTitle>
            <ResumeContext>
                어려서부터 컴퓨터로 시각디자인 작업을 하는 것을 좋아했기에
                <br />
                Photoshop, Illustrator, Figma, Final Cut과 같은 디자인 툴과 친합니다.
                <br />
                기술을 통한 완벽한 구현만큼 유저와의 상호작용도 중요하다고 생각합니다.
                <br />
                현재는 모든 사람에게 접근성 있는 키오스크 인터페이스에 대해서 고민하고 있습니다.
            </ResumeContext>
            <Linespace />
            <ResumeTitle>제 사서함은 이곳입니다.</ResumeTitle>
            <ResumeContext>
                <a href="mailto:hyperflow@kakao.com" target="_blank">
                    hyperflow@kakao.com
                </a>
                <br />
                편하게 연락주세요, 읽어주셔서 감사합니다.
            </ResumeContext>
        </Layout>
    )
}

const Linespace = styled.div`
    padding: 30px;
`

const ResumeTitle = styled.h2`
    &:before {
        width: 10px;
        height: 20px;
        background-color: skyblue;
        position: absolute;
        left: -20px;
        top: -5px;
        transform: skew(0, 20deg);
        content: '';
        z-index: -1;
    }

    position: relative;
`

const ResumeContext = styled.p`
    font-size: 20px;
    padding-top: 10px;
`

Resume.displayName = 'resume'

export default Resume
