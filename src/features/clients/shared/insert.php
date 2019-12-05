<?php
    include 'configdb.php';
    $con = mysqli_connect($local, $usuario, $senha);
    $dados = mysqli_select_db($con, $banco);
    $json = file_get_contents('php://input');
    $obj = json_decode($json, true);
    $name = $obj['name'];
    $surname = $obj['surname'];
    $age = $obj['age'];
    $inserir = "INSERT INTO person (name, surname, age) VALUES ('$name', '$surname', '$age')";
    $sql = mysqli_query($con, $inserir);
    $msg = 'Dados inseridos com sucesso';
    $json = json_encode($msg);
    echo $json;
    mysqli_close($con);