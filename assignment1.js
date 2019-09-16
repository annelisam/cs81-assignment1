let lease = 300;
let increase = 0.05;

let year1 = lease*12;
let year2 = year1+(0.05*year1);
let year3 = year2+(0.05*year2);
let year4 = year3+(increase*year3);
let year5 = year4+(increase*year4);
let total = (year1 + year2 + year3 + year4 + year5).toFixed(2);
const linebreak = "-------------------------------------\n";

console.log("Here is the total breakdown cost for the 5 year lease:\n" + linebreak + "Year 1: $" + year1+"\n"+"Year 2: $" + year2+"\n"+"Year 3: $" + year3+"\n"+"Year 4: $" + year4+"\n"+"Year 5: $" + (year5.toFixed(2))
);
console.log("The total cost for the 5 year lease is $" + total);