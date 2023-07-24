const btn = document.getElementById('button');
const formValues = {
    name: document.getElementById('name').value,
    phone: document.getElementById('phone').value,
    message: document.getElementById('message').value,
    email:  document.getElementById('email').value,
}
document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   const serviceID = 'service_7vijly6';
   const templateID = 'template_8zdn6dl';
   const form = document.getElementById('form')

   emailjs.sendForm(serviceID, templateID, form)
    .then(() => {
      btn.value = 'Send Email';
      alert('Tu mensaje ha sido enviado!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});