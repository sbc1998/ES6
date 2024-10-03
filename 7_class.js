
class student {
    
    constructor(name,grade) {
        this.name= name;
        this.grade= grade;
    }
    
    show() {
        console.log(`${this.name} studies in ${this.grade}`);
    }
}

const student1= new student("Alice", 9);
student1.show();
