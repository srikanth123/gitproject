<?php 
  //$a=0;
 $firstname_field=$_REQUEST['firstname'];
 $lastname_field=$_REQUEST['lastname'];
 $emergency_field=$_REQUEST['emergency'];
 $phonenumber_field=$_REQUEST['phonenumber'];
 $employee_field=$_REQUEST['employee'];
 $address_field=$_REQUEST['address'];
 $visas_field=$_REQUEST['visas'];
 $education_field=$_REQUEST['education'];
 $email_field=$_REQUEST['email'];
 $aboutyou_field=$_REQUEST['aboutyou'];
 $doc = new DOMDocument(); 
 $doc->load( 'personalinfo.xml', LIBXML_NOBLANKS);
 $doc->formatOutput = true;  
 $root = $doc->documentElement;
  $b = $doc->createElement( "minfo" );
  //$attr_user_id = new DOMAttr('id', '$firstname_field'); 
  //$b->setAttributeNode($attr_user_id); 
  //$doc->addAttribute('id', '001');
   
  $firstname = $doc->createElement( "firstname"," $firstname_field"); 
  $b->appendChild( $firstname ); 
  
  $lastname = $doc->createElement( "lastname"," $lastname_field"); 
  $b->appendChild( $lastname ); 

  $emergency = $doc->createElement( "emergency"," $emergency_field"); 
  $b->appendChild( $emergency); 
  
  $phonenumber = $doc->createElement( "phonenumber"," $emergency_field"); 
  $b->appendChild( $phonenumber);
  
  $employee = $doc->createElement( "employee","$employee_field" ); 
  $b->appendChild( $employee );  
  
  $address = $doc->createElement( "address","$address_field" ); 
  $b->appendChild( $address ); 
  
  $visas = $doc->createElement( "visas","$visas_field" ); 
  $b->appendChild( $visas ); 
  
  $education = $doc->createElement( "education","$education_field" ); 
  $b->appendChild( $education);
  
  $email = $doc->createElement( "email","$email_field" );  
  $b->appendChild( $email );  
  
  $aboutyou = $doc->createElement( "aboutyou","$aboutyou_field" );  
  $b->appendChild( $aboutyou );  
   
  $root->appendChild( $b ); 
  print $doc->save('personalinfo.xml'); 

?>
