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
                            <h3>Add game</h3>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>Game title</Form.Label>
                                <Form.Control 
                                    required
                                    type = "text"
                                    placeholder = "Game title"
                                    onChange = {(e) => setTitle(e.target.value)}
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Game category</Form.Label>
                                <Form.Control 
                                    required
                                    type = "text"
                                    placeholder = "Game category"
                                    onChange = {(e) => setcategory(e.target.value)}
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Game price</Form.Label>
                                <Form.Control 
                                    required
                                    type = "number"
                                    placeholder = "Game price"
                                    onChange = {(e) => setPrice(parseInt(e.target.value))}
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>Cover photo</Form.Label>
                                <Form.Control 
                                    required
                                    type = "text"
                                    placeholder = "Cover photo"
                                    onChange = {(e) => setCoverPhoto(e.target.value)}
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Game console</Form.Label>
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
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>Pg rating</Form.Label>
                                <Form.Control 
                                    required
                                    type = "text"
                                    placeholder = "Pg rating"
                                    onChange = {(e) => setPg(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Publish date</Form.Label>
                                <Form.Control 
                                    required
                                    type = "date"
                                    onChange = {(e) => setPublishDate(e.target.value)}
                                />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>Links</Form.Label>
                                <Form.Control 
                                    type = "text"
                                    placeholder = "Links"
                                    onChange = {(e) => setLinksInput(e.target.value)}
                                />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Button onClick={addLink}>Add link to array</Button>
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
                                <Form.Label>Subtitle</Form.Label>
                                <Form.Control 
                                    required
                                    as = "textarea"
                                    placeholder = "Subtitle"
                                    onChange = {(e) => setSubtitle(e.target.value)}
                                />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>Description</Form.Label>
                                <Form.Control 
                                    required
                                    as = "textarea"
                                    placeholder = "Description"
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
                                <Button onClick={uploadImage}>Upload image</Button>
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Button onClick={addGame}>Add game</Button>
                            </Form.Group>
                        </Form.Row>


                        <Form.Row className="mt-5 mb-3">
                            <h3>Add character</h3>  
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>Character gameId</Form.Label>
                                <Form.Control 
                                    required
                                    type = "text"
                                    placeholder = "Character gameId"
                                    onChange = {(e) => setGameId(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Character name</Form.Label>
                                <Form.Control 
                                    required
                                    type = "text"
                                    placeholder = "Character name"
                                    onChange = {(e) => setName(e.target.value)}
                                />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>Character info</Form.Label>
                                <Form.Control 
                                    required
                                    as = "textarea"
                                    placeholder = "Character info"
                                    onChange = {(e) => setInfo(e.target.value)}
                                />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Button onClick={addCharacter}>Add character</Button>
                            </Form.Group>
                        </Form.Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default AddGame;