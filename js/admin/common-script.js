
// get item from localstorge
function getItemLocalStorage(nameValue) {
    let getItem = localStorage.getItem(nameValue)
    let listAdminLocalStorage = JSON.parse(getItem)
    return listAdminLocalStorage;
}

// set item on localstorage
function setItemLocalStorage(nameValue, value) {
    localStorage.setItem(nameValue, JSON.stringify(value))
}

// remove item on localstorage
function removeItemLocalStorage(nameValue) {
    localStorage.removeItem(nameValue)
}



// get element by Id, class, querySelector
function _id(elemId) {
    return document.getElementById(elemId)
}

function _class(elemClass) {
    return document.getElementsByClassName(elemClass)
}

function _querySelector(elemSelector) {
    return document.querySelector(elemSelector)
}

function _querySelectorAll(elemSelector) {
    return document.querySelectorAll(elemSelector)
}

export {
    getItemLocalStorage, setItemLocalStorage, removeItemLocalStorage, _id, _class, _querySelector, _querySelectorAll
}