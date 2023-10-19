<?php
include("lib/conn.php");
@session_start();
if(!isset($_SESSION['ttus']))
	{
		echo "<script>window.location='index.php'</script>";

	}


?>





<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Tarbiyah Fun-tastic Education </title>
<link href="css/style.css" rel="stylesheet" type="text/css" />

<script type="text/javascript">
function onPageLoaded() {
	document.getElementById('password').style.display = "none";
	document.getElementById('passwordPlain').style.display = "inline";
}
function swapPasswordBoxes(funcType) {
	if(funcType == "click") {	
		document.getElementById('passwordPlain').style.display = "none";
		document.getElementById('password').style.display = "inline";
		document.getElementById('password').focus();
	} else {
		if(document.getElementById('password').value.length == 0) {
			document.getElementById('passwordPlain').style.display = "inline";
			document.getElementById('password').style.display = "none";
		}
	}
}
</script>

</head>

<body onload="onPageLoaded()">

 <div id="page">
<?php include('header.php')?> 
 <div class="content">
 <div style="width:100%; float:left;">
 <span style="font-size:24px; color:#ae0539;"> Game Management Console</span>
 <div style="width:100%; float:left; height:500px; margin:20px 10px 0px 0px; text-align:center; border:4px solid #203b89;
border-radius:25px; background-color:white;  background-repeat:no-repeat;">
<div style="width:100%; float:left; margin:20px;">
 <table style="width:800px;;">
 <tr>
 <td colspan="4">
 
 </td>
 </tr>

 <tr>
<td align="center" style=" text-align:center; border:solid 1px blue;">
 <a href="album.php"  target="_blank" title="Create Album and add Images in Picture Library"  style="color:#001748; text-decoration:none; font-weight:bold;"><img  src="images/picture.png" style="width:55px; height:auto;"  /><br/>
 Picture Library  </a>
 </td>

<td align="center" style=" text-align:center; border:solid 1px blue;">
 <a href="albumforfish.php"  target="_blank"  title="Create Album and add Images for Fishing game"  style="color:#001748; text-decoration:none; font-weight:bold;"><img  src="images/fishcategory.jpg" style="width:55px; height:auto;"  /><br/>
 Picture Library for Fish Game  </a>
 </td>


 <td align="center" style=" text-align:center; border:solid 1px blue;">
 <a href="albumsound.php"  target="_blank"  title="Create Sound Album and add .mp3 sound file"  style="color:#001748; text-decoration:none; font-weight:bold;"><img  src="images/sound.jpg" style="width:55px; height:auto;"  /><br/>
Sound Library  </a>
 </td>

<td align="center" style=" text-align:center; border:solid 1px blue;">
 <a href="picturebg.php"  target="_blank" title="Upload Line sGame Background Images" style="color:#001748; text-decoration:none; font-weight:bold;"><img  src="images/picture.png" style="width:55px; height:auto;"  /><br/>
 Background Images  </a>
 </td>
 <td align="center" style="text-align:center;">
 </td>
 

 </tr>


 <tr>
 <td style="font-size:14px; text-align:left; color:#203b89; padding:10px;">&nbsp;</td>
 

 </tr>
 <tr>


 <td align="center" style="width:140px; height:75px; text-align:center; text-align:center; border:solid 1px blue; padding:10px;">
   <a href="texttoimagelinegame.php"  target="_blank" title="Create Image Line Game" style="color:#001748; text-decoration:none"><img  src="images/match.png" style="border:solid 1px #fdc334; width:75px; height:75px;" /><br/>
Image Line Game </a>

 </td>
 <td align="center" style="width:140px; height:75px; text-align:center; text-align:center; border:solid 1px blue; padding:10px;">
   <a href="mathlinegame.php"  target="_blank" title="Create Math Line Game"  style="color:#001748; text-decoration:none"><img  src="images/math.jpg" style="border:solid 1px #fdc334; width:75px; height:75px;" /><br/>
Maths Line Game </a>

 </td>
 <td align="center" style="width:140px; height:75px; text-align:center;border:solid 1px blue; padding:10px;">
<a href="texttotextlinegame.php" target="_blank"  title="Create Text Game" style="color:#001748; text-decoration:none"> <img  src="images/match2.png" style="border:solid 1px #fdc334; width:75px; height:75px;" /><br/>
Text Line Game

 </a></td>

 <td align="center" style="width:140px; height:75px; text-align:center;border:solid 1px blue; padding:10px;">
 <a href="identifyobject.php" target="_blank" title="Create Object Identification Game" style="color:#001748; text-decoration:none">  <img  src="images/identify.png" style="border:solid 1px #fdc334;  width:75px; height:75px;" /><br/>
Identification

 </a></td>
 
 <td align="center" style="width:140px; height:75px; text-align:center;border:solid 1px blue; padding:10px;">
 <img  src="images/fishing.png"title="Create Fishing Game" style="border:solid 1px #fdc334;  width:75px; height:75px;" /><br/>
 <a href="game1.php" target="_blank" style="color:#001748; text-decoration:none"> Fishing
 </a></td>
 

 </tr>
 <tr>
 
 <td align="center" style="width:140px; height:75px; text-align:center;border:solid 1px blue; padding:10px;">
 <img  src="images/tressure.png"title="Create Tressure Hunt Game" style="border:solid 1px #fdc334;  width:75px; height:75px;" /><br/>
 <a href="QuestionsHUNT.php" target="_blank" style="color:#001748; text-decoration:none"> Treassure Hunt
 </a></td>

 
 <td align="center" style="width:140px; height:75px; text-align:center;border:solid 1px blue; padding:10px;">
<img  src="images/car.jpg"title="Create Tressure Hunt Game" style="border:solid 1px #fdc334;  width:75px; height:75px;" /><br/>
 <a href="Questionscar.php" target="_blank" style="color:#001748; text-decoration:none"> Car Games
 </a></td>
	 
	  
 <td align="center" style="width:140px; height:75px; text-align:center;border:solid 1px blue; padding:10px;">
<br/>
 <a href="img_to_img.php" target="_blank" style="color:#001748; text-decoration:none">Image to Image Line game
 </a></td>
	
 </tr>
 
 
  <tr>
 
 <td align="center" style="width:140px; height:75px; text-align:center;border:solid 1px blue; padding:10px;">

 <a href="game1seta.php" target="_blank" style="color:#001748; text-decoration:none">  LINE GAME (Multiple Class Option)
 </a></td>
 </tr>
 </table>
 </div>
 </div>

 </div>
 
 </div>
 
 </div>
</body>
</html>