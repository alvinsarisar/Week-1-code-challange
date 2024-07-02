// 1.Function to prompt the user for marks and validate the input
function enterMarks() {
let marks;
 while (true) {
     marks = prompt("Please enter your marks:");
     marks = parseFloat(marks);

     // Checking if the input number is a valid number and within the specified range (0-100)
    if (!isNaN(marks) && marks >= 0 && marks <= 100) {
        break;
    } else {
     alert("Please enter a valid mark between 0 and 100.");
    }
    }
    return marks;
}

// 2.Function for the grading system
function gradingSystem(marks) {
    let grade;
    if (marks > 79) {
        grade = 'A';
    } else if (marks >= 60) {
        grade = 'B';
    } else if (marks >= 50) {
        grade = 'C';
    } else if (marks >= 40) {
        grade = 'D';
    } else {
        grade = 'E';
    }
    return grade;
}

// 3.Function for displaying grade to the user
function displayGrade(marks, grade) {
    alert('The grade for the marks ${marks} is: ${grade}');
}

// 4. main function to execute the  whole program
function getStudentGrade() {
    const marks = enterMarks();
    const grade = gradingSystem(marks);
    displayGrade(marks, grade);
}

getStudentGrade();
