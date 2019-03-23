function getAge() {

  var dval = document.getElementById("dob").value;

  var tdate = new Date(dval);
  var cdate = new Date();

  var age = cdate.getFullYear() - tdate.getFullYear();

  if (age <= 0)

    document.getElementById('showresults').innerText = "Wrong date!!";

  else

    document.getElementById('showresults').innerText = "You are "+age+" year(s) old!!";

 }
