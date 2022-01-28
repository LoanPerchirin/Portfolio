
let changeAccueil = 0;
let changePortfolio = 0;
let changeApropos = 0;

function showProjects(){

    console.log("Montre les projets")

    document.querySelector('#titre_changeant').replaceChildren("Projets");

    document.querySelector('#bouton_portfolio2').style.backgroundColor = 'rgb(240, 130, 130)';
    document.querySelector('#bouton_portfolio2').style.color = 'black';

    document.querySelector('#bouton_portfolio1').style.backgroundColor = 'red';
    document.querySelector('#bouton_portfolio1').style.color = 'white';

    document.querySelector('#case1').style.display = 'inherit';
    document.querySelector('#titre1').replaceChildren("CV en ligne");
    document.querySelector('#case1').style.background="url('Images/jeux/slider1.png')"; 
    document.querySelector('#lien1').href ="https://qkryzzljekzele4jpr7w0g-on.drv.tw/CVEnLigne/CVLoanPerchirin/CVP.html";

    document.querySelector('#case2').style.display = 'inherit';
    document.querySelector('#titre2').replaceChildren("Restructuration Web");
    document.querySelector('#case2').style.background="url('Images/jeux/restructurationWeb.png')"; 
    document.querySelector('#lien2').href ="https://qkryzzljekzele4jpr7w0g-on.drv.tw/Projet dév. Web/Projet-restructuration-Web/";
  
    document.querySelector('#case3').style.display = 'none';

    document.querySelector('#case4').style.display = 'none';

     
}

function showGames(){
    console.log("Montre les Jeux")

    document.querySelector('#titre_changeant').replaceChildren("Jeux");


    document.querySelector('#bouton_portfolio1').style.backgroundColor = 'rgb(240, 130, 130)';
    document.querySelector('#bouton_portfolio1').style.color = 'black';

    document.querySelector('#bouton_portfolio2').style.backgroundColor = 'red';
    document.querySelector('#bouton_portfolio2').style.color = 'white';

    document.querySelector('#case1').style.display = 'inherit';
    document.querySelector('#titre1').replaceChildren("David Clicker");
    document.querySelector('#case1').style.background="url('Images/jeux/DavidClicker.png')"; 
    document.querySelector('#lien1').href ="https://qkryzzljekzele4jpr7w0g-on.drv.tw/DavidClicker3/Clicker/";

    document.querySelector('#case2').style.display = 'inherit';
    document.querySelector('#titre2').replaceChildren("Jeu du nombre HTML,CSS,JS");
    document.querySelector('#case2').style.background="url('Images/jeux/lefeve.png')"; 
    document.querySelector('#lien2').href ="https://qkryzzljekzele4jpr7w0g-on.drv.tw/JeuDuNombre/JeuDuNombre2/";

    document.querySelector('#case3').style.display = 'inherit';
    document.querySelector('#titre3').replaceChildren("Jeu du nombre C");
    document.querySelector('#case3').style.background="url('Images/jeux/jeuDuNombreC.png')"; 
    document.querySelector('#lien3').href ="https://gitlab.com/te1761/test";

    document.querySelector('#case4').style.display = 'inherit';
    document.querySelector('#titre4').replaceChildren("Jeu du Memory");
    document.querySelector('#case4').style.background="url('Images/jeux/Memory.png')"; 
    document.querySelector('#lien4').href ="https://qkryzzljekzele4jpr7w0g-on.drv.tw/Mémory/";
}




function switchThemeIndex(){

    changeAccueil ++;

    if(changeAccueil %2 == 1)
    {
        document.querySelector('body').style.backgroundColor = 'white';
        document.querySelector('body').style.color = 'black';

        document.getElementById('theme-switch').src="Images/rondBlanc.png";

        document.getElementById('LogoIAccueil').src="Images/Logos/LogoInstagram.png";
        document.getElementById('LogoLAccueil').src="Images/Logos/LogoLinkedin.png";
        document.getElementById('LogoGAccueil').src="Images/Logos/LogoGithubPNG.png";

        document.getElementById('LogoIIndex').src="Images/Logos/LogoInstagram.png";
        document.getElementById('LogoLIndex').src="Images/Logos/LogoLinkedin.png";
        document.getElementById('LogoGIndex').src="Images/Logos/LogoGithubPNG.png";


    }

    else{
        document.querySelector('body').style.backgroundColor = 'black';
        document.querySelector('body').style.color = 'white';

        document.getElementById('theme-switch').src="Images/rondNoir.png";

        document.getElementById('LogoIAccueil').src="Images/Logos/LogoInstagramBlanc.png";
        document.getElementById('LogoLAccueil').src="Images/Logos/LogoLinkedinBlanc.png";
        document.getElementById('LogoGAccueil').src="Images/Logos/LogoGithub.png";

        document.getElementById('LogoIIndex').src="Images/Logos/LogoInstagramBlanc.png";
        document.getElementById('LogoLIndex').src="Images/Logos/LogoLinkedinBlanc.png";
        document.getElementById('LogoGIndex').src="Images/Logos/LogoGithub.png";
    }

}


function switchThemePortfolio(){

    changePortfolio ++;

    if(changePortfolio %2 == 1)
    {

    document.querySelector('body').style.backgroundColor = 'white';
    document.querySelector('body').style.color = 'black';

    document.getElementById('theme-switch').src="Images/rondBlanc.png";

    document.getElementById('LogoIPortfolio').src="Images/Logos/LogoInstagram.png";
    document.getElementById('LogoLPortfolio').src="Images/Logos/LogoLinkedin.png";
    document.getElementById('LogoGPortfolio').src="Images/Logos/LogoGithubPNG.png";
    }

    else
    {
        document.querySelector('body').style.backgroundColor = 'black';
        document.querySelector('body').style.color = 'white';

        document.getElementById('theme-switch').src="Images/rondNoir.png";

        document.getElementById('LogoIPortfolio').src="Images/Logos/LogoInstagramBlanc.png";
        document.getElementById('LogoLPortfolio').src="Images/Logos/LogoLinkedinBlanc.png";
        document.getElementById('LogoGPortfolio').src="Images/Logos/LogoGithub.png";

    }    
}

function switchThemeApropos(){

    changeApropos ++;

    if(changeApropos %2 == 1)
    {
    document.querySelector('body').style.backgroundColor = 'white';
    document.querySelector('body').style.color = 'black';

    document.getElementById('theme-switch').src="Images/rondBlanc.png";

    document.getElementById('LogoIApropos').src="Images/Logos/LogoInstagram.png";
    document.getElementById('LogoLApropos').src="Images/Logos/LogoLinkedin.png";
    document.getElementById('LogoGApropos').src="Images/Logos/LogoGithubPNG.png";
    }

    else
    {
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('body').style.color = 'white';

    document.getElementById('theme-switch').src="Images/rondNoir.png";

    document.getElementById('LogoIApropos').src="Images/Logos/LogoInstagramBlanc.png";
    document.getElementById('LogoLApropos').src="Images/Logos/LogoLinkedinBlanc.png";
    document.getElementById('LogoGApropos').src="Images/Logos/LogoGithub.png";
    }
}
