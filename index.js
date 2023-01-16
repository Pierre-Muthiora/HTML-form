
 const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (nameInput.value === '' || emailInput.value === '') {
        msg.style.color='red';
        msg.innerHTML = 'Input fields required';  
        
        setTimeout(() => msg.remove(), 3000);
    } else { 
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`)); 
        userList.appendChild(li);   
        
        nameInput.value = '';
        emailInput.value = '';

        setTimeout(() => li.remove(), 3000);
    }
}); 





 

