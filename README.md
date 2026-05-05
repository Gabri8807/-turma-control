📚 Sistema de Gestão de Turma (Lógica de Programação)
Projeto desenvolvido para prática de lógica de programação utilizando TypeScript.

O objetivo é aplicar conceitos fundamentais como:

Estruturas condicionais (if / else)
Estruturas de repetição (for / while)
Funções
Arrays e objetos
🎯 Objetivo do Sistema
Criar um sistema simples que permita gerenciar alunos de uma turma, realizando operações como cadastro, lançamento de notas e verificação de desempenho.

🧩 Funcionalidades
👤 1. Cadastrar Aluno
Permite adicionar um novo aluno ao sistema.

Regras:

Nome não pode ser vazio
Idade deve ser maior que 0
📝 2. Adicionar Nota
Adiciona uma nota a um aluno existente.

Regras:

O aluno deve existir
Nota deve ser entre 0 e 10
📊 3. Calcular Média
Calcula a média das notas de um aluno.

📈 4. Verificar Situação
Define a situação do aluno com base na média:

Média ≥ 7 → Aprovado
Média ≥ 5 → Recuperação
Média < 5 → Reprovado
📋 5. Listar Alunos
Exibe todos os alunos cadastrados com:

Nome
Idade
Média
Situação
🔍 6. Buscar Aluno (Opcional)
Permite buscar um aluno pelo nome.

❌ 7. Remover Aluno (Desafio)
Remove um aluno da lista.

🖥️ Menu do Sistema
O sistema deve funcionar via terminal com um menu interativo:

1 - Cadastrar aluno
2 - Adicionar nota
3 - Listar alunos
4 - Buscar aluno
0 - Sair
🧠 Conceitos Trabalhados
Conceito	Onde é aplicado
if / else	Validação e situação do aluno
for	Percorrer lista de alunos
while	Menu interativo
funções	Organização do código
arrays	Lista de alunos
objetos	Estrutura do aluno
📦 Estrutura sugerida
src/
 ├── types/
 │    └── Aluno.ts
 ├── services/
 │    └── alunoService.ts
 ├── utils/
 │    └── calculos.ts
 └── index.ts
🚀 Como executar
Instalar dependências:
npm install
Rodar o projeto:
npm run dev
🎓 Níveis de Dificuldade
🟢 Básico
Cadastrar aluno
Listar alunos
🟡 Intermediário
Adicionar notas
Calcular média
🔵 Avançado
Buscar aluno
Ver situação automaticamente
🔴 Desafio
Remover aluno
Editar dados
Ordenar por média
💡 Regras Gerais
O sistema deve usar funções para cada ação
Evitar código duplicado
Sempre validar os dados de entrada
Usar nomes de variáveis claros
🧑‍🏫 Sugestão para Aula
Dividir a turma em grupos
Cada grupo implementa uma funcionalidade
No final, juntar tudo em um único sistema
📌 Observação
Este projeto é focado em aprendizado, não é necessário usar banco de dados ou interface gráfica.
