

// dl page
let front_Id = document.getElementById('front_Id')
let isSelected = document.getElementById('isSelected')

let back_id = document.getElementById('back_id')
let isSelected2 = document.getElementById('isSelected2')

let submit = document.getElementById('submit');


front_Id.addEventListener('change', ()=>{
    if (front_Id.files.length > 0) {
        isSelected.innerHTML = front_Id.value.toString().substring(12);
    }
})

back_id.addEventListener('change', ()=>{
    if (back_id.files.length > 0) {
        isSelected2.innerHTML = back_id.value.toString().substring(12);
    }
})
