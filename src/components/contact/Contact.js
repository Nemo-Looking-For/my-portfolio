import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import contactImg from "../../assets/img/contact-img.svg"

const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status,setStatus] = useState({});

    const onFormUpdate = (category,value) => {
        setFormDetails({
        ...formDetails,
        [category]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefult();
        setButtonText('Sending...');
        let respons = await fetch("http: / / localhost:5000/contact", {
           method: "Post",
           headers: {
            "Content-Type": "Application/json; charset=utf-8",
        },
            body: JSON.stringify(formDetails),
        });
        setButtonText('Send');
        let result = respons.json();
        setFormDetails(formInitialDetails);
        if (result.code === 200) {
            setStatus({success: true, message: 'Message send successfully'});
        } else {
            setStatus({ success: false, message: 'Something went wrong, please try again later! '})
        }
    };

    return (
            <section className="contact" id="connect">
                <Container className="align-items-center">
                    <Row md={8}>
                        <Col>
                            <img src={contactImg} alt="Contact Us"/>
                        </Col>
                        <Col>
                            <h2>Get In Touch</h2>
                            <form onSubmit={handleSubmit}>
                                <Row>
                                    <Col sm={6} className="px-1">
                                        <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                                    </Col>
                                    <Col sm={6} className="px-1">
                                        <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                                    </Col>
                                    <Col sm={6} className="px-1">
                                        <input type="text" value={formDetails.email} placeholder="Email" onChange={(e) => onFormUpdate('email', e.target.value)} />
                                    </Col>
                                    <Col sm={6} className="px-1">
                                        <input type="text" value={formDetails.phone} placeholder="Phone" onChange={(e) => onFormUpdate('phone', e.target.value)} />
                                    </Col>
                                    <Col>
                                        <textarea row="8" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)} />
                                        <button type="submit"><span>{buttonText}</span></button>
                                    </Col>
                                    {
                                        status.message &&
                                        <Col>
                                            <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                        </Col>
                                    }
                                </Row>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
}

export default Contact;