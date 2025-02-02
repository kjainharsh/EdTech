import { useAuth } from "../store/auth";
import "./Courses.css";

export const Courses = () => {
    const { courses } = useAuth();
    console.log("courses", courses);
    
    return (
        <section className="section-courses">
            <div className="container">
                <h1 className="main-heading">Courses</h1>
            </div>

            <div className="container grid grid-three-cols">
                {courses && courses.length > 0 ? (
                    courses.map((course, index) => {
                        const { courseId, courseName, instructor, duration, maxStudents, videos, price, description } = course;

                        return (
                            <div className="card" key={index}>
                                <div className="card-img">
                                    <img
                                        src="/images/design.png"
                                        alt={courseName}
                                        width="200"
                                    />
                                </div>

                                <div className="card-details">
                                    <div className="grid grid-two-cols">
                                        <p>{price ? price : "N/A"}</p>
                                    </div>
                                    <h2>{courseName}</h2>
                                    <p>{description ? description : "No description available"}</p>
                                    <p><strong>Instructor:</strong> {instructor}</p>
                                    <p><strong>Duration:</strong> {duration}</p>
                                    <p><strong>Max Students:</strong> {maxStudents}</p>
                                    <p><strong>Videos:</strong> {videos.length}</p>
                                    <button className="enroll-button">Enroll</button>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <p>No courses available</p>
                )}
            </div>
        </section>
    );
};
