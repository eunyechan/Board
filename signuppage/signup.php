<?php

  header('Content-Type:text/html; charset=utf-8');

  $id=$_POST['id'];
  $pw=$_POST['pw'];
  $email=$_POST['email'];

  $conn=mysqli_connect("localhost", "eunyechan", "hshong1106!", "eunyechan");

  mysqli_query($conn, 'set names utf-8');

  $sql="INSERT INTO `users_test` (id, pw, email) VALUES ('$id', '$pw', '$email')";
  $result=mysqli_query($conn, $sql);

  if($result){
    echo '저장됐습니다';
  }else{
    echo '에러';
  }

  mysqli_close($conn);
  
?>