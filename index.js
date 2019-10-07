// {HTMLElement} - video tag
let video = document.querySelector('#video');

// {HTMLElement} - slot container
let slot = document.querySelector('#ad-slot');
let adManager;

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
        id: "5a7ab4ff8c08e076e11963a4" //Oath - Build your brand
        }
    });
}

oath.ads.sdk.createAdManager({
    video: video,
    slot: slot,
    buyerCompanyId: '56d5921ce4b0f5991ad44713', //Dev Support WL
    playerId: '5cee356eb8bad37091b71f52' // VRM Plugin Demo player
}).then(onSDKReady)