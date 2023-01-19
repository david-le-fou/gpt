document.addEventListener('DOMContentLoaded',function(){
    var input_key = document.getElementById('api_key');
    var input_prompt = document.getElementById('prompt_gpt');
    var statut_api_key = document.getElementById('statut_api_key');
    document.getElementById('sockt_apikey').addEventListener('click', function () {
        chrome.storage.sync.set({'keygpt': input_key.value}, function() {
            alert('ok enregistrer');
        }); 
    });
    document.getElementById('ajouter_prompt').addEventListener('click',function(){
        chrome.storage.sync.set({'promptgpt':input_prompt.value},function(){
            alert('prompt ajouter');
        })
    })
    chrome.storage.sync.get(['keygpt','promptgpt'], function(result) {
        if(result.keygpt != undefined){
            input_key.value = result.keygpt
        }
        if(result.promptgpt != undefined){
            input_prompt.value = result.promptgpt
        }
    });
   
    // use_api(api_key, prompt, texte)
});
 