
function calculate() {
    var sex = document.getElementById("sex").value;
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);
    var age = parseFloat(document.getElementById("age").value);
    var activity_level = document.getElementById("activity_level").value;
    
    var bmr;
    if (sex == "male") {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else if (sex == "female") {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    } else {
        alert("Invalid sex value");
        return;
    }
    document.getElementById("bmr").innerHTML = "Your BMR equals: " + bmr;

    var tdee;
    if (activity_level == "Sedentary") {
        tdee = bmr * 1.2;
    } else if (activity_level == "Lightly active") {
        tdee = bmr * 1.375;
    } else if (activity_level == "Moderately active") {
        tdee = bmr * 1.55;
    } else if (activity_level == "Very active") {
        tdee = bmr * 1.725;
    } else if (activity_level == "Extra active") {
        tdee = bmr * 1.9;
    } else {
        alert("Invalid activity level");
        return;
    }
    document.getElementById("tdee").innerHTML = "Your TDEE is: " + tdee;
}
