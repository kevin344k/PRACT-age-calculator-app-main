const inputDays=document.querySelector("#inputDays")
const inputMonth=document.querySelector("#inputMonth")
const inputYears=document.querySelector("#inputYears")

const label_month=document.querySelector("#label-month")
const label_days=document.querySelector("#label-days")
const label_years=document.querySelector("#label-years")

const errorDay_span=document.querySelector(".span-valid--day")

const errorMonth_span=document.querySelector(".span-valid--month")
const errorYear_span=document.querySelector(".span-valid--year")
const errorDate=document.querySelector("#span-valid--date")
const span_button=document.querySelector(".ico")

const resultYear=document.querySelector("#result-year")
const resultMonts=document.querySelector("#result-monts")
const resultDays=document.querySelector("#result-days")

//valid empty field
let text1="This field is required"
let text2="Must be a valid " 


span_button.addEventListener("click",()=>{
    validEmptyField(inputDays.value,inputMonth.value,inputYears.value)
})

function validEmptyField(days,month,years) {
   let objl={}
        if (days=="") {
            paintError("day",text1)
        }  else{
            quitError("day")
            if(days>=1 && days<=31){
                objl.day=days
            } else{
                paintError("day",(text2+"day"))
            }
        }
        if (month=="") {
            paintError("month",text1)
        } else{
            quitError("month")
            if(month>=1 && month<=12){
                objl.month=month
            } else {
                paintError("month",(text2+"month"))
            }
        }
        if (years=="") {
            paintError("year",text1)
        } else{
            quitError("year")
            let date=new Date
            let currentYear=date.getFullYear()
            
            if(years<=parseInt(currentYear)){
                console.log("hola")
                objl.year=years

                paintResult(objl)

            } else {
                paintError("years",(text2+"years"))
             
            }
        }
        



}


function paintResult(objl) {
    if (objl.day!="" && objl.month!="" && objl.year!="") {
        let date1=new Date(`${objl.year}/${objl.month}/${objl.day}`)
        let dateNow=new Date()
        let resta= dateNow.getTime()-date1.getTime()
        let result=resta/(1000*60*60*24)
      
        let resY=result/365 //3
        console.log(resY)
        let resM= ((result/365)- Math.floor(resY))*12
        console.log(resM)
      let resD=(resM-Math.floor(resM))*31
        console.log(resD)

        let objResult={
            "year":Math.floor(resY),
            "month":Math.floor(resM),
            "days":Math.floor(resD)
        }


        resultYear.textContent=objResult.year

        resultMonts.textContent=objResult.month
        resultDays.textContent=objResult.days

    } else {
        errorDate.style.display="block"
        
        resultYear.textContent="--"

        resultMonts.textContent="--"
        resultDays.textContent="--"
    }
}




function paintError(type,text) {

    if (type=="day") {
        
        inputDays.classList.add("error-input")
        errorDay_span.style.display="block"
        errorDay_span.textContent=text
        label_days.classList.add("error-label")
        
    } else if (type=="month") {
        inputMonth.classList.add("error-input")
        errorMonth_span.style.display="block"
        errorMonth_span.textContent=text
        label_month.classList.add("error-label")
     
    } else if (type=="year") {
        inputYears.classList.add("error-input")
        errorYear_span.style.display="block"
        errorYear_span.textContent=text
        label_years.classList.add("error-label")
         
        
    }
}
function quitError(type) {
    if (type=="day") {
        
        inputDays.classList.remove("error-input")
        errorDay_span.style.display="none"
        label_days.classList.remove("error-label")
        
    } else if (type=="month") {
        inputMonth.classList.remove("error-input")
        errorMonth_span.style.display="none"
        label_month.classList.remove("error-label")
     
    } else if (type=="year") {
        inputYears.classList.remove("error-input")
        errorYear_span.style.display="none"
        label_years.classList.remove("error-label")
         
        
    }
}