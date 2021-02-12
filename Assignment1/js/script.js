console.log("HELLO WOLRD");


function submit() {

  localStorage.setItem(`compName`, document.getElementById(`compName`).value);

  localStorage.setItem(`compOwner`, document.getElementById(`compOwner`).value);

  localStorage.setItem(`email`, document.getElementById(`email`).value);

  localStorage.setItem(`phoNumber`, document.getElementById(`phoNumber`).value);

  localStorage.setItem(`saleDol`, document.getElementById(`saleDol`).value);

  localStorage.setItem(`borDol`, document.getElementById(`borDol`).value);

  localStorage.setItem(`pay`, document.getElementById(`pay`).value);
}

