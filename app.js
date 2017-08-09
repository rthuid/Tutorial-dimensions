$(document).ready(function() {
  /**
   * check if the the provided email is already registered
   * @param  {string} email new email address
   * @return {boolean}       states of the uniqueness check.
   */
  function checkDuplicateEmail(email) {
    if(typeof(Storage)!=="undefined")
    {
      const item = localStorage.getItem(email);
      if (item) {
        alert("Email already Exist");
        return false;
      } else {
        return true;
      }
    } else {
      alert('No storage available');
      return false;
    }
  }

  /**
   * To register a user to the system. save the user details in browser localStorage
   * with email as key
   */
  $('#triggerRegister').click(function(){
    const name = $("#reg-name").val();
    const email = $("#reg-email").val();
    const password = $("#reg-password").val();
    const cpassword = $("#reg-cpassword").val();
    if (password != cpassword) {
      alert('Password is not matching');
    } else {
      if (checkDuplicateEmail(email)) {
        const data = { name: name, password: password };
        localStorage.setItem(email, JSON.stringify(data));
        window.location.href = 'login.html';
      }
    }
  });

});
