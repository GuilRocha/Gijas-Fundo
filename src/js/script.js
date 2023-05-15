const image = document.querySelector('.image');
image.addEventListener('mouseenter', () => {image.style.animationPlayState ='pause';});

image.addEventListener('mouseleave', () => {image.style.animationPlayState='running';});
