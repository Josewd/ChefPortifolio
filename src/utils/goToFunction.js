export const goTo = (element)=>{
    const height = document.scrollingElement.scrollHeight / 4
    switch (element) {
      case '/about':
        document.scrollingElement.scrollTop = 0
        document.scrollingElement.scrollBy({
          top: height,
          left: 0,
          behavior: 'smooth'
        }) 
        break;
      case '/work_education':
        document.scrollingElement.scrollTop = 0
        document.scrollingElement.scrollBy({
          top: height*2,
          left: 0,
          behavior: 'smooth'
        }) 
        break;
      case '/work_gallery':
        document.scrollingElement.scrollTop = 0
        document.scrollingElement.scrollBy({
          top: height*3 ,
          left: 0,
          behavior: 'smooth'
        }) 
        break;
      case '/references':
        document.scrollingElement.scrollBy({
          top: height*4,
          left: 0,
          behavior: 'smooth'
        }) 
        break;
      default:
        document.scrollingElement.scrollBy({
          top: 0,
          left: 0,
          behavior: 'smooth'
        }) 
        break;
    }
  }