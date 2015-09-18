

function hideQ1() {
    document.getElementById("Q1").style.display = 'none';
    document.getElementById("Q2").style.display = 'block';
}


function hideQ2() {
    document.getElementById("Q2").style.display = 'none';
    document.getElementById("Q3").style.display = 'block';
}

function hideQ3() { //hide and ger slider result
	var sliderResult = document.getElementById("timeOnPhone").value;
	document.getElementById("Q3").style.display = 'none';
    document.getElementById("Q4").style.display = 'block';
    }

function hideQ4() {
	var sliderResult = document.getElementById("postFreq").value;
    document.getElementById("Q4").style.display = 'none';
    document.getElementById("Q5").style.display = 'block';
}

function hideQ5() {
	var sliderResult = document.getElementById("notific").value;
    document.getElementById("Q5").style.display = 'none';
    document.getElementById("Q6").style.display = 'block';
}

function hideQ6() {
    document.getElementById("Q6").style.display = 'none';
    document.getElementById("Q7").style.display = 'block';
}

function hideQ7() {
    document.getElementById("Q7").style.display = 'none';
    document.getElementById("results").style.display = 'block';
    grabData();
}


function grabData() { 
    // get the values
    var diagnosisInfo = {
        name : $('#yourname').val(),
        timeOnPhone : $('#timeOnPhone').val(),
        postFreq : $('#postFreq').val(),
        notific : $('#notific').val()
    }
    
    // log it to console for sanity check
    console.log(diagnosisInfo);

   //YIFAN AND KAT WERE HERE//


    // show it on the page >> this should show only show 3 results: 
                                                                   //Awkwardness
                                                                   //Selfie syndrome (Narcissism)
                                                                   //Social media   /   Phobbing
                                                                   //Notification OCD

    $('#result_name').html("Here is your diagnosis " + diagnosisInfo.name+ ',');
    if (diagnosisInfo.timeOnPhone > 50 && diagnosisInfo.timeOnPhone < 80){
    $('#result_time').html("You are spending many hours on your phonr ");
 }
}

    // send it through the websocket to printer
    //I love you ava babe



