# Alura Challenge - Criptografia de Textos

![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge)

## Descrição do Projeto

O Alura Challenge é um projeto desenvolvido durante o Alura Challenge, uma iniciativa da Alura para desafiar os alunos a criarem soluções inovadoras. Neste desafio, o objetivo é criar uma aplicação web que permita aos usuários criptografar e descriptografar textos utilizando um algoritmo simples.

## Funcionalidades

- Criptografia de texto: O usuário pode digitar um texto e o sistema irá criptografá-lo, substituindo determinadas letras por uma sequência de caracteres pré-definida.
- Descriptografia de texto: O usuário pode inserir um texto criptografado e o sistema irá descriptografá-lo, revertendo as substituições realizadas.
- Aviso de entrada vazia: Caso o usuário tente criptografar ou descriptografar um texto vazio, o sistema exibirá uma mensagem de erro.
- Aviso de entrada inválida: Caso o usuário tente inserir um texto com caracteres inválidos (que não sejam letras minúsculas sem acento), o sistema exibirá uma mensagem de erro.
- Cópia do resultado: Após a criptografia ou descriptografia, o usuário poderá copiar o texto resultante para a área de transferência.

## Tecnologias Utilizadas

- HTML
- CSS (com Bootstrap)
- JavaScript

## Explicação do Código

O código principal está dividido em duas funções principais: `crypt()` e `decrypt()`.

A função `crypt()` é responsável pela criptografia do texto inserido pelo usuário. Ela faz as seguintes tarefas:

1. Obtém o valor do campo de entrada de texto.
2. Verifica se o campo de texto está vazio. Se estiver, exibe uma mensagem de erro.
3. Verifica se o texto contém apenas letras minúsculas sem acento. Caso contrário, exibe uma mensagem de erro.
4. Caso o texto seja válido, a função substitui as letras 'e', 'i', 'a', 'o' e 'u' por 'enter', 'imes', 'ai', 'ober' e 'ufat', respectivamente, criando o texto criptografado.
5. Exibe o texto criptografado na tela.
6. Oculta alguns elementos da interface gráfica e exibe outros, como o botão de cópia.
7. Copia o texto criptografado para a área de transferência.

A função `decrypt()` é responsável pela descriptografia do texto inserido pelo usuário. Ela segue uma lógica similar à função `crypt()`, mas inverte as substituições realizadas durante a criptografia.

As funções `displayText()`, `ocultElementsQuit()`, `displayElementsOcult()` e `copyPortpapeles()` são funções auxiliares que lidam com a exibição de mensagens, a ocultação e exibição de elementos da interface, e a cópia de texto para a área de transferência, respectivamente.

## Como Executar o Projeto

1. Faça o download ou clone o repositório do projeto.
2. Abra o arquivo `index.html` em um navegador web.
