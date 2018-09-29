<?php

if(isset($_POST["submit"]))

{
$name=$_POST['name'];

$email=$_POST['email'];

$phone=$_POST['phone'];

$subject=$_POST['subject'];

$message=$_POST['message'];

$to  = 'gagan.khajuria@livetechnician.com'; 

$subject = "Message From topppcservices.com";

$message = "

name=".$name. "<br /> 

email=".$email. "<br />

phone=".$phone. "<br />

subject=".$subject. "<br />

message=".$message;

$headers  = 'MIME-Version: 1.0' . "\r\n";

$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

$headers .= 'From: Top PPC Services <support@topppcservices.com>' . "\r\n";

$headers .= 'Cc: samay@livetechnician.com ' . "\r\n";

$mail = mail($to, $subject, $message, $headers);

if($mail)

{
	?>

	<script type="text/javascript">
	alert('Form Submitted Successfully....');
	window.location.href = "index.php";
	//header('location:index.php');
</script>

<?php
}
}
else

{

?>

	<script type="text/javascript">

	alert('Please Try Again....');

	window.history.back();

    </script>

<?php

}

?>