const app = Vue.createApp({
    data() {
        return {
            firstName: 'John',
            lastName: 'Doe',
            email: 'jonh@gmail.com',
            gender: 'male',
            picture: 'https://publicdomainvectors.org/photos/1288445526.png'
        }
    },
    methods:
    {
        async getUser()
        {
            const res = await fetch('https://randomuser.me/api')
            const {results} = await res.json()
            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.email = results[0].email
            this.gender = results[0].gender
            this.picture = results[0].picture.large
        }
    }
})

app.mount('#app')