import React , {useState} from 'react'
import axios from 'axios';
import { Button, Card, ListGroup } from 'react-bootstrap';

const SearchGithub = () => {

    const [username, setUsername] = useState('');
    const [profiles, setProfiles] = useState([]);

    const searchProfiles = async () => {
        try {
            const response = await axios.get(
                `https://api.github.com/search/users?q=${username}`,
                {
                    headers: {
                        Authorization: `token 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`,
                    },
                }
            );
            setProfiles(response.data.items);
        } catch (error) {
            console.error('Error fetching data', error);
        }
    };

  return (
    <div >
        <div >
            <form onSubmit={(e) => {
                    e.preventDefault();
                    searchProfiles();
                }}>
                <input type="text" placeholder='Enter Profile' className='input' value={username}  onChange={(e) => setUsername(e.target.value)}/>
                <button className='buttonSearch' type='submit'>Search</button>
            </form>

        </div>

        <ListGroup >

        {profiles.map((profile) => (
                    <ListGroup.Item key={profile.id}>
                        <Card className="search-results" >
                            <Card.Img className='image' variant="top" src={profile.avatar_url} />
                            <Card.Body>
                                
                                <Card.Subtitle className="user-info">
                                    Name: {profile.login}
                                </Card.Subtitle>
                                <Button href={profile.html_url} target="_blank" variant="primary" className='user-info'>
                                    View Profile
                                </Button>
                            </Card.Body>
                        </Card>
                    </ListGroup.Item>
                ))}
            
            </ListGroup>
        </div>
    
  )
}

export default SearchGithub;