function mascara() { 
    var $Cep = $("#cep");
    var $dataVencimento = $("#dataVencimento");
    var $Cpf = $("#cpf");
    var $numeroDoCartao = $("#numeroDoCartao");
    $Cep.mask("00000-000");
    $Cpf.mask("000.000.000-00");
    $dataVencimento.mask("00/0000")
    $numeroDoCartao.mask("0000 0000 000 000")
};
mascara();