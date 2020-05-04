document.getElementById("choose-b").addEventListener("mouseover", function(){
  document.getElementById("choose-b").style.opacity = 1;
  document.getElementById("choose-c").style.opacity = .5;
  document.getElementById("choose-a").style.opacity = .5;
})

document.getElementById("choose-c").addEventListener("mouseover", function(){
  document.getElementById("choose-b").style.opacity = .5;
  document.getElementById("choose-c").style.opacity = 1;
  document.getElementById("choose-a").style.opacity = .5;
})

document.getElementById("choose-a").addEventListener("mouseover", function(){
  document.getElementById("choose-b").style.opacity = .5;
  document.getElementById("choose-c").style.opacity = .5;
  document.getElementById("choose-a").style.opacity = 1;
})

document.getElementById("choose-b").addEventListener("click", function(){
  document.getElementById("choose-text-b").style.opacity = 1;
})

document.getElementById("choose-c").addEventListener("click", function(){
  document.getElementById("choose-text-c").style.opacity = 1;
})

document.getElementById("choose-a").addEventListener("click", function(){
  document.getElementById("choose-text-a").style.opacity = 1;
})