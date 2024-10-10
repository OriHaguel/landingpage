import { useState } from 'react';
import { msgService } from '../../services/msg.service';
import { DropAnimation } from './DropAnimation';

export const FormMsg = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await msgService.post(formData);
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <DropAnimation>
            <div className="form-msg-container" id="contacts">
                <h2 className="form-title">Contact Me</h2>
                <form onSubmit={handleSubmit} className="form-msg">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="4"
                        ></textarea>
                    </div>
                    <button type="submit" className="submit-btn">
                        Send Message
                    </button>
                </form>
            </div>
        </DropAnimation>
    );
};

