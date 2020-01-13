var base_url='https://wps-dev.com/dev/securityguard/public/api';

 function flippageup(page) {


             window.plugins.nativepagetransitions.slide({

                 "direction" : "up",
                  "href" : page
             });
           }

function bakpage(page) {


		 window.plugins.nativepagetransitions.slide({
			 "direction" : "right",
			 "href" : page
		 });
	   }
		   
function nextpage(page) {


		 window.plugins.nativepagetransitions.slide({
			 "direction" : "left",
			 "href" : page
		 });
	}	   


function bakpagedwn(page) {

		 window.plugins.nativepagetransitions.slide({
			 "direction" : "down",
			 "href" : page
		 });
	   }



function menuList()
{
	
   var menulists=JSON.parse(window.localStorage.getItem("userdata"));

   if(menulists)
   {
	   var menuhtml='<li class="nav-item"><span><img src="images/visitors.png" alt=""></span>\
                    <a class="nav-link"onclick="nextpage(\'dashboard.html\')" href="javascript:void(0)">Dashboard</a></li>';	
					
     for (i in menulists.menulist) {
		 
		 menuhtml+='<li class="nav-item"><span><img src="'+menulists.menulist[i].icone+'" alt=""></span>\
                    <a class="nav-link"onclick="nextpage(\''+menulists.menulist[i].page+'\')" href="javascript:void(0)">'+menulists.menulist[i].label+'</a></li>';
				
	 }

        menuhtml+='<li class="nav-item pl-5"><button class="btn sign-btn" onclick="logout()">SIGN OUT</button></li>';
	 
	 jQuery('#menulist').html(menuhtml);
   } 
   

}

function openNav() {
			document.getElementById("mySidenavRaj").style.width = "80%";
		}

function closeNav() {
	document.getElementById("mySidenavRaj").style.width = "0";
}

function viewLead(leadid)
{
	window.localStorage.setItem("leadid", leadid);	
	nextpage('view-sales-lead.html');
}

function removeLead(leadid)
{
	
	 jQuery('.mask').show();
	  jQuery('.loading').show();
             jQuery.ajax({					  
						type:'POST',  
						url:base_url+"/sales-person/delete-leads",																
						dataType: 'json',
						data: {id: leadid},
						success:function(data)
							 {	
							 
							   jQuery('.mask').hide();
				               jQuery('.loading').hide();
							   if(data.success.status=='1')
							   { 
                                   jQuery('#tr'+leadid).remove(); 								
							   }    

							}
			           }); 
	
}

function editSalesPerson(salespersonid)
{
	window.localStorage.setItem("salespersonid", salespersonid);	
	nextpage('edit-sales-person.html');
	
}

function removeSalesPerson(salespersonid)
{
	
	 jQuery('.mask').show();
	 jQuery('.loading').show();
             jQuery.ajax({					  
						type:'POST',  
						url:base_url+"/sales-manager/delete-sales-person",																
						dataType: 'json',
						data: {id: salespersonid},
						success:function(data)
							 {
							 
							   jQuery('.mask').hide();
				               jQuery('.loading').hide();
							   if(data.success.status=='1')
							   { 
                                   jQuery('#tr'+salespersonid).remove(); 								
							   }    

							}
			           }); 
	
}

function logout() {

  window.localStorage.removeItem("loggedIn");
  window.localStorage.removeItem("userdata");   
  nextpage('login.html');

}
