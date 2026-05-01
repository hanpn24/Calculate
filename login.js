
    function sendData() {
    const name = document.getElementById("user-name").value.trim();

    if (name === "") {
        alert("Please enter your name!");
        return;
    }

    fetch("https://script.google.com/macros/s/AKfycbxAT4NMknfIeaBd_X20PfBAKc3Wq60vDd42sZL_ImZKkDveQWpemAL67PeYceQNLKgePg/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name
        })
    })
    .then(() => {
        window.location.href = "gender.html";
    })
    .catch(error => {
        console.error(error);
        alert("Failed to send data.");
    });
}