
<?php
    $msg_box = ""; // в этой переменной будем хранить сообщения формы
    $postData = file_get_contents('php://input');
    $data = json_decode($postData, true);
    $bascet = json_decode($data["bascet"], true);
    $str = "<br/>";

    $fileJson = json_decode(file_get_contents('../goods.json'), true);

    foreach($bascet as $key => $value) {
        $str .= $fileJson[$key]["name"] ." : ". $value . "<br/>";
    }
    
    // если форма без ошибок
    if(empty($errors)){     
        // собираем данные из формы
        $message  = "Номер: " . $data["phone"] . "<br/>";
        $message .= "Имя: " . $data['name'] . "<br/>";    
        $message .= "email: " . $data['email'] . "<br/>";    
        $message .= "Название компании: " . $data['nameCompany'] . "<br/>";    
        $message .= "Дата начала: " . $data['dataBegin'] . "<br/>";    
        $message .= "Дата окончания: " . $data['dataEnd'] . "<br/>";    
        $message .= "Аренда на : " . $data['hours'] . " часа" . "<br/>";    
        $message .= "Корзина : " . $str . "<br/>";    
        $message .= "Комментарий: " . $data['comment'] . "<br/>";    
        send_mail($message); // отправим письмо
        // выведем сообщение об успехе
        $msg_box = "true"; //"<span style='color: green;'>Сообщение успешно отправлено!</span>";
        
    }else{
        // если были ошибки, то выводим их
        $msg_box = "";
        foreach($errors as $one_error){
            $msg_box .= "false";   //"<span style='color: red;'>$one_error</span><br/>";
            
        }
    }
 
    // делаем ответ на клиентскую часть в формате JSON
    echo json_encode(array('result' => $msg_box));
    
     
     
    // функция отправки письма
    function send_mail($message){
        // почта, на которую придет письмо
        $mail_to = "bakunzevs@mail.ru"; 
        // тема письма
        $subject = "Письмо с обратной связи";
         
        // заголовок письма
        $headers= "MIME-Version: 1.0\r\n";
        $headers .= "Content-type: text/html; charset=utf-8\r\n"; // кодировка письма
        $headers .= "From: Тестовое письмо <jessy_kurka@bk.ru>\r\n"; // от кого письмо
         
        // отправляем письмо 
        mail($mail_to, $subject, $message, $headers);
    }
     
?>
