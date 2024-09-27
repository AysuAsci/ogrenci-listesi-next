// app/students/[id]/page.js
import { getStudents } from '../../data/getStudents';
import '../../../styles/globals.css'; // CSS modülünü buradan import ediyoruz
import styles from './StudentDetail.module.css'; // Doğru yol

const StudentDetail = async ({ params }) => {
  const students = await getStudents();
  const student = students.find((s) => s.id === params.id);

  if (!student) {
    return <div>Öğrenci bulunamadı.</div>;
  }

  return (
    <div className={styles.studentDetail}>
      <h1>{student.name}</h1>
      <p>Sınıf: {student.class}</p>
      <p>Gün Sayısı: {student.attendance.daysPresent} (Gelmediği gün: {student.attendance.daysAbsent})</p>
      <h2>Gelmediği Günler:</h2>
      <ul>
        {student.attendance.absentDays.length > 0 ? (
          student.attendance.absentDays.map(date => (
            <li key={date} className={styles.absent}>{date}</li>
          ))
        ) : (
          <li>Yok</li>
        )}
      </ul>
    </div>
  );
};

export default StudentDetail;