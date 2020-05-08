import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table'

class CustomerList extends Component {
	
	constructor(props) {
		super(props)

		this.state = {
		  data: []
		};
	  }

	callCustomerService(pageNumber){

		const url = 'https://onboardingapplication.azurewebsites.net/customers/'

		fetch(url)
		  .then(result => result.json())
		  .then(result => {
			this.setState({
			  data: result,
			})
		  })
	}

	componentDidMount() {
		this.callCustomerService();
	}

	render() {
    
	const { data } = this.state;
	
	const TableHeader = () => {
	  return (
		<thead>
		  <tr>
			<th>Customer Name</th>
			<th>Business Type</th>
			<th>Status</th>
			<th>Purpose</th>
			<th>RM Team</th>
			<th>PEP</th>
			<th>Annual TurnOver</th>
			<th>Estimate TurnOver</th>
		  </tr>
		</thead>
	  )
	}

	const result = data.map(row => (
		<tr key={row._id}>
        <td>{row.custName}</td>
		<td>{row.businessType}</td>
		<td>{row.Status}</td>
		<td>{row.Purpose}</td>
		<td>{row.RMTeam}</td>
		<td>{row.PEP}</td>
		<td>{row.AnnualTurnOver}</td>
		<td>{row.EstimateTurnOver}</td>
		<td><Button variant="primary" className="mr-2" href="#">Edit</Button></td>
        </tr>
		))
	
    return (
		<div>
			<Table striped bordered hover responsive>
			<TableHeader/>
			<tbody>		
			{result}
			</tbody>
			</Table>
		</div>
    );
	}
  }

export default CustomerList