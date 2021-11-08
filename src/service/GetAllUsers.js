export async function GetAllUsers() {
    fetch('localhost:8081/users')
  .then(response => response.json())
  .then(data => console.log(data));

}