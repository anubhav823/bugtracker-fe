import React from "react";
class GetAllUsers extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false
    };
  }

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
      <h1> Please wait some time....</h1> </div>;
    return (
      <div className="App"> {
        items.map((item) => (
          <ol key={item.id} >
            <li>Id: {item.id}</li>
            <li>First Name: {item.firstName}</li>
            <li>Last Name: {item.lastName}</li>
            <li>Email: {item.email}</li>
            <li>Password: {item.password}</li>
          </ol>
        ))
      }
      </div>
    );
  }
}

export default GetAllUsers;
