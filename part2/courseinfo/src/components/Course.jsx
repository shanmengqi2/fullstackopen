const Header = ({ course }) => <h1>{course}</h1>
const Content = ({ parts }) => (
  <div>
    {parts.map((part) => (
      <Part part={part} key={part.id} />
    ))}
  </div>
)

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
)

const Total = ({ parts }) => (
  <p style={{ fontWeight: 'bold' }}>
    total of {parts.reduce((acc, cur) => acc + cur.exercises, 0)} exercises
  </p>
)

const Course = ({ course }) => (
  <div>
    <Header course={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </div>
)

export default Course