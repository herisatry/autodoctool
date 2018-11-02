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
    
    