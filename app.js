const app = new Vue ({
    el: '#app',
    data: {
        newMessage: '',
        automatedReplies: ['Ciao', 'Ok', 'Va bene! :)', 'Capisco', 'Ci aggiorniamo!'],
        InputFilterChat: '',
        currentChat: '', /* Ho scelto una struttura dati non adatta, mi sto complicando!! */
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro B.',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro L.',
                avatar: '_5',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Claudia',
                avatar: '_6',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Federico',
                avatar: '_7',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Davide',
                avatar: '_8',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received'
                    }
                ],
            }
        ]
    },
    computed: {
        filterChats() {
            const word = this.InputFilterChat.toLowerCase()
            console.log(word);
            this.contacts.forEach(contact => {
                if (contact.name.toLowerCase().includes(word)){
                    contact.visible = true
                } else {
                    contact.visible = false
                }
            });
        }
    },
    methods: {
        activeChat(contact){
            this.newMessage = ''
            this.currentChat = contact
            
            console.log(contact, this.currentChat);

            contact.messages.forEach(message_info => {
                message_info.hour = message_info.date.slice(11, message_info.date.length - 3)
            });

            console.log(this.currentChat);
        },
        selectClick(message_info, event){
            //console.log(message_info);
            const array = this.currentChat.messages
            //console.log(this.currentChat[0].messages);
            const index = array.indexOf(message_info);
            const selectElements = document.querySelectorAll('.msg_actions')
            //console.log(selectElements[index]);
            const element = selectElements[index]
            element.classList.toggle('d_none')
            console.log(event);
        },
        deleteMessage(message_info){
            console.log(message_info);
            const array = this.currentChat.messages
            console.log(array);
            const index = array.indexOf(message_info);
            console.log(index)
            array.splice(index, 1)
            const selectElements = document.querySelectorAll('.msg_actions')
            //console.log(selectElements[index]);
            const element = selectElements[index]
            element.classList.add('d_none')
            console.log(array);
        },
        sendMessage(newMessage){
            if (newMessage.trim() !== ''){
                const array = this.currentChat
                const d = new Date()
                const date = d.getDate() + '/' + 0 + Number(d.getMonth() + 1) + '/' + d.getFullYear() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();

                console.log(date);

                const message = {
                    date: date,
                    message: newMessage,
                    hour: date.slice(11, date.length - 3),
                    status: 'sent'
                }

                console.log(message);
                array.messages.push(message)
                this.newMessage = ''

                const n = Math.floor(Math.random() * 4);
                const automatedMessage = {
                    date: date,
                    message: this.automatedReplies[n],
                    hour: date.slice(11, date.length - 3),
                    status: 'received'
                }
                setTimeout(() => {
                    array.messages.push(automatedMessage)
                  }, 1000) 
            } else{
                this.newMessage = ''
            }
        },
        msg_info(message_info){
            const messagesElements = document.querySelectorAll('.msg_actions')
            //console.log(messagesElements);
            messagesElements.forEach(message => {
                if (!message.className.includes('d_none')){
                    message.innerHTML = `Ricevuto il: ` + message_info.hour
                }
            })
        },
        getLastMessage(contact){
            if (contact.messages.length !==0){
                let index = contact.messages.length;
                return contact.messages[index - 1].message
            }
            
        },
        getLastMsgHour(contact){
            if (contact.messages.length !==0){
                let index = contact.messages.length;
                //console.log(contact.messages[index - 1]);

                return contact.messages[index - 1].date.slice(11, 16)  
            }
            
        }
    }
})