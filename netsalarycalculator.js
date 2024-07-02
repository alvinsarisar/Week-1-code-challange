function calculateNetSalary() {
    const basicSalary = parseFloat(prompt("what is your basic salary:"));
    const benefits = parseFloat(prompt("please enter the benefits you receive:"));
    // checking for valid numbers
    if (isNaN(basicSalary) || isNaN(benefits)) {
        alert("Please enter valid numbers for salary and benefits.");
        return;
    }
    
    const grossSalary = basicSalary + benefits;

    // Calculating  NSSF deductions
    const nssfRate = 0.06; // 6% of pensionable pay
    const nssfDeduction = Math.min(grossSalary * nssfRate, 18000 * nssfRate);//does not exceed capped value of 18000
    


    // Calculating PAYE (Tax)
    const payeTax = calculatePayeTax(grossSalary - nssfDeduction);
    

    // Calculating NHIF deductions
    const nhifDeduction = calculateNhifDeduction(grossSalary);
    
    const netSalary = grossSalary - nssfDeduction - payeTax - nhifDeduction;
    
    console.log(`Your Gross Salary is: KES ${grossSalary.toFixed(2)}`);
    console.log(`Your NSSF Deduction is: KES ${nssfDeduction.toFixed(2)}`);
    console.log(`Your PAYE (Tax) is : KES ${payeTax.toFixed(2)}`);
    console.log(`Your NHIF Deduction is: KES ${nhifDeduction.toFixed(2)}`);
    console.log(`Your Net Salary is : KES ${netSalary.toFixed(2)}`);
}
//1.function for calculating PAYE tax
function calculatePayeTax(taxableIncome) {
    let payeTax = 0;

    if (taxableIncome <= 24000) {
        payeTax = taxableIncome * 0.1; // 10%
    } else if (taxableIncome <= 32333) {
        payeTax = taxableIncome * 0.25; // 25%
    } else if (taxableIncome <= 500000) {
        payeTax = taxableIncome  * 0.3; // 30%
    } else if (taxableIncome <= 800000) {
        payeTax =taxableIncome  * 0.325; // 32.5%
    } else {
        payeTax = taxableIncome * 0.35; // 35%
    }

    return payeTax;
}
// 2.function for calculating NHIF deduction
function calculateNhifDeduction(grossSalary) {
    if (grossSalary <= 5999) {
        return 150;
    } else if (grossSalary <= 7999) {
        return 300;
    } else if (grossSalary <= 11999) {
        return 400;
    } else if (grossSalary <= 14999) {
        return 500;
    } else if (grossSalary <= 19999) {
        return 600;
    } else if (grossSalary <= 24999) {
        return 750;
    } else if (grossSalary <= 29999) {
        return 850;
    } else if (grossSalary <= 34999) {
        return 900;
    } else if (grossSalary <= 39999) {
        return 950;
    } else if (grossSalary <= 44999) {
        return 1000;
    } else if (grossSalary <= 49999) {
        return 1100;
    } else if (grossSalary <= 59999) {
        return 1200;
    } else if (grossSalary <= 69999) {
        return 1300;
    } else if (grossSalary <= 79999) {
        return 1400;
    } else if (grossSalary <= 89999) {
        return 1500;
    } else if (grossSalary <= 99999) {
        return 1600;
    } else {
        return 1700;
    }
}

// Executing main function the main function
calculateNetSalary();