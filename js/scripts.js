/*===================== typing animation =====================*/

var typed = new Typed(".typing", {
  strings: [
    "",
    "Web Designer",
    "Web Developer",
    "Graphic Designer",
    "Youtuber",
  ],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});

const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;

// funcion para la clase active y este marcado en cada seccion
navList.forEach((element, i) => {
  const a = element.querySelector("a");

  a.addEventListener("click", () => {
    // allSection.forEach((e) => {
    //   e.classList.remove("back-section")
    // });
   removeBackSection()
    // navList.forEach((e, i) => {
    //   if(e.querySelector("a").classList.contains("active")){
    //     allSection.forEach((e, i)=>{e.classList.add("back-section")})
    //   }
    //   e.querySelector("a").classList.remove("active");
    // });

    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        // allSection[j].classList.add("back-section");
        addBackSection(j)
      }
      navList[j].querySelector("a").classList.remove("active");
    }

    a.classList.add("active");
    showSection(a);
    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
});

const removeBackSection = ()=>{
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("back-section");
  }
}
const addBackSection = (num)=>{
  allSection[num].classList.add("back-section");
}

const showSection = (element) => {
  allSection.forEach((e) => {
    e.classList.remove("active");
  });
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
};

document.querySelector(".hire-me").addEventListener("click", function () {
  const sectionIndex = this.getAttribute("data-section-index");
  // console.log(sectionIndex);
  showSection(this);
  updateNav(this);
  removeBackSection()
  addBackSection(sectionIndex)
});


const updateNav = (element) => {
  //  console.log(element.getAttribute("href").split("#")[1]);
  navList.forEach((e) => {
    e.querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if (target === e.querySelector("a").getAttribute("href").split("#")[1]) {
      e.querySelector("a").classList.add("active");
    }
  });
};

const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});

const asideSectionTogglerBtn = () => {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("desliza");
  allSection.forEach((e) => {
    e.classList.toggle("open");
  });
};
