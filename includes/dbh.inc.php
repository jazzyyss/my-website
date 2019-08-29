<?php

$servername = "localhost";
$username= "root";
$password="lucifer";
$dbname="websiteProject";

$conn = mysqli_connect($servername,$username,$password,$dbname);

if ($conn) {
	
	echo "";
}
else{
	echo "connection aborted".mysqli_connect_error();	
}

