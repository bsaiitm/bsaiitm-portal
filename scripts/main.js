let baseurl = 'https://bsaiitmcontent.netlify.com/'
let url;


function init(){
    url = new URL(window.location.href);
    hash = url.hash.slice(1);
    if(fullmenu){
      togglemenu()
    }
    if(hash==""){
        loadblog('README');
    }
    else{
        loadblog(hash);
    }
    window.scrollTo(0,1);
    navigator.serviceWorker && navigator.serviceWorker.register('./sw.js').then(function(registration) {
        console.log('Service worker registered with scope: ', registration.scope);
    });
}


function loadblog(bloghash){
    fetch(baseurl + bloghash + '.md').then(function(response) {
        if(response.ok) {
            return response.text()
        }
        throw new Error('Network response was not ok.')
    }).then(function(text) {
        md = new Remarkable('full',{html:true,breaks:true})
        document.getElementById('content').innerHTML = md.render(text)

    }).catch(function(error) {
        console.log('Failed to load: ', error.message)
    });
}
