const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('ready', () => {
    console.log('Pronto!');
});

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});


// client.on('message_create', async (message) => {
//     var msg = message.body.toLowerCase()
//     var keys = [
//         'bom dia',
//         'boa tarde',
//         'boa noite',
//         'ola',
//         'olá',
//         'oi',
//         'oiii',
//     ]
//     if(keys.indexOf(msg) > -1){
//         message.reply('Olá sou o CNS 🤖\nSeja bem vindo, como posso ajudar?')
//         message.reply("Selecione um número correspondente as opções abaixo! \n1 - Problemas de Comunicação  \n2 - Preciso de Apoio com Dashboards \n3 - Chamado Personalizado")
//         client.on('message_create', async (message) =>{
//             if(message.body === '1'){
//                 message.reply("Ok primeiro digite seu Nome que eu faça sua identificação!")
//                 client.on('message_create', async (message) =>{
//                     if(message.body.length > 5 && message.fromMe === true && message.body !== 'Ok primeiro digite seu Nome que eu faça sua identificação!'){
//                         console.log('Nome Enviado: ' + message.body)
//                         message.reply(message.from + ' Este é seu numero de telefone? \n1 -Sim \n2- Não')
//                         client.on('message_create', async (message) =>{
//                             await message
//                             if(message.body === '1' && message.fromMe === false){
//                                 message.reply('Nome Enviado: ' + message.body + 'Telefone Enviado' + message.from)
//                             }
//                         })
//                     }
//                 })
//             }
//         })
//     }
// })


// const nome = null
// client.on('message_create', async message =>{
//     if(message.body.toLowerCase() === 'ola' && message.fromMe === false){
//         client.sendMessage(message.from.toLowerCase(), 'Ola, Tudo bem? Sou o CNS e irei estar te atendento. \nSelecione um número para as opções abaixo! \n1 - Problemas de Conunicação')
//         var chatId = message.from
        
//         client.on('message_create', msg => {
//             if(msg.body === '1' && msg.from === chatId && message.fromMe === false){
//                 msg.reply('Digite seu primeiro nome para que eu possa te localizar!')
//                 client.on('message_create', message => {
//                     if(message.body.length > 3 && message.from === chatId && msg.fromMe === false){
//                         nome = message.body
//                         message.reply('Ok, ' + nome + ', Relate seu problema e com quem tentou falar!')
//                     }
//                 })
//             }
//         })
//     }
// })

client.on('message_create', async msg =>{
    if(msg.body.startsWith('🛒')){}
    else if(msg.body.startsWith('🛒') !== true && msg.fromMe === true)
        console.log('Ingrid: ',msg.body)
    else{
        console.log(msg.from, ' - ', msg.body)
    }
})

client.initialize();
