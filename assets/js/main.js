document.getElementById("choose-b").addEventListener("mouseover", function(){
  document.getElementById("choose-b").style.opacity = 1;
  document.getElementById("choose-c").style.opacity = .5;
  document.getElementById("choose-a").style.opacity = .5;
  document.getElementById("IndependentSoldat").style.opacity = .3;
  document.getElementById("CsatSoldat").style.opacity = .3;
  document.getElementById("NatoSoldat").style.opacity = 1;
})

document.getElementById("choose-c").addEventListener("mouseover", function(){
  document.getElementById("choose-b").style.opacity = .5;
  document.getElementById("choose-c").style.opacity = 1;
  document.getElementById("choose-a").style.opacity = .5;
  document.getElementById("IndependentSoldat").style.opacity = .3;
  document.getElementById("CsatSoldat").style.opacity = 1;
  document.getElementById("NatoSoldat").style.opacity = .3;
})

document.getElementById("choose-a").addEventListener("mouseover", function(){
  document.getElementById("choose-b").style.opacity = .5;
  document.getElementById("choose-c").style.opacity = .5;
  document.getElementById("choose-a").style.opacity = 1;
  document.getElementById("IndependentSoldat").style.opacity = 1;
  document.getElementById("CsatSoldat").style.opacity = .3;
  document.getElementById("NatoSoldat").style.opacity = .3;
})

document.getElementById("choose-b").addEventListener("click", function(){
  document.getElementById("choose-text-b").style.opacity = 1;
  document.getElementById("choose-c").style.display = "none";
  document.getElementById("choose-a").style.display = "none";
  document.getElementById("CsatSoldat").style.display = "none";
  document.getElementById("IndependentSoldat").style.display = "none";
  document.getElementById("backbutton").style.display = "inline-block";
})

document.getElementById("choose-c").addEventListener("click", function(){
  document.getElementById("choose-text-c").style.opacity = 1;
  document.getElementById("choose-b").style.display = "none";
  document.getElementById("choose-a").style.display = "none";
  document.getElementById("NatoSoldat").style.display = "none";
  document.getElementById("IndependentSoldat").style.display = "none";
  document.getElementById("backbutton").style.display = "inline-block";
})

document.getElementById("choose-a").addEventListener("click", function(){
  document.getElementById("choose-text-a").style.opacity = 1;
  document.getElementById("choose-c").style.display = "none";
  document.getElementById("choose-b").style.display = "none";
  document.getElementById("CsatSoldat").style.display = "none";
  document.getElementById("NatoSoldat").style.display = "none";
  document.getElementById("backbutton").style.display = "inline-block";
})

function backbutton(){
  document.getElementById("choose-c").style.display = "unset";
  document.getElementById("choose-b").style.display = "unset";
  document.getElementById("choose-a").style.display = "unset";
  document.getElementById("CsatSoldat").style.display = "unset";
  document.getElementById("NatoSoldat").style.display = "unset";
  document.getElementById("IndependentSoldat").style.display = "unset";
  document.getElementById("choose-text-a").style.opacity = 0;
  document.getElementById("choose-text-c").style.opacity = 0;
  document.getElementById("choose-text-b").style.opacity = 0;
  document.getElementById("backbutton").style.display = "none";
}