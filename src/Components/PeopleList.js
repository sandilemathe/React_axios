import React, {Component} from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';

export default class PeopleList extends Component {
    state = {
        people: [],
    };
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/users").then((res)=> {
            this.setState({people: res.data});
        });
    }
    render() {
        return (
            <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Username</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
    {this.state.people.map((people) => (
        <tr>
            <td key={people.id}>{people.id}</td>
            <td>{people.name}</td>
            <td>@{people.username}</td>
            <td>{people.email}</td>
        </tr>))}
    </tbody>
    </Table>
        );
    }
}