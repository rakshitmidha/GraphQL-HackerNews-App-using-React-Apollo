import React, { Component } from 'react'
import Link from './Link'

class ListLink extends Component {
    render() {
        const linkdsToRender = [
            {
                id: '1',
                description: 'Prisma turn db into GraphQL api',
                url: 'rakshitmidha.cf',
            },
            {
                id: '2',
                description: 'Prisma is a GraphQL client',
                url: 'https://www.apollographql.com/docs/react/',
            },
        ]

        return (
            <div>
                {
                    linkdsToRender.map(link => <Link key={link.id} link={link} />)
                }
            </div>
        )
    }
}

export default LinkLst