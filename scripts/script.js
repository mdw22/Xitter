
const xweets = [
    { username: "user1", text: "This is a xweet"},
    { username: "user2", text: "Another xweet"},
];

function displayXweets() {
    const xweetsContainer = document.getElementById("xweetsContainer");
    xweetsContainer.innerHTML = "";
    xweets.forEach(tweet => {
        const xweetElement = document.createElement("div");
        xweetElement.classList.add("xweet");
        xweetElement.innerHTML = "<strong>" + tweet.username + ": " + tweet.text + "</strong>";
        xweetsContainer.appendChild(xweetElement);
    });
}

function handleXweetSubmission(event) {
    event.preventDefault();
    const xweetInput = document.getElementById("xweetInput");
    const newXweetText = xweetInput.value.trim();
    if(newXweetText !== "") {
        xweets.push({username: "Placeholder", text: newXweetText});
        displayXweets();
        xweetInput.value = "";
    }
}

const xweetForm = document.getElementById("xweetForm");
xweetForm.addEventListener("submit", handleXweetSubmission);

displayXweets();