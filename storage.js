document.addEventListener('DOMContentLoaded',function(){
    var input_key = document.getElementById('api_key');
    var input_prompt = document.getElementById('prompt_gpt');
    var statut = document.getElementById('gpt_status_api');
    chrome.storage.sync.get(['statutgptkey'], function(result) {
        if(result.statutgptkey == 1){
            statut.setAttribute('class','statuok');
            statut.setAttribute('title','Votre clé API est valide')
        }
        else{
            statut.setAttribute('class','statunonok');
            statut.setAttribute('title','Votre clé API n\'est pas valide')
        }
    });
    document.getElementById('sockt_apikey').addEventListener('click', function () {
       
            var api_key = input_key.value;
            var url = "https://api.openai.com/v1/completions";

            var xhr = new XMLHttpRequest();
                xhr.open("POST", url);
                xhr.setRequestHeader("Content-Type", "application/json");
                xhr.setRequestHeader("Authorization", "Bearer "+api_key);
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        chrome.storage.sync.set({'keygpt': input_key.value}, function() {
                            alert('Api key OK');
                        }); 
                        chrome.storage.sync.set({'statutgptkey': 1}, function() {
                            statut.setAttribute('class','statuok');
                            statut.setAttribute('title','Votre clé API est valide')
                        }); 
                    } else {
                        // API key is invalid or the request failed
                        alert('Api key Erreur');
                        chrome.storage.sync.set({'statutgptkey': 0}, function() {
                            statut.setAttribute('class','statunonok');
                            statut.setAttribute('title','Votre clé API n\'est pas valide')
                        }); 
                    }
                    }
                };
                var data = {
                    "model": "text-davinci-003",
                    "prompt": "Bonjour",
                    "temperature": 0.7,
                    "max_tokens": 256,
                    "top_p": 1,
                    "frequency_penalty": 0,
                "presence_penalty": 0
                };
                xhr.send(JSON.stringify(data));
                // console.log(data);
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
 