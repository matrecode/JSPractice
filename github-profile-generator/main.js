
async function fetchUsers(username){
    const res = await fetch(`https://api.github.com/users/${username}`)
    return res.json()
}

async function getUserDetails() {
    const username = document.getElementById("search").value.trim()
    const userDetails = document.getElementById("main")

    if (username === ""){
        userDetails.innerHTML = ""
        return
    }

    try {
        const userData = await fetchUsers(username)
        const userCard = getUserCard(userData) 

        userDetails.innerHTML = userCard

    }catch(error){
        userDetails.innerHTML = '<p>User not found</p>';
    }


}

function getUserCard(userData) {
    return `<div class="img-content">
    <img src="${userData.avatar_url}" alt="${userData.name}">
</div>
<div class="desc-content">
    <h3>${userData.name || 'N/A'}</h3>
    <p>${userData.bio || 'N/A'}</p>
    <div class="profile-content">
        <div class="row1">
            <p>Followers : ${userData.followers || 'N/A'}</p>
            <p>Following : ${userData.following || 'N/A'}</p>
            <p>Repos : ${userData.public_repos || 'N/A'}</p>
        </div>
        <div class="row2">
            <p>Twitter : ${userData.twitter_username || 'N/A'}</p>
            <p>Location : ${userData.location || 'N/A'}</p>
        </div>
    </div>
</div>`
}