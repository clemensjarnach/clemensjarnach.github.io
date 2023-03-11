#Ask for variable input
sex = input("Enter your biological sex (male, female): ")
weight = float(input("Enter your weight in kg: "))
height = float(input("Enter your height in cm: "))
age = int(input("Enter your age in years: "))
activity_level = input("Enter your activity level (Sedentary, Lightly active, Moderately active, Very active, Extra active): ")

def calculate_bmr(sex, weight_kg, height_cm, age_years):
    if sex == "male":
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age)
    elif sex == "female":
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age)
    else:
        print("Invalid sex value")
        return
    return(bmr)
   


def calculate_tdee(bmr, activity_level):
    if activity_level == "Sedentary":
        tdee = bmr * 1.2
    elif activity_level == "Lightly active":
        tdee = bmr * 1.375
    elif activity_level == "Moderately active":
        tdee = bmr * 1.55
    elif activity_level == "Very active":
        tdee = bmr * 1.725
    elif activity_level == "Extra active":
        tdee = bmr * 1.9
    else:
        print("Invalid activity level")
        return
    return(tdee)


bmr = calculate_bmr(sex, weight, height, age)
print("Your BMR equals: ", bmr)

tdee = calculate_tdee(bmr, activity_level)
print("Your TDEE is: ", tdee)