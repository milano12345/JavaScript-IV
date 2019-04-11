// CODE here for your Lambda Classes
//Person/

class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
};


// Instructor/


class Instructor extends Person {
    constructor(childAttrs) {
        super(childAttrs);
        this.specialty = childAttrs.specialty;
        this.favLanguage = childAttrs.favLanguage;
        this.catchPhrase = childAttrs.catchPhrase;
    }
    demo(favSubject) {
        return `Today we are learning about ${favSubject} where the subject is the param passed in.`
    }
    gradesWork(student,favSubjects) {
        return `${student.name} receives a 100 on his project for ${favSubjects}`
    }
}

//Student /

class Student extends Instructor {
    constructor(grandChild) {
        super(grandChild);
        this.previousBackground = grandChild.previousBackground;
        this.className = grandChild.className;
        this.favSubjects = grandChild.favSubjects;
        this.grade = grandChild.grade
    }
    listsSubjects(favSubjects) {
        for (index = 0; index < a.length; ++index) {
            console.log(a[index]);
        }
    }
    PRAssignment(favSubjects) {
        return `${this.name} has submitted a PR for ${favSubjects}`
    }
    sprintChallenge(favSubjects) {
        return `${this.name} has begun sprint challenge on ${favSubjects}`
    }
}

// Project Managers /

class ProjectManagers extends Student {
    constructor(grtgrandChild) {
        super(grtgrandChild);
        this.gradClassName = grtgrandChild.gradClassName;
        this.favInstructor = grtgrandChild.favInstructor;
    }
    standUp(slackChannel) {
        return `${this.name} announces to ${slackChannel}, @channel standup times!`
    }
    debugsCode(student,favSubjects) {
        return `${this.name} debugs ${student.name}'s code on ${favSubjects}`
    }
}

// Characters /

// Instructors /

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});

const josh = new Instructor({
    name: 'Josh',
    location: 'The Dark Realm',
    age: 35,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Full-stack',
    catchPhrase: `Don't forget the banjo!`
});

const jim = new Instructor({
    name: 'Jim',
    location: 'The hyperbelt',
    age: 90,
    gender: 'male',
    favLanguage: 'Css',
    specialty: 'Front-end',
    catchPhrase: `Clarity is key!`
});

const jill = new Instructor({
    name: 'Jill',
    location: 'Venus',
    age: 33,
    gender: 'female',
    favLanguage: 'binary',
    specialty: 'back-end',
    catchPhrase: `01010010101001010`
});

// Students /

const daniel = new Student({
    name: 'Daniel',
    location: 'KC',
    previousBackground: 'Bartending',
    className: 'Full-Stack',
    favSubjects: ['Html', 'CSS', 'JavaScript'],
    grade: '100'
});

const michelle = new Student({
    name: 'michelle',
    location: 'DC',
    previousBackground: 'Childcare',
    className: 'Full-stack',
    favSubjects: ['Html', 'CSS', 'JavaScript'],
});

const mike = new Student({
    name: 'mike',
    previousBackground: 'Nurse',
    className: 'Full-Stack',
    slackChannel: 'Web19',
    favSubjects: ['Html', 'CSS', 'JavaScript'],
});

// Project Managers/

const cj = new ProjectManagers({
    name: 'CJ',
    gradClassName: 'Web15',
    favInstructor: 'Josh',
    slackChannel: 'Web19',
})

const sam = new ProjectManagers({
    gradClassName: 'Web9',
    favInstructor: 'Ryan'
})

const larry = new ProjectManagers({
    gradClassName: 'Web12',
    favInstructor: 'Josh'
})

// Testing Arena/
console.log(daniel.previousBackground);
console.log(cj.gradClassName);
console.log(cj.standUp('Groupthink'));
console.log(sam.gradClassName);
console.log(cj.debugsCode(daniel,daniel.favSubjects[1]))
console.log(daniel.PRAssignment(daniel.favSubjects[2]))
console.log(fred.catchPhrase)
console.log(daniel.grade)
console.log(daniel.sprintChallenge(daniel.favSubjects[2]))
console.log(daniel.speak())
console.log(josh.demo(daniel.favSubjects[1]))
console.log(fred.gradesWork(daniel,daniel.favSubjects[2]))