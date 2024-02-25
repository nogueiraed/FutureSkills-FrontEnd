# CLOUD SERVER

hostname: http://aws-efy.clseyoauobbq.sa-east-1.rds.amazonaws.com
Porta: 3306
Username: admin
Password: Unoeste123 (U maiusculo)

cloud server esta comentado no codigo

# CREATE TABLE

CREATE TABLE `students` (
`ID` int(11) NOT NULL AUTO_INCREMENT,
`dtRegistration` date DEFAULT NULL,
`RegistrationNumber` varchar(255) DEFAULT NULL,
`EnglishLevel` varchar(255) DEFAULT NULL,
`Name` varchar(255) DEFAULT NULL,
`CPF` varchar(255) DEFAULT NULL,
`BirthDate` date DEFAULT NULL,
`Phone` varchar(255) DEFAULT NULL,
`Address` varchar(255) DEFAULT NULL,
`AddressNumber` varchar(255) DEFAULT NULL,
`District` varchar(255) DEFAULT NULL,
`City` varchar(255) DEFAULT NULL,
`State` varchar(255) DEFAULT NULL,
`CEP` varchar(255) DEFAULT NULL,
PRIMARY KEY (`ID`)
)

CREATE TABLE `classes` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`englishLevel` varchar(255) DEFAULT NULL,
`availableSeats` int(11) DEFAULT NULL,
PRIMARY KEY (`id`)
)

CREATE TABLE `employee` (
`ID` int(11) NOT NULL AUTO_INCREMENT,
`Name` varchar(255) DEFAULT NULL,
`CPF` varchar(11) NOT NULL,
`BirthDate` date DEFAULT NULL,
`Phone` varchar(20) DEFAULT NULL,
`Address` varchar(255) DEFAULT NULL,
`AddressNumber` varchar(10) DEFAULT NULL,
`State` varchar(2) DEFAULT NULL,
`City` varchar(100) DEFAULT NULL,
`District` varchar(100) DEFAULT NULL,
`CEP` varchar(8) DEFAULT NULL,
`contractStartDate` date DEFAULT NULL,
`startTime` varchar(10) DEFAULT NULL,
`endTime` varchar(10) DEFAULT NULL,
`position` varchar(100) DEFAULT NULL,
`englishLevel` varchar(50) DEFAULT NULL,
`workShift` varchar(50) DEFAULT NULL,
PRIMARY KEY (`ID`)
)

CREATE TABLE `waitinglist` (
`ID` int(11) NOT NULL AUTO_INCREMENT,
`dtRegistration` date DEFAULT NULL,
`RegistrationNumber` varchar(255) DEFAULT NULL,
`EnglishLevel` varchar(255) DEFAULT NULL,
`Name` varchar(255) DEFAULT NULL,
`CPF` varchar(255) DEFAULT NULL,
`BirthDate` date DEFAULT NULL,
`Phone` varchar(255) DEFAULT NULL,
`Address` varchar(255) DEFAULT NULL,
`AddressNumber` varchar(255) DEFAULT NULL,
`District` varchar(255) DEFAULT NULL,
`City` varchar(255) DEFAULT NULL,
`State` varchar(255) DEFAULT NULL,
`CEP` varchar(255) DEFAULT NULL,
PRIMARY KEY (`ID`)
)

CREATE TABLE absence (
student_id INT,
date DATE
);

CREATE TABLE egrades (
studentID INT PRIMARY KEY,
reading FLOAT,
listening FLOAT,
speaking FLOAT,
writing FLOAT,
data DATE,
media FLOAT
);

CREATE TABLE pay (
id INT AUTO_INCREMENT PRIMARY KEY,
dataVencimento DATE,
dataPagamento DATE,
valor DECIMAL(10, 2),
descricao VARCHAR(255),
meioPagamento VARCHAR(255),
situacao VARCHAR(255)
);

CREATE TABLE receive (
id INT AUTO_INCREMENT PRIMARY KEY,
dataVencimento DATE,
dataPagamento DATE,
valor DECIMAL(10, 2),
descricao VARCHAR(255),
meioPagamento VARCHAR(255),
situacao VARCHAR(255)
);

CREATE TABLE payments (
id INT AUTO_INCREMENT PRIMARY KEY,
studentName VARCHAR(255) NOT NULL,
studentCPF VARCHAR(14) NOT NULL,
totalAmount DECIMAL(10, 2) NOT NULL,
paymentMethod VARCHAR(255) NOT NULL,
installmentAmount DECIMAL(10, 2) NOT NULL,
numberOfInstallments INT NOT NULL,
paymentDate DATE ,
nextPaymentDate DATE,
amountDue DECIMAL(10, 2),
);

CREATE TABLE users (
id INT AUTO_INCREMENT PRIMARY KEY,
user VARCHAR(255),
password varchar(255)
)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# EFYfrontend
