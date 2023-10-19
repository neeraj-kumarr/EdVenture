<?php
header("Content-Type: text/html;charset=UTF-8");
include("lib/conn.php");
include("lib/pager.php");
include("lib/functions.php");
$table="linegame";
$cpage='linegame1cms.php';
$btn="submit";
if(isset($_POST['submit']))
{
	$sql="Update linegame set active='no'";
			 	mysql_query("SET NAMES 'utf8'"); mysql_query('SET CHARACTER SET utf8');
		mysql_query($sql);
		 $pic1			= $_FILES['image1']['name'];
			$pic2			= $_FILES['image2']['name'];
				$pic3			= $_FILES['image3']['name'];
					$pic4			= $_FILES['image4']['name'];
		 $text1			= $_POST['text1'];
		$text2			= $_POST['text2'];
			$text3			= $_POST['text3'];
		$text4			= $_POST['text4'];		
		
		
		
		if($pic1!='')
		{
			$code=GenerateCode(10,2);
			$ext = strtolower(strrchr($pic1,'.')); 
			$p1=$code.$ext;
			saveimage($_FILES["image1"],'',"../tarbiyah/linegame3/img1/");//picture save
			rename("../tarbiyah/linegame3/img1/$pic1","../tarbiyah/linegame3/img1/$p1");
		}
		if($pic2!='')
		{
			$code=GenerateCode(10,2);
			$ext = strtolower(strrchr($pic2,'.')); 
			$p2=$code.$ext;
			saveimage($_FILES["image2"],'',"../tarbiyah/linegame3/img1/");//picture save
			rename("../tarbiyah/linegame3/img1/$pic2","../tarbiyah/linegame3/img1/$p2");
		}
		
		 if($pic3!='')
		{
			$code=GenerateCode(10,2);
			$ext = strtolower(strrchr($pic3,'.')); 
			$p3=$code.$ext;
			saveimage($_FILES["image3"],'',"../tarbiyah/linegame3/img1/");//picture save
			rename("../tarbiyah/linegame3/img1/$pic3","../tarbiyah/linegame3/img1/$p3");
		}
		 if($pic4!='')
		{
			$code=GenerateCode(10,2);
			$ext = strtolower(strrchr($pic4,'.')); 
			$p4=$code.$ext;
			saveimage($_FILES["image4"],'',"../tarbiyah/linegame3/img1/");//picture save
			rename("../tarbiyah/linegame3/img1/$pic4","../tarbiyah/linegame3/img1/$p4");
		}
		
		
		echo $sql="insert into linegame values('','$p1','$text1','$p2', '$text2','$p3', '$text3' ,'$p4', '$text4','yes')";
		
		
	 	mysql_query("SET NAMES 'utf8'"); mysql_query('SET CHARACTER SET utf8');
		
		mysql_query($sql);
	}



if(isset($_POST['update']))
{
	$id				= $_POST['hdn'];
		 $pic1			= $_FILES['image1']['name'];
			$pic2			= $_FILES['image2']['name'];
				$pic3			= $_FILES['image3']['name'];
					$pic4			= $_FILES['image4']['name'];
		 $text1			= $_POST['text1'];
		$text2			= $_POST['text2'];
			$text3			= $_POST['text3'];
		$text4			= $_POST['text4'];		
		
		
		if($pic1!='')
		{
			$old_pic=getname("$table",'id',$id,'image1');
			unlink("../tarbiyah/linegame3/img1/$old_pic");
			
			$code=GenerateCode(10,2);
			$ext = strtolower(strrchr($pic1,'.')); 
			$p1=$code.$ext;
			saveimage($_FILES["image1"],'',"../tarbiyah/linegame3/img1/");//picture save
			rename("../tarbiyah/linegame3/img1/$pic1","../tarbiyah/linegame3/img1/$p1");
		}
		else 
		{
			$p1	= getname("$table",'id',$id,'image1');
		}		
			if($pic2!='')
		{
			$old_pic=getname("$table",'id',$id,'image2');
			unlink("../tarbiyah/linegame3/img1/$old_pic");
			
			$code=GenerateCode(10,2);
			$ext = strtolower(strrchr($pic2,'.')); 
			$p2=$code.$ext;
			saveimage($_FILES["image2"],'',"../tarbiyah/linegame3/img1/");//picture save
			rename("../tarbiyah/linegame3/img1/$pic2","../tarbiyah/linegame3/img1/$p2");
		}
		else 
		{
			$p2	= getname("$table",'id',$id,'image2');
		}
		
				if($pic3!='')
		{
			$old_pic=getname("$table",'id',$id,'image3');
			unlink("../tarbiyah/linegame3/img1/$old_pic");
			
			$code=GenerateCode(10,2);
			$ext = strtolower(strrchr($pic3,'.')); 
			$p3=$code.$ext;
			saveimage($_FILES["image3"],'',"../tarbiyah/linegame3/img1/");//picture save
			rename("../tarbiyah/linegame3/img1/$pic3","../tarbiyah/linegame3/img1/$p3");
		}
		else 
		{
			$p3	= getname("$table",'id',$id,'image3');
		}
		
					if($pic4!='')
		{
			$old_pic=getname("$table",'id',$id,'image4');
			unlink("../tarbiyah/linegame3/img1/$old_pic");
			
			$code=GenerateCode(10,2);
			$ext = strtolower(strrchr($pic4,'.')); 
			$p4=$code.$ext;
			saveimage($_FILES["image4"],'',"../tarbiyah/linegame3/img1/");//picture save
			rename("../tarbiyah/linegame3/img1/$pic4","../tarbiyah/linegame3/img1/$p4");
		}
		else 
		{
			$p4	= getname("$table",'id',$id,'image4');
		}
		
		 $sql="Update $table set image1='$p1',image2='$p2', image3='$p3', image4='$p4', text1='$text1', text2='$text2' , text3='$text3' ,
		 text4='$text4' where id='$id'";
		
			mysql_query("SET NAMES 'utf8'"); mysql_query('SET CHARACTER SET utf8');
		mysql_query($sql);

		echo "<script>window.location='linegame1cms.php?viewall'</script>";	

	
}




if(isset($_GET['id']))
{$uid			= $_GET['id'];
	
	$sql="Update linegame set active='no'";
			 	mysql_query("SET NAMES 'utf8'"); mysql_query('SET CHARACTER SET utf8');
		mysql_query($sql);
		
		$sql="Update linegame set active='yes' where id=$uid";
			 	mysql_query("SET NAMES 'utf8'"); mysql_query('SET CHARACTER SET utf8');
		mysql_query($sql);
		
echo "<script>window.location='linegame1cms.php?viewall'</script>";	
}

if(isset($_GET['uid']))
{$uid			= $_GET['uid'];
	
		$sql			= "select * from $table where id=$uid";
			mysql_query("SET NAMES 'utf8'"); mysql_query('SET CHARACTER SET utf8');
		$result			= mysql_query($sql);
		$pic1			= mysql_result($result,0,'image1');
		$pic2			= mysql_result($result,0,'image2');
		$pic3			= mysql_result($result,0,'image3');
		$pic4			= mysql_result($result,0,'image4');
				$text1=mysql_result($result,0,'text1');
		$text2=mysql_result($result,0,'text2');
		
		$text3=mysql_result($result,0,'text3');
		$text4=mysql_result($result,0,'text4');
		
		
			
		$btn="update";	
		
		
	
}

if(isset($_GET['did']))
{ 	
	
		$did	= $_GET['did'];
		$pic1	= getname("$table",'id',$did,'image1');
		$pic2	= getname("$table",'id',$did,'image2');
			$pic3	= getname("$table",'id',$did,'image3');
				$pic4	= getname("$table",'id',$did,'image4');
		if(!empty($pic1)){
		unlink("../tarbiyah/linegame3/img1/$pic1");
		}
if(!empty($pic2)){
		unlink("../tarbiyah/linegame3/img1/$pic2");
		}
		
		if(!empty($pic3)){
		unlink("../tarbiyah/linegame3/img1/$pic3");
		}
		if(!empty($pic4)){
		unlink("../tarbiyah/linegame3/img1/$pic4");
		}
		
		
		$sql="delete from $table where id=$did";
	 	mysql_query($sql);
		
	echo "<script>window.location='linegame1cms.php?viewall'</script>";	
	
}

?>



<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-6">
<title>Line Game CMS</title>
<link href="css/style.css" rel="stylesheet">
<style type="text/css">
body {
background-color:white;
font:10px/1.5em Arial, Helvetica, sans-serif; background-color:#387054;
}
#page {

margin:0px auto;
width:800px;
background-image:url(img/bg.jpg); background-repeat:no-repeat;
}
#page p {
padding:0 10px 10px;
}
</style>



</head>

<body>
<div id="page">


<form method="post" name="ads" enctype="multipart/form-data">

<div style="width:720px; float:left; background-image:url(img/bg.jpg); background-repeat:no-repeat;
">




</div>






   <div class="col-right">
 <?php  if(isset($_GET["viewall"]))
{
	?>
    <div style="width:100%; float:left;">
    <div style="float:right ; text-align:right; color:black; font-size:16px; font-family:Arial, Helvetica, sans-serif;">
      <strong><a href="<?php echo $cpage?>">Add New Game >></a></strong>
     <br/>
     <br/>
    </div>
       <div style="float:left ; text-align:left; color:black; font-size:16px; font-family:Arial, Helvetica, sans-serif;">
       <strong>Manage Game</strong>
             <br/>      <br/>
       <br/>
        <p>1. 1. Use Edit to change Images and Text within a game
            </p>
            <p>
            2. Clicking Delete button will erase the game.
            </p>
                  <p>
           3.To activate a game click Active button. (It will replace the current game)
            </p>
            <br/>
       </div>
       </div>
 <table width="100%" border="1" class="adminform">
   <tr>
           
          <tr>
            <td height="24" background="images/background.jpg">&nbsp;<strong>Id</strong></td>
            <td height="24" background="images/background.jpg">&nbsp;<strong>Item 1</strong></td>
            <td height="24" background="images/background.jpg">&nbsp;<strong>Item 2</strong></td>

            <td height="24" background="images/background.jpg">&nbsp;<strong>Item3</strong></td>
			<td height="24" background="images/background.jpg">&nbsp;<strong>Item 4</strong></td>
<td height="24" background="images/background.jpg">&nbsp;<strong>Active</strong></td>
                      <td height="24" align="center" background="images/background.jpg">		 
 <div align="center"><strong>Action</strong></div></td>
          </tr>
          <?php 
		$limit=20;
		if (!isset($_GET["pg"]))
		{
			$page=1;
		}
		else
		{
			$page = $_GET['pg'];
		}
															
		$sql="select count(*) from $table";
		$result = mysql_query($sql); 
		$total = mysql_result($result, 0, 0); 
		$pager  = Pager::getPagerData($total, $limit, $page); 
		$offset = $pager->offset; 
		$limit  = $pager->limit; 
		$page   = $pager->page; 
		if($offset<0)
		{
			$offset=0;
		}
														
		$sql="select * from $table order by id desc limit $offset,$limit";
		mysql_query("SET NAMES 'utf8'"); mysql_query('SET CHARACTER SET utf8');
		$result=mysql_query($sql);
		if(mysql_num_rows($result)>0)
		{
			while($rs=mysql_fetch_array($result))
			{
		?>		
          
          <tr>
            <td width="5%" height="24">&nbsp;<?php echo $rs['id']?></td>
             <td width="13%" style="font-size:16px; font-family:Arial, Helvetica, sans-serif; font-weight:bold; text-align:center;">
             <img src="../tarbiyah/linegame3/img1/<?php echo $rs['image1']?>" style="float:left; width:75px;" alt="" />
             <br/>
             <div style="width:100%; float:left; margin:10px 0; text-align:center">
             <?php echo $rs['TEXT1']?></div>
             </td> 

           
 <td width="13%" style="font-size:16px; font-family:Arial, Helvetica, sans-serif; font-weight:bold; text-align:center;">
             <img src="../tarbiyah/linegame3/img1/<?php echo $rs['image2']?>" style="float:left; width:75px;" alt="" />
             <br/>
             <div style="width:100%; float:left; margin:10px 0; text-align:center">
             <?php echo $rs['TEXT2']?></div>
             </td>            <td width="13%" style="font-size:16px; font-family:Arial, Helvetica, sans-serif; font-weight:bold; text-align:center;">
             <img src="../tarbiyah/linegame3/img1/<?php echo $rs['image3']?>" style="float:left; width:75px;" alt="" />
             <br/>
             <div style="width:100%; float:left; margin:10px 0; text-align:center">
             <?php echo $rs['TEXT3']?></div>
             </td> 
             
              <td width="13%" style="font-size:16px; font-family:Arial, Helvetica, sans-serif; font-weight:bold; text-align:center;">
             <img src="../tarbiyah/linegame3/img1/<?php echo $rs['image4']?>" style="float:left; width:75px;" alt="" />
             <br/>
             <div style="width:100%; float:left; margin:10px 0; text-align:center">
             <?php echo $rs['TEXT4']?></div>
             </td> 
                 <td width="15%" align="center"> <?php echo $rs['active']?>
                 </td>
			            <td width="15%" align="center">
              <div align="center">
                <a href="linegame1cms.php?id=<?php echo $rs['id']?>" style="font-size:10px; color:red;">
				<img src="images/active.png" width="36" height="13" border="0" /></a>
    
    <a href="linegame1cms.php?uid=<?php echo $rs['id']?>">
				<img src="images/edit.gif" width="36" height="13" border="0" /></a>    
                   <a href="linegame1cms.php?did=<?php echo $rs['id']?>">
				<img src="images/del.gif" width="36" height="13" border="0" /></a>             
            </div></td>
          </tr>
          <?php }}else{?>
          <tr>
            <td colspan="7"><div align="center"><h2>Records Not Found</h2></div></td>
          </tr>
          <?php }?>
          
          
          <tr>
            <td colspan="7"><div align="center">
              <?php
									$t="cpage=$cpage&";
									$str="$t";
									echo getPager($total,$page,$pager,$str,"");
									?>
              </div></td>
          </tr>
      </table>
   
   <?php
}
else
{?>
  
  
  <table width="700" border="0" align="center" cellpadding="0" cellspacing="0" style="color:black; font-size:16px; font-family:Arial, Helvetica, sans-serif">

    <tr>
      <td>
        
        <table width="100%" style="color:black; font-size:16px; font-family:Arial, Helvetica, sans-serif;">
         
          <tr>
            <td height="24" colspan="2" align="right"><strong><a href="<?php echo $cpage?>?viewall">View All</a></strong></td>
        </tr>
          <tr>
            <td height="24" colspan="2"><strong>Compile a new game </strong></td>
        </tr>
         
              
      <tr>
            <td height="24" colspan="2">
            
       
            
            <p>1. In text box paste any text
            </p>
            <p>
            2. In image box paste image size of 95 X 135 not exceeding 49 kb
            </p>
            </td>
        </tr>
<tr>
<td> Text 1</td>
<td>
<input  type="text" name="text1" value="<?php if(isset($_GET['uid'])) { echo $text1;}?>" id="text1" style="width:210px; font-size:12px; " /></td>
</tr>
<tr><td> Image 1</td>
<td><input type="file" name="image1"   id="image1" size="30" value=""style="width:180px; font-size:12px; " />
<?php if(isset($_GET['uid'])) { echo '<img src="../tarbiyah/linegame3/img1/'.$pic1.'" style="width:95px; height:135px;" />';}?><br/><br/>
</td>
</tr>
<tr>
<td> Text 2</td>
<td>
<input  type="text" name="text2" value="<?php if(isset($_GET['uid'])) { echo $text2;}?>" id="text2" style="width:210px; font-size:12px; " /></td>
</tr>
<tr><td> Image 2</td>
<td><input type="file" name="image2"  id="image2" size="30" value=""style="width:180px; font-size:12px; " />
<?php if(isset($_GET['uid'])) { echo '<img src="../tarbiyah/linegame3/img1/'.$pic2.'" style="width:95px; height:135px;"/>';}?><br/><br/>
</td>
</tr>

<tr>
<td> Text 3</td>
<td>
<input  type="text" name="text3" value="<?php if(isset($_GET['uid'])) { echo $text3;}?>" id="text3" style="width:210px; font-size:12px; " /></td>
</tr>
<tr><td> Image 3</td>
<td><input type="file" name="image3"  id="image3" size="30" value=""style="width:180px; font-size:12px; " />

<?php if(isset($_GET['uid'])) { echo '<img src="../tarbiyah/linegame3/img1/'.$pic3.'" style="width:95px; height:135px;"/>';}?><br/><br/>
</td>
</tr>

<tr>
<td> Text 4</td>
<td>
<input  type="text" name="text4" value="<?php if(isset($_GET['uid'])) { echo $text4;}?>" id="text4" style="width:210px; font-size:12px; " /></td>
</tr>
<tr><td> Image 4</td>
<td><input type="file" name="image4"  id="image4" size="30" value=""style="width:180px; font-size:12px; " />
<?php if(isset($_GET['uid'])) { echo '<img src="../tarbiyah/linegame3/img1/'.$pic4.'" style="width:95px; height:135px;" />'; 			echo "<input type='hidden' name='hdn' id='hdn' value=$uid>";}?>
</td>
</tr>


<tr>
<td>


</td>
<td><input  type="submit"  name="<?php echo $btn?>" value="<?php echo $btn?>"  style="width:160px; font-family:Arial, Helvetica, sans-serif; color:black; text-align:center; font-size:14px;  "/></td>
</tr>


<tr>
<td>

</td>

<td>&nbsp;</td>



</tr>



<tr>
<td>


</td>
<td>&nbsp;</td>
</tr>
<tr>




</table>
</td>
</tr>
</table>
<?php }?>


</form>




</div>
</body>
</html>