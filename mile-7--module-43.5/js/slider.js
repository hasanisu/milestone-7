const images =[
    'images/img-1.jpg',
    'images/img-2.jpg',
    'images/img-3.jpg',
    'images/img-4.jpg',
    'images/img-5.jpg',
    'images/img-6.jpg',
    'images/img-7.jpg',
    'images/img-8.jpg',
    'images/img-9.jpg',
]


let imageIndex = 0;
const img = document.getElementById('carousol-img');

setInterval(() => {
    if(imageIndex === images.length){
        imageIndex = 0;
    }
    const imgLink = images[imageIndex];
    img.setAttribute('src', imgLink);
    imageIndex++;
}, 2000);