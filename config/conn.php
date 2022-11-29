<?php
include_once 'DBConfig.php';

class CONN extends DBConfig
{
	public function __construct()
	{
		parent::__construct();
	}
	
	public function getData($query)
	{		
		$result = $this->_CONNECTION->query($query);
		
		if ($result == false) {
			return false;
		} 
		
		$rows = array();
		
		while ($row = $result->fetch_assoc()) {
			$rows[] = $row;
		}
		
		return $rows;
	}
		
	public function execute($query) 
	{
		$result = $this->_CONNECTION->query($query);
		
		if ($result == false) {
			echo 'Error: cannot execute the command ' . $this->_CONNECTION->error;
			return false;
		} else {
			return true;
		}		
	}
	
}
?>
