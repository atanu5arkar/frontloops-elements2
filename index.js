
const tabContent = document.querySelector(".tab-content");
const pveBtn = document.querySelector(".pve").style;
const nveBtn = document.querySelector(".nve").style;
const neuBtn = document.querySelector(".neu").style;

for(i = 0; i <= 2; i += 1) {
    document.querySelectorAll(".tab")[i].addEventListener("click", function() {
        
        this.style.color = "inherit";
        var classNames = this.classList;
       
        if(classNames[1] === "nve") {
            tabContent.innerHTML = "Negative content";
            pveBtn.color = "darkgray";
            neuBtn.color = "darkgray";                   
        }
        else if(classNames[1] === "pve") {
            tabContent.innerHTML = "Positive content";
            nveBtn.color = "darkgray";
            neuBtn.color = "darkgray"; 
            
        } else {
            tabContent.innerHTML = "Neutral content";
            pveBtn.color = "darkgray";
            nveBtn.color = "darkgray"; 
        }
    });
}


document.querySelector(".change-btn").addEventListener("click", function() {

    var tabIndexInput = document.querySelector(".tab-index-input");  

    switch (tabIndexInput.value) {
        case "1": 
            tabContent.innerHTML = "Positive content";
            pveBtn.color = "inherit";
            nveBtn.color = "darkgray";
            neuBtn.color = "darkgray";         
            break;
        
        case "2": 
            tabContent.innerHTML = "Negative content";
            nveBtn.color = "inherit";
            pveBtn.color = "darkgray";
            neuBtn.color = "darkgray"; 
            break;

        case "3": 
            tabContent.innerHTML = "Neutral content";
            neuBtn.color = "inherit";
            pveBtn.color = "darkgray";
            nveBtn.color = "darkgray"; 
            break;
      
        default: alert("Invalid index");
            break;
    }

    tabIndexInput.value = "";
})