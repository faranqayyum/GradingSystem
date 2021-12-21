function submit(){
    var input = document.getElementById("input").value;
    var gradeA1 = "Your gpa : 4.5  and Grade is A+ and Descriptor : Exceptional";
    var gradeA  = "Your gpa : 4  and Grade is A and Descriptor : Excellent";
    var gradeB1 = "Your gpa : 3.5  and Grade is B+ and Descriptor : Very Good";
    var gradeB  = "Your gpa : 3  and Grade is B and Descriptor : Good";
    var gradeC1 = "Your gpa : 2.5 and Grade is C+ and Descriptor : Satisfactory";
    var gradeC = "Your gpa : 2  and Grade is C and Descriptor : Adequate";
    var gradeD = "Your gpa : 1  and Grade is D and Descriptor : Marginal";
    var gradeF = "Your gpa : 0  and Grade is F and Descriptor : Failure";
    var invalid = "Invalid Entery !! Again Enter";

    if (input > 100){
        document.getElementById("result").innerHTML = invalid
    }
    else if (input >= 90 && input <= 100){
        document.getElementById("result").innerHTML = gradeA1;
    }
    else if (input >= 80 && input <= 89){
        document.getElementById("result").innerHTML = gradeA;
    }
    else if (input >= 75 && input <= 79){
        document.getElementById("result").innerHTML = gradeB1;
    }
    else if (input >= 70 && input <= 74){
        document.getElementById("result").innerHTML = gradeB;
    }
    else if (input >= 65 && input <= 69){
        document.getElementById("result").innerHTML = gradeC1;
    }
    else if (input >= 60 && input <= 64){
        document.getElementById("result").innerHTML = gradeC;
    }
    else if (input >= 50 && input <= 59){
        document.getElementById("result").innerHTML = gradeD;
    }
    else if (input <  60){
        document.getElementById("result").innerHTML = gradeF;
    }

}