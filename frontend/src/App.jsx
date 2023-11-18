import { Routes, Route } from "react-router-dom"
import './styles/index.css'
import { Categories } from './pages/Categories'
import { CoursesAndTeachers } from './pages/CoursesAndTeachers'
import { SingleCourse } from "./pages/SingleCourse"
import { SingleTeacher } from "./pages/SingleTeacher"
import { Signup } from "./pages/Signup"
import { StudentProfile } from "./pages/StudentProfile"
import { Chatpage } from "./pages/Chatpage"




function App() {
  return (
    <>
      <Routes>
        <Route path="/categories" element={<Categories/>}></Route>
        <Route path="/courses" element={<CoursesAndTeachers/>}></Route>
        <Route path="/singlecourse" element={<SingleCourse/>}></Route>
        <Route path="/singleteacher" element={<SingleTeacher/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/studentprofile" element={<StudentProfile/>}></Route>
        <Route path="/chatpage" element={<Chatpage/>}></Route>
      </Routes>
    </>
  )
}

export default App
