# vrm_plugin_demo

## Install
```
npm install --save o2-vrm-plugin
```
## Usage
Embed the script from ```./node_modules/o2-vrm-plugin/dist/sdk.js``` This will create a variable inside browsers window object - ```window.oath```

As an options you can use version from CDN but this may create redundant HTTP request to sdk.js which would be embedded with your code otherwise.

```javascript
// {HTMLElement} - video tag
var video = window.document.getElementsByTagName('video')[0];

// {HTMLElement} - slot container
var slot = window.document.getElementById('ad-slot');
var adManager;

function onAdReadyToPlay() {
    adManager.play();
    console.log('ad is loaded and ready to be played')
}

function onAdStarted() {
    console.log('ad has started playing')
}

function onAdPaused() {
    console.log('ad has paused')
}

function onAdResumed() {
    console.log('ad has resumed playback')
}

function onAdTimeupdate() {
    console.log('ad current time updated')
}

function onAdVolumeChanged() {
    console.log('ad volume has changed')
}

function onAdFinished() {
    console.log('ad has ended')
}

function onSDKReady(manager) {
    adManager = manager;
    // Bind listeners to ad manager events
    adManager.addEventListener(oath.ads.sdk.SDKEvent.LOADED, onAdReadyToPlay);
    adManager.addEventListener(oath.ads.sdk.AdEvent.STARTED, onAdStarted);
    adManager.addEventListener(oath.ads.sdk.AdEvent.PAUSED, onAdPaused);
    adManager.addEventListener(oath.ads.sdk.AdEvent.RESUMED, onAdResumed);
    adManager.addEventListener(oath.ads.sdk.AdEvent.TIME_UPDATE, onAdTimeupdate);
    adManager.addEventListener(oath.ads.sdk.AdEvent.VOLUME_CHANGED, onAdVolumeChanged);
    adManager.addEventListener(oath.ads.sdk.AdEvent.FINISHED, onAdFinished);
    // Start loading ads
    adManager.load({
        currentVideo: {
	    id: "594bb77d8c08e02ab34761a1"
        }
    });
}

oath.ads.sdk.createAdManager({
    video: video,
    slot: slot,
    buyerCompanyId: '50d595ec0364e95588c77bd2',
    playerId: '5912acc731e0a563e7535e52'
}).then(onSDKReady);
```

Click here for more info on [createManager](https://cdn-ssl.vidible.tv/prod/vrm-plugin/js/1.6/docs/oath.ads.sdk.html#.createAdManager) call.
