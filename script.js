var inputs = document.querySelectorAll("input[type='text'], textarea");
var api_key = "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";//mande 
var prompt = "";
var texte = "";
var img_btn = `<img style="all:initial;border: 1px solid #afa9a9;box-shadow: 0px 0px 124px rgb(0 0 0 / 10%);border-radius: 20px;width:20px;"  src="data:image/png;base64,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"/>`;
chrome.storage.sync.get(['keygpt','promptgpt'], function(result) {
        if(result.keygpt != undefined){
            api_key = result.keygpt;
        }
        if(result.promptgpt != undefined){
            prompt = result.promptgpt
        }
});
 
inputs.forEach(function(input) {
    var button = document.createElement("span");
    button.setAttribute("class", "GPT-test");
    button.setAttribute("title", "Traiter avec GPT3-Bilp");
    button.setAttribute('style','position: absolute;color: rgb(255, 255, 255);padding: 2px;border-radius: 14px;cursor: pointer;')
    button.innerHTML = img_btn;
    var nom_varimput = input.getAttribute('name');
    var div_diff = document.createElement("div");
    div_diff.setAttribute("name","div_diff_"+nom_varimput);
    var text_area_diff1 = 'text_area_diff1_'+nom_varimput;
    var text_area_diff2 = 'text_area_diff2_'+nom_varimput;
    div_diff.innerHTML = `
    <span style="all:initial;color:white">Prompt:</span>
    <input style="height: 20px;margin-top: 8px;" type='text' id="prompt_`+nom_varimput+`">
    <span id="edit_`+nom_varimput+`" style="all:initial;position: relative;top: 6px;padding: 2px;border-radius: 3px;cursor: pointer;" title="Corriger avec GPT3-Bilp">`+img_btn+`</span>
    <span style="all:initial;position: relative;top: 1px;font-weight: bold;background-color: #e0e0e0;padding: 4px;border-radius: 11px;cursor: pointer;" id="use_`+nom_varimput+`" title="Utilisé la modification effecuté">&nbsp;^&nbsp;</span>
    <span id="close_`+nom_varimput+`" style="all:initial;float: right;color: white;font-weight: bold;cursor: pointer;">x</span>
    <div style="all:initial;margin-bottom: 10px;"></div>
    <textarea style="width:97%;z-index:9999" id="`+text_area_diff1+`" cols="30" rows="10"></textarea>
    <textarea  style="width:97%;z-index:9999" id="`+text_area_diff2+`"  cols="30" rows="10"></textarea>
    `;
    div_diff.setAttribute('style','all:initial;z-index:9999;display: none;position: absolute;background-color: rgb(0 0 0 / 67%);padding: 5px;')
   
    input.parentNode.insertBefore(div_diff, input.nextSibling);

    
    var close = document.getElementById('close_'+nom_varimput);
    var textarea1 = document.getElementById(text_area_diff1);
    var prompt_use = document.getElementById('prompt_'+nom_varimput);
    var edit = document.getElementById('edit_'+nom_varimput);
    var use = document.getElementById('use_'+nom_varimput);
    //fermeture modale
    close.onclick = function(){
        div_diff.style.display="none";
    }
    //ouverture modale
    button.onclick = function() {
        textarea1.value = input.value;
        div_diff.style.display = 'block';
        prompt_use.value = prompt+":";
    }
    //correction text
    edit.onclick = function(){
        var prompt_ = prompt_use.value;
        var texte = textarea1.value

        var url = "https://api.openai.com/v1/completions";
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("Authorization", "Bearer "+api_key);
        xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            // console.log(xhr.status);
            // if(xhr.status)
            console.log(JSON.parse(xhr.responseText));
        }};
        var data = `{
        "model": "text-davinci-003",
        "prompt": "`+prompt_+texte+`",
        "temperature": 0.7,
        "max_tokens": 256,
        "top_p": 1,
        "frequency_penalty": 0,
        "presence_penalty": 0
        }`;
        // console.log(data);

        xhr.send(data);

    }
    //utilisation modif
    use.onclick = function(){
        var change = document.getElementById(text_area_diff2).value;
        input.value = change;
    }
    input.parentNode.insertBefore(button, input.nextSibling);
});