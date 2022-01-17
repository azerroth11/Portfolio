const data = [
  {
    id: 'GEFormations',
    imgMobile: './img/GEFormationsMobile.webp',
    imgDesktop: './img/GEFormations.webp',
    url: 'https://www.gabrielestorguesformations.fr',
    date: 'December 2021',
  },
  {
    id: "Travelin' Young",
    imgMobile: './img/travelinyoungMobile.webp',
    imgDesktop: './img/travelinyoung.webp',
    url: 'https://azerroth11.github.io/Travelin-Young/',
    date: 'January 2022',
  },
  {
    id: 'Maison Dinard',
    imgMobile: './img/maisonDinardMobile.webp',
    imgDesktop: './img/maisonDinard.webp',
    url: 'https://azerroth11.github.io/Maison-Dinard-Alt-Pro2/',
    date: 'January 2022',
  },
  {
    id: 'Qrates, Repro',
    imgMobile: './img/qratesMobile.webp',
    imgDesktop: './img/qrates.webp',
    url: '',
    date: 'October 2021',
  },
  {
    id: 'Bigal',
    imgMobile: './img/bigalMobile.webp',
    imgDesktop: './img/bigal.webp',
    url: 'https://azerroth11.github.io/Alexis/',
    date: 'Work in Progress',
  },
  {
    id: 'Barrate',
    imgMobile: './img/courBarrateMobile.webp',
    imgDesktop: './img/courBarrate.webp',
    url: 'https://azerroth11.github.io/Barrate/',
    date: 'Work in Progress',
  },
]

const swiperWrapper = document.querySelector('.swiper-wrapper')
data.forEach((website) => {
  const swiperSlide = swiperWrapper.appendChild(document.createElement('div'))
  swiperSlide.classList.add('swiper-slide')
  const imgMobile = swiperSlide.appendChild(document.createElement('img'))
  imgMobile.src = website.imgMobile
  imgMobile.classList.add('mobile')
  imgMobile.alt = `${website.id} mobile`
  const imgDesktop = swiperSlide.appendChild(document.createElement('img'))
  imgDesktop.src = website.imgDesktop
  imgDesktop.classList.add('desktop')
  imgDesktop.alt = `${website.id} desktop`
  const websiteTitle = swiperSlide.appendChild(document.createElement('p'))
  if (website.url != '') {
    websiteTitle.innerHTML = `${website.id} - <span><a href='${website.url}' target="_blank">SEE LIVE </a></span></br> ${website.date}`
  } else {
    websiteTitle.innerHTML = `${website.id}</br> ${website.date}`
  }
})
const swiperSlide = swiperWrapper.appendChild(document.createElement('div'))
swiperSlide.classList.add('swiper-slide', 'contact')
const contacth1 = swiperSlide.appendChild(document.createElement('h1'))
contacth1.innerText = "Let's get in touch !"
const contacta = swiperSlide.appendChild(document.createElement('a'))
contacta.href = 'mailto:mallory.berthome@gmail.com'
contacta.innerHTML = '<img src="./img/mail.svg" alt="" />'
const contacth3 = swiperSlide.appendChild(document.createElement('h3'))
contacth3.innerText =
  'If you have a general or project enquiry, please drop me an email — AVAILABLE NOW.'
