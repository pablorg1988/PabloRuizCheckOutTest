<?php

$op = $_POST['operation'];
$result;

$type = 'card';
$number = '4242424242424242';
$expiry_month = 8;
$expiry_year = 2023;
$cvv = 100;
$amount = 1099;
$currency = 'USD';
$reference = 'PHP-reference';
$apikey = 'sk_test_0b9b5db6-f223-49d0-b68f-f6643dd4f808';

// The data to send to the API
$postData = array(
  
    'source' => array('type' => $type, 'number' => $number, 'expiry_month' => $expiry_month, 'expiry_year' => $expiry_year,'cvv' => $cvv),
    'amount' => $amount,
    'currency' => $currency,
	'reference' => $reference
);

// Setup cURL
$ch = curl_init('https://api.sandbox.checkout.com/payments');
curl_setopt_array($ch, array(
    CURLOPT_POST => TRUE,
    CURLOPT_RETURNTRANSFER => TRUE,
    CURLOPT_HTTPHEADER => array(
        'Authorization: '.$apikey,
        'Content-Type: application/json'
    ),
    CURLOPT_POSTFIELDS => json_encode($postData)
));

// Send the request
$response = curl_exec($ch);

// Check for errors
if($response === FALSE){
    die(curl_error($ch));
}

// Decode the response
$responseData = json_decode($response, TRUE);

// Close the cURL handler
curl_close($ch);

// Print the date from the response

$result=$responseData['status'];
echo ($result);

?>
