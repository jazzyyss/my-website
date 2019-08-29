<?php
if(isset($_POST['querySubmit'])){
    $name=$_POST['name'];
    $email=$_POST['email'];
    $query=$_POST['feedback'];
    if(empty($name) || empty($email) || empty($query)){
        header("Location: ../nav/query.html?emptyFields");
        exit();
    }elseif(!filter_var($email, FILTER_VALIDATE_EMAIL)){
        header("Location: ../nav/query.html?invalidEmail");
        exit();
    }else{
        require_once 'dbh.inc.php';
        $sql="insert into feedback(name,email,query) values(?,?,?)";
        $stmt=mysqli_stmt_init($conn);
        if(!mysqli_stmt_prepare($stmt,$sql)){
            header("Location: ../nav/query.html?sqlError");
            exit();
        }else{
            mysqli_stmt_bind_param($stmt,"sss",$name,$email,$query);
            mysqli_stmt_execute($stmt);
            header("Location: ../nav/query.html");
            exit();
        }
    }
}else{
    header("Location: ../index.html");
    exit();
}