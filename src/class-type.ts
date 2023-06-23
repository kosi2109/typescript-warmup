class Coder {
  secondLang!: string;

  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string = 'Typescript'
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }

  public getAge() {
    return `Hello, I', ${this.age}`
  }
}

const Dave = new Coder('Dave', 'Rock', 42);
Dave.getAge();
// Dave.age;
// Dave.lang;


class WebDev extends Coder {
    constructor(
        public computer : string,
        name : string,
        music : string,
        age : number
    ) {
        super(name, music, age);
        this.computer = computer;
    }

    public getLang() {
        return `I write ${this.lang}`
    }
}

const Sera = new WebDev('Mac', 'Sara', 'rock', 23);
Sera.getLang()
// Sera.lang

interface Musician {
    name : string,
    instrument : string,
    play(action: string): string
}

class GuiteristA implements Musician {
    name : string;
    instrument : string;

    constructor(name : string, instrument : string) {
       this.name = name;
       this.instrument = instrument;
    }

    play(action:string) {
        return `${this.name} ${action} ${this.instrument}`
    }
}

/////////////////////////////////////

class Peeps {
  static count : number = 0;

  static getCount() : number {
    return Peeps.count
  }

  public id : number;

  constructor(public name : string) {
    this.name = name;
    this.id = ++Peeps.count
  }
}

