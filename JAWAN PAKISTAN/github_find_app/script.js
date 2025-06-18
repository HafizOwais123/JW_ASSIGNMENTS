function searchUser() {
  const username = document.getElementById('usernameInput').value.trim();
  const userDataDiv = document.getElementById('userData');

  userDataDiv.innerHTML = ''; // clear previous

  if (username === "") {
    userDataDiv.innerHTML = "<p style='color:#ef4444;'>Please enter a username.</p>";
    return;
  }

  fetch(`https://api.github.com/users/${username}`)
    .then(response => {
      if (!response.ok) {
        throw new Error("User not found");
      }
      return response.json();
    })
    .then(data => {
      userDataDiv.innerHTML = `
        <img src="${data.avatar_url}" alt="${data.login}">
        <h2>${data.name || "No Name Provided"}</h2>
        <p><strong>Username:</strong> ${data.login}</p>
        <p><strong>Bio:</strong> ${data.bio || "No bio available."}</p>
        <p><strong>Followers:</strong> ${data.followers} | <strong>Following:</strong> ${data.following}</p>
        <p><strong>Public Repos:</strong> ${data.public_repos}</p>
        <a href="${data.html_url}" target="_blank">🔗 View GitHub Profile</a>
      `;
    })
    .catch(error => {
      userDataDiv.innerHTML = `<p style='color:#ef4444;'>${error.message}</p>`;
    });
}
