 function getCalculator() {

    return {

        display: document.querySelector('.display'),
        
        start() { this.clickButtons(); this.pressEnter(); this.display.focus();},

        pressEnter(){this.display.addEventListener('keypress', e => {

            if (e.keyCode === 13 ) { this.doMath(); }
        })},

        doMath() {

            let math = this.display.value;

            try {

                math = eval(math); /*/ ALERT with this method, it can bring security flaws to 
                your application /*/

                if(!math) {

                    alert('Invalid values!')

                    return;
                }

                this.display.value = math;
        
            } catch (e) { 
                
                alert('Invalid values!')
                return;
            }
        },

        displayCleaner() { this.display.value = '';  this.display.focus();},

        deleteOne() {this.display.value = this.display.value.slice(0, -1)}, // string length -1

        clickButtons() { // configuring the calculator buttons

            document.addEventListener('click', function(e) {

                const el = e.target;

                if (el.classList.contains('btn-num')) this.btnForDisplay(el.innerText);
                

                if (el.classList.contains('btn-clear')) this.displayCleaner();

                if (el.classList.contains('btn-del')) this.deleteOne();

                if (el.classList.contains('btn-eq')) this.doMath();
                
            }.bind(this)); /*/ to capture 'this' out of scope, if this weren't done 'this' 
            would be == a document, this would not be necessary if we used an arrow functions /*/
        },

        btnForDisplay(value) {

            this.display.value += value; /*/ Concatenate what is on the display with more values
            entered /*/
        }

    };
 }

 const calculator = getCalculator();

 calculator.start();