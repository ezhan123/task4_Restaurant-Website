const serch1 = document.querySelector('#find1');
const enter1 = document.querySelector('#Enter1');

serch1.addEventListener('click', function () {
    enter1.style.display = 'flex';
    serch1.style.display = 'none';
})

const serch2 = document.querySelector('#find2');
const enter2 = document.querySelector('#Enter2');

serch2.addEventListener('click', function () {
    enter2.style.display = 'flex';
    serch2.style.display = 'none';
})

const bar = document.querySelector('.fa-bars');
const cross = document.querySelector('#hdcross');
const headerbar = document.querySelector('.headerbar');

bar.addEventListener('click', function () {
    setTimeout(() => {
        cross.style.display = 'block';
    }, 200);
    headerbar.style.right = '0%';
})

cross.addEventListener('click', function () {
    cross.style.display = 'none';
    headerbar.style.right = '-100%';
})