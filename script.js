const firebaseConfig = {
    apiKey: "AIzaSyAy-FQsblXyQtncQKTS_KJKX8pxlQ3bfIc",
    authDomain: "contactform-mess.firebaseapp.com",
    databaseURL: "https://contactform-mess-default-rtdb.firebaseio.com",
    projectId: "contactform-mess",
    storageBucket: "contactform-mess.appspot.com",
    messagingSenderId: "664004049169",
    appId: "1:664004049169:web:e22952046d228c0a8ff4b0"
  };

  firebase.initializeApp(firebaseConfig);

  var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contact_form").addEventListener("submit",submitForm);

function submitForm(e){
    e.preventDefault();
    var name = getElementVal('name');
    var emailid = getElementVal('emailid');
    var msgcontent = getElementVal('msgContent');

    saveMessages(name,emailid,msgcontent);

    document.querySelector(".contact_form").style.display = "block";

    setTimeout(() => {
        Document.querySelector(".contact_form").style.display = "none";
    },3000);

    document.getElementById("contact_form").reset();
}
const saveMessages  = (name,emailid,msgcontent) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name : name,
        emailid : emailid,
        msgcontent : msgcontent,
    });
};
const getElementVal = (id) => {
    return document.getElementById(id).value;
};






