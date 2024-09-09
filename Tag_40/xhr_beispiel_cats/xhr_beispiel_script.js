const httpRequest = new XMLHttpRequest();

function setFact() {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      console.log(JSON.parse(httpRequest.responseText).data[7].fact);
    }
  }
}

async function randomFact() {
  httpRequest.onreadystatechange = setFact;
  httpRequest.open('GET', 'https://catfact.ninja/facts', true);
  httpRequest.send();
}

randomFact();
