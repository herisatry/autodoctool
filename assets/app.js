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
      
    }
    
    // GLS FUNCTION

    $(document).ready(function(){
      
        //let's create arrays
        var ITALIA = [
          {display: "Dark chocolate", value: "4" }, 
          {display: "Milk chocolate", value: "3" }, 
          {display: "White chocolate", value: "4" },
          {display: "Gianduja chocolate", value: "7" }];
          
        var NORWAY = [
          {display: "Broccoli", value: "broccoli" }, 
          {display: "Cabbage", value: "cabbage" }, 
          {display: "Carrot", value: "carrot" },
          {display: "Cauliflower", value: "cauliflower" }];
          
        var PORTUGAL = [
          {display: "Frozen yogurt", value: "frozen-yogurt" }, 
          {display: "Booza", value: "booza" }, 
          {display: "Frozen yogurt", value: "frozen-yogurt" },
          {display: "Ice milk", value: "ice-milk" }];
        
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





// menu activation 


function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}
