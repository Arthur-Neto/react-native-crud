<?php
    include 'configdb.php';
    $con = mysqli_connect($local, $usuario, $senha);
    $dados = mysqli_select_db($con, $banco);
    $json = file_get_contents('php://input');
    $obj = json_decode($json, true);
    $buscar = "SELECT * FROM person";
    $sql = mysqli_query($con, $buscar);
    $rowCount = mysqli_num_rows($sql);

    if($rowCount == 0) {
        $array[] = "Não existem usuários cadastrados";
    } else {
        while ($data = mysqli_fetch_assoc($sql)) {
            $array[] = $data;
        }
    }

    $msg = $array;
    $json = json_encode($msg);
    echo $json;
    mysqli_close($con);