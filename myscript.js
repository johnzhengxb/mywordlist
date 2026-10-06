var i=0

window.addEventListener('keyup', function(event) {
  if (event.keyCode === 13) {
    playAudio() ;
  }
  if (event.keyCode === 8) {
	i=0
    playAudio() ;
	document.getElementsByTagName("h1").style.backgroundColor="transparent";
  }
});

function playAudio() {
  const list = document.getElementsByTagName("audio");
  n=list.length;
  list[i].play();
  
  var ele=list[i].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
  ele.scrollIntoView();
  ele.getElementsByTagName("h1")[0].style.backgroundColor="rgb(203, 233, 233)";
  
  if (i>=1){
  var pre_ele=list[i-1].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
  pre_ele.getElementsByTagName("h1")[0].style.backgroundColor="transparent";
  };
  
  if (i==n-1){i=0}
	  else {i++}
}

function HideH1() {
  const listh1 = document.getElementsByTagName("h1");
  var n=listh1.length
for (j = 0; j < n; j++) {
  listh1[j].style.display="none"
}
}

function ShowH1() {
  const listh1 = document.getElementsByTagName("h1");
  var n=listh1.length
for (j = 0; j < n; j++) {
  listh1[j].style.display="inline"
}
}