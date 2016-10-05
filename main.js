var prompt = require('prompt-sync')();

var questions = [
	{text: 'What does Eric like?  ', answer: 'turtles'},
	{text: 'What does HTML stand for?  ', answer: 'Hypertext Markup Language'},
	{text: 'What does node do?  ', answer: 'programs and executes JavaScript code'},
	{text: 'What is another word for list?  ', answer: 'array'},
	{text: 'NaN is what kind of value?  ', answer: 'falsy'},
	{text: 'If var x = Poo and var y = Doo, what is x + y?  ', answer: 'PooDoo'},
	{text: 'Show a block of code  ', answer: '{}'},
	{text: 'What is the value of var name;  ', answer: 'undefined'},
	{text: 'What value goes inside a conditional statement?  ', answer: 'boolean'},
	{text: 'What does NPM stand for?  ', answer: 'Node Package Manager'},
	{text: 'What does REPL stand for?  ', answer: 'Read Evalue Print Loop'},
	{text: 'What is a value?  ', answer: 'piece of data'},
	{text: 'Show duh as a literal  ', answer: 'duh'},
	{text: 'What does a side-effect do?  ', answer: 'manipulates variables'},
	{text: 'What kind of operator is %?  ', answer: 'arimethtic'}
];

var cct = 0;
var answer;

for (var i = 0; i < questions.length; i++) {
	answer = prompt(questions[i].text);
	if (answer === questions[i].answer) {
		console.log('Cowabunga!');
		cct++;
	} else {
		console.log('Too bad so sad');
	}
}

answer = cct++;
console.log ('Correct answers:  ' + answer);
avg = cct / questions.length * 100;
console.log('Percentage Correct:  '  + avg);


