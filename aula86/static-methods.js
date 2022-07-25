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
}