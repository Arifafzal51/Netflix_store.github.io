// const targetParent=document.querySelector('.qtwo');
// const target=document.querySelector('.a2');
// targetParent.addEventListener("click",myfunction);

// function myfunction(){
//     let i=1;
//     if(i==1)
//     {
//         target.style.display = "block";   
//         i=0;
//      }
//      else{
//         target.style.display = "none";
//         i=1;
//      }
    // if(target.style.display == "none")
    // {
    //     target.style.diplay = "block";

    // }
    // else{
    //     target.style.diplay = "none";
    // }



  //  const selectedDiv = document.querySelector('.question');
  //   const targetDiv = selectedDiv.

  //   targetDiv.addEventListener("click",newAnswer);

  //   function newAnswer(){
  //       if (window.getComputedStyle(targetDiv).display === "none") {
  //           targetDiv.style.display = "block";
  //         }
  //         else if (window.getComputedStyle(targetDiv).display === "block") {
  //           targetDiv.style.display = "none";
  //         }

  //   }


  const div = document.querySelectorAll('.question');
const signn=document.querySelectorAll('.question > .plus');
for(let i=0 ; i<div.length ; i++)
{


div[i].addEventListener('click',toggleAnswer);
signn[i].addEventListener('click',toggleAnswer2);
function toggleAnswer(e){
   const sign= e.target.children[0];

    if(sign.innerHTML == "+")
    sign.innerHTML = "x";
    else
    sign.innerHTML= "+";

    sign.style.fontFamily = "serif";
    // e.target.style.fontStyle = "bold";
    sign.style.fontSize = "44px";
    sign.style.top="9px";

   
    const target = e.target.nextElementSibling;

    if(target.style.display === "block")
    target.style.display = "none";
    else
    target.style.display = "block";

}
function toggleAnswer2(e)
{


    if(e.target.innerHTML == "+")
    e.target.innerHTML = "x";
    else
    e.target.innerHTML= "+";

    e.target.style.fontFamily = "serif";
    // e.target.style.fontStyle = "bold";
    e.target.style.fontSize = "44px";
    e.target.style.top="9px";
   
    const target = e.target.parentNode.nextElementSibling;
    if(target.style.display === "block")
    target.style.display = "none";
    else
    target.style.display = "block";

   
}
}
    


