let submitButton = document.querySelector(".button");
submitButton.addEventListener("click", buttonClicked);

function buttonClicked(){
    document.querySelector(".Adjective1").textContent = 
        document.querySelector(".Adjective1Input").value;


    document.querySelector(".Adjective2").textContent = 
        document.querySelector(".Adjective2Input").value;


    document.querySelector(".PluralNoun1").textContent = 
        document.querySelector(".PluralNoun1Input").value;


        document.querySelector(".Noun1").textContent = 
            document.querySelector(".Noun1Input").value;


        document.querySelector(".Verb1").textContent = 
            document.querySelector(".Verb1Input").value;


        document.querySelector(".Liquid1").textContent = 
            document.querySelector(".Liquid1Input").value;


        document.querySelector(".Food1").textContent = 
            document.querySelector(".Food1Input").value;


        document.querySelector(".Verbing1").textContent = 
            document.querySelector(".Verbing1Input").value;


        document.querySelector(".Bodypart1").textContent = 
            document.querySelector(".Bodypart1Input").value;


        document.querySelector(".Noun2").textContent = 
            document.querySelector(".Noun2Input").value;


            document.querySelector(".madlib").style.display = "block"
}