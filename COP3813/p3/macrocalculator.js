var FOOT_TO_INCHES = 12;
var LBS_TO_KG = 2.2046;
var CM_TO_INCHE = 2.54;


function calculate(){
    //use parseInt to convert string to int
    var getWeight = parseFloat(document.getElementById("weight").value);
    var getHeightFoot = parseInt(document.getElementById("heightInFoot").value);
    var getHeightInches = parseInt(document.getElementById("heightInInches").value);
    var getAge = parseInt(document.getElementById("age").value);
    var getActivity = parseFloat(document.getElementById("level").value);
    if(getWeight  > 0 && getHeightFoot  > 0 && getAge  > 0 && getActivity > 0 && getHeightInches >= 0){
        var BMR = (getWeight / LBS_TO_KG) * 10 + ((((getHeightFoot * FOOT_TO_INCHES) + getHeightInches) * CM_TO_INCHE) * 6.25) - ((5 * getAge) -5);
        document.getElementById("BMRresult").value = parseInt(BMR);
    }
    else{
        alert("Invalid Input");
    }
    if(!isNaN(BMR)){
        var DCR = getActivity * BMR;
        document.getElementById("DCRresult").value = parseInt(DCR);
        var CaDef = DCR * 0.2;
        document.getElementById("calorieDef").value = parseInt(CaDef);
        
        var lowCb = DCR - CaDef;
        document.getElementById("LowCarbresult").value = parseInt(lowCb);
        
        var highCb = DCR * 0.9;
        document.getElementById("HighCarbresult").value = parseInt(highCb);
    }
    else{
        return;
    }
	
	//calculate fat, carb, protein and total calorie
	 var fLow = lowCb * 0.25;
	 var cLow = lowCb * 0.4;
	 var pLow = lowCb * 0.35;
	 var fHigh = highCb * 0.25;
	 var cHigh = highCb * 0.4;
	 var pHigh = highCb * 0.35;
	document.getElementById("fatLow").innerHTML = parseFloat(fLow).toFixed(1);
	document.getElementById("carbLow").innerHTML = parseFloat(cLow).toFixed(1);
	document.getElementById("proteinLow").innerHTML = parseFloat(pLow).toFixed(1);
	document.getElementById("totalCalLow").innerHTML = (fLow + cLow + pLow).toFixed(1);
	document.getElementById("fatHigh").innerHTML = parseFloat(fHigh).toFixed(1);;
	document.getElementById("carbHigh").innerHTML = parseFloat(cHigh).toFixed(1);;
	document.getElementById("proteinHigh").innerHTML = parseFloat(pHigh).toFixed(1);;
	document.getElementById("totalCalHigh").innerHTML = (fHigh + cHigh + pHigh).toFixed(1);
}

function clr(){
    //clear every text box to blank
	//Output Boxes
    document.getElementById("BMRresult").value ="";
    document.getElementById("DCRresult").value ="";
    document.getElementById("calorieDef").value = "";
    document.getElementById("LowCarbresult").value = "";
    document.getElementById("HighCarbresult").value = "";
    //Input boxes
    document.getElementById("weight").value ="";
    document.getElementById("heightInFoot").value = "";
    document.getElementById("heightInInches").value = "";
    document.getElementById("age").value = "";
    document.getElementById("result").value = "";
    

}