const data = {
    user: {
      name: 'Nome Utente',
      avatar: '_io'
    },
  }
  
  const app = Vue.createApp({
    data(){
        return {
            contacts: [
                {
                  name: 'Michele',
                  avatar: 'img/avatar_1.jpg',
                },
                {
                  name: 'Fabio',
                  avatar: 'img/avatar_2.jpg',
                },
                {
                  name: 'Samuele',
                  avatar: 'img/avatar_3.jpg',
                },
                {
                  name: 'Carletto',
                  avatar: 'img/avatar_4.jpg',
                },
                {
                    name: 'Gelsomino',
                    avatar: 'img/avatar_5.jpg',
                  },
                  {
                    name: 'Asdrubala',
                    avatar: 'img/avatar_6.jpg',
                  },
                  {
                    name: 'Viviano',
                    avatar: 'img/avatar_7.jpg',
                  },
                  {
                    name: 'Pierino',
                    avatar: 'img/avatar_8.jpg',
                  },
                  {
                    name: 'Anselma',
                    avatar: 'img/avatar_io.jpg',
                  },
                  {
                    name: 'Trottolino',
                    avatar: 'img/avatar_1.jpg',
                  },
                  {
                    name: 'Sandokan',
                    avatar: 'img/avatar_8.jpg',
                  },
                  {
                    name: 'Ciccia',
                    avatar: 'img/avatar_io.jpg',
                  },
                  {
                    name: 'Ugo',
                    avatar: 'img/avatar_1.jpg',
                  },
              ]

        }
    }
  })
  app.mount("#contatti")