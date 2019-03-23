let carDetails = [

];

var carName = ["Innova", "Dzire", "i20", "i10"];

var onRoadPrice = [900000, 700000, 500000, 400000];

var yearOfModel = [2016, 2017, 2013, 2016];





function displayCarDetails()
{

  var car_no = carName.indexOf(document.getElementById("SelectCar").value);

  carDetail = carName[car_no]+"-"+onRoadPrice[car_no]+"-"+yearOfModel[car_no];

  document.getElementById("CarDetail").innerHTML = carDetail;

}


