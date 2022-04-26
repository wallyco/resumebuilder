let inputFullName;
let inputEmail;
let inputPhoneNumber;
let inputCity;
let inputState;
let inputZipCode;
let inputPortfolio;

let inputCompany0;
let inputCity0;
let inputState0;
let inputJobDescription0;
let inputWorkTimeBeginning0;
let inputWorkTimeEnd0;

let inputCompany1;
let inputCity1;
let inputState1;
let inputJobDescription1;
let inputWorkTimeBeginning1;
let inputWorkTimeEnd1;

let inputCompany2;
let inputCity2;
let inputState2;
let inputJobDescription2;
let inputWorkTimeBeginning2;
let inputWorkTimeEnd2;

let inputSchool;
let inputEducationTimeBeginning;
let inputEducationTimeEnd;
let inputDegree;
let inputSkill = [];
let inputAddress;

let buttonCreate = document.getElementById("buttonCreate");

function createResume(){
    populate();
    if(inputEmail != "")
        showWindow();
    else
        alert("Email address must be filled in");
}

function populate(){
    let skills = document.querySelectorAll("#inputSkill");
    for(let i = 0; i < skills.length; i++){
        if(skills[i].value != ""){
            inputSkill[i] = skills[i].value;
        }
    }
    inputFullName = document.getElementById("inputFullName").value;
    inputEmail = document.getElementById("inputEmail").value;
    inputPhoneNumber = document.getElementById("inputPhoneNumber").value;
    inputAddress = document.getElementById("inputAddress").value;
    inputCity = document.getElementById("inputCity").value;
    inputState = document.getElementById("inputState").value;
    inputZipCode = document.getElementById("inputZipCode").value;
    inputPortfolio = document.getElementById("inputPortfolio").value;
    
    inputCompany0 = document.getElementById("inputCompany0").value;
    inputCity0 = document.getElementById("inputCity0").value;
    inputState0 = document.getElementById("inputState0").value;
    inputJobDescription0 = document.getElementById("inputJobDescription0").value;
    inputWorkTimeBeginning0 = document.getElementById("inputWorkTimeBeginning0").value;
    inputWorkTimeEnd0 = document.getElementById("inputWorkTimeEnd0").value;

    inputCompany1 = document.getElementById("inputCompany1").value;
    inputCity1 = document.getElementById("inputCity1").value;
    inputState1 = document.getElementById("inputState1").value;
    inputJobDescription1 = document.getElementById("inputJobDescription1").value;
    inputWorkTimeBeginning1 = document.getElementById("inputWorkTimeBeginning1").value;
    inputWorkTimeEnd1 = document.getElementById("inputWorkTimeEnd1").value;

    inputCompany2 = document.getElementById("inputCompany2").value;
    inputCity2 = document.getElementById("inputCity2").value;
    inputState2 = document.getElementById("inputState2").value;
    inputJobDescription2 = document.getElementById("inputJobDescription2").value;
    inputWorkTimeBeginning2 = document.getElementById("inputWorkTimeBeginning2").value;
    inputWorkTimeEnd2 = document.getElementById("inputWorkTimeEnd2").value;

    inputSchool = document.getElementById("inputSchool").value;
    inputEducationTimeBeginning = document.getElementById("inputEducationTimeBeginning").value;
    inputEducationTimeEnd = document.getElementById("inputEducationTimeEnd").value;

    inputDegree = document.getElementById("inputDegree").value;
}

function showWindow(){
    let htmlDocString = "";
    htmlDocString += "<!DOCTYPE html>\n";
    htmlDocString += "<html lang=\"en\">\n";
    htmlDocString += "<head>\n";
    htmlDocString += "<meta charset=\"UTF-8\">\n";
    htmlDocString += "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n";
    htmlDocString += "<title>Resume</title>\n";
    htmlDocString += "<style>\n";
    htmlDocString += ".userInformation {\n";
    htmlDocString += "text-align: center;\n";
    htmlDocString += "}\n";
    htmlDocString += ".skillsAndAbility {\n";
    htmlDocString += "margin-left: 10%;\n";
    htmlDocString += "}\n";
    htmlDocString += ".education{\n";
    htmlDocString += "margin-left: 10%;\n";
    htmlDocString += "}\n";
    htmlDocString += ".workhistory{\n";
    htmlDocString += "margin-left: 10%;\n";
    htmlDocString += "}\n";
    htmlDocString += ".container{\n";
    htmlDocString += "margin-left: 25%;\n";
    htmlDocString += "margin-right: 25%;\n";
    htmlDocString += "background: #FAF9F6;\n";
    htmlDocString += "padding: 5%;\n";
    htmlDocString += "}\n";
    htmlDocString += "</style>\n";
    htmlDocString += "</head>\n";
    htmlDocString += "<body>\n";
    htmlDocString += "<div class=\"container\">\n";
    htmlDocString += "<div class=\"userInformation\">\n";
    htmlDocString += "<h1>"+ inputFullName +"</h1>\n";
    htmlDocString += "<p>"+ inputAddress + "</p>\n";
    htmlDocString += "<p>"+ inputCity + ", " + inputState + "</p>\n";
    htmlDocString += "<p>"+ inputPhoneNumber + "</p>\n";
    htmlDocString += "<p>"+ inputEmail +"</p>\n";
    htmlDocString += "<p>"+ inputPortfolio +"</p>\n";
    htmlDocString += "<h2>________________________________________________________</h2>\n";
    htmlDocString += "</div>\n";
    htmlDocString += "<div class=\"skillsAndAbility\">\n";
    htmlDocString += "<h2>Skills and Technical Ability</h2>\n";
    htmlDocString += "<ul>\n";
    for(let i = 0; i<inputSkill.length; i++){
        htmlDocString += "<li> "+ inputSkill[i] + "</li> \n"; 
    }
    htmlDocString += "</ul>\n";
    htmlDocString += "</div>\n";
    htmlDocString += "<br>\n";
    htmlDocString += "<div class=\"education\">\n";
    htmlDocString += "<h2>Education</h2>\n";
    htmlDocString += "<p>"+ inputSchool +"</p>\n";
    htmlDocString += "<p>"+ inputDegree +"</p>\n";
    htmlDocString += "<p>"+ inputEducationTimeBeginning + " - " + inputEducationTimeEnd + "</p>\n";
    htmlDocString += "</div>\n";
    htmlDocString += "<div class=\"userInformation\">\n";
    htmlDocString += "<h2>________________________________________________________</h2>\n";
    htmlDocString += "</div>\n";
    htmlDocString += "<div class=\"workhistory\">\n";
    htmlDocString += "<h2>Work History</h2>\n";
    htmlDocString += "<h3>"+ inputCompany0 +", "+ inputCity0 + ", " + inputState0 + "</h3>\n";
    htmlDocString += "<p>"+ inputWorkTimeBeginning0 + " - " + inputWorkTimeEnd0 + "</p>\n";
    htmlDocString += "<P>"+ inputJobDescription0 +"</p><br>\n";
    htmlDocString += "\n";
    htmlDocString += "<h3>"+ inputCompany1 +", "+ inputCity1 + ", " + inputState1 + "</h3>\n";
    htmlDocString += "<p>"+ inputWorkTimeBeginning1 + " - " + inputWorkTimeEnd1 + "</p>\n";
    htmlDocString += "<P>"+ inputJobDescription1 +"</p><br>\n";
    htmlDocString += "\n";
    htmlDocString += "<h3>"+ inputCompany2 +", "+ inputCity2 + ", " + inputState2 + "</h3>\n";
    htmlDocString += "<p>"+ inputWorkTimeBeginning2 + " - " + inputWorkTimeEnd2 + "</p>\n";
    htmlDocString += "<P>"+ inputJobDescription2 +"</p><br>\n";
    htmlDocString += "\n";
    htmlDocString += "</div>\n";
    htmlDocString += "</div>\n";
    htmlDocString += "</body>\n";
    htmlDocString += "</html>\n";
    
    flyWindow = window.open('about:blank','Resume','width='+ screen.width +',height='+ screen.height + ',left=200,top=200');
    flyWindow.document.write(htmlDocString);
}

buttonCreate.addEventListener("click", createResume);


