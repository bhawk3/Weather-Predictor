
/*
User clicks submit
Get the user input from html into JS as a string
Convert or parse string into number
Determine whether the number is <=3 || >=11 if it is then display random snowy month img
Determine whether the number is >=4 && <=10 if it is then display random snowy month img
*/

const submitBtn = document.getElementById("submit-btn")
const outputSection = document.getElementById("output-section")
const months = ["January","February","March","April","May","June",
    "July","August","September","October","November", "December"]

let cloudy = "Assets/cloud.png"
let partlyCloudy = "Assets/partly cloudy.png"
let snowfall = "Assets/snowfall.png"
let sunshine = "Assets/sunshine.png"
let thunder = "Assets/thunder.png"
let rainy = "Assets/rainy.png"

const snowyMonthsImages = [ cloudy, partlyCloudy, snowfall, sunshine]
const nonSnowyMonthsImages = [ cloudy, partlyCloudy, rainy, thunder, sunshine]

let imgTag = document.createElement('img')

submitBtn.addEventListener("click", function() {
    const dateInput = document.getElementById("date-input").value //this is a string

    let date = new Date(dateInput)
    let userDate = months[date.getMonth()]
    let finalDate = months.indexOf(userDate)
    console.log(finalDate)
    
    let randomSnowy = Math.floor(Math.random() * snowyMonthsImages.length)
    let randomNotSnowy = Math.floor(Math.random() * nonSnowyMonthsImages.length)

    if (finalDate <= -1) {
       let userInput = document.createElement("p")
       userInput.innerHTMLtextContent = "Please select a date."
       return userInput;
    } else if (finalDate >= 3 && finalDate <= 9 ) {
        //console.log("non-snowy month")
        imgTag.src = `${nonSnowyMonthsImages[randomNotSnowy]}`
        outputSection.appendChild(imgTag)

    } else {
        //console.log("snowy month")
        imgTag.src = `${snowyMonthsImages[randomSnowy]}`
        outputSection.appendChild(imgTag)
    }
    return outputSection;
})


  

