var userdata=JSON.parse(window.localStorage.getItem("userdata"));

function securityDashboard()
{	
           jQuery.ajax({					  
						type:'POST',  
						url:base_url+"/security/dashboad",																
						dataType: 'json',
						data: {guard_id: userdata.id},
						success:function(data)
							 {
                                jQuery('.mask').hide();
							       jQuery('.loading').hide();
								   
							   var visitorhtml='<div class="col-12"><div class="table-title"><h6>Visitor List</h6></div></div>';
							    visitorhtml+='<div class="col-md-12"><div class="table-responsive"><table class="table"><thead>\
													<tr><th>Mobile No.</th><th class="green">Time In</th><th class="red">Time Out</th><th>Status</th></tr>\
													</thead><tbody>';
							   if(data.success.status=='1')
							   {                                
                                  
                                   for (i in data.success.data) {										  
										  visitorhtml+='<tr>\
										  <td >\<span >'+data.success.data[i].mobile+'</span></td>\
										  <td><span class="green">'+data.success.data[i].entry+'</span></td>\
                                          <td><span class="red">'+data.success.data[i].exit+'</span></td>';
											if(data.success.data[i].status=='1')
											 {									
											  visitorhtml+='<td><span class="green">Success</span></td>';
											 }else
											 {
											  visitorhtml+='<td><span class="yellow">Pending</span></td>';
											 }
											 
											 visitorhtml+='</tr>';										  
										}
                                        visitorhtml+='</tbody></table></div></div>';										
									 jQuery('#vistorlistbody').html(visitorhtml);
                                   										
							   }    

							}
			           });
	
}

function salesPersonDashboard()
{
	
	jQuery.ajax({					  
						type:'POST',  
						url:base_url+"/sales-person/dashboad",																
						dataType: 'json',
						data: {user_id: userdata.id},
						success:function(data)
							 {	
                                jQuery('.mask').hide();
							       jQuery('.loading').hide();							 
							   var resulthtml='<div class="col-12"><div class="table-title"><h6>Sales Lead Listing</h6></div></div>';
							    resulthtml+='<div class="col-md-12"><div class="table-responsive table-height"><table class="table"><thead>\
													<tr><th>Name</th><th>Email</th><th>Plan Name</th><th>Status</th></tr>\
													</thead><tbody>';
							   if(data.success.status=='1')
							   {
                                  								   
                                  
                                   for (i in data.success.data) {										  
										  resulthtml+='<tr id="tr'+data.success.data[i].id+'">\
										  <td >'+data.success.data[i].name+'</td>\
										  <td>'+data.success.data[i].email+'</td>\
                                          <td>'+data.success.data[i].plan_name+'</td>\
										  <td><a href="javascript:void(0)" class="btn btn-success btn-sm" onclick="viewLead('+data.success.data[i].id+')"><i class="fa fa-eye"></i></a>\
										     <a href="javascript:void(0)" class="btn btn-danger btn-sm" onclick="removeLead('+data.success.data[i].id+')"><i class="fa fa-trash-o"></i></a></td>';
										  resulthtml+='</tr>';										  
										}
                                        resulthtml+='</tbody></table></div></div>';										
									 jQuery('#vistorlistbody').html(resulthtml);
                                   										
							   }    

							}
			           });
	
}

function salesManagerDashboard()
{
	
	jQuery.ajax({					  
						type:'POST',  
						url:base_url+"/sales-manager/dashboad",																
						dataType: 'json',
						data: {user_id: userdata.id},
						success:function(data)
							 {	
                                 jQuery('.mask').hide();
							       jQuery('.loading').hide();							 
							   var resulthtml='<div class="col-12"><div class="table-title"><h6>Sales Person Listing</h6></div></div>';
							    resulthtml+='<div class="col-md-12"><div class="table-responsive table-height"><table class="table"><thead>\
													<tr><th>Name</th><th>Email</th><th>Mobile</th><th>Status</th></tr>\
													</thead><tbody>';
							   if(data.success.status=='1')
							   {
                                  								   
                                  
                                   for (i in data.success.data) {										  
										  resulthtml+='<tr id="tr'+data.success.data[i].id+'">\
										  <td >'+data.success.data[i].name+'</td>\
										  <td>'+data.success.data[i].email+'</td>\
                                          <td>'+data.success.data[i].mobile+'</td>\
										  <td><a href="javascript:void(0)" class="btn btn-primary btn-sm" onclick="editSalesPerson('+data.success.data[i].id+')"><i class="fa fa-pencil"></i></a>\
										     <a href="javascript:void(0)" class="btn btn-danger btn-sm" onclick="removeSalesPerson('+data.success.data[i].id+')"><i class="fa fa-trash-o"></i></a></td>';
										  resulthtml+='</tr>';										  
										}
                                        resulthtml+='</tbody></table></div></div>';										
									 jQuery('#vistorlistbody').html(resulthtml);
                                   										
							   }    

							}
			           });
	
}


function salesManagerLead()
{	
	jQuery.ajax({					  
						type:'POST',  
						url:base_url+"/sales-manager/list-sales-leads",																
						dataType: 'json',
						data: {user_id: userdata.id},
						success:function(data)
							 {	
							    jQuery('.mask').hide();
							      jQuery('.loading').hide();
							   var resulthtml='<div class="col-12"><div class="table-title"><h6>Sales Lead Listing</h6></div></div>';
							    resulthtml+='<div class="col-md-12"><div class="table-responsive table-height"><table class="table"><thead>\
													<tr><th>Name</th><th>Email</th><th>Plan Name</th><th>Status</th></tr>\
													</thead><tbody>';
							   if(data.success.status=='1')
							   {
                                 								   
                                  
                                   for (i in data.success.data) {										  
										  resulthtml+='<tr id="tr'+data.success.data[i].id+'">\
										  <td >'+data.success.data[i].name+'</td>\
										  <td>'+data.success.data[i].email+'</td>\
                                          <td>'+data.success.data[i].plan_name+'</td>\
										  <td><a href="javascript:void(0)" class="btn btn-success btn-sm" onclick="viewLead('+data.success.data[i].id+')"><i class="fa fa-eye"></i></a>\
										     <a href="javascript:void(0)" class="btn btn-danger btn-sm" onclick="removeLead('+data.success.data[i].id+')"><i class="fa fa-trash-o"></i></a></td>';
										  resulthtml+='</tr>';										  
										}
                                        resulthtml+='</tbody></table></div></div>';										
									 jQuery('#vistorlistbody').html(resulthtml);
                                   										
							   }   

							}
			           });
	
}

function ownerDashboard()
	{	

        jQuery.ajax({					  
						type:'POST',  
						url:base_url+"/security/flat-visitor-list",																
						dataType: 'json',
						data: {id: userdata.id},
						success:function(data)
							 {
							   jQuery('.mask').hide();
							   jQuery('.loading').hide();
								  
							   var visitorhtml='<div class="col-12"><div class="table-title"><h6>Visitor List</h6></div></div>';
							   visitorhtml+='<div class="col-md-12"><div class="table-responsive"><table class="table"><thead>\
							      <tr><th>Mobile No.</th><th class="">Date</th><th class="red">Time In</th><th>Status</th></tr>\
                                  </thead><tbody>';
							   if(data.success.status=='1')
							   {                                 
                                  
                                   for (i in data.success.data) {						
										  
										  visitorhtml+='<tr>\
										  <td >\<span >'+data.success.data[i].mobile+'</span></td>\
										  <td><span >'+data.success.data[i].entry_date+'</span></td>\
                                          <td><span class="green">'+data.success.data[i].entry_time+'</span></td>';
									if(data.success.data[i].status=='1')
                                     {									
                                      visitorhtml+='<td><span class="green">Success</span></td>';
									 }else
									 {
									  visitorhtml+='<td><span class="yellow">Pending</span></td>';
									 }
									 
                                       visitorhtml+='</tr>';
										  
										}
                                     
									 visitorhtml+='</tbody></table></div></div>';	
										
									 jQuery('#vistorlistbody').html(visitorhtml);
                                   										
							   }    

							}
			           });
         		
}

function salesBuildingOwnerDashboard()
	{	

        jQuery.ajax({					  
						type:'POST',  
						url:base_url+"/builder-owner/dashboad",																
						dataType: 'json',
						data: {user_id: userdata.id},
						success:function(data)
							 {
							   jQuery('.mask').hide();
							   jQuery('.loading').hide();
							   if(data.success.status=='1')
							   {
							   var sbohtml='<div class="col-12">\
										<div class="table-title">\
											<h6>Live Tracking</h6>\
										</div>\
									</div>\
									<div class="col-6 pr-2">\
										<div class="iconic-w-wrap number-rotate">\
											<div class="main-img">\
												<img src="https://wps-dev.com/dev/securityguard/public/backend/images/admin/icon1.png"\
													alt="">\
											</div>\
											<div class="w-meta-info">\
												<span class="w-meta-value number-animate bold">'+data.success.data.total_visitor+'</span>\
												<span class="w-meta-value number-animate">VISITORS</span>\
											</div>\
										</div>\
									</div>\
									<div class="col-6 pl-2">\
										<div class="iconic-w-wrap number-rotate">\
											<div class="main-img">\
												<img src="https://wps-dev.com/dev/securityguard/public/backend/images/admin/icon1.png"\
													alt="">\
											</div>\
											<div class="w-meta-info">\
												<span class="w-meta-value number-animate bold">'+data.success.data.total_securtitygard+'</span>\
												<span class="w-meta-value number-animate">GUARDS</span>\
											</div>\
										</div>\
										</div>\
									<div class="col-6 pr-2">\
										<div class="iconic-w-wrap number-rotate">\
											<div class="main-img">\
												<img src="https://wps-dev.com/dev/securityguard/public/backend/images/admin/icon1.png"\
													alt="">\
											</div>\
											<div class="w-meta-info">\
												<span class="w-meta-value number-animate bold">'+data.success.data.flats+'</span>\
												<span class="w-meta-value number-animate">Total Flats</span>\
											</div>\
										</div>\
									</div>\
									<div class="col-6 pl-2">\
										<div class="iconic-w-wrap">\
											<div class="main-img">\
												<img src="https://wps-dev.com/dev/securityguard/public/backend/images/admin/icon1.png"\
													alt="">\
											</div>\
											<div class="w-meta-info">\
												<span class="w-meta-value number-animate bold">'+data.success.data.totol_vip+'</span>\
												<span class="w-meta-value number-animate">Total VIP</span>\
											</div>\
										</div>\
									  </div>';   
																			
									 jQuery('#vistorlistbody').html(sbohtml);
                                   										
							   }    

							}
			           });
         		
}