/*BMI Calculator  BMI= weight (kg)/height^2(m^2)
If my weight is 65kg and my height is 1.8m, I should be able to call your function like this:
let bmi = bmiCalculator(65,1.8);
bmi should equal around 20 in this case.
*/


function bmiCalculator(weight, height) {
    let bmi = weight / Math.pow(height, 2);
    Math.round(bmi);
    if (bmi < 18.5) {
       return "Your BMI is " + bmi + ", so you are underweight.";
    }
    
    if (bmi >= 18.5 && bmi < 24.9) {
        return "Your BMI is " + bmi + ", so you have a normal weight.";
    }
    
    if (bmi > 24.9) {
        return "Your BMI is " + bmi + ", so you are overweight.";
    }
}


let bmi = bmiCalculator(60, 2);

console.log(bmi);


