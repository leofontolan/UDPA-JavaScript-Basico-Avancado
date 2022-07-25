class RemoteControl{

    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }

    turnUpVolume(){
        this.volume += 2;
    }

    turnDownVolume(){
        this.volume -= 2;
    }

    static changeFrequency(frequency){
        console.log(`Changing frequency to ${frequency}`);
    }
}

const c1 = new RemoteControl('LG');
const c2 = new RemoteControl('Samsung');
c1.turnUpVolume();
c2.turnUpVolume();

console.log(c1);
console.log(c2);


RemoteControl.changeFrequency(120);
c2.changeFrequency(600);