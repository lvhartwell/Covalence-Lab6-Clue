
document.addEventListener("DOMContentLoaded", function () {
    var friends = ["Trice", "Tori", "Amber", "Ashleigh", "Titi"];
    var location = ["airport", "beach", "circus", "drive-in", "England", "fair", "gas station", "jungle"];
    var weapon = ["bat", "crowbar", "teddy bear", "Christmas tree", "chair",
        "lamp", "glass", "hose pipe", "house shoe", "picture frame",
        "bowl of fruit", "dog bowl", "stiletto", "umbrella", "television",
        "laptop", "plunger", "hotwheel", "casserole dish", "lipstick"];

    for (let num = 0; num < 101; num++) {
        var clue = document.createElement('h3');
        clue.innerHTML = "Clue " + num;

        clue.addEventListener("click", function () {

            alert("Clue " + num + ":" + friends[num % 5] + " did it at the " + location[num % 10] + " with a " + weapon[num % 20]);
            console.log("Clue " + num);

        })
        document.body.appendChild(clue);

    }

});




