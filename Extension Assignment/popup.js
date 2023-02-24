document.getElementById("submit").addEventListener("click", function() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
  
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:8000/submit", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({name: name, email: email, phone: phone}));
  
    alert("Form submitted!");
  });