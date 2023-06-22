const inputEl = document.querySelector('.input');
const downloadBtn = document.querySelector('.downloadBtn');


downloadBtn.addEventListener('click', (event) => {
  event.preventDefault();

  downloadBtn.innerText = 'downloading';
  fetchUrl(inputEl.value);
});

async function fetchUrl(url) {
  try {
    const data = await fetch(url);
    const blob = await data.blob();
    const fileUrl = URL.createObjectURL(blob);
    const aTagEl = document.createElement('a');
    aTagEl.href = fileUrl;
    aTagEl.download = 'youFile';
    
    aTagEl.click();
    downloadBtn.innerText = 'Download';
   
  } catch {
    alert('falied');
    downloadBtn.innerText = 'Download'
  }
}

