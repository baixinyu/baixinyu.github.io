<?php
// header('Content-type: application/json');
error_reporting(E_ALL^E_DEPRECATED);
#Include the connect.php file
include 'connect.php';
#Connect to the database
//connection String
// $tableName='tab1';

$connect = mysql_connect($hostname, $username, $password)
or die('Could not connect: ' . mysql_error());
//Select The database
$bool = mysql_select_db($database, $connect);
if ($bool === False) {
	print "can't find $database";
}

$sql_drug = 'select  drug_id,drug_name from info_drug where mut =0 or (meth=1 or mir =1 or lnc=1 or msi=1)';
// $sql_drug = 'select  drug_id,drug_name from info_drug where drug_id =1';

$sql_gene = 'select  cy_id,gene_name from cy_gene';
// $sql_cell= 'select cell_id,cell_name from info_cell';
$sql_dis = 'select disease_id,disease_name from info_disease';

$result_drug = mysql_query($sql_drug);

while ($rows = mysql_fetch_array($result_drug)) {
	$nodes[] = array(
		'data' => array('id' => 'drug' . $rows['drug_id'],
			'name' => $rows['drug_name'],
		),

	);
}

$result_gene = mysql_query($sql_gene);
$gene_node = null;
while ($rows = mysql_fetch_array($result_gene)) {
	$nodes[] = array(
		'data' => array('id' => $rows['cy_id'],
			'name' => $rows['gene_name'],
		),
		// 'css' => array(
		// 				'content' => $rows['gene_name'],
		// 				'text-valign' => 'center'
		// 				)

	);
}

// $result_cell = mysql_query($sql_cell);
// $cell_node=null;
// while($rows = mysql_fetch_array($result_cell)){
// 	$nodes[]=array(
// 		'data' => array('id'=>'cell' . $rows['cell_id'],'weight'=>'1'),
// 		'css' => array('background-color' => 'red',
// 						'content' => $rows['cell_name'],
// 						'text-valign' => 'center'
// 						)

// 		);
// }

$result_dis = mysql_query($sql_dis);
$dis_node = null;
while ($rows = mysql_fetch_array($result_dis)) {
	$nodes[] = array(
		'data' => array('id' => 'dis' . $rows['disease_id'],
			'name' => $rows['disease_name'],
		),
		// 'css' => array(
		// 				'content' => $rows['disease_name'],
		// 				'text-valign' => 'center'
		// 				)

	);
}

// association
$sql_drug_gene = 'select distinct drug_id,gene_id from cy_view ';

$result_drug_gene = mysql_query($sql_drug_gene);
$ii = 0;
while ($rows = mysql_fetch_array($result_drug_gene)) {
	$ii++;
	$edges[] = array(
		'data' => array('id' => 'drug_gene' . $ii,
			'source' => 'drug' . $rows['drug_id'],
			'target' => $rows['gene_id']),

	);

}

// $result_drug_cell = mysql_query($sql_drug_cell);
// $ii = 0;
// while($rows = mysql_fetch_array($result_drug_gene)){
// 	$ii++;
// 	$edges[]=array(
// 		'data' => array('id'=>'drug_cell' . $ii,
// 						'source'=>'drug' . $rows['drug_id'],
// 						'target' =>'cell' . $rows['cell_id'])

// 		);

// }
$sql_drug_dis = 'select distinct drug_id,disease_id from cy_view ';
$result_drug_dis = mysql_query($sql_drug_dis);
$ii = 0;
while ($rows = mysql_fetch_array($result_drug_dis)) {
	$ii++;
	$edges[] = array(
		'data' => array('id' => 'drug_dis' . $ii,
			'source' => 'drug' . $rows['drug_id'],
			'target' => 'dis' . $rows['disease_id']),

	);

}
$sql_gene_dis = 'select distinct gene_id,disease_id from cy_view ';
$result_gene_dis = mysql_query($sql_gene_dis);
$ii = 0;
while ($rows = mysql_fetch_array($result_gene_dis)) {
	$ii++;
	$edges[] = array(
		'data' => array('id' => 'gene_dis' . $ii,
			'source' => $rows['gene_id'],
			'target' => 'dis' . $rows['disease_id']),

	);

}

// $result_gene_cell = mysql_query($sql_gene_cell);
// $ii = 0;
// while($rows = mysql_fetch_array($result_gene_cell)){
// 	$ii++;
// 	$edges[]=array(
// 		'data' => array('id'=>'gene_cell' . $ii,
// 						'source'=>$rows['gene_id'],
// 						'target' =>'cell' . $rows['cell_id'])

// 		);

// }

$data[] = array('nodes' => $nodes,
	'edges' => $edges);
echo json_encode($data);
mysql_close();
?>