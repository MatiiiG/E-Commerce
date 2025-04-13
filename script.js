let NextBtn = document.querySelector('.next')
let PrevBtn = document.querySelector('.prev')
let NSBtn = document.querySelector('.ns-button')
let PSBtn = document.querySelector('.ps-button')
let Slider = document.querySelector('.BoxesItem');
const FirstImage = document.querySelector('.Main-Image')
const SecondImage = document.querySelector('.Men-Image')
const Images = [FirstImage, SecondImage]

let index = 0;

NextBtn.addEventListener("click", () => {
    index++;
    index = index % Images.length;

    if (index == 1) {
        Images[0].style.display = "none";
        Images[1].style.display = "block";
    } else if (index == 0) {
        Images[1].style.display = "none";
        Images[0].style.display = "block";
    }

    console.log(index + " Liczba");
});

PrevBtn.addEventListener("click", () => {
    index--;
    if (index < 0) index = Images.length - 1; 

    if (index == 1) {
        Images[0].style.display = "none";
        Images[1].style.display = "block";
    } else if (index == 0) {
        Images[1].style.display = "none";
        Images[0].style.display = "block";
    }

    console.log(index + " Liczba");
});

let categories = document.querySelectorAll('.Category');

categories.forEach(category => {
    category.addEventListener('click', function (event) {
        event.preventDefault();
        let current = document.querySelector('.Category.active');
        if (current) {
            current.classList.remove("active");
        }
        this.classList.add("active");
    });
});

let SlideIndex = 1;

function NextSlide(){
        if(SlideIndex == 3){
            SlideIndex = 1;
            Slider.style.transform = `translateX(${0}vw)`;
        }else{
            Slider.style.transform = `translateX(-${100 * SlideIndex}vw)`;
            SlideIndex++;
        }
}

function PrevSlide(){
    if(SlideIndex == 1){
        SlideIndex = 3;
        Slider.style.transform = `translateX(-${200}vw)`;
        console.log(SlideIndex)
    }else{
        SlideIndex--;
        console.log(SlideIndex)
        Slider.style.transform = `translateX(-${100 * SlideIndex - 100}vw)`
    }
}

NSBtn.addEventListener('click', function(){
    NextSlide();
})

PSBtn.addEventListener('click', function(){
    PrevSlide();
});

const NewsBlock = document.querySelectorAll('.Tree-view ul li');
const NewsNewsBlock = document.querySelectorAll('.news-news');

function displayBlock(){
    for(let i =0; i < NewsNewsBlock.length; i++){
        NewsNewsBlock[i].style.display = "none";
    }
    for(let j = 0; j < NewsBlock.length; j++){
        NewsBlock[j].addEventListener('mouseleave', ()=>{
            NewsNewsBlock[j].style.display = 'none';
        })
        NewsNewsBlock[j].addEventListener('mouseenter', ()=>{
            NewsNewsBlock[j].style.display = 'flex';
        })
        NewsBlock[j].addEventListener('mouseenter', ()=>{
            NewsNewsBlock[j].style.display = 'flex';
        })
        NewsNewsBlock[j].addEventListener('mouseleave', ()=>{
            NewsNewsBlock[j].style.display = 'none';
        })
    }
}

displayBlock();

const Account = document.querySelectorAll('.Account')
const AccountBB = document.querySelector('.AccountDropDown')

AccountBB.style.display = 'none';

Account.forEach(Item => {
    AccountBB.addEventListener('mouseenter', ()=>{
        AccountBB.style.display = 'block'
    })
    Item.addEventListener('mouseenter', ()=>{
        AccountBB.style.display = 'block'
    })
    AccountBB.addEventListener('mouseleave', ()=>{
        AccountBB.style.display = 'none'
    })
    /*Item.addEventListener('mouseleave', ()=>{
        AccountBB.style.display = 'none';
    })Ogarnij CSSa*/
});


const Search = document.querySelectorAll('.Search')
const SearchDropDown = document.querySelector('.SearchDropDown')
const CloseButton= document.querySelector('.CloseButton');

SearchDropDown.style.display = 'none';

Search.forEach(Item =>{
    Item.addEventListener('click', ()=>{
        SearchDropDown.style.display = 'block'
    })
    CloseButton.addEventListener('click', ()=>{
        SearchDropDown.style.display = 'none';
    })
})