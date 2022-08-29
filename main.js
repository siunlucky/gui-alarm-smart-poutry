// SHOWING PAGE
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active selected", "");
    }
    

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active selected";
  }

window.onload = function(e){ 
    document.getElementById("defaultOpen").click();
} 

// OPTION IP
function changeIp(ip){
    if(ip === `dinamis`){
        document.getElementById(`option`).style.display = 'block'
    }else{
        document.getElementById(`option`).style.display = 'none'
    }
}