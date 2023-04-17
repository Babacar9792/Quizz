let tabQuizz = [
    {
        question: "Qui est le president du senegal",
        reponses: ["Macky Sall", "Abdoulaye Wade", "Senghor", "Abdou Diouf"],
        rep: 'a'
    },
    {
        question: "Qui a gagné la ligue des champions l'année dernière",
        reponses: ["Real Madrid", "Liverpool", "Bayern Munich", "Man city"],
        rep: 'a'
    },
    {
        question: "Quel est le meilleur langage de progammation en 2022",
        reponses: ["C", "Python", "Java", "JavaScript"],
        rep: 'd'
    },
    {
        question: "Qui est le meilleur butteur de l'histoire de la ligue des champion",
        reponses: ["Messi", "CR7", "Benzema", "Zidane"],
        rep: 'b'
    }
]



let input = document.querySelectorAll("input");
let label = document.querySelectorAll("label");
let suivant = document.querySelector("#suivant");
let h3 = document.querySelector("h3");
const firstChild = document.querySelector(".first-child")
const secondChild = document.querySelector(".second-child");
const playAgain =  document.querySelector("#play-again");
const container = document.querySelector(".container");
const divError =  document.querySelector(".divError")
let j = 0;
let id;
let score = 0;
secondChild.style.display = "none";
// console.log(label)
// for (let i = 0; i < label.length; i++) {

//     label[i].textContent = tabQuizz[0].reponses[i];
// }
h3.textContent = tabQuizz[j].question;
delAllChecked(input);
loadQuizz(tabQuizz[j].reponses);

suivant.addEventListener("click", () => {

    if(numberChecked(input) === 0)
    {
        
        error("Veuiller choisir un réponse",divError,"red")
    }
    else 
    {

        j++;
        if (j === tabQuizz.length) { 
            firstChild.style.display= "none";
            secondChild.style.display = "flex";
            container.style.border = "none"
            let span = document.querySelector(".second-child h2 span");
            span.textContent = score + "/" + tabQuizz.length;
            error("Merci d'avoir jouer au quizz",divError,"green");
        }
        else {
            h3.textContent = tabQuizz[j].question;
            delAllChecked(input);
            loadQuizz(tabQuizz[j].reponses);
            
          
        }
            
    }
})


playAgain.addEventListener("click",()=>{
    firstChild.style.display= "flex";
    secondChild.style.display = "none";
    container.style.border = "0.1em solid"
    score = 0;
    j=0;
    delAllChecked(input)
})
function loadQuizz(reponses) {

    for (let i = 0; i < label.length; i++) {

        label[i].textContent = reponses[i];
    }

}

function delAllChecked(tab) {

    tab.forEach(element => {
        if (element.checked) {
        
            element.checked = false
        }

    });
 
}
function numberChecked(tab) {
    let i=0;
    tab.forEach(element => {
        if (element.checked) {
        
           i++;
        }

    });
    return i;
 
}
input.forEach(element => {
    element.addEventListener("click", () => {
       
        delAllChecked(input);
        element.checked = true;
        id = element.id;
        if(id  == tabQuizz[j].rep){score++;}


    })

});


function error(text, div,color)
{
    div.textContent = text;
    div.style.backgroundColor = color;
    div.style.transform = "scaleY(100%)";
    setTimeout(() => {
        div.style.transform = "scaleY(0)";
    }, 2000);
}