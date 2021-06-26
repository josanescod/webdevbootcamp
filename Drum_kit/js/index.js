let numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButtons; i++) {

    document.querySelectorAll('.drum')[i].addEventListener("click", function () {

        /*console.log(this.innerHTML);
 
        if (this.innerHTML === 'w') {
            console.log('has pulsado w');
        }
 
        //change style color
        this.style.color = 'white';*/
        
        switch (this.innerHTML) {
            case 'w':
                console.log('has pulsado w');
                let audio = new Audio('sounds/crash.mp3');
                audio.play();
                break;

            case 'a':
                console.log('has pulsado a');
                break;

            case 's':
                console.log('has pulsado s');
                break;

            case 'd':
                console.log('has pulsado d');
                break;

            case 'j':
                console.log('has pulsado j');
                break;

            case 'k':
                console.log('has pulsado k');
                break;
         
            case 'l':
                console.log('has pulsado l');
                break;

            default:
                console.log('ok');
        }


    });
}




