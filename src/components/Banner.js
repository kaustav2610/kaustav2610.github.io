import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["FrontEnd Web Developer", "React Developer", "DSA Enthusiastic"  ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
              <div className="dp-container">
                  <img className="mydp" src="https://media.licdn.com/dms/image/D5603AQEC2LeJh6JS0A/profile-displayphoto-shrink_800_800/0/1668868754469?e=1686787200&v=beta&t=s8GnLzDCrzQSMeRoV9W52hMPJvHnCpshpsqcXDcn0v4" alt="Your DP" />
                </div>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Kaustav`} </h1>
                <h2><span className="txt-rotate" dataPeriod="1000" data-rotate='[ "FrontEnd Web Developer", "React Developer", "DSA Enthusiastic" ]'><span className="wrap">{text}</span></span></h2>
                <p>Hi there, my name is Kaustav Kumar and I am a frontend web developer. I am passionate about creating stunning, user-friendly websites that are both visually appealing and highly functional. In addition to my web development skills, I am also enthusiastic about data structures and algorithms, which helps me write efficient and optimized code. My goal is to deliver high-quality work that exceeds my clients' expectations and provides an exceptional user experience. </p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img className="udimg" src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
