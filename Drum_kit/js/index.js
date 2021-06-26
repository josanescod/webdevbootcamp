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
                let tom1 = new Audio('sounds/tom-1.mp3');
                tom1.play();
                break;

            case 'a':
                console.log('has pulsado a');
                let tom2 = new Audio('sounds/tom-2.mp3');
                tom2.play();
                break;

            case 's':
                console.log('has pulsado s');
                let tom3 = new Audio('sounds/tom-3.mp3');
                tom3.play();
                break;

            case 'd':
                console.log('has pulsado d');
                let tom4 = new Audio('sounds/tom-4.mp3');
                tom4.play();
                break;

            case 'j':
                console.log('has pulsado j');
                let snare = new Audio('sounds/snare.mp3');
                snare.play();
                break;

            case 'k':
                console.log('has pulsado k');
                let crash = new Audio('sounds/crash.mp3');
                crash.play();
                break;
         
            case 'l':
                console.log('has pulsado l');
                let kick = new Audio('sounds/kick-bass.mp3');
                kick.play();
                break;

            default:
                console.log('ok');
        }


    });
}




