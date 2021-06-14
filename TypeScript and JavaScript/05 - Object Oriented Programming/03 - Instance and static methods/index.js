class RemoteControl {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    increaseVolume() {
        this.volume += 2;
    }
    // instance method
    decreaseVolume() {
        this.volume -= 2;
    }

    // static method
    static changeBattery() {
        console.log('ok, i will change the battery.')
    }
}

const control1 = new RemoteControl('LG');

control1.increaseVolume();

console.log(control1);
RemoteControl.changeBattery(); /* method referring to the class itself,
does not have access to the instance data */