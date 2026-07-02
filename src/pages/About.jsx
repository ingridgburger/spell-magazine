import teamPhoto from "../assets/images/team-fisheye.png";
import lucy from '../assets/images/lucy.webp';
import lauren from '../assets/images/lauren.webp';
import harper from '../assets/images/harper.webp';
import drew from '../assets/images/drew.webp';
import ingrid from '../assets/images/ingrid.webp';
import linkedinIcon from '../assets/images/linked-in-logo-dark.png';
import './About.css';

const team = [
  {
    id: 'lucy',
    name: 'Lucy Tyler',
    role: ['Editor in Chief'],
    photo: lucy,
    linkedin: 'https://www.linkedin.com/in/lucinda-tyler/'
  },
  {
    id: 'lauren',
    name: 'Lauren Foote',
    role: ['Managing Editor'],
    photo: lauren,
    linkedin: 'https://www.linkedin.com/in/lauren-foote-602b71226/',
  },
  {
    id: 'harper',
    name: 'Harper Lower',
    role: ['Head of Writing'],
    photo: harper,
    linkedin: 'https://www.linkedin.com/in/harperlower/'
  },
  {
    id: 'drew',
    name: 'Drew Malizia',
    role: ['Co-Creative Director', 'Editorial & Brand Designer'],
    photo: drew,
    linkedin: 'https://www.linkedin.com/in/drew-malizia-dcm/'
  },
  {
    id: 'ingrid',
    name: 'Ingrid Burger',
    role: ['Co-Creative Director', 'Editorial & Web Designer'],
    photo: ingrid,
    linkedin: 'https://www.linkedin.com/in/ingridburger/'
  },
];  

function About() {
  return (
    <div className="about-page">
      <section className="about-intro reveal-item">
        <div className="about-intro-image-wrapper">
          <img
            src={teamPhoto}
            alt="The SPELL Magazine team"
            className="about-intro-image"
          />
        </div>

        <div className="about-intro-content">
          <h1 className="text-header about-intro-heading">
            What Is <span className="text-header-emphasized">Spell</span>?
          </h1>

          <p className="text-body">
            SPELL is a multi-media arts magazine founded by young artists for
            young artists. Created by a team of students who are deeply
            involved in the arts themselves, SPELL was born from a shared
            desire to uplift local small creators and offer a platform where
            emerging voices can be seen, heard, and celebrated.
          </p>

          <p className="text-body">
            Twice a year, we publish a curated issue that highlights the
            talents of our contributors through a range of work including
            visual art, photography, fashion, music, poetry, and interviews.
            Our goal is to build a space that not only showcases artistic
            expression, but also fosters connection and collaboration within
            our community.
          </p>

          <p className="text-body about-intro-emphasis">
            At its core, SPELL is about honoring creativity and providing a
            space where beautiful, thoughtful work can be shared with the
            world.
          </p>
        </div>
      </section>

      <section className="about-team reveal-item">
        <h2 className="text-header about-team-heading">
          Meet Our <span className="text-header-emphasized">Team</span>...
        </h2>

        <div className="team-grid">
          {team.map((member) => (
            <div className="team-card" key={member.id}>
            <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="team-photo-link"
                aria-label={`${member.name} on LinkedIn`}
            >
                <img
                src={member.photo}
                alt={member.name}
                className="team-photo"
                />
                <img
                src={linkedinIcon}
                alt=""
                className="team-linkedin-icon"
                />
            </a>
            <p className="team-name">{member.name}</p>
            {member.role.map((line, index) => (
                <p className="team-role text-body" key={index}>
                {line}
                </p>
            ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;