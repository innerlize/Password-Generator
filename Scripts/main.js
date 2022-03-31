const passwordContainer = document.getElementById('password');
const copyButton = document.getElementById('copy_button');

const passwordLength = document.getElementById('password_length');
const passwordUpper = document.getElementById('password_upper');
const passwordLower = document.getElementById('password_lower');
const passwordNumber = document.getElementById('password_number');
const passwordSymbol = document.getElementById('password_symbol');

const generateButton = document.getElementById('generate_button');

const upperLetters = 'ABCDEFGHIJKLMNOPQSRTUVWXYZ';
const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbol = '~!@#$%^&*()_+=|';

function getLowercase() {
	return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getUppercase() {
	return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getNumber() {
	return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol() {
	return symbol[Math.floor(Math.random() * symbol.length)];
}

function generatePassword() {
	const length = passwordLength.value;
	let password = '';

	for (let i = 0; i < length; i++) {
		const X = generatePasswordContents();
		password += X;
	}

	passwordContainer.innerText = password;
}

function generatePasswordContents() {
	const passwordContent = [];

	if (passwordUpper.checked) {
		passwordContent.push(getUppercase());
	}

	if (passwordLower.checked) {
		passwordContent.push(getLowercase());
	}

	if (passwordNumber.checked) {
		passwordContent.push(getNumber());
	}

	if (passwordSymbol.checked) {
		passwordContent.push(getSymbol());
	}

	if (passwordContent.length === 0) return "";
	return passwordContent[Math.floor(Math.random() * passwordContent.length)];
}

generateButton.addEventListener('click', generatePassword);

copyButton.addEventListener('click', () => {
	const textarea = document.createElement('textarea');
	const innerPassword = password.innerText;

	if (!password) {
		return;
	}

	textarea.value = innerPassword;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand('copy');
	textarea.remove();
	alert('Listo reina, a ver si me compartis la contraseña para acceder a tu corazon eh')
})