# calculadora-template-sample

Neste desafio vocês deverão criar uma calculadora para funcionar e ela deve pelo menos fazer as 4 operações da matemática: **soma, subtração, multiplicação ou divisão**. Não precisa fazer ela do zero, você pode baixar um layout pronto neste [repositório](https://github.com/profalves/calculadora-template-sample.git) e editar somente o arquivo javascript, que é o foco do desafio.

## Obrigatório:

- Organize em funções diferentes para cada ação diferente, por exemplo uma função para o click nos botões numéricos e outra função para os botões de operação.
- Usar o template https://github.com/profalves/calculadora-template-sample.git
- Não altere a estrutura HTML pronto da calculadora, manipule o DOM através do javascript usando `addEventListener`.
- A calculadora não deve aceitar divisão por zero.

## Para se destacar:

- Faça com que o botão **ON/C** desempenhe a função de limpar o display.
- Possibilite as operações fracionárias, por exemplo: `1.5 + 2 = 3.5`. Neste caso, é importante que o ponto seja adicionado no display apenas uma vez.
- Complete a calculadora com as operações de **porcentagem**, **raiz quadrada**, **troca de sinal(+/-)**, etc.
- Limite a tela para exibir no máximo 8 digitos.
- Faça com que possa ser feito vários cálculos na mesma digitação, ex. Digitado: `1 + 2 * 2`, Resultado: `6`.
- Evitar o uso do `eval()`, procure a função no javascript para converter o valor do display para números.
