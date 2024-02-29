
const hamburger = document.getElementsByClassName('hamburger')[0]
const menubar = document.getElementsByClassName('menu-bar')[0]

hamburger.addEventListener('click', () => {
  menubar.classList.toggle('active')
})
 
const search = () => {
  const searchBox =  document.getElementById("search").value.toUpperCase(); 
  const storeitems = document.getElementById("food-list")
  const foods = document.querySelectorAll(".card-shadow")
  const foodName = storeitems.getElementsByTagName("h3")
  let noResult = document.querySelector('p')
  let found = false;
  for(let i = 0; i < foodName.length; i++){
    let match = foods[i].getElementsByTagName('h3')[0];
    if(match){
      let textValue = match.textContent || match.innerHTML
      if(textValue.toUpperCase().indexOf(searchBox) >  -1){
        foods[i].style.display = "";
        found = true;
      }else{
        foods[i].style.display = "none";
      }
    }
  }
  if (found){
    noResult.style.display = "none";
  }
  else{
    noResult.style.display = '';
  }
}
function clearInput() {
let clearSearch = document.getElementById('search').value =""
}
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const success = document.querySelector("#success")
const error = document.querySelectorAll(".error")

function validateForm(){

  clearMessage()
  let errorMessage = false;

  if(nameInput.value.length < 1){
    error[0].innerText = "\u0021 Name cannot be blank";
    nameInput.classList.add("error")
    errorMessage = true;
  }

  if(!validEmail(emailInput.value)){
    error[1].innerText = "\u0021 Invalid Email Address";
    emailInput.classList.add("error")
    errorMessage = true;
  }

  if(messageInput.value.length < 1){
    error[2].innerText = "\u0021 Please Enter a Message";
    messageInput.classList.add("error")
    errorMessage = true;
  } 

  if (!errorMessage){
    success.innerText = "Message Sent"
    window.history.back()
  }
}


function clearMessage(){
  for(let i = 0; i < error.length; i++){
    error[i].innerText = "";
  }
  success.innerText = "";
  nameInput.classList.remove("error")
  emailInput.classList.remove("error")
  messageInput.classList.remove("error")
}


function validEmail(emailInput){
  let symbol = /\S+@\S+\.\S+/;
  return symbol.test(emailInput);
}



const getRecipeBtn = document.querySelectorAll(".card-footer button");
const mealDetails = document.querySelector(".meal-detail");
const mealCloseBtn = document.getElementById("recipe-close-btn");


function getRecipeDetails(){
  document.querySelector(".meal-detail").style.display ="block"
}
function get2ndRecipe(){
  document.querySelector(".second-meal-detail").style.display = "block"
}
function get3rdRecipe(){
  document.querySelector(".third-meal-detail").style.display = "block"
}
function get4thRecipe(){
  document.querySelector(".four-meal-detail").style.display = "block"
}
function get5thRecipe(){
  document.querySelector(".five-meal-detail").style.display = "block"
}
function get6thRecipe(){
  document.querySelector(".six-meal-detail").style.display = "block"
}
function get7thRecipe(){
  document.querySelector(".seven-meal-detail").style.display = "block"
}
function get8thRecipe(){
  document.querySelector(".eight-meal-detail").style.display = "block"
}
function get9thRecipe(){
  document.querySelector(".nine-meal-detail").style.display = "block"
}
function get10thRecipe(){
  document.querySelector(".ten-meal-detail").style.display = "block"
}
function get11thRecipe(){
  document.querySelector(".eleven-meal-detail").style.display = "block"
}
function get12thRecipe(){
  document.querySelector(".twelve-meal-detail").style.display = "block"
}



document.addEventListener('DOMContentLoaded', function() {
  showSavedRecipes();
});

function showSavedRecipes() {
  const recipes = JSON.parse(localStorage.getItem('recipes')) || [];
  const cardGrid = document.getElementById('food-list');

  recipes.forEach(recipe => {
      const recipeCard = document.createElement('div');
      recipeCard.classList.add('card', 'card-shadow');
      const cardHeader = document.createElement('div');
      cardHeader.classList.add('card-header', 'card-image');
      const img = document.createElement('img');
      img.src = recipe.recipe_image;
      img.alt = recipe.recipe_name;
      cardHeader.appendChild(img);
      const cardBody = document.createElement('div');
      cardBody.classList.add('card-body');
      const h3 = document.createElement('h3');
      h3.textContent = recipe.recipe_name;
      cardBody.appendChild(h3);
      const cardFooter = document.createElement('div');
      cardFooter.classList.add('card-footer');
      const button = document.createElement('button');
      button.classList.add('btn');
      button.textContent = 'Get Recipe';
      button.addEventListener('click', function() {
          displayRecipeDetails(recipe);
      });
      cardFooter.appendChild(button);
      recipeCard.appendChild(cardHeader);
      recipeCard.appendChild(cardBody);
      recipeCard.appendChild(cardFooter);
      cardGrid.appendChild(recipeCard);
  });
}

function displayRecipeDetails(recipe) {
  const mealDetail = document.getElementById('meal-detail');

  const mealName = mealDetail.querySelector('.meal-name');
  mealName.textContent = recipe.recipe_name;

  const mealAbout = mealDetail.querySelector('.meal-descript-about');
  mealAbout.textContent = recipe.recipe_about;

  const mealIngredients = mealDetail.querySelector('.meal-instruct p:nth-of-type(1)');
  mealIngredients.innerHTML = recipe.recipe_ingredients;

  const mealInstructions = mealDetail.querySelector('.meal-instruct p:nth-of-type(2)');
  mealInstructions.innerHTML = recipe.recipe_instructions+`<br>`;

  const mealImage = mealDetail.querySelector('.meal-img img');
  mealImage.src = recipe.recipe_image;

  const mealLink = mealDetail.querySelector('.meal-link-btn');
  mealLink.href = recipe.recipe_video_link;

  mealDetail.style.display = 'block';
}

function closeBtn() {
  const mealDetail = document.getElementById('meal-detail');
  mealDetail.style.display = 'none';
}


function closeBtn2() {
  const mealDetail = document.getElementById('second-meal-detail');
  mealDetail.style.display = 'none';
}


function closeBtn3() {
  const mealDetail = document.getElementById('third-meal-detail');
  mealDetail.style.display = 'none';
}


function closeBtn4() {
  const mealDetail = document.getElementById('four-meal-detail');
  mealDetail.style.display = 'none';
}


function closeBtn5() {
  const mealDetail = document.getElementById('five-meal-detail');
  mealDetail.style.display = 'none';
}



function closeBtn6() {
  const mealDetail = document.getElementById('six-meal-detail');
  mealDetail.style.display = 'none';
}



function closeBtn7() {
  const mealDetail = document.getElementById('seven-meal-detail');
  mealDetail.style.display = 'none';
}



function closeBtn8() {
  const mealDetail = document.getElementById('eight-meal-detail');
  mealDetail.style.display = 'none';
}



function closeBtn9() {
  const mealDetail = document.getElementById('nine-meal-detail');
  mealDetail.style.display = 'none';
}



function closeBtn10() {
  const mealDetail = document.getElementById('ten-meal-detail');
  mealDetail.style.display = 'none';
}


function closeBtn11() {
  const mealDetail = document.getElementById('eleven-meal-detail');
  mealDetail.style.display = 'none';
}

function closeBtn12() {
  const mealDetail = document.getElementById('twelve-meal-detail');
  mealDetail.style.display = 'none';
}
