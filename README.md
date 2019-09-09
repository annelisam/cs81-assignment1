# cs81-assignment1
CS 81 (Intro to Javascript) – Assignment #1

Write a program that computes the total cost for a five year car lease. The program starts with a monthly leasing amount and a yearly increase in percent. The program then outputs the total amount paid for each year and the total overall cost of the lease.

For example, if the monthly lease amount is 300 and the yearly increase is 5%, the program will compute the total for year1 which is 3600. The increase will be applied to each of the following years and will compound based on previous years. The monthly cost for  year 2 will be 315, the monthly cost for year 3 will be 330.75, etc.

Start with this code:

// test case
let lease = 300; // monthly lease is 300 dollars
let increase = 0.05; // 5% increase (100% = 1.0)

// write your code

Note: Use .toFixed(2) to limit the decimal digits to 2, e.g. num.toFixed(2)

WARNING: If you're program does not execute due to syntax errors, you will receive 50% of total points.

Submission: Submit a single .js file named assignment1.js.
