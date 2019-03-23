function validateName(){
    validateNameX();
    validateAge();
    validateCity();
    validatHobbies();
}

function validateNameX(){
    var name = document.getElementById("student_name").value
    var letter = /^[a-zA-Z]+$/
    if(name.length > 20 || !name.match(letter)){
        document.getElementById("name_value").innerHTML = "Invalid";
    }
    else 
        document.getElementById("name_value").innerHTML = name;
}

function validateAge(){
    var age = document.getElementById("student_age").value;
    var letter = /^[0-9]+$/
    var txt;
    if(age > 100 || !age.match(letter)){
        txt = "Invalid";
    }
    else 
        txt = age;
    document.getElementById("age_value").innerHTML = txt;
}

function validateCity(){
    var idx = document.getElementById("city").selectedIndex;
    var txt;
    if(idx == 0)
        txt = "Invalid";
    else
        txt = document.getElementById("city").value;
    document.getElementById("city_value").innerHTML = txt;
}

function validatHobbies()
{
    var txt = "";
    if(document.getElementById("painting").checked == true)
    {
        txt = "#painting" ;
    }
    if(document.getElementById("dancing").checked == true)
    {
        txt += "#dancing" ;
    }
    if(document.getElementById("sports").checked == true)
    {
        txt += "#sports" ;
    }
    if(txt === ""){
        txt = "Invalid";
    }
    document.getElementById("hobbies_value").innerHTML = txt;
}