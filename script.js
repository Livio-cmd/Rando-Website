let liste = document.querySelectorAll(".content-desc");

liste.forEach((item) => {
  let txt = item.innerText;

  if(txt.length > 250){
    let truncated = txt.substring(0, 250);
    let newTxt = truncated.replace(/.(?=)$/g, ". . .");

    item.innerHTML = newTxt;
  };
});
