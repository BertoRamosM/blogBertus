const homeButton = document.getElementById('home');
const aboutButton = document.getElementById('about');
const githubButton = document.getElementById('github');
const contactButton = document.getElementById('contact')
const previousButton = document.getElementById('previous');
const nextButton = document.getElementById('next');
const footerLink = document.getElementById('footerLink');


previousButton.addEventListener('click',alertButtonPrevious);

nextButton.addEventListener('click', alertButtonNext);

homeButton.addEventListener('click',navButtons);

aboutButton.addEventListener('click', navButtons);

githubButton.addEventListener('click', function(){
    window.open(href="https://github.com/BertoRamosM", "_blank");
})


contactButton.addEventListener('click', navButtons);


footerLink.addEventListener('click', function(){
    window.open(href="https://github.com/BertoRamosM", "_blank");
})



function navButtons(){
    alert("Still not available")
}

function alertButtonPrevious(){
    alert("Previous Page under maintenance");
}

function alertButtonNext(){
    alert("Next page under maintenance")
}

