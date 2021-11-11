const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const dogBreeds = document.querySelector('.dogs');

    fetch('https://bko7deq544.execute-api.us-east-2.amazonaws.com/dev/dogs', {
            method: 'GET',
            mode: 'cors',
            headers: {
                'authorization-token': '92DHHeosppfjlHW123Ed',
            },
        }
    ).then(response => response.json()).then(data => console.log(data))



    dogBreeds.addEventListener('click', () =>{
        fetch('https://my-dog-breeds-api.herokuapp.com/dogBreeds', {
                method: 'GET'
            }
        ).then(response => response.json()).then(data => console.log(data))
    })


    burger.addEventListener('click',  () =>{
        nav.classList.toggle('nav-active');

        burger.classList.toggle('toggle');


        navLinks.forEach((link, index) =>{
            if(link.style.animation){
                link.style.animation = ''
            }
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`;
                console.log(index / 7 + 0.3);
            }
        });
    });


}
navSlide();
