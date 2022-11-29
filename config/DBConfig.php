<?php

class DBConfig
{	
    
	private $_host = 'localhost';
	private $_username = 'root';
	private $_password = '';
	private $_database = 'cgfc';

    protected $_CONNECTION;
    public function __construct()
    {
        if (!isset($this->_CONNECTION)) {

            $this->_CONNECTION = new mysqli($this->_host, $this->_username, $this->_password, $this->_database);

            if (!$this->_CONNECTION) {
                echo 'Cannot connect to database server';
                exit;
            }
        }
        return $this->_CONNECTION;
    }
}

?>