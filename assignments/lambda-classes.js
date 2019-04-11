// CODE here for your Lambda Classes
const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

//Person/

class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak () {
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
    }s
    grade(student,subject) {
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