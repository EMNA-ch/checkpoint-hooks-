import './App.css';
import { useState } from 'react';
import { Accordion, Button, Card, Form, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
 const [movies, setMovies] = useState([
   
    {
      id: Math.random(),
      title: 'Diamond Dog Caper',
      description:
        '  A boy battles a gang of thieves to rescue a dog carrying a fortune in stolen diamonds.',
      posterURL:
        'https://flxt.tmsimg.com/assets/p189926_p_v8_aa.jpg',
      rating: '4',
    },
    {
      id: Math.random(),
      title: 'Surprise Me!',
      description:
        '  What if pain was merely a set up for the ultimate surprise party?',
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BMmQxZWVkNzctN2M4Yi00ZTJjLTg2MzAtYWMzNjU2ZDk0ZGUyXkEyXkFqcGdeQXVyMzMwMjI2NA@@._V1_.jpg',
      rating: '3',
    },
    {
      id: Math.random(),
      title: 'Identical Love ',
      description:
        'After being left at the altar, Dr. Charlotte Hudson needs to escape life at home. She signs up to volunteer at a health clinic in a tropical country. But her plans of escaping are thrown off when she comes across her former fiancés twin brother, Seth (a dentist), who is also volunteering with the clinic. As they spend time together, Seth falls in love with Charlotte, but she struggles to let go of seeing her fiancé every time she looks at Seth. The island romance will help her break free from the past and love Seth for who he is. ',
      posterURL:
        'https://flxt.tmsimg.com/assets/p20471565_v_v13_ab.jpg',
      rating: '2',
    },
    {
      id: Math.random(),
      title: 'One Last Night',
      description: 'one of the most romantic and funny comedy ',
      posterURL:
        'https://resizing.flixster.com/WvlsUtEBJAXd7HGXjmomFm9OChI=/300x300/v2/https://flxt.tmsimg.com/assets/p17167927_v_h10_aa.jpg',
      rating: '5',
    },
    {
      id: Math.random(),
      title: 'The Fat Boy Chronicles',
      description:
        ' Christopher Rivera starring in 2010 published Drama Movie: The Fat Boy Chronicles - An overweight 14-year-old boy attempts to get in shape and impress a pretty classmate while contending with relentless bullying at school in this emotional drama inspired by actual events.',
      posterURL: 'https://flxt.tmsimg.com/assets/p8172428_p_v8_ab.jpg',
      rating: '4',
    },
    {
      id: Math.random(),
      title: 'And The Lost City Of Gold',
      description:
        '  Having spent most of her life exploring the jungle with her parents, nothing could prepare Dora for her most dangerous adventure ever: high school. Always the explorer, Dora quickly finds herself leading Boots, Diego, a mysterious jungle inhabitant, and a ragtag group of teens on a live-action adventure to save her parents and solve the impossible mystery behind a lost Inca civilization',
      posterURL:
        'https://m.media-amazon.com/images/I/91OMqjzH-pL._SY550_.jpg',
      rating: '3',
    },
    {
      id: Math.random(),
      title: 'Curse of the nun',
      description:
        '  A damaged young woman is looking forward to moving to a beautiful new home, but the spirit of a deranged nun wants her to stay right where she is.',
      posterURL:
        'https://qqcdnpictest.mxplay.com/pic/484f535d77542bca63e21efb896f4cd6/en/2x3/320x480/test_pic1638541013780.webp',
      rating: '5',
    },
    {
      id: Math.random(),
      title: 'Lord of the Ring ',
      description:
        'This epic drama is set thousands of years before the events of J.R.R. Tolkien’s The Hobbit and The Lord of the Rings, and will take viewers back to an era in which great powers were forged, kingdoms rose to glory and fell to ruin, unlikely heroes were tested, hope hung by the finest of threads, and the greatest villain that ever flowed from Tolkien’s pen threatened to cover all the world in darkness. Beginning in a time of relative peace, the series follows an ensemble cast of characters, both familiar and new, as they confront the long-feared re-emergence of evil to Middle-earth. From the darkest depths of the Misty Mountains, to the majestic forests of the elf-capital of Lindon, to the breathtaking island kingdom of Númenor, to the furthest reaches of the map, these kingdoms and characters will carve out legacies that live on long after they are gone.',
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY256_CR0,0,172,256_AL_.jpg',
      rating: '5',
    },
    {
      id: Math.random(),
      title: 'House of the Dragon',
      description: 'An internal succession war within House Targaryen at the height of its power, 172 years before the birth of Daenerys Targaryen.',
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BZjBiOGIyY2YtOTA3OC00YzY1LThkYjktMGRkYTNhNTExY2I2XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1000_.jpg',
      rating: '4',
    },
    {
      id: Math.random(),
      title: 'Stranger Things',
      description:
        'When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.',
      posterURL: 'https://www.kingcollector.fr/33275/poster-stranger-things-key-art-61-x-91-cm-gb-eye.jpg',
      rating: '2',
    },
    {
      id: Math.random(),
      title: 'Rick et Morty',
      description:
        'An animated series on adult-swim about the infinite adventures of Rick, a genius alcoholic and careless scientist, with his grandson Morty, a 14 year-old anxious boy who is not so smart. Together, they explore the infinite universes; causing mayhem and running into trouble.',
      posterURL:
        'https://fr.web.img6.acsta.net/pictures/18/10/31/17/34/2348073.jpg',
      rating: '4',
    },
    {
      id: Math.random(),
      title: 'Friends',
      description:
        '  Ross Geller, Rachel Green, Monica Geller, Joey Tribbiani, Chandler Bing, and Phoebe Buffay are six twenty-somethings living in New York City. Over the course of 10 years and seasons, these friends go through life lessons, family, love, drama, friendship, and comedy.',
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg',
      rating: '5',
    },
    {
      id: Math.random(),
      title: 'The Office ',
      description:
        'A mediocre paper company in the hands of Scranton, PA branch manager Michael Scott. This mockumentary follows the everyday lives of the manager and the employees he "manages." The crew follows the employees around 24/7 and captures their quite humorous and bizarre encounters as they will do what it takes to keep the company thriving.',
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BMDNkOTE4NDQtMTNmYi00MWE0LWE4ZTktYTc0NzhhNWIzNzJiXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_FMjpg_UX1000_.jpg',
      rating: '3',
    },
  
  ]);
  const [query, setQuery] = useState('');
  
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const stars =(n) => {
      let st =[];
      for (let i = 1; i <=5; i++) {
        if (i<=n) {
         st.push(
         <span style={{color:'gold'}}>★</span>) 
        } 
        else {
          st.push( <span style={{color:'white'}}>★</span>)
        }       
      }
      return st
    }
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [rating, setRating] = useState('');

  const handleAdd=()=> {
    const newMovie = {
      id: Math.random(),
      title: title,
      description:description,
      posterURL:image,
      rating: rating,
    }
  
  setMovies([...movies, newMovie]);
  }
  return (
    <div className='App'>
      <div>
        <form>
          <div>
            <input
              type='text'
              placeholder='Search...'
              className='search inputText'
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className=' search button'>
              <i className='bi bi-search'></i>
            </button>
          </div>
        </form>
      </div>

      <div className='list'>
        {movies
          .filter(
            (el) =>
              el.title.toLowerCase().includes(query) ||
              el.rating.includes(query)
          )
          .map((movie) => (
            <div key={movie.id}>
              <Card style={{ width: '18rem' }} className='card'>
                <Card.Img
                  variant='top'
                  src={movie.posterURL}
                  style={{ width: '18rem', height: '22rem' }}
                />
                <Card.Title>{movie.title}</Card.Title>
                <p className='bt'>{stars(movie.rating)}</p>
                <Accordion defaultActiveKey='0'>
                  <Accordion.Item eventKey='1'>
                    <Accordion.Header>Description</Accordion.Header>
                    <Accordion.Body >{movie.description}</Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Card>
            </div>
          ))}
      </div>
      <div>
      <>
      <Button  className='prime' variant="primary" onClick={handleShow}>
        Add movies
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label >Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="..."
                value={title}
                autoFocus
                onChange={(e)=> setTitle(e.target.value)}
  
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="..."
                value={description}
                autoFocus
                onChange={(e)=> setDescription(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Rating</Form.Label>
              <Form.Control
                type="number"
                placeholder="..."
                value={rating}
                autoFocus
                onChange={(e)=> setRating(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="url"
                placeholder="Url..."
                value={image}
                autoFocus
                onChange={(e)=> setImage(e.target.value)}
              />
            </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
      </div>
    </div>
  );
}

export default App;
