/* 
        Checkpoint Iteradores: Os Superpoderes dos Arrays
    Introdução:
    Ei, lembra daquela "caixinha" chamada 'hobbies'? Arrays são maravilhosos,
    mas eles têm superpoderes secretos chamados "iteradores". Vamos
    descobrir juntos?

    1. forEach(): O Anunciante de Hobbies
    Objetivo: Vamos fazer cada hobby da sua lista dar um "oi" para você!
    Javascript

    hobbies.forEach(function(hobby) {
    console.log("Olá, eu sou o hobby " + hobby + "!");
    });

    Por que fazer isso?: Quando queremos interagir com cada elemento de
    uma lista sem criar uma nova, o forEach() é ideal. Isso nos permite "visitar"
    cada hobby!

    Exemplos: Instagram: Para exibir notificações na sua tela inicial, o Instagram
    poderia usar forEach() para iterar sobre cada notificação e renderizar uma
    pequena caixa para ela.
    TikTok: Quando você acessa sua lista de curtidas, o TikTok poderia usar forEach()
    para mostrar todos os vídeos que você gostou.

    Desafio: Tente adicionar mais hobbies à sua lista e veja todos eles dando
    "oi"!

*/

var hobbies = ["ler", "concientização", "luta de Classes", "estudar", "namorar", "musculação", "jogos eletronicos", "comer", "comunizm"];



hobbies.forEach(function(hobby) {
   console.log("Olá, eu sou o hobby " + hobby + "!");
});

/* 
        2. map(): O Transformador de Hobbies
    Objetivo: Transformar seus hobbies em títulos de livros!
    javascript

    const bookTitles = hobbies.map(function(hobby) {
    return "O incrível mundo de " + hobby;
    });
    console.log(bookTitles);

    Por que fazer isso?: map() nos permite criar uma nova lista
    transformando cada elemento da original. Imagine adaptar seus hobbies
    para um contexto diferente!

    Exemplos: Instagram: Ao carregar sua lista de seguidores, o Instagram pode usar
    map() para converter os dados brutos de cada seguidor em um componente
    visual representando esse seguidor.
    TikTok: Ao visualizar a seção "Para Você", o TikTok poderia usar map() para
    transformar cada vídeo em um card visual na interface do usuário.

    Desafio: Crie um "catálogo" de livros baseado em seus hobbies.

*/
    const catálogo = hobbies.map(function(hobby) {
        return "O incrível mundo de " + hobby;
    });

    console.log(catálogo);
/*

    3. filter(): O Caçador de Hobbies Especiais
    Objetivo: Encontre todos os hobbies que começam com a letra "d".
    javascript

    const dHobbies = hobbies.filter(function(hobby) {
    return hobby[0] === 'd';
    } );    

    console.log(dHobbies);

    Por que fazer isso?: Às vezes, queremos uma lista com itens específicos.
    filter() nos permite criar essa lista com base em certas condições.

    Exemplos: Instagram: Na seção "Explorar", o Instagram pode usar filter() para
    mostrar apenas postagens relacionadas a categorias ou hashtags específicas que
    você frequentemente interage.
    TikTok: Quando você escolhe um som específico, o TikTok pode usar filter() para
    mostrar apenas vídeos que utilizaram aquele som.

    Desafio: Qual outro critério você pode usar para filtrar seus hobbies?

*/

    const lhobbies = hobbies.filter(function(hobby)
    {
        return hobby[0] === 'L' 
    });

    console.log(lhobbies);

    const desafioTres = hobbies.filter(function(hobby)
    {
        return hobby[6] === 'r' 
    });

    console.log(desafioTres);
/*
        4. findIndex(): O Localizador de Posições
    Objetivo: Descubra a posição do hobby "correr" na sua lista.
    javascript

    const runningPosition = hobbies.findIndex(function(hobby) {
    return hobby === 'correr';
    });
    console.log("Correr está na posição: " + runningPosition);

    Por que fazer isso?: Quando queremos saber onde um item específico
    está na lista, findIndex() é a ferramenta perfeita!

    Exemplos Instagram: Se você tentasse reordenar os destaques do seu perfil, o
    Instagram poderia usar findIndex() para determinar a posição original de um
    destaque específico antes de movê-lo.

    TikTok: Ao deslizar pelos vídeos, o TikTok pode usar findIndex() para determinar
    a posição do vídeo atual na lista e, em seguida, decidir qual vídeo mostrar a
    seguir.

    Desafio: Tente encontrar a posição de outros hobbies e veja se
    consegue adivinhar antes do código te dizer!

*/
    const lerHobbies = hobbies.findIndex(function(hobby)
    {
        return hobby === 'Ler'
    });

        console.log(lerHobbies);

        const desafioQuatro = hobbies.findIndex(function(hobby)
    {
        return hobby === 'Comer'
    });

        console.log(desafioQuatro);
    
/*

        5. reduce(): O Grande Somador de Hobbies
    Objetivo: Junte todos os seus hobbies em uma frase só!
    javascript

    const allHobbies = hobbies.reduce(function(accumulator, hobby) {
    return accumulator + " e " + hobby; }, "");

    console.log("Meus hobbies são: " + allHobbies);

    Por que fazer isso?: Às vezes, queremos combinar todos os elementos
    em uma única entidade. reduce() é versátil e permite acumulações
    complexas!
    Exemplos Instagram: Se o Instagram quisesse mostrar a contagem total de
    curtidas em todas as suas postagens nos últimos 7 dias, ele poderia usar reduce()
    para somar todas essas curtidas.
    TikTok: O TikTok pode usar reduce() para calcular o tempo total gasto assistindo
    vídeos em um determinado dia, ajudando no recurso de bem-estar digital.

    Desafio: Tente criar uma frase diferente combinando seus hobbies.
*/

        const allHobbies = hobbies.reduce(function(accumulator, hobby)
        {
            return accumulator + " e " + hobby;
        });

        console.log("Meus hobbies são: " + allHobbies);


        const desafioCinco = hobbies.reduce(function(accumulator, hobby)
        {
            return accumulator + ", " + hobby;
        });

        console.log("Eu gosto de: " + desafioCinco);
/*
        5. some(): A Varinha Mágica de Verificação
    Objetivo: Descubra se você tem algum hobby que comece com a letra
    "v".

    const hasVHobby = hobbies.some(function(hobby) {
    return hobby[0] === 'v'; });

    console.log("Eu tenho um hobby que começa com 'v'? " + hasVHobby);

    Por que fazer isso?: some() verifica rapidamente se pelo menos um
    elemento em sua lista atende a um critério.

    Exemplos: Instagram: Ao tentar postar uma foto, o Instagram pode usar some()
    para verificar se alguma das hashtags que você usou foi marcada como
    inapropriada.
    TikTok: Antes de publicar um vídeo, o TikTok pode usar some() para verificar se
    algum dos conteúdos no vídeo vai contra suas diretrizes de conteúdo.

    Desafio: Verifique se você tem um hobby com mais de 8 letras!

    */
        const hasEHobby = hobbies.some(function(hobby){
            return hobby[0] === 'E';
        });

        console.log("Eu tenho um hobby que começa com 'e'? " + hasEHobby);

        const desafioCincoPontoDois = hobbies.some(function(hobby){
            return hobby.length === 8;
        });

        console.log("Eu tenho um hobby com 8 letras? " + desafioCincoPontoDois);
    /*

    6. every(): O Escudo Protetor
    Objetivo: Certifique-se de que todos os seus hobbies tenham menos de
    15 letras.

    const allShort = hobbies.every(function(hobby) { return hobby.length < 15; });
    console.log("Todos os meus hobbies têm menos de 15 letras? " + allShort);

    Por que fazer isso?: every() nos ajuda a confirmar se todos os elementos
    em uma lista atendem a um critério específico.

    Exemplos Instagram: Se você configurar uma privacidade rigorosa, antes de
    mostrar seu perfil a um usuário, o Instagram pode usar every() para confirmar
    que todos os critérios de privacidade estão sendo atendidos.
    TikTok: Ao enviar um vídeo para uma competição, o TikTok pode usar every()
    para garantir que todos os critérios de submissão sejam cumpridos.

    Desafio: Verifique se todos os seus hobbies começam com letras
    minúsculas!

    */

    const allShort = hobbies.every(function(hobby) { 
        return !hobby.length < 15; 
    });
    console.log("Todos os meus hobbies têm menos de 15 letras? " + allShort);


    const desafioSeis = hobbies.every(function(hobby) { 
        return /^[a-z]/.test(hobby); 
    });
    console.log("meus hobbies começam com letras minúsculas? " + desafioSeis);

    /*
        7. find(): O Farol no Nevoeiro
    Objetivo: Encontre o primeiro hobby em sua lista que tenha
    exatamente 5 letras.

    const fiveLetterHobby = hobbies.find(function(hobby) {
    return hobby.length === 5; });
    console.log("Meu primeiro hobby com 5 letras é: " + fiveLetterHobby);

    Por que fazer isso?: find() é perfeito quando estamos procurando algo
    específico na lista, mas só precisamos do primeiro que atenda ao critério.
    Exemplos: Instagram: Ao pesquisar um amigo, o Instagram pode usar find() para
    retornar o primeiro perfil que corresponda ao nome de usuário que você inseriu.
    TikTok: Ao pesquisar uma música, o TikTok pode usar find() para mostrar a
    primeira correspondência exata da música.
    Desafio: Tente encontrar um hobby que contenha a letra "z".

*/
    fiveLetterHobby = hobbies.find(function(hobby){
        return hobby.length === 5;
    });

    console.log("Meu primeiro hobby com 5 letras é: " + fiveLetterHobby);

    desafioSete = hobbies.find(function(hobby)
    {
        return hobby ==='Z' 
    });

    console.log(desafioSete);
/*

        8. slice(): O Mágico das Fatias
    Objetivo: Pegue apenas os três primeiros hobbies de sua lista.

    const firstThreeHobbies = hobbies.slice(0, 3); console.log("Meus três primeiros hobbies são: ",
    firstThreeHobbies);

    Por que fazer isso?: slice() é uma ferramenta incrível quando queremos
    uma parte de nossa lista, seja para destacar ou para trabalhar
    separadamente.

    Exemplos: Instagram: Ao exibir comentários em uma postagem popular, o
    Instagram pode inicialmente usar slice() para mostrar apenas os 10 primeiros,
    permitindo que os usuários carreguem mais se quiserem.
    TikTok: Ao visualizar os principais vídeos de uma hashtag específica, o TikTok
    pode usar slice() para apresentar apenas uma seleção dos vídeos mais populares
    inicialmente.

    Desafio: Tente pegar hobbies do segundo ao quarto da sua lista!
*/

const firstThreeHobbies = hobbies.slice(0, 3); console.log("Meus três primeiros hobbies são: ",
firstThreeHobbies);

const desafioOito = hobbies.slice(1, 4);
console.log("Meus hobbies do segundo ao quarto são: ", desafioOito);
