<?php
/*
    Below are the length definitions for the columns in the
    flat file. You may use it, move it, delete it. Whatever
    works for you. Please put all your code in this file and return
    it for review.
 */
$definitions = [
   ['name' => 'Serial Number', 'length' => 16, 'type' => 'int'],
    ['name' => 'Language', 'length' => 3, 'type' => 'string'],
    ['name' => 'Business Name', 'length' => 32, 'type' => 'string'],
    ['name' => 'Business Code', 'length' => 8, 'type' => 'string'],
    ['name' => 'Authorization Code', 'length' => 8, 'type' => 'string'],
    ['name' => 'Timestamp', 'length' => 20, 'type' => 'timestamp'],
];
if ($argc!=2){
    exit("invalid argument!");
}

$filename = $argv[1];
$fhandle = fopen($filename,'r') or exit("unable to open file ($filename)");
$linecount = 1;
$rowSize = 0;
$businessList = array();
$serNum="";
$lang=""; $name=""; $busCode=""; $authCode=""; $time="";

for ($row = 0; $row < sizeof($definitions); $row++){
    $rowSize += $definitions[$row]['length'];
}

 while (($line = fgets($fhandle)) !== false) {
    $line = preg_replace("/[\n|\r]/",'',$line);
    if (strlen($line)>($rowSize)){
        print ("Row is too long at line $linecount\n\n");
        $linecount++;
        continue;
    }
    if (preg_match('/^\d*/',$line,$match)!==-1 && strlen($serNum=$match[0])!==$definitions[0]['length']) {continue;}
    if (preg_match('/^\d*([A-Z]*)/',$line,$match)!==-1 && strlen($lang=$match[1])!==$definitions[1]['length']) {continue;}
    if (preg_match('/^\S+\s*(\D*)/',$line,$match)!==-1 && strlen($name=$match[1])>=$definitions[2]['length']) {continue;}
    if (preg_match('/^\S+\s*\D+(.{8})/',$line,$match)!==-1) {$busCode=$match[1];}
    else {continue;}
    if (preg_match('/(.{8})\s*\S*\s*\S*$/',$line,$match)!==-1) {$authCode=$match[1];}
    else {continue;}
    if (preg_match('/(\S*\s*\S*)$/',$line,$match)!==-1 && strlen($time=$match[1])==$definitions[5]['length']){continue;}
    $newBusiness = new business($serNum, $lang, $name, $busCode, $authCode, $time);
    array_push($businessList, $newBusiness);
    print("Line Number: $linecount\n");
    print($newBusiness->get());
    $linecount++;
}

function sort_business($a, $b){
    return strcmp($a->name, $b->name);
}

usort($businessList, 'sort_business');

$outputFile = fopen("sorted_Business.txt", "w") or die("Unable to open file!");
for ($i=0; $i<sizeof($businessList); $i++){
  fwrite($outputFile, $businessList[$i]->get());
}

fclose($outputFile);
fclose($fhandle);

class business{
    public $serNum;
    public $lang ;
    public $name;
    public $busCode;
    public $authCode;
    public $time;
    public function __construct($serNum, $lang, $name, $busCode, $authCode, $time){
        $this->serNum = $serNum;
        $this->lang = $lang ;
        $this->name = $name;
        $this->busCode = $busCode;
        $this->authCode = $authCode;
        $this->time = $time;
    }
    public function get(){
      return("Serial Number: $this->serNum\nLanguage: $this->lang\nBusiness Name: $this->name\nBusiness Code: $this->busCode\nAuthorization Code: $this->authCode\nTimestamp: $this->time\n\n");
    }
}
/*Column One
Definition: serial number
Data Type: left padded integer
Length 16

Column Two
Definition: Language
Data Type: string
Length: 3

Column Three
Definition: Business Name
Data Type: string
Length: 32

Column Four
Definition: Business Code
Data Type: string
Length: 8

Column Five
Definition: Authorization Code
Data Type: string
Length 8

Column six
Definition: Timestamp
Data Type: string as (yyyy-mm-dd hh:mm:ss)
Length: 20*/
