
const books=[

"Artificial Intelligence: A Modern Approach – Stuart Russell",
"Machine Learning – Tom Mitchell",
"Deep Learning – Ian Goodfellow",
"Pattern Recognition and Machine Learning – Christopher Bishop",
"Hands-On Machine Learning with Scikit-Learn – Aurelien Geron",
"Python Machine Learning – Sebastian Raschka",
"Computer Networks – Andrew Tanenbaum",
"Operating System Concepts – Abraham Silberschatz",
"Database System Concepts – Korth",
"Introduction to Algorithms – CLRS",
"Clean Code – Robert C. Martin",
"Natural Language Processing with Python – Steven Bird",
"Computer Vision: Algorithms and Applications – Richard Szeliski",
"Reinforcement Learning – Sutton & Barto",
"Data Mining: Concepts and Techniques – Jiawei Han",
"Artificial Intelligence Basics – Tom Taulli",
"Machine Learning Engineering – Andriy Burkov",
"Design Patterns – Erich Gamma",
"Algorithms – Robert Sedgewick",
"Modern Operating Systems – Andrew Tanenbaum",
"Programming in ANSI C – E. Balagurusamy",
"The C Programming Language – Kernighan & Ritchie",
"Let Us C – Yashavant Kanetkar",
"C Programming Absolute Beginner’s Guide – Greg Perry",
"Expert C Programming – Peter van der Linden",
"Java: The Complete Reference – Herbert Schildt",
"Head First Java – Kathy Sierra",
"Core Java Volume I – Cay Horstmann",
"Effective Java – Joshua Bloch",
"Beginning Programming with Java – Barry Burd",
"Python Crash Course – Eric Matthes",
"Learning Python – Mark Lutz",
"Automate the Boring Stuff with Python – Al Sweigart",
"Think Python – Allen B. Downey",
"Fluent Python – Luciano Ramalho",
"Data Structures Using C – Reema Thareja",
"Data Structures and Algorithms in Java – Robert Lafore",
"Data Structures and Algorithms Made Easy – Narasimha Karumanchi",
"Problem Solving with Algorithms and Data Structures – Miller & Ranum",
"Discrete Mathematics and Its Applications – Kenneth Rosen",
"Discrete Mathematics – Seymour Lipschutz",
"Elements of Discrete Mathematics – Liu",
"Introduction to Probability – Dimitri Bertsekas",
"Probability and Statistics for Engineers – Jay Devore",
"A First Course in Probability – Sheldon Ross",
"Probability, Statistics and Random Processes – Veerarajan",
"Statistics for Engineers and Scientists – William Navidi",
"Introduction to Statistical Learning – Gareth James",
"Practical Statistics for Data Scientists – Peter Bruce",
"Statistics in a Nutshell – Sarah Boslaugh",
"Software Engineering – Ian Sommerville",
"Software Engineering: A Practitioner’s Approach – Roger Pressman",
"Clean Architecture – Robert C. Martin",
"The Pragmatic Programmer – Andrew Hunt",
"Computer Organization and Design – David Patterson",
"Structured Computer Organization – Andrew Tanenbaum",
"Digital Design – Morris Mano",
"Computer Networking: A Top-Down Approach – Kurose & Ross",
"Data Communications and Networking – Behrouz Forouzan",
"Distributed Systems – Andrew Tanenbaum",
"Distributed Systems: Principles and Paradigms – Tanenbaum",
"Database Management Systems – Raghu Ramakrishnan",
"Fundamentals of Database Systems – Elmasri & Navathe",
"SQL in 10 Minutes – Ben Forta",
"Artificial Intelligence for Humans – Jeff Heaton",
"Machine Learning for Absolute Beginners – Oliver Theobald",
"Pattern Classification – Richard Duda",
"Speech and Language Processing – Jurafsky & Martin",
"Introduction to Data Mining – Pang-Ning Tan",
"Mining of Massive Datasets – Anand Rajaraman",
"Linear Algebra and Its Applications – Gilbert Strang",
"Elementary Linear Algebra – Howard Anton",
"Calculus – James Stewart",
"Engineering Mathematics – B.S. Grewal",
"Operating Systems – William Stallings",
"Unix Concepts and Applications – Sumitabha Das",
"Compilers: Principles, Techniques and Tools – Aho, Lam, Sethi, Ullman",
"Programming Language Pragmatics – Michael Scott",
"Web Technologies – Uttam K. Roy",
"HTML and CSS: Design and Build Websites – Jon Duckett",
"JavaScript: The Good Parts – Douglas Crockford",
"Introduction to Cyber Security – Chwan-Hwa Wu",
"Cryptography and Network Security – William Stallings",
"Big Data Fundamentals – Thomas Erl",
"Hadoop: The Definitive Guide – Tom White",
"Cloud Computing – Rajkumar Buyya",
"Cloud Computing Concepts – Thomas Erl",
"Internet of Things – Samuel Greengard",
"IoT Fundamentals – David Hanes",
"Artificial Intelligence for Games – Ian Millington",
"Game Programming Patterns – Robert Nystrom",
"Data Science from Scratch – Joel Grus",
"Doing Data Science – Cathy O’Neil",
"Statistical Learning with Sparsity – Hastie, Tibshirani",
"Bayesian Data Analysis – Gelman",
"Computer Graphics – Donald Hearn",
"Interactive Computer Graphics – Edward Angel",
"Human Computer Interaction – Alan Dix",
"Designing the User Interface – Ben Shneiderman"

];

if(!localStorage.getItem("borrowed"))
localStorage.setItem("borrowed",JSON.stringify([]));

if(!localStorage.getItem("history"))
localStorage.setItem("history",JSON.stringify([]));

function login(){

let u=document.getElementById("username").value;
let p=document.getElementById("password").value;

if(u==="admin" && p==="vuacse")

window.location="dashboard.html";

else

document.getElementById("error").innerText="Invalid Login";

}

if(document.getElementById("bookSelect")){

loadBooks();

displayTables();

}

function loadBooks(){

let select=document.getElementById("bookSelect");

books.forEach(book=>{

let option=document.createElement("option");
option.text=book;
select.add(option);

});

}

document.addEventListener("input",function(){

let search=document.getElementById("searchBook");

if(!search) return;

let value=search.value.toLowerCase();

let filtered=books.filter(b=>b.toLowerCase().includes(value));

let select=document.getElementById("bookSelect");

select.innerHTML="";

filtered.forEach(book=>{

let op=document.createElement("option");

op.text=book;

select.add(op);

});

});

function borrowBook(){

let name=document.getElementById("facultyName").value;

let mobile=document.getElementById("mobile").value;

let book=document.getElementById("bookSelect").value;

let borrowDate=new Date();

let returnDate=new Date();

returnDate.setDate(returnDate.getDate()+28);

let borrowed=JSON.parse(localStorage.getItem("borrowed"));

borrowed.push({name,mobile,book,borrowDate,returnDate});

localStorage.setItem("borrowed",JSON.stringify(borrowed));

displayTables();

}

function returnBook(i){

let borrowed=JSON.parse(localStorage.getItem("borrowed"));

let history=JSON.parse(localStorage.getItem("history"));

history.push(borrowed[i]);

borrowed.splice(i,1);

localStorage.setItem("borrowed",JSON.stringify(borrowed));

localStorage.setItem("history",JSON.stringify(history));

displayTables();

}

function displayTables(){

let borrowed=JSON.parse(localStorage.getItem("borrowed"));

let history=JSON.parse(localStorage.getItem("history"));

let today=new Date();

let borrowedTable=document.getElementById("borrowedTable");

let delayedTable=document.getElementById("delayedTable");

let historyTable=document.getElementById("historyTable");

let availableTable=document.getElementById("availableTable");

borrowedTable.innerHTML="";

delayedTable.innerHTML="";

historyTable.innerHTML="";

availableTable.innerHTML="";

borrowed.forEach((b,i)=>{

let row=

`<tr>
<td>${b.book}</td>
<td>${b.name}</td>
<td>${b.mobile}</td>
<td>${new Date(b.borrowDate).toDateString()}</td>
<td>${new Date(b.returnDate).toDateString()}</td>
<td><button class="btn btn-success btn-sm" onclick="returnBook(${i})">Return</button></td>
</tr>`;

if(new Date(b.returnDate)<today)

delayedTable.innerHTML+=`<tr class="red">${row}</tr>`;

else

borrowedTable.innerHTML+=row;

});

history.forEach(h=>{

historyTable.innerHTML+=

`<tr>
<td>${h.book}</td>
<td>${h.name}</td>
<td>${h.mobile}</td>
</tr>`;

});

books.forEach(book=>{

let taken=borrowed.map(b=>b.book);

if(!taken.includes(book))

availableTable.innerHTML+=`<tr><td>${book}</td></tr>`;

});

}
