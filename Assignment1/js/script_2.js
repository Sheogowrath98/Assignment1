
function comeback() {
    compName = localStorage.getItem("compName");
    compOwner = localStorage.getItem("compOwner");
    email = localStorage.getItem("email");
    phoNumber = localStorage.getItem("phoNumber");
    saleDol = localStorage.getItem("saleDol");
    borDol = localStorage.getItem("borDol");
    pay = localStorage.getItem("pay");
  
  
  
    //for username on header
    document.getElementById("compName").innerHTML = `${compName}`;
    document.getElementById("compOwner").innerHTML = `${compOwner}`;
    document.getElementById("email").innerHTML = `${email}`;
    document.getElementById("phoNumber").innerHTML = `${phoNumber}`;
    document.getElementById("saleDol").innerHTML = `${saleDol}`;
    document.getElementById("borDol").innerHTML = `$${borDol}`;
    document.getElementById("pay").innerHTML = `$${pay}`;
  }