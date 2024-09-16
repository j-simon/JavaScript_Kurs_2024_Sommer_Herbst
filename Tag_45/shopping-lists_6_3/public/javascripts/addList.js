function init() {
    console.log("init")
    document.querySelector('form').addEventListener('submit', handleSubmit);
    registerLogoutHandler()
  }
  
  async function handleSubmit(e) {
    e.preventDefault();
    console.log("handleSubmit")
    // createJSONBody(e.target)

    const res = await fetch('http://localhost:3000/api', {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: createJSONBody(e.target),
      });

      if (`${res.status}`.startsWith('4')) {
        alert('Error'+ JSON.stringify(await res.json()));
        return;
      }
    
       location.href = '/';
  }
  
  function createJSONBody(form) {
    const data = new FormData(form);
    const body = {};
    for (let [key, value] of data) {
      body[key] = value;
    }
    console.log(JSON.stringify(body))
    return JSON.stringify(body);
  }
  
  
  init();
  