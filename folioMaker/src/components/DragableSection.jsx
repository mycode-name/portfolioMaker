import React from 'react';
import { MdTitle, MdImage, MdRadioButtonChecked, MdVideoCameraFront } from 'react-icons/md';
import './DragableSection.css'

// Reusable component for each draggable element
function DragableElements({ icon, text }) {
    return (
        <div className="element">
        <span className="material-symbols-outlined text-white text-2xl">{icon}</span>
        <span className="text-white text-xs font-medium">{text}</span>
        </div>
    );
}

function DragableSection() {
    const elements = [
    { icon: <MdTitle />, text: 'Heading' },
    { icon: <MdImage />, text: 'Image' },
    { icon: <MdRadioButtonChecked />, text: 'Button' },
    { icon: <MdVideoCameraFront />, text: 'Video' },
    { icon: <hr style={{ width: '100%', borderColor: '#ccc' }} />, text: 'Divider' }, // for horizontal_rule
    { icon: <div style={{ width: '100%', height: '1rem' }} />, text: 'Spacer' },  // for spacer
    ];

    return (
        <aside className="sidebar">
        <h2 className="sidebarTitle">Elements</h2>
        <div className="sidebarGrid">
            {elements.map((element, index) => (
            <DragableElements key={index} icon={element.icon} text={element.text} />
            ))}
        </div>
        </aside>
    );
}

export default DragableSection;
