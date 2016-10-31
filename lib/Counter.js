import React from 'react';
import $ from 'jquery';

const CongressPersonList = React.createClass({
  getInitialState() {
    return { names: [], filter: '' }
  },

  componentDidMount() {
    $.ajax({
      url: 'http://congress.api.sunlightfoundation.com/legislators',
      type: 'GET',
      data: { apikey: '08ca56fde5df4bf5a60411116b6ca372' },
      success: function(response) {
        const legislatorNames = response.results.map(function(legislator) {
          return legislator.first_name + " " + legislator.last_name;
        });

        this.setState({ names: legislatorNames })
      }.bind(this), error: function(xhr) {
        console.log(':(');
      }
    });
  },

  handleFilterChange(e) {
    this.setState({ filter: e.target.value });
  },

  render() {
    let names;
    const filter = this.state.filter;

    if (filter) {
      names = this.state.names.filter(function(name) {
        return name.indexOf(filter) >= 0;
      });
    } else {
      names = this.state.names;
    }

    const listItems = names.map(function(name, index) {
      return <li key={index}>{name}</li>
    });

    return (
      <div>
        <input onChange={this.handleFilterChange} value={this.state.filter} />
        <ul>
          {listItems}
        </ul>
      </div>
    )
  }
});

module.exports = CongressPersonList;
