async function asyncFetchData() {
  console.log("start");
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await response.json();
  console.log(data);
  console.log("end");
}

function promiseFetchData() {
  console.log("start");
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((data) => console.log(data));
  console.log("end");
}

// asyncFetchData();

promiseFetchData();
