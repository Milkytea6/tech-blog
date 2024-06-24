
const signupBtn = document.getElementById('sign-up-submit');

// javaScript for creating a new user and saving it to the database
const signUpUser = async (event) => {
    event.preventDefault();
    console.log('signUpUser() ran');

    try {
        const newUser = {
            name: document.getElementById("sign-up-username").value.trim(),
            email: document.getElementById("sign-up-email").value.trim(),
            password: document.getElementById("sign-up-password").value.trim()
        }

        if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/i.test(newUser.password)) {
            window.alert('Password must be at least 8 characters long and contain at least one digit, one lowercase letter, and one uppercase letter.');   
        }
        else{ 

        if (newUser) {
            console.log(newUser)
            fetch('/api/signUp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify( newUser )
            })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    window.alert('Username or email already exists')
                    console.error('Failed to save data.');
                }
            })
            .catch(error => {
                console.error(error.message);
            });
        }
        else {
            window.alert('There was a problem creating you account. Please try again.');
            }
    } 
}
    catch (err) {
        console.log('catch')
        err.json(err);
    }

};


signupBtn.addEventListener('click', signUpUser);