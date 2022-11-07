// FILTER FUNCTION
const liItem = document.querySelectorAll('ul li');
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