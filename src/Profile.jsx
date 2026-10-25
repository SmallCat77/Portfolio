
import profileImg from './assets/profile.jpg'
import './Profile.css'

function Profile() {
  return (
    <main className="profile-page">
      <a className="profile-back" href="/">
        ← Back to portfolio
      </a>

      <section className="profile-card">
        <div className="profile-photo-wrap">
          <img
            src={profileImg}
            alt="Nathanyell Dela Pena"
            className="profile-photo"
          />
          <span className="profile-status">
            <span /> Available to learn & collaborate
          </span>
        </div>

        <div className="profile-details">
          <span className="eyebrow">MY PROFILE / 2026</span>

          <h1>
            Nathanyell
            <br />
            <span>L. Dela Pena.</span>
          </h1>

          <p className="profile-role">
            BSIT STUDENT · ASPIRING WEB DEVELOPER
          </p>

          <p className="profile-bio">
            Hey! I'm Nathanyell, a fourth-year Bachelor of Science
            in Information Technology student from the Philippines.
            I'm passionate about building useful digital experiences
            and exploring how technology can solve real-world problems.
          </p>

          <p className="profile-bio">
            I'm currently growing my skills in frontend development,
            database management, UI/UX design, and interactive
            applications. I believe the best way to learn is to build,
            experiment, and keep improving.
          </p>

          <div className="profile-skills">
            <span>HTML & CSS</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>PHP / Laravel</span>
            <span>MySQL</span>
            <span>UI/UX Design</span>
          </div>

          <div className="profile-actions">
            <a href="/#projects" className="profile-primary">
              Explore my projects ↗
            </a>
            <a href="mailto:YOUR_EMAIL@example.com" className="profile-secondary">
              Contact me
            </a>
          </div>

          <div className="profile-socials">
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
          </div>
        </div>
      </section>

      <footer className="profile-footer">
        © 2026 NATHANYELL L. DELA PENA
        <span>BUILT WITH PURPOSE.</span>
      </footer>
    </main>
  )
}

export default Profile
