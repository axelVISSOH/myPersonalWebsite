//Computer-Science Section
//LANGUANGES
  const buttonC = document.getElementById('c');
  var progressBarL = document.getElementById('progressionLanguage');
  buttonC.addEventListener('click', function c(event) {
    progressBarL.style.width = "70%";
    progressBarL.style.backgroundColor = "#150350";
    progressBarL.textContent = "C: 70%";
    event.preventDefault();
  });
  const buttonJ = document.getElementById('java');
  buttonJ.addEventListener('click', function j(event) {
    progressBarL.style.width = "75%";
    progressBarL.style.backgroundColor = "#d81a2a";
    progressBarL.textContent = "JAVA: 75%";
    event.preventDefault();
  });
  const buttonP = document.getElementById('python');
  buttonP.addEventListener('click', function p(event) {
    progressBarL.style.width = "40%";
    progressBarL.style.backgroundColor = "#2279d1";
    progressBarL.textContent = "PYTHON: 40%";
    event.preventDefault();
  });
  const buttonJEE = document.getElementById('javaee');
  buttonJEE.addEventListener('click', function jee(event) {
    progressBarL.style.width = "50%";
    progressBarL.style.backgroundColor = "#dd0b0b";
    progressBarL.textContent = "JAVAEE: 50%";
    event.preventDefault();
  });  
  const buttonH = document.getElementById('html5');
  buttonH.addEventListener('click', function h(event) {
    progressBarL.style.width = "65%";
    progressBarL.style.backgroundColor = "#d65b13";
    progressBarL.textContent = "HTML5: 65%";
    event.preventDefault();
  });
  const buttonCS = document.getElementById('css3');
  buttonCS.addEventListener('click', function css(event) {
    progressBarL.style.width = "45%";
    progressBarL.style.backgroundColor = "#0c20d8";
    progressBarL.textContent = "CSS3: 45%";
    event.preventDefault();
  }); 
  const buttonJS = document.getElementById('js');
  buttonJS.addEventListener('click', function js(event) {
    progressBarL.style.width = "30%";
    progressBarL.style.backgroundColor = "#b3d613";
    progressBarL.textContent = "JS: 30%";
    event.preventDefault();
  });
  const buttonPH = document.getElementById('php');
  buttonPH.addEventListener('click', function php(event) {
    progressBarL.style.width = "55%";
    progressBarL.style.backgroundColor = "#033461";
    progressBarL.textContent = "PHP: 55%";
    event.preventDefault();
  });

//DATABASE
const buttonS = document.getElementById('sql');
var progressBarD = document.getElementById('progressionDatabase');
buttonS.addEventListener('click', function sql(event) {
    progressBarD.style.width = "60%";
    progressBarD.style.backgroundColor = "#0c20d8";
    progressBarD.textContent = "SQL: 60%";
    event.preventDefault();
});
const buttonSD = document.getElementById('sqld');
buttonSD.addEventListener('click', function sqld(event) {
    progressBarD.style.width = "70%";
    progressBarD.style.backgroundColor = "#b3d613";
    progressBarD.textContent = "SQLDEV: 70%";
    event.preventDefault();
});
const buttonO = document.getElementById('oracle');
buttonO.addEventListener('click', function oracle(event) {
    progressBarD.style.width = "50%";
    progressBarD.style.backgroundColor = "#d81a2a";
    progressBarD.textContent = "ORACLE: 50%";
    event.preventDefault();
});
const buttonPMA = document.getElementById('pma');
buttonPMA.addEventListener('click', function pma(event) {
    progressBarD.style.width = "65%";
    progressBarD.style.backgroundColor = "#d65b13";
    progressBarD.textContent = "PMA: 65%";
    event.preventDefault();
});
//TECHNOLOGIES
const buttonG = document.getElementById('git');
var progressBarT = document.getElementById('progressionTechnologies');
buttonG.addEventListener('click', function h(event) {
    progressBarT.style.width = "75%";
    progressBarT.style.backgroundColor = "#b3d613";
    progressBarT.textContent = "GIT: 75%";
    event.preventDefault();
});
const buttonJENK = document.getElementById('jenkins');
buttonJENK.addEventListener('click', function jenkins(event) {
    progressBarT.style.width = "40%";
    progressBarT.style.backgroundColor = "#0c20d8";
    progressBarT.textContent = "JENKINS: 40%";
    event.preventDefault();
});
const buttonJU = document.getElementById('junit');
buttonJU.addEventListener('click', function junit(event) {
    progressBarT.style.width = "50%";
    progressBarT.style.backgroundColor = "#d81a2a";
    progressBarT.textContent = "JUNIT5: 50%";
    event.preventDefault();
});
const buttonM = document.getElementById('maven');
buttonM.addEventListener('click', function maven(event) {
    progressBarT.style.width = "40%";
    progressBarT.style.backgroundColor = "#d65b13";
    progressBarT.textContent = "MAVEN: 40%";
    event.preventDefault();
});
//SOFTWARE
const buttonCODE = document.getElementById('code');
var progressBarS = document.getElementById('progressionSoftware');
buttonCODE.addEventListener('click', function code(event) {
    progressBarS.style.width = "70%";
    progressBarS.style.backgroundColor = "#d81a2a";
    progressBarS.textContent = "CODEBLOCKS: 70%";
    event.preventDefault();
});
const buttonE = document.getElementById('eclipse');
buttonE.addEventListener('click', function eclipse(event) {
    progressBarS.style.width = "80%";
    progressBarS.style.backgroundColor = "#150350";
    progressBarS.textContent = "ECLIPSE: 80%";
    event.preventDefault();
});
const buttonSP = document.getElementById('spyder');
buttonSP.addEventListener('click', function spyder(event) {
    progressBarS.style.width = "45%";
    progressBarS.style.backgroundColor = "#000";
    progressBarS.textContent = "SPYDER: 45%";
    event.preventDefault();
});
const buttonN = document.getElementById('note');
buttonN.addEventListener('click', function note(event) {
    progressBarS.style.width = "70%";
    progressBarS.style.backgroundColor = "green";
    progressBarS.textContent = "NOTEPAD++: 70%";
    event.preventDefault();
});
const buttonV = document.getElementById('visual');
buttonV.addEventListener('click', function visual(event) {
    progressBarS.style.width = "55%";
    progressBarS.style.backgroundColor = "#2279d1";
    progressBarS.textContent = "VISUAL STUDIO CODE: 55%";
    event.preventDefault();
});
const buttonW = document.getElementById('wamp');
buttonW.addEventListener('click', function wamp(event) {
    progressBarS.style.width = "60%";
    progressBarS.style.backgroundColor = "#d81aaf";
    progressBarS.textContent = "WAMP: 60%";
    event.preventDefault();
});
