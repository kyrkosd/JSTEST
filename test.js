#!/usr/bin/env node

// Simple CLI Calculator

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Simple Node.js Calculator");
console.log("Available operations: +  -  *  /");
console.log("Example: 5 * 7");
console.log("--------------------------------");

rl.question("Enter calculation: ", (input) => {
    try {
        // Validate input
        if (!/^[0-9+\-*/().\s]+$/.test(input)) {
            throw new Error("Invalid characters detected.");
        }

        // Calculate
        const result = Function(`"use strict"; return (${input})`)();

        console.log(`Result: ${result}`);
    } catch (err) {
        console.log("Error:", err.message);
    }

    rl.close();
});
