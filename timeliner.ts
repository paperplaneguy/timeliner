#!/usr/bin/env ts-node-script

const { program } = require('commander')

//setting up the command line options
program.version("0.0.6", "-v, --version", "output the current version")

program
    .requiredOption("-d, --deadline <date>", "(required) deadline of the project")
    .requiredOption("-t, --tasks <count>", "(required) number of tasks associated")
    .option("-s, --subtasks <count>", "number of subtasks per each task")
    .option("--only-next", "show only the next deadline")

program.parse(process.argv)

function error(c: String) {
    console.log(c + ".")
    process.exit(-1)
}
let invalidDateError = () => error("Invalid date entered. Use the format mm/dd/yyyy")

//vetting the data input and assigning variables
const deadline = program.deadline
if(deadline.length != 10)
    invalidDateError()

const tasks = program.tasks
if(isNaN(tasks))
    error("Invald task count entered")

const subtasks = program.subtasks
if(subtasks)
    if(isNaN(subtasks))
        error("Invalid subtask count entered.")


function toFullDate(date) {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    return monthNames[date.getMonth()] + " " + date.getDate() + " '" + String(date.getFullYear()).slice(-2)
}

function toNormalDate(date) {
    return String(date.getMonth() + 1).padStart(2, '0') + '/' + String(date.getDate()).padStart(2, '0') + '/' + date.getFullYear()
}

let todayDate = new Date()
const today = toNormalDate(todayDate)

//main:
const totalDays = Math.round( (new Date(deadline).getTime() - todayDate.getTime())/(1000*60*60*24) )
const daysPerTask = Math.round(totalDays/tasks)
const daysPerSub = Math.round(daysPerTask/subtasks)
console.log(
    `Start date:\t ${today}\n` +
    `Major deadline:\t ${deadline}\n` +
    `Days remaining:\t ${totalDays.toLocaleString()} days\n\n` +
    `Tasks:\t\t ${tasks}\n` +
    `Days per task:\t ${daysPerTask}\n\n` +
    (subtasks ?
        `Subtasks:\t ${subtasks}\n` +
        `Days per sub:\t ${daysPerSub}\n\n` :
        ""
    )
)

function plusDays(_date, days) {
    var date = new Date(_date.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

if(program.onlyNext) {
    console.log(`Next deadline: ${ toNormalDate( plusDays(todayDate, (daysPerTask * 1) - 1) ) }`)
    process.exit(0)
}

console.log("Tasks:")
for(let i = 0; i < tasks; i++) {
    let taskDatePointer = plusDays(todayDate, daysPerTask * i)
    console.log(`\t• Task ${i + 1}: ${ toNormalDate(taskDatePointer) } (${ toFullDate(taskDatePointer) })`)
    if(subtasks)
        for(let j = 0; j < subtasks; j++) {
            var __days = plusDays(taskDatePointer, daysPerSub * j)
            console.log(`\t\t-> Subtask ${j + 1}: ${ toNormalDate(__days) } (${ toFullDate(__days) })`)
        }
}