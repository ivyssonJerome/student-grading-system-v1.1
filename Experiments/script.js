/* Number of test scores to input 
function testScoreNum() {
    var test = document.createElement("INPUT"); //Creates an input tag
    test.setAttribute("type", "text");
    test.setAttribute("value", "");
    document.body.appendChild(test);

} */

// Function to calculate grades
const ScoreCalculator = () => {
    //Getting input from user into height variable
    let english = document.querySelector("#english").value;
    let maths = document.querySelector("#maths").value;
    let physics = document.querySelector("#physics").value;
    let accounting = document.querySelector("#accounting").value;
    let infoTech = document.querySelector("#info-tech").value;
    let history = document.querySelector("#history").value;
    let grades = "";

    // Since input is a string, convert it to a float(decimal)
    let totalGrades = parseFloat(english) + parseFloat(maths) + parseFloat(physics) + parseFloat(accounting) + parseFloat(infoTech) + parseFloat(history);

    // Checking the condition for the grade mark to student based on the percentage
    let percentage = Math.round((totalGrades / 600) * 100);
    if (percentage <= 100 && percentage >= 80) {
        grades = "A = Distinction";
    } 
    else if (percentage <= 79 && percentage >= 70) {
        grades = "B = Great Grades";
    } 
    else if (percentage <= 69 && percentage >= 60) {
        grades = "C = Good Grades";
    } 
    else if (percentage <= 59 && percentage >= 50) {
        grades = "D = Average grades";
    } 
    else {
        grades = "F = Fail";
    } 

    if (english == "" || maths == ""
        || physics == "" || accounting == "" || infoTech == "" || history == "") {
        document.querySelector("#showdata").innerHTML = "Please enter all the fields";
    }
    else {
        if (percentage >= 50) {
            document.querySelector("#showdata").innerHTML = ` Out of 600 your total is  ${totalGrades} and percentage is ${percentage}%. <br> Your grade is ${grades}. You are Pass. `;
        }
        else {
            document.querySelector("#showdata"
            ).innerHTML = ` Out of 600 your total is  ${totalGrades} and percentage is ${percentage}%. <br> Your grade is ${grades}. You are Fail. `;
        }
    }
};