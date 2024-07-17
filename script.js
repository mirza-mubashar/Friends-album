document.querySelector('.refresh-button').style.display = 'none';

document.querySelector('.get-button').addEventListener('click', (e) => {
    e.preventDefault();
    alert(`This is just a dummy content practiced by Mubashar Siddique`);
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(json => {

        const img = document.getElementById('dogImage');
        img.src = json.message;
        document.querySelector('.title').style.display = 'none';
        console.log(json.message);
        console.log('Got the data');
        document.querySelector('.get-button').style.display = 'none';
        document.querySelector('.refresh-button').style.display = 'block';
        document.querySelector('.container').classList.toggle('padding-none');

  
        
      })
      .catch(error => {
        console.error('Error fetching the image:', error);
      });


  });

  document.querySelector('.refresh-button').addEventListener( 'click', ()=>{
    location.reload()
  } )