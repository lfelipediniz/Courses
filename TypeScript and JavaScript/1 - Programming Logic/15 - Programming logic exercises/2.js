/*
Write a function called "eLandscape" that takes two arguments, width and height of an image (number).
Return "true" if the image is in landscape mode*/

const eLandscape = (height, width) => {
    
    if (height !== width) return width > height;
    return "The image is square!"
}

console.log(eLandscape(1080, 10890));