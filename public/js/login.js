const loginBtn = document.getElementById("login-submit");

const loginUser = (e) => {
    try {
        console.log('loginUser() ran');
        e.preventDefault();
        const username = document.getElementById('login-username');
        const password = document.getElementById('login-password');
        console.log('Got elements');
        fetch('/api/login', {
            method: 'POST',
            header: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify({ name: username, password: password})
        })
        
        .then(response => {
            if (response.ok) {
                console.log('response.ok');
                document.location.replace('/dashboard');
            }
            else {
                console.log('response not ok.')
            }
        })
    } catch (error) {
        console.error('Error logging in:', error);
    }
}

loginBtn.addEventListener('click', loginUser);