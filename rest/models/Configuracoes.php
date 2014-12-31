<?php
namespace models;

class Configuracoes extends Da_Table
{
    protected $_name = 'configuracoes';
    
    public function getConfigUsuario($usuarioId)
    {
        return $this->table->select('*')
            ->where('usuario_id', $usuarioId);
    }
}
