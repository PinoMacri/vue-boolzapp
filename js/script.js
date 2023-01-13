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
                  name: 'Luisa',
                  avatar: 'img/avatar_4.jpg',
                },
                {
                    name: 'Gelsomino',
                    avatar: 'img/avatar_5.jpg',
                  },
                  {
                    name: 'Asdrubale',
                    avatar: 'img/avatar_6.jpg',
                  },
                  {
                    name: 'Viviana',
                    avatar: 'img/avatar_7.jpg',
                  },
                  {
                    name: 'Pierino',
                    avatar: 'img/avatar_8.jpg',
                  },
                  {
                    name: 'Trottolino',
                    avatar: 'img/avatar_io.jpg',
                  },
                  {
                    name: 'Trottolina',
                    avatar: 'img/avatar_1.jpg',
                  },
                  {
                    name: 'Sandokan',
                    avatar: 'img/avatar_8.jpg',
                  },
                  {
                    name: 'Ciccio',
                    avatar: 'img/avatar_io.jpg',
                  },
                  {
                    name: 'Pocahontas',
                    avatar: 'img/avatar_1.jpg',
                  },
              ]
              
        }
    }
  })
  app.mount("#contatti")