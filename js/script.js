const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");


toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click" , () =>{
    sidebar.classList.remove("close");
})

modeSwitch.addEventListener("click" , () =>{
    body.classList.toggle("dark");
    
    if(body.classList.contains("dark")){
        modeText.innerText = "Light mode";
    }else{
        modeText.innerText = "Dark mode";
        
    }
});

// ==============click the navlinks active =================
let navigation = document.querySelector('.menu-bar');
var get_list = document.querySelectorAll('.menu-bar li a');
        function activelink(){
            get_list.forEach((item)=>
            item.classList.remove('hovered'));
            this.classList.add('hovered');
        }
get_list.forEach((item)=>
item.addEventListener('click',activelink)
);


// custom dropdown menu ////////////////////////////////////////

const optionMenu = document.querySelector(".select-menu"),
       selectBtn = optionMenu.querySelector(".select-btn"),
       options = optionMenu.querySelectorAll(".option"),
       sBtn_text = optionMenu.querySelector(".sBtn-text");

selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));       

options.forEach(option =>{
    option.addEventListener("click", ()=>{
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text.innerText = selectedOption;

        optionMenu.classList.remove("active");
    })
})



// book rating stars //////////////////////////////////////
// const btn = document.querySelector("button");
// const post = document.querySelector(".post");
// const widget = document.querySelector(".star-widget");
// const editBtn = document.querySelector(".edit");
// btn.onclick = () => {
//   widget.style.display = "none";
//   post.style.display = "block";
//   editBtn.onclick = () => {
//     widget.style.display = "block";
//     post.style.display = "none";
//   }
//   return false;
// }



//download book pop-up modal 


// Get book elements
const books = document.querySelectorAll('.frame-div .div-im');

// Get popup elements
const popup = document.getElementById('popup');
const popupImage = document.getElementById('popup-image');
const popupTitle = document.getElementById('popup-title');
const popupInfo = document.getElementById('popup-info');
const popupDownload = document.getElementById('popup-download');
const popupBut = document.getElementById('popup-but');

// Attach click event listeners to each book
books.forEach(book => {
  book.addEventListener('click', () => {
    console.log('mohammed');
    // Get book information from the clicked book element
    const bookImageSrc = book.querySelector('img').src;
    const bookTitle = book.querySelector('figcaption div.text').textContent;
    const bookInfo = 'Book information for ' + bookTitle;
    //const bookDownloadLink = 'path/to/files/' + bookTitle + '.pdf';
    popupImage.src = bookImageSrc;
    popupTitle.textContent = bookTitle;
    popupInfo.textContent = bookInfo;
    popup.style.display = 'block';
    
    // Update popup content
    // .....
  });
});

// Close the popup when clicking outside of it
window.addEventListener('mousedown', (event) => {
  if (!popup.contains(event.target)) {
      popup.style.display = 'none';
      event.preventDefault();
  }
});

var closeModal = document.querySelector('.close-down-modal');
closeModal.addEventListener('click',()=>{
    popup.style.display = 'none';
});
