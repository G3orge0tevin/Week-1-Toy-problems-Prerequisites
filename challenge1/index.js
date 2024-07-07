function studentMarks() {
    let marks = prompt("Enter student marks (between 0 and 100):");

    // Convert the input to a number
    marks = Number(marks);

    let grade;

    // Determine the grade based on the marks
    if (marks > 79) {
        grade = 'A';
    } else if (marks >= 60) {
        grade = 'B';
    } else if (marks >= 49) {
        grade = 'C';
    } else if (marks >= 40) {
        grade = 'D';
    } else {
        grade = 'E';
    }

    console.log('The grade for marks ${marks} is: ${grade}');
}

// Call the function to execute it
studentMarks();