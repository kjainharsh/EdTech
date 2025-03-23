import { useAuth } from "../store/auth";
import "./Courses.css";

export const Courses = () => {
    const { courses, addToCart } = useAuth();
    console.log("courses", courses);

    const handleEnroll = (course) => {
        addToCart(course);
    };
    

    const getYouTubeEmbedUrl = (url) => {
        if (!url) return ""; // Handle empty URL case
        if (url.includes("/shorts/")) {
            return url.replace("/shorts/", "/embed/");
        } else if (url.includes("watch?v=")) {
            return url.replace("watch?v=", "embed/");
        }
        return url;
    };


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
                                    {videos && typeof videos === "string" ? ( // Ensure `videos` is a string
                                        <iframe
                                            width="360"
                                            height="315"
                                            src={getYouTubeEmbedUrl(videos)}
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    ) : (
                                        <p>Invalid video URL</p> // Handle errors
                                    )}
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
                                    <button className="enroll-button" onClick={() => handleEnroll(course)}>Enroll</button>
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
