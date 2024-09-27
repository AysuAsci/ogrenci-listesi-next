import Link from 'next/link';
// app/page.js
import { getStudents } from './data/getStudents';
import '../styles/globals.css';

const Home = async () => {
  const students = await getStudents();

  return (
    <div>
      <h1>Öğrenci Listesi</h1>
      <ul>
        {students.map(student => (
          <li key={student.id}>
            <Link href={`/students/${student.id}`}>{student.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;