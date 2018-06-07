//-HOMEPAGE-------------------------------------------------------------------------------------------------------------
var getBody = document.querySelector('body');
var home = "<audio autoplay><source src='audio/oumouSangare.mp3' type='audio/mp3'/></audio>";
    home += "<div class='Content'>";
    home += "<header class='Header'>";
    home += "<div class='HeaderLeft'></div>";
    home += "<div class='HeaderRight'>";
    home += "<div class='OvalNumber'>";
        home += content[0].counter;
        home += "</div>";
    home += "</div>";
    home += "</header>";
    home += "<div class='MiddleContent'>";
    home += "<h1 class='MiddleTitle'>";
        home += content[0].title;
        home += "</h1>";
    home += "<p class='MiddleBaseline'>";
        home += content[0].baseline;
        home += "</p>";
    home += "<a href='#'><button class='Button StartNow animated bounceIn' type='button' name='button'>Start Now</button></a>";
    home += "</div>";
    home += "<footer class='Footer'>";
    home += "<div class='FooterLeft'><div class='Play'><div class='la-line-scale'><div></div><div></div><div></div><div></div><div></div></div></div></div>";
    home += "<div class='FooterRight'><p class='Author'><strong>Hetic JS Project</strong><br /> José Teixeira & Mathieu Blok<br /> Photos Credits @auremorvan</p></div>";
    home += "</footer></div>";
    home += "<div class='Responsive'><p class='ResponsiveTxt'>Flip your screen for better experience !</p></div>";
getBody.innerHTML = home;
var startNow = document.querySelector('.StartNow');
startNow.addEventListener('click', function () {
    getBody.innerHTML = ' ';
    GetIntroduction();
});

//-INTRODUCTION---------------------------------------------------------------------------------------------------------
function GetIntroduction() {
var intro = "<audio autoplay><source src='audio/oumouSangare.mp3' type='audio/mp3'/></audio>";
intro += "<div class='ContentIntro'>";
    intro += "<header class='Header'>";
    intro += "<div class='HeaderLeft'></div>";
    intro += "<div class='HeaderRight'>";
    intro += "<div class='OvalNumber'>";
        intro += content[1].counter;
        intro += "</div>";
    intro += "</div>";
    intro += "</header>";
    intro += "<div class='MiddleContent'>";
    intro += "<h1 class='MiddleTitle'>";
        intro += content[1].title;
        intro += "</h1>";
    intro += "<p class='MiddleBaselineIntro'>";
        intro += content[1].baseline;
        intro += "</p>";
    intro += "<div class='ArrowIntro'>";
    intro += "<a href='#'><img class='Next' style='Arrow' src='img/arrow.svg' alt='Arrow Link'/></a>";
    intro += "</div></div>";
    intro += "<footer class='Footer'>";
    intro += "<div class='FooterLeft'><div class='Play'><div class='la-line-scale'><div></div><div></div><div></div><div></div><div></div></div></div></div>";
    intro += "<div class='FooterRight'><p class='Author'><strong>Hetic JS Project</strong><br /> José Teixeira & Mathieu Blok<br /> Photos Credits @auremorvan</p></div>";
    intro += "</footer></div>";
    intro += "<div class='Responsive'><p class='ResponsiveTxt'>Flip your screen for better experience !</p></div>";
getBody.innerHTML = intro;
var next = document.querySelector('.Next');
    next.addEventListener('click', function () {
        getBody.innerHTML = ' ';
        GetQuestion();
    });
}

//-QUESTION-------------------------------------------------------------------------------------------------------------
function GetQuestion() {
var question = "<div class='ContentIntro'>";
    question += "<header class='Header'>";
    question += "<div class='HeaderLeft'></div>";
    question += "<div class='HeaderRight'>";
    question += "<div class='OvalNumber'>";
        question += content[2].counter;
        question += "</div>";
    question += "</div>";
    question += "</header>";
    question += "<div class='MiddleContent'>";
    question += "<h1 class='MiddleTitle'>";
        question += content[2].title;
        question += "</h1>";
    question += "<p class='MiddleBaseline'>";
        question += content[2].baseline;
        question += "</p>";
    question += "<div class='ButtonAnswer'>";
        question += "<a href='#'><button class='Button Answer Market animated bounceIn' type='button' name='button'>";
        question += content[2].button1;
        question += "</button></a>";
        question += "<a href='#'><button class='Button Answer Laguna animated bounceIn' type='button' name='button'>";
        question += content[2].button2;
        question += "</button></a>";
    question += "</div></div>";
    question += "<footer class='Footer'>";
    question += "<div class='FooterLeft'><div class='Play'><div class='la-line-scale'><div></div><div></div><div></div><div></div><div></div></div></div></div>";
    question += "<div class='FooterRight'><p class='Author'><strong>Hetic JS Project</strong><br /> José Teixeira & Mathieu Blok<br /> Photos Credits @auremorvan</p></div>";
    question += "</footer></div>";
    question += "<div class='Responsive'><p class='ResponsiveTxt'>Flip your screen for better experience !</p></div>";
getBody.innerHTML = question;
var market = document.querySelector('.Market');
    market.addEventListener('click', function () {
        getBody.innerHTML = ' ';
        GetMarket();
    });
var laguna = document.querySelector('.Laguna');
    laguna.addEventListener('click', function () {
        getBody.innerHTML = ' ';
        GetLaguna();
    });
}

//-MARKET---------------------------------------------------------------------------------------------------------------
function GetMarket() {
var market = "<div class='Content'>";
    market += "<header class='HeaderAnswer'>";
    market += "<div class='HeaderLeft'></div>";
    market += "<div class='HeaderRight'>";
    market += "<div class='OvalNumberMarket'>";
        market += content[3].counter;
        market += "</div>";
    market += "</div>";
    market += "</header>";
    market += "<div class='MiddleContentAnswer'>";
    market += "<div class='MiddleLeft'></div>";
    market += "<div class='MiddleRight'>";
    market += "<h1 class='MiddleTitleAnswer'>";
        market += content[3].title;
        market += "</h1>";
    market += "<p class='MiddleBaselineAnswer'>";
        market += content[3].baseline;
        market += "</p>";
    market += "<div class='Arrow'>";
    market += "<a href='#'><img class='Next2' style='Arrow' src='img/arrow.svg' alt='Arrow Link'/></a>";
    market += "</div></div></div>";
    market += "<footer class='FooterAnswer'>";
    market += "<div class='FooterLeft'>";
    market += "<div class='Play'>";
    market += "<div class='la-line-scale'><div></div><div></div><div></div><div></div><div></div></div></div></div>";
    market += "<div class='FooterRight'>";
    market += "<p class='AuthorAnswer'><strong>Hetic JS Project</strong><br /> José Teixeira & Mathieu Blok<br /> Photos Credits @auremorvan</p></div>";
    market += "</footer></div>";
    market += "<div class='Responsive'><p class='ResponsiveTxt'>Flip your screen for better experience !</p></div>";
getBody.innerHTML = market;
var next2 = document.querySelector('.Next2');
    next2.addEventListener('click', function () {
        getBody.innerHTML = ' ';
        GetMarketQuestion();
    });
}

//-MARKET QUESTION------------------------------------------------------------------------------------------------------
function GetMarketQuestion() {
var marketQuestion = "<div class='ContentIntro'>";
    marketQuestion += "<header class='Header'>";
    marketQuestion += "<div class='HeaderLeft'></div>";
    marketQuestion += "<div class='HeaderRight'>";
    marketQuestion += "<div class='OvalNumber'>";
        marketQuestion += content[4].counter;
        marketQuestion += "</div>";
    marketQuestion += "</div>";
    marketQuestion += "</header>";
    marketQuestion += "<div class='MiddleContent'>";
    marketQuestion += "<h1 class='MiddleTitle'>";
        marketQuestion += content[4].title;
        marketQuestion += "</h1>";
    marketQuestion += "<p class='MiddleBaseline'>";
        marketQuestion += content[4].baseline;
        marketQuestion += "</p>";
    marketQuestion += "<div class='ButtonAnswer'>";
        marketQuestion += "<a href='#'><button class='Button Answer Yes animated bounceIn' type='button' name='button'>";
        marketQuestion += content[4].button1;
        marketQuestion += "</button></a>";
        marketQuestion += "<a href='#'><button class='Button Answer No animated bounceIn' type='button' name='button'>";
        marketQuestion += content[4].button2;
        marketQuestion += "</button></a>";
    marketQuestion += "</div></div>";
    marketQuestion += "<footer class='Footer'>";
    marketQuestion += "<div class='FooterLeft'><div class='Play'><div class='la-line-scale'><div></div><div></div><div></div><div></div><div></div></div></div></div>";
    marketQuestion += "<div class='FooterRight'><p class='Author'><strong>Hetic JS Project</strong><br /> José Teixeira & Mathieu Blok<br /> Photos Credits @auremorvan</p></div>";
    marketQuestion += "</footer></div>";
    marketQuestion += "<div class='Responsive'><p class='ResponsiveTxt'>Flip your screen for better experience !</p></div>";
getBody.innerHTML = marketQuestion;
var yes = document.querySelector('.Yes');
    yes.addEventListener('click', function () {
        getBody.innerHTML = ' ';
        GetMarketYes();
    });
var no = document.querySelector('.No');
    no.addEventListener('click', function () {
        getBody.innerHTML = ' ';
        GetMarketNo();
    });
}

//-MARKET YES-----------------------------------------------------------------------------------------------------------
function GetMarketYes() {
var marketYes = "<div class='Content'>";
    marketYes += "<header class='HeaderAnswer'>";
    marketYes += "<div class='HeaderLeft'></div>";
    marketYes += "<div class='HeaderRight'>";
    marketYes += "<div class='OvalNumberMarket'>";
        marketYes += content[5].counter;
        marketYes += "</div>";
    marketYes += "</div>";
    marketYes += "</header>";
    marketYes += "<div class='MiddleContentAnswer'>";
    marketYes += "<div class='MiddleLeftYes'></div>";
    marketYes += "<div class='MiddleRight'>";
    marketYes += "<h1 class='MiddleTitleAnswer'>";
        marketYes += content[5].title;
        marketYes += "</h1>";
    marketYes += "<p class='MiddleBaselineAnswer'>";
        marketYes += content[5].baseline;
        marketYes += "</p>";
    marketYes += "<div class='Arrow'>";
    marketYes += "<p class='End'>The End</p>";
    marketYes += "</div></div></div>";
    marketYes += "<footer class='FooterAnswer'>";
    marketYes += "<div class='FooterLeft'>";
    marketYes += "<div class='Play'>";
    marketYes += "<div class='la-line-scale'><div></div><div></div><div></div><div></div><div></div></div></div></div>";
    marketYes += "<div class='FooterRight'>";
    marketYes += "<p class='AuthorAnswer'><strong>Hetic JS Project</strong><br /> José Teixeira & Mathieu Blok<br /> Photos Credits @auremorvan</p></div>";
    marketYes += "</footer></div>";
    marketYes += "<div class='Responsive'><p class='ResponsiveTxt'>Flip your screen for better experience !</p></div>";
    getBody.innerHTML = marketYes;
}

//-MARKET NO------------------------------------------------------------------------------------------------------------
function GetMarketNo() {
var marketNo = "<div class='Content'>";
    marketNo += "<header class='HeaderAnswer'>";
    marketNo += "<div class='HeaderLeft'></div>";
    marketNo += "<div class='HeaderRight'>";
    marketNo += "<div class='OvalNumberMarket'>";
        marketNo += content[6].counter;
        marketNo += "</div>";
    marketNo += "</div>";
    marketNo += "</header>";
    marketNo += "<div class='MiddleContentAnswer'>";
    marketNo += "<div class='MiddleLeftNo'></div>";
    marketNo += "<div class='MiddleRight'>";
    marketNo += "<h1 class='MiddleTitleAnswer'>";
        marketNo += content[6].title;
        marketNo += "</h1>";
    marketNo += "<p class='MiddleBaselineAnswer'>";
        marketNo += content[6].baseline;
        marketNo += "</p>";
    marketNo += "<div class='Arrow'>";
    marketNo += "<p class='End'>The End</p>";
    marketNo += "</div></div></div>";
    marketNo += "<footer class='FooterAnswer'>";
    marketNo += "<div class='FooterLeft'>";
    marketNo += "<div class='Play'>";
    marketNo += "<div class='la-line-scale'><div></div><div></div><div></div><div></div><div></div></div></div></div>";
    marketNo += "<div class='FooterRight'>";
    marketNo += "<p class='AuthorAnswer'><strong>Hetic JS Project</strong><br /> José Teixeira & Mathieu Blok<br /> Photos Credits @auremorvan</p></div>";
    marketNo += "</footer></div>";
    marketNo += "<div class='Responsive'><p class='ResponsiveTxt'>Flip your screen for better experience !</p></div>";
    getBody.innerHTML = marketNo;
}

//-LAGUNA---------------------------------------------------------------------------------------------------------------
function GetLaguna() {
var laguna = "<div class='Content'>";
    laguna += "<header class='HeaderAnswer'>";
    laguna += "<div class='HeaderLeft'></div>";
    laguna += "<div class='HeaderRight'>";
    laguna += "<div class='OvalNumberMarket'>";
        laguna += content[7].counter;
        laguna += "</div>";
    laguna += "</div>";
    laguna += "</header>";
    laguna += "<div class='MiddleContentAnswer'>";
    laguna += "<div class='MiddleLeftHarbour'></div>";
    laguna += "<div class='MiddleRight'>";
    laguna += "<h1 class='MiddleTitleAnswer'>";
        laguna += content[7].title;
        laguna += "</h1>";
    laguna += "<p class='MiddleBaselineAnswer'>";
        laguna += content[7].baseline;
        laguna += "</p>";
    laguna += "<div class='Arrow'>";
    laguna += "<a href='#'><img class='Next3' style='Arrow' src='img/arrow.svg' alt='Arrow Link'/></a>";
    laguna += "</div></div></div>";
    laguna += "<footer class='FooterAnswer'>";
    laguna += "<div class='FooterLeft'>";
    laguna += "<div class='Play'>";
    laguna += "<div class='la-line-scale'><div></div><div></div><div></div><div></div><div></div></div></div></div>";
    laguna += "<div class='FooterRight'>";
    laguna += "<p class='AuthorAnswer'><strong>Hetic JS Project</strong><br /> José Teixeira & Mathieu Blok<br /> Photos Credits @auremorvan</p></div>";
    laguna += "</footer></div>";
    laguna += "<div class='Responsive'><p class='ResponsiveTxt'>Flip your screen for better experience !</p></div>";
getBody.innerHTML = laguna;
var next3 = document.querySelector('.Next3');
    next3.addEventListener('click', function () {
        getBody.innerHTML = ' ';
        GetLagunaQuestion();
    });
}

//-LAGUNA QUESTION------------------------------------------------------------------------------------------------------
function GetLagunaQuestion() {
var lagunaQuestion = "<div class='ContentIntro'>";
    lagunaQuestion += "<header class='Header'>";
    lagunaQuestion += "<div class='HeaderLeft'></div>";
    lagunaQuestion += "<div class='HeaderRight'>";
    lagunaQuestion += "<div class='OvalNumber'>";
        lagunaQuestion += content[8].counter;
        lagunaQuestion += "</div>";
    lagunaQuestion += "</div>";
    lagunaQuestion += "</header>";
    lagunaQuestion += "<div class='MiddleContent'>";
    lagunaQuestion += "<h1 class='MiddleTitle'>";
        lagunaQuestion += content[8].title;
        lagunaQuestion += "</h1>";
    lagunaQuestion += "<p class='MiddleBaseline'>";
        lagunaQuestion += content[8].baseline;
        lagunaQuestion += "</p>";
    lagunaQuestion += "<div class='ButtonAnswer'>";
        lagunaQuestion += "<a href='#'><button class='Button Answer Agree' type='button' name='button'>";
        lagunaQuestion += content[8].button1;
        lagunaQuestion += "</button></a>";
        lagunaQuestion += "<a href='#'><button class='Button Answer Disagree' type='button' name='button'>";
        lagunaQuestion += content[8].button2;
        lagunaQuestion += "</button></a>";
    lagunaQuestion += "</div></div>";
    lagunaQuestion += "<footer class='Footer'>";
    lagunaQuestion += "<div class='FooterLeft'><div class='Play'><div class='la-line-scale'><div></div><div></div><div></div><div></div><div></div></div></div></div>";
    lagunaQuestion += "<div class='FooterRight'><p class='Author'><strong>Hetic JS Project</strong><br /> José Teixeira & Mathieu Blok<br /> Photos Credits @auremorvan</p></div>";
    lagunaQuestion += "</footer></div>";
    lagunaQuestion += "<div class='Responsive'><p class='ResponsiveTxt'>Flip your screen for better experience !</p></div>";
getBody.innerHTML = lagunaQuestion;
var agree = document.querySelector('.Agree');
    agree.addEventListener('click', function () {
        getBody.innerHTML = ' ';
        GetLagunaAgree();
    });
var disagree = document.querySelector('.Disagree');
    disagree.addEventListener('click', function () {
        getBody.innerHTML = ' ';
        GetLagunaDisagree();
    });
}

//-LAGUNA AGREE---------------------------------------------------------------------------------------------------------
function GetLagunaAgree() {
var lagunaAgree = "<div class='Content'>";
    lagunaAgree += "<header class='HeaderAnswer'>";
    lagunaAgree += "<div class='HeaderLeft'></div>";
    lagunaAgree += "<div class='HeaderRight'>";
    lagunaAgree += "<div class='OvalNumberMarket'>";
        lagunaAgree += content[9].counter;
        lagunaAgree += "</div>";
    lagunaAgree += "</div>";
    lagunaAgree += "</header>";
    lagunaAgree += "<div class='MiddleContentAnswer'>";
    lagunaAgree += "<div class='MiddleLeftAgree'></div>";
    lagunaAgree += "<div class='MiddleRight'>";
    lagunaAgree += "<h1 class='MiddleTitleAnswer'>";
        lagunaAgree += content[9].title;
        lagunaAgree += "</h1>";
    lagunaAgree += "<p class='MiddleBaselineAnswer'>";
        lagunaAgree += content[9].baseline;
        lagunaAgree += "</p>";
    lagunaAgree += "<div class='Arrow'>";
    lagunaAgree += "<p class='End'>The End</p>";
    lagunaAgree += "</div></div></div>";
    lagunaAgree += "<footer class='FooterAnswer'>";
    lagunaAgree += "<div class='FooterLeft'>";
    lagunaAgree += "<div class='Play'>";
    lagunaAgree += "<div class='la-line-scale'><div></div><div></div><div></div><div></div><div></div></div></div></div>";
    lagunaAgree += "<div class='FooterRight'>";
    lagunaAgree += "<p class='AuthorAnswer'><strong>Hetic JS Project</strong><br /> José Teixeira & Mathieu Blok<br /> Photos Credits @auremorvan</p></div>";
    lagunaAgree += "</footer></div>";
    lagunaAgree += "<div class='Responsive'><p class='ResponsiveTxt'>Flip your screen for better experience !</p></div>";
    getBody.innerHTML = lagunaAgree;
}

//-LAGUNA DISAGREE------------------------------------------------------------------------------------------------------
function GetLagunaDisagree() {

var lagunaDisagree = "<div class='Content'>";
    lagunaDisagree += "<header class='HeaderAnswer'>";
    lagunaDisagree += "<div class='HeaderLeft'></div>";
    lagunaDisagree += "<div class='HeaderRight'>";
    lagunaDisagree += "<div class='OvalNumberMarket'>";
        lagunaDisagree += content[6].counter;
        lagunaDisagree += "</div>";
    lagunaDisagree += "</div>";
    lagunaDisagree += "</header>";
    lagunaDisagree += "<div class='MiddleContentAnswer'>";
    lagunaDisagree += "<div class='MiddleLeftDisagree'></div>";
    lagunaDisagree += "<div class='MiddleRight'>";
    lagunaDisagree += "<h1 class='MiddleTitleAnswer'>";
        lagunaDisagree += content[6].title;
        lagunaDisagree += "</h1>";
    lagunaDisagree += "<p class='MiddleBaselineAnswer'>";
        lagunaDisagree += content[6].baseline;
        lagunaDisagree += "</p>";
    lagunaDisagree += "<div class='Arrow'>";
    lagunaDisagree += "<p class='End'>The End</p>";
    lagunaDisagree += "</div></div></div>";
    lagunaDisagree += "<footer class='FooterAnswer'>";
    lagunaDisagree += "<div class='FooterLeft'>";
    lagunaDisagree += "<div class='Play'>";
    lagunaDisagree += "<div class='la-line-scale'><div></div><div></div><div></div><div></div><div></div></div></div></div>";
    lagunaDisagree += "<div class='FooterRight'>";
    lagunaDisagree += "<p class='AuthorAnswer'><strong>Hetic JS Project</strong><br /> José Teixeira & Mathieu Blok<br /> Photos Credits @auremorvan</p></div>";
    lagunaDisagree += "</footer></div>";
    lagunaDisagree += "<div class='Responsive'><p class='ResponsiveTxt'>Flip your screen for better experience !</p></div>";
    getBody.innerHTML = lagunaDisagree;
}

