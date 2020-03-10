<?php 
    if($_POST) {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $phone = isset($_POST['phone']) ? $_POST['phone']: null;
        $subject = 'Enviado desde contacto woz';
        $message = $_POST['message'];
        $headers = 'MIME-Version: 1.0' . "\r\n";
        $headers .= 'Content-type: text/html; charset=UTF-8'. "\r\n";
        $headers .= 'To: info@web-out.com'. "\r\n";
        $headers .= 'From: '.$name.' <'.$email.'>'. "\r\n";

        $html = '
        <html>
            <head>
                <title>'.$subject.'</title>
            </head>
            <body>
                '.'<p><strong>Nombres: </strong>'.$name.'</p>'.
                ($phone ? '<p><strong>Teléfono: </strong>'.$phone. '</p>' : '')
                .'<p><strong>Mensaje: </strong>'.$message.'</p>
            </body>
        </html>
        ';
        if(mail('info@web-out.com', $subject, $html, $headers)){
            print "Correo enviado";
        } else {
            print "Problema enviando el email";
        }

    }
?>