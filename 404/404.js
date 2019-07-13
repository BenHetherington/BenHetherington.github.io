const options = [
    "Sorry, that page doesn’t seem to be a thing.",
    "Ah, that page seems to be having an existential crisis.",
    "Nothing to see here.<br />Because there’s nothing here to be seen.",
    "Nope, there’s nothing here."
];

const index = Math.floor(Math.random() * options.length);
document.getElementById("text").innerHTML = options[index];
