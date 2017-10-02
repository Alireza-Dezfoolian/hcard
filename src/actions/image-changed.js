export const imageChanged = imgUrl => {
	return {
    type: 'IMAGE_CHANGED',
      payload: imgUrl
  }
};
