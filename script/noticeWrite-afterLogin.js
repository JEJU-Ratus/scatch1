// 네이버 스마트 에디터 2.0
let oEditors = []

smartEditor = function () {
  nhn.husky.EZCreator.createInIFrame({
    oAppRef: oEditors,
    elPlaceHolder: "editorTxt",
    sSkinURI: "../smarteditor/SmartEditor2Skin.html",
    fCreator: "createSEditor2"
  })
}

$(document).ready(function () {
  smartEditor()
})


const submit = document.getElementById('submit');


submit.addEventListener('click',function(){
  document.getElementById('btn_submit').click();
})