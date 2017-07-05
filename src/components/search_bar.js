import React, { Component } from 'react';


/*
Functional version of SearchBar

const SearchBar = () => {
    return <input />;
};
*/

//Class-Based version of SearchBar
class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = { term: '' }
    }

    render() {
        //this.state .term = event.target.value THIS IS BAD DON'T DIRECTLY SET STATE OUTSIDE OF CONSTRUCTORS
        return (
            <div>
                <input
                    value={this.state.term}
                    onChange={event => this.setState({term: event.target.value})} />
            </div>
        );
    }

}

export default SearchBar;