function registerLogoutHandler() {
    const logoutButton = document.getElementById('Logout')

    logoutButton.addEventListener('click',async  (e) => {
        e.preventDefault() // ahref wird deaktiviert
        console.log("ausloggen POST /auth/jens")
        
        await fetch('http://localhost:3000/auth/logout', {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
        })
        
        window.location.href = '/auth/login'
    })
}
