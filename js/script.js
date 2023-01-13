//!.................................. WEB APP ..................................*/

//^.......................ROW GENERALE WEB APP........................ */
//^.......................PRIMA COLONNA WEB APP....................... */

//*.....Lista Contatti..... */
// User Personale
const data = {
    user: {
        name: 'Nome Utente',
        avatar: '_io'
    },
}
// Lista Contatti
const app = Vue.createApp({
    data() {
        return {
            searchUser: "",
            dinamicMsg: "",
            currentIndex: 0,
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    lastAccess: 'Ultimo accesso oggi alle 15:36',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received'
                        }]
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    lastAccess: 'Ultimo accesso oggi alle 11:55',
                    visible: true,
                    messages: [{
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'received'
                    }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    lastAccess: 'Ultimo accesso oggi alle 14:28',
                    visible: true,
                    messages: [{
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                    ],
                },
                {
                    name: 'Luisa',
                    avatar: '_4',
                    lastAccess: 'Ultimo accesso oggi alle 10:59',
                    visible: true,
                    messages: [{
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                    ],
                },
                {
                    name: 'Gelsomino',
                    avatar: '_5',
                    lastAccess: 'Ultimo accesso oggi alle 08:57',
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Sei il solito noioso!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ci sarai!',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Ci sarai te!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'No tu!',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Vabbe',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ti saluto',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Ciao',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ciao',
                            status: 'received'
                        }
                    ]
                },
                {
                    name: 'Asdrubala',
                    avatar: '_6',
                    lastAccess: 'Ultimo accesso oggi alle 20:30',
                    visible: true,
                    messages: [{
                        date: '10/01/2020 15:30:55',
                        text: 'Facciamo la spesa insieme oggi?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Per me nessun problema',
                        status: 'received'
                    }
                    ],
                },
                {
                    name: 'Lello',
                    avatar: '_7',
                    lastAccess: 'Ultimo accesso oggi alle 20:30',
                    visible: true,
                    messages: [{
                        date: '10/01/2020 15:30:55',
                        text: 'Creiamo una start up insieme?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ok, mi licenzio e la apriamo',
                        status: 'received'
                    }
                    ],
                },
                {
                    name: 'Pierino',
                    avatar: '_8',
                    lastAccess: 'Ultimo accesso oggi alle 21:38',
                    visible: true,
                    messages: [{
                        date: '10/01/2020 15:30:55',
                        text: 'Preparo la carbonara per cena?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'No, sei pazzo? Meglio la gricia!!',
                        status: 'received'
                    }
                    ],
                },
                {
                    name: 'Anselma',
                    avatar: '_io',
                    lastAccess: 'Ultimo accesso oggi alle 22:29',
                    visible: true,
                    messages: [{
                        date: '10/01/2020 15:30:55',
                        text: 'Ciao, quanto tempo che non ci sentiamo, come stai?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si stava meglio quando si stava peggio!',
                        status: 'received'
                    }
                    ],
                },
                {
                    name: 'Trottolino',
                    avatar: '_1',
                    lastAccess: 'Ultimo accesso oggi alle 05:30',
                    visible: true,
                    messages: [{
                        date: '10/01/2020 15:30:55',
                        text: 'Facciamo i compiti insieme stasera?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'No, devo uscire con la mia fidanzata buono studio',
                        status: 'received'
                    }
                    ],
                },
                {
                    name: 'Sandokan',
                    avatar: '_8',
                    lastAccess: 'Ultimo accesso oggi alle 00:02',
                    visible: true,
                    messages: [{
                        date: '10/01/2020 15:30:55',
                        text: 'Come ti sta andando con quel lavoro nuovo?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Bello, molto stimolante',
                        status: 'received'
                    }
                    ],
                },
                {
                    name: 'Ciccia',
                    avatar: '_io',
                    lastAccess: 'Ultimo accesso oggi alle 12:44',
                    visible: true,
                    messages: [{
                        date: '10/01/2020 15:30:55',
                        text: 'Sei fidanzata?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, stasera vado al cinema col mio ragazzo',
                        status: 'received'
                    }
                    ],
                },
                {
                    name: 'Ugo',
                    avatar: '_1',
                    lastAccess: 'Ultimo accesso oggi alle 19:26',
                    visible: true,
                    messages: [{
                        date: '10/01/2020 15:30:55',
                        text: 'Ciao, andiamo a fare una passeggiata?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Nah, preferisco dormire!',
                        status: 'received'
                    }
                    ],
                },
            ]

        }
    },
    methods: {
        addMsg() {
            const newMsg = {
                date: '10/01/2020 15:50:00',
                text: this.dinamicMsg,
                status: "sent",
            };
            const newMsgPc = {
                date: '10/01/2020 15:50:00',
                text: "ok",
                status: "received",
            }
            this.dinamicMsg = '';
            if (this.contacts[this.currentIndex].messages.push(newMsg)) {
                setTimeout(() => {
                    this.contacts[this.currentIndex].messages.push(newMsgPc);
                }, 1000);

            }
        },
    },
    computed: {
        filteredNames(){
            return this.contacts.filter(contact => {
                return contact.name.toLowerCase().includes(this.searchUser.toLowerCase());
            })
        }
    }
})
//~...................................... */
//*.....Barra Chat..... */

app.mount("#base-working")


