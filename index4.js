function validate(){
	    var uid = document.getElementById('uid').value;
	    if(uid === "")
	      document.getElementById('msgUid').innerHTML = "Invalid Entry";
	    else
	      document.getElementById('msgUid').innerHTML = "OK!";
	      
	    var pass = document.getElementById('password').value;
	    if(pass === "")
	      document.getElementById('msgPassword').innerHTML = "Invalid Entry";
	    else
	      document.getElementById('msgPassword').innerHTML = "OK!";
	      
	    var conpass = document.getElementById('confirm').value;
	    if(conpass === "" || pass != conpass)
	      document.getElementById('msgConfirm').innerHTML = "Invalid Entry";
	    else
	      document.getElementById('msgConfirm').innerHTML = "OK!";
      
      
      
     }
