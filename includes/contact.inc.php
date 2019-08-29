<?php
if(isset($_POST['getInTouch'])){
    $name=$_POST['getInTouch'];
    $email=$_POST['email'];
    if(empty($email)){
        header("Location: ../nav/contact.html?emptyFields");
        exit();
    }elseif(!filter_var($email, FILTER_VALIDATE_EMAIL)){
        header("Location: ../nav/contact.html?invalidEmail");
        exit();
    }else{
        require_once "dbh.inc.php";
        $sql="insert into contact(email,developer) values(?,?)";
        $stmt=mysqli_stmt_init($conn);
        if(!mysqli_stmt_prepare($stmt,$sql)){
            header("Location: ../nav/contact.html?sqlError");
            exit();
        }else{
            mysqli_stmt_bind_param($stmt,"ss",$email,$name);
            mysqli_stmt_execute($stmt);
            header("Location: ../nav/contact.html");
            exit();
        }
    }
    header("Location: ../nav/contact.html");
}else{
    header("Location: ../index.html");
    exit();
}