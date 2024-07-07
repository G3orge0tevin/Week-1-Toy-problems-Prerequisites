function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;

    // PAYE (Tax) calculation
    function calculatePAYE(grossSalary) {
        let payee;
        if (grossSalary <= 24000) {
            payee = grossSalary * 0.1;
        } else if (grossSalary <= 32333) {
            payee = 2400 + (grossSalary - 24000) * 0.25;
        } else {
            payee = 4483.25 + (grossSalary - 32333) * 0.3;
        }
        return payee;
    }
// NHIF deduction calculation
function calculateNHIF(grossSalary) {
    if (grossSalary <= 5999) return 150;
    if (grossSalary <= 7999) return 300;
    if (grossSalary <= 11999) return 400;
    if (grossSalary <= 14999) return 500;
    if (grossSalary <= 19999) return 600;
    if (grossSalary <= 24999) return 750;
    if (grossSalary <= 29999) return 850;
    if (grossSalary <= 34999) return 900;
    if (grossSalary <= 39999) return 950;
    if (grossSalary <= 44999) return 1000;
    if (grossSalary <= 49999) return 1100;
    if (grossSalary <= 59999) return 1200;
    if (grossSalary <= 69999) return 1300;
    if (grossSalary <= 79999) return 1400;
    if (grossSalary <= 89999) return 1500;
    if (grossSalary <= 99999) return 1600;
    return 1700;
}
 // NSSF deduction calculation
 function calculateNSSF(grossSalary) {
    const nssfRate = 0.06;
    const nssfMax = 18000;
    const nssfDeduction = Math.min(grossSalary * nssfRate, nssfMax);
    return nssfDeduction;
}

const payee = calculatePAYE(grossSalary);
const nhif = calculateNHIF(grossSalary);
const nssf = calculateNSSF(grossSalary);

const netSalary = grossSalary - payee - nhif - nssf;

return {
    grossSalary,
    payee,
    nhif,
    nssf,
    netSalary
};
}

// Example 
const basicSalary = 50000;
const benefits = 10000;
const salaryDetails = calculateNetSalary(basicSalary, benefits);
console.log('Gross Salary: ${salaryDetails.grossSalary}');
console.log('PAYE (Tax): ${salaryDetails.payee}');
console.log('NHIF: ${salaryDetails.nhif}');
console.log('NSSF: ${salaryDetails.nssf}');
console.log('Net Salary: ${salaryDetails.netSalary}');