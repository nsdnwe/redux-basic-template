import React from 'react';
export default class Book extends React.Component {
    render() {
        return (
            <div>Book: {this.props.name} </div>
        )
    }
}