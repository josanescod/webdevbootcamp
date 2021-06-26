let numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButtons; i++) {

    document.querySelectorAll('.drum')[i].addEventListener("click",  function() {

       console.log(this.innerHTML);

       if (this.innerHTML === 'w') {
           console.log('has pulsado w');
       }

       //change style color
       this.style.color = 'white';
        

    });
}




