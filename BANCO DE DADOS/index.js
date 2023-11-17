CREATE DATABASE Livraria;
USE Livraria;

CREATE TABLE clientes_tb (
  id INT PRIMARY KEY,
  nome VARCHAR(50) NOT NULL,
  telefone VARCHAR(15) NOT NULL,
  endereco VARCHAR(100) NOT NULL
);

CREATE TABLE vendedores_tb (
  id INT PRIMARY KEY,
  nome VARCHAR(50) NOT NULL,
  telefone VARCHAR(15) NOT NULL,
  endereco VARCHAR(100) NOT NULL,
  periodo ENUM('integral', 'parcial') NOT NULL,
  salario DECIMAL(10,2) NOT NULL
);

drop table clientes_tb;

CREATE TABLE produtos (
  id INT PRIMARY KEY NOT NULL,
  tamanho VARCHAR(10) NOT NULL,
  cor VARCHAR(20) NOT NULL,
  quantidade INT NOT NULL,
  preco DECIMAL(10,2) NOT NULL
);

CREATE TABLE vendas_tb (
  id_venda INT PRIMARY KEY,
  id_cliente INT NOT NULL,
  id_vendedor INT NOT NULL,
  id_produto INT NOT NULL,
  data_venda DATE NOT NULL,
  valor_venda DECIMAL(10,2) NOT NULL,
  FOREIGN KEY (id_cliente) REFERENCES clientes_tb(id),
  FOREIGN KEY (id_vendedor) REFERENCES vendedores_tb(id),
  FOREIGN KEY (id_produto) REFERENCES produtos(id)
);

INSERT INTO clientes_tb (id, nome, telefone, endereco) VALUES
('1', 'João Silva', '123-456-7890', 'Rua A, Nº 123');
('2', 'Maria Oliveira',' 987-654-3210',' Avenida B',' Nº 456');
('3','Pedro Santos',' 555-123-4567',' Praça C, Nº 789');
('4 ''Ana Pereira','999-888-7777' 'Travessa D', 'Nº 321');

INSERT INTO vendedores_tb (id, nome, telefone, endereco, periodo, salario) VALUES
(1, 'Mariana', '987-654-3214', 'Rua 05, 303, Maceió', 'integral', 1500.00),
(2, 'Andre', '907-654-3210', 'Rua 9034, 404, Maceió', 'parcial', 800.00),
(3, 'Henrique', '967-654-3210', 'Barro, 505,  Maceió', 'integral', 1200.00),
(4, 'Raquel', '947-654-3210', 'Rua 87, Maceió', 'parcial', 700.00),
(5, 'Pedro', '927-654-3210', 'Rua 67, Maceió', 'integral', 1300.00);

INSERT INTO produtos (id, tamanho, cor, quantidade, preco) VALUES
(1, 'P', 'azul', 10, 49.90),
(2, 'M', 'vermelho', 5, 59.90),
(3, 'G', 'verde', 8, 69.90),
(4, 'P', 'amarelo', 12, 39.90),
(5, 'M', 'preto', 6, 79.90);

INSERT INTO vendas_tb (id_venda, id_cliente, id_vendedor, id_produto, data_venda, valor_venda) VALUES
(1, 1, 1, 1, '2023-11-17', 49.90),
(2, 2, 2, 2, '2023-11-16', 59.90),
(3, 3, 1, 3, '2023-11-15', 69.90),
(4, 4, 3, 4, '2023-11-14', 39.90),
(5, 5, 4, 5, '2023-11-13', 79.90);

UPDATE vendedores_tb
SET salario = salario * 1.1
WHERE periodo = 'integral';

SELECT tamanho, cor, quantidade
FROM produtos;

// -- SELECT v.nome, SUM(vl.valor_venda) AS total_vendas
// -- FROM vendedores_tb v
// -- JOIN vendas_tb vl ON v.id = vl.id_vendedor
// -- GROUP BY v.id
// -- ORDER BY total_vendas DESC
// -- LIMIT 3;

// -- SELECT *
// -- FROM vendas_tb
// -- WHERE data_venda BETWEEN '2023-11-01' AND '2023-11-30';

// -- SELECT v.*
// -- FROM vendas_tb v
// -- JOIN clientes_tb c ON v.id_cliente = c.id
// -- WHERE c.nome = '';