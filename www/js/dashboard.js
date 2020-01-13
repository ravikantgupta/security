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