let oEditors = []

smartEditor = function () {
  console.log("Naver SmartEditor")
  nhn.husky.EZCreator.createInIFrame({
    oAppRef: oEditors,
    elPlaceHolder: "editorTxt",
    sSkinURI: "smarteditor/SmartEditor2Skin.html",
    fCreator: "createSEditor2"
  })
}

$(document).ready(function () {
  smartEditor()
})


const submit = document.getElementById('submit');


submit.addEventListener('click',function(){
  console.log("click");
  document.getElementById('btn_submit').click();
})