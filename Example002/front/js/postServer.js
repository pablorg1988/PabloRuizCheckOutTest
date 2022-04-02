
	function paymentCall() {
		
		     var data={
            "operation": "op1"
         /*    "recipe_eaters": eaters,
            "recipe_time": time,
            "recipe_calories": calories,
            "recipe_steps": contenidoPaso,
            "recipe_dif": dif,
            "recipe_type": tipo,
            "recipe_ingredients": ingredientesComa,
            "recipe_name": nameRecipe,
            "recipe_tags": etiquetasComa,
            "recipe_namePhoto": link,
            "recipe_email": emailUsuario,
            "recipe_startDate": strDate */
        };
		
		
	 $.ajax({
                url: '../php/php_callPaymentsAPI.php',
                data: data,
                type: 'post',
                async: false,
                success: function(data) {      
                    if (data =='Authorized')
                    {                            
                        new Messi('The Payment has been Authorized', {
                            title: 'Payment done', 
                            modal: true, 
                            titleClass: 'success', 
                            buttons: [{
                                    id: 0, 
                                    label: 'Close', 
                                    val: 'X'
                                }]
                        });
                       
                    }
                    else{
                        new Messi('Error in the Payment', {
                            title: 'Error', 
                            modal: true, 
                            titleClass: 'anim error', 
                            buttons: [{
                                    id: 0, 
                                    label: 'Close', 
                                    val: 'X'
                                }]
                        });              
                    }  
                },
                error: function(xhr, textStatus, errorThrown) {
                    new Messi('There has been an error', {
                        title: 'Please check payment method', 
                        modal: true
                    });

                }

            });
			
	}
	