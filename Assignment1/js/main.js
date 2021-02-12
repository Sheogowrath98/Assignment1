//function to save all user inputs to localStorage
function saveData(){

    //extracting all data from input fields
    var Cname = document.querySelector("#compName").value;
    var Oname = document.querySelector("#compOwner").value;
    var email = document.querySelector("#email").value;
    var phoNumber = document.querySelector("#phoNumber").value;
    var sale = document.querySelector("#saleDol").value;
    var borrow = document.querySelector("#borDol").value;
    var pay = document.querySelector("#pay").value;  
    

    //saving data to localstorage
    localStorage.setItem("compName", Cname);
    localStorage.setItem("compOwner", Oname);
    localStorage.setItem("email", email);
    localStorage.setItem("phoNumber", phoNumber);
    localStorage.setItem("saleDol", sale);
    localStorage.setItem("borDol", borrow);
    localStorage.setItem("pay", payment);

    return true;
}


//function to load the saved data into quote.html
function loadData(){

    //retrieving data from local storage
    document.getElementById("Cname").innerHTML = localStorage.getItem("compName");
    document.getElementById("Oname").innerHTML = localStorage.getItem("compOwner");
    document.getElementById("email").innerHTML = localStorage.getItem("email");
    document.getElementById("phoNumber").innerHTML = localStorage.getItem("phoNumber");
    document.getElementById("saleDol").innerHTML = localStorage.getItem("saleDol");
    document.getElementById("borDol").innerHTML = 12 * 0.13;
    document.getElementById("payment").innerHTML = localStorage.getItem("pay");
    

    //calculating the no. of cans needed for the room paniting
    var pay = Math.ceil(parseFloat((12 * 0.13)));
    document.getElementById("payment").innerHTML = pay;
     
    
    var payment = localStorage.getItem("pay");

    //include HST
    payment = payment + 0.13 * payment;
    document.getElementById("payment").innerHTML = "$" + parseInt(payment);
    

}