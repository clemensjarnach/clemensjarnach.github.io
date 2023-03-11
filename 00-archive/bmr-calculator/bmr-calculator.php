<form action="index.php" method="post">
    <label for="sex">Enter your biological sex:</label>
    <select id="sex" name="sex">
        <option value="male">Male</option>
        <option value="female">Female</option>
    </select>
    <br>
    <label for="weight">Enter your weight in kg:</label>
    <input type="text" id="weight" name="weight">
    <br>
    <label for="height">Enter your height in cm:</label>
    <input type="text" id="height" name="height">
    <br>
    <label for="age">Enter your age in years:</label>
    <input type="text" id="age" name="age">
    <br>
    <label for="activity_level">Enter your activity level:</label>
    <select id="activity_level" name="activity_level">
        <option value="Sedentary">Sedentary</option>
        <option value="Lightly active">Lightly active</option>
        <option value="Moderately active">Moderately active</option>
        <option value="Very active">Very active</option>
        <option value="Extra active">Extra active</option>
    </select>
    <br>
    <input type="submit" value="Calculate">
</form>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $sex = $_POST["sex"];
    $weight = $_POST["weight"];
    $height = $_POST["height"];
    $age = $_POST["age"];
    $activity_level = $_POST["activity_level"];

    function calculate_bmr($sex, $weight, $height, $age) {
        if ($sex == "male") {
            $bmr = 88.362 + (13.397 * $weight) + (4.799 * $height) - (5.677 * $age);
        } elseif ($sex == "female") {
            $bmr = 447.593 + (9.247 * $weight) + (3.098 * $height
        } else {
            echo "Invalid sex value";
            return;
        }
        return $bmr;
    }

    function calculate_tdee($bmr, $activity_level) {
        if ($activity_level == "Sedentary") {
            $tdee = $bmr * 1.2;
        } elseif ($activity_level == "Lightly active") {
            $tdee = $bmr * 1.375;
        } elseif ($activity_level == "Moderately active") {
            $tdee = $bmr * 1.55;
        } elseif ($activity_level == "Very active") {
            $tdee = $bmr * 1.725;
        } elseif ($activity_level == "Extra active") {
            $tdee = $bmr * 1.9;
        } else {
            echo "Invalid activity level";
            return;
        }
        return $tdee;
    }

    $bmr = calculate_bmr($sex, $weight, $height, $age);
    echo "Your BMR equals: ", $bmr;

    $tdee = calculate_tdee($bmr, $activity_level);
    echo "Your TDEE is: ", $tdee;
}
