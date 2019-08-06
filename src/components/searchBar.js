import React from 'react';

class SearchBar extends React.Component {
    state = {
        input: ''
    }


    handleChange = (props) => {
        this.setState({
            input: props.target.value
        })
    }

    render () {
        return (
            <div>
                <input value={this.state.input} onChange={this.handleChange} />
            </div>)
    }
}


export default SearchBar;