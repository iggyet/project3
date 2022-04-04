function addStageEnemies(){
  const stage1Button = document.getElementById('1');
  console.log(stage1Button.id);
  axios
  .post('/stageenemies',  stage1Button.id )
  .then((response) => console.log(response.data))}