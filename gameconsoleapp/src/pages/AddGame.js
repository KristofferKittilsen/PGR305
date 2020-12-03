import axios from "axios";
import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const AddGame = () => {

    const [title, setTitle] = useState("");
    const [category, setcategory] = useState("");
    const [price, setPrice] = useState(0);
    const [coverPhoto, setCoverPhoto] = useState("");
    const [console, setConsole] = useState("");
    const [description, setDescription] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [pg, setPg] = useState("");
    const [publishDate, setPublishDate] = useState("");
    const [linksInput, setLinksInput] = useState("");
    const [links, setLinks] = useState([]);

    const [name, setName] = useState("");
    const [gameId, setGameId] = useState("");
    const [info, setInfo] = useState("");

    const [imageFile, setImageFile] = useState({});

    const uploadImage = () => {
        let data = new FormData();
        data.append( "file", imageFile );
    
        alert(imageFile);
    
        axios({
          method: "post",
          url: "https://localhost:5001/ImageUpload/UploadImage",
          data: data,
          config: { headers: { "Content-Type": "multipart/form-data" } }
        });
      }

    const addGame = () => {
        const url = "https://localhost:5001/Games";
        const newGame = {title: title, category: category, price: price, coverPhoto: coverPhoto, console: console, description: description, subtitle: subtitle, pg: pg, publishDate: publishDate, links: links};

        axios.post (url, newGame)
       
        alert(`Title: ${title} Category: ${category} Price: ${price} Photo: ${coverPhoto} Console: ${console} Description: ${description} Subtitle: ${subtitle} Pg: ${pg} Publish: ${publishDate} Links: ${links}`)
    }

    const addCharacter = () => {
        const url = "https://localhost:5001/gamecharacters";
        const newCharacter = {name: name, gameId: gameId, info: info};

        axios.post (url, newCharacter);
        alert(`GameId: ${gameId} Name: ${name} Info: ${info}`)
    }

    const addLink = () => {
        setLinks(links => [...links, linksInput]);
    }

    return (
        <Container>
            <Row className="justify-content-md-center mt-4">
                <Col>
                    <Form>
                        <Form.Row className="mb-3">
                            <h3>Legg til spill</h3>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>Spill tittel</Form.Label>
                                <Form.Control 
                                    required
                                    type = "text"
                                    placeholder = "Spill tittel"
                                    onChange = {(e) => setTitle(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Kategori</Form.Label>
                                <Form.Control 
                                    required
                                    as = "select"
                                    onChange = {(e) => setcategory(e.target.value)}
                                >
                                    <option value="0">Velg...</option>
                                    <option value="Action">Action</option>
                                    <option value="Action-adventure">Action-adventure</option>
                                    <option value="Adventure">Adventure</option>
                                    <option value="Role-playing">Role-playing</option>
                                    <option value="Simulation">Simulation</option>
                                    <option value="Strategy">Strategy</option>
                                    <option value="Sports">Sports</option>
                                    <option value="MMO">MMO</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Pris</Form.Label>
                                <Form.Control 
                                    required
                                    type = "number"
                                    placeholder = "Pris"
                                    onChange = {(e) => setPrice(parseInt(e.target.value))}
                                />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>Forside bilde</Form.Label>
                                <Form.Control 
                                    required
                                    type = "text"
                                    placeholder = "Forside bilde"
                                    onChange = {(e) => setCoverPhoto(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Spill konsoll</Form.Label>
                                <Form.Control 
                                    required
                                    as = "select"
                                    onChange = {(e) => setConsole(e.target.value)}

                                >
                                    <option value="0">Choose...</option>
                                    <option value="ps">PS5</option>
                                    <option value="xbox">Xbox</option>
                                    <option value="ps/xbox">Ps and Xbox</option>
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>Aldersgrense</Form.Label>
                                <Form.Control 
                                    required
                                    type = "text"
                                    placeholder = "Aldersgrense"
                                    onChange = {(e) => setPg(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Utgitt</Form.Label>
                                <Form.Control 
                                    required
                                    type = "date"
                                    onChange = {(e) => setPublishDate(e.target.value)}
                                />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>Linker</Form.Label>
                                <Form.Control 
                                    type = "text"
                                    placeholder = "Linker"
                                    onChange = {(e) => setLinksInput(e.target.value)}
                                />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Button onClick={addLink}>Legg til link</Button>
                            </Form.Group>
                            <Col>
                                <ul>
                                    {
                                        links.map((link) => {
                                            return <li>{link}</li>
                                        })
                                    }
                                </ul> 
                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>Undertittel</Form.Label>
                                <Form.Control 
                                    required
                                    as = "textarea"
                                    placeholder = "Undertittel"
                                    onChange = {(e) => setSubtitle(e.target.value)}
                                />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>Beskrivelse</Form.Label>
                                <Form.Control 
                                    required
                                    as = "textarea"
                                    placeholder = "Beskrivelse"
                                    onChange = {(e) => setDescription(e.target.value)}
                                />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.File 
                                    name = "file"
                                    label = "File"
                                    onChange = {(e) => setImageFile(e.target.files[0])}
                                />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Button onClick={uploadImage}>Last opp bilde</Button>
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Button onClick={addGame}>Legg til spill</Button>
                            </Form.Group>
                        </Form.Row>


                        <Form.Row className="mt-5 mb-3">
                            <h3>Legg til karakter</h3>  
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>Karakter spillId</Form.Label>
                                <Form.Control 
                                    required
                                    type = "text"
                                    placeholder = "Karakter spillId"
                                    onChange = {(e) => setGameId(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Karakter navn</Form.Label>
                                <Form.Control 
                                    required
                                    type = "text"
                                    placeholder = "Karakter navn"
                                    onChange = {(e) => setName(e.target.value)}
                                />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>Karakter informasjon</Form.Label>
                                <Form.Control 
                                    required
                                    as = "textarea"
                                    placeholder = "Karakter informasjon"
                                    onChange = {(e) => setInfo(e.target.value)}
                                />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Button onClick={addCharacter}>Legg til karakter</Button>
                            </Form.Group>
                        </Form.Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default AddGame;