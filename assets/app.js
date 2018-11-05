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

    // object literal holding data for option elements
var Select_List_Data = {
    
    'choices': { // name of associated select box
        
        // names match option values in controlling select box
        js: {
            text: ['Scrolling Divs', 'Tooltips', 'Rotate Images', 'Scrollers', 'Banner Rotator'],
            value: ['scroll', 'tooltips', 'rotate', 'scrollers', 'banner']
        },
        php: {
            text: ['Random Image', 'Form Class', 'Table Class', 'Order Form'],
            value: ['random', 'form', 'table', 'order']
        },
        tuts: {
            // example without values
            text: ['Iframes', 'PHP to JS', 'Object Literals', 'Initializing JS']
        }
    
    }    
};

// removes all option elements in select box 
// removeGrp (optional) boolean to remove optgroups
function removeAllOptions(sel, removeGrp) {
    var len, groups, par;
    if (removeGrp) {
        groups = sel.getElementsByTagName('optgroup');
        len = groups.length;
        for (var i=len; i; i--) {
            sel.removeChild( groups[i-1] );
        }
    }
    
    len = sel.options.length;
    for (var i=len; i; i--) {
        par = sel.options[i-1].parentNode;
        par.removeChild( sel.options[i-1] );
    }
}

function appendDataToSelect(sel, obj) {
    var f = document.createDocumentFragment();
    var labels = [], group, opts;
    
    function addOptions(obj) {
        var f = document.createDocumentFragment();
        var o;
        
        for (var i=0, len=obj.text.length; i<len; i++) {
            o = document.createElement('option');
            o.appendChild( document.createTextNode( obj.text[i] ) );
            
            if ( obj.value ) {
                o.value = obj.value[i];
            }
            
            f.appendChild(o);
        }
        return f;
    }
    
    if ( obj.text ) {
        opts = addOptions(obj);
        f.appendChild(opts);
    } else {
        for ( var prop in obj ) {
            if ( obj.hasOwnProperty(prop) ) {
                labels.push(prop);
            }
        }
        
        for (var i=0, len=labels.length; i<len; i++) {
            group = document.createElement('optgroup');
            group.label = labels[i];
            f.appendChild(group);
            opts = addOptions(obj[ labels[i] ] );
            group.appendChild(opts);
        }
    }
    sel.appendChild(f);
}

// anonymous function assigned to onchange event of controlling select box
document.forms['glsForm'].elements['category'].onchange = function(e) {
    // name of associated select box
    var relName = 'choices';
    
    // reference to associated select box 
    var relList = this.form.elements[ relName ];
    
    // get data from object literal based on selection in controlling select box (this.value)
    var obj = Select_List_Data[ relName ][ this.value ];
    
    // remove current option elements
    removeAllOptions(relList, true);
    
    // call function to add optgroup/option elements
    // pass reference to associated select box and data for new options
    appendDataToSelect(relList, obj);
};


// populate associated select box as page loads
(function() { // immediate function to avoid globals
    
    var form = document.forms['glsForm'];
    
    // reference to controlling select box
    var sel = form.elements['category'];
    sel.selectedIndex = 0;
    
    // name of associated select box
    var relName = 'choices';
    // reference to associated select box
    var rel = form.elements[ relName ];
    
    // get data for associated select box passing its name
    // and value of selected in controlling select box
    var data = Select_List_Data[ relName ][ sel.value ];
    
    // add options to associated select box
    appendDataToSelect(rel, data);
    
}());