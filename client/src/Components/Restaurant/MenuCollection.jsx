import React, {useState} from 'react';
import ImageViewer from 'react-simple-image-viewer';

const MenuCollection = (props) => {
    const [ isMenuOpen, setIsMenuOpen] = useState(false);
    const [ CurrentImg, setCurrentImg] = useState(0);
    const closeViewer = () => setIsMenuOpen(false);
    const openViewer = () => setIsMenuOpen(true);
    return (
        <>
        {isMenuOpen && (
        <ImageViewer
          src={ props.image }
          currentIndex={ CurrentImg }
          disableScroll={ false }
          closeOnClickOutside={ true }
          onClose={ closeViewer }
        />
      )}
       <div className="w-32 h-32 md:w-48 md:h-48 flex flex-col" onClick={openViewer}>
       <div className="w-full h-full overflow-hidden rounded-lg">
            <img src={props.image[0]}
            alt="menu"
            className="w-full h-full transform transistion duration-500 hover:scale-110 rounded-lg"/>
        </div>
        <strong>{props.menutitle}</strong>
        <p>{props.pages}</p>
       </div>
        </>
    )
};

export default MenuCollection;