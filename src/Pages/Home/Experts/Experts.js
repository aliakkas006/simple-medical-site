
import { Container, Row } from 'react-bootstrap';
import Expert from '../Expert/Expert';

// Expert worker data:
const experts = [
    { id: 1, name: 'Andrew', img: 'https://i.ibb.co/5Bf1Y5d/mechanic-3.jpg', expertize: 'Engine expert' },
    
    { id: 2, name: 'Smith', img: 'https://i.ibb.co/m9cpntX/mechanic-4.jpg', expertize: 'Driving expert' },
    
    { id: 3, name: 'Arnost', img: 'https://i.ibb.co/FJtzPhc/mechanic-5.jpg', expertize: 'Car washing expert' },
    
    { id: 4, name: 'Steve', img: 'https://i.ibb.co/FJtzPhc/mechanic-5.jpg', expertize: 'Handling expert' },
    
    {id: 5, name: 'Andrew', img: 'https://i.ibb.co/fdf3RTY/mechanic-1.jpg', expertize: 'Car repair expert' },
    
    { id: 6, name: 'Andrew', img: 'https://i.ibb.co/HqjkvpM/mechanic-2.jpg', expertize: 'All site expert' }
];

const Experts = () => {

    return (
        <Container id="experts" className="mt-5">
            <h2 className="text-primary">Our Experts</h2>
            <Row xs={1} md={3} className="g-4">
                {
                    experts.map(expert => <Expert
                        key={expert.id}
                        expert={expert}
                    />)
                }
            </Row>
        </Container>
    );
};

export default Experts;