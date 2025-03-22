// FILTER FUNCTION
const liItem = document.querySelectorAll('ol li');
const imgItem = document.querySelectorAll('.filter-items .list');

liItem.forEach(li => {
    li.onclick = function () {
        //active
        liItem.forEach(li => {
            li.className = "text filter-btn button-content";
        })
        li.className = "active text filter-btn button-content";

        //Filter
        const value = li.textContent;
        imgItem.forEach(section => {
            section.style.display = 'none';
            if (section.getAttribute('data-item') == value.toLowerCase() ||
                value == "personal") {
                section.style.display = 'flex';
            }
        })
    }
});
// FILTER FUNCTION END

// Text Animation
var i=0,text,text2;
text = "Farrel."

function typing() {
  if(i<text.length){
    document.getElementById("text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing,250);
  }
}
typing();
// End

// GOOGLE TRANSLATE
function googleTranslateElementInit() {
    new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
}
//END

// MENU TOGGLE FUNCITON
const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener('click', function () {
    nav.classList.toggle("slide");
})

// MENU TOGGLE END