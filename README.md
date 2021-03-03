# Timeliner
Timeliner is a utility that makes it easy for you to assign deadlines to a set of tasks.

## Installation
NodeJS is a prerequisite for this project, further an installation of ts-node is required.

```
$ npm install -g ts-node
$ npm install -g https://github.com/paperplaneguy/timeliner.git
```

## Use cases
### No sub-tasks
Say you have an assignment due on March 15th, 2021, today is March 3rd. The assignment has 6 questions and you are a neuroatypical who won't get anything done until the day before the deadline. Enter: internalized deadlines.

You will type `timeliner -d 03/15/2021 -t 6` and you will get your deadlines as:
```
Start date:	     03/03/2021
Major deadline:	 03/15/2021
Days remaining:	 11 days

Tasks:            6
Days per task:    2


Tasks:
	• Task 1: 03/03/2021 (March 3 '21)
	• Task 2: 03/05/2021 (March 5 '21)
	• Task 3: 03/07/2021 (March 7 '21)
	• Task 4: 03/09/2021 (March 9 '21)
	• Task 5: 03/11/2021 (March 11 '21)
	• Task 6: 03/13/2021 (March 13 '21)
```

### With sub-tasks
Now say you have a set of seven tasks with a deadline of April 3rd. Today is still March 3rd. Each task has three subtasks.
You will type `timeliner -d 04/03/2021 -t 7 -s 3` and you will get your deadlines as:
```
Start date:       03/03/2021
Major deadline:   04/03/2021
Days remaining:   30 days

Tasks:            7
Days per task:	  4

Subtasks:	      3
Days per sub:	  1


Tasks:
	• Task 1: 03/03/2021 (March 3 '21)
		-> Subtask 1: 03/03/2021 (March 3 '21)
		-> Subtask 2: 03/04/2021 (March 4 '21)
		-> Subtask 3: 03/05/2021 (March 5 '21)
	• Task 2: 03/07/2021 (March 7 '21)
		-> Subtask 1: 03/07/2021 (March 7 '21)
		-> Subtask 2: 03/08/2021 (March 8 '21)
		-> Subtask 3: 03/09/2021 (March 9 '21)
	• Task 3: 03/11/2021 (March 11 '21)
		-> Subtask 1: 03/11/2021 (March 11 '21)
		-> Subtask 2: 03/12/2021 (March 12 '21)
		-> Subtask 3: 03/13/2021 (March 13 '21)
	• Task 4: 03/15/2021 (March 15 '21)
		-> Subtask 1: 03/15/2021 (March 15 '21)
		-> Subtask 2: 03/16/2021 (March 16 '21)
		-> Subtask 3: 03/17/2021 (March 17 '21)
	• Task 5: 03/19/2021 (March 19 '21)
		-> Subtask 1: 03/19/2021 (March 19 '21)
		-> Subtask 2: 03/20/2021 (March 20 '21)
		-> Subtask 3: 03/21/2021 (March 21 '21)
	• Task 6: 03/23/2021 (March 23 '21)
		-> Subtask 1: 03/23/2021 (March 23 '21)
		-> Subtask 2: 03/24/2021 (March 24 '21)
		-> Subtask 3: 03/25/2021 (March 25 '21)
	• Task 7: 03/27/2021 (March 27 '21)
		-> Subtask 1: 03/27/2021 (March 27 '21)
		-> Subtask 2: 03/28/2021 (March 28 '21)
		-> Subtask 3: 03/29/2021 (March 29 '21)
```

## Usage
```
$ timeliner -h
Usage: timeliner [options]

Options:
  -v, --version           output the current version
  -d, --deadline <date>   (required) deadline of the project
  -t, --tasks <count>     (required) number of tasks associated
  -s, --subtasks <count>  number of subtasks per each task
  --only-next             show only the next deadline
  -h, --help              display help for command
```