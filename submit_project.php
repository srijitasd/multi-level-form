<?php


$conn = new mysqli("localhost", "root", "", "progrowthhack");

if ($conn->connect_error) {
    die("could not connect to the database" . $conn->connect_error );
}else {
    echo "connected";
}

$service_type = $_POST['serviceTypeValue'];
$product_type = $_POST['productTypeValue'];
$project_name = $_POST['projectNameValue'];
$project_description = $_POST['projectDescripValue'];
$website_url = $_POST['webUrlValue'];
$client_name = $_POST['clientNameValue'];
$client_number = $_POST['clientNumberValue'];
$client_country = $_POST['clientCountryValue'];
$complexity = $_POST['complexityTypeValue'];

$sql = "INSERT INTO test (service_name, product_type, project_name, project_description, website_url, client_name, client_number, client_country, complexity) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
$stmt = mysqli_stmt_init($conn);

if (!mysqli_stmt_prepare($stmt, $sql)) {
    echo 10;
    //header("location: ../../add_category.php?error=sqlerror");
exit();
}else{
    mysqli_stmt_bind_param($stmt, "sssssssss", $service_type, $product_type, $project_name, $project_description, $website_url, $client_name, $client_number, $client_country, $complexity);
    mysqli_stmt_execute($stmt);
    echo 1;
    exit();
}