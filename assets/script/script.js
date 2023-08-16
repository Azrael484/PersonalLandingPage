
var nameInputEl = document.querySelector("[type = 'text']");
var emailInputEl = document.querySelector("[type = email");
var commentInputEl = document.querySelector('textarea');

var visitorsContainer = document.getElementById("visitors");
visitorsContainer.style.display = "none";

var showVisitorsBtn = document.createElement("button");
showVisitorsBtn.style.margin = "0 auto";
var btnsDiv = document.querySelector("div");
btnsDiv.appendChild(showVisitorsBtn);
showVisitorsBtn.textContent = "Find who has visited already"

var visitors = JSON.parse(localStorage.getItem("visitors")) || [];

console.log(visitors);

var formEl = document.getElementById("mark");

formEl.addEventListener('submit', function (event){

    var nameInput = nameInputEl.value.trim();
    console.log(nameInput);
    var emailInput =  emailInputEl.value;
    console.log(emailInput);
    var commentInput = commentInputEl.value.trim();
    console.log(commentInput);

    var visitor = {
        name: nameInput,
        email: emailInput,
        comment: commentInput
    };

    console.log(visitor);

    visitors.push(visitor);

    localStorage.setItem("visitors", JSON.stringify(visitors));

});

showVisitorsBtn.addEventListener('click', displayVisitors);

function displayVisitors(event) {
    
    event.stopPropagation();

    visitorsContainer.innerHTML = "";
    visitorsContainer.style.display = "block";

    var visitorsHeader = document.createElement("h1");
    visitorsHeader.textContent = "Best wishes to everyone who leaves a mark. So far the list includes: "
    visitorsContainer.append(visitorsHeader)

    if (!visitors.length) {

        var visitorInfo = document.createElement("p");
        visitorInfo.textContent = "Sadly, no one has yet left a mark on this page."
        visitorsContainer.append(visitorInfo);

    } else { 
        var visitorsList = document.createElement("ul");
        visitorsContainer.append(visitorsList);

        visitors.forEach(visitor => {
            

            var visitorListItem = document.createElement("li");
            visitorsList.append(visitorListItem);
            var visitorInfo = document.createElement("p");
            visitorListItem.append(visitorInfo);
            visitorInfo.textContent = visitor.name + " ,whose email is " + visitor.email + " was here, and left the following comment: ";
            var visitorComment = document.createElement("span");
            visitorInfo.append(visitorComment);
            visitorComment.textContent = visitor.comment;

        });

    }
}
console.log(localStorage.visitors);