
//getting the submit button element
let submittted=document.getElementById("submit");

//addinf event listener for click event on submit button
submittted.addEventListener("click",validateForm);

//validateForm function definition
function validateForm(){
    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;
    let address=document.getElementById("address").value;
    let pincode=document.getElementById("pincode").value;
    let state=document.getElementById("state").value;
    let country=document.getElementById("country").value;
    let selectedGender = document.querySelector( 'input[name="gender"]:checked').value;
    let countryList= document.querySelectorAll('input[type="checkbox"]');
    let selectedCountryList=[];
    let k=0;
    for(let i=0;i<countryList.length;i++){
        console.log(countryList[i].checked)
        if(countryList[i].checked){
            selectedCountryList[k]=countryList[i].value;
            k++;
        }
    }
    if(selectedCountryList.length<2){
        alert("select two or more countries food");
        return false;
    }
    console.log(firstName,lastName,address,pincode,state,country,selectedGender,countryList,selectedCountryList);
    let tableBody=document.getElementById("tableBody");
    tableBody.innerHTML=tableBody.innerHTML+`
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${address}</td>
        <td>${pincode}</td>
        <td>${selectedGender}</td>
        <td>${selectedCountryList}</td>
        <td>${state}</td>
        <td>${country}</td>
    `
    document.getElementById("form").reset();
}