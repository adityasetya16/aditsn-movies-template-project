import { Card, Container, Row, Col, Image } from "react-bootstrap"
import duneImage from "../assets/images/trending/dune.jpg"
import everythingImage from "../assets/images/trending/everything.jpg"
import infiniteImage from "../assets/images/trending/infinite.jpg"
import jokerImage from "../assets/images/trending/joker.jpg"
import lightyearImage from "../assets/images/trending/lightyear.jpg"
import morbiusImage from "../assets/images/trending/morbius.jpg"

const Trending = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">TRENDING MOVIES</h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper" id="trending">
            <Card className="movieImage">
              <Image src={duneImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">DUNE</Card.Title>
                  <Card.Text className="text-left">
                  Dune merupakan salah satu film Hollywood yang akhirnya dirilis di Indonesia. Film ini disutradarai oleh Denis Villeneuve dan masih diadaptasi dari novel karya Frank Herbert yang populer pada 1965.
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
                src={everythingImage}
                alt="Dune Movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">
                    EVERYTHING EVERWHERE
                  </Card.Title>
                  <Card.Text className="text-left">
                  Salah satu bukti konkret dan baru kita rasakan banget untuk membuktikan pernyataan tersebut tentunya adalah film Doctor Strange in the Multiverse of Madness (2022).
                  Ya memang sih, salah satu faktor terbesar lainnya juga mengapa film tersebut disukai karena citra brand MCU-nya. Tapi kalau kita pikir dan ingat lagi. Toh gak semua film MCU yang disukai. Alias audiens juga melihat tema ceritanya.
                  Jadi dengan kata lain lagi, terbukti banget kalau rata-rata audiens memang menyukai film yang bertemakan multiverse.
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
              <Image src={infiniteImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">INFINITE STORM</Card.Title>
                  <Card.Text className="text-left">
                  Ketika seorang pendaki terjebak dalam badai salju, dia bertemu dengan orang asing yang terdampar dan harus membawa mereka berdua turun gunung sebelum malam tiba.
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
              <Image src={jokerImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">JOKER</Card.Title>
                  <Card.Text className="text-left">
                  A mentally troubled stand-up comedian embarks on a downward spiral that leads to the creation of an iconic villain.
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
                src={lightyearImage}
                alt="Dune Movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">LIGHTYEAR</Card.Title>
                  <Card.Text className="text-left">
                  The story of Buzz Lightyear and his adventures to infinity and beyond.
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
              <Image src={morbiusImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">MORBIUS</Card.Title>
                  <Card.Text className="text-left">
                  Film ini sempat diundur penayangannya beberapa kali, sampai dipilihlah 1 April 2022 sebagai tanggal perilisannya. Morbius merupakan vampir villain dalam dunia Marvel ciptaan Roy Thomas dan Gil Kane
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

export default Trending
