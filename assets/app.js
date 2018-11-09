function myfunc() {

    // input value from form
    
        var dakkod = document.getElementById('dakod').value
        var blank = document.getElementById('blank_type').value
        var zakupka = document.getElementById('zakupka').value
    
    // SO formula
    
        var vygodna = zakupka*1.19-blank+ +dakkod
    
    // condition vygodna or not vygodna
    
        if ( vygodna>=0){
            document.getElementById('rez').className= 'container alert alert-success'
            document.getElementById('rez').innerHTML = vygodna.toPrecision(4) +" EUR " + " - по формуле выгодно забирать"
        }
        else{
            document.getElementById('rez').className= 'container alert alert-danger'
            document.getElementById('rez').innerHTML = vygodna.toPrecision(4) +" EUR " + " - по формуле не выгодно забирать"
        }
       
    }
    
    // Display current date in the navbar
    function dispdate(){
        var dt = new Date()
    document.getElementById("dt").innerHTML = dt.toDateString()
    }
    
    
    //date calculator function
    
    function dateCalc(){
    var  dateStart = document.getElementById('dateStart').value.toString()
    var dateEnd = document.getElementById('dateEnd').value.toString()
    var dateFirst = new Date(dateStart)
    var dateSecond = new Date(dateEnd)
    
    // time difference
    var timeDiff = Math.abs(dateSecond.getTime() - dateFirst.getTime())
    
    // days difference
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24))
    
    var gridRadios = document.getElementsByName("gridRadios")
    if(gridRadios[0].checked && 100-diffDays < 0) {
      document.getElementById('rezultat').className= 'alert alert-danger'
      document.getElementById("rezultat").innerHTML = "количество дней которые прошли между датами получения пакета и рекламации : "  + diffDays + " "+ ". срок истек. "
    }
      else if (gridRadios[0].checked && 100-diffDays >= 0) {
      document.getElementById('rezultat').className= 'alert alert-success'
      document.getElementById("rezultat").innerHTML = "количество дней которые прошли между датами получения пакета и рекламации : " +  diffDays + " "+ ". срок не истек. "
    }
      else if (gridRadios[1].checked && 200-diffDays < 0) {
      document.getElementById('rezultat').className= 'alert alert-danger'
      document.getElementById("rezultat").innerHTML = "количество дней которые прошли между датами получения пакета и рекламации : " +  diffDays + " "+ ". срок истек. "
    }
      else if (gridRadios[1].checked && 200-diffDays >= 0) {
      document.getElementById('rezultat').className= 'alert alert-success'
      document.getElementById("rezultat").innerHTML = "количество дней которые прошли между датами получения пакета и рекламации : "  + diffDays + " "+ ". срок не истек. "
    }

    else if (gridRadios[2].checked && 14-diffDays >= 0) {
      document.getElementById('rezultat').className= 'alert alert-success'
      document.getElementById("rezultat").innerHTML = "количество дней которые прошли между датами получения пакета и рекламации : "  + diffDays + " "+ ". срок не истек. "
    }
    else if (gridRadios[2].checked && 14-diffDays < 0) {
      document.getElementById('rezultat').className= 'alert alert-danger'
      document.getElementById("rezultat").innerHTML = "количество дней которые прошли между датами получения пакета и рекламации : "  + diffDays + " "+ ". срок истек. "
    }
      
    }
    
    // GLS FUNCTION

    $(document).ready(function(){
      
        //let's create arrays
        var ITALIA = [
          {display: "Пакет до 40 Кг", value: "13.41" }, 
          {display: "Пакет от 41 Кг до 50 Кг", value: "24.67" }];
          
        var PORTUGAL = [
          {display: "Пакет от 0 Кг до 10 Кг", value: "21.66" }, 
          {display: "Пакет от 11 Кг до 15 Кг", value: "27.07" }, 
          {display: "Пакет от 16 Кг до 25 Кг", value: "30.19" },
          {display: "Пакет от 26 Кг до 30 Кг", value: "33.53" }];
          
        var NORWAY = [
          {display: "Пакет от 0 Кг до 2 Кг", value: "38.74"},
          {display: "Пакет от 3 Кг до 5 Кг", value: "39.92"},
          {display: "Пакет от 6 Кг до 10 Кг", value: "41.45"},
          {display: "Пакет от 11 Кг до 15 Кг", value: "42.88"},
          {display: "Пакет от 16 Кг до 25 Кг", value: "45.78"}, 
          {display: "Пакет от 26 Кг до 30 Кг", value: "47.5"}, 
          {display: "Пакет от 31 Кг до 40 Кг", value: "49.35" },
          {display: "Пакет от 41 Кг до 50 Кг", value: "52.02"}];
        
        //If country option is changed
        $("#country_selection").change(function() {
            var country = $(this).val(); //get option value from country 
            
            switch(country){ //using switch compare selected option and populate child
                case 'ITALIA':
                 list(ITALIA);
                break;
                case 'NORWAY':
                 list(NORWAY);
                break;				
                case 'PORTUGAL':
                 list(PORTUGAL);
                break;	
              default: //default child option is blank
                $("#blank_type").html('');	 
                break;
               }
        });
        
        //function to populate child select box
        function list(array_list)
        {
          $("#blank_type").html(""); //reset child options
          $(array_list).each(function (i) { //populate child options 
            $("#blank_type").append("<option value=\""+array_list[i].value+"\">"+array_list[i].display+"</option>");
          });
        }
        
        });



// TVA combinaison

var billing_tva = document.getElementsById("billing_tva").value;
var shipping_tva = document.getElementsById("shipping_tva").value;

//combinaison 1
function func_tva() { 

  if (billing_tva == "b1") {
    if (shipping_tva == "s1") {

      document.getElementById('tva_result').className= 'container alert alert-success'
      document.getElementById('tva_result').innerHTML = " combinaison 11"

    }
    else if (shipping_tva == "s2") {

      document.getElementById('tva_result').className= 'container alert alert-success'
      document.getElementById('tva_result').innerHTML = " combinaison 12"

    }
    else if (shipping_tva == "s3") {

      document.getElementById('tva_result').className= 'container alert alert-success'
      document.getElementById('tva_result').innerHTML = " combinaison 13"

    }

    else {

      document.getElementById('tva_result').className= 'container alert alert-success'
      document.getElementById('tva_result').innerHTML = " combinaison 14"

    }
  }
/* //combinaison 2
  else if (billing_tva === "b2") {
    if (shipping_tva === "s1") {

      document.getElementById('tva_result').className= 'container alert alert-success'
      document.getElementById('tva_result').innerHTML = " combinaison 21"

    }
    else if (shipping_tva === "s2") {

      document.getElementById('tva_result').className= 'container alert alert-success'
      document.getElementById('tva_result').innerHTML = " combinaison 22"

    }
    else if (shipping_tva === "s3") {

      document.getElementById('tva_result').className= 'container alert alert-success'
      document.getElementById('tva_result').innerHTML = " combinaison 23"

    }

    else {

      document.getElementById('tva_result').className= 'container alert alert-success'
      document.getElementById('tva_result').innerHTML = " combinaison 24"

    }
  }
//combinaison 3
  else if (billing_tva === "b3") {
    if (shipping_tva === "s1") {

      document.getElementById('tva_result').className= 'container alert alert-success'
      document.getElementById('tva_result').innerHTML = " combinaison 31"

    }
    else if (shipping_tva === "s2") {

      document.getElementById('tva_result').className= 'container alert alert-success'
      document.getElementById('tva_result').innerHTML = " combinaison 32"

    }
    else if (shipping_tva === "s3") {

      document.getElementById('tva_result').className= 'container alert alert-success'
      document.getElementById('tva_result').innerHTML = " combinaison 33"

    }

    else {

      document.getElementById('tva_result').className= 'container alert alert-success'
      document.getElementById('tva_result').innerHTML = " combinaison 34"

    }
  }
//combinaison 4
  else {
    if (shipping_tva === "s1") {

      document.getElementById('tva_result').className= 'container alert alert-success'
      document.getElementById('tva_result').innerHTML = " combinaison 41"

    }
    else if (shipping_tva === "s2") {

      document.getElementById('tva_result').className= 'container alert alert-success'
      document.getElementById('tva_result').innerHTML = " combinaison 42"

    }
    else if (shipping_tva === "s3") {

      document.getElementById('tva_result').className= 'container alert alert-success'
      document.getElementById('tva_result').innerHTML = " combinaison 43"

    }

    else {

      document.getElementById('tva_result').className= 'container alert alert-success'
      document.getElementById('tva_result').innerHTML = " combinaison 44"

    }
  } */


}





// menu activation 


function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}
