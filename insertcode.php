<?php
$connection = mysqli_connect("localhost", "root", "");
$db = mysqli_select_db($connection, 'myprojects');

if(isset($_POST['insertdata']))
{
    $user_address = $_POST['user_address'];
    $mint_date = $_POST['mint_date'];
    $project_name = $_POST['project_name'];
    $mintlist = $_POST['mintlist'];
    $price = $_POST['price'];
    $website = $_POST['website'];
    $twitter = $_POST['twitter'];
    $note = $_POST['note'];

    $query = "INSERT INTO projects (`user_address`,`mint_date`,`project_name`,`mintlist`,`price`,`website`,`twitter`,`note`) 
    VALUES ('$user_address','$mint_date','$project_name','$mintlist','$price','$website','$twitter','$note')";
    $query_run = mysqli_query($connection, $query);

    if($query_run)
    {
        echo '<script> alert("Data Saved"); </script>';
        header('Location: index.html');
    }
    else
    {
        echo '<script> alert("Data Not Saved"); </script>';
    }
}
