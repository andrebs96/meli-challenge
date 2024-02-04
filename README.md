# Challenge Mercado Livre

## [PT] - Setup do Projeto / [ES] - Configuración del proyecto

1. [PT] - Instale o [Node.js](https://nodejs.org/en/) / [ES] - Instala el [Node.js](https://nodejs.org/en/).
2. [PT] - Faça um clone do projeto / [ES] - Hacer un clon del proyecto.
3. [PT] - Na pasta do projeto, digite o comando `yarn install`, ou, `npm install` se preferir. E, espere todas as dependências serem baixadas.
[ES] - En la carpeta del proyecto, escriba el comando `yarn install` o `npm install` si lo prefiere. Y espere a que se descarguen todas las dependencias.

## Comandos

[PT] - Além dos comandos comentados acima, temos:
[ES] - Además de los comandos mencionados anteriormente, tenemos:

* `yarn dev`: [PT] - para iniciar o ambiente desenvolvimento[ES] - para iniciar el entorno de desarrollo.
> [PT] - Note: Após a compilação, o endereço de acesso via browser será informado no Terminal junto com os status de compilação a cada arquivo alterado.
> [ES] - Nota: Después de la compilación, la dirección de acceso al navegador se informará en la Terminal junto con el estado de compilación de cada archivo modificado.
* `yarn build`: [PT] - para realizar o build do projeto / [ES] - para construir el proyecto.
* `yarn start`: [PT] - com o build já feito, este comando inicializa o projeto / [ES] - con la compilación ya realizada, este comando inicializa el proyecto.
* `yarn lint`: [PT] - responsável por encontrar e corrigir problemas de código / [ES] - responsable de encontrar y solucionar problemas de código.
> [PT] - Note: Usando o comando com `--fix`, automaticamente os problemas mais simples são corrigidos. Este processo ocorre a cada tentativa de commit.
> [ES] - Nota: El uso del comando con `--fix` soluciona automáticamente los problemas más simples. Este proceso ocurre con cada intento de confirmación.
* `yarn generate`: [PT] - para auxiliar na criação de novos componentes, templates e páginas dentro do padrão preestabelecido / [ES] - para ayudar en la creación de nuevos componentes, plantillas y páginas dentro del estándar preestablecido.
* `yarn test`: [PT] - para rodar os testes unitários e obter status de cobertura através do terminal / [ES] - para ejecutar pruebas unitarias y obtener el estado de cobertura a través del terminal.
* `yarn test:watchAll`: [PT] - comando responsável por rodar e assistir todos os testes unitários / [ES] - comando responsable de ejecutar y observar todas las pruebas unitarias.
* `yarn test:watch`: [PT] - comando responsável por rodar e assistir arquivos alterados que interfiram na cobertura e criação de testes unitários / [ES] - comando responsable de ejecutar y observar archivos modificados que interfieren con la cobertura y creación de pruebas unitarias.

## [PT] - Padrões gerais do Projeto / [ES] - Estándares Generales de Proyectos

[PT] - Abaixo está um exemplo dos principais diretórios com uma breve explicação de cada contexto / [ES] - A continuación se muestra un ejemplo de los principales directorios con una breve explicación de cada contexto:

* `pages`: 
[PT] - diretório que reune a regra de negócio e o layout da tela.
[ES] - directorio que reúne la regla de negocio y el diseño de pantalla.

```sh
┣ 📂 src \
┃ ┣ ┣ 📂 pages \
┃ ┃ ┃ ┣ 📜 home.jsx
```

* `components`: 
[PT] - diretório responsável pelos componentes básicos dos sistemas de design. Os componentes deste diretório podem ser utilizados em qualquer contexto, pois não contém regras de negócio. Todos os seus componentes precisam ter testes unitários.
[ES] - directorio responsable de los componentes básicos de los sistemas de diseño. Los componentes de este directorio se pueden utilizar en cualquier contexto, ya que no contiene reglas de negocio. Todos sus componentes deben tener pruebas unitarias.

```sh
┣ 📂 src \
┃ ┣ 📂 components \
┃ ┃ ┣ 📂 Button \
┃ ┃ ┃ ┣ 📜 index.jsx
┃ ┃ ┃ ┣ 📜 stories.jsx
┃ ┃ ┃ ┣ 📜 styles.js
┃ ┃ ┃ ┣ 📜 test.jsx
```

* `templates`: 
[PT] - o diretório de templates contém o agrupamento de componentes do diretório components para organizar o comportamento esperado da UI da página, podendo ter testes unitários caso a equipe sinta necessidade.
[ES] - el directorio de plantillas contiene la agrupación de componentes del directorio de componentes para organizar el comportamiento esperado de la interfaz de usuario de la página y puede tener pruebas unitarias si el equipo considera necesario.

```sh
┣ 📂 src \
┃ ┣ 📂 templates \
┃ ┃ ┣ 📂 Home \
┃ ┃ ┃ ┣ 📜 index.jsx
┃ ┃ ┃ ┣ 📜 styles.js
┃ ┃ ┃ ┣ 📜 test.jsx
``` 

## [PT] - Convenção de commits / [ES] - Convención de commits

[PT] - Este projeto usa padrões de commits para ajudar a normalizar as mensagens de commit. Sua mensagem de commit precisa estar no formato:
[ES] - Este proyecto utiliza patrones de commits para ayudar a normalizar los mensajes de commits. Su mensaje de commits debe tener el formato:
```
<tipo>(escopo opcional): <descrição>
```

[PT] - O `tipo` deve ser um dos **[build, chore, ci, docs, feat, fix, perf, refactor, revert, style, test]**.
Você pode obter ajuda [aqui](https://github.com/conventional-changelog/commitlint/#what-is-commitlint).
[ES] - El "tipo" debe ser uno de **[build, chore, ci, docs, feat, fix, perf, refactor, revert, style, test]**.
Puede obtener ayuda [aquí](https://github.com/conventional-changelog/commitlint/#what-is-commitlint).

> [PT] - Note: por prioridade, não realizei a configuração do commitlint, commitizen e husky para automatizar a convenção de commits via script.
> [ES] - Note: como prioridad, no configuré commitlint, commitizen y husky para automatizar la commits de confirmación mediante script.

## [PT] - Decisões para o Projeto / [ES] - Decisiones para el proyecto

[PT]
* Framework: primeira decisão foi usar React e seu ecossistema. Pois, além de ser a tecnologia que mais trabalho atualmente, é também uma das tecnologias adotadas pelo Mercado Livre.
* Gerenciamento de estado: não foi implementado nenhum gerenciador de estado, pois não senti a necessidade. Apesar de entender a necessidade de ser analisado em como lidar com este contexto, creio que a frase "menos é mais" no e-mail de instrução faça sentido. No entanto, costumo trabalhar com o Context API do React e Redux. Sendo o Context API para contexto simples e o Redux para situações mais complexos.

[ES]
* Framework: la primera decisión fue utilizar React y su ecosistema. Porque, además de ser la tecnología con la que trabajo más actualmente, también es una de las tecnologías adoptadas por Mercado Livre.
* Gestión estatal: no se implementó ningún gestor estatal porque no sentí la necesidad. Aunque entiendo la necesidad de analizar cómo afrontar este contexto, creo que la frase “menos es más” del correo electrónico de instrucciones tiene sentido. Sin embargo, normalmente trabajo con la API de contexto de React y Redux. La API Context es para contextos simples y Redux para situaciones más complejas.

## Testes

[PT]
* Unitários: usando jest e react testing library, implementei exemplos nos diretórios `components` e `templates`. No entanto, creio que os demais diretórios devem ter testes unitários também.
* E2E: usando cypress para ter testes mais completos.

[ES]
* unitarios: usando Jest y react testing library, implementé ejemplos en los directorios `components` e `templates`. Sin embargo, creo que los otros directorios también deberían tener testes unitarios.
* E2E: usando cypress para tener testes más completos.

## [PT] - Pontos de atenção / [ES] - Puntos de atención
* TDD e TypeScript: 
[PT] - para ganhar agilidade na entrega tomei a decisão de não usar.
[ES] - para acelerar el envío decidí no usarlo.
* Paginação na tela de pesquisa:
[PT] - acabei perdendo muito tempo na análise do endpoint que retorna em alguns momentos items repetidos, então decidi não implementar.
[ES] - terminé perdiendo mucho tiempo analizando el punto final que a veces devuelve elementos repetidos, así que decidí no implementarlo.
