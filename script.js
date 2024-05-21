function validateForm(){
  var valid= true;
  var username= document.getElementById('name').value;
  var password= document.getElementById('pass').value;
  var email= document.getElementById('email').value;
  var country= document.getElementById('country').value;

  console.log('hello world');

  if( username.length < 5)
  {
    alert('User name is short!!!');
    valid = false;
  }
  var passwordPattern = /^[0-9][a-zA-Z0-9]*$/;
  if(!passwordPattern.test(password))
    {
      valid = false;
      alert(`password doesn't match our condition`);
    }
    return valid;
}