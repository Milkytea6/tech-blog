
const signupBtn = document.getElementById('sign-up-submit');


const signUpUser = async (event) => {
    event.preventDefault();
    console.log('signUpUser() ran');
    try {
        const newUser = {
            name: document.getElementById("sign-up-username").value.trim(),
            email: document.getElementById("sign-up-email").value.trim(),
            password: document.getElementById("sign-up-password").value.trim()
        }

        if (newUser) {
            console.log(newUser)
            fetch('/api/login', {
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
    catch (err) {
        console.log('catch')
        res.json(err);
    }
};

signupBtn.addEventListener('click', signUpUser);