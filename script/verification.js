 const input = document.getElementById('input')
 const password = document.getElementById('password')

 const hiddenSections = document.querySelectorAll('.code')

const getStarted = document.getElementById('GetStartedBtn')



getStarted.addEventListener('click', function(){


    const unhide = () => {
        for (const hiddenSection of hiddenSections) {
            console.log(hiddenSection);
            hiddenSection.classList.remove('code')
        }
        
    }
        unhide()

    const verify = () => {

        if(input.value==='' && password.value===''){
            alert 
                ('Enter credentials')
        }

        else if(input.value===''){
             alert('Enter Your Name')
        }

        else if (password.value!=='123456') {
             alert('Incorrect Password')
        } 

         

        
    }

    verify()

    
})




