const sidebar = document.querySelector('.sidebar');
const navItems = document.querySelectorAll('nav .nav-item');
const toggle = document.querySelector('.sidebar .toggle');

toggle.addEventListener('click', () => {

    if (sidebar.className === 'sidebar')
        sidebar.classList.add('open');
    else
        sidebar.classList.remove('open');

});

navItems.forEach(navItem => {

    navItem.addEventListener('click', () => {

        navItems.forEach(navItem => {
            navItem.classList.remove('active');
        });

        navItem.classList.add('active');

    });

});

// dark theme

function btnTheme() {
  var element = document.body;
  var button = document.getElementById('photo');
  element.classList.toggle('dark2');
  button.classList.toggle('photos-dark');
}


//end dark theme

//particles

window.onload = function () {
  Particles.init({
    selector: ".background"
  });
};

var particles = Particles.init({
  selector: ".background",
  color: ["#faebd7", "#ff0266", "#03dac6"],
  connectParticles: true,
  responsive: [
    {
      breakpoint: 670,
      options: {
        color: ["#dfe9f3", "#03dac6", "#ff0266"],
        maxParticles: 43,
        connectParticles: false
      }
    }
  ]
});

// When the user clicks on <div>, open the popup
function boo() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

function boo1() {
  var popup = document.getElementById("myPopup1");
  popup.classList.toggle("show");
}

function boo2() {
  var popup = document.getElementById("myPopup2");
  popup.classList.toggle("show");
}

// slide in effect
const items = document.querySelectorAll('.item');

const options = {
  threshold: 0.5
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('slide-in');
    }
  });
}, options);

items.forEach(item => {
  observer.observe(item);
});