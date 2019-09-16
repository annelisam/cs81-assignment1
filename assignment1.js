// variable for a monthly leasing amount

// variable for yearly increase

// total amount paid for each year (5 years total)

// total overall cost of the lease for 5 years

const confirmReady = confirm("Are you ready to calculate your 5 year car lease?");


if(confirmReady) {
    const leaseAmount = prompt("What is the monthly leasing amount?");
    let monthlyAmount = parseInt(leaseAmount);
    alert("Your monthly lease amount is $" + monthlyAmount);
    const increaseAmount = prompt("What is the yearly increase?");
    let yearlyIncrease = parseInt(increaseAmount).toFixed(2);
    alert("Your yearly increase amount is " + yearlyIncrease + "%");
    let addIncrease = monthlyAmount*yearlyIncrease;
    alert(addIncrease);
}