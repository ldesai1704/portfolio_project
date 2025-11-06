import React from "react";
import './about.css';

const About = () => {
  return (
    <section className="about-section"> 
      <div className="container">
        <h1 className="about-title">About Me</h1>
        <p className="about-intro">
          Hi! I’m <span className="highlight">Labdhi Desai</span>, a
          <strong> Master’s student in Software Engineering at West London University</strong>.
          I’m passionate about designing and developing efficient, scalable, and
          user-focused applications that make a positive impact.
        </p>

        <p className="about-body">
          I’ve built a solid foundation in software development through
          academic projects and self-learning, gaining hands-on experience with
          technologies like <strong> Java, C++, React, MySQL,</strong> and{" "}
          <strong>Firebase</strong>. My studies have helped me strengthen my
          problem-solving skills, logical thinking, and understanding of modern
          software design principles.
        </p>

        <p className="about-body">
          I’m particularly interested in <strong>Front-end development</strong>{" "}
          and <strong>intelligent systems</strong> that solve real-world
          problems. My goal is to begin my professional journey as a{" "}
          <strong>Software Engineer</strong>, contributing to meaningful
          projects while continuing to expand my technical expertise.
        </p>

        <p className="about-body">
          Outside of coding, I enjoy exploring new technologies, participating
          in hackathons, and reading about software design and system
          architecture.
        </p>
      </div>
    </section>
  );
};

export default About;
