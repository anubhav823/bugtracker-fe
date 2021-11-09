import React from "react";
class GetAllUsers extends React.Component {

  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false
    };
  }

  // ComponentDidMount is used to
  // execute the code
  componentDidMount() {
    fetch("http://localhost:8081/users").then((res) => res.json())
    .then((json) => {
        this.setState({
            items: json,
            DataisLoaded: true
        });
    })
  }
  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded) return <div>
      <h1> Pleses wait some time.... </h1> </div>;

    return (
      <div className="App">
        <h1> Fetch data from an api in react </h1> {
          items.map((item) => (
            <ol key={item.id} >
              <li>First Name: {item.firstName}</li>
              <li>Last Name: {item.lastName}</li>
              <li>Email: {item.email}</li>
              <li> Password: {item.password}</li>
            </ol>
          ))
        }
      </div>
    );
  }
}

export default GetAllUsers;
