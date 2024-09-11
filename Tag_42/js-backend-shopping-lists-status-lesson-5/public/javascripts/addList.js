function init() {
    document.querySelector('form').addEventListener('submit', handleSubmit)
}

async function handleSubmit(e) {
    e.preventDefault()

    const body = createJSONBody(e.target)

    const res = await fetch('http://localhost:3000/api', {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body,
    })

    if (`${res.status}`.startsWith('4')) {
        alert('Error')
        return
    }

    location.href = '/'
}

function createJSONBody(form) {
    const data = new FormData(form)

    const body = Object.fromEntries(data)

    return JSON.stringify(body)
}

init()
