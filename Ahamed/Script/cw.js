function test() {
    document.getElementById("main").style.visibility = "hidden";
    var quiz1 = document.question.answer_1.value;
    var quiz2 = document.question.answer_2.value;
    var quiz3 = document.question.answer_3.value;
    var quiz4 = document.question.answer_4.value;
    var quiz5 = document.question.answer_5.value;
    var quiz6 = document.question.answer_6.value;
    var quiz7 = document.question.answer_7.value;
    var quiz8 = document.question.answer_8.value;
    var quiz9 = document.question.answer_9.value;
    var quiz10 = document.question.answer_10.value;
    var answers = 0;
    var marks = 0;
    // Checks whether the answer is correct or wrong and adds the marks
    if (quiz1 == "Rupee") {
        answers++; // answers adds by 1 if correct
        marks += 2; // marks add by 2 if correct
        document.getElementById("question1").innerHTML = "Your answer is correct" + "   <span class ='checkmark'>&checkmark;</span>";
    }
    else {
        marks -= 1;
        document.getElementById("question1").innerHTML = "Your answer is incorrect," + "<span class ='cross'>&cross;</span>"+ "The correct answer is Rupee";
    }
    if (quiz2 == "Tsunami") {
        answers++;
        marks += 2;
        document.getElementById("question2").innerHTML = "Your answer is correct" + "<span class ='checkmark'>&checkmark;</span>";
    }
    else {
        marks -= 1;
        document.getElementById("question2").innerHTML = "Your answer is incorrect," + " <span class ='cross'>&cross;</span>"+" The correct answer is Tsunami";
    }
    if (quiz3 == "River Mahaweli") {
        answers++;
        marks += 2;
        document.getElementById("question3").innerHTML = "Your answer is correct" + "<span class ='checkmark'>&checkmark;</span>";
    }
    else {
        marks -= 1;
        document.getElementById("question3").innerHTML = "Your answer is incorrect," + "<span class ='cross'>&cross;</span>"+" The correct answer is River Mahaweli";
    }
    if (quiz4 == "Pidurutalagala") {
        answers++;
        marks += 2;
        document.getElementById("question4").innerHTML = "Your answer is correct" + "<span class ='checkmark'>&checkmark;</span>";
    }
    else {
        marks -= 1;
        document.getElementById("question4").innerHTML = "Your answer is incorrect," + "<span class ='cross'>&cross;</span>"+" The correct answer is Pidurutalagala";
    }
    if (quiz5 == "Central Province") {
        answers++;
        marks += 2;
        document.getElementById("question5").innerHTML = "Your answer is correct" + "<span class ='checkmark'>&checkmark;</span>";
    }
    else {
        marks -= 1;
        document.getElementById("question5").innerHTML = "Your answer is incorrect," + "<span class ='cross'>&cross;</span>"+"The correct answer is Central Province";
    }
    if (quiz6 == "Indian Ocean") {
        answers++;
        marks += 2;
        document.getElementById("question6").innerHTML = "Your answer is correct" + "<span class ='checkmark'>&checkmark;</span>";
    }
    else {
        marks -= 1;
        document.getElementById("question6").innerHTML = "Your answer is incorrect," + "<span class ='cross'>&cross;</span>"+" The correct answer is Indian Ocean";
    }
    if (quiz7 == "Adam's peak") {
        answers++;
        marks += 2;
        document.getElementById("question7").innerHTML = "Your answer is correct" + "<span class ='checkmark'>&checkmark;</span>";
    }
    else {
        marks -= 1;
        document.getElementById("question7").innerHTML = "Your answer is incorrect," + "<span class ='cross' >&cross;</span>"+" The correct answer is Adam's peak";
    }
    if (quiz8 == "Hydro-powered energy") {
        answers++;
        marks += 2;
        document.getElementById("question8").innerHTML = "Your answer is correct" + "<span class ='checkmark'>&checkmark;</span>";
    }
    else {
        marks -= 1;
        document.getElementById("question8").innerHTML = "Your answer is incorrect," + "<span class ='cross'>&cross;</span> "+" The correct answer is Hydro-powered energy";
    }
    if (quiz9 == "D. S. Senanayaka") {
        answers++;
        marks += 2;
        document.getElementById("question9").innerHTML = "Your answer is correct" + "<span class ='checkmark'>&checkmark;</span>";
    }
    else {
        marks -= 1;
        document.getElementById("question9").innerHTML = "Your answer is incorrect," + "<span class ='cross'>&cross;</span>"+" The correct answer is D. S. Senanayaka";
    }
    if (quiz10 == "Cinnamon") {
        answers++;
        marks += 2;
        document.getElementById("question10").innerHTML = "Your answer is correct" + "<span class ='checkmark'>&checkmark;</span>";
    }
    else {
        marks -= 1;
        document.getElementById("question10").innerHTML = "Your answer is incorrect," + "<span class ='cross'>&cross;</span>"+" The correct answer is Cinnamon";
    }
   
    var box = document.getElementById("color");
    if (marks < 0) {
        box.style.backgroundColor = ' #00264d';
    }
    else if (marks >= 0 && marks <= 10) {
        box.style.backgroundColor = '#00cc99';
    }
    else if (marks >= 11 && marks <= 15) {
        box.style.backgroundColor = '#ff9933';
    }
    else if (marks >= 16 && marks <= 20) {
        box.style.backgroundColor = '#8800cc';
    }
    else {
        box.style.backgroundColor = '#00e6e6';
    }

    document.getElementById("answer").innerHTML = "No. of correct answers is : " + answers;
    document.getElementById("marks").innerHTML = "Your Marks is : " + marks;
    document.getElementById("time").innerHTML = "Your Time : " + ((300 - time) / 60) + " Minutes";
}
// Timer (remaining time will be shown for the quiz)
var time = 300 ;
function quiztime() {
    document.getElementById("main").style.display = "block"
    if (time > 0) {
        time--;
        document.getElementById("main").innerHTML = time + " Seconds";
        setTimeout("quiztime()", 1000); // timer reduces by 1 second (1000)
    } else {
        test();
    }
}
setTimeout("quiztime()", 1000); // timer display 1 seconds (1000) after entering the page