import axios from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
    axios.get('https://api.github.com/users/juliusheese')
    .then(response => {
        console.log(follower(response))
    })
    .catch(error => {
        console.log(error);
    })
*/

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/


const followersArray = ["https://api.github.com/users/juliusheese", "https://api.github.com/users/tetondan", "https://api.github.com/users/dustinmyers", "https://api.github.com/users/justsml", "https://api.github.com/users/luishrd", "https://api.github.com/users/bigknell"];

followersArray.forEach((arrayItem) => {
    axios.get(arrayItem)
        .then(response => {
            document.querySelector(".cards").appendChild(follower(response));
        })
        .catch(error => {
            console.log(error);
        })
});
/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
function follower(fdata) {
    let c = document.createElement('div');
    let i = document.createElement('img');
    let cinfo = document.createElement('div');
    let head3 = document.createElement('h3');
    let usr = document.createElement('p');
    let loc = document.createElement('p');
    let profp = document.createElement('p');
    let profa = document.createElement('a');
    let follr = document.createElement('p');
    let folling = document.createElement('p');
    let bio = document.createElement('p');
    c.setAttribute('class', 'card');
    cinfo.setAttribute('class', 'card-info');
    head3.setAttribute('class', 'name');
    usr.setAttribute('class', 'username');
    profa.href = fdata.data.url;
    i.src = fdata.data.avatar_url;
    c.appendChild(i);
    c.appendChild(cinfo).textContent = fdata.date;
    cinfo.appendChild(head3).textContent = fdata.data.name;
    cinfo.appendChild(usr).textContent = fdata.data.login;
    cinfo.appendChild(loc).textContent = "Location: " + fdata.data.location;
    cinfo.appendChild(profp).textContent = "Profile: " + fdata.data.url;
    profp.appendChild(profa);
    cinfo.appendChild(follr).textContent = "Followers: " + fdata.data.followers;
    cinfo.appendChild(folling).textContent = "Following: " + fdata.data.following;
    cinfo.appendChild(bio).textContent = "Bio: " + fdata.data.bio;
    return c;
}
//data.forEach((arrayItem) => {
//  let newF = articleMaker(arrayItem);

//  document.querySelector(".cards").appendChild(newF);
//});

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/