import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { Link } from "react-router-dom";
import "./AdminUsers.css"; // Ensure you have a CSS file for styling

export const AdminCourses = () => {

    const { authorizationToken } = useAuth();
    const [courses, setCourses] = useState([]);

    const getAllCoursesData = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/admin/courses", {
                method: "GET",
                headers: { Authorization: authorizationToken },
            });
            console.log("courses", response);

            const data = await response.json();
            setCourses(data);

        } catch (error) {
            console.log(error);
        }
    }

    const deleteCourse = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/api/admin/courses/delete/${id}`, {
                method: "DELETE",
                headers: { Authorization: authorizationToken },
            });

            if (response.ok) {
                getAllCoursesData();
            }

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAllCoursesData();
    }, []);

    return (
        <>
            <section className="admin-courses-section">
                <div className="container">
                    <h1>Admin Courses Data</h1>
                </div>
                <div className="container admin-courses">
                    <table>
                        <thead>
                            <tr>
                                <th>Course Name</th>
                                <th>Instructor</th>
                                <th>Duration</th>
                                <th>Price</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {courses && courses.length > 0 ? (
                                courses.map((course, index) => (
                                    <tr key={index}>
                                        <td>{course.courseName}</td>
                                        <td>{course.instructor}</td>
                                        <td>{course.duration}</td>
                                        <td>{course.price}</td>
                                        <td>
                                            <Link to={`/admin/courses/${course._id}/edit`}>Edit</Link>
                                        </td>
                                        <td>
                                            <button onClick={() => deleteCourse(course._id)}>Delete</button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6">No courses available</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    <div className="add-course-button-container">
                        <Link to="/admin/courses/insert" className="add-course-button">Add Course</Link>
                    </div>
                </div>
            </section>
        </>
    );
};