import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {		// destructure props.onInputChange
	return (
		<div>
			<p className='f3'>
				{'Insert a link with an image and this app will detect the face in it.'}
			</p>
			<div className='center'>
				<div className='form center pa4 br3 shadow-5'>
					<input className='f4 pa2 w-70 center' type='text' onChange={onInputChange}/>
					<button 
						className='w-30 grow f4 link ph3 pv2 dib black bg-light-yellow'
						onClick={onButtonSubmit}
						>Detect</button>
				</div>
			</div>
		</div>
	);
}

export default ImageLinkForm;