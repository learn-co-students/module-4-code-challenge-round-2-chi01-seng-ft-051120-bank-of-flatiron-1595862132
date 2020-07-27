import React, { Component } from "react";
import Transaction from "./Transaction";




class TransactionsList extends Component {
  renderDates = () => {
    return this.props.transactions.map(tranObj => {
      return <p>{tranObj.date}</p>
    })
  }

  renderDescriptions = () => {
    return this.props.transactions.map(tranObj => {
      return <p>{tranObj.description}</p>
    })
  }

  renderAmount = () => {
    return this.props.transactions.map(tranObj => {
      return <p>{tranObj.amount}</p>
    })
  }

  renderCategories = () => {
    return this.props.transactions.map(tranObj => {
      return <p>{tranObj.category}</p>
    })
  }

  render(){
    
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        <tr>
        <td>{this.renderDates()}</td>
        <td>{this.renderDescriptions()}</td>  
        <td>{this.renderCategories()}</td>
        <td>{this.renderAmount()}</td>
        </tr>
        
      </tbody>
    </table>
  );
  }
};
//its silly but the table took up most of my time, I was trying to figure out a way to have it generate all in one function but
//I didn't get to figure that out

export default TransactionsList;
