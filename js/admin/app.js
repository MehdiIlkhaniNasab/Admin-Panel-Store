import {
    getItemLocalStorage, setItemLocalStorage, removeItemLocalStorage, _id, _class, _querySelector, _querySelectorAll
} from './common-script.js'

let chatBoxContacts = _querySelector('.chat-box-contacts')
let bodyDuc = document.body;
let btnHeaderDarkMode = _querySelector('.btn-header__dark-mode')
let btnHeaderLogOut = _querySelector('.btn-header__log-out')
let isDark = null;



// dark mode toggle function 
function darkModeToggleFunc() {
    isDark = bodyDuc.classList.toggle('dark');
    setItemLocalStorage('theme', isDark)
}

// dark mode load page
function darkModeLoadPage() {
    isDark = getItemLocalStorage('theme')

    if (isDark) {
        bodyDuc.classList.add('dark');
    } else {
        bodyDuc.classList.remove('dark');
    }

}


// onload window
function laodPage() {
    darkModeLoadPage()
}

// show contacts list of user
function showContactsList() {
    let listContact = _querySelector('.list-contact')
    listContact.classList.toggle('list-contact-visible')
}

// transform to informatin page
function goToInformationPage() {
    window.location.href = './infomation-admin.html'
}
// transform to informatin page
function goToRegisterPage() {
    window.location.href = './register-admin.html'
}





chatBoxContacts.addEventListener('click', showContactsList)
btnHeaderDarkMode.addEventListener('click', darkModeToggleFunc)
btnHeaderLogOut.addEventListener('click', goToRegisterPage)
window.addEventListener('load', laodPage)
