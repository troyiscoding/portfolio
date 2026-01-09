import React, { useState } from 'react';
import './NaturePhotography.css';
import { FaTimes } from 'react-icons/fa';

// Dynamically import all images from the nature folder
const natureImages = import.meta.glob('../images/nature/*.{png,jpg,jpeg,svg,webp}', { eager: true, as: 'url' });

const NaturePhotography: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const images = Object.values(natureImages);

    const openModal = (image: string) => {
        setSelectedImage(image);
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    };

    const closeModal = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <div className="photography-container">
            <div className="photography-header">
                <h2>Nature Photography</h2>
                <p>Capturing the beauty of the world, one frame at a time.</p>
            </div>

            <div className="photo-grid">
                {images.map((img, index) => (
                    <div key={index} className="photo-item" onClick={() => openModal(img)}>
                        <img src={img} alt={`Nature ${index + 1}`} loading="lazy" />
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div className="lightbox" onClick={closeModal}>
                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <img src={selectedImage} alt="Full size" />
                        <button className="close-button" onClick={closeModal}>
                            <FaTimes />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NaturePhotography;
