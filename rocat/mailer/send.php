<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
// $name = $_POST['name'];
// $email = $_POST['email'];
// $text = $_POST['text'];
// $file = $_FILES['myfile'];
$msg_box = ""; // в этой переменной будем хранить сообщения формы
$postData = file_get_contents('php://input');
$data = json_decode($postData, true);
$bascet = json_decode($data["bascet"], true);
$str = "<br/>";

$fileJson = json_decode(file_get_contents('../goods.json'), true);

    foreach($bascet as $key => $value) {
        $str .= $fileJson[$key]["name"] ." : ". $value . "<br/>";
    }

// Формирование самого письма
$message  = "Номер: " . $data["phone"] . "<br/>";
$message .= "Имя: " . $data['name'] . "<br/>";    
$message .= "email: " . $data['email'] . "<br/>";    
$message .= "Название компании: " . $data['nameCompany'] . "<br/>";    
$message .= "Дата начала: " . $data['dataBegin'] . "<br/>";    
$message .= "Дата окончания: " . $data['dataEnd'] . "<br/>";    
$message .= "Аренда на : " . $data['hours'] . " часа" . "<br/>";    
$message .= "Корзина : " . $str . "<br/>";    
$message .= "Комментарий: " . $data['comment'] . "<br/>"; 


$title = "Оформлен новый заказ";
$body = $message;

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'ssl://smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'your_login'; // Логин на почте
    $mail->Password   = 'password'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('mail@yandex.ru', 'Имя отправителя'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('youremail@yandex.ru');  
    $mail->addAddress('youremail@gmail.com'); // Ещё один, если нужен

    // Прикрипление файлов к письму
// if (!empty($file['name'][0])) {
//     for ($ct = 0; $ct < count($file['tmp_name']); $ct++) {
//         $uploadfile = tempnam(sys_get_temp_dir(), sha1($file['name'][$ct]));
//         $filename = $file['name'][$ct];
//         if (move_uploaded_file($file['tmp_name'][$ct], $uploadfile)) {
//             $mail->addAttachment($uploadfile, $filename);
//             $rfile[] = "Файл $filename прикреплён";
//         } else {
//             $rfile[] = "Не удалось прикрепить файл $filename";
//         }
//     }   
// }
// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);