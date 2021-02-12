# Timeliner
Timeliner is a utility that makes it easy for you to assign deadlines to a set of tasks.

## Download
### pre-requisites
NodeJS is a prerequisite for this project, further an installation of ts-node is required.

```
$ npm install -g ts-node
$ npm i --save-dev @types/node
```

### installation
1. copy the git directory to your system
2. `cd` into the folder
3. `$ npm install`

## Usage
```
$ ts-node timeliner.ts -h
Usage: timeliner [options]

Options:
  -v, --version           output the current version
  -d, --deadline <date>   (required) deadline of the project
  -t, --tasks <count>     (required) number of tasks associated
  -s, --subtasks <count>  number of subtasks per each task
  --only-next             show only the next deadline
  -h, --help              display help for command
```