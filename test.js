#!/usr/bin/env node

// Simple CLI Calculator

// --- Intentionally added SonarQube test vulnerabilities ---
const DB_PASSWORD = "supersecret123";  // Hardcoded secret
const unsafeEval = eval;               // Unsafe dynamic evaluation

const { exec } = require("child_process");
function runCommand(input) {           // Command injection example
    exec("echo " + input);             
}

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"; // Disable TLS cert validation
// ------------------------------------------------------------

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Simple Node.js Calculator");
console.log("Available operations: +  -  *  /");
console.log("Example: 5 * 2");
console.log("--------------------------------");

rl.question("Enter calculation: ", (input) => {
    try {
        // Validate input
        if (!/^[0-9+\-*/().\s]+$/.test(input)) {
            throw new Error("Invalid characters detected.");
        }

        // VULNERABILITY: Unsafe Function constructor
        const result = Function(`"use strict"; return (${input})`)();

        console.log(`Result: ${result}`);

        // Trigger command injection test function
        runCommand(input);

    } catch (err) {
        console.log("Error:", err.message);
    }

    rl.close();
});
