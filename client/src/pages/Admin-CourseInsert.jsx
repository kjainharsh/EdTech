import { useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import "./Admin-Update.css";

export const AdminCourseInsert = () => {

    const [data, setData] = useState({
        courseName: "",
        instructor: "",
        duration: "",
        price: "",
        description: "",
        videos: [],
        enrolledStudents: 0,
        maxStudents: 0,
        courseId: ""
    });
    const { authorizationToken } = useAuth();

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setData({
            ...data,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/api/admin/courses/insert", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: authorizationToken
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                toast.success("Course Added Successfully");
                setData({
                    courseName: "",
                    instructor: "",
                    duration: "",
                    price: "",
                    description: "",
                    videos: [],
                    enrolledStudents: 0,
                    maxStudents: 0,
                    courseId: ""
                });
            }
            else {
                toast.error("Failed to Add Course");
            }

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <section className="section-contact">
            <div className="contact-content container">
                <h1 className="main-heading">Add New Course</h1>
            </div>
            <div className="container grid grid-two-cols">
                <section className="section-form">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="courseName">Course Name</label>
                            <input
                                type="text"
                                name="courseName"
                                id="courseName"
                                autoComplete="off"
                                value={data.courseName}
                                onChange={handleInput}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="instructor">Instructor</label>
                            <input
                                type="text"
                                name="instructor"
                                id="instructor"
                                autoComplete="off"
                                value={data.instructor}
                                onChange={handleInput}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="duration">Duration</label>
                            <input
                                type="text"
                                name="duration"
                                id="duration"
                                autoComplete="off"
                                value={data.duration}
                                onChange={handleInput}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="price">Price</label>
                            <input
                                type="text"
                                name="price"
                                id="price"
                                autoComplete="off"
                                value={data.price}
                                onChange={handleInput}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="description">Description</label>
                            <textarea
                                name="description"
                                id="description"
                                autoComplete="off"
                                value={data.description}
                                onChange={handleInput}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="videos">Videos</label>
                            <input
                                type="text"
                                name="videos"
                                id="videos"
                                autoComplete="off"
                                value={data.videos}
                                onChange={(e) => setData({ ...data, videos: e.target.value.split(",") })}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="enrolledStudents">Enrolled Students</label>
                            <input
                                type="number"
                                name="enrolledStudents"
                                id="enrolledStudents"
                                autoComplete="off"
                                value={data.enrolledStudents}
                                onChange={handleInput}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="maxStudents">Max Students</label>
                            <input
                                type="number"
                                name="maxStudents"
                                id="maxStudents"
                                autoComplete="off"
                                value={data.maxStudents}
                                onChange={handleInput}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="courseId">Course ID</label>
                            <input
                                type="text"
                                name="courseId"
                                id="courseId"
                                autoComplete="off"
                                value={data.courseId}
                                onChange={handleInput}
                                required
                            />
                        </div>

                        <div>
                            <button type="submit">Add Course</button>
                        </div>
                    </form>
                </section>
            </div>
        </section>
    );
}
