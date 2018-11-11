<?php
require '.././libs/Slim/Slim.php';
require_once 'dbHelper.php';

\Slim\Slim::registerAutoloader();
$app = new \Slim\Slim();
$app = \Slim\Slim::getInstance();
$db = new dbHelper();

/**
 * Database Helper Function templates
 */
/*
select(table name, where clause as associative array)
insert(table name, data as associative array, mandatory column names as array)
update(table name, column names as associative array, where clause as associative array, required columns as array)
delete(table name, where clause as array)
*/

// get the question by its id on DB
// $app->get('/qstn/:id', function($id) { 
//     $condition = array('questionId'=>$id);
//     global $db;
//     $rows = $db->select("questions","*",$condition);
//     echoResponse(200, $rows);
// });

$app->get('/news', function(){ 
    global $db;
    $rows = $db->select("News");
    echoResponse(200, $rows);
});

$app->get('/specificUser/:userId', function($userId){ 
    global $db;
    $condition = array('userId' => $userId);
    $rows = $db->select2("SpecificUser", $condition);
    echoResponse(200, $rows);
});

$app->get('/reporternews/:personId', function($personId){ 
    global $db;
    $condition = array('personId' => $personId);
    $rows = $db->select2("ReporterNews", $condition);
    echoResponse(200, $rows);
});

$app->get('/specificpresident/:candidateId', function($candidateId) {
    global $db;
    $condition = array('candidateId' => $candidateId);
    $rows = $db->select2("SpecificPresident", $condition);
    echoResponse(200, $rows);
});

$app->get('/specificvice/:candidateId', function($candidateId) {
    global $db;
    $condition = array('candidateId' => $candidateId);
    $rows = $db->select2("SpecificVice", $condition);
    echoResponse(200, $rows);
});

$app->get('/candidateinfo/:personId', function($personId) {
    global $db;
    $condition = array('personId' => $personId);
    $rows = $db->select2("CandidateInfo", $condition);
    echoResponse(200, $rows);
});

$app->get('/specificcouncilor/:candidateId', function($candidateId) {
    global $db;
    $condition = array('candidateId' => $candidateId);
    $rows = $db->select2("SpecificCouncilor", $condition);
    echoResponse(200, $rows);
});

$app->get('/users', function(){ 
    global $db;
    $rows = $db->select("Users");
    echoResponse(200, $rows);
});

$app->get('/announcements', function() {
    global $db;
    $rows = $db->select("Announcements");
    echoResponse(200, $rows);
});

$app->get('/presidents', function() {
    global $db;
    $rows = $db->select("Presidents");
    echoResponse(200, $rows);
});

$app->get('/vicepresidents', function() {
    global $db;
    $rows = $db->select("VicePresidents");
    echoResponse(200, $rows);
});

$app->get('/councilors', function() {
    global $db;
    $rows = $db->select("Councilors");
    echoResponse(200, $rows);
});

$app->get('/newsView/:newsID', function($newsID){ 
    global $db;
    $condition = array('newsID' => $newsID);
    $rows = $db->select2("SpecificNews", $condition);
    echoResponse(200, $rows);
});

$app->get('/allcouncilor', function(){
    global $db;
    $rows = $db->select("AllCouncilors");
    echoResponse(200, $rows);
});

$app->put('/updatevote/:candidateId', function($candidateId) use($app) {
     $data = json_decode($app->request->getBody());
     $condition = array('candidateId' => $candidateId);
     global $db;
     $rows = $db->update("Votes", $condition);
     if($rows["status"]=="success")
        $rows["message"] = "Product information updated successfully.";
    echoResponse(200, $rows);
});

$app->put('/updateplatform/:candidateId/:platformText', function($candidateId, $platformText) use($app) {
     $data = json_decode($app->request->getBody());
     $condition = array('candidateId' => $candidateId, 'platformText' => $platformText);
     global $db;
     $rows = $db->update("Platform", $condition);
     if($rows["status"]=="success")
        $rows["message"] = "Product information updated successfully.";
    echoResponse(200, $rows);
});

$app->put('/updateAccount/:personId', function($personId) use($app) {
    $data = json_decode($app->request->getBody());
    $condition = array('personId' => $personId);
    global $db;
    $rows = $db->update("Account", $condition);
    if($rows["status"]=="success")
        $rows["message"] = "Product information updated successfully.";
    echoResponse(200, $rows);
});

function echoResponse($status_code, $response) {
    global $app;
    $app->status($status_code);
    $app->contentType('application/json');
    echo json_encode($response,JSON_NUMERIC_CHECK);
}

$app->run();
?>