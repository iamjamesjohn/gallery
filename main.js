// get the background colour select from html
let bgSelector = document.getElementById('bgSelect');
// get the text colour select from the html
let textSelector = document.getElementById('textSelect');

// get all thumbnail images with the class name of thumbnail
let thumbnails = document.getElementsByClassName('thumbnail');
// get the main thumbnail image
let thumbnail = document.getElementById('showcaseThumbnail')

/* 
get the container box from html. This can also be any container you want to
change the background color or text colour
*/
let container = document.getElementById('container');

/*
Add an event listener to the background select, listening for the change event.
This will fire a function whenever the user selects a new colour
*/
bgSelector.addEventListener("change", () => {
    // change the background colour of the container to whatever the selector value is.
    container.style.backgroundColor = bgSelector.value;
})

/*
Add an event listener to the text background selector, listening for the change event.
This will fire a function whenever the user selects a new colour
*/
textSelector.addEventListener("change", () => {
    // change the text colour to whatever the selector is.
    content.style.color = textSelector.value;
})

/* 
run a for loop using the thumbnail images variable.
make the for loop run for only the amount of images you have.
*/
for (let i = 0; i < thumbnails.length; i++) {
    // add an event listener to each of the thumbnail images listening for "mouseover"
    thumbnails[i].addEventListener('mouseover', () => {
        // put the src of the image thumbnail into a variable
        let src = thumbnails[i].src;
        // change the image src of the main showcase image using the src variable.
        thumbnail.src = src;
    })
}
