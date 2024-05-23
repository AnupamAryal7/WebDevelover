function validateForm(){
  var username= document.getElementById('name').value;
  var password= document.getElementById('pass').value;
  var email= document.getElementById('email').value;
  var country= document.getElementById('country').value;

  console.log(username);

  if( username.length < 5)
  {
    alert('User name is short!!!');
  }
  var passwordPattern = /^[0-9][a-zA-Z0-9]*$/;
  if(!passwordPattern.test(password))
    {
      alert(`password doesn't match our condition`);
    }
}