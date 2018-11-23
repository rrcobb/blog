import React from 'react';

const Title = () => {
  return <React.Fragment>
      <h2>BotCamp</h2>
      <h3> Flatiron fuzzy simulator </h3>
    </React.Fragment>
}


const Description = () => {
  return <React.Fragment>
      <ul>
        <li>
          Students come in with some skill, knowledge, aptitude, and X
        </li>
        <li>
          Flatiron adds to those (we hope) through curriculum + instruction
        </li>
        <li>
          Students apply to jobs
        </li>
        <li>
          Get them stochastically
        </li>
      </ul>


      <p>
        Student Stats: Skills, knowledge, aptitude, 'X'
        <ul>
          <li>
            is knowledge relevant
          </li>
          <li>
            are skills demonstrable and measured well
          </li>
          <li>
            aptitude we can't change
          </li>
          <li>
            X is (culture, confidence, charisma)
          </li>
          <li>
            we can change it but its intentionally mysterious in-game
          </li>
        </ul>
      </p>


      <p>
        Global Factors
        <ul>
          <li>
            Job market fluctuates
          </li>
          <li>
            Tick is a (day? hour?)
          </li>
        </ul>

        <h4>
          Questions that could be asked, based on the simulation
        </h4>
        <ul>
          <li>
            Should flatiron do more direct sales?
            (Aka literally walking around the street, hawking code bootcamp)
          </li>
          <li>
            How valuable is a lead?
          </li>
          <li>
            How many leads per hour could we generate this way? Of what quality?
          </li>
        </ul>
      </p>
    </React.Fragment>
}


/*
 * School
 *  ratings, money
 * All Person
 *  money, happiness
 * Leads
 *  interest, aptitude, salary, money
 * Students
 *  skill, knowledge, aptitude, X
 * Teachers
 *  knowledge, pedagogy, work ethic
 * Courses
 *  duration
 *  marketing
 *  ratings
 * Curriculum
 *
 */

class Student {
  constructor() {
    this.name = "Mike"
    this.skill = 5
    this.knowledge = 5
    this.aptitude = 5
    this.x = 5
  }
}

class StudentCard extends React.Component {
  render() {
    return <div>
      <ul>
        <li>
          name: {this.props.student.name}
        </li>
        <li>
          skill: {this.props.student.skill}
        </li>
        <li>
          aptitude: {this.props.student.aptitude}
        </li>
        <li>
          knowledge: {this.props.student.knowledge}
        </li>
        <li>
          x: {this.props.student.x}
        </li>
      </ul>
    </div>
  }
}


class Game extends React.Component {
  state = {
    students: []
  }

  addStudent = () => {
    this.setState({students: [...this.state.students, new Student()] }) 
  }

  render() {
    return <div>
      <ul>
        <li>
          <button onClick={this.addStudent}>Add Student</button>
          { this.state.students.map((s) => <StudentCard student={s}/>) }
        </li>
      </ul>
    </div>
  }
}

export default class BotCamp extends React.Component {
  render() {
    return <div>
      <Title />
      <Description />
      <Game />
    </div>
  }
}
