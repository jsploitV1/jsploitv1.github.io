  const hublink = "https://tgcofficial.github.io"

if ( window !== window.parent )
{   
    try {
        if (window.parent.location.toString() === 'about:blank'){}
    } catch (err) {
        if ((window.location.host) !== (document.referrer.split('/')[2]) && (!document.referrer.includes('Saturn#0020'))){
            window.location.replace(window.location.protocol + window.location.hostname);
        }
    }
} 
else if ((window.location.href.includes('tgc-assets')) || (window.location.href.includes('swf'))){
    window.location.replace(document.referrer || (window.location.origin + '/'));
}

(function(){var blob,domain,is_hotlink,ref,ref1,ref2,ref3,upload_id,url;url=window.location!==window.parent.location?location.ancestorOrigins!=null?location.ancestorOrigins[0]:document.referrer:document.location.href;domain=url!=null?(ref=url.match(/\/\/([^\/]+)/))!=null?ref[1]:void 0:void 0;upload_id=(ref1=window.location.href)!=null?(ref2=ref1.match(/\/html\/(\d+)/))!=null?ref2[1]:void 0:void 0;is_hotlink=((ref3=document.location.href)!=null?ref3.match(/^https?:\/\/commondatastorage\.googleapis\.com\/itchio\//):void 0)?true:domain&&!(domain==="itch.io"||domain.match(/\.itch\.io$/))?true:void 0;is_hotlink=false;if(navigator.sendBeacon!=null){blob=new FormData;blob.append("domain",domain||"unknown-domain");if(upload_id){blob.append("upload_id",upload_id)}if(is_hotlink){blob.append("hotlink","1")}navigator.sendBeacon("https://itch.io/html-callback",blob)}if(is_hotlink){if(upload_id){window.location="https://itch.io/embed-hotlink/"+upload_id}else{window.location="https://itch.io/embed-hotlink"}}}).call(this);
