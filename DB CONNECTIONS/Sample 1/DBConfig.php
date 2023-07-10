<?php

class DBConfig
{	
    // * server
	private $_host = 'localhost';
    // * user 
	private $_username = 'root';
    // * password
	private $_password = '';
    // * database
	prvate $_database = '';

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