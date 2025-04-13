/* header section start */
var typed = new Typed("#typing", {
  strings: ["Hello, world!", "Web Developer!", "Web Designer!","Youtuber!","Blogger!"],
  typeSpeed: 80,
  backSpeed: 70,
  loop: true,
})
// console.log(typed)


/* header section end */


/*nav bar section start */
const menu = document.querySelector('.nav-menu');
const openMenuBtn = document.querySelector('#open-menu-btn');
const closeMenuBtn = document.querySelector('#close_menu_btn');
// console.log(menu)
closeMenuBtn.style.display ="none";

openMenuBtn.addEventListener('click',()=>{
    menu.style.display = 'flex';
    closeMenuBtn.style.display = 'inline-block';
    openMenuBtn.style.display = 'none';
})

/*close section start */
const closeNav = ()=>{
  menu.style.display = 'none';
  closeMenuBtn.style.display = 'none';
  openMenuBtn.style.display = 'inline-block';
}

closeMenuBtn.addEventListener('click',closeNav)

/*nav bar section end */


/*show/hide faqs section start */
const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq =>{
  faq.addEventListener('click',()=>{
    faq.classList.toggle('open')

    /*change icon*/
    icon = document.getElementsByClassName('fa-solid fa-plus')[0];

    if(icon.className === "fa-solid fa-plus"){
      icon.className = "fa-solid fa-minus";
    }
    else{
      icon.className =" fa-solid fa-plus"
    }
   
  })
})

/*show/hide faqs section end */






