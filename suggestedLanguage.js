window.onload = function() {

    let mlQuestion1 = "mlQuestion1Enthused";
    let mlQuestion2 = "mlQuestion2Enthused";
    let illiterateQuestion = "illiterateQuestionIAgree";
    let trafficQuestion = "trafficQuestion1";
    let rainyQuestion = "rainyQuestionCocoa";
    let sheepQuestion = "sheepQuestionQuestion";
    let dogsQuestion = "dogsQuestion";

    let pythonCounter = 0;
    let jsCounter = 0;
    let goCounter = 0;
    let randomCounter = 3;

    if (mlQuestion1 === "mlQuestion1Enthused") {
        pythonCounter +=1;
    } else if (mlQuestion1 === "mlQuestion1Disgusted") {
        jsCounter += 1;
    } else if (mlQuestion1 === "mlQuestion1Ambivalent") {
        goCounter += 1;
    }



    if (mlQuestion2 === "mlQuestion2Enthused") {
        jsCounter += 1;
    } else if (mlQuestion2 === "mlQuestion2Disgusted") {
        pythonCounter += 1;
    } else if (mlQuestion2 === "mlQuestion2Ambivalent") {
        goCounter += 1;
    }


    if (illiterateQuestion === "illiterateQuestionIAgree") {
        pythonCounter += 1;
    } else if (illiterateQuestion === "illiterateQuestionIDisagree") {
        jsCounter += 1;
    } else if (illiterateQuestion === "illiterateQuestionIDK") {
        goCounter += 1;
    }

    console.log("After illiterateQuestion");
    console.log("Python = " + pythonCounter);
    console.log("Js = " + jsCounter);
    console.log("Go = " + goCounter);


    if (trafficQuestion === "trafficQuestion0") {
        pythonCounter += 1;
    } else if (trafficQuestion === "trafficQuestion1") {
        jsCounter += 1;
    } else if (trafficQuestion === "trafficQuestion2") {
        goCounter +=1;
    }

    console.log("After trafficQuestion");
    console.log("Python = " + pythonCounter);
    console.log("Js = " + jsCounter);
    console.log("Go = " + goCounter);

    if (rainyQuestion === "rainyQuestionJogger") {
        goCounter += 1;
    } else if (rainyQuestion === "rainyQuestionCocoa") {
        jsCounter += 1;
    } else if (rainyQuestion === "rainyQuestionQuestion") {
        pythonCounter += 1;
    }

    console.log("After rainyQuestion");
    console.log("Python = " + pythonCounter);
    console.log("Js = " + jsCounter);
    console.log("Go = " + goCounter);

    if (sheepQuestion === "sheepQuestionYes") {
        goCounter += 1;
    } else if (sheepQuestion === "sheepQuestionNo") {
        jsCounter += 1;
    } else if (sheepQuestion === "sheepQuestionQuestion") {
        pythonCounter += 1;
    }

    console.log("After sheepQuestion");
    console.log("Python = " + pythonCounter);
    console.log("Js = " + jsCounter);
    console.log("Go = " + goCounter);
    //pythonCounter jsCounter goCounter

    if (dogsQuestion === "dogsQuestion") {
        if (pythonCounter > jsCounter && pythonCounter > goCounter) {
            pythonCounter += 1;
        } else if (jsCounter > pythonCounter && jsCounter > goCounter) {
            jsCounter += 1;
        } else if (goCounter > pythonCounter && goCounter > jsCounter) {
            goCounter += 1;
        } else {
            randomCounter = Math.floor(Math.random * 3);
        }
    }


    //console.log


    console.log("After questions");
    console.log("Python = " + pythonCounter);
    console.log("Js = " + jsCounter);
    console.log("Go = " + goCounter);

    if (pythonCounter > jsCounter && pythonCounter > goCounter) {
        console.log("Congrats boi, eet ees Python");
    } else if (jsCounter > pythonCounter && jsCounter > goCounter) {
        console.log("JavierScript 4 u");
    } else if (goCounter > pythonCounter && goCounter > jsCounter) {
        console.log("It's Go, you absolute psychopath.");
    } else {
        if (randomCounter === 0) {
            console.log("Congrats boi, eet ees Python");
        } else if (randomCounter === 1) {
            console.log("JavierScript 4 u");
        } else if (randomCounter === 2) {
            console.log("It's Go, you absolute psychopath.")
        }
    }



}