
function addChild(){
	var f_row = document.getElementById('firstChild');

	f_row.removeAttribute("hidden");
}


function selectProvince(){

	var prov = document.getElementById("province_dd").value;
	console.log(prov);

	if(prov == 'def'){
		document.getElementById("default_dd").style.display = "block";
		document.getElementById("basilan_dd").style.display = "none";
		document.getElementById("lds_dd").style.display = "none";
		document.getElementById("mag_dd").style.display = "none";
		document.getElementById("sulu_dd").style.display = "none";
		document.getElementById("tawi_dd").style.display = "none";
	}
	else if(prov == 'b'){
		document.getElementById("basilan_dd").style.display = "block";

		document.getElementById("default_dd").style.display = "none";
		document.getElementById("lds_dd").style.display = "none";
		document.getElementById("mag_dd").style.display = "none";
		document.getElementById("sulu_dd").style.display = "none";
		document.getElementById("tawi_dd").style.display = "none";
	}
	else if(prov == 'l'){
		document.getElementById("lds_dd").style.display = "block";

		document.getElementById("default_dd").style.display = "none";
		document.getElementById("basilan_dd").style.display = "none";
		document.getElementById("mag_dd").style.display = "none";
		document.getElementById("sulu_dd").style.display = "none";
		document.getElementById("tawi_dd").style.display = "none";

	}
	else if(prov == 'm'){
		document.getElementById("mag_dd").style.display = "block";

		document.getElementById("default_dd").style.display = "none";
		document.getElementById("basilan_dd").style.display = "none";
		document.getElementById("lds_dd").style.display = "none";
		document.getElementById("sulu_dd").style.display = "none";
		document.getElementById("tawi_dd").style.display = "none";
		
	}
	else if(prov == 's'){
		document.getElementById("sulu_dd").style.display = "block";

		document.getElementById("default_dd").style.display = "none";
		document.getElementById("basilan_dd").style.display = "none";
		document.getElementById("lds_dd").style.display = "none";
		document.getElementById("mag_dd").style.display = "none";
		document.getElementById("tawi_dd").style.display = "none";
		
	}
	else if(prov == 't'){
		document.getElementById("tawi_dd").style.display = "block";

		document.getElementById("default_dd").style.display = "none";
		document.getElementById("basilan_dd").style.display = "none";
		document.getElementById("lds_dd").style.display = "none";
		document.getElementById("mag_dd").style.display = "none";
		document.getElementById("sulu_dd").style.display = "none";
		
	}
	else{
		document.getElementById("default_dd").style.display = "none";
		document.getElementById("basilan_dd").style.display = "none";
		document.getElementById("lds_dd").style.display = "none";
		document.getElementById("mag_dd").style.display = "none";
		document.getElementById("sulu_dd").style.display = "none";
	}
}



        function selectReportFor(){
        	console.log("hello");

            var b = document.getElementById("get_report_for").value;
            
            if(b == "Brgy"){
				document.getElementById("brgy_DIV").style.display = "block";
            	document.getElementById("indv_DIV").style.display = "none";
            	document.getElementById("coop_DIV").style.display = "none";
                document.getElementById("proj_DIV").style.display = "none";

    			document.getElementById("table_DIV").style.display = "none";
                document.getElementById("list_report").style.display = "block";
            }
            else if(b == "Indv"){
            	document.getElementById("indv_DIV").style.display = "block";
            	document.getElementById("brgy_DIV").style.display = "none";
            	document.getElementById("coop_DIV").style.display = "none";
                document.getElementById("proj_DIV").style.display = "none";

    			document.getElementById("table_DIV").style.display = "none";
                document.getElementById("list_report").style.display = "block";
            }
            else if(b == "Proj"){
            	document.getElementById("proj_DIV").style.display = "block";
            	document.getElementById("brgy_DIV").style.display = "none";
            	document.getElementById("indv_DIV").style.display = "none";
                document.getElementById("coop_DIV").style.display = "none";

    			document.getElementById("table_DIV").style.display = "none";
                document.getElementById("list_report").style.display = "block";
            }
            else if(b == "Coop"){
                document.getElementById("coop_DIV").style.display = "block";
                document.getElementById("brgy_DIV").style.display = "none";
                document.getElementById("indv_DIV").style.display = "none";
                document.getElementById("proj_DIV").style.display = "none";

                document.getElementById("table_DIV").style.display = "none";
                document.getElementById("list_report").style.display = "block";
            }
            else{
            	document.getElementById("brgy_DIV").style.display = "none";
            	document.getElementById("indv_DIV").style.display = "none";
            	document.getElementById("coop_DIV").style.display = "none";
                document.getElementById("proj_DIV").style.display = "none";

    			document.getElementById("table_DIV").style.display = "none";
                document.getElementById("list_report").style.display = "none";
            }
        }

/*
    function selectReportFreq(){
    	var f = document.getElementById("report_freq").value;

    	if(f == "fixed"){
    		document.getElementById("fixed_DIV").style.display = "block"; 

    		document.getElementById("interval_DIV1").style.display = "none";
    		document.getElementById("interval_DIV2").style.display = "none";
    		document.getElementById("monthly_DIV").style.display = "none";
    		document.getElementById("yearly_DIV").style.display = "none";


    		document.getElementById("table_DIV").style.display = "none";
    	}
    	else if(f == "interval"){
    		document.getElementById("interval_DIV1").style.display = "block";
    		document.getElementById("interval_DIV2").style.display = "block";

    		document.getElementById("fixed_DIV").style.display = "none";
    		document.getElementById("monthly_DIV").style.display = "none";
    		document.getElementById("yearly_DIV").style.display = "none";


    		document.getElementById("table_DIV").style.display = "none";

    	}
    	else if(f == "monthly"){
    		document.getElementById("monthly_DIV").style.display = "block"; 

    		document.getElementById("fixed_DIV").style.display = "none";
    		document.getElementById("interval_DIV1").style.display = "none";
    		document.getElementById("interval_DIV2").style.display = "none";
    		document.getElementById("yearly_DIV").style.display = "none"; 


    		document.getElementById("table_DIV").style.display = "none";

    	}
    	else if(f == "yearly"){
    		document.getElementById("yearly_DIV").style.display = "block"; 

    		document.getElementById("fixed_DIV").style.display = "none";
    		document.getElementById("interval_DIV1").style.display = "none";
    		document.getElementById("interval_DIV2").style.display = "none";
    		document.getElementById("monthly_DIV").style.display = "none"; 


    		document.getElementById("table_DIV").style.display = "none";

    	}else{
    		document.getElementById("fixed_DIV").style.display = "none";
    		document.getElementById("interval_DIV1").style.display = "none";
    		document.getElementById("interval_DIV2").style.display = "none";
    		document.getElementById("monthly_DIV").style.display = "none";
    		document.getElementById("yearly_DIV").style.display = "none";
    		document.getElementById("table_DIV").style.display = "none";

    	}
    }


    function selectReportFreq_i(){
    	var f = document.getElementById("report_freq_i").value;

    	if(f == "fixed_i"){
    		document.getElementById("fixed_DIV_i").style.display = "block"; 

    		document.getElementById("interval_DIV1_i").style.display = "none";
    		document.getElementById("interval_DIV2_i").style.display = "none";
    		document.getElementById("monthly_DIV_i").style.display = "none";
    		document.getElementById("yearly_DIV_i").style.display = "none";


    		document.getElementById("table_DIV").style.display = "none";
    	}
    	else if(f == "interval_i"){
    		document.getElementById("interval_DIV1_i").style.display = "block";
    		document.getElementById("interval_DIV2_i").style.display = "block";

    		document.getElementById("fixed_DIV_i").style.display = "none";
    		document.getElementById("monthly_DIV_i").style.display = "none";
    		document.getElementById("yearly_DIV_i").style.display = "none";


    		document.getElementById("table_DIV").style.display = "none";

    	}
    	else if(f == "monthly_i"){
    		document.getElementById("monthly_DIV_i").style.display = "block"; 

    		document.getElementById("fixed_DIV_i").style.display = "none";
    		document.getElementById("interval_DIV1_i").style.display = "none";
    		document.getElementById("interval_DIV2_i").style.display = "none";
    		document.getElementById("yearly_DIV_i").style.display = "none"; 


    		document.getElementById("table_DIV").style.display = "none";

    	}
    	else if(f == "yearly_i"){
    		document.getElementById("yearly_DIV_i").style.display = "block"; 

    		document.getElementById("fixed_DIV_i").style.display = "none";
    		document.getElementById("interval_DIV1_i").style.display = "none";
    		document.getElementById("interval_DIV2_i").style.display = "none";
    		document.getElementById("monthly_DIV_i").style.display = "none"; 


    		document.getElementById("table_DIV").style.display = "none";

    	}else{
    		document.getElementById("fixed_DIV_i").style.display = "none";
    		document.getElementById("interval_DIV1_i").style.display = "none";
    		document.getElementById("interval_DIV2_i").style.display = "none";
    		document.getElementById("monthly_DIV_i").style.display = "none";
    		document.getElementById("yearly_DIV_i").style.display = "none";
    		document.getElementById("table_DIV_i").style.display = "none";

    	}
    }


    function selectReportFreq_p(){
    	var f = document.getElementById("report_freq_p").value;

    	if(f == "fixed_p"){
    		document.getElementById("fixed_DIV_p").style.display = "block"; 

    		document.getElementById("interval_DIV1_p").style.display = "none";
    		document.getElementById("interval_DIV2_p").style.display = "none";
    		document.getElementById("monthly_DIV_p").style.display = "none";
    		document.getElementById("yearly_DIV_p").style.display = "none";


    		document.getElementById("table_DIV").style.display = "none";
    	}
    	else if(f == "interval_p"){
    		document.getElementById("interval_DIV1_p").style.display = "block";
    		document.getElementById("interval_DIV2_p").style.display = "block";

    		document.getElementById("fixed_DIV_p").style.display = "none";
    		document.getElementById("monthly_DIV_p").style.display = "none";
    		document.getElementById("yearly_DIV_p").style.display = "none";


    		document.getElementById("table_DIV").style.display = "none";

    	}
    	else if(f == "monthly_p"){
    		document.getElementById("monthly_DIV_p").style.display = "block"; 

    		document.getElementById("fixed_DIV_p").style.display = "none";
    		document.getElementById("interval_DIV1_p").style.display = "none";
    		document.getElementById("interval_DIV2_p").style.display = "none";
    		document.getElementById("yearly_DIV_p").style.display = "none"; 


    		document.getElementById("table_DIV").style.display = "none";

    	}
    	else if(f == "yearly_p"){
    		document.getElementById("yearly_DIV_p").style.display = "block"; 

    		document.getElementById("fixed_DIV_p").style.display = "none";
    		document.getElementById("interval_DIV1_p").style.display = "none";
    		document.getElementById("interval_DIV2_p").style.display = "none";
    		document.getElementById("monthly_DIV_p").style.display = "none"; 


    		document.getElementById("table_DIV").style.display = "none";

    	}else{
    		document.getElementById("fixed_DIV_p").style.display = "none";
    		document.getElementById("interval_DIV1_p").style.display = "none";
    		document.getElementById("interval_DIV2_p").style.display = "none";
    		document.getElementById("monthly_DIV_p").style.display = "none";
    		document.getElementById("yearly_DIV_p").style.display = "none";
    		document.getElementById("table_DIV_p").style.display = "none";

    	}
    }*/

    function generate_report(){
    	document.getElementById("table_DIV").style.display = "block";
    }


function addNewProjectBen(){
	document.getElementById("newProjectBen_DIV").style.display = "block";
}

function removeProjectBenRow(){
	document.getElementById("alhussienRowRemove").style.display = "none";
}

function removeBenInProject(){
	document.getElementById("row_remove").style.display = "none";
}

function addBenOnTableProj(){
	document.getElementById("row_tr").style.display = "block";
}

function modal_displayBenTable(){
	var a = document.getElementById("modal_proj_ben_type").value;

	if(a == 1){
		document.getElementById("proj_indv_table").style.display = "block";

		document.getElementById("proj_coop_table").style.display = "none";
	}
	else if(a == 2){
		document.getElementById("proj_coop_table").style.display = "block";

		document.getElementById("proj_indv_table").style.display = "none";
	}
	else{
		document.getElementById("proj_indv_table").style.display = "none";
		document.getElementById("proj_coop_table").style.display = "none";
	}
}

function modal_addBenTable(){
	var a = document.getElementById("modal_add_ben_type").value;

	if(a == 1){
		document.getElementById("addProjectBen_table_indv").style.display = "block";

		document.getElementById("addProjectBen_table_coop").style.display = "none";
	}
	else if(a == 2){
		document.getElementById("addProjectBen_table_coop").style.display = "block";

		document.getElementById("addProjectBen_table_indv").style.display = "none";
	}
	else{
		document.getElementById("addProjectBen_table_indv").style.display = "none";
		document.getElementById("addProjectBen_table_coop").style.display = "none";
	}
}

function showGraph_modal(){
	var g = document.getElementById("select_graph_type").value;
	if(g == "bar"){
		document.getElementById("bar_graph_div").style.display = "block";
		document.getElementById("line_graph_div").style.display = "none";
		document.getElementById("pie_graph_div").style.display = "none";

            var ctx = document.getElementById("barChart");
            var myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ["2014", "2015", "2016", "2017", "2018"],
                    datasets: [{
                        label: 'Yearly Income',
                        data: [12050, 23700, 14500, 18000, 21000],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero:true
                            }
                        }]
                    }
                }
            });

	}else if(g == "line"){
		document.getElementById("line_graph_div").style.display = "block";
		document.getElementById("bar_graph_div").style.display = "none";
		document.getElementById("pie_graph_div").style.display = "none";

        var ctxl = document.getElementById("lineChart");
            var myChart = new Chart(ctxl, {
                type: 'line',
                data: {
                    labels: ["August", "September", "October", "November", "December", "January"],
                    datasets: [{
                        label: 'Individual Monthly Income Progress',
                        data: [520, 850, 850, 710, 1000, 2500],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero:true
                            }
                        }]
                    }
                }
            });


	}else if(g == "pie"){
		document.getElementById("pie_graph_div").style.display = "block";
		document.getElementById("bar_graph_div").style.display = "none";
		document.getElementById("line_graph_div").style.display = "none";

        var ctxp = document.getElementById("pieChart");
            var myChart = new Chart(ctxp, {
                type: 'pie',
                data: {
                    labels: ['Not Schooled', 'Grade School', 'High School', 'College'],
                    datasets: [{
                        data: [37, 26, 19, 3],
                        labels: ['Not Schooled', 'Grade School', 'High School', 'College'],
                        backgroundColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgb(72, 244, 66)'
                        ]
                    }]

                    // These labels appear in the legend and in the tooltips when hovering different arcs
                    
                }   

            });

	}else{
		document.getElementById("bar_graph_div").style.display = "none";
		document.getElementById("line_graph_div").style.display = "none";
		document.getElementById("pie_graph_div").style.display = "none";

	}
}

//PRINT REPORT TABLE

function printData(){

   var divToPrint=document.getElementById("printTable");
   newWin= window.open("");
   newWin.document.write(divToPrint.outerHTML);
   newWin.print();
   newWin.close();
}


//year

function yearDIVcheck(){

    if(document.getElementById('yearC').checked){
        document.getElementById("displayyearDIV").style.display = "block";
        console.log(2);
    }else{
        document.getElementById("displayyearDIV").style.display = "none";
        console.log(1);
    }
}

function yearDIVcheck_i(){

    if(document.getElementById('yearC_i').checked){
        document.getElementById("displayyearDIV_i").style.display = "block";
        console.log(2);
    }else{
        document.getElementById("displayyearDIV_i").style.display = "none";
        console.log(1);
    }
}

function yearDIVcheck_p(){

    if(document.getElementById('yearC_p').checked){
        document.getElementById("displayyearDIV_p").style.display = "block";
        console.log(2);
    }else{
        document.getElementById("displayyearDIV_p").style.display = "none";
        console.log(1);
    }
}

function yearDIVcheck_c(){

    if(document.getElementById('yearC_c').checked){
        document.getElementById("displayyearDIV_c").style.display = "block";
        console.log(2);
    }else{
        document.getElementById("displayyearDIV_c").style.display = "none";
        console.log(1);
    }
}




/*FOR PROJECTS MULTI STEP*/

var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the crurrent tab

function showTab(n) {
  // This function will display the specified tab of the form...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  //... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  //... and run a function that will display the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n != 1 && !validateForm()) return false; //n == 1
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form...
  if (currentTab >= x.length) {
    // ... the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("select");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class on the current step:
  x[n].className += " active";
}

/*END FOR PROJECTS MULTI STEP*/






/*                                 PROJECT INDICATOR                          */

                                        function indicatorNewRow(){
                                            var table = document.getElementById("indicatorTable");
                                            var lastRow = table.rows.length;
                                            var row = table.insertRow(lastRow);
                                            var td1 = row.insertCell(0);
                                            var td2 = row.insertCell(1);
                                            var td3 = row.insertCell(2);
                                            var td4 = row.insertCell(3);
                                            td1.innerHTML = "<input type='text' class='form-control'>";
                                            td2.innerHTML = "<select class='form-control'><option>- Select -</option><option>Date</option><option>Number</option><option>Text</option></select>";
                                            td3.innerHTML = "<input type='text' class='form-control'>";
                                            td4.innerHTML = "<button class='btn btn-danger' onclick='indicatorDeleteRow()'>Remove</button>";
                                        }

                                        function indicatorDeleteRow(){
                                            var tableIndc = document.getElementById("indicatorTable");
                                            var lastRow = tableIndc.rows.length;
                                            var rowDel = lastRow - 1;
                                            tableIndc.deleteRow(rowDel);
                                        }

/*                                END PROJECT INDICATOR                        */

/*ADD NEW ASSOC MODAL IN PROJECT*/
function addNewAssocTable(){
    var tableAssoc = document.getElementById("addNewAssocTable");
    var lastRow = tableAssoc.rows.length;
    var row = tableAssoc.insertRow(lastRow);
    var td0 = row.insertCell(0);
    var td1 = row.insertCell(1);
    var td2 = row.insertCell(2);
    td0.innerHTML = '<input type="text" class="form-control" placeholder="Enter Member Name">';
    td1.innerHTML = '<input type="date" class="form-control">';
    td2.innerHTML = '<select class="form-control"><option>- Select -</option><option>Auditor</option><option>Member</option><option>Secretary</option><option>Treasurer</option></select>';

}

/*ADD NEW ASSOC MODAL IN PROJECT*/




/*PROF COOPERATIVE FORM*/
function bmFMale(){ /*board member total*/
    var male = document.getElementById("bmM").value;
    var female = document.getElementById("bmF").value;

    if(male == 0 || male == ""){
        male = 0;
        document.getElementById("bmM").placeholder = "0 Male";
    }
    if(female == 0 || female == ""){
        female = 0;
        document.getElementById("bmF").placeholder = "0 Female";
    }

    var mfTotal = parseInt(male) + parseInt(female);

    document.getElementById("bmTotal").value = mfTotal;
}
function cmFMale(){ /*cooperative member total*/
    var cmale = document.getElementById("cmM").value;
    var cfemale = document.getElementById("cmF").value;

    if(cmale == 0 || cmale == ""){
        cmale = 0;
        document.getElementById("cmM").placeholder = "0 Male";
    }
    if(cfemale == 0 || cfemale == ""){
        cfemale = 0;
        document.getElementById("cmF").placeholder = "0 Female";
    }
    var cmfTotal = parseInt(cmale) + parseInt(cfemale);

    document.getElementById("cmTotal").value = cmfTotal;
}



















//Axe JS Barangay Profile


  function addRowFam(addFamily) {

      var table = document.getElementById("addFamily");

      var rowCount = table.rows.length;
      var row = table.insertRow(rowCount);

      var colCount = table.rows[0].cells.length;

      for(var i=0; i<colCount; i++) {

        var newcell = row.insertCell(i);

        newcell.innerHTML = table.rows[0].cells[i].innerHTML;
        //alert(newcell.childNodes);
        switch(newcell.childNodes[0].type) {
          case "text":
              newcell.childNodes[0].value = "";
              break;
          case "select-one":
              newcell.childNodes[0].selectedIndex = false;
              break;
          case "select-one":
              newcell.childNodes[0].selectedIndex = false;
              break;
        }
      }
    }


  function SelectEo(){

    var eo = document.getElementById("eoSelect").value;

    if (eo == 11) {
      document.getElementById('otherEo').style.display = "none";
      document.getElementById('nameOrg').style.display = "block";
      document.getElementById('blackSpace').style.display = "none";
      document.getElementById('nameEo').style.display = "none";
    }
    else if (eo == 22) {
      document.getElementById('otherEo').style.display = "none";
      document.getElementById('nameOrg').style.display = "block";
      document.getElementById('blackSpace').style.display = "none";
      document.getElementById('nameEo').style.display = "none";
    }
    else if (eo == 33) {
      document.getElementById('otherEo').style.display = "none";
      document.getElementById('nameOrg').style.display = "block";
      document.getElementById('blackSpace').style.display = "none";
      document.getElementById('nameEo').style.display = "none";
    }
    else if (eo == 44) {
      document.getElementById('otherEo').style.display = "none";
      document.getElementById('nameOrg').style.display = "block";
      document.getElementById('blackSpace').style.display = "none";
      document.getElementById('nameEo').style.display = "none";
    }
    else if (eo == 55) {
      document.getElementById('otherEo').style.display = "none";
      document.getElementById('nameOrg').style.display = "block";
      document.getElementById('blackSpace').style.display = "none";
      document.getElementById('nameEo').style.display = "none";
    }
    else if (eo == 66) {
      document.getElementById('otherEo').style.display = "block";
      document.getElementById('nameOrg').style.display = "none";
      document.getElementById('blackSpace').style.display = "block";
      document.getElementById('nameEo').style.display = "block";
    }

  }

  function showFemale(){

     var fem = document.getElementById("selectGender").value;

     if (fem == "selectGender") {
        document.getElementById('pregnant').style.display = "none";
        document.getElementById('lactating').style.display = "none";
        document.getElementById('wra').style.display = "none";
     }
     else if (fem == "female") {
        document.getElementById('pregnant').style.display = "block";
        document.getElementById('lactating').style.display = "block";
        document.getElementById('wra').style.display = "block";
     }
     else if (fem == "male") {
      document.getElementById('pregnant').style.display = "none";
        document.getElementById('lactating').style.display = "none";
        document.getElementById('wra').style.display = "none";
     }
  }

  function showLivelihood(){

    var live = document.getElementById("selectLivelihood").value;

    if (live == "select1"){
      document.getElementById('farming').style.display = "none";
      document.getElementById('livePoultry').style.display = "none";
      document.getElementById('fishingLive').style.display = "none";
    }
    else if (live == "farm") {
      document.getElementById('farming').style.display = "block";
      document.getElementById('livePoultry').style.display = "none";
      document.getElementById('fishingLive').style.display = "none"
      
    }
    else if (live == "lp") {
      document.getElementById('farming').style.display = "none";
      document.getElementById('livePoultry').style.display = "block";
      document.getElementById('fishingLive').style.display = "none"
    }
    else if (live == "fish") {
      document.getElementById('farming').style.display = "none";
      document.getElementById('livePoultry').style.display = "none";
      document.getElementById('fishingLive').style.display = "block"
    }
  }

  function addSkill(tableSkill) {

      var table = document.getElementById("tableSkill");

      var rowCount = table.rows.length;
      var row = table.insertRow(rowCount);

      var colCount = table.rows[0].cells.length;

      for(var i=0; i<colCount; i++) {

        var newcell = row.insertCell(i);

        newcell.innerHTML = table.rows[0].cells[i].innerHTML;
        //alert(newcell.childNodes);
        switch(newcell.childNodes[0].type) {
          case "text":
              newcell.childNodes[0].value = "";
              break;
          case "text":
              newcell.childNodes[0].checked = false;
              break;
          case "select-one":
              newcell.childNodes[0].selectedIndex = 0;
              break;
        }
      }
    }

   function addLp(tableLp) {

      var table = document.getElementById("tableLp");

      var rowCount = table.rows.length;
      var row = table.insertRow(rowCount);

      var colCount = table.rows[0].cells.length;

      for(var i=0; i<colCount; i++) {

        var newcell = row.insertCell(i);

        newcell.innerHTML = table.rows[0].cells[i].innerHTML;
        //alert(newcell.childNodes);
        switch(newcell.childNodes[0].type) {
          case "text":
              newcell.childNodes[0].value = "";
              break;
          case "text":
              newcell.childNodes[0].checked = false;
              break;
          case "select-one":
              newcell.childNodes[0].selectedIndex = 0;
              break;
        }
      }
    } 

function addPoultry(tablePoultry) {

      var table = document.getElementById("tablePoultry");

      var rowCount = table.rows.length;
      var row = table.insertRow(rowCount);

      var colCount = table.rows[0].cells.length;

      for(var i=0; i<colCount; i++) {

        var newcell = row.insertCell(i);

        newcell.innerHTML = table.rows[0].cells[i].innerHTML;
        //alert(newcell.childNodes);
        switch(newcell.childNodes[0].type) {
          case "text":
              newcell.childNodes[0].value = "";
              break;
          case "text":
              newcell.childNodes[0].checked = false;
              break;
          case "select-one":
              newcell.childNodes[0].selectedIndex = 0;
              break;
        }
      }
    }   
//End Axe Js Barangay Profile