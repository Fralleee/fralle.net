import styled from "styled-components"
import media from "styles/media"
import Button from "components/common/Button"
import { FaDownload } from "react-icons/fa"
import Profile from "media/profile.webp"
import Zoom from "react-medium-image-zoom"
import CV from "files/CV.pdf"

// #region styled
const Section = styled.section`
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding: 5rem 2rem;

  max-width: ${media.large};
  background-color: var(--background-light);
  min-height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: ${media.large}) {
    border-radius: 0;
  }
`

const Header = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;
  margin-top: -1rem;

  @media only screen and (max-width: ${media.large}) {
    font-size: 3.5rem;
  }
  @media only screen and (max-width: ${media.medium}) {
    font-size: 3rem;
  }
  @media only screen and (max-width: ${media.small}) {
    font-size: 2.5rem;
  }
`

const Image = styled.img`
  max-width: 400px;
  height: 100%;
  @media only screen and (max-width: ${media.small}) {
    max-width: 300px;
  }
  .clusterPlannerDialog input[type="text"],
  .clusterPlannerDialog .uiTypeahead {
    color: #333;
  }
`

const Summary = styled.div`
  max-width: 65ch;
  margin: 2rem 0;
`
// #endregion

const About = ({ viewingProject }: DefaultAnimationProps) => {
  const minimized = viewingProject ? "minimized" : ""
  return (
    <Section id="about" className={minimized}>
      <Header>About</Header>
      <Zoom>
        <Image width={400} height={400} alt="Roland Chelwing" src={Profile} />
      </Zoom>
      <Summary>
        <p>
          Dedicated and curious full-stack developer with 7+ years experience in React, microservices, databases, cloud-based development
          and DevOps.
        </p>
        <p>
          I like to find elegant and effective solutions to complex problems while also leveraging industry-leading frameworks. Approaching
          every day as an opportunity to extend my knowledge and adapt to new technologies.
        </p>
        <p>
          I always try to lighten the mood and to make each day more enjoyable than the last. I'm one of those people that waves at the end
          of the video call.
        </p>
      </Summary>
      <Button style={{ minWidth: 0, maxWidth: 235 }} to={CV} download="resume" title="Resume/CV">
        <FaDownload />
        Download Resume/CV
      </Button>
    </Section>
  )
}

export default About
