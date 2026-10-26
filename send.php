<?php
// Приём заявки с формы. Замените адрес получателя.
$to = 'zakaz@razrabotka-ii.ru';
header('Content-Type: text/html; charset=utf-8');
if ($_SERVER['REQUEST_METHOD'] !== 'POST') { http_response_code(405); exit('Метод не поддерживается'); }
if (!empty($_POST['website'])) { exit('ok'); } // ловушка для ботов
$clean = function ($v) { return trim(preg_replace('/[\r\n]+/', ' ', strip_tags((string)$v))); };
$name = mb_substr($clean($_POST['name'] ?? ''), 0, 100);
$contact = mb_substr($clean($_POST['contact'] ?? ''), 0, 120);
$message = mb_substr(strip_tags((string)($_POST['message'] ?? '')), 0, 3000);
if ($name === '' || $contact === '' || $message === '' || empty($_POST['agree'])) { http_response_code(400); exit('Заполните все поля формы.'); }
$subject = '=?UTF-8?B?' . base64_encode('Новая заявка с сайта') . '?=';
$body = "Имя: $name\nКонтакт: $contact\n\nСообщение:\n$message\n";
$headers = "Content-Type: text/plain; charset=utf-8\r\nFrom: noreply@" . preg_replace('/^www\./', '', $_SERVER['HTTP_HOST'] ?? 'localhost');
$ok = mail($to, $subject, $body, $headers);
echo $ok ? '<p style="font-family:sans-serif">Спасибо! Мы свяжемся с вами. <a href="index.html">На главную</a></p>' : '<p style="font-family:sans-serif">Не удалось отправить. Напишите нам на почту.</p>';
