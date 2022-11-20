

const form = document.querySelector('.myform')
const firstName=document.getElementById('firstname');
const lastName=document.getElementById('lastname');
const Add=document.getElementById('address');
const code=document.getElementById('zipcode');
// const firstName=document.getElementById('firstname');


form.addEventListener('submit',function(e){
    e.preventDefault();
    const firstname = firstName.value;
    const lastname = lastName.value;
    const  add= Add.value;
    const zip = code.value;
    localStorage.setItem('first-name',firstname);
    localStorage.setItem('last-name',lastname);
    localStorage.setItem('address',add);
    localStorage.setItem('zip-code',zip);
    window.location.href="receipt.html";
}
);




    
    // localStorage.setItem('first-name',firstname)

    // const firstname = firstName.value;
