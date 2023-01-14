window.onload = function() {
    let suggestedLanguageForm = document.getElementById("suggestedLanguageForm");
    //console.log(suggestedLanguageForm);

    suggestedLanguageForm.addEventListener("submit", function(event) {

        event.preventDefault();
        console.log(document.getElementById("mlQuestion1Enthused").value);
        console.log(document.getElementById("mlQuestion1Enthused").checked);
        console.log(document.getElementById("mlQuestion1Disgusted").checked);

        

        const q1CheckedA = document.getElementById("mlQuestion1Enthused").checked;
        const q1CheckedB = document.getElementById("mlQuestion1Disgusted").checked;
        const q1CheckedC = document.getElementById("mlQuestion1Ambivalent").checked;
        const q2CheckedA = document.getElementById("mlQuestion2Enthused").checked;
        const q2CheckedB = document.getElementById("mlQuestion2Disgusted").checked;
        const q2CheckedC = document.getElementById("mlQuestion2Ambivalent").checked;
        const q3CheckedA = document.getElementById("illiterateQuestionIAgree").checked;
        const q3CheckedB = document.getElementById("illiterateQuestionIDisagree").checked;
        const q3CheckedC = document.getElementById("illiterateQuestionIDK").checked;
        const q4CheckedA = document.getElementById("trafficQuestion0").checked;
        const q4CheckedB = document.getElementById("trafficQuestion1").checked;
        const q4CheckedC = document.getElementById("trafficQuestion2").checked;
        const q5CheckedA = document.getElementById("rainyQuestionJogger").checked;
        const q5CheckedB = document.getElementById("rainyQuestionCocoa").checked;
        const q5CheckedC = document.getElementById("rainyQuestionQuestion").checked;
        const q6CheckedA = document.getElementById("sheepQuestionYes").checked;
        const q6CheckedB = document.getElementById("sheepQuestionNo").checked;
        const q6CheckedC = document.getElementById("sheepQuestionQuestion").checked;
        const q7CheckedA = document.getElementById("dogsQuestion").checked;

        let mlQuestion1 = "";
        let mlQuestion2 = "";
        let illiterateQuestion = "";
        let trafficQuestion = "";
        let rainyQuestion = "";
        let sheepQuestion = "";
        let dogsQuestion = "";

        if (q1CheckedA === true) {
            mlQuestion1 = "mlQuestion1Enthused";
        } else if (q1CheckedB === true) {
            mlQuestion1 = "mlQuestion1Disgusted";
        } else if (q1CheckedC === true) {
            mlQuestion1 = "mlQuestion1Ambivalent";
        }

        if (q2CheckedA === true) {
            mlQuestion2 = "mlQuestion2Enthused";
        } else if (q2CheckedB === true) {
            mlQuestion2 = "mlQuestion2Disgusted";
        } else if (q2CheckedC === true) {
            mlQuestion2 = "mlQuestion2Ambivalent"
        }

        if (q3CheckedA === true) {
            illiterateQuestion = "illiterateQuestionIAgree";
        } else if (q3CheckedB === true) {
            illiterateQuestion = "illiterateQuestionIDisagree";
        } else if (q3CheckedC === true) {
            illiterateQuestion = "illiterateQuestionIDK"
        }

        if (q4CheckedA === true) {
            trafficQuestion = "trafficQuestion0";
        } else if (q4CheckedB === true) {
            trafficQuestion = "trafficQuestion1";
        } else if (q4CheckedC === true) {
            trafficQuestion = "trafficQuestion2";
        }

        if (q5CheckedA === true) {
            rainyQuestion = "rainyQuestionJogger";
        } else if (q5CheckedB === true) {
            rainyQuestion = "rainyQuestionCocoa";
        } else if (q5CheckedC === true) {
            rainyQuestion = "rainyQuestionQuestion";
        }

        if (q6CheckedA === true) {
            sheepQuestion = "sheepQuestionYes";
        } else if (q6CheckedB === true) {
            sheepQuestion = "sheepQuestionNo";
        } else if (q6CheckedC === true) {
            sheepQuestion = "sheepQuestionQuestion";
        }

        if (q7CheckedA === true) {
            dogsQuestion = "dogsQuestion";
        }

        console.log(mlQuestion1);
        console.log(mlQuestion2);
        console.log(illiterateQuestion);
        console.log(trafficQuestion);
        console.log(rainyQuestion);
        console.log(sheepQuestion);
        console.log(dogsQuestion);



    });




}