import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import meter1 from "../../assets/img/meter1.svg";
import meter2 from "../../assets/img/meter2.svg";
import meter3 from "../../assets/img/meter3.svg";
import colorSharp from "../../assets/img/color-sharp.png";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Навыки</h2>
              <p>
                Создаю удобные и яркие интерфесы используя<br/>
                Figma, HTML, JavaScript, React, TypeScript, MongoDB, GitHub.<br/>
                Изучаю web-разработку около 1 года, имею опыт коммерческой разработки 3 месяца.<br/>
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Web Разработчик</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Web Дизайнер</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Logo Дизайнер</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Проектирование интерфейсов</h5>
                </div>
              </Carousel>
                <p>
                    Моими задачами являются в первую очередь в развитие собственных навыков
                    работы<br/> с современными технологиями Web-разработки и получение опыта
                    во время разработки и работы с компаниями.
                  </p>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} />
    </section>
  );
};

export default Skills;
