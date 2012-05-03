
document.addEventListener("deviceready", onDeviceReady, false);

// Cordova is ready
//
function onDeviceReady() {
    // specify contact search criteria
    var options = new ContactFindOptions();
    options.filter = ""; // empty search string returns all contacts
    options.multiple = true; // return multiple results
    filter = [ "displayName" ]; // return contact.displayName field

    // find contacts
    navigator.contacts.find(filter, onSuccess, onError, options);
}

var names = [];
var contactsLoaded = false;

// onSuccess: Get a snapshot of the current contacts
//
function onSuccess(contacts) {
    for ( var i = 0; i < contacts.length; i++) {
        if (contacts[i].displayName) {
            names.push(contacts[i].displayName);
        }
    }
    alert('contacts loaded');
    contactsLoaded = true;
    toggleShaker(getRandomContact);
}

// onError: Failed to get the contacts
//
function onError(contactError) {
    alert('onError!');
}

function getRandomContact() {
    alert(names[Math.floor(Math.random() * names.length)]);
}
