document.body.onclick = function (event) {
    console.log(event.target.classList.contains('item-img-small'));

    if (event.target.classList.contains('item-img-small')) {
        document.getElementById('item-max').src = event.target.src;
        let allDivs = document.querySelectorAll('.item-img-min div');
        for (let i = 0; i < allDivs.length; i++) {
            allDivs[i].classList.remove('active');
        }

    event.target.parentElement.classList.add('active');
}
}