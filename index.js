
const tabContent = $(".tab-content");
const pveBtn = document.querySelector(".pve").style;
const nveBtn = document.querySelector(".nve").style;
const neuBtn = document.querySelector(".neu").style;

$(".tab").click(function() {
    
    $(this).css("color", "inherit");  //need some tweak
    
    if($(this).hasClass("nve")) {
        tabContent.html("Negative content");
        pveBtn.color = "darkgray";
        neuBtn.color = "darkgray";                   
    }
    else if($(this).hasClass("pve")) {
        tabContent.html("Positive content");
        nveBtn.color = "darkgray";
        neuBtn.color = "darkgray"; 
        
    } else {
        tabContent.html("Neutral content");
        pveBtn.color = "darkgray";
        nveBtn.color = "darkgray"; 
    }
});


$(".change-btn").click(function() {

    var indexInput = $(".tab-index-input").val();  

    switch (indexInput) {
        case "1": 
            tabContent.html("Positive content");
            pveBtn.color = "inherit";
            nveBtn.color = "darkgray";
            neuBtn.color = "darkgray";         
            break;
        
        case "2": 
            tabContent.html("Negative content");
            nveBtn.color = "inherit";
            pveBtn.color = "darkgray";
            neuBtn.color = "darkgray"; 
            break;

        case "3": 
            tabContent.html("Neutral content");
            neuBtn.color = "inherit";
            pveBtn.color = "darkgray";
            nveBtn.color = "darkgray"; 
            break;
      
        default: alert("Invalid index");
            break;
    }

    $(".tab-index-input").val("");
})