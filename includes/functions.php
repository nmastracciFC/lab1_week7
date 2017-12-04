<?php

$user = "root";
$pass = "root";
$host = "localhost";
$db = "db_cooperinfo";

$conn = mysqli_connect($host, $user, $pass, $db);
mysqli_set_charset($conn, 'utf-8');

if (!$conn) {
	echo "something broke";
	exit;
}
// echo "connected";


$myQuery = "SELECT * FROM mainmodel";
$result = mysqli_query($conn, $myQuery);

$rows = array();

while($row = mysqli_fetch_assoc($result)) {
	$rows[] = $row;
}

// var_dump($rows);

// echo json_encode($rows);

//get a single row (one result) using query parameter
//if there is a carModel parameter
if (isset($_GET['carModel'])) {
	$car = $_GET['carModel'];

	$myQuery = "SELECT * FROM mainmodel WHERE model = '$car'";
	$result = mysqli_query($conn, $myQuery);

	$row = mysqli_fetch_assoc($result);

	echo json_encode($row);

}







?>









