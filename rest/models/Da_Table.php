<?php
namespace models;

class Da_Table 
{
    protected $table;
    protected $_name;
    
    public function __construct() 
    {
        $app = \Slim\Slim::getInstance();
        $this->table = $app->db->{strtolower($this->_name)}();
    }
}
