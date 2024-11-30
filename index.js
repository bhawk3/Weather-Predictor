
/*
User clicks submit
Get the user input from html into JS as a string
Convert or parse string into number
Determine whether the number is <=3 || >=11 if it is then display random snowy month img
Determine whether the number is >=4 && <=10 if it is then display random snowy month img



*/


/*
01/30/0000 01,300,000 snow
02/30/0000 02,300,000 snow
03/31/0000 03,310,000 snow
04/30/0000 04,300,000 non-snow
05/30/0000 05,300,000 non-snow
06/30/0000 06,300,000 non-snow
07/30/0000 07,300,000 non-snow
08/30/0000 08,300,000 non-snow
09/30/0000 09,300,000 non-snow
10/31/0000 10,310,000 non-snow
11/30/0000 11,300,000 snow
12/31/0000 12,310,000 snow
*/



const dateInput = document.getElementById("date-input").value
const submitBtn = document.getElementById("submit-btn")
const outputSection = document.getElementById("output-section")
const months = ["January","February","March","April","May","June",
    "July","August","September","October","November", "December"]

const snowyMonthsImages = [
    "C:\Users\brend\OneDrive\Documents\Code\Weather-Predictor\Assets\cloud.png",
    "C:\Users\brend\OneDrive\Documents\Code\Weather-Predictor\Assets\partly cloudy.png", 
    "C:\Users\brend\OneDrive\Documents\Code\Weather-Predictor\Assets\snowfall.png",
    "C:\Users\brend\OneDrive\Documents\Code\Weather-Predictor\Assets\sunshine.png"
]

const nonSnowyMonthsImages = [
    "C:\Users\brend\OneDrive\Documents\Code\Weather-Predictor\Assets\cloud.png",
    "C:\Users\brend\OneDrive\Documents\Code\Weather-Predictor\Assets\partly cloudy.png", 
    "C:\Users\brend\OneDrive\Documents\Code\Weather-Predictor\Assets\thunder.png",
    "C:\Users\brend\OneDrive\Documents\Code\Weather-Predictor\Assets\sunshine.png",
    "C:\Users\brend\OneDrive\Documents\Code\Weather-Predictor\Assets\rainy.png"
]



submitBtn.addEventListener("click", function() {
    let date = new Date()
    let userDate = months[date.getMonth()]

    if (!userDate) {
        userinput = "Please select a date."
    } else if (userDate >= 3 && userDate <= 9 ) {
        console.log("non-snowy month")
    } else {
        console.log("snowy month")
    }

    console.log(userDate)
})




    //getMonth = dateInput.getMonth()

    /* There is an issue with datatype here. Can't have number start with 0 
    and also dateInput is prob not a num but yet i'm trying to compare it 
    to a num */

   /* if (!userDate) {
        userinput = "Please select a date."
    } else if (userDate >= 3 && userDate <= 9 ) {
        console.log("non-snowy month")
    } else {
        console.log("snowy month")
    }
*/

