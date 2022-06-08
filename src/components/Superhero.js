import { Card, Container, Row, Col, Image } from "react-bootstrap"
import antmanImage from "../assets/images/superhero/antman.jpg"
import avengerImage from "../assets/images/superhero/avenger.jpg"
import batmanImage from "../assets/images/superhero/batman.jpg"
import robinhoodImage from "../assets/images/superhero/robinhood.jpg"
import spidermanImage from "../assets/images/superhero/spiderman-cover.jpg"
import supermanImage from "../assets/images/superhero/superman.jpg"

const SuperHero = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">ACTION FILM SUPERHERO</h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper" id="superhero">
            <Card className="movieImage">
              <Image src={antmanImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">ANT-MAN</Card.Title>
                  <Card.Text className="text-left">
                  Ant-Man (bahasa Indonesia: Manusia Semut) adalah sebuah film superhero Amerika Serikat yang dirilis pada 17 Juli 2015. Film ini merupakan film kedua belas di Marvel Cinematic Universe.
                  </Card.Text>
                  <Card.Text className="text-left">
                  Last Update Now
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={avengerImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">AVENGERS END GAME</Card.Title>
                  <Card.Text className="text-left">
                  Avengers: Endgame adalah film pahlawan super Amerika 2019 yang didasarkan pada tim superhero Avengers dari Marvel Comics, diproduksi oleh Marvel Studios dan didistribusikan oleh Walt Disney Studios Motion Pictures.
                  </Card.Text>
                  <Card.Text className="text-left">
                  Last Update Now
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={batmanImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">THE BATMAN</Card.Title>
                  <Card.Text className="text-left">
                  Sejak trilogi The Dark Knight berakhir hampir sedekade lalu, penantian panjang penggemar untuk mendapatkan film solo Batman yang sesuai harapan kini terjawab dalam The Batman yang dibintangi Robert Pattinson.
                  Tayang mulai 2 Maret 2022 di Indonesia, film ini begitu memuaskan hampir di semua lini. Mulai dari aspek cerita, penggambaran karakter, akting, sampai dengan aspek teknis seperti sinematografi dan scoring musik.
                  </Card.Text>
                  <Card.Text className="text-left">
                  Last Update Now
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={robinhoodImage}
                alt="Dune Movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">ROBIN HOOD</Card.Title>
                  <Card.Text className="text-left">
                  Robin Hood adalah tokoh dalam cerita rakyat Inggris. Ia adalah seorang bangsawan yang menjadi musuh Sheriff of Nottingham atau Prince John, melawan pejabat yang korupsi untuk kepentingan rakyat. Ia memimpin 140 orang yang disebut "Merry Men". 
                  </Card.Text>
                  <Card.Text className="text-left">
                  Last Update Now
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={spidermanImage}
                alt="Dune Movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">SPIDERMAN NO WAY HOME</Card.Title>
                  <Card.Text className="text-left">
                  With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.
                  </Card.Text>
                  <Card.Text className="text-left">
                  Last Update Now
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={supermanImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">SUPERMAN MAN OF STEEL</Card.Title>
                  <Card.Text className="text-left">
                  An alien child is evacuated from his dying world and sent to Earth to live among humans. His peace is threatened when other survivors of his home planet invade Earth.
                  </Card.Text>
                  <Card.Text className="text-left">
                  Last Update Now
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default SuperHero
