INSERT INTO tb_user(cl_name, cl_password, cl_role) VALUES ('Anderson', '123', 'admin');
INSERT INTO tb_funcionario(cl_nome_funcionario,ativo, registro) VALUES ('Funcionario 01',true, NOW());
INSERT INTO tb_endereco(cl_bairro,cl_rua,cl_numero,ativo, registro) VALUES ('bairro','rua', 1,true, NOW());
INSERT INTO tb_sabor(cl_nome_sabor,ativo, registro) VALUES ('Teste sabor',true, NOW());
INSERT INTO tb_bebida(cl_nome_bebida, cl_valor_bebida,ativo, registro) VALUES('Teste bebida',5,true, NOW());