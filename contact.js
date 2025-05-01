let queryString = window.location.search;

window.addEventListener("load", function(){
    if(queryString){
    console.log("form submitted");
    
   let urlParams = new URLSearchParams(queryString);
   
   let t = "";
   t += "Thank You So Much, " + urlParams.get('firstName') + " " + urlParams.get('lastName') + "<br>";
   t += "We will contact you within 10 to 15 minutes" + "<br>" + "<br>";
   t += "Please Confirm That Is The Correct Email To Reach Out To";
   t += "<br>" + "<br>"
   t += urlParams.get('email');

   const i = document.getElementById('output');
   
   if(i){
    i.innerHTML = t;
      }

}
}   
);

// add a confirm button and addtional code to load a potential picture or message

// This is for Gael, me. 