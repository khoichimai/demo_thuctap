import React from 'react';
 
class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {employee: []};
        this.headers = [
            { key: 'id', label: 'Id'},
            { key: 'name', label: 'Name' },
            { key: 'email', label: 'Email' },
            { key: 'designation', label: 'Designation' },
            { key: 'created', label: 'Created' }
        ];

    }
    componentDidMount() {
        fetch('http://localhost/PHP/employee.php').then(response => {
            console.log(response);
            return response.json();
          }).then(result => {
            // Work with JSON data here
            console.log(result);
            this.setState({
                employee_rs:result
            }); 
          }).catch(err => {
            // Do something for an error here
            console.log("Error Reading data " + err);
          });
    }
         
    render() {
        const employeeFound = this.state.employee_rs && this.state.employee_rs.length;
        if(employeeFound) {
            return (
                <div className="container"><h1>THE LIST </h1>
                    <div id="msg"></div>
                    
                    <table className="table" border="1">
                        <thead>
                            <tr>
                                {
                                    this.headers.map(function(h) {
                                        return (
                                            <th key={h.key}>{h.label}</th>
                                        )
                                    })
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employee_rs.map(function(item, index) {
                                return (
                                    <tr key={index}>
                                      <td>{item.id}</td>
                                      <td>{item.name}</td>
                                      <td>{item.email}</td>
                                      <td>{item.designation}</td>
                                      <td>{item.created}</td>
                                    </tr>
                                )}.bind(this))
                            }
                        </tbody>
                    </table>
                </div>
            )
        } else {
            return (
                <div id="container">
                    No product found
                </div>
            )
        }
    }
}
export default Demo;