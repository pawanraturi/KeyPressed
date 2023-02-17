let numbers = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ];

document.addEventListener(
    'keypress', (event) => {
        // makesound(event.key);
        if(numbers.includes(event.key)){
            var a = new Audio('music/' + event.key + '.mp3');
            a.play();
        } 
        else{
            
            var b = new Audio('music/no-sound.mp3');
            b.play();
        }
    }
)

// function makesound(key) {

//     switch (key) {


//         case key:
          
//         var a = new Audio('music/' + key + '.mp3');
//         a.play();
//         break;
//         default:
//     }
// }


