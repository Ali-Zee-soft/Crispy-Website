let currentIndex = 0;
const total = document.querySelectorAll('.carousel-inner img').length;

document.querySelector('.prev').addEventListener('click', () => {
    if (currentIndex === 0) return;
    currentIndex--;
    update();
});

document.querySelector('.next').addEventListener('click', () => {
    console.log(currentIndex);
    console.log(total);
    if (currentIndex + 1 >= total) return;
    currentIndex++;
    update();
});

function update() {
    document.querySelectorAll('.carousel-inner img').forEach((img, i) => {
        img.style.left = `-${currentIndex * 100}%`;
    })
}