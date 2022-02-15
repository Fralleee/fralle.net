import { FC } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { overlayTransition, projectTransition } from "utils/pageTransitions"
import BackButton from "components/common/BackButton"
import media from "styles/media"
import { Link } from "react-router-dom"

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  justify-content: center;
  margin-top: 110px;
  pointer-events: none;

  @media only screen and (max-width: ${media.medium}) {
    margin: -280px auto 0 auto;
    border-radius: 0;
    min-height: 100vh;
  }
`
const Component = styled(motion.div)`
  position: relative;
  background: var(--background-light);
  width: 100%;
  max-width: ${media.large}; 
  box-shadow: 0 -8px 32px var(--shadow-dark);
  flex: 1;
  border-radius: 8px 8px 0 0;
  display: flex;
  flex-direction: column;
  z-index: 1;
  pointer-events: all;

  @media only screen and (max-width: ${media.medium}) {
    margin: -280px auto 0 auto;
    border-radius: 0;
    min-height: 100vh;
  }
`

const Overlay = styled(Link)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--shadow);
`

const Header = styled.section`
  position: relative;
  width: 100%;
  padding-top: 56.3925%;
  border-radius: 8px 8px 0 0;
  overflow: hidden;

  @media only screen and (max-width: ${media.medium}) {
    border-radius: 0;
  }
`
const HeaderImage = styled.img`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  background: pink;
  clip-path: ellipse(150% 90% at 50% 10%);
`

const HeaderOverlay = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(0deg, #00000088 30%, transparent 100%);
  clip-path: ellipse(150% 90% at 50% 10%);
`

const Title = styled.h1`
  position: absolute;
  bottom: 10%;
  left: 2rem;
  font-size: 5rem;
  font-weight: bold;
  text-shadow: 0 0 12px var(--shadow-dark);
  color: var(--background-light);
`

const Content = styled.section`
  display: flex;
  padding: 1rem;
  padding-top: 3rem;
  height: 100vh;
`

const Description = styled.div`
  max-width: 65ch;
  padding: 1rem;
  padding-left: 3rem;
  
  @media only screen and (max-width: ${media.medium}) {
    padding-left: 1rem;
  }
`

const MetaData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex: 1;
  padding: 1rem;
`

// TODO
// - Use progressive image

const Project: FC = () => {
  return (
    <>
      <motion.div key="Overlay" {...overlayTransition}>
        <Overlay to="/" />
      </motion.div>
      <Container>
        <Component key="Project" {...projectTransition} onAnimationComplete={() => window.scrollTo(0, 0)}>
          <BackButton />
          <Header>
            <HeaderImage src="https://picsum.photos/1280/720" />
            <HeaderOverlay />
            <Title>Project title</Title>
          </Header>
          <Content>
            <Description>
              <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet</p>
              <p>Consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
            </Description>
            <MetaData>
              <p>C#</p>
              <p>Javascript</p>
              <a href="https://assbutt.com">Go to site</a>
              <a href="https://assbutt.com">Repository</a>
            </MetaData>
          </Content>

        </Component>
      </Container>
    </>
  )
}

export default Project
