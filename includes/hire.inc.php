<?php
if(isset($_POST['hireDeveloper'])){
    $email=$_POST['email'];
    $topic=$_POST['whatFor'];
    $budget=$_POST['budget'];
    $details=$_POST['description'];

    if(empty($email) || empty($topic) || empty($budget) || empty($details)){
        header("Location: ../nav/hire.html?emptyFields");
        exit();
    }elseif(!filter_var($email, FILTER_VALIDATE_EMAIL)){
        header("Location: ../nav/hire.html?invalidEmail");
        exit();
    }else{
        require_once 'dbh.inc.php';
        $sql="insert into hire(email,topic,budget,description) values(?,?,?,?)";
        $stmt=mysqli_stmt_init($conn);
        if(!mysqli_stmt_prepare($stmt,$sql)){
            header("Location: ../nav/hire.html?sqlError");
            exit();
        }else{
            mysqli_stmt_bind_param($stmt,"ssss",$email,$topic,$budget,$details);
            mysqli_stmt_execute($stmt);
            header("Location: ../nav/hire.html");
            exit();
        }
    }
}else{
    header("Location: ../index.html");
}