export async function getUsers() {
  const response = await fetch("https://api.myjson.com/bins/j23xw");
  const json = await response.json();
  return json;
}

/*.then(response => {
      return response.json();
    })
    .then(myJson => {
      console.log(myJson);
    });*/
