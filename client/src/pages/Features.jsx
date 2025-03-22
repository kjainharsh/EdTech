import React from "react";
import "./Features.css";

const Features = () => {
  const features = [
    {
      title: "Interactive Learning",
      description: "Engage with interactive quizzes, assignments to enhance your learning experience.",
      image: "/images/interactive-courses.png",
    },
    {
      title: "Expert Instructors",
      description: "Learn from industry experts and professionals who are passionate about teaching.",
      image: "/images/expert-instructors.png",
    },
    {
      title: "Community Support",
      description: "Join a vibrant community of learners and educators for collaboration and support.",
      image: "/images/community-support.png",
    },
    {
      title: "Flexible Learning",
      description: "Access courses anytime, anywhere, and learn at your own pace.",
      image: "/images/flexible-learning.png",
    },
    {
      title: "Certification",
      description: "Earn certificates upon course completion to showcase your achievements.",
      image: "/images/certification.png",
    },
    {
      title: "Affordable Pricing",
      description: "Get access to high-quality courses at affordable prices.",
      image: "/images/affordable-pricing.png",
    },
  ];

  return (
    <div className="features-page">
      {/* <header className="features-header">
        <h1>Our Features</h1>
        <p>Discover the unique features that make our platform stand out.</p>
      </header> */}
      <section className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <img src={feature.image} alt={feature.title} className="feature-image" />
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Features;
