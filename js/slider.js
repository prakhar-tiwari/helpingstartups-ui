// const slideContainer = document.querySelector(
//   ".section__customerfeedback-carousel"
// );
// const slide = document.querySelector(".section__customerfeedback-slides");
// const prevBtn = document.querySelector(
//   ".section__customerfeedback-controls--prev-btn"
// );
// const nextBtn = document.querySelector(
//   ".section__customerfeedback-controls--next-btn"
// );
// const interval = 2000;
// let sliderInterval;
// let allSlides = document.querySelectorAll(".section__customerfeedback-slide");
// let index = 1;

// const firstClone = allSlides[0].cloneNode(true);
// const lastClone = allSlides[allSlides.length - 1].cloneNode(true);

// firstClone.id = "first-clone";
// lastClone.id = "last-clone";

// slide.append(firstClone);
// slide.prepend(lastClone);

// const slideWidth = allSlides[index].clientWidth;
// slide.style.transform = `translateX(${-slideWidth * index}px)`;

// const startSlide = () => {
//     sliderInterval = setInterval(() => {
//     index++;
//     slide.style.transform = `translateX(${-slideWidth * index}px)`;
//     slide.style.transition = ".7s";
//   }, interval);
// };

// slide.addEventListener('transitionend',()=>{
//     allSlides = document.querySelectorAll(".section__customerfeedback-slide");
//     if(allSlides[index].id === firstClone.id){
//         slide.style.transition='none';
//         index = 1;
//         slide.style.transform = `transform(${-slideWidth * index}px)`;
//     }
// })

// slideContainer.addEventListener('mouseenter',()=>{
//     clearInterval(sliderInterval)
// })

// slideContainer.addEventListener('mouseleave',()=>{
//     startSlide();
// });


// startSlide();
