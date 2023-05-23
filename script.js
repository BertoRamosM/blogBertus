const previousButton = document.getElementById('previous');
const nextButton = document.getElementById('next');


previousButton.addEventListener('click',alertButtonPrevious);
nextButton.addEventListener('click', alertButtonNext);

function alertButtonPrevious(){
    alert("Previous Page under maintenance");
}

function alertButtonNext(){
    alert("Next page under maintenance")
}
