//variable "lease" for starting lease amount
let lease = 300;

//variable "increase" for increase in percent
let increase = 0.05;

//each variable computes each year with increase. 

//year 1 does not have an increase, so this is the yearly amount.
let year1 = lease*12;

//the rest of the variables calculate the increase
let year2 = year1+(increase*year1);
let year3 = year2+(increase*year2);
let year4 = year3+(increase*year3);
let year5 = year4+(increase*year4);

//total adds each year together and rounds up to the decimal in the second place with ".toFixed(2)"
let total = (year1 + year2 + year3 + year4 + year5).toFixed(2);
const linebreak = "-------------------------------------\n";

//console log outputs each breakdown cost + total amount.
console.log("Here is the total breakdown cost for the 5 year lease:\n" + linebreak + "Year 1: $" + year1+"\n"+"Year 2: $" + year2+"\n"+"Year 3: $" + year3+"\n"+"Year 4: $" + year4+"\n"+"Year 5: $" + (year5.toFixed(2))
);
console.log("The total cost for the 5 year lease is $" + total);

