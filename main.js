const images = document.querySelectorAll('.full-img')
const texts = document.querySelectorAll('.text-wrapper')

function handler(entries, observer) {
  const [entry] = entries
  if (entry.isIntersecting) {
    images.forEach((image) => (image.style.opacity = 0))
    images[entry.target.dataset.img].style.opacity = 1
  }
}

const config = {
  root: null,
  threshold: 0.2,
}

const observer = new IntersectionObserver(handler, config)

texts.forEach((text) => {
  observer.observe(text)
})

/*-------------nabar--------------*/
var prevScrollpos = window.pageYOffset
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset
  if (prevScrollpos > currentScrollPos) {
    document.getElementById('navbar').style.top = '0'
  } else {
    document.getElementById('navbar').style.top = '-50px'
  }
  prevScrollpos = currentScrollPos
}
/*-----------menuclick-------------------*/
function myFunction() {
  document.getElementById('myDropdown').classList.toggle('show')
}

window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName('dropdown-content')
    var i
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i]
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show')
      }
    }
  }
}
