const dogDiv = document.getElementById('dogDiv');
const dogButton = document.getElementById('dogButton');
const changeMode = document.getElementById('modeButton');

const getNewDog = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(json => {
    dogDiv.innerHTML = `<img src='${json.message}' height=250 width=auto/>`
})
}

dogButton.onclick = () => getNewDog();

// default theme:

    // body
        const body = document.getElementById('body');

        body.classList.add('lightBackground')

    // buttons
        const newDogButton = document.getElementById('dogButton');
        const darkButton = document.getElementById('darkmodeButton');
        const lightButton = document.getElementById('lightmodeButton');
;
        newDogButton.classList.add('lightButton');
        darkButton.classList.add('lightButton');
        lightButton.classList.add('lightButton');

// Theme changing:

// Dark Mode
const darkMode = () => {
    // background
    body.classList.remove('lightBackground');
    body.classList.add('darkBackground');

    // buttons
}

darkButton.onclick = () => darkMode();


// Light Mode


const lightMode = () => {
    body.classList.add('lightBackground')

    // buttons
}

lightButton.onclick = () => lightMode();
