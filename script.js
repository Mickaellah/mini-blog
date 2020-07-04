console.log('it works');

// code your solution in here


// Declared some variables that will be used for this mini blog page.

const postList = document.querySelector("#post-list");
const cardList = document.querySelector(".card .some-space");
const bodyCard = document.querySelector(".card-body");
const title = document.querySelector(".card-title");
const cardContent = document.querySelector(".card-text");
const badge = document.querySelector(".badge badge-light");
const newPostTitle = document.querySelector("#new-post-title");
const newPostContent = document.querySelector("#new-post-content");
const submitButton = document.querySelector("#submit-form");
const newHeading = document.createElement("h5");
const newParagraph = document.createElement("p");
const form = document.querySelector("form");
const checkboxForm = document.querySelector(".form-check");


// A function which use the addEventListener() method for the submit button.

submitButton.addEventListener("click", ($event) => {
    $event.preventDefault();
    newHeading.textContent = `${newPostTitle.value}`;
    newParagraph.textContent = `${newPostContent.value}`;
    form.reset();

});


// Push the new post that users will enter by using the appendChild method.

bodyCard.appendChild(newHeading);
bodyCard.appendChild(newParagraph);
cardList.appendChild(bodyCard);
postList.appendChild(cardList);


// Add classes for the new post.

newHeading.classList.add("card-title");
newParagraph.classList.add("card-text");
bodyCard.classList.add(".card-body");
cardList.classList.add(".card .some-space");

// const hobbies = document.getElementById("hobbies-tag");
// hobbies.addEventListener("change", ($event) => {
//     if ($event.target.value) {
//         checkboxForm.children[0].children.classList.add("form-check-inline");
//     }
// });

// const schoolLife = document.getElementById("school-life-tag");
// schoolLife.addEventListener("change", ($event) => {
//     if ($event.target.value) {
//         checkboxForm.children[1].children.classList.add("form-check-inline");
//     }
// });

// const personal = document.getElementById("personal-tag");
// personal.addEventListener("change", ($event) => {
//     if ($event.target.value) {
//         checkboxForm.children[2].children.classList.add("form-check-inline");
//     }
// });





