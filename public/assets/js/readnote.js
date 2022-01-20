var URL ="./data/catatan.txt";
fecth(URL).then(function(response) {
  if (response.status !== 200){
    console.log('Ada Masalah. Status Code: ' + response.status);

    return ;
  }
  return response.text();
}).then(text => console.log(text)).catch(err => console.log(err));
