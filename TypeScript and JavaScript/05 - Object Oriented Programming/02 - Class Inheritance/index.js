class ElectronicDevice {
    constructor(name) {
        this.name = name;
        this.switchedOn = false;
    }

    on() {
        if (this.switchedOn) {
            console.log(this.name + " already turned on");
            return;
        }

        this.switchedOn = true;
    }

    off() {
        if (!this.switchedOn) {
            console.log(this.name + " already turned off");
            return;
        }

        this.switchedOn = false;
    }
}

class Smartphone extends ElectronicDevice {
    constructor(name, color, model) {
        super(name);
        this.color = color;
        this.model = model;
    }

}

const s1 = new Smartphone('iPhone', 'Black', 'X');
console.log(s1)