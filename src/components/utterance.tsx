import React, { createRef, useLayoutEffect } from 'react'

const src = `https://utteranc.es/client.js`

export interface IUtterancesProps {
    repo: string
}

const Utterances: React.FC<IUtterancesProps> = React.memo(({ repo }) => {
    const containerRef = createRef<HTMLDivElement>()

    useLayoutEffect(() => {
        const utterances = document.createElement('script')

        const attributes = {
            src,
            repo,
            'issue-term': 'url',
            label: `Comment 💬`,
            theme: 'github-light',
            crossorigin: 'anonymous',
            async: 'true',
        }

        Object.entries(attributes).forEach(([key, value]) => {
            utterances.setAttribute(key, value)
        })

        containerRef.current.appendChild(utterances)
    })

    return <div ref={containerRef} />
})

Utterances.displayName = 'Utterances'

export default Utterances
