const createBtn = document.getElementById("new-post-submit");

const createNewPost = (event) => {
    event.preventDefault();
    try {
        console.log('createNewPost() ran.');
        const postTitle = document.getElementById('new-post-title').value;
        const postContent = document.getElementById('new-post-content').value;
        console.log(postTitle);
        console.log(postContent);
        fetch('/api/dashboard', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: postTitle, content: postContent })
        })
        .then(response => {
            window.location.reload();
        })
            
        }
        
    
    catch (error) { 
        console.error('Error creating post', error);
    }
}

createBtn.addEventListener('click', createNewPost);