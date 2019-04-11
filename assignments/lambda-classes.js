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
    demo(subject) {
        return `Today we are learning about ${this.subject} where the subject is the param passed in.`
    } s
    grade(student, subject) {
        console.log(`${this.student.name} receives a perfect score on ${this.subject}`)
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
    listsSubjects(subject) {
        console.log(this.student.favSubjects)
    }
    PRAssignment(subject) {
        console.log(`${this.student.name} has submitted a PR for ${this.subject}`)
    }
    sprintChallenge(subject) {
        console.log(`${this.student.name} has begun sprint challenge on ${this.subject}`)
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
        console.log(`${this.name} announces to ${this.slackChannel}, @channel standup times!`)
    }
    debugsCode() {
        console.log(`${this.name} debugs ${student.name}'s code on ${this.subject}`)
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
    previousBackground: 'Bartending',
    className: 'Web19',
    grade: 'A'
});

const michelle = new Student({
    previousBackground: 'Childcare',
    className: 'Web19',
    grade: 'A'
});

const mike = new Student({
    previousBackground: 'Nurse',
    className: 'Web19',
    grade: 'A'
});

// Project Managers/

const cj = new ProjectManagers({
    gradClassName: 'Web15',
    favInstructor: 'Josh'
})

const sam = new ProjectManagers({
    gradClassName: 'Web9',
    favInstructor: 'Ryan'
})

const larry = new ProjectManagers({
    gradClassName: 'Web12',
    favInstructor: 'Josh'
})