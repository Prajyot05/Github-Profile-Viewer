const searchBtn = document.getElementById('search');
const inputName = document.getElementById('username');
const followers = document.getElementById('followers');
const following = document.getElementById('following');
const repos = document.getElementById('repos');
const image = document.getElementById('image');
const githubBtn = document.getElementById('githubBtn');

async function fetchUser(){
    let response = await fetch(`https://api.github.com/users/${inputName.value}`);
    let result = await response.json();
    if(result.avatar_url){
        image.src = result.avatar_url;
        followers.innerText = result.followers;
        following.innerText = result.following;
        repos.innerText = result.public_repos;
        githubBtn.href = result.html_url;
    }
    else{
        alert('User does not exist.')
    }
}

searchBtn.addEventListener('click', () => {
    let userId = inputName.value;
    fetchUser(userId);
})