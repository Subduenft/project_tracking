<?php
$connection = mysqli_connect("localhost","root","");
$db = mysqli_select_db($connection, 'myprojects');

    if(isset($_POST['updatedata']))
    {
        $user_address = $_POST['edit_user_address'];
        $proj_id = $_POST['edit_proj_id'];
        $mint_date = $_POST['edit_mint_date'];
        $project_name = $_POST['edit_project_name'];
        $mintlist = $_POST['edit_mintlist'];
        $price = $_POST['edit_price'];
        $website = $_POST['edit_website'];
        $twitter = $_POST['edit_twitter'];
        $note = $_POST['edit_note'];


        // if $user_address != undefined do update else alert "Please Connect Wallet" and abort/query not run


        $query = "UPDATE projects SET mint_date='$mint_date', project_name='$project_name', mintlist=' $mintlist', price=' $price', website=' $website', twitter=' $twitter', note=' $note' WHERE proj_id='$proj_id' ";
        $query_run = mysqli_query($connection, $query);

        if($query_run)
        {
            echo '<script> alert("Project Updated"); </script>';
            header("Location:index.html");
        }
        else
        {
            echo '<script> alert("Project Not Updated"); </script>';
        }
    }
