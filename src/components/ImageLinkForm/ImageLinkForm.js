import React from 'react';
import './ImageLinkForm.css'
const ImageLinkForm = (props) => {
	return (
		<div className='text'>
			<p>{'This face detector will detect faces in your pictures. Give it a try!'}</p>
			<div className='center form pa4 br2 shadow-5'>
				<input type='text' className='f4 pa2 w-70' onChange={props.onInputChange}/>
				<button className='f4 w-30 grow link pv2 dib white bg-light-purple' onClick={props.onPictureSubmit}>Detect</button>
			</div>
		</div>
	);
}

export default ImageLinkForm;