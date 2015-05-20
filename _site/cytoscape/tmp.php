<?php

// function unique_arr($array2D,$stkeep=false,$ndformat=true)
// {
// 	// 判断是否保留一级数组键 (一级数组键可以为非数字)
// 	if($stkeep) $stArr = array_keys($array2D);

// 	// 判断是否保留二级数组键 (所有二级数组键必须相同)
// 	if($ndformat) $ndArr = array_keys(end($array2D));

// 	//降维,也可以用implode,将一维数组转换为用逗号连接的字符串
// 	foreach ($array2D as $v){
// 		$v = join(",",$v); 
// 		$temp[] = $v;
// 	}

// 	//去掉重复的字符串,也就是重复的一维数组
// 	$temp = array_unique($temp); 

// 	//再将拆开的数组重新组装
// 	foreach ($temp as $k => $v)
// 	{
// 		if($stkeep) $k = $stArr[$k];
// 		if($ndformat)
// 		{
// 			$tempArr = explode(",",$v); 
// 			foreach($tempArr as $ndkey => $ndval) $output[$k][$ndArr[$ndkey]] = $ndval;
// 		}
// 		else $output[$k] = explode(",",$v); 
// 	}

// 	return $output;
// }


$a1[]=array('data' => array('a'=>1,'b'=> 2, 'c' => 3) );
$a1[]=array('data' => array('a'=>2,'b'=> 2, 'c' => 3) );
$a1[]=array('data' => array('a'=>3,'b'=> 2, 'c' => 3) );
$a1[]=array('data' => array('a'=>1,'b'=> 2, 'c' => 3) );
$a1[]=array('data' => array('a'=>1,'b'=> 2, 'c' => 3) );
$a1[]=array('data' => array('a'=>1,'b'=> 2, 'c' => 3) );

// $b1 = unique_arr($a1,$stkeep=true,$ndformat=true);
print_r($a1);
// print_r($b1);
echo $a1[0]['data']['a'];

?>