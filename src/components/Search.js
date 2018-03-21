import React, { Component } from 'react'
import { withApollo } from 'react-apollo'
import gql from 'graphql-tag'
import Link from './Link'

class Search extends Component {

    state = {
        links: [],
        filter: ''
    }

    render() {
        return (
            <div>
                <div>
                    Search
                    <input
                        type='text'
                        onChange={(e) => this.setState({ filter: e.target.value })}
                    />
                    <button
                        onClick={() => this._executeSearch()}
                    >
                        OK
                    </button>
                </div>
                {this.state.links.map((link, index) =>
                    <Link
                        key={link.id}
                        link={link}
                        index={indesx}
                    />
                )
                }
            </div>
        )
    }

    _executeSearch = async () => {
        //implement later
    }
}
export default withApollo(Search)