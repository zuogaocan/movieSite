import{s as Id,k as Ld,u as Rd,l as kn,r as Gt,m as _d,x as Dd,o as Bd,a as Zn,b as Je,c as ct,d as et,f as qt,g as It,F as Es,q as In,t as Ln,p as zi,E as Pd,i as Od,j as Fd}from"./index-8b551f78.js";import{m as Md}from"./index-6bb078dc.js";import{_ as Nd}from"./_plugin-vue_export-helper-c27b6911.js";var Ud={exports:{}};(function(a,e){(function(t,n){a.exports=n()})(self,()=>(()=>{var t={916:(s,o,l)=>{var d=l(471);s.exports=function(c){var u,h="",y=(c=c||{}).video,A=c.options,v=d.$escape,S=c.tran,k=c.icons,I=c.index,R=d.$each;return c.$value,c.$index,h+=`<div class="dplayer-mask"></div>
<div class="dplayer-video-wrap">
    `,u=l(568)(y),h+=u,h+=`
    `,A.logo&&(h+=`
    <div class="dplayer-logo">
        <img src="`,h+=v(A.logo),h+=`">
    </div>
    `),h+=`
    <div class="dplayer-danmaku"`,A.danmaku&&A.danmaku.bottom&&(h+=' style="margin-bottom:',h+=v(A.danmaku.bottom),h+='"'),h+=`>
        <div class="dplayer-danmaku-item dplayer-danmaku-item--demo"></div>
    </div>
    <div class="dplayer-subtitle"></div>
    <div class="dplayer-bezel">
        <span class="dplayer-bezel-icon"></span>
        `,A.danmaku&&(h+=`
        <span class="dplayer-danloading">`,h+=v(S("danmaku-loading")),h+=`</span>
        `),h+=`
        <span class="diplayer-loading-icon">`,h+=k.loading,h+=`</span>
    </div>
</div>
<div class="dplayer-controller-mask"></div>
<div class="dplayer-controller">
    <div class="dplayer-icons dplayer-comment-box">
        <button class="dplayer-icon dplayer-comment-setting-icon" data-balloon="`,h+=v(S("setting")),h+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,h+=k.pallette,h+=`</span>
        </button>
        <div class="dplayer-comment-setting-box">
            <div class="dplayer-comment-setting-color">
                <div class="dplayer-comment-setting-title">`,h+=v(S("set-danmaku-color")),h+=`</div>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,h+=v(I),h+=`" value="#fff" checked>
                    <span style="background: #fff;"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,h+=v(I),h+=`" value="#e54256">
                    <span style="background: #e54256"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,h+=v(I),h+=`" value="#ffe133">
                    <span style="background: #ffe133"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,h+=v(I),h+=`" value="#64DD17">
                    <span style="background: #64DD17"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,h+=v(I),h+=`" value="#39ccff">
                    <span style="background: #39ccff"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,h+=v(I),h+=`" value="#D500F9">
                    <span style="background: #D500F9"></span>
                </label>
            </div>
            <div class="dplayer-comment-setting-type">
                <div class="dplayer-comment-setting-title">`,h+=v(S("set-danmaku-type")),h+=`</div>
                <label>
                    <input type="radio" name="dplayer-danmaku-type-`,h+=v(I),h+=`" value="1">
                    <span>`,h+=v(S("top")),h+=`</span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-type-`,h+=v(I),h+=`" value="0" checked>
                    <span>`,h+=v(S("rolling")),h+=`</span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-type-`,h+=v(I),h+=`" value="2">
                    <span>`,h+=v(S("bottom")),h+=`</span>
                </label>
            </div>
        </div>
        <input class="dplayer-comment-input" type="text" placeholder="`,h+=v(S("input-danmaku-enter")),h+=`" maxlength="30">
        <button class="dplayer-icon dplayer-send-icon" data-balloon="`,h+=v(S("send")),h+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,h+=k.send,h+=`</span>
        </button>
    </div>
    <div class="dplayer-icons dplayer-icons-left">
        <button class="dplayer-icon dplayer-play-icon">
            <span class="dplayer-icon-content">`,h+=k.play,h+=`</span>
        </button>
        <div class="dplayer-volume">
            <button class="dplayer-icon dplayer-volume-icon">
                <span class="dplayer-icon-content">`,h+=k.volumeDown,h+=`</span>
            </button>
            <div class="dplayer-volume-bar-wrap" data-balloon-pos="up">
                <div class="dplayer-volume-bar">
                    <div class="dplayer-volume-bar-inner" style="background: `,h+=v(A.theme),h+=`;">
                        <span class="dplayer-thumb" style="background: `,h+=v(A.theme),h+=`"></span>
                    </div>
                </div>
            </div>
        </div>
        <span class="dplayer-time">
            <span class="dplayer-ptime">0:00</span> /
            <span class="dplayer-dtime">0:00</span>
        </span>
        `,A.live&&(h+=`
        <span class="dplayer-live-badge"><span class="dplayer-live-dot" style="background: `,h+=v(A.theme),h+=';"></span>',h+=v(S("live")),h+=`</span>
        `),h+=`
    </div>
    <div class="dplayer-icons dplayer-icons-right">
        `,A.video.quality&&(h+=`
        <div class="dplayer-quality">
            <button class="dplayer-icon dplayer-quality-icon">`,h+=v(A.video.quality[A.video.defaultQuality].name),h+=`</button>
            <div class="dplayer-quality-mask">
                <div class="dplayer-quality-list">
                `,R(A.video.quality,function(_,L){h+=`
                    <div class="dplayer-quality-item" data-index="`,h+=v(L),h+='">',h+=v(_.name),h+=`</div>
                `}),h+=`
                </div>
            </div>
        </div>
        `),h+=`
        `,A.screenshot&&(h+=`
        <div class="dplayer-icon dplayer-camera-icon" data-balloon="`,h+=v(S("screenshot")),h+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,h+=k.camera,h+=`</span>
        </div>
        `),h+=`
        `,A.airplay&&(h+=`
        <div class="dplayer-icon dplayer-airplay-icon" data-balloon="`,h+=v(S("airplay")),h+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,h+=k.airplay,h+=`</span>
        </div>
        `),h+=`
        `,A.chromecast&&(h+=`
        <div class="dplayer-icon dplayer-chromecast-icon" data-balloon="`,h+=v(S("chromecast")),h+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,h+=k.chromecast,h+=`</span>
        </div>
        `),h+=`
        <div class="dplayer-comment">
            <button class="dplayer-icon dplayer-comment-icon" data-balloon="`,h+=v(S("send-danmaku")),h+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,h+=k.comment,h+=`</span>
            </button>
        </div>
        `,A.subtitle&&(h+=`
        `,typeof A.subtitle.url=="string"?(h+=`
        <div class="dplayer-subtitle-btn">
            <button class="dplayer-icon dplayer-subtitle-icon" data-balloon="`,h+=v(S("hide-subs")),h+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,h+=k.subtitle,h+=`</span>
            </button>
        </div>
        `):(h+=`
        <div class="dplayer-subtitles">
            <button class="dplayer-icon dplayer-subtitles-icon" data-balloon="`,h+=v(S("subtitle")),h+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,h+=k.subtitle,h+=`</span>
            </button>
            <div class="dplayer-subtitles-box">
                <div class="dplayer-subtitles-panel">
                    `,R(A.subtitle.url,function(_,L){h+=`
                        <div class="dplayer-subtitles-item" data-subtitle="`,h+=v(_.url),h+=`">
                            <!-- if lang, show tran(lang). if lang and name, show name + (tran(lang)). if name, show name. off option use lang for translation. -->
                            <span class="dplayer-label">`,h+=v(_.lang?_.name?_.name+" ("+S(_.lang)+")":S(_.lang):_.name),h+=`</span>
                        </div>
                    `}),h+=`
                </div>
            </div>
        </div>
        `),h+=`
        `),h+=`
        <div class="dplayer-setting">
            <button class="dplayer-icon dplayer-setting-icon" data-balloon="`,h+=v(S("setting")),h+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,h+=k.setting,h+=`</span>
            </button>
            <div class="dplayer-setting-box">
                <div class="dplayer-setting-origin-panel">
                    <div class="dplayer-setting-item dplayer-setting-speed">
                        <span class="dplayer-label">`,h+=v(S("speed")),h+=`</span>
                        <div class="dplayer-toggle">`,h+=k.right,h+=`</div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-loop">
                        <span class="dplayer-label">`,h+=v(S("loop")),h+=`</span>
                        <div class="dplayer-toggle">
                            <input class="dplayer-toggle-setting-input" type="checkbox" name="dplayer-toggle">
                            <label for="dplayer-toggle"></label>
                        </div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-showdan">
                        <span class="dplayer-label">`,h+=v(S("show-danmaku")),h+=`</span>
                        <div class="dplayer-toggle">
                            <input class="dplayer-showdan-setting-input" type="checkbox" name="dplayer-toggle-dan">
                            <label for="dplayer-toggle-dan"></label>
                        </div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-danunlimit">
                        <span class="dplayer-label">`,h+=v(S("unlimited-danmaku")),h+=`</span>
                        <div class="dplayer-toggle">
                            <input class="dplayer-danunlimit-setting-input" type="checkbox" name="dplayer-toggle-danunlimit">
                            <label for="dplayer-toggle-danunlimit"></label>
                        </div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-danmaku">
                        <span class="dplayer-label">`,h+=v(S("opacity-danmaku")),h+=`</span>
                        <div class="dplayer-danmaku-bar-wrap">
                            <div class="dplayer-danmaku-bar">
                                <div class="dplayer-danmaku-bar-inner">
                                    <span class="dplayer-thumb"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="dplayer-setting-speed-panel">
                    `,R(A.playbackSpeed,function(_,L){h+=`
                        <div class="dplayer-setting-speed-item" data-speed="`,h+=v(_),h+=`">
                            <span class="dplayer-label">`,h+=v(_===1?S("normal"):_),h+=`</span>
                        </div>
                    `}),h+=`
                </div>
            </div>
        </div>
        <div class="dplayer-full">
            <button class="dplayer-icon dplayer-full-in-icon" data-balloon="`,h+=v(S("web-fullscreen")),h+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,h+=k.fullWeb,h+=`</span>
            </button>
            <button class="dplayer-icon dplayer-full-icon" data-balloon="`,h+=v(S("fullscreen")),h+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,h+=k.full,h+=`</span>
            </button>
        </div>
    </div>
    <div class="dplayer-bar-wrap">
        <div class="dplayer-bar-time hidden">00:00</div>
        <div class="dplayer-bar-preview"></div>
        <div class="dplayer-bar">
            <div class="dplayer-loaded" style="width: 0;"></div>
            <div class="dplayer-played" style="width: 0; background: `,h+=v(A.theme),h+=`">
                <span class="dplayer-thumb" style="background: `,h+=v(A.theme),h+=`"></span>
            </div>
        </div>
    </div>
</div>
<div class="dplayer-info-panel dplayer-info-panel-hide">
    <div class="dplayer-info-panel-close">[x]</div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-version">
        <span class="dplayer-info-panel-item-title">Player version</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-fps">
        <span class="dplayer-info-panel-item-title">Player FPS</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-type">
        <span class="dplayer-info-panel-item-title">Video type</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-url">
        <span class="dplayer-info-panel-item-title">Video url</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-resolution">
        <span class="dplayer-info-panel-item-title">Video resolution</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-duration">
        <span class="dplayer-info-panel-item-title">Video duration</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    `,A.danmaku&&(h+=`
    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-id">
        <span class="dplayer-info-panel-item-title">Danmaku id</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-api">
        <span class="dplayer-info-panel-item-title">Danmaku api</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-amount">
        <span class="dplayer-info-panel-item-title">Danmaku amount</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    `),h+=`
</div>
<div class="dplayer-menu">
    `,R(A.contextmenu,function(_,L){h+=`
        <div class="dplayer-menu-item">
            <a`,_.link&&(h+=' target="_blank"'),h+=' href="',h+=v(_.link||"javascript:void(0);"),h+='">',_.key&&(h+=" ",h+=v(S(_.key))),_.text&&(h+=" ",h+=v(_.text)),h+=`</a>
        </div>
    `}),h+=`
</div>
<div class="dplayer-notice-list"></div>
<button class="dplayer-mobile-play">
    `,h+=k.play,h+=`
</button>`}},568:(s,o,l)=>{var d=l(471);s.exports=function(c){var u="",h=(c=c||{}).enableSubtitle,y=c.subtitle,A=c.current,v=c.airplay,S=c.pic,k=d.$escape,I=c.screenshot,R=c.preload,_=c.url;return h=y&&y.type==="webvtt",u+=`
<video
    class="dplayer-video `,A&&(u+="dplayer-video-current"),u+=`"
    webkit-playsinline
    `,v&&(u+=' x-webkit-airplay="allow" '),u+=`
    playsinline
    `,S&&(u+='poster="',u+=k(S),u+='"'),u+=`
    `,(I||h)&&(u+='crossorigin="anonymous"'),u+=`
    `,R&&(u+='preload="',u+=k(R),u+='"'),u+=`
    `,v?u+=`
    nosrc
    `:_&&(u+=`
    src="`,u+=k(_),u+=`"
    `),u+=`
    >
    `,v&&(u+=`
    <source src="`,u+=k(_),u+=`">
    `),u+=`
    `,h&&(u+=`
    <track class="dplayer-subtrack" kind="metadata" default src="`,u+=k(typeof y.url=="string"?y.url:y.url[y.index].url),u+=`"></track>
    `),u+`
</video>`}},49:(s,o,l)=>{l.d(o,{Z:()=>y});var d=l(415),c=l.n(d),u=l(352),h=l.n(u)()(c());h.push([s.id,`:root {
  --balloon-border-radius: 2px;
  --balloon-color: rgba(16, 16, 16, 0.95);
  --balloon-text-color: #fff;
  --balloon-font-size: 12px;
  --balloon-move: 4px; }

button[aria-label][data-balloon-pos] {
  overflow: visible; }

[aria-label][data-balloon-pos] {
  position: relative;
  cursor: pointer; }
  [aria-label][data-balloon-pos]:after {
    opacity: 0;
    pointer-events: none;
    transition: all 0.18s ease-out 0.18s;
    text-indent: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: normal;
    font-style: normal;
    text-shadow: none;
    font-size: 12px;
    font-size: var(--balloon-font-size);
    background: rgba(16, 16, 16, 0.95);
    background: var(--balloon-color);
    border-radius: 2px;
    color: #fff;
    color: var(--balloon-text-color);
    border-radius: var(--balloon-border-radius);
    content: attr(aria-label);
    padding: .5em 1em;
    position: absolute;
    white-space: nowrap;
    z-index: 10; }
  [aria-label][data-balloon-pos]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-top-color: rgba(16, 16, 16, 0.95);
    border-top-color: var(--balloon-color);
    opacity: 0;
    pointer-events: none;
    transition: all 0.18s ease-out 0.18s;
    content: "";
    position: absolute;
    z-index: 10; }
  [aria-label][data-balloon-pos]:hover:before, [aria-label][data-balloon-pos]:hover:after, [aria-label][data-balloon-pos][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-visible]:after, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:before, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:after {
    opacity: 1;
    pointer-events: none; }
  [aria-label][data-balloon-pos].font-awesome:after {
    font-family: FontAwesome, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; }
  [aria-label][data-balloon-pos][data-balloon-break]:after {
    white-space: pre; }
  [aria-label][data-balloon-pos][data-balloon-break][data-balloon-length]:after {
    white-space: pre-line;
    word-break: break-word; }
  [aria-label][data-balloon-pos][data-balloon-blunt]:before, [aria-label][data-balloon-pos][data-balloon-blunt]:after {
    transition: none; }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:after {
    transform: translate(-50%, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:before {
    transform: translate(-50%, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:after {
    left: 0; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:before {
    left: 5px; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:after {
    right: 0; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:before {
    right: 5px; }
  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:after {
    transform: translate(0, 0); }
  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:before {
    transform: translate(0, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {
    bottom: 100%;
    transform-origin: top;
    transform: translate(0, 4px);
    transform: translate(0, var(--balloon-move)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {
    margin-bottom: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos="up"]:after {
    left: 50%;
    transform: translate(-50%, 4px);
    transform: translate(-50%, var(--balloon-move)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {
    top: 100%;
    transform: translate(0, calc(4px * -1));
    transform: translate(0, calc(var(--balloon-move) * -1)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {
    margin-top: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-bottom-color: rgba(16, 16, 16, 0.95);
    border-bottom-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-pos="down"]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:before {
    left: 50%;
    transform: translate(-50%, calc(4px * -1));
    transform: translate(-50%, calc(var(--balloon-move) * -1)); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:after {
    transform: translate(0, -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:before {
    transform: translate(0, -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after, [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {
    right: 100%;
    top: 50%;
    transform: translate(4px, -50%);
    transform: translate(var(--balloon-move), -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after {
    margin-right: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-left-color: rgba(16, 16, 16, 0.95);
    border-left-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {
    left: 100%;
    top: 50%;
    transform: translate(calc(4px * -1), -50%);
    transform: translate(calc(var(--balloon-move) * -1), -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after {
    margin-left: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-right-color: rgba(16, 16, 16, 0.95);
    border-right-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-length]:after {
    white-space: normal; }
  [aria-label][data-balloon-pos][data-balloon-length="small"]:after {
    width: 80px; }
  [aria-label][data-balloon-pos][data-balloon-length="medium"]:after {
    width: 150px; }
  [aria-label][data-balloon-pos][data-balloon-length="large"]:after {
    width: 260px; }
  [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {
    width: 380px; }
    @media screen and (max-width: 768px) {
      [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {
        width: 90vw; } }
  [aria-label][data-balloon-pos][data-balloon-length="fit"]:after {
    width: 100%; }
`,"",{version:3,sources:["webpack://./node_modules/.pnpm/balloon-css@1.2.0/node_modules/balloon-css/balloon.css"],names:[],mappings:"AAAA;EACE,4BAA4B;EAC5B,uCAAuC;EACvC,0BAA0B;EAC1B,yBAAyB;EACzB,mBAAmB,EAAE;;AAEvB;EACE,iBAAiB,EAAE;;AAErB;EACE,kBAAkB;EAClB,eAAe,EAAE;EACjB;IACE,UAAU;IACV,oBAAoB;IACpB,oCAAoC;IACpC,cAAc;IACd,wIAAwI;IACxI,mBAAmB;IACnB,kBAAkB;IAClB,iBAAiB;IACjB,eAAmC;IAAnC,mCAAmC;IACnC,kCAAgC;IAAhC,gCAAgC;IAChC,kBAAkB;IAClB,WAAgC;IAAhC,gCAAgC;IAChC,2CAA2C;IAC3C,yBAAyB;IACzB,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;IACnB,WAAW,EAAE;EACf;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,wCAAsC;IAAtC,sCAAsC;IACtC,UAAU;IACV,oBAAoB;IACpB,oCAAoC;IACpC,WAAW;IACX,kBAAkB;IAClB,WAAW,EAAE;EACf;IACE,UAAU;IACV,oBAAoB,EAAE;EACxB;IACE,qJAAqJ,EAAE;EACzJ;IACE,gBAAgB,EAAE;EACpB;IACE,qBAAqB;IACrB,sBAAsB,EAAE;EAC1B;IACE,gBAAgB,EAAE;EACpB;IACE,6BAA6B,EAAE;EACjC;IACE,6BAA6B,EAAE;EACjC;IACE,OAAO,EAAE;EACX;IACE,SAAS,EAAE;EACb;IACE,QAAQ,EAAE;EACZ;IACE,UAAU,EAAE;EACd;IACE,0BAA0B,EAAE;EAC9B;IACE,0BAA0B,EAAE;EAC9B;IACE,YAAY;IACZ,qBAAqB;IACrB,4BAA4C;IAA5C,4CAA4C,EAAE;EAChD;IACE,mBAAmB,EAAE;EACvB;IACE,SAAS;IACT,+BAA+C;IAA/C,+CAA+C,EAAE;EACnD;IACE,SAAS;IACT,uCAAuD;IAAvD,uDAAuD,EAAE;EAC3D;IACE,gBAAgB,EAAE;EACpB;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,2CAAyC;IAAzC,yCAAyC,EAAE;EAC7C;IACE,SAAS;IACT,0CAA0D;IAA1D,0DAA0D,EAAE;EAC9D;IACE,6BAA6B,EAAE;EACjC;IACE,6BAA6B,EAAE;EACjC;IACE,WAAW;IACX,QAAQ;IACR,+BAA+C;IAA/C,+CAA+C,EAAE;EACnD;IACE,kBAAkB,EAAE;EACtB;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,yCAAuC;IAAvC,uCAAuC,EAAE;EAC3C;IACE,UAAU;IACV,QAAQ;IACR,0CAA0D;IAA1D,0DAA0D,EAAE;EAC9D;IACE,iBAAiB,EAAE;EACrB;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,0CAAwC;IAAxC,wCAAwC,EAAE;EAC5C;IACE,mBAAmB,EAAE;EACvB;IACE,WAAW,EAAE;EACf;IACE,YAAY,EAAE;EAChB;IACE,YAAY,EAAE;EAChB;IACE,YAAY,EAAE;IACd;MACE;QACE,WAAW,EAAE,EAAE;EACrB;IACE,WAAW,EAAE",sourcesContent:[`:root {
  --balloon-border-radius: 2px;
  --balloon-color: rgba(16, 16, 16, 0.95);
  --balloon-text-color: #fff;
  --balloon-font-size: 12px;
  --balloon-move: 4px; }

button[aria-label][data-balloon-pos] {
  overflow: visible; }

[aria-label][data-balloon-pos] {
  position: relative;
  cursor: pointer; }
  [aria-label][data-balloon-pos]:after {
    opacity: 0;
    pointer-events: none;
    transition: all 0.18s ease-out 0.18s;
    text-indent: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: normal;
    font-style: normal;
    text-shadow: none;
    font-size: var(--balloon-font-size);
    background: var(--balloon-color);
    border-radius: 2px;
    color: var(--balloon-text-color);
    border-radius: var(--balloon-border-radius);
    content: attr(aria-label);
    padding: .5em 1em;
    position: absolute;
    white-space: nowrap;
    z-index: 10; }
  [aria-label][data-balloon-pos]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-top-color: var(--balloon-color);
    opacity: 0;
    pointer-events: none;
    transition: all 0.18s ease-out 0.18s;
    content: "";
    position: absolute;
    z-index: 10; }
  [aria-label][data-balloon-pos]:hover:before, [aria-label][data-balloon-pos]:hover:after, [aria-label][data-balloon-pos][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-visible]:after, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:before, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:after {
    opacity: 1;
    pointer-events: none; }
  [aria-label][data-balloon-pos].font-awesome:after {
    font-family: FontAwesome, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; }
  [aria-label][data-balloon-pos][data-balloon-break]:after {
    white-space: pre; }
  [aria-label][data-balloon-pos][data-balloon-break][data-balloon-length]:after {
    white-space: pre-line;
    word-break: break-word; }
  [aria-label][data-balloon-pos][data-balloon-blunt]:before, [aria-label][data-balloon-pos][data-balloon-blunt]:after {
    transition: none; }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:after {
    transform: translate(-50%, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:before {
    transform: translate(-50%, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:after {
    left: 0; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:before {
    left: 5px; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:after {
    right: 0; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:before {
    right: 5px; }
  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:after {
    transform: translate(0, 0); }
  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:before {
    transform: translate(0, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {
    bottom: 100%;
    transform-origin: top;
    transform: translate(0, var(--balloon-move)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {
    margin-bottom: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos="up"]:after {
    left: 50%;
    transform: translate(-50%, var(--balloon-move)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {
    top: 100%;
    transform: translate(0, calc(var(--balloon-move) * -1)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {
    margin-top: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-bottom-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-pos="down"]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:before {
    left: 50%;
    transform: translate(-50%, calc(var(--balloon-move) * -1)); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:after {
    transform: translate(0, -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:before {
    transform: translate(0, -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after, [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {
    right: 100%;
    top: 50%;
    transform: translate(var(--balloon-move), -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after {
    margin-right: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-left-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {
    left: 100%;
    top: 50%;
    transform: translate(calc(var(--balloon-move) * -1), -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after {
    margin-left: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-right-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-length]:after {
    white-space: normal; }
  [aria-label][data-balloon-pos][data-balloon-length="small"]:after {
    width: 80px; }
  [aria-label][data-balloon-pos][data-balloon-length="medium"]:after {
    width: 150px; }
  [aria-label][data-balloon-pos][data-balloon-length="large"]:after {
    width: 260px; }
  [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {
    width: 380px; }
    @media screen and (max-width: 768px) {
      [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {
        width: 90vw; } }
  [aria-label][data-balloon-pos][data-balloon-length="fit"]:after {
    width: 100%; }
`],sourceRoot:""}]);const y=h},685:(s,o,l)=>{l.d(o,{Z:()=>R});var d=l(415),c=l.n(d),u=l(352),h=l.n(u),y=l(49),A=l(80),v=l.n(A),S=new URL(l(831),l.b),k=h()(c());k.i(y.Z);var I=v()(S);k.push([s.id,`@keyframes my-face {
  2% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  4% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  6% {
    transform: translate(0, 1.5px) rotate(-1.5deg);
  }
  8% {
    transform: translate(0, -1.5px) rotate(-1.5deg);
  }
  10% {
    transform: translate(0, 2.5px) rotate(1.5deg);
  }
  12% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  14% {
    transform: translate(0, -1.5px) rotate(1.5deg);
  }
  16% {
    transform: translate(0, -0.5px) rotate(-1.5deg);
  }
  18% {
    transform: translate(0, 0.5px) rotate(-1.5deg);
  }
  20% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  22% {
    transform: translate(0, 0.5px) rotate(-1.5deg);
  }
  24% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  26% {
    transform: translate(0, 0.5px) rotate(0.5deg);
  }
  28% {
    transform: translate(0, 0.5px) rotate(1.5deg);
  }
  30% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  32% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  34% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  36% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  38% {
    transform: translate(0, 1.5px) rotate(-1.5deg);
  }
  40% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  42% {
    transform: translate(0, 2.5px) rotate(-1.5deg);
  }
  44% {
    transform: translate(0, 1.5px) rotate(0.5deg);
  }
  46% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  48% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  50% {
    transform: translate(0, 0.5px) rotate(0.5deg);
  }
  52% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  54% {
    transform: translate(0, -1.5px) rotate(1.5deg);
  }
  56% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  58% {
    transform: translate(0, 0.5px) rotate(2.5deg);
  }
  60% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  62% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  64% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  66% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  68% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  70% {
    transform: translate(0, 1.5px) rotate(0.5deg);
  }
  72% {
    transform: translate(0, 2.5px) rotate(1.5deg);
  }
  74% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  76% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  78% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  80% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  82% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  84% {
    transform: translate(0, 1.5px) rotate(2.5deg);
  }
  86% {
    transform: translate(0, -1.5px) rotate(-1.5deg);
  }
  88% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  90% {
    transform: translate(0, 2.5px) rotate(-0.5deg);
  }
  92% {
    transform: translate(0, 0.5px) rotate(-0.5deg);
  }
  94% {
    transform: translate(0, 2.5px) rotate(0.5deg);
  }
  96% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  98% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
}
.dplayer {
  position: relative;
  overflow: hidden;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  line-height: 1;
}
.dplayer * {
  box-sizing: content-box;
}
.dplayer svg {
  width: 100%;
  height: 100%;
}
.dplayer svg path,
.dplayer svg circle {
  fill: #fff;
}
.dplayer:-webkit-full-screen {
  width: 100%;
  height: 100%;
  background: #000;
  position: fixed;
  z-index: 100000;
  left: 0;
  top: 0;
  margin: 0;
  padding: 0;
  transform: translate(0, 0);
}
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-showdan,
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danmaku,
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danunlimit {
  display: none;
}
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-comment {
  display: none;
}
.dplayer.dplayer-no-danmaku .dplayer-danmaku {
  display: none;
}
.dplayer.dplayer-live .dplayer-time {
  display: none;
}
.dplayer.dplayer-live .dplayer-bar-wrap {
  display: none;
}
.dplayer.dplayer-live .dplayer-setting-speed {
  display: none;
}
.dplayer.dplayer-live .dplayer-setting-loop {
  display: none;
}
.dplayer.dplayer-live.dplayer-no-danmaku .dplayer-setting {
  display: none;
}
.dplayer.dplayer-arrow .dplayer-danmaku {
  font-size: 18px;
}
.dplayer.dplayer-arrow .dplayer-icon {
  margin: 0 -3px;
}
.dplayer.dplayer-playing .dplayer-danmaku .dplayer-danmaku-move {
  animation-play-state: running;
}
@media (min-width: 900px) {
  .dplayer.dplayer-playing .dplayer-controller-mask {
    opacity: 0;
  }
  .dplayer.dplayer-playing .dplayer-controller {
    opacity: 0;
  }
  .dplayer.dplayer-playing:hover .dplayer-controller-mask {
    opacity: 1;
  }
  .dplayer.dplayer-playing:hover .dplayer-controller {
    opacity: 1;
  }
}
.dplayer.dplayer-loading .dplayer-bezel .diplayer-loading-icon {
  display: block;
}
.dplayer.dplayer-loading .dplayer-danmaku,
.dplayer.dplayer-paused .dplayer-danmaku,
.dplayer.dplayer-loading .dplayer-danmaku-move,
.dplayer.dplayer-paused .dplayer-danmaku-move {
  animation-play-state: paused;
}
.dplayer.dplayer-hide-controller {
  cursor: none;
}
.dplayer.dplayer-hide-controller .dplayer-controller-mask {
  opacity: 0;
  transform: translateY(100%);
}
.dplayer.dplayer-hide-controller .dplayer-controller {
  opacity: 0;
  transform: translateY(100%);
}
.dplayer.dplayer-show-controller .dplayer-controller-mask {
  opacity: 1;
}
.dplayer.dplayer-show-controller .dplayer-controller {
  opacity: 1;
}
.dplayer.dplayer-fulled {
  width: 100% !important;
  height: 100% !important;
}
.dplayer.dplayer-fulled {
  position: fixed;
  z-index: 100000;
  left: 0;
  top: 0;
}
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-volume,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-camera-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-airplay-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-chromecast-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-play-icon {
  display: none;
}
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {
  position: static;
  display: inline-block;
}
.dplayer.dplayer-mobile .dplayer-bar-time {
  display: none;
}
.dplayer.dplayer-mobile.dplayer-hide-controller .dplayer-mobile-play {
  display: none;
}
.dplayer.dplayer-mobile .dplayer-mobile-play {
  display: block;
}
.dplayer-web-fullscreen-fix {
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
}
[data-balloon]:before {
  display: none;
}
[data-balloon]:after {
  padding: 0.3em 0.7em;
  background: rgba(17, 17, 17, 0.7);
}
[data-balloon][data-balloon-pos="up"]:after {
  margin-bottom: 0;
}
.dplayer-bezel {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 22px;
  color: #fff;
  pointer-events: none;
}
.dplayer-bezel .dplayer-bezel-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -26px 0 0 -26px;
  height: 52px;
  width: 52px;
  padding: 12px;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
}
.dplayer-bezel .dplayer-bezel-icon.dplayer-bezel-transition {
  animation: bezel-hide 0.5s linear;
}
@keyframes bezel-hide {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(2);
  }
}
.dplayer-bezel .dplayer-danloading {
  position: absolute;
  top: 50%;
  margin-top: -7px;
  width: 100%;
  text-align: center;
  font-size: 14px;
  line-height: 14px;
  animation: my-face 5s infinite ease-in-out;
}
.dplayer-bezel .diplayer-loading-icon {
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -18px 0 0 -18px;
  height: 36px;
  width: 36px;
  pointer-events: none;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-hide {
  display: none;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot {
  animation: diplayer-loading-dot-fade 0.8s ease infinite;
  opacity: 0;
  transform-origin: 4px 4px;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-1 {
  animation-delay: 0.1s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-2 {
  animation-delay: 0.2s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-3 {
  animation-delay: 0.3s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-4 {
  animation-delay: 0.4s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-5 {
  animation-delay: 0.5s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-6 {
  animation-delay: 0.6s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-7 {
  animation-delay: 0.7s;
}
@keyframes diplayer-loading-dot-fade {
  0% {
    opacity: 0.7;
    transform: scale(1.2, 1.2);
  }
  50% {
    opacity: 0.25;
    transform: scale(0.9, 0.9);
  }
  to {
    opacity: 0.25;
    transform: scale(0.85, 0.85);
  }
}
.dplayer-controller-mask {
  background: url(`+I+`) repeat-x bottom;
  height: 98px;
  width: 100%;
  position: absolute;
  bottom: 0;
  transition: all 0.3s ease;
}
.dplayer-controller {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 41px;
  padding: 0 20px;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  transition: all 0.3s ease;
}
.dplayer-controller.dplayer-controller-comment .dplayer-icons {
  display: none;
}
.dplayer-controller.dplayer-controller-comment .dplayer-icons.dplayer-comment-box {
  display: block;
}
.dplayer-controller .dplayer-bar-wrap {
  padding: 5px 0;
  cursor: pointer;
  position: absolute;
  bottom: 33px;
  width: calc(100% - 40px);
  height: 3px;
}
.dplayer-controller .dplayer-bar-wrap:hover .dplayer-bar .dplayer-played .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-bar-wrap:hover .dplayer-highlight {
  display: block;
  width: 8px;
  transform: translateX(-4px);
  top: 4px;
  height: 40%;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight {
  z-index: 12;
  position: absolute;
  top: 5px;
  width: 6px;
  height: 20%;
  border-radius: 6px;
  background-color: #fff;
  text-align: center;
  transform: translateX(-3px);
  transition: all 0.2s ease-in-out;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover .dplayer-highlight-text {
  display: block;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-preview {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-time {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight .dplayer-highlight-text {
  display: none;
  position: absolute;
  left: 50%;
  top: -24px;
  padding: 5px 8px;
  background-color: rgba(0, 0, 0, 0.62);
  color: #fff;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  transform: translateX(-50%);
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview {
  position: absolute;
  background: #fff;
  pointer-events: none;
  display: none;
  background-size: 16000px 100%;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview-canvas {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time {
  position: absolute;
  left: 0px;
  top: -20px;
  border-radius: 4px;
  padding: 5px 7px;
  background-color: rgba(0, 0, 0, 0.62);
  color: #fff;
  font-size: 12px;
  text-align: center;
  opacity: 1;
  transition: opacity 0.1s ease-in-out;
  word-wrap: normal;
  word-break: normal;
  z-index: 2;
  pointer-events: none;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time.hidden {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar {
  position: relative;
  height: 3px;
  width: 100%;
  background: rgba(255, 255, 255, 0.2);
  cursor: pointer;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-loaded {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.4);
  height: 3px;
  transition: all 0.5s ease;
  will-change: width;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  height: 3px;
  will-change: width;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons {
  height: 38px;
  position: absolute;
  bottom: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box {
  display: none;
  position: absolute;
  transition: all 0.3s ease-in-out;
  z-index: 2;
  height: 38px;
  bottom: 0;
  left: 20px;
  right: 20px;
  color: #fff;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-icon {
  padding: 7px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-icon {
  position: absolute;
  left: 0;
  top: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-send-icon {
  position: absolute;
  right: 0;
  top: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box {
  position: absolute;
  background: rgba(28, 28, 28, 0.9);
  bottom: 41px;
  left: 0;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  padding: 10px 10px 16px;
  font-size: 14px;
  width: 204px;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box.dplayer-comment-setting-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box input[type=radio] {
  display: none;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box label {
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-title {
  font-size: 13px;
  color: #fff;
  line-height: 30px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type {
  font-size: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type .dplayer-comment-setting-title {
  margin-bottom: 6px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(2) span {
  border-radius: 4px 0 0 4px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(4) span {
  border-radius: 0 4px 4px 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type span {
  width: 33%;
  padding: 4px 6px;
  line-height: 16px;
  display: inline-block;
  font-size: 12px;
  color: #fff;
  border: 1px solid #fff;
  margin-right: -1px;
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type input:checked + span {
  background: #E4E4E6;
  color: #1c1c1c;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color {
  font-size: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color label {
  font-size: 0;
  padding: 6px;
  display: inline-block;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span {
  width: 22px;
  height: 22px;
  display: inline-block;
  border-radius: 50%;
  box-sizing: border-box;
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span:hover {
  animation: my-face 5s infinite ease-in-out;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input {
  outline: none;
  border: none;
  padding: 8px 31px;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  border-radius: 4px;
  background: none;
  margin: 0;
  height: 100%;
  box-sizing: border-box;
  width: 100%;
  color: #fff;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::-moz-placeholder {
  color: #fff;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::placeholder {
  color: #fff;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::-ms-clear {
  display: none;
}
.dplayer-controller .dplayer-icons.dplayer-icons-left .dplayer-icon {
  padding: 7px;
}
.dplayer-controller .dplayer-icons.dplayer-icons-right {
  right: 20px;
}
.dplayer-controller .dplayer-icons.dplayer-icons-right .dplayer-icon {
  padding: 8px;
}
.dplayer-controller .dplayer-icons .dplayer-time,
.dplayer-controller .dplayer-icons .dplayer-live-badge {
  line-height: 38px;
  color: #eee;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  vertical-align: middle;
  font-size: 13px;
  cursor: default;
}
.dplayer-controller .dplayer-icons .dplayer-live-dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  vertical-align: 4%;
  margin-right: 5px;
  content: '';
  border-radius: 6px;
}
.dplayer-controller .dplayer-icons .dplayer-icon {
  width: 40px;
  height: 100%;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  vertical-align: middle;
  box-sizing: border-box;
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-icon .dplayer-icon-content {
  transition: all 0.2s ease-in-out;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons .dplayer-icon:hover .dplayer-icon-content {
  opacity: 1;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-quality-icon {
  color: #fff;
  width: auto;
  line-height: 22px;
  font-size: 14px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-comment-icon {
  padding: 10px 9px 9px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-setting-icon {
  padding-top: 8.5px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-volume-icon {
  width: 43px;
}
.dplayer-controller .dplayer-icons .dplayer-volume {
  position: relative;
  display: inline-block;
  cursor: pointer;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar {
  width: 45px;
}
.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar {
  width: 45px;
}
.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap {
  display: inline-block;
  margin: 0 10px 0 -5px;
  vertical-align: middle;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar {
  position: relative;
  top: 17px;
  width: 0;
  height: 3px;
  background: #aaa;
  transition: all 0.3s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  transition: all 0.1s ease;
  will-change: width;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons .dplayer-subtitle-btn {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box {
  position: absolute;
  right: 0;
  bottom: 50px;
  transform: scale(0);
  width: -moz-fit-content;
  width: fit-content;
  max-width: 240px;
  min-width: 120px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 7px 0;
  transition: all 0.3s ease-in-out;
  overflow: auto;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-box-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item {
  height: 30px;
  padding: 5px 10px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-setting {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box {
  position: absolute;
  right: 0;
  bottom: 50px;
  transform: scale(0);
  width: 150px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 7px 0;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div.dplayer-setting-origin-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-narrow {
  width: 70px;
  text-align: center;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-origin-panel {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-speed-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item,
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item {
  height: 30px;
  padding: 5px 10px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item:hover,
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku {
  padding: 5px 0;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-label {
  padding: 0 10px;
  display: inline;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-label {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-danmaku-bar-wrap {
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-label {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-danmaku-bar-wrap {
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap {
  padding: 0 10px;
  box-sizing: border-box;
  display: none;
  vertical-align: middle;
  height: 100%;
  width: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar {
  position: relative;
  top: 8.5px;
  width: 100%;
  height: 3px;
  background: #fff;
  transition: all 0.3s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  transition: all 0.1s ease;
  background: #aaa;
  will-change: width;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  background: #aaa;
}
.dplayer-controller .dplayer-icons .dplayer-full {
  display: inline-block;
  height: 100%;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-full:hover .dplayer-full-in-icon {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {
  position: absolute;
  top: -30px;
  z-index: 1;
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-quality {
  position: relative;
  display: inline-block;
  height: 100%;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-list {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-mask {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-mask {
  display: none;
  position: absolute;
  bottom: 38px;
  left: -18px;
  width: 80px;
  padding-bottom: 12px;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-list {
  display: none;
  font-size: 12px;
  width: 80px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 5px 0;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  color: #fff;
  text-align: center;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item {
  height: 25px;
  box-sizing: border-box;
  cursor: pointer;
  line-height: 25px;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-comment {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-label {
  color: #eee;
  font-size: 13px;
  display: inline-block;
  vertical-align: middle;
  white-space: nowrap;
}
.dplayer-controller .dplayer-icons .dplayer-toggle {
  width: 32px;
  height: 20px;
  text-align: center;
  font-size: 0;
  vertical-align: middle;
  position: absolute;
  top: 5px;
  right: 10px;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input {
  max-height: 0;
  max-width: 0;
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label {
  display: inline-block;
  position: relative;
  box-shadow: #dfdfdf 0 0 0 0 inset;
  border: 1px solid #dfdfdf;
  height: 20px;
  width: 32px;
  border-radius: 10px;
  box-sizing: border-box;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label:before {
  content: "";
  position: absolute;
  display: block;
  height: 18px;
  width: 18px;
  top: 0;
  left: 0;
  border-radius: 15px;
  transition: 0.2s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label:after {
  content: "";
  position: absolute;
  display: block;
  left: 0;
  top: 0;
  border-radius: 15px;
  background: #fff;
  transition: 0.2s ease-in-out;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  height: 18px;
  width: 18px;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label {
  border-color: rgba(255, 255, 255, 0.5);
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:before {
  width: 30px;
  background: rgba(255, 255, 255, 0.5);
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:after {
  left: 12px;
}
.dplayer-mobile-play {
  display: none;
  width: 50px;
  height: 50px;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  box-sizing: border-box;
  bottom: 0;
  opacity: 0.8;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.dplayer-danmaku {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 22px;
  color: #fff;
}
.dplayer-danmaku .dplayer-danmaku-item {
  display: inline-block;
  pointer-events: none;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  cursor: default;
  white-space: nowrap;
  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
}
.dplayer-danmaku .dplayer-danmaku-item--demo {
  position: absolute;
  visibility: hidden;
}
.dplayer-danmaku .dplayer-danmaku-right {
  position: absolute;
  right: 0;
  transform: translateX(100%);
}
.dplayer-danmaku .dplayer-danmaku-right.dplayer-danmaku-move {
  will-change: transform;
  animation-name: 'danmaku';
  animation-timing-function: linear;
  animation-play-state: paused;
}
@keyframes danmaku {
  from {
    transform: translateX(100%);
  }
}
.dplayer-danmaku .dplayer-danmaku-top,
.dplayer-danmaku .dplayer-danmaku-bottom {
  position: absolute;
  width: 100%;
  text-align: center;
  visibility: hidden;
}
.dplayer-danmaku .dplayer-danmaku-top.dplayer-danmaku-move,
.dplayer-danmaku .dplayer-danmaku-bottom.dplayer-danmaku-move {
  will-change: visibility;
  animation-name: 'danmaku-center';
  animation-timing-function: linear;
  animation-play-state: paused;
}
@keyframes danmaku-center {
  from {
    visibility: visible;
  }
  to {
    visibility: visible;
  }
}
.dplayer-logo {
  pointer-events: none;
  position: absolute;
  left: 20px;
  top: 20px;
  max-width: 50px;
  max-height: 50px;
}
.dplayer-logo img {
  max-width: 100%;
  max-height: 100%;
  background: none;
}
.dplayer-menu {
  position: absolute;
  width: 170px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.85);
  padding: 5px 0;
  overflow: hidden;
  z-index: 3;
  display: none;
}
.dplayer-menu.dplayer-menu-show {
  display: block;
}
.dplayer-menu .dplayer-menu-item {
  height: 30px;
  box-sizing: border-box;
  cursor: pointer;
}
.dplayer-menu .dplayer-menu-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-menu .dplayer-menu-item a {
  padding: 0 10px;
  line-height: 30px;
  color: #eee;
  font-size: 13px;
  display: inline-block;
  vertical-align: middle;
  width: 100%;
  box-sizing: border-box;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.dplayer-menu .dplayer-menu-item a:hover {
  text-decoration: none;
}
.dplayer-notice-list {
  position: absolute;
  bottom: 60px;
  left: 20px;
}
.dplayer-notice-list .dplayer-notice {
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  color: #fff;
  display: table;
  pointer-events: none;
  animation: showNotice 0.3s ease 1 forwards;
}
.dplayer-notice-list .remove-notice {
  animation: removeNotice 0.3s ease 1 forwards;
}
@keyframes showNotice {
  from {
    padding: 0;
    font-size: 0;
    margin-top: 0;
  }
  to {
    padding: 7px 20px;
    font-size: 14px;
    margin-top: 5px;
  }
}
@keyframes removeNotice {
  0% {
    padding: 7px 20px;
    font-size: 14px;
    margin-top: 5px;
  }
  20% {
    font-size: 12px;
  }
  21% {
    font-size: 0;
    padding: 7px 10px;
  }
  100% {
    padding: 0;
    margin-top: 0;
    font-size: 0;
  }
}
.dplayer-subtitle {
  position: absolute;
  bottom: 40px;
  width: 90%;
  left: 5%;
  text-align: center;
  color: #fff;
  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
  font-size: 20px;
}
.dplayer-subtitle.dplayer-subtitle-hide {
  display: none;
}
.dplayer-mask {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: none;
}
.dplayer-mask.dplayer-mask-show {
  display: block;
}
.dplayer-video-wrap {
  position: relative;
  background: #000;
  font-size: 0;
  width: 100%;
  height: 100%;
}
.dplayer-video-wrap .dplayer-video {
  width: 100%;
  height: 100%;
  display: none;
}
.dplayer-video-wrap .dplayer-video-current {
  display: block;
}
.dplayer-video-wrap .dplayer-video-prepare {
  display: none;
}
.dplayer-info-panel {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 400px;
  background: rgba(28, 28, 28, 0.8);
  padding: 10px;
  color: #fff;
  font-size: 12px;
  border-radius: 2px;
}
.dplayer-info-panel-hide {
  display: none;
}
.dplayer-info-panel .dplayer-info-panel-close {
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 10px;
}
.dplayer-info-panel .dplayer-info-panel-item > span {
  display: inline-block;
  vertical-align: middle;
  line-height: 15px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.dplayer-info-panel .dplayer-info-panel-item-title {
  width: 100px;
  text-align: right;
  margin-right: 10px;
}
.dplayer-info-panel .dplayer-info-panel-item-data {
  width: 260px;
}
`,"",{version:3,sources:["webpack://./src/css/global.less","webpack://./src/css/index.less","webpack://./src/css/player.less","webpack://./src/css/balloon.less","webpack://./src/css/bezel.less","webpack://./src/css/notice.less","webpack://./src/css/controller.less","webpack://./src/css/danmaku.less","webpack://./src/css/logo.less","webpack://./src/css/menu.less","webpack://./src/css/subtitle.less","webpack://./src/css/video.less","webpack://./src/css/info-panel.less"],names:[],mappings:"AAAA;EACI;IACI,6CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;;IAEI,uCAAA;ECEN;AACF;ACzJA;EACI,kBAAA;EACA,gBAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;EACA,cAAA;AD2JJ;AC/JA;EAOQ,uBAAA;AD2JR;AClKA;EAWQ,WAAA;EACA,YAAA;AD0JR;ACtKA;;EAgBY,UAAA;AD0JZ;ACtJI;EACI,WAAA;EACA,YAAA;EACA,gBAAA;EACA,eAAA;EACA,eAAA;EACA,OAAA;EACA,MAAA;EACA,SAAA;EACA,UAAA;EACA,0BAAA;ADwJR;ACpJI;;;EAKY,aAAA;ADoJhB;ACzJI;EAUQ,aAAA;ADkJZ;AC5JI;EAcQ,aAAA;ADiJZ;AC7II;EAEQ,aAAA;AD8IZ;AChJI;EAKQ,aAAA;AD8IZ;ACnJI;EAQQ,aAAA;AD8IZ;ACtJI;EAWQ,aAAA;AD8IZ;AC3IQ;EAEQ,aAAA;AD4IhB;ACvII;EAEQ,eAAA;ADwIZ;AC1II;EAKQ,cAAA;ADwIZ;ACpII;EAEQ,6BAAA;ADqIZ;AClIQ;EAAA;IAEQ,UAAA;EDoId;ECtIM;IAKQ,UAAA;EDoId;ECjIU;IAEQ,UAAA;EDkIlB;ECpIU;IAKQ,UAAA;EDkIlB;AACF;AC7HI;EAEQ,cAAA;AD8HZ;AC1HI;;;;EAIQ,4BAAA;AD4HZ;ACxHI;EACI,YAAA;AD0HR;AC3HI;EAIQ,UAAA;EACA,2BAAA;AD0HZ;AC/HI;EAQQ,UAAA;EACA,2BAAA;AD0HZ;ACvHI;EAEQ,UAAA;ADwHZ;AC1HI;EAKQ,UAAA;ADwHZ;ACrHI;EAKI,sBAAA;EACA,uBAAA;ADuHR;AC7HI;EACI,eAAA;EACA,eAAA;EACA,OAAA;EACA,MAAA;ADyHR;ACrHI;;;;;EAOY,aAAA;ADqHhB;AC5HI;EAUY,gBAAA;EACA,qBAAA;ADqHhB;AChII;EAgBQ,aAAA;ADmHZ;AChHQ;EAEQ,aAAA;ADiHhB;ACtII;EA0BQ,cAAA;AD+GZ;ACzGA;EACI,eAAA;EACA,MAAA;EACA,OAAA;EACA,SAAA;EACA,UAAA;AD2GJ;AElSA;EACI,aAAA;AFoSJ;AEjSA;EACI,oBAAA;EACA,iCAAA;AFmSJ;AEhSA;EACI,gBAAA;AFkSJ;AG9SA;EACI,kBAAA;EACA,OAAA;EACA,QAAA;EACA,MAAA;EACA,SAAA;EACA,eAAA;EACA,WAAA;EACA,oBAAA;AHgTJ;AGxTA;EAUQ,kBAAA;EACA,QAAA;EACA,SAAA;EACA,uBAAA;EACA,YAAA;EACA,WAAA;EACA,aAAA;EACA,sBAAA;EACA,8BAAA;EACA,kBAAA;EACA,UAAA;EACA,oBAAA;AHiTR;AGhTQ;EACI,iCAAA;AHkTZ;AGhTQ;EACI;IACI,UAAA;IACA,mBAAA;EHkTd;EGhTU;IACI,UAAA;IACA,mBAAA;EHkTd;AACF;AGnVA;EAqCQ,kBAAA;EACA,QAAA;EACA,gBAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,iBAAA;EACA,0CAAA;AHiTR;AG7VA;EA+CQ,aAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,uBAAA;EACA,YAAA;EACA,WAAA;EACA,oBAAA;AHiTR;AGvWA;EAwDY,aAAA;AHkTZ;AG1WA;EA2DY,uDAAA;EACA,UAAA;EACA,yBAAA;AHkTZ;AI/WC;EDgEmB,qBAAA;AHkTpB;AIlXC;EDgEmB,qBAAA;AHqTpB;AIrXC;EDgEmB,qBAAA;AHwTpB;AIxXC;EDgEmB,qBAAA;AH2TpB;AI3XC;EDgEmB,qBAAA;AH8TpB;AI9XC;EDgEmB,qBAAA;AHiUpB;AIjYC;EDgEmB,qBAAA;AHoUpB;AGhUQ;EACI;IACI,YAAA;IACA,0BAAA;EHkUd;EGhUU;IACI,aAAA;IACA,0BAAA;EHkUd;EGhUU;IACI,aAAA;IACA,4BAAA;EHkUd;AACF;AKlZA;EACI,mEAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,SAAA;EACA,yBAAA;ALoZJ;AKjZA;EACI,kBAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,YAAA;EACA,eAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;EACA,yBAAA;ALmZJ;AKlZI;EAEQ,aAAA;ALmZZ;AKrZI;EAKQ,cAAA;ALmZZ;AKjaA;EAkBQ,cAAA;EACA,eAAA;EACA,kBAAA;EACA,YAAA;EACA,wBAAA;EACA,WAAA;ALkZR;AKjZQ;EAEQ,mBAAA;ALkZhB;AKpZQ;EAKQ,cAAA;EACA,UAAA;EACA,2BAAA;EACA,QAAA;EACA,WAAA;ALkZhB;AKnbA;EAqCY,WAAA;EACA,kBAAA;EACA,QAAA;EACA,UAAA;EACA,WAAA;EACA,kBAAA;EACA,sBAAA;EACA,kBAAA;EACA,2BAAA;EACA,gCAAA;ALiZZ;AKhZY;EAEQ,cAAA;ALiZpB;AK/YgB;EACI,UAAA;ALiZpB;AK/YgB;EACI,UAAA;ALiZpB;AKxcA;EA2DgB,aAAA;EACA,kBAAA;EACA,SAAA;EACA,UAAA;EACA,gBAAA;EACA,qCAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,mBAAA;EACA,2BAAA;ALgZhB;AKrdA;EAyEY,kBAAA;EACA,gBAAA;EACA,oBAAA;EACA,aAAA;EACA,6BAAA;AL+YZ;AK5dA;EAgFY,kBAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;EACA,oBAAA;AL+YZ;AKneA;EA0FY,kBAAA;EACA,SAAA;EACA,UAAA;EACA,kBAAA;EACA,gBAAA;EACA,qCAAA;EACA,WAAA;EACA,eAAA;EACA,kBAAA;EACA,UAAA;EACA,oCAAA;EACA,iBAAA;EACA,kBAAA;EACA,UAAA;EACA,oBAAA;AL4YZ;AK7ZY;EACI,UAAA;AL+ZhB;AKvfA;EA2GY,kBAAA;EACA,WAAA;EACA,WAAA;EACA,oCAAA;EACA,eAAA;AL+YZ;AK9fA;EAiHgB,kBAAA;EACA,OAAA;EACA,MAAA;EACA,SAAA;EACA,oCAAA;EACA,WAAA;EACA,yBAAA;EACA,kBAAA;ALgZhB;AKxgBA;EA2HgB,kBAAA;EACA,OAAA;EACA,MAAA;EACA,SAAA;EACA,WAAA;EACA,kBAAA;ALgZhB;AKhhBA;EAkIoB,kBAAA;EACA,MAAA;EACA,UAAA;EACA,gBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,gCAAA;EACA,mBAAA;ALiZpB;AK7hBA;EAkJQ,YAAA;EACA,kBAAA;EACA,SAAA;AL8YR;AK7YQ;EACI,aAAA;EACA,kBAAA;EACA,gCAAA;EACA,UAAA;EACA,YAAA;EACA,SAAA;EACA,UAAA;EACA,WAAA;EACA,WAAA;AL+YZ;AKxZQ;EAWQ,YAAA;ALgZhB;AK3ZQ;EAcQ,kBAAA;EACA,OAAA;EACA,MAAA;ALgZhB;AKhaQ;EAmBQ,kBAAA;EACA,QAAA;EACA,MAAA;ALgZhB;AKraQ;EAwBQ,kBAAA;EACA,iCAAA;EACA,YAAA;EACA,OAAA;EACA,uCAAA;EACA,kBAAA;EACA,uBAAA;EACA,eAAA;EACA,YAAA;EACA,gCAAA;EACA,mBAAA;ALgZhB;AK/YgB;EACI,mBAAA;ALiZpB;AKrbQ;EAuCY,aAAA;ALiZpB;AKxbQ;EA0CY,eAAA;ALiZpB;AK3bQ;EA6CY,eAAA;EACA,WAAA;EACA,iBAAA;ALiZpB;AKhcQ;EAkDY,YAAA;ALiZpB;AKncQ;EAoDgB,kBAAA;ALkZxB;AK/YwB;EAEQ,0BAAA;ALgZhC;AK7YwB;EAEQ,0BAAA;AL8YhC;AK5cQ;EAmEgB,UAAA;EACA,gBAAA;EACA,iBAAA;EACA,qBAAA;EACA,eAAA;EACA,WAAA;EACA,sBAAA;EACA,kBAAA;EACA,sBAAA;EACA,kBAAA;EACA,eAAA;AL4YxB;AKzdQ;EAgFgB,mBAAA;EACA,cAAA;AL4YxB;AK7dQ;EAqFY,YAAA;AL2YpB;AKheQ;EAuFgB,YAAA;EACA,YAAA;EACA,qBAAA;AL4YxB;AKreQ;EA4FgB,WAAA;EACA,YAAA;EACA,qBAAA;EACA,kBAAA;EACA,sBAAA;EACA,eAAA;AL4YxB;AK3YwB;EACI,0CAAA;AL6Y5B;AKhfQ;EAyGQ,aAAA;EACA,YAAA;EACA,iBAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,gBAAA;EACA,SAAA;EACA,YAAA;EACA,sBAAA;EACA,WAAA;EACA,WAAA;AL0YhB;AKzYgB;EACI,WAAA;EACA,YAAA;AL2YpB;AK7YgB;EACI,WAAA;EACA,YAAA;AL2YpB;AKzYgB;EACI,aAAA;AL2YpB;AKvYQ;EAEQ,YAAA;ALwYhB;AKrYQ;EACI,WAAA;ALuYZ;AKxYQ;EAGQ,YAAA;ALwYhB;AKpqBA;;EAiSY,iBAAA;EACA,WAAA;EACA,uCAAA;EACA,sBAAA;EACA,eAAA;EACA,eAAA;ALuYZ;AK7qBA;EAySY,qBAAA;EACA,UAAA;EACA,WAAA;EACA,kBAAA;EACA,iBAAA;EACA,WAAA;EACA,kBAAA;ALuYZ;AKtrBA;EAkTY,WAAA;EACA,YAAA;EACA,YAAA;EACA,6BAAA;EACA,aAAA;EACA,eAAA;EACA,sBAAA;EACA,sBAAA;EACA,qBAAA;ALuYZ;AKjsBA;EA4TgB,gCAAA;EACA,YAAA;ALwYhB;AKtYY;EAEQ,UAAA;ALuYpB;AKpYY;EACI,WAAA;EACA,WAAA;EACA,iBAAA;EACA,eAAA;ALsYhB;AKpYY;EACI,qBAAA;ALsYhB;AKpYY;EACI,kBAAA;ALsYhB;AKpYY;EACI,WAAA;ALsYhB;AKvtBA;EAqVY,kBAAA;EACA,qBAAA;EACA,eAAA;EACA,YAAA;ALqYZ;AKpYY;EAEQ,WAAA;ALqYpB;AKvYY;EAKQ,mBAAA;ALqYpB;AKlYY;EAEQ,WAAA;ALmYpB;AKrYY;EAKQ,mBAAA;ALmYpB;AKzuBA;EA0WgB,qBAAA;EACA,qBAAA;EACA,sBAAA;EACA,YAAA;ALkYhB;AK/uBA;EA+WoB,kBAAA;EACA,SAAA;EACA,QAAA;EACA,WAAA;EACA,gBAAA;EACA,gCAAA;ALmYpB;AKvvBA;EAsXwB,kBAAA;EACA,SAAA;EACA,OAAA;EACA,YAAA;EACA,yBAAA;EACA,kBAAA;ALoYxB;AK/vBA;EA6X4B,kBAAA;EACA,MAAA;EACA,UAAA;EACA,gBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,gCAAA;EACA,mBAAA;ALqY5B;AK5wBA;EA8YY,qBAAA;EACA,YAAA;ALiYZ;AKhxBA;EAkZY,qBAAA;EACA,YAAA;ALiYZ;AKpxBA;EAqZgB,kBAAA;EACA,QAAA;EACA,YAAA;EACA,mBAAA;EACA,uBAAA;EAAA,kBAAA;EACA,gBAAA;EACA,gBAAA;EACA,kBAAA;EACA,iCAAA;EACA,cAAA;EACA,gCAAA;EACA,cAAA;EACA,UAAA;ALkYhB;AKjYgB;EACI,cAAA;ALmYpB;AKjYgB;EACI,mBAAA;ALmYpB;AKzyBA;EA0agB,YAAA;EACA,iBAAA;EACA,sBAAA;EACA,eAAA;EACA,kBAAA;ALkYhB;AKjYgB;EACI,0CAAA;ALmYpB;AKnzBA;EAqbY,qBAAA;EACA,YAAA;ALiYZ;AKvzBA;EAwbgB,kBAAA;EACA,QAAA;EACA,YAAA;EACA,mBAAA;EACA,YAAA;EACA,kBAAA;EACA,iCAAA;EACA,cAAA;EACA,gCAAA;EACA,gBAAA;EACA,UAAA;ALkYhB;AKjYgB;EACI,aAAA;ALmYpB;AKlYoB;EACI,cAAA;ALoYxB;AKjYgB;EACI,mBAAA;ALmYpB;AKjYgB;EACI,WAAA;EACA,kBAAA;ALmYpB;AKjYgB;EAEQ,aAAA;ALkYxB;AKpYgB;EAKQ,cAAA;ALkYxB;AKv1BA;;EA2dgB,YAAA;EACA,iBAAA;EACA,sBAAA;EACA,eAAA;EACA,kBAAA;ALgYhB;AK/XgB;;EACI,0CAAA;ALkYpB;AKn2BA;EAqegB,cAAA;ALiYhB;AKt2BA;EAueoB,eAAA;EACA,eAAA;ALkYpB;AKhYgB;EAEQ,aAAA;ALiYxB;AKnYgB;EAKQ,qBAAA;ALiYxB;AK9XgB;EAEQ,aAAA;AL+XxB;AKjYgB;EAKQ,qBAAA;AL+XxB;AKt3BA;EA2foB,eAAA;EACA,sBAAA;EACA,aAAA;EACA,sBAAA;EACA,YAAA;EACA,WAAA;AL8XpB;AK93BA;EAkgBwB,kBAAA;EACA,UAAA;EACA,WAAA;EACA,WAAA;EACA,gBAAA;EACA,gCAAA;AL+XxB;AKt4BA;EAygB4B,kBAAA;EACA,SAAA;EACA,OAAA;EACA,YAAA;EACA,yBAAA;EACA,gBAAA;EACA,kBAAA;ALgY5B;AK/4BA;EAihBgC,kBAAA;EACA,MAAA;EACA,UAAA;EACA,gBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,gCAAA;EACA,gBAAA;ALiYhC;AK55BA;EAmiBY,qBAAA;EACA,YAAA;EACA,kBAAA;AL4XZ;AK3XY;EAEQ,cAAA;AL4XpB;AKp6BA;EA4iBgB,kBAAA;EACA,UAAA;EACA,UAAA;EACA,aAAA;AL2XhB;AK16BA;EAmjBY,kBAAA;EACA,qBAAA;EACA,YAAA;EACA,UAAA;AL0XZ;AKzXY;EAEQ,cAAA;AL0XpB;AK5XY;EAKQ,cAAA;AL0XpB;AKt7BA;EAgkBgB,aAAA;EACA,kBAAA;EACA,YAAA;EACA,WAAA;EACA,WAAA;EACA,oBAAA;ALyXhB;AK97BA;EAwkBgB,aAAA;EACA,eAAA;EACA,WAAA;EACA,kBAAA;EACA,iCAAA;EACA,cAAA;EACA,gCAAA;EACA,gBAAA;EACA,WAAA;EACA,kBAAA;ALyXhB;AK18BA;EAolBgB,YAAA;EACA,sBAAA;EACA,eAAA;EACA,iBAAA;ALyXhB;AKxXgB;EACI,0CAAA;AL0XpB;AKn9BA;EA8lBY,qBAAA;EACA,YAAA;ALwXZ;AKv9BA;EAkmBY,WAAA;EACA,eAAA;EACA,qBAAA;EACA,sBAAA;EACA,mBAAA;ALwXZ;AK99BA;EAymBY,WAAA;EACA,YAAA;EACA,kBAAA;EACA,YAAA;EACA,sBAAA;EACA,kBAAA;EACA,QAAA;EACA,WAAA;ALwXZ;AKx+BA;EAknBgB,aAAA;EACA,YAAA;EACA,aAAA;ALyXhB;AK7+BA;EAunBgB,qBAAA;EACA,kBAAA;EACA,iCAAA;EACA,yBAAA;EACA,YAAA;EACA,WAAA;EACA,mBAAA;EACA,sBAAA;EACA,eAAA;EACA,4BAAA;ALyXhB;AKz/BA;EAmoBgB,WAAA;EACA,kBAAA;EACA,cAAA;EACA,YAAA;EACA,WAAA;EACA,MAAA;EACA,OAAA;EACA,mBAAA;EACA,4BAAA;ALyXhB;AKpgCA;EA8oBgB,WAAA;EACA,kBAAA;EACA,cAAA;EACA,OAAA;EACA,MAAA;EACA,mBAAA;EACA,gBAAA;EACA,4BAAA;EACA,wCAAA;EACA,YAAA;EACA,WAAA;ALyXhB;AKjhCA;EA2pBgB,sCAAA;ALyXhB;AKphCA;EA8pBgB,WAAA;EACA,oCAAA;ALyXhB;AKxhCA;EAkqBgB,UAAA;ALyXhB;AKnXA;EACI,aAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;EACA,6BAAA;EACA,aAAA;EACA,eAAA;EACA,sBAAA;EAEA,SAAA;EACA,YAAA;EACA,kBAAA;EACA,SAAA;EACA,QAAA;EACA,gCAAA;ALoXJ;AMpjCA;EACI,kBAAA;EACA,OAAA;EACA,QAAA;EACA,MAAA;EACA,SAAA;EACA,eAAA;EACA,WAAA;ANsjCJ;AM7jCA;EASQ,qBAAA;EACA,oBAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;EACA,eAAA;EACA,mBAAA;EACA,iDAAA;ANujCR;AMtjCQ;EACI,kBAAA;EACA,kBAAA;ANwjCZ;AMzkCA;EAqBQ,kBAAA;EACA,QAAA;EACA,2BAAA;ANujCR;AMtjCQ;EACI,sBAAA;EACA,yBAAA;EACA,iCAAA;EACA,4BAAA;ANwjCZ;AMrjCI;EACI;IACI,2BAAA;ENujCV;AACF;AMzlCA;;EAsCQ,kBAAA;EACA,WAAA;EACA,kBAAA;EACA,kBAAA;ANujCR;AMtjCQ;;EACI,uBAAA;EACA,gCAAA;EACA,iCAAA;EACA,4BAAA;ANyjCZ;AMtjCI;EACI;IACI,mBAAA;ENwjCV;EMtjCM;IACI,mBAAA;ENwjCV;AACF;AO/mCA;EACI,oBAAA;EACA,kBAAA;EACA,UAAA;EACA,SAAA;EACA,eAAA;EACA,gBAAA;APinCJ;AOvnCA;EAQQ,eAAA;EACA,gBAAA;EACA,gBAAA;APknCR;AQ5nCA;EACI,kBAAA;EACA,YAAA;EACA,kBAAA;EACA,kCAAA;EACA,cAAA;EACA,gBAAA;EACA,UAAA;EACA,aAAA;AR8nCJ;AQ7nCI;EACI,cAAA;AR+nCR;AQzoCA;EAaQ,YAAA;EACA,sBAAA;EACA,eAAA;AR+nCR;AQ9nCQ;EACI,0CAAA;ARgoCZ;AQjpCA;EAqBY,eAAA;EACA,iBAAA;EACA,WAAA;EACA,eAAA;EACA,qBAAA;EACA,sBAAA;EACA,WAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,gBAAA;AR+nCZ;AQ9nCY;EACI,qBAAA;ARgoChB;AIjqCA;EACI,kBAAA;EACA,YAAA;EACA,UAAA;AJmqCJ;AItqCA;EAMQ,kBAAA;EACA,iCAAA;EACA,gCAAA;EACA,gBAAA;EACA,WAAA;EACA,cAAA;EACA,oBAAA;EACA,0CAAA;AJmqCR;AIhrCA;EAiBQ,4CAAA;AJkqCR;AI9pCA;EACI;IACI,UAAA;IACA,YAAA;IACA,aAAA;EJgqCN;EI9pCE;IACI,iBAAA;IACA,eAAA;IACA,eAAA;EJgqCN;AACF;AI7pCA;EACI;IACI,iBAAA;IACA,eAAA;IACA,eAAA;EJ+pCN;EI7pCE;IACI,eAAA;EJ+pCN;EI7pCE;IACI,YAAA;IACA,iBAAA;EJ+pCN;EI7pCE;IACI,UAAA;IACA,aAAA;IACA,YAAA;EJ+pCN;AACF;ASltCA;EACI,kBAAA;EACA,YAAA;EACA,UAAA;EACA,QAAA;EACA,kBAAA;EACA,WAAA;EACA,iDAAA;EACA,eAAA;ATotCJ;ASntCI;EACI,aAAA;ATqtCR;AU/tCA;EACI,kBAAA;EACA,MAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,UAAA;EACA,aAAA;AViuCJ;AUhuCI;EACI,cAAA;AVkuCR;AU9tCA;EACI,kBAAA;EACA,gBAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;AVguCJ;AUruCA;EAOQ,WAAA;EACA,YAAA;EACA,aAAA;AViuCR;AU1uCA;EAYQ,cAAA;AViuCR;AU7uCA;EAeQ,aAAA;AViuCR;AW7vCA;EACI,kBAAA;EACA,SAAA;EACA,UAAA;EACA,YAAA;EACA,iCAAA;EACA,aAAA;EACA,WAAA;EACA,eAAA;EACA,kBAAA;AX+vCJ;AW7vCI;EACI,aAAA;AX+vCR;AW3wCA;EAgBQ,eAAA;EACA,kBAAA;EACA,WAAA;EACA,SAAA;AX8vCR;AW1vCQ;EACI,qBAAA;EACA,sBAAA;EACA,iBAAA;EACA,mBAAA;EACA,uBAAA;EACA,gBAAA;AX4vCZ;AWzxCA;EAkCQ,YAAA;EACA,iBAAA;EACA,kBAAA;AX0vCR;AW9xCA;EAwCQ,YAAA;AXyvCR",sourcesContent:[`@keyframes my-face {
    2% {
        transform: translate(0, 1.5px) rotate(1.5deg);
    }
    4% {
        transform: translate(0, -1.5px) rotate(-0.5deg);
    }
    6% {
        transform: translate(0, 1.5px) rotate(-1.5deg);
    }
    8% {
        transform: translate(0, -1.5px) rotate(-1.5deg);
    }
    10% {
        transform: translate(0, 2.5px) rotate(1.5deg);
    }
    12% {
        transform: translate(0, -0.5px) rotate(1.5deg);
    }
    14% {
        transform: translate(0, -1.5px) rotate(1.5deg);
    }
    16% {
        transform: translate(0, -0.5px) rotate(-1.5deg);
    }
    18% {
        transform: translate(0, 0.5px) rotate(-1.5deg);
    }
    20% {
        transform: translate(0, -1.5px) rotate(2.5deg);
    }
    22% {
        transform: translate(0, 0.5px) rotate(-1.5deg);
    }
    24% {
        transform: translate(0, 1.5px) rotate(1.5deg);
    }
    26% {
        transform: translate(0, 0.5px) rotate(0.5deg);
    }
    28% {
        transform: translate(0, 0.5px) rotate(1.5deg);
    }
    30% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    32% {
        transform: translate(0, 1.5px) rotate(-0.5deg);
    }
    34% {
        transform: translate(0, 1.5px) rotate(-0.5deg);
    }
    36% {
        transform: translate(0, -1.5px) rotate(2.5deg);
    }
    38% {
        transform: translate(0, 1.5px) rotate(-1.5deg);
    }
    40% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    42% {
        transform: translate(0, 2.5px) rotate(-1.5deg);
    }
    44% {
        transform: translate(0, 1.5px) rotate(0.5deg);
    }
    46% {
        transform: translate(0, -1.5px) rotate(2.5deg);
    }
    48% {
        transform: translate(0, -0.5px) rotate(0.5deg);
    }
    50% {
        transform: translate(0, 0.5px) rotate(0.5deg);
    }
    52% {
        transform: translate(0, 2.5px) rotate(2.5deg);
    }
    54% {
        transform: translate(0, -1.5px) rotate(1.5deg);
    }
    56% {
        transform: translate(0, 2.5px) rotate(2.5deg);
    }
    58% {
        transform: translate(0, 0.5px) rotate(2.5deg);
    }
    60% {
        transform: translate(0, 2.5px) rotate(2.5deg);
    }
    62% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    64% {
        transform: translate(0, -0.5px) rotate(1.5deg);
    }
    66% {
        transform: translate(0, 1.5px) rotate(-0.5deg);
    }
    68% {
        transform: translate(0, -1.5px) rotate(-0.5deg);
    }
    70% {
        transform: translate(0, 1.5px) rotate(0.5deg);
    }
    72% {
        transform: translate(0, 2.5px) rotate(1.5deg);
    }
    74% {
        transform: translate(0, -0.5px) rotate(0.5deg);
    }
    76% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    78% {
        transform: translate(0, -0.5px) rotate(1.5deg);
    }
    80% {
        transform: translate(0, 1.5px) rotate(1.5deg);
    }
    82% {
        transform: translate(0, -0.5px) rotate(0.5deg);
    }
    84% {
        transform: translate(0, 1.5px) rotate(2.5deg);
    }
    86% {
        transform: translate(0, -1.5px) rotate(-1.5deg);
    }
    88% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    90% {
        transform: translate(0, 2.5px) rotate(-0.5deg);
    }
    92% {
        transform: translate(0, 0.5px) rotate(-0.5deg);
    }
    94% {
        transform: translate(0, 2.5px) rotate(0.5deg);
    }
    96% {
        transform: translate(0, -0.5px) rotate(1.5deg);
    }
    98% {
        transform: translate(0, -1.5px) rotate(-0.5deg);
    }
    0%,
    100% {
        transform: translate(0, 0) rotate(0deg);
    }
}`,`@import '../../node_modules/balloon-css/balloon.css';
@keyframes my-face {
  2% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  4% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  6% {
    transform: translate(0, 1.5px) rotate(-1.5deg);
  }
  8% {
    transform: translate(0, -1.5px) rotate(-1.5deg);
  }
  10% {
    transform: translate(0, 2.5px) rotate(1.5deg);
  }
  12% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  14% {
    transform: translate(0, -1.5px) rotate(1.5deg);
  }
  16% {
    transform: translate(0, -0.5px) rotate(-1.5deg);
  }
  18% {
    transform: translate(0, 0.5px) rotate(-1.5deg);
  }
  20% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  22% {
    transform: translate(0, 0.5px) rotate(-1.5deg);
  }
  24% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  26% {
    transform: translate(0, 0.5px) rotate(0.5deg);
  }
  28% {
    transform: translate(0, 0.5px) rotate(1.5deg);
  }
  30% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  32% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  34% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  36% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  38% {
    transform: translate(0, 1.5px) rotate(-1.5deg);
  }
  40% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  42% {
    transform: translate(0, 2.5px) rotate(-1.5deg);
  }
  44% {
    transform: translate(0, 1.5px) rotate(0.5deg);
  }
  46% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  48% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  50% {
    transform: translate(0, 0.5px) rotate(0.5deg);
  }
  52% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  54% {
    transform: translate(0, -1.5px) rotate(1.5deg);
  }
  56% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  58% {
    transform: translate(0, 0.5px) rotate(2.5deg);
  }
  60% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  62% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  64% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  66% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  68% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  70% {
    transform: translate(0, 1.5px) rotate(0.5deg);
  }
  72% {
    transform: translate(0, 2.5px) rotate(1.5deg);
  }
  74% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  76% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  78% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  80% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  82% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  84% {
    transform: translate(0, 1.5px) rotate(2.5deg);
  }
  86% {
    transform: translate(0, -1.5px) rotate(-1.5deg);
  }
  88% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  90% {
    transform: translate(0, 2.5px) rotate(-0.5deg);
  }
  92% {
    transform: translate(0, 0.5px) rotate(-0.5deg);
  }
  94% {
    transform: translate(0, 2.5px) rotate(0.5deg);
  }
  96% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  98% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
}
.dplayer {
  position: relative;
  overflow: hidden;
  user-select: none;
  line-height: 1;
}
.dplayer * {
  box-sizing: content-box;
}
.dplayer svg {
  width: 100%;
  height: 100%;
}
.dplayer svg path,
.dplayer svg circle {
  fill: #fff;
}
.dplayer:-webkit-full-screen {
  width: 100%;
  height: 100%;
  background: #000;
  position: fixed;
  z-index: 100000;
  left: 0;
  top: 0;
  margin: 0;
  padding: 0;
  transform: translate(0, 0);
}
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-showdan,
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danmaku,
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danunlimit {
  display: none;
}
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-comment {
  display: none;
}
.dplayer.dplayer-no-danmaku .dplayer-danmaku {
  display: none;
}
.dplayer.dplayer-live .dplayer-time {
  display: none;
}
.dplayer.dplayer-live .dplayer-bar-wrap {
  display: none;
}
.dplayer.dplayer-live .dplayer-setting-speed {
  display: none;
}
.dplayer.dplayer-live .dplayer-setting-loop {
  display: none;
}
.dplayer.dplayer-live.dplayer-no-danmaku .dplayer-setting {
  display: none;
}
.dplayer.dplayer-arrow .dplayer-danmaku {
  font-size: 18px;
}
.dplayer.dplayer-arrow .dplayer-icon {
  margin: 0 -3px;
}
.dplayer.dplayer-playing .dplayer-danmaku .dplayer-danmaku-move {
  animation-play-state: running;
}
@media (min-width: 900px) {
  .dplayer.dplayer-playing .dplayer-controller-mask {
    opacity: 0;
  }
  .dplayer.dplayer-playing .dplayer-controller {
    opacity: 0;
  }
  .dplayer.dplayer-playing:hover .dplayer-controller-mask {
    opacity: 1;
  }
  .dplayer.dplayer-playing:hover .dplayer-controller {
    opacity: 1;
  }
}
.dplayer.dplayer-loading .dplayer-bezel .diplayer-loading-icon {
  display: block;
}
.dplayer.dplayer-loading .dplayer-danmaku,
.dplayer.dplayer-paused .dplayer-danmaku,
.dplayer.dplayer-loading .dplayer-danmaku-move,
.dplayer.dplayer-paused .dplayer-danmaku-move {
  animation-play-state: paused;
}
.dplayer.dplayer-hide-controller {
  cursor: none;
}
.dplayer.dplayer-hide-controller .dplayer-controller-mask {
  opacity: 0;
  transform: translateY(100%);
}
.dplayer.dplayer-hide-controller .dplayer-controller {
  opacity: 0;
  transform: translateY(100%);
}
.dplayer.dplayer-show-controller .dplayer-controller-mask {
  opacity: 1;
}
.dplayer.dplayer-show-controller .dplayer-controller {
  opacity: 1;
}
.dplayer.dplayer-fulled {
  position: fixed;
  z-index: 100000;
  left: 0;
  top: 0;
  width: 100% !important;
  height: 100% !important;
}
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-volume,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-camera-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-airplay-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-chromecast-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-play-icon {
  display: none;
}
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {
  position: static;
  display: inline-block;
}
.dplayer.dplayer-mobile .dplayer-bar-time {
  display: none;
}
.dplayer.dplayer-mobile.dplayer-hide-controller .dplayer-mobile-play {
  display: none;
}
.dplayer.dplayer-mobile .dplayer-mobile-play {
  display: block;
}
.dplayer-web-fullscreen-fix {
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
}
[data-balloon]:before {
  display: none;
}
[data-balloon]:after {
  padding: 0.3em 0.7em;
  background: rgba(17, 17, 17, 0.7);
}
[data-balloon][data-balloon-pos="up"]:after {
  margin-bottom: 0;
}
.dplayer-bezel {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 22px;
  color: #fff;
  pointer-events: none;
}
.dplayer-bezel .dplayer-bezel-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -26px 0 0 -26px;
  height: 52px;
  width: 52px;
  padding: 12px;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
}
.dplayer-bezel .dplayer-bezel-icon.dplayer-bezel-transition {
  animation: bezel-hide 0.5s linear;
}
@keyframes bezel-hide {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(2);
  }
}
.dplayer-bezel .dplayer-danloading {
  position: absolute;
  top: 50%;
  margin-top: -7px;
  width: 100%;
  text-align: center;
  font-size: 14px;
  line-height: 14px;
  animation: my-face 5s infinite ease-in-out;
}
.dplayer-bezel .diplayer-loading-icon {
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -18px 0 0 -18px;
  height: 36px;
  width: 36px;
  pointer-events: none;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-hide {
  display: none;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot {
  animation: diplayer-loading-dot-fade 0.8s ease infinite;
  opacity: 0;
  transform-origin: 4px 4px;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-1 {
  animation-delay: 0.1s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-2 {
  animation-delay: 0.2s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-3 {
  animation-delay: 0.3s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-4 {
  animation-delay: 0.4s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-5 {
  animation-delay: 0.5s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-6 {
  animation-delay: 0.6s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-7 {
  animation-delay: 0.7s;
}
@keyframes diplayer-loading-dot-fade {
  0% {
    opacity: 0.7;
    transform: scale(1.2, 1.2);
  }
  50% {
    opacity: 0.25;
    transform: scale(0.9, 0.9);
  }
  to {
    opacity: 0.25;
    transform: scale(0.85, 0.85);
  }
}
.dplayer-controller-mask {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==) repeat-x bottom;
  height: 98px;
  width: 100%;
  position: absolute;
  bottom: 0;
  transition: all 0.3s ease;
}
.dplayer-controller {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 41px;
  padding: 0 20px;
  user-select: none;
  transition: all 0.3s ease;
}
.dplayer-controller.dplayer-controller-comment .dplayer-icons {
  display: none;
}
.dplayer-controller.dplayer-controller-comment .dplayer-icons.dplayer-comment-box {
  display: block;
}
.dplayer-controller .dplayer-bar-wrap {
  padding: 5px 0;
  cursor: pointer;
  position: absolute;
  bottom: 33px;
  width: calc(100% - 40px);
  height: 3px;
}
.dplayer-controller .dplayer-bar-wrap:hover .dplayer-bar .dplayer-played .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-bar-wrap:hover .dplayer-highlight {
  display: block;
  width: 8px;
  transform: translateX(-4px);
  top: 4px;
  height: 40%;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight {
  z-index: 12;
  position: absolute;
  top: 5px;
  width: 6px;
  height: 20%;
  border-radius: 6px;
  background-color: #fff;
  text-align: center;
  transform: translateX(-3px);
  transition: all 0.2s ease-in-out;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover .dplayer-highlight-text {
  display: block;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-preview {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-time {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight .dplayer-highlight-text {
  display: none;
  position: absolute;
  left: 50%;
  top: -24px;
  padding: 5px 8px;
  background-color: rgba(0, 0, 0, 0.62);
  color: #fff;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  transform: translateX(-50%);
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview {
  position: absolute;
  background: #fff;
  pointer-events: none;
  display: none;
  background-size: 16000px 100%;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview-canvas {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time {
  position: absolute;
  left: 0px;
  top: -20px;
  border-radius: 4px;
  padding: 5px 7px;
  background-color: rgba(0, 0, 0, 0.62);
  color: #fff;
  font-size: 12px;
  text-align: center;
  opacity: 1;
  transition: opacity 0.1s ease-in-out;
  word-wrap: normal;
  word-break: normal;
  z-index: 2;
  pointer-events: none;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time.hidden {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar {
  position: relative;
  height: 3px;
  width: 100%;
  background: rgba(255, 255, 255, 0.2);
  cursor: pointer;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-loaded {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.4);
  height: 3px;
  transition: all 0.5s ease;
  will-change: width;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  height: 3px;
  will-change: width;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons {
  height: 38px;
  position: absolute;
  bottom: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box {
  display: none;
  position: absolute;
  transition: all 0.3s ease-in-out;
  z-index: 2;
  height: 38px;
  bottom: 0;
  left: 20px;
  right: 20px;
  color: #fff;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-icon {
  padding: 7px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-icon {
  position: absolute;
  left: 0;
  top: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-send-icon {
  position: absolute;
  right: 0;
  top: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box {
  position: absolute;
  background: rgba(28, 28, 28, 0.9);
  bottom: 41px;
  left: 0;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  padding: 10px 10px 16px;
  font-size: 14px;
  width: 204px;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box.dplayer-comment-setting-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box input[type=radio] {
  display: none;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box label {
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-title {
  font-size: 13px;
  color: #fff;
  line-height: 30px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type {
  font-size: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type .dplayer-comment-setting-title {
  margin-bottom: 6px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(2) span {
  border-radius: 4px 0 0 4px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(4) span {
  border-radius: 0 4px 4px 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type span {
  width: 33%;
  padding: 4px 6px;
  line-height: 16px;
  display: inline-block;
  font-size: 12px;
  color: #fff;
  border: 1px solid #fff;
  margin-right: -1px;
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type input:checked + span {
  background: #E4E4E6;
  color: #1c1c1c;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color {
  font-size: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color label {
  font-size: 0;
  padding: 6px;
  display: inline-block;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span {
  width: 22px;
  height: 22px;
  display: inline-block;
  border-radius: 50%;
  box-sizing: border-box;
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span:hover {
  animation: my-face 5s infinite ease-in-out;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input {
  outline: none;
  border: none;
  padding: 8px 31px;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  border-radius: 4px;
  background: none;
  margin: 0;
  height: 100%;
  box-sizing: border-box;
  width: 100%;
  color: #fff;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::placeholder {
  color: #fff;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::-ms-clear {
  display: none;
}
.dplayer-controller .dplayer-icons.dplayer-icons-left .dplayer-icon {
  padding: 7px;
}
.dplayer-controller .dplayer-icons.dplayer-icons-right {
  right: 20px;
}
.dplayer-controller .dplayer-icons.dplayer-icons-right .dplayer-icon {
  padding: 8px;
}
.dplayer-controller .dplayer-icons .dplayer-time,
.dplayer-controller .dplayer-icons .dplayer-live-badge {
  line-height: 38px;
  color: #eee;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  vertical-align: middle;
  font-size: 13px;
  cursor: default;
}
.dplayer-controller .dplayer-icons .dplayer-live-dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  vertical-align: 4%;
  margin-right: 5px;
  content: '';
  border-radius: 6px;
}
.dplayer-controller .dplayer-icons .dplayer-icon {
  width: 40px;
  height: 100%;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  vertical-align: middle;
  box-sizing: border-box;
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-icon .dplayer-icon-content {
  transition: all 0.2s ease-in-out;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons .dplayer-icon:hover .dplayer-icon-content {
  opacity: 1;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-quality-icon {
  color: #fff;
  width: auto;
  line-height: 22px;
  font-size: 14px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-comment-icon {
  padding: 10px 9px 9px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-setting-icon {
  padding-top: 8.5px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-volume-icon {
  width: 43px;
}
.dplayer-controller .dplayer-icons .dplayer-volume {
  position: relative;
  display: inline-block;
  cursor: pointer;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar {
  width: 45px;
}
.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar {
  width: 45px;
}
.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap {
  display: inline-block;
  margin: 0 10px 0 -5px;
  vertical-align: middle;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar {
  position: relative;
  top: 17px;
  width: 0;
  height: 3px;
  background: #aaa;
  transition: all 0.3s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  transition: all 0.1s ease;
  will-change: width;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons .dplayer-subtitle-btn {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box {
  position: absolute;
  right: 0;
  bottom: 50px;
  transform: scale(0);
  width: fit-content;
  max-width: 240px;
  min-width: 120px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 7px 0;
  transition: all 0.3s ease-in-out;
  overflow: auto;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-box-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item {
  height: 30px;
  padding: 5px 10px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-setting {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box {
  position: absolute;
  right: 0;
  bottom: 50px;
  transform: scale(0);
  width: 150px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 7px 0;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div.dplayer-setting-origin-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-narrow {
  width: 70px;
  text-align: center;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-origin-panel {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-speed-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item,
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item {
  height: 30px;
  padding: 5px 10px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item:hover,
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku {
  padding: 5px 0;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-label {
  padding: 0 10px;
  display: inline;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-label {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-danmaku-bar-wrap {
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-label {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-danmaku-bar-wrap {
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap {
  padding: 0 10px;
  box-sizing: border-box;
  display: none;
  vertical-align: middle;
  height: 100%;
  width: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar {
  position: relative;
  top: 8.5px;
  width: 100%;
  height: 3px;
  background: #fff;
  transition: all 0.3s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  transition: all 0.1s ease;
  background: #aaa;
  will-change: width;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  background: #aaa;
}
.dplayer-controller .dplayer-icons .dplayer-full {
  display: inline-block;
  height: 100%;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-full:hover .dplayer-full-in-icon {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {
  position: absolute;
  top: -30px;
  z-index: 1;
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-quality {
  position: relative;
  display: inline-block;
  height: 100%;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-list {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-mask {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-mask {
  display: none;
  position: absolute;
  bottom: 38px;
  left: -18px;
  width: 80px;
  padding-bottom: 12px;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-list {
  display: none;
  font-size: 12px;
  width: 80px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 5px 0;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  color: #fff;
  text-align: center;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item {
  height: 25px;
  box-sizing: border-box;
  cursor: pointer;
  line-height: 25px;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-comment {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-label {
  color: #eee;
  font-size: 13px;
  display: inline-block;
  vertical-align: middle;
  white-space: nowrap;
}
.dplayer-controller .dplayer-icons .dplayer-toggle {
  width: 32px;
  height: 20px;
  text-align: center;
  font-size: 0;
  vertical-align: middle;
  position: absolute;
  top: 5px;
  right: 10px;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input {
  max-height: 0;
  max-width: 0;
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label {
  display: inline-block;
  position: relative;
  box-shadow: #dfdfdf 0 0 0 0 inset;
  border: 1px solid #dfdfdf;
  height: 20px;
  width: 32px;
  border-radius: 10px;
  box-sizing: border-box;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label:before {
  content: "";
  position: absolute;
  display: block;
  height: 18px;
  width: 18px;
  top: 0;
  left: 0;
  border-radius: 15px;
  transition: 0.2s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label:after {
  content: "";
  position: absolute;
  display: block;
  left: 0;
  top: 0;
  border-radius: 15px;
  background: #fff;
  transition: 0.2s ease-in-out;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  height: 18px;
  width: 18px;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label {
  border-color: rgba(255, 255, 255, 0.5);
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:before {
  width: 30px;
  background: rgba(255, 255, 255, 0.5);
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:after {
  left: 12px;
}
.dplayer-mobile-play {
  display: none;
  width: 50px;
  height: 50px;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  box-sizing: border-box;
  bottom: 0;
  opacity: 0.8;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.dplayer-danmaku {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 22px;
  color: #fff;
}
.dplayer-danmaku .dplayer-danmaku-item {
  display: inline-block;
  pointer-events: none;
  user-select: none;
  cursor: default;
  white-space: nowrap;
  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
}
.dplayer-danmaku .dplayer-danmaku-item--demo {
  position: absolute;
  visibility: hidden;
}
.dplayer-danmaku .dplayer-danmaku-right {
  position: absolute;
  right: 0;
  transform: translateX(100%);
}
.dplayer-danmaku .dplayer-danmaku-right.dplayer-danmaku-move {
  will-change: transform;
  animation-name: 'danmaku';
  animation-timing-function: linear;
  animation-play-state: paused;
}
@keyframes danmaku {
  from {
    transform: translateX(100%);
  }
}
.dplayer-danmaku .dplayer-danmaku-top,
.dplayer-danmaku .dplayer-danmaku-bottom {
  position: absolute;
  width: 100%;
  text-align: center;
  visibility: hidden;
}
.dplayer-danmaku .dplayer-danmaku-top.dplayer-danmaku-move,
.dplayer-danmaku .dplayer-danmaku-bottom.dplayer-danmaku-move {
  will-change: visibility;
  animation-name: 'danmaku-center';
  animation-timing-function: linear;
  animation-play-state: paused;
}
@keyframes danmaku-center {
  from {
    visibility: visible;
  }
  to {
    visibility: visible;
  }
}
.dplayer-logo {
  pointer-events: none;
  position: absolute;
  left: 20px;
  top: 20px;
  max-width: 50px;
  max-height: 50px;
}
.dplayer-logo img {
  max-width: 100%;
  max-height: 100%;
  background: none;
}
.dplayer-menu {
  position: absolute;
  width: 170px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.85);
  padding: 5px 0;
  overflow: hidden;
  z-index: 3;
  display: none;
}
.dplayer-menu.dplayer-menu-show {
  display: block;
}
.dplayer-menu .dplayer-menu-item {
  height: 30px;
  box-sizing: border-box;
  cursor: pointer;
}
.dplayer-menu .dplayer-menu-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-menu .dplayer-menu-item a {
  padding: 0 10px;
  line-height: 30px;
  color: #eee;
  font-size: 13px;
  display: inline-block;
  vertical-align: middle;
  width: 100%;
  box-sizing: border-box;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.dplayer-menu .dplayer-menu-item a:hover {
  text-decoration: none;
}
.dplayer-notice-list {
  position: absolute;
  bottom: 60px;
  left: 20px;
}
.dplayer-notice-list .dplayer-notice {
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  color: #fff;
  display: table;
  pointer-events: none;
  animation: showNotice 0.3s ease 1 forwards;
}
.dplayer-notice-list .remove-notice {
  animation: removeNotice 0.3s ease 1 forwards;
}
@keyframes showNotice {
  from {
    padding: 0;
    font-size: 0;
    margin-top: 0;
  }
  to {
    padding: 7px 20px;
    font-size: 14px;
    margin-top: 5px;
  }
}
@keyframes removeNotice {
  0% {
    padding: 7px 20px;
    font-size: 14px;
    margin-top: 5px;
  }
  20% {
    font-size: 12px;
  }
  21% {
    font-size: 0;
    padding: 7px 10px;
  }
  100% {
    padding: 0;
    margin-top: 0;
    font-size: 0;
  }
}
.dplayer-subtitle {
  position: absolute;
  bottom: 40px;
  width: 90%;
  left: 5%;
  text-align: center;
  color: #fff;
  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
  font-size: 20px;
}
.dplayer-subtitle.dplayer-subtitle-hide {
  display: none;
}
.dplayer-mask {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: none;
}
.dplayer-mask.dplayer-mask-show {
  display: block;
}
.dplayer-video-wrap {
  position: relative;
  background: #000;
  font-size: 0;
  width: 100%;
  height: 100%;
}
.dplayer-video-wrap .dplayer-video {
  width: 100%;
  height: 100%;
  display: none;
}
.dplayer-video-wrap .dplayer-video-current {
  display: block;
}
.dplayer-video-wrap .dplayer-video-prepare {
  display: none;
}
.dplayer-info-panel {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 400px;
  background: rgba(28, 28, 28, 0.8);
  padding: 10px;
  color: #fff;
  font-size: 12px;
  border-radius: 2px;
}
.dplayer-info-panel-hide {
  display: none;
}
.dplayer-info-panel .dplayer-info-panel-close {
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 10px;
}
.dplayer-info-panel .dplayer-info-panel-item > span {
  display: inline-block;
  vertical-align: middle;
  line-height: 15px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.dplayer-info-panel .dplayer-info-panel-item-title {
  width: 100px;
  text-align: right;
  margin-right: 10px;
}
.dplayer-info-panel .dplayer-info-panel-item-data {
  width: 260px;
}
`,`.dplayer {
    position: relative;
    overflow: hidden;
    user-select: none;
    line-height: 1;

    * {
        box-sizing: content-box;
    }

    svg {
        width: 100%;
        height: 100%;

        path,
        circle {
            fill: #fff;
        }
    }

    &:-webkit-full-screen {
        width: 100%;
        height: 100%;
        background: #000;
        position: fixed;
        z-index: 100000;
        left: 0;
        top: 0;
        margin: 0;
        padding: 0;
        transform: translate(0, 0);
        
    }

    &.dplayer-no-danmaku {
        .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box {
            .dplayer-setting-showdan,
            .dplayer-setting-danmaku,
            .dplayer-setting-danunlimit {
                display: none;
            }
        }

        .dplayer-controller .dplayer-icons .dplayer-comment {
            display: none;
        }

        .dplayer-danmaku {
            display: none;
        }
    }

    &.dplayer-live {
        .dplayer-time {
            display: none;
        }
        .dplayer-bar-wrap {
            display: none;
        }
        .dplayer-setting-speed {
            display: none;
        }
        .dplayer-setting-loop {
            display: none;
        }

        &.dplayer-no-danmaku {
            .dplayer-setting {
                display: none;
            }
        }
    }

    &.dplayer-arrow {
        .dplayer-danmaku {
            font-size: 18px;
        }
        .dplayer-icon {
            margin: 0 -3px;
        }
    }

    &.dplayer-playing {
        .dplayer-danmaku .dplayer-danmaku-move {
            animation-play-state: running;
        }

        @media (min-width: 900px) {
            .dplayer-controller-mask {
                opacity: 0;
            }
            .dplayer-controller {
                opacity: 0;
            }

            &:hover {
                .dplayer-controller-mask {
                    opacity: 1;
                }
                .dplayer-controller {
                    opacity: 1;
                }
            }
        }
    }

    &.dplayer-loading {
        .dplayer-bezel .diplayer-loading-icon {
            display: block;
        }
    }

    &.dplayer-loading,
    &.dplayer-paused {
        .dplayer-danmaku,
        .dplayer-danmaku-move {
            animation-play-state: paused;
        }
    }

    &.dplayer-hide-controller {
        cursor: none;

        .dplayer-controller-mask {
            opacity: 0;
            transform: translateY(100%);
        }
        .dplayer-controller {
            opacity: 0;
            transform: translateY(100%);
        }
    }
    &.dplayer-show-controller {
        .dplayer-controller-mask {
            opacity: 1;
        }
        .dplayer-controller {
            opacity: 1;
        }
    }
    &.dplayer-fulled {
        position: fixed;
        z-index: 100000;
        left: 0;
        top: 0;
        width: 100% !important;
        height: 100% !important;
    }
    &.dplayer-mobile {
        .dplayer-controller .dplayer-icons {
            .dplayer-volume,
            .dplayer-camera-icon,
            .dplayer-airplay-icon,
            .dplayer-chromecast-icon,
            .dplayer-play-icon {
                display: none;
            }
            .dplayer-full .dplayer-full-in-icon {
                position: static;
                display: inline-block;
            }
        }

        .dplayer-bar-time {
            display: none;
        }

        &.dplayer-hide-controller {
            .dplayer-mobile-play {
                display: none;
            }
        }

        .dplayer-mobile-play {
            display: block;
        }
    }
}

// To hide scroll bar, apply this class to <body>
.dplayer-web-fullscreen-fix {
    position: fixed;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
}
`,`@import '../../node_modules/balloon-css/balloon.css';

[data-balloon]:before {
    display: none;
}

[data-balloon]:after {
    padding: 0.3em 0.7em;
    background: rgba(17, 17, 17, 0.7);
}

[data-balloon][data-balloon-pos="up"]:after {
    margin-bottom: 0;
}`,`.dplayer-bezel {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    font-size: 22px;
    color: #fff;
    pointer-events: none;
    .dplayer-bezel-icon {
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -26px 0 0 -26px;
        height: 52px;
        width: 52px;
        padding: 12px;
        box-sizing: border-box;
        background: rgba(0, 0, 0, .5);
        border-radius: 50%;
        opacity: 0;
        pointer-events: none;
        &.dplayer-bezel-transition {
            animation: bezel-hide .5s linear;
        }
        @keyframes bezel-hide {
            from {
                opacity: 1;
                transform: scale(1);
            }
            to {
                opacity: 0;
                transform: scale(2);
            }
        }
    }
    .dplayer-danloading {
        position: absolute;
        top: 50%;
        margin-top: -7px;
        width: 100%;
        text-align: center;
        font-size: 14px;
        line-height: 14px;
        animation: my-face 5s infinite ease-in-out;
    }
    .diplayer-loading-icon {
        display: none;
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -18px 0 0 -18px;
        height: 36px;
        width: 36px;
        pointer-events: none;
        .diplayer-loading-hide {
            display: none;
        }
        .diplayer-loading-dot {
            animation: diplayer-loading-dot-fade .8s ease infinite;
            opacity: 0;
            transform-origin: 4px 4px;
            each(range(7), {
                &.diplayer-loading-dot-@{value} {
                    animation-delay: (@value * 0.1s);
                }
            });
        }
        @keyframes diplayer-loading-dot-fade {
            0% {
                opacity: .7;
                transform: scale(1.2, 1.2)
            }
            50% {
                opacity: .25;
                transform: scale(.9, .9)
            }
            to {
                opacity: .25;
                transform: scale(.85, .85)
            }
        }
    }
}`,`.dplayer-notice-list{
    position: absolute;
    bottom: 60px;
    left: 20px;

    .dplayer-notice {
        border-radius: 2px;
        background: rgba(28, 28, 28, 0.9);
        transition: all .3s ease-in-out;
        overflow: hidden;
        color: #fff;
        display: table;
        pointer-events: none;
        animation: showNotice .3s ease 1 forwards;
    }

    .remove-notice{
        animation: removeNotice .3s ease 1 forwards;
    }
}

@keyframes showNotice {
    from {
        padding: 0;
        font-size: 0;
        margin-top: 0;
    }
    to {
        padding: 7px 20px;
        font-size: 14px;
        margin-top: 5px;
    }
}

@keyframes removeNotice {
    0%{
        padding: 7px 20px;
        font-size: 14px;
        margin-top: 5px;
    }
    20%{
        font-size: 12px;
    }
    21%{
        font-size: 0;
        padding: 7px 10px;
    }
    100%{
        padding: 0;
        margin-top: 0;
        font-size: 0;
    }
}
`,`.dplayer-controller-mask {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==) repeat-x bottom;
    height: 98px;
    width: 100%;
    position: absolute;
    bottom: 0;
    transition: all 0.3s ease;
}

.dplayer-controller {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 41px;
    padding: 0 20px;
    user-select: none;
    transition: all 0.3s ease;
    &.dplayer-controller-comment {
        .dplayer-icons {
            display: none;
        }
        .dplayer-icons.dplayer-comment-box {
            display: block;
        }
    }
    .dplayer-bar-wrap {
        padding: 5px 0;
        cursor: pointer;
        position: absolute;
        bottom: 33px;
        width: calc(100% - 40px);
        height: 3px;
        &:hover {
            .dplayer-bar .dplayer-played .dplayer-thumb {
                transform: scale(1);
            }
            .dplayer-highlight {
                display: block;
                width: 8px;
                transform: translateX(-4px);
                top: 4px;
                height: 40%;
            }
        }
        .dplayer-highlight {
            z-index: 12;
            position: absolute;
            top: 5px;
            width: 6px;
            height: 20%;
            border-radius: 6px;
            background-color: #fff;
            text-align: center;
            transform: translateX(-3px);
            transition: all .2s ease-in-out;
            &:hover {
                .dplayer-highlight-text {
                    display: block;
                }
                &~.dplayer-bar-preview {
                    opacity: 0;
                }
                &~.dplayer-bar-time {
                    opacity: 0;
                }
            }
            .dplayer-highlight-text {
                display: none;
                position: absolute;
                left: 50%;
                top: -24px;
                padding: 5px 8px;
                background-color: rgba(0, 0, 0, .62);
                color: #fff;
                border-radius: 4px;
                font-size: 12px;
                white-space: nowrap;
                transform: translateX(-50%);
            }
        }
        .dplayer-bar-preview {
            position: absolute;
            background: #fff;
            pointer-events: none;
            display: none;
            background-size: 16000px 100%;
        }
        .dplayer-bar-preview-canvas {
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: 1;
            pointer-events: none;
        }
        .dplayer-bar-time {
            &.hidden {
                opacity: 0;
            }
            position: absolute;
            left: 0px;
            top: -20px;
            border-radius: 4px;
            padding: 5px 7px;
            background-color: rgba(0, 0, 0, 0.62);
            color: #fff;
            font-size: 12px;
            text-align: center;
            opacity: 1;
            transition: opacity .1s ease-in-out;
            word-wrap: normal;
            word-break: normal;
            z-index: 2;
            pointer-events: none;
        }
        .dplayer-bar {
            position: relative;
            height: 3px;
            width: 100%;
            background: rgba(255, 255, 255, .2);
            cursor: pointer;
            .dplayer-loaded {
                position: absolute;
                left: 0;
                top: 0;
                bottom: 0;
                background: rgba(255, 255, 255, .4);
                height: 3px;
                transition: all 0.5s ease;
                will-change: width;
            }
            .dplayer-played {
                position: absolute;
                left: 0;
                top: 0;
                bottom: 0;
                height: 3px;
                will-change: width;
                .dplayer-thumb {
                    position: absolute;
                    top: 0;
                    right: 5px;
                    margin-top: -4px;
                    margin-right: -10px;
                    height: 11px;
                    width: 11px;
                    border-radius: 50%;
                    cursor: pointer;
                    transition: all .3s ease-in-out;
                    transform: scale(0);
                }
            }
        }
    }
    .dplayer-icons {
        height: 38px;
        position: absolute;
        bottom: 0;
        &.dplayer-comment-box {
            display: none;
            position: absolute;
            transition: all .3s ease-in-out;
            z-index: 2;
            height: 38px;
            bottom: 0;
            left: 20px;
            right: 20px;
            color: #fff;
            .dplayer-icon {
                padding: 7px;
            }
            .dplayer-comment-setting-icon {
                position: absolute;
                left: 0;
                top: 0;
            }
            .dplayer-send-icon {
                position: absolute;
                right: 0;
                top: 0;
            }
            .dplayer-comment-setting-box {
                position: absolute;
                background: rgba(28, 28, 28, 0.9);
                bottom: 41px;
                left: 0;
                box-shadow: 0 0 25px rgba(0, 0, 0, .3);
                border-radius: 4px;
                padding: 10px 10px 16px;
                font-size: 14px;
                width: 204px;
                transition: all .3s ease-in-out;
                transform: scale(0);
                &.dplayer-comment-setting-open {
                    transform: scale(1);
                }
                input[type=radio] {
                    display: none;
                }
                label {
                    cursor: pointer;
                }
                .dplayer-comment-setting-title {
                    font-size: 13px;
                    color: #fff;
                    line-height: 30px;
                }
                .dplayer-comment-setting-type {
                    font-size: 0;
                    .dplayer-comment-setting-title {
                        margin-bottom: 6px;
                    }
                    label {
                        &:nth-child(2) {
                            span {
                                border-radius: 4px 0 0 4px;
                            }
                        }
                        &:nth-child(4) {
                            span {
                                border-radius: 0 4px 4px 0;
                            }
                        }
                    }
                    span {
                        width: 33%;
                        padding: 4px 6px;
                        line-height: 16px;
                        display: inline-block;
                        font-size: 12px;
                        color: #fff;
                        border: 1px solid #fff;
                        margin-right: -1px;
                        box-sizing: border-box;
                        text-align: center;
                        cursor: pointer;
                    }
                    input:checked+span {
                        background: #E4E4E6;
                        color: #1c1c1c;
                    }
                }
                .dplayer-comment-setting-color {
                    font-size: 0;
                    label {
                        font-size: 0;
                        padding: 6px;
                        display: inline-block;
                    }
                    span {
                        width: 22px;
                        height: 22px;
                        display: inline-block;
                        border-radius: 50%;
                        box-sizing: border-box;
                        cursor: pointer;
                        &:hover {
                            animation: my-face 5s infinite ease-in-out;
                        }
                    }
                }
            }
            .dplayer-comment-input {
                outline: none;
                border: none;
                padding: 8px 31px;
                font-size: 14px;
                line-height: 18px;
                text-align: center;
                border-radius: 4px;
                background: none;
                margin: 0;
                height: 100%;
                box-sizing: border-box;
                width: 100%;
                color: #fff;
                &::placeholder {
                    color: #fff;
                    opacity: 0.8;
                }
                &::-ms-clear {
                    display: none;
                }
            }
        }
        &.dplayer-icons-left {
            .dplayer-icon {
                padding: 7px;
            }
        }
        &.dplayer-icons-right {
            right: 20px;
            .dplayer-icon {
                padding: 8px;
            }
        }
        .dplayer-time,
        .dplayer-live-badge {
            line-height: 38px;
            color: #eee;
            text-shadow: 0 0 2px rgba(0, 0, 0, .5);
            vertical-align: middle;
            font-size: 13px;
            cursor: default;
        }
        .dplayer-live-dot {
            display: inline-block;
            width: 6px;
            height: 6px;
            vertical-align: 4%;
            margin-right: 5px;
            content: '';
            border-radius: 6px;
        }
        .dplayer-icon {
            width: 40px;
            height: 100%;
            border: none;
            background-color: transparent;
            outline: none;
            cursor: pointer;
            vertical-align: middle;
            box-sizing: border-box;
            display: inline-block;
            .dplayer-icon-content {
                transition: all .2s ease-in-out;
                opacity: .8;
            }
            &:hover {
                .dplayer-icon-content {
                    opacity: 1;
                }
            }
            &.dplayer-quality-icon {
                color: #fff;
                width: auto;
                line-height: 22px;
                font-size: 14px;
            }
            &.dplayer-comment-icon {
                padding: 10px 9px 9px;
            }
            &.dplayer-setting-icon {
                padding-top: 8.5px;
            }
            &.dplayer-volume-icon {
                width: 43px;
            }
        }
        .dplayer-volume {
            position: relative;
            display: inline-block;
            cursor: pointer;
            height: 100%;
            &:hover {
                .dplayer-volume-bar-wrap .dplayer-volume-bar {
                    width: 45px;
                }
                .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
                    transform: scale(1);
                }
            }
            &.dplayer-volume-active {
                .dplayer-volume-bar-wrap .dplayer-volume-bar {
                    width: 45px;
                }
                .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
                    transform: scale(1);
                }
            }
            .dplayer-volume-bar-wrap {
                display: inline-block;
                margin: 0 10px 0 -5px;
                vertical-align: middle;
                height: 100%;
                .dplayer-volume-bar {
                    position: relative;
                    top: 17px;
                    width: 0;
                    height: 3px;
                    background: #aaa;
                    transition: all 0.3s ease-in-out;
                    .dplayer-volume-bar-inner {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        height: 100%;
                        transition: all 0.1s ease;
                        will-change: width;
                        .dplayer-thumb {
                            position: absolute;
                            top: 0;
                            right: 5px;
                            margin-top: -4px;
                            margin-right: -10px;
                            height: 11px;
                            width: 11px;
                            border-radius: 50%;
                            cursor: pointer;
                            transition: all .3s ease-in-out;
                            transform: scale(0);
                        }
                    }
                }
            }
        }
        .dplayer-subtitle-btn {
            display: inline-block;
            height: 100%;
        }
        .dplayer-subtitles {
            display: inline-block;
            height: 100%;
            .dplayer-subtitles-box {
                position: absolute;
                right: 0;
                bottom: 50px;
                transform: scale(0);
                width: fit-content;
                max-width: 240px;
                min-width: 120px;
                border-radius: 2px;
                background: rgba(28, 28, 28, 0.9);
                padding: 7px 0;
                transition: all .3s ease-in-out;
                overflow: auto;
                z-index: 2;
                &.dplayer-subtitles-panel {
                    display: block;
                }
                &.dplayer-subtitles-box-open {
                    transform: scale(1);
                }
            }
            .dplayer-subtitles-item {
                height: 30px;
                padding: 5px 10px;
                box-sizing: border-box;
                cursor: pointer;
                position: relative;
                &:hover {
                    background-color: rgba(255, 255, 255, .1);
                }
            }
        }
        .dplayer-setting {
            display: inline-block;
            height: 100%;
            .dplayer-setting-box {
                position: absolute;
                right: 0;
                bottom: 50px;
                transform: scale(0);
                width: 150px;
                border-radius: 2px;
                background: rgba(28, 28, 28, 0.9);
                padding: 7px 0;
                transition: all .3s ease-in-out;
                overflow: hidden;
                z-index: 2;
                &>div {
                    display: none;
                    &.dplayer-setting-origin-panel {
                        display: block;
                    }
                }
                &.dplayer-setting-box-open {
                    transform: scale(1);
                }
                &.dplayer-setting-box-narrow {
                    width: 70px;
                    text-align: center;
                }
                &.dplayer-setting-box-speed {
                    .dplayer-setting-origin-panel {
                        display: none;
                    }
                    .dplayer-setting-speed-panel {
                        display: block;
                    }
                }
            }
            .dplayer-setting-item,
            .dplayer-setting-speed-item {
                height: 30px;
                padding: 5px 10px;
                box-sizing: border-box;
                cursor: pointer;
                position: relative;
                &:hover {
                    background-color: rgba(255, 255, 255, .1);
                }
            }
            .dplayer-setting-danmaku {
                padding: 5px 0;
                .dplayer-label {
                    padding: 0 10px;
                    display: inline;
                }
                &:hover {
                    .dplayer-label {
                        display: none;
                    }
                    .dplayer-danmaku-bar-wrap {
                        display: inline-block;
                    }
                }
                &.dplayer-setting-danmaku-active {
                    .dplayer-label {
                        display: none;
                    }
                    .dplayer-danmaku-bar-wrap {
                        display: inline-block;
                    }
                }
                .dplayer-danmaku-bar-wrap {
                    padding: 0 10px;
                    box-sizing: border-box;
                    display: none;
                    vertical-align: middle;
                    height: 100%;
                    width: 100%;
                    .dplayer-danmaku-bar {
                        position: relative;
                        top: 8.5px;
                        width: 100%;
                        height: 3px;
                        background: #fff;
                        transition: all 0.3s ease-in-out;
                        .dplayer-danmaku-bar-inner {
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            height: 100%;
                            transition: all 0.1s ease;
                            background: #aaa;
                            will-change: width;
                            .dplayer-thumb {
                                position: absolute;
                                top: 0;
                                right: 5px;
                                margin-top: -4px;
                                margin-right: -10px;
                                height: 11px;
                                width: 11px;
                                border-radius: 50%;
                                cursor: pointer;
                                transition: all .3s ease-in-out;
                                background: #aaa;
                            }
                        }
                    }
                }
            }
        }
        .dplayer-full {
            display: inline-block;
            height: 100%;
            position: relative;
            &:hover {
                .dplayer-full-in-icon {
                    display: block;
                }
            }
            .dplayer-full-in-icon {
                position: absolute;
                top: -30px;
                z-index: 1;
                display: none;
            }
        }
        .dplayer-quality {
            position: relative;
            display: inline-block;
            height: 100%;
            z-index: 2;
            &:hover {
                .dplayer-quality-list {
                    display: block;
                }
                .dplayer-quality-mask {
                    display: block;
                }
            }
            .dplayer-quality-mask {
                display: none;
                position: absolute;
                bottom: 38px;
                left: -18px;
                width: 80px;
                padding-bottom: 12px;
            }
            .dplayer-quality-list {
                display: none;
                font-size: 12px;
                width: 80px;
                border-radius: 2px;
                background: rgba(28, 28, 28, 0.9);
                padding: 5px 0;
                transition: all .3s ease-in-out;
                overflow: hidden;
                color: #fff;
                text-align: center;
            }
            .dplayer-quality-item {
                height: 25px;
                box-sizing: border-box;
                cursor: pointer;
                line-height: 25px;
                &:hover {
                    background-color: rgba(255, 255, 255, .1);
                }
            }
        }
        .dplayer-comment {
            display: inline-block;
            height: 100%;
        }
        .dplayer-label {
            color: #eee;
            font-size: 13px;
            display: inline-block;
            vertical-align: middle;
            white-space: nowrap;
        }
        .dplayer-toggle {
            width: 32px;
            height: 20px;
            text-align: center;
            font-size: 0;
            vertical-align: middle;
            position: absolute;
            top: 5px;
            right: 10px;
            input {
                max-height: 0;
                max-width: 0;
                display: none;
            }
            input+label {
                display: inline-block;
                position: relative;
                box-shadow: rgb(223, 223, 223) 0 0 0 0 inset;
                border: 1px solid rgb(223, 223, 223);
                height: 20px;
                width: 32px;
                border-radius: 10px;
                box-sizing: border-box;
                cursor: pointer;
                transition: .2s ease-in-out;
            }
            input+label:before {
                content: "";
                position: absolute;
                display: block;
                height: 18px;
                width: 18px;
                top: 0;
                left: 0;
                border-radius: 15px;
                transition: .2s ease-in-out;
            }
            input+label:after {
                content: "";
                position: absolute;
                display: block;
                left: 0;
                top: 0;
                border-radius: 15px;
                background: #fff;
                transition: .2s ease-in-out;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
                height: 18px;
                width: 18px;
            }
            input:checked+label {
                border-color: rgba(255, 255, 255, 0.5);
            }
            input:checked+label:before {
                width: 30px;
                background: rgba(255, 255, 255, 0.5);
            }
            input:checked+label:after {
                left: 12px;
            }
        }
    }
}

.dplayer-mobile-play {
    display: none;
    width: 50px;
    height: 50px;
    border: none;
    background-color: transparent;
    outline: none;
    cursor: pointer;
    box-sizing: border-box;
    position: absolute;
    bottom: 0;
    opacity: 0.8;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}`,`.dplayer-danmaku {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    font-size: 22px;
    color: #fff;
    .dplayer-danmaku-item {
        display: inline-block;
        pointer-events: none;
        user-select: none;
        cursor: default;
        white-space: nowrap;
        text-shadow: .5px .5px .5px rgba(0, 0, 0, .5);
        &--demo {
            position: absolute;
            visibility: hidden;
        }
    }
    .dplayer-danmaku-right {
        position: absolute;
        right: 0;
        transform: translateX(100%);
        &.dplayer-danmaku-move {
            will-change: transform;
            animation-name: 'danmaku';
            animation-timing-function: linear;
            animation-play-state: paused;
        }
    }
    @keyframes danmaku {
        from {
            transform: translateX(100%);
        }
    }
    .dplayer-danmaku-top,
    .dplayer-danmaku-bottom {
        position: absolute;
        width: 100%;
        text-align: center;
        visibility: hidden;
        &.dplayer-danmaku-move {
            will-change: visibility;
            animation-name: 'danmaku-center';
            animation-timing-function: linear;
            animation-play-state: paused;
        }
    }
    @keyframes danmaku-center {
        from {
            visibility: visible;
        }
        to {
            visibility: visible;
        }
    }
}`,`.dplayer-logo {
    pointer-events: none;
    position: absolute;
    left: 20px;
    top: 20px;
    max-width: 50px;
    max-height: 50px;
    img {
        max-width: 100%;
        max-height: 100%;
        background: none;
    }
}`,`.dplayer-menu {
    position: absolute;
    width: 170px;
    border-radius: 2px;
    background: rgba(28, 28, 28, 0.85);
    padding: 5px 0;
    overflow: hidden;
    z-index: 3;
    display: none;
    &.dplayer-menu-show {
        display: block;
    }
    .dplayer-menu-item {
        height: 30px;
        box-sizing: border-box;
        cursor: pointer;
        &:hover {
            background-color: rgba(255, 255, 255, .1);
        }
        a {
            display: inline-block;
            padding: 0 10px;
            line-height: 30px;
            color: #eee;
            font-size: 13px;
            display: inline-block;
            vertical-align: middle;
            width: 100%;
            box-sizing: border-box;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            &:hover {
                text-decoration: none;
            }
        }
    }
}`,`.dplayer-subtitle {
    position: absolute;
    bottom: 40px;
    width: 90%;
    left: 5%;
    text-align: center;
    color: #fff;
    text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
    font-size: 20px;
    &.dplayer-subtitle-hide {
        display: none;
    }
}`,`.dplayer-mask {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    display: none;
    &.dplayer-mask-show {
        display: block;
    }
}

.dplayer-video-wrap {
    position: relative;
    background: #000;
    font-size: 0;
    width: 100%;
    height: 100%;
    .dplayer-video {
        width: 100%;
        height: 100%;
        display: none;
    }
    .dplayer-video-current {
        display: block;
    }
    .dplayer-video-prepare {
        display: none;
    }
}`,`.dplayer-info-panel {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 400px;
    background: rgba(28, 28, 28, 0.8);
    padding: 10px;
    color: #fff;
    font-size: 12px;
    border-radius: 2px;

    &-hide {
        display: none;
    }

    .dplayer-info-panel-close {
        cursor: pointer;
        position: absolute;
        right: 10px;
        top: 10px;
    }

    .dplayer-info-panel-item {
        & > span {
            display: inline-block;
            vertical-align: middle;
            line-height: 15px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
    }

    .dplayer-info-panel-item-title {
        width: 100px;
        text-align: right;
        margin-right: 10px;
    }
    
    .dplayer-info-panel-item-data {
        width: 260px;
    }
}`],sourceRoot:""}]);const R=k},856:s=>{var o=[];function l(u){for(var h=-1,y=0;y<o.length;y++)if(o[y].identifier===u){h=y;break}return h}function d(u,h){for(var y={},A=[],v=0;v<u.length;v++){var S=u[v],k=h.base?S[0]+h.base:S[0],I=y[k]||0,R="".concat(k," ").concat(I);y[k]=I+1;var _=l(R),L={css:S[1],media:S[2],sourceMap:S[3],supports:S[4],layer:S[5]};if(_!==-1)o[_].references++,o[_].updater(L);else{var F=c(L,h);h.byIndex=v,o.splice(v,0,{identifier:R,updater:F,references:1})}A.push(R)}return A}function c(u,h){var y=h.domAPI(h);return y.update(u),function(A){if(A){if(A.css===u.css&&A.media===u.media&&A.sourceMap===u.sourceMap&&A.supports===u.supports&&A.layer===u.layer)return;y.update(u=A)}else y.remove()}}s.exports=function(u,h){var y=d(u=u||[],h=h||{});return function(A){A=A||[];for(var v=0;v<y.length;v++){var S=l(y[v]);o[S].references--}for(var k=d(A,h),I=0;I<y.length;I++){var R=l(y[I]);o[R].references===0&&(o[R].updater(),o.splice(R,1))}y=k}}},370:s=>{var o={};s.exports=function(l,d){var c=function(u){if(o[u]===void 0){var h=document.querySelector(u);if(window.HTMLIFrameElement&&h instanceof window.HTMLIFrameElement)try{h=h.contentDocument.head}catch{h=null}o[u]=h}return o[u]}(l);if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(d)}},278:s=>{s.exports=function(o){var l=document.createElement("style");return o.setAttributes(l,o.attributes),o.insert(l,o.options),l}},458:(s,o,l)=>{s.exports=function(d){var c=l.nc;c&&d.setAttribute("nonce",c)}},470:s=>{s.exports=function(o){var l=o.insertStyleElement(o);return{update:function(d){(function(c,u,h){var y="";h.supports&&(y+="@supports (".concat(h.supports,") {")),h.media&&(y+="@media ".concat(h.media," {"));var A=h.layer!==void 0;A&&(y+="@layer".concat(h.layer.length>0?" ".concat(h.layer):""," {")),y+=h.css,A&&(y+="}"),h.media&&(y+="}"),h.supports&&(y+="}");var v=h.sourceMap;v&&typeof btoa<"u"&&(y+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(v))))," */")),u.styleTagTransform(y,c,u.options)})(l,o,d)},remove:function(){(function(d){if(d.parentNode===null)return!1;d.parentNode.removeChild(d)})(l)}}}},488:s=>{s.exports=function(o,l){if(l.styleSheet)l.styleSheet.cssText=o;else{for(;l.firstChild;)l.removeChild(l.firstChild);l.appendChild(document.createTextNode(o))}}},251:s=>{s.exports='<svg viewBox="0 0 288 288" xmlns="http://www.w3.org/2000/svg"><path d="M288 90v96c0 20-16 36-36 36h-10c-16 0-16-24 0-24h10c7 0 12-5 12-12V90c0-7-5-12-12-12H36c-7 0-12 5-12 12v96c0 7 5 12 12 12h10c16 0 16 24 0 24H36c-20 0-36-16-36-36V90c0-20 16-36 36-36h216c20 0 36 16 36 36zm-120 62l48 68c14 20 1 38-20 38H92c-21 0-34-18-20-38l48-68c13-18 35-18 48 0z"></path></svg>'},113:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M16 23c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6zM16 13c-2.206 0-4 1.794-4 4s1.794 4 4 4c2.206 0 4-1.794 4-4s-1.794-4-4-4zM27 28h-22c-1.654 0-3-1.346-3-3v-16c0-1.654 1.346-3 3-3h3c0.552 0 1 0.448 1 1s-0.448 1-1 1h-3c-0.551 0-1 0.449-1 1v16c0 0.552 0.449 1 1 1h22c0.552 0 1-0.448 1-1v-16c0-0.551-0.448-1-1-1h-11c-0.552 0-1-0.448-1-1s0.448-1 1-1h11c1.654 0 3 1.346 3 3v16c0 1.654-1.346 3-3 3zM24 10.5c0 0.828 0.672 1.5 1.5 1.5s1.5-0.672 1.5-1.5c0-0.828-0.672-1.5-1.5-1.5s-1.5 0.672-1.5 1.5zM15 4c0 0.552-0.448 1-1 1h-4c-0.552 0-1-0.448-1-1v0c0-0.552 0.448-1 1-1h4c0.552 0 1 0.448 1 1v0z"></path></svg>'},193:s=>{s.exports='<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="chromecast" class="svg-inline--fa fa-chromecast fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M447.8,64H64c-23.6,0-42.7,19.1-42.7,42.7v63.9H64v-63.9h383.8v298.6H298.6V448H448c23.6,0,42.7-19.1,42.7-42.7V106.7 C490.7,83.1,471.4,64,447.8,64z M21.3,383.6L21.3,383.6l0,63.9h63.9C85.2,412.2,56.6,383.6,21.3,383.6L21.3,383.6z M21.3,298.6V341 c58.9,0,106.6,48.1,106.6,107h42.7C170.7,365.6,103.7,298.7,21.3,298.6z M213.4,448h42.7c-0.5-129.5-105.3-234.3-234.8-234.6l0,42.4 C127.3,255.6,213.3,342,213.4,448z"></path></svg>'},338:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M27.090 0.131h-22.731c-2.354 0-4.262 1.839-4.262 4.109v16.401c0 2.269 1.908 4.109 4.262 4.109h4.262v-2.706h8.469l-8.853 8.135 1.579 1.451 7.487-6.88h9.787c2.353 0 4.262-1.84 4.262-4.109v-16.401c0-2.27-1.909-4.109-4.262-4.109v0zM28.511 19.304c0 1.512-1.272 2.738-2.841 2.738h-8.425l-0.076-0.070-0.076 0.070h-11.311c-1.569 0-2.841-1.226-2.841-2.738v-13.696c0-1.513 1.272-2.739 2.841-2.739h19.889c1.569 0 2.841-0.142 2.841 1.37v15.064z"></path></svg>'},807:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M27.128 0.38h-22.553c-2.336 0-4.229 1.825-4.229 4.076v16.273c0 2.251 1.893 4.076 4.229 4.076h4.229v-2.685h8.403l-8.784 8.072 1.566 1.44 7.429-6.827h9.71c2.335 0 4.229-1.825 4.229-4.076v-16.273c0-2.252-1.894-4.076-4.229-4.076zM28.538 19.403c0 1.5-1.262 2.717-2.819 2.717h-8.36l-0.076-0.070-0.076 0.070h-11.223c-1.557 0-2.819-1.217-2.819-2.717v-13.589c0-1.501 1.262-2.718 2.819-2.718h19.734c1.557 0 2.819-0.141 2.819 1.359v14.947zM9.206 10.557c-1.222 0-2.215 0.911-2.215 2.036s0.992 2.035 2.215 2.035c1.224 0 2.216-0.911 2.216-2.035s-0.992-2.036-2.216-2.036zM22.496 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.224 0 2.215-0.911 2.215-2.035s-0.991-2.036-2.215-2.036zM15.852 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.222 0 2.215-0.911 2.215-2.035s-0.992-2.036-2.215-2.036z"></path></svg>'},300:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 33"><path d="M24.965 24.38h-18.132c-1.366 0-2.478-1.113-2.478-2.478v-11.806c0-1.364 1.111-2.478 2.478-2.478h18.132c1.366 0 2.478 1.113 2.478 2.478v11.806c0 1.364-1.11 2.478-2.478 2.478zM6.833 10.097v11.806h18.134l-0.002-11.806h-18.132zM2.478 28.928h5.952c0.684 0 1.238-0.554 1.238-1.239 0-0.684-0.554-1.238-1.238-1.238h-5.952v-5.802c0-0.684-0.554-1.239-1.238-1.239s-1.239 0.556-1.239 1.239v5.802c0 1.365 1.111 2.478 2.478 2.478zM30.761 19.412c-0.684 0-1.238 0.554-1.238 1.238v5.801h-5.951c-0.686 0-1.239 0.554-1.239 1.238 0 0.686 0.554 1.239 1.239 1.239h5.951c1.366 0 2.478-1.111 2.478-2.478v-5.801c0-0.683-0.554-1.238-1.239-1.238zM0 5.55v5.802c0 0.683 0.554 1.238 1.238 1.238s1.238-0.555 1.238-1.238v-5.802h5.952c0.684 0 1.238-0.554 1.238-1.238s-0.554-1.238-1.238-1.238h-5.951c-1.366-0.001-2.478 1.111-2.478 2.476zM32 11.35v-5.801c0-1.365-1.11-2.478-2.478-2.478h-5.951c-0.686 0-1.239 0.554-1.239 1.238s0.554 1.238 1.239 1.238h5.951v5.801c0 0.683 0.554 1.237 1.238 1.237 0.686 0.002 1.239-0.553 1.239-1.236z"></path></svg>'},574:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 33"><path d="M6.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v4h4c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333zM30.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h4v-4c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM30.667 12c-0.8 0-1.333-0.533-1.333-1.333v-4h-4c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM1.333 12c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333h-4v4c0 0.8-0.533 1.333-1.333 1.333z"></path></svg>'},182:s=>{s.exports='<svg version="1.1" viewBox="0 0 22 22"><svg x="7" y="1"><circle class="diplayer-loading-dot diplayer-loading-dot-0" cx="4" cy="4" r="2"></circle></svg><svg x="11" y="3"><circle class="diplayer-loading-dot diplayer-loading-dot-1" cx="4" cy="4" r="2"></circle></svg><svg x="13" y="7"><circle class="diplayer-loading-dot diplayer-loading-dot-2" cx="4" cy="4" r="2"></circle></svg><svg x="11" y="11"><circle class="diplayer-loading-dot diplayer-loading-dot-3" cx="4" cy="4" r="2"></circle></svg><svg x="7" y="13"><circle class="diplayer-loading-dot diplayer-loading-dot-4" cx="4" cy="4" r="2"></circle></svg><svg x="3" y="11"><circle class="diplayer-loading-dot diplayer-loading-dot-5" cx="4" cy="4" r="2"></circle></svg><svg x="1" y="7"><circle class="diplayer-loading-dot diplayer-loading-dot-6" cx="4" cy="4" r="2"></circle></svg><svg x="3" y="3"><circle class="diplayer-loading-dot diplayer-loading-dot-7" cx="4" cy="4" r="2"></circle></svg></svg>'},965:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M19.357 2.88c1.749 0 3.366 0.316 4.851 0.946 1.485 0.632 2.768 1.474 3.845 2.533s1.922 2.279 2.532 3.661c0.611 1.383 0.915 2.829 0.915 4.334 0 1.425-0.304 2.847-0.915 4.271-0.611 1.425-1.587 2.767-2.928 4.028-0.855 0.813-1.811 1.607-2.869 2.38s-2.136 1.465-3.233 2.075c-1.099 0.61-2.198 1.098-3.296 1.465-1.098 0.366-2.115 0.549-3.051 0.549-1.343 0-2.441-0.438-3.296-1.311-0.854-0.876-1.281-2.41-1.281-4.608 0-0.366 0.020-0.773 0.060-1.221s0.062-0.895 0.062-1.343c0-0.773-0.183-1.353-0.55-1.738-0.366-0.387-0.793-0.58-1.281-0.58-0.652 0-1.21 0.295-1.678 0.886s-0.926 1.23-1.373 1.921c-0.447 0.693-0.905 1.334-1.372 1.923s-1.028 0.886-1.679 0.886c-0.529 0-1.048-0.427-1.556-1.282s-0.763-2.259-0.763-4.212c0-2.197 0.529-4.241 1.587-6.133s2.462-3.529 4.21-4.912c1.75-1.383 3.762-2.471 6.041-3.264 2.277-0.796 4.617-1.212 7.018-1.253zM7.334 15.817c0.569 0 1.047-0.204 1.434-0.611s0.579-0.875 0.579-1.404c0-0.569-0.193-1.047-0.579-1.434s-0.864-0.579-1.434-0.579c-0.529 0-0.987 0.193-1.373 0.579s-0.58 0.864-0.58 1.434c0 0.53 0.194 0.998 0.58 1.404 0.388 0.407 0.845 0.611 1.373 0.611zM12.216 11.79c0.691 0 1.292-0.254 1.8-0.763s0.762-1.107 0.762-1.8c0-0.732-0.255-1.343-0.762-1.831-0.509-0.489-1.109-0.732-1.8-0.732-0.732 0-1.342 0.244-1.831 0.732-0.488 0.488-0.732 1.098-0.732 1.831 0 0.693 0.244 1.292 0.732 1.8s1.099 0.763 1.831 0.763zM16.366 25.947c0.692 0 1.282-0.214 1.77-0.64s0.732-0.987 0.732-1.678-0.244-1.261-0.732-1.709c-0.489-0.448-1.078-0.671-1.77-0.671-0.65 0-1.21 0.223-1.678 0.671s-0.702 1.018-0.702 1.709c0 0.692 0.234 1.25 0.702 1.678s1.027 0.64 1.678 0.64zM19.113 9.592c0.651 0 1.129-0.203 1.433-0.611 0.305-0.406 0.459-0.874 0.459-1.404 0-0.488-0.154-0.947-0.459-1.373-0.304-0.427-0.782-0.641-1.433-0.641-0.529 0-1.008 0.193-1.434 0.58s-0.64 0.865-0.64 1.434c0 0.571 0.213 1.049 0.64 1.434 0.427 0.389 0.905 0.581 1.434 0.581zM24.848 12.826c0.57 0 1.067-0.213 1.495-0.64 0.427-0.427 0.64-0.947 0.64-1.556 0-0.57-0.214-1.068-0.64-1.495-0.428-0.427-0.927-0.64-1.495-0.64-0.611 0-1.129 0.213-1.555 0.64-0.428 0.427-0.642 0.926-0.642 1.495 0 0.611 0.213 1.129 0.642 1.556s0.947 0.64 1.555 0.64z"></path></svg>'},74:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 17 32"><path d="M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z"></path></svg>'},730:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 32"><path d="M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z"></path></svg>'},428:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M22 16l-10.105-10.6-1.895 1.987 8.211 8.613-8.211 8.612 1.895 1.988 8.211-8.613z"></path></svg>'},254:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M13.725 30l3.9-5.325-3.9-1.125v6.45zM0 17.5l11.050 3.35 13.6-11.55-10.55 12.425 11.8 3.65 6.1-23.375-32 15.5z"></path></svg>'},934:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 28"><path d="M28.633 17.104c0.035 0.21 0.026 0.463-0.026 0.76s-0.14 0.598-0.262 0.904c-0.122 0.306-0.271 0.581-0.445 0.825s-0.367 0.419-0.576 0.524c-0.209 0.105-0.393 0.157-0.55 0.157s-0.332-0.035-0.524-0.105c-0.175-0.052-0.393-0.1-0.655-0.144s-0.528-0.052-0.799-0.026c-0.271 0.026-0.541 0.083-0.812 0.17s-0.502 0.236-0.694 0.445c-0.419 0.437-0.664 0.934-0.734 1.493s0.009 1.092 0.236 1.598c0.175 0.349 0.148 0.699-0.079 1.048-0.105 0.14-0.271 0.284-0.498 0.432s-0.476 0.284-0.747 0.406-0.555 0.218-0.851 0.288c-0.297 0.070-0.559 0.105-0.786 0.105-0.157 0-0.306-0.061-0.445-0.183s-0.236-0.253-0.288-0.393h-0.026c-0.192-0.541-0.52-1.009-0.982-1.402s-1-0.589-1.611-0.589c-0.594 0-1.131 0.197-1.611 0.589s-0.816 0.851-1.009 1.375c-0.087 0.21-0.218 0.362-0.393 0.458s-0.367 0.144-0.576 0.144c-0.244 0-0.52-0.044-0.825-0.131s-0.611-0.197-0.917-0.327c-0.306-0.131-0.581-0.284-0.825-0.458s-0.428-0.349-0.55-0.524c-0.087-0.122-0.135-0.266-0.144-0.432s0.057-0.397 0.197-0.694c0.192-0.402 0.266-0.86 0.223-1.375s-0.266-0.991-0.668-1.428c-0.244-0.262-0.541-0.432-0.891-0.511s-0.681-0.109-0.995-0.092c-0.367 0.017-0.742 0.087-1.127 0.21-0.244 0.070-0.489 0.052-0.734-0.052-0.192-0.070-0.371-0.231-0.537-0.485s-0.314-0.533-0.445-0.838c-0.131-0.306-0.231-0.62-0.301-0.943s-0.087-0.59-0.052-0.799c0.052-0.384 0.227-0.629 0.524-0.734 0.524-0.21 0.995-0.555 1.415-1.035s0.629-1.017 0.629-1.611c0-0.611-0.21-1.144-0.629-1.598s-0.891-0.786-1.415-0.996c-0.157-0.052-0.288-0.179-0.393-0.38s-0.157-0.406-0.157-0.616c0-0.227 0.035-0.48 0.105-0.76s0.162-0.55 0.275-0.812 0.244-0.502 0.393-0.72c0.148-0.218 0.31-0.38 0.485-0.485 0.14-0.087 0.275-0.122 0.406-0.105s0.275 0.052 0.432 0.105c0.524 0.21 1.070 0.275 1.637 0.197s1.070-0.327 1.506-0.747c0.21-0.209 0.362-0.467 0.458-0.773s0.157-0.607 0.183-0.904c0.026-0.297 0.026-0.568 0-0.812s-0.048-0.419-0.065-0.524c-0.035-0.105-0.066-0.227-0.092-0.367s-0.013-0.262 0.039-0.367c0.105-0.244 0.293-0.458 0.563-0.642s0.563-0.336 0.878-0.458c0.314-0.122 0.62-0.214 0.917-0.275s0.533-0.092 0.707-0.092c0.227 0 0.406 0.074 0.537 0.223s0.223 0.301 0.275 0.458c0.192 0.471 0.507 0.886 0.943 1.244s0.952 0.537 1.546 0.537c0.611 0 1.153-0.17 1.624-0.511s0.803-0.773 0.996-1.297c0.070-0.14 0.179-0.284 0.327-0.432s0.301-0.223 0.458-0.223c0.244 0 0.511 0.035 0.799 0.105s0.572 0.166 0.851 0.288c0.279 0.122 0.537 0.279 0.773 0.472s0.423 0.402 0.563 0.629c0.087 0.14 0.113 0.293 0.079 0.458s-0.070 0.284-0.105 0.354c-0.227 0.506-0.297 1.039-0.21 1.598s0.341 1.048 0.76 1.467c0.419 0.419 0.934 0.651 1.546 0.694s1.179-0.057 1.703-0.301c0.14-0.087 0.31-0.122 0.511-0.105s0.371 0.096 0.511 0.236c0.262 0.244 0.493 0.616 0.694 1.113s0.336 1 0.406 1.506c0.035 0.297-0.013 0.528-0.144 0.694s-0.266 0.275-0.406 0.327c-0.542 0.192-1.004 0.528-1.388 1.009s-0.576 1.026-0.576 1.637c0 0.594 0.162 1.113 0.485 1.559s0.747 0.764 1.27 0.956c0.122 0.070 0.227 0.14 0.314 0.21 0.192 0.157 0.323 0.358 0.393 0.602v0zM16.451 19.462c0.786 0 1.528-0.149 2.227-0.445s1.305-0.707 1.821-1.231c0.515-0.524 0.921-1.131 1.218-1.821s0.445-1.428 0.445-2.214c0-0.786-0.148-1.524-0.445-2.214s-0.703-1.292-1.218-1.808c-0.515-0.515-1.122-0.921-1.821-1.218s-1.441-0.445-2.227-0.445c-0.786 0-1.524 0.148-2.214 0.445s-1.292 0.703-1.808 1.218c-0.515 0.515-0.921 1.118-1.218 1.808s-0.445 1.428-0.445 2.214c0 0.786 0.149 1.524 0.445 2.214s0.703 1.297 1.218 1.821c0.515 0.524 1.118 0.934 1.808 1.231s1.428 0.445 2.214 0.445v0z"></path></svg>'},410:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M26.667 5.333h-21.333c-0 0-0.001 0-0.001 0-1.472 0-2.666 1.194-2.666 2.666 0 0 0 0.001 0 0.001v-0 16c0 0 0 0.001 0 0.001 0 1.472 1.194 2.666 2.666 2.666 0 0 0.001 0 0.001 0h21.333c0 0 0.001 0 0.001 0 1.472 0 2.666-1.194 2.666-2.666 0-0 0-0.001 0-0.001v0-16c0-0 0-0.001 0-0.001 0-1.472-1.194-2.666-2.666-2.666-0 0-0.001 0-0.001 0h0zM5.333 16h5.333v2.667h-5.333v-2.667zM18.667 24h-13.333v-2.667h13.333v2.667zM26.667 24h-5.333v-2.667h5.333v2.667zM26.667 18.667h-13.333v-2.667h13.333v2.667z"></path></svg>'},644:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z"></path></svg>'},324:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8z"></path></svg>'},437:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528zM25.152 16q0 2.72-1.536 5.056t-4 3.36q-0.256 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.704 0.672-1.056 1.024-0.512 1.376-0.8 1.312-0.96 2.048-2.4t0.736-3.104-0.736-3.104-2.048-2.4q-0.352-0.288-1.376-0.8-0.672-0.352-0.672-1.056 0-0.448 0.32-0.8t0.8-0.352q0.224 0 0.48 0.096 2.496 1.056 4 3.36t1.536 5.056z"></path></svg>'},897:(s,o,l)=>{var d=typeof self<"u"?self:typeof window<"u"?window:l.g!==void 0?l.g:{},c=Object.create(d),u=/["&'<>]/;function h(y){return typeof y!="string"&&(y=y==null?"":typeof y=="function"?h(y.call(y)):JSON.stringify(y)),y}c.$escape=function(y){return function(A){var v=""+A,S=u.exec(v);if(!S)return A;var k="",I=void 0,R=void 0,_=void 0;for(I=S.index,R=0;I<v.length;I++){switch(v.charCodeAt(I)){case 34:_="&#34;";break;case 38:_="&#38;";break;case 39:_="&#39;";break;case 60:_="&#60;";break;case 62:_="&#62;";break;default:continue}R!==I&&(k+=v.substring(R,I)),R=I+1,k+=_}return R!==I?k+v.substring(R,I):k}(h(y))},c.$each=function(y,A){if(Array.isArray(y))for(var v=0,S=y.length;v<S;v++)A(y[v],v);else for(var k in y)A(y[k],k)},s.exports=c},471:(s,o,l)=>{s.exports=l(897)},352:s=>{s.exports=function(o){var l=[];return l.toString=function(){return this.map(function(d){var c="",u=d[5]!==void 0;return d[4]&&(c+="@supports (".concat(d[4],") {")),d[2]&&(c+="@media ".concat(d[2]," {")),u&&(c+="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {")),c+=o(d),u&&(c+="}"),d[2]&&(c+="}"),d[4]&&(c+="}"),c}).join("")},l.i=function(d,c,u,h,y){typeof d=="string"&&(d=[[null,d,void 0]]);var A={};if(u)for(var v=0;v<this.length;v++){var S=this[v][0];S!=null&&(A[S]=!0)}for(var k=0;k<d.length;k++){var I=[].concat(d[k]);u&&A[I[0]]||(y!==void 0&&(I[5]===void 0||(I[1]="@layer".concat(I[5].length>0?" ".concat(I[5]):""," {").concat(I[1],"}")),I[5]=y),c&&(I[2]&&(I[1]="@media ".concat(I[2]," {").concat(I[1],"}")),I[2]=c),h&&(I[4]?(I[1]="@supports (".concat(I[4],") {").concat(I[1],"}"),I[4]=h):I[4]="".concat(h)),l.push(I))}},l}},80:s=>{s.exports=function(o,l){return l||(l={}),o&&(o=String(o.__esModule?o.default:o),/^['"].*['"]$/.test(o)&&(o=o.slice(1,-1)),l.hash&&(o+=l.hash),/["'() \t\n]|(%20)/.test(o)||l.needQuotes?'"'.concat(o.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):o)}},415:s=>{s.exports=function(o){var l=o[1],d=o[3];if(!d)return l;if(typeof btoa=="function"){var c=btoa(unescape(encodeURIComponent(JSON.stringify(d)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),h="/*# ".concat(u," */");return[l].concat([h]).join(`
`)}return[l].join(`
`)}},937:s=>{function o(l){return o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d},o(l)}s.exports=(typeof self>"u"?"undefined":o(self))=="object"?self.FormData:window.FormData},831:s=>{s.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg=="}},n={};function i(s){var o=n[s];if(o!==void 0)return o.exports;var l=n[s]={id:s,exports:{}};return t[s](l,l.exports,i),l.exports}i.m=t,i.n=s=>{var o=s&&s.__esModule?()=>s.default:()=>s;return i.d(o,{a:o}),o},i.d=(s,o)=>{for(var l in o)i.o(o,l)&&!i.o(s,l)&&Object.defineProperty(s,l,{enumerable:!0,get:o[l]})},i.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),i.o=(s,o)=>Object.prototype.hasOwnProperty.call(s,o),i.b=document.baseURI||self.location.href,i.nc=void 0;var r={};return(()=>{i.d(r,{default:()=>kd});var s=i(856),o=i.n(s),l=i(470),d=i.n(l),c=i(370),u=i.n(c),h=i(458),y=i.n(h),A=i(278),v=i.n(A),S=i(488),k=i.n(S),I=i(685),R={};R.styleTagTransform=k(),R.setAttributes=y(),R.insert=u().bind(null,"head"),R.domAPI=d(),R.insertStyleElement=v(),o()(I.Z,R),I.Z&&I.Z.locals&&I.Z.locals;function _(p){return _=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},_(p)}function L(p,m){this.name="AggregateError",this.errors=p,this.message=m||""}L.prototype=Error.prototype;function F(p){return F=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},F(p)}var B=setTimeout;function M(p){return!!(p&&p.length!==void 0)}function q(){}function P(p){if(!(this instanceof P))throw new TypeError("Promises must be constructed via new");if(typeof p!="function")throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],le(p,this)}function K(p,m){for(;p._state===3;)p=p._value;p._state!==0?(p._handled=!0,P._immediateFn(function(){var x=p._state===1?m.onFulfilled:m.onRejected;if(x!==null){var f;try{f=x(p._value)}catch(g){return void he(m.promise,g)}Q(m.promise,f)}else(p._state===1?Q:he)(m.promise,p._value)})):p._deferreds.push(m)}function Q(p,m){try{if(m===p)throw new TypeError("A promise cannot be resolved with itself.");if(m&&(F(m)==="object"||typeof m=="function")){var x=m.then;if(m instanceof P)return p._state=3,p._value=m,void re(p);if(typeof x=="function")return void le((f=x,g=m,function(){f.apply(g,arguments)}),p)}p._state=1,p._value=m,re(p)}catch(b){he(p,b)}var f,g}function he(p,m){p._state=2,p._value=m,re(p)}function re(p){p._state===2&&p._deferreds.length===0&&P._immediateFn(function(){p._handled||P._unhandledRejectionFn(p._value)});for(var m=0,x=p._deferreds.length;m<x;m++)K(p,p._deferreds[m]);p._deferreds=null}function ue(p,m,x){this.onFulfilled=typeof p=="function"?p:null,this.onRejected=typeof m=="function"?m:null,this.promise=x}function le(p,m){var x=!1;try{p(function(f){x||(x=!0,Q(m,f))},function(f){x||(x=!0,he(m,f))})}catch(f){if(x)return;x=!0,he(m,f)}}P.prototype.catch=function(p){return this.then(null,p)},P.prototype.then=function(p,m){var x=new this.constructor(q);return K(this,new ue(p,m,x)),x},P.prototype.finally=function(p){var m=this.constructor;return this.then(function(x){return m.resolve(p()).then(function(){return x})},function(x){return m.resolve(p()).then(function(){return m.reject(x)})})},P.all=function(p){return new P(function(m,x){if(!M(p))return x(new TypeError("Promise.all accepts an array"));var f=Array.prototype.slice.call(p);if(f.length===0)return m([]);var g=f.length;function b(C,w){try{if(w&&(F(w)==="object"||typeof w=="function")){var O=w.then;if(typeof O=="function")return void O.call(w,function(N){b(C,N)},x)}f[C]=w,--g==0&&m(f)}catch(N){x(N)}}for(var E=0;E<f.length;E++)b(E,f[E])})},P.any=function(p){var m=this;return new m(function(x,f){if(!p||p.length===void 0)return f(new TypeError("Promise.any accepts an array"));var g=Array.prototype.slice.call(p);if(g.length===0)return f();for(var b=[],E=0;E<g.length;E++)try{m.resolve(g[E]).then(x).catch(function(C){b.push(C),b.length===g.length&&f(new L(b,"All promises were rejected"))})}catch(C){f(C)}})},P.allSettled=function(p){return new this(function(m,x){if(!p||p.length===void 0)return x(new TypeError(_(p)+" "+p+" is not iterable(cannot read property Symbol(Symbol.iterator))"));var f=Array.prototype.slice.call(p);if(f.length===0)return m([]);var g=f.length;function b(C,w){if(w&&(_(w)==="object"||typeof w=="function")){var O=w.then;if(typeof O=="function")return void O.call(w,function(N){b(C,N)},function(N){f[C]={status:"rejected",reason:N},--g==0&&m(f)})}f[C]={status:"fulfilled",value:w},--g==0&&m(f)}for(var E=0;E<f.length;E++)b(E,f[E])})},P.resolve=function(p){return p&&F(p)==="object"&&p.constructor===P?p:new P(function(m){m(p)})},P.reject=function(p){return new P(function(m,x){x(p)})},P.race=function(p){return new P(function(m,x){if(!M(p))return x(new TypeError("Promise.race accepts an array"));for(var f=0,g=p.length;f<g;f++)P.resolve(p[f]).then(m,x)})},P._immediateFn=typeof setImmediate=="function"&&function(p){setImmediate(p)}||function(p){B(p,0)},P._unhandledRejectionFn=function(p){typeof console<"u"&&console&&console.warn("Possible Unhandled Promise Rejection:",p)};const J=P;var me=/mobile/i.test(window.navigator.userAgent);const U={secondToTime:function(p){if((p=p||0)===0||p===1/0||p.toString()==="NaN")return"00:00";var m=Math.floor(p/3600),x=Math.floor((p-3600*m)/60),f=Math.floor(p-3600*m-60*x);return(m>0?[m,x,f]:[x,f]).map(function(g){return g<10?"0"+g:""+g}).join(":")},getElementViewLeft:function(p){var m=p.offsetLeft,x=p.offsetParent,f=document.body.scrollLeft+document.documentElement.scrollLeft;if(document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement)for(;x!==null&&x!==p;)m+=x.offsetLeft,x=x.offsetParent;else for(;x!==null;)m+=x.offsetLeft,x=x.offsetParent;return m-f},getBoundingClientRectViewLeft:function(p){var m=window.scrollY||window.pageYOffset||document.body.scrollTop+(document.documentElement&&document.documentElement.scrollTop||0);if(p.getBoundingClientRect){if(typeof this.getBoundingClientRectViewLeft.offset!="number"){var x=document.createElement("div");x.style.cssText="position:absolute;top:0;left:0;",document.body.appendChild(x),this.getBoundingClientRectViewLeft.offset=-x.getBoundingClientRect().top-m,document.body.removeChild(x),x=null}var f=p.getBoundingClientRect(),g=this.getBoundingClientRectViewLeft.offset;return f.left+g}return this.getElementViewLeft(p)},getScrollPosition:function(){return{left:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0,top:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}},setScrollPosition:function(p){var m=p.left,x=m===void 0?0:m,f=p.top,g=f===void 0?0:f;this.isFirefox?(document.documentElement.scrollLeft=x,document.documentElement.scrollTop=g):window.scrollTo(x,g)},isMobile:me,isFirefox:/firefox/i.test(window.navigator.userAgent),isChrome:/chrome/i.test(window.navigator.userAgent),isSafari:/safari/i.test(window.navigator.userAgent),storage:{set:function(p,m){localStorage.setItem(p,m)},get:function(p){return localStorage.getItem(p)}},nameMap:{dragStart:me?"touchstart":"mousedown",dragMove:me?"touchmove":"mousemove",dragEnd:me?"touchend":"mouseup"},color2Number:function(p){return p[0]==="#"&&(p=p.substr(1)),p.length===3&&(p="".concat(p[0]).concat(p[0]).concat(p[1]).concat(p[1]).concat(p[2]).concat(p[2])),parseInt(p,16)+0&16777215},number2Color:function(p){return"#"+("00000"+p.toString(16)).slice(-6)},number2Type:function(p){switch(p){case 0:default:return"right";case 1:return"top";case 2:return"bottom"}}};function H(p,m){return function(){return p.apply(m,arguments)}}function ie(p){return ie=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},ie(p)}var ne,de=Object.prototype.toString,fe=Object.getPrototypeOf,ge=(ne=Object.create(null),function(p){var m=de.call(p);return ne[m]||(ne[m]=m.slice(8,-1).toLowerCase())}),pe=function(p){return p=p.toLowerCase(),function(m){return ge(m)===p}},ke=function(p){return function(m){return ie(m)===p}},Ce=Array.isArray,Fe=ke("undefined"),Jt=pe("ArrayBuffer"),Ri=ke("string"),ot=ke("function"),Bt=ke("number"),Ct=function(p){return p!==null&&ie(p)==="object"},en=function(p){if(ge(p)!=="object")return!1;var m=fe(p);return!(m!==null&&m!==Object.prototype&&Object.getPrototypeOf(m)!==null||Symbol.toStringTag in p||Symbol.iterator in p)},ye=pe("Date"),De=pe("File"),Me=pe("Blob"),lt=pe("FileList"),$e=pe("URLSearchParams");function Ke(p,m){var x,f,g=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},b=g.allOwnKeys,E=b!==void 0&&b;if(p!=null)if(ie(p)!=="object"&&(p=[p]),Ce(p))for(x=0,f=p.length;x<f;x++)m.call(null,p[x],x,p);else{var C,w=E?Object.getOwnPropertyNames(p):Object.keys(p),O=w.length;for(x=0;x<O;x++)C=w[x],m.call(null,p[C],C,p)}}function Xe(p,m){m=m.toLowerCase();for(var x,f=Object.keys(p),g=f.length;g-- >0;)if(m===(x=f[g]).toLowerCase())return x;return null}var Pt,wt,tn=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:Id,mt=function(p){return!Fe(p)&&p!==tn},qn=(Pt=typeof Uint8Array<"u"&&fe(Uint8Array),function(p){return Pt&&p instanceof Pt}),_i=pe("HTMLFormElement"),nn=(wt=Object.prototype.hasOwnProperty,function(p,m){return wt.call(p,m)}),Kn=pe("RegExp"),gt=function(p,m){var x=Object.getOwnPropertyDescriptors(p),f={};Ke(x,function(g,b){m(g,b,p)!==!1&&(f[b]=g)}),Object.defineProperties(p,f)};const $={isArray:Ce,isArrayBuffer:Jt,isBuffer:function(p){return p!==null&&!Fe(p)&&p.constructor!==null&&!Fe(p.constructor)&&ot(p.constructor.isBuffer)&&p.constructor.isBuffer(p)},isFormData:function(p){var m="[object FormData]";return p&&(typeof FormData=="function"&&p instanceof FormData||de.call(p)===m||ot(p.toString)&&p.toString()===m)},isArrayBufferView:function(p){return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?ArrayBuffer.isView(p):p&&p.buffer&&Jt(p.buffer)},isString:Ri,isNumber:Bt,isBoolean:function(p){return p===!0||p===!1},isObject:Ct,isPlainObject:en,isUndefined:Fe,isDate:ye,isFile:De,isBlob:Me,isRegExp:Kn,isFunction:ot,isStream:function(p){return Ct(p)&&ot(p.pipe)},isURLSearchParams:$e,isTypedArray:qn,isFileList:lt,forEach:Ke,merge:function p(){for(var m=mt(this)&&this||{},x=m.caseless,f={},g=function(C,w){var O=x&&Xe(f,w)||w;en(f[O])&&en(C)?f[O]=p(f[O],C):en(C)?f[O]=p({},C):Ce(C)?f[O]=C.slice():f[O]=C},b=0,E=arguments.length;b<E;b++)arguments[b]&&Ke(arguments[b],g);return f},extend:function(p,m,x){var f=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},g=f.allOwnKeys;return Ke(m,function(b,E){x&&ot(b)?p[E]=H(b,x):p[E]=b},{allOwnKeys:g}),p},trim:function(p){return p.trim?p.trim():p.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")},stripBOM:function(p){return p.charCodeAt(0)===65279&&(p=p.slice(1)),p},inherits:function(p,m,x,f){p.prototype=Object.create(m.prototype,f),p.prototype.constructor=p,Object.defineProperty(p,"super",{value:m.prototype}),x&&Object.assign(p.prototype,x)},toFlatObject:function(p,m,x,f){var g,b,E,C={};if(m=m||{},p==null)return m;do{for(b=(g=Object.getOwnPropertyNames(p)).length;b-- >0;)E=g[b],f&&!f(E,p,m)||C[E]||(m[E]=p[E],C[E]=!0);p=x!==!1&&fe(p)}while(p&&(!x||x(p,m))&&p!==Object.prototype);return m},kindOf:ge,kindOfTest:pe,endsWith:function(p,m,x){p=String(p),(x===void 0||x>p.length)&&(x=p.length),x-=m.length;var f=p.indexOf(m,x);return f!==-1&&f===x},toArray:function(p){if(!p)return null;if(Ce(p))return p;var m=p.length;if(!Bt(m))return null;for(var x=new Array(m);m-- >0;)x[m]=p[m];return x},forEachEntry:function(p,m){for(var x,f=(p&&p[Symbol.iterator]).call(p);(x=f.next())&&!x.done;){var g=x.value;m.call(p,g[0],g[1])}},matchAll:function(p,m){for(var x,f=[];(x=p.exec(m))!==null;)f.push(x);return f},isHTMLForm:_i,hasOwnProperty:nn,hasOwnProp:nn,reduceDescriptors:gt,freezeMethods:function(p){gt(p,function(m,x){if(ot(p)&&["arguments","caller","callee"].indexOf(x)!==-1)return!1;var f=p[x];ot(f)&&(m.enumerable=!1,"writable"in m?m.writable=!1:m.set||(m.set=function(){throw Error("Can not rewrite read-only method '"+x+"'")}))})},toObjectSet:function(p,m){var x={},f=function(g){g.forEach(function(b){x[b]=!0})};return Ce(p)?f(p):f(String(p).split(m)),x},toCamelCase:function(p){return p.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,function(m,x,f){return x.toUpperCase()+f})},noop:function(){},toFiniteNumber:function(p,m){return p=+p,Number.isFinite(p)?p:m},findKey:Xe,global:tn,isContextDefined:mt,toJSONObject:function(p){var m=new Array(10);return function x(f,g){if(Ct(f)){if(m.indexOf(f)>=0)return;if(!("toJSON"in f)){m[g]=f;var b=Ce(f)?[]:{};return Ke(f,function(E,C){var w=x(E,g+1);!Fe(w)&&(b[C]=w)}),m[g]=void 0,b}}return f}(p,0)}};function Ot(p,m,x,f,g){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=p,this.name="AxiosError",m&&(this.code=m),x&&(this.config=x),f&&(this.request=f),g&&(this.response=g)}$.inherits(Ot,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:$.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var qr=Ot.prototype,Kr={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(function(p){Kr[p]={value:p}}),Object.defineProperties(Ot,Kr),Object.defineProperty(qr,"isAxiosError",{value:!0}),Ot.from=function(p,m,x,f,g,b){var E=Object.create(qr);return $.toFlatObject(p,E,function(C){return C!==Error.prototype},function(C){return C!=="isAxiosError"}),Ot.call(E,p.message,m,x,f,g),E.cause=p,E.name=p.name,b&&Object.assign(E,b),E};const ve=Ot,wo=i(937);function Di(p){return Di=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},Di(p)}function Bi(p){return $.isPlainObject(p)||$.isArray(p)}function Hr(p){return $.endsWith(p,"[]")?p.slice(0,-2):p}function zr(p,m,x){return p?p.concat(m).map(function(f,g){return f=Hr(f),!x&&g?"["+f+"]":f}).join(x?".":""):m}var ko=$.toFlatObject($,{},null,function(p){return/^is[A-Z]/.test(p)});const Hn=function(p,m,x){if(!$.isObject(p))throw new TypeError("target must be an object");m=m||new(wo||FormData);var f,g=(x=$.toFlatObject(x,{metaTokens:!0,dots:!1,indexes:!1},!1,function(X,j){return!$.isUndefined(j[X])})).metaTokens,b=x.visitor||N,E=x.dots,C=x.indexes,w=(x.Blob||typeof Blob<"u"&&Blob)&&(f=m)&&$.isFunction(f.append)&&f[Symbol.toStringTag]==="FormData"&&f[Symbol.iterator];if(!$.isFunction(b))throw new TypeError("visitor must be a function");function O(X){if(X===null)return"";if($.isDate(X))return X.toISOString();if(!w&&$.isBlob(X))throw new ve("Blob is not supported. Use a Buffer instead.");return $.isArrayBuffer(X)||$.isTypedArray(X)?w&&typeof Blob=="function"?new Blob([X]):Buffer.from(X):X}function N(X,j,V){var Z=X;if(X&&!V&&Di(X)==="object"){if($.endsWith(j,"{}"))j=g?j:j.slice(0,-2),X=JSON.stringify(X);else if($.isArray(X)&&function(se){return $.isArray(se)&&!se.some(Bi)}(X)||$.isFileList(X)||$.endsWith(j,"[]")&&(Z=$.toArray(X)))return j=Hr(j),Z.forEach(function(se,Re){!$.isUndefined(se)&&se!==null&&m.append(C===!0?zr([j],Re,E):C===null?j:j+"[]",O(se))}),!1}return!!Bi(X)||(m.append(zr(V,j,E),O(X)),!1)}var z=[],W=Object.assign(ko,{defaultVisitor:N,convertValue:O,isVisitable:Bi});if(!$.isObject(p))throw new TypeError("data must be an object");return function X(j,V){if(!$.isUndefined(j)){if(z.indexOf(j)!==-1)throw Error("Circular reference detected in "+V.join("."));z.push(j),$.forEach(j,function(Z,se){(!($.isUndefined(Z)||Z===null)&&b.call(m,Z,$.isString(se)?se.trim():se,V,W))===!0&&X(Z,V?V.concat(se):[se])}),z.pop()}}(p),m};function Yr(p){var m={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(p).replace(/[!'()~]|%20|%00/g,function(x){return m[x]})}function Vr(p,m){this._pairs=[],p&&Hn(p,this,m)}var Wr=Vr.prototype;Wr.append=function(p,m){this._pairs.push([p,m])},Wr.toString=function(p){var m=p?function(x){return p.call(this,x,Yr)}:Yr;return this._pairs.map(function(x){return m(x[0])+"="+m(x[1])},"").join("&")};const jr=Vr;function Io(p){return encodeURIComponent(p).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Qr(p,m,x){if(!m)return p;var f,g=x&&x.encode||Io,b=x&&x.serialize;if(f=b?b(m,x):$.isURLSearchParams(m)?m.toString():new jr(m,x).toString(g)){var E=p.indexOf("#");E!==-1&&(p=p.slice(0,E)),p+=(p.indexOf("?")===-1?"?":"&")+f}return p}function rn(p){return rn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},rn(p)}function Lo(p,m){for(var x=0;x<m.length;x++){var f=m[x];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(g=function(b,E){if(rn(b)!=="object"||b===null)return b;var C=b[Symbol.toPrimitive];if(C!==void 0){var w=C.call(b,"string");if(rn(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(b)}(f.key),rn(g)==="symbol"?g:String(g)),f)}var g}var Ro=function(){function p(){(function(f,g){if(!(f instanceof g))throw new TypeError("Cannot call a class as a function")})(this,p),this.handlers=[]}var m,x;return m=p,x=[{key:"use",value:function(f,g,b){return this.handlers.push({fulfilled:f,rejected:g,synchronous:!!b&&b.synchronous,runWhen:b?b.runWhen:null}),this.handlers.length-1}},{key:"eject",value:function(f){this.handlers[f]&&(this.handlers[f]=null)}},{key:"clear",value:function(){this.handlers&&(this.handlers=[])}},{key:"forEach",value:function(f){$.forEach(this.handlers,function(g){g!==null&&f(g)})}}],x&&Lo(m.prototype,x),Object.defineProperty(m,"prototype",{writable:!1}),p}();const Xr=Ro,Zr={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},_o=typeof URLSearchParams<"u"?URLSearchParams:jr,Do=FormData;var Pi,Bo=(typeof navigator>"u"||(Pi=navigator.product)!=="ReactNative"&&Pi!=="NativeScript"&&Pi!=="NS")&&typeof window<"u"&&typeof document<"u",Po=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function";const Ze={isBrowser:!0,classes:{URLSearchParams:_o,FormData:Do,Blob},isStandardBrowserEnv:Bo,isStandardBrowserWebWorkerEnv:Po,protocols:["http","https","file","blob","url","data"]},Jr=function(p){function m(f,g,b,E){var C=f[E++],w=Number.isFinite(+C),O=E>=f.length;return C=!C&&$.isArray(b)?b.length:C,O?($.hasOwnProp(b,C)?b[C]=[b[C],g]:b[C]=g,!w):(b[C]&&$.isObject(b[C])||(b[C]=[]),m(f,g,b[C],E)&&$.isArray(b[C])&&(b[C]=function(N){var z,W,X={},j=Object.keys(N),V=j.length;for(z=0;z<V;z++)X[W=j[z]]=N[W];return X}(b[C])),!w)}if($.isFormData(p)&&$.isFunction(p.entries)){var x={};return $.forEachEntry(p,function(f,g){m(function(b){return $.matchAll(/\w+|\[(\w*)]/g,b).map(function(E){return E[0]==="[]"?"":E[1]||E[0]})}(f),g,x,0)}),x}return null};var Oo={"Content-Type":void 0},zn={transitional:Zr,adapter:["xhr","http"],transformRequest:[function(p,m){var x,f=m.getContentType()||"",g=f.indexOf("application/json")>-1,b=$.isObject(p);if(b&&$.isHTMLForm(p)&&(p=new FormData(p)),$.isFormData(p))return g&&g?JSON.stringify(Jr(p)):p;if($.isArrayBuffer(p)||$.isBuffer(p)||$.isStream(p)||$.isFile(p)||$.isBlob(p))return p;if($.isArrayBufferView(p))return p.buffer;if($.isURLSearchParams(p))return m.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),p.toString();if(b){if(f.indexOf("application/x-www-form-urlencoded")>-1)return function(C,w){return Hn(C,new Ze.classes.URLSearchParams,Object.assign({visitor:function(O,N,z,W){return Ze.isNode&&$.isBuffer(O)?(this.append(N,O.toString("base64")),!1):W.defaultVisitor.apply(this,arguments)}},w))}(p,this.formSerializer).toString();if((x=$.isFileList(p))||f.indexOf("multipart/form-data")>-1){var E=this.env&&this.env.FormData;return Hn(x?{"files[]":p}:p,E&&new E,this.formSerializer)}}return b||g?(m.setContentType("application/json",!1),function(C,w,O){if($.isString(C))try{return(0,JSON.parse)(C),$.trim(C)}catch(N){if(N.name!=="SyntaxError")throw N}return(0,JSON.stringify)(C)}(p)):p}],transformResponse:[function(p){var m=this.transitional||zn.transitional,x=m&&m.forcedJSONParsing,f=this.responseType==="json";if(p&&$.isString(p)&&(x&&!this.responseType||f)){var g=!(m&&m.silentJSONParsing)&&f;try{return JSON.parse(p)}catch(b){if(g)throw b.name==="SyntaxError"?ve.from(b,ve.ERR_BAD_RESPONSE,this,null,this.response):b}}return p}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ze.classes.FormData,Blob:Ze.classes.Blob},validateStatus:function(p){return p>=200&&p<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};$.forEach(["delete","get","head"],function(p){zn.headers[p]={}}),$.forEach(["post","put","patch"],function(p){zn.headers[p]=$.merge(Oo)});const Oi=zn;var Fo=$.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);function sn(p){return sn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},sn(p)}function es(p,m){(m==null||m>p.length)&&(m=p.length);for(var x=0,f=new Array(m);x<m;x++)f[x]=p[x];return f}function ts(p,m){for(var x=0;x<m.length;x++){var f=m[x];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(g=function(b,E){if(sn(b)!=="object"||b===null)return b;var C=b[Symbol.toPrimitive];if(C!==void 0){var w=C.call(b,"string");if(sn(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(b)}(f.key),sn(g)==="symbol"?g:String(g)),f)}var g}var ns=Symbol("internals");function an(p){return p&&String(p).trim().toLowerCase()}function Yn(p){return p===!1||p==null?p:$.isArray(p)?p.map(Yn):String(p)}function is(p,m,x,f){return $.isFunction(f)?f.call(this,m,x):$.isString(m)?$.isString(f)?m.indexOf(f)!==-1:$.isRegExp(f)?f.test(m):void 0:void 0}var Vn=function(p,m){function x(E){(function(C,w){if(!(C instanceof w))throw new TypeError("Cannot call a class as a function")})(this,x),E&&this.set(E)}var f,g,b;return f=x,g=[{key:"set",value:function(E,C,w){var O=this;function N(se,Re,we){var xe=an(Re);if(!xe)throw new Error("header name must be a non-empty string");var bt=$.findKey(O,xe);(!bt||O[bt]===void 0||we===!0||we===void 0&&O[bt]!==!1)&&(O[bt||Re]=Yn(se))}var z,W,X,j,V,Z=function(se,Re){return $.forEach(se,function(we,xe){return N(we,xe,Re)})};return $.isPlainObject(E)||E instanceof this.constructor?Z(E,C):$.isString(E)&&(E=E.trim())&&!/^[-_a-zA-Z]+$/.test(E.trim())?Z((V={},(z=E)&&z.split(`
`).forEach(function(se){j=se.indexOf(":"),W=se.substring(0,j).trim().toLowerCase(),X=se.substring(j+1).trim(),!W||V[W]&&Fo[W]||(W==="set-cookie"?V[W]?V[W].push(X):V[W]=[X]:V[W]=V[W]?V[W]+", "+X:X)}),V),C):E!=null&&N(C,E,w),this}},{key:"get",value:function(E,C){if(E=an(E)){var w=$.findKey(this,E);if(w){var O=this[w];if(!C)return O;if(C===!0)return function(N){for(var z,W=Object.create(null),X=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;z=X.exec(N);)W[z[1]]=z[2];return W}(O);if($.isFunction(C))return C.call(this,O,w);if($.isRegExp(C))return C.exec(O);throw new TypeError("parser must be boolean|regexp|function")}}}},{key:"has",value:function(E,C){if(E=an(E)){var w=$.findKey(this,E);return!(!w||C&&!is(0,this[w],w,C))}return!1}},{key:"delete",value:function(E,C){var w=this,O=!1;function N(z){if(z=an(z)){var W=$.findKey(w,z);!W||C&&!is(0,w[W],W,C)||(delete w[W],O=!0)}}return $.isArray(E)?E.forEach(N):N(E),O}},{key:"clear",value:function(){return Object.keys(this).forEach(this.delete.bind(this))}},{key:"normalize",value:function(E){var C=this,w={};return $.forEach(this,function(O,N){var z=$.findKey(w,N);if(z)return C[z]=Yn(O),void delete C[N];var W=E?function(X){return X.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,function(j,V,Z){return V.toUpperCase()+Z})}(N):String(N).trim();W!==N&&delete C[N],C[W]=Yn(O),w[W]=!0}),this}},{key:"concat",value:function(){for(var E,C=arguments.length,w=new Array(C),O=0;O<C;O++)w[O]=arguments[O];return(E=this.constructor).concat.apply(E,[this].concat(w))}},{key:"toJSON",value:function(E){var C=Object.create(null);return $.forEach(this,function(w,O){w!=null&&w!==!1&&(C[O]=E&&$.isArray(w)?w.join(", "):w)}),C}},{key:Symbol.iterator,value:function(){return Object.entries(this.toJSON())[Symbol.iterator]()}},{key:"toString",value:function(){return Object.entries(this.toJSON()).map(function(E){var C,w,O=(w=2,function(N){if(Array.isArray(N))return N}(C=E)||function(N,z){var W=N==null?null:typeof Symbol<"u"&&N[Symbol.iterator]||N["@@iterator"];if(W!=null){var X,j,V,Z,se=[],Re=!0,we=!1;try{if(V=(W=W.call(N)).next,z===0){if(Object(W)!==W)return;Re=!1}else for(;!(Re=(X=V.call(W)).done)&&(se.push(X.value),se.length!==z);Re=!0);}catch(xe){we=!0,j=xe}finally{try{if(!Re&&W.return!=null&&(Z=W.return(),Object(Z)!==Z))return}finally{if(we)throw j}}return se}}(C,w)||function(N,z){if(N){if(typeof N=="string")return es(N,z);var W=Object.prototype.toString.call(N).slice(8,-1);return W==="Object"&&N.constructor&&(W=N.constructor.name),W==="Map"||W==="Set"?Array.from(N):W==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(W)?es(N,z):void 0}}(C,w)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}());return O[0]+": "+O[1]}).join(`
`)}},{key:Symbol.toStringTag,get:function(){return"AxiosHeaders"}}],b=[{key:"from",value:function(E){return E instanceof this?E:new this(E)}},{key:"concat",value:function(E){for(var C=new this(E),w=arguments.length,O=new Array(w>1?w-1:0),N=1;N<w;N++)O[N-1]=arguments[N];return O.forEach(function(z){return C.set(z)}),C}},{key:"accessor",value:function(E){var C=(this[ns]=this[ns]={accessors:{}}).accessors,w=this.prototype;function O(N){var z=an(N);C[z]||(function(W,X){var j=$.toCamelCase(" "+X);["get","set","has"].forEach(function(V){Object.defineProperty(W,V+j,{value:function(Z,se,Re){return this[V].call(this,X,Z,se,Re)},configurable:!0})})}(w,N),C[z]=!0)}return $.isArray(E)?E.forEach(O):O(E),this}}],g&&ts(f.prototype,g),b&&ts(f,b),Object.defineProperty(f,"prototype",{writable:!1}),x}();Vn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]),$.freezeMethods(Vn.prototype),$.freezeMethods(Vn);const dt=Vn;function Fi(p,m){var x=this||Oi,f=m||x,g=dt.from(f.headers),b=f.data;return $.forEach(p,function(E){b=E.call(x,b,g.normalize(),m?m.status:void 0)}),g.normalize(),b}function rs(p){return!(!p||!p.__CANCEL__)}function ss(p,m,x){ve.call(this,p??"canceled",ve.ERR_CANCELED,m,x),this.name="CanceledError"}$.inherits(ss,ve,{__CANCEL__:!0});const Wn=ss,Mo=Ze.isStandardBrowserEnv?{write:function(p,m,x,f,g,b){var E=[];E.push(p+"="+encodeURIComponent(m)),$.isNumber(x)&&E.push("expires="+new Date(x).toGMTString()),$.isString(f)&&E.push("path="+f),$.isString(g)&&E.push("domain="+g),b===!0&&E.push("secure"),document.cookie=E.join("; ")},read:function(p){var m=document.cookie.match(new RegExp("(^|;\\s*)("+p+")=([^;]*)"));return m?decodeURIComponent(m[3]):null},remove:function(p){this.write(p,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function as(p,m){return p&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(m)?function(x,f){return f?x.replace(/\/+$/,"")+"/"+f.replace(/^\/+/,""):x}(p,m):m}const No=Ze.isStandardBrowserEnv?function(){var p,m=/(msie|trident)/i.test(navigator.userAgent),x=document.createElement("a");function f(g){var b=g;return m&&(x.setAttribute("href",b),b=x.href),x.setAttribute("href",b),{href:x.href,protocol:x.protocol?x.protocol.replace(/:$/,""):"",host:x.host,search:x.search?x.search.replace(/^\?/,""):"",hash:x.hash?x.hash.replace(/^#/,""):"",hostname:x.hostname,port:x.port,pathname:x.pathname.charAt(0)==="/"?x.pathname:"/"+x.pathname}}return p=f(window.location.href),function(g){var b=$.isString(g)?f(g):g;return b.protocol===p.protocol&&b.host===p.host}}():function(){return!0};function os(p,m){var x=0,f=function(g,b){g=g||10;var E,C=new Array(g),w=new Array(g),O=0,N=0;return b=b!==void 0?b:1e3,function(z){var W=Date.now(),X=w[N];E||(E=W),C[O]=z,w[O]=W;for(var j=N,V=0;j!==O;)V+=C[j++],j%=g;if((O=(O+1)%g)===N&&(N=(N+1)%g),!(W-E<b)){var Z=X&&W-X;return Z?Math.round(1e3*V/Z):void 0}}}(50,250);return function(g){var b=g.loaded,E=g.lengthComputable?g.total:void 0,C=b-x,w=f(C);x=b;var O={loaded:b,total:E,progress:E?b/E:void 0,bytes:C,rate:w||void 0,estimated:w&&E&&b<=E?(E-b)/w:void 0,event:g};O[m?"download":"upload"]=!0,p(O)}}var Mi={http:null,xhr:typeof XMLHttpRequest<"u"&&function(p){return new Promise(function(m,x){var f,g=p.data,b=dt.from(p.headers).normalize(),E=p.responseType;function C(){p.cancelToken&&p.cancelToken.unsubscribe(f),p.signal&&p.signal.removeEventListener("abort",f)}$.isFormData(g)&&(Ze.isStandardBrowserEnv||Ze.isStandardBrowserWebWorkerEnv)&&b.setContentType(!1);var w=new XMLHttpRequest;if(p.auth){var O=p.auth.username||"",N=p.auth.password?unescape(encodeURIComponent(p.auth.password)):"";b.set("Authorization","Basic "+btoa(O+":"+N))}var z=as(p.baseURL,p.url);function W(){if(w){var Z=dt.from("getAllResponseHeaders"in w&&w.getAllResponseHeaders());(function(se,Re,we){var xe=we.config.validateStatus;we.status&&xe&&!xe(we.status)?Re(new ve("Request failed with status code "+we.status,[ve.ERR_BAD_REQUEST,ve.ERR_BAD_RESPONSE][Math.floor(we.status/100)-4],we.config,we.request,we)):se(we)})(function(se){m(se),C()},function(se){x(se),C()},{data:E&&E!=="text"&&E!=="json"?w.response:w.responseText,status:w.status,statusText:w.statusText,headers:Z,config:p,request:w}),w=null}}if(w.open(p.method.toUpperCase(),Qr(z,p.params,p.paramsSerializer),!0),w.timeout=p.timeout,"onloadend"in w?w.onloadend=W:w.onreadystatechange=function(){w&&w.readyState===4&&(w.status!==0||w.responseURL&&w.responseURL.indexOf("file:")===0)&&setTimeout(W)},w.onabort=function(){w&&(x(new ve("Request aborted",ve.ECONNABORTED,p,w)),w=null)},w.onerror=function(){x(new ve("Network Error",ve.ERR_NETWORK,p,w)),w=null},w.ontimeout=function(){var Z=p.timeout?"timeout of "+p.timeout+"ms exceeded":"timeout exceeded",se=p.transitional||Zr;p.timeoutErrorMessage&&(Z=p.timeoutErrorMessage),x(new ve(Z,se.clarifyTimeoutError?ve.ETIMEDOUT:ve.ECONNABORTED,p,w)),w=null},Ze.isStandardBrowserEnv){var X=(p.withCredentials||No(z))&&p.xsrfCookieName&&Mo.read(p.xsrfCookieName);X&&b.set(p.xsrfHeaderName,X)}g===void 0&&b.setContentType(null),"setRequestHeader"in w&&$.forEach(b.toJSON(),function(Z,se){w.setRequestHeader(se,Z)}),$.isUndefined(p.withCredentials)||(w.withCredentials=!!p.withCredentials),E&&E!=="json"&&(w.responseType=p.responseType),typeof p.onDownloadProgress=="function"&&w.addEventListener("progress",os(p.onDownloadProgress,!0)),typeof p.onUploadProgress=="function"&&w.upload&&w.upload.addEventListener("progress",os(p.onUploadProgress)),(p.cancelToken||p.signal)&&(f=function(Z){w&&(x(!Z||Z.type?new Wn(null,p,w):Z),w.abort(),w=null)},p.cancelToken&&p.cancelToken.subscribe(f),p.signal&&(p.signal.aborted?f():p.signal.addEventListener("abort",f)));var j,V=(j=/^([-+\w]{1,25})(:?\/\/|:)/.exec(z))&&j[1]||"";V&&Ze.protocols.indexOf(V)===-1?x(new ve("Unsupported protocol "+V+":",ve.ERR_BAD_REQUEST,p)):w.send(g||null)})}};$.forEach(Mi,function(p,m){if(p){try{Object.defineProperty(p,"name",{value:m})}catch{}Object.defineProperty(p,"adapterName",{value:m})}});function Ni(p){if(p.cancelToken&&p.cancelToken.throwIfRequested(),p.signal&&p.signal.aborted)throw new Wn(null,p)}function ls(p){return Ni(p),p.headers=dt.from(p.headers),p.data=Fi.call(p,p.transformRequest),["post","put","patch"].indexOf(p.method)!==-1&&p.headers.setContentType("application/x-www-form-urlencoded",!1),function(m){for(var x,f,g=(m=$.isArray(m)?m:[m]).length,b=0;b<g&&(x=m[b],!(f=$.isString(x)?Mi[x.toLowerCase()]:x));b++);if(!f)throw f===!1?new ve("Adapter ".concat(x," is not supported by the environment"),"ERR_NOT_SUPPORT"):new Error($.hasOwnProp(Mi,x)?"Adapter '".concat(x,"' is not available in the build"):"Unknown adapter '".concat(x,"'"));if(!$.isFunction(f))throw new TypeError("adapter is not a function");return f}(p.adapter||Oi.adapter)(p).then(function(m){return Ni(p),m.data=Fi.call(p,p.transformResponse,m),m.headers=dt.from(m.headers),m},function(m){return rs(m)||(Ni(p),m&&m.response&&(m.response.data=Fi.call(p,p.transformResponse,m.response),m.response.headers=dt.from(m.response.headers))),Promise.reject(m)})}var ds=function(p){return p instanceof dt?p.toJSON():p};function Ft(p,m){m=m||{};var x={};function f(O,N,z){return $.isPlainObject(O)&&$.isPlainObject(N)?$.merge.call({caseless:z},O,N):$.isPlainObject(N)?$.merge({},N):$.isArray(N)?N.slice():N}function g(O,N,z){return $.isUndefined(N)?$.isUndefined(O)?void 0:f(void 0,O,z):f(O,N,z)}function b(O,N){if(!$.isUndefined(N))return f(void 0,N)}function E(O,N){return $.isUndefined(N)?$.isUndefined(O)?void 0:f(void 0,O):f(void 0,N)}function C(O,N,z){return z in m?f(O,N):z in p?f(void 0,O):void 0}var w={url:b,method:b,data:b,baseURL:E,transformRequest:E,transformResponse:E,paramsSerializer:E,timeout:E,timeoutMessage:E,withCredentials:E,adapter:E,responseType:E,xsrfCookieName:E,xsrfHeaderName:E,onUploadProgress:E,onDownloadProgress:E,decompress:E,maxContentLength:E,maxBodyLength:E,beforeRedirect:E,transport:E,httpAgent:E,httpsAgent:E,cancelToken:E,socketPath:E,responseEncoding:E,validateStatus:C,headers:function(O,N){return g(ds(O),ds(N),!0)}};return $.forEach(Object.keys(p).concat(Object.keys(m)),function(O){var N=w[O]||g,z=N(p[O],m[O],O);$.isUndefined(z)&&N!==C||(x[O]=z)}),x}function jn(p){return jn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},jn(p)}var Ui={};["object","boolean","number","function","string","symbol"].forEach(function(p,m){Ui[p]=function(x){return jn(x)===p||"a"+(m<1?"n ":" ")+p}});var cs={};Ui.transitional=function(p,m,x){function f(g,b){return"[Axios v1.2.3] Transitional option '"+g+"'"+b+(x?". "+x:"")}return function(g,b,E){if(p===!1)throw new ve(f(b," has been removed"+(m?" in "+m:"")),ve.ERR_DEPRECATED);return m&&!cs[b]&&(cs[b]=!0,console.warn(f(b," has been deprecated since v"+m+" and will be removed in the near future"))),!p||p(g,b,E)}};const $i={assertOptions:function(p,m,x){if(jn(p)!=="object")throw new ve("options must be an object",ve.ERR_BAD_OPTION_VALUE);for(var f=Object.keys(p),g=f.length;g-- >0;){var b=f[g],E=m[b];if(E){var C=p[b],w=C===void 0||E(C,b,p);if(w!==!0)throw new ve("option "+b+" must be "+w,ve.ERR_BAD_OPTION_VALUE)}else if(x!==!0)throw new ve("Unknown option "+b,ve.ERR_BAD_OPTION)}},validators:Ui};function on(p){return on=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},on(p)}function Uo(p,m){for(var x=0;x<m.length;x++){var f=m[x];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(g=function(b,E){if(on(b)!=="object"||b===null)return b;var C=b[Symbol.toPrimitive];if(C!==void 0){var w=C.call(b,"string");if(on(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(b)}(f.key),on(g)==="symbol"?g:String(g)),f)}var g}var yt=$i.validators,Qn=function(){function p(f){(function(g,b){if(!(g instanceof b))throw new TypeError("Cannot call a class as a function")})(this,p),this.defaults=f,this.interceptors={request:new Xr,response:new Xr}}var m,x;return m=p,(x=[{key:"request",value:function(f,g){typeof f=="string"?(g=g||{}).url=f:g=f||{};var b,E=g=Ft(this.defaults,g),C=E.transitional,w=E.paramsSerializer,O=E.headers;C!==void 0&&$i.assertOptions(C,{silentJSONParsing:yt.transitional(yt.boolean),forcedJSONParsing:yt.transitional(yt.boolean),clarifyTimeoutError:yt.transitional(yt.boolean)},!1),w!==void 0&&$i.assertOptions(w,{encode:yt.function,serialize:yt.function},!0),g.method=(g.method||this.defaults.method||"get").toLowerCase(),(b=O&&$.merge(O.common,O[g.method]))&&$.forEach(["delete","get","head","post","put","patch","common"],function(xe){delete O[xe]}),g.headers=dt.concat(b,O);var N=[],z=!0;this.interceptors.request.forEach(function(xe){typeof xe.runWhen=="function"&&xe.runWhen(g)===!1||(z=z&&xe.synchronous,N.unshift(xe.fulfilled,xe.rejected))});var W,X=[];this.interceptors.response.forEach(function(xe){X.push(xe.fulfilled,xe.rejected)});var j,V=0;if(!z){var Z=[ls.bind(this),void 0];for(Z.unshift.apply(Z,N),Z.push.apply(Z,X),j=Z.length,W=Promise.resolve(g);V<j;)W=W.then(Z[V++],Z[V++]);return W}j=N.length;var se=g;for(V=0;V<j;){var Re=N[V++],we=N[V++];try{se=Re(se)}catch(xe){we.call(this,xe);break}}try{W=ls.call(this,se)}catch(xe){return Promise.reject(xe)}for(V=0,j=X.length;V<j;)W=W.then(X[V++],X[V++]);return W}},{key:"getUri",value:function(f){return Qr(as((f=Ft(this.defaults,f)).baseURL,f.url),f.params,f.paramsSerializer)}}])&&Uo(m.prototype,x),Object.defineProperty(m,"prototype",{writable:!1}),p}();$.forEach(["delete","get","head","options"],function(p){Qn.prototype[p]=function(m,x){return this.request(Ft(x||{},{method:p,url:m,data:(x||{}).data}))}}),$.forEach(["post","put","patch"],function(p){function m(x){return function(f,g,b){return this.request(Ft(b||{},{method:p,headers:x?{"Content-Type":"multipart/form-data"}:{},url:f,data:g}))}}Qn.prototype[p]=m(),Qn.prototype[p+"Form"]=m(!0)});const Xn=Qn;function ln(p){return ln=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},ln(p)}function us(p,m){for(var x=0;x<m.length;x++){var f=m[x];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(g=function(b,E){if(ln(b)!=="object"||b===null)return b;var C=b[Symbol.toPrimitive];if(C!==void 0){var w=C.call(b,"string");if(ln(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(b)}(f.key),ln(g)==="symbol"?g:String(g)),f)}var g}var $o=function(){function p(g){if(function(C,w){if(!(C instanceof w))throw new TypeError("Cannot call a class as a function")}(this,p),typeof g!="function")throw new TypeError("executor must be a function.");var b;this.promise=new Promise(function(C){b=C});var E=this;this.promise.then(function(C){if(E._listeners){for(var w=E._listeners.length;w-- >0;)E._listeners[w](C);E._listeners=null}}),this.promise.then=function(C){var w,O=new Promise(function(N){E.subscribe(N),w=N}).then(C);return O.cancel=function(){E.unsubscribe(w)},O},g(function(C,w,O){E.reason||(E.reason=new Wn(C,w,O),b(E.reason))})}var m,x,f;return m=p,x=[{key:"throwIfRequested",value:function(){if(this.reason)throw this.reason}},{key:"subscribe",value:function(g){this.reason?g(this.reason):this._listeners?this._listeners.push(g):this._listeners=[g]}},{key:"unsubscribe",value:function(g){if(this._listeners){var b=this._listeners.indexOf(g);b!==-1&&this._listeners.splice(b,1)}}}],f=[{key:"source",value:function(){var g;return{token:new p(function(b){g=b}),cancel:g}}}],x&&us(m.prototype,x),f&&us(m,f),Object.defineProperty(m,"prototype",{writable:!1}),p}();const Go=$o;function hs(p,m){(m==null||m>p.length)&&(m=p.length);for(var x=0,f=new Array(m);x<m;x++)f[x]=p[x];return f}var Gi={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Gi).forEach(function(p){var m,x,f=(x=2,function(E){if(Array.isArray(E))return E}(m=p)||function(E,C){var w=E==null?null:typeof Symbol<"u"&&E[Symbol.iterator]||E["@@iterator"];if(w!=null){var O,N,z,W,X=[],j=!0,V=!1;try{if(z=(w=w.call(E)).next,C===0){if(Object(w)!==w)return;j=!1}else for(;!(j=(O=z.call(w)).done)&&(X.push(O.value),X.length!==C);j=!0);}catch(Z){V=!0,N=Z}finally{try{if(!j&&w.return!=null&&(W=w.return(),Object(W)!==W))return}finally{if(V)throw N}}return X}}(m,x)||function(E,C){if(E){if(typeof E=="string")return hs(E,C);var w=Object.prototype.toString.call(E).slice(8,-1);return w==="Object"&&E.constructor&&(w=E.constructor.name),w==="Map"||w==="Set"?Array.from(E):w==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(w)?hs(E,C):void 0}}(m,x)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()),g=f[0],b=f[1];Gi[b]=g});const qo=Gi;var Le=function p(m){var x=new Xn(m),f=H(Xn.prototype.request,x);return $.extend(f,Xn.prototype,x,{allOwnKeys:!0}),$.extend(f,x,null,{allOwnKeys:!0}),f.create=function(g){return p(Ft(m,g))},f}(Oi);Le.Axios=Xn,Le.CanceledError=Wn,Le.CancelToken=Go,Le.isCancel=rs,Le.VERSION="1.2.3",Le.toFormData=Hn,Le.AxiosError=ve,Le.Cancel=Le.CanceledError,Le.all=function(p){return Promise.all(p)},Le.spread=function(p){return function(m){return p.apply(null,m)}},Le.isAxiosError=function(p){return $.isObject(p)&&p.isAxiosError===!0},Le.mergeConfig=Ft,Le.AxiosHeaders=dt,Le.formToJSON=function(p){return Jr($.isHTMLForm(p)?new FormData(p):p)},Le.HttpStatusCode=qo,Le.default=Le;const fs=Le,Ko={send:function(p){fs.post(p.url,p.data).then(function(m){var x=m.data;x&&x.code===0?p.success&&p.success(x):p.error&&p.error(x&&x.msg)}).catch(function(m){console.error(m),p.error&&p.error()})},read:function(p){fs.get(p.url).then(function(m){var x=m.data;x&&x.code===0?p.success&&p.success(x.data.map(function(f){return{time:f[0],type:f[1],color:f[2],author:f[3],text:f[4]}})):p.error&&p.error(x&&x.msg)}).catch(function(m){console.error(m),p.error&&p.error()})}};function qi(p){return qi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},qi(p)}function Ho(p){var m=this;this.lang=p,this.fallbackLang=this.lang.includes("-")?this.lang.split("-")[0]:this.lang,this.tran=function(x){return x=x.toLowerCase(),Mt[m.lang]&&Mt[m.lang][x]?Mt[m.lang][x]:Mt[m.fallbackLang]&&Mt[m.fallbackLang][x]?Mt[m.fallbackLang][x]:Ki[x]?Ki[x]:x}}var Ki={"danmaku-loading":"Danmaku is loading",top:"Top",bottom:"Bottom",rolling:"Rolling","input-danmaku-enter":"Input danmaku, hit Enter","about-author":"About author","dplayer-feedback":"DPlayer feedback","about-dplayer":"About DPlayer",loop:"Loop",speed:"Speed","opacity-danmaku":"Opacity for danmaku",normal:"Normal","please-input-danmaku":"Please input danmaku content!","set-danmaku-color":"Set danmaku color","set-danmaku-type":"Set danmaku type","show-danmaku":"Show danmaku","video-failed":"Video load failed","danmaku-failed":"Danmaku load failed","danmaku-send-failed":"Danmaku send failed","switching-quality":"Switching to %q quality","switched-quality":"Switched to %q quality",ff:"FF %s s",rew:"REW %s s","unlimited-danmaku":"Unlimited danmaku","send-danmaku":"Send danmaku",setting:"Setting",fullscreen:"Full screen","web-fullscreen":"Web full screen",send:"Send",screenshot:"Screenshot",airplay:"AirPlay",chromecast:"ChromeCast",subtitle:"Subtitle",off:"Off","show-subs":"Show subtitle","hide-subs":"Hide subtitle",volume:"Volume",live:"Live","video-info":"Video info"},Mt={en:Ki,"zh-cn":{"danmaku-loading":"弹幕加载中",top:"顶部",bottom:"底部",rolling:"滚动","input-danmaku-enter":"输入弹幕，回车发送","about-author":"关于作者","dplayer-feedback":"播放器意见反馈","about-dplayer":"关于 DPlayer 播放器",loop:"洗脑循环",speed:"速度","opacity-danmaku":"弹幕透明度",normal:"正常","please-input-danmaku":"要输入弹幕内容啊喂！","set-danmaku-color":"设置弹幕颜色","set-danmaku-type":"设置弹幕类型","show-danmaku":"显示弹幕","video-failed":"视频加载失败","danmaku-failed":"弹幕加载失败","danmaku-send-failed":"弹幕发送失败","switching-quality":"正在切换至 %q 画质","switched-quality":"已经切换至 %q 画质",ff:"快进 %s 秒",rew:"快退 %s 秒","unlimited-danmaku":"海量弹幕","send-danmaku":"发送弹幕",setting:"设置",fullscreen:"全屏","web-fullscreen":"页面全屏",send:"发送",screenshot:"截图",airplay:"无线投屏",chromecast:"ChromeCast",subtitle:"字幕",off:"关闭","show-subs":"显示字幕","hide-subs":"隐藏字幕",volume:"音量",live:"直播","video-info":"视频统计信息"},"zh-tw":{"danmaku-loading":"彈幕載入中",top:"頂部",bottom:"底部",rolling:"滾動","input-danmaku-enter":"輸入彈幕，Enter 發送","about-author":"關於作者","dplayer-feedback":"播放器意見回饋","about-dplayer":"關於 DPlayer 播放器",loop:"循環播放",speed:"速度","opacity-danmaku":"彈幕透明度",normal:"正常","please-input-danmaku":"請輸入彈幕內容啊！","set-danmaku-color":"設定彈幕顏色","set-danmaku-type":"設定彈幕類型","show-danmaku":"顯示彈幕","video-failed":"影片載入失敗","danmaku-failed":"彈幕載入失敗","danmaku-send-failed":"彈幕發送失敗","switching-quality":"正在切換至 %q 畫質","switched-quality":"已經切換至 %q 畫質",ff:"快進 %s 秒",rew:"快退 %s 秒","unlimited-danmaku":"巨量彈幕","send-danmaku":"發送彈幕",setting:"設定",fullscreen:"全螢幕","web-fullscreen":"頁面全螢幕",send:"發送",screenshot:"截圖",airplay:"無線投屏",chromecast:"ChromeCast",subtitle:"字幕",off:"關閉","show-subs":"顯示字幕","hide-subs":"隱藏字幕",volume:"音量",live:"直播","video-info":"影片統計訊息"},"ko-kr":{"danmaku-loading":"Danmaku를 불러오는 중입니다.",top:"Top",bottom:"Bottom",rolling:"Rolling","input-danmaku-enter":"Danmaku를 입력하고 Enter를 누르세요.","about-author":"만든이","dplayer-feedback":"피드백 보내기","about-dplayer":"DPlayer 정보",loop:"반복",speed:"배속","opacity-danmaku":"Danmaku 불투명도",normal:"표준","please-input-danmaku":"Danmaku를 입력하세요!","set-danmaku-color":"Danmaku 색상","set-danmaku-type":"Danmaku 설정","show-danmaku":"Danmaku 표시","video-failed":"비디오를 불러오지 못했습니다.","danmaku-failed":"Danmaku를 불러오지 못했습니다.","danmaku-send-failed":"Danmaku 전송에 실패했습니다.","Switching to":"","Switched to":"","switching-quality":"전환 %q 화질","switched-quality":"전환 됨 %q 화질",ff:"앞으로 %s 초",rew:"뒤로 %s 초","unlimited-danmaku":"끝없는 Danmaku","send-danmaku":"Danmaku 보내기",setting:"설정",fullscreen:"전체 화면","web-fullscreen":"웹 내 전체화면",send:"보내기",screenshot:"화면 캡쳐",airplay:"에어플레이",chromecast:"ChromeCast",subtitle:"부제",off:"끄다","show-subs":"자막 보이기","hide-subs":"자막 숨기기",Volume:"볼륨",live:"생방송","video-info":"비디오 정보"},de:{"danmaku-loading":"Danmaku lädt...",top:"Oben",bottom:"Unten",rolling:"Rollend","input-danmaku-enter":"Drücke Enter nach dem Einfügen vom Danmaku","about-author":"Über den Autor","dplayer-feedback":"DPlayer Feedback","about-dplayer":"Über DPlayer",loop:"Wiederholen",speed:"Geschwindigkeit","opacity-danmaku":"Transparenz für Danmaku",normal:"Normal","please-input-danmaku":"Bitte Danmaku Inhalt eingeben!","set-danmaku-color":"Danmaku Farbe festlegen","set-danmaku-type":"Danmaku Typ festlegen","show-danmaku":"Zeige Danmaku","video-failed":"Das Video konnte nicht geladen werden","danmaku-failed":"Danmaku konnte nicht geladen werden","danmaku-send-failed":"Das senden von Danmaku ist fehgeschlagen","switching-quality":"Wechsle zur %q Qualität","switched-quality":"Zur %q Qualität gewechselt",ff:"%s s Vorwärts",rew:"%s s Zurück","unlimited-danmaku":"Unlimitiertes Danmaku","send-danmaku":"Sende Danmaku",setting:"Einstellungen",fullscreen:"Vollbild","web-fullscreen":"Browser Vollbild",send:"Senden",screenshot:"Screenshot",airplay:"AirPlay","show-subs":"Zeige Untertitel",chromecast:"ChromeCast",subtitle:"Untertitel",off:"Schließung","hide-subs":"Verstecke Untertitel",volume:"Lautstärke",live:"Live","video-info":"Video Info"}},zo=i(730),Yo=i.n(zo),Vo=i(74),Wo=i.n(Vo),jo=i(437),Qo=i.n(jo),Xo=i(644),Zo=i.n(Xo),Jo=i(324),el=i.n(Jo),tl=i(574),nl=i.n(tl),il=i(300),rl=i.n(il),sl=i(934),al=i.n(sl),ol=i(428),ll=i.n(ol),dl=i(807),cl=i.n(dl),ul=i(338),hl=i.n(ul),fl=i(254),pl=i.n(fl),ml=i(965),gl=i.n(ml),yl=i(113),Al=i.n(yl),bl=i(251),vl=i.n(bl),xl=i(410),El=i.n(xl),Sl=i(182),Tl=i.n(Sl),Cl=i(193),wl=i.n(Cl);const We={play:Yo(),pause:Wo(),volumeUp:Qo(),volumeDown:Zo(),volumeOff:el(),full:nl(),fullWeb:rl(),setting:al(),right:ll(),comment:cl(),commentOff:hl(),send:pl(),pallette:gl(),camera:Al(),subtitle:El(),loading:Tl(),airplay:vl(),chromecast:wl()};var kl=i(916),Il=i.n(kl);function dn(p){return dn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},dn(p)}function ps(p,m){for(var x=0;x<m.length;x++){var f=m[x];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(g=function(b,E){if(dn(b)!=="object"||b===null)return b;var C=b[Symbol.toPrimitive];if(C!==void 0){var w=C.call(b,"string");if(dn(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(b)}(f.key),dn(g)==="symbol"?g:String(g)),f)}var g}var Ll=function(){function p(g){(function(b,E){if(!(b instanceof E))throw new TypeError("Cannot call a class as a function")})(this,p),this.container=g.container,this.options=g.options,this.index=g.index,this.tran=g.tran,this.init()}var m,x,f;return m=p,f=[{key:"NewNotice",value:function(g,b,E){var C=document.createElement("div");return C.classList.add("dplayer-notice"),C.style.opacity=b,C.innerText=g,E&&(C.id="dplayer-notice-".concat(E)),C}}],(x=[{key:"init",value:function(){this.container.innerHTML=Il()({options:this.options,index:this.index,tran:this.tran,icons:We,mobile:U.isMobile,video:{current:!0,pic:this.options.video.pic,screenshot:this.options.screenshot,airplay:!(!U.isSafari||U.isChrome)&&this.options.airplay,chromecast:this.options.chromecast,preload:this.options.preload,url:this.options.video.url,subtitle:this.options.subtitle}}),this.volumeBar=this.container.querySelector(".dplayer-volume-bar-inner"),this.volumeBarWrap=this.container.querySelector(".dplayer-volume-bar"),this.volumeBarWrapWrap=this.container.querySelector(".dplayer-volume-bar-wrap"),this.volumeButton=this.container.querySelector(".dplayer-volume"),this.volumeButtonIcon=this.container.querySelector(".dplayer-volume-icon"),this.volumeIcon=this.container.querySelector(".dplayer-volume-icon .dplayer-icon-content"),this.playedBar=this.container.querySelector(".dplayer-played"),this.loadedBar=this.container.querySelector(".dplayer-loaded"),this.playedBarWrap=this.container.querySelector(".dplayer-bar-wrap"),this.playedBarTime=this.container.querySelector(".dplayer-bar-time"),this.danmaku=this.container.querySelector(".dplayer-danmaku"),this.danmakuLoading=this.container.querySelector(".dplayer-danloading"),this.video=this.container.querySelector(".dplayer-video-current"),this.bezel=this.container.querySelector(".dplayer-bezel-icon"),this.playButton=this.container.querySelector(".dplayer-play-icon"),this.mobilePlayButton=this.container.querySelector(".dplayer-mobile-play"),this.videoWrap=this.container.querySelector(".dplayer-video-wrap"),this.controllerMask=this.container.querySelector(".dplayer-controller-mask"),this.ptime=this.container.querySelector(".dplayer-ptime"),this.settingButton=this.container.querySelector(".dplayer-setting-icon"),this.settingBox=this.container.querySelector(".dplayer-setting-box"),this.mask=this.container.querySelector(".dplayer-mask"),this.loop=this.container.querySelector(".dplayer-setting-loop"),this.loopToggle=this.container.querySelector(".dplayer-setting-loop .dplayer-toggle-setting-input"),this.showDanmaku=this.container.querySelector(".dplayer-setting-showdan"),this.showDanmakuToggle=this.container.querySelector(".dplayer-showdan-setting-input"),this.unlimitDanmaku=this.container.querySelector(".dplayer-setting-danunlimit"),this.unlimitDanmakuToggle=this.container.querySelector(".dplayer-danunlimit-setting-input"),this.speed=this.container.querySelector(".dplayer-setting-speed"),this.speedItem=this.container.querySelectorAll(".dplayer-setting-speed-item"),this.danmakuOpacityBar=this.container.querySelector(".dplayer-danmaku-bar-inner"),this.danmakuOpacityBarWrap=this.container.querySelector(".dplayer-danmaku-bar"),this.danmakuOpacityBarWrapWrap=this.container.querySelector(".dplayer-danmaku-bar-wrap"),this.danmakuOpacityBox=this.container.querySelector(".dplayer-setting-danmaku"),this.dtime=this.container.querySelector(".dplayer-dtime"),this.controller=this.container.querySelector(".dplayer-controller"),this.commentInput=this.container.querySelector(".dplayer-comment-input"),this.commentButton=this.container.querySelector(".dplayer-comment-icon"),this.commentSettingBox=this.container.querySelector(".dplayer-comment-setting-box"),this.commentSettingButton=this.container.querySelector(".dplayer-comment-setting-icon"),this.commentSettingFill=this.container.querySelector(".dplayer-comment-setting-icon path"),this.commentSendButton=this.container.querySelector(".dplayer-send-icon"),this.commentSendFill=this.container.querySelector(".dplayer-send-icon path"),this.commentColorSettingBox=this.container.querySelector(".dplayer-comment-setting-color"),this.browserFullButton=this.container.querySelector(".dplayer-full-icon"),this.webFullButton=this.container.querySelector(".dplayer-full-in-icon"),this.menu=this.container.querySelector(".dplayer-menu"),this.menuItem=this.container.querySelectorAll(".dplayer-menu-item"),this.qualityList=this.container.querySelector(".dplayer-quality-list"),this.camareButton=this.container.querySelector(".dplayer-camera-icon"),this.airplayButton=this.container.querySelector(".dplayer-airplay-icon"),this.chromecastButton=this.container.querySelector(".dplayer-chromecast-icon"),this.subtitleButton=this.container.querySelector(".dplayer-subtitle-icon"),this.subtitleButtonInner=this.container.querySelector(".dplayer-subtitle-icon .dplayer-icon-content"),this.subtitlesButton=this.container.querySelector(".dplayer-subtitles-icon"),this.subtitlesBox=this.container.querySelector(".dplayer-subtitles-box"),this.subtitlesItem=this.container.querySelectorAll(".dplayer-subtitles-item"),this.subtitle=this.container.querySelector(".dplayer-subtitle"),this.subtrack=this.container.querySelector(".dplayer-subtrack"),this.qualityButton=this.container.querySelector(".dplayer-quality-icon"),this.barPreview=this.container.querySelector(".dplayer-bar-preview"),this.barWrap=this.container.querySelector(".dplayer-bar-wrap"),this.noticeList=this.container.querySelector(".dplayer-notice-list"),this.infoPanel=this.container.querySelector(".dplayer-info-panel"),this.infoPanelClose=this.container.querySelector(".dplayer-info-panel-close"),this.infoVersion=this.container.querySelector(".dplayer-info-panel-item-version .dplayer-info-panel-item-data"),this.infoFPS=this.container.querySelector(".dplayer-info-panel-item-fps .dplayer-info-panel-item-data"),this.infoType=this.container.querySelector(".dplayer-info-panel-item-type .dplayer-info-panel-item-data"),this.infoUrl=this.container.querySelector(".dplayer-info-panel-item-url .dplayer-info-panel-item-data"),this.infoResolution=this.container.querySelector(".dplayer-info-panel-item-resolution .dplayer-info-panel-item-data"),this.infoDuration=this.container.querySelector(".dplayer-info-panel-item-duration .dplayer-info-panel-item-data"),this.infoDanmakuId=this.container.querySelector(".dplayer-info-panel-item-danmaku-id .dplayer-info-panel-item-data"),this.infoDanmakuApi=this.container.querySelector(".dplayer-info-panel-item-danmaku-api .dplayer-info-panel-item-data"),this.infoDanmakuAmount=this.container.querySelector(".dplayer-info-panel-item-danmaku-amount .dplayer-info-panel-item-data")}}])&&ps(m.prototype,x),f&&ps(m,f),Object.defineProperty(m,"prototype",{writable:!1}),p}();const ms=Ll;function Nt(p){return Nt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},Nt(p)}function Rl(p,m){for(var x=0;x<m.length;x++){var f=m[x];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(g=function(b,E){if(Nt(b)!=="object"||b===null)return b;var C=b[Symbol.toPrimitive];if(C!==void 0){var w=C.call(b,"string");if(Nt(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(b)}(f.key),Nt(g)==="symbol"?g:String(g)),f)}var g}var _l=function(){function p(f){(function(g,b){if(!(g instanceof b))throw new TypeError("Cannot call a class as a function")})(this,p),this.options=f,this.player=this.options.player,this.container=this.options.container,this.danTunnel={right:{},top:{},bottom:{}},this.danIndex=0,this.dan=[],this.showing=!0,this._opacity=this.options.opacity,this.events=this.options.events,this.unlimited=this.options.unlimited,this._measure(""),this.load()}var m,x;return m=p,x=[{key:"load",value:function(){var f,g=this;f=this.options.api.maximum?"".concat(this.options.api.address,"v3/?id=").concat(this.options.api.id,"&max=").concat(this.options.api.maximum):"".concat(this.options.api.address,"v3/?id=").concat(this.options.api.id);var b=(this.options.api.addition||[]).slice(0);b.push(f),this.events&&this.events.trigger("danmaku_load_start",b),this._readAllEndpoints(b,function(E){g.dan=[].concat.apply([],E).sort(function(C,w){return C.time-w.time}),window.requestAnimationFrame(function(){g.frame()}),g.options.callback(),g.events&&g.events.trigger("danmaku_load_end")})}},{key:"reload",value:function(f){this.options.api=f,this.dan=[],this.clear(),this.load()}},{key:"_readAllEndpoints",value:function(f,g){for(var b=this,E=[],C=0,w=function(N){b.options.apiBackend.read({url:f[N],success:function(z){E[N]=z,++C===f.length&&g(E)},error:function(z){b.options.error(z||b.options.tran("danmaku-failed")),E[N]=[],++C===f.length&&g(E)}})},O=0;O<f.length;++O)w(O)}},{key:"send",value:function(f,g){var b=this,E={token:this.options.api.token,id:this.options.api.id,author:this.options.api.user,time:this.options.time(),text:f.text,color:f.color,type:f.type};this.options.apiBackend.send({url:this.options.api.address+"v3/",data:E,success:g,error:function(w){b.options.error(w||b.options.tran("danmaku-failed"))}}),this.dan.splice(this.danIndex,0,E),this.danIndex++;var C={text:this.htmlEncode(E.text),color:E.color,type:E.type,border:"2px solid ".concat(this.options.borderColor)};this.draw(C),this.events&&this.events.trigger("danmaku_send",E)}},{key:"frame",value:function(){var f=this;if(this.dan.length&&!this.paused&&this.showing){for(var g=this.dan[this.danIndex],b=[];g&&this.options.time()>parseFloat(g.time);)b.push(g),g=this.dan[++this.danIndex];this.draw(b)}window.requestAnimationFrame(function(){f.frame()})}},{key:"opacity",value:function(f){if(f!==void 0){for(var g=this.container.getElementsByClassName("dplayer-danmaku-item"),b=0;b<g.length;b++)g[b].style.opacity=f;this._opacity=f,this.events&&this.events.trigger("danmaku_opacity",this._opacity)}return this._opacity}},{key:"draw",value:function(f){var g=this;if(this.showing){var b=this.options.height,E=this.container.offsetWidth,C=this.container.offsetHeight,w=parseInt(C/b),O=function(V){var Z=V.offsetWidth||parseInt(V.style.width),se=V.getBoundingClientRect().right||g.container.getBoundingClientRect().right+Z;return g.container.getBoundingClientRect().right-se},N=function(V){return(E+V)/5},z=function(V,Z,se){for(var Re=E/N(se),we=function(kt){var $t=g.danTunnel[Z][kt+""];if(!$t||!$t.length)return g.danTunnel[Z][kt+""]=[V],V.addEventListener("animationend",function(){g.danTunnel[Z][kt+""].splice(0,1)}),{v:kt%w};if(Z!=="right")return"continue";for(var wn=0;wn<$t.length;wn++){var xs=O($t[wn])-10;if(xs<=E-Re*N(parseInt($t[wn].style.width))||xs<=0)break;if(wn===$t.length-1)return g.danTunnel[Z][kt+""].push(V),V.addEventListener("animationend",function(){g.danTunnel[Z][kt+""].splice(0,1)}),{v:kt%w}}},xe=0;g.unlimited||xe<w;xe++){var bt=we(xe);if(bt!=="continue"&&Nt(bt)==="object")return bt.v}return-1};Object.prototype.toString.call(f)!=="[object Array]"&&(f=[f]);for(var W=document.createDocumentFragment(),X=function(){f[j].type=U.number2Type(f[j].type),f[j].color||(f[j].color=16777215);var V=document.createElement("div");V.classList.add("dplayer-danmaku-item"),V.classList.add("dplayer-danmaku-".concat(f[j].type)),f[j].border?V.innerHTML='<span style="border:'.concat(f[j].border,'">').concat(f[j].text,"</span>"):V.innerHTML=f[j].text,V.style.opacity=g._opacity,V.style.color=U.number2Color(f[j].color),V.addEventListener("animationend",function(){g.container.removeChild(V)});var Z,se=g._measure(f[j].text);switch(f[j].type){case"right":(Z=z(V,f[j].type,se))>=0&&(V.style.width=se+1+"px",V.style.top=b*Z+"px",V.style.transform="translateX(-".concat(E,"px)"));break;case"top":(Z=z(V,f[j].type))>=0&&(V.style.top=b*Z+"px");break;case"bottom":(Z=z(V,f[j].type))>=0&&(V.style.bottom=b*Z+"px");break;default:console.error("Can't handled danmaku type: ".concat(f[j].type))}Z>=0&&(V.classList.add("dplayer-danmaku-move"),V.style.animationDuration=g._danAnimation(f[j].type),W.appendChild(V))},j=0;j<f.length;j++)X();return this.container.appendChild(W),W}}},{key:"play",value:function(){this.paused=!1}},{key:"pause",value:function(){this.paused=!0}},{key:"_measure",value:function(f){if(!this.context){var g=getComputedStyle(this.container.getElementsByClassName("dplayer-danmaku-item")[0],null);this.context=document.createElement("canvas").getContext("2d"),this.context.font=g.getPropertyValue("font")}return this.context.measureText(f).width}},{key:"seek",value:function(){this.clear();for(var f=0;f<this.dan.length;f++){if(this.dan[f].time>=this.options.time()){this.danIndex=f;break}this.danIndex=this.dan.length}}},{key:"clear",value:function(){this.danTunnel={right:{},top:{},bottom:{}},this.danIndex=0,this.options.container.innerHTML="",this.events&&this.events.trigger("danmaku_clear")}},{key:"htmlEncode",value:function(f){return f.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2f;")}},{key:"resize",value:function(){for(var f=this.container.offsetWidth,g=this.container.getElementsByClassName("dplayer-danmaku-item"),b=0;b<g.length;b++)g[b].style.transform="translateX(-".concat(f,"px)")}},{key:"hide",value:function(){this.showing=!1,this.pause(),this.clear(),this.events&&this.events.trigger("danmaku_hide")}},{key:"show",value:function(){this.seek(),this.showing=!0,this.play(),this.events&&this.events.trigger("danmaku_show")}},{key:"unlimit",value:function(f){this.unlimited=f}},{key:"speed",value:function(f){this.options.api.speedRate=f}},{key:"_danAnimation",value:function(f){var g=this.options.api.speedRate||1,b=!!this.player.fullScreen.isFullScreen();return{top:"".concat((b?6:4)/g,"s"),right:"".concat((b?8:5)/g,"s"),bottom:"".concat((b?6:4)/g,"s")}[f]}}],x&&Rl(m.prototype,x),Object.defineProperty(m,"prototype",{writable:!1}),p}();const Dl=_l;function cn(p){return cn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},cn(p)}function Bl(p,m){for(var x=0;x<m.length;x++){var f=m[x];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(g=function(b,E){if(cn(b)!=="object"||b===null)return b;var C=b[Symbol.toPrimitive];if(C!==void 0){var w=C.call(b,"string");if(cn(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(b)}(f.key),cn(g)==="symbol"?g:String(g)),f)}var g}const Pl=function(){function p(){(function(f,g){if(!(f instanceof g))throw new TypeError("Cannot call a class as a function")})(this,p),this.events={},this.videoEvents=["abort","canplay","canplaythrough","durationchange","emptied","ended","error","loadeddata","loadedmetadata","loadstart","mozaudioavailable","pause","play","playing","progress","ratechange","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting"],this.playerEvents=["screenshot","thumbnails_show","thumbnails_hide","danmaku_show","danmaku_hide","danmaku_clear","danmaku_loaded","danmaku_send","danmaku_opacity","contextmenu_show","contextmenu_hide","notice_show","notice_hide","quality_start","quality_end","destroy","resize","fullscreen","fullscreen_cancel","webfullscreen","webfullscreen_cancel","subtitle_show","subtitle_hide","subtitle_change"]}var m,x;return m=p,(x=[{key:"on",value:function(f,g){this.type(f)&&typeof g=="function"&&(this.events[f]||(this.events[f]=[]),this.events[f].push(g))}},{key:"trigger",value:function(f,g){if(this.events[f]&&this.events[f].length)for(var b=0;b<this.events[f].length;b++)this.events[f][b](g)}},{key:"type",value:function(f){return this.playerEvents.indexOf(f)!==-1?"player":this.videoEvents.indexOf(f)!==-1?"video":(console.error("Unknown event name: ".concat(f)),null)}}])&&Bl(m.prototype,x),Object.defineProperty(m,"prototype",{writable:!1}),p}();function un(p){return un=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},un(p)}function Ol(p,m){for(var x=0;x<m.length;x++){var f=m[x];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(g=function(b,E){if(un(b)!=="object"||b===null)return b;var C=b[Symbol.toPrimitive];if(C!==void 0){var w=C.call(b,"string");if(un(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(b)}(f.key),un(g)==="symbol"?g:String(g)),f)}var g}var Fl=function(){function p(f){var g=this;(function(b,E){if(!(b instanceof E))throw new TypeError("Cannot call a class as a function")})(this,p),this.player=f,this.lastScrollPosition={left:0,top:0},this.player.events.on("webfullscreen",function(){g.player.resize()}),this.player.events.on("webfullscreen_cancel",function(){g.player.resize(),U.setScrollPosition(g.lastScrollPosition)}),this.fullscreenchange=function(){g.player.resize(),g.isFullScreen("browser")?g.player.events.trigger("fullscreen"):(U.setScrollPosition(g.lastScrollPosition),g.player.events.trigger("fullscreen_cancel"))},this.docfullscreenchange=function(){var b=document.fullscreenElement||document.mozFullScreenElement||document.msFullscreenElement;b&&b!==g.player.container||(g.player.resize(),b?g.player.events.trigger("fullscreen"):(U.setScrollPosition(g.lastScrollPosition),g.player.events.trigger("fullscreen_cancel")))},/Firefox/.test(navigator.userAgent)?(document.addEventListener("mozfullscreenchange",this.docfullscreenchange),document.addEventListener("fullscreenchange",this.docfullscreenchange)):(this.player.container.addEventListener("fullscreenchange",this.fullscreenchange),this.player.container.addEventListener("webkitfullscreenchange",this.fullscreenchange),document.addEventListener("msfullscreenchange",this.docfullscreenchange),document.addEventListener("MSFullscreenChange",this.docfullscreenchange))}var m,x;return m=p,x=[{key:"isFullScreen",value:function(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser";switch(f){case"browser":return document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement;case"web":return this.player.container.classList.contains("dplayer-fulled")}}},{key:"request",value:function(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser",g=f==="browser"?"web":"browser",b=this.isFullScreen(g);switch(b||(this.lastScrollPosition=U.getScrollPosition()),f){case"browser":this.player.container.requestFullscreen?this.player.container.requestFullscreen():this.player.container.mozRequestFullScreen?this.player.container.mozRequestFullScreen():this.player.container.webkitRequestFullscreen?this.player.container.webkitRequestFullscreen():this.player.video.webkitEnterFullscreen?this.player.video.webkitEnterFullscreen():this.player.video.webkitEnterFullScreen?this.player.video.webkitEnterFullScreen():this.player.container.msRequestFullscreen&&this.player.container.msRequestFullscreen();break;case"web":this.player.container.classList.add("dplayer-fulled"),document.body.classList.add("dplayer-web-fullscreen-fix"),this.player.events.trigger("webfullscreen")}b&&this.cancel(g)}},{key:"cancel",value:function(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser";switch(f){case"browser":document.cancelFullScreen?document.cancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.webkitCancelFullscreen?document.webkitCancelFullscreen():document.msCancelFullScreen?document.msCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen();break;case"web":this.player.container.classList.remove("dplayer-fulled"),document.body.classList.remove("dplayer-web-fullscreen-fix"),this.player.events.trigger("webfullscreen_cancel")}}},{key:"toggle",value:function(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser";this.isFullScreen(f)?this.cancel(f):this.request(f)}},{key:"destroy",value:function(){/Firefox/.test(navigator.userAgent)?(document.removeEventListener("mozfullscreenchange",this.docfullscreenchange),document.removeEventListener("fullscreenchange",this.docfullscreenchange)):(this.player.container.removeEventListener("fullscreenchange",this.fullscreenchange),this.player.container.removeEventListener("webkitfullscreenchange",this.fullscreenchange),document.removeEventListener("msfullscreenchange",this.docfullscreenchange),document.removeEventListener("MSFullscreenChange",this.docfullscreenchange))}}],x&&Ol(m.prototype,x),Object.defineProperty(m,"prototype",{writable:!1}),p}();const Ml=Fl;function hn(p){return hn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},hn(p)}function Nl(p,m){for(var x=0;x<m.length;x++){var f=m[x];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(g=function(b,E){if(hn(b)!=="object"||b===null)return b;var C=b[Symbol.toPrimitive];if(C!==void 0){var w=C.call(b,"string");if(hn(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(b)}(f.key),hn(g)==="symbol"?g:String(g)),f)}var g}var Ul=function(){function p(f){(function(g,b){if(!(g instanceof b))throw new TypeError("Cannot call a class as a function")})(this,p),this.storageName={opacity:"dplayer-danmaku-opacity",volume:"dplayer-volume",unlimited:"dplayer-danmaku-unlimited",danmaku:"dplayer-danmaku-show",subtitle:"dplayer-subtitle-show"},this.default={opacity:.7,volume:f.options.hasOwnProperty("volume")?f.options.volume:.7,unlimited:(f.options.danmaku&&f.options.danmaku.unlimited?1:0)||0,danmaku:1,subtitle:1},this.data={},this.init()}var m,x;return m=p,(x=[{key:"init",value:function(){for(var f in this.storageName){var g=this.storageName[f];this.data[f]=parseFloat(U.storage.get(g)||this.default[f])}}},{key:"get",value:function(f){return this.data[f]}},{key:"set",value:function(f,g){this.data[f]=g,U.storage.set(this.storageName[f],g)}}])&&Nl(m.prototype,x),Object.defineProperty(m,"prototype",{writable:!1}),p}();const $l=Ul;function fn(p){return fn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},fn(p)}function Gl(p,m){for(var x=0;x<m.length;x++){var f=m[x];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(g=function(b,E){if(fn(b)!=="object"||b===null)return b;var C=b[Symbol.toPrimitive];if(C!==void 0){var w=C.call(b,"string");if(fn(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(b)}(f.key),fn(g)==="symbol"?g:String(g)),f)}var g}var ql=function(){function p(f,g,b,E){(function(C,w){if(!(C instanceof w))throw new TypeError("Cannot call a class as a function")})(this,p),this.container=f,this.video=g,this.options=b,this.events=E,this.init()}var m,x;return m=p,x=[{key:"init",value:function(){var f=this;if(this.container.style.fontSize=this.options.fontSize,this.container.style.bottom=this.options.bottom,this.container.style.color=this.options.color,this.video.textTracks&&this.video.textTracks[0]){var g=this.video.textTracks[0];g.oncuechange=function(){var b=g.activeCues[g.activeCues.length-1];if(f.container.innerHTML="",b){var E=document.createElement("div");E.appendChild(b.getCueAsHTML());var C=E.innerHTML.split(/\r?\n/).map(function(w){return"<p>".concat(w,"</p>")}).join("");f.container.innerHTML=C}f.events.trigger("subtitle_change")}}}},{key:"show",value:function(){this.container.classList.remove("dplayer-subtitle-hide"),this.events.trigger("subtitle_show")}},{key:"hide",value:function(){this.container.classList.add("dplayer-subtitle-hide"),this.events.trigger("subtitle_hide")}},{key:"toggle",value:function(){this.container.classList.contains("dplayer-subtitle-hide")?this.show():this.hide()}}],x&&Gl(m.prototype,x),Object.defineProperty(m,"prototype",{writable:!1}),p}();const Kl=ql;function pn(p){return pn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},pn(p)}function Hl(p,m){for(var x=0;x<m.length;x++){var f=m[x];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(g=function(b,E){if(pn(b)!=="object"||b===null)return b;var C=b[Symbol.toPrimitive];if(C!==void 0){var w=C.call(b,"string");if(pn(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(b)}(f.key),pn(g)==="symbol"?g:String(g)),f)}var g}var zl=function(){function p(f){var g=this;(function(w,O){if(!(w instanceof O))throw new TypeError("Cannot call a class as a function")})(this,p),this.player=f,this.player.template.mask.addEventListener("click",function(){g.hide()}),this.player.template.subtitlesButton.addEventListener("click",function(){g.adaptiveHeight(),g.show()});for(var b=this.player.template.subtitlesItem.length-1,E=function(w){g.player.template.subtitlesItem[w].addEventListener("click",function(){g.hide(),g.player.options.subtitle.index!==w&&(g.player.template.subtitle.innerHTML="<p></p>",g.player.template.subtrack.src=g.player.template.subtitlesItem[w].dataset.subtitle,g.player.options.subtitle.index=w,g.player.template.subtitle.classList.contains("dplayer-subtitle-hide")&&g.subContainerShow())})},C=0;C<b;C++)E(C);this.player.template.subtitlesItem[b].addEventListener("click",function(){g.hide(),g.player.options.subtitle.index!==b&&(g.player.template.subtitle.innerHTML="<p></p>",g.player.template.subtrack.src="",g.player.options.subtitle.index=b,g.subContainerHide())})}var m,x;return m=p,(x=[{key:"subContainerShow",value:function(){this.player.template.subtitle.classList.remove("dplayer-subtitle-hide"),this.player.events.trigger("subtitle_show")}},{key:"subContainerHide",value:function(){this.player.template.subtitle.classList.add("dplayer-subtitle-hide"),this.player.events.trigger("subtitle_hide")}},{key:"hide",value:function(){this.player.template.subtitlesBox.classList.remove("dplayer-subtitles-box-open"),this.player.template.mask.classList.remove("dplayer-mask-show"),this.player.controller.disableAutoHide=!1}},{key:"show",value:function(){this.player.template.subtitlesBox.classList.add("dplayer-subtitles-box-open"),this.player.template.mask.classList.add("dplayer-mask-show"),this.player.controller.disableAutoHide=!0}},{key:"adaptiveHeight",value:function(){var f=30*this.player.template.subtitlesItem.length+14,g=.8*this.player.template.videoWrap.offsetHeight;f>=g-50?(this.player.template.subtitlesBox.style.bottom="8px",this.player.template.subtitlesBox.style["max-height"]=g-8+"px"):(this.player.template.subtitlesBox.style.bottom="50px",this.player.template.subtitlesBox.style["max-height"]=g-50+"px")}}])&&Hl(m.prototype,x),Object.defineProperty(m,"prototype",{writable:!1}),p}();const Yl=zl;function mn(p){return mn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},mn(p)}function Vl(p,m){for(var x=0;x<m.length;x++){var f=m[x];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(g=function(b,E){if(mn(b)!=="object"||b===null)return b;var C=b[Symbol.toPrimitive];if(C!==void 0){var w=C.call(b,"string");if(mn(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(b)}(f.key),mn(g)==="symbol"?g:String(g)),f)}var g}var Wl=function(){function p(f){(function(g,b){if(!(g instanceof b))throw new TypeError("Cannot call a class as a function")})(this,p),this.elements={},this.elements.volume=f.volumeBar,this.elements.played=f.playedBar,this.elements.loaded=f.loadedBar,this.elements.danmaku=f.danmakuOpacityBar}var m,x;return m=p,(x=[{key:"set",value:function(f,g,b){g=Math.max(g,0),g=Math.min(g,1),this.elements[f].style[b]=100*g+"%"}},{key:"get",value:function(f){return parseFloat(this.elements[f].style.width)/100}}])&&Vl(m.prototype,x),Object.defineProperty(m,"prototype",{writable:!1}),p}();const jl=Wl;function gn(p){return gn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},gn(p)}function Ql(p,m){for(var x=0;x<m.length;x++){var f=m[x];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(g=function(b,E){if(gn(b)!=="object"||b===null)return b;var C=b[Symbol.toPrimitive];if(C!==void 0){var w=C.call(b,"string");if(gn(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(b)}(f.key),gn(g)==="symbol"?g:String(g)),f)}var g}var Xl=function(){function p(f){(function(g,b){if(!(g instanceof b))throw new TypeError("Cannot call a class as a function")})(this,p),this.player=f,window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(g){window.setTimeout(g,1e3/60)},this.types=["loading","info","fps"],this.init()}var m,x;return m=p,(x=[{key:"init",value:function(){var f=this;this.types.map(function(g){return g!=="fps"&&f["init".concat(g,"Checker")](),g})}},{key:"initloadingChecker",value:function(){var f=this,g=0,b=0,E=!1;this.loadingChecker=setInterval(function(){f.enableloadingChecker&&(b=f.player.video.currentTime,E||b!==g||f.player.video.paused||(f.player.container.classList.add("dplayer-loading"),E=!0),E&&b>g&&!f.player.video.paused&&(f.player.container.classList.remove("dplayer-loading"),E=!1),g=b)},100)}},{key:"initfpsChecker",value:function(){var f=this;window.requestAnimationFrame(function(){if(f.enablefpsChecker)if(f.initfpsChecker(),f.fpsStart){f.fpsIndex++;var g=new Date;g-f.fpsStart>1e3&&(f.player.infoPanel.fps(f.fpsIndex/(g-f.fpsStart)*1e3),f.fpsStart=new Date,f.fpsIndex=0)}else f.fpsStart=new Date,f.fpsIndex=0;else f.fpsStart=0,f.fpsIndex=0})}},{key:"initinfoChecker",value:function(){var f=this;this.infoChecker=setInterval(function(){f.enableinfoChecker&&f.player.infoPanel.update()},1e3)}},{key:"enable",value:function(f){this["enable".concat(f,"Checker")]=!0,f==="fps"&&this.initfpsChecker()}},{key:"disable",value:function(f){this["enable".concat(f,"Checker")]=!1}},{key:"destroy",value:function(){var f=this;this.types.map(function(g){return f["enable".concat(g,"Checker")]=!1,f["".concat(g,"Checker")]&&clearInterval(f["".concat(g,"Checker")]),g})}}])&&Ql(m.prototype,x),Object.defineProperty(m,"prototype",{writable:!1}),p}();const Zl=Xl;function yn(p){return yn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},yn(p)}function Jl(p,m){for(var x=0;x<m.length;x++){var f=m[x];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(g=function(b,E){if(yn(b)!=="object"||b===null)return b;var C=b[Symbol.toPrimitive];if(C!==void 0){var w=C.call(b,"string");if(yn(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(b)}(f.key),yn(g)==="symbol"?g:String(g)),f)}var g}const ed=function(){function p(f){var g=this;(function(b,E){if(!(b instanceof E))throw new TypeError("Cannot call a class as a function")})(this,p),this.container=f,this.container.addEventListener("animationend",function(){g.container.classList.remove("dplayer-bezel-transition")})}var m,x;return m=p,(x=[{key:"switch",value:function(f){this.container.innerHTML=f,this.container.classList.add("dplayer-bezel-transition")}}])&&Jl(m.prototype,x),Object.defineProperty(m,"prototype",{writable:!1}),p}();function An(p){return An=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},An(p)}function td(p,m){for(var x=0;x<m.length;x++){var f=m[x];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(g=function(b,E){if(An(b)!=="object"||b===null)return b;var C=b[Symbol.toPrimitive];if(C!==void 0){var w=C.call(b,"string");if(An(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(b)}(f.key),An(g)==="symbol"?g:String(g)),f)}var g}var nd=function(){function p(f){(function(g,b){if(!(g instanceof b))throw new TypeError("Cannot call a class as a function")})(this,p),this.container=f.container,this.barWidth=f.barWidth,this.container.style.backgroundImage="url('".concat(f.url,"')"),this.events=f.events}var m,x;return m=p,(x=[{key:"resize",value:function(f,g,b){this.container.style.width="".concat(f,"px"),this.container.style.height="".concat(g,"px"),this.container.style.top="".concat(2-g,"px"),this.barWidth=b}},{key:"show",value:function(){this.container.style.display="block",this.events&&this.events.trigger("thumbnails_show")}},{key:"move",value:function(f){this.container.style.backgroundPosition="-".concat(160*(Math.ceil(f/this.barWidth*100)-1),"px 0"),this.container.style.left="".concat(Math.min(Math.max(f-this.container.offsetWidth/2,-10),this.barWidth-150),"px")}},{key:"hide",value:function(){this.container.style.display="none",this.events&&this.events.trigger("thumbnails_hide")}}])&&td(m.prototype,x),Object.defineProperty(m,"prototype",{writable:!1}),p}();const id=nd;function bn(p){return bn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},bn(p)}function rd(p,m){for(var x=0;x<m.length;x++){var f=m[x];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(g=function(b,E){if(bn(b)!=="object"||b===null)return b;var C=b[Symbol.toPrimitive];if(C!==void 0){var w=C.call(b,"string");if(bn(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(b)}(f.key),bn(g)==="symbol"?g:String(g)),f)}var g}var At,gs=!0,Hi=!1,sd=function(){function p(f){(function(g,b){if(!(g instanceof b))throw new TypeError("Cannot call a class as a function")})(this,p),this.player=f,this.autoHideTimer=0,U.isMobile||(this.setAutoHideHandler=this.setAutoHide.bind(this),this.player.container.addEventListener("mousemove",this.setAutoHideHandler),this.player.container.addEventListener("click",this.setAutoHideHandler),this.player.on("play",this.setAutoHideHandler),this.player.on("pause",this.setAutoHideHandler)),this.initPlayButton(),this.initThumbnails(),this.initPlayedBar(),this.initFullButton(),this.initQualityButton(),this.initScreenshotButton(),this.player.options.subtitle&&typeof this.player.options.subtitle.url=="string"&&this.initSubtitleButton(),this.initHighlights(),this.initAirplayButton(),this.initChromecastButton(),U.isMobile||this.initVolumeButton()}var m,x;return m=p,(x=[{key:"initPlayButton",value:function(){var f=this;this.player.template.playButton.addEventListener("click",function(){f.player.toggle()}),this.player.template.mobilePlayButton.addEventListener("click",function(){f.player.toggle()}),U.isMobile?(this.player.template.videoWrap.addEventListener("click",function(){f.toggle()}),this.player.template.controllerMask.addEventListener("click",function(){f.toggle()})):this.player.options.preventClickToggle||(this.player.template.videoWrap.addEventListener("click",function(){f.player.toggle()}),this.player.template.controllerMask.addEventListener("click",function(){f.player.toggle()}))}},{key:"initHighlights",value:function(){var f=this;this.player.on("durationchange",function(){if(f.player.video.duration!==1&&f.player.video.duration!==1/0&&f.player.options.highlight){var g=f.player.template.playedBarWrap.querySelectorAll(".dplayer-highlight");[].slice.call(g,0).forEach(function(C){f.player.template.playedBarWrap.removeChild(C)});for(var b=0;b<f.player.options.highlight.length;b++)if(f.player.options.highlight[b].text&&f.player.options.highlight[b].time){var E=document.createElement("div");E.classList.add("dplayer-highlight"),E.style.left=f.player.options.highlight[b].time/f.player.video.duration*100+"%",E.innerHTML='<span class="dplayer-highlight-text">'+f.player.options.highlight[b].text+"</span>",f.player.template.playedBarWrap.insertBefore(E,f.player.template.playedBarTime)}}})}},{key:"initThumbnails",value:function(){var f=this;this.player.options.video.thumbnails&&(this.thumbnails=new id({container:this.player.template.barPreview,barWidth:this.player.template.barWrap.offsetWidth,url:this.player.options.video.thumbnails,events:this.player.events}),this.player.on("loadedmetadata",function(){f.thumbnails.resize(160,f.player.video.videoHeight/f.player.video.videoWidth*160,f.player.template.barWrap.offsetWidth)}))}},{key:"initPlayedBar",value:function(){var f=this,g=function(E){var C=((E.clientX||E.changedTouches[0].clientX)-U.getBoundingClientRectViewLeft(f.player.template.playedBarWrap))/f.player.template.playedBarWrap.clientWidth;C=Math.max(C,0),C=Math.min(C,1),f.player.bar.set("played",C,"width"),f.player.template.ptime.innerHTML=U.secondToTime(C*f.player.video.duration)},b=function E(C){document.removeEventListener(U.nameMap.dragEnd,E),document.removeEventListener(U.nameMap.dragMove,g);var w=((C.clientX||C.changedTouches[0].clientX)-U.getBoundingClientRectViewLeft(f.player.template.playedBarWrap))/f.player.template.playedBarWrap.clientWidth;w=Math.max(w,0),w=Math.min(w,1),f.player.bar.set("played",w,"width"),f.player.seek(f.player.bar.get("played")*f.player.video.duration),f.player.timer.enable("progress")};this.player.template.playedBarWrap.addEventListener(U.nameMap.dragStart,function(){f.player.timer.disable("progress"),document.addEventListener(U.nameMap.dragMove,g),document.addEventListener(U.nameMap.dragEnd,b)}),this.player.template.playedBarWrap.addEventListener(U.nameMap.dragMove,function(E){if(f.player.video.duration){var C=f.player.template.playedBarWrap.getBoundingClientRect().left,w=(E.clientX||E.changedTouches[0].clientX)-C;if(w<0||w>f.player.template.playedBarWrap.offsetWidth)return;var O=f.player.video.duration*(w/f.player.template.playedBarWrap.offsetWidth);U.isMobile&&f.thumbnails&&f.thumbnails.show(),f.thumbnails&&f.thumbnails.move(w),f.player.template.playedBarTime.style.left="".concat(w-(O>=3600?25:20),"px"),f.player.template.playedBarTime.innerText=U.secondToTime(O),f.player.template.playedBarTime.classList.remove("hidden")}}),this.player.template.playedBarWrap.addEventListener(U.nameMap.dragEnd,function(){U.isMobile&&f.thumbnails&&f.thumbnails.hide()}),U.isMobile||(this.player.template.playedBarWrap.addEventListener("mouseenter",function(){f.player.video.duration&&(f.thumbnails&&f.thumbnails.show(),f.player.template.playedBarTime.classList.remove("hidden"))}),this.player.template.playedBarWrap.addEventListener("mouseleave",function(){f.player.video.duration&&(f.thumbnails&&f.thumbnails.hide(),f.player.template.playedBarTime.classList.add("hidden"))}))}},{key:"initFullButton",value:function(){var f=this;this.player.template.browserFullButton.addEventListener("click",function(){f.player.fullScreen.toggle("browser")}),this.player.template.webFullButton.addEventListener("click",function(){f.player.fullScreen.toggle("web")})}},{key:"initVolumeButton",value:function(){var f=this,g=function(E){var C=E||window.event,w=((C.clientX||C.changedTouches[0].clientX)-U.getBoundingClientRectViewLeft(f.player.template.volumeBarWrap)-5.5)/35;f.player.volume(w)},b=function E(){document.removeEventListener(U.nameMap.dragEnd,E),document.removeEventListener(U.nameMap.dragMove,g),f.player.template.volumeButton.classList.remove("dplayer-volume-active")};this.player.template.volumeBarWrapWrap.addEventListener("click",function(E){var C=E||window.event,w=((C.clientX||C.changedTouches[0].clientX)-U.getBoundingClientRectViewLeft(f.player.template.volumeBarWrap)-5.5)/35;f.player.volume(w)}),this.player.template.volumeBarWrapWrap.addEventListener(U.nameMap.dragStart,function(){document.addEventListener(U.nameMap.dragMove,g),document.addEventListener(U.nameMap.dragEnd,b),f.player.template.volumeButton.classList.add("dplayer-volume-active")}),this.player.template.volumeButtonIcon.addEventListener("click",function(){f.player.video.muted?(f.player.video.muted=!1,f.player.switchVolumeIcon(),f.player.bar.set("volume",f.player.volume(),"width")):(f.player.video.muted=!0,f.player.template.volumeIcon.innerHTML=We.volumeOff,f.player.bar.set("volume",0,"width"))})}},{key:"initQualityButton",value:function(){var f=this;this.player.options.video.quality&&this.player.template.qualityList.addEventListener("click",function(g){g.target.classList.contains("dplayer-quality-item")&&f.player.switchQuality(g.target.dataset.index)})}},{key:"initScreenshotButton",value:function(){var f=this;this.player.options.screenshot&&this.player.template.camareButton.addEventListener("click",function(){var g,b=document.createElement("canvas");b.width=f.player.video.videoWidth,b.height=f.player.video.videoHeight,b.getContext("2d").drawImage(f.player.video,0,0,b.width,b.height),b.toBlob(function(E){g=URL.createObjectURL(E);var C=document.createElement("a");C.href=g,C.download="DPlayer.png",C.style.display="none",document.body.appendChild(C),C.click(),document.body.removeChild(C),URL.revokeObjectURL(g),f.player.events.trigger("screenshot",g)})})}},{key:"initAirplayButton",value:function(){this.player.options.airplay&&(window.WebKitPlaybackTargetAvailabilityEvent?this.player.video.addEventListener("webkitplaybacktargetavailabilitychanged",(function(f){f.availability==="available"?this.template.airplayButton.disable=!1:this.template.airplayButton.disable=!0,this.template.airplayButton.addEventListener("click",(function(){this.video.webkitShowPlaybackTargetPicker()}).bind(this))}).bind(this.player)):this.player.template.airplayButton.style.display="none")}},{key:"initChromecast",value:function(){var f=window.document.createElement("script");f.setAttribute("type","text/javascript"),f.setAttribute("src","https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1"),window.document.body.appendChild(f),window.__onGCastApiAvailable=function(g){if(g){var b=new(At=window.chrome.cast).SessionRequest(At.media.DEFAULT_MEDIA_RECEIVER_APP_ID),E=new At.ApiConfig(b,function(){},function(C){C===At.ReceiverAvailability.AVAILABLE&&console.log("chromecast: ",C)});At.initialize(E,function(){})}}}},{key:"initChromecastButton",value:function(){var f=this;if(this.player.options.chromecast){gs&&(gs=!1,this.initChromecast());var g=function(E,C){f.currentMedia=C},b=function(E){console.error("Error launching media",E)};this.player.template.chromecastButton.addEventListener("click",function(){Hi?(Hi=!1,f.currentMedia.stop(),f.session.stop(),f.initChromecast()):(Hi=!0,At.requestSession(function(E){var C,w,O;f.session=E,C=f.player.options.video.url,w=new At.media.MediaInfo(C),O=new At.media.LoadRequest(w),f.session?f.session.loadMedia(O,g.bind(f,"loadMedia"),b).play():window.open(C)},function(E){E.code==="cancel"?f.session=void 0:console.error("Error selecting a cast device",E)}))})}}},{key:"initSubtitleButton",value:function(){var f=this;this.player.events.on("subtitle_show",function(){f.player.template.subtitleButton.dataset.balloon=f.player.tran("hide-subs"),f.player.template.subtitleButtonInner.style.opacity="",f.player.user.set("subtitle",1)}),this.player.events.on("subtitle_hide",function(){f.player.template.subtitleButton.dataset.balloon=f.player.tran("show-subs"),f.player.template.subtitleButtonInner.style.opacity="0.4",f.player.user.set("subtitle",0)}),this.player.template.subtitleButton.addEventListener("click",function(){f.player.subtitle.toggle()})}},{key:"setAutoHide",value:function(){var f=this;this.show(),clearTimeout(this.autoHideTimer),this.autoHideTimer=setTimeout(function(){!f.player.video.played.length||f.player.paused||f.disableAutoHide||f.hide()},3e3)}},{key:"show",value:function(){this.player.container.classList.remove("dplayer-hide-controller")}},{key:"hide",value:function(){this.player.container.classList.add("dplayer-hide-controller"),this.player.setting.hide(),this.player.comment&&this.player.comment.hide()}},{key:"isShow",value:function(){return!this.player.container.classList.contains("dplayer-hide-controller")}},{key:"toggle",value:function(){this.isShow()?this.hide():this.show()}},{key:"destroy",value:function(){U.isMobile||(this.player.container.removeEventListener("mousemove",this.setAutoHideHandler),this.player.container.removeEventListener("click",this.setAutoHideHandler)),clearTimeout(this.autoHideTimer)}}])&&rd(m.prototype,x),Object.defineProperty(m,"prototype",{writable:!1}),p}();const ad=sd;function vn(p){return vn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},vn(p)}function od(p,m){for(var x=0;x<m.length;x++){var f=m[x];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(g=function(b,E){if(vn(b)!=="object"||b===null)return b;var C=b[Symbol.toPrimitive];if(C!==void 0){var w=C.call(b,"string");if(vn(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(b)}(f.key),vn(g)==="symbol"?g:String(g)),f)}var g}var ld=function(){function p(f){var g=this;(function(O,N){if(!(O instanceof N))throw new TypeError("Cannot call a class as a function")})(this,p),this.player=f,this.player.template.mask.addEventListener("click",function(){g.hide()}),this.player.template.settingButton.addEventListener("click",function(){g.show()}),this.loop=this.player.options.loop,this.player.template.loopToggle.checked=this.loop,this.player.template.loop.addEventListener("click",function(){g.player.template.loopToggle.checked=!g.player.template.loopToggle.checked,g.player.template.loopToggle.checked?g.loop=!0:g.loop=!1,g.hide()}),this.showDanmaku=this.player.user.get("danmaku"),this.showDanmaku||this.player.danmaku&&this.player.danmaku.hide(),this.player.template.showDanmakuToggle.checked=this.showDanmaku,this.player.template.showDanmaku.addEventListener("click",function(){g.player.template.showDanmakuToggle.checked=!g.player.template.showDanmakuToggle.checked,g.player.template.showDanmakuToggle.checked?(g.showDanmaku=!0,g.player.danmaku.show()):(g.showDanmaku=!1,g.player.danmaku.hide()),g.player.user.set("danmaku",g.showDanmaku?1:0),g.hide()}),this.unlimitDanmaku=this.player.user.get("unlimited"),this.player.template.unlimitDanmakuToggle.checked=this.unlimitDanmaku,this.player.template.unlimitDanmaku.addEventListener("click",function(){g.player.template.unlimitDanmakuToggle.checked=!g.player.template.unlimitDanmakuToggle.checked,g.player.template.unlimitDanmakuToggle.checked?(g.unlimitDanmaku=!0,g.player.danmaku.unlimit(!0)):(g.unlimitDanmaku=!1,g.player.danmaku.unlimit(!1)),g.player.user.set("unlimited",g.unlimitDanmaku?1:0),g.hide()}),this.player.template.speed.addEventListener("click",function(){g.player.template.settingBox.classList.add("dplayer-setting-box-narrow"),g.player.template.settingBox.classList.add("dplayer-setting-box-speed")});for(var b=function(O){g.player.template.speedItem[O].addEventListener("click",function(){g.player.speed(g.player.template.speedItem[O].dataset.speed),g.hide()})},E=0;E<this.player.template.speedItem.length;E++)b(E);if(this.player.danmaku){this.player.on("danmaku_opacity",function(O){g.player.bar.set("danmaku",O,"width"),g.player.user.set("opacity",O)}),this.player.danmaku.opacity(this.player.user.get("opacity"));var C=function(O){var N=O||window.event,z=((N.clientX||N.changedTouches[0].clientX)-U.getBoundingClientRectViewLeft(g.player.template.danmakuOpacityBarWrap))/130;z=Math.max(z,0),z=Math.min(z,1),g.player.danmaku.opacity(z)},w=function O(){document.removeEventListener(U.nameMap.dragEnd,O),document.removeEventListener(U.nameMap.dragMove,C),g.player.template.danmakuOpacityBox.classList.remove("dplayer-setting-danmaku-active")};this.player.template.danmakuOpacityBarWrapWrap.addEventListener("click",function(O){var N=O||window.event,z=((N.clientX||N.changedTouches[0].clientX)-U.getBoundingClientRectViewLeft(g.player.template.danmakuOpacityBarWrap))/130;z=Math.max(z,0),z=Math.min(z,1),g.player.danmaku.opacity(z)}),this.player.template.danmakuOpacityBarWrapWrap.addEventListener(U.nameMap.dragStart,function(){document.addEventListener(U.nameMap.dragMove,C),document.addEventListener(U.nameMap.dragEnd,w),g.player.template.danmakuOpacityBox.classList.add("dplayer-setting-danmaku-active")})}}var m,x;return m=p,(x=[{key:"hide",value:function(){var f=this;this.player.template.settingBox.classList.remove("dplayer-setting-box-open"),this.player.template.mask.classList.remove("dplayer-mask-show"),setTimeout(function(){f.player.template.settingBox.classList.remove("dplayer-setting-box-narrow"),f.player.template.settingBox.classList.remove("dplayer-setting-box-speed")},300),this.player.controller.disableAutoHide=!1}},{key:"show",value:function(){this.player.template.settingBox.classList.add("dplayer-setting-box-open"),this.player.template.mask.classList.add("dplayer-mask-show"),this.player.controller.disableAutoHide=!0}}])&&od(m.prototype,x),Object.defineProperty(m,"prototype",{writable:!1}),p}();const dd=ld;function xn(p){return xn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},xn(p)}function cd(p,m){for(var x=0;x<m.length;x++){var f=m[x];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(g=function(b,E){if(xn(b)!=="object"||b===null)return b;var C=b[Symbol.toPrimitive];if(C!==void 0){var w=C.call(b,"string");if(xn(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(b)}(f.key),xn(g)==="symbol"?g:String(g)),f)}var g}var ud=function(){function p(f){var g=this;(function(b,E){if(!(b instanceof E))throw new TypeError("Cannot call a class as a function")})(this,p),this.player=f,this.player.template.mask.addEventListener("click",function(){g.hide()}),this.player.template.commentButton.addEventListener("click",function(){g.show()}),this.player.template.commentSettingButton.addEventListener("click",function(){g.toggleSetting()}),this.player.template.commentColorSettingBox.addEventListener("click",function(){if(g.player.template.commentColorSettingBox.querySelector("input:checked+span")){var b=g.player.template.commentColorSettingBox.querySelector("input:checked").value;g.player.template.commentSettingFill.style.fill=b,g.player.template.commentInput.style.color=b,g.player.template.commentSendFill.style.fill=b}}),this.player.template.commentInput.addEventListener("click",function(){g.hideSetting()}),this.player.template.commentInput.addEventListener("keydown",function(b){(b||window.event).keyCode===13&&g.send()}),this.player.template.commentSendButton.addEventListener("click",function(){g.send()})}var m,x;return m=p,(x=[{key:"show",value:function(){this.player.controller.disableAutoHide=!0,this.player.template.controller.classList.add("dplayer-controller-comment"),this.player.template.mask.classList.add("dplayer-mask-show"),this.player.container.classList.add("dplayer-show-controller"),this.player.template.commentInput.focus()}},{key:"hide",value:function(){this.player.template.controller.classList.remove("dplayer-controller-comment"),this.player.template.mask.classList.remove("dplayer-mask-show"),this.player.container.classList.remove("dplayer-show-controller"),this.player.controller.disableAutoHide=!1,this.hideSetting()}},{key:"showSetting",value:function(){this.player.template.commentSettingBox.classList.add("dplayer-comment-setting-open")}},{key:"hideSetting",value:function(){this.player.template.commentSettingBox.classList.remove("dplayer-comment-setting-open")}},{key:"toggleSetting",value:function(){this.player.template.commentSettingBox.classList.contains("dplayer-comment-setting-open")?this.hideSetting():this.showSetting()}},{key:"send",value:function(){var f=this;this.player.template.commentInput.blur(),this.player.template.commentInput.value.replace(/^\s+|\s+$/g,"")?this.player.danmaku.send({text:this.player.template.commentInput.value,color:U.color2Number(this.player.container.querySelector(".dplayer-comment-setting-color input:checked").value),type:parseInt(this.player.container.querySelector(".dplayer-comment-setting-type input:checked").value)},function(){f.player.template.commentInput.value="",f.hide()}):this.player.notice(this.player.tran("please-input-danmaku"))}}])&&cd(m.prototype,x),Object.defineProperty(m,"prototype",{writable:!1}),p}();const hd=ud;function En(p){return En=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},En(p)}function fd(p,m){for(var x=0;x<m.length;x++){var f=m[x];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(g=function(b,E){if(En(b)!=="object"||b===null)return b;var C=b[Symbol.toPrimitive];if(C!==void 0){var w=C.call(b,"string");if(En(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(b)}(f.key),En(g)==="symbol"?g:String(g)),f)}var g}var pd=function(){function p(f){(function(g,b){if(!(g instanceof b))throw new TypeError("Cannot call a class as a function")})(this,p),this.player=f,this.doHotKeyHandler=this.doHotKey.bind(this),this.cancelFullScreenHandler=this.cancelFullScreen.bind(this),this.player.options.hotkey&&document.addEventListener("keydown",this.doHotKeyHandler),document.addEventListener("keydown",this.cancelFullScreenHandler)}var m,x;return m=p,(x=[{key:"doHotKey",value:function(f){if(this.player.focus){var g=document.activeElement.tagName.toUpperCase(),b=document.activeElement.getAttribute("contenteditable");if(g!=="INPUT"&&g!=="TEXTAREA"&&b!==""&&b!=="true"){var E,C=f||window.event;switch(C.keyCode){case 32:C.preventDefault(),this.player.toggle();break;case 37:if(C.preventDefault(),this.player.options.live)break;this.player.seek(this.player.video.currentTime-5),this.player.controller.setAutoHide();break;case 39:if(C.preventDefault(),this.player.options.live)break;this.player.seek(this.player.video.currentTime+5),this.player.controller.setAutoHide();break;case 38:C.preventDefault(),E=this.player.volume()+.1,this.player.volume(E);break;case 40:C.preventDefault(),E=this.player.volume()-.1,this.player.volume(E)}}}}},{key:"cancelFullScreen",value:function(f){(f||window.event).keyCode===27&&this.player.fullScreen.isFullScreen("web")&&this.player.fullScreen.cancel("web")}},{key:"destroy",value:function(){this.player.options.hotkey&&document.removeEventListener("keydown",this.doHotKeyHandler),document.removeEventListener("keydown",this.cancelFullScreenHandler)}}])&&fd(m.prototype,x),Object.defineProperty(m,"prototype",{writable:!1}),p}();const md=pd;function Sn(p){return Sn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},Sn(p)}function gd(p,m){for(var x=0;x<m.length;x++){var f=m[x];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(g=function(b,E){if(Sn(b)!=="object"||b===null)return b;var C=b[Symbol.toPrimitive];if(C!==void 0){var w=C.call(b,"string");if(Sn(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(b)}(f.key),Sn(g)==="symbol"?g:String(g)),f)}var g}var yd=function(){function p(f){var g=this;(function(b,E){if(!(b instanceof E))throw new TypeError("Cannot call a class as a function")})(this,p),this.player=f,this.shown=!1,Array.prototype.slice.call(this.player.template.menuItem).forEach(function(b,E){g.player.options.contextmenu[E].click&&b.addEventListener("click",function(){g.player.options.contextmenu[E].click(g.player),g.hide()})}),this.contextmenuHandler=function(b){if(g.shown)g.hide();else{var E=b||window.event;E.preventDefault();var C=g.player.container.getBoundingClientRect();g.show(E.clientX-C.left,E.clientY-C.top),g.player.template.mask.addEventListener("click",function(){g.hide()})}},this.player.container.addEventListener("contextmenu",this.contextmenuHandler)}var m,x;return m=p,(x=[{key:"show",value:function(f,g){this.player.template.menu.classList.add("dplayer-menu-show");var b=this.player.container.getBoundingClientRect();f+this.player.template.menu.offsetWidth>=b.width?(this.player.template.menu.style.right=b.width-f+"px",this.player.template.menu.style.left="initial"):(this.player.template.menu.style.left=f+"px",this.player.template.menu.style.right="initial"),g+this.player.template.menu.offsetHeight>=b.height?(this.player.template.menu.style.bottom=b.height-g+"px",this.player.template.menu.style.top="initial"):(this.player.template.menu.style.top=g+"px",this.player.template.menu.style.bottom="initial"),this.player.template.mask.classList.add("dplayer-mask-show"),this.shown=!0,this.player.events.trigger("contextmenu_show")}},{key:"hide",value:function(){this.player.template.mask.classList.remove("dplayer-mask-show"),this.player.template.menu.classList.remove("dplayer-menu-show"),this.shown=!1,this.player.events.trigger("contextmenu_hide")}},{key:"destroy",value:function(){this.player.container.removeEventListener("contextmenu",this.contextmenuHandler)}}])&&gd(m.prototype,x),Object.defineProperty(m,"prototype",{writable:!1}),p}();const Ad=yd;function Tn(p){return Tn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},Tn(p)}function bd(p,m){for(var x=0;x<m.length;x++){var f=m[x];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(g=function(b,E){if(Tn(b)!=="object"||b===null)return b;var C=b[Symbol.toPrimitive];if(C!==void 0){var w=C.call(b,"string");if(Tn(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(b)}(f.key),Tn(g)==="symbol"?g:String(g)),f)}var g}var vd=function(){function p(f){var g=this;(function(b,E){if(!(b instanceof E))throw new TypeError("Cannot call a class as a function")})(this,p),this.container=f.template.infoPanel,this.template=f.template,this.video=f.video,this.player=f,this.template.infoPanelClose.addEventListener("click",function(){g.hide()})}var m,x;return m=p,(x=[{key:"show",value:function(){this.beginTime=Date.now(),this.update(),this.player.timer.enable("info"),this.player.timer.enable("fps"),this.container.classList.remove("dplayer-info-panel-hide")}},{key:"hide",value:function(){this.player.timer.disable("info"),this.player.timer.disable("fps"),this.container.classList.add("dplayer-info-panel-hide")}},{key:"triggle",value:function(){this.container.classList.contains("dplayer-info-panel-hide")?this.show():this.hide()}},{key:"update",value:function(){this.template.infoVersion.innerHTML="v".concat("1.27.1"," ").concat("v1.27.0-12-g4f61091"),this.template.infoType.innerHTML=this.player.type,this.template.infoUrl.innerHTML=this.player.options.video.url,this.template.infoResolution.innerHTML="".concat(this.player.video.videoWidth," x ").concat(this.player.video.videoHeight),this.template.infoDuration.innerHTML=this.player.video.duration,this.player.options.danmaku&&(this.template.infoDanmakuId.innerHTML=this.player.options.danmaku.id,this.template.infoDanmakuApi.innerHTML=this.player.options.danmaku.api,this.template.infoDanmakuAmount.innerHTML=this.player.danmaku.dan.length)}},{key:"fps",value:function(f){this.template.infoFPS.innerHTML="".concat(f.toFixed(1))}}])&&bd(m.prototype,x),Object.defineProperty(m,"prototype",{writable:!1}),p}();const xd=vd;var Ed=i(568),Sd=i.n(Ed);function Cn(p){return Cn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},Cn(p)}function ys(p,m){var x=Object.keys(p);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(p);m&&(f=f.filter(function(g){return Object.getOwnPropertyDescriptor(p,g).enumerable})),x.push.apply(x,f)}return x}function Td(p,m,x){return(m=bs(m))in p?Object.defineProperty(p,m,{value:x,enumerable:!0,configurable:!0,writable:!0}):p[m]=x,p}function As(p,m){for(var x=0;x<m.length;x++){var f=m[x];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,bs(f.key),f)}}function bs(p){var m=function(x,f){if(Cn(x)!=="object"||x===null)return x;var g=x[Symbol.toPrimitive];if(g!==void 0){var b=g.call(x,"string");if(Cn(b)!=="object")return b;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(x)}(p);return Cn(m)==="symbol"?m:String(m)}var vs=0,Ut=[],Cd=function(){function p(g){var b=this;(function(E,C){if(!(E instanceof C))throw new TypeError("Cannot call a class as a function")})(this,p),this.options=function(E){var C={container:E.element||document.getElementsByClassName("dplayer")[0],live:!1,autoplay:!1,theme:"#b7daff",loop:!1,lang:(navigator.language||navigator.browserLanguage).toLowerCase(),screenshot:!1,airplay:!0,chromecast:!1,hotkey:!0,preload:"metadata",volume:.7,playbackSpeed:[.5,.75,1,1.25,1.5,2],apiBackend:Ko,video:{},contextmenu:[],mutex:!0,pluginOptions:{hls:{},flv:{},dash:{},webtorrent:{}},preventClickToggle:!1};for(var w in C)C.hasOwnProperty(w)&&!E.hasOwnProperty(w)&&(E[w]=C[w]);return E.video&&!E.video.type&&(E.video.type="auto"),qi(E.danmaku)==="object"&&E.danmaku&&!E.danmaku.user&&(E.danmaku.user="DIYgod"),E.subtitle&&(!E.subtitle.type&&(E.subtitle.type="webvtt"),!E.subtitle.fontSize&&(E.subtitle.fontSize="20px"),!E.subtitle.bottom&&(E.subtitle.bottom="40px"),!E.subtitle.color&&(E.subtitle.color="#fff")),E.video.quality&&(E.video.url=E.video.quality[E.video.defaultQuality].url),E.lang&&(E.lang=E.lang.toLowerCase()),E.contextmenu=E.contextmenu.concat([{key:"video-info",click:function(O){O.infoPanel.triggle()}},{key:"about-author",link:"https://diygod.me"},{text:"DPlayer v".concat("1.27.1"),link:"https://github.com/MoePlayer/DPlayer"}]),E}(function(E){for(var C=1;C<arguments.length;C++){var w=arguments[C]!=null?arguments[C]:{};C%2?ys(Object(w),!0).forEach(function(O){Td(E,O,w[O])}):Object.getOwnPropertyDescriptors?Object.defineProperties(E,Object.getOwnPropertyDescriptors(w)):ys(Object(w)).forEach(function(O){Object.defineProperty(E,O,Object.getOwnPropertyDescriptor(w,O))})}return E}({preload:g.video.type==="webtorrent"?"none":"metadata"},g)),this.options.video.quality&&(this.qualityIndex=this.options.video.defaultQuality,this.quality=this.options.video.quality[this.options.video.defaultQuality]),this.tran=new Ho(this.options.lang).tran,this.events=new Pl,this.user=new $l(this),this.container=this.options.container,this.noticeList={},this.container.classList.add("dplayer"),this.options.danmaku||this.container.classList.add("dplayer-no-danmaku"),this.options.live?this.container.classList.add("dplayer-live"):this.container.classList.remove("dplayer-live"),U.isMobile&&this.container.classList.add("dplayer-mobile"),this.arrow=this.container.offsetWidth<=500,this.arrow&&this.container.classList.add("dplayer-arrow"),this.options.subtitle&&Array.isArray(this.options.subtitle.url)&&(this.options.subtitle.url.push({subtitle:"",lang:"off"}),this.options.subtitle.defaultSubtitle&&(typeof this.options.subtitle.defaultSubtitle=="string"?this.options.subtitle.index=this.options.subtitle.url.findIndex(function(E){return E.lang===b.options.subtitle.defaultSubtitle||E.name===b.options.subtitle.defaultSubtitle}):typeof this.options.subtitle.defaultSubtitle=="number"&&(this.options.subtitle.index=this.options.subtitle.defaultSubtitle)),(this.options.subtitle.index===-1||!this.options.subtitle.index||this.options.subtitle.index>this.options.subtitle.url.length-1)&&(this.options.subtitle.index=this.options.subtitle.url.findIndex(function(E){return E.lang===b.options.lang})),this.options.subtitle.index===-1&&(this.options.subtitle.index=this.options.subtitle.url.length-1)),this.template=new ms({container:this.container,options:this.options,index:vs,tran:this.tran}),this.video=this.template.video,this.bar=new jl(this.template),this.bezel=new ed(this.template.bezel),this.fullScreen=new Ml(this),this.controller=new ad(this),this.options.danmaku&&(this.danmaku=new Dl({player:this,container:this.template.danmaku,opacity:this.user.get("opacity"),callback:function(){setTimeout(function(){b.template.danmakuLoading.style.display="none",b.options.autoplay&&b.play()},0)},error:function(E){b.notice(E)},apiBackend:this.options.apiBackend,borderColor:this.options.theme,height:this.arrow?24:30,time:function(){return b.video.currentTime},unlimited:this.user.get("unlimited"),api:{id:this.options.danmaku.id,address:this.options.danmaku.api,token:this.options.danmaku.token,maximum:this.options.danmaku.maximum,addition:this.options.danmaku.addition,user:this.options.danmaku.user,speedRate:this.options.danmaku.speedRate},events:this.events,tran:function(E){return b.tran(E)}}),this.comment=new hd(this)),this.setting=new dd(this),this.plugins={},this.docClickFun=function(){b.focus=!1},this.containerClickFun=function(){b.focus=!0},document.addEventListener("click",this.docClickFun,!0),this.container.addEventListener("click",this.containerClickFun,!0),this.paused=!0,this.timer=new Zl(this),this.hotkey=new md(this),this.contextmenu=new Ad(this),this.initVideo(this.video,this.quality&&this.quality.type||this.options.video.type),this.infoPanel=new xd(this),!this.danmaku&&this.options.autoplay&&this.play(),vs++,Ut.push(this)}var m,x,f;return m=p,x=[{key:"seek",value:function(g){g=Math.max(g,0),this.video.duration&&(g=Math.min(g,this.video.duration)),this.video.currentTime<g?this.notice("".concat(this.tran("ff").replace("%s",(g-this.video.currentTime).toFixed(0)))):this.video.currentTime>g&&this.notice("".concat(this.tran("rew").replace("%s",(this.video.currentTime-g).toFixed(0)))),this.video.currentTime=g,this.danmaku&&this.danmaku.seek(),this.bar.set("played",g/this.video.duration,"width"),this.template.ptime.innerHTML=U.secondToTime(g)}},{key:"play",value:function(g){var b=this;if(this.paused=!1,this.video.paused&&!U.isMobile&&this.bezel.switch(We.play),this.template.playButton.innerHTML=We.pause,this.template.mobilePlayButton.innerHTML=We.pause,g||J.resolve(this.video.play()).catch(function(){b.pause()}).then(function(){}),this.timer.enable("loading"),this.container.classList.remove("dplayer-paused"),this.container.classList.add("dplayer-playing"),this.danmaku&&this.danmaku.play(),this.options.mutex)for(var E=0;E<Ut.length;E++)this!==Ut[E]&&Ut[E].pause()}},{key:"pause",value:function(g){this.paused=!0,this.container.classList.remove("dplayer-loading"),this.video.paused||U.isMobile||this.bezel.switch(We.pause),this.template.playButton.innerHTML=We.play,this.template.mobilePlayButton.innerHTML=We.play,g||this.video.pause(),this.timer.disable("loading"),this.container.classList.remove("dplayer-playing"),this.container.classList.add("dplayer-paused"),this.danmaku&&this.danmaku.pause()}},{key:"switchVolumeIcon",value:function(){this.volume()>=.95?this.template.volumeIcon.innerHTML=We.volumeUp:this.volume()>0?this.template.volumeIcon.innerHTML=We.volumeDown:this.template.volumeIcon.innerHTML=We.volumeOff}},{key:"volume",value:function(g,b,E){if(g=parseFloat(g),!isNaN(g)){g=Math.max(g,0),g=Math.min(g,1),this.bar.set("volume",g,"width");var C="".concat((100*g).toFixed(0),"%");this.template.volumeBarWrapWrap.dataset.balloon=C,b||this.user.set("volume",g),E||this.notice("".concat(this.tran("volume")," ").concat((100*g).toFixed(0),"%"),void 0,void 0,"volume"),this.video.volume=g,this.video.muted&&(this.video.muted=!1),this.switchVolumeIcon()}return this.video.volume}},{key:"toggle",value:function(){this.video.paused?this.play():this.pause()}},{key:"on",value:function(g,b){this.events.on(g,b)}},{key:"switchVideo",value:function(g,b){this.pause(),this.video.poster=g.pic?g.pic:"",this.video.src=g.url,this.initMSE(this.video,g.type||"auto"),b&&(this.template.danmakuLoading.style.display="block",this.bar.set("played",0,"width"),this.bar.set("loaded",0,"width"),this.template.ptime.innerHTML="00:00",this.template.danmaku.innerHTML="",this.danmaku&&this.danmaku.reload({id:b.id,address:b.api,token:b.token,maximum:b.maximum,addition:b.addition,user:b.user}))}},{key:"initMSE",value:function(g,b){var E=this;if(this.type=b,this.options.video.customType&&this.options.video.customType[b])Object.prototype.toString.call(this.options.video.customType[b])==="[object Function]"?this.options.video.customType[b](this.video,this):console.error("Illegal customType: ".concat(b));else switch(this.type==="auto"&&(/m3u8(#|\?|$)/i.exec(g.src)?this.type="hls":/.flv(#|\?|$)/i.exec(g.src)?this.type="flv":/.mpd(#|\?|$)/i.exec(g.src)?this.type="dash":this.type="normal"),this.type==="hls"&&(g.canPlayType("application/x-mpegURL")||g.canPlayType("application/vnd.apple.mpegURL"))&&(this.type="normal"),this.type){case"hls":if(window.Hls)if(window.Hls.isSupported()){var C=this.options.pluginOptions.hls,w=new window.Hls(C);this.plugins.hls=w,w.loadSource(g.src),w.attachMedia(g),this.events.on("destroy",function(){w.destroy(),delete E.plugins.hls})}else this.notice("Error: Hls is not supported.");else this.notice("Error: Can't find Hls.");break;case"flv":if(window.flvjs)if(window.flvjs.isSupported()){var O=window.flvjs.createPlayer(Object.assign(this.options.pluginOptions.flv.mediaDataSource||{},{type:"flv",url:g.src}),this.options.pluginOptions.flv.config);this.plugins.flvjs=O,O.attachMediaElement(g),O.load(),this.events.on("destroy",function(){O.unload(),O.detachMediaElement(),O.destroy(),delete E.plugins.flvjs})}else this.notice("Error: flvjs is not supported.");else this.notice("Error: Can't find flvjs.");break;case"dash":if(window.dashjs){var N=window.dashjs.MediaPlayer().create().initialize(g,g.src,!1),z=this.options.pluginOptions.dash;N.updateSettings(z),this.plugins.dash=N,this.events.on("destroy",function(){window.dashjs.MediaPlayer().reset(),delete E.plugins.dash})}else this.notice("Error: Can't find dashjs.");break;case"webtorrent":if(window.WebTorrent)if(window.WebTorrent.WEBRTC_SUPPORT){this.container.classList.add("dplayer-loading");var W=this.options.pluginOptions.webtorrent,X=new window.WebTorrent(W);this.plugins.webtorrent=X;var j=g.src;g.src="",g.preload="metadata",g.addEventListener("durationchange",function(){return E.container.classList.remove("dplayer-loading")},{once:!0}),X.add(j,function(V){V.files.find(function(Z){return Z.name.endsWith(".mp4")}).renderTo(E.video,{autoplay:E.options.autoplay,controls:!1})}),this.events.on("destroy",function(){X.remove(j),X.destroy(),delete E.plugins.webtorrent})}else this.notice("Error: Webtorrent is not supported.");else this.notice("Error: Can't find Webtorrent.")}}},{key:"initVideo",value:function(g,b){var E=this;this.initMSE(g,b),this.on("durationchange",function(){g.duration!==1&&g.duration!==1/0&&(E.template.dtime.innerHTML=U.secondToTime(g.duration))}),this.on("progress",function(){var O=g.buffered.length?g.buffered.end(g.buffered.length-1)/g.duration:0;E.bar.set("loaded",O,"width")}),this.on("error",function(){E.video.error&&E.tran&&E.notice&&E.type!=="webtorrent"&&E.notice(E.tran("video-failed"))}),this.on("ended",function(){E.bar.set("played",1,"width"),E.setting.loop?(E.seek(0),E.play()):E.pause(),E.danmaku&&(E.danmaku.danIndex=0)}),this.on("play",function(){E.paused&&E.play(!0)}),this.on("pause",function(){E.paused||E.pause(!0)}),this.on("timeupdate",function(){E.bar.set("played",E.video.currentTime/E.video.duration,"width");var O=U.secondToTime(E.video.currentTime);E.template.ptime.innerHTML!==O&&(E.template.ptime.innerHTML=O)});for(var C=function(O){g.addEventListener(E.events.videoEvents[O],function(N){E.events.trigger(E.events.videoEvents[O],N)})},w=0;w<this.events.videoEvents.length;w++)C(w);this.volume(this.user.get("volume"),!0,!0),this.options.subtitle&&(this.subtitle=new Kl(this.template.subtitle,this.video,this.options.subtitle,this.events),Array.isArray(this.options.subtitle.url)&&(this.subtitles=new Yl(this)),this.user.get("subtitle")||this.subtitle.hide())}},{key:"switchQuality",value:function(g){var b=this;if(g=typeof g=="string"?parseInt(g):g,this.qualityIndex!==g&&!this.switchingQuality){this.prevIndex=this.qualityIndex,this.qualityIndex=g,this.switchingQuality=!0,this.quality=this.options.video.quality[g],this.template.qualityButton.innerHTML=this.quality.name;var E=this.video.paused;this.video.pause();var C=Sd()({current:!1,pic:null,screenshot:this.options.screenshot,preload:"auto",url:this.quality.url,subtitle:this.options.subtitle}),w=new DOMParser().parseFromString(C,"text/html").body.firstChild;this.template.videoWrap.insertBefore(w,this.template.videoWrap.getElementsByTagName("div")[0]),this.prevVideo=this.video,this.video=w,this.initVideo(this.video,this.quality.type||this.options.video.type),this.seek(this.prevVideo.currentTime),this.notice("".concat(this.tran("switching-quality").replace("%q",this.quality.name)),-1,void 0,"switch-quality"),this.events.trigger("quality_start",this.quality),this.on("canplay",function(){if(b.prevVideo){if(b.video.currentTime!==b.prevVideo.currentTime)return void b.seek(b.prevVideo.currentTime);b.template.videoWrap.removeChild(b.prevVideo),b.video.classList.add("dplayer-video-current"),E||b.video.play(),b.prevVideo=null,b.notice("".concat(b.tran("switched-quality").replace("%q",b.quality.name)),void 0,void 0,"switch-quality"),b.switchingQuality=!1,b.events.trigger("quality_end")}}),this.on("error",function(){b.video.error&&b.prevVideo&&(b.template.videoWrap.removeChild(b.video),b.video=b.prevVideo,E||b.video.play(),b.qualityIndex=b.prevIndex,b.quality=b.options.video.quality[b.qualityIndex],b.noticeTime=setTimeout(function(){b.template.notice.style.opacity=0,b.events.trigger("notice_hide")},3e3),b.prevVideo=null,b.switchingQuality=!1)})}}},{key:"notice",value:function(g){var b,E,C,w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2e3,O=arguments.length>2&&arguments[2]!==void 0?arguments[2]:.8,N=arguments.length>3?arguments[3]:void 0;if(N&&((b=document.getElementById("dplayer-notice-".concat(N)))&&(b.innerHTML=g),this.noticeList[N]&&(clearTimeout(this.noticeList[N]),this.noticeList[N]=null)),!b){var z=ms.NewNotice(g,O,N);this.template.noticeList.appendChild(z),b=z}this.events.trigger("notice_show",b),w>0&&(this.noticeList[N]=setTimeout((E=b,C=this,function(){E.addEventListener("animationend",function(){C.template.noticeList.removeChild(E)}),E.classList.add("remove-notice"),C.events.trigger("notice_hide"),C.noticeList[N]=null}),w))}},{key:"resize",value:function(){this.danmaku&&this.danmaku.resize(),this.controller.thumbnails&&this.controller.thumbnails.resize(160,this.video.videoHeight/this.video.videoWidth*160,this.template.barWrap.offsetWidth),this.events.trigger("resize")}},{key:"speed",value:function(g){this.video.playbackRate=g}},{key:"destroy",value:function(){Ut.splice(Ut.indexOf(this),1),this.pause(),document.removeEventListener("click",this.docClickFun,!0),this.container.removeEventListener("click",this.containerClickFun,!0),this.fullScreen.destroy(),this.hotkey.destroy(),this.contextmenu.destroy(),this.controller.destroy(),this.timer.destroy(),this.video.src="",this.container.innerHTML="",this.events.trigger("destroy")}}],f=[{key:"version",get:function(){return"1.27.1"}}],x&&As(m.prototype,x),f&&As(m,f),Object.defineProperty(m,"prototype",{writable:!1}),p}();const wd=Cd;console.log(`
`.concat(" %c DPlayer v","1.27.1"," ").concat("v1.27.0-12-g4f61091"," %c https://dplayer.diygod.dev ",`
`,`
`),"color: #fadfa3; background: #030307; padding:5px 0;","background: #fadfa3; padding:5px 0;");const kd=wd})(),r.default})())})(Ud);const te=Number.isFinite||function(a){return typeof a=="number"&&isFinite(a)},$d=Number.isSafeInteger||function(a){return typeof a=="number"&&Math.abs(a)<=Gd},Gd=Number.MAX_SAFE_INTEGER||9007199254740991;let ae=function(a){return a.NETWORK_ERROR="networkError",a.MEDIA_ERROR="mediaError",a.KEY_SYSTEM_ERROR="keySystemError",a.MUX_ERROR="muxError",a.OTHER_ERROR="otherError",a}({}),G=function(a){return a.KEY_SYSTEM_NO_KEYS="keySystemNoKeys",a.KEY_SYSTEM_NO_ACCESS="keySystemNoAccess",a.KEY_SYSTEM_NO_SESSION="keySystemNoSession",a.KEY_SYSTEM_NO_CONFIGURED_LICENSE="keySystemNoConfiguredLicense",a.KEY_SYSTEM_LICENSE_REQUEST_FAILED="keySystemLicenseRequestFailed",a.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED="keySystemServerCertificateRequestFailed",a.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED="keySystemServerCertificateUpdateFailed",a.KEY_SYSTEM_SESSION_UPDATE_FAILED="keySystemSessionUpdateFailed",a.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED="keySystemStatusOutputRestricted",a.KEY_SYSTEM_STATUS_INTERNAL_ERROR="keySystemStatusInternalError",a.KEY_SYSTEM_DESTROY_MEDIA_KEYS_ERROR="keySystemDestroyMediaKeysError",a.KEY_SYSTEM_DESTROY_CLOSE_SESSION_ERROR="keySystemDestroyCloseSessionError",a.KEY_SYSTEM_DESTROY_REMOVE_SESSION_ERROR="keySystemDestroyRemoveSessionError",a.MANIFEST_LOAD_ERROR="manifestLoadError",a.MANIFEST_LOAD_TIMEOUT="manifestLoadTimeOut",a.MANIFEST_PARSING_ERROR="manifestParsingError",a.MANIFEST_INCOMPATIBLE_CODECS_ERROR="manifestIncompatibleCodecsError",a.LEVEL_EMPTY_ERROR="levelEmptyError",a.LEVEL_LOAD_ERROR="levelLoadError",a.LEVEL_LOAD_TIMEOUT="levelLoadTimeOut",a.LEVEL_PARSING_ERROR="levelParsingError",a.LEVEL_SWITCH_ERROR="levelSwitchError",a.AUDIO_TRACK_LOAD_ERROR="audioTrackLoadError",a.AUDIO_TRACK_LOAD_TIMEOUT="audioTrackLoadTimeOut",a.SUBTITLE_LOAD_ERROR="subtitleTrackLoadError",a.SUBTITLE_TRACK_LOAD_TIMEOUT="subtitleTrackLoadTimeOut",a.FRAG_LOAD_ERROR="fragLoadError",a.FRAG_LOAD_TIMEOUT="fragLoadTimeOut",a.FRAG_DECRYPT_ERROR="fragDecryptError",a.FRAG_PARSING_ERROR="fragParsingError",a.FRAG_GAP="fragGap",a.REMUX_ALLOC_ERROR="remuxAllocError",a.KEY_LOAD_ERROR="keyLoadError",a.KEY_LOAD_TIMEOUT="keyLoadTimeOut",a.BUFFER_ADD_CODEC_ERROR="bufferAddCodecError",a.BUFFER_INCOMPATIBLE_CODECS_ERROR="bufferIncompatibleCodecsError",a.BUFFER_APPEND_ERROR="bufferAppendError",a.BUFFER_APPENDING_ERROR="bufferAppendingError",a.BUFFER_STALLED_ERROR="bufferStalledError",a.BUFFER_FULL_ERROR="bufferFullError",a.BUFFER_SEEK_OVER_HOLE="bufferSeekOverHole",a.BUFFER_NUDGE_ON_STALL="bufferNudgeOnStall",a.ASSET_LIST_LOAD_ERROR="assetListLoadError",a.ASSET_LIST_LOAD_TIMEOUT="assetListLoadTimeout",a.ASSET_LIST_PARSING_ERROR="assetListParsingError",a.INTERSTITIAL_ASSET_ITEM_ERROR="interstitialAssetItemError",a.INTERNAL_EXCEPTION="internalException",a.INTERNAL_ABORTED="aborted",a.ATTACH_MEDIA_ERROR="attachMediaError",a.UNKNOWN="unknown",a}({}),T=function(a){return a.MEDIA_ATTACHING="hlsMediaAttaching",a.MEDIA_ATTACHED="hlsMediaAttached",a.MEDIA_DETACHING="hlsMediaDetaching",a.MEDIA_DETACHED="hlsMediaDetached",a.MEDIA_ENDED="hlsMediaEnded",a.STALL_RESOLVED="hlsStallResolved",a.BUFFER_RESET="hlsBufferReset",a.BUFFER_CODECS="hlsBufferCodecs",a.BUFFER_CREATED="hlsBufferCreated",a.BUFFER_APPENDING="hlsBufferAppending",a.BUFFER_APPENDED="hlsBufferAppended",a.BUFFER_EOS="hlsBufferEos",a.BUFFERED_TO_END="hlsBufferedToEnd",a.BUFFER_FLUSHING="hlsBufferFlushing",a.BUFFER_FLUSHED="hlsBufferFlushed",a.MANIFEST_LOADING="hlsManifestLoading",a.MANIFEST_LOADED="hlsManifestLoaded",a.MANIFEST_PARSED="hlsManifestParsed",a.LEVEL_SWITCHING="hlsLevelSwitching",a.LEVEL_SWITCHED="hlsLevelSwitched",a.LEVEL_LOADING="hlsLevelLoading",a.LEVEL_LOADED="hlsLevelLoaded",a.LEVEL_UPDATED="hlsLevelUpdated",a.LEVEL_PTS_UPDATED="hlsLevelPtsUpdated",a.LEVELS_UPDATED="hlsLevelsUpdated",a.AUDIO_TRACKS_UPDATED="hlsAudioTracksUpdated",a.AUDIO_TRACK_SWITCHING="hlsAudioTrackSwitching",a.AUDIO_TRACK_SWITCHED="hlsAudioTrackSwitched",a.AUDIO_TRACK_LOADING="hlsAudioTrackLoading",a.AUDIO_TRACK_LOADED="hlsAudioTrackLoaded",a.AUDIO_TRACK_UPDATED="hlsAudioTrackUpdated",a.SUBTITLE_TRACKS_UPDATED="hlsSubtitleTracksUpdated",a.SUBTITLE_TRACKS_CLEARED="hlsSubtitleTracksCleared",a.SUBTITLE_TRACK_SWITCH="hlsSubtitleTrackSwitch",a.SUBTITLE_TRACK_LOADING="hlsSubtitleTrackLoading",a.SUBTITLE_TRACK_LOADED="hlsSubtitleTrackLoaded",a.SUBTITLE_TRACK_UPDATED="hlsSubtitleTrackUpdated",a.SUBTITLE_FRAG_PROCESSED="hlsSubtitleFragProcessed",a.CUES_PARSED="hlsCuesParsed",a.NON_NATIVE_TEXT_TRACKS_FOUND="hlsNonNativeTextTracksFound",a.INIT_PTS_FOUND="hlsInitPtsFound",a.FRAG_LOADING="hlsFragLoading",a.FRAG_LOAD_EMERGENCY_ABORTED="hlsFragLoadEmergencyAborted",a.FRAG_LOADED="hlsFragLoaded",a.FRAG_DECRYPTED="hlsFragDecrypted",a.FRAG_PARSING_INIT_SEGMENT="hlsFragParsingInitSegment",a.FRAG_PARSING_USERDATA="hlsFragParsingUserdata",a.FRAG_PARSING_METADATA="hlsFragParsingMetadata",a.FRAG_PARSED="hlsFragParsed",a.FRAG_BUFFERED="hlsFragBuffered",a.FRAG_CHANGED="hlsFragChanged",a.FPS_DROP="hlsFpsDrop",a.FPS_DROP_LEVEL_CAPPING="hlsFpsDropLevelCapping",a.MAX_AUTO_LEVEL_UPDATED="hlsMaxAutoLevelUpdated",a.ERROR="hlsError",a.DESTROYING="hlsDestroying",a.KEY_LOADING="hlsKeyLoading",a.KEY_LOADED="hlsKeyLoaded",a.LIVE_BACK_BUFFER_REACHED="hlsLiveBackBufferReached",a.BACK_BUFFER_REACHED="hlsBackBufferReached",a.STEERING_MANIFEST_LOADED="hlsSteeringManifestLoaded",a.ASSET_LIST_LOADING="hlsAssetListLoading",a.ASSET_LIST_LOADED="hlsAssetListLoaded",a.INTERSTITIALS_UPDATED="hlsInterstitialsUpdated",a.INTERSTITIALS_BUFFERED_TO_BOUNDARY="hlsInterstitialsBufferedToBoundary",a.INTERSTITIAL_ASSET_PLAYER_CREATED="hlsInterstitialAssetPlayerCreated",a.INTERSTITIAL_STARTED="hlsInterstitialStarted",a.INTERSTITIAL_ASSET_STARTED="hlsInterstitialAssetStarted",a.INTERSTITIAL_ASSET_ENDED="hlsInterstitialAssetEnded",a.INTERSTITIAL_ASSET_ERROR="hlsInterstitialAssetError",a.INTERSTITIAL_ENDED="hlsInterstitialEnded",a.INTERSTITIALS_PRIMARY_RESUMED="hlsInterstitialsPrimaryResumed",a.PLAYOUT_LIMIT_REACHED="hlsPlayoutLimitReached",a.EVENT_CUE_ENTER="hlsEventCueEnter",a}({});var ft={MANIFEST:"manifest",LEVEL:"level",AUDIO_TRACK:"audioTrack",SUBTITLE_TRACK:"subtitleTrack"},ce={MAIN:"main",AUDIO:"audio",SUBTITLE:"subtitle"};class Kt{constructor(e,t=0,n=0){this.halfLife=void 0,this.alpha_=void 0,this.estimate_=void 0,this.totalWeight_=void 0,this.halfLife=e,this.alpha_=e?Math.exp(Math.log(.5)/e):0,this.estimate_=t,this.totalWeight_=n}sample(e,t){const n=Math.pow(this.alpha_,e);this.estimate_=t*(1-n)+n*this.estimate_,this.totalWeight_+=e}getTotalWeight(){return this.totalWeight_}getEstimate(){if(this.alpha_){const e=1-Math.pow(this.alpha_,this.totalWeight_);if(e)return this.estimate_/e}return this.estimate_}}class qd{constructor(e,t,n,i=100){this.defaultEstimate_=void 0,this.minWeight_=void 0,this.minDelayMs_=void 0,this.slow_=void 0,this.fast_=void 0,this.defaultTTFB_=void 0,this.ttfb_=void 0,this.defaultEstimate_=n,this.minWeight_=.001,this.minDelayMs_=50,this.slow_=new Kt(e),this.fast_=new Kt(t),this.defaultTTFB_=i,this.ttfb_=new Kt(e)}update(e,t){const{slow_:n,fast_:i,ttfb_:r}=this;n.halfLife!==e&&(this.slow_=new Kt(e,n.getEstimate(),n.getTotalWeight())),i.halfLife!==t&&(this.fast_=new Kt(t,i.getEstimate(),i.getTotalWeight())),r.halfLife!==e&&(this.ttfb_=new Kt(e,r.getEstimate(),r.getTotalWeight()))}sample(e,t){e=Math.max(e,this.minDelayMs_);const n=8*t,i=e/1e3,r=n/i;this.fast_.sample(i,r),this.slow_.sample(i,r)}sampleTTFB(e){const t=e/1e3,n=Math.sqrt(2)*Math.exp(-Math.pow(t,2)/2);this.ttfb_.sample(n,Math.max(e,5))}canEstimate(){return this.fast_.getTotalWeight()>=this.minWeight_}getEstimate(){return this.canEstimate()?Math.min(this.fast_.getEstimate(),this.slow_.getEstimate()):this.defaultEstimate_}getEstimateTTFB(){return this.ttfb_.getTotalWeight()>=this.minWeight_?this.ttfb_.getEstimate():this.defaultTTFB_}get defaultEstimate(){return this.defaultEstimate_}destroy(){}}function Kd(a,e,t){return(e=zd(e))in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function Te(){return Te=Object.assign?Object.assign.bind():function(a){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)({}).hasOwnProperty.call(t,n)&&(a[n]=t[n])}return a},Te.apply(null,arguments)}function Ss(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(a,i).enumerable})),t.push.apply(t,n)}return t}function Se(a){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Ss(Object(t),!0).forEach(function(n){Kd(a,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):Ss(Object(t)).forEach(function(n){Object.defineProperty(a,n,Object.getOwnPropertyDescriptor(t,n))})}return a}function Hd(a,e){if(typeof a!="object"||!a)return a;var t=a[Symbol.toPrimitive];if(t!==void 0){var n=t.call(a,e);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(a)}function zd(a){var e=Hd(a,"string");return typeof e=="symbol"?e:e+""}class pt{constructor(e,t){this.trace=void 0,this.debug=void 0,this.log=void 0,this.warn=void 0,this.info=void 0,this.error=void 0;const n=`[${e}]:`;this.trace=Rt,this.debug=t.debug.bind(null,n),this.log=t.log.bind(null,n),this.warn=t.warn.bind(null,n),this.info=t.info.bind(null,n),this.error=t.error.bind(null,n)}}const Rt=function(){},Yd={trace:Rt,debug:Rt,log:Rt,warn:Rt,info:Rt,error:Rt};function Vd(){return Te({},Yd)}const Wd=Vd(),be=Wd;function Mn(a=!0){return typeof self>"u"?void 0:(a||!self.MediaSource)&&self.ManagedMediaSource||self.MediaSource||self.WebKitMediaSource}function jd(a){return typeof self<"u"&&a===self.ManagedMediaSource}function va(a,e){const t=Object.keys(a),n=Object.keys(e),i=t.length,r=n.length;return!i||!r||i===r&&!t.some(s=>n.indexOf(s)===-1)}function qe(a,e=!1){if(typeof TextDecoder<"u"){const d=new TextDecoder("utf-8").decode(a);if(e){const c=d.indexOf("\0");return c!==-1?d.substring(0,c):d}return d.replace(/\0/g,"")}const t=a.length;let n,i,r,s="",o=0;for(;o<t;){if(n=a[o++],n===0&&e)return s;if(n===0||n===3)continue;switch(n>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:s+=String.fromCharCode(n);break;case 12:case 13:i=a[o++],s+=String.fromCharCode((n&31)<<6|i&63);break;case 14:i=a[o++],r=a[o++],s+=String.fromCharCode((n&15)<<12|(i&63)<<6|(r&63)<<0);break}}return s}const it={hexDump:function(a){let e="";for(let t=0;t<a.length;t++){let n=a[t].toString(16);n.length<2&&(n="0"+n),e+=n}return e}};function Qd(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Yi={exports:{}},Ts;function Xd(){return Ts||(Ts=1,function(a,e){(function(t){var n=/^(?=((?:[a-zA-Z0-9+\-.]+:)?))\1(?=((?:\/\/[^\/?#]*)?))\2(?=((?:(?:[^?#\/]*\/)*[^;?#\/]*)?))\3((?:;[^?#]*)?)(\?[^#]*)?(#[^]*)?$/,i=/^(?=([^\/?#]*))\1([^]*)$/,r=/(?:\/|^)\.(?=\/)/g,s=/(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g,o={buildAbsoluteURL:function(l,d,c){if(c=c||{},l=l.trim(),d=d.trim(),!d){if(!c.alwaysNormalize)return l;var u=o.parseURL(l);if(!u)throw new Error("Error trying to parse base URL.");return u.path=o.normalizePath(u.path),o.buildURLFromParts(u)}var h=o.parseURL(d);if(!h)throw new Error("Error trying to parse relative URL.");if(h.scheme)return c.alwaysNormalize?(h.path=o.normalizePath(h.path),o.buildURLFromParts(h)):d;var y=o.parseURL(l);if(!y)throw new Error("Error trying to parse base URL.");if(!y.netLoc&&y.path&&y.path[0]!=="/"){var A=i.exec(y.path);y.netLoc=A[1],y.path=A[2]}y.netLoc&&!y.path&&(y.path="/");var v={scheme:y.scheme,netLoc:h.netLoc,path:null,params:h.params,query:h.query,fragment:h.fragment};if(!h.netLoc&&(v.netLoc=y.netLoc,h.path[0]!=="/"))if(!h.path)v.path=y.path,h.params||(v.params=y.params,h.query||(v.query=y.query));else{var S=y.path,k=S.substring(0,S.lastIndexOf("/")+1)+h.path;v.path=o.normalizePath(k)}return v.path===null&&(v.path=c.alwaysNormalize?o.normalizePath(h.path):h.path),o.buildURLFromParts(v)},parseURL:function(l){var d=n.exec(l);return d?{scheme:d[1]||"",netLoc:d[2]||"",path:d[3]||"",params:d[4]||"",query:d[5]||"",fragment:d[6]||""}:null},normalizePath:function(l){for(l=l.split("").reverse().join("").replace(r,"");l.length!==(l=l.replace(s,"")).length;);return l.split("").reverse().join("")},buildURLFromParts:function(l){return l.scheme+l.netLoc+l.path+l.params+l.query+l.fragment}};a.exports=o})()}(Yi)),Yi.exports}Xd();class Zd{constructor(){this.aborted=!1,this.loaded=0,this.retry=0,this.total=0,this.chunkCount=0,this.bwEstimate=0,this.loading={start:0,first:0,end:0},this.parsing={start:0,end:0},this.buffering={start:0,first:0,end:0}}}var Oe={AUDIO:"audio",VIDEO:"video",AUDIOVIDEO:"audiovideo"};function Ge(a){return a.sn!=="initSegment"}const yi=Math.pow(2,32)-1,Jd=[].push,xa={video:1,audio:2,id3:3,text:4};function _e(a){return String.fromCharCode.apply(null,a)}function Ea(a,e){const t=a[e]<<8|a[e+1];return t<0?65536+t:t}function ee(a,e){const t=Sa(a,e);return t<0?4294967296+t:t}function Cs(a,e){let t=ee(a,e);return t*=Math.pow(2,32),t+=ee(a,e+4),t}function Sa(a,e){return a[e]<<24|a[e+1]<<16|a[e+2]<<8|a[e+3]}function Vi(a,e,t){a[e]=t>>24,a[e+1]=t>>16&255,a[e+2]=t>>8&255,a[e+3]=t&255}function ec(a){const e=a.byteLength;for(let t=0;t<e;){const n=ee(a,t);if(n>8&&a[t+4]===109&&a[t+5]===111&&a[t+6]===111&&a[t+7]===102)return!0;t=n>1?t+n:e}return!1}function oe(a,e){const t=[];if(!e.length)return t;const n=a.byteLength;for(let i=0;i<n;){const r=ee(a,i),s=_e(a.subarray(i+4,i+8)),o=r>1?i+r:n;if(s===e[0])if(e.length===1)t.push(a.subarray(i+8,o));else{const l=oe(a.subarray(i+8,o),e.slice(1));l.length&&Jd.apply(t,l)}i=o}return t}function tc(a){const e=[],t=a[0];let n=8;const i=ee(a,n);n+=4;let r=0,s=0;t===0?(r=ee(a,n),s=ee(a,n+4),n+=8):(r=Cs(a,n),s=Cs(a,n+8),n+=16),n+=2;let o=a.length+s;const l=Ea(a,n);n+=2;for(let d=0;d<l;d++){let c=n;const u=ee(a,c);c+=4;const h=u&2147483647;if((u&2147483648)>>>31===1)return be.warn("SIDX has hierarchical references (not supported)"),null;const A=ee(a,c);c+=4,e.push({referenceSize:h,subsegmentDuration:A,info:{duration:A/i,start:o,end:o+h-1}}),o+=h,c+=4,n=c}return{earliestPresentationTime:r,timescale:i,version:t,referencesCount:l,references:e}}function Ta(a){const e=[],t=oe(a,["moov","trak"]);for(let i=0;i<t.length;i++){const r=t[i],s=oe(r,["tkhd"])[0];if(s){let o=s[0];const l=ee(s,o===0?12:20),d=oe(r,["mdia","mdhd"])[0];if(d){o=d[0];const c=ee(d,o===0?12:20),u=oe(r,["mdia","hdlr"])[0];if(u){const h=_e(u.subarray(8,12)),y={soun:Oe.AUDIO,vide:Oe.VIDEO}[h],A=oe(r,["mdia","minf","stbl","stsd"])[0],v=nc(A);y?(e[l]={timescale:c,type:y,stsd:v},e[y]=Se({timescale:c,id:l},v)):e[l]={timescale:c,type:h,stsd:v}}}}}return oe(a,["moov","mvex","trex"]).forEach(i=>{const r=ee(i,4),s=e[r];s&&(s.default={duration:ee(i,12),flags:ee(i,20)})}),e}function nc(a){const e=a.subarray(8),t=e.subarray(8+78),n=_e(e.subarray(4,8));let i=n,r;const s=n==="enca"||n==="encv";if(s){const d=oe(e,[n])[0].subarray(n==="enca"?28:78);oe(d,["sinf"]).forEach(u=>{const h=oe(u,["schm"])[0];if(h){const y=_e(h.subarray(4,8));if(y==="cbcs"||y==="cenc"){const A=oe(u,["frma"])[0];A&&(i=_e(A))}}})}const o=i;switch(i){case"avc1":case"avc2":case"avc3":case"avc4":{const l=oe(t,["avcC"])[0];i+="."+ei(l[1])+ei(l[2])+ei(l[3]),r=Jn(o==="avc1"?"dva1":"dvav",t);break}case"mp4a":{const l=oe(e,[n])[0],d=oe(l.subarray(28),["esds"])[0];if(d&&d.length>7){let c=4;if(d[c++]!==3)break;c=Wi(d,c),c+=2;const u=d[c++];if(u&128&&(c+=2),u&64&&(c+=d[c++]),d[c++]!==4)break;c=Wi(d,c);const h=d[c++];if(h===64)i+="."+ei(h);else break;if(c+=12,d[c++]!==5)break;c=Wi(d,c);const y=d[c++];let A=(y&248)>>3;A===31&&(A+=1+((y&7)<<3)+((d[c]&224)>>5)),i+="."+A}break}case"hvc1":case"hev1":{const l=oe(t,["hvcC"]);if(l){const d=l[0],c=d[1],u=["","A","B","C"][c>>6],h=c&31,y=ee(d,2),A=(c&32)>>5?"H":"L",v=d[12],S=d.subarray(6,12);i+="."+u+h,i+="."+y.toString(16).toUpperCase(),i+="."+A+v;let k="";for(let I=S.length;I--;){const R=S[I];(R||k)&&(k="."+R.toString(16).toUpperCase()+k)}i+=k}r=Jn(o=="hev1"?"dvhe":"dvh1",t);break}case"dvh1":case"dvhe":case"dvav":case"dva1":case"dav1":{i=Jn(i,t)||i;break}case"vp09":{const l=oe(t,["vpcC"])[0],d=l[4],c=l[5],u=l[6]>>4&15;i+="."+nt(d)+"."+nt(c)+"."+nt(u);break}case"av01":{const l=oe(t,["av1C"])[0],d=l[1]>>>5,c=l[1]&31,u=l[2]>>>7?"H":"M",h=(l[2]&64)>>6,y=(l[2]&32)>>5,A=d===2&&h?y?12:10:h?10:8,v=(l[2]&16)>>4,S=(l[2]&8)>>3,k=(l[2]&4)>>2,I=l[2]&3,R=1,_=1,L=1,F=0;i+="."+d+"."+nt(c)+u+"."+nt(A)+"."+v+"."+S+k+I+"."+nt(R)+"."+nt(_)+"."+nt(L)+"."+F,r=Jn("dav1",t);break}}return{codec:i,encrypted:s,supplemental:r}}function Jn(a,e){const t=oe(e,["dvvC"]),n=t.length?t[0]:oe(e,["dvcC"])[0];if(n){const i=n[2]>>1&127,r=n[2]<<5&32|n[3]>>3&31;return a+"."+nt(i)+"."+nt(r)}}function Wi(a,e){const t=e+5;for(;a[e++]&128&&e<t;);return e}function ei(a){return("0"+a.toString(16).toUpperCase()).slice(-2)}function nt(a){return(a<10?"0":"")+a}function ic(a,e){if(!a||!e)return a;const t=e.keyId;return t&&e.isCommonEncryption&&oe(a,["moov","trak"]).forEach(i=>{const s=oe(i,["mdia","minf","stbl","stsd"])[0].subarray(8);let o=oe(s,["enca"]);const l=o.length>0;l||(o=oe(s,["encv"])),o.forEach(d=>{const c=l?d.subarray(28):d.subarray(78);oe(c,["sinf"]).forEach(h=>{const y=Ca(h);if(y){const A=y.subarray(8,24);A.some(v=>v!==0)||(be.log(`[eme] Patching keyId in 'enc${l?"a":"v"}>sinf>>tenc' box: ${it.hexDump(A)} -> ${it.hexDump(t)}`),y.set(t,8))}})})}),a}function Ca(a){const e=oe(a,["schm"])[0];if(e){const t=_e(e.subarray(4,8));if(t==="cbcs"||t==="cenc")return oe(a,["schi","tenc"])[0]}return null}function rc(a,e){return oe(e,["moof","traf"]).reduce((t,n)=>{const i=oe(n,["tfdt"])[0],r=i[0],s=oe(n,["tfhd"]).reduce((o,l)=>{const d=ee(l,4),c=a[d];if(c){let u=ee(i,4);if(r===1){if(u===yi)return be.warn("[mp4-demuxer]: Ignoring assumed invalid signed 64-bit track fragment decode time"),o;u*=yi+1,u+=ee(i,8)}const h=c.timescale||9e4,y=u/h;if(te(y)&&(o===null||y<o))return y}return o},null);return s!==null&&te(s)&&(t===null||s<t)?s:t},null)}function sc(a,e){let t=0,n=0,i=0;const r=oe(a,["moof","traf"]);for(let s=0;s<r.length;s++){const o=r[s],l=oe(o,["tfhd"])[0],d=ee(l,4),c=e[d];if(!c)continue;const u=c.default,h=ee(l,0)|(u==null?void 0:u.flags);let y=u==null?void 0:u.duration;h&8&&(h&2?y=ee(l,12):y=ee(l,8));const A=c.timescale||9e4,v=oe(o,["trun"]);for(let S=0;S<v.length;S++){if(t=ac(v[S]),!t&&y){const k=ee(v[S],4);t=y*k}c.type===Oe.VIDEO?n+=t/A:c.type===Oe.AUDIO&&(i+=t/A)}}if(n===0&&i===0){let s=1/0,o=0,l=0;const d=oe(a,["sidx"]);for(let c=0;c<d.length;c++){const u=tc(d[c]);if(u!=null&&u.references){s=Math.min(s,u.earliestPresentationTime/u.timescale);const h=u.references.reduce((y,A)=>y+A.info.duration||0,0);o=Math.max(o,h+u.earliestPresentationTime/u.timescale),l=o-s}}if(l&&te(l))return l}return n||i}function ac(a){const e=ee(a,0);let t=8;e&1&&(t+=4),e&4&&(t+=4);let n=0;const i=ee(a,4);for(let r=0;r<i;r++){if(e&256){const s=ee(a,t);n+=s,t+=4}e&512&&(t+=4),e&1024&&(t+=4),e&2048&&(t+=4)}return n}function oc(a,e,t){oe(e,["moof","traf"]).forEach(n=>{oe(n,["tfhd"]).forEach(i=>{const r=ee(i,4),s=a[r];if(!s)return;const o=s.timescale||9e4;oe(n,["tfdt"]).forEach(l=>{const d=l[0],c=t*o;if(c){let u=ee(l,4);if(d===0)u-=c,u=Math.max(u,0),Vi(l,4,u);else{u*=Math.pow(2,32),u+=ee(l,8),u-=c,u=Math.max(u,0);const h=Math.floor(u/(yi+1)),y=Math.floor(u%(yi+1));Vi(l,4,h),Vi(l,8,y)}}})})})}function lc(a){const e={valid:null,remainder:null},t=oe(a,["moof"]);if(t.length<2)return e.remainder=a,e;const n=t[t.length-1];return e.valid=a.slice(0,n.byteOffset-8),e.remainder=a.slice(n.byteOffset-8),e}function Ve(a,e){const t=new Uint8Array(a.length+e.length);return t.set(a),t.set(e,a.length),t}function ws(a,e){const t=[],n=e.samples,i=e.timescale,r=e.id;let s=!1;return oe(n,["moof"]).map(l=>{const d=l.byteOffset-8;oe(l,["traf"]).map(u=>{const h=oe(u,["tfdt"]).map(y=>{const A=y[0];let v=ee(y,4);return A===1&&(v*=Math.pow(2,32),v+=ee(y,8)),v/i})[0];return h!==void 0&&(a=h),oe(u,["tfhd"]).map(y=>{const A=ee(y,4),v=ee(y,0)&16777215,S=(v&1)!==0,k=(v&2)!==0,I=(v&8)!==0;let R=0;const _=(v&16)!==0;let L=0;const F=(v&32)!==0;let B=8;A===r&&(S&&(B+=8),k&&(B+=4),I&&(R=ee(y,B),B+=4),_&&(L=ee(y,B),B+=4),F&&(B+=4),e.type==="video"&&(s=Ii(e.codec)),oe(u,["trun"]).map(M=>{const q=M[0],P=ee(M,0)&16777215,K=(P&1)!==0;let Q=0;const he=(P&4)!==0,re=(P&256)!==0;let ue=0;const le=(P&512)!==0;let J=0;const me=(P&1024)!==0,U=(P&2048)!==0;let H=0;const ie=ee(M,4);let ne=8;K&&(Q=ee(M,ne),ne+=4),he&&(ne+=4);let de=Q+d;for(let fe=0;fe<ie;fe++){if(re?(ue=ee(M,ne),ne+=4):ue=R,le?(J=ee(M,ne),ne+=4):J=L,me&&(ne+=4),U&&(q===0?H=ee(M,ne):H=Sa(M,ne),ne+=4),e.type===Oe.VIDEO){let ge=0;for(;ge<J;){const pe=ee(n,de);if(de+=4,dc(s,n[de])){const ke=n.subarray(de,de+pe);wr(ke,s?2:1,a+H/i,t)}de+=pe,ge+=pe+4}}a+=ue/i}}))})})}),t}function Ii(a){if(!a)return!1;const e=a.substring(0,4);return e==="hvc1"||e==="hev1"||e==="dvh1"||e==="dvhe"}function dc(a,e){if(a){const t=e>>1&63;return t===39||t===40}else return(e&31)===6}function wr(a,e,t,n){const i=wa(a);let r=0;r+=e;let s=0,o=0,l=0;for(;r<i.length;){s=0;do{if(r>=i.length)break;l=i[r++],s+=l}while(l===255);o=0;do{if(r>=i.length)break;l=i[r++],o+=l}while(l===255);const d=i.length-r;let c=r;if(o<d)r+=o;else if(o>d){be.error(`Malformed SEI payload. ${o} is too small, only ${d} bytes left to parse.`);break}if(s===4){if(i[c++]===181){const h=Ea(i,c);if(c+=2,h===49){const y=ee(i,c);if(c+=4,y===1195456820){const A=i[c++];if(A===3){const v=i[c++],S=31&v,k=64&v,I=k?2+S*3:0,R=new Uint8Array(I);if(k){R[0]=v;for(let _=1;_<I;_++)R[_]=i[c++]}n.push({type:A,payloadType:s,pts:t,bytes:R})}}}}}else if(s===5&&o>16){const u=[];for(let A=0;A<16;A++){const v=i[c++].toString(16);u.push(v.length==1?"0"+v:v),(A===3||A===5||A===7||A===9)&&u.push("-")}const h=o-16,y=new Uint8Array(h);for(let A=0;A<h;A++)y[A]=i[c++];n.push({payloadType:s,pts:t,uuid:u.join(""),userData:qe(y),userDataBytes:y})}}}function wa(a){const e=a.byteLength,t=[];let n=1;for(;n<e-2;)a[n]===0&&a[n+1]===0&&a[n+2]===3?(t.push(n+2),n+=2):n++;if(t.length===0)return a;const i=e-t.length,r=new Uint8Array(i);let s=0;for(n=0;n<i;s++,n++)s===t[0]&&(s++,t.shift()),r[n]=a[s];return r}function cc(a){const e=a[0];let t="",n="",i=0,r=0,s=0,o=0,l=0,d=0;if(e===0){for(;_e(a.subarray(d,d+1))!=="\0";)t+=_e(a.subarray(d,d+1)),d+=1;for(t+=_e(a.subarray(d,d+1)),d+=1;_e(a.subarray(d,d+1))!=="\0";)n+=_e(a.subarray(d,d+1)),d+=1;n+=_e(a.subarray(d,d+1)),d+=1,i=ee(a,12),r=ee(a,16),o=ee(a,20),l=ee(a,24),d=28}else if(e===1){d+=4,i=ee(a,d),d+=4;const u=ee(a,d);d+=4;const h=ee(a,d);for(d+=4,s=2**32*u+h,$d(s)||(s=Number.MAX_SAFE_INTEGER,be.warn("Presentation time exceeds safe integer limit and wrapped to max safe integer in parsing emsg box")),o=ee(a,d),d+=4,l=ee(a,d),d+=4;_e(a.subarray(d,d+1))!=="\0";)t+=_e(a.subarray(d,d+1)),d+=1;for(t+=_e(a.subarray(d,d+1)),d+=1;_e(a.subarray(d,d+1))!=="\0";)n+=_e(a.subarray(d,d+1)),d+=1;n+=_e(a.subarray(d,d+1)),d+=1}const c=a.subarray(d,a.byteLength);return{schemeIdUri:t,value:n,timeScale:i,presentationTime:s,presentationTimeDelta:r,eventDuration:o,id:l,payload:c}}function uc(a,...e){const t=e.length;let n=8,i=t;for(;i--;)n+=e[i].byteLength;const r=new Uint8Array(n);for(r[0]=n>>24&255,r[1]=n>>16&255,r[2]=n>>8&255,r[3]=n&255,r.set(a,4),i=0,n=8;i<t;i++)r.set(e[i],n),n+=e[i].byteLength;return r}function hc(a,e,t){if(a.byteLength!==16)throw new RangeError("Invalid system id");let n,i;n=0,i=new Uint8Array;let r;n>0?(r=new Uint8Array(4),e.length>0&&new DataView(r.buffer).setUint32(0,e.length,!1)):r=new Uint8Array;const s=new Uint8Array(4);return t&&t.byteLength>0&&new DataView(s.buffer).setUint32(0,t.byteLength,!1),uc([112,115,115,104],new Uint8Array([n,0,0,0]),a,r,i,s,t||new Uint8Array)}function fc(a){const e=[];if(a instanceof ArrayBuffer){const t=a.byteLength;let n=0;for(;n+32<t;){const i=new DataView(a,n),r=pc(i);e.push(r),n+=r.size}}return e}function pc(a){const e=a.getUint32(0),t=a.byteOffset,n=a.byteLength;if(n<e)return{offset:t,size:n};if(a.getUint32(4)!==1886614376)return{offset:t,size:e};const r=a.getUint32(8)>>>24;if(r!==0&&r!==1)return{offset:t,size:e};const s=a.buffer,o=it.hexDump(new Uint8Array(s,t+12,16)),l=a.getUint32(28);let d=null,c=null;if(r===0){if(e-32<l||l<22)return{offset:t,size:e};c=new Uint8Array(s,t+32,l)}else if(r===1){if(!l||n<t+32+l*16+16)return{offset:t,size:e};d=[];for(let u=0;u<l;u++)d.push(new Uint8Array(s,t+32+u*16,16))}return{version:r,systemId:o,kids:d,data:c,offset:t,size:e}}const ka=()=>/\(Windows.+Firefox\//i.test(navigator.userAgent),pr={audio:{a3ds:1,"ac-3":.95,"ac-4":1,alac:.9,alaw:1,dra1:1,"dts+":1,"dts-":1,dtsc:1,dtse:1,dtsh:1,"ec-3":.9,enca:1,fLaC:.9,flac:.9,FLAC:.9,g719:1,g726:1,m4ae:1,mha1:1,mha2:1,mhm1:1,mhm2:1,mlpa:1,mp4a:1,"raw ":1,Opus:1,opus:1,samr:1,sawb:1,sawp:1,sevc:1,sqcp:1,ssmv:1,twos:1,ulaw:1},video:{avc1:1,avc2:1,avc3:1,avc4:1,avcp:1,av01:.8,dav1:.8,drac:1,dva1:1,dvav:1,dvh1:.7,dvhe:.7,encv:1,hev1:.75,hvc1:.75,mjp2:1,mp4v:1,mvc1:1,mvc2:1,mvc3:1,mvc4:1,resv:1,rv60:1,s263:1,svc1:1,svc2:1,"vc-1":1,vp08:1,vp09:.9},text:{stpp:1,wvtt:1}};function mc(a,e){const t=pr[e];return!!t&&!!t[a.slice(0,4)]}function gc(a,e,t=!0){return!a.split(",").some(n=>!Ia(n,e,t))}function Ia(a,e,t=!0){var n;const i=Mn(t);return(n=i==null?void 0:i.isTypeSupported(mr(a,e)))!=null?n:!1}function mr(a,e){return`${e}/mp4;codecs=${a}`}function ks(a){const e=ka();return a.split(",").reduce((t,n)=>{const r=e&&Ii(n)?9:pr.video[n];return r?(r*2+t)/(t?3:2):(pr.audio[n]+t)/(t?2:1)},0)}const ji={};function yc(a,e=!0){if(ji[a])return ji[a];const t={flac:["flac","fLaC","FLAC"],opus:["opus","Opus"],"mp4a.40.34":["mp3"]}[a];for(let i=0;i<t.length;i++){var n;if(Ia(t[i],"audio",e))return ji[a]=t[i],t[i];if(t[i]==="mp3"&&(n=Mn(e))!=null&&n.isTypeSupported("audio/mpeg"))return""}return a}const Ac=/flac|opus|mp4a\.40\.34/i;function gr(a,e=!0){return a.replace(Ac,t=>yc(t.toLowerCase(),e))}function bc(a,e){const t=[];if(a){const n=a.split(",");for(let i=0;i<n.length;i++)mc(n[i],"video")||t.push(n[i])}return e&&t.push(e),t.join(",")}function Qi(a,e){if(a&&(a.length>4||["ac-3","ec-3","alac","fLaC","Opus"].indexOf(a)!==-1))return a;if(e){const t=e.split(",");if(t.length>1){if(a){for(let n=t.length;n--;)if(t[n].substring(0,4)===a.substring(0,4))return t[n]}return t[0]}}return e||a}function vc(a){if(a.startsWith("av01.")){const e=a.split("."),t=["0","111","01","01","01","0"];for(let n=e.length;n>4&&n<10;n++)e[n]=t[n-4];return e.join(".")}return a}function Is(a){const e=Mn(a)||{isTypeSupported:()=>!1};return{mpeg:e.isTypeSupported("audio/mpeg"),mp3:e.isTypeSupported('audio/mp4; codecs="mp3"'),ac3:e.isTypeSupported('audio/mp4; codecs="ac-3"')}}function La(a){return a.replace(/^.+codecs=["']?([^"']+).*$/,"$1")}const Ra={supported:!0,configurations:[],decodingInfoResults:[{supported:!0,powerEfficient:!0,smooth:!0}]};function xc(a,e){return{supported:!1,configurations:e,decodingInfoResults:[{supported:!1,smooth:!1,powerEfficient:!1}],error:a}}const Ls={};function Ec(a,e,t,n,i,r){const s=a.audioCodec?a.audioGroups:null,o=r==null?void 0:r.audioCodec,l=r==null?void 0:r.channels,d=l?parseInt(l):o?1/0:2;let c=null;if(s!=null&&s.length)try{s.length===1&&s[0]?c=e.groups[s[0]].channels:c=s.reduce((u,h)=>{if(h){const y=e.groups[h];if(!y)throw new Error(`Audio track group ${h} not found`);Object.keys(y.channels).forEach(A=>{u[A]=(u[A]||0)+y.channels[A]})}return u},{2:0})}catch{return!0}return a.videoCodec!==void 0&&(a.width>1920&&a.height>1088||a.height>1920&&a.width>1088||a.frameRate>Math.max(n,30)||a.videoRange!=="SDR"&&a.videoRange!==t||a.bitrate>Math.max(i,8e6))||!!c&&te(d)&&Object.keys(c).some(u=>parseInt(u)>d)}function Sc(a,e,t){const n=a.videoCodec,i=a.audioCodec;if(!n&&!i||!t)return Promise.resolve(Ra);const r=[];if(n){const s={width:a.width,height:a.height,bitrate:Math.ceil(Math.max(a.bitrate*.9,a.averageBitrate)),framerate:a.frameRate||30},o=a.videoRange;o!=="SDR"&&(s.transferFunction=o.toLowerCase());const l=n.split(","),d=navigator.userAgent;if(l.some(c=>Ii(c))&&ka())return Promise.resolve(xc(new Error(`Overriding Windows Firefox HEVC MediaCapabilities result based on user-agent sting: (${d})`),r));r.push.apply(r,l.map(c=>({type:"media-source",video:Se(Se({},s),{},{contentType:mr(vc(c),"video")})})))}return i&&a.audioGroups&&a.audioGroups.forEach(s=>{var o;s&&((o=e.groups[s])==null||o.tracks.forEach(l=>{if(l.groupId===s){const d=l.channels||"",c=parseFloat(d);te(c)&&c>2&&r.push.apply(r,i.split(",").map(u=>({type:"media-source",audio:{contentType:mr(u,"audio"),channels:""+c}})))}}))}),Promise.all(r.map(s=>{const o=Tc(s);return Ls[o]||(Ls[o]=t.decodingInfo(s))})).then(s=>({supported:!s.some(o=>!o.supported),configurations:r,decodingInfoResults:s})).catch(s=>({supported:!1,configurations:r,decodingInfoResults:[],error:s}))}function Tc(a){const{audio:e,video:t}=a,n=t||e;if(n){const i=La(n.contentType);if(t)return`r${t.height}x${t.width}f${Math.ceil(t.framerate)}${t.transferFunction||"sd"}_${i}_${Math.ceil(t.bitrate/1e5)}`;if(e)return`c${e.channels}${e.spatialRendering?"s":"n"}_${i}`}return""}const Rs=["NONE","TYPE-0","TYPE-1",null],Cc=["SDR","PQ","HLG"];var hi={No:"",Yes:"YES",v2:"v2"};function _s(a){const{canSkipUntil:e,canSkipDateRanges:t,age:n}=a,i=n<e/2;return e&&i?t?hi.v2:hi.Yes:hi.No}class Ds{constructor(e,t,n){this.msn=void 0,this.part=void 0,this.skip=void 0,this.msn=e,this.part=t,this.skip=n}addDirectives(e){const t=new self.URL(e);return this.msn!==void 0&&t.searchParams.set("_HLS_msn",this.msn.toString()),this.part!==void 0&&t.searchParams.set("_HLS_part",this.part.toString()),this.skip&&t.searchParams.set("_HLS_skip",this.skip),t.href}}class Ai{constructor(e){if(this._attrs=void 0,this.audioCodec=void 0,this.bitrate=void 0,this.codecSet=void 0,this.url=void 0,this.frameRate=void 0,this.height=void 0,this.id=void 0,this.name=void 0,this.supplemental=void 0,this.videoCodec=void 0,this.width=void 0,this.details=void 0,this.fragmentError=0,this.loadError=0,this.loaded=void 0,this.realBitrate=0,this.supportedPromise=void 0,this.supportedResult=void 0,this._avgBitrate=0,this._audioGroups=void 0,this._subtitleGroups=void 0,this._urlId=0,this.url=[e.url],this._attrs=[e.attrs],this.bitrate=e.bitrate,e.details&&(this.details=e.details),this.id=e.id||0,this.name=e.name,this.width=e.width||0,this.height=e.height||0,this.frameRate=e.attrs.optionalFloat("FRAME-RATE",0),this._avgBitrate=e.attrs.decimalInteger("AVERAGE-BANDWIDTH"),this.audioCodec=e.audioCodec,this.videoCodec=e.videoCodec,this.codecSet=[e.videoCodec,e.audioCodec].filter(n=>!!n).map(n=>n.substring(0,4)).join(","),"supplemental"in e){var t;this.supplemental=e.supplemental;const n=(t=e.supplemental)==null?void 0:t.videoCodec;n&&n!==e.videoCodec&&(this.codecSet+=`,${n.substring(0,4)}`)}this.addGroupId("audio",e.attrs.AUDIO),this.addGroupId("text",e.attrs.SUBTITLES)}get maxBitrate(){return Math.max(this.realBitrate,this.bitrate)}get averageBitrate(){return this._avgBitrate||this.realBitrate||this.bitrate}get attrs(){return this._attrs[0]}get codecs(){return this.attrs.CODECS||""}get pathwayId(){return this.attrs["PATHWAY-ID"]||"."}get videoRange(){return this.attrs["VIDEO-RANGE"]||"SDR"}get score(){return this.attrs.optionalFloat("SCORE",0)}get uri(){return this.url[0]||""}hasAudioGroup(e){return Bs(this._audioGroups,e)}hasSubtitleGroup(e){return Bs(this._subtitleGroups,e)}get audioGroups(){return this._audioGroups}get subtitleGroups(){return this._subtitleGroups}addGroupId(e,t){if(t){if(e==="audio"){let n=this._audioGroups;n||(n=this._audioGroups=[]),n.indexOf(t)===-1&&n.push(t)}else if(e==="text"){let n=this._subtitleGroups;n||(n=this._subtitleGroups=[]),n.indexOf(t)===-1&&n.push(t)}}}get urlId(){return 0}set urlId(e){}get audioGroupIds(){return this.audioGroups?[this.audioGroupId]:void 0}get textGroupIds(){return this.subtitleGroups?[this.textGroupId]:void 0}get audioGroupId(){var e;return(e=this.audioGroups)==null?void 0:e[0]}get textGroupId(){var e;return(e=this.subtitleGroups)==null?void 0:e[0]}addFallback(){}}function Bs(a,e){return!e||!a?!1:a.indexOf(e)!==-1}function wc(){if(typeof matchMedia=="function"){const a=matchMedia("(dynamic-range: high)"),e=matchMedia("bad query");if(a.media!==e.media)return a.matches===!0}return!1}function kc(a,e){let t=!1,n=[];if(a&&(t=a!=="SDR",n=[a]),e){n=e.allowedVideoRanges||Cc.slice(0);const i=n.join("")!=="SDR"&&!e.videoCodec;t=e.preferHDR!==void 0?e.preferHDR:i&&wc(),t||(n=["SDR"])}return{preferHDR:t,allowedVideoRanges:n}}const Ic=a=>{const e=new WeakSet;return(t,n)=>{if(a&&(n=a(t,n)),typeof n=="object"&&n!==null){if(e.has(n))return;e.add(n)}return n}},Ie=(a,e)=>JSON.stringify(a,Ic(e));function Lc(a,e,t,n,i){const r=Object.keys(a),s=n==null?void 0:n.channels,o=n==null?void 0:n.audioCodec,l=i==null?void 0:i.videoCodec,d=s&&parseInt(s)===2;let c=!1,u=!1,h=1/0,y=1/0,A=1/0,v=1/0,S=0,k=[];const{preferHDR:I,allowedVideoRanges:R}=kc(e,i);for(let M=r.length;M--;){const q=a[r[M]];c||(c=q.channels[2]>0),h=Math.min(h,q.minHeight),y=Math.min(y,q.minFramerate),A=Math.min(A,q.minBitrate),R.filter(K=>q.videoRanges[K]>0).length>0&&(u=!0)}h=te(h)?h:0,y=te(y)?y:0;const _=Math.max(1080,h),L=Math.max(30,y);A=te(A)?A:t,t=Math.max(A,t),u||(e=void 0);const F=r.length>1;return{codecSet:r.reduce((M,q)=>{const P=a[q];if(q===M)return M;if(k=u?R.filter(K=>P.videoRanges[K]>0):[],F){if(P.minBitrate>t)return tt(q,`min bitrate of ${P.minBitrate} > current estimate of ${t}`),M;if(!P.hasDefaultAudio)return tt(q,"no renditions with default or auto-select sound found"),M;if(o&&q.indexOf(o.substring(0,4))%5!==0)return tt(q,`audio codec preference "${o}" not found`),M;if(s&&!d){if(!P.channels[s])return tt(q,`no renditions with ${s} channel sound found (channels options: ${Object.keys(P.channels)})`),M}else if((!o||d)&&c&&P.channels[2]===0)return tt(q,"no renditions with stereo sound found"),M;if(P.minHeight>_)return tt(q,`min resolution of ${P.minHeight} > maximum of ${_}`),M;if(P.minFramerate>L)return tt(q,`min framerate of ${P.minFramerate} > maximum of ${L}`),M;if(!k.some(K=>P.videoRanges[K]>0))return tt(q,`no variants with VIDEO-RANGE of ${Ie(k)} found`),M;if(l&&q.indexOf(l.substring(0,4))%5!==0)return tt(q,`video codec preference "${l}" not found`),M;if(P.maxScore<S)return tt(q,`max score of ${P.maxScore} < selected max of ${S}`),M}return M&&(ks(q)>=ks(M)||P.fragmentError>a[M].fragmentError)?M:(v=P.minIndex,S=P.maxScore,q)},void 0),videoRanges:k,preferHDR:I,minFramerate:y,minBitrate:A,minIndex:v}}function tt(a,e){be.log(`[abr] start candidates with "${a}" ignored because ${e}`)}function Rc(a){return a.reduce((e,t)=>{let n=e.groups[t.groupId];n||(n=e.groups[t.groupId]={tracks:[],channels:{2:0},hasDefault:!1,hasAutoSelect:!1}),n.tracks.push(t);const i=t.channels||"2";return n.channels[i]=(n.channels[i]||0)+1,n.hasDefault=n.hasDefault||t.default,n.hasAutoSelect=n.hasAutoSelect||t.autoselect,n.hasDefault&&(e.hasDefaultAudio=!0),n.hasAutoSelect&&(e.hasAutoSelectAudio=!0),e},{hasDefaultAudio:!1,hasAutoSelectAudio:!1,groups:{}})}function _c(a,e,t,n){return a.slice(t,n+1).reduce((i,r,s)=>{if(!r.codecSet)return i;const o=r.audioGroups;let l=i[r.codecSet];l||(i[r.codecSet]=l={minBitrate:1/0,minHeight:1/0,minFramerate:1/0,minIndex:s,maxScore:0,videoRanges:{SDR:0},channels:{2:0},hasDefaultAudio:!o,fragmentError:0}),l.minBitrate=Math.min(l.minBitrate,r.bitrate);const d=Math.min(r.height,r.width);return l.minHeight=Math.min(l.minHeight,d),l.minFramerate=Math.min(l.minFramerate,r.frameRate),l.minIndex=Math.min(l.minIndex,s),l.maxScore=Math.max(l.maxScore,r.score),l.fragmentError+=r.fragmentError,l.videoRanges[r.videoRange]=(l.videoRanges[r.videoRange]||0)+1,o&&o.forEach(c=>{if(!c)return;const u=e.groups[c];u&&(l.hasDefaultAudio=l.hasDefaultAudio||e.hasDefaultAudio?u.hasDefault:u.hasAutoSelect||!e.hasDefaultAudio&&!e.hasAutoSelectAudio,Object.keys(u.channels).forEach(h=>{l.channels[h]=(l.channels[h]||0)+u.channels[h]}))}),i},{})}function Ps(a){if(!a)return a;const{lang:e,assocLang:t,characteristics:n,channels:i,audioCodec:r}=a;return{lang:e,assocLang:t,characteristics:n,channels:i,audioCodec:r}}function st(a,e,t){if("attrs"in a){const n=e.indexOf(a);if(n!==-1)return n}for(let n=0;n<e.length;n++){const i=e[n];if(Dt(a,i,t))return n}return-1}function Dt(a,e,t){const{groupId:n,name:i,lang:r,assocLang:s,default:o}=a,l=a.forced;return(n===void 0||e.groupId===n)&&(i===void 0||e.name===i)&&(r===void 0||Dc(r,e.lang))&&(r===void 0||e.assocLang===s)&&(o===void 0||e.default===o)&&(l===void 0||e.forced===l)&&(!("characteristics"in a)||Bc(a.characteristics||"",e.characteristics))&&(t===void 0||t(a,e))}function Dc(a,e="--"){return a.length===e.length?a===e:a.startsWith(e)||e.startsWith(a)}function Bc(a,e=""){const t=a.split(","),n=e.split(",");return t.length===n.length&&!t.some(i=>n.indexOf(i)===-1)}function _t(a,e){const{audioCodec:t,channels:n}=a;return(t===void 0||(e.audioCodec||"").substring(0,4)===t.substring(0,4))&&(n===void 0||n===(e.channels||"2"))}function Pc(a,e,t,n,i){const r=e[n],o=e.reduce((h,y,A)=>{const v=y.uri;return(h[v]||(h[v]=[])).push(A),h},{})[r.uri];o.length>1&&(n=Math.max.apply(Math,o));const l=r.videoRange,d=r.frameRate,c=r.codecSet.substring(0,4),u=Os(e,n,h=>{if(h.videoRange!==l||h.frameRate!==d||h.codecSet.substring(0,4)!==c)return!1;const y=h.audioGroups,A=t.filter(v=>!y||y.indexOf(v.groupId)!==-1);return st(a,A,i)>-1});return u>-1?u:Os(e,n,h=>{const y=h.audioGroups,A=t.filter(v=>!y||y.indexOf(v.groupId)!==-1);return st(a,A,i)>-1})}function Os(a,e,t){for(let n=e;n>-1;n--)if(t(a[n]))return n;for(let n=e+1;n<a.length;n++)if(t(a[n]))return n;return-1}function _a(a,e){var t;return!!a&&a!==((t=e.loadLevelObj)==null?void 0:t.uri)}class Oc extends pt{constructor(e){super("abr",e.logger),this.hls=void 0,this.lastLevelLoadSec=0,this.lastLoadedFragLevel=-1,this.firstSelection=-1,this._nextAutoLevel=-1,this.nextAutoLevelKey="",this.audioTracksByGroup=null,this.codecTiers=null,this.timer=-1,this.fragCurrent=null,this.partCurrent=null,this.bitrateTestDelay=0,this.rebufferNotice=-1,this.bwEstimator=void 0,this._abandonRulesCheck=t=>{var n;const{fragCurrent:i,partCurrent:r,hls:s}=this,{autoLevelEnabled:o,media:l}=s;if(!i||!l)return;const d=performance.now(),c=r?r.stats:i.stats,u=r?r.duration:i.duration,h=d-c.loading.start,y=s.minAutoLevel,A=i.level,v=this._nextAutoLevel;if(c.aborted||c.loaded&&c.loaded===c.total||A<=y){this.clearTimer(),this._nextAutoLevel=-1;return}if(!o)return;const S=v>-1&&v!==A,k=!!t||S;if(!k&&(l.paused||!l.playbackRate||!l.readyState))return;const I=s.mainForwardBufferInfo;if(!k&&I===null)return;const R=this.bwEstimator.getEstimateTTFB(),_=Math.abs(l.playbackRate);if(h<=Math.max(R,1e3*(u/(_*2))))return;const L=I?I.len/_:0,F=c.loading.first?c.loading.first-c.loading.start:-1,B=c.loaded&&F>-1,M=this.getBwEstimate(),q=s.levels,P=q[A],K=Math.max(c.loaded,Math.round(u*(i.bitrate||P.averageBitrate)/8));let Q=B?h-F:h;Q<1&&B&&(Q=Math.min(h,c.loaded*8/M));const he=B?c.loaded*1e3/Q:0,re=R/1e3,ue=he?(K-c.loaded)/he:K*8/M+re;if(ue<=L)return;const le=he?he*8:M,J=((n=(t==null?void 0:t.details)||this.hls.latestLevelDetails)==null?void 0:n.live)===!0,me=this.hls.config.abrBandWidthUpFactor;let U=Number.POSITIVE_INFINITY,H;for(H=A-1;H>y;H--){const fe=q[H].maxBitrate,ge=!q[H].details||J;if(U=this.getTimeToLoadFrag(re,le,u*fe,ge),U<Math.min(L,u+re))break}if(U>=ue||U>u*10)return;B?this.bwEstimator.sample(h-Math.min(R,F),c.loaded):this.bwEstimator.sampleTTFB(h);const ie=q[H].maxBitrate;this.getBwEstimate()*me>ie&&this.resetEstimator(ie);const ne=this.findBestLevel(ie,y,H,0,L,1,1);ne>-1&&(H=ne),this.warn(`Fragment ${i.sn}${r?" part "+r.index:""} of level ${A} is loading too slowly;
      Fragment duration: ${i.duration.toFixed(3)}
      Time to underbuffer: ${L.toFixed(3)} s
      Estimated load time for current fragment: ${ue.toFixed(3)} s
      Estimated load time for down switch fragment: ${U.toFixed(3)} s
      TTFB estimate: ${F|0} ms
      Current BW estimate: ${te(M)?M|0:"Unknown"} bps
      New BW estimate: ${this.getBwEstimate()|0} bps
      Switching to level ${H} @ ${ie|0} bps`),s.nextLoadLevel=s.nextAutoLevel=H,this.clearTimer();const de=()=>{if(this.clearTimer(),this.fragCurrent===i&&this.hls.loadLevel===H&&H>0){const fe=this.getStarvationDelay();if(this.warn(`Aborting inflight request ${H>0?"and switching down":""}
      Fragment duration: ${i.duration.toFixed(3)} s
      Time to underbuffer: ${fe.toFixed(3)} s`),i.abortRequests(),this.fragCurrent=this.partCurrent=null,H>y){let ge=this.findBestLevel(this.hls.levels[y].bitrate,y,H,0,fe,1,1);ge===-1&&(ge=y),this.hls.nextLoadLevel=this.hls.nextAutoLevel=ge,this.resetEstimator(this.hls.levels[ge].bitrate)}}};S||ue>U*2?de():this.timer=self.setInterval(de,U*1e3),s.trigger(T.FRAG_LOAD_EMERGENCY_ABORTED,{frag:i,part:r,stats:c})},this.hls=e,this.bwEstimator=this.initEstimator(),this.registerListeners()}resetEstimator(e){e&&(this.log(`setting initial bwe to ${e}`),this.hls.config.abrEwmaDefaultEstimate=e),this.firstSelection=-1,this.bwEstimator=this.initEstimator()}initEstimator(){const e=this.hls.config;return new qd(e.abrEwmaSlowVoD,e.abrEwmaFastVoD,e.abrEwmaDefaultEstimate)}registerListeners(){const{hls:e}=this;e.on(T.MANIFEST_LOADING,this.onManifestLoading,this),e.on(T.FRAG_LOADING,this.onFragLoading,this),e.on(T.FRAG_LOADED,this.onFragLoaded,this),e.on(T.FRAG_BUFFERED,this.onFragBuffered,this),e.on(T.LEVEL_SWITCHING,this.onLevelSwitching,this),e.on(T.LEVEL_LOADED,this.onLevelLoaded,this),e.on(T.LEVELS_UPDATED,this.onLevelsUpdated,this),e.on(T.MAX_AUTO_LEVEL_UPDATED,this.onMaxAutoLevelUpdated,this),e.on(T.ERROR,this.onError,this)}unregisterListeners(){const{hls:e}=this;e&&(e.off(T.MANIFEST_LOADING,this.onManifestLoading,this),e.off(T.FRAG_LOADING,this.onFragLoading,this),e.off(T.FRAG_LOADED,this.onFragLoaded,this),e.off(T.FRAG_BUFFERED,this.onFragBuffered,this),e.off(T.LEVEL_SWITCHING,this.onLevelSwitching,this),e.off(T.LEVEL_LOADED,this.onLevelLoaded,this),e.off(T.LEVELS_UPDATED,this.onLevelsUpdated,this),e.off(T.MAX_AUTO_LEVEL_UPDATED,this.onMaxAutoLevelUpdated,this),e.off(T.ERROR,this.onError,this))}destroy(){this.unregisterListeners(),this.clearTimer(),this.hls=this._abandonRulesCheck=null,this.fragCurrent=this.partCurrent=null}onManifestLoading(e,t){this.lastLoadedFragLevel=-1,this.firstSelection=-1,this.lastLevelLoadSec=0,this.fragCurrent=this.partCurrent=null,this.onLevelsUpdated(),this.clearTimer()}onLevelsUpdated(){this.lastLoadedFragLevel>-1&&this.fragCurrent&&(this.lastLoadedFragLevel=this.fragCurrent.level),this._nextAutoLevel=-1,this.onMaxAutoLevelUpdated(),this.codecTiers=null,this.audioTracksByGroup=null}onMaxAutoLevelUpdated(){this.firstSelection=-1,this.nextAutoLevelKey=""}onFragLoading(e,t){const n=t.frag;if(!this.ignoreFragment(n)){if(!n.bitrateTest){var i;this.fragCurrent=n,this.partCurrent=(i=t.part)!=null?i:null}this.clearTimer(),this.timer=self.setInterval(this._abandonRulesCheck,100)}}onLevelSwitching(e,t){this.clearTimer()}onError(e,t){if(!t.fatal)switch(t.details){case G.BUFFER_ADD_CODEC_ERROR:case G.BUFFER_APPEND_ERROR:this.lastLoadedFragLevel=-1,this.firstSelection=-1;break;case G.FRAG_LOAD_TIMEOUT:{const n=t.frag,{fragCurrent:i,partCurrent:r}=this;if(n&&i&&n.sn===i.sn&&n.level===i.level){const s=performance.now(),o=r?r.stats:n.stats,l=s-o.loading.start,d=o.loading.first?o.loading.first-o.loading.start:-1;if(o.loaded&&d>-1){const u=this.bwEstimator.getEstimateTTFB();this.bwEstimator.sample(l-Math.min(u,d),o.loaded)}else this.bwEstimator.sampleTTFB(l)}break}}}getTimeToLoadFrag(e,t,n,i){const r=e+n/t,s=i?e+this.lastLevelLoadSec:0;return r+s}onLevelLoaded(e,t){const n=this.hls.config,{loading:i}=t.stats,r=i.end-i.first;te(r)&&(this.lastLevelLoadSec=r/1e3),t.details.live?this.bwEstimator.update(n.abrEwmaSlowLive,n.abrEwmaFastLive):this.bwEstimator.update(n.abrEwmaSlowVoD,n.abrEwmaFastVoD),this.timer>-1&&this._abandonRulesCheck(t.levelInfo)}onFragLoaded(e,{frag:t,part:n}){const i=n?n.stats:t.stats;if(t.type===ce.MAIN&&this.bwEstimator.sampleTTFB(i.loading.first-i.loading.start),!this.ignoreFragment(t)){if(this.clearTimer(),t.level===this._nextAutoLevel&&(this._nextAutoLevel=-1),this.firstSelection=-1,this.hls.config.abrMaxWithRealBitrate){const r=n?n.duration:t.duration,s=this.hls.levels[t.level],o=(s.loaded?s.loaded.bytes:0)+i.loaded,l=(s.loaded?s.loaded.duration:0)+r;s.loaded={bytes:o,duration:l},s.realBitrate=Math.round(8*o/l)}if(t.bitrateTest){const r={stats:i,frag:t,part:n,id:t.type};this.onFragBuffered(T.FRAG_BUFFERED,r),t.bitrateTest=!1}else this.lastLoadedFragLevel=t.level}}onFragBuffered(e,t){const{frag:n,part:i}=t,r=i!=null&&i.stats.loaded?i.stats:n.stats;if(r.aborted||this.ignoreFragment(n))return;const s=r.parsing.end-r.loading.start-Math.min(r.loading.first-r.loading.start,this.bwEstimator.getEstimateTTFB());this.bwEstimator.sample(s,r.loaded),r.bwEstimate=this.getBwEstimate(),n.bitrateTest?this.bitrateTestDelay=s/1e3:this.bitrateTestDelay=0}ignoreFragment(e){return e.type!==ce.MAIN||e.sn==="initSegment"}clearTimer(){this.timer>-1&&(self.clearInterval(this.timer),this.timer=-1)}get firstAutoLevel(){const{maxAutoLevel:e,minAutoLevel:t}=this.hls,n=this.getBwEstimate(),i=this.hls.config.maxStarvationDelay,r=this.findBestLevel(n,t,e,0,i,1,1);if(r>-1)return r;const s=this.hls.firstLevel,o=Math.min(Math.max(s,t),e);return this.warn(`Could not find best starting auto level. Defaulting to first in playlist ${s} clamped to ${o}`),o}get forcedAutoLevel(){return this.nextAutoLevelKey?-1:this._nextAutoLevel}get nextAutoLevel(){const e=this.forcedAutoLevel,n=this.bwEstimator.canEstimate(),i=this.lastLoadedFragLevel>-1;if(e!==-1&&(!n||!i||this.nextAutoLevelKey===this.getAutoLevelKey()))return e;const r=n&&i?this.getNextABRAutoLevel():this.firstAutoLevel;if(e!==-1){const s=this.hls.levels;if(s.length>Math.max(e,r)&&s[e].loadError<=s[r].loadError)return e}return this._nextAutoLevel=r,this.nextAutoLevelKey=this.getAutoLevelKey(),r}getAutoLevelKey(){return`${this.getBwEstimate()}_${this.getStarvationDelay().toFixed(2)}`}getNextABRAutoLevel(){const{fragCurrent:e,partCurrent:t,hls:n}=this;if(n.levels.length<=1)return n.loadLevel;const{maxAutoLevel:i,config:r,minAutoLevel:s}=n,o=t?t.duration:e?e.duration:0,l=this.getBwEstimate(),d=this.getStarvationDelay();let c=r.abrBandWidthFactor,u=r.abrBandWidthUpFactor;if(d){const S=this.findBestLevel(l,s,i,d,0,c,u);if(S>=0)return this.rebufferNotice=-1,S}let h=o?Math.min(o,r.maxStarvationDelay):r.maxStarvationDelay;if(!d){const S=this.bitrateTestDelay;S&&(h=(o?Math.min(o,r.maxLoadingDelay):r.maxLoadingDelay)-S,this.info(`bitrate test took ${Math.round(1e3*S)}ms, set first fragment max fetchDuration to ${Math.round(1e3*h)} ms`),c=u=1)}const y=this.findBestLevel(l,s,i,d,h,c,u);if(this.rebufferNotice!==y&&(this.rebufferNotice=y,this.info(`${d?"rebuffering expected":"buffer is empty"}, optimal quality level ${y}`)),y>-1)return y;const A=n.levels[s],v=n.loadLevelObj;return v&&(A==null?void 0:A.bitrate)<v.bitrate?s:n.loadLevel}getStarvationDelay(){const e=this.hls,t=e.media;if(!t)return 1/0;const n=t&&t.playbackRate!==0?Math.abs(t.playbackRate):1,i=e.mainForwardBufferInfo;return(i?i.len:0)/n}getBwEstimate(){return this.bwEstimator.canEstimate()?this.bwEstimator.getEstimate():this.hls.config.abrEwmaDefaultEstimate}findBestLevel(e,t,n,i,r,s,o){var l;const d=i+r,c=this.lastLoadedFragLevel,u=c===-1?this.hls.firstLevel:c,{fragCurrent:h,partCurrent:y}=this,{levels:A,allAudioTracks:v,loadLevel:S,config:k}=this.hls;if(A.length===1)return 0;const I=A[u],R=!!((l=this.hls.latestLevelDetails)!=null&&l.live),_=S===-1||c===-1;let L,F="SDR",B=(I==null?void 0:I.frameRate)||0;const{audioPreference:M,videoPreference:q}=k,P=this.audioTracksByGroup||(this.audioTracksByGroup=Rc(v));let K=-1;if(_){if(this.firstSelection!==-1)return this.firstSelection;const le=this.codecTiers||(this.codecTiers=_c(A,P,t,n)),J=Lc(le,F,e,M,q),{codecSet:me,videoRanges:U,minFramerate:H,minBitrate:ie,minIndex:ne,preferHDR:de}=J;K=ne,L=me,F=de?U[U.length-1]:U[0],B=H,e=Math.max(e,ie),this.log(`picked start tier ${Ie(J)}`)}else L=I==null?void 0:I.codecSet,F=I==null?void 0:I.videoRange;const Q=y?y.duration:h?h.duration:0,he=this.bwEstimator.getEstimateTTFB()/1e3,re=[];for(let le=n;le>=t;le--){var ue;const J=A[le],me=le>u;if(!J)continue;if(k.useMediaCapabilities&&!J.supportedResult&&!J.supportedPromise){const ge=navigator.mediaCapabilities;typeof(ge==null?void 0:ge.decodingInfo)=="function"&&(Ec(J,P,F,B,e,M)||Ii(J.videoCodec))?(J.supportedPromise=Sc(J,P,ge),J.supportedPromise.then(pe=>{if(!this.hls)return;J.supportedResult=pe;const ke=this.hls.levels,Ce=ke.indexOf(J);pe.error?this.warn(`MediaCapabilities decodingInfo error: "${pe.error}" for level ${Ce} ${Ie(pe)}`):pe.supported||(this.warn(`Unsupported MediaCapabilities decodingInfo result for level ${Ce} ${Ie(pe)}`),Ce>-1&&ke.length>1&&(this.log(`Removing unsupported level ${Ce}`),this.hls.removeLevel(Ce),this.hls.loadLevel===-1&&(this.hls.nextLoadLevel=0)))})):J.supportedResult=Ra}if((L&&J.codecSet!==L||F&&J.videoRange!==F||me&&B>J.frameRate||!me&&B>0&&B<J.frameRate||J.supportedResult&&!((ue=J.supportedResult.decodingInfoResults)!=null&&ue[0].smooth))&&(!_||le!==K)){re.push(le);continue}const U=J.details,H=(y?U==null?void 0:U.partTarget:U==null?void 0:U.averagetargetduration)||Q;let ie;me?ie=o*e:ie=s*e;const ne=Q&&i>=Q*2&&r===0?J.averageBitrate:J.maxBitrate,de=this.getTimeToLoadFrag(he,ie,ne*H,U===void 0);if(ie>=ne&&(le===c||J.loadError===0&&J.fragmentError===0)&&(de<=he||!te(de)||R&&!this.bitrateTestDelay||de<d)){const ge=this.forcedAutoLevel;return le!==S&&(ge===-1||ge!==S)&&(re.length&&this.trace(`Skipped level(s) ${re.join(",")} of ${n} max with CODECS and VIDEO-RANGE:"${A[re[0]].codecs}" ${A[re[0]].videoRange}; not compatible with "${L}" ${F}`),this.info(`switch candidate:${u}->${le} adjustedbw(${Math.round(ie)})-bitrate=${Math.round(ie-ne)} ttfb:${he.toFixed(1)} avgDuration:${H.toFixed(1)} maxFetchDuration:${d.toFixed(1)} fetchDuration:${de.toFixed(1)} firstSelection:${_} codecSet:${J.codecSet} videoRange:${J.videoRange} hls.loadLevel:${S}`)),_&&(this.firstSelection=le),le}}return-1}set nextAutoLevel(e){const t=this.deriveNextAutoLevel(e);this._nextAutoLevel!==t&&(this.nextAutoLevelKey="",this._nextAutoLevel=t)}deriveNextAutoLevel(e){const{maxAutoLevel:t,minAutoLevel:n}=this.hls;return Math.min(Math.max(e,n),t)}}const kr={search:function(a,e){let t=0,n=a.length-1,i=null,r=null;for(;t<=n;){i=(t+n)/2|0,r=a[i];const s=e(r);if(s>0)t=i+1;else if(s<0)n=i-1;else return r}return null}};function Fc(a,e,t){if(e===null||!Array.isArray(a)||!a.length||!te(e))return null;const n=a[0].programDateTime;if(e<(n||0))return null;const i=a[a.length-1].endProgramDateTime;if(e>=(i||0))return null;t=t||0;for(let r=0;r<a.length;++r){const s=a[r];if(Nc(e,t,s))return s}return null}function jt(a,e,t=0,n=0,i=.005){let r=null;if(a){r=e[1+a.sn-e[0].sn]||null;const o=a.endDTS-t;o>0&&o<15e-7&&(t+=15e-7),r&&a.level!==r.level&&r.end<=a.end&&(r=e[2+a.sn-e[0].sn]||null)}else t===0&&e[0].start===0&&(r=e[0]);if(r&&((!a||a.level===r.level)&&Fs(t,n,r)===0||Mc(r,a,Math.min(i,n))))return r;const s=kr.search(e,Fs.bind(null,t,n));return s&&(s!==a||!r)?s:r}function Mc(a,e,t){if(e&&e.start===0&&e.level<a.level&&(e.endPTS||0)>0){const n=e.tagList.reduce((i,r)=>(r[0]==="INF"&&(i+=parseFloat(r[1])),i),t);return a.start<=n}return!1}function Fs(a=0,e=0,t){if(t.start<=a&&t.start+t.duration>a)return 0;const n=Math.min(e,t.duration+(t.deltaPTS?t.deltaPTS:0));return t.start+t.duration-n<=a?1:t.start-n>a&&t.start?-1:0}function Nc(a,e,t){const n=Math.min(e,t.duration+(t.deltaPTS?t.deltaPTS:0))*1e3;return(t.endProgramDateTime||0)-n>a}function Da(a,e){return kr.search(a,t=>t.cc<e?1:t.cc>e?-1:0)}function Uc(a,e,t){if(a&&a.startCC<=e&&a.endCC>=e){const n=t.start,i=t.end;let r=a.fragments;if(!t.relurl){const{fragmentHint:s}=a;s&&(r=r.concat(s))}return kr.search(r,s=>s.cc<e||s.end<=n?1:s.cc>e||s.start>=i?-1:0)}return null}function bi(a){switch(a.details){case G.FRAG_LOAD_TIMEOUT:case G.KEY_LOAD_TIMEOUT:case G.LEVEL_LOAD_TIMEOUT:case G.MANIFEST_LOAD_TIMEOUT:return!0}return!1}function Ms(a,e){const t=bi(e);return a.default[`${t?"timeout":"error"}Retry`]}function Ir(a,e){const t=a.backoff==="linear"?1:Math.pow(2,e);return Math.min(t*a.retryDelayMs,a.maxRetryDelayMs)}function Ns(a){return Se(Se({},a),{errorRetry:null,timeoutRetry:null})}function vi(a,e,t,n){if(!a)return!1;const i=n==null?void 0:n.code,r=e<a.maxNumRetry&&($c(i)||!!t);return a.shouldRetry?a.shouldRetry(a,e,t,n,r):r}function $c(a){return a===0&&navigator.onLine===!1||!!a&&(a<400||a>499)}var Pe={DoNothing:0,SendEndCallback:1,SendAlternateToPenaltyBox:2,RemoveAlternatePermanently:3,InsertDiscontinuity:4,RetryRequest:5},Qe={None:0,MoveAllAlternatesMatchingHost:1,MoveAllAlternatesMatchingHDCP:2,SwitchToSDR:4};class Gc extends pt{constructor(e){super("error-controller",e.logger),this.hls=void 0,this.playlistError=0,this.penalizedRenditions={},this.hls=e,this.registerListeners()}registerListeners(){const e=this.hls;e.on(T.ERROR,this.onError,this),e.on(T.MANIFEST_LOADING,this.onManifestLoading,this),e.on(T.LEVEL_UPDATED,this.onLevelUpdated,this)}unregisterListeners(){const e=this.hls;e&&(e.off(T.ERROR,this.onError,this),e.off(T.ERROR,this.onErrorOut,this),e.off(T.MANIFEST_LOADING,this.onManifestLoading,this),e.off(T.LEVEL_UPDATED,this.onLevelUpdated,this))}destroy(){this.unregisterListeners(),this.hls=null,this.penalizedRenditions={}}startLoad(e){}stopLoad(){this.playlistError=0}getVariantLevelIndex(e){return(e==null?void 0:e.type)===ce.MAIN?e.level:this.hls.loadLevel}onManifestLoading(){this.playlistError=0,this.penalizedRenditions={}}onLevelUpdated(){this.playlistError=0}onError(e,t){var n;if(t.fatal)return;const i=this.hls,r=t.context;switch(t.details){case G.FRAG_LOAD_ERROR:case G.FRAG_LOAD_TIMEOUT:case G.KEY_LOAD_ERROR:case G.KEY_LOAD_TIMEOUT:t.errorAction=this.getFragRetryOrSwitchAction(t);return;case G.FRAG_PARSING_ERROR:if((n=t.frag)!=null&&n.gap){t.errorAction=Nn();return}case G.FRAG_GAP:case G.FRAG_DECRYPT_ERROR:{t.errorAction=this.getFragRetryOrSwitchAction(t),t.errorAction.action=Pe.SendAlternateToPenaltyBox;return}case G.LEVEL_EMPTY_ERROR:case G.LEVEL_PARSING_ERROR:{var s,o;const d=t.parent===ce.MAIN?t.level:i.loadLevel;t.details===G.LEVEL_EMPTY_ERROR&&((s=t.context)!=null&&(o=s.levelDetails)!=null&&o.live)?t.errorAction=this.getPlaylistRetryOrSwitchAction(t,d):(t.levelRetry=!1,t.errorAction=this.getLevelSwitchAction(t,d))}return;case G.LEVEL_LOAD_ERROR:case G.LEVEL_LOAD_TIMEOUT:typeof(r==null?void 0:r.level)=="number"&&(t.errorAction=this.getPlaylistRetryOrSwitchAction(t,r.level));return;case G.AUDIO_TRACK_LOAD_ERROR:case G.AUDIO_TRACK_LOAD_TIMEOUT:case G.SUBTITLE_LOAD_ERROR:case G.SUBTITLE_TRACK_LOAD_TIMEOUT:if(r){const d=i.loadLevelObj;if(d&&(r.type===ft.AUDIO_TRACK&&d.hasAudioGroup(r.groupId)||r.type===ft.SUBTITLE_TRACK&&d.hasSubtitleGroup(r.groupId))){t.errorAction=this.getPlaylistRetryOrSwitchAction(t,i.loadLevel),t.errorAction.action=Pe.SendAlternateToPenaltyBox,t.errorAction.flags=Qe.MoveAllAlternatesMatchingHost;return}}return;case G.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED:{const d=i.loadLevelObj,c=d==null?void 0:d.attrs["HDCP-LEVEL"];c?t.errorAction={action:Pe.SendAlternateToPenaltyBox,flags:Qe.MoveAllAlternatesMatchingHDCP,hdcpLevel:c}:this.keySystemError(t)}return;case G.BUFFER_ADD_CODEC_ERROR:case G.REMUX_ALLOC_ERROR:case G.BUFFER_APPEND_ERROR:if(!t.errorAction){var l;t.errorAction=this.getLevelSwitchAction(t,(l=t.level)!=null?l:i.loadLevel)}return;case G.INTERNAL_EXCEPTION:case G.BUFFER_APPENDING_ERROR:case G.BUFFER_FULL_ERROR:case G.LEVEL_SWITCH_ERROR:case G.BUFFER_STALLED_ERROR:case G.BUFFER_SEEK_OVER_HOLE:case G.BUFFER_NUDGE_ON_STALL:t.errorAction=Nn();return}t.type===ae.KEY_SYSTEM_ERROR&&this.keySystemError(t)}keySystemError(e){const t=this.getVariantLevelIndex(e.frag);e.levelRetry=!1,e.errorAction=this.getLevelSwitchAction(e,t)}getPlaylistRetryOrSwitchAction(e,t){const n=this.hls,i=Ms(n.config.playlistLoadPolicy,e),r=this.playlistError++;if(vi(i,r,bi(e),e.response))return{action:Pe.RetryRequest,flags:Qe.None,retryConfig:i,retryCount:r};const o=this.getLevelSwitchAction(e,t);return i&&(o.retryConfig=i,o.retryCount=r),o}getFragRetryOrSwitchAction(e){const t=this.hls,n=this.getVariantLevelIndex(e.frag),i=t.levels[n],{fragLoadPolicy:r,keyLoadPolicy:s}=t.config,o=Ms(e.details.startsWith("key")?s:r,e),l=t.levels.reduce((c,u)=>c+u.fragmentError,0);if(i&&(e.details!==G.FRAG_GAP&&i.fragmentError++,vi(o,l,bi(e),e.response)))return{action:Pe.RetryRequest,flags:Qe.None,retryConfig:o,retryCount:l};const d=this.getLevelSwitchAction(e,n);return o&&(d.retryConfig=o,d.retryCount=l),d}getLevelSwitchAction(e,t){const n=this.hls;t==null&&(t=n.loadLevel);const i=this.hls.levels[t];if(i){var r,s;const d=e.details;i.loadError++,d===G.BUFFER_APPEND_ERROR&&i.fragmentError++;let c=-1;const{levels:u,loadLevel:h,minAutoLevel:y,maxAutoLevel:A}=n;n.autoLevelEnabled||(n.loadLevel=-1);const v=(r=e.frag)==null?void 0:r.type,k=(v===ce.AUDIO&&d===G.FRAG_PARSING_ERROR||e.sourceBufferName==="audio"&&(d===G.BUFFER_ADD_CODEC_ERROR||d===G.BUFFER_APPEND_ERROR))&&u.some(({audioCodec:F})=>i.audioCodec!==F),R=e.sourceBufferName==="video"&&(d===G.BUFFER_ADD_CODEC_ERROR||d===G.BUFFER_APPEND_ERROR)&&u.some(({codecSet:F,audioCodec:B})=>i.codecSet!==F&&i.audioCodec===B),{type:_,groupId:L}=(s=e.context)!=null?s:{};for(let F=u.length;F--;){const B=(F+h)%u.length;if(B!==h&&B>=y&&B<=A&&u[B].loadError===0){var o,l;const M=u[B];if(d===G.FRAG_GAP&&v===ce.MAIN&&e.frag){const q=u[B].details;if(q){const P=jt(e.frag,q.fragments,e.frag.start);if(P!=null&&P.gap)continue}}else{if(_===ft.AUDIO_TRACK&&M.hasAudioGroup(L)||_===ft.SUBTITLE_TRACK&&M.hasSubtitleGroup(L))continue;if(v===ce.AUDIO&&(o=i.audioGroups)!=null&&o.some(q=>M.hasAudioGroup(q))||v===ce.SUBTITLE&&(l=i.subtitleGroups)!=null&&l.some(q=>M.hasSubtitleGroup(q))||k&&i.audioCodec===M.audioCodec||!k&&i.audioCodec!==M.audioCodec||R&&i.codecSet===M.codecSet)continue}c=B;break}}if(c>-1&&n.loadLevel!==c)return e.levelRetry=!0,this.playlistError=0,{action:Pe.SendAlternateToPenaltyBox,flags:Qe.None,nextAutoLevel:c}}return{action:Pe.SendAlternateToPenaltyBox,flags:Qe.MoveAllAlternatesMatchingHost}}onErrorOut(e,t){var n;switch((n=t.errorAction)==null?void 0:n.action){case Pe.DoNothing:break;case Pe.SendAlternateToPenaltyBox:this.sendAlternateToPenaltyBox(t),!t.errorAction.resolved&&t.details!==G.FRAG_GAP?t.fatal=!0:/MediaSource readyState: ended/.test(t.error.message)&&(this.warn(`MediaSource ended after "${t.sourceBufferName}" sourceBuffer append error. Attempting to recover from media error.`),this.hls.recoverMediaError());break}if(t.fatal){this.hls.stopLoad();return}}sendAlternateToPenaltyBox(e){const t=this.hls,n=e.errorAction;if(!n)return;const{flags:i,hdcpLevel:r,nextAutoLevel:s}=n;switch(i){case Qe.None:this.switchLevel(e,s);break;case Qe.MoveAllAlternatesMatchingHDCP:r&&(t.maxHdcpLevel=Rs[Rs.indexOf(r)-1],n.resolved=!0),this.warn(`Restricting playback to HDCP-LEVEL of "${t.maxHdcpLevel}" or lower`);break}n.resolved||this.switchLevel(e,s)}switchLevel(e,t){if(t!==void 0&&e.errorAction&&(this.warn(`switching to level ${t} after ${e.details}`),this.hls.nextAutoLevel=t,e.errorAction.resolved=!0,this.hls.nextLoadLevel=this.hls.nextAutoLevel,e.details===G.BUFFER_ADD_CODEC_ERROR&&e.mimeType&&e.sourceBufferName!=="audiovideo")){const n=La(e.mimeType),i=this.hls.levels;for(let r=i.length;r--;)i[r][`${e.sourceBufferName}Codec`]===n&&this.hls.removeLevel(r)}}}function Nn(a){const e={action:Pe.DoNothing,flags:Qe.None};return a&&(e.resolved=!0),e}var Ye={NOT_LOADED:"NOT_LOADED",APPENDING:"APPENDING",PARTIAL:"PARTIAL",OK:"OK"},Tt={cbc:0,ctr:1};class qc{constructor(e,t,n){this.subtle=void 0,this.aesIV=void 0,this.aesMode=void 0,this.subtle=e,this.aesIV=t,this.aesMode=n}decrypt(e,t){switch(this.aesMode){case Tt.cbc:return this.subtle.decrypt({name:"AES-CBC",iv:this.aesIV},t,e);case Tt.ctr:return this.subtle.decrypt({name:"AES-CTR",counter:this.aesIV,length:64},t,e);default:throw new Error(`[AESCrypto] invalid aes mode ${this.aesMode}`)}}}function Kc(a){const e=a.byteLength,t=e&&new DataView(a.buffer).getUint8(e-1);return t?a.slice(0,e-t):a}class Hc{constructor(){this.rcon=[0,1,2,4,8,16,32,64,128,27,54],this.subMix=[new Uint32Array(256),new Uint32Array(256),new Uint32Array(256),new Uint32Array(256)],this.invSubMix=[new Uint32Array(256),new Uint32Array(256),new Uint32Array(256),new Uint32Array(256)],this.sBox=new Uint32Array(256),this.invSBox=new Uint32Array(256),this.key=new Uint32Array(0),this.ksRows=0,this.keySize=0,this.keySchedule=void 0,this.invKeySchedule=void 0,this.initTable()}uint8ArrayToUint32Array_(e){const t=new DataView(e),n=new Uint32Array(4);for(let i=0;i<4;i++)n[i]=t.getUint32(i*4);return n}initTable(){const e=this.sBox,t=this.invSBox,n=this.subMix,i=n[0],r=n[1],s=n[2],o=n[3],l=this.invSubMix,d=l[0],c=l[1],u=l[2],h=l[3],y=new Uint32Array(256);let A=0,v=0,S=0;for(S=0;S<256;S++)S<128?y[S]=S<<1:y[S]=S<<1^283;for(S=0;S<256;S++){let k=v^v<<1^v<<2^v<<3^v<<4;k=k>>>8^k&255^99,e[A]=k,t[k]=A;const I=y[A],R=y[I],_=y[R];let L=y[k]*257^k*16843008;i[A]=L<<24|L>>>8,r[A]=L<<16|L>>>16,s[A]=L<<8|L>>>24,o[A]=L,L=_*16843009^R*65537^I*257^A*16843008,d[k]=L<<24|L>>>8,c[k]=L<<16|L>>>16,u[k]=L<<8|L>>>24,h[k]=L,A?(A=I^y[y[y[_^I]]],v^=y[y[v]]):A=v=1}}expandKey(e){const t=this.uint8ArrayToUint32Array_(e);let n=!0,i=0;for(;i<t.length&&n;)n=t[i]===this.key[i],i++;if(n)return;this.key=t;const r=this.keySize=t.length;if(r!==4&&r!==6&&r!==8)throw new Error("Invalid aes key size="+r);const s=this.ksRows=(r+6+1)*4;let o,l;const d=this.keySchedule=new Uint32Array(s),c=this.invKeySchedule=new Uint32Array(s),u=this.sBox,h=this.rcon,y=this.invSubMix,A=y[0],v=y[1],S=y[2],k=y[3];let I,R;for(o=0;o<s;o++){if(o<r){I=d[o]=t[o];continue}R=I,o%r===0?(R=R<<8|R>>>24,R=u[R>>>24]<<24|u[R>>>16&255]<<16|u[R>>>8&255]<<8|u[R&255],R^=h[o/r|0]<<24):r>6&&o%r===4&&(R=u[R>>>24]<<24|u[R>>>16&255]<<16|u[R>>>8&255]<<8|u[R&255]),d[o]=I=(d[o-r]^R)>>>0}for(l=0;l<s;l++)o=s-l,l&3?R=d[o]:R=d[o-4],l<4||o<=4?c[l]=R:c[l]=A[u[R>>>24]]^v[u[R>>>16&255]]^S[u[R>>>8&255]]^k[u[R&255]],c[l]=c[l]>>>0}networkToHostOrderSwap(e){return e<<24|(e&65280)<<8|(e&16711680)>>8|e>>>24}decrypt(e,t,n){const i=this.keySize+6,r=this.invKeySchedule,s=this.invSBox,o=this.invSubMix,l=o[0],d=o[1],c=o[2],u=o[3],h=this.uint8ArrayToUint32Array_(n);let y=h[0],A=h[1],v=h[2],S=h[3];const k=new Int32Array(e),I=new Int32Array(k.length);let R,_,L,F,B,M,q,P,K,Q,he,re,ue,le;const J=this.networkToHostOrderSwap;for(;t<k.length;){for(K=J(k[t]),Q=J(k[t+1]),he=J(k[t+2]),re=J(k[t+3]),B=K^r[0],M=re^r[1],q=he^r[2],P=Q^r[3],ue=4,le=1;le<i;le++)R=l[B>>>24]^d[M>>16&255]^c[q>>8&255]^u[P&255]^r[ue],_=l[M>>>24]^d[q>>16&255]^c[P>>8&255]^u[B&255]^r[ue+1],L=l[q>>>24]^d[P>>16&255]^c[B>>8&255]^u[M&255]^r[ue+2],F=l[P>>>24]^d[B>>16&255]^c[M>>8&255]^u[q&255]^r[ue+3],B=R,M=_,q=L,P=F,ue=ue+4;R=s[B>>>24]<<24^s[M>>16&255]<<16^s[q>>8&255]<<8^s[P&255]^r[ue],_=s[M>>>24]<<24^s[q>>16&255]<<16^s[P>>8&255]<<8^s[B&255]^r[ue+1],L=s[q>>>24]<<24^s[P>>16&255]<<16^s[B>>8&255]<<8^s[M&255]^r[ue+2],F=s[P>>>24]<<24^s[B>>16&255]<<16^s[M>>8&255]<<8^s[q&255]^r[ue+3],I[t]=J(R^y),I[t+1]=J(F^A),I[t+2]=J(L^v),I[t+3]=J(_^S),y=K,A=Q,v=he,S=re,t=t+4}return I.buffer}}class zc{constructor(e,t,n){this.subtle=void 0,this.key=void 0,this.aesMode=void 0,this.subtle=e,this.key=t,this.aesMode=n}expandKey(){const e=Yc(this.aesMode);return this.subtle.importKey("raw",this.key,{name:e},!1,["encrypt","decrypt"])}}function Yc(a){switch(a){case Tt.cbc:return"AES-CBC";case Tt.ctr:return"AES-CTR";default:throw new Error(`[FastAESKey] invalid aes mode ${a}`)}}const Vc=16;class Lr{constructor(e,{removePKCS7Padding:t=!0}={}){if(this.logEnabled=!0,this.removePKCS7Padding=void 0,this.subtle=null,this.softwareDecrypter=null,this.key=null,this.fastAesKey=null,this.remainderData=null,this.currentIV=null,this.currentResult=null,this.useSoftware=void 0,this.enableSoftwareAES=void 0,this.enableSoftwareAES=e.enableSoftwareAES,this.removePKCS7Padding=t,t)try{const n=self.crypto;n&&(this.subtle=n.subtle||n.webkitSubtle)}catch{}this.useSoftware=!this.subtle}destroy(){this.subtle=null,this.softwareDecrypter=null,this.key=null,this.fastAesKey=null,this.remainderData=null,this.currentIV=null,this.currentResult=null}isSync(){return this.useSoftware}flush(){const{currentResult:e,remainderData:t}=this;if(!e||t)return this.reset(),null;const n=new Uint8Array(e);return this.reset(),this.removePKCS7Padding?Kc(n):n}reset(){this.currentResult=null,this.currentIV=null,this.remainderData=null,this.softwareDecrypter&&(this.softwareDecrypter=null)}decrypt(e,t,n,i){return this.useSoftware?new Promise((r,s)=>{const o=ArrayBuffer.isView(e)?e:new Uint8Array(e);this.softwareDecrypt(o,t,n,i);const l=this.flush();l?r(l.buffer):s(new Error("[softwareDecrypt] Failed to decrypt data"))}):this.webCryptoDecrypt(new Uint8Array(e),t,n,i)}softwareDecrypt(e,t,n,i){const{currentIV:r,currentResult:s,remainderData:o}=this;if(i!==Tt.cbc||t.byteLength!==16)return be.warn("SoftwareDecrypt: can only handle AES-128-CBC"),null;this.logOnce("JS AES decrypt"),o&&(e=Ve(o,e),this.remainderData=null);const l=this.getValidChunk(e);if(!l.length)return null;r&&(n=r);let d=this.softwareDecrypter;d||(d=this.softwareDecrypter=new Hc),d.expandKey(t);const c=s;return this.currentResult=d.decrypt(l.buffer,0,n),this.currentIV=l.slice(-16).buffer,c||null}webCryptoDecrypt(e,t,n,i){if(this.key!==t||!this.fastAesKey){if(!this.subtle)return Promise.resolve(this.onWebCryptoError(e,t,n,i));this.key=t,this.fastAesKey=new zc(this.subtle,t,i)}return this.fastAesKey.expandKey().then(r=>this.subtle?(this.logOnce("WebCrypto AES decrypt"),new qc(this.subtle,new Uint8Array(n),i).decrypt(e.buffer,r)):Promise.reject(new Error("web crypto not initialized"))).catch(r=>(be.warn(`[decrypter]: WebCrypto Error, disable WebCrypto API, ${r.name}: ${r.message}`),this.onWebCryptoError(e,t,n,i)))}onWebCryptoError(e,t,n,i){const r=this.enableSoftwareAES;if(r){this.useSoftware=!0,this.logEnabled=!0,this.softwareDecrypt(e,t,n,i);const s=this.flush();if(s)return s.buffer}throw new Error("WebCrypto"+(r?" and softwareDecrypt":"")+": failed to decrypt data")}getValidChunk(e){let t=e;const n=e.length-e.length%Vc;return n!==e.length&&(t=e.slice(0,n),this.remainderData=e.slice(n)),t}logOnce(e){this.logEnabled&&(be.log(`[decrypter]: ${e}`),this.logEnabled=!1)}}const Us=Math.pow(2,17);class Wc{constructor(e){this.config=void 0,this.loader=null,this.partLoadTimeout=-1,this.config=e}destroy(){this.loader&&(this.loader.destroy(),this.loader=null)}abort(){this.loader&&this.loader.abort()}load(e,t){const n=e.url;if(!n)return Promise.reject(new Et({type:ae.NETWORK_ERROR,details:G.FRAG_LOAD_ERROR,fatal:!1,frag:e,error:new Error(`Fragment does not have a ${n?"part list":"url"}`),networkDetails:null}));this.abort();const i=this.config,r=i.fLoader,s=i.loader;return new Promise((o,l)=>{if(this.loader&&this.loader.destroy(),e.gap)if(e.tagList.some(A=>A[0]==="GAP")){l(Gs(e));return}else e.gap=!1;const d=this.loader=r?new r(i):new s(i),c=$s(e);e.loader=d;const u=Ns(i.fragLoadPolicy.default),h={loadPolicy:u,timeout:u.maxLoadTimeMs,maxRetry:0,retryDelay:0,maxRetryDelay:0,highWaterMark:e.sn==="initSegment"?1/0:Us};e.stats=d.stats;const y={onSuccess:(A,v,S,k)=>{this.resetLoader(e,d);let I=A.data;S.resetIV&&e.decryptdata&&(e.decryptdata.iv=new Uint8Array(I.slice(0,16)),I=I.slice(16)),o({frag:e,part:null,payload:I,networkDetails:k})},onError:(A,v,S,k)=>{this.resetLoader(e,d),l(new Et({type:ae.NETWORK_ERROR,details:G.FRAG_LOAD_ERROR,fatal:!1,frag:e,response:Se({url:n,data:void 0},A),error:new Error(`HTTP Error ${A.code} ${A.text}`),networkDetails:S,stats:k}))},onAbort:(A,v,S)=>{this.resetLoader(e,d),l(new Et({type:ae.NETWORK_ERROR,details:G.INTERNAL_ABORTED,fatal:!1,frag:e,error:new Error("Aborted"),networkDetails:S,stats:A}))},onTimeout:(A,v,S)=>{this.resetLoader(e,d),l(new Et({type:ae.NETWORK_ERROR,details:G.FRAG_LOAD_TIMEOUT,fatal:!1,frag:e,error:new Error(`Timeout after ${h.timeout}ms`),networkDetails:S,stats:A}))}};t&&(y.onProgress=(A,v,S,k)=>t({frag:e,part:null,payload:S,networkDetails:k})),d.load(c,h,y)})}loadPart(e,t,n){this.abort();const i=this.config,r=i.fLoader,s=i.loader;return new Promise((o,l)=>{if(this.loader&&this.loader.destroy(),e.gap||t.gap){l(Gs(e,t));return}const d=this.loader=r?new r(i):new s(i),c=$s(e,t);e.loader=d;const u=Ns(i.fragLoadPolicy.default),h={loadPolicy:u,timeout:u.maxLoadTimeMs,maxRetry:0,retryDelay:0,maxRetryDelay:0,highWaterMark:Us};t.stats=d.stats,d.load(c,h,{onSuccess:(y,A,v,S)=>{this.resetLoader(e,d),this.updateStatsFromPart(e,t);const k={frag:e,part:t,payload:y.data,networkDetails:S};n(k),o(k)},onError:(y,A,v,S)=>{this.resetLoader(e,d),l(new Et({type:ae.NETWORK_ERROR,details:G.FRAG_LOAD_ERROR,fatal:!1,frag:e,part:t,response:Se({url:c.url,data:void 0},y),error:new Error(`HTTP Error ${y.code} ${y.text}`),networkDetails:v,stats:S}))},onAbort:(y,A,v)=>{e.stats.aborted=t.stats.aborted,this.resetLoader(e,d),l(new Et({type:ae.NETWORK_ERROR,details:G.INTERNAL_ABORTED,fatal:!1,frag:e,part:t,error:new Error("Aborted"),networkDetails:v,stats:y}))},onTimeout:(y,A,v)=>{this.resetLoader(e,d),l(new Et({type:ae.NETWORK_ERROR,details:G.FRAG_LOAD_TIMEOUT,fatal:!1,frag:e,part:t,error:new Error(`Timeout after ${h.timeout}ms`),networkDetails:v,stats:y}))}})})}updateStatsFromPart(e,t){const n=e.stats,i=t.stats,r=i.total;if(n.loaded+=i.loaded,r){const l=Math.round(e.duration/t.duration),d=Math.min(Math.round(n.loaded/r),l),u=(l-d)*Math.round(n.loaded/d);n.total=n.loaded+u}else n.total=Math.max(n.loaded,n.total);const s=n.loading,o=i.loading;s.start?s.first+=o.first-o.start:(s.start=o.start,s.first=o.first),s.end=o.end}resetLoader(e,t){e.loader=null,this.loader===t&&(self.clearTimeout(this.partLoadTimeout),this.loader=null),t.destroy()}}function $s(a,e=null){const t=e||a,n={frag:a,part:e,responseType:"arraybuffer",url:t.url,headers:{},rangeStart:0,rangeEnd:0},i=t.byteRangeStartOffset,r=t.byteRangeEndOffset;if(te(i)&&te(r)){var s;let o=i,l=r;if(a.sn==="initSegment"&&jc((s=a.decryptdata)==null?void 0:s.method)){const d=r-i;d%16&&(l=r+(16-d%16)),i!==0&&(n.resetIV=!0,o=i-16)}n.rangeStart=o,n.rangeEnd=l}return n}function Gs(a,e){const t=new Error(`GAP ${a.gap?"tag":"attribute"} found`),n={type:ae.MEDIA_ERROR,details:G.FRAG_GAP,fatal:!1,frag:a,error:t,networkDetails:null};return e&&(n.part=e),(e||a).stats.aborted=!0,new Et(n)}function jc(a){return a==="AES-128"||a==="AES-256"}class Et extends Error{constructor(e){super(e.error.message),this.data=void 0,this.data=e}}class Qc extends pt{constructor(e,t){super(e,t),this._boundTick=void 0,this._tickTimer=null,this._tickInterval=null,this._tickCallCount=0,this._boundTick=this.tick.bind(this)}destroy(){this.onHandlerDestroying(),this.onHandlerDestroyed()}onHandlerDestroying(){this.clearNextTick(),this.clearInterval()}onHandlerDestroyed(){}hasInterval(){return!!this._tickInterval}hasNextTick(){return!!this._tickTimer}setInterval(e){return this._tickInterval?!1:(this._tickCallCount=0,this._tickInterval=self.setInterval(this._boundTick,e),!0)}clearInterval(){return this._tickInterval?(self.clearInterval(this._tickInterval),this._tickInterval=null,!0):!1}clearNextTick(){return this._tickTimer?(self.clearTimeout(this._tickTimer),this._tickTimer=null,!0):!1}tick(){this._tickCallCount++,this._tickCallCount===1&&(this.doTick(),this._tickCallCount>1&&this.tickImmediate(),this._tickCallCount=0)}tickImmediate(){this.clearNextTick(),this._tickTimer=self.setTimeout(this._boundTick,0)}doTick(){}}class Ba{constructor(e,t,n,i=0,r=-1,s=!1){this.level=void 0,this.sn=void 0,this.part=void 0,this.id=void 0,this.size=void 0,this.partial=void 0,this.transmuxing=ti(),this.buffering={audio:ti(),video:ti(),audiovideo:ti()},this.level=e,this.sn=t,this.id=n,this.size=i,this.part=r,this.partial=s}}function ti(){return{start:0,executeStart:0,executeEnd:0,end:0}}const qs={length:0,start:()=>0,end:()=>0};class Ee{static isBuffered(e,t){if(e){const n=Ee.getBuffered(e);for(let i=n.length;i--;)if(t>=n.start(i)&&t<=n.end(i))return!0}return!1}static bufferedRanges(e){if(e){const t=Ee.getBuffered(e);return Ee.timeRangesToArray(t)}return[]}static timeRangesToArray(e){const t=[];for(let n=0;n<e.length;n++)t.push({start:e.start(n),end:e.end(n)});return t}static bufferInfo(e,t,n){if(e){const i=Ee.bufferedRanges(e);if(i.length)return Ee.bufferedInfo(i,t,n)}return{len:0,start:t,end:t,bufferedIndex:-1}}static bufferedInfo(e,t,n){t=Math.max(0,t),e.length>1&&e.sort((c,u)=>c.start-u.start||u.end-c.end);let i=-1,r=[];if(n)for(let c=0;c<e.length;c++){t>=e[c].start&&t<=e[c].end&&(i=c);const u=r.length;if(u){const h=r[u-1].end;e[c].start-h<n?e[c].end>h&&(r[u-1].end=e[c].end):r.push(e[c])}else r.push(e[c])}else r=e;let s=0,o,l=t,d=t;for(let c=0;c<r.length;c++){const u=r[c].start,h=r[c].end;if(i===-1&&t>=u&&t<=h&&(i=c),t+n>=u&&t<h)l=u,d=h,s=d-t;else if(t+n<u){o=u;break}}return{len:s,start:l||0,end:d||0,nextStart:o,buffered:e,bufferedIndex:i}}static getBuffered(e){try{return e.buffered||qs}catch(t){return be.log("failed to get media.buffered",t),qs}}}const Xc=/\{\$([a-zA-Z0-9-_]+)\}/g;function Zc(a,e){if(a.variableList!==null||a.hasVariableRefs){const t=a.variableList;return e.replace(Xc,n=>{const i=n.substring(2,n.length-1),r=t==null?void 0:t[i];return r===void 0?(a.playlistParsingError||(a.playlistParsingError=new Error(`Missing preceding EXT-X-DEFINE tag for Variable Reference: "${i}"`)),n):r})}return e}const Jc=/^(\d+)x(\d+)$/,Ks=/(.+?)=(".*?"|.*?)(?:,|$)/g;class Gn{constructor(e,t){typeof e=="string"&&(e=Gn.parseAttrList(e,t)),Te(this,e)}get clientAttrs(){return Object.keys(this).filter(e=>e.substring(0,2)==="X-")}decimalInteger(e){const t=parseInt(this[e],10);return t>Number.MAX_SAFE_INTEGER?1/0:t}hexadecimalInteger(e){if(this[e]){let t=(this[e]||"0x").slice(2);t=(t.length&1?"0":"")+t;const n=new Uint8Array(t.length/2);for(let i=0;i<t.length/2;i++)n[i]=parseInt(t.slice(i*2,i*2+2),16);return n}return null}hexadecimalIntegerAsNumber(e){const t=parseInt(this[e],16);return t>Number.MAX_SAFE_INTEGER?1/0:t}decimalFloatingPoint(e){return parseFloat(this[e])}optionalFloat(e,t){const n=this[e];return n?parseFloat(n):t}enumeratedString(e){return this[e]}enumeratedStringList(e,t){const n=this[e];return(n?n.split(/[ ,]+/):[]).reduce((i,r)=>(i[r.toLowerCase()]=!0,i),t)}bool(e){return this[e]==="YES"}decimalResolution(e){const t=Jc.exec(this[e]);if(t!==null)return{width:parseInt(t[1],10),height:parseInt(t[2],10)}}static parseAttrList(e,t){let n;const i={},r='"';for(Ks.lastIndex=0;(n=Ks.exec(e))!==null;){const s=n[1].trim();let o=n[2];const l=o.indexOf(r)===0&&o.lastIndexOf(r)===o.length-1;let d=!1;if(l)o=o.slice(1,-1);else switch(s){case"IV":case"SCTE35-CMD":case"SCTE35-IN":case"SCTE35-OUT":d=!0}if(t&&(l||d))o=Zc(t,o);else if(!d&&!l)switch(s){case"CLOSED-CAPTIONS":if(o==="NONE")break;case"ALLOWED-CPC":case"CLASS":case"ASSOC-LANGUAGE":case"AUDIO":case"BYTERANGE":case"CHANNELS":case"CHARACTERISTICS":case"CODECS":case"DATA-ID":case"END-DATE":case"GROUP-ID":case"ID":case"IMPORT":case"INSTREAM-ID":case"KEYFORMAT":case"KEYFORMATVERSIONS":case"LANGUAGE":case"NAME":case"PATHWAY-ID":case"QUERYPARAM":case"RECENTLY-REMOVED-DATERANGES":case"SERVER-URI":case"STABLE-RENDITION-ID":case"STABLE-VARIANT-ID":case"START-DATE":case"SUBTITLES":case"SUPPLEMENTAL-CODECS":case"URI":case"VALUE":case"VIDEO":case"X-ASSET-LIST":case"X-ASSET-URI":be.warn(`${e}: attribute ${s} is missing quotes`)}i[s]=o}return i}}const eu="com.apple.hls.interstitial";class tu{constructor(e,t,n=0){var i;if(this.attr=void 0,this.tagAnchor=void 0,this.tagOrder=void 0,this._startDate=void 0,this._endDate=void 0,this._dateAtEnd=void 0,this._cue=void 0,this._badValueForSameId=void 0,this.tagAnchor=(t==null?void 0:t.tagAnchor)||null,this.tagOrder=(i=t==null?void 0:t.tagOrder)!=null?i:n,t){const r=t.attr;for(const s in r)if(Object.prototype.hasOwnProperty.call(e,s)&&e[s]!==r[s]){be.warn(`DATERANGE tag attribute: "${s}" does not match for tags with ID: "${e.ID}"`),this._badValueForSameId=s;break}e=Te(new Gn({}),r,e)}if(this.attr=e,t?(this._startDate=t._startDate,this._cue=t._cue,this._endDate=t._endDate,this._dateAtEnd=t._dateAtEnd):this._startDate=new Date(e["START-DATE"]),"END-DATE"in this.attr){const r=(t==null?void 0:t.endDate)||new Date(this.attr["END-DATE"]);te(r.getTime())&&(this._endDate=r)}}get id(){return this.attr.ID}get class(){return this.attr.CLASS}get cue(){const e=this._cue;return e===void 0?this._cue=this.attr.enumeratedStringList(this.attr.CUE?"CUE":"X-CUE",{pre:!1,post:!1,once:!1}):e}get startTime(){const{tagAnchor:e}=this;return e===null||e.programDateTime===null?(be.warn(`Expected tagAnchor Fragment with PDT set for DateRange "${this.id}": ${e}`),NaN):e.start+(this.startDate.getTime()-e.programDateTime)/1e3}get startDate(){return this._startDate}get endDate(){const e=this._endDate||this._dateAtEnd;if(e)return e;const t=this.duration;return t!==null?this._dateAtEnd=new Date(this._startDate.getTime()+t*1e3):null}get duration(){if("DURATION"in this.attr){const e=this.attr.decimalFloatingPoint("DURATION");if(te(e))return e}else if(this._endDate)return(this._endDate.getTime()-this._startDate.getTime())/1e3;return null}get plannedDuration(){return"PLANNED-DURATION"in this.attr?this.attr.decimalFloatingPoint("PLANNED-DURATION"):null}get endOnNext(){return this.attr.bool("END-ON-NEXT")}get isInterstitial(){return this.class===eu}get isValid(){return!!this.id&&!this._badValueForSameId&&te(this.startDate.getTime())&&(this.duration===null||this.duration>=0)&&(!this.endOnNext||!!this.class)&&(!this.attr.CUE||!this.cue.pre&&!this.cue.post||this.cue.pre!==this.cue.post)&&(!this.isInterstitial||"X-ASSET-URI"in this.attr||"X-ASSET-LIST"in this.attr)}}function Yt(a){return a==="AES-128"||a==="AES-256"||a==="AES-256-CTR"}function Rr(a){switch(a){case"AES-128":case"AES-256":return Tt.cbc;case"AES-256-CTR":return Tt.ctr;default:throw new Error(`invalid full segment method ${a}`)}}function _r(a){return Uint8Array.from(atob(a),e=>e.charCodeAt(0))}function yr(a){return Uint8Array.from(unescape(encodeURIComponent(a)),e=>e.charCodeAt(0))}function nu(a){const e=yr(a).subarray(0,16),t=new Uint8Array(16);return t.set(e,16-e.length),t}function iu(a){const e=function(n,i,r){const s=n[i];n[i]=n[r],n[r]=s};e(a,0,3),e(a,1,2),e(a,4,5),e(a,6,7)}function ru(a){const e=a.split(":");let t=null;if(e[0]==="data"&&e.length===2){const n=e[1].split(";"),i=n[n.length-1].split(",");if(i.length===2){const r=i[0]==="base64",s=i[1];r?(n.splice(-1,1),t=_r(s)):t=nu(s)}}return t}const xi=typeof self<"u"?self:void 0;var Ae={CLEARKEY:"org.w3.clearkey",FAIRPLAY:"com.apple.fps",PLAYREADY:"com.microsoft.playready",WIDEVINE:"com.widevine.alpha"},Ue={CLEARKEY:"org.w3.clearkey",FAIRPLAY:"com.apple.streamingkeydelivery",PLAYREADY:"com.microsoft.playready",WIDEVINE:"urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed"};function Xi(a){switch(a){case Ue.FAIRPLAY:return Ae.FAIRPLAY;case Ue.PLAYREADY:return Ae.PLAYREADY;case Ue.WIDEVINE:return Ae.WIDEVINE;case Ue.CLEARKEY:return Ae.CLEARKEY}}var ni={CENC:"1077efecc0b24d02ace33c1e52e2fb4b",CLEARKEY:"e2719d58a985b3c9781ab030af78d30e",PLAYREADY:"9a04f07998404286ab92e65be0885f95",WIDEVINE:"edef8ba979d64acea3c827dcd51d21ed"};function Zi(a){if(a===ni.WIDEVINE)return Ae.WIDEVINE;if(a===ni.PLAYREADY)return Ae.PLAYREADY;if(a===ni.CENC||a===ni.CLEARKEY)return Ae.CLEARKEY}function Ji(a){switch(a){case Ae.FAIRPLAY:return Ue.FAIRPLAY;case Ae.PLAYREADY:return Ue.PLAYREADY;case Ae.WIDEVINE:return Ue.WIDEVINE;case Ae.CLEARKEY:return Ue.CLEARKEY}}function ii(a){const{drmSystems:e,widevineLicenseUrl:t}=a,n=e?[Ae.FAIRPLAY,Ae.WIDEVINE,Ae.PLAYREADY,Ae.CLEARKEY].filter(i=>!!e[i]):[];return!n[Ae.WIDEVINE]&&t&&n.push(Ae.WIDEVINE),n}const Pa=function(a){return xi!=null&&(a=xi.navigator)!=null&&a.requestMediaKeySystemAccess?self.navigator.requestMediaKeySystemAccess.bind(self.navigator):null}();function su(a,e,t,n){let i;switch(a){case Ae.FAIRPLAY:i=["cenc","sinf"];break;case Ae.WIDEVINE:case Ae.PLAYREADY:i=["cenc"];break;case Ae.CLEARKEY:i=["cenc","keyids"];break;default:throw new Error(`Unknown key-system: ${a}`)}return au(i,e,t,n)}function au(a,e,t,n){return[{initDataTypes:a,persistentState:n.persistentState||"optional",distinctiveIdentifier:n.distinctiveIdentifier||"optional",sessionTypes:n.sessionTypes||[n.sessionType||"temporary"],audioCapabilities:e.map(r=>({contentType:`audio/mp4; codecs=${r}`,robustness:n.audioRobustness||"",encryptionScheme:n.audioEncryptionScheme||null})),videoCapabilities:t.map(r=>({contentType:`video/mp4; codecs=${r}`,robustness:n.videoRobustness||"",encryptionScheme:n.videoEncryptionScheme||null}))}]}function Oa(a){const e=new Uint16Array(a.buffer,a.byteOffset,a.byteLength/2),t=String.fromCharCode.apply(null,Array.from(e)),n=t.substring(t.indexOf("<"),t.length),s=new DOMParser().parseFromString(n,"text/xml").getElementsByTagName("KID")[0];if(s){const o=s.childNodes[0]?s.childNodes[0].nodeValue:s.getAttribute("VALUE");if(o){const l=_r(o).subarray(0,16);return iu(l),l}}return null}let ri={};class Ei{static clearKeyUriToKeyIdMap(){ri={}}constructor(e,t,n,i=[1],r=null){this.uri=void 0,this.method=void 0,this.keyFormat=void 0,this.keyFormatVersions=void 0,this.encrypted=void 0,this.isCommonEncryption=void 0,this.iv=null,this.key=null,this.keyId=null,this.pssh=null,this.method=e,this.uri=t,this.keyFormat=n,this.keyFormatVersions=i,this.iv=r,this.encrypted=e?e!=="NONE":!1,this.isCommonEncryption=this.encrypted&&!Yt(e)}isSupported(){if(this.method){if(Yt(this.method)||this.method==="NONE")return!0;if(this.keyFormat==="identity")return this.method==="SAMPLE-AES";switch(this.keyFormat){case Ue.FAIRPLAY:case Ue.WIDEVINE:case Ue.PLAYREADY:case Ue.CLEARKEY:return["ISO-23001-7","SAMPLE-AES","SAMPLE-AES-CENC","SAMPLE-AES-CTR"].indexOf(this.method)!==-1}}return!1}getDecryptData(e){if(!this.encrypted||!this.uri)return null;if(Yt(this.method)&&this.uri&&!this.iv){typeof e!="number"&&(be.warn(`missing IV for initialization segment with method="${this.method}" - compliance issue`),e=0);const n=ou(e);return new Ei(this.method,this.uri,"identity",this.keyFormatVersions,n)}const t=ru(this.uri);if(t)switch(this.keyFormat){case Ue.WIDEVINE:this.pssh=t,t.length>=22&&(this.keyId=t.subarray(t.length-22,t.length-6));break;case Ue.PLAYREADY:{const n=new Uint8Array([154,4,240,121,152,64,66,134,171,146,230,91,224,136,95,149]);this.pssh=hc(n,null,t),this.keyId=Oa(t);break}default:{let n=t.subarray(0,16);if(n.length!==16){const i=new Uint8Array(16);i.set(n,16-n.length),n=i}this.keyId=n;break}}if(!this.keyId||this.keyId.byteLength!==16){let n=ri[this.uri];if(!n){const i=Object.keys(ri).length%Number.MAX_SAFE_INTEGER;n=new Uint8Array(16),new DataView(n.buffer,12,4).setUint32(0,i),ri[this.uri]=n}this.keyId=n}return this}}function ou(a){const e=new Uint8Array(16);for(let t=12;t<16;t++)e[t]=a>>8*(15-t)&255;return e}function lu(a,e){const t=a.length,n=a[t-1],i=e.live?1/0:e.totalduration,r=Object.keys(e.dateRanges);for(let s=r.length;s--;){const o=e.dateRanges[r[s]],l=o.startDate.getTime();o.tagAnchor=n.ref;for(let d=t;d--;){const c=du(e,l,a,d,i);if(c!==-1){o.tagAnchor=e.fragments[c].ref;break}}}}function du(a,e,t,n,i){const r=t[n];if(r){const o=r.programDateTime;if(e>=o||n===0){var s;const l=(((s=t[n+1])==null?void 0:s.start)||i)-r.start;if(e<=o+l*1e3){const d=t[n].sn-a.startSN,c=a.fragments;if(c.length>t.length){const h=(t[n+1]||c[c.length-1]).sn-a.startSN;for(let y=h;y>d;y--){const A=c[y].programDateTime;if(e>=A&&e<A+c[y].duration*1e3)return y}}return d}}}return-1}function cu(a,e,t){a.rawProgramDateTime?t.push(a):e!=null&&e.programDateTime&&(a.programDateTime=e.endProgramDateTime)}function er(a,e){const t=e.startPTS;if(te(t)){let n=0,i;e.sn>a.sn?(n=t-a.start,i=a):(n=a.start-t,i=e),i.duration!==n&&i.setDuration(n)}else e.sn>a.sn?a.cc===e.cc&&a.minEndPTS?e.setStart(a.start+(a.minEndPTS-a.start)):e.setStart(a.start+a.duration):e.setStart(Math.max(a.start-e.duration,0))}function Fa(a,e,t,n,i,r){n-t<=0&&(be.warn("Fragment should have a positive duration",e),n=t+e.duration,r=i+e.duration);let o=t,l=n;const d=e.startPTS,c=e.endPTS;if(te(d)){const S=Math.abs(d-t);te(e.deltaPTS)?e.deltaPTS=Math.max(S,e.deltaPTS):e.deltaPTS=S,o=Math.max(t,d),t=Math.min(t,d),i=Math.min(i,e.startDTS),l=Math.min(n,c),n=Math.max(n,c),r=Math.max(r,e.endDTS)}const u=t-e.start;e.start!==0&&e.setStart(t),e.setDuration(n-e.start),e.startPTS=t,e.maxStartPTS=o,e.startDTS=i,e.endPTS=n,e.minEndPTS=l,e.endDTS=r;const h=e.sn;if(!a||h<a.startSN||h>a.endSN)return 0;let y;const A=h-a.startSN,v=a.fragments;for(v[A]=e,y=A;y>0;y--)er(v[y],v[y-1]);for(y=A;y<v.length-1;y++)er(v[y],v[y+1]);return a.fragmentHint&&er(v[v.length-1],a.fragmentHint),a.PTSKnown=a.alignedSliding=!0,u}function uu(a,e){if(a===e)return;let t=null;const n=a.fragments;for(let l=n.length-1;l>=0;l--){const d=n[l].initSegment;if(d){t=d;break}}a.fragmentHint&&delete a.fragmentHint.endPTS;let i;pu(a,e,(l,d,c,u)=>{if(e.skippedSegments&&d.cc!==l.cc){const h=l.cc-d.cc;for(let y=c;y<u.length;y++)u[y].cc+=h}te(l.startPTS)&&te(l.endPTS)&&(d.setStart(d.startPTS=l.startPTS),d.startDTS=l.startDTS,d.maxStartPTS=l.maxStartPTS,d.endPTS=l.endPTS,d.endDTS=l.endDTS,d.minEndPTS=l.minEndPTS,d.setDuration(l.endPTS-l.startPTS),d.duration&&(i=d),e.PTSKnown=e.alignedSliding=!0),l.hasStreams&&(d.elementaryStreams=l.elementaryStreams),d.loader=l.loader,l.hasStats&&(d.stats=l.stats),l.initSegment&&(d.initSegment=l.initSegment,t=l.initSegment)});const r=e.fragments,s=e.fragmentHint?r.concat(e.fragmentHint):r;if(t&&s.forEach(l=>{var d;l&&(!l.initSegment||l.initSegment.relurl===((d=t)==null?void 0:d.relurl))&&(l.initSegment=t)}),e.skippedSegments)if(e.deltaUpdateFailed=r.some(l=>!l),e.deltaUpdateFailed){be.warn("[level-helper] Previous playlist missing segments skipped in delta playlist");for(let l=e.skippedSegments;l--;)r.shift();e.startSN=r[0].sn}else{e.endCC=r[r.length-1].cc,e.canSkipDateRanges&&(e.dateRanges=hu(a.dateRanges,e));const l=a.fragments.filter(d=>d.rawProgramDateTime);if(a.hasProgramDateTime&&!e.hasProgramDateTime)for(let d=1;d<s.length;d++)s[d].programDateTime===null&&cu(s[d],s[d-1],l);lu(l,e)}fu(a.partList,e.partList,(l,d)=>{d.elementaryStreams=l.elementaryStreams,d.stats=l.stats}),i?Fa(e,i,i.startPTS,i.endPTS,i.startDTS,i.endDTS):Ma(a,e),r.length&&(e.totalduration=e.edge-r[0].start),e.driftStartTime=a.driftStartTime,e.driftStart=a.driftStart;const o=e.advancedDateTime;if(e.advanced&&o){const l=e.edge;e.driftStart||(e.driftStartTime=o,e.driftStart=l),e.driftEndTime=o,e.driftEnd=l}else e.driftEndTime=a.driftEndTime,e.driftEnd=a.driftEnd,e.advancedDateTime=a.advancedDateTime;e.requestScheduled===-1&&(e.requestScheduled=a.requestScheduled)}function hu(a,e){const{dateRanges:t,recentlyRemovedDateranges:n}=e,i=Te({},a);n&&n.forEach(o=>{delete i[o]});const s=Object.keys(i).length;return s&&Object.keys(t).forEach(o=>{const l=i[o],d=new tu(t[o].attr,l);d.isValid?(i[o]=d,l||(d.tagOrder+=s)):be.warn(`Ignoring invalid Playlist Delta Update DATERANGE tag: "${Ie(t[o].attr)}"`)}),i}function fu(a,e,t){if(a&&e){let n=0;for(let i=0,r=a.length;i<=r;i++){const s=a[i],o=e[i+n];s&&o&&s.index===o.index&&s.fragment.sn===o.fragment.sn?t(s,o):n--}}}function pu(a,e,t){const n=e.skippedSegments,i=Math.max(a.startSN,e.startSN)-e.startSN,r=(a.fragmentHint?1:0)+(n?e.endSN:Math.min(a.endSN,e.endSN))-e.startSN,s=e.startSN-a.startSN,o=e.fragmentHint?e.fragments.concat(e.fragmentHint):e.fragments,l=a.fragmentHint?a.fragments.concat(a.fragmentHint):a.fragments;for(let d=i;d<=r;d++){const c=l[s+d];let u=o[d];if(n&&!u&&c&&(u=e.fragments[d]=c),c&&u){if(t(c,u,d,o),c.url&&c.url!==u.url){e.playlistParsingError=Hs(`media sequence mismatch ${u.sn}:`,a,e,c,u);return}else if(c.cc!==u.cc){e.playlistParsingError=Hs(`discontinuity sequence mismatch (${c.cc}!=${u.cc})`,a,e,c,u);return}}}}function Hs(a,e,t,n,i){return new Error(`${a} ${i.url}
Playlist starting @${e.startSN}
${e.m3u8}

Playlist starting @${t.startSN}
${t.m3u8}`)}function Ma(a,e,t=!0){const n=e.startSN+e.skippedSegments-a.startSN,i=a.fragments,r=n>=0;let s=0;if(r&&n<i.length)s=i[n].start;else if(r&&e.startSN===a.endSN+1)s=a.fragmentEnd;else if(r&&t)s=a.fragmentStart+n*e.levelTargetDuration;else if(!e.skippedSegments&&e.fragmentStart===0)s=a.fragmentStart;else return;Ar(e,s)}function Ar(a,e){if(e){const t=a.fragments;for(let n=a.skippedSegments;n<t.length;n++)t[n].addStart(e);a.fragmentHint&&a.fragmentHint.addStart(e)}}function mu(a,e=1/0){let t=1e3*a.targetduration;if(a.updated){const n=a.fragments,i=4;if(n.length&&t*i>e){const r=n[n.length-1].duration*1e3;r<t&&(t=r)}}else t/=2;return Math.round(t)}function gu(a,e,t){if(!a)return null;let n=a.fragments[e-a.startSN];return n||(n=a.fragmentHint,n&&n.sn===e)?n:e<a.startSN&&t&&t.sn===e?t:null}function zs(a,e,t){return a?Na(a.partList,e,t):null}function Na(a,e,t){if(a)for(let n=a.length;n--;){const i=a[n];if(i.index===t&&i.fragment.sn===e)return i}return null}function yu(a){a.forEach((e,t)=>{var n;(n=e.details)==null||n.fragments.forEach(i=>{i.level=t,i.initSegment&&(i.initSegment.level=t)})})}function Pn(a,e){for(let n=0,i=a.length;n<i;n++){var t;if(((t=a[n])==null?void 0:t.cc)===e)return a[n]}return null}function Au(a,e){return!!(a&&e.startCC<a.endCC&&e.endCC>a.startCC)}function Ys(a,e){if(a){const t=a.start+e;a.start=a.startPTS=t,a.endPTS=t+a.duration}}function Ua(a,e){const t=e.fragments;for(let n=0,i=t.length;n<i;n++)Ys(t[n],a);e.fragmentHint&&Ys(e.fragmentHint,a),e.alignedSliding=!0}function bu(a,e){a&&($a(e,a),!e.alignedSliding&&a&&Si(e,a),!e.alignedSliding&&a&&!e.skippedSegments&&Ma(a,e,!1))}function $a(a,e){if(!Au(e,a))return;const t=Math.min(e.endCC,a.endCC),n=Pn(e.fragments,t),i=Pn(a.fragments,t);if(!n||!i)return;be.log(`Aligning playlist at start of dicontinuity sequence ${t}`);const r=n.start-i.start;Ua(r,a)}function Si(a,e){if(!a.hasProgramDateTime||!e.hasProgramDateTime)return;const t=a.fragments,n=e.fragments;if(!t.length||!n.length)return;let i,r;const s=Math.min(e.endCC,a.endCC);e.startCC<s&&a.startCC<s&&(i=Pn(n,s),r=Pn(t,s)),(!i||!r)&&(i=n[Math.floor(n.length/2)],r=Pn(t,i.cc)||t[Math.floor(t.length/2)]);const o=i.programDateTime,l=r.programDateTime;if(!o||!l)return;const d=(l-o)/1e3-(r.start-i.start);Ua(d,a)}const vu={toString:function(a){let e="";const t=a.length;for(let n=0;n<t;n++)e+=`[${a.start(n).toFixed(3)}-${a.end(n).toFixed(3)}]`;return e}},Y={STOPPED:"STOPPED",IDLE:"IDLE",KEY_LOADING:"KEY_LOADING",FRAG_LOADING:"FRAG_LOADING",FRAG_LOADING_WAITING_RETRY:"FRAG_LOADING_WAITING_RETRY",WAITING_TRACK:"WAITING_TRACK",PARSING:"PARSING",PARSED:"PARSED",ENDED:"ENDED",ERROR:"ERROR",WAITING_INIT_PTS:"WAITING_INIT_PTS",WAITING_LEVEL:"WAITING_LEVEL"};class Ga extends Qc{constructor(e,t,n,i,r){super(i,e.logger),this.hls=void 0,this.fragPrevious=null,this.fragCurrent=null,this.fragmentTracker=void 0,this.transmuxer=null,this._state=Y.STOPPED,this.playlistType=void 0,this.media=null,this.mediaBuffer=null,this.config=void 0,this.bitrateTest=!1,this.lastCurrentTime=0,this.nextLoadPosition=0,this.startPosition=0,this.startTimeOffset=null,this.retryDate=0,this.levels=null,this.fragmentLoader=void 0,this.keyLoader=void 0,this.levelLastLoaded=null,this.startFragRequested=!1,this.decrypter=void 0,this.initPTS=[],this.buffering=!0,this.loadingParts=!1,this.loopSn=void 0,this.onMediaSeeking=()=>{const{config:s,fragCurrent:o,media:l,mediaBuffer:d,state:c}=this,u=l?l.currentTime:0,h=Ee.bufferInfo(d||l,u,s.maxBufferHole);if(this.log(`media seeking to ${te(u)?u.toFixed(3):u}, state: ${c}`),this.state===Y.ENDED)this.resetLoadingState();else if(o){const y=s.maxFragLookUpTolerance,A=o.start-y,v=o.start+o.duration+y;if(!h.len||v<h.start||A>h.end){const S=u>v;(u<A||S)&&(S&&o.loader&&(this.log("seeking outside of buffer while fragment load in progress, cancel fragment load"),o.abortRequests(),this.resetLoadingState()),this.fragPrevious=null)}}if(l){this.fragmentTracker.removeFragmentsInRange(u,1/0,this.playlistType,!0);const y=this.lastCurrentTime;if(u>y&&(this.lastCurrentTime=u),!this.loadingParts){const A=Math.max(h.end,u),v=this.shouldLoadParts(this.getLevelDetails(),A);v&&(this.log(`LL-Part loading ON after seeking to ${u.toFixed(2)} with buffer @${A.toFixed(2)}`),this.loadingParts=v)}}!this.hls.hasEnoughToStart&&!h.len&&(this.log(`setting startPosition to ${u} because of seek before start`),this.nextLoadPosition=this.startPosition=u),this.tickImmediate()},this.onMediaEnded=()=>{this.log("setting startPosition to 0 because media ended"),this.startPosition=this.lastCurrentTime=0},this.playlistType=r,this.hls=e,this.fragmentLoader=new Wc(e.config),this.keyLoader=n,this.fragmentTracker=t,this.config=e.config,this.decrypter=new Lr(e.config)}registerListeners(){const{hls:e}=this;e.on(T.MEDIA_ATTACHED,this.onMediaAttached,this),e.on(T.MEDIA_DETACHING,this.onMediaDetaching,this),e.on(T.MANIFEST_LOADING,this.onManifestLoading,this),e.on(T.MANIFEST_LOADED,this.onManifestLoaded,this),e.on(T.ERROR,this.onError,this)}unregisterListeners(){const{hls:e}=this;e.off(T.MEDIA_ATTACHED,this.onMediaAttached,this),e.off(T.MEDIA_DETACHING,this.onMediaDetaching,this),e.off(T.MANIFEST_LOADING,this.onManifestLoading,this),e.off(T.MANIFEST_LOADED,this.onManifestLoaded,this),e.off(T.ERROR,this.onError,this)}doTick(){this.onTickEnd()}onTickEnd(){}startLoad(e){}stopLoad(){if(this.state===Y.STOPPED)return;this.fragmentLoader.abort(),this.keyLoader.abort(this.playlistType);const e=this.fragCurrent;e!=null&&e.loader&&(e.abortRequests(),this.fragmentTracker.removeFragment(e)),this.resetTransmuxer(),this.fragCurrent=null,this.fragPrevious=null,this.clearInterval(),this.clearNextTick(),this.state=Y.STOPPED}get startPositionValue(){const{nextLoadPosition:e,startPosition:t}=this;return t===-1&&e?e:t}get bufferingEnabled(){return this.buffering}pauseBuffering(){this.buffering=!1}resumeBuffering(){this.buffering=!0}get inFlightFrag(){return{frag:this.fragCurrent,state:this.state}}_streamEnded(e,t){if(t.live||!this.media)return!1;const n=e.end||0,i=this.config.timelineOffset||0;if(n<=i)return!1;const r=e.nextStart;if(r&&r>i&&r<t.edge||this.media.currentTime<e.start)return!1;const o=t.partList;if(o!=null&&o.length){const d=o[o.length-1];return Ee.isBuffered(this.media,d.start+d.duration/2)}const l=t.fragments[t.fragments.length-1].type;return this.fragmentTracker.isEndListAppended(l)}getLevelDetails(){if(this.levels&&this.levelLastLoaded!==null){var e;return(e=this.levelLastLoaded)==null?void 0:e.details}}get timelineOffset(){const e=this.config.timelineOffset;if(e){var t;return((t=this.getLevelDetails())==null?void 0:t.appliedTimelineOffset)||e}return 0}onMediaAttached(e,t){const n=this.media=this.mediaBuffer=t.media;n.removeEventListener("seeking",this.onMediaSeeking),n.removeEventListener("ended",this.onMediaEnded),n.addEventListener("seeking",this.onMediaSeeking),n.addEventListener("ended",this.onMediaEnded);const i=this.config;this.levels&&i.autoStartLoad&&this.state===Y.STOPPED&&this.startLoad(i.startPosition)}onMediaDetaching(e,t){const n=!!t.transferMedia,i=this.media;if(i!==null){if(i.ended&&(this.log("MSE detaching and video ended, reset startPosition"),this.startPosition=this.lastCurrentTime=0),i.removeEventListener("seeking",this.onMediaSeeking),i.removeEventListener("ended",this.onMediaEnded),this.keyLoader&&!n&&this.keyLoader.detach(),this.media=this.mediaBuffer=null,this.loopSn=void 0,n){this.resetLoadingState(),this.resetTransmuxer();return}this.loadingParts=!1,this.fragmentTracker.removeAllFragments(),this.stopLoad()}}onManifestLoading(){this.initPTS=[],this.levels=this.levelLastLoaded=this.fragCurrent=null,this.lastCurrentTime=this.startPosition=0,this.startFragRequested=!1}onError(e,t){}onManifestLoaded(e,t){this.startTimeOffset=t.startTimeOffset}onHandlerDestroying(){this.stopLoad(),this.transmuxer&&(this.transmuxer.destroy(),this.transmuxer=null),super.onHandlerDestroying(),this.hls=this.onMediaSeeking=this.onMediaEnded=null}onHandlerDestroyed(){this.state=Y.STOPPED,this.fragmentLoader&&this.fragmentLoader.destroy(),this.keyLoader&&this.keyLoader.destroy(),this.decrypter&&this.decrypter.destroy(),this.hls=this.log=this.warn=this.decrypter=this.keyLoader=this.fragmentLoader=this.fragmentTracker=null,super.onHandlerDestroyed()}loadFragment(e,t,n){this.startFragRequested=!0,this._loadFragForPlayback(e,t,n)}_loadFragForPlayback(e,t,n){const i=r=>{const s=r.frag;if(this.fragContextChanged(s)){this.warn(`${s.type} sn: ${s.sn}${r.part?" part: "+r.part.index:""} of ${this.fragInfo(s,!1,r.part)}) was dropped during download.`),this.fragmentTracker.removeFragment(s);return}s.stats.chunkCount++,this._handleFragmentLoadProgress(r)};this._doFragLoad(e,t,n,i).then(r=>{if(!r)return;const s=this.state,o=r.frag;if(this.fragContextChanged(o)){(s===Y.FRAG_LOADING||!this.fragCurrent&&s===Y.PARSING)&&(this.fragmentTracker.removeFragment(o),this.state=Y.IDLE);return}"payload"in r&&(this.log(`Loaded ${o.type} sn: ${o.sn} of ${this.playlistLabel()} ${o.level}`),this.hls.trigger(T.FRAG_LOADED,r)),this._handleFragmentLoadComplete(r)}).catch(r=>{this.state===Y.STOPPED||this.state===Y.ERROR||(this.warn(`Frag error: ${(r==null?void 0:r.message)||r}`),this.resetFragmentLoading(e))})}clearTrackerIfNeeded(e){var t;const{fragmentTracker:n}=this;if(n.getState(e)===Ye.APPENDING){const r=e.type,s=this.getFwdBufferInfo(this.mediaBuffer,r),o=Math.max(e.duration,s?s.len:this.config.maxBufferLength),l=this.backtrackFragment;((l?e.sn-l.sn:0)===1||this.reduceMaxBufferLength(o,e.duration))&&n.removeFragment(e)}else((t=this.mediaBuffer)==null?void 0:t.buffered.length)===0?n.removeAllFragments():n.hasParts(e.type)&&(n.detectPartialFragments({frag:e,part:null,stats:e.stats,id:e.type}),n.getState(e)===Ye.PARTIAL&&n.removeFragment(e))}checkLiveUpdate(e){if(e.updated&&!e.live){const t=e.fragments[e.fragments.length-1];this.fragmentTracker.detectPartialFragments({frag:t,part:null,stats:t.stats,id:t.type})}e.fragments[0]||(e.deltaUpdateFailed=!0)}waitForLive(e){const t=e.details;return(t==null?void 0:t.live)&&t.type!=="EVENT"&&(this.levelLastLoaded!==e||t.expired)}flushMainBuffer(e,t,n=null){if(!(e-t))return;const i={startOffset:e,endOffset:t,type:n};this.hls.trigger(T.BUFFER_FLUSHING,i)}_loadInitSegment(e,t){this._doFragLoad(e,t).then(n=>{const i=n==null?void 0:n.frag;if(!i||this.fragContextChanged(i)||!this.levels)throw new Error("init load aborted");return n}).then(n=>{const{hls:i}=this,{frag:r,payload:s}=n,o=r.decryptdata;if(s&&s.byteLength>0&&o!=null&&o.key&&o.iv&&Yt(o.method)){const l=self.performance.now();return this.decrypter.decrypt(new Uint8Array(s),o.key.buffer,o.iv.buffer,Rr(o.method)).catch(d=>{throw i.trigger(T.ERROR,{type:ae.MEDIA_ERROR,details:G.FRAG_DECRYPT_ERROR,fatal:!1,error:d,reason:d.message,frag:r}),d}).then(d=>{const c=self.performance.now();return i.trigger(T.FRAG_DECRYPTED,{frag:r,payload:d,stats:{tstart:l,tdecrypt:c}}),n.payload=d,this.completeInitSegmentLoad(n)})}return this.completeInitSegmentLoad(n)}).catch(n=>{this.state===Y.STOPPED||this.state===Y.ERROR||(this.warn(n),this.resetFragmentLoading(e))})}completeInitSegmentLoad(e){const{levels:t}=this;if(!t)throw new Error("init load aborted, missing levels");const n=e.frag.stats;this.state!==Y.STOPPED&&(this.state=Y.IDLE),e.frag.data=new Uint8Array(e.payload),n.parsing.start=n.buffering.start=self.performance.now(),n.parsing.end=n.buffering.end=self.performance.now(),this.tick()}fragContextChanged(e){const{fragCurrent:t}=this;return!e||!t||e.sn!==t.sn||e.level!==t.level}fragBufferedComplete(e,t){const n=this.mediaBuffer?this.mediaBuffer:this.media;if(this.log(`Buffered ${e.type} sn: ${e.sn}${t?" part: "+t.index:""} of ${this.fragInfo(e,!1,t)} > buffer:${n?vu.toString(Ee.getBuffered(n)):"(detached)"})`),Ge(e)){var i;if(e.type!==ce.SUBTITLE){const s=e.elementaryStreams;if(!Object.keys(s).some(o=>!!s[o])){this.state=Y.IDLE;return}}const r=(i=this.levels)==null?void 0:i[e.level];r!=null&&r.fragmentError&&(this.log(`Resetting level fragment error count of ${r.fragmentError} on frag buffered`),r.fragmentError=0)}this.state=Y.IDLE}_handleFragmentLoadComplete(e){const{transmuxer:t}=this;if(!t)return;const{frag:n,part:i,partsLoaded:r}=e,s=!r||r.length===0||r.some(l=>!l),o=new Ba(n.level,n.sn,n.stats.chunkCount+1,0,i?i.index:-1,!s);t.flush(o)}_handleFragmentLoadProgress(e){}_doFragLoad(e,t,n=null,i){var r;this.fragCurrent=e;const s=t==null?void 0:t.details;if(!this.levels||!s)throw new Error(`frag load aborted, missing level${s?"":" detail"}s`);let o=null;e.encrypted&&!((r=e.decryptdata)!=null&&r.key)?(this.log(`Loading key for ${e.sn} of [${s.startSN}-${s.endSN}], ${this.playlistLabel()} ${e.level}`),this.state=Y.KEY_LOADING,this.fragCurrent=e,o=this.keyLoader.load(e).then(u=>{if(!this.fragContextChanged(u.frag))return this.hls.trigger(T.KEY_LOADED,u),this.state===Y.KEY_LOADING&&(this.state=Y.IDLE),u}),this.hls.trigger(T.KEY_LOADING,{frag:e}),this.fragCurrent===null&&(o=Promise.reject(new Error("frag load aborted, context changed in KEY_LOADING")))):!e.encrypted&&s.encryptedFragments.length&&this.keyLoader.loadClear(e,s.encryptedFragments);const l=this.fragPrevious;if(Ge(e)&&(!l||e.sn!==l.sn)){const u=this.shouldLoadParts(t.details,e.end);u!==this.loadingParts&&(this.log(`LL-Part loading ${u?"ON":"OFF"} loading sn ${l==null?void 0:l.sn}->${e.sn}`),this.loadingParts=u)}if(n=Math.max(e.start,n||0),this.loadingParts&&Ge(e)){const u=s.partList;if(u&&i){n>e.end&&s.fragmentHint&&(e=s.fragmentHint);const h=this.getNextPart(u,e,n);if(h>-1){const y=u[h];e=this.fragCurrent=y.fragment,this.log(`Loading ${e.type} sn: ${e.sn} part: ${y.index} (${h}/${u.length-1}) of ${this.fragInfo(e,!1,y)}) cc: ${e.cc} [${s.startSN}-${s.endSN}], target: ${parseFloat(n.toFixed(3))}`),this.nextLoadPosition=y.start+y.duration,this.state=Y.FRAG_LOADING;let A;return o?A=o.then(v=>!v||this.fragContextChanged(v.frag)?null:this.doFragPartsLoad(e,y,t,i)).catch(v=>this.handleFragLoadError(v)):A=this.doFragPartsLoad(e,y,t,i).catch(v=>this.handleFragLoadError(v)),this.hls.trigger(T.FRAG_LOADING,{frag:e,part:y,targetBufferTime:n}),this.fragCurrent===null?Promise.reject(new Error("frag load aborted, context changed in FRAG_LOADING parts")):A}else if(!e.url||this.loadedEndOfParts(u,n))return Promise.resolve(null)}}if(Ge(e)&&this.loadingParts)this.log(`LL-Part loading OFF after next part miss @${n.toFixed(2)}`),this.loadingParts=!1;else if(!e.url)return Promise.resolve(null);this.log(`Loading ${e.type} sn: ${e.sn} of ${this.fragInfo(e,!1)}) cc: ${e.cc} ${s?"["+s.startSN+"-"+s.endSN+"]":""}, target: ${parseFloat(n.toFixed(3))}`),te(e.sn)&&!this.bitrateTest&&(this.nextLoadPosition=e.start+e.duration),this.state=Y.FRAG_LOADING;const d=this.config.progressive;let c;return d&&o?c=o.then(u=>!u||this.fragContextChanged(u==null?void 0:u.frag)?null:this.fragmentLoader.load(e,i)).catch(u=>this.handleFragLoadError(u)):c=Promise.all([this.fragmentLoader.load(e,d?i:void 0),o]).then(([u])=>(!d&&u&&i&&i(u),u)).catch(u=>this.handleFragLoadError(u)),this.hls.trigger(T.FRAG_LOADING,{frag:e,targetBufferTime:n}),this.fragCurrent===null?Promise.reject(new Error("frag load aborted, context changed in FRAG_LOADING")):c}doFragPartsLoad(e,t,n,i){return new Promise((r,s)=>{var o;const l=[],d=(o=n.details)==null?void 0:o.partList,c=u=>{this.fragmentLoader.loadPart(e,u,i).then(h=>{l[u.index]=h;const y=h.part;this.hls.trigger(T.FRAG_LOADED,h);const A=zs(n.details,e.sn,u.index+1)||Na(d,e.sn,u.index+1);if(A)c(A);else return r({frag:e,part:y,partsLoaded:l})}).catch(s)};c(t)})}handleFragLoadError(e){if("data"in e){const t=e.data;e.data&&t.details===G.INTERNAL_ABORTED?this.handleFragLoadAborted(t.frag,t.part):this.hls.trigger(T.ERROR,t)}else this.hls.trigger(T.ERROR,{type:ae.OTHER_ERROR,details:G.INTERNAL_EXCEPTION,err:e,error:e,fatal:!0});return null}_handleTransmuxerFlush(e){const t=this.getCurrentContext(e);if(!t||this.state!==Y.PARSING){!this.fragCurrent&&this.state!==Y.STOPPED&&this.state!==Y.ERROR&&(this.state=Y.IDLE);return}const{frag:n,part:i,level:r}=t,s=self.performance.now();n.stats.parsing.end=s,i&&(i.stats.parsing.end=s);const o=this.getLevelDetails(),d=o&&n.sn>o.endSN||this.shouldLoadParts(o,n.end);d!==this.loadingParts&&(this.log(`LL-Part loading ${d?"ON":"OFF"} after parsing segment ending @${n.end.toFixed(2)}`),this.loadingParts=d),this.updateLevelTiming(n,i,r,e.partial)}shouldLoadParts(e,t){if(this.config.lowLatencyMode){if(!e)return this.loadingParts;if(e!=null&&e.partList){var n;const r=e.partList[0],s=r.end+(((n=e.fragmentHint)==null?void 0:n.duration)||0);if(t>=s){var i;if((this.hls.hasEnoughToStart?((i=this.media)==null?void 0:i.currentTime)||this.lastCurrentTime:this.getLoadPosition())>r.start-r.fragment.duration)return!0}}}return!1}getCurrentContext(e){const{levels:t,fragCurrent:n}=this,{level:i,sn:r,part:s}=e;if(!(t!=null&&t[i]))return this.warn(`Levels object was unset while buffering fragment ${r} of ${this.playlistLabel()} ${i}. The current chunk will not be buffered.`),null;const o=t[i],l=o.details,d=s>-1?zs(l,r,s):null,c=d?d.fragment:gu(l,r,n);return c?(n&&n!==c&&(c.stats=n.stats),{frag:c,part:d,level:o}):null}bufferFragmentData(e,t,n,i,r){var s;if(!e||this.state!==Y.PARSING)return;const{data1:o,data2:l}=e;let d=o;if(o&&l&&(d=Ve(o,l)),!((s=d)!=null&&s.length))return;const c={type:e.type,frag:t,part:n,chunkMeta:i,parent:t.type,data:d};if(this.hls.trigger(T.BUFFER_APPENDING,c),e.dropped&&e.independent&&!n){if(r)return;this.flushBufferGap(t)}}flushBufferGap(e){const t=this.media;if(!t)return;if(!Ee.isBuffered(t,t.currentTime)){this.flushMainBuffer(0,e.start);return}const n=t.currentTime,i=Ee.bufferInfo(t,n,0),r=e.duration,s=Math.min(this.config.maxFragLookUpTolerance*2,r*.25),o=Math.max(Math.min(e.start-s,i.end-s),n+s);e.start-o>s&&this.flushMainBuffer(o,e.start)}getFwdBufferInfo(e,t){var n;const i=this.getLoadPosition();if(!te(i))return null;const s=this.lastCurrentTime>i||(n=this.media)!=null&&n.paused?0:this.config.maxBufferHole;return this.getFwdBufferInfoAtPos(e,i,t,s)}getFwdBufferInfoAtPos(e,t,n,i){const r=Ee.bufferInfo(e,t,i);if(r.len===0&&r.nextStart!==void 0){const s=this.fragmentTracker.getBufferedFrag(t,n);if(s&&(r.nextStart<=s.end||s.gap)){const o=Math.max(Math.min(r.nextStart,s.end)-t,i);return Ee.bufferInfo(e,t,o)}}return r}getMaxBufferLength(e){const{config:t}=this;let n;return e?n=Math.max(8*t.maxBufferSize/e,t.maxBufferLength):n=t.maxBufferLength,Math.min(n,t.maxMaxBufferLength)}reduceMaxBufferLength(e,t){const n=this.config,i=Math.max(Math.min(e-t,n.maxBufferLength),t),r=Math.max(e-t*3,n.maxMaxBufferLength/2,i);return r>=i?(n.maxMaxBufferLength=r,this.warn(`Reduce max buffer length to ${r}s`),!0):!1}getAppendedFrag(e,t=ce.MAIN){var n;const i=(n=this.fragmentTracker)==null?void 0:n.getAppendedFrag(e,t);return i&&"fragment"in i?i.fragment:i}getNextFragment(e,t){const n=t.fragments,i=n.length;if(!i)return null;const{config:r}=this,s=n[0].start,o=r.lowLatencyMode&&!!t.partList;let l=null;if(t.live){const u=r.initialLiveManifestSize;if(i<u)return this.warn(`Not enough fragments to start playback (have: ${i}, need: ${u})`),null;if(!t.PTSKnown&&!this.startFragRequested&&this.startPosition===-1||e<s){var d;o&&!this.loadingParts&&(this.log("LL-Part loading ON for initial live fragment"),this.loadingParts=!0),l=this.getInitialLiveFragment(t,n);const h=this.hls.startPosition,y=this.hls.liveSyncPosition,A=l?(h!==-1&&h>=s?h:y)||l.start:e;this.log(`Setting startPosition to ${A} to match start frag at live edge. mainStart: ${h} liveSyncPosition: ${y} frag.start: ${(d=l)==null?void 0:d.start}`),this.startPosition=this.nextLoadPosition=A}}else e<=s&&(l=n[0]);if(!l){const u=this.loadingParts?t.partEnd:t.fragmentEnd;l=this.getFragmentAtPosition(e,u,t)}let c=this.filterReplacedPrimary(l,t);if(!c&&l){const u=l.sn-t.startSN;c=this.filterReplacedPrimary(n[u+1]||null,t)}return this.mapToInitFragWhenRequired(c)}isLoopLoading(e,t){const n=this.fragmentTracker.getState(e);return(n===Ye.OK||n===Ye.PARTIAL&&!!e.gap)&&this.nextLoadPosition>t}getNextFragmentLoopLoading(e,t,n,i,r){let s=null;if(e.gap&&(s=this.getNextFragment(this.nextLoadPosition,t),s&&!s.gap&&n.nextStart)){const o=this.getFwdBufferInfoAtPos(this.mediaBuffer?this.mediaBuffer:this.media,n.nextStart,i,0);if(o!==null&&n.len+o.len>=r){const l=s.sn;return this.loopSn!==l&&(this.log(`buffer full after gaps in "${i}" playlist starting at sn: ${l}`),this.loopSn=l),null}}return this.loopSn=void 0,s}get primaryPrefetch(){if(Vs(this.hls.config)){var e,t;if((e=this.hls.interstitialsManager)==null||(t=e.playingItem)==null?void 0:t.event)return!0}return!1}filterReplacedPrimary(e,t){if(!e)return e;if(Vs(this.hls.config)&&e.type!==ce.SUBTITLE){const n=this.hls.interstitialsManager,i=n==null?void 0:n.bufferingItem;if(i){const s=i.event;if(s){if(s.appendInPlace||Math.abs(e.start-i.start)>1||i.start===0)return null}else if(e.end<=i.start&&(t==null?void 0:t.live)===!1||e.start>i.end&&i.nextEvent&&(i.nextEvent.appendInPlace||e.start-i.end>1))return null}const r=n==null?void 0:n.playerQueue;if(r)for(let s=r.length;s--;){const o=r[s].interstitial;if(o.appendInPlace&&e.start>=o.startTime&&e.end<=o.resumeTime)return null}}return e}mapToInitFragWhenRequired(e){return e!=null&&e.initSegment&&!(e!=null&&e.initSegment.data)&&!this.bitrateTest?e.initSegment:e}getNextPart(e,t,n){let i=-1,r=!1,s=!0;for(let o=0,l=e.length;o<l;o++){const d=e[o];if(s=s&&!d.independent,i>-1&&n<d.start)break;const c=d.loaded;c?i=-1:(r||d.independent||s)&&d.fragment===t&&(i=o),r=c}return i}loadedEndOfParts(e,t){const n=e[e.length-1];return n&&t>n.start&&n.loaded}getInitialLiveFragment(e,t){const n=this.fragPrevious;let i=null;if(n){if(e.hasProgramDateTime&&(this.log(`Live playlist, switching playlist, load frag with same PDT: ${n.programDateTime}`),i=Fc(t,n.endProgramDateTime,this.config.maxFragLookUpTolerance)),!i){const r=n.sn+1;if(r>=e.startSN&&r<=e.endSN){const s=t[r-e.startSN];n.cc===s.cc&&(i=s,this.log(`Live playlist, switching playlist, load frag with next SN: ${i.sn}`))}i||(i=Da(t,n.cc),i&&this.log(`Live playlist, switching playlist, load frag with same CC: ${i.sn}`))}}else{const r=this.hls.liveSyncPosition;r!==null&&(i=this.getFragmentAtPosition(r,this.bitrateTest?e.fragmentEnd:e.edge,e))}return i}getFragmentAtPosition(e,t,n){const{config:i}=this;let{fragPrevious:r}=this,{fragments:s,endSN:o}=n;const{fragmentHint:l}=n,{maxFragLookUpTolerance:d}=i,c=n.partList,u=!!(this.loadingParts&&c!=null&&c.length&&l);u&&l&&!this.bitrateTest&&c[c.length-1].fragment.sn===l.sn&&(s=s.concat(l),o=l.sn);let h;if(e<t){var y;const v=e<this.lastCurrentTime||e>t-d||(y=this.media)!=null&&y.paused||!this.startFragRequested?0:d;h=jt(r,s,e,v)}else h=s[s.length-1];if(h){const A=h.sn-n.startSN,v=this.fragmentTracker.getState(h);if((v===Ye.OK||v===Ye.PARTIAL&&h.gap)&&(r=h),r&&h.sn===r.sn&&(!u||c[0].fragment.sn>h.sn||!n.live&&!u)&&r&&h.level===r.level){const k=s[A+1];h.sn<o&&this.fragmentTracker.getState(k)!==Ye.OK?h=k:h=null}}return h}alignPlaylists(e,t,n){const i=e.fragments.length;if(!i)return this.warn("No fragments in live playlist"),0;const r=e.fragmentStart,s=!t,o=e.alignedSliding&&te(r);if(s||!o&&!r){bu(n,e);const l=e.fragmentStart;return this.log(`Live playlist sliding: ${l.toFixed(2)} start-sn: ${t?t.startSN:"na"}->${e.startSN} fragments: ${i}`),l}return r}waitForCdnTuneIn(e){return e.live&&e.canBlockReload&&e.partTarget&&e.tuneInGoal>Math.max(e.partHoldBack,e.partTarget*3)}setStartPosition(e,t){let n=this.startPosition;n<t&&(n=-1);const i=this.timelineOffset;if(n===-1){const r=this.startTimeOffset!==null,s=r?this.startTimeOffset:e.startTimeOffset;s!==null&&te(s)?(n=t+s,s<0&&(n+=e.edge),n=Math.min(Math.max(t,n),t+e.totalduration),this.log(`Setting startPosition to ${n} for start time offset ${s} found in ${r?"multivariant":"media"} playlist`),this.startPosition=n):e.live?(n=this.hls.liveSyncPosition||t,this.log(`Setting startPosition to -1 to start at live edge ${n}`),this.startPosition=-1):(this.log("setting startPosition to 0 by default"),this.startPosition=n=0),this.lastCurrentTime=n+i}this.nextLoadPosition=n+i}getLoadPosition(){var e;const{media:t}=this;let n=0;return(e=this.hls)!=null&&e.hasEnoughToStart&&t?n=t.currentTime:this.nextLoadPosition>=0&&(n=this.nextLoadPosition),n}handleFragLoadAborted(e,t){this.transmuxer&&e.type===this.playlistType&&Ge(e)&&e.stats.aborted&&(this.warn(`Fragment ${e.sn}${t?" part "+t.index:""} of ${this.playlistLabel()} ${e.level} was aborted`),this.resetFragmentLoading(e))}resetFragmentLoading(e){(!this.fragCurrent||!this.fragContextChanged(e)&&this.state!==Y.FRAG_LOADING_WAITING_RETRY)&&(this.state=Y.IDLE)}onFragmentOrKeyLoadError(e,t){if(t.chunkMeta&&!t.frag){const A=this.getCurrentContext(t.chunkMeta);A&&(t.frag=A.frag)}const n=t.frag;if(!n||n.type!==e||!this.levels)return;if(this.fragContextChanged(n)){var i;this.warn(`Frag load error must match current frag to retry ${n.url} > ${(i=this.fragCurrent)==null?void 0:i.url}`);return}const r=t.details===G.FRAG_GAP;r&&this.fragmentTracker.fragBuffered(n,!0);const s=t.errorAction,{action:o,flags:l,retryCount:d=0,retryConfig:c}=s||{},u=!!s&&!!c,h=u&&o===Pe.RetryRequest,y=u&&!s.resolved&&l===Qe.MoveAllAlternatesMatchingHost;if(!h&&y&&Ge(n)&&!n.endList)this.resetFragmentErrors(e),this.treatAsGap(n),s.resolved=!0;else if((h||y)&&d<c.maxNumRetry){this.resetStartWhenNotLoaded(this.levelLastLoaded);const A=Ir(c,d);this.warn(`Fragment ${n.sn} of ${e} ${n.level} errored with ${t.details}, retrying loading ${d+1}/${c.maxNumRetry} in ${A}ms`),s.resolved=!0,this.retryDate=self.performance.now()+A,this.state=Y.FRAG_LOADING_WAITING_RETRY}else if(c&&s)if(this.resetFragmentErrors(e),d<c.maxNumRetry)!r&&o!==Pe.RemoveAlternatePermanently&&(s.resolved=!0);else{this.warn(`${t.details} reached or exceeded max retry (${d})`);return}else o===Pe.SendAlternateToPenaltyBox?this.state=Y.WAITING_LEVEL:this.state=Y.ERROR;this.tickImmediate()}reduceLengthAndFlushBuffer(e){if(this.state===Y.PARSING||this.state===Y.PARSED){const t=e.frag,n=e.parent,i=this.getFwdBufferInfo(this.mediaBuffer,n),r=i&&i.len>.5;r&&this.reduceMaxBufferLength(i.len,(t==null?void 0:t.duration)||10);const s=!r;return s&&this.warn(`Buffer full error while media.currentTime is not buffered, flush ${n} buffer`),t&&(this.fragmentTracker.removeFragment(t),this.nextLoadPosition=t.start),this.resetLoadingState(),s}return!1}resetFragmentErrors(e){e===ce.AUDIO&&(this.fragCurrent=null),this.hls.hasEnoughToStart||(this.startFragRequested=!1),this.state!==Y.STOPPED&&(this.state=Y.IDLE)}afterBufferFlushed(e,t,n){if(!e)return;const i=Ee.getBuffered(e);this.fragmentTracker.detectEvictedFragments(t,i,n),this.state===Y.ENDED&&this.resetLoadingState()}resetLoadingState(){this.log("Reset loading state"),this.fragCurrent=null,this.fragPrevious=null,this.state!==Y.STOPPED&&(this.state=Y.IDLE)}resetStartWhenNotLoaded(e){if(!this.hls.hasEnoughToStart){this.startFragRequested=!1;const t=e?e.details:null;t!=null&&t.live?(this.log("resetting startPosition for live start"),this.startPosition=-1,this.setStartPosition(t,t.fragmentStart),this.resetLoadingState()):this.nextLoadPosition=this.startPosition}}resetWhenMissingContext(e){this.warn(`The loading context changed while buffering fragment ${e.sn} of ${this.playlistLabel()} ${e.level}. This chunk will not be buffered.`),this.removeUnbufferedFrags(),this.resetStartWhenNotLoaded(this.levelLastLoaded),this.resetLoadingState()}removeUnbufferedFrags(e=0){this.fragmentTracker.removeFragmentsInRange(e,1/0,this.playlistType,!1,!0)}updateLevelTiming(e,t,n,i){const r=n.details;if(!r){this.warn("level.details undefined");return}if(!Object.keys(e.elementaryStreams).reduce((l,d)=>{const c=e.elementaryStreams[d];if(c){const u=c.endPTS-c.startPTS;if(u<=0)return this.warn(`Could not parse fragment ${e.sn} ${d} duration reliably (${u})`),l||!1;const h=i?0:Fa(r,e,c.startPTS,c.endPTS,c.startDTS,c.endDTS);return this.hls.trigger(T.LEVEL_PTS_UPDATED,{details:r,level:n,drift:h,type:d,frag:e,start:c.startPTS,end:c.endPTS}),!0}return l},!1)){var o;if(n.fragmentError===0&&this.treatAsGap(e,n),((o=this.transmuxer)==null?void 0:o.error)===null){const l=new Error(`Found no media in fragment ${e.sn} of ${this.playlistLabel()} ${e.level} resetting transmuxer to fallback to playlist timing`);if(this.warn(l.message),this.hls.trigger(T.ERROR,{type:ae.MEDIA_ERROR,details:G.FRAG_PARSING_ERROR,fatal:!1,error:l,frag:e,reason:`Found no media in msn ${e.sn} of ${this.playlistLabel()} "${n.url}"`}),!this.hls)return;this.resetTransmuxer()}}this.state=Y.PARSED,this.log(`Parsed ${e.type} sn: ${e.sn}${t?" part: "+t.index:""} of ${this.fragInfo(e,!1,t)})`),this.hls.trigger(T.FRAG_PARSED,{frag:e,part:t})}playlistLabel(){return this.playlistType===ce.MAIN?"level":"track"}fragInfo(e,t=!0,n){var i,r;return`${this.playlistLabel()} ${e.level} (${n?"part":"frag"}:[${((i=t&&!n?e.startPTS:(n||e).start)!=null?i:NaN).toFixed(3)}-${((r=t&&!n?e.endPTS:(n||e).end)!=null?r:NaN).toFixed(3)}]${n&&e.type==="main"?"INDEPENDENT="+(n.independent?"YES":"NO"):""}`}treatAsGap(e,t){t&&t.fragmentError++,e.gap=!0,this.fragmentTracker.removeFragment(e),this.fragmentTracker.fragBuffered(e,!0)}resetTransmuxer(){var e;(e=this.transmuxer)==null||e.reset()}recoverWorkerError(e){e.event==="demuxerWorker"&&(this.fragmentTracker.removeAllFragments(),this.transmuxer&&(this.transmuxer.destroy(),this.transmuxer=null),this.resetStartWhenNotLoaded(this.levelLastLoaded),this.resetLoadingState())}set state(e){const t=this._state;t!==e&&(this._state=e,this.log(`${t}->${e}`))}get state(){return this._state}}function Vs(a){return!!a.interstitialsController&&a.enableInterstitialPlayback!==!1}class xu{constructor(){this.chunks=[],this.dataLength=0}push(e){this.chunks.push(e),this.dataLength+=e.length}flush(){const{chunks:e,dataLength:t}=this;let n;if(e.length)e.length===1?n=e[0]:n=Eu(e,t);else return new Uint8Array(0);return this.reset(),n}reset(){this.chunks.length=0,this.dataLength=0}}function Eu(a,e){const t=new Uint8Array(e);let n=0;for(let i=0;i<a.length;i++){const r=a[i];t.set(r,n),n+=r.length}return t}var tr={exports:{}},Ws;function Su(){return Ws||(Ws=1,function(a){var e=Object.prototype.hasOwnProperty,t="~";function n(){}Object.create&&(n.prototype=Object.create(null),new n().__proto__||(t=!1));function i(l,d,c){this.fn=l,this.context=d,this.once=c||!1}function r(l,d,c,u,h){if(typeof c!="function")throw new TypeError("The listener must be a function");var y=new i(c,u||l,h),A=t?t+d:d;return l._events[A]?l._events[A].fn?l._events[A]=[l._events[A],y]:l._events[A].push(y):(l._events[A]=y,l._eventsCount++),l}function s(l,d){--l._eventsCount===0?l._events=new n:delete l._events[d]}function o(){this._events=new n,this._eventsCount=0}o.prototype.eventNames=function(){var d=[],c,u;if(this._eventsCount===0)return d;for(u in c=this._events)e.call(c,u)&&d.push(t?u.slice(1):u);return Object.getOwnPropertySymbols?d.concat(Object.getOwnPropertySymbols(c)):d},o.prototype.listeners=function(d){var c=t?t+d:d,u=this._events[c];if(!u)return[];if(u.fn)return[u.fn];for(var h=0,y=u.length,A=new Array(y);h<y;h++)A[h]=u[h].fn;return A},o.prototype.listenerCount=function(d){var c=t?t+d:d,u=this._events[c];return u?u.fn?1:u.length:0},o.prototype.emit=function(d,c,u,h,y,A){var v=t?t+d:d;if(!this._events[v])return!1;var S=this._events[v],k=arguments.length,I,R;if(S.fn){switch(S.once&&this.removeListener(d,S.fn,void 0,!0),k){case 1:return S.fn.call(S.context),!0;case 2:return S.fn.call(S.context,c),!0;case 3:return S.fn.call(S.context,c,u),!0;case 4:return S.fn.call(S.context,c,u,h),!0;case 5:return S.fn.call(S.context,c,u,h,y),!0;case 6:return S.fn.call(S.context,c,u,h,y,A),!0}for(R=1,I=new Array(k-1);R<k;R++)I[R-1]=arguments[R];S.fn.apply(S.context,I)}else{var _=S.length,L;for(R=0;R<_;R++)switch(S[R].once&&this.removeListener(d,S[R].fn,void 0,!0),k){case 1:S[R].fn.call(S[R].context);break;case 2:S[R].fn.call(S[R].context,c);break;case 3:S[R].fn.call(S[R].context,c,u);break;case 4:S[R].fn.call(S[R].context,c,u,h);break;default:if(!I)for(L=1,I=new Array(k-1);L<k;L++)I[L-1]=arguments[L];S[R].fn.apply(S[R].context,I)}}return!0},o.prototype.on=function(d,c,u){return r(this,d,c,u,!1)},o.prototype.once=function(d,c,u){return r(this,d,c,u,!0)},o.prototype.removeListener=function(d,c,u,h){var y=t?t+d:d;if(!this._events[y])return this;if(!c)return s(this,y),this;var A=this._events[y];if(A.fn)A.fn===c&&(!h||A.once)&&(!u||A.context===u)&&s(this,y);else{for(var v=0,S=[],k=A.length;v<k;v++)(A[v].fn!==c||h&&!A[v].once||u&&A[v].context!==u)&&S.push(A[v]);S.length?this._events[y]=S.length===1?S[0]:S:s(this,y)}return this},o.prototype.removeAllListeners=function(d){var c;return d?(c=t?t+d:d,this._events[c]&&s(this,c)):(this._events=new n,this._eventsCount=0),this},o.prototype.off=o.prototype.removeListener,o.prototype.addListener=o.prototype.on,o.prefixed=t,o.EventEmitter=o,a.exports=o}(tr)),tr.exports}var Tu=Su(),qa=Qd(Tu);const Ti="1.6.0",Qt={};function Cu(){return typeof __HLS_WORKER_BUNDLE__=="function"}function wu(){const a=Qt[Ti];if(a)return a.clientCount++,a;const e=new self.Blob([`var exports={};var module={exports:exports};function define(f){f()};define.amd=true;(${__HLS_WORKER_BUNDLE__.toString()})(true);`],{type:"text/javascript"}),t=self.URL.createObjectURL(e),i={worker:new self.Worker(t),objectURL:t,clientCount:1};return Qt[Ti]=i,i}function ku(a){const e=Qt[a];if(e)return e.clientCount++,e;const t=new self.URL(a,self.location.href).href,i={worker:new self.Worker(t),scriptURL:t,clientCount:1};return Qt[a]=i,i}function Iu(a){const e=Qt[a||Ti];if(e&&e.clientCount--===1){const{worker:n,objectURL:i}=e;delete Qt[a||Ti],i&&self.URL.revokeObjectURL(i),n.terminate()}}function Ka(a,e){return e+10<=a.length&&a[e]===51&&a[e+1]===68&&a[e+2]===73&&a[e+3]<255&&a[e+4]<255&&a[e+6]<128&&a[e+7]<128&&a[e+8]<128&&a[e+9]<128}function Dr(a,e){return e+10<=a.length&&a[e]===73&&a[e+1]===68&&a[e+2]===51&&a[e+3]<255&&a[e+4]<255&&a[e+6]<128&&a[e+7]<128&&a[e+8]<128&&a[e+9]<128}function Li(a,e){let t=0;return t=(a[e]&127)<<21,t|=(a[e+1]&127)<<14,t|=(a[e+2]&127)<<7,t|=a[e+3]&127,t}function Un(a,e){const t=e;let n=0;for(;Dr(a,e);){n+=10;const i=Li(a,e+6);n+=i,Ka(a,e+10)&&(n+=10),e+=n}if(n>0)return a.subarray(t,t+n)}function Lu(a,e,t,n){const i=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350],r=e[t+2],s=r>>2&15;if(s>12){const y=new Error(`invalid ADTS sampling index:${s}`);a.emit(T.ERROR,T.ERROR,{type:ae.MEDIA_ERROR,details:G.FRAG_PARSING_ERROR,fatal:!0,error:y,reason:y.message});return}const o=(r>>6&3)+1,l=e[t+3]>>6&3|(r&1)<<2,d="mp4a.40."+o,c=i[s];let u=s;(o===5||o===29)&&(u-=3);const h=[o<<3|(u&14)>>1,(u&1)<<7|l<<3];return be.log(`manifest codec:${n}, parsed codec:${d}, channels:${l}, rate:${c} (ADTS object type:${o} sampling index:${s})`),{config:h,samplerate:c,channelCount:l,codec:d,parsedCodec:d,manifestCodec:n}}function Ha(a,e){return a[e]===255&&(a[e+1]&246)===240}function za(a,e){return a[e+1]&1?7:9}function Br(a,e){return(a[e+3]&3)<<11|a[e+4]<<3|(a[e+5]&224)>>>5}function Ru(a,e){return e+5<a.length}function Ci(a,e){return e+1<a.length&&Ha(a,e)}function _u(a,e){return Ru(a,e)&&Ha(a,e)&&Br(a,e)<=a.length-e}function Du(a,e){if(Ci(a,e)){const t=za(a,e);if(e+t>=a.length)return!1;const n=Br(a,e);if(n<=t)return!1;const i=e+n;return i===a.length||Ci(a,i)}return!1}function Ya(a,e,t,n,i){if(!a.samplerate){const r=Lu(e,t,n,i);if(!r)return;Te(a,r)}}function Va(a){return 1024*9e4/a}function Bu(a,e){const t=za(a,e);if(e+t<=a.length){const n=Br(a,e)-t;if(n>0)return{headerLength:t,frameLength:n}}}function Wa(a,e,t,n,i){const r=Va(a.samplerate),s=n+i*r,o=Bu(e,t);let l;if(o){const{frameLength:u,headerLength:h}=o,y=h+u,A=Math.max(0,t+y-e.length);A?(l=new Uint8Array(y-h),l.set(e.subarray(t+h,e.length),0)):l=e.subarray(t+h,t+y);const v={unit:l,pts:s};return A||a.samples.push(v),{sample:v,length:y,missing:A}}const d=e.length-t;return l=new Uint8Array(d),l.set(e.subarray(t,e.length),0),{sample:{unit:l,pts:s},length:d,missing:-1}}function Pu(a,e){return Dr(a,e)&&Li(a,e+6)+10<=a.length-e}function Ou(a){if(a.size<2)return;const e=qe(a.data,!0),t=new Uint8Array(a.data.subarray(e.length+1));return{key:a.type,info:e,data:t.buffer}}function Fu(a){if(a.size<2)return;if(a.type==="TXXX"){let t=1;const n=qe(a.data.subarray(t),!0);t+=n.length+1;const i=qe(a.data.subarray(t));return{key:a.type,info:n,data:i}}const e=qe(a.data.subarray(1));return{key:a.type,info:"",data:e}}function Mu(a){if(a.type==="WXXX"){if(a.size<2)return;let t=1;const n=qe(a.data.subarray(t),!0);t+=n.length+1;const i=qe(a.data.subarray(t));return{key:a.type,info:n,data:i}}const e=qe(a.data);return{key:a.type,info:"",data:e}}function Nu(a){return btoa(String.fromCharCode(...a))}function ja(a,e){if(a<0)return-ja(-a,e);const t=Math.pow(10,e);if(Math.abs(a*t%1-.5)<Number.EPSILON){const i=Math.floor(a*t);return(i%2===0?i:i+1)/t}else return Math.round(a*t)/t}function Uu(a,e){const t=new URL(a),n=new URL(e);if(t.origin!==n.origin)return a;const i=t.pathname.split("/").slice(1),r=n.pathname.split("/").slice(1,-1);for(;i[0]===r[0];)i.shift(),r.shift();for(;r.length;)r.shift(),i.unshift("..");return i.join("/")}function $u(a){return a instanceof ArrayBuffer?a:a.byteOffset==0&&a.byteLength==a.buffer.byteLength?a.buffer:new Uint8Array(a).buffer}function nr(a,e=0,t=1/0){return Gu(a,e,t,Uint8Array)}function Gu(a,e,t,n){const i=qu(a);let r=1;"BYTES_PER_ELEMENT"in n&&(r=n.BYTES_PER_ELEMENT);const s=Ku(a)?a.byteOffset:0,o=(s+a.byteLength)/r,l=(s+e)/r,d=Math.floor(Math.max(0,Math.min(l,o))),c=Math.floor(Math.min(d+Math.max(t,0),o));return new n(i,d,c-d)}function qu(a){return a instanceof ArrayBuffer?a:a.buffer}function Ku(a){return a&&a.buffer instanceof ArrayBuffer&&a.byteLength!==void 0&&a.byteOffset!==void 0}function Hu(a){const e={key:a.type,description:"",data:"",mimeType:null,pictureType:null},t=3;if(a.size<2)return;if(a.data[0]!==t){console.log("Ignore frame with unrecognized character encoding");return}const n=a.data.subarray(1).indexOf(0);if(n===-1)return;const i=qe(nr(a.data,1,n)),r=a.data[2+n],s=a.data.subarray(3+n).indexOf(0);if(s===-1)return;const o=qe(nr(a.data,3+n,s));let l;return i==="-->"?l=qe(nr(a.data,4+n+s)):l=$u(a.data.subarray(4+n+s)),e.mimeType=i,e.pictureType=r,e.description=o,e.data=l,e}function zu(a){return a.type==="PRIV"?Ou(a):a.type[0]==="W"?Mu(a):a.type==="APIC"?Hu(a):Fu(a)}function Yu(a){const e=String.fromCharCode(a[0],a[1],a[2],a[3]),t=Li(a,4),n=10;return{type:e,size:t,data:a.subarray(n,n+t)}}const si=10,Vu=10;function Wu(a){let e=0;const t=[];for(;Dr(a,e);){const n=Li(a,e+6);a[e+5]>>6&1&&(e+=si),e+=si;const i=e+n;for(;e+Vu<i;){const r=Yu(a.subarray(e)),s=zu(r);s&&t.push(s),e+=r.size+si}Ka(a,e)&&(e+=si)}return t}function ju(a){return a&&a.key==="PRIV"&&a.info==="com.apple.streaming.transportStreamTimestamp"}function Qu(a){if(a.data.byteLength===8){const e=new Uint8Array(a.data),t=e[3]&1;let n=(e[4]<<23)+(e[5]<<15)+(e[6]<<7)+e[7];return n/=45,t&&(n+=4772185884e-2),Math.round(n)}}function Pr(a){const e=Wu(a);for(let t=0;t<e.length;t++){const n=e[t];if(ju(n))return Qu(n)}}let Xt=function(a){return a.audioId3="org.id3",a.dateRange="com.apple.quicktime.HLS",a.emsg="https://aomedia.org/emsg/ID3",a.misbklv="urn:misb:KLV:bin:1910.1",a}({});function rt(a="",e=9e4){return{type:a,id:-1,pid:-1,inputTimeScale:e,sequenceNumber:-1,samples:[],dropped:0}}class Or{constructor(){this._audioTrack=void 0,this._id3Track=void 0,this.frameIndex=0,this.cachedData=null,this.basePTS=null,this.initPTS=null,this.lastPTS=null}resetInitSegment(e,t,n,i){this._id3Track={type:"id3",id:3,pid:-1,inputTimeScale:9e4,sequenceNumber:0,samples:[],dropped:0}}resetTimeStamp(e){this.initPTS=e,this.resetContiguity()}resetContiguity(){this.basePTS=null,this.lastPTS=null,this.frameIndex=0}canParse(e,t){return!1}appendFrame(e,t,n){}demux(e,t){this.cachedData&&(e=Ve(this.cachedData,e),this.cachedData=null);let n=Un(e,0),i=n?n.length:0,r;const s=this._audioTrack,o=this._id3Track,l=n?Pr(n):void 0,d=e.length;for((this.basePTS===null||this.frameIndex===0&&te(l))&&(this.basePTS=Xu(l,t,this.initPTS),this.lastPTS=this.basePTS),this.lastPTS===null&&(this.lastPTS=this.basePTS),n&&n.length>0&&o.samples.push({pts:this.lastPTS,dts:this.lastPTS,data:n,type:Xt.audioId3,duration:Number.POSITIVE_INFINITY});i<d;){if(this.canParse(e,i)){const c=this.appendFrame(s,e,i);c?(this.frameIndex++,this.lastPTS=c.sample.pts,i+=c.length,r=i):i=d}else Pu(e,i)?(n=Un(e,i),o.samples.push({pts:this.lastPTS,dts:this.lastPTS,data:n,type:Xt.audioId3,duration:Number.POSITIVE_INFINITY}),i+=n.length,r=i):i++;if(i===d&&r!==d){const c=e.slice(r);this.cachedData?this.cachedData=Ve(this.cachedData,c):this.cachedData=c}}return{audioTrack:s,videoTrack:rt(),id3Track:o,textTrack:rt()}}demuxSampleAes(e,t,n){return Promise.reject(new Error(`[${this}] This demuxer does not support Sample-AES decryption`))}flush(e){const t=this.cachedData;return t&&(this.cachedData=null,this.demux(t,0)),{audioTrack:this._audioTrack,videoTrack:rt(),id3Track:this._id3Track,textTrack:rt()}}destroy(){this.cachedData=null,this._audioTrack=this._id3Track=void 0}}const Xu=(a,e,t)=>{if(te(a))return a*90;const n=t?t.baseTime*9e4/t.timescale:0;return e*9e4+n};let ai=null;const Zu=[32,64,96,128,160,192,224,256,288,320,352,384,416,448,32,48,56,64,80,96,112,128,160,192,224,256,320,384,32,40,48,56,64,80,96,112,128,160,192,224,256,320,32,48,56,64,80,96,112,128,144,160,176,192,224,256,8,16,24,32,40,48,56,64,80,96,112,128,144,160],Ju=[44100,48e3,32e3,22050,24e3,16e3,11025,12e3,8e3],eh=[[0,72,144,12],[0,0,0,0],[0,72,144,12],[0,144,144,12]],th=[0,1,1,4];function Qa(a,e,t,n,i){if(t+24>e.length)return;const r=Xa(e,t);if(r&&t+r.frameLength<=e.length){const s=r.samplesPerFrame*9e4/r.sampleRate,o=n+i*s,l={unit:e.subarray(t,t+r.frameLength),pts:o,dts:o};return a.config=[],a.channelCount=r.channelCount,a.samplerate=r.sampleRate,a.samples.push(l),{sample:l,length:r.frameLength,missing:0}}}function Xa(a,e){const t=a[e+1]>>3&3,n=a[e+1]>>1&3,i=a[e+2]>>4&15,r=a[e+2]>>2&3;if(t!==1&&i!==0&&i!==15&&r!==3){const s=a[e+2]>>1&1,o=a[e+3]>>6,l=t===3?3-n:n===3?3:4,d=Zu[l*14+i-1]*1e3,u=Ju[(t===3?0:t===2?1:2)*3+r],h=o===3?1:2,y=eh[t][n],A=th[n],v=y*8*A,S=Math.floor(y*d/u+s)*A;if(ai===null){const R=(navigator.userAgent||"").match(/Chrome\/(\d+)/i);ai=R?parseInt(R[1]):0}return!!ai&&ai<=87&&n===2&&d>=224e3&&o===0&&(a[e+3]=a[e+3]|128),{sampleRate:u,channelCount:h,frameLength:S,samplesPerFrame:v}}}function Fr(a,e){return a[e]===255&&(a[e+1]&224)===224&&(a[e+1]&6)!==0}function Za(a,e){return e+1<a.length&&Fr(a,e)}function nh(a,e){return Fr(a,e)&&4<=a.length-e}function Ja(a,e){if(e+1<a.length&&Fr(a,e)){const n=Xa(a,e);let i=4;n!=null&&n.frameLength&&(i=n.frameLength);const r=e+i;return r===a.length||Za(a,r)}return!1}class ih extends Or{constructor(e,t){super(),this.observer=void 0,this.config=void 0,this.observer=e,this.config=t}resetInitSegment(e,t,n,i){super.resetInitSegment(e,t,n,i),this._audioTrack={container:"audio/adts",type:"audio",id:2,pid:-1,sequenceNumber:0,segmentCodec:"aac",samples:[],manifestCodec:t,duration:i,inputTimeScale:9e4,dropped:0}}static probe(e,t){if(!e)return!1;const n=Un(e,0);let i=(n==null?void 0:n.length)||0;if(Ja(e,i))return!1;for(let r=e.length;i<r;i++)if(Du(e,i))return t.log("ADTS sync word found !"),!0;return!1}canParse(e,t){return _u(e,t)}appendFrame(e,t,n){Ya(e,this.observer,t,n,e.manifestCodec);const i=Wa(e,t,n,this.basePTS,this.frameIndex);if(i&&i.missing===0)return i}}const eo=(a,e)=>{let t=0,n=5;e+=n;const i=new Uint32Array(1),r=new Uint32Array(1),s=new Uint8Array(1);for(;n>0;){s[0]=a[e];const o=Math.min(n,8),l=8-o;r[0]=4278190080>>>24+l<<l,i[0]=(s[0]&r[0])>>l,t=t?t<<o|i[0]:i[0],e+=1,n-=o}return t};class rh extends Or{constructor(e){super(),this.observer=void 0,this.observer=e}resetInitSegment(e,t,n,i){super.resetInitSegment(e,t,n,i),this._audioTrack={container:"audio/ac-3",type:"audio",id:2,pid:-1,sequenceNumber:0,segmentCodec:"ac3",samples:[],manifestCodec:t,duration:i,inputTimeScale:9e4,dropped:0}}canParse(e,t){return t+64<e.length}appendFrame(e,t,n){const i=to(e,t,n,this.basePTS,this.frameIndex);if(i!==-1)return{sample:e.samples[e.samples.length-1],length:i,missing:0}}static probe(e){if(!e)return!1;const t=Un(e,0);if(!t)return!1;const n=t.length;return e[n]===11&&e[n+1]===119&&Pr(t)!==void 0&&eo(e,n)<16}}function to(a,e,t,n,i){if(t+8>e.length||e[t]!==11||e[t+1]!==119)return-1;const r=e[t+4]>>6;if(r>=3)return-1;const o=[48e3,44100,32e3][r],l=e[t+4]&63,c=[64,69,96,64,70,96,80,87,120,80,88,120,96,104,144,96,105,144,112,121,168,112,122,168,128,139,192,128,140,192,160,174,240,160,175,240,192,208,288,192,209,288,224,243,336,224,244,336,256,278,384,256,279,384,320,348,480,320,349,480,384,417,576,384,418,576,448,487,672,448,488,672,512,557,768,512,558,768,640,696,960,640,697,960,768,835,1152,768,836,1152,896,975,1344,896,976,1344,1024,1114,1536,1024,1115,1536,1152,1253,1728,1152,1254,1728,1280,1393,1920,1280,1394,1920][l*3+r]*2;if(t+c>e.length)return-1;const u=e[t+6]>>5;let h=0;u===2?h+=2:(u&1&&u!==1&&(h+=2),u&4&&(h+=2));const y=(e[t+6]<<8|e[t+7])>>12-h&1,v=[2,1,2,3,3,4,4,5][u]+y,S=e[t+5]>>3,k=e[t+5]&7,I=new Uint8Array([r<<6|S<<1|k>>2,(k&3)<<6|u<<3|y<<2|l>>4,l<<4&224]),R=1536/o*9e4,_=n+i*R,L=e.subarray(t,t+c);return a.config=I,a.channelCount=v,a.samplerate=o,a.samples.push({unit:L,pts:_}),c}class sh extends Or{resetInitSegment(e,t,n,i){super.resetInitSegment(e,t,n,i),this._audioTrack={container:"audio/mpeg",type:"audio",id:2,pid:-1,sequenceNumber:0,segmentCodec:"mp3",samples:[],manifestCodec:t,duration:i,inputTimeScale:9e4,dropped:0}}static probe(e){if(!e)return!1;const t=Un(e,0);let n=(t==null?void 0:t.length)||0;if(t&&e[n]===11&&e[n+1]===119&&Pr(t)!==void 0&&eo(e,n)<=16)return!1;for(let i=e.length;n<i;n++)if(Ja(e,n))return be.log("MPEG Audio sync word found !"),!0;return!1}canParse(e,t){return nh(e,t)}appendFrame(e,t,n){if(this.basePTS!==null)return Qa(e,t,n,this.basePTS,this.frameIndex)}}const ah=/\/emsg[-/]ID3/i;class oh{constructor(e,t){this.remainderData=null,this.timeOffset=0,this.config=void 0,this.videoTrack=void 0,this.audioTrack=void 0,this.id3Track=void 0,this.txtTrack=void 0,this.config=t}resetTimeStamp(){}resetInitSegment(e,t,n,i){const r=this.videoTrack=rt("video",1),s=this.audioTrack=rt("audio",1),o=this.txtTrack=rt("text",1);if(this.id3Track=rt("id3",1),this.timeOffset=0,!(e!=null&&e.byteLength))return;const l=Ta(e);if(l.video){const{id:d,timescale:c,codec:u,supplemental:h}=l.video;r.id=d,r.timescale=o.timescale=c,r.codec=u,r.supplemental=h}if(l.audio){const{id:d,timescale:c,codec:u}=l.audio;s.id=d,s.timescale=c,s.codec=u}o.id=xa.text,r.sampleDuration=0,r.duration=s.duration=i}resetContiguity(){this.remainderData=null}static probe(e){return ec(e)}demux(e,t){this.timeOffset=t;let n=e;const i=this.videoTrack,r=this.txtTrack;if(this.config.progressive){this.remainderData&&(n=Ve(this.remainderData,e));const o=lc(n);this.remainderData=o.remainder,i.samples=o.valid||new Uint8Array}else i.samples=n;const s=this.extractID3Track(i,t);return r.samples=ws(t,i),{videoTrack:i,audioTrack:this.audioTrack,id3Track:s,textTrack:this.txtTrack}}flush(){const e=this.timeOffset,t=this.videoTrack,n=this.txtTrack;t.samples=this.remainderData||new Uint8Array,this.remainderData=null;const i=this.extractID3Track(t,this.timeOffset);return n.samples=ws(e,t),{videoTrack:t,audioTrack:rt(),id3Track:i,textTrack:rt()}}extractID3Track(e,t){const n=this.id3Track;if(e.samples.length){const i=oe(e.samples,["emsg"]);i&&i.forEach(r=>{const s=cc(r);if(ah.test(s.schemeIdUri)){const o=js(s,t);let l=s.eventDuration===4294967295?Number.POSITIVE_INFINITY:s.eventDuration/s.timeScale;l<=.001&&(l=Number.POSITIVE_INFINITY);const d=s.payload;n.samples.push({data:d,len:d.byteLength,dts:o,pts:o,type:Xt.emsg,duration:l})}else if(this.config.enableEmsgKLVMetadata&&s.schemeIdUri.startsWith("urn:misb:KLV:bin:1910.1")){const o=js(s,t);n.samples.push({data:s.payload,len:s.payload.byteLength,dts:o,pts:o,type:Xt.misbklv,duration:Number.POSITIVE_INFINITY})}})}return n}demuxSampleAes(e,t,n){return Promise.reject(new Error("The MP4 demuxer does not support SAMPLE-AES decryption"))}destroy(){this.config=null,this.remainderData=null,this.videoTrack=this.audioTrack=this.id3Track=this.txtTrack=void 0}}function js(a,e){return te(a.presentationTime)?a.presentationTime/a.timeScale:e+a.presentationTimeDelta/a.timeScale}class lh{constructor(e,t,n){this.keyData=void 0,this.decrypter=void 0,this.keyData=n,this.decrypter=new Lr(t,{removePKCS7Padding:!1})}decryptBuffer(e){return this.decrypter.decrypt(e,this.keyData.key.buffer,this.keyData.iv.buffer,Tt.cbc)}decryptAacSample(e,t,n){const i=e[t].unit;if(i.length<=16)return;const r=i.subarray(16,i.length-i.length%16),s=r.buffer.slice(r.byteOffset,r.byteOffset+r.length);this.decryptBuffer(s).then(o=>{const l=new Uint8Array(o);i.set(l,16),this.decrypter.isSync()||this.decryptAacSamples(e,t+1,n)})}decryptAacSamples(e,t,n){for(;;t++){if(t>=e.length){n();return}if(!(e[t].unit.length<32)&&(this.decryptAacSample(e,t,n),!this.decrypter.isSync()))return}}getAvcEncryptedData(e){const t=Math.floor((e.length-48)/160)*16+16,n=new Int8Array(t);let i=0;for(let r=32;r<e.length-16;r+=160,i+=16)n.set(e.subarray(r,r+16),i);return n}getAvcDecryptedUnit(e,t){const n=new Uint8Array(t);let i=0;for(let r=32;r<e.length-16;r+=160,i+=16)e.set(n.subarray(i,i+16),r);return e}decryptAvcSample(e,t,n,i,r){const s=wa(r.data),o=this.getAvcEncryptedData(s);this.decryptBuffer(o.buffer).then(l=>{r.data=this.getAvcDecryptedUnit(s,l),this.decrypter.isSync()||this.decryptAvcSamples(e,t,n+1,i)})}decryptAvcSamples(e,t,n,i){if(e instanceof Uint8Array)throw new Error("Cannot decrypt samples of type Uint8Array");for(;;t++,n=0){if(t>=e.length){i();return}const r=e[t].units;for(;!(n>=r.length);n++){const s=r[n];if(!(s.data.length<=48||s.type!==1&&s.type!==5)&&(this.decryptAvcSample(e,t,n,i,s),!this.decrypter.isSync()))return}}}}class no{constructor(){this.VideoSample=null}createVideoSample(e,t,n){return{key:e,frame:!1,pts:t,dts:n,units:[],length:0}}getLastNalUnit(e){var t;let n=this.VideoSample,i;if((!n||n.units.length===0)&&(n=e[e.length-1]),(t=n)!=null&&t.units){const r=n.units;i=r[r.length-1]}return i}pushAccessUnit(e,t){if(e.units.length&&e.frame){if(e.pts===void 0){const n=t.samples,i=n.length;if(i){const r=n[i-1];e.pts=r.pts,e.dts=r.dts}else{t.dropped++;return}}t.samples.push(e)}}parseNALu(e,t,n){const i=t.byteLength;let r=e.naluState||0;const s=r,o=[];let l=0,d,c,u,h=-1,y=0;for(r===-1&&(h=0,y=this.getNALuType(t,0),r=0,l=1);l<i;){if(d=t[l++],!r){r=d?0:1;continue}if(r===1){r=d?0:2;continue}if(!d)r=3;else if(d===1){if(c=l-r-1,h>=0){const A={data:t.subarray(h,c),type:y};o.push(A)}else{const A=this.getLastNalUnit(e.samples);A&&(s&&l<=4-s&&A.state&&(A.data=A.data.subarray(0,A.data.byteLength-s)),c>0&&(A.data=Ve(A.data,t.subarray(0,c)),A.state=0))}l<i?(u=this.getNALuType(t,l),h=l,y=u,r=0):r=-1}else r=0}if(h>=0&&r>=0){const A={data:t.subarray(h,i),type:y,state:r};o.push(A)}if(o.length===0){const A=this.getLastNalUnit(e.samples);A&&(A.data=Ve(A.data,t))}return e.naluState=r,o}}class On{constructor(e){this.data=void 0,this.bytesAvailable=void 0,this.word=void 0,this.bitsAvailable=void 0,this.data=e,this.bytesAvailable=e.byteLength,this.word=0,this.bitsAvailable=0}loadWord(){const e=this.data,t=this.bytesAvailable,n=e.byteLength-t,i=new Uint8Array(4),r=Math.min(4,t);if(r===0)throw new Error("no bytes available");i.set(e.subarray(n,n+r)),this.word=new DataView(i.buffer).getUint32(0),this.bitsAvailable=r*8,this.bytesAvailable-=r}skipBits(e){let t;e=Math.min(e,this.bytesAvailable*8+this.bitsAvailable),this.bitsAvailable>e?(this.word<<=e,this.bitsAvailable-=e):(e-=this.bitsAvailable,t=e>>3,e-=t<<3,this.bytesAvailable-=t,this.loadWord(),this.word<<=e,this.bitsAvailable-=e)}readBits(e){let t=Math.min(this.bitsAvailable,e);const n=this.word>>>32-t;if(e>32&&be.error("Cannot read more than 32 bits at a time"),this.bitsAvailable-=t,this.bitsAvailable>0)this.word<<=t;else if(this.bytesAvailable>0)this.loadWord();else throw new Error("no bits available");return t=e-t,t>0&&this.bitsAvailable?n<<t|this.readBits(t):n}skipLZ(){let e;for(e=0;e<this.bitsAvailable;++e)if(this.word&2147483648>>>e)return this.word<<=e,this.bitsAvailable-=e,e;return this.loadWord(),e+this.skipLZ()}skipUEG(){this.skipBits(1+this.skipLZ())}skipEG(){this.skipBits(1+this.skipLZ())}readUEG(){const e=this.skipLZ();return this.readBits(e+1)-1}readEG(){const e=this.readUEG();return 1&e?1+e>>>1:-1*(e>>>1)}readBoolean(){return this.readBits(1)===1}readUByte(){return this.readBits(8)}readUShort(){return this.readBits(16)}readUInt(){return this.readBits(32)}}class Qs extends no{parsePES(e,t,n,i){const r=this.parseNALu(e,n.data,i);let s=this.VideoSample,o,l=!1;n.data=null,s&&r.length&&!e.audFound&&(this.pushAccessUnit(s,e),s=this.VideoSample=this.createVideoSample(!1,n.pts,n.dts)),r.forEach(d=>{var c,u;switch(d.type){case 1:{let v=!1;o=!0;const S=d.data;if(l&&S.length>4){const k=this.readSliceType(S);(k===2||k===4||k===7||k===9)&&(v=!0)}if(v){var h;(h=s)!=null&&h.frame&&!s.key&&(this.pushAccessUnit(s,e),s=this.VideoSample=null)}s||(s=this.VideoSample=this.createVideoSample(!0,n.pts,n.dts)),s.frame=!0,s.key=v;break}case 5:o=!0,(c=s)!=null&&c.frame&&!s.key&&(this.pushAccessUnit(s,e),s=this.VideoSample=null),s||(s=this.VideoSample=this.createVideoSample(!0,n.pts,n.dts)),s.key=!0,s.frame=!0;break;case 6:{o=!0,wr(d.data,1,n.pts,t.samples);break}case 7:{var y,A;o=!0,l=!0;const v=d.data,S=this.readSPS(v);if(!e.sps||e.width!==S.width||e.height!==S.height||((y=e.pixelRatio)==null?void 0:y[0])!==S.pixelRatio[0]||((A=e.pixelRatio)==null?void 0:A[1])!==S.pixelRatio[1]){e.width=S.width,e.height=S.height,e.pixelRatio=S.pixelRatio,e.sps=[v];const k=v.subarray(1,4);let I="avc1.";for(let R=0;R<3;R++){let _=k[R].toString(16);_.length<2&&(_="0"+_),I+=_}e.codec=I}break}case 8:o=!0,e.pps=[d.data];break;case 9:o=!0,e.audFound=!0,(u=s)!=null&&u.frame&&(this.pushAccessUnit(s,e),s=null),s||(s=this.VideoSample=this.createVideoSample(!1,n.pts,n.dts));break;case 12:o=!0;break;default:o=!1;break}s&&o&&s.units.push(d)}),i&&s&&(this.pushAccessUnit(s,e),this.VideoSample=null)}getNALuType(e,t){return e[t]&31}readSliceType(e){const t=new On(e);return t.readUByte(),t.readUEG(),t.readUEG()}skipScalingList(e,t){let n=8,i=8,r;for(let s=0;s<e;s++)i!==0&&(r=t.readEG(),i=(n+r+256)%256),n=i===0?n:i}readSPS(e){const t=new On(e);let n=0,i=0,r=0,s=0,o,l,d;const c=t.readUByte.bind(t),u=t.readBits.bind(t),h=t.readUEG.bind(t),y=t.readBoolean.bind(t),A=t.skipBits.bind(t),v=t.skipEG.bind(t),S=t.skipUEG.bind(t),k=this.skipScalingList.bind(this);c();const I=c();if(u(5),A(3),c(),S(),I===100||I===110||I===122||I===244||I===44||I===83||I===86||I===118||I===128){const M=h();if(M===3&&A(1),S(),S(),A(1),y())for(l=M!==3?8:12,d=0;d<l;d++)y()&&(d<6?k(16,t):k(64,t))}S();const R=h();if(R===0)h();else if(R===1)for(A(1),v(),v(),o=h(),d=0;d<o;d++)v();S(),A(1);const _=h(),L=h(),F=u(1);F===0&&A(1),A(1),y()&&(n=h(),i=h(),r=h(),s=h());let B=[1,1];if(y()&&y())switch(c()){case 1:B=[1,1];break;case 2:B=[12,11];break;case 3:B=[10,11];break;case 4:B=[16,11];break;case 5:B=[40,33];break;case 6:B=[24,11];break;case 7:B=[20,11];break;case 8:B=[32,11];break;case 9:B=[80,33];break;case 10:B=[18,11];break;case 11:B=[15,11];break;case 12:B=[64,33];break;case 13:B=[160,99];break;case 14:B=[4,3];break;case 15:B=[3,2];break;case 16:B=[2,1];break;case 255:{B=[c()<<8|c(),c()<<8|c()];break}}return{width:Math.ceil((_+1)*16-n*2-i*2),height:(2-F)*(L+1)*16-(F?2:4)*(r+s),pixelRatio:B}}}class Xs extends no{constructor(...e){super(...e),this.initVPS=null}parsePES(e,t,n,i){const r=this.parseNALu(e,n.data,i);let s=this.VideoSample,o,l=!1;n.data=null,s&&r.length&&!e.audFound&&(this.pushAccessUnit(s,e),s=this.VideoSample=this.createVideoSample(!1,n.pts,n.dts)),r.forEach(d=>{var c,u;switch(d.type){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:s||(s=this.VideoSample=this.createVideoSample(!1,n.pts,n.dts)),s.frame=!0,o=!0;break;case 16:case 17:case 18:case 21:if(o=!0,l){var h;(h=s)!=null&&h.frame&&!s.key&&(this.pushAccessUnit(s,e),s=this.VideoSample=null)}s||(s=this.VideoSample=this.createVideoSample(!0,n.pts,n.dts)),s.key=!0,s.frame=!0;break;case 19:case 20:o=!0,(c=s)!=null&&c.frame&&!s.key&&(this.pushAccessUnit(s,e),s=this.VideoSample=null),s||(s=this.VideoSample=this.createVideoSample(!0,n.pts,n.dts)),s.key=!0,s.frame=!0;break;case 39:o=!0,wr(d.data,2,n.pts,t.samples);break;case 32:o=!0,e.vps||(typeof e.params!="object"&&(e.params={}),e.params=Te(e.params,this.readVPS(d.data)),this.initVPS=d.data),e.vps=[d.data];break;case 33:if(o=!0,l=!0,e.vps!==void 0&&e.vps[0]!==this.initVPS&&e.sps!==void 0&&!this.matchSPS(e.sps[0],d.data)&&(this.initVPS=e.vps[0],e.sps=e.pps=void 0),!e.sps){const y=this.readSPS(d.data);e.width=y.width,e.height=y.height,e.pixelRatio=y.pixelRatio,e.codec=y.codecString,e.sps=[],typeof e.params!="object"&&(e.params={});for(const A in y.params)e.params[A]=y.params[A]}this.pushParameterSet(e.sps,d.data,e.vps),s||(s=this.VideoSample=this.createVideoSample(!0,n.pts,n.dts)),s.key=!0;break;case 34:if(o=!0,typeof e.params=="object"){if(!e.pps){e.pps=[];const y=this.readPPS(d.data);for(const A in y)e.params[A]=y[A]}this.pushParameterSet(e.pps,d.data,e.vps)}break;case 35:o=!0,e.audFound=!0,(u=s)!=null&&u.frame&&(this.pushAccessUnit(s,e),s=null),s||(s=this.VideoSample=this.createVideoSample(!1,n.pts,n.dts));break;default:o=!1;break}s&&o&&s.units.push(d)}),i&&s&&(this.pushAccessUnit(s,e),this.VideoSample=null)}pushParameterSet(e,t,n){(n&&n[0]===this.initVPS||!n&&!e.length)&&e.push(t)}getNALuType(e,t){return(e[t]&126)>>>1}ebsp2rbsp(e){const t=new Uint8Array(e.byteLength);let n=0;for(let i=0;i<e.byteLength;i++)i>=2&&e[i]===3&&e[i-1]===0&&e[i-2]===0||(t[n]=e[i],n++);return new Uint8Array(t.buffer,0,n)}pushAccessUnit(e,t){super.pushAccessUnit(e,t),this.initVPS&&(this.initVPS=null)}readVPS(e){const t=new On(e);t.readUByte(),t.readUByte(),t.readBits(4),t.skipBits(2),t.readBits(6);const n=t.readBits(3),i=t.readBoolean();return{numTemporalLayers:n+1,temporalIdNested:i}}readSPS(e){const t=new On(this.ebsp2rbsp(e));t.readUByte(),t.readUByte(),t.readBits(4);const n=t.readBits(3);t.readBoolean();const i=t.readBits(2),r=t.readBoolean(),s=t.readBits(5),o=t.readUByte(),l=t.readUByte(),d=t.readUByte(),c=t.readUByte(),u=t.readUByte(),h=t.readUByte(),y=t.readUByte(),A=t.readUByte(),v=t.readUByte(),S=t.readUByte(),k=t.readUByte(),I=[],R=[];for(let ye=0;ye<n;ye++)I.push(t.readBoolean()),R.push(t.readBoolean());if(n>0)for(let ye=n;ye<8;ye++)t.readBits(2);for(let ye=0;ye<n;ye++)I[ye]&&(t.readUByte(),t.readUByte(),t.readUByte(),t.readUByte(),t.readUByte(),t.readUByte(),t.readUByte(),t.readUByte(),t.readUByte(),t.readUByte(),t.readUByte()),R[ye]&&t.readUByte();t.readUEG();const _=t.readUEG();_==3&&t.skipBits(1);const L=t.readUEG(),F=t.readUEG(),B=t.readBoolean();let M=0,q=0,P=0,K=0;B&&(M+=t.readUEG(),q+=t.readUEG(),P+=t.readUEG(),K+=t.readUEG());const Q=t.readUEG(),he=t.readUEG(),re=t.readUEG(),ue=t.readBoolean();for(let ye=ue?0:n;ye<=n;ye++)t.skipUEG(),t.skipUEG(),t.skipUEG();if(t.skipUEG(),t.skipUEG(),t.skipUEG(),t.skipUEG(),t.skipUEG(),t.skipUEG(),t.readBoolean()&&t.readBoolean())for(let De=0;De<4;De++)for(let Me=0;Me<(De===3?2:6);Me++)if(!t.readBoolean())t.readUEG();else{const $e=Math.min(64,1<<4+(De<<1));De>1&&t.readEG();for(let Ke=0;Ke<$e;Ke++)t.readEG()}t.readBoolean(),t.readBoolean(),t.readBoolean()&&(t.readUByte(),t.skipUEG(),t.skipUEG(),t.readBoolean());const me=t.readUEG();let U=0;for(let ye=0;ye<me;ye++){let De=!1;if(ye!==0&&(De=t.readBoolean()),De){ye===me&&t.readUEG(),t.readBoolean(),t.readUEG();let Me=0;for(let lt=0;lt<=U;lt++){const $e=t.readBoolean();let Ke=!1;$e||(Ke=t.readBoolean()),($e||Ke)&&Me++}U=Me}else{const Me=t.readUEG(),lt=t.readUEG();U=Me+lt;for(let $e=0;$e<Me;$e++)t.readUEG(),t.readBoolean();for(let $e=0;$e<lt;$e++)t.readUEG(),t.readBoolean()}}if(t.readBoolean()){const ye=t.readUEG();for(let De=0;De<ye;De++){for(let Me=0;Me<re+4;Me++)t.readBits(1);t.readBits(1)}}let ie=0,ne=1,de=1,fe=!0,ge=1,pe=0;t.readBoolean(),t.readBoolean();let ke=!1;if(t.readBoolean()){if(t.readBoolean()){const Xe=t.readUByte(),Pt=[1,12,10,16,40,24,20,32,80,18,15,64,160,4,3,2],wt=[1,11,11,11,33,11,11,11,33,11,11,33,99,3,2,1];Xe>0&&Xe<16?(ne=Pt[Xe-1],de=wt[Xe-1]):Xe===255&&(ne=t.readBits(16),de=t.readBits(16))}if(t.readBoolean()&&t.readBoolean(),t.readBoolean()&&(t.readBits(3),t.readBoolean(),t.readBoolean()&&(t.readUByte(),t.readUByte(),t.readUByte())),t.readBoolean()&&(t.readUEG(),t.readUEG()),t.readBoolean(),t.readBoolean(),t.readBoolean(),ke=t.readBoolean(),ke&&(M+=t.readUEG(),q+=t.readUEG(),P+=t.readUEG(),K+=t.readUEG()),t.readBoolean()&&(ge=t.readBits(32),pe=t.readBits(32),t.readBoolean()&&t.readUEG(),t.readBoolean())){const wt=t.readBoolean(),tn=t.readBoolean();let mt=!1;(wt||tn)&&(mt=t.readBoolean(),mt&&(t.readUByte(),t.readBits(5),t.readBoolean(),t.readBits(5)),t.readBits(4),t.readBits(4),mt&&t.readBits(4),t.readBits(5),t.readBits(5),t.readBits(5));for(let qn=0;qn<=n;qn++){fe=t.readBoolean();const _i=fe||t.readBoolean();let nn=!1;_i?t.readEG():nn=t.readBoolean();const Kn=nn?1:t.readUEG()+1;if(wt)for(let gt=0;gt<Kn;gt++)t.readUEG(),t.readUEG(),mt&&(t.readUEG(),t.readUEG()),t.skipBits(1);if(tn)for(let gt=0;gt<Kn;gt++)t.readUEG(),t.readUEG(),mt&&(t.readUEG(),t.readUEG()),t.skipBits(1)}}t.readBoolean()&&(t.readBoolean(),t.readBoolean(),t.readBoolean(),ie=t.readUEG())}let Fe=L,Jt=F;if(B||ke){let ye=1,De=1;_===1?ye=De=2:_==2&&(ye=2),Fe=L-ye*q-ye*M,Jt=F-De*K-De*P}const Ri=i?["A","B","C"][i]:"",ot=o<<24|l<<16|d<<8|c;let Bt=0;for(let ye=0;ye<32;ye++)Bt=(Bt|(ot>>ye&1)<<31-ye)>>>0;let Ct=Bt.toString(16);return s===1&&Ct==="2"&&(Ct="6"),{codecString:`hvc1.${Ri}${s}.${Ct}.${r?"H":"L"}${k}.B0`,params:{general_tier_flag:r,general_profile_idc:s,general_profile_space:i,general_profile_compatibility_flags:[o,l,d,c],general_constraint_indicator_flags:[u,h,y,A,v,S],general_level_idc:k,bit_depth:Q+8,bit_depth_luma_minus8:Q,bit_depth_chroma_minus8:he,min_spatial_segmentation_idc:ie,chroma_format_idc:_,frame_rate:{fixed:fe,fps:pe/ge}},width:Fe,height:Jt,pixelRatio:[ne,de]}}readPPS(e){const t=new On(this.ebsp2rbsp(e));t.readUByte(),t.readUByte(),t.skipUEG(),t.skipUEG(),t.skipBits(2),t.skipBits(3),t.skipBits(2),t.skipUEG(),t.skipUEG(),t.skipEG(),t.skipBits(2),t.readBoolean()&&t.skipUEG(),t.skipEG(),t.skipEG(),t.skipBits(4);const i=t.readBoolean(),r=t.readBoolean();let s=1;return r&&i?s=0:r?s=3:i&&(s=2),{parallelismType:s}}matchSPS(e,t){return String.fromCharCode.apply(null,e).substr(3)===String.fromCharCode.apply(null,t).substr(3)}}const Be=188;class St{constructor(e,t,n,i){this.logger=void 0,this.observer=void 0,this.config=void 0,this.typeSupported=void 0,this.sampleAes=null,this.pmtParsed=!1,this.audioCodec=void 0,this.videoCodec=void 0,this._pmtId=-1,this._videoTrack=void 0,this._audioTrack=void 0,this._id3Track=void 0,this._txtTrack=void 0,this.aacOverFlow=null,this.remainderData=null,this.videoParser=void 0,this.observer=e,this.config=t,this.typeSupported=n,this.logger=i,this.videoParser=null}static probe(e,t){const n=St.syncOffset(e);return n>0&&t.warn(`MPEG2-TS detected but first sync word found @ offset ${n}`),n!==-1}static syncOffset(e){const t=e.length;let n=Math.min(Be*5,t-Be)+1,i=0;for(;i<n;){let r=!1,s=-1,o=0;for(let l=i;l<t;l+=Be)if(e[l]===71&&(t-l===Be||e[l+Be]===71)){if(o++,s===-1&&(s=l,s!==0&&(n=Math.min(s+Be*99,e.length-Be)+1)),r||(r=br(e,l)===0),r&&o>1&&(s===0&&o>2||l+Be>n))return s}else{if(o)return-1;break}i++}return-1}static createTrack(e,t){return{container:e==="video"||e==="audio"?"video/mp2t":void 0,type:e,id:xa[e],pid:-1,inputTimeScale:9e4,sequenceNumber:0,samples:[],dropped:0,duration:e==="audio"?t:void 0}}resetInitSegment(e,t,n,i){this.pmtParsed=!1,this._pmtId=-1,this._videoTrack=St.createTrack("video"),this._videoTrack.duration=i,this._audioTrack=St.createTrack("audio",i),this._id3Track=St.createTrack("id3"),this._txtTrack=St.createTrack("text"),this._audioTrack.segmentCodec="aac",this.aacOverFlow=null,this.remainderData=null,this.audioCodec=t,this.videoCodec=n}resetTimeStamp(){}resetContiguity(){const{_audioTrack:e,_videoTrack:t,_id3Track:n}=this;e&&(e.pesData=null),t&&(t.pesData=null),n&&(n.pesData=null),this.aacOverFlow=null,this.remainderData=null}demux(e,t,n=!1,i=!1){n||(this.sampleAes=null);let r;const s=this._videoTrack,o=this._audioTrack,l=this._id3Track,d=this._txtTrack;let c=s.pid,u=s.pesData,h=o.pid,y=l.pid,A=o.pesData,v=l.pesData,S=null,k=this.pmtParsed,I=this._pmtId,R=e.length;if(this.remainderData&&(e=Ve(this.remainderData,e),R=e.length,this.remainderData=null),R<Be&&!i)return this.remainderData=e,{audioTrack:o,videoTrack:s,id3Track:l,textTrack:d};const _=Math.max(0,St.syncOffset(e));R-=(R-_)%Be,R<e.byteLength&&!i&&(this.remainderData=new Uint8Array(e.buffer,R,e.buffer.byteLength-R));let L=0;for(let B=_;B<R;B+=Be)if(e[B]===71){const M=!!(e[B+1]&64),q=br(e,B),P=(e[B+3]&48)>>4;let K;if(P>1){if(K=B+5+e[B+4],K===B+Be)continue}else K=B+4;switch(q){case c:if(M){if(u&&(r=Ht(u,this.logger))){if(this.videoParser===null)switch(s.segmentCodec){case"avc":this.videoParser=new Qs;break;case"hevc":this.videoParser=new Xs;break}this.videoParser!==null&&this.videoParser.parsePES(s,d,r,!1)}u={data:[],size:0}}u&&(u.data.push(e.subarray(K,B+Be)),u.size+=B+Be-K);break;case h:if(M){if(A&&(r=Ht(A,this.logger)))switch(o.segmentCodec){case"aac":this.parseAACPES(o,r);break;case"mp3":this.parseMPEGPES(o,r);break;case"ac3":this.parseAC3PES(o,r);break}A={data:[],size:0}}A&&(A.data.push(e.subarray(K,B+Be)),A.size+=B+Be-K);break;case y:M&&(v&&(r=Ht(v,this.logger))&&this.parseID3PES(l,r),v={data:[],size:0}),v&&(v.data.push(e.subarray(K,B+Be)),v.size+=B+Be-K);break;case 0:M&&(K+=e[K]+1),I=this._pmtId=dh(e,K);break;case I:{M&&(K+=e[K]+1);const Q=ch(e,K,this.typeSupported,n,this.observer,this.logger);c=Q.videoPid,c>0&&(s.pid=c,s.segmentCodec=Q.segmentVideoCodec),h=Q.audioPid,h>0&&(o.pid=h,o.segmentCodec=Q.segmentAudioCodec),y=Q.id3Pid,y>0&&(l.pid=y),S!==null&&!k&&(this.logger.warn(`MPEG-TS PMT found at ${B} after unknown PID '${S}'. Backtracking to sync byte @${_} to parse all TS packets.`),S=null,B=_-188),k=this.pmtParsed=!0;break}case 17:case 8191:break;default:S=q;break}}else L++;L>0&&vr(this.observer,new Error(`Found ${L} TS packet/s that do not start with 0x47`),void 0,this.logger),s.pesData=u,o.pesData=A,l.pesData=v;const F={audioTrack:o,videoTrack:s,id3Track:l,textTrack:d};return i&&this.extractRemainingSamples(F),F}flush(){const{remainderData:e}=this;this.remainderData=null;let t;return e?t=this.demux(e,-1,!1,!0):t={videoTrack:this._videoTrack,audioTrack:this._audioTrack,id3Track:this._id3Track,textTrack:this._txtTrack},this.extractRemainingSamples(t),this.sampleAes?this.decrypt(t,this.sampleAes):t}extractRemainingSamples(e){const{audioTrack:t,videoTrack:n,id3Track:i,textTrack:r}=e,s=n.pesData,o=t.pesData,l=i.pesData;let d;if(s&&(d=Ht(s,this.logger))){if(this.videoParser===null)switch(n.segmentCodec){case"avc":this.videoParser=new Qs;break;case"hevc":this.videoParser=new Xs;break}this.videoParser!==null&&(this.videoParser.parsePES(n,r,d,!0),n.pesData=null)}else n.pesData=s;if(o&&(d=Ht(o,this.logger))){switch(t.segmentCodec){case"aac":this.parseAACPES(t,d);break;case"mp3":this.parseMPEGPES(t,d);break;case"ac3":this.parseAC3PES(t,d);break}t.pesData=null}else o!=null&&o.size&&this.logger.log("last AAC PES packet truncated,might overlap between fragments"),t.pesData=o;l&&(d=Ht(l,this.logger))?(this.parseID3PES(i,d),i.pesData=null):i.pesData=l}demuxSampleAes(e,t,n){const i=this.demux(e,n,!0,!this.config.progressive),r=this.sampleAes=new lh(this.observer,this.config,t);return this.decrypt(i,r)}decrypt(e,t){return new Promise(n=>{const{audioTrack:i,videoTrack:r}=e;i.samples&&i.segmentCodec==="aac"?t.decryptAacSamples(i.samples,0,()=>{r.samples?t.decryptAvcSamples(r.samples,0,0,()=>{n(e)}):n(e)}):r.samples&&t.decryptAvcSamples(r.samples,0,0,()=>{n(e)})})}destroy(){this.observer&&this.observer.removeAllListeners(),this.config=this.logger=this.observer=null,this.aacOverFlow=this.videoParser=this.remainderData=this.sampleAes=null,this._videoTrack=this._audioTrack=this._id3Track=this._txtTrack=void 0}parseAACPES(e,t){let n=0;const i=this.aacOverFlow;let r=t.data;if(i){this.aacOverFlow=null;const u=i.missing,h=i.sample.unit.byteLength;if(u===-1)r=Ve(i.sample.unit,r);else{const y=h-u;i.sample.unit.set(r.subarray(0,u),y),e.samples.push(i.sample),n=i.missing}}let s,o;for(s=n,o=r.length;s<o-1&&!Ci(r,s);s++);if(s!==n){let u;const h=s<o-1;if(h?u=`AAC PES did not start with ADTS header,offset:${s}`:u="No ADTS header found in AAC PES",vr(this.observer,new Error(u),h,this.logger),!h)return}Ya(e,this.observer,r,s,this.audioCodec);let l;if(t.pts!==void 0)l=t.pts;else if(i){const u=Va(e.samplerate);l=i.sample.pts+u}else{this.logger.warn("[tsdemuxer]: AAC PES unknown PTS");return}let d=0,c;for(;s<o;)if(c=Wa(e,r,s,l,d),s+=c.length,c.missing){this.aacOverFlow=c;break}else for(d++;s<o-1&&!Ci(r,s);s++);}parseMPEGPES(e,t){const n=t.data,i=n.length;let r=0,s=0;const o=t.pts;if(o===void 0){this.logger.warn("[tsdemuxer]: MPEG PES unknown PTS");return}for(;s<i;)if(Za(n,s)){const l=Qa(e,n,s,o,r);if(l)s+=l.length,r++;else break}else s++}parseAC3PES(e,t){{const n=t.data,i=t.pts;if(i===void 0){this.logger.warn("[tsdemuxer]: AC3 PES unknown PTS");return}const r=n.length;let s=0,o=0,l;for(;o<r&&(l=to(e,n,o,i,s++))>0;)o+=l}}parseID3PES(e,t){if(t.pts===void 0){this.logger.warn("[tsdemuxer]: ID3 PES unknown PTS");return}const n=Te({},t,{type:this._videoTrack?Xt.emsg:Xt.audioId3,duration:Number.POSITIVE_INFINITY});e.samples.push(n)}}function br(a,e){return((a[e+1]&31)<<8)+a[e+2]}function dh(a,e){return(a[e+10]&31)<<8|a[e+11]}function ch(a,e,t,n,i,r){const s={audioPid:-1,videoPid:-1,id3Pid:-1,segmentVideoCodec:"avc",segmentAudioCodec:"aac"},o=(a[e+1]&15)<<8|a[e+2],l=e+3+o-4,d=(a[e+10]&15)<<8|a[e+11];for(e+=12+d;e<l;){const c=br(a,e),u=(a[e+3]&15)<<8|a[e+4];switch(a[e]){case 207:if(!n){ir("ADTS AAC",r);break}case 15:s.audioPid===-1&&(s.audioPid=c);break;case 21:s.id3Pid===-1&&(s.id3Pid=c);break;case 219:if(!n){ir("H.264",r);break}case 27:s.videoPid===-1&&(s.videoPid=c);break;case 3:case 4:!t.mpeg&&!t.mp3?r.log("MPEG audio found, not supported in this browser"):s.audioPid===-1&&(s.audioPid=c,s.segmentAudioCodec="mp3");break;case 193:if(!n){ir("AC-3",r);break}case 129:t.ac3?s.audioPid===-1&&(s.audioPid=c,s.segmentAudioCodec="ac3"):r.log("AC-3 audio found, not supported in this browser");break;case 6:if(s.audioPid===-1&&u>0){let h=e+5,y=u;for(;y>2;){switch(a[h]){case 106:t.ac3!==!0?r.log("AC-3 audio found, not supported in this browser for now"):(s.audioPid=c,s.segmentAudioCodec="ac3");break}const v=a[h+1]+2;h+=v,y-=v}}break;case 194:case 135:return vr(i,new Error("Unsupported EC-3 in M2TS found"),void 0,r),s;case 36:s.videoPid===-1&&(s.videoPid=c,s.segmentVideoCodec="hevc",r.log("HEVC in M2TS found"));break}e+=u+5}return s}function vr(a,e,t,n){n.warn(`parsing error: ${e.message}`),a.emit(T.ERROR,T.ERROR,{type:ae.MEDIA_ERROR,details:G.FRAG_PARSING_ERROR,fatal:!1,levelRetry:t,error:e,reason:e.message})}function ir(a,e){e.log(`${a} with AES-128-CBC encryption found in unencrypted stream`)}function Ht(a,e){let t=0,n,i,r,s,o;const l=a.data;if(!a||a.size===0)return null;for(;l[0].length<19&&l.length>1;)l[0]=Ve(l[0],l[1]),l.splice(1,1);if(n=l[0],(n[0]<<16)+(n[1]<<8)+n[2]===1){if(i=(n[4]<<8)+n[5],i&&i>a.size-6)return null;const c=n[7];c&192&&(s=(n[9]&14)*536870912+(n[10]&255)*4194304+(n[11]&254)*16384+(n[12]&255)*128+(n[13]&254)/2,c&64?(o=(n[14]&14)*536870912+(n[15]&255)*4194304+(n[16]&254)*16384+(n[17]&255)*128+(n[18]&254)/2,s-o>60*9e4&&(e.warn(`${Math.round((s-o)/9e4)}s delta between PTS and DTS, align them`),s=o)):o=s),r=n[8];let u=r+9;if(a.size<=u)return null;a.size-=u;const h=new Uint8Array(a.size);for(let y=0,A=l.length;y<A;y++){n=l[y];let v=n.byteLength;if(u)if(u>v){u-=v;continue}else n=n.subarray(u),v-=u,u=0;h.set(n,t),t+=v}return i&&(i-=r+3),{data:h,pts:s,dts:o,len:i}}return null}class uh{static getSilentFrame(e,t){switch(e){case"mp4a.40.2":if(t===1)return new Uint8Array([0,200,0,128,35,128]);if(t===2)return new Uint8Array([33,0,73,144,2,25,0,35,128]);if(t===3)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,142]);if(t===4)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,128,44,128,8,2,56]);if(t===5)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,130,48,4,153,0,33,144,2,56]);if(t===6)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,130,48,4,153,0,33,144,2,0,178,0,32,8,224]);break;default:if(t===1)return new Uint8Array([1,64,34,128,163,78,230,128,186,8,0,0,0,28,6,241,193,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94]);if(t===2)return new Uint8Array([1,64,34,128,163,94,230,128,186,8,0,0,0,0,149,0,6,241,161,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94]);if(t===3)return new Uint8Array([1,64,34,128,163,94,230,128,186,8,0,0,0,0,149,0,6,241,161,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94]);break}}}const vt=Math.pow(2,32)-1;class D{static init(){D.types={avc1:[],avcC:[],hvc1:[],hvcC:[],btrt:[],dinf:[],dref:[],esds:[],ftyp:[],hdlr:[],mdat:[],mdhd:[],mdia:[],mfhd:[],minf:[],moof:[],moov:[],mp4a:[],".mp3":[],dac3:[],"ac-3":[],mvex:[],mvhd:[],pasp:[],sdtp:[],stbl:[],stco:[],stsc:[],stsd:[],stsz:[],stts:[],tfdt:[],tfhd:[],traf:[],trak:[],trun:[],trex:[],tkhd:[],vmhd:[],smhd:[]};let e;for(e in D.types)D.types.hasOwnProperty(e)&&(D.types[e]=[e.charCodeAt(0),e.charCodeAt(1),e.charCodeAt(2),e.charCodeAt(3)]);const t=new Uint8Array([0,0,0,0,0,0,0,0,118,105,100,101,0,0,0,0,0,0,0,0,0,0,0,0,86,105,100,101,111,72,97,110,100,108,101,114,0]),n=new Uint8Array([0,0,0,0,0,0,0,0,115,111,117,110,0,0,0,0,0,0,0,0,0,0,0,0,83,111,117,110,100,72,97,110,100,108,101,114,0]);D.HDLR_TYPES={video:t,audio:n};const i=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,12,117,114,108,32,0,0,0,1]),r=new Uint8Array([0,0,0,0,0,0,0,0]);D.STTS=D.STSC=D.STCO=r,D.STSZ=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0]),D.VMHD=new Uint8Array([0,0,0,1,0,0,0,0,0,0,0,0]),D.SMHD=new Uint8Array([0,0,0,0,0,0,0,0]),D.STSD=new Uint8Array([0,0,0,0,0,0,0,1]);const s=new Uint8Array([105,115,111,109]),o=new Uint8Array([97,118,99,49]),l=new Uint8Array([0,0,0,1]);D.FTYP=D.box(D.types.ftyp,s,l,s,o),D.DINF=D.box(D.types.dinf,D.box(D.types.dref,i))}static box(e,...t){let n=8,i=t.length;const r=i;for(;i--;)n+=t[i].byteLength;const s=new Uint8Array(n);for(s[0]=n>>24&255,s[1]=n>>16&255,s[2]=n>>8&255,s[3]=n&255,s.set(e,4),i=0,n=8;i<r;i++)s.set(t[i],n),n+=t[i].byteLength;return s}static hdlr(e){return D.box(D.types.hdlr,D.HDLR_TYPES[e])}static mdat(e){return D.box(D.types.mdat,e)}static mdhd(e,t){t*=e;const n=Math.floor(t/(vt+1)),i=Math.floor(t%(vt+1));return D.box(D.types.mdhd,new Uint8Array([1,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,e>>24&255,e>>16&255,e>>8&255,e&255,n>>24,n>>16&255,n>>8&255,n&255,i>>24,i>>16&255,i>>8&255,i&255,85,196,0,0]))}static mdia(e){return D.box(D.types.mdia,D.mdhd(e.timescale||0,e.duration||0),D.hdlr(e.type),D.minf(e))}static mfhd(e){return D.box(D.types.mfhd,new Uint8Array([0,0,0,0,e>>24,e>>16&255,e>>8&255,e&255]))}static minf(e){return e.type==="audio"?D.box(D.types.minf,D.box(D.types.smhd,D.SMHD),D.DINF,D.stbl(e)):D.box(D.types.minf,D.box(D.types.vmhd,D.VMHD),D.DINF,D.stbl(e))}static moof(e,t,n){return D.box(D.types.moof,D.mfhd(e),D.traf(n,t))}static moov(e){let t=e.length;const n=[];for(;t--;)n[t]=D.trak(e[t]);return D.box.apply(null,[D.types.moov,D.mvhd(e[0].timescale||0,e[0].duration||0)].concat(n).concat(D.mvex(e)))}static mvex(e){let t=e.length;const n=[];for(;t--;)n[t]=D.trex(e[t]);return D.box.apply(null,[D.types.mvex,...n])}static mvhd(e,t){t*=e;const n=Math.floor(t/(vt+1)),i=Math.floor(t%(vt+1)),r=new Uint8Array([1,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,e>>24&255,e>>16&255,e>>8&255,e&255,n>>24,n>>16&255,n>>8&255,n&255,i>>24,i>>16&255,i>>8&255,i&255,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,255,255,255]);return D.box(D.types.mvhd,r)}static sdtp(e){const t=e.samples||[],n=new Uint8Array(4+t.length);let i,r;for(i=0;i<t.length;i++)r=t[i].flags,n[i+4]=r.dependsOn<<4|r.isDependedOn<<2|r.hasRedundancy;return D.box(D.types.sdtp,n)}static stbl(e){return D.box(D.types.stbl,D.stsd(e),D.box(D.types.stts,D.STTS),D.box(D.types.stsc,D.STSC),D.box(D.types.stsz,D.STSZ),D.box(D.types.stco,D.STCO))}static avc1(e){let t=[],n=[],i,r,s;for(i=0;i<e.sps.length;i++)r=e.sps[i],s=r.byteLength,t.push(s>>>8&255),t.push(s&255),t=t.concat(Array.prototype.slice.call(r));for(i=0;i<e.pps.length;i++)r=e.pps[i],s=r.byteLength,n.push(s>>>8&255),n.push(s&255),n=n.concat(Array.prototype.slice.call(r));const o=D.box(D.types.avcC,new Uint8Array([1,t[3],t[4],t[5],255,224|e.sps.length].concat(t).concat([e.pps.length]).concat(n))),l=e.width,d=e.height,c=e.pixelRatio[0],u=e.pixelRatio[1];return D.box(D.types.avc1,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,l>>8&255,l&255,d>>8&255,d&255,0,72,0,0,0,72,0,0,0,0,0,0,0,1,18,100,97,105,108,121,109,111,116,105,111,110,47,104,108,115,46,106,115,0,0,0,0,0,0,0,0,0,0,0,0,0,0,24,17,17]),o,D.box(D.types.btrt,new Uint8Array([0,28,156,128,0,45,198,192,0,45,198,192])),D.box(D.types.pasp,new Uint8Array([c>>24,c>>16&255,c>>8&255,c&255,u>>24,u>>16&255,u>>8&255,u&255])))}static esds(e){const t=e.config;return new Uint8Array([0,0,0,0,3,25,0,1,0,4,17,64,21,0,0,0,0,0,0,0,0,0,0,0,5,2,...t,6,1,2])}static audioStsd(e){const t=e.samplerate||0;return new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,e.channelCount||0,0,16,0,0,0,0,t>>8&255,t&255,0,0])}static mp4a(e){return D.box(D.types.mp4a,D.audioStsd(e),D.box(D.types.esds,D.esds(e)))}static mp3(e){return D.box(D.types[".mp3"],D.audioStsd(e))}static ac3(e){return D.box(D.types["ac-3"],D.audioStsd(e),D.box(D.types.dac3,e.config))}static stsd(e){const{segmentCodec:t}=e;if(e.type==="audio"){if(t==="aac")return D.box(D.types.stsd,D.STSD,D.mp4a(e));if(t==="ac3"&&e.config)return D.box(D.types.stsd,D.STSD,D.ac3(e));if(t==="mp3"&&e.codec==="mp3")return D.box(D.types.stsd,D.STSD,D.mp3(e))}else if(e.pps&&e.sps){if(t==="avc")return D.box(D.types.stsd,D.STSD,D.avc1(e));if(t==="hevc"&&e.vps)return D.box(D.types.stsd,D.STSD,D.hvc1(e))}else throw new Error("video track missing pps or sps");throw new Error(`unsupported ${e.type} segment codec (${t}/${e.codec})`)}static tkhd(e){const t=e.id,n=(e.duration||0)*(e.timescale||0),i=e.width||0,r=e.height||0,s=Math.floor(n/(vt+1)),o=Math.floor(n%(vt+1));return D.box(D.types.tkhd,new Uint8Array([1,0,0,7,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,t>>24&255,t>>16&255,t>>8&255,t&255,0,0,0,0,s>>24,s>>16&255,s>>8&255,s&255,o>>24,o>>16&255,o>>8&255,o&255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,i>>8&255,i&255,0,0,r>>8&255,r&255,0,0]))}static traf(e,t){const n=D.sdtp(e),i=e.id,r=Math.floor(t/(vt+1)),s=Math.floor(t%(vt+1));return D.box(D.types.traf,D.box(D.types.tfhd,new Uint8Array([0,0,0,0,i>>24,i>>16&255,i>>8&255,i&255])),D.box(D.types.tfdt,new Uint8Array([1,0,0,0,r>>24,r>>16&255,r>>8&255,r&255,s>>24,s>>16&255,s>>8&255,s&255])),D.trun(e,n.length+16+20+8+16+8+8),n)}static trak(e){return e.duration=e.duration||4294967295,D.box(D.types.trak,D.tkhd(e),D.mdia(e))}static trex(e){const t=e.id;return D.box(D.types.trex,new Uint8Array([0,0,0,0,t>>24,t>>16&255,t>>8&255,t&255,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1]))}static trun(e,t){const n=e.samples||[],i=n.length,r=12+16*i,s=new Uint8Array(r);let o,l,d,c,u,h;for(t+=8+r,s.set([e.type==="video"?1:0,0,15,1,i>>>24&255,i>>>16&255,i>>>8&255,i&255,t>>>24&255,t>>>16&255,t>>>8&255,t&255],0),o=0;o<i;o++)l=n[o],d=l.duration,c=l.size,u=l.flags,h=l.cts,s.set([d>>>24&255,d>>>16&255,d>>>8&255,d&255,c>>>24&255,c>>>16&255,c>>>8&255,c&255,u.isLeading<<2|u.dependsOn,u.isDependedOn<<6|u.hasRedundancy<<4|u.paddingValue<<1|u.isNonSync,u.degradPrio&61440,u.degradPrio&15,h>>>24&255,h>>>16&255,h>>>8&255,h&255],12+16*o);return D.box(D.types.trun,s)}static initSegment(e){D.types||D.init();const t=D.moov(e);return Ve(D.FTYP,t)}static hvc1(e){const t=e.params,n=[e.vps,e.sps,e.pps],i=4,r=new Uint8Array([1,t.general_profile_space<<6|(t.general_tier_flag?32:0)|t.general_profile_idc,t.general_profile_compatibility_flags[0],t.general_profile_compatibility_flags[1],t.general_profile_compatibility_flags[2],t.general_profile_compatibility_flags[3],t.general_constraint_indicator_flags[0],t.general_constraint_indicator_flags[1],t.general_constraint_indicator_flags[2],t.general_constraint_indicator_flags[3],t.general_constraint_indicator_flags[4],t.general_constraint_indicator_flags[5],t.general_level_idc,240|t.min_spatial_segmentation_idc>>8,255&t.min_spatial_segmentation_idc,252|t.parallelismType,252|t.chroma_format_idc,248|t.bit_depth_luma_minus8,248|t.bit_depth_chroma_minus8,0,parseInt(t.frame_rate.fps),i-1|t.temporal_id_nested<<2|t.num_temporal_layers<<3|(t.frame_rate.fixed?64:0),n.length]);let s=r.length;for(let A=0;A<n.length;A+=1){s+=3;for(let v=0;v<n[A].length;v+=1)s+=2+n[A][v].length}const o=new Uint8Array(s);o.set(r,0),s=r.length;const l=n.length-1;for(let A=0;A<n.length;A+=1){o.set(new Uint8Array([32+A|(A===l?128:0),0,n[A].length]),s),s+=3;for(let v=0;v<n[A].length;v+=1)o.set(new Uint8Array([n[A][v].length>>8,n[A][v].length&255]),s),s+=2,o.set(n[A][v],s),s+=n[A][v].length}const d=D.box(D.types.hvcC,o),c=e.width,u=e.height,h=e.pixelRatio[0],y=e.pixelRatio[1];return D.box(D.types.hvc1,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,c>>8&255,c&255,u>>8&255,u&255,0,72,0,0,0,72,0,0,0,0,0,0,0,1,18,100,97,105,108,121,109,111,116,105,111,110,47,104,108,115,46,106,115,0,0,0,0,0,0,0,0,0,0,0,0,0,0,24,17,17]),d,D.box(D.types.btrt,new Uint8Array([0,28,156,128,0,45,198,192,0,45,198,192])),D.box(D.types.pasp,new Uint8Array([h>>24,h>>16&255,h>>8&255,h&255,y>>24,y>>16&255,y>>8&255,y&255])))}}D.types=void 0;D.HDLR_TYPES=void 0;D.STTS=void 0;D.STSC=void 0;D.STCO=void 0;D.STSZ=void 0;D.VMHD=void 0;D.SMHD=void 0;D.STSD=void 0;D.FTYP=void 0;D.DINF=void 0;const io=9e4;function Mr(a,e,t=1,n=!1){const i=a*e*t;return n?Math.round(i):i}function hh(a,e,t=1,n=!1){return Mr(a,e,1/t,n)}function Rn(a,e=!1){return Mr(a,1e3,1/io,e)}function fh(a,e=1){return Mr(a,io,1/e)}const ph=10*1e3,mh=1024,gh=1152,yh=1536;let zt=null,rr=null;function Zs(a,e,t,n){return{duration:e,size:t,cts:n,flags:{isLeading:0,isDependedOn:0,hasRedundancy:0,degradPrio:0,dependsOn:a?2:1,isNonSync:a?0:1}}}class fi{constructor(e,t,n,i){if(this.logger=void 0,this.observer=void 0,this.config=void 0,this.typeSupported=void 0,this.ISGenerated=!1,this._initPTS=null,this._initDTS=null,this.nextAvcDts=null,this.nextAudioPts=null,this.videoSampleDuration=null,this.isAudioContiguous=!1,this.isVideoContiguous=!1,this.videoTrackConfig=void 0,this.observer=e,this.config=t,this.typeSupported=n,this.logger=i,this.ISGenerated=!1,zt===null){const s=(navigator.userAgent||"").match(/Chrome\/(\d+)/i);zt=s?parseInt(s[1]):0}if(rr===null){const r=navigator.userAgent.match(/Safari\/(\d+)/i);rr=r?parseInt(r[1]):0}}destroy(){this.config=this.videoTrackConfig=this._initPTS=this._initDTS=null}resetTimeStamp(e){this.logger.log("[mp4-remuxer]: initPTS & initDTS reset"),this._initPTS=this._initDTS=e}resetNextTimestamp(){this.logger.log("[mp4-remuxer]: reset next timestamp"),this.isVideoContiguous=!1,this.isAudioContiguous=!1}resetInitSegment(){this.logger.log("[mp4-remuxer]: ISGenerated flag reset"),this.ISGenerated=!1,this.videoTrackConfig=void 0}getVideoStartPts(e){let t=!1;const n=e[0].pts,i=e.reduce((r,s)=>{let o=s.pts,l=o-r;return l<-4294967296&&(t=!0,o=ze(o,n),l=o-r),l>0?r:o},n);return t&&this.logger.debug("PTS rollover detected"),i}remux(e,t,n,i,r,s,o,l){let d,c,u,h,y,A,v=r,S=r;const k=e.pid>-1,I=t.pid>-1,R=t.samples.length,_=e.samples.length>0,L=o&&R>0||R>1;if((!k||_)&&(!I||L)||this.ISGenerated||o){if(this.ISGenerated){var B,M,q,P;const re=this.videoTrackConfig;(re&&(t.width!==re.width||t.height!==re.height||((B=t.pixelRatio)==null?void 0:B[0])!==((M=re.pixelRatio)==null?void 0:M[0])||((q=t.pixelRatio)==null?void 0:q[1])!==((P=re.pixelRatio)==null?void 0:P[1]))||!re&&L||this.nextAudioPts===null&&_)&&this.resetInitSegment()}this.ISGenerated||(u=this.generateIS(e,t,r,s));const K=this.isVideoContiguous;let Q=-1,he;if(L&&(Q=Ah(t.samples),!K&&this.config.forceKeyFrameOnDiscontinuity))if(A=!0,Q>0){this.logger.warn(`[mp4-remuxer]: Dropped ${Q} out of ${R} video samples due to a missing keyframe`);const re=this.getVideoStartPts(t.samples);t.samples=t.samples.slice(Q),t.dropped+=Q,S+=(t.samples[0].pts-re)/t.inputTimeScale,he=S}else Q===-1&&(this.logger.warn(`[mp4-remuxer]: No keyframe found out of ${R} video samples`),A=!1);if(this.ISGenerated){if(_&&L){const re=this.getVideoStartPts(t.samples),le=(ze(e.samples[0].pts,re)-re)/t.inputTimeScale;v+=Math.max(0,le),S+=Math.max(0,-le)}if(_){if(e.samplerate||(this.logger.warn("[mp4-remuxer]: regenerate InitSegment as audio detected"),u=this.generateIS(e,t,r,s)),c=this.remuxAudio(e,v,this.isAudioContiguous,s,I||L||l===ce.AUDIO?S:void 0),L){const re=c?c.endPTS-c.startPTS:0;t.inputTimeScale||(this.logger.warn("[mp4-remuxer]: regenerate InitSegment as video detected"),u=this.generateIS(e,t,r,s)),d=this.remuxVideo(t,S,K,re)}}else L&&(d=this.remuxVideo(t,S,K,0));d&&(d.firstKeyFrame=Q,d.independent=Q!==-1,d.firstKeyFramePTS=he)}}return this.ISGenerated&&this._initPTS&&this._initDTS&&(n.samples.length&&(y=ro(n,r,this._initPTS,this._initDTS)),i.samples.length&&(h=so(i,r,this._initPTS))),{audio:c,video:d,initSegment:u,independent:A,text:h,id3:y}}generateIS(e,t,n,i){const r=e.samples,s=t.samples,o=this.typeSupported,l={},d=this._initPTS;let c=!d||i,u="audio/mp4",h,y,A;if(c&&(h=y=1/0),e.config&&r.length){switch(e.timescale=e.samplerate,e.segmentCodec){case"mp3":o.mpeg?(u="audio/mpeg",e.codec=""):o.mp3&&(e.codec="mp3");break;case"ac3":e.codec="ac-3";break}l.audio={id:"audio",container:u,codec:e.codec,initSegment:e.segmentCodec==="mp3"&&o.mpeg?new Uint8Array(0):D.initSegment([e]),metadata:{channelCount:e.channelCount}},c&&(A=e.inputTimeScale,!d||A!==d.timescale?h=y=r[0].pts-Math.round(A*n):c=!1)}if(t.sps&&t.pps&&s.length){if(t.timescale=t.inputTimeScale,l.video={id:"main",container:"video/mp4",codec:t.codec,initSegment:D.initSegment([t]),metadata:{width:t.width,height:t.height}},c)if(A=t.inputTimeScale,!d||A!==d.timescale){const v=this.getVideoStartPts(s),S=Math.round(A*n);y=Math.min(y,ze(s[0].dts,v)-S),h=Math.min(h,v-S)}else c=!1;this.videoTrackConfig={width:t.width,height:t.height,pixelRatio:t.pixelRatio}}if(Object.keys(l).length)return this.ISGenerated=!0,c?(this._initPTS={baseTime:h,timescale:A},this._initDTS={baseTime:y,timescale:A}):h=A=void 0,{tracks:l,initPTS:h,timescale:A}}remuxVideo(e,t,n,i){const r=e.inputTimeScale,s=e.samples,o=[],l=s.length,d=this._initPTS;let c=this.nextAvcDts,u=8,h=this.videoSampleDuration,y,A,v=Number.POSITIVE_INFINITY,S=Number.NEGATIVE_INFINITY,k=!1;if(!n||c===null){const U=t*r,H=s[0].pts-ze(s[0].dts,s[0].pts);zt&&c!==null&&Math.abs(U-H-c)<15e3?n=!0:c=U-H}const I=d.baseTime*r/d.timescale;for(let U=0;U<l;U++){const H=s[U];H.pts=ze(H.pts-I,c),H.dts=ze(H.dts-I,c),H.dts<s[U>0?U-1:U].dts&&(k=!0)}k&&s.sort(function(U,H){const ie=U.dts-H.dts,ne=U.pts-H.pts;return ie||ne}),y=s[0].dts,A=s[s.length-1].dts;const R=A-y,_=R?Math.round(R/(l-1)):h||e.inputTimeScale/30;if(n){const U=y-c,H=U>_,ie=U<-1;if((H||ie)&&(H?this.logger.warn(`${(e.segmentCodec||"").toUpperCase()}: ${Rn(U,!0)} ms (${U}dts) hole between fragments detected at ${t.toFixed(3)}`):this.logger.warn(`${(e.segmentCodec||"").toUpperCase()}: ${Rn(-U,!0)} ms (${U}dts) overlapping between fragments detected at ${t.toFixed(3)}`),!ie||c>=s[0].pts||zt)){y=c;const ne=s[0].pts-U;if(H)s[0].dts=y,s[0].pts=ne;else{let de=!0;for(let fe=0;fe<s.length&&!(s[fe].dts>ne&&de);fe++){const ge=s[fe].pts;if(s[fe].dts-=U,s[fe].pts-=U,fe<s.length-1){const pe=s[fe+1].pts,ke=s[fe].pts,Ce=pe<=ke,Fe=pe<=ge;de=Ce==Fe}}}this.logger.log(`Video: Initial PTS/DTS adjusted: ${Rn(ne,!0)}/${Rn(y,!0)}, delta: ${Rn(U,!0)} ms`)}}y=Math.max(0,y);let L=0,F=0,B=y;for(let U=0;U<l;U++){const H=s[U],ie=H.units,ne=ie.length;let de=0;for(let fe=0;fe<ne;fe++)de+=ie[fe].data.length;F+=de,L+=ne,H.length=de,H.dts<B?(H.dts=B,B+=_/4|0||1):B=H.dts,v=Math.min(H.pts,v),S=Math.max(H.pts,S)}A=s[l-1].dts;const M=F+4*L+8;let q;try{q=new Uint8Array(M)}catch(U){this.observer.emit(T.ERROR,T.ERROR,{type:ae.MUX_ERROR,details:G.REMUX_ALLOC_ERROR,fatal:!1,error:U,bytes:M,reason:`fail allocating video mdat ${M}`});return}const P=new DataView(q.buffer);P.setUint32(0,M),q.set(D.types.mdat,4);let K=!1,Q=Number.POSITIVE_INFINITY,he=Number.POSITIVE_INFINITY,re=Number.NEGATIVE_INFINITY,ue=Number.NEGATIVE_INFINITY;for(let U=0;U<l;U++){const H=s[U],ie=H.units;let ne=0;for(let ge=0,pe=ie.length;ge<pe;ge++){const ke=ie[ge],Ce=ke.data,Fe=ke.data.byteLength;P.setUint32(u,Fe),u+=4,q.set(Ce,u),u+=Fe,ne+=4+Fe}let de;if(U<l-1)h=s[U+1].dts-H.dts,de=s[U+1].pts-H.pts;else{const ge=this.config,pe=U>0?H.dts-s[U-1].dts:_;if(de=U>0?H.pts-s[U-1].pts:_,ge.stretchShortVideoTrack&&this.nextAudioPts!==null){const ke=Math.floor(ge.maxBufferHole*r),Ce=(i?v+i*r:this.nextAudioPts)-H.pts;Ce>ke?(h=Ce-pe,h<0?h=pe:K=!0,this.logger.log(`[mp4-remuxer]: It is approximately ${Ce/90} ms to the next segment; using duration ${h/90} ms for the last video frame.`)):h=pe}else h=pe}const fe=Math.round(H.pts-H.dts);Q=Math.min(Q,h),re=Math.max(re,h),he=Math.min(he,de),ue=Math.max(ue,de),o.push(Zs(H.key,h,ne,fe))}if(o.length){if(zt){if(zt<70){const U=o[0].flags;U.dependsOn=2,U.isNonSync=0}}else if(rr&&ue-he<re-Q&&_/re<.025&&o[0].cts===0){this.logger.warn("Found irregular gaps in sample duration. Using PTS instead of DTS to determine MP4 sample duration.");let U=y;for(let H=0,ie=o.length;H<ie;H++){const ne=U+o[H].duration,de=U+o[H].cts;if(H<ie-1){const fe=ne+o[H+1].cts;o[H].duration=fe-de}else o[H].duration=H?o[H-1].duration:_;o[H].cts=0,U=ne}}}h=K||!h?_:h,this.nextAvcDts=c=A+h,this.videoSampleDuration=h,this.isVideoContiguous=!0;const le=D.moof(e.sequenceNumber++,y,Te(e,{samples:o})),J="video",me={data1:le,data2:q,startPTS:v/r,endPTS:(S+h)/r,startDTS:y/r,endDTS:c/r,type:J,hasAudio:!1,hasVideo:!0,nb:o.length,dropped:e.dropped};return e.samples=[],e.dropped=0,me}getSamplesPerFrame(e){switch(e.segmentCodec){case"mp3":return gh;case"ac3":return yh;default:return mh}}remuxAudio(e,t,n,i,r){const s=e.inputTimeScale,o=e.samplerate?e.samplerate:s,l=s/o,d=this.getSamplesPerFrame(e),c=d*l,u=this._initPTS,h=e.segmentCodec==="mp3"&&this.typeSupported.mpeg,y=[],A=r!==void 0;let v=e.samples,S=h?0:8,k=this.nextAudioPts||-1;const I=t*s,R=u.baseTime*s/u.timescale;if(this.isAudioContiguous=n=n||v.length&&k>0&&(i&&Math.abs(I-k)<9e3||Math.abs(ze(v[0].pts-R,I)-k)<20*c),v.forEach(function(le){le.pts=ze(le.pts-R,I)}),!n||k<0){if(v=v.filter(le=>le.pts>=0),!v.length)return;r===0?k=0:i&&!A?k=Math.max(0,I):k=v[0].pts}if(e.segmentCodec==="aac"){const le=this.config.maxAudioFramesDrift;for(let J=0,me=k;J<v.length;J++){const U=v[J],H=U.pts,ie=H-me,ne=Math.abs(1e3*ie/s);if(ie<=-le*c&&A)J===0&&(this.logger.warn(`Audio frame @ ${(H/s).toFixed(3)}s overlaps nextAudioPts by ${Math.round(1e3*ie/s)} ms.`),this.nextAudioPts=k=me=H);else if(ie>=le*c&&ne<ph&&A){let de=Math.round(ie/c);me=H-de*c,me<0&&(de--,me+=c),J===0&&(this.nextAudioPts=k=me),this.logger.warn(`[mp4-remuxer]: Injecting ${de} audio frame @ ${(me/s).toFixed(3)}s due to ${Math.round(1e3*ie/s)} ms gap.`);for(let fe=0;fe<de;fe++){const ge=Math.max(me,0);let pe=uh.getSilentFrame(e.parsedCodec||e.manifestCodec||e.codec,e.channelCount);pe||(this.logger.log("[mp4-remuxer]: Unable to get silent frame for given audio codec; duplicating last frame instead."),pe=U.unit.subarray()),v.splice(J,0,{unit:pe,pts:ge}),me+=c,J++}}U.pts=me,me+=c}}let _=null,L=null,F,B=0,M=v.length;for(;M--;)B+=v[M].unit.byteLength;for(let le=0,J=v.length;le<J;le++){const me=v[le],U=me.unit;let H=me.pts;if(L!==null){const ne=y[le-1];ne.duration=Math.round((H-L)/l)}else if(n&&e.segmentCodec==="aac"&&(H=k),_=H,B>0){B+=S;try{F=new Uint8Array(B)}catch(ne){this.observer.emit(T.ERROR,T.ERROR,{type:ae.MUX_ERROR,details:G.REMUX_ALLOC_ERROR,fatal:!1,error:ne,bytes:B,reason:`fail allocating audio mdat ${B}`});return}h||(new DataView(F.buffer).setUint32(0,B),F.set(D.types.mdat,4))}else return;F.set(U,S);const ie=U.byteLength;S+=ie,y.push(Zs(!0,d,ie,0)),L=H}const q=y.length;if(!q)return;const P=y[y.length-1];this.nextAudioPts=k=L+l*P.duration;const K=h?new Uint8Array(0):D.moof(e.sequenceNumber++,_/l,Te({},e,{samples:y}));e.samples=[];const Q=_/s,he=k/s,ue={data1:K,data2:F,startPTS:Q,endPTS:he,startDTS:Q,endDTS:he,type:"audio",hasAudio:!0,hasVideo:!1,nb:q};return this.isAudioContiguous=!0,ue}}function ze(a,e){let t;if(e===null)return a;for(e<a?t=-8589934592:t=8589934592;Math.abs(a-e)>4294967296;)a+=t;return a}function Ah(a){for(let e=0;e<a.length;e++)if(a[e].key)return e;return-1}function ro(a,e,t,n){const i=a.samples.length;if(!i)return;const r=a.inputTimeScale;for(let o=0;o<i;o++){const l=a.samples[o];l.pts=ze(l.pts-t.baseTime*r/t.timescale,e*r)/r,l.dts=ze(l.dts-n.baseTime*r/n.timescale,e*r)/r}const s=a.samples;return a.samples=[],{samples:s}}function so(a,e,t){const n=a.samples.length;if(!n)return;const i=a.inputTimeScale;for(let s=0;s<n;s++){const o=a.samples[s];o.pts=ze(o.pts-t.baseTime*i/t.timescale,e*i)/i}a.samples.sort((s,o)=>s.pts-o.pts);const r=a.samples;return a.samples=[],{samples:r}}class bh{constructor(e,t,n,i){this.logger=void 0,this.emitInitSegment=!1,this.audioCodec=void 0,this.videoCodec=void 0,this.initData=void 0,this.initPTS=null,this.initTracks=void 0,this.lastEndTime=null,this.logger=i}destroy(){}resetTimeStamp(e){this.initPTS=e,this.lastEndTime=null}resetNextTimestamp(){this.lastEndTime=null}resetInitSegment(e,t,n,i){this.audioCodec=t,this.videoCodec=n,this.generateInitSegment(ic(e,i)),this.emitInitSegment=!0}generateInitSegment(e){let{audioCodec:t,videoCodec:n}=this;if(!(e!=null&&e.byteLength)){this.initTracks=void 0,this.initData=void 0;return}const i=this.initData=Ta(e);i.audio&&(t=Js(i.audio,Oe.AUDIO)),i.video&&(n=Js(i.video,Oe.VIDEO));const r={};i.audio&&i.video?r.audiovideo={container:"video/mp4",codec:t+","+n,supplemental:i.video.supplemental,initSegment:e,id:"main"}:i.audio?r.audio={container:"audio/mp4",codec:t,initSegment:e,id:"audio"}:i.video?r.video={container:"video/mp4",codec:n,supplemental:i.video.supplemental,initSegment:e,id:"main"}:this.logger.warn("[passthrough-remuxer.ts]: initSegment does not contain moov or trak boxes."),this.initTracks=r}remux(e,t,n,i,r,s){var o,l;let{initPTS:d,lastEndTime:c}=this;const u={audio:void 0,video:void 0,text:i,id3:n,initSegment:void 0};te(c)||(c=this.lastEndTime=r||0);const h=t.samples;if(!(h!=null&&h.length))return u;const y={initPTS:void 0,timescale:1};let A=this.initData;if((o=A)!=null&&o.length||(this.generateInitSegment(h),A=this.initData),!((l=A)!=null&&l.length))return this.logger.warn("[passthrough-remuxer.ts]: Failed to generate initSegment."),u;this.emitInitSegment&&(y.tracks=this.initTracks,this.emitInitSegment=!1);const v=sc(h,A),S=rc(A,h),k=S===null?r:S;(s||!d)&&(vh(d,k,r,v)||y.timescale!==d.timescale)&&(y.initPTS=k-r,d&&d.timescale===1&&this.logger.warn(`Adjusting initPTS @${r} from ${d.baseTime/d.timescale} to ${y.initPTS}`),this.initPTS=d={baseTime:y.initPTS,timescale:1});const I=e?k-d.baseTime/d.timescale:c,R=I+v;oc(A,h,d.baseTime/d.timescale),v>0?this.lastEndTime=R:(this.logger.warn("Duration parsed from mp4 should be greater than zero"),this.resetNextTimestamp());const _=!!A.audio,L=!!A.video;let F="";_&&(F+="audio"),L&&(F+="video");const B={data1:h,startPTS:I,startDTS:I,endPTS:R,endDTS:R,type:F,hasAudio:_,hasVideo:L,nb:1,dropped:0};return u.audio=B.type==="audio"?B:void 0,u.video=B.type!=="audio"?B:void 0,u.initSegment=y,u.id3=ro(n,r,d,d),i.samples.length&&(u.text=so(i,r,d)),u}}function vh(a,e,t,n){if(a===null)return!0;const i=Math.max(n,1),r=e-a.baseTime/a.timescale;return Math.abs(r-t)>i}function Js(a,e){const t=a==null?void 0:a.codec;return t&&t.length>4?t:e===Oe.AUDIO?t==="ec-3"||t==="ac-3"||t==="alac"?t:t==="fLaC"||t==="Opus"?gr(t,!1):(be.warn(`Unhandled audio codec "${t}" in mp4 MAP`),t||"mp4a"):(be.warn(`Unhandled video codec "${t}" in mp4 MAP`),t||"avc1")}let ht;try{ht=self.performance.now.bind(self.performance)}catch{ht=Date.now}const pi=[{demux:oh,remux:bh},{demux:St,remux:fi},{demux:ih,remux:fi},{demux:sh,remux:fi}];pi.splice(2,0,{demux:rh,remux:fi});class ea{constructor(e,t,n,i,r,s){this.asyncResult=!1,this.logger=void 0,this.observer=void 0,this.typeSupported=void 0,this.config=void 0,this.id=void 0,this.demuxer=void 0,this.remuxer=void 0,this.decrypter=void 0,this.probe=void 0,this.decryptionPromise=null,this.transmuxConfig=void 0,this.currentTransmuxState=void 0,this.observer=e,this.typeSupported=t,this.config=n,this.id=r,this.logger=s}configure(e){this.transmuxConfig=e,this.decrypter&&this.decrypter.reset()}push(e,t,n,i){const r=n.transmuxing;r.executeStart=ht();let s=new Uint8Array(e);const{currentTransmuxState:o,transmuxConfig:l}=this;i&&(this.currentTransmuxState=i);const{contiguous:d,discontinuity:c,trackSwitch:u,accurateTimeOffset:h,timeOffset:y,initSegmentChange:A}=i||o,{audioCodec:v,videoCodec:S,defaultInitPts:k,duration:I,initSegmentData:R}=l,_=xh(s,t);if(_&&Yt(_.method)){const M=this.getDecrypter(),q=Rr(_.method);if(M.isSync()){let P=M.softwareDecrypt(s,_.key.buffer,_.iv.buffer,q);if(n.part>-1){const Q=M.flush();P=Q&&Q.buffer}if(!P)return r.executeEnd=ht(),sr(n);s=new Uint8Array(P)}else return this.asyncResult=!0,this.decryptionPromise=M.webCryptoDecrypt(s,_.key.buffer,_.iv.buffer,q).then(P=>{const K=this.push(P,null,n);return this.decryptionPromise=null,K}),this.decryptionPromise}const L=this.needsProbing(c,u);if(L){const M=this.configureTransmuxer(s);if(M)return this.logger.warn(`[transmuxer] ${M.message}`),this.observer.emit(T.ERROR,T.ERROR,{type:ae.MEDIA_ERROR,details:G.FRAG_PARSING_ERROR,fatal:!1,error:M,reason:M.message}),r.executeEnd=ht(),sr(n)}(c||u||A||L)&&this.resetInitSegment(R,v,S,I,t),(c||A||L)&&this.resetInitialTimestamp(k),d||this.resetContiguity();const F=this.transmux(s,_,y,h,n);this.asyncResult=wi(F);const B=this.currentTransmuxState;return B.contiguous=!0,B.discontinuity=!1,B.trackSwitch=!1,r.executeEnd=ht(),F}flush(e){const t=e.transmuxing;t.executeStart=ht();const{decrypter:n,currentTransmuxState:i,decryptionPromise:r}=this;if(r)return this.asyncResult=!0,r.then(()=>this.flush(e));const s=[],{timeOffset:o}=i;if(n){const u=n.flush();u&&s.push(this.push(u.buffer,null,e))}const{demuxer:l,remuxer:d}=this;if(!l||!d){t.executeEnd=ht();const u=[sr(e)];return this.asyncResult?Promise.resolve(u):u}const c=l.flush(o);return wi(c)?(this.asyncResult=!0,c.then(u=>(this.flushRemux(s,u,e),s))):(this.flushRemux(s,c,e),this.asyncResult?Promise.resolve(s):s)}flushRemux(e,t,n){const{audioTrack:i,videoTrack:r,id3Track:s,textTrack:o}=t,{accurateTimeOffset:l,timeOffset:d}=this.currentTransmuxState;this.logger.log(`[transmuxer.ts]: Flushed ${this.id} sn: ${n.sn}${n.part>-1?" part: "+n.part:""} of ${this.id===ce.MAIN?"level":"track"} ${n.level}`);const c=this.remuxer.remux(i,r,s,o,d,l,!0,this.id);e.push({remuxResult:c,chunkMeta:n}),n.transmuxing.executeEnd=ht()}resetInitialTimestamp(e){const{demuxer:t,remuxer:n}=this;!t||!n||(t.resetTimeStamp(e),n.resetTimeStamp(e))}resetContiguity(){const{demuxer:e,remuxer:t}=this;!e||!t||(e.resetContiguity(),t.resetNextTimestamp())}resetInitSegment(e,t,n,i,r){const{demuxer:s,remuxer:o}=this;!s||!o||(s.resetInitSegment(e,t,n,i),o.resetInitSegment(e,t,n,r))}destroy(){this.demuxer&&(this.demuxer.destroy(),this.demuxer=void 0),this.remuxer&&(this.remuxer.destroy(),this.remuxer=void 0)}transmux(e,t,n,i,r){let s;return t&&t.method==="SAMPLE-AES"?s=this.transmuxSampleAes(e,t,n,i,r):s=this.transmuxUnencrypted(e,n,i,r),s}transmuxUnencrypted(e,t,n,i){const{audioTrack:r,videoTrack:s,id3Track:o,textTrack:l}=this.demuxer.demux(e,t,!1,!this.config.progressive);return{remuxResult:this.remuxer.remux(r,s,o,l,t,n,!1,this.id),chunkMeta:i}}transmuxSampleAes(e,t,n,i,r){return this.demuxer.demuxSampleAes(e,t,n).then(s=>({remuxResult:this.remuxer.remux(s.audioTrack,s.videoTrack,s.id3Track,s.textTrack,n,i,!1,this.id),chunkMeta:r}))}configureTransmuxer(e){const{config:t,observer:n,typeSupported:i}=this;let r;for(let u=0,h=pi.length;u<h;u++){var s;if((s=pi[u].demux)!=null&&s.probe(e,this.logger)){r=pi[u];break}}if(!r)return new Error("Failed to find demuxer by probing fragment data");const o=this.demuxer,l=this.remuxer,d=r.remux,c=r.demux;(!l||!(l instanceof d))&&(this.remuxer=new d(n,t,i,this.logger)),(!o||!(o instanceof c))&&(this.demuxer=new c(n,t,i,this.logger),this.probe=c.probe)}needsProbing(e,t){return!this.demuxer||!this.remuxer||e||t}getDecrypter(){let e=this.decrypter;return e||(e=this.decrypter=new Lr(this.config)),e}}function xh(a,e){let t=null;return a.byteLength>0&&(e==null?void 0:e.key)!=null&&e.iv!==null&&e.method!=null&&(t=e),t}const sr=a=>({remuxResult:{},chunkMeta:a});function wi(a){return"then"in a&&a.then instanceof Function}class Eh{constructor(e,t,n,i,r){this.audioCodec=void 0,this.videoCodec=void 0,this.initSegmentData=void 0,this.duration=void 0,this.defaultInitPts=void 0,this.audioCodec=e,this.videoCodec=t,this.initSegmentData=n,this.duration=i,this.defaultInitPts=r||null}}class Sh{constructor(e,t,n,i,r,s){this.discontinuity=void 0,this.contiguous=void 0,this.accurateTimeOffset=void 0,this.trackSwitch=void 0,this.timeOffset=void 0,this.initSegmentChange=void 0,this.discontinuity=e,this.contiguous=t,this.accurateTimeOffset=n,this.trackSwitch=i,this.timeOffset=r,this.initSegmentChange=s}}let ta=0;class Th{constructor(e,t,n,i){this.error=null,this.hls=void 0,this.id=void 0,this.instanceNo=ta++,this.observer=void 0,this.frag=null,this.part=null,this.useWorker=void 0,this.workerContext=null,this.transmuxer=null,this.onTransmuxComplete=void 0,this.onFlush=void 0,this.onWorkerMessage=l=>{const d=l.data,c=this.hls;if(!(!c||!(d!=null&&d.event)||d.instanceNo!==this.instanceNo))switch(d.event){case"init":{var u;const h=(u=this.workerContext)==null?void 0:u.objectURL;h&&self.URL.revokeObjectURL(h);break}case"transmuxComplete":{this.handleTransmuxComplete(d.data);break}case"flush":{this.onFlush(d.data);break}case"workerLog":{c.logger[d.data.logType]&&c.logger[d.data.logType](d.data.message);break}default:{d.data=d.data||{},d.data.frag=this.frag,d.data.part=this.part,d.data.id=this.id,c.trigger(d.event,d.data);break}}},this.onWorkerError=l=>{if(!this.hls)return;const d=new Error(`${l.message}  (${l.filename}:${l.lineno})`);this.hls.config.enableWorker=!1,this.hls.logger.warn(`Error in "${this.id}" Web Worker, fallback to inline`),this.hls.trigger(T.ERROR,{type:ae.OTHER_ERROR,details:G.INTERNAL_EXCEPTION,fatal:!1,event:"demuxerWorker",error:d})};const r=e.config;this.hls=e,this.id=t,this.useWorker=!!r.enableWorker,this.onTransmuxComplete=n,this.onFlush=i;const s=(l,d)=>{d=d||{},d.frag=this.frag||void 0,l===T.ERROR&&(d=d,d.parent=this.id,d.part=this.part,this.error=d.error),this.hls.trigger(l,d)};this.observer=new qa,this.observer.on(T.FRAG_DECRYPTED,s),this.observer.on(T.ERROR,s);const o=Is(r.preferManagedMediaSource);if(this.useWorker&&typeof Worker<"u"){const l=this.hls.logger;if(r.workerPath||Cu()){try{r.workerPath?(l.log(`loading Web Worker ${r.workerPath} for "${t}"`),this.workerContext=ku(r.workerPath)):(l.log(`injecting Web Worker for "${t}"`),this.workerContext=wu());const{worker:c}=this.workerContext;c.addEventListener("message",this.onWorkerMessage),c.addEventListener("error",this.onWorkerError),c.postMessage({instanceNo:this.instanceNo,cmd:"init",typeSupported:o,id:t,config:Ie(r)})}catch(c){l.warn(`Error setting up "${t}" Web Worker, fallback to inline`,c),this.terminateWorker(),this.error=null,this.transmuxer=new ea(this.observer,o,r,"",t,e.logger)}return}}this.transmuxer=new ea(this.observer,o,r,"",t,e.logger)}reset(){if(this.frag=null,this.part=null,this.workerContext){const e=this.instanceNo;this.instanceNo=ta++;const t=this.hls.config,n=Is(t.preferManagedMediaSource);this.workerContext.worker.postMessage({instanceNo:this.instanceNo,cmd:"reset",resetNo:e,typeSupported:n,id:this.id,config:Ie(t)})}}terminateWorker(){if(this.workerContext){const{worker:e}=this.workerContext;this.workerContext=null,e.removeEventListener("message",this.onWorkerMessage),e.removeEventListener("error",this.onWorkerError),Iu(this.hls.config.workerPath)}}destroy(){if(this.workerContext)this.terminateWorker(),this.onWorkerMessage=this.onWorkerError=null;else{const t=this.transmuxer;t&&(t.destroy(),this.transmuxer=null)}const e=this.observer;e&&e.removeAllListeners(),this.frag=null,this.part=null,this.observer=null,this.hls=null}push(e,t,n,i,r,s,o,l,d,c){var u,h;d.transmuxing.start=self.performance.now();const{instanceNo:y,transmuxer:A}=this,v=s?s.start:r.start,S=r.decryptdata,k=this.frag,I=!(k&&r.cc===k.cc),R=!(k&&d.level===k.level),_=k?d.sn-k.sn:-1,L=this.part?d.part-this.part.index:-1,F=_===0&&d.id>1&&d.id===(k==null?void 0:k.stats.chunkCount),B=!R&&(_===1||_===0&&(L===1||F&&L<=0)),M=self.performance.now();(R||_||r.stats.parsing.start===0)&&(r.stats.parsing.start=M),s&&(L||!B)&&(s.stats.parsing.start=M);const q=!(k&&((u=r.initSegment)==null?void 0:u.url)===((h=k.initSegment)==null?void 0:h.url)),P=new Sh(I,B,l,R,v,q);if(!B||I||q){this.hls.logger.log(`[transmuxer-interface]: Starting new transmux session for ${r.type} sn: ${d.sn}${d.part>-1?" part: "+d.part:""} ${this.id===ce.MAIN?"level":"track"}: ${d.level} id: ${d.id}
        discontinuity: ${I}
        trackSwitch: ${R}
        contiguous: ${B}
        accurateTimeOffset: ${l}
        timeOffset: ${v}
        initSegmentChange: ${q}`);const K=new Eh(n,i,t,o,c);this.configureTransmuxer(K)}if(this.frag=r,this.part=s,this.workerContext)this.workerContext.worker.postMessage({instanceNo:y,cmd:"demux",data:e,decryptdata:S,chunkMeta:d,state:P},e instanceof ArrayBuffer?[e]:[]);else if(A){const K=A.push(e,S,d,P);wi(K)?K.then(Q=>{this.handleTransmuxComplete(Q)}).catch(Q=>{this.transmuxerError(Q,d,"transmuxer-interface push error")}):this.handleTransmuxComplete(K)}}flush(e){e.transmuxing.start=self.performance.now();const{instanceNo:t,transmuxer:n}=this;if(this.workerContext)this.workerContext.worker.postMessage({instanceNo:t,cmd:"flush",chunkMeta:e});else if(n){const i=n.flush(e);wi(i)?i.then(r=>{this.handleFlushResult(r,e)}).catch(r=>{this.transmuxerError(r,e,"transmuxer-interface flush error")}):this.handleFlushResult(i,e)}}transmuxerError(e,t,n){this.hls&&(this.error=e,this.hls.trigger(T.ERROR,{type:ae.MEDIA_ERROR,details:G.FRAG_PARSING_ERROR,chunkMeta:t,frag:this.frag||void 0,part:this.part||void 0,fatal:!1,error:e,err:e,reason:n}))}handleFlushResult(e,t){e.forEach(n=>{this.handleTransmuxComplete(n)}),this.onFlush(t)}configureTransmuxer(e){const{instanceNo:t,transmuxer:n}=this;this.workerContext?this.workerContext.worker.postMessage({instanceNo:t,cmd:"configure",config:e}):n&&n.configure(e)}handleTransmuxComplete(e){e.chunkMeta.transmuxing.end=self.performance.now(),this.onTransmuxComplete(e)}}const na=100;class Ch extends Ga{constructor(e,t,n){super(e,t,n,"audio-stream-controller",ce.AUDIO),this.mainAnchor=null,this.mainFragLoading=null,this.audioOnly=!1,this.bufferedTrack=null,this.switchingTrack=null,this.trackId=-1,this.waitingData=null,this.mainDetails=null,this.flushing=!1,this.bufferFlushed=!1,this.cachedTrackLoadedData=null,this.registerListeners()}onHandlerDestroying(){this.unregisterListeners(),super.onHandlerDestroying(),this.resetItem()}resetItem(){this.mainDetails=this.mainAnchor=this.mainFragLoading=this.bufferedTrack=this.switchingTrack=this.waitingData=this.cachedTrackLoadedData=null}registerListeners(){super.registerListeners();const{hls:e}=this;e.on(T.LEVEL_LOADED,this.onLevelLoaded,this),e.on(T.AUDIO_TRACKS_UPDATED,this.onAudioTracksUpdated,this),e.on(T.AUDIO_TRACK_SWITCHING,this.onAudioTrackSwitching,this),e.on(T.AUDIO_TRACK_LOADED,this.onAudioTrackLoaded,this),e.on(T.BUFFER_RESET,this.onBufferReset,this),e.on(T.BUFFER_CREATED,this.onBufferCreated,this),e.on(T.BUFFER_FLUSHING,this.onBufferFlushing,this),e.on(T.BUFFER_FLUSHED,this.onBufferFlushed,this),e.on(T.INIT_PTS_FOUND,this.onInitPtsFound,this),e.on(T.FRAG_LOADING,this.onFragLoading,this),e.on(T.FRAG_BUFFERED,this.onFragBuffered,this)}unregisterListeners(){const{hls:e}=this;e&&(super.unregisterListeners(),e.off(T.LEVEL_LOADED,this.onLevelLoaded,this),e.off(T.AUDIO_TRACKS_UPDATED,this.onAudioTracksUpdated,this),e.off(T.AUDIO_TRACK_SWITCHING,this.onAudioTrackSwitching,this),e.off(T.AUDIO_TRACK_LOADED,this.onAudioTrackLoaded,this),e.off(T.BUFFER_RESET,this.onBufferReset,this),e.off(T.BUFFER_CREATED,this.onBufferCreated,this),e.off(T.BUFFER_FLUSHING,this.onBufferFlushing,this),e.off(T.BUFFER_FLUSHED,this.onBufferFlushed,this),e.off(T.INIT_PTS_FOUND,this.onInitPtsFound,this),e.off(T.FRAG_LOADING,this.onFragLoading,this),e.off(T.FRAG_BUFFERED,this.onFragBuffered,this))}onInitPtsFound(e,{frag:t,id:n,initPTS:i,timescale:r}){if(n===ce.MAIN){const s=t.cc,o=this.fragCurrent;if(this.initPTS[s]={baseTime:i,timescale:r},this.log(`InitPTS for cc: ${s} found from main: ${i}/${r}`),this.mainAnchor=t,this.state===Y.WAITING_INIT_PTS){const l=this.waitingData;(!l&&!this.loadingParts||l&&l.frag.cc!==s)&&(this.nextLoadPosition=this.findSyncFrag(t).start),this.tick()}else!this.hls.hasEnoughToStart&&o&&o.cc!==s?(this.startFragRequested=!1,this.nextLoadPosition=this.findSyncFrag(t).start,o.abortRequests(),this.resetLoadingState()):this.state===Y.IDLE&&this.tick()}}findSyncFrag(e){const t=this.getLevelDetails(),n=e.cc;return Uc(t,n,e)||t&&Da(t.fragments,n)||e}startLoad(e,t){if(!this.levels){this.startPosition=e,this.state=Y.STOPPED;return}const n=this.lastCurrentTime;this.stopLoad(),this.setInterval(na),n>0&&e===-1?(this.log(`Override startPosition with lastCurrentTime @${n.toFixed(3)}`),e=n,this.state=Y.IDLE):this.state=Y.WAITING_TRACK,this.nextLoadPosition=this.lastCurrentTime=e+this.timelineOffset,this.startPosition=t?-1:e,this.tick()}doTick(){switch(this.state){case Y.IDLE:this.doTickIdle();break;case Y.WAITING_TRACK:{const{levels:t,trackId:n}=this,i=t==null?void 0:t[n],r=i==null?void 0:i.details;if(r&&!this.waitForLive(i)){if(this.waitForCdnTuneIn(r))break;this.state=Y.WAITING_INIT_PTS}break}case Y.FRAG_LOADING_WAITING_RETRY:{var e;const t=performance.now(),n=this.retryDate;if(!n||t>=n||(e=this.media)!=null&&e.seeking){const{levels:i,trackId:r}=this;this.log("RetryDate reached, switch back to IDLE state"),this.resetStartWhenNotLoaded((i==null?void 0:i[r])||null),this.state=Y.IDLE}break}case Y.WAITING_INIT_PTS:{const t=this.waitingData;if(t){const{frag:n,part:i,cache:r,complete:s}=t,o=this.mainAnchor;if(this.initPTS[n.cc]!==void 0){this.waitingData=null,this.state=Y.FRAG_LOADING;const l=r.flush().buffer,d={frag:n,part:i,payload:l,networkDetails:null};this._handleFragmentLoadProgress(d),s&&super._handleFragmentLoadComplete(d)}else o&&o.cc!==t.frag.cc&&(this.log(`Waiting fragment cc (${n.cc}) cancelled because video is at cc ${o.cc}`),this.nextLoadPosition=this.findSyncFrag(o).start,this.clearWaitingFragment())}else this.state=Y.IDLE}}this.onTickEnd()}clearWaitingFragment(){const e=this.waitingData;e&&(this.hls.hasEnoughToStart||(this.startFragRequested=!1),this.fragmentTracker.removeFragment(e.frag),this.waitingData=null,this.state!==Y.STOPPED&&(this.state=Y.IDLE))}resetLoadingState(){this.clearWaitingFragment(),super.resetLoadingState()}onTickEnd(){const{media:e}=this;e!=null&&e.readyState&&(this.lastCurrentTime=e.currentTime)}doTickIdle(){var e;const{hls:t,levels:n,media:i,trackId:r}=this,s=t.config;if(!this.buffering||!i&&!this.primaryPrefetch&&(this.startFragRequested||!s.startFragPrefetch)||!(n!=null&&n[r]))return;const o=n[r],l=o.details;if(!l||this.waitForLive(o)||this.waitForCdnTuneIn(l)){this.state=Y.WAITING_TRACK,this.startFragRequested=!1;return}const d=this.mediaBuffer?this.mediaBuffer:this.media;this.bufferFlushed&&d&&(this.bufferFlushed=!1,this.afterBufferFlushed(d,Oe.AUDIO,ce.AUDIO));const c=this.getFwdBufferInfo(d,ce.AUDIO);if(c===null)return;if(!this.switchingTrack&&this._streamEnded(c,l)){t.trigger(T.BUFFER_EOS,{type:"audio"}),this.state=Y.ENDED;return}const u=c.len,h=t.maxBufferLength,y=l.fragments,A=y[0].start,v=this.getLoadPosition(),S=this.flushing?v:c.end;if(this.switchingTrack&&i){const R=v;l.PTSKnown&&R<A&&(c.end>A||c.nextStart)&&(this.log("Alt audio track ahead of main track, seek to start of alt audio track"),i.currentTime=A+.05)}if(u>=h&&!this.switchingTrack&&S<y[y.length-1].start)return;let k=this.getNextFragment(S,l);if(k&&this.isLoopLoading(k,S)&&(k=this.getNextFragmentLoopLoading(k,l,c,ce.MAIN,h)),!k){this.bufferFlushed=!0;return}let I=((e=this.mainFragLoading)==null?void 0:e.frag)||null;if(!this.audioOnly&&this.startFragRequested&&I&&Ge(k)&&!k.endList&&(!l.live||!this.loadingParts&&S<this.hls.liveSyncPosition)&&(this.fragmentTracker.getState(I)===Ye.OK&&(this.mainFragLoading=I=null),I&&Ge(I))){if(k.start>I.end){const _=this.fragmentTracker.getFragAtPos(S,ce.MAIN);_&&_.end>I.end&&(I=_,this.mainFragLoading={frag:_,targetBufferTime:null})}if(k.start>I.end)return}this.loadFragment(k,o,S)}onMediaDetaching(e,t){this.bufferFlushed=this.flushing=!1,super.onMediaDetaching(e,t)}onAudioTracksUpdated(e,{audioTracks:t}){this.resetTransmuxer(),this.levels=t.map(n=>new Ai(n))}onAudioTrackSwitching(e,t){const n=!!t.url;this.trackId=t.id;const{fragCurrent:i}=this;i&&(i.abortRequests(),this.removeUnbufferedFrags(i.start)),this.resetLoadingState(),n?(this.switchingTrack=t,this.flushAudioIfNeeded(t),this.state!==Y.STOPPED&&(this.setInterval(na),this.state=Y.IDLE,this.tick())):(this.resetTransmuxer(),this.switchingTrack=null,this.bufferedTrack=t,this.clearInterval())}onManifestLoading(){super.onManifestLoading(),this.bufferFlushed=this.flushing=this.audioOnly=!1,this.resetItem(),this.trackId=-1}onLevelLoaded(e,t){this.mainDetails=t.details;const n=this.cachedTrackLoadedData;n&&(this.cachedTrackLoadedData=null,this.onAudioTrackLoaded(T.AUDIO_TRACK_LOADED,n))}onAudioTrackLoaded(e,t){var n;const{levels:i}=this,{details:r,id:s,groupId:o,track:l}=t;if(!i){this.warn(`Audio tracks reset while loading track ${s} "${l.name}" of "${o}"`);return}const d=this.mainDetails;if(!d||r.endCC>d.endCC||d.expired){this.cachedTrackLoadedData=t,this.state!==Y.STOPPED&&(this.state=Y.WAITING_TRACK);return}this.cachedTrackLoadedData=null,this.log(`Audio track ${s} "${l.name}" of "${o}" loaded [${r.startSN},${r.endSN}]${r.lastPartSn?`[part-${r.lastPartSn}-${r.lastPartIndex}]`:""},duration:${r.totalduration}`);const c=i[s];let u=0;if(r.live||(n=c.details)!=null&&n.live){if(this.checkLiveUpdate(r),r.deltaUpdateFailed)return;if(c.details){var h;u=this.alignPlaylists(r,c.details,(h=this.levelLastLoaded)==null?void 0:h.details)}r.alignedSliding||($a(r,d),r.alignedSliding||Si(r,d),u=r.fragmentStart)}c.details=r,this.levelLastLoaded=c,this.startFragRequested||this.setStartPosition(d,u),this.hls.trigger(T.AUDIO_TRACK_UPDATED,{details:r,id:s,groupId:t.groupId}),this.state===Y.WAITING_TRACK&&!this.waitForCdnTuneIn(r)&&(this.state=Y.IDLE),this.tick()}_handleFragmentLoadProgress(e){var t;const n=e.frag,{part:i,payload:r}=e,{config:s,trackId:o,levels:l}=this;if(!l){this.warn(`Audio tracks were reset while fragment load was in progress. Fragment ${n.sn} of level ${n.level} will not be buffered`);return}const d=l[o];if(!d){this.warn("Audio track is undefined on fragment load progress");return}const c=d.details;if(!c){this.warn("Audio track details undefined on fragment load progress"),this.removeUnbufferedFrags(n.start);return}const u=s.defaultAudioCodec||d.audioCodec||"mp4a.40.2";let h=this.transmuxer;h||(h=this.transmuxer=new Th(this.hls,ce.AUDIO,this._handleTransmuxComplete.bind(this),this._handleTransmuxerFlush.bind(this)));const y=this.initPTS[n.cc],A=(t=n.initSegment)==null?void 0:t.data;if(y!==void 0){const S=i?i.index:-1,k=S!==-1,I=new Ba(n.level,n.sn,n.stats.chunkCount,r.byteLength,S,k);h.push(r,A,u,"",n,i,c.totalduration,!1,I,y)}else{this.log(`Unknown video PTS for cc ${n.cc}, waiting for video PTS before demuxing audio frag ${n.sn} of [${c.startSN} ,${c.endSN}],track ${o}`);const{cache:v}=this.waitingData=this.waitingData||{frag:n,part:i,cache:new xu,complete:!1};v.push(new Uint8Array(r)),this.state!==Y.STOPPED&&(this.state=Y.WAITING_INIT_PTS)}}_handleFragmentLoadComplete(e){if(this.waitingData){this.waitingData.complete=!0;return}super._handleFragmentLoadComplete(e)}onBufferReset(){this.mediaBuffer=null}onBufferCreated(e,t){this.bufferFlushed=this.flushing=!1;const n=t.tracks.audio;n&&(this.mediaBuffer=n.buffer||null)}onFragLoading(e,t){!this.audioOnly&&t.frag.type===ce.MAIN&&Ge(t.frag)&&(this.mainFragLoading=t,this.state===Y.IDLE&&this.tick())}onFragBuffered(e,t){const{frag:n,part:i}=t;if(n.type!==ce.AUDIO){!this.audioOnly&&n.type===ce.MAIN&&!n.elementaryStreams.video&&!n.elementaryStreams.audiovideo&&(this.audioOnly=!0,this.mainFragLoading=null);return}if(this.fragContextChanged(n)){this.warn(`Fragment ${n.sn}${i?" p: "+i.index:""} of level ${n.level} finished buffering, but was aborted. state: ${this.state}, audioSwitch: ${this.switchingTrack?this.switchingTrack.name:"false"}`);return}if(Ge(n)){this.fragPrevious=n;const r=this.switchingTrack;r&&(this.bufferedTrack=r,this.switchingTrack=null,this.hls.trigger(T.AUDIO_TRACK_SWITCHED,Se({},r)))}this.fragBufferedComplete(n,i),this.media&&this.tick()}onError(e,t){var n;if(t.fatal){this.state=Y.ERROR;return}switch(t.details){case G.FRAG_GAP:case G.FRAG_PARSING_ERROR:case G.FRAG_DECRYPT_ERROR:case G.FRAG_LOAD_ERROR:case G.FRAG_LOAD_TIMEOUT:case G.KEY_LOAD_ERROR:case G.KEY_LOAD_TIMEOUT:this.onFragmentOrKeyLoadError(ce.AUDIO,t);break;case G.AUDIO_TRACK_LOAD_ERROR:case G.AUDIO_TRACK_LOAD_TIMEOUT:case G.LEVEL_PARSING_ERROR:!t.levelRetry&&this.state===Y.WAITING_TRACK&&((n=t.context)==null?void 0:n.type)===ft.AUDIO_TRACK&&(this.state=Y.IDLE);break;case G.BUFFER_ADD_CODEC_ERROR:case G.BUFFER_APPEND_ERROR:if(t.parent!=="audio")return;this.resetLoadingState();break;case G.BUFFER_FULL_ERROR:if(t.parent!=="audio")return;this.reduceLengthAndFlushBuffer(t)&&(this.bufferedTrack=null,super.flushMainBuffer(0,Number.POSITIVE_INFINITY,"audio"));break;case G.INTERNAL_EXCEPTION:this.recoverWorkerError(t);break}}onBufferFlushing(e,{type:t}){t!==Oe.VIDEO&&(this.flushing=!0)}onBufferFlushed(e,{type:t}){if(t!==Oe.VIDEO){this.flushing=!1,this.bufferFlushed=!0,this.state===Y.ENDED&&(this.state=Y.IDLE);const n=this.mediaBuffer||this.media;n&&(this.afterBufferFlushed(n,t,ce.AUDIO),this.tick())}}_handleTransmuxComplete(e){var t;const n="audio",{hls:i}=this,{remuxResult:r,chunkMeta:s}=e,o=this.getCurrentContext(s);if(!o){this.resetWhenMissingContext(s);return}const{frag:l,part:d,level:c}=o,{details:u}=c,{audio:h,text:y,id3:A,initSegment:v}=r;if(this.fragContextChanged(l)||!u){this.fragmentTracker.removeFragment(l);return}if(this.state=Y.PARSING,this.switchingTrack&&h&&this.completeAudioSwitch(this.switchingTrack),v!=null&&v.tracks){const S=l.initSegment||l;this._bufferInitSegment(c,v.tracks,S,s),i.trigger(T.FRAG_PARSING_INIT_SEGMENT,{frag:S,id:n,tracks:v.tracks})}if(h){const{startPTS:S,endPTS:k,startDTS:I,endDTS:R}=h;d&&(d.elementaryStreams[Oe.AUDIO]={startPTS:S,endPTS:k,startDTS:I,endDTS:R}),l.setElementaryStreamInfo(Oe.AUDIO,S,k,I,R),this.bufferFragmentData(h,l,d,s)}if(A!=null&&(t=A.samples)!=null&&t.length){const S=Te({id:n,frag:l,details:u},A);i.trigger(T.FRAG_PARSING_METADATA,S)}if(y){const S=Te({id:n,frag:l,details:u},y);i.trigger(T.FRAG_PARSING_USERDATA,S)}}_bufferInitSegment(e,t,n,i){if(this.state!==Y.PARSING||(t.video&&delete t.video,t.audiovideo&&delete t.audiovideo,!t.audio))return;const r=t.audio;r.id=ce.AUDIO;const s=e.audioCodec;this.log(`Init audio buffer, container:${r.container}, codecs[level/parsed]=[${s}/${r.codec}]`),s&&s.split(",").length===1&&(r.levelCodec=s),this.hls.trigger(T.BUFFER_CODECS,t);const o=r.initSegment;if(o!=null&&o.byteLength){const l={type:"audio",frag:n,part:null,chunkMeta:i,parent:n.type,data:o};this.hls.trigger(T.BUFFER_APPENDING,l)}this.tickImmediate()}loadFragment(e,t,n){const i=this.fragmentTracker.getState(e);if(this.switchingTrack||i===Ye.NOT_LOADED||i===Ye.PARTIAL){var r;if(!Ge(e))this._loadInitSegment(e,t);else if((r=t.details)!=null&&r.live&&!this.initPTS[e.cc]){this.log(`Waiting for video PTS in continuity counter ${e.cc} of live stream before loading audio fragment ${e.sn} of level ${this.trackId}`),this.state=Y.WAITING_INIT_PTS;const s=this.mainDetails;s&&s.fragmentStart!==t.details.fragmentStart&&Si(t.details,s)}else super.loadFragment(e,t,n)}else this.clearTrackerIfNeeded(e)}flushAudioIfNeeded(e){if(this.media&&this.bufferedTrack){const{name:t,lang:n,assocLang:i,characteristics:r,audioCodec:s,channels:o}=this.bufferedTrack;Dt({name:t,lang:n,assocLang:i,characteristics:r,audioCodec:s,channels:o},e,_t)||(_a(e.url,this.hls)?(this.log("Switching audio track : flushing all audio"),super.flushMainBuffer(0,Number.POSITIVE_INFINITY,"audio"),this.bufferedTrack=null):this.bufferedTrack=e)}}completeAudioSwitch(e){const{hls:t}=this;this.flushAudioIfNeeded(e),this.bufferedTrack=e,this.switchingTrack=null,t.trigger(T.AUDIO_TRACK_SWITCHED,Se({},e))}}class ao extends pt{constructor(e,t){super(t,e.logger),this.hls=void 0,this.canLoad=!1,this.timer=-1,this.hls=e}destroy(){this.clearTimer(),this.hls=this.log=this.warn=null}clearTimer(){this.timer!==-1&&(self.clearTimeout(this.timer),this.timer=-1)}startLoad(){this.canLoad=!0,this.loadPlaylist()}stopLoad(){this.canLoad=!1,this.clearTimer()}switchParams(e,t,n){const i=t==null?void 0:t.renditionReports;if(i){let r=-1;for(let s=0;s<i.length;s++){const o=i[s];let l;try{l=new self.URL(o.URI,t.url).href}catch(d){this.warn(`Could not construct new URL for Rendition Report: ${d}`),l=o.URI||""}if(l===e){r=s;break}else l===e.substring(0,l.length)&&(r=s)}if(r!==-1){const s=i[r],o=parseInt(s["LAST-MSN"])||(t==null?void 0:t.lastPartSn);let l=parseInt(s["LAST-PART"])||(t==null?void 0:t.lastPartIndex);if(this.hls.config.lowLatencyMode){const c=Math.min(t.age-t.partTarget,t.targetduration);l>=0&&c>t.partTarget&&(l+=1)}const d=n&&_s(n);return new Ds(o,l>=0?l:void 0,d)}}}loadPlaylist(e){this.clearTimer()}loadingPlaylist(e,t){this.clearTimer()}shouldLoadPlaylist(e){return this.canLoad&&!!e&&!!e.url&&(!e.details||e.details.live)}getUrlWithDirectives(e,t){if(t)try{return t.addDirectives(e)}catch(n){this.warn(`Could not construct new URL with HLS Delivery Directives: ${n}`)}return e}playlistLoaded(e,t,n){const{details:i,stats:r}=t,s=self.performance.now(),o=r.loading.first?Math.max(0,s-r.loading.first):0;i.advancedDateTime=Date.now()-o;const l=this.hls.config.timelineOffset;if(l!==i.appliedTimelineOffset){const c=Math.max(l||0,0);i.appliedTimelineOffset=c,i.fragments.forEach(u=>{u.start=u.playlistOffset+c})}if(i.live||n!=null&&n.live){const c="levelInfo"in t?t.levelInfo:t.track;if(i.reloaded(n),n&&i.fragments.length>0){uu(n,i);const I=i.playlistParsingError;if(I){this.warn(I);const R=this.hls;if(!R.config.ignorePlaylistParsingErrors){var d;const{networkDetails:_}=t;R.trigger(T.ERROR,{type:ae.NETWORK_ERROR,details:G.LEVEL_PARSING_ERROR,fatal:!1,url:i.url,error:I,reason:I.message,level:t.level||void 0,parent:(d=i.fragments[0])==null?void 0:d.type,networkDetails:_,stats:r});return}i.playlistParsingError=null}}i.requestScheduled===-1&&(i.requestScheduled=r.loading.start);const u=this.hls.mainForwardBufferInfo,h=u?u.end-u.len:0,y=(i.edge-h)*1e3,A=mu(i,y);if(i.requestScheduled+A<s?i.requestScheduled=s:i.requestScheduled+=A,this.log(`live playlist ${e} ${i.advanced?"REFRESHED "+i.lastPartSn+"-"+i.lastPartIndex:i.updated?"UPDATED":"MISSED"}`),!this.canLoad||!i.live)return;let v,S,k;if(i.canBlockReload&&i.endSN&&i.advanced){const I=this.hls.config.lowLatencyMode,R=i.lastPartSn,_=i.endSN,L=i.lastPartIndex,F=L!==-1,B=R===_;F?B?(S=_+1,k=I?0:L):(S=R,k=I?L+1:i.maxPartIndex):S=_+1;const M=i.age,q=M+i.ageHeader;let P=Math.min(q-i.partTarget,i.targetduration*1.5);if(P>0){if(q>i.targetduration*3)this.log(`Playlist last advanced ${M.toFixed(2)}s ago. Omitting segment and part directives.`),S=void 0,k=void 0;else if(n!=null&&n.tuneInGoal&&q-i.partTarget>n.tuneInGoal)this.warn(`CDN Tune-in goal increased from: ${n.tuneInGoal} to: ${P} with playlist age: ${i.age}`),P=0;else{const K=Math.floor(P/i.targetduration);if(S+=K,k!==void 0){const Q=Math.round(P%i.targetduration/i.partTarget);k+=Q}this.log(`CDN Tune-in age: ${i.ageHeader}s last advanced ${M.toFixed(2)}s goal: ${P} skip sn ${K} to part ${k}`)}i.tuneInGoal=P}if(v=this.getDeliveryDirectives(i,t.deliveryDirectives,S,k),I||!B){i.requestScheduled=s,this.loadingPlaylist(c,v);return}}else(i.canBlockReload||i.canSkipUntil)&&(v=this.getDeliveryDirectives(i,t.deliveryDirectives,S,k));v&&S!==void 0&&i.canBlockReload&&(i.requestScheduled=r.loading.first+Math.max(A-o*2,A/2)),this.scheduleLoading(c,v,i)}else this.clearTimer()}scheduleLoading(e,t,n){const i=n||e.details;if(!i){this.loadingPlaylist(e,t);return}const r=self.performance.now(),s=i.requestScheduled;if(r>=s){this.loadingPlaylist(e,t);return}const o=s-r;this.log(`reload live playlist ${e.name||e.bitrate+"bps"} in ${Math.round(o)} ms`),this.clearTimer(),this.timer=self.setTimeout(()=>this.loadingPlaylist(e,t),o)}getDeliveryDirectives(e,t,n,i){let r=_s(e);return t!=null&&t.skip&&e.deltaUpdateFailed&&(n=t.msn,i=t.part,r=hi.No),new Ds(n,i,r)}checkRetry(e){const t=e.details,n=bi(e),i=e.errorAction,{action:r,retryCount:s=0,retryConfig:o}=i||{},l=!!i&&!!o&&(r===Pe.RetryRequest||!i.resolved&&r===Pe.SendAlternateToPenaltyBox);if(l){var d;if(s>=o.maxNumRetry)return!1;if(n&&(d=e.context)!=null&&d.deliveryDirectives)this.warn(`Retrying playlist loading ${s+1}/${o.maxNumRetry} after "${t}" without delivery-directives`),this.loadPlaylist();else{const c=Ir(o,s);this.clearTimer(),this.timer=self.setTimeout(()=>this.loadPlaylist(),c),this.warn(`Retrying playlist loading ${s+1}/${o.maxNumRetry} after "${t}" in ${c}ms`)}e.levelRetry=!0,i.resolved=!0}return l}}function oo(a,e){if(a.length!==e.length)return!1;for(let t=0;t<a.length;t++)if(!$n(a[t].attrs,e[t].attrs))return!1;return!0}function $n(a,e,t){const n=a["STABLE-RENDITION-ID"];return n&&!t?n===e["STABLE-RENDITION-ID"]:!(t||["LANGUAGE","NAME","CHARACTERISTICS","AUTOSELECT","DEFAULT","FORCED","ASSOC-LANGUAGE"]).some(i=>a[i]!==e[i])}function xr(a,e){return e.label.toLowerCase()===a.name.toLowerCase()&&(!e.language||e.language.toLowerCase()===(a.lang||"").toLowerCase())}class wh extends ao{constructor(e){super(e,"audio-track-controller"),this.tracks=[],this.groupIds=null,this.tracksInGroup=[],this.trackId=-1,this.currentTrack=null,this.selectDefaultTrack=!0,this.registerListeners()}registerListeners(){const{hls:e}=this;e.on(T.MANIFEST_LOADING,this.onManifestLoading,this),e.on(T.MANIFEST_PARSED,this.onManifestParsed,this),e.on(T.LEVEL_LOADING,this.onLevelLoading,this),e.on(T.LEVEL_SWITCHING,this.onLevelSwitching,this),e.on(T.AUDIO_TRACK_LOADED,this.onAudioTrackLoaded,this),e.on(T.ERROR,this.onError,this)}unregisterListeners(){const{hls:e}=this;e.off(T.MANIFEST_LOADING,this.onManifestLoading,this),e.off(T.MANIFEST_PARSED,this.onManifestParsed,this),e.off(T.LEVEL_LOADING,this.onLevelLoading,this),e.off(T.LEVEL_SWITCHING,this.onLevelSwitching,this),e.off(T.AUDIO_TRACK_LOADED,this.onAudioTrackLoaded,this),e.off(T.ERROR,this.onError,this)}destroy(){this.unregisterListeners(),this.tracks.length=0,this.tracksInGroup.length=0,this.currentTrack=null,super.destroy()}onManifestLoading(){this.tracks=[],this.tracksInGroup=[],this.groupIds=null,this.currentTrack=null,this.trackId=-1,this.selectDefaultTrack=!0}onManifestParsed(e,t){this.tracks=t.audioTracks||[]}onAudioTrackLoaded(e,t){const{id:n,groupId:i,details:r}=t,s=this.tracksInGroup[n];if(!s||s.groupId!==i){this.warn(`Audio track with id:${n} and group:${i} not found in active group ${s==null?void 0:s.groupId}`);return}const o=s.details;s.details=t.details,this.log(`Audio track ${n} "${s.name}" lang:${s.lang} group:${i} loaded [${r.startSN}-${r.endSN}]`),n===this.trackId&&this.playlistLoaded(n,t,o)}onLevelLoading(e,t){this.switchLevel(t.level)}onLevelSwitching(e,t){this.switchLevel(t.level)}switchLevel(e){const t=this.hls.levels[e];if(!t)return;const n=t.audioGroups||null,i=this.groupIds;let r=this.currentTrack;if(!n||(i==null?void 0:i.length)!==(n==null?void 0:n.length)||n!=null&&n.some(o=>(i==null?void 0:i.indexOf(o))===-1)){this.groupIds=n,this.trackId=-1,this.currentTrack=null;const o=this.tracks.filter(h=>!n||n.indexOf(h.groupId)!==-1);if(o.length)this.selectDefaultTrack&&!o.some(h=>h.default)&&(this.selectDefaultTrack=!1),o.forEach((h,y)=>{h.id=y});else if(!r&&!this.tracksInGroup.length)return;this.tracksInGroup=o;const l=this.hls.config.audioPreference;if(!r&&l){const h=st(l,o,_t);if(h>-1)r=o[h];else{const y=st(l,this.tracks);r=this.tracks[y]}}let d=this.findTrackId(r);d===-1&&r&&(d=this.findTrackId(null));const c={audioTracks:o};this.log(`Updating audio tracks, ${o.length} track(s) found in group(s): ${n==null?void 0:n.join(",")}`),this.hls.trigger(T.AUDIO_TRACKS_UPDATED,c);const u=this.trackId;if(d!==-1&&u===-1)this.setAudioTrack(d);else if(o.length&&u===-1){var s;const h=new Error(`No audio track selected for current audio group-ID(s): ${(s=this.groupIds)==null?void 0:s.join(",")} track count: ${o.length}`);this.warn(h.message),this.hls.trigger(T.ERROR,{type:ae.MEDIA_ERROR,details:G.AUDIO_TRACK_LOAD_ERROR,fatal:!0,error:h})}}}onError(e,t){t.fatal||!t.context||t.context.type===ft.AUDIO_TRACK&&t.context.id===this.trackId&&(!this.groupIds||this.groupIds.indexOf(t.context.groupId)!==-1)&&this.checkRetry(t)}get allAudioTracks(){return this.tracks}get audioTracks(){return this.tracksInGroup}get audioTrack(){return this.trackId}set audioTrack(e){this.selectDefaultTrack=!1,this.setAudioTrack(e)}setAudioOption(e){const t=this.hls;if(t.config.audioPreference=e,e){const n=this.allAudioTracks;if(this.selectDefaultTrack=!1,n.length){const i=this.currentTrack;if(i&&Dt(e,i,_t))return i;const r=st(e,this.tracksInGroup,_t);if(r>-1){const s=this.tracksInGroup[r];return this.setAudioTrack(r),s}else if(i){let s=t.loadLevel;s===-1&&(s=t.firstAutoLevel);const o=Pc(e,t.levels,n,s,_t);if(o===-1)return null;t.nextLoadLevel=o}if(e.channels||e.audioCodec){const s=st(e,n);if(s>-1)return n[s]}}}return null}setAudioTrack(e){const t=this.tracksInGroup;if(e<0||e>=t.length){this.warn(`Invalid audio track id: ${e}`);return}this.selectDefaultTrack=!1;const n=this.currentTrack,i=t[e],r=i.details&&!i.details.live;if(e===this.trackId&&i===n&&r||(this.log(`Switching to audio-track ${e} "${i.name}" lang:${i.lang} group:${i.groupId} channels:${i.channels}`),this.trackId=e,this.currentTrack=i,this.hls.trigger(T.AUDIO_TRACK_SWITCHING,Se({},i)),r))return;const s=this.switchParams(i.url,n==null?void 0:n.details,i.details);this.loadPlaylist(s)}findTrackId(e){const t=this.tracksInGroup;for(let n=0;n<t.length;n++){const i=t[n];if(!(this.selectDefaultTrack&&!i.default)&&(!e||Dt(e,i,_t)))return n}if(e){const{name:n,lang:i,assocLang:r,characteristics:s,audioCodec:o,channels:l}=e;for(let d=0;d<t.length;d++){const c=t[d];if(Dt({name:n,lang:i,assocLang:r,characteristics:s,audioCodec:o,channels:l},c,_t))return d}for(let d=0;d<t.length;d++){const c=t[d];if($n(e.attrs,c.attrs,["LANGUAGE","ASSOC-LANGUAGE","CHARACTERISTICS"]))return d}for(let d=0;d<t.length;d++){const c=t[d];if($n(e.attrs,c.attrs,["LANGUAGE"]))return d}}return-1}loadPlaylist(e){super.loadPlaylist();const t=this.currentTrack;this.shouldLoadPlaylist(t)&&_a(t.url,this.hls)&&this.scheduleLoading(t,e)}loadingPlaylist(e,t){super.loadingPlaylist(e,t);const n=e.id,i=e.groupId,r=this.getUrlWithDirectives(e.url,t),s=e.details,o=s==null?void 0:s.age;this.log(`Loading audio-track ${n} "${e.name}" lang:${e.lang} group:${i}${(t==null?void 0:t.msn)!==void 0?" at sn "+t.msn+" part "+t.part:""}${o&&s.live?" age "+o.toFixed(1)+(s.type&&" "+s.type||""):""} ${r}`),this.hls.trigger(T.AUDIO_TRACK_LOADING,{url:r,id:n,groupId:i,deliveryDirectives:t||null,track:e})}}class kh{constructor(e){this.tracks=void 0,this.queues={video:[],audio:[],audiovideo:[]},this.tracks=e}destroy(){this.tracks=this.queues=null}append(e,t,n){if(this.queues===null||this.tracks===null)return;const i=this.queues[t];i.push(e),i.length===1&&!n&&this.executeNext(t)}appendBlocker(e){return new Promise(t=>{const n={label:"async-blocker",execute:t,onStart:()=>{},onComplete:()=>{},onError:()=>{}};this.append(n,e)})}prependBlocker(e){return new Promise(t=>{if(this.queues){const n={label:"async-blocker-prepend",execute:t,onStart:()=>{},onComplete:()=>{},onError:()=>{}};this.queues[e].unshift(n)}})}removeBlockers(){this.queues!==null&&[this.queues.video,this.queues.audio,this.queues.audiovideo].forEach(e=>{var t;const n=(t=e[0])==null?void 0:t.label;(n==="async-blocker"||n==="async-blocker-prepend")&&(e[0].execute(),e.splice(0,1))})}unblockAudio(e){if(this.queues===null)return;this.queues.audio[0]===e&&this.shiftAndExecuteNext("audio")}executeNext(e){if(this.queues===null||this.tracks===null)return;const t=this.queues[e];if(t.length){const i=t[0];try{i.execute()}catch(r){var n;if(i.onError(r),this.queues===null||this.tracks===null)return;const s=(n=this.tracks[e])==null?void 0:n.buffer;s!=null&&s.updating||this.shiftAndExecuteNext(e)}}}shiftAndExecuteNext(e){this.queues!==null&&(this.queues[e].shift(),this.executeNext(e))}current(e){var t;return((t=this.queues)==null?void 0:t[e][0])||null}toString(){const{queues:e,tracks:t}=this;return e===null||t===null?"<destroyed>":`
${this.list("video")}
${this.list("audio")}
${this.list("audiovideo")}}`}list(e){var t,n;return(t=this.queues)!=null&&t[e]||(n=this.tracks)!=null&&n[e]?`${e}: (${this.listSbInfo(e)}) ${this.listOps(e)}`:""}listSbInfo(e){var t;const n=(t=this.tracks)==null?void 0:t[e],i=n==null?void 0:n.buffer;return i?`SourceBuffer${i.updating?" updating":""}${n.ended?" ended":""}${n.ending?" ending":""}`:"none"}listOps(e){var t;return((t=this.queues)==null?void 0:t[e].map(n=>n.label).join(", "))||""}}const ia=/(avc[1234]|hvc1|hev1|dvh[1e]|vp09|av01)(?:\.[^.,]+)+/,lo="HlsJsTrackRemovedError";class Ih extends Error{constructor(e){super(e),this.name=lo}}class Lh extends pt{constructor(e,t){super("buffer-controller",e.logger),this.hls=void 0,this.fragmentTracker=void 0,this.details=null,this._objectUrl=null,this.operationQueue=null,this.bufferCodecEventsTotal=0,this.media=null,this.mediaSource=null,this.lastMpegAudioChunk=null,this.blockedAudioAppend=null,this.lastVideoAppendEnd=0,this.appendSource=void 0,this.transferData=void 0,this.overrides=void 0,this.appendErrors={audio:0,video:0,audiovideo:0},this.tracks={},this.sourceBuffers=[[null,null],[null,null]],this._onEndStreaming=n=>{var i;this.hls&&((i=this.mediaSource)==null?void 0:i.readyState)==="open"&&this.hls.pauseBuffering()},this._onStartStreaming=n=>{this.hls&&this.hls.resumeBuffering()},this._onMediaSourceOpen=n=>{const{media:i,mediaSource:r}=this;n&&this.log("Media source opened"),!(!i||!r)&&(r.removeEventListener("sourceopen",this._onMediaSourceOpen),i.removeEventListener("emptied",this._onMediaEmptied),this.updateDuration(),this.hls.trigger(T.MEDIA_ATTACHED,{media:i,mediaSource:r}),this.mediaSource!==null&&this.checkPendingTracks())},this._onMediaSourceClose=()=>{this.log("Media source closed")},this._onMediaSourceEnded=()=>{this.log("Media source ended")},this._onMediaEmptied=()=>{const{mediaSrc:n,_objectUrl:i}=this;n!==i&&this.error(`Media element src was set while attaching MediaSource (${i} > ${n})`)},this.hls=e,this.fragmentTracker=t,this.appendSource=jd(Mn(e.config.preferManagedMediaSource)),this.initTracks(),this.registerListeners()}hasSourceTypes(){return Object.keys(this.tracks).length>0}destroy(){this.unregisterListeners(),this.details=null,this.lastMpegAudioChunk=this.blockedAudioAppend=null,this.transferData=this.overrides=void 0,this.operationQueue&&(this.operationQueue.destroy(),this.operationQueue=null),this.hls=this.fragmentTracker=null,this._onMediaSourceOpen=this._onMediaSourceClose=null,this._onMediaSourceEnded=null,this._onStartStreaming=this._onEndStreaming=null}registerListeners(){const{hls:e}=this;e.on(T.MEDIA_ATTACHING,this.onMediaAttaching,this),e.on(T.MEDIA_DETACHING,this.onMediaDetaching,this),e.on(T.MANIFEST_LOADING,this.onManifestLoading,this),e.on(T.MANIFEST_PARSED,this.onManifestParsed,this),e.on(T.BUFFER_RESET,this.onBufferReset,this),e.on(T.BUFFER_APPENDING,this.onBufferAppending,this),e.on(T.BUFFER_CODECS,this.onBufferCodecs,this),e.on(T.BUFFER_EOS,this.onBufferEos,this),e.on(T.BUFFER_FLUSHING,this.onBufferFlushing,this),e.on(T.LEVEL_UPDATED,this.onLevelUpdated,this),e.on(T.FRAG_PARSED,this.onFragParsed,this),e.on(T.FRAG_CHANGED,this.onFragChanged,this),e.on(T.ERROR,this.onError,this)}unregisterListeners(){const{hls:e}=this;e.off(T.MEDIA_ATTACHING,this.onMediaAttaching,this),e.off(T.MEDIA_DETACHING,this.onMediaDetaching,this),e.off(T.MANIFEST_LOADING,this.onManifestLoading,this),e.off(T.MANIFEST_PARSED,this.onManifestParsed,this),e.off(T.BUFFER_RESET,this.onBufferReset,this),e.off(T.BUFFER_APPENDING,this.onBufferAppending,this),e.off(T.BUFFER_CODECS,this.onBufferCodecs,this),e.off(T.BUFFER_EOS,this.onBufferEos,this),e.off(T.BUFFER_FLUSHING,this.onBufferFlushing,this),e.off(T.LEVEL_UPDATED,this.onLevelUpdated,this),e.off(T.FRAG_PARSED,this.onFragParsed,this),e.off(T.FRAG_CHANGED,this.onFragChanged,this),e.off(T.ERROR,this.onError,this)}transferMedia(){const{media:e,mediaSource:t}=this;if(!e)return null;const n={};if(this.operationQueue){const r=this.isUpdating();r||this.operationQueue.removeBlockers();const s=this.isQueued();(r||s)&&this.warn(`Transfering MediaSource with${s?" operations in queue":""}${r?" updating SourceBuffer(s)":""} ${this.operationQueue}`),this.operationQueue.destroy()}const i=this.transferData;return!this.sourceBufferCount&&i&&i.mediaSource===t?Te(n,i.tracks):this.sourceBuffers.forEach(r=>{const[s]=r;s&&(n[s]=Te({},this.tracks[s]),this.removeBuffer(s)),r[0]=r[1]=null}),{media:e,mediaSource:t,tracks:n}}initTracks(){const e={};this.sourceBuffers=[[null,null],[null,null]],this.tracks=e,this.resetQueue(),this.resetAppendErrors(),this.lastMpegAudioChunk=this.blockedAudioAppend=null,this.lastVideoAppendEnd=0}onManifestLoading(){this.bufferCodecEventsTotal=0,this.details=null}onManifestParsed(e,t){var n;let i=2;(t.audio&&!t.video||!t.altAudio)&&(i=1),this.bufferCodecEventsTotal=i,this.log(`${i} bufferCodec event(s) expected.`),(n=this.transferData)!=null&&n.mediaSource&&this.sourceBufferCount&&i&&this.bufferCreated()}onMediaAttaching(e,t){const n=this.media=t.media,i=Mn(this.appendSource);if(this.transferData=this.overrides=void 0,n&&i){const r=!!t.mediaSource;(r||t.overrides)&&(this.transferData=t,this.overrides=t.overrides);const s=this.mediaSource=t.mediaSource||new i;if(this.assignMediaSource(s),r)this._objectUrl=n.src,this.attachTransferred();else{const o=this._objectUrl=self.URL.createObjectURL(s);if(this.appendSource)try{n.removeAttribute("src");const l=self.ManagedMediaSource;n.disableRemotePlayback=n.disableRemotePlayback||l&&s instanceof l,ra(n),Rh(n,o),n.load()}catch{n.src=o}else n.src=o}n.addEventListener("emptied",this._onMediaEmptied)}}assignMediaSource(e){var t,n;this.log(`${((t=this.transferData)==null?void 0:t.mediaSource)===e?"transferred":"created"} media source: ${(n=e.constructor)==null?void 0:n.name}`),e.addEventListener("sourceopen",this._onMediaSourceOpen),e.addEventListener("sourceended",this._onMediaSourceEnded),e.addEventListener("sourceclose",this._onMediaSourceClose),this.appendSource&&(e.addEventListener("startstreaming",this._onStartStreaming),e.addEventListener("endstreaming",this._onEndStreaming))}attachTransferred(){const e=this.media,t=this.transferData;if(!t||!e)return;const n=this.tracks,i=t.tracks,r=i?Object.keys(i):null,s=r?r.length:0,o=()=>{this.media&&this.mediaSourceOpenOrEnded&&this._onMediaSourceOpen()};if(i&&r&&s){if(!this.tracksReady){this.hls.config.startFragPrefetch=!0,this.log("attachTransferred: waiting for SourceBuffer track info");return}if(this.log(`attachTransferred: (bufferCodecEventsTotal ${this.bufferCodecEventsTotal})
required tracks: ${Ie(n,(l,d)=>l==="initSegment"?void 0:d)};
transfer tracks: ${Ie(i,(l,d)=>l==="initSegment"?void 0:d)}}`),!va(i,n)){t.mediaSource=null,t.tracks=void 0;const l=e.currentTime,d=this.details,c=Math.max(l,(d==null?void 0:d.fragments[0].start)||0);if(c-l>1){this.log(`attachTransferred: waiting for playback to reach new tracks start time ${l} -> ${c}`);return}this.warn(`attachTransferred: resetting MediaSource for incompatible tracks ("${Object.keys(i)}"->"${Object.keys(n)}") start time: ${c} currentTime: ${l}`),this.onMediaDetaching(T.MEDIA_DETACHING,{}),this.onMediaAttaching(T.MEDIA_ATTACHING,t),e.currentTime=c;return}this.transferData=void 0,r.forEach(l=>{const d=l,c=i[d];if(c){const u=c.buffer;if(u){const h=this.fragmentTracker,y=c.id;if(h.hasFragments(y)||h.hasParts(y)){const S=Ee.getBuffered(u);h.detectEvictedFragments(d,S,y,null,!0)}const A=ar(d),v=[d,u];this.sourceBuffers[A]=v,u.updating&&this.operationQueue&&this.operationQueue.prependBlocker(d),this.trackSourceBuffer(d,c)}}}),o(),this.bufferCreated()}else this.log("attachTransferred: MediaSource w/o SourceBuffers"),o()}get mediaSourceOpenOrEnded(){var e;const t=(e=this.mediaSource)==null?void 0:e.readyState;return t==="open"||t==="ended"}onMediaDetaching(e,t){const n=!!t.transferMedia;this.transferData=this.overrides=void 0;const{media:i,mediaSource:r,_objectUrl:s}=this;if(r){if(this.log(`media source ${n?"transferring":"detaching"}`),n)this.sourceBuffers.forEach(([o])=>{o&&this.removeBuffer(o)}),this.resetQueue();else{if(this.mediaSourceOpenOrEnded){const o=r.readyState==="open";try{const l=r.sourceBuffers;for(let d=l.length;d--;)o&&l[d].abort(),r.removeSourceBuffer(l[d]);o&&r.endOfStream()}catch(l){this.warn(`onMediaDetaching: ${l.message} while calling endOfStream`)}}this.sourceBufferCount&&this.onBufferReset()}r.removeEventListener("sourceopen",this._onMediaSourceOpen),r.removeEventListener("sourceended",this._onMediaSourceEnded),r.removeEventListener("sourceclose",this._onMediaSourceClose),this.appendSource&&(r.removeEventListener("startstreaming",this._onStartStreaming),r.removeEventListener("endstreaming",this._onEndStreaming)),this.mediaSource=null,this._objectUrl=null}i&&(i.removeEventListener("emptied",this._onMediaEmptied),n||(s&&self.URL.revokeObjectURL(s),this.mediaSrc===s?(i.removeAttribute("src"),this.appendSource&&ra(i),i.load()):this.warn("media|source.src was changed by a third party - skip cleanup")),this.media=null),this.hls.trigger(T.MEDIA_DETACHED,t)}onBufferReset(){this.sourceBuffers.forEach(([e])=>{e&&this.resetBuffer(e)}),this.initTracks()}resetBuffer(e){var t;const n=(t=this.tracks[e])==null?void 0:t.buffer;if(this.removeBuffer(e),n)try{var i;(i=this.mediaSource)!=null&&i.sourceBuffers.length&&this.mediaSource.removeSourceBuffer(n)}catch(r){this.warn(`onBufferReset ${e}`,r)}delete this.tracks[e]}removeBuffer(e){this.removeBufferListeners(e),this.sourceBuffers[ar(e)]=[null,null];const t=this.tracks[e];t&&(t.buffer=void 0)}resetQueue(){this.operationQueue&&this.operationQueue.destroy(),this.operationQueue=new kh(this.tracks)}onBufferCodecs(e,t){const n=this.tracks,i=Object.keys(t);this.log(`BUFFER_CODECS: "${i}" (current SB count ${this.sourceBufferCount})`);const r="audiovideo"in t&&(n.audio||n.video)||n.audiovideo&&("audio"in t||"video"in t),s=!r&&this.sourceBufferCount&&this.media&&i.some(o=>!n[o]);if(r||s){this.warn(`Unsupported transition between "${Object.keys(n)}" and "${i}" SourceBuffers`);return}i.forEach(o=>{var l,d,c;const u=t[o],{id:h,codec:y,levelCodec:A,container:v,metadata:S,supplemental:k}=u;let I=n[o];const R=(l=this.transferData)==null||(d=l.tracks)==null?void 0:d[o],_=R!=null&&R.buffer?R:I,L=(_==null?void 0:_.pendingCodec)||(_==null?void 0:_.codec),F=_==null?void 0:_.levelCodec;I||(I=n[o]={buffer:void 0,listeners:[],codec:y,supplemental:k,container:v,levelCodec:A,metadata:S,id:h});const B=Qi(L,F),M=B==null?void 0:B.replace(ia,"$1");let q=Qi(y,A);const P=(c=q)==null?void 0:c.replace(ia,"$1");q&&B&&M!==P&&(o.slice(0,5)==="audio"&&(q=gr(q,this.appendSource)),this.log(`switching codec ${L} to ${q}`),q!==(I.pendingCodec||I.codec)&&(I.pendingCodec=q),I.container=v,this.appendChangeType(o,v,q))}),(this.tracksReady||this.sourceBufferCount)&&(t.tracks=this.sourceBufferTracks),!this.sourceBufferCount&&this.mediaSourceOpenOrEnded&&this.checkPendingTracks()}get sourceBufferTracks(){return Object.keys(this.tracks).reduce((e,t)=>{const n=this.tracks[t];return e[t]={id:n.id,container:n.container,codec:n.codec,levelCodec:n.levelCodec},e},{})}appendChangeType(e,t,n){const i=`${t};codecs=${n}`,r={label:`change-type=${i}`,execute:()=>{const s=this.tracks[e];if(s){const o=s.buffer;o!=null&&o.changeType&&(this.log(`changing ${e} sourceBuffer type to ${i}`),o.changeType(i),s.codec=n,s.container=t)}this.shiftAndExecuteNext(e)},onStart:()=>{},onComplete:()=>{},onError:s=>{this.warn(`Failed to change ${e} SourceBuffer type`,s)}};this.append(r,e,this.isPending(this.tracks[e]))}blockAudio(e){var t;const n=e.start,i=n+e.duration*.05;if(((t=this.fragmentTracker.getAppendedFrag(n,ce.MAIN))==null?void 0:t.gap)===!0)return;const s={label:"block-audio",execute:()=>{var o;const l=this.tracks.video;(this.lastVideoAppendEnd>i||l!=null&&l.buffer&&Ee.isBuffered(l.buffer,i)||((o=this.fragmentTracker.getAppendedFrag(i,ce.MAIN))==null?void 0:o.gap)===!0)&&(this.blockedAudioAppend=null,this.shiftAndExecuteNext("audio"))},onStart:()=>{},onComplete:()=>{},onError:o=>{this.warn("Error executing block-audio operation",o)}};this.blockedAudioAppend={op:s,frag:e},this.append(s,"audio",!0)}unblockAudio(){const{blockedAudioAppend:e,operationQueue:t}=this;e&&t&&(this.blockedAudioAppend=null,t.unblockAudio(e.op))}onBufferAppending(e,t){const{tracks:n}=this,{data:i,type:r,parent:s,frag:o,part:l,chunkMeta:d}=t,c=d.buffering[r],u=o.sn,h=self.performance.now();c.start=h;const y=o.stats.buffering,A=l?l.stats.buffering:null;y.start===0&&(y.start=h),A&&A.start===0&&(A.start=h);const v=n.audio;let S=!1;r==="audio"&&(v==null?void 0:v.container)==="audio/mpeg"&&(S=!this.lastMpegAudioChunk||d.id===1||this.lastMpegAudioChunk.sn!==d.sn,this.lastMpegAudioChunk=d);const k=this.tracks.video,I=k==null?void 0:k.buffer;if(I&&u!=="initSegment"){const L=l||o,F=this.blockedAudioAppend;if(r==="audio"&&s!=="main"&&!this.blockedAudioAppend){const M=L.start+L.duration*.05,q=I.buffered,P=this.currentOp("video");!q.length&&!P?this.blockAudio(L):!P&&!Ee.isBuffered(I,M)&&this.lastVideoAppendEnd<M&&this.blockAudio(L)}else if(r==="video"){const B=L.end;if(F){const M=F.frag.start;(B>M||B<this.lastVideoAppendEnd||Ee.isBuffered(I,M))&&this.unblockAudio()}this.lastVideoAppendEnd=B}}const R=(l||o).start,_={label:`append-${r}`,execute:()=>{if(c.executeStart=self.performance.now(),S){const L=this.tracks[r];if(L){const F=L.buffer;if(F){const B=R-F.timestampOffset;Math.abs(B)>=.1&&(this.log(`Updating audio SourceBuffer timestampOffset to ${R} (delta: ${B}) sn: ${u})`),F.timestampOffset=R)}}}this.appendExecutor(i,r)},onStart:()=>{},onComplete:()=>{const L=self.performance.now();c.executeEnd=c.end=L,y.first===0&&(y.first=L),A&&A.first===0&&(A.first=L);const F={};this.sourceBuffers.forEach(([B,M])=>{B&&(F[B]=Ee.getBuffered(M))}),this.appendErrors[r]=0,r==="audio"||r==="video"?this.appendErrors.audiovideo=0:(this.appendErrors.audio=0,this.appendErrors.video=0),this.hls.trigger(T.BUFFER_APPENDED,{type:r,frag:o,part:l,chunkMeta:d,parent:o.type,timeRanges:F})},onError:L=>{var F;const B={type:ae.MEDIA_ERROR,parent:o.type,details:G.BUFFER_APPEND_ERROR,sourceBufferName:r,frag:o,part:l,chunkMeta:d,error:L,err:L,fatal:!1};if(L.code===DOMException.QUOTA_EXCEEDED_ERR)B.details=G.BUFFER_FULL_ERROR;else if(L.code===DOMException.INVALID_STATE_ERR&&this.mediaSourceOpenOrEnded&&!((F=this.media)!=null&&F.error))B.errorAction=Nn(!0);else if(L.name===lo)this.sourceBufferCount===0?B.errorAction=Nn(!0):++this.appendErrors[r];else{const M=++this.appendErrors[r];this.warn(`Failed ${M}/${this.hls.config.appendErrorMaxRetry} times to append segment in "${r}" sourceBuffer`),M>=this.hls.config.appendErrorMaxRetry&&(B.fatal=!0)}this.hls.trigger(T.ERROR,B)}};this.append(_,r,this.isPending(this.tracks[r]))}getFlushOp(e,t,n){return this.log(`queuing "${e}" remove ${t}-${n}`),{label:"remove",execute:()=>{this.removeExecutor(e,t,n)},onStart:()=>{},onComplete:()=>{this.hls.trigger(T.BUFFER_FLUSHED,{type:e})},onError:i=>{this.warn(`Failed to remove ${t}-${n} from "${e}" SourceBuffer`,i)}}}onBufferFlushing(e,t){const{type:n,startOffset:i,endOffset:r}=t;n?this.append(this.getFlushOp(n,i,r),n):this.sourceBuffers.forEach(([s])=>{s&&this.append(this.getFlushOp(s,i,r),s)})}onFragParsed(e,t){const{frag:n,part:i}=t,r=[],s=i?i.elementaryStreams:n.elementaryStreams;s[Oe.AUDIOVIDEO]?r.push("audiovideo"):(s[Oe.AUDIO]&&r.push("audio"),s[Oe.VIDEO]&&r.push("video"));const o=()=>{const l=self.performance.now();n.stats.buffering.end=l,i&&(i.stats.buffering.end=l);const d=i?i.stats:n.stats;this.hls.trigger(T.FRAG_BUFFERED,{frag:n,part:i,stats:d,id:n.type})};r.length===0&&this.warn(`Fragments must have at least one ElementaryStreamType set. type: ${n.type} level: ${n.level} sn: ${n.sn}`),this.blockBuffers(o,r)}onFragChanged(e,t){this.trimBuffers()}get bufferedToEnd(){return this.sourceBufferCount>0&&!this.sourceBuffers.some(([e])=>{var t,n;return e&&(!((t=this.tracks[e])!=null&&t.ended)||((n=this.tracks[e])==null?void 0:n.ending))})}onBufferEos(e,t){var n;this.sourceBuffers.forEach(([s])=>{if(s){const o=this.tracks[s];(!t.type||t.type===s)&&(o.ending=!0,o.ended||(o.ended=!0,this.log(`${s} buffer reached EOS`)))}});const i=((n=this.overrides)==null?void 0:n.endOfStream)!==!1;this.sourceBufferCount>0&&!this.sourceBuffers.some(([s])=>{var o;return s&&!((o=this.tracks[s])!=null&&o.ended)})&&(i?(this.log("Queueing EOS"),this.blockUntilOpen(()=>{this.tracksEnded();const{mediaSource:s}=this;if(!s||s.readyState!=="open"){s&&this.log(`Could not call mediaSource.endOfStream(). mediaSource.readyState: ${s.readyState}`);return}this.log("Calling mediaSource.endOfStream()"),s.endOfStream(),this.hls.trigger(T.BUFFERED_TO_END,void 0)})):(this.tracksEnded(),this.hls.trigger(T.BUFFERED_TO_END,void 0)))}tracksEnded(){this.sourceBuffers.forEach(([e])=>{if(e!==null){const t=this.tracks[e];t&&(t.ending=!1)}})}onLevelUpdated(e,{details:t}){t.fragments.length&&(this.details=t,this.updateDuration())}updateDuration(){const e=this.getDurationAndRange();e&&this.blockUntilOpen(()=>this.updateMediaSource(e))}onError(e,t){if(t.details===G.BUFFER_APPEND_ERROR&&t.frag){var n;const i=(n=t.errorAction)==null?void 0:n.nextAutoLevel;te(i)&&i!==t.frag.level&&this.resetAppendErrors()}}resetAppendErrors(){this.appendErrors={audio:0,video:0,audiovideo:0}}trimBuffers(){const{hls:e,details:t,media:n}=this;if(!n||t===null||!this.sourceBufferCount)return;const i=e.config,r=n.currentTime,s=t.levelTargetDuration,o=t.live&&i.liveBackBufferLength!==null?i.liveBackBufferLength:i.backBufferLength;if(te(o)&&o>=0){const l=Math.max(o,s),d=Math.floor(r/s)*s-l;this.flushBackBuffer(r,s,d)}if(te(i.frontBufferFlushThreshold)&&i.frontBufferFlushThreshold>0){const l=Math.max(i.maxBufferLength,i.frontBufferFlushThreshold),d=Math.max(l,s),c=Math.floor(r/s)*s+d;this.flushFrontBuffer(r,s,c)}}flushBackBuffer(e,t,n){this.sourceBuffers.forEach(([i,r])=>{if(r){const o=Ee.getBuffered(r);if(o.length>0&&n>o.start(0)){var s;this.hls.trigger(T.BACK_BUFFER_REACHED,{bufferEnd:n});const l=this.tracks[i];if((s=this.details)!=null&&s.live)this.hls.trigger(T.LIVE_BACK_BUFFER_REACHED,{bufferEnd:n});else if(l!=null&&l.ended){this.log(`Cannot flush ${i} back buffer while SourceBuffer is in ended state`);return}this.hls.trigger(T.BUFFER_FLUSHING,{startOffset:0,endOffset:n,type:i})}}})}flushFrontBuffer(e,t,n){this.sourceBuffers.forEach(([i,r])=>{if(r){const s=Ee.getBuffered(r),o=s.length;if(o<2)return;const l=s.start(o-1),d=s.end(o-1);if(n>l||e>=l&&e<=d)return;this.hls.trigger(T.BUFFER_FLUSHING,{startOffset:l,endOffset:1/0,type:i})}})}getDurationAndRange(){var e;const{details:t,mediaSource:n}=this;if(!t||!this.media||(n==null?void 0:n.readyState)!=="open")return null;const i=t.edge;if(t.live&&this.hls.config.liveDurationInfinity){if(t.fragments.length&&t.live&&n.setLiveSeekableRange){const d=Math.max(0,t.fragmentStart),c=Math.max(d,i);return{duration:1/0,start:d,end:c}}return{duration:1/0}}const r=(e=this.overrides)==null?void 0:e.duration;if(r)return te(r)?{duration:r}:null;const s=this.media.duration,o=te(n.duration)?n.duration:0;return i>o&&i>s||!te(s)?{duration:i}:null}updateMediaSource({duration:e,start:t,end:n}){const i=this.mediaSource;!this.media||!i||i.readyState!=="open"||(i.duration!==e&&(te(e)&&this.log(`Updating MediaSource duration to ${e.toFixed(3)}`),i.duration=e),t!==void 0&&n!==void 0&&(this.log(`MediaSource duration is set to ${i.duration}. Setting seekable range to ${t}-${n}.`),i.setLiveSeekableRange(t,n)))}get tracksReady(){const e=this.pendingTrackCount;return e>0&&(e>=this.bufferCodecEventsTotal||this.isPending(this.tracks.audiovideo))}checkPendingTracks(){const{bufferCodecEventsTotal:e,pendingTrackCount:t,tracks:n}=this;if(this.log(`checkPendingTracks (pending: ${t} codec events expected: ${e}) ${Ie(n)}`),this.tracksReady){var i;const r=(i=this.transferData)==null?void 0:i.tracks;r&&Object.keys(r).length?this.attachTransferred():this.createSourceBuffers()}}bufferCreated(){if(this.sourceBufferCount){const e={};this.sourceBuffers.forEach(([t,n])=>{if(t){const i=this.tracks[t];e[t]={buffer:n,container:i.container,codec:i.codec,supplemental:i.supplemental,levelCodec:i.levelCodec,id:i.id,metadata:i.metadata}}}),this.hls.trigger(T.BUFFER_CREATED,{tracks:e}),this.log(`SourceBuffers created. Running queue: ${this.operationQueue}`),this.sourceBuffers.forEach(([t])=>{this.executeNext(t)})}else{const e=new Error("could not create source buffer for media codec(s)");this.hls.trigger(T.ERROR,{type:ae.MEDIA_ERROR,details:G.BUFFER_INCOMPATIBLE_CODECS_ERROR,fatal:!0,error:e,reason:e.message})}}createSourceBuffers(){const{tracks:e,sourceBuffers:t,mediaSource:n}=this;if(!n)throw new Error("createSourceBuffers called when mediaSource was null");for(const r in e){const s=r,o=e[s];if(this.isPending(o)){const l=this.getTrackCodec(o,s),d=`${o.container};codecs=${l}`;o.codec=l,this.log(`creating sourceBuffer(${d})${this.currentOp(s)?" Queued":""} ${Ie(o)}`);try{const c=n.addSourceBuffer(d),u=ar(s),h=[s,c];t[u]=h,o.buffer=c}catch(c){var i;this.error(`error while trying to add sourceBuffer: ${c.message}`),this.shiftAndExecuteNext(s),(i=this.operationQueue)==null||i.removeBlockers(),delete this.tracks[s],this.hls.trigger(T.ERROR,{type:ae.MEDIA_ERROR,details:G.BUFFER_ADD_CODEC_ERROR,fatal:!1,error:c,sourceBufferName:s,mimeType:d,parent:o.id});return}this.trackSourceBuffer(s,o)}}this.bufferCreated()}getTrackCodec(e,t){const n=e.supplemental;let i=e.codec;n&&(t==="video"||t==="audiovideo")&&gc(n,"video")&&(i=bc(i,n));const r=Qi(i,e.levelCodec);return r?t.slice(0,5)==="audio"?gr(r,this.appendSource):r:""}trackSourceBuffer(e,t){const n=t.buffer;if(!n)return;const i=this.getTrackCodec(t,e);this.tracks[e]={buffer:n,codec:i,container:t.container,levelCodec:t.levelCodec,supplemental:t.supplemental,metadata:t.metadata,id:t.id,listeners:[]},this.removeBufferListeners(e),this.addBufferListener(e,"updatestart",this.onSBUpdateStart),this.addBufferListener(e,"updateend",this.onSBUpdateEnd),this.addBufferListener(e,"error",this.onSBUpdateError),this.appendSource&&this.addBufferListener(e,"bufferedchange",(r,s)=>{const o=s.removedRanges;o!=null&&o.length&&this.hls.trigger(T.BUFFER_FLUSHED,{type:r})})}get mediaSrc(){var e,t;const n=((e=this.media)==null||(t=e.querySelector)==null?void 0:t.call(e,"source"))||this.media;return n==null?void 0:n.src}onSBUpdateStart(e){const t=this.currentOp(e);t&&t.onStart()}onSBUpdateEnd(e){var t;if(((t=this.mediaSource)==null?void 0:t.readyState)==="closed"){this.resetBuffer(e);return}const n=this.currentOp(e);n&&(n.onComplete(),this.shiftAndExecuteNext(e))}onSBUpdateError(e,t){var n;const i=new Error(`${e} SourceBuffer error. MediaSource readyState: ${(n=this.mediaSource)==null?void 0:n.readyState}`);this.error(`${i}`,t),this.hls.trigger(T.ERROR,{type:ae.MEDIA_ERROR,details:G.BUFFER_APPENDING_ERROR,sourceBufferName:e,error:i,fatal:!1});const r=this.currentOp(e);r&&r.onError(i)}removeExecutor(e,t,n){const{media:i,mediaSource:r}=this,s=this.tracks[e],o=s==null?void 0:s.buffer;if(!i||!r||!o){this.warn(`Attempting to remove from the ${e} SourceBuffer, but it does not exist`),this.shiftAndExecuteNext(e);return}const l=te(i.duration)?i.duration:1/0,d=te(r.duration)?r.duration:1/0,c=Math.max(0,t),u=Math.min(n,l,d);u>c&&(!s.ending||s.ended)?(s.ended=!1,this.log(`Removing [${c},${u}] from the ${e} SourceBuffer`),o.remove(c,u)):this.shiftAndExecuteNext(e)}appendExecutor(e,t){const n=this.tracks[t],i=n==null?void 0:n.buffer;if(!i)throw new Ih(`Attempting to append to the ${t} SourceBuffer, but it does not exist`);n.ending=!1,n.ended=!1,i.appendBuffer(e)}blockUntilOpen(e){this.isUpdating()||this.isQueued()?this.blockBuffers(e):e()}isUpdating(){return this.sourceBuffers.some(([e,t])=>e&&t.updating)}isQueued(){return this.sourceBuffers.some(([e])=>e&&!!this.currentOp(e))}isPending(e){return!!e&&!e.buffer}blockBuffers(e,t=this.sourceBufferTypes){if(!t.length){this.log("Blocking operation requested, but no SourceBuffers exist"),Promise.resolve().then(e);return}const{operationQueue:n}=this,i=t.map(s=>this.appendBlocker(s));t.length>1&&!!this.blockedAudioAppend&&this.unblockAudio(),Promise.all(i).then(s=>{n===this.operationQueue&&(e(),this.stepOperationQueue(t))})}stepOperationQueue(e){e.forEach(t=>{var n;const i=(n=this.tracks[t])==null?void 0:n.buffer;!i||i.updating||this.shiftAndExecuteNext(t)})}append(e,t,n){this.operationQueue&&this.operationQueue.append(e,t,n)}appendBlocker(e){if(this.operationQueue)return this.operationQueue.appendBlocker(e)}currentOp(e){return this.operationQueue?this.operationQueue.current(e):null}executeNext(e){e&&this.operationQueue&&this.operationQueue.executeNext(e)}shiftAndExecuteNext(e){this.operationQueue&&this.operationQueue.shiftAndExecuteNext(e)}get pendingTrackCount(){return Object.keys(this.tracks).reduce((e,t)=>e+(this.isPending(this.tracks[t])?1:0),0)}get sourceBufferCount(){return this.sourceBuffers.reduce((e,[t])=>e+(t?1:0),0)}get sourceBufferTypes(){return this.sourceBuffers.map(([e])=>e).filter(e=>!!e)}addBufferListener(e,t,n){const i=this.tracks[e];if(!i)return;const r=i.buffer;if(!r)return;const s=n.bind(this,e);i.listeners.push({event:t,listener:s}),r.addEventListener(t,s)}removeBufferListeners(e){const t=this.tracks[e];if(!t)return;const n=t.buffer;n&&(t.listeners.forEach(i=>{n.removeEventListener(i.event,i.listener)}),t.listeners.length=0)}}function ra(a){const e=a.querySelectorAll("source");[].slice.call(e).forEach(t=>{a.removeChild(t)})}function Rh(a,e){const t=self.document.createElement("source");t.type="video/mp4",t.src=e,a.appendChild(t)}function ar(a){return a==="audio"?1:0}class Nr{constructor(e){this.hls=void 0,this.autoLevelCapping=void 0,this.firstLevel=void 0,this.media=void 0,this.restrictedLevels=void 0,this.timer=void 0,this.clientRect=void 0,this.streamController=void 0,this.hls=e,this.autoLevelCapping=Number.POSITIVE_INFINITY,this.firstLevel=-1,this.media=null,this.restrictedLevels=[],this.timer=void 0,this.clientRect=null,this.registerListeners()}setStreamController(e){this.streamController=e}destroy(){this.hls&&this.unregisterListener(),this.timer&&this.stopCapping(),this.media=null,this.clientRect=null,this.hls=this.streamController=null}registerListeners(){const{hls:e}=this;e.on(T.FPS_DROP_LEVEL_CAPPING,this.onFpsDropLevelCapping,this),e.on(T.MEDIA_ATTACHING,this.onMediaAttaching,this),e.on(T.MANIFEST_PARSED,this.onManifestParsed,this),e.on(T.LEVELS_UPDATED,this.onLevelsUpdated,this),e.on(T.BUFFER_CODECS,this.onBufferCodecs,this),e.on(T.MEDIA_DETACHING,this.onMediaDetaching,this)}unregisterListener(){const{hls:e}=this;e.off(T.FPS_DROP_LEVEL_CAPPING,this.onFpsDropLevelCapping,this),e.off(T.MEDIA_ATTACHING,this.onMediaAttaching,this),e.off(T.MANIFEST_PARSED,this.onManifestParsed,this),e.off(T.LEVELS_UPDATED,this.onLevelsUpdated,this),e.off(T.BUFFER_CODECS,this.onBufferCodecs,this),e.off(T.MEDIA_DETACHING,this.onMediaDetaching,this)}onFpsDropLevelCapping(e,t){const n=this.hls.levels[t.droppedLevel];this.isLevelAllowed(n)&&this.restrictedLevels.push({bitrate:n.bitrate,height:n.height,width:n.width})}onMediaAttaching(e,t){this.media=t.media instanceof HTMLVideoElement?t.media:null,this.clientRect=null,this.timer&&this.hls.levels.length&&this.detectPlayerSize()}onManifestParsed(e,t){const n=this.hls;this.restrictedLevels=[],this.firstLevel=t.firstLevel,n.config.capLevelToPlayerSize&&t.video&&this.startCapping()}onLevelsUpdated(e,t){this.timer&&te(this.autoLevelCapping)&&this.detectPlayerSize()}onBufferCodecs(e,t){this.hls.config.capLevelToPlayerSize&&t.video&&this.startCapping()}onMediaDetaching(){this.stopCapping(),this.media=null}detectPlayerSize(){if(this.media){if(this.mediaHeight<=0||this.mediaWidth<=0){this.clientRect=null;return}const e=this.hls.levels;if(e.length){const t=this.hls,n=this.getMaxLevel(e.length-1);n!==this.autoLevelCapping&&t.logger.log(`Setting autoLevelCapping to ${n}: ${e[n].height}p@${e[n].bitrate} for media ${this.mediaWidth}x${this.mediaHeight}`),t.autoLevelCapping=n,t.autoLevelEnabled&&t.autoLevelCapping>this.autoLevelCapping&&this.streamController&&this.streamController.nextLevelSwitch(),this.autoLevelCapping=t.autoLevelCapping}}}getMaxLevel(e){const t=this.hls.levels;if(!t.length)return-1;const n=t.filter((i,r)=>this.isLevelAllowed(i)&&r<=e);return this.clientRect=null,Nr.getMaxLevelByMediaSize(n,this.mediaWidth,this.mediaHeight)}startCapping(){this.timer||(this.autoLevelCapping=Number.POSITIVE_INFINITY,self.clearInterval(this.timer),this.timer=self.setInterval(this.detectPlayerSize.bind(this),1e3),this.detectPlayerSize())}stopCapping(){this.restrictedLevels=[],this.firstLevel=-1,this.autoLevelCapping=Number.POSITIVE_INFINITY,this.timer&&(self.clearInterval(this.timer),this.timer=void 0)}getDimensions(){if(this.clientRect)return this.clientRect;const e=this.media,t={width:0,height:0};if(e){const n=e.getBoundingClientRect();t.width=n.width,t.height=n.height,!t.width&&!t.height&&(t.width=n.right-n.left||e.width||0,t.height=n.bottom-n.top||e.height||0)}return this.clientRect=t,t}get mediaWidth(){return this.getDimensions().width*this.contentScaleFactor}get mediaHeight(){return this.getDimensions().height*this.contentScaleFactor}get contentScaleFactor(){let e=1;if(!this.hls.config.ignoreDevicePixelRatio)try{e=self.devicePixelRatio}catch{}return Math.min(e,this.hls.config.maxDevicePixelRatio)}isLevelAllowed(e){return!this.restrictedLevels.some(n=>e.bitrate===n.bitrate&&e.width===n.width&&e.height===n.height)}static getMaxLevelByMediaSize(e,t,n){if(!(e!=null&&e.length))return-1;const i=(o,l)=>l?o.width!==l.width||o.height!==l.height:!0;let r=e.length-1;const s=Math.max(t,n);for(let o=0;o<e.length;o+=1){const l=e[o];if((l.width>=s||l.height>=s)&&i(l,e[o+1])){r=o;break}}return r}}const _h={MANIFEST:"m",AUDIO:"a",VIDEO:"v",MUXED:"av",INIT:"i",CAPTION:"c",TIMED_TEXT:"tt",KEY:"k",OTHER:"o"},Ne=_h,Dh={HLS:"h"},Bh=Dh,Ph="CMCD-Object",Oh="CMCD-Request",Fh="CMCD-Session",Mh="CMCD-Status",_n={OBJECT:Ph,REQUEST:Oh,SESSION:Fh,STATUS:Mh},Nh={[_n.OBJECT]:["br","d","ot","tb"],[_n.REQUEST]:["bl","dl","mtp","nor","nrr","su"],[_n.SESSION]:["cid","pr","sf","sid","st","v"],[_n.STATUS]:["bs","rtp"]};class Zt{constructor(e,t){Array.isArray(e)&&(e=e.map(n=>n instanceof Zt?n:new Zt(n))),this.value=e,this.params=t}}const Uh="Dict";function $h(a){return Array.isArray(a)?JSON.stringify(a):a instanceof Map?"Map{}":a instanceof Set?"Set{}":typeof a=="object"?JSON.stringify(a):String(a)}function Gh(a,e,t,n){return new Error(`failed to ${a} "${$h(e)}" as ${t}`,{cause:n})}function at(a,e,t){return Gh("serialize",a,e,t)}class co{constructor(e){this.description=e}}const sa="Bare Item",qh="Boolean";function Kh(a){if(typeof a!="boolean")throw at(a,qh);return a?"?1":"?0"}const Hh="Byte Sequence";function zh(a){if(ArrayBuffer.isView(a)===!1)throw at(a,Hh);return`:${Nu(a)}:`}const Yh="Integer";function Vh(a){return a<-999999999999999||999999999999999<a}function uo(a){if(Vh(a))throw at(a,Yh);return a.toString()}function Wh(a){return`@${uo(a.getTime()/1e3)}`}const jh="Decimal";function Qh(a){const e=ja(a,3);if(Math.floor(Math.abs(e)).toString().length>12)throw at(a,jh);const t=e.toString();return t.includes(".")?t:`${t}.0`}const Xh="String",Zh=/[\x00-\x1f\x7f]+/;function Jh(a){if(Zh.test(a))throw at(a,Xh);return`"${a.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}"`}function ef(a){return a.description||a.toString().slice(7,-1)}const tf="Token";function aa(a){const e=ef(a);if(/^([a-zA-Z*])([!#$%&'*+\-.^_`|~\w:/]*)$/.test(e)===!1)throw at(e,tf);return e}function Er(a){switch(typeof a){case"number":if(!te(a))throw at(a,sa);return Number.isInteger(a)?uo(a):Qh(a);case"string":return Jh(a);case"symbol":return aa(a);case"boolean":return Kh(a);case"object":if(a instanceof Date)return Wh(a);if(a instanceof Uint8Array)return zh(a);if(a instanceof co)return aa(a);default:throw at(a,sa)}}const nf="Key";function Sr(a){if(/^[a-z*][a-z0-9\-_.*]*$/.test(a)===!1)throw at(a,nf);return a}function Ur(a){return a==null?"":Object.entries(a).map(([e,t])=>t===!0?`;${Sr(e)}`:`;${Sr(e)}=${Er(t)}`).join("")}function ho(a){return a instanceof Zt?`${Er(a.value)}${Ur(a.params)}`:Er(a)}function rf(a){return`(${a.value.map(ho).join(" ")})${Ur(a.params)}`}function sf(a,e={whitespace:!0}){if(typeof a!="object")throw at(a,Uh);const t=a instanceof Map?a.entries():Object.entries(a),n=e!=null&&e.whitespace?" ":"";return Array.from(t).map(([i,r])=>{r instanceof Zt||(r=new Zt(r));let s=Sr(i);return r.value===!0?s+=Ur(r.params):(s+="=",Array.isArray(r.value)?s+=rf(r):s+=ho(r)),s}).join(`,${n}`)}function af(a,e){return sf(a,e)}function of(a){return a==="ot"||a==="sf"||a==="st"}function lf(a){return typeof a=="number"?te(a):a!=null&&a!==""&&a!==!1}const mi=a=>Math.round(a),df=(a,e)=>(e!=null&&e.baseUrl&&(a=Uu(a,e.baseUrl)),encodeURIComponent(a)),oi=a=>mi(a/100)*100,cf={br:mi,d:mi,bl:oi,dl:oi,mtp:oi,nor:df,rtp:oi,tb:mi};function uf(a,e){const t={};if(a==null||typeof a!="object")return t;const n=Object.keys(a).sort(),i=Te({},cf,e==null?void 0:e.formatters),r=e==null?void 0:e.filter;return n.forEach(s=>{if(r!=null&&r(s))return;let o=a[s];const l=i[s];l&&(o=l(o,e)),!(s==="v"&&o===1)&&(s=="pr"&&o===1||lf(o)&&(of(s)&&typeof o=="string"&&(o=new co(o)),t[s]=o))}),t}function fo(a,e={}){return a?af(uf(a,e),Te({whitespace:!1},e)):""}function hf(a,e={}){const t={};if(!a)return t;const n=Object.entries(a),i=Object.entries(Nh).concat(Object.entries((e==null?void 0:e.customHeaderMap)||{})),r=n.reduce((s,o)=>{var l,d;const[c,u]=o,h=((l=i.find(y=>y[1].includes(c)))===null||l===void 0?void 0:l[0])||_n.REQUEST;return(d=s[h])!==null&&d!==void 0||(s[h]={}),s[h][c]=u,s},{});return Object.entries(r).reduce((s,[o,l])=>(s[o]=fo(l,e),s),t)}function ff(a,e,t){return Te(a,hf(e,t))}const pf="CMCD";function mf(a,e={}){if(!a)return"";const t=fo(a,e);return`${pf}=${encodeURIComponent(t)}`}const oa=/CMCD=[^&#]+/;function gf(a,e,t){const n=mf(e,t);if(!n)return a;if(oa.test(a))return a.replace(oa,n);const i=a.includes("?")?"&":"?";return`${a}${i}${n}`}class yf{constructor(e){this.hls=void 0,this.config=void 0,this.media=void 0,this.sid=void 0,this.cid=void 0,this.useHeaders=!1,this.includeKeys=void 0,this.initialized=!1,this.starved=!1,this.buffering=!0,this.audioBuffer=void 0,this.videoBuffer=void 0,this.onWaiting=()=>{this.initialized&&(this.starved=!0),this.buffering=!0},this.onPlaying=()=>{this.initialized||(this.initialized=!0),this.buffering=!1},this.applyPlaylistData=i=>{try{this.apply(i,{ot:Ne.MANIFEST,su:!this.initialized})}catch(r){this.hls.logger.warn("Could not generate manifest CMCD data.",r)}},this.applyFragmentData=i=>{try{const{frag:r,part:s}=i,o=this.hls.levels[r.level],l=this.getObjectType(r),d={d:(s||r).duration*1e3,ot:l};(l===Ne.VIDEO||l===Ne.AUDIO||l==Ne.MUXED)&&(d.br=o.bitrate/1e3,d.tb=this.getTopBandwidth(l)/1e3,d.bl=this.getBufferLength(l));const c=s?this.getNextPart(s):this.getNextFrag(r);c!=null&&c.url&&c.url!==r.url&&(d.nor=c.url),this.apply(i,d)}catch(r){this.hls.logger.warn("Could not generate segment CMCD data.",r)}},this.hls=e;const t=this.config=e.config,{cmcd:n}=t;n!=null&&(t.pLoader=this.createPlaylistLoader(),t.fLoader=this.createFragmentLoader(),this.sid=n.sessionId||e.sessionId,this.cid=n.contentId,this.useHeaders=n.useHeaders===!0,this.includeKeys=n.includeKeys,this.registerListeners())}registerListeners(){const e=this.hls;e.on(T.MEDIA_ATTACHED,this.onMediaAttached,this),e.on(T.MEDIA_DETACHED,this.onMediaDetached,this),e.on(T.BUFFER_CREATED,this.onBufferCreated,this)}unregisterListeners(){const e=this.hls;e.off(T.MEDIA_ATTACHED,this.onMediaAttached,this),e.off(T.MEDIA_DETACHED,this.onMediaDetached,this),e.off(T.BUFFER_CREATED,this.onBufferCreated,this)}destroy(){this.unregisterListeners(),this.onMediaDetached(),this.hls=this.config=this.audioBuffer=this.videoBuffer=null,this.onWaiting=this.onPlaying=this.media=null}onMediaAttached(e,t){this.media=t.media,this.media.addEventListener("waiting",this.onWaiting),this.media.addEventListener("playing",this.onPlaying)}onMediaDetached(){this.media&&(this.media.removeEventListener("waiting",this.onWaiting),this.media.removeEventListener("playing",this.onPlaying),this.media=null)}onBufferCreated(e,t){var n,i;this.audioBuffer=(n=t.tracks.audio)==null?void 0:n.buffer,this.videoBuffer=(i=t.tracks.video)==null?void 0:i.buffer}createData(){var e;return{v:1,sf:Bh.HLS,sid:this.sid,cid:this.cid,pr:(e=this.media)==null?void 0:e.playbackRate,mtp:this.hls.bandwidthEstimate/1e3}}apply(e,t={}){Te(t,this.createData());const n=t.ot===Ne.INIT||t.ot===Ne.VIDEO||t.ot===Ne.MUXED;this.starved&&n&&(t.bs=!0,t.su=!0,this.starved=!1),t.su==null&&(t.su=this.buffering);const{includeKeys:i}=this;i&&(t=Object.keys(t).reduce((s,o)=>(i.includes(o)&&(s[o]=t[o]),s),{}));const r={baseUrl:e.url};this.useHeaders?(e.headers||(e.headers={}),ff(e.headers,t,r)):e.url=gf(e.url,t,r)}getNextFrag(e){var t;const n=(t=this.hls.levels[e.level])==null?void 0:t.details;if(n){const i=e.sn-n.startSN;return n.fragments[i+1]}}getNextPart(e){var t,n;const{index:i,fragment:r}=e,s=(t=this.hls.levels[r.level])==null||(n=t.details)==null?void 0:n.partList;if(s){const{sn:o}=r;for(let l=s.length-1;l>=0;l--){const d=s[l];if(d.index===i&&d.fragment.sn===o)return s[l+1]}}}getObjectType(e){const{type:t}=e;if(t==="subtitle")return Ne.TIMED_TEXT;if(e.sn==="initSegment")return Ne.INIT;if(t==="audio")return Ne.AUDIO;if(t==="main")return this.hls.audioTracks.length?Ne.VIDEO:Ne.MUXED}getTopBandwidth(e){let t=0,n;const i=this.hls;if(e===Ne.AUDIO)n=i.audioTracks;else{const r=i.maxAutoLevel,s=r>-1?r+1:i.levels.length;n=i.levels.slice(0,s)}for(const r of n)r.bitrate>t&&(t=r.bitrate);return t>0?t:NaN}getBufferLength(e){const t=this.media,n=e===Ne.AUDIO?this.audioBuffer:this.videoBuffer;return!n||!t?NaN:Ee.bufferInfo(n,t.currentTime,this.config.maxBufferHole).len*1e3}createPlaylistLoader(){const{pLoader:e}=this.config,t=this.applyPlaylistData,n=e||this.config.loader;return class{constructor(r){this.loader=void 0,this.loader=new n(r)}get stats(){return this.loader.stats}get context(){return this.loader.context}destroy(){this.loader.destroy()}abort(){this.loader.abort()}load(r,s,o){t(r),this.loader.load(r,s,o)}}}createFragmentLoader(){const{fLoader:e}=this.config,t=this.applyFragmentData,n=e||this.config.loader;return class{constructor(r){this.loader=void 0,this.loader=new n(r)}get stats(){return this.loader.stats}get context(){return this.loader.context}destroy(){this.loader.destroy()}abort(){this.loader.abort()}load(r,s,o){t(r),this.loader.load(r,s,o)}}}}const Af=3e5;class bf extends pt{constructor(e){super("content-steering",e.logger),this.hls=void 0,this.loader=null,this.uri=null,this.pathwayId=".",this._pathwayPriority=null,this.timeToLoad=300,this.reloadTimer=-1,this.updated=0,this.started=!1,this.enabled=!0,this.levels=null,this.audioTracks=null,this.subtitleTracks=null,this.penalizedPathways={},this.hls=e,this.registerListeners()}registerListeners(){const e=this.hls;e.on(T.MANIFEST_LOADING,this.onManifestLoading,this),e.on(T.MANIFEST_LOADED,this.onManifestLoaded,this),e.on(T.MANIFEST_PARSED,this.onManifestParsed,this),e.on(T.ERROR,this.onError,this)}unregisterListeners(){const e=this.hls;e&&(e.off(T.MANIFEST_LOADING,this.onManifestLoading,this),e.off(T.MANIFEST_LOADED,this.onManifestLoaded,this),e.off(T.MANIFEST_PARSED,this.onManifestParsed,this),e.off(T.ERROR,this.onError,this))}pathways(){return(this.levels||[]).reduce((e,t)=>(e.indexOf(t.pathwayId)===-1&&e.push(t.pathwayId),e),[])}get pathwayPriority(){return this._pathwayPriority}set pathwayPriority(e){this.updatePathwayPriority(e)}startLoad(){if(this.started=!0,this.clearTimeout(),this.enabled&&this.uri){if(this.updated){const e=this.timeToLoad*1e3-(performance.now()-this.updated);if(e>0){this.scheduleRefresh(this.uri,e);return}}this.loadSteeringManifest(this.uri)}}stopLoad(){this.started=!1,this.loader&&(this.loader.destroy(),this.loader=null),this.clearTimeout()}clearTimeout(){this.reloadTimer!==-1&&(self.clearTimeout(this.reloadTimer),this.reloadTimer=-1)}destroy(){this.unregisterListeners(),this.stopLoad(),this.hls=null,this.levels=this.audioTracks=this.subtitleTracks=null}removeLevel(e){const t=this.levels;t&&(this.levels=t.filter(n=>n!==e))}onManifestLoading(){this.stopLoad(),this.enabled=!0,this.timeToLoad=300,this.updated=0,this.uri=null,this.pathwayId=".",this.levels=this.audioTracks=this.subtitleTracks=null}onManifestLoaded(e,t){const{contentSteering:n}=t;n!==null&&(this.pathwayId=n.pathwayId,this.uri=n.uri,this.started&&this.startLoad())}onManifestParsed(e,t){this.audioTracks=t.audioTracks,this.subtitleTracks=t.subtitleTracks}onError(e,t){const{errorAction:n}=t;if((n==null?void 0:n.action)===Pe.SendAlternateToPenaltyBox&&n.flags===Qe.MoveAllAlternatesMatchingHost){const i=this.levels;let r=this._pathwayPriority,s=this.pathwayId;if(t.context){const{groupId:o,pathwayId:l,type:d}=t.context;o&&i?s=this.getPathwayForGroupId(o,d,s):l&&(s=l)}s in this.penalizedPathways||(this.penalizedPathways[s]=performance.now()),!r&&i&&(r=this.pathways()),r&&r.length>1&&(this.updatePathwayPriority(r),n.resolved=this.pathwayId!==s),n.resolved||this.warn(`Could not resolve ${t.details} ("${t.error.message}") with content-steering for Pathway: ${s} levels: ${i&&i.length} priorities: ${Ie(r)} penalized: ${Ie(this.penalizedPathways)}`)}}filterParsedLevels(e){this.levels=e;let t=this.getLevelsForPathway(this.pathwayId);if(t.length===0){const n=e[0].pathwayId;this.log(`No levels found in Pathway ${this.pathwayId}. Setting initial Pathway to "${n}"`),t=this.getLevelsForPathway(n),this.pathwayId=n}return t.length!==e.length&&this.log(`Found ${t.length}/${e.length} levels in Pathway "${this.pathwayId}"`),t}getLevelsForPathway(e){return this.levels===null?[]:this.levels.filter(t=>e===t.pathwayId)}updatePathwayPriority(e){this._pathwayPriority=e;let t;const n=this.penalizedPathways,i=performance.now();Object.keys(n).forEach(r=>{i-n[r]>Af&&delete n[r]});for(let r=0;r<e.length;r++){const s=e[r];if(s in n)continue;if(s===this.pathwayId)return;const o=this.hls.nextLoadLevel,l=this.hls.levels[o];if(t=this.getLevelsForPathway(s),t.length>0){this.log(`Setting Pathway to "${s}"`),this.pathwayId=s,yu(t),this.hls.trigger(T.LEVELS_UPDATED,{levels:t});const d=this.hls.levels[o];l&&d&&this.levels&&(d.attrs["STABLE-VARIANT-ID"]!==l.attrs["STABLE-VARIANT-ID"]&&d.bitrate!==l.bitrate&&this.log(`Unstable Pathways change from bitrate ${l.bitrate} to ${d.bitrate}`),this.hls.nextLoadLevel=o);break}}}getPathwayForGroupId(e,t,n){const i=this.getLevelsForPathway(n).concat(this.levels||[]);for(let r=0;r<i.length;r++)if(t===ft.AUDIO_TRACK&&i[r].hasAudioGroup(e)||t===ft.SUBTITLE_TRACK&&i[r].hasSubtitleGroup(e))return i[r].pathwayId;return n}clonePathways(e){const t=this.levels;if(!t)return;const n={},i={};e.forEach(r=>{const{ID:s,"BASE-ID":o,"URI-REPLACEMENT":l}=r;if(t.some(c=>c.pathwayId===s))return;const d=this.getLevelsForPathway(o).map(c=>{const u=new Gn(c.attrs);u["PATHWAY-ID"]=s;const h=u.AUDIO&&`${u.AUDIO}_clone_${s}`,y=u.SUBTITLES&&`${u.SUBTITLES}_clone_${s}`;h&&(n[u.AUDIO]=h,u.AUDIO=h),y&&(i[u.SUBTITLES]=y,u.SUBTITLES=y);const A=po(c.uri,u["STABLE-VARIANT-ID"],"PER-VARIANT-URIS",l),v=new Ai({attrs:u,audioCodec:c.audioCodec,bitrate:c.bitrate,height:c.height,name:c.name,url:A,videoCodec:c.videoCodec,width:c.width});if(c.audioGroups)for(let S=1;S<c.audioGroups.length;S++)v.addGroupId("audio",`${c.audioGroups[S]}_clone_${s}`);if(c.subtitleGroups)for(let S=1;S<c.subtitleGroups.length;S++)v.addGroupId("text",`${c.subtitleGroups[S]}_clone_${s}`);return v});t.push(...d),la(this.audioTracks,n,l,s),la(this.subtitleTracks,i,l,s)})}loadSteeringManifest(e){const t=this.hls.config,n=t.loader;this.loader&&this.loader.destroy(),this.loader=new n(t);let i;try{i=new self.URL(e)}catch{this.enabled=!1,this.log(`Failed to parse Steering Manifest URI: ${e}`);return}if(i.protocol!=="data:"){const c=(this.hls.bandwidthEstimate||t.abrEwmaDefaultEstimate)|0;i.searchParams.set("_HLS_pathway",this.pathwayId),i.searchParams.set("_HLS_throughput",""+c)}const r={responseType:"json",url:i.href},s=t.steeringManifestLoadPolicy.default,o=s.errorRetry||s.timeoutRetry||{},l={loadPolicy:s,timeout:s.maxLoadTimeMs,maxRetry:o.maxNumRetry||0,retryDelay:o.retryDelayMs||0,maxRetryDelay:o.maxRetryDelayMs||0},d={onSuccess:(c,u,h,y)=>{this.log(`Loaded steering manifest: "${i}"`);const A=c.data;if((A==null?void 0:A.VERSION)!==1){this.log(`Steering VERSION ${A.VERSION} not supported!`);return}this.updated=performance.now(),this.timeToLoad=A.TTL;const{"RELOAD-URI":v,"PATHWAY-CLONES":S,"PATHWAY-PRIORITY":k}=A;if(v)try{this.uri=new self.URL(v,i).href}catch{this.enabled=!1,this.log(`Failed to parse Steering Manifest RELOAD-URI: ${v}`);return}this.scheduleRefresh(this.uri||h.url),S&&this.clonePathways(S);const I={steeringManifest:A,url:i.toString()};this.hls.trigger(T.STEERING_MANIFEST_LOADED,I),k&&this.updatePathwayPriority(k)},onError:(c,u,h,y)=>{if(this.log(`Error loading steering manifest: ${c.code} ${c.text} (${u.url})`),this.stopLoad(),c.code===410){this.enabled=!1,this.log(`Steering manifest ${u.url} no longer available`);return}let A=this.timeToLoad*1e3;if(c.code===429){const v=this.loader;if(typeof(v==null?void 0:v.getResponseHeader)=="function"){const S=v.getResponseHeader("Retry-After");S&&(A=parseFloat(S)*1e3)}this.log(`Steering manifest ${u.url} rate limited`);return}this.scheduleRefresh(this.uri||u.url,A)},onTimeout:(c,u,h)=>{this.log(`Timeout loading steering manifest (${u.url})`),this.scheduleRefresh(this.uri||u.url)}};this.log(`Requesting steering manifest: ${i}`),this.loader.load(r,l,d)}scheduleRefresh(e,t=this.timeToLoad*1e3){this.clearTimeout(),this.reloadTimer=self.setTimeout(()=>{var n;const i=(n=this.hls)==null?void 0:n.media;if(i&&!i.ended){this.loadSteeringManifest(e);return}this.scheduleRefresh(e,this.timeToLoad*1e3)},t)}}function la(a,e,t,n){a&&Object.keys(e).forEach(i=>{const r=a.filter(s=>s.groupId===i).map(s=>{const o=Te({},s);return o.details=void 0,o.attrs=new Gn(o.attrs),o.url=o.attrs.URI=po(s.url,s.attrs["STABLE-RENDITION-ID"],"PER-RENDITION-URIS",t),o.groupId=o.attrs["GROUP-ID"]=e[i],o.attrs["PATHWAY-ID"]=n,o});a.push(...r)})}function po(a,e,t,n){const{HOST:i,PARAMS:r,[t]:s}=n;let o;e&&(o=s==null?void 0:s[e],o&&(a=o));const l=new self.URL(a);return i&&!o&&(l.host=i),r&&Object.keys(r).sort().forEach(d=>{d&&l.searchParams.set(d,r[d])}),l.href}class Vt extends pt{constructor(e){super("eme",e.logger),this.hls=void 0,this.config=void 0,this.media=null,this.keyFormatPromise=null,this.keySystemAccessPromises={},this._requestLicenseFailureCount=0,this.mediaKeySessions=[],this.keyIdToKeySessionPromise={},this.setMediaKeysQueue=Vt.CDMCleanupPromise?[Vt.CDMCleanupPromise]:[],this.onMediaEncrypted=t=>{const{initDataType:n,initData:i}=t,r=`"${t.type}" event: init data type: "${n}"`;if(this.debug(r),i!==null){if(!this.keyFormatPromise){let s=Object.keys(this.keySystemAccessPromises);s.length||(s=ii(this.config));const o=s.map(Ji).filter(l=>!!l);this.keyFormatPromise=this.getKeyFormatPromise(o)}this.keyFormatPromise.then(s=>{const o=Xi(s);let l,d;if(n==="sinf"){if(o!==Ae.FAIRPLAY){this.warn(`Ignoring unexpected "${t.type}" event with init data type: "${n}" for selected key-system ${o}`);return}const A=_e(new Uint8Array(i));try{const v=_r(JSON.parse(A).sinf),S=Ca(v);if(!S)throw new Error("'schm' box missing or not cbcs/cenc with schi > tenc");l=new Uint8Array(S.subarray(8,24)),d=Ae.FAIRPLAY}catch(v){this.warn(`${r} Failed to parse sinf: ${v}`);return}}else{if(o!==Ae.WIDEVINE&&o!==Ae.PLAYREADY){this.warn(`Ignoring unexpected "${t.type}" event with init data type: "${n}" for selected key-system ${o}`);return}const A=fc(i),v=A.filter(k=>!!k.systemId&&Zi(k.systemId)===o);v.length>1&&this.warn(`${r} Using first of ${v.length} pssh found for selected key-system ${o}`);const S=v[0];if(!S){A.length===0||A.some(k=>!k.systemId)?this.warn(`${r} contains incomplete or invalid pssh data`):this.log(`ignoring ${r} for ${A.map(k=>Zi(k.systemId)).join(",")} pssh data in favor of playlist keys`);return}if(d=Zi(S.systemId),S.version===0&&S.data)if(d===Ae.WIDEVINE){const k=S.data.length-22;l=new Uint8Array(S.data.subarray(k,k+16))}else d===Ae.PLAYREADY&&(l=Oa(S.data))}if(!d||!l)return;const c=it.hexDump(l),{keyIdToKeySessionPromise:u,mediaKeySessions:h}=this;let y=u[c];for(let A=0;A<h.length;A++){const v=h[A],S=v.decryptdata;if(!S.keyId)continue;const k=it.hexDump(S.keyId);if(c===k||S.uri.replace(/-/g,"").indexOf(c)!==-1){if(y=u[k],S.pssh)break;delete u[k],S.pssh=new Uint8Array(i),S.keyId=l,y=u[c]=y.then(()=>this.generateRequestWithPreferredKeySession(v,n,i,"encrypted-event-key-match")),y.catch(I=>this.handleError(I));break}}if(!y){if(d!==o){this.log(`Ignoring "${t.type}" event with ${d} init data for selected key-system ${o}`);return}y=u[c]=this.getKeySystemSelectionPromise([d]).then(({keySystem:A,mediaKeys:v})=>{var S;this.throwIfDestroyed();const k=new Ei("ISO-23001-7",c,(S=Ji(A))!=null?S:"");return k.pssh=new Uint8Array(i),k.keyId=l,this.attemptSetMediaKeys(A,v).then(()=>{this.throwIfDestroyed();const I=this.createMediaKeySessionContext({decryptdata:k,keySystem:A,mediaKeys:v});return this.generateRequestWithPreferredKeySession(I,n,i,"encrypted-event-no-match")})}),y.catch(A=>this.handleError(A))}})}},this.onWaitingForKey=t=>{this.log(`"${t.type}" event`)},this.hls=e,this.config=e.config,this.registerListeners()}destroy(){const e=this.media;this.unregisterListeners(),this.onMediaDetached(),this._clear(e);const t=this.config;t.requestMediaKeySystemAccessFunc=null,t.licenseXhrSetup=t.licenseResponseCallback=void 0,t.drmSystems=t.drmSystemOptions={},this.hls=this.config=this.keyIdToKeySessionPromise=null,this.onMediaEncrypted=this.onWaitingForKey=null}registerListeners(){this.hls.on(T.MEDIA_ATTACHED,this.onMediaAttached,this),this.hls.on(T.MEDIA_DETACHED,this.onMediaDetached,this),this.hls.on(T.MANIFEST_LOADING,this.onManifestLoading,this),this.hls.on(T.MANIFEST_LOADED,this.onManifestLoaded,this)}unregisterListeners(){this.hls.off(T.MEDIA_ATTACHED,this.onMediaAttached,this),this.hls.off(T.MEDIA_DETACHED,this.onMediaDetached,this),this.hls.off(T.MANIFEST_LOADING,this.onManifestLoading,this),this.hls.off(T.MANIFEST_LOADED,this.onManifestLoaded,this)}getLicenseServerUrl(e){const{drmSystems:t,widevineLicenseUrl:n}=this.config,i=t[e];if(i)return i.licenseUrl;if(e===Ae.WIDEVINE&&n)return n}getLicenseServerUrlOrThrow(e){const t=this.getLicenseServerUrl(e);if(t===void 0)throw new Error(`no license server URL configured for key-system "${e}"`);return t}getServerCertificateUrl(e){const{drmSystems:t}=this.config,n=t[e];if(n)return n.serverCertificateUrl;this.log(`No Server Certificate in config.drmSystems["${e}"]`)}attemptKeySystemAccess(e){const t=this.hls.levels,n=(s,o,l)=>!!s&&l.indexOf(s)===o,i=t.map(s=>s.audioCodec).filter(n),r=t.map(s=>s.videoCodec).filter(n);return i.length+r.length===0&&r.push("avc1.42e01e"),new Promise((s,o)=>{const l=d=>{const c=d.shift();this.getMediaKeysPromise(c,i,r).then(u=>s({keySystem:c,mediaKeys:u})).catch(u=>{d.length?l(d):u instanceof He?o(u):o(new He({type:ae.KEY_SYSTEM_ERROR,details:G.KEY_SYSTEM_NO_ACCESS,error:u,fatal:!0},u.message))})};l(e)})}requestMediaKeySystemAccess(e,t){const{requestMediaKeySystemAccessFunc:n}=this.config;if(typeof n!="function"){let i=`Configured requestMediaKeySystemAccess is not a function ${n}`;return Pa===null&&self.location.protocol==="http:"&&(i=`navigator.requestMediaKeySystemAccess is not available over insecure protocol ${location.protocol}`),Promise.reject(new Error(i))}return n(e,t)}getMediaKeysPromise(e,t,n){const i=su(e,t,n,this.config.drmSystemOptions),r=this.keySystemAccessPromises[e];let s=r==null?void 0:r.keySystemAccess;if(!s){this.log(`Requesting encrypted media "${e}" key-system access with config: ${Ie(i)}`),s=this.requestMediaKeySystemAccess(e,i);const o=this.keySystemAccessPromises[e]={keySystemAccess:s};return s.catch(l=>{this.log(`Failed to obtain access to key-system "${e}": ${l}`)}),s.then(l=>{this.log(`Access for key-system "${l.keySystem}" obtained`);const d=this.fetchServerCertificate(e);return this.log(`Create media-keys for "${e}"`),o.mediaKeys=l.createMediaKeys().then(c=>(this.log(`Media-keys created for "${e}"`),d.then(u=>u?this.setMediaKeysServerCertificate(c,e,u):c))),o.mediaKeys.catch(c=>{this.error(`Failed to create media-keys for "${e}"}: ${c}`)}),o.mediaKeys})}return s.then(()=>r.mediaKeys)}createMediaKeySessionContext({decryptdata:e,keySystem:t,mediaKeys:n}){this.log(`Creating key-system session "${t}" keyId: ${it.hexDump(e.keyId||[])}`);const i=n.createSession(),r={decryptdata:e,keySystem:t,mediaKeys:n,mediaKeysSession:i,keyStatus:"status-pending"};return this.mediaKeySessions.push(r),r}renewKeySession(e){const t=e.decryptdata;if(t.pssh){const n=this.createMediaKeySessionContext(e),i=this.getKeyIdString(t),r="cenc";this.keyIdToKeySessionPromise[i]=this.generateRequestWithPreferredKeySession(n,r,t.pssh.buffer,"expired")}else this.warn("Could not renew expired session. Missing pssh initData.");this.removeSession(e)}getKeyIdString(e){if(!e)throw new Error("Could not read keyId of undefined decryptdata");if(e.keyId===null)throw new Error("keyId is null");return it.hexDump(e.keyId)}updateKeySession(e,t){var n;const i=e.mediaKeysSession;return this.log(`Updating key-session "${i.sessionId}" for keyID ${it.hexDump(((n=e.decryptdata)==null?void 0:n.keyId)||[])}
      } (data length: ${t&&t.byteLength})`),i.update(t)}selectKeySystemFormat(e){const t=Object.keys(e.levelkeys||{});return this.keyFormatPromise||(this.log(`Selecting key-system from fragment (sn: ${e.sn} ${e.type}: ${e.level}) key formats ${t.join(", ")}`),this.keyFormatPromise=this.getKeyFormatPromise(t)),this.keyFormatPromise}getKeyFormatPromise(e){return new Promise((t,n)=>{const i=ii(this.config),r=e.map(Xi).filter(s=>!!s&&i.indexOf(s)!==-1);return this.getKeySystemSelectionPromise(r).then(({keySystem:s})=>{const o=Ji(s);o?t(o):n(new Error(`Unable to find format for key-system "${s}"`))}).catch(n)})}loadKey(e){const t=e.keyInfo.decryptdata,n=this.getKeyIdString(t),i=`(keyId: ${n} format: "${t.keyFormat}" method: ${t.method} uri: ${t.uri})`;this.log(`Starting session for key ${i}`);let r=this.keyIdToKeySessionPromise[n];return r||(r=this.getKeySystemForKeyPromise(t).then(({keySystem:o,mediaKeys:l})=>(this.throwIfDestroyed(),this.log(`Handle encrypted media sn: ${e.frag.sn} ${e.frag.type}: ${e.frag.level} using key ${i}`),this.attemptSetMediaKeys(o,l).then(()=>(this.throwIfDestroyed(),this.createMediaKeySessionContext({keySystem:o,mediaKeys:l,decryptdata:t}))))),(this.keyIdToKeySessionPromise[n]=r.then(o=>{const l="cenc",d=t.pssh?t.pssh.buffer:null;return this.generateRequestWithPreferredKeySession(o,l,d,"playlist-key")})).catch(o=>this.handleError(o))),r}throwIfDestroyed(e="Invalid state"){if(!this.hls)throw new Error("invalid state")}handleError(e){this.hls&&(this.error(e.message),e instanceof He?this.hls.trigger(T.ERROR,e.data):this.hls.trigger(T.ERROR,{type:ae.KEY_SYSTEM_ERROR,details:G.KEY_SYSTEM_NO_KEYS,error:e,fatal:!0}))}getKeySystemForKeyPromise(e){const t=this.getKeyIdString(e),n=this.keyIdToKeySessionPromise[t];if(!n){const i=Xi(e.keyFormat),r=i?[i]:ii(this.config);return this.attemptKeySystemAccess(r)}return n}getKeySystemSelectionPromise(e){if(e.length||(e=ii(this.config)),e.length===0)throw new He({type:ae.KEY_SYSTEM_ERROR,details:G.KEY_SYSTEM_NO_CONFIGURED_LICENSE,fatal:!0},`Missing key-system license configuration options ${Ie({drmSystems:this.config.drmSystems})}`);return this.attemptKeySystemAccess(e)}attemptSetMediaKeys(e,t){const n=this.setMediaKeysQueue.slice();this.log(`Setting media-keys for "${e}"`);const i=Promise.all(n).then(()=>{if(!this.media)throw new Error("Attempted to set mediaKeys without media element attached");return this.media.setMediaKeys(t)});return this.setMediaKeysQueue.push(i),i.then(()=>{this.log(`Media-keys set for "${e}"`),n.push(i),this.setMediaKeysQueue=this.setMediaKeysQueue.filter(r=>n.indexOf(r)===-1)})}generateRequestWithPreferredKeySession(e,t,n,i){var r,s;const o=(r=this.config.drmSystems)==null||(s=r[e.keySystem])==null?void 0:s.generateRequest;if(o)try{const A=o.call(this.hls,t,n,e);if(!A)throw new Error("Invalid response from configured generateRequest filter");t=A.initDataType,n=A.initData?A.initData:null,e.decryptdata.pssh=n?new Uint8Array(n):null}catch(A){var l;if(this.warn(A.message),(l=this.hls)!=null&&l.config.debug)throw A}if(n===null)return this.log(`Skipping key-session request for "${i}" (no initData)`),Promise.resolve(e);const d=this.getKeyIdString(e.decryptdata);this.log(`Generating key-session request for "${i}": ${d} (init data type: ${t} length: ${n?n.byteLength:null})`);const c=new qa,u=e._onmessage=A=>{const v=e.mediaKeysSession;if(!v){c.emit("error",new Error("invalid state"));return}const{messageType:S,message:k}=A;this.log(`"${S}" message event for session "${v.sessionId}" message size: ${k.byteLength}`),S==="license-request"||S==="license-renewal"?this.renewLicense(e,k).catch(I=>{c.eventNames().length?c.emit("error",I):this.handleError(I)}):S==="license-release"?e.keySystem===Ae.FAIRPLAY&&(this.updateKeySession(e,yr("acknowledged")),this.removeSession(e)):this.warn(`unhandled media key message type "${S}"`)},h=e._onkeystatuseschange=A=>{if(!e.mediaKeysSession){c.emit("error",new Error("invalid state"));return}this.onKeyStatusChange(e);const S=e.keyStatus;c.emit("keyStatus",S),S==="expired"&&(this.warn(`${e.keySystem} expired for key ${d}`),this.renewKeySession(e))};e.mediaKeysSession.addEventListener("message",u),e.mediaKeysSession.addEventListener("keystatuseschange",h);const y=new Promise((A,v)=>{c.on("error",v),c.on("keyStatus",S=>{S.startsWith("usable")?A():S==="output-restricted"?v(new He({type:ae.KEY_SYSTEM_ERROR,details:G.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED,fatal:!1},"HDCP level output restricted")):S==="internal-error"?v(new He({type:ae.KEY_SYSTEM_ERROR,details:G.KEY_SYSTEM_STATUS_INTERNAL_ERROR,fatal:!0},`key status changed to "${S}"`)):S==="expired"?v(new Error("key expired while generating request")):this.warn(`unhandled key status change "${S}"`)})});return e.mediaKeysSession.generateRequest(t,n).then(()=>{var A;this.log(`Request generated for key-session "${(A=e.mediaKeysSession)==null?void 0:A.sessionId}" keyId: ${d}`)}).catch(A=>{throw new He({type:ae.KEY_SYSTEM_ERROR,details:G.KEY_SYSTEM_NO_SESSION,error:A,fatal:!1},`Error generating key-session request: ${A}`)}).then(()=>y).catch(A=>{throw c.removeAllListeners(),this.removeSession(e),A}).then(()=>(c.removeAllListeners(),e))}onKeyStatusChange(e){e.mediaKeysSession.keyStatuses.forEach((t,n)=>{this.log(`key status change "${t}" for keyStatuses keyId: ${it.hexDump("buffer"in n?new Uint8Array(n.buffer,n.byteOffset,n.byteLength):new Uint8Array(n))} session keyId: ${it.hexDump(new Uint8Array(e.decryptdata.keyId||[]))} uri: ${e.decryptdata.uri}`),e.keyStatus=t})}fetchServerCertificate(e){const t=this.config,n=t.loader,i=new n(t),r=this.getServerCertificateUrl(e);return r?(this.log(`Fetching server certificate for "${e}"`),new Promise((s,o)=>{const l={responseType:"arraybuffer",url:r},d=t.certLoadPolicy.default,c={loadPolicy:d,timeout:d.maxLoadTimeMs,maxRetry:0,retryDelay:0,maxRetryDelay:0},u={onSuccess:(h,y,A,v)=>{s(h.data)},onError:(h,y,A,v)=>{o(new He({type:ae.KEY_SYSTEM_ERROR,details:G.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED,fatal:!0,networkDetails:A,response:Se({url:l.url,data:void 0},h)},`"${e}" certificate request failed (${r}). Status: ${h.code} (${h.text})`))},onTimeout:(h,y,A)=>{o(new He({type:ae.KEY_SYSTEM_ERROR,details:G.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED,fatal:!0,networkDetails:A,response:{url:l.url,data:void 0}},`"${e}" certificate request timed out (${r})`))},onAbort:(h,y,A)=>{o(new Error("aborted"))}};i.load(l,c,u)})):Promise.resolve()}setMediaKeysServerCertificate(e,t,n){return new Promise((i,r)=>{e.setServerCertificate(n).then(s=>{this.log(`setServerCertificate ${s?"success":"not supported by CDM"} (${n==null?void 0:n.byteLength}) on "${t}"`),i(e)}).catch(s=>{r(new He({type:ae.KEY_SYSTEM_ERROR,details:G.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED,error:s,fatal:!0},s.message))})})}renewLicense(e,t){return this.requestLicense(e,new Uint8Array(t)).then(n=>this.updateKeySession(e,new Uint8Array(n)).catch(i=>{throw new He({type:ae.KEY_SYSTEM_ERROR,details:G.KEY_SYSTEM_SESSION_UPDATE_FAILED,error:i,fatal:!0},i.message)}))}unpackPlayReadyKeyMessage(e,t){const n=String.fromCharCode.apply(null,new Uint16Array(t.buffer));if(!n.includes("PlayReadyKeyMessage"))return e.setRequestHeader("Content-Type","text/xml; charset=utf-8"),t;const i=new DOMParser().parseFromString(n,"application/xml"),r=i.querySelectorAll("HttpHeader");if(r.length>0){let c;for(let u=0,h=r.length;u<h;u++){var s,o;c=r[u];const y=(s=c.querySelector("name"))==null?void 0:s.textContent,A=(o=c.querySelector("value"))==null?void 0:o.textContent;y&&A&&e.setRequestHeader(y,A)}}const l=i.querySelector("Challenge"),d=l==null?void 0:l.textContent;if(!d)throw new Error("Cannot find <Challenge> in key message");return yr(atob(d))}setupLicenseXHR(e,t,n,i){const r=this.config.licenseXhrSetup;return r?Promise.resolve().then(()=>{if(!n.decryptdata)throw new Error("Key removed");return r.call(this.hls,e,t,n,i)}).catch(s=>{if(!n.decryptdata)throw s;return e.open("POST",t,!0),r.call(this.hls,e,t,n,i)}).then(s=>(e.readyState||e.open("POST",t,!0),{xhr:e,licenseChallenge:s||i})):(e.open("POST",t,!0),Promise.resolve({xhr:e,licenseChallenge:i}))}requestLicense(e,t){const n=this.config.keyLoadPolicy.default;return new Promise((i,r)=>{const s=this.getLicenseServerUrlOrThrow(e.keySystem);this.log(`Sending license request to URL: ${s}`);const o=new XMLHttpRequest;o.responseType="arraybuffer",o.onreadystatechange=()=>{if(!this.hls||!e.mediaKeysSession)return r(new Error("invalid state"));if(o.readyState===4)if(o.status===200){this._requestLicenseFailureCount=0;let l=o.response;this.log(`License received ${l instanceof ArrayBuffer?l.byteLength:l}`);const d=this.config.licenseResponseCallback;if(d)try{l=d.call(this.hls,o,s,e)}catch(c){this.error(c)}i(l)}else{const l=n.errorRetry,d=l?l.maxNumRetry:0;if(this._requestLicenseFailureCount++,this._requestLicenseFailureCount>d||o.status>=400&&o.status<500)r(new He({type:ae.KEY_SYSTEM_ERROR,details:G.KEY_SYSTEM_LICENSE_REQUEST_FAILED,fatal:!0,networkDetails:o,response:{url:s,data:void 0,code:o.status,text:o.statusText}},`License Request XHR failed (${s}). Status: ${o.status} (${o.statusText})`));else{const c=d-this._requestLicenseFailureCount+1;this.warn(`Retrying license request, ${c} attempts left`),this.requestLicense(e,t).then(i,r)}}},e.licenseXhr&&e.licenseXhr.readyState!==XMLHttpRequest.DONE&&e.licenseXhr.abort(),e.licenseXhr=o,this.setupLicenseXHR(o,s,e,t).then(({xhr:l,licenseChallenge:d})=>{e.keySystem==Ae.PLAYREADY&&(d=this.unpackPlayReadyKeyMessage(l,d)),l.send(d)})})}onMediaAttached(e,t){if(!this.config.emeEnabled)return;const n=t.media;this.media=n,n.removeEventListener("encrypted",this.onMediaEncrypted),n.removeEventListener("waitingforkey",this.onWaitingForKey),n.addEventListener("encrypted",this.onMediaEncrypted),n.addEventListener("waitingforkey",this.onWaitingForKey)}onMediaDetached(){const e=this.media;e&&(e.removeEventListener("encrypted",this.onMediaEncrypted),e.removeEventListener("waitingforkey",this.onWaitingForKey),this.media=null)}_clear(e){var t;const n=this.mediaKeySessions;this._requestLicenseFailureCount=0,this.setMediaKeysQueue=[],this.mediaKeySessions=[],this.keyIdToKeySessionPromise={},Ei.clearKeyUriToKeyIdMap();const i=n.length;Vt.CDMCleanupPromise=Promise.all(n.map(r=>this.removeSession(r)).concat(e==null||(t=e.setMediaKeys(null))==null?void 0:t.catch(r=>{var s;this.log(`Could not clear media keys: ${r}`),(s=this.hls)==null||s.trigger(T.ERROR,{type:ae.OTHER_ERROR,details:G.KEY_SYSTEM_DESTROY_MEDIA_KEYS_ERROR,fatal:!1,error:new Error(`Could not clear media keys: ${r}`)})}))).then(()=>{i&&(this.log("finished closing key sessions and clearing media keys"),n.length=0)}).catch(r=>{var s;this.log(`Could not close sessions and clear media keys: ${r}`),(s=this.hls)==null||s.trigger(T.ERROR,{type:ae.OTHER_ERROR,details:G.KEY_SYSTEM_DESTROY_CLOSE_SESSION_ERROR,fatal:!1,error:new Error(`Could not close sessions and clear media keys: ${r}`)})})}onManifestLoading(){this.keyFormatPromise=null}onManifestLoaded(e,{sessionKeys:t}){if(!(!t||!this.config.emeEnabled)&&!this.keyFormatPromise){const n=t.reduce((i,r)=>(i.indexOf(r.keyFormat)===-1&&i.push(r.keyFormat),i),[]);this.log(`Selecting key-system from session-keys ${n.join(", ")}`),this.keyFormatPromise=this.getKeyFormatPromise(n)}}removeSession(e){const{mediaKeysSession:t,licenseXhr:n}=e;if(t){this.log(`Remove licenses and keys and close session ${t.sessionId}`),e._onmessage&&(t.removeEventListener("message",e._onmessage),e._onmessage=void 0),e._onkeystatuseschange&&(t.removeEventListener("keystatuseschange",e._onkeystatuseschange),e._onkeystatuseschange=void 0),n&&n.readyState!==XMLHttpRequest.DONE&&n.abort(),e.mediaKeysSession=e.decryptdata=e.licenseXhr=void 0;const i=this.mediaKeySessions.indexOf(e);return i>-1&&this.mediaKeySessions.splice(i,1),t.remove().catch(r=>{var s;this.log(`Could not remove session: ${r}`),(s=this.hls)==null||s.trigger(T.ERROR,{type:ae.OTHER_ERROR,details:G.KEY_SYSTEM_DESTROY_REMOVE_SESSION_ERROR,fatal:!1,error:new Error(`Could not remove session: ${r}`)})}).then(()=>t.close()).catch(r=>{var s;this.log(`Could not close session: ${r}`),(s=this.hls)==null||s.trigger(T.ERROR,{type:ae.OTHER_ERROR,details:G.KEY_SYSTEM_DESTROY_CLOSE_SESSION_ERROR,fatal:!1,error:new Error(`Could not close session: ${r}`)})})}}}Vt.CDMCleanupPromise=void 0;class He extends Error{constructor(e,t){super(t),this.data=void 0,e.error||(e.error=new Error(t)),this.data=e,e.err=e.error}}class vf{constructor(e){this.hls=void 0,this.isVideoPlaybackQualityAvailable=!1,this.timer=void 0,this.media=null,this.lastTime=void 0,this.lastDroppedFrames=0,this.lastDecodedFrames=0,this.streamController=void 0,this.hls=e,this.registerListeners()}setStreamController(e){this.streamController=e}registerListeners(){this.hls.on(T.MEDIA_ATTACHING,this.onMediaAttaching,this),this.hls.on(T.MEDIA_DETACHING,this.onMediaDetaching,this)}unregisterListeners(){this.hls.off(T.MEDIA_ATTACHING,this.onMediaAttaching,this),this.hls.off(T.MEDIA_DETACHING,this.onMediaDetaching,this)}destroy(){this.timer&&clearInterval(this.timer),this.unregisterListeners(),this.isVideoPlaybackQualityAvailable=!1,this.media=null}onMediaAttaching(e,t){const n=this.hls.config;if(n.capLevelOnFPSDrop){const i=t.media instanceof self.HTMLVideoElement?t.media:null;this.media=i,i&&typeof i.getVideoPlaybackQuality=="function"&&(this.isVideoPlaybackQualityAvailable=!0),self.clearInterval(this.timer),this.timer=self.setInterval(this.checkFPSInterval.bind(this),n.fpsDroppedMonitoringPeriod)}}onMediaDetaching(){this.media=null}checkFPS(e,t,n){const i=performance.now();if(t){if(this.lastTime){const r=i-this.lastTime,s=n-this.lastDroppedFrames,o=t-this.lastDecodedFrames,l=1e3*s/r,d=this.hls;if(d.trigger(T.FPS_DROP,{currentDropped:s,currentDecoded:o,totalDroppedFrames:n}),l>0&&s>d.config.fpsDroppedMonitoringThreshold*o){let c=d.currentLevel;d.logger.warn("drop FPS ratio greater than max allowed value for currentLevel: "+c),c>0&&(d.autoLevelCapping===-1||d.autoLevelCapping>=c)&&(c=c-1,d.trigger(T.FPS_DROP_LEVEL_CAPPING,{level:c,droppedLevel:d.currentLevel}),d.autoLevelCapping=c,this.streamController.nextLevelSwitch())}}this.lastTime=i,this.lastDroppedFrames=n,this.lastDecodedFrames=t}}checkFPSInterval(){const e=this.media;if(e)if(this.isVideoPlaybackQualityAvailable){const t=e.getVideoPlaybackQuality();this.checkFPS(e,t.totalVideoFrames,t.droppedVideoFrames)}else this.checkFPS(e,e.webkitDecodedFrameCount,e.webkitDroppedFrameCount)}}function xf(a,e){let t;try{t=new Event("addtrack")}catch{t=document.createEvent("Event"),t.initEvent("addtrack",!1,!1)}t.track=a,e.dispatchEvent(t)}function mo(a,e){const t=a.mode;if(t==="disabled"&&(a.mode="hidden"),a.cues&&!a.cues.getCueById(e.id))try{if(a.addCue(e),!a.cues.getCueById(e.id))throw new Error(`addCue is failed for: ${e}`)}catch(n){be.debug(`[texttrack-utils]: ${n}`);try{const i=new self.TextTrackCue(e.startTime,e.endTime,e.text);i.id=e.id,a.addCue(i)}catch(i){be.debug(`[texttrack-utils]: Legacy TextTrackCue fallback failed: ${i}`)}}t==="disabled"&&(a.mode=t)}function Dn(a,e){const t=a.mode;if(t==="disabled"&&(a.mode="hidden"),a.cues)for(let n=a.cues.length;n--;)e&&a.cues[n].removeEventListener("enter",e),a.removeCue(a.cues[n]);t==="disabled"&&(a.mode=t)}function da(a,e,t,n){const i=a.mode;if(i==="disabled"&&(a.mode="hidden"),a.cues&&a.cues.length>0){const r=Sf(a.cues,e,t);for(let s=0;s<r.length;s++)(!n||n(r[s]))&&a.removeCue(r[s])}i==="disabled"&&(a.mode=i)}function Ef(a,e){if(e<=a[0].startTime)return 0;const t=a.length-1;if(e>a[t].endTime)return-1;let n=0,i=t,r;for(;n<=i;)if(r=Math.floor((i+n)/2),e<a[r].startTime)i=r-1;else if(e>a[r].startTime&&n<t)n=r+1;else return r;return a[n].startTime-e<e-a[i].startTime?n:i}function Sf(a,e,t){const n=[],i=Ef(a,e);if(i>-1)for(let r=i,s=a.length;r<s;r++){const o=a[r];if(o.startTime>=e&&o.endTime<=t)n.push(o);else if(o.startTime>t)return n}return n}function gi(a){const e=[];for(let t=0;t<a.length;t++){const n=a[t];(n.kind==="subtitles"||n.kind==="captions")&&n.label&&e.push(a[t])}return e}class Tf extends ao{constructor(e){super(e,"subtitle-track-controller"),this.media=null,this.tracks=[],this.groupIds=null,this.tracksInGroup=[],this.trackId=-1,this.currentTrack=null,this.selectDefaultTrack=!0,this.queuedDefaultTrack=-1,this.useTextTrackPolling=!1,this.subtitlePollingInterval=-1,this._subtitleDisplay=!0,this.asyncPollTrackChange=()=>this.pollTrackChange(0),this.onTextTracksChanged=()=>{if(this.useTextTrackPolling||self.clearInterval(this.subtitlePollingInterval),!this.media||!this.hls.config.renderTextTracksNatively)return;let t=null;const n=gi(this.media.textTracks);for(let r=0;r<n.length;r++)if(n[r].mode==="hidden")t=n[r];else if(n[r].mode==="showing"){t=n[r];break}const i=this.findTrackForTextTrack(t);this.subtitleTrack!==i&&this.setSubtitleTrack(i)},this.registerListeners()}destroy(){this.unregisterListeners(),this.tracks.length=0,this.tracksInGroup.length=0,this.currentTrack=null,this.onTextTracksChanged=this.asyncPollTrackChange=null,super.destroy()}get subtitleDisplay(){return this._subtitleDisplay}set subtitleDisplay(e){this._subtitleDisplay=e,this.trackId>-1&&this.toggleTrackModes()}registerListeners(){const{hls:e}=this;e.on(T.MEDIA_ATTACHED,this.onMediaAttached,this),e.on(T.MEDIA_DETACHING,this.onMediaDetaching,this),e.on(T.MANIFEST_LOADING,this.onManifestLoading,this),e.on(T.MANIFEST_PARSED,this.onManifestParsed,this),e.on(T.LEVEL_LOADING,this.onLevelLoading,this),e.on(T.LEVEL_SWITCHING,this.onLevelSwitching,this),e.on(T.SUBTITLE_TRACK_LOADED,this.onSubtitleTrackLoaded,this),e.on(T.ERROR,this.onError,this)}unregisterListeners(){const{hls:e}=this;e.off(T.MEDIA_ATTACHED,this.onMediaAttached,this),e.off(T.MEDIA_DETACHING,this.onMediaDetaching,this),e.off(T.MANIFEST_LOADING,this.onManifestLoading,this),e.off(T.MANIFEST_PARSED,this.onManifestParsed,this),e.off(T.LEVEL_LOADING,this.onLevelLoading,this),e.off(T.LEVEL_SWITCHING,this.onLevelSwitching,this),e.off(T.SUBTITLE_TRACK_LOADED,this.onSubtitleTrackLoaded,this),e.off(T.ERROR,this.onError,this)}onMediaAttached(e,t){this.media=t.media,this.media&&(this.queuedDefaultTrack>-1&&(this.subtitleTrack=this.queuedDefaultTrack,this.queuedDefaultTrack=-1),this.useTextTrackPolling=!(this.media.textTracks&&"onchange"in this.media.textTracks),this.useTextTrackPolling?this.pollTrackChange(500):this.media.textTracks.addEventListener("change",this.asyncPollTrackChange))}pollTrackChange(e){self.clearInterval(this.subtitlePollingInterval),this.subtitlePollingInterval=self.setInterval(this.onTextTracksChanged,e)}onMediaDetaching(e,t){const n=this.media;if(!n)return;const i=!!t.transferMedia;if(self.clearInterval(this.subtitlePollingInterval),this.useTextTrackPolling||n.textTracks.removeEventListener("change",this.asyncPollTrackChange),this.trackId>-1&&(this.queuedDefaultTrack=this.trackId),this.subtitleTrack=-1,this.media=null,i)return;gi(n.textTracks).forEach(s=>{Dn(s)})}onManifestLoading(){this.tracks=[],this.groupIds=null,this.tracksInGroup=[],this.trackId=-1,this.currentTrack=null,this.selectDefaultTrack=!0}onManifestParsed(e,t){this.tracks=t.subtitleTracks}onSubtitleTrackLoaded(e,t){const{id:n,groupId:i,details:r}=t,s=this.tracksInGroup[n];if(!s||s.groupId!==i){this.warn(`Subtitle track with id:${n} and group:${i} not found in active group ${s==null?void 0:s.groupId}`);return}const o=s.details;s.details=t.details,this.log(`Subtitle track ${n} "${s.name}" lang:${s.lang} group:${i} loaded [${r.startSN}-${r.endSN}]`),n===this.trackId&&this.playlistLoaded(n,t,o)}onLevelLoading(e,t){this.switchLevel(t.level)}onLevelSwitching(e,t){this.switchLevel(t.level)}switchLevel(e){const t=this.hls.levels[e];if(!t)return;const n=t.subtitleGroups||null,i=this.groupIds;let r=this.currentTrack;if(!n||(i==null?void 0:i.length)!==(n==null?void 0:n.length)||n!=null&&n.some(s=>(i==null?void 0:i.indexOf(s))===-1)){this.groupIds=n,this.trackId=-1,this.currentTrack=null;const s=this.tracks.filter(c=>!n||n.indexOf(c.groupId)!==-1);if(s.length)this.selectDefaultTrack&&!s.some(c=>c.default)&&(this.selectDefaultTrack=!1),s.forEach((c,u)=>{c.id=u});else if(!r&&!this.tracksInGroup.length)return;this.tracksInGroup=s;const o=this.hls.config.subtitlePreference;if(!r&&o){this.selectDefaultTrack=!1;const c=st(o,s);if(c>-1)r=s[c];else{const u=st(o,this.tracks);r=this.tracks[u]}}let l=this.findTrackId(r);l===-1&&r&&(l=this.findTrackId(null));const d={subtitleTracks:s};this.log(`Updating subtitle tracks, ${s.length} track(s) found in "${n==null?void 0:n.join(",")}" group-id`),this.hls.trigger(T.SUBTITLE_TRACKS_UPDATED,d),l!==-1&&this.trackId===-1&&this.setSubtitleTrack(l)}}findTrackId(e){const t=this.tracksInGroup,n=this.selectDefaultTrack;for(let i=0;i<t.length;i++){const r=t[i];if(!(n&&!r.default||!n&&!e)&&(!e||Dt(r,e)))return i}if(e){for(let i=0;i<t.length;i++){const r=t[i];if($n(e.attrs,r.attrs,["LANGUAGE","ASSOC-LANGUAGE","CHARACTERISTICS"]))return i}for(let i=0;i<t.length;i++){const r=t[i];if($n(e.attrs,r.attrs,["LANGUAGE"]))return i}}return-1}findTrackForTextTrack(e){if(e){const t=this.tracksInGroup;for(let n=0;n<t.length;n++){const i=t[n];if(xr(i,e))return n}}return-1}onError(e,t){t.fatal||!t.context||t.context.type===ft.SUBTITLE_TRACK&&t.context.id===this.trackId&&(!this.groupIds||this.groupIds.indexOf(t.context.groupId)!==-1)&&this.checkRetry(t)}get allSubtitleTracks(){return this.tracks}get subtitleTracks(){return this.tracksInGroup}get subtitleTrack(){return this.trackId}set subtitleTrack(e){this.selectDefaultTrack=!1,this.setSubtitleTrack(e)}setSubtitleOption(e){if(this.hls.config.subtitlePreference=e,e){if(e.id===-1)return this.setSubtitleTrack(-1),null;const t=this.allSubtitleTracks;if(this.selectDefaultTrack=!1,t.length){const n=this.currentTrack;if(n&&Dt(e,n))return n;const i=st(e,this.tracksInGroup);if(i>-1){const r=this.tracksInGroup[i];return this.setSubtitleTrack(i),r}else{if(n)return null;{const r=st(e,t);if(r>-1)return t[r]}}}}return null}loadPlaylist(e){super.loadPlaylist(),this.shouldLoadPlaylist(this.currentTrack)&&this.scheduleLoading(this.currentTrack,e)}loadingPlaylist(e,t){super.loadingPlaylist(e,t);const n=e.id,i=e.groupId,r=this.getUrlWithDirectives(e.url,t),s=e.details,o=s==null?void 0:s.age;this.log(`Loading subtitle ${n} "${e.name}" lang:${e.lang} group:${i}${(t==null?void 0:t.msn)!==void 0?" at sn "+t.msn+" part "+t.part:""}${o&&s.live?" age "+o.toFixed(1)+(s.type&&" "+s.type||""):""} ${r}`),this.hls.trigger(T.SUBTITLE_TRACK_LOADING,{url:r,id:n,groupId:i,deliveryDirectives:t||null,track:e})}toggleTrackModes(){const{media:e}=this;if(!e)return;const t=gi(e.textTracks),n=this.currentTrack;let i;if(n&&(i=t.filter(r=>xr(n,r))[0],i||this.warn(`Unable to find subtitle TextTrack with name "${n.name}" and language "${n.lang}"`)),[].slice.call(t).forEach(r=>{r.mode!=="disabled"&&r!==i&&(r.mode="disabled")}),i){const r=this.subtitleDisplay?"showing":"hidden";i.mode!==r&&(i.mode=r)}}setSubtitleTrack(e){const t=this.tracksInGroup;if(!this.media){this.queuedDefaultTrack=e;return}if(e<-1||e>=t.length||!te(e)){this.warn(`Invalid subtitle track id: ${e}`);return}this.selectDefaultTrack=!1;const n=this.currentTrack,i=t[e]||null;if(this.trackId=e,this.currentTrack=i,this.toggleTrackModes(),!i){this.hls.trigger(T.SUBTITLE_TRACK_SWITCH,{id:e});return}const r=!!i.details&&!i.details.live;if(e===this.trackId&&i===n&&r)return;this.log(`Switching to subtitle-track ${e}`+(i?` "${i.name}" lang:${i.lang} group:${i.groupId}`:""));const{id:s,groupId:o="",name:l,type:d,url:c}=i;this.hls.trigger(T.SUBTITLE_TRACK_SWITCH,{id:s,groupId:o,name:l,type:d,url:c});const u=this.switchParams(i.url,n==null?void 0:n.details,i.details);this.loadPlaylist(u)}}function Fn(a){let e=5381,t=a.length;for(;t;)e=e*33^a.charCodeAt(--t);return(e>>>0).toString()}const Wt=.025;let ki=function(a){return a[a.Point=0]="Point",a[a.Range=1]="Range",a}({});function Cf(a,e,t){return`${a.identifier}-${t+1}-${Fn(e)}`}class wf{constructor(e,t){this.base=void 0,this._duration=null,this._timelineStart=null,this.appendInPlaceDisabled=void 0,this.appendInPlaceStarted=void 0,this.dateRange=void 0,this.hasPlayed=!1,this.cumulativeDuration=0,this.resumeOffset=NaN,this.playoutLimit=NaN,this.restrictions={skip:!1,jump:!1},this.snapOptions={out:!1,in:!1},this.assetList=[],this.assetListLoader=void 0,this.assetListResponse=null,this.resumeAnchor=void 0,this.error=void 0,this.resetOnResume=void 0,this.base=t,this.dateRange=e,this.setDateRange(e)}setDateRange(e){this.dateRange=e,this.resumeOffset=e.attr.optionalFloat("X-RESUME-OFFSET",this.resumeOffset),this.playoutLimit=e.attr.optionalFloat("X-PLAYOUT-LIMIT",this.playoutLimit),this.restrictions=e.attr.enumeratedStringList("X-RESTRICT",this.restrictions),this.snapOptions=e.attr.enumeratedStringList("X-SNAP",this.snapOptions)}reset(){var e;this.appendInPlaceStarted=!1,(e=this.assetListLoader)==null||e.destroy(),this.assetListLoader=void 0,this.supplementsPrimary||(this.assetListResponse=null,this.assetList=[],this._duration=null)}isAssetPastPlayoutLimit(e){if(e>=this.assetList.length)return!0;const t=this.playoutLimit;return e<=0||isNaN(t)?!1:this.assetList[e].startOffset>t}findAssetIndex(e){return this.assetList.indexOf(e)}get identifier(){return this.dateRange.id}get startDate(){return this.dateRange.startDate}get startTime(){const e=this.dateRange.startTime;if(this.snapOptions.out){const t=this.dateRange.tagAnchor;if(t)return or(e,t)}return e}get startOffset(){return this.cue.pre?0:this.startTime}get startIsAligned(){if(this.startTime===0||this.snapOptions.out)return!0;const e=this.dateRange.tagAnchor;if(e){const t=this.dateRange.startTime,n=or(t,e);return t-n<.1}return!1}get resumptionOffset(){const e=this.resumeOffset,t=te(e)?e:this.duration;return this.cumulativeDuration+t}get resumeTime(){const e=this.startOffset+this.resumptionOffset;if(this.snapOptions.in){const t=this.resumeAnchor;if(t)return or(e,t)}return e}get appendInPlace(){return this.appendInPlaceStarted?!0:this.appendInPlaceDisabled?!1:!!(!this.cue.once&&!this.cue.pre&&this.startIsAligned&&(isNaN(this.playoutLimit)&&isNaN(this.resumeOffset)||this.resumeOffset&&this.duration&&Math.abs(this.resumeOffset-this.duration)<Wt))}set appendInPlace(e){if(this.appendInPlaceStarted){this.resetOnResume=!e;return}this.appendInPlaceDisabled=!e}get timelineStart(){return this._timelineStart!==null?this._timelineStart:this.startTime}set timelineStart(e){this._timelineStart=e}get duration(){const e=this.playoutLimit;let t;return this._duration!==null?t=this._duration:this.dateRange.duration?t=this.dateRange.duration:t=this.dateRange.plannedDuration||0,!isNaN(e)&&e<t&&(t=e),t}set duration(e){this._duration=e}get cue(){return this.dateRange.cue}get timelineOccupancy(){return this.dateRange.attr["X-TIMELINE-OCCUPIES"]==="RANGE"?ki.Range:ki.Point}get supplementsPrimary(){return this.dateRange.attr["X-TIMELINE-STYLE"]==="PRIMARY"}get contentMayVary(){return this.dateRange.attr["X-CONTENT-MAY-VARY"]!=="NO"}get assetUrl(){return this.dateRange.attr["X-ASSET-URI"]}get assetListUrl(){return this.dateRange.attr["X-ASSET-LIST"]}get baseUrl(){return this.base.url}get assetListLoaded(){return this.assetList.length>0||this.assetListResponse!==null}toString(){return kf(this)}}function or(a,e){return a-e.start<e.duration/2&&!(Math.abs(a-(e.start+e.duration))<Wt)?e.start:e.start+e.duration}function go(a,e,t){const n=new self.URL(a,t);return n.protocol!=="data:"&&n.searchParams.set("_HLS_primary_id",e),n}function kf(a){return`["${a.identifier}" ${a.cue.pre?"<pre>":a.cue.post?"<post>":""}${a.timelineStart.toFixed(2)}-${a.resumeTime.toFixed(2)}]`}function Tr(a){const e=a.timelineStart,t=a.duration||0;return`["${a.identifier}" ${e.toFixed(2)}-${(e+t).toFixed(2)}]`}class If{constructor(e,t,n,i){this.hls=void 0,this.interstitial=void 0,this.assetItem=void 0,this.tracks=null,this.hasDetails=!1,this.mediaAttached=null,this._currentTime=void 0,this._bufferedEosTime=void 0,this.checkPlayout=()=>{const d=this.interstitial.playoutLimit,c=this.currentTime;this.startOffset+c>=d&&this.hls.trigger(T.PLAYOUT_LIMIT_REACHED,{})};const r=this.hls=new e(t);this.interstitial=n,this.assetItem=i;let s=i.uri;try{s=go(s,r.sessionId).href}catch{}r.loadSource(s);const o=()=>{this.hasDetails=!0};r.once(T.LEVEL_LOADED,o),r.once(T.AUDIO_TRACK_LOADED,o),r.once(T.SUBTITLE_TRACK_LOADED,o),r.on(T.MEDIA_ATTACHING,(l,{media:d})=>{this.removeMediaListeners(),this.mediaAttached=d,this.interstitial.playoutLimit&&d.addEventListener("timeupdate",this.checkPlayout)})}bufferedInPlaceToEnd(e){var t;if(!this.interstitial.appendInPlace)return!1;if((t=this.hls)!=null&&t.bufferedToEnd)return!0;if(!e||!this._bufferedEosTime)return!1;const n=this.timelineOffset,i=Ee.bufferInfo(e,n,0);return this.getAssetTime(i.end)>=this._bufferedEosTime-.02}get destroyed(){var e;return!((e=this.hls)!=null&&e.userConfig)}get assetId(){return this.assetItem.identifier}get interstitialId(){return this.assetItem.parentIdentifier}get media(){var e;return((e=this.hls)==null?void 0:e.media)||null}get bufferedEnd(){const e=this.media||this.mediaAttached;if(!e)return this._bufferedEosTime?this._bufferedEosTime:this.currentTime;const t=Ee.bufferInfo(e,e.currentTime,.001);return this.getAssetTime(t.end)}get currentTime(){const e=this.media||this.mediaAttached;return e?this.getAssetTime(e.currentTime):this._currentTime||0}get duration(){const e=this.assetItem.duration;return e||0}get remaining(){const e=this.duration;return e?Math.max(0,e-this.currentTime):0}get startOffset(){return this.assetItem.startOffset}get timelineOffset(){var e;return((e=this.hls)==null?void 0:e.config.timelineOffset)||0}set timelineOffset(e){const t=this.timelineOffset;if(e!==t){const n=e-t;if(Math.abs(n)>1/9e4){if(this.hasDetails)throw new Error("Cannot set timelineOffset after playlists are loaded");this.hls.config.timelineOffset=e}}}getAssetTime(e){const t=this.timelineOffset,n=this.duration;return Math.min(Math.max(0,e-t),n)}removeMediaListeners(){const e=this.mediaAttached;e&&(this._currentTime=e.currentTime,this.bufferSnapShot(),e.removeEventListener("timeupdate",this.checkPlayout))}bufferSnapShot(){if(this.mediaAttached){var e;(e=this.hls)!=null&&e.bufferedToEnd&&(this._bufferedEosTime=this.bufferedEnd)}}destroy(){this.removeMediaListeners(),this.hls.destroy(),this.hls=this.interstitial=null,this.tracks=this.mediaAttached=this.checkPlayout=null}attachMedia(e){this.hls.attachMedia(e)}detachMedia(){this.removeMediaListeners(),this.mediaAttached=null,this.hls.detachMedia()}resumeBuffering(){this.hls.resumeBuffering()}pauseBuffering(){this.hls.pauseBuffering()}transferMedia(){return this.bufferSnapShot(),this.hls.transferMedia()}on(e,t,n){this.hls.on(e,t)}once(e,t,n){this.hls.once(e,t)}off(e,t,n){this.hls.off(e,t)}toString(){var e,t;return`HlsAssetPlayer: ${Tr(this.assetItem)} ${(e=this.hls)==null?void 0:e.sessionId} ${(t=this.interstitial)!=null&&t.appendInPlace?"append-in-place":""}`}}const ca=.033;class Lf extends pt{constructor(e,t){super("interstitials-sched",t),this.onScheduleUpdate=void 0,this.eventMap={},this.events=null,this.items=null,this.durations={primary:0,playout:0,integrated:0},this.onScheduleUpdate=e}destroy(){this.reset(),this.onScheduleUpdate=null}reset(){this.eventMap={},this.setDurations(0,0,0),this.events&&this.events.forEach(e=>e.reset()),this.events=this.items=null}resetErrorsInRange(e,t){return this.events?this.events.reduce((n,i)=>e<=i.startOffset&&t>i.startOffset?(delete i.error,n+1):n,0):0}get duration(){const e=this.items;return e?e[e.length-1].end:0}get length(){return this.items?this.items.length:0}getEvent(e){return e&&this.eventMap[e]||null}hasEvent(e){return e in this.eventMap}findItemIndex(e,t){if(e.event)return this.findEventIndex(e.event.identifier);let n=-1;e.nextEvent?n=this.findEventIndex(e.nextEvent.identifier)-1:e.previousEvent&&(n=this.findEventIndex(e.previousEvent.identifier)+1);const i=this.items;if(i)for(i[n]||(t===void 0&&(t=e.start),n=this.findItemIndexAtTime(t));n>=0&&(r=i[n])!=null&&r.event;){var r;n--}return n}findItemIndexAtTime(e,t){const n=this.items;if(n)for(let i=0;i<n.length;i++){let r=n[i];if(t&&t!=="primary"&&(r=r[t]),e===r.start||e>r.start&&e<r.end)return i}return-1}findJumpRestrictedIndex(e,t){const n=this.items;if(n)for(let i=e;i<=t&&n[i];i++){const r=n[i].event;if(r!=null&&r.restrictions.jump&&!r.appendInPlace)return i}return-1}findEventIndex(e){const t=this.items;if(t)for(let i=t.length;i--;){var n;if(((n=t[i].event)==null?void 0:n.identifier)===e)return i}return-1}findAssetIndex(e,t){const n=e.assetList,i=n.length;if(i>1)for(let r=0;r<i;r++){const s=n[r];if(!s.error){const o=s.timelineStart;if(t===o||t>o&&t<o+(s.duration||0))return r}}return 0}get assetIdAtEnd(){var e,t;const n=(e=this.items)==null||(t=e[this.length-1])==null?void 0:t.event;if(n){const i=n.assetList,r=i[i.length-1];if(r)return r.identifier}return null}parseInterstitialDateRanges(e,t){const n=e.main.details,{dateRanges:i}=n,r=this.events,s=this.parseDateRanges(i,{url:n.url},t),o=Object.keys(i),l=r?r.filter(d=>!o.includes(d.identifier)):[];s.length&&s.sort((d,c)=>{const u=d.cue.pre,h=d.cue.post,y=c.cue.pre,A=c.cue.post;if(u&&!y)return-1;if(y&&!u||h&&!A)return 1;if(A&&!h)return-1;if(!u&&!y&&!h&&!A){const v=d.startTime,S=c.startTime;if(v!==S)return v-S}return d.dateRange.tagOrder-c.dateRange.tagOrder}),this.events=s,l.forEach(d=>{this.removeEvent(d)}),this.updateSchedule(e,l)}updateSchedule(e,t=[]){const n=this.events||[];if(n.length||t.length||this.length<2){const i=this.items,r=this.parseSchedule(n,e);(t.length||(i==null?void 0:i.length)!==r.length||r.some((o,l)=>Math.abs(o.playout.start-i[l].playout.start)>.005||Math.abs(o.playout.end-i[l].playout.end)>.005))&&(this.items=r,this.onScheduleUpdate(t,i))}}parseDateRanges(e,t,n){const i=[],r=Object.keys(e);for(let s=0;s<r.length;s++){const o=r[s],l=e[o];if(l.isInterstitial){let d=this.eventMap[o];d?d.setDateRange(l):(d=new wf(l,t),this.eventMap[o]=d,n===!1&&(d.appendInPlace=n)),i.push(d)}}return i}parseSchedule(e,t){const n=[],i=t.main.details,r=i.live?1/0:i.edge;let s=0;if(e=e.filter(l=>!l.error&&!(l.cue.once&&l.hasPlayed)),e.length){this.resolveOffsets(e,t);let l=0,d=0;if(e.forEach((c,u)=>{const h=c.cue.pre,y=c.cue.post,A=e[u-1]||null,v=c.appendInPlace,S=y?r:c.startOffset,k=c.duration,I=c.timelineOccupancy===ki.Range?k:0,R=c.resumptionOffset,_=(A==null?void 0:A.startTime)===S,L=S+c.cumulativeDuration;let F=v?L+k:S+R;if(h||!y&&S<=0){const M=d;d+=I,c.timelineStart=L;const q=s;s+=k,n.push({event:c,start:L,end:F,playout:{start:q,end:s},integrated:{start:M,end:d}})}else if(S<=r){if(!_){const P=S-l;if(P>ca){const K=l,Q=d;d+=P;const he=s;s+=P;const re={previousEvent:e[u-1]||null,nextEvent:c,start:K,end:K+P,playout:{start:he,end:s},integrated:{start:Q,end:d}};n.push(re)}else P>0&&A&&(A.cumulativeDuration+=P,n[n.length-1].end=S)}y&&(F=L),c.timelineStart=L;const M=d;d+=I;const q=s;s+=k,n.push({event:c,start:L,end:F,playout:{start:q,end:s},integrated:{start:M,end:d}})}else return;const B=c.resumeTime;y||B>r?l=r:l=B}),l<r){var o;const c=l,u=d,h=r-l;d+=h;const y=s;s+=h,n.push({previousEvent:((o=n[n.length-1])==null?void 0:o.event)||null,nextEvent:null,start:l,end:c+h,playout:{start:y,end:s},integrated:{start:u,end:d}})}this.setDurations(r,s,d)}else n.push({previousEvent:null,nextEvent:null,start:0,end:r,playout:{start:0,end:r},integrated:{start:0,end:r}}),this.setDurations(r,r,r);return n}setDurations(e,t,n){this.durations={primary:e,playout:t,integrated:n}}resolveOffsets(e,t){const n=t.main.details,i=n.live?1/0:n.edge;let r=0,s=-1;e.forEach((o,l)=>{const d=o.cue.pre,c=o.cue.post,u=d?0:c?i:o.startTime;this.updateAssetDurations(o),s===u?o.cumulativeDuration=r:(r=0,s=u),!c&&o.snapOptions.in&&(o.resumeAnchor=jt(null,n.fragments,o.startOffset+o.resumptionOffset,0,0)||void 0),o.appendInPlace&&!o.appendInPlaceStarted&&(this.primaryCanResumeInPlaceAt(o,t)||(o.appendInPlace=!1)),!o.appendInPlace&&l+1<e.length&&e[l+1].startTime-e[l].resumeTime<ca&&(e[l+1].appendInPlace=!1,e[l+1].appendInPlace&&this.warn(`Could not change append strategy for abutting event ${o}`));const y=te(o.resumeOffset)?o.resumeOffset:o.duration;r+=y})}primaryCanResumeInPlaceAt(e,t){const n=e.resumeTime,i=e.startTime+e.resumptionOffset;return Math.abs(n-i)>Wt?(this.log(`"${e.identifier}" resumption ${n} not aligned with estimated timeline end ${i}`),!1):t?!Object.keys(t).some(s=>{const o=t[s].details,l=o.edge;if(n>=l)return this.log(`"${e.identifier}" resumption ${n} past ${s} playlist end ${l}`),!1;const d=jt(null,o.fragments,n);if(!d)return this.log(`"${e.identifier}" resumption ${n} does not align with any fragments in ${s} playlist (${o.fragStart}-${o.fragmentEnd})`),!0;const c=s==="audio"?.175:0;return Math.abs(d.start-n)<Wt+c||Math.abs(d.end-n)<Wt+c?!1:(this.log(`"${e.identifier}" resumption ${n} not aligned with ${s} fragment bounds (${d.start}-${d.end} sn: ${d.sn} cc: ${d.cc})`),!0)}):(this.log(`"${e.identifier}" resumption ${n} can not be aligned with media (none selected)`),!1)}updateAssetDurations(e){if(!e.assetListLoaded)return;const t=e.timelineStart;let n=0,i=!1,r=!1;e.assetList.forEach((s,o)=>{const l=t+n;s.startOffset=n,s.timelineStart=l,i||(i=s.duration===null),r||(r=!!s.error);const d=s.error?0:s.duration||0;n+=d}),i&&!r?e.duration=Math.max(n,e.duration):e.duration=n}removeEvent(e){e.reset(),delete this.eventMap[e.identifier]}}function xt(a){return`[${a.event?'"'+a.event.identifier+'"':"primary"}: ${a.start.toFixed(2)}-${a.end.toFixed(2)}]`}class Rf{constructor(e){this.hls=void 0,this.hls=e}destroy(){this.hls=null}loadAssetList(e,t){const n=e.assetListUrl;let i;try{i=go(n,this.hls.sessionId,e.baseUrl)}catch(h){const y=this.assignAssetListError(e,G.ASSET_LIST_LOAD_ERROR,h,n);this.hls.trigger(T.ERROR,y);return}t&&i.protocol!=="data:"&&i.searchParams.set("_HLS_start_offset",""+t);const r=this.hls.config,s=r.loader,o=new s(r),l={responseType:"json",url:i.href},d=r.interstitialAssetListLoadPolicy.default,c={loadPolicy:d,timeout:d.maxLoadTimeMs,maxRetry:0,retryDelay:0,maxRetryDelay:0},u={onSuccess:(h,y,A,v)=>{const S=h.data,k=S==null?void 0:S.ASSETS;if(!Array.isArray(k)){const I=this.assignAssetListError(e,G.ASSET_LIST_PARSING_ERROR,new Error("Invalid interstitial asset list"),A.url,y,v);this.hls.trigger(T.ERROR,I);return}e.assetListResponse=S,this.hls.trigger(T.ASSET_LIST_LOADED,{event:e,assetListResponse:S,networkDetails:v})},onError:(h,y,A,v)=>{const S=this.assignAssetListError(e,G.ASSET_LIST_LOAD_ERROR,new Error(`Error loading X-ASSET-LIST: HTTP status ${h.code} ${h.text} (${y.url})`),y.url,v,A);this.hls.trigger(T.ERROR,S)},onTimeout:(h,y,A)=>{const v=this.assignAssetListError(e,G.ASSET_LIST_LOAD_TIMEOUT,new Error(`Timeout loading X-ASSET-LIST (${y.url})`),y.url,h,A);this.hls.trigger(T.ERROR,v)}};return o.load(l,c,u),this.hls.trigger(T.ASSET_LIST_LOADING,{event:e}),o}assignAssetListError(e,t,n,i,r,s){return e.error=n,{type:ae.NETWORK_ERROR,details:t,fatal:!1,interstitial:e,url:i,error:n,networkDetails:s,stats:r}}}function li(a,e,t){Bn(a,e,t),a.addEventListener(e,t)}function Bn(a,e,t){a.removeEventListener(e,t)}function ua(a){a==null||a.play().catch(()=>{})}class _f extends pt{constructor(e,t){super("interstitials",e.logger),this.HlsPlayerClass=void 0,this.hls=void 0,this.assetListLoader=void 0,this.mediaSelection=null,this.altSelection=null,this.media=null,this.detachedData=null,this.requiredTracks=null,this.manager=null,this.playerQueue=[],this.bufferedPos=-1,this.timelinePos=-1,this.schedule=void 0,this.playingItem=null,this.bufferingItem=null,this.waitingItem=null,this.endedItem=null,this.playingAsset=null,this.endedAsset=null,this.bufferingAsset=null,this.shouldPlay=!1,this.onPlay=()=>{this.shouldPlay=!0},this.onPause=()=>{this.shouldPlay=!1},this.onSeeking=()=>{const n=this.currentTime;if(n===void 0||this.playbackDisabled)return;const i=n-this.timelinePos;if(Math.abs(i)<1/7056e5)return;const s=i<=-.01;this.timelinePos=n,this.bufferedPos=n;const o=this.playingItem;if(!o){this.checkBuffer();return}if(s&&this.schedule.resetErrorsInRange(n,n-i)&&this.updateSchedule(),this.checkBuffer(),s&&n<o.start||n>=o.end){var l;const h=this.schedule.findItemIndexAtTime(this.timelinePos);if(!this.isInterstitial(o)&&(l=this.media)!=null&&l.paused&&(this.shouldPlay=!1),!s){const y=this.findItemIndex(o);if(h>y){const A=this.schedule.findJumpRestrictedIndex(y+1,h);if(A>y){this.setSchedulePosition(A);return}}}this.setSchedulePosition(h);return}const d=this.playingAsset;if(!d){if(this.playingLastItem&&this.isInterstitial(o)){const h=o.event.assetList[0];h&&(this.endedItem=this.playingItem,this.playingItem=null,this.setScheduleToAssetAtTime(n,h))}return}const c=d.timelineStart,u=d.duration||0;(s&&n<c||n>=c+u)&&this.setScheduleToAssetAtTime(n,d)},this.onTimeupdate=()=>{const n=this.currentTime;if(n===void 0||this.playbackDisabled)return;if(n>this.timelinePos)this.timelinePos=n,n>this.bufferedPos&&this.checkBuffer();else return;const i=this.playingItem;if(!i||this.playingLastItem)return;if(n>=i.end){this.timelinePos=i.end;const o=this.findItemIndex(i);this.setSchedulePosition(o+1)}const r=this.playingAsset;if(!r)return;const s=r.timelineStart+(r.duration||0);n>=s&&this.setScheduleToAssetAtTime(n,r)},this.onScheduleUpdate=(n,i)=>{const r=this.schedule,s=this.playingItem,o=r.events||[],l=r.items||[],d=r.durations,c=n.map(y=>y.identifier),u=!!(o.length||c.length);if(u&&this.log(`INTERSTITIALS_UPDATED (${o.length}): ${o}
Schedule: ${l.map(y=>xt(y))}`),c.length&&this.log(`Removed events ${c}`),this.playerQueue.forEach(y=>{if(y.interstitial.appendInPlace){const A=y.assetItem.timelineStart,v=y.timelineOffset-A;if(v)try{y.timelineOffset=A}catch(S){Math.abs(v)>Wt&&this.warn(`${S} ("${y.assetId}" ${y.timelineOffset}->${A})`)}}}),s){const y=this.updateItem(s,this.timelinePos);this.itemsMatch(s,y)&&(this.playingItem=y,this.waitingItem=this.endedItem=null)}else this.waitingItem=this.updateItem(this.waitingItem),this.endedItem=this.updateItem(this.endedItem);const h=this.bufferingItem;if(h){const y=this.updateItem(h,this.bufferedPos);this.itemsMatch(h,y)?this.bufferingItem=y:h.event&&(this.bufferingItem=this.playingItem,this.clearInterstitial(h.event,null))}if(n.forEach(y=>{y.assetList.forEach(A=>{this.clearAssetPlayer(A.identifier,null)})}),u||i){if(this.hls.trigger(T.INTERSTITIALS_UPDATED,{events:o.slice(0),schedule:l.slice(0),durations:d,removedIds:c}),this.isInterstitial(s)&&c.includes(s.event.identifier)){this.warn(`Interstitial "${s.event.identifier}" removed while playing`),this.primaryFallback(s.event);return}this.checkBuffer()}},this.hls=e,this.HlsPlayerClass=t,this.assetListLoader=new Rf(e),this.schedule=new Lf(this.onScheduleUpdate,e.logger),this.registerListeners()}registerListeners(){const e=this.hls;e.on(T.MEDIA_ATTACHING,this.onMediaAttaching,this),e.on(T.MEDIA_ATTACHED,this.onMediaAttached,this),e.on(T.MEDIA_DETACHING,this.onMediaDetaching,this),e.on(T.MANIFEST_LOADING,this.onManifestLoading,this),e.on(T.LEVEL_UPDATED,this.onLevelUpdated,this),e.on(T.AUDIO_TRACK_SWITCHING,this.onAudioTrackSwitching,this),e.on(T.AUDIO_TRACK_UPDATED,this.onAudioTrackUpdated,this),e.on(T.SUBTITLE_TRACK_SWITCH,this.onSubtitleTrackSwitch,this),e.on(T.SUBTITLE_TRACK_UPDATED,this.onSubtitleTrackUpdated,this),e.on(T.EVENT_CUE_ENTER,this.onInterstitialCueEnter,this),e.on(T.ASSET_LIST_LOADED,this.onAssetListLoaded,this),e.on(T.BUFFER_APPENDED,this.onBufferAppended,this),e.on(T.BUFFER_FLUSHED,this.onBufferFlushed,this),e.on(T.BUFFERED_TO_END,this.onBufferedToEnd,this),e.on(T.MEDIA_ENDED,this.onMediaEnded,this),e.on(T.ERROR,this.onError,this),e.on(T.DESTROYING,this.onDestroying,this)}unregisterListeners(){const e=this.hls;e&&(e.off(T.MEDIA_ATTACHING,this.onMediaAttaching,this),e.off(T.MEDIA_ATTACHED,this.onMediaAttached,this),e.off(T.MEDIA_DETACHING,this.onMediaDetaching,this),e.off(T.MANIFEST_LOADING,this.onManifestLoading,this),e.off(T.LEVEL_UPDATED,this.onLevelUpdated,this),e.off(T.AUDIO_TRACK_SWITCHING,this.onAudioTrackSwitching,this),e.off(T.AUDIO_TRACK_UPDATED,this.onAudioTrackUpdated,this),e.off(T.SUBTITLE_TRACK_SWITCH,this.onSubtitleTrackSwitch,this),e.off(T.SUBTITLE_TRACK_UPDATED,this.onSubtitleTrackUpdated,this),e.off(T.EVENT_CUE_ENTER,this.onInterstitialCueEnter,this),e.off(T.ASSET_LIST_LOADED,this.onAssetListLoaded,this),e.off(T.BUFFER_CODECS,this.onBufferCodecs,this),e.off(T.BUFFER_APPENDED,this.onBufferAppended,this),e.off(T.BUFFER_FLUSHED,this.onBufferFlushed,this),e.off(T.BUFFERED_TO_END,this.onBufferedToEnd,this),e.off(T.MEDIA_ENDED,this.onMediaEnded,this),e.off(T.ERROR,this.onError,this),e.off(T.DESTROYING,this.onDestroying,this))}startLoad(){this.resumeBuffering()}stopLoad(){this.pauseBuffering()}resumeBuffering(){var e;(e=this.getBufferingPlayer())==null||e.resumeBuffering()}pauseBuffering(){var e;(e=this.getBufferingPlayer())==null||e.pauseBuffering()}destroy(){this.unregisterListeners(),this.stopLoad(),this.assetListLoader&&this.assetListLoader.destroy(),this.emptyPlayerQueue(),this.clearScheduleState(),this.schedule&&this.schedule.destroy(),this.media=this.detachedData=this.mediaSelection=this.requiredTracks=this.altSelection=this.manager=null,this.hls=this.HlsPlayerClass=this.schedule=this.log=null,this.assetListLoader=null,this.onPlay=this.onPause=this.onSeeking=this.onTimeupdate=null,this.onScheduleUpdate=null}onDestroying(){const e=this.primaryMedia||this.media;e&&this.removeMediaListeners(e)}removeMediaListeners(e){Bn(e,"play",this.onPlay),Bn(e,"pause",this.onPause),Bn(e,"seeking",this.onSeeking),Bn(e,"timeupdate",this.onTimeupdate)}onMediaAttaching(e,t){const n=this.media=t.media;li(n,"seeking",this.onSeeking),li(n,"timeupdate",this.onTimeupdate),li(n,"play",this.onPlay),li(n,"pause",this.onPause)}onMediaAttached(e,t){const n=this.effectivePlayingItem,i=this.detachedData;if(this.detachedData=null,n===null)this.checkStart();else if(!i){this.clearScheduleState();const r=this.findItemIndex(n);this.setSchedulePosition(r)}}clearScheduleState(){this.playingItem=this.bufferingItem=this.waitingItem=this.endedItem=this.playingAsset=this.endedAsset=this.bufferingAsset=null}onMediaDetaching(e,t){const n=!!t.transferMedia,i=this.media;if(this.media=null,!n&&(i&&this.removeMediaListeners(i),this.detachedData)){const r=this.getBufferingPlayer();r&&(this.playingAsset=this.endedAsset=this.bufferingAsset=this.bufferingItem=this.waitingItem=this.detachedData=null,r.detachMedia()),this.shouldPlay=!1}}get interstitialsManager(){if(!this.manager){if(!this.hls)return null;const e=this,t=()=>e.bufferingItem||e.waitingItem,n=u=>u&&e.getAssetPlayer(u.identifier),i=(u,h,y,A,v)=>{if(u){let S=u[h].start;const k=u.event;if(k){if(h==="playout"||k.timelineOccupancy!==ki.Point){const I=n(y);(I==null?void 0:I.interstitial)===k&&(S+=I.assetItem.startOffset+I[v])}}else{const I=A==="bufferedPos"?s():e[A];S+=I-u.start}return S}return 0},r=(u,h)=>{if(u!==0&&h!=="primary"&&e.schedule.length){var y;const A=e.schedule.findItemIndexAtTime(u),v=(y=e.schedule.items)==null?void 0:y[A];if(v){const S=v[h].start-v.start;return u+S}}return u},s=()=>{const u=e.bufferedPos;return u===Number.MAX_VALUE?o("primary"):Math.max(u,0)},o=u=>{var h;return(h=e.primaryDetails)!=null&&h.live?e.primaryDetails.edge:e.schedule.durations[u]},l=(u,h)=>{var y,A;const v=e.effectivePlayingItem;if(v!=null&&(y=v.event)!=null&&y.restrictions.skip)return;e.log(`seek to ${u} "${h}"`);const S=e.effectivePlayingItem,k=e.schedule.findItemIndexAtTime(u,h),I=(A=e.schedule.items)==null?void 0:A[k],R=e.getBufferingPlayer(),_=R==null?void 0:R.interstitial,L=_==null?void 0:_.appendInPlace,F=S&&e.itemsMatch(S,I);if(S&&(L||F)){const M=n(e.playingAsset),q=(M==null?void 0:M.media)||e.primaryMedia;if(q){const P=h==="primary"?q.currentTime:i(S,h,e.playingAsset,"timelinePos","currentTime"),K=u-P,Q=(L?P:q.currentTime)+K;if(Q>=0&&(!M||L||Q<=M.duration)){q.currentTime=Q;return}}}if(I){let M=u;if(h!=="primary"){const P=I[h].start,K=u-P;M=I.start+K}const q=!e.isInterstitial(I);if((!e.isInterstitial(S)||S.event.appendInPlace)&&(q||I.event.appendInPlace)){const P=e.media||(L?R==null?void 0:R.media:null);P&&(P.currentTime=M)}else if(S){const P=e.findItemIndex(S);if(k>P){const Q=e.schedule.findJumpRestrictedIndex(P+1,k);if(Q>P){e.setSchedulePosition(Q);return}}let K=0;if(q)e.timelinePos=M,e.checkBuffer();else{var B;const Q=I==null||(B=I.event)==null?void 0:B.assetList;if(Q){const he=u-(I[h]||I).start;for(let re=Q.length;re--;){const ue=Q[re];if(ue.duration&&he>=ue.startOffset&&he<ue.startOffset+ue.duration){K=re;break}}}}e.setSchedulePosition(k,K)}}},d=()=>{const u=e.effectivePlayingItem;if(e.isInterstitial(u))return u;const h=t();return e.isInterstitial(h)?h:null},c={get currentTime(){const u=d(),h=e.effectivePlayingItem;return h&&h===u?i(h,"playout",e.effectivePlayingAsset,"timelinePos","currentTime")-h.playout.start:0},set currentTime(u){const h=d(),y=e.effectivePlayingItem;y&&y===h&&l(u+y.playout.start,"playout")},get duration(){const u=d();return u?u.playout.end-u.playout.start:0},get assetPlayers(){var u;const h=(u=d())==null?void 0:u.event.assetList;return h?h.map(y=>e.getAssetPlayer(y.identifier)):[]},get playingIndex(){var u;const h=(u=d())==null?void 0:u.event;return h&&e.effectivePlayingAsset?h.findAssetIndex(e.effectivePlayingAsset):-1},get scheduleItem(){return d()}};this.manager={get events(){var u,h;return((u=e.schedule)==null||(h=u.events)==null?void 0:h.slice(0))||[]},get schedule(){var u,h;return((u=e.schedule)==null||(h=u.items)==null?void 0:h.slice(0))||[]},get interstitialPlayer(){return d()?c:null},get playerQueue(){return e.playerQueue.slice(0)},get bufferingAsset(){return e.bufferingAsset},get bufferingItem(){return t()},get bufferingIndex(){const u=t();return e.findItemIndex(u)},get playingAsset(){return e.effectivePlayingAsset},get playingItem(){return e.effectivePlayingItem},get playingIndex(){const u=e.effectivePlayingItem;return e.findItemIndex(u)},primary:{get bufferedEnd(){return s()},get currentTime(){const u=e.timelinePos;return u>0?u:0},set currentTime(u){l(u,"primary")},get duration(){return o("primary")},get seekableStart(){var u;return((u=e.primaryDetails)==null?void 0:u.fragmentStart)||0}},integrated:{get bufferedEnd(){return i(t(),"integrated",e.bufferingAsset,"bufferedPos","bufferedEnd")},get currentTime(){return i(e.effectivePlayingItem,"integrated",e.effectivePlayingAsset,"timelinePos","currentTime")},set currentTime(u){l(u,"integrated")},get duration(){return o("integrated")},get seekableStart(){var u;return r(((u=e.primaryDetails)==null?void 0:u.fragmentStart)||0,"integrated")}},skip:()=>{const u=e.effectivePlayingItem,h=u==null?void 0:u.event;if(h&&!h.restrictions.skip){const y=e.findItemIndex(u);if(h.appendInPlace){const A=u.playout.start+u.event.duration;l(A+.001,"playout")}else e.advanceAfterAssetEnded(h,y,1/0)}}}}return this.manager}get effectivePlayingItem(){return this.waitingItem||this.playingItem||this.endedItem}get effectivePlayingAsset(){return this.playingAsset||this.endedAsset}get playingLastItem(){var e;const t=this.playingItem,n=(e=this.schedule)==null?void 0:e.items;return!this.playbackStarted||!t||!n?!1:this.findItemIndex(t)===n.length-1}get playbackStarted(){return this.effectivePlayingItem!==null}get currentTime(){var e,t,n;if(this.mediaSelection===null)return;const i=this.waitingItem||this.playingItem;if(this.isInterstitial(i)&&!i.event.appendInPlace)return;let r=this.media;!r&&(e=this.bufferingItem)!=null&&(t=e.event)!=null&&t.appendInPlace&&(r=this.primaryMedia);const s=(n=r)==null?void 0:n.currentTime;if(!(s===void 0||!te(s)))return s}get primaryMedia(){var e;return this.media||((e=this.detachedData)==null?void 0:e.media)||null}isInterstitial(e){return!!(e!=null&&e.event)}retreiveMediaSource(e,t){const n=this.getAssetPlayer(e);n&&this.transferMediaFromPlayer(n,t)}transferMediaFromPlayer(e,t){const n=e.interstitial.appendInPlace,i=e.media;if(n&&i===this.primaryMedia){if(this.bufferingAsset=null,(!t||this.isInterstitial(t)&&!t.event.appendInPlace)&&t&&i){this.detachedData={media:i};return}const r=e.transferMedia();this.log(`transfer MediaSource from ${e} ${Ie(r)}`),this.detachedData=r}else t&&i&&(this.shouldPlay||(this.shouldPlay=!i.paused))}transferMediaTo(e,t){var n,i;if(e.media===t)return;let r=null;const s=this.hls,o=e!==s,l=o&&e.interstitial.appendInPlace,d=(n=this.detachedData)==null?void 0:n.mediaSource;let c;if(s.media)l&&(r=s.transferMedia(),this.detachedData=r),c="Primary";else if(d){const y=this.getBufferingPlayer();y?(r=y.transferMedia(),c=`${y}`):c="detached MediaSource"}else c="detached media";if(!r){if(d)r=this.detachedData,this.log(`using detachedData: MediaSource ${Ie(r)}`);else if(!this.detachedData||s.media===t){const y=this.playerQueue;y.length>1&&y.forEach(A=>{if(o&&A.interstitial.appendInPlace!==l){const v=A.interstitial;this.clearInterstitial(A.interstitial,null),v.appendInPlace=!1,v.appendInPlace&&this.warn(`Could not change append strategy for queued assets ${v}`)}}),this.hls.detachMedia(),this.detachedData={media:t}}}const u=r&&"mediaSource"in r&&((i=r.mediaSource)==null?void 0:i.readyState)!=="closed",h=u&&r?r:t;if(this.log(`${u?"transfering MediaSource":"attaching media"} to ${o?e:"Primary"} from ${c}`),h===r){const y=o&&e.assetId===this.schedule.assetIdAtEnd;h.overrides={duration:this.schedule.duration,endOfStream:!o||y,cueRemoval:!o}}e.attachMedia(h)}onInterstitialCueEnter(){this.onTimeupdate()}checkStart(){const e=this.schedule,t=e.events;if(!t||this.playbackDisabled||!this.media)return;this.bufferedPos===-1&&(this.bufferedPos=0);const n=this.timelinePos,i=this.effectivePlayingItem;if(n===-1){const r=this.hls.startPosition;if(this.timelinePos=r,t.length&&t[0].cue.pre){const s=e.findEventIndex(t[0].identifier);this.setSchedulePosition(s)}else if(r>=0||!this.primaryLive){const s=this.timelinePos=r>0?r:0,o=e.findItemIndexAtTime(s);this.setSchedulePosition(o)}}else if(i&&!this.playingItem){const r=e.findItemIndex(i);this.setSchedulePosition(r)}}advanceAfterAssetEnded(e,t,n){const i=n+1;if(!e.isAssetPastPlayoutLimit(i)&&!e.assetList[i].error)this.setSchedulePosition(t,i);else{const r=this.schedule.items;if(r){const s=t+1,o=r.length;if(s>=o){this.setSchedulePosition(-1);return}const l=e.resumeTime;this.timelinePos<l&&(this.timelinePos=l,this.checkBuffer()),this.setSchedulePosition(s)}}}setScheduleToAssetAtTime(e,t){const n=this.schedule,i=t.parentIdentifier,r=n.getEvent(i);if(r){const s=n.findEventIndex(i),o=n.findAssetIndex(r,e);this.setSchedulePosition(s,o)}}setSchedulePosition(e,t){const n=this.schedule.items;if(!n||this.playbackDisabled)return;this.log(`setSchedulePosition ${e}, ${t}`);const i=e>=0?n[e]:null,r=this.playingItem,s=this.playingLastItem;if(this.isInterstitial(r)){var o;const d=r.event,c=this.playingAsset,u=c==null?void 0:c.identifier,h=u?this.getAssetPlayer(u):null;if(h&&u&&(!this.eventItemsMatch(r,i)||t!==void 0&&u!==((o=d.assetList)==null?void 0:o[t].identifier))){var l;const y=d.findAssetIndex(c);this.log(`INTERSTITIAL_ASSET_ENDED ${y+1}/${d.assetList.length} ${Tr(c)}`),this.endedAsset=c,this.playingAsset=null,this.hls.trigger(T.INTERSTITIAL_ASSET_ENDED,{asset:c,assetListIndex:y,event:d,schedule:n.slice(0),scheduleIndex:e,player:h}),this.retreiveMediaSource(u,i),h.media&&!((l=this.detachedData)!=null&&l.mediaSource)&&h.detachMedia()}if(!this.eventItemsMatch(r,i)&&(this.endedItem=r,this.playingItem=null,this.log(`INTERSTITIAL_ENDED ${d} ${xt(r)}`),d.hasPlayed=!0,this.hls.trigger(T.INTERSTITIAL_ENDED,{event:d,schedule:n.slice(0),scheduleIndex:e}),d.cue.once)){this.updateSchedule();const y=this.schedule.items;if(i&&y){const A=this.schedule.findItemIndex(i);this.advanceSchedule(A,y,t,r,s)}return}}this.advanceSchedule(e,n,t,r,s)}advanceSchedule(e,t,n,i,r){const s=e>=0?t[e]:null,o=this.primaryMedia,l=this.playerQueue;if(l.length&&l.forEach(d=>{const c=d.interstitial,u=this.schedule.findEventIndex(c.identifier);(u<e||u>e+1)&&this.clearInterstitial(c,s)}),this.isInterstitial(s)){this.timelinePos=Math.min(Math.max(this.timelinePos,s.start),s.end);const d=s.event;n===void 0&&(n=this.schedule.findAssetIndex(d,this.timelinePos));const c=this.waitingItem;this.assetsBuffered(s,o)||this.setBufferingItem(s);let u=this.preloadAssets(d,n);if(this.eventItemsMatch(s,c||i)||(this.waitingItem=s,this.log(`INTERSTITIAL_STARTED ${xt(s)} ${d.appendInPlace?"append in place":""}`),this.hls.trigger(T.INTERSTITIAL_STARTED,{event:d,schedule:t.slice(0),scheduleIndex:e})),!d.assetListLoaded){this.log(`Waiting for ASSET-LIST to complete loading ${d}`);return}if(d.assetListLoader&&(d.assetListLoader.destroy(),d.assetListLoader=void 0),!o){this.log(`Waiting for attachMedia to start Interstitial ${d}`);return}this.waitingItem=this.endedItem=null,this.playingItem=s;const h=d.assetList[n];if(!h){const y=t[e+1],A=this.media;y&&A&&!this.isInterstitial(y)&&A.currentTime<y.start&&(A.currentTime=this.timelinePos=y.start),this.advanceAfterAssetEnded(d,e,n||0);return}if(u||(u=this.getAssetPlayer(h.identifier)),u===null||u.destroyed){const y=d.assetList.length;this.warn(`asset ${n+1}/${y} player destroyed ${d}`),u=this.createAssetPlayer(d,h,n)}if(!this.eventItemsMatch(s,this.bufferingItem)&&d.appendInPlace&&this.isAssetBuffered(h))return;this.startAssetPlayer(u,n,t,e,o),this.shouldPlay&&ua(u.media)}else s!==null?(this.resumePrimary(s,e,i),this.shouldPlay&&ua(this.hls.media)):r&&this.isInterstitial(i)&&(this.endedItem=null,this.playingItem=i,i.event.appendInPlace||this.attachPrimary(this.schedule.durations.primary,null))}get playbackDisabled(){return this.hls.config.enableInterstitialPlayback===!1}get primaryDetails(){var e,t;return(e=this.mediaSelection)==null||(t=e.main)==null?void 0:t.details}get primaryLive(){var e;return!!((e=this.primaryDetails)!=null&&e.live)}resumePrimary(e,t,n){var i;if(this.playingItem=e,this.playingAsset=this.endedAsset=null,this.waitingItem=this.endedItem=null,this.bufferedToItem(e),this.log(`resuming ${xt(e)}`),!((i=this.detachedData)!=null&&i.mediaSource)){let s=this.timelinePos;(s<e.start||s>=e.end)&&(s=this.getPrimaryResumption(e,t),this.timelinePos=s),this.attachPrimary(s,e)}if(!n)return;const r=this.schedule.items;r&&(this.log(`resumed ${xt(e)}`),this.hls.trigger(T.INTERSTITIALS_PRIMARY_RESUMED,{schedule:r.slice(0),scheduleIndex:t}),this.checkBuffer())}getPrimaryResumption(e,t){const n=e.start;if(this.primaryLive){const i=this.primaryDetails;if(t===0)return this.hls.startPosition;if(i&&(n<i.fragmentStart||n>i.edge))return this.hls.liveSyncPosition||-1}return n}isAssetBuffered(e){const t=this.getAssetPlayer(e.identifier);return t!=null&&t.hls?t.hls.bufferedToEnd:Ee.bufferInfo(this.primaryMedia,this.timelinePos,0).end+1>=e.timelineStart+(e.duration||0)}attachPrimary(e,t,n){t?this.setBufferingItem(t):this.bufferingItem=this.playingItem,this.bufferingAsset=null;const i=this.primaryMedia;if(!i)return;const r=this.hls;r.media?this.checkBuffer():(this.transferMediaTo(r,i),n&&this.startLoadingPrimaryAt(e,n)),n||(this.timelinePos=e,this.startLoadingPrimaryAt(e,n))}startLoadingPrimaryAt(e,t){var n;const i=this.hls;!i.loadingEnabled||!i.media||Math.abs((((n=i.mainForwardBufferInfo)==null?void 0:n.start)||i.media.currentTime)-e)>.5?i.startLoad(e,t):i.bufferingEnabled||i.resumeBuffering()}onManifestLoading(){this.stopLoad(),this.schedule.reset(),this.emptyPlayerQueue(),this.clearScheduleState(),this.shouldPlay=!1,this.bufferedPos=this.timelinePos=-1,this.mediaSelection=this.altSelection=this.manager=this.requiredTracks=null,this.hls.off(T.BUFFER_CODECS,this.onBufferCodecs,this),this.hls.on(T.BUFFER_CODECS,this.onBufferCodecs,this)}onLevelUpdated(e,t){if(t.level===-1)return;const n=this.hls.levels[t.level],i=Se(Se({},this.mediaSelection||this.altSelection),{},{main:n});this.mediaSelection=i,this.schedule.parseInterstitialDateRanges(i,this.hls.config.interstitialAppendInPlace),!this.effectivePlayingItem&&this.schedule.items&&this.checkStart()}onAudioTrackUpdated(e,t){const n=this.hls.audioTracks[t.id],i=this.mediaSelection;if(!i){this.altSelection=Se(Se({},this.altSelection),{},{audio:n});return}const r=Se(Se({},i),{},{audio:n});this.mediaSelection=r}onSubtitleTrackUpdated(e,t){const n=this.hls.subtitleTracks[t.id],i=this.mediaSelection;if(!i){this.altSelection=Se(Se({},this.altSelection),{},{subtitles:n});return}const r=Se(Se({},i),{},{subtitles:n});this.mediaSelection=r}onAudioTrackSwitching(e,t){const n=Ps(t);this.playerQueue.forEach(i=>i.hls.setAudioOption(t)||i.hls.setAudioOption(n))}onSubtitleTrackSwitch(e,t){const n=Ps(t);this.playerQueue.forEach(i=>i.hls.setSubtitleOption(t)||t.id!==-1&&i.hls.setSubtitleOption(n))}onBufferCodecs(e,t){const n=t.tracks;n&&(this.requiredTracks=n)}onBufferAppended(e,t){this.checkBuffer()}onBufferFlushed(e,t){const n=this.playingItem;if(n&&!this.itemsMatch(n,this.bufferingItem)&&!this.isInterstitial(n)){const i=this.timelinePos;this.bufferedPos=i,this.checkBuffer()}}onBufferedToEnd(e){const t=this.schedule.events;if(this.bufferedPos<Number.MAX_VALUE&&t){for(let i=0;i<t.length;i++){const r=t[i];if(r.cue.post){var n;const s=this.schedule.findEventIndex(r.identifier),o=(n=this.schedule.items)==null?void 0:n[s];this.isInterstitial(o)&&this.eventItemsMatch(o,this.bufferingItem)&&this.bufferedToItem(o,0);break}}this.bufferedPos=Number.MAX_VALUE}}onMediaEnded(e){const t=this.playingItem;if(!this.playingLastItem&&t){const n=this.findItemIndex(t);this.setSchedulePosition(n+1)}else this.shouldPlay=!1}updateItem(e,t){const n=this.schedule.items;if(e&&n){const i=this.findItemIndex(e,t);return n[i]||null}return null}itemsMatch(e,t){return!!t&&(e===t||e.event&&t.event&&this.eventItemsMatch(e,t)||!e.event&&!t.event&&this.findItemIndex(e)===this.findItemIndex(t))}eventItemsMatch(e,t){var n;return!!t&&(e===t||e.event.identifier===((n=t.event)==null?void 0:n.identifier))}findItemIndex(e,t){return e?this.schedule.findItemIndex(e,t):-1}updateSchedule(){const e=this.mediaSelection;e&&this.schedule.updateSchedule(e,[])}checkBuffer(e){const t=this.schedule.items;if(!t)return;const n=Ee.bufferInfo(this.primaryMedia,this.timelinePos,0);e&&(this.bufferedPos=this.timelinePos),e||(e=n.len<1),this.updateBufferedPos(n.end,t,e)}updateBufferedPos(e,t,n){const i=this.schedule,r=this.bufferingItem;if(this.bufferedPos>e)return;if(t.length===1&&this.itemsMatch(t[0],r)){this.bufferedPos=e;return}const s=this.playingItem,o=this.findItemIndex(s);let l=i.findItemIndexAtTime(e);if(this.bufferedPos<e){var d,c;const u=this.findItemIndex(r),h=Math.min(u+1,t.length-1),y=t[h];if((l===-1&&r&&e>=r.end||(d=y.event)!=null&&d.appendInPlace&&e+.01>=y.start)&&(l=h),h-o>1&&(r==null||(c=r.event)==null?void 0:c.appendInPlace)===!1)return;if(this.bufferedPos=e,l>u&&l>o)this.bufferedToItem(y);else{const A=this.primaryDetails;this.primaryLive&&A&&e>A.edge-A.targetduration&&y.start<A.edge+this.hls.config.interstitialLiveLookAhead&&this.isInterstitial(y)&&this.preloadAssets(y.event,0)}}else n&&s&&!this.itemsMatch(s,r)&&(l===o?this.bufferedToItem(s):l===o+1&&this.bufferedToItem(t[l]))}assetsBuffered(e,t){return e.event.assetList.length===0?!1:!e.event.assetList.some(i=>{const r=this.getAssetPlayer(i.identifier);return!(r!=null&&r.bufferedInPlaceToEnd(t))})}setBufferingItem(e){const t=this.bufferingItem,n=this.schedule;if(this.itemsMatch(e,t))this.bufferingItem!==e&&(this.bufferingItem=e);else{const{items:i,events:r}=n;if(!i||!r)return t;const s=this.isInterstitial(e),o=this.getBufferingPlayer();if(this.bufferingItem=e,this.bufferedPos=Math.max(e.start,Math.min(e.end,this.timelinePos)),!this.playbackDisabled){const l=o?o.remaining:t?t.end-this.timelinePos:0;this.log(`buffered to boundary ${xt(e)}`+(t?` (${l.toFixed(2)} remaining)`:"")),s?e.event.assetList.forEach(d=>{const c=this.getAssetPlayer(d.identifier);c&&c.resumeBuffering()}):(this.hls.resumeBuffering(),this.playerQueue.forEach(d=>d.pauseBuffering()))}this.hls.trigger(T.INTERSTITIALS_BUFFERED_TO_BOUNDARY,{events:r.slice(0),schedule:i.slice(0),bufferingIndex:this.findItemIndex(e),playingIndex:this.findItemIndex(this.playingItem)})}return t}bufferedToItem(e,t=0){const n=this.setBufferingItem(e);if(!this.playbackDisabled){if(this.isInterstitial(e))this.bufferedToEvent(e,t);else if(n!==null){this.bufferingAsset=null;const i=this.detachedData;i?i.mediaSource?this.attachPrimary(e.start,e,!0):this.preloadPrimary(e):this.preloadPrimary(e)}}}preloadPrimary(e){const t=this.findItemIndex(e),n=this.getPrimaryResumption(e,t);this.startLoadingPrimaryAt(n)}bufferedToEvent(e,t){const n=e.event,i=n.assetList.length===0&&!n.assetListLoader,r=n.cue.once;if(i||!r){const s=this.preloadAssets(n,t);if(s!=null&&s.interstitial.appendInPlace){const o=n.assetList[t],l=this.primaryMedia;o&&l&&this.bufferAssetPlayer(s,l)}}}preloadAssets(e,t){const n=e.assetUrl,i=e.assetList.length,r=i===0&&!e.assetListLoader,s=e.cue.once;if(r){const l=e.timelineStart;if(e.appendInPlace){var o;const h=this.playingItem;!this.isInterstitial(h)&&(h==null||(o=h.nextEvent)==null?void 0:o.identifier)===e.identifier&&this.flushFrontBuffer(l+.25)}let d,c=0;if(!this.playingItem&&this.primaryLive&&(c=this.hls.startPosition,c===-1&&(c=this.hls.liveSyncPosition||0)),c&&!(e.cue.pre||e.cue.post)){const h=c-l;h>0&&(d=Math.round(h*1e3)/1e3)}if(this.log(`Load interstitial asset ${t+1}/${n?1:i} ${e}${d?` live-start: ${c} start-offset: ${d}`:""}`),n)return this.createAsset(e,0,0,l,e.duration,n);const u=this.assetListLoader.loadAssetList(e,d);u&&(e.assetListLoader=u)}else if(!s&&i){for(let l=t;l<i;l++){const d=e.assetList[l],c=this.getAssetPlayerQueueIndex(d.identifier);(c===-1||this.playerQueue[c].destroyed)&&!d.error&&this.createAssetPlayer(e,d,l)}return this.getAssetPlayer(e.assetList[t].identifier)}return null}flushFrontBuffer(e){const t=this.requiredTracks;if(!t)return;this.log(`Removing front buffer starting at ${e}`),Object.keys(t).forEach(i=>{this.hls.trigger(T.BUFFER_FLUSHING,{startOffset:e,endOffset:1/0,type:i})})}getAssetPlayerQueueIndex(e){const t=this.playerQueue;for(let n=0;n<t.length;n++)if(e===t[n].assetId)return n;return-1}getAssetPlayer(e){const t=this.getAssetPlayerQueueIndex(e);return this.playerQueue[t]||null}getBufferingPlayer(){const{playerQueue:e,primaryMedia:t}=this;if(t){for(let n=0;n<e.length;n++)if(e[n].media===t)return e[n]}return null}createAsset(e,t,n,i,r,s){const o={parentIdentifier:e.identifier,identifier:Cf(e,s,t),duration:r,startOffset:n,timelineStart:i,uri:s};return this.createAssetPlayer(e,o,t)}createAssetPlayer(e,t,n){this.log(`create HLSAssetPlayer for ${Tr(t)}`);const i=this.hls,r=i.userConfig;let s=r.videoPreference;const o=i.loadLevelObj||i.levels[i.currentLevel];(s||o)&&(s=Te({},s),o.videoCodec&&(s.videoCodec=o.videoCodec),o.videoRange&&(s.allowedVideoRanges=[o.videoRange]));const l=i.audioTracks[i.audioTrack],d=i.subtitleTracks[i.subtitleTrack];let c=0;if(this.primaryLive||e.appendInPlace){const R=this.timelinePos-t.timelineStart;if(R>1){const _=t.duration;_&&R<_&&(c=R)}}const u=t.identifier,h=Se(Se({},r),{},{autoStartLoad:!0,startFragPrefetch:!0,primarySessionId:i.sessionId,assetPlayerId:u,abrEwmaDefaultEstimate:i.bandwidthEstimate,interstitialsController:void 0,startPosition:c,liveDurationInfinity:!1,testBandwidth:!1,videoPreference:s,audioPreference:l||r.audioPreference,subtitlePreference:d||r.subtitlePreference});e.appendInPlace&&(e.appendInPlaceStarted=!0,t.timelineStart&&(h.timelineOffset=t.timelineStart));const y=h.cmcd;y!=null&&y.sessionId&&y.contentId&&(h.cmcd=Te({},y,{contentId:Fn(t.uri)})),this.getAssetPlayer(u)&&this.warn(`Duplicate date range identifier ${e} and asset ${u}`);const A=new If(this.HlsPlayerClass,h,e,t);this.playerQueue.push(A),e.assetList[n]=t;const v=R=>{if(R.live){const F=new Error(`Interstitials MUST be VOD assets ${e}`),B={fatal:!0,type:ae.OTHER_ERROR,details:G.INTERSTITIAL_ASSET_ITEM_ERROR,error:F};this.handleAssetItemError(B,e,this.schedule.findEventIndex(e.identifier),n,F.message);return}const _=R.edge-R.fragmentStart,L=t.duration;(L===null||_>L)&&(this.log(`Interstitial asset "${u}" duration change ${L} > ${_}`),t.duration=_,this.updateSchedule())};A.on(T.LEVEL_UPDATED,(R,{details:_})=>v(_)),A.on(T.LEVEL_PTS_UPDATED,(R,{details:_})=>v(_));const S=(R,_)=>{const L=this.getAssetPlayer(u);if(L&&_.tracks){L.off(T.BUFFER_CODECS,S),L.tracks=_.tracks;const F=this.primaryMedia;this.bufferingAsset===L.assetItem&&F&&!L.media&&this.bufferAssetPlayer(L,F)}};A.on(T.BUFFER_CODECS,S);const k=()=>{var R;const _=this.getAssetPlayer(u);if(this.log(`buffered to end of asset ${_}`),!_)return;const L=this.schedule.findEventIndex(e.identifier),F=e.findAssetIndex(t),B=F+1,M=(R=this.schedule.items)==null?void 0:R[L];if(this.isInterstitial(M))if(F!==-1&&!e.isAssetPastPlayoutLimit(B)&&!e.assetList[B].error)this.bufferedToItem(M,B);else{var q;const P=(q=this.schedule.items)==null?void 0:q[L+1];P&&this.bufferedToItem(P)}};A.on(T.BUFFERED_TO_END,k);const I=R=>()=>{if(!this.getAssetPlayer(u))return;this.shouldPlay=!0;const L=this.schedule.findEventIndex(e.identifier);this.advanceAfterAssetEnded(e,L,R)};return A.once(T.MEDIA_ENDED,I(n)),A.once(T.PLAYOUT_LIMIT_REACHED,I(1/0)),A.on(T.ERROR,(R,_)=>{const L=this.getAssetPlayer(u);if(_.details===G.BUFFER_STALLED_ERROR){if(L!=null&&L.media){const F=L.currentTime,B=L.duration-F;F&&e.appendInPlace&&B/L.media.playbackRate<.5?(this.log(`Advancing buffer past end of asset ${u} ${e} at ${L.media.currentTime}`),k()):(this.warn(`Stalled at ${F} of ${F+B} in asset ${u} ${e}`),this.onTimeupdate(),this.checkBuffer(!0))}return}this.handleAssetItemError(_,e,this.schedule.findEventIndex(e.identifier),n,`Asset player error ${_.error} ${e}`)}),A.on(T.DESTROYING,()=>{if(!this.getAssetPlayer(u))return;const _=new Error(`Asset player destroyed unexpectedly ${u}`),L={fatal:!0,type:ae.OTHER_ERROR,details:G.INTERSTITIAL_ASSET_ITEM_ERROR,error:_};this.handleAssetItemError(L,e,this.schedule.findEventIndex(e.identifier),n,_.message)}),this.hls.trigger(T.INTERSTITIAL_ASSET_PLAYER_CREATED,{asset:t,assetListIndex:n,event:e,player:A}),A}clearInterstitial(e,t){e.assetList.forEach(n=>{this.clearAssetPlayer(n.identifier,t)}),e.reset()}clearAssetPlayer(e,t){const n=this.getAssetPlayerQueueIndex(e);if(n!==-1){this.log(`clearAssetPlayer "${e}" toSegment: ${t&&xt(t)}`);const i=this.playerQueue[n];this.transferMediaFromPlayer(i,t),this.playerQueue.splice(n,1),i.destroy()}}emptyPlayerQueue(){let e;for(;e=this.playerQueue.pop();)e.destroy();this.playerQueue=[]}startAssetPlayer(e,t,n,i,r){const{interstitial:s,assetItem:o,assetId:l}=e,d=s.assetList.length,c=this.playingAsset;this.endedAsset=null,this.playingAsset=o,(!c||c.identifier!==l)&&(c&&(this.clearAssetPlayer(c.identifier,n[i]),delete c.error),this.log(`INTERSTITIAL_ASSET_STARTED ${t+1}/${d} ${e}`),this.hls.trigger(T.INTERSTITIAL_ASSET_STARTED,{asset:o,assetListIndex:t,event:s,schedule:n.slice(0),scheduleIndex:i,player:e})),this.bufferAssetPlayer(e,r)}bufferAssetPlayer(e,t){var n,i;const{interstitial:r,assetItem:s,assetId:o}=e,l=this.schedule.findEventIndex(r.identifier),d=(n=this.schedule.items)==null?void 0:n[l];if(!d)return;this.setBufferingItem(d),this.bufferingAsset=s;const c=this.getBufferingPlayer();if(c===e)return;const u=r.appendInPlace;if(u&&(c==null?void 0:c.interstitial.appendInPlace)===!1)return;const h=(c==null?void 0:c.tracks)||((i=this.detachedData)==null?void 0:i.tracks)||this.requiredTracks;if(u&&s!==this.playingAsset){if(!e.tracks)return;if(h&&!va(h,e.tracks)){const y=new Error(`Asset "${o}" SourceBuffer tracks ('${Object.keys(e.tracks)}') are not compatible with primary content tracks ('${Object.keys(h)}')`),A={fatal:!0,type:ae.OTHER_ERROR,details:G.INTERSTITIAL_ASSET_ITEM_ERROR,error:y},v=r.findAssetIndex(s);this.handleAssetItemError(A,r,l,v,y.message);return}}this.transferMediaTo(e,t)}handleAssetItemError(e,t,n,i,r){if(e.details===G.BUFFER_STALLED_ERROR)return;const s=t.assetList[i]||null;let o=null;if(s){const u=this.getAssetPlayerQueueIndex(s.identifier);o=this.playerQueue[u]||null}const l=this.schedule.items,d=Te({},e,{fatal:!1,errorAction:Nn(!0),asset:s,assetListIndex:i,event:t,schedule:l,scheduleIndex:n,player:o});if(this.warn(`Asset item error: ${e.error}`),this.hls.trigger(T.INTERSTITIAL_ASSET_ERROR,d),!e.fatal)return;const c=new Error(r);s&&(this.playingAsset!==s&&this.clearAssetPlayer(s.identifier,null),s.error=c),t.assetList.some(u=>!u.error)?t.appendInPlace&&(t.error=c):t.error=c,this.primaryFallback(t)}primaryFallback(e){const t=e.timelineStart,n=this.effectivePlayingItem;if(this.updateSchedule(),n){this.log(`Fallback to primary from event "${e.identifier}" start: ${t} pos: ${this.timelinePos} playing: ${n?xt(n):"<none>"} error: ${e.error}`),e.appendInPlace&&(this.attachPrimary(t,null),this.flushFrontBuffer(t));let i=this.timelinePos;i===-1&&(i=this.hls.startPosition);const r=this.updateItem(n,i);if(this.itemsMatch(n,r))this.clearInterstitial(e,null);else{const s=this.schedule.findItemIndexAtTime(i);this.setSchedulePosition(s)}}else this.checkStart()}onAssetListLoaded(e,t){var n;const i=t.event,r=i.identifier,s=t.assetListResponse.ASSETS;if(!this.schedule.hasEvent(r))return;const o=i.timelineStart,l=i.duration;let d=0;s.forEach((A,v)=>{const S=parseFloat(A.DURATION);this.createAsset(i,v,d,o+d,S,A.URI),d+=S}),i.duration=d,this.log(`Loaded asset-list with duration: ${d} (was: ${l}) ${i}`);const c=this.waitingItem,u=(c==null?void 0:c.event.identifier)===r;this.updateSchedule();const h=(n=this.bufferingItem)==null?void 0:n.event;if(u){var y;const A=this.schedule.findEventIndex(r),v=(y=this.schedule.items)==null?void 0:y[A];if(v){if(!this.playingItem&&this.timelinePos>v.end&&this.schedule.findItemIndexAtTime(this.timelinePos)!==A){i.error=new Error(`Interstitial no longer within playback range ${this.timelinePos} ${i}`),this.primaryFallback(i);return}this.setBufferingItem(v)}this.setSchedulePosition(A)}else if((h==null?void 0:h.identifier)===r&&h.appendInPlace){const A=i.assetList[0],v=this.getAssetPlayer(A.identifier),S=this.primaryMedia;A&&v&&S&&this.bufferAssetPlayer(v,S)}}onError(e,t){switch(t.details){case G.ASSET_LIST_PARSING_ERROR:case G.ASSET_LIST_LOAD_ERROR:case G.ASSET_LIST_LOAD_TIMEOUT:{const n=t.interstitial;n&&this.primaryFallback(n);break}case G.BUFFER_STALLED_ERROR:{this.onTimeupdate(),this.checkBuffer(!0);break}}}}const ha=500;class Df extends Ga{constructor(e,t,n){super(e,t,n,"subtitle-stream-controller",ce.SUBTITLE),this.currentTrackId=-1,this.tracksBuffered=[],this.mainDetails=null,this.registerListeners()}onHandlerDestroying(){this.unregisterListeners(),super.onHandlerDestroying(),this.mainDetails=null}registerListeners(){super.registerListeners();const{hls:e}=this;e.on(T.LEVEL_LOADED,this.onLevelLoaded,this),e.on(T.SUBTITLE_TRACKS_UPDATED,this.onSubtitleTracksUpdated,this),e.on(T.SUBTITLE_TRACK_SWITCH,this.onSubtitleTrackSwitch,this),e.on(T.SUBTITLE_TRACK_LOADED,this.onSubtitleTrackLoaded,this),e.on(T.SUBTITLE_FRAG_PROCESSED,this.onSubtitleFragProcessed,this),e.on(T.BUFFER_FLUSHING,this.onBufferFlushing,this)}unregisterListeners(){super.unregisterListeners();const{hls:e}=this;e.off(T.LEVEL_LOADED,this.onLevelLoaded,this),e.off(T.SUBTITLE_TRACKS_UPDATED,this.onSubtitleTracksUpdated,this),e.off(T.SUBTITLE_TRACK_SWITCH,this.onSubtitleTrackSwitch,this),e.off(T.SUBTITLE_TRACK_LOADED,this.onSubtitleTrackLoaded,this),e.off(T.SUBTITLE_FRAG_PROCESSED,this.onSubtitleFragProcessed,this),e.off(T.BUFFER_FLUSHING,this.onBufferFlushing,this)}startLoad(e,t){this.stopLoad(),this.state=Y.IDLE,this.setInterval(ha),this.nextLoadPosition=this.lastCurrentTime=e+this.timelineOffset,this.startPosition=t?-1:e,this.tick()}onManifestLoading(){super.onManifestLoading(),this.mainDetails=null}onMediaDetaching(e,t){this.tracksBuffered=[],super.onMediaDetaching(e,t)}onLevelLoaded(e,t){this.mainDetails=t.details}onSubtitleFragProcessed(e,t){const{frag:n,success:i}=t;if(Ge(n)&&(this.fragPrevious=n),this.state=Y.IDLE,!i)return;const r=this.tracksBuffered[this.currentTrackId];if(!r)return;let s;const o=n.start;for(let d=0;d<r.length;d++)if(o>=r[d].start&&o<=r[d].end){s=r[d];break}const l=n.start+n.duration;s?s.end=l:(s={start:o,end:l},r.push(s)),this.fragmentTracker.fragBuffered(n),this.fragBufferedComplete(n,null),this.media&&this.tick()}onBufferFlushing(e,t){const{startOffset:n,endOffset:i}=t;if(n===0&&i!==Number.POSITIVE_INFINITY){const r=i-1;if(r<=0)return;t.endOffsetSubtitles=Math.max(0,r),this.tracksBuffered.forEach(s=>{for(let o=0;o<s.length;){if(s[o].end<=r){s.shift();continue}else if(s[o].start<r)s[o].start=r;else break;o++}}),this.fragmentTracker.removeFragmentsInRange(n,r,ce.SUBTITLE)}}onError(e,t){const n=t.frag;(n==null?void 0:n.type)===ce.SUBTITLE&&(t.details===G.FRAG_GAP&&this.fragmentTracker.fragBuffered(n,!0),this.fragCurrent&&this.fragCurrent.abortRequests(),this.state!==Y.STOPPED&&(this.state=Y.IDLE))}onSubtitleTracksUpdated(e,{subtitleTracks:t}){if(this.levels&&oo(this.levels,t)){this.levels=t.map(n=>new Ai(n));return}this.tracksBuffered=[],this.levels=t.map(n=>{const i=new Ai(n);return this.tracksBuffered[i.id]=[],i}),this.fragmentTracker.removeFragmentsInRange(0,Number.POSITIVE_INFINITY,ce.SUBTITLE),this.fragPrevious=null,this.mediaBuffer=null}onSubtitleTrackSwitch(e,t){var n;if(this.currentTrackId=t.id,!((n=this.levels)!=null&&n.length)||this.currentTrackId===-1){this.clearInterval();return}const i=this.levels[this.currentTrackId];i!=null&&i.details?this.mediaBuffer=this.mediaBufferTimeRanges:this.mediaBuffer=null,i&&this.state!==Y.STOPPED&&this.setInterval(ha)}onSubtitleTrackLoaded(e,t){var n;const{currentTrackId:i,levels:r}=this,{details:s,id:o}=t;if(!r){this.warn(`Subtitle tracks were reset while loading level ${o}`);return}const l=r[o];if(o>=r.length||!l)return;this.log(`Subtitle track ${o} loaded [${s.startSN},${s.endSN}]${s.lastPartSn?`[part-${s.lastPartSn}-${s.lastPartIndex}]`:""},duration:${s.totalduration}`),this.mediaBuffer=this.mediaBufferTimeRanges;let d=0;if(s.live||(n=l.details)!=null&&n.live){const u=this.mainDetails;if(s.deltaUpdateFailed||!u)return;const h=u.fragments[0];if(!l.details)s.hasProgramDateTime&&u.hasProgramDateTime?(Si(s,u),d=s.fragmentStart):h&&(d=h.start,Ar(s,d));else{var c;d=this.alignPlaylists(s,l.details,(c=this.levelLastLoaded)==null?void 0:c.details),d===0&&h&&(d=h.start,Ar(s,d))}}l.details=s,this.levelLastLoaded=l,o===i&&(this.hls.trigger(T.SUBTITLE_TRACK_UPDATED,{details:s,id:o,groupId:t.groupId}),this.tick(),s.live&&!this.fragCurrent&&this.media&&this.state===Y.IDLE&&(jt(null,s.fragments,this.media.currentTime,0)||(this.warn("Subtitle playlist not aligned with playback"),l.details=void 0)))}_handleFragmentLoadComplete(e){const{frag:t,payload:n}=e,i=t.decryptdata,r=this.hls;if(!this.fragContextChanged(t)&&n&&n.byteLength>0&&i!=null&&i.key&&i.iv&&Yt(i.method)){const s=performance.now();this.decrypter.decrypt(new Uint8Array(n),i.key.buffer,i.iv.buffer,Rr(i.method)).catch(o=>{throw r.trigger(T.ERROR,{type:ae.MEDIA_ERROR,details:G.FRAG_DECRYPT_ERROR,fatal:!1,error:o,reason:o.message,frag:t}),o}).then(o=>{const l=performance.now();r.trigger(T.FRAG_DECRYPTED,{frag:t,payload:o,stats:{tstart:s,tdecrypt:l}})}).catch(o=>{this.warn(`${o.name}: ${o.message}`),this.state=Y.IDLE})}}doTick(){if(!this.media){this.state=Y.IDLE;return}if(this.state===Y.IDLE){const{currentTrackId:e,levels:t}=this,n=t==null?void 0:t[e];if(!n||!t.length||!n.details||this.waitForLive(n))return;const{config:i}=this,r=this.getLoadPosition(),s=Ee.bufferedInfo(this.tracksBuffered[this.currentTrackId]||[],r,i.maxBufferHole),{end:o,len:l}=s,d=n.details,c=this.hls.maxBufferLength+d.levelTargetDuration;if(l>c)return;const u=d.fragments,h=u.length,y=d.edge;let A=null;const v=this.fragPrevious;if(o<y){const I=i.maxFragLookUpTolerance,R=o>y-I?0:I;A=jt(v,u,Math.max(u[0].start,o),R),!A&&v&&v.start<u[0].start&&(A=u[0])}else A=u[h-1];if(A=this.filterReplacedPrimary(A,n.details),!A)return;const S=A.sn-d.startSN,k=u[S-1];if(k&&k.cc===A.cc&&this.fragmentTracker.getState(k)===Ye.NOT_LOADED&&(A=k),this.fragmentTracker.getState(A)===Ye.NOT_LOADED){const I=this.mapToInitFragWhenRequired(A);I&&this.loadFragment(I,n,o)}}}loadFragment(e,t,n){Ge(e)?super.loadFragment(e,t,n):this._loadInitSegment(e,t)}get mediaBufferTimeRanges(){return new Bf(this.tracksBuffered[this.currentTrackId]||[])}}class Bf{constructor(e){this.buffered=void 0;const t=(n,i,r)=>{if(i=i>>>0,i>r-1)throw new DOMException(`Failed to execute '${n}' on 'TimeRanges': The index provided (${i}) is greater than the maximum bound (${r})`);return e[i][n]};this.buffered={get length(){return e.length},end(n){return t("end",n,e.length)},start(n){return t("start",n,e.length)}}}}const Pf={42:225,92:233,94:237,95:243,96:250,123:231,124:247,125:209,126:241,127:9608,128:174,129:176,130:189,131:191,132:8482,133:162,134:163,135:9834,136:224,137:32,138:232,139:226,140:234,141:238,142:244,143:251,144:193,145:201,146:211,147:218,148:220,149:252,150:8216,151:161,152:42,153:8217,154:9473,155:169,156:8480,157:8226,158:8220,159:8221,160:192,161:194,162:199,163:200,164:202,165:203,166:235,167:206,168:207,169:239,170:212,171:217,172:249,173:219,174:171,175:187,176:195,177:227,178:205,179:204,180:236,181:210,182:242,183:213,184:245,185:123,186:125,187:92,188:94,189:95,190:124,191:8764,192:196,193:228,194:214,195:246,196:223,197:165,198:164,199:9475,200:197,201:229,202:216,203:248,204:9487,205:9491,206:9495,207:9499},yo=a=>String.fromCharCode(Pf[a]||a),je=15,ut=100,Of={17:1,18:3,21:5,22:7,23:9,16:11,19:12,20:14},Ff={17:2,18:4,21:6,22:8,23:10,19:13,20:15},Mf={25:1,26:3,29:5,30:7,31:9,24:11,27:12,28:14},Nf={25:2,26:4,29:6,30:8,31:10,27:13,28:15},Uf=["white","green","blue","cyan","red","yellow","magenta","black","transparent"];class $f{constructor(){this.time=null,this.verboseLevel=0}log(e,t){if(this.verboseLevel>=e){const n=typeof t=="function"?t():t;be.log(`${this.time} [${e}] ${n}`)}}}const Lt=function(e){const t=[];for(let n=0;n<e.length;n++)t.push(e[n].toString(16));return t};class Ao{constructor(){this.foreground="white",this.underline=!1,this.italics=!1,this.background="black",this.flash=!1}reset(){this.foreground="white",this.underline=!1,this.italics=!1,this.background="black",this.flash=!1}setStyles(e){const t=["foreground","underline","italics","background","flash"];for(let n=0;n<t.length;n++){const i=t[n];e.hasOwnProperty(i)&&(this[i]=e[i])}}isDefault(){return this.foreground==="white"&&!this.underline&&!this.italics&&this.background==="black"&&!this.flash}equals(e){return this.foreground===e.foreground&&this.underline===e.underline&&this.italics===e.italics&&this.background===e.background&&this.flash===e.flash}copy(e){this.foreground=e.foreground,this.underline=e.underline,this.italics=e.italics,this.background=e.background,this.flash=e.flash}toString(){return"color="+this.foreground+", underline="+this.underline+", italics="+this.italics+", background="+this.background+", flash="+this.flash}}class Gf{constructor(){this.uchar=" ",this.penState=new Ao}reset(){this.uchar=" ",this.penState.reset()}setChar(e,t){this.uchar=e,this.penState.copy(t)}setPenState(e){this.penState.copy(e)}equals(e){return this.uchar===e.uchar&&this.penState.equals(e.penState)}copy(e){this.uchar=e.uchar,this.penState.copy(e.penState)}isEmpty(){return this.uchar===" "&&this.penState.isDefault()}}class qf{constructor(e){this.chars=[],this.pos=0,this.currPenState=new Ao,this.cueStartTime=null,this.logger=void 0;for(let t=0;t<ut;t++)this.chars.push(new Gf);this.logger=e}equals(e){for(let t=0;t<ut;t++)if(!this.chars[t].equals(e.chars[t]))return!1;return!0}copy(e){for(let t=0;t<ut;t++)this.chars[t].copy(e.chars[t])}isEmpty(){let e=!0;for(let t=0;t<ut;t++)if(!this.chars[t].isEmpty()){e=!1;break}return e}setCursor(e){this.pos!==e&&(this.pos=e),this.pos<0?(this.logger.log(3,"Negative cursor position "+this.pos),this.pos=0):this.pos>ut&&(this.logger.log(3,"Too large cursor position "+this.pos),this.pos=ut)}moveCursor(e){const t=this.pos+e;if(e>1)for(let n=this.pos+1;n<t+1;n++)this.chars[n].setPenState(this.currPenState);this.setCursor(t)}backSpace(){this.moveCursor(-1),this.chars[this.pos].setChar(" ",this.currPenState)}insertChar(e){e>=144&&this.backSpace();const t=yo(e);if(this.pos>=ut){this.logger.log(0,()=>"Cannot insert "+e.toString(16)+" ("+t+") at position "+this.pos+". Skipping it!");return}this.chars[this.pos].setChar(t,this.currPenState),this.moveCursor(1)}clearFromPos(e){let t;for(t=e;t<ut;t++)this.chars[t].reset()}clear(){this.clearFromPos(0),this.pos=0,this.currPenState.reset()}clearToEndOfRow(){this.clearFromPos(this.pos)}getTextString(){const e=[];let t=!0;for(let n=0;n<ut;n++){const i=this.chars[n].uchar;i!==" "&&(t=!1),e.push(i)}return t?"":e.join("")}setPenStyles(e){this.currPenState.setStyles(e),this.chars[this.pos].setPenState(this.currPenState)}}class lr{constructor(e){this.rows=[],this.currRow=je-1,this.nrRollUpRows=null,this.lastOutputScreen=null,this.logger=void 0;for(let t=0;t<je;t++)this.rows.push(new qf(e));this.logger=e}reset(){for(let e=0;e<je;e++)this.rows[e].clear();this.currRow=je-1}equals(e){let t=!0;for(let n=0;n<je;n++)if(!this.rows[n].equals(e.rows[n])){t=!1;break}return t}copy(e){for(let t=0;t<je;t++)this.rows[t].copy(e.rows[t])}isEmpty(){let e=!0;for(let t=0;t<je;t++)if(!this.rows[t].isEmpty()){e=!1;break}return e}backSpace(){this.rows[this.currRow].backSpace()}clearToEndOfRow(){this.rows[this.currRow].clearToEndOfRow()}insertChar(e){this.rows[this.currRow].insertChar(e)}setPen(e){this.rows[this.currRow].setPenStyles(e)}moveCursor(e){this.rows[this.currRow].moveCursor(e)}setCursor(e){this.logger.log(2,"setCursor: "+e),this.rows[this.currRow].setCursor(e)}setPAC(e){this.logger.log(2,()=>"pacData = "+Ie(e));let t=e.row-1;if(this.nrRollUpRows&&t<this.nrRollUpRows-1&&(t=this.nrRollUpRows-1),this.nrRollUpRows&&this.currRow!==t){for(let o=0;o<je;o++)this.rows[o].clear();const r=this.currRow+1-this.nrRollUpRows,s=this.lastOutputScreen;if(s){const o=s.rows[r].cueStartTime,l=this.logger.time;if(o!==null&&l!==null&&o<l)for(let d=0;d<this.nrRollUpRows;d++)this.rows[t-this.nrRollUpRows+d+1].copy(s.rows[r+d])}}this.currRow=t;const n=this.rows[this.currRow];if(e.indent!==null){const r=e.indent,s=Math.max(r-1,0);n.setCursor(e.indent),e.color=n.chars[s].penState.foreground}const i={foreground:e.color,underline:e.underline,italics:e.italics,background:"black",flash:!1};this.setPen(i)}setBkgData(e){this.logger.log(2,()=>"bkgData = "+Ie(e)),this.backSpace(),this.setPen(e),this.insertChar(32)}setRollUpRows(e){this.nrRollUpRows=e}rollUp(){if(this.nrRollUpRows===null){this.logger.log(3,"roll_up but nrRollUpRows not set yet");return}this.logger.log(1,()=>this.getDisplayText());const e=this.currRow+1-this.nrRollUpRows,t=this.rows.splice(e,1)[0];t.clear(),this.rows.splice(this.currRow,0,t),this.logger.log(2,"Rolling up")}getDisplayText(e){e=e||!1;const t=[];let n="",i=-1;for(let r=0;r<je;r++){const s=this.rows[r].getTextString();s&&(i=r+1,e?t.push("Row "+i+": '"+s+"'"):t.push(s.trim()))}return t.length>0&&(e?n="["+t.join(" | ")+"]":n=t.join(`
`)),n}getTextAndFormat(){return this.rows}}class fa{constructor(e,t,n){this.chNr=void 0,this.outputFilter=void 0,this.mode=void 0,this.verbose=void 0,this.displayedMemory=void 0,this.nonDisplayedMemory=void 0,this.lastOutputScreen=void 0,this.currRollUpRow=void 0,this.writeScreen=void 0,this.cueStartTime=void 0,this.logger=void 0,this.chNr=e,this.outputFilter=t,this.mode=null,this.verbose=0,this.displayedMemory=new lr(n),this.nonDisplayedMemory=new lr(n),this.lastOutputScreen=new lr(n),this.currRollUpRow=this.displayedMemory.rows[je-1],this.writeScreen=this.displayedMemory,this.mode=null,this.cueStartTime=null,this.logger=n}reset(){this.mode=null,this.displayedMemory.reset(),this.nonDisplayedMemory.reset(),this.lastOutputScreen.reset(),this.outputFilter.reset(),this.currRollUpRow=this.displayedMemory.rows[je-1],this.writeScreen=this.displayedMemory,this.mode=null,this.cueStartTime=null}getHandler(){return this.outputFilter}setHandler(e){this.outputFilter=e}setPAC(e){this.writeScreen.setPAC(e)}setBkgData(e){this.writeScreen.setBkgData(e)}setMode(e){e!==this.mode&&(this.mode=e,this.logger.log(2,()=>"MODE="+e),this.mode==="MODE_POP-ON"?this.writeScreen=this.nonDisplayedMemory:(this.writeScreen=this.displayedMemory,this.writeScreen.reset()),this.mode!=="MODE_ROLL-UP"&&(this.displayedMemory.nrRollUpRows=null,this.nonDisplayedMemory.nrRollUpRows=null),this.mode=e)}insertChars(e){for(let n=0;n<e.length;n++)this.writeScreen.insertChar(e[n]);const t=this.writeScreen===this.displayedMemory?"DISP":"NON_DISP";this.logger.log(2,()=>t+": "+this.writeScreen.getDisplayText(!0)),(this.mode==="MODE_PAINT-ON"||this.mode==="MODE_ROLL-UP")&&(this.logger.log(1,()=>"DISPLAYED: "+this.displayedMemory.getDisplayText(!0)),this.outputDataUpdate())}ccRCL(){this.logger.log(2,"RCL - Resume Caption Loading"),this.setMode("MODE_POP-ON")}ccBS(){this.logger.log(2,"BS - BackSpace"),this.mode!=="MODE_TEXT"&&(this.writeScreen.backSpace(),this.writeScreen===this.displayedMemory&&this.outputDataUpdate())}ccAOF(){}ccAON(){}ccDER(){this.logger.log(2,"DER- Delete to End of Row"),this.writeScreen.clearToEndOfRow(),this.outputDataUpdate()}ccRU(e){this.logger.log(2,"RU("+e+") - Roll Up"),this.writeScreen=this.displayedMemory,this.setMode("MODE_ROLL-UP"),this.writeScreen.setRollUpRows(e)}ccFON(){this.logger.log(2,"FON - Flash On"),this.writeScreen.setPen({flash:!0})}ccRDC(){this.logger.log(2,"RDC - Resume Direct Captioning"),this.setMode("MODE_PAINT-ON")}ccTR(){this.logger.log(2,"TR"),this.setMode("MODE_TEXT")}ccRTD(){this.logger.log(2,"RTD"),this.setMode("MODE_TEXT")}ccEDM(){this.logger.log(2,"EDM - Erase Displayed Memory"),this.displayedMemory.reset(),this.outputDataUpdate(!0)}ccCR(){this.logger.log(2,"CR - Carriage Return"),this.writeScreen.rollUp(),this.outputDataUpdate(!0)}ccENM(){this.logger.log(2,"ENM - Erase Non-displayed Memory"),this.nonDisplayedMemory.reset()}ccEOC(){if(this.logger.log(2,"EOC - End Of Caption"),this.mode==="MODE_POP-ON"){const e=this.displayedMemory;this.displayedMemory=this.nonDisplayedMemory,this.nonDisplayedMemory=e,this.writeScreen=this.nonDisplayedMemory,this.logger.log(1,()=>"DISP: "+this.displayedMemory.getDisplayText())}this.outputDataUpdate(!0)}ccTO(e){this.logger.log(2,"TO("+e+") - Tab Offset"),this.writeScreen.moveCursor(e)}ccMIDROW(e){const t={flash:!1};if(t.underline=e%2===1,t.italics=e>=46,t.italics)t.foreground="white";else{const n=Math.floor(e/2)-16,i=["white","green","blue","cyan","red","yellow","magenta"];t.foreground=i[n]}this.logger.log(2,"MIDROW: "+Ie(t)),this.writeScreen.setPen(t)}outputDataUpdate(e=!1){const t=this.logger.time;t!==null&&this.outputFilter&&(this.cueStartTime===null&&!this.displayedMemory.isEmpty()?this.cueStartTime=t:this.displayedMemory.equals(this.lastOutputScreen)||(this.outputFilter.newCue(this.cueStartTime,t,this.lastOutputScreen),e&&this.outputFilter.dispatchCue&&this.outputFilter.dispatchCue(),this.cueStartTime=this.displayedMemory.isEmpty()?null:t),this.lastOutputScreen.copy(this.displayedMemory))}cueSplitAtTime(e){this.outputFilter&&(this.displayedMemory.isEmpty()||(this.outputFilter.newCue&&this.outputFilter.newCue(this.cueStartTime,e,this.displayedMemory),this.cueStartTime=e))}}class pa{constructor(e,t,n){this.channels=void 0,this.currentChannel=0,this.cmdHistory=Hf(),this.logger=void 0;const i=this.logger=new $f;this.channels=[null,new fa(e,t,i),new fa(e+1,n,i)]}getHandler(e){return this.channels[e].getHandler()}setHandler(e,t){this.channels[e].setHandler(t)}addData(e,t){this.logger.time=e;for(let n=0;n<t.length;n+=2){const i=t[n]&127,r=t[n+1]&127;let s=!1,o=null;if(i===0&&r===0)continue;this.logger.log(3,()=>"["+Lt([t[n],t[n+1]])+"] -> ("+Lt([i,r])+")");const l=this.cmdHistory;if(i>=16&&i<=31){if(Kf(i,r,l)){di(null,null,l),this.logger.log(3,()=>"Repeated command ("+Lt([i,r])+") is dropped");continue}di(i,r,this.cmdHistory),s=this.parseCmd(i,r),s||(s=this.parseMidrow(i,r)),s||(s=this.parsePAC(i,r)),s||(s=this.parseBackgroundAttributes(i,r))}else di(null,null,l);if(!s&&(o=this.parseChars(i,r),o)){const c=this.currentChannel;c&&c>0?this.channels[c].insertChars(o):this.logger.log(2,"No channel found yet. TEXT-MODE?")}!s&&!o&&this.logger.log(2,()=>"Couldn't parse cleaned data "+Lt([i,r])+" orig: "+Lt([t[n],t[n+1]]))}}parseCmd(e,t){const n=(e===20||e===28||e===21||e===29)&&t>=32&&t<=47,i=(e===23||e===31)&&t>=33&&t<=35;if(!(n||i))return!1;const r=e===20||e===21||e===23?1:2,s=this.channels[r];return e===20||e===21||e===28||e===29?t===32?s.ccRCL():t===33?s.ccBS():t===34?s.ccAOF():t===35?s.ccAON():t===36?s.ccDER():t===37?s.ccRU(2):t===38?s.ccRU(3):t===39?s.ccRU(4):t===40?s.ccFON():t===41?s.ccRDC():t===42?s.ccTR():t===43?s.ccRTD():t===44?s.ccEDM():t===45?s.ccCR():t===46?s.ccENM():t===47&&s.ccEOC():s.ccTO(t-32),this.currentChannel=r,!0}parseMidrow(e,t){let n=0;if((e===17||e===25)&&t>=32&&t<=47){if(e===17?n=1:n=2,n!==this.currentChannel)return this.logger.log(0,"Mismatch channel in midrow parsing"),!1;const i=this.channels[n];return i?(i.ccMIDROW(t),this.logger.log(3,()=>"MIDROW ("+Lt([e,t])+")"),!0):!1}return!1}parsePAC(e,t){let n;const i=(e>=17&&e<=23||e>=25&&e<=31)&&t>=64&&t<=127,r=(e===16||e===24)&&t>=64&&t<=95;if(!(i||r))return!1;const s=e<=23?1:2;t>=64&&t<=95?n=s===1?Of[e]:Mf[e]:n=s===1?Ff[e]:Nf[e];const o=this.channels[s];return o?(o.setPAC(this.interpretPAC(n,t)),this.currentChannel=s,!0):!1}interpretPAC(e,t){let n;const i={color:null,italics:!1,indent:null,underline:!1,row:e};return t>95?n=t-96:n=t-64,i.underline=(n&1)===1,n<=13?i.color=["white","green","blue","cyan","red","yellow","magenta","white"][Math.floor(n/2)]:n<=15?(i.italics=!0,i.color="white"):i.indent=Math.floor((n-16)/2)*4,i}parseChars(e,t){let n,i=null,r=null;if(e>=25?(n=2,r=e-8):(n=1,r=e),r>=17&&r<=19){let s;r===17?s=t+80:r===18?s=t+112:s=t+144,this.logger.log(2,()=>"Special char '"+yo(s)+"' in channel "+n),i=[s]}else e>=32&&e<=127&&(i=t===0?[e]:[e,t]);return i&&this.logger.log(3,()=>"Char codes =  "+Lt(i).join(",")),i}parseBackgroundAttributes(e,t){const n=(e===16||e===24)&&t>=32&&t<=47,i=(e===23||e===31)&&t>=45&&t<=47;if(!(n||i))return!1;let r;const s={};e===16||e===24?(r=Math.floor((t-32)/2),s.background=Uf[r],t%2===1&&(s.background=s.background+"_semi")):t===45?s.background="transparent":(s.foreground="black",t===47&&(s.underline=!0));const o=e<=23?1:2;return this.channels[o].setBkgData(s),!0}reset(){for(let e=0;e<Object.keys(this.channels).length;e++){const t=this.channels[e];t&&t.reset()}di(null,null,this.cmdHistory)}cueSplitAtTime(e){for(let t=0;t<this.channels.length;t++){const n=this.channels[t];n&&n.cueSplitAtTime(e)}}}function di(a,e,t){t.a=a,t.b=e}function Kf(a,e,t){return t.a===a&&t.b===e}function Hf(){return{a:null,b:null}}var $r=function(){if(xi!=null&&xi.VTTCue)return self.VTTCue;const a=["","lr","rl"],e=["start","middle","end","left","right"];function t(o,l){if(typeof l!="string"||!Array.isArray(o))return!1;const d=l.toLowerCase();return~o.indexOf(d)?d:!1}function n(o){return t(a,o)}function i(o){return t(e,o)}function r(o,...l){let d=1;for(;d<arguments.length;d++){const c=arguments[d];for(const u in c)o[u]=c[u]}return o}function s(o,l,d){const c=this,u={enumerable:!0};c.hasBeenReset=!1;let h="",y=!1,A=o,v=l,S=d,k=null,I="",R=!0,_="auto",L="start",F=50,B="middle",M=50,q="middle";Object.defineProperty(c,"id",r({},u,{get:function(){return h},set:function(P){h=""+P}})),Object.defineProperty(c,"pauseOnExit",r({},u,{get:function(){return y},set:function(P){y=!!P}})),Object.defineProperty(c,"startTime",r({},u,{get:function(){return A},set:function(P){if(typeof P!="number")throw new TypeError("Start time must be set to a number.");A=P,this.hasBeenReset=!0}})),Object.defineProperty(c,"endTime",r({},u,{get:function(){return v},set:function(P){if(typeof P!="number")throw new TypeError("End time must be set to a number.");v=P,this.hasBeenReset=!0}})),Object.defineProperty(c,"text",r({},u,{get:function(){return S},set:function(P){S=""+P,this.hasBeenReset=!0}})),Object.defineProperty(c,"region",r({},u,{get:function(){return k},set:function(P){k=P,this.hasBeenReset=!0}})),Object.defineProperty(c,"vertical",r({},u,{get:function(){return I},set:function(P){const K=n(P);if(K===!1)throw new SyntaxError("An invalid or illegal string was specified.");I=K,this.hasBeenReset=!0}})),Object.defineProperty(c,"snapToLines",r({},u,{get:function(){return R},set:function(P){R=!!P,this.hasBeenReset=!0}})),Object.defineProperty(c,"line",r({},u,{get:function(){return _},set:function(P){if(typeof P!="number"&&P!=="auto")throw new SyntaxError("An invalid number or illegal string was specified.");_=P,this.hasBeenReset=!0}})),Object.defineProperty(c,"lineAlign",r({},u,{get:function(){return L},set:function(P){const K=i(P);if(!K)throw new SyntaxError("An invalid or illegal string was specified.");L=K,this.hasBeenReset=!0}})),Object.defineProperty(c,"position",r({},u,{get:function(){return F},set:function(P){if(P<0||P>100)throw new Error("Position must be between 0 and 100.");F=P,this.hasBeenReset=!0}})),Object.defineProperty(c,"positionAlign",r({},u,{get:function(){return B},set:function(P){const K=i(P);if(!K)throw new SyntaxError("An invalid or illegal string was specified.");B=K,this.hasBeenReset=!0}})),Object.defineProperty(c,"size",r({},u,{get:function(){return M},set:function(P){if(P<0||P>100)throw new Error("Size must be between 0 and 100.");M=P,this.hasBeenReset=!0}})),Object.defineProperty(c,"align",r({},u,{get:function(){return q},set:function(P){const K=i(P);if(!K)throw new SyntaxError("An invalid or illegal string was specified.");q=K,this.hasBeenReset=!0}})),c.displayState=void 0}return s.prototype.getCueAsHTML=function(){return self.WebVTT.convertCueToDOMTree(self,this.text)},s}();class zf{decode(e,t){if(!e)return"";if(typeof e!="string")throw new Error("Error - expected string data.");return decodeURIComponent(encodeURIComponent(e))}}function bo(a){function e(n,i,r,s){return(n|0)*3600+(i|0)*60+(r|0)+parseFloat(s||0)}const t=a.match(/^(?:(\d+):)?(\d{2}):(\d{2})(\.\d+)?/);return t?parseFloat(t[2])>59?e(t[2],t[3],0,t[4]):e(t[1],t[2],t[3],t[4]):null}class Yf{constructor(){this.values=Object.create(null)}set(e,t){!this.get(e)&&t!==""&&(this.values[e]=t)}get(e,t,n){return n?this.has(e)?this.values[e]:t[n]:this.has(e)?this.values[e]:t}has(e){return e in this.values}alt(e,t,n){for(let i=0;i<n.length;++i)if(t===n[i]){this.set(e,t);break}}integer(e,t){/^-?\d+$/.test(t)&&this.set(e,parseInt(t,10))}percent(e,t){if(/^([\d]{1,3})(\.[\d]*)?%$/.test(t)){const n=parseFloat(t);if(n>=0&&n<=100)return this.set(e,n),!0}return!1}}function vo(a,e,t,n){const i=n?a.split(n):[a];for(const r in i){if(typeof i[r]!="string")continue;const s=i[r].split(t);if(s.length!==2)continue;const o=s[0],l=s[1];e(o,l)}}const Cr=new $r(0,0,""),ci=Cr.align==="middle"?"middle":"center";function Vf(a,e,t){const n=a;function i(){const o=bo(a);if(o===null)throw new Error("Malformed timestamp: "+n);return a=a.replace(/^[^\sa-zA-Z-]+/,""),o}function r(o,l){const d=new Yf;vo(o,function(h,y){let A;switch(h){case"region":for(let v=t.length-1;v>=0;v--)if(t[v].id===y){d.set(h,t[v].region);break}break;case"vertical":d.alt(h,y,["rl","lr"]);break;case"line":A=y.split(","),d.integer(h,A[0]),d.percent(h,A[0])&&d.set("snapToLines",!1),d.alt(h,A[0],["auto"]),A.length===2&&d.alt("lineAlign",A[1],["start",ci,"end"]);break;case"position":A=y.split(","),d.percent(h,A[0]),A.length===2&&d.alt("positionAlign",A[1],["start",ci,"end","line-left","line-right","auto"]);break;case"size":d.percent(h,y);break;case"align":d.alt(h,y,["start",ci,"end","left","right"]);break}},/:/,/\s/),l.region=d.get("region",null),l.vertical=d.get("vertical","");let c=d.get("line","auto");c==="auto"&&Cr.line===-1&&(c=-1),l.line=c,l.lineAlign=d.get("lineAlign","start"),l.snapToLines=d.get("snapToLines",!0),l.size=d.get("size",100),l.align=d.get("align",ci);let u=d.get("position","auto");u==="auto"&&Cr.position===50&&(u=l.align==="start"||l.align==="left"?0:l.align==="end"||l.align==="right"?100:50),l.position=u}function s(){a=a.replace(/^\s+/,"")}if(s(),e.startTime=i(),s(),a.slice(0,3)!=="-->")throw new Error("Malformed time stamp (time stamps must be separated by '-->'): "+n);a=a.slice(3),s(),e.endTime=i(),s(),r(a,e)}function xo(a){return a.replace(/<br(?: \/)?>/gi,`
`)}class Wf{constructor(){this.state="INITIAL",this.buffer="",this.decoder=new zf,this.regionList=[],this.cue=null,this.oncue=void 0,this.onparsingerror=void 0,this.onflush=void 0}parse(e){const t=this;e&&(t.buffer+=t.decoder.decode(e,{stream:!0}));function n(){let r=t.buffer,s=0;for(r=xo(r);s<r.length&&r[s]!=="\r"&&r[s]!==`
`;)++s;const o=r.slice(0,s);return r[s]==="\r"&&++s,r[s]===`
`&&++s,t.buffer=r.slice(s),o}function i(r){vo(r,function(s,o){},/:/)}try{let r="";if(t.state==="INITIAL"){if(!/\r\n|\n/.test(t.buffer))return this;r=n();const o=r.match(/^(ï»¿)?WEBVTT([ \t].*)?$/);if(!(o!=null&&o[0]))throw new Error("Malformed WebVTT signature.");t.state="HEADER"}let s=!1;for(;t.buffer;){if(!/\r\n|\n/.test(t.buffer))return this;switch(s?s=!1:r=n(),t.state){case"HEADER":/:/.test(r)?i(r):r||(t.state="ID");continue;case"NOTE":r||(t.state="ID");continue;case"ID":if(/^NOTE($|[ \t])/.test(r)){t.state="NOTE";break}if(!r)continue;if(t.cue=new $r(0,0,""),t.state="CUE",r.indexOf("-->")===-1){t.cue.id=r;continue}case"CUE":if(!t.cue){t.state="BADCUE";continue}try{Vf(r,t.cue,t.regionList)}catch{t.cue=null,t.state="BADCUE";continue}t.state="CUETEXT";continue;case"CUETEXT":{const o=r.indexOf("-->")!==-1;if(!r||o&&(s=!0)){t.oncue&&t.cue&&t.oncue(t.cue),t.cue=null,t.state="ID";continue}if(t.cue===null)continue;t.cue.text&&(t.cue.text+=`
`),t.cue.text+=r}continue;case"BADCUE":r||(t.state="ID")}}}catch{t.state==="CUETEXT"&&t.cue&&t.oncue&&t.oncue(t.cue),t.cue=null,t.state=t.state==="INITIAL"?"BADWEBVTT":"BADCUE"}return this}flush(){const e=this;try{if((e.cue||e.state==="HEADER")&&(e.buffer+=`

`,e.parse()),e.state==="INITIAL"||e.state==="BADWEBVTT")throw new Error("Malformed WebVTT signature.")}catch(t){e.onparsingerror&&e.onparsingerror(t)}return e.onflush&&e.onflush(),this}}const jf=/\r\n|\n\r|\n|\r/g,dr=function(e,t,n=0){return e.slice(n,n+t.length)===t},Qf=function(e){let t=parseInt(e.slice(-3));const n=parseInt(e.slice(-6,-4)),i=parseInt(e.slice(-9,-7)),r=e.length>9?parseInt(e.substring(0,e.indexOf(":"))):0;if(!te(t)||!te(n)||!te(i)||!te(r))throw Error(`Malformed X-TIMESTAMP-MAP: Local:${e}`);return t+=1e3*n,t+=60*1e3*i,t+=60*60*1e3*r,t};function Gr(a,e,t){return Fn(a.toString())+Fn(e.toString())+Fn(t)}const Xf=function(e,t,n){let i=e[t],r=e[i.prevCC];if(!r||!r.new&&i.new){e.ccOffset=e.presentationOffset=i.start,i.new=!1;return}for(;(s=r)!=null&&s.new;){var s;e.ccOffset+=i.start-r.start,i.new=!1,i=r,r=e[i.prevCC]}e.presentationOffset=n};function Zf(a,e,t,n,i,r,s){const o=new Wf,l=qe(new Uint8Array(a)).trim().replace(jf,`
`).split(`
`),d=[],c=e?fh(e.baseTime,e.timescale):0;let u="00:00.000",h=0,y=0,A,v=!0;o.oncue=function(S){const k=t[n];let I=t.ccOffset;const R=(h-c)/9e4;if(k!=null&&k.new&&(y!==void 0?I=t.ccOffset=k.start:Xf(t,n,R)),R){if(!e){A=new Error("Missing initPTS for VTT MPEGTS");return}I=R-t.presentationOffset}const _=S.endTime-S.startTime,L=ze((S.startTime+I-y)*9e4,i*9e4)/9e4;S.startTime=Math.max(L,0),S.endTime=Math.max(L+_,0);const F=S.text.trim();S.text=decodeURIComponent(encodeURIComponent(F)),S.id||(S.id=Gr(S.startTime,S.endTime,F)),S.endTime>0&&d.push(S)},o.onparsingerror=function(S){A=S},o.onflush=function(){if(A){s(A);return}r(d)},l.forEach(S=>{if(v)if(dr(S,"X-TIMESTAMP-MAP=")){v=!1,S.slice(16).split(",").forEach(k=>{dr(k,"LOCAL:")?u=k.slice(6):dr(k,"MPEGTS:")&&(h=parseInt(k.slice(7)))});try{y=Qf(u)/1e3}catch(k){A=k}return}else S===""&&(v=!1);o.parse(S+`
`)}),o.flush()}const cr="stpp.ttml.im1t",Eo=/^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/,So=/^(\d*(?:\.\d*)?)(h|m|s|ms|f|t)$/,Jf={left:"start",center:"center",right:"end",start:"start",end:"end"};function ma(a,e,t,n){const i=oe(new Uint8Array(a),["mdat"]);if(i.length===0){n(new Error("Could not parse IMSC1 mdat"));return}const r=i.map(o=>qe(o)),s=hh(e.baseTime,1,e.timescale);try{r.forEach(o=>t(ep(o,s)))}catch(o){n(o)}}function ep(a,e){const i=new DOMParser().parseFromString(a,"text/xml").getElementsByTagName("tt")[0];if(!i)throw new Error("Invalid ttml");const r={frameRate:30,subFrameRate:1,frameRateMultiplier:0,tickRate:0},s=Object.keys(r).reduce((u,h)=>(u[h]=i.getAttribute(`ttp:${h}`)||r[h],u),{}),o=i.getAttribute("xml:space")!=="preserve",l=ga(ur(i,"styling","style")),d=ga(ur(i,"layout","region")),c=ur(i,"body","[begin]");return[].map.call(c,u=>{const h=To(u,o);if(!h||!u.hasAttribute("begin"))return null;const y=fr(u.getAttribute("begin"),s),A=fr(u.getAttribute("dur"),s);let v=fr(u.getAttribute("end"),s);if(y===null)throw ya(u);if(v===null){if(A===null)throw ya(u);v=y+A}const S=new $r(y-e,v-e,h);S.id=Gr(S.startTime,S.endTime,S.text);const k=d[u.getAttribute("region")],I=l[u.getAttribute("style")],R=tp(k,I,l),{textAlign:_}=R;if(_){const L=Jf[_];L&&(S.lineAlign=L),S.align=_}return Te(S,R),S}).filter(u=>u!==null)}function ur(a,e,t){const n=a.getElementsByTagName(e)[0];return n?[].slice.call(n.querySelectorAll(t)):[]}function ga(a){return a.reduce((e,t)=>{const n=t.getAttribute("xml:id");return n&&(e[n]=t),e},{})}function To(a,e){return[].slice.call(a.childNodes).reduce((t,n,i)=>{var r;return n.nodeName==="br"&&i?t+`
`:(r=n.childNodes)!=null&&r.length?To(n,e):e?t+n.textContent.trim().replace(/\s+/g," "):t+n.textContent},"")}function tp(a,e,t){const n="http://www.w3.org/ns/ttml#styling";let i=null;const r=["displayAlign","textAlign","color","backgroundColor","fontSize","fontFamily"],s=a!=null&&a.hasAttribute("style")?a.getAttribute("style"):null;return s&&t.hasOwnProperty(s)&&(i=t[s]),r.reduce((o,l)=>{const d=hr(e,n,l)||hr(a,n,l)||hr(i,n,l);return d&&(o[l]=d),o},{})}function hr(a,e,t){return a&&a.hasAttributeNS(e,t)?a.getAttributeNS(e,t):null}function ya(a){return new Error(`Could not parse ttml timestamp ${a}`)}function fr(a,e){if(!a)return null;let t=bo(a);return t===null&&(Eo.test(a)?t=np(a,e):So.test(a)&&(t=ip(a,e))),t}function np(a,e){const t=Eo.exec(a),n=(t[4]|0)+(t[5]|0)/e.subFrameRate;return(t[1]|0)*3600+(t[2]|0)*60+(t[3]|0)+n/e.frameRate}function ip(a,e){const t=So.exec(a),n=Number(t[1]);switch(t[2]){case"h":return n*3600;case"m":return n*60;case"ms":return n*1e3;case"f":return n/e.frameRate;case"t":return n/e.tickRate}return n}class ui{constructor(e,t){this.timelineController=void 0,this.cueRanges=[],this.trackName=void 0,this.startTime=null,this.endTime=null,this.screen=null,this.timelineController=e,this.trackName=t}dispatchCue(){this.startTime!==null&&(this.timelineController.addCues(this.trackName,this.startTime,this.endTime,this.screen,this.cueRanges),this.startTime=null)}newCue(e,t,n){(this.startTime===null||this.startTime>e)&&(this.startTime=e),this.endTime=t,this.screen=n,this.timelineController.createCaptionsTrack(this.trackName)}reset(){this.cueRanges=[],this.startTime=null}}class rp{constructor(e){this.hls=void 0,this.media=null,this.config=void 0,this.enabled=!0,this.Cues=void 0,this.textTracks=[],this.tracks=[],this.initPTS=[],this.unparsedVttFrags=[],this.captionsTracks={},this.nonNativeCaptionsTracks={},this.cea608Parser1=void 0,this.cea608Parser2=void 0,this.lastCc=-1,this.lastSn=-1,this.lastPartIndex=-1,this.prevCC=-1,this.vttCCs=ba(),this.captionsProperties=void 0,this.hls=e,this.config=e.config,this.Cues=e.config.cueHandler,this.captionsProperties={textTrack1:{label:this.config.captionsTextTrack1Label,languageCode:this.config.captionsTextTrack1LanguageCode},textTrack2:{label:this.config.captionsTextTrack2Label,languageCode:this.config.captionsTextTrack2LanguageCode},textTrack3:{label:this.config.captionsTextTrack3Label,languageCode:this.config.captionsTextTrack3LanguageCode},textTrack4:{label:this.config.captionsTextTrack4Label,languageCode:this.config.captionsTextTrack4LanguageCode}},e.on(T.MEDIA_ATTACHING,this.onMediaAttaching,this),e.on(T.MEDIA_DETACHING,this.onMediaDetaching,this),e.on(T.MANIFEST_LOADING,this.onManifestLoading,this),e.on(T.MANIFEST_LOADED,this.onManifestLoaded,this),e.on(T.SUBTITLE_TRACKS_UPDATED,this.onSubtitleTracksUpdated,this),e.on(T.FRAG_LOADING,this.onFragLoading,this),e.on(T.FRAG_LOADED,this.onFragLoaded,this),e.on(T.FRAG_PARSING_USERDATA,this.onFragParsingUserdata,this),e.on(T.FRAG_DECRYPTED,this.onFragDecrypted,this),e.on(T.INIT_PTS_FOUND,this.onInitPtsFound,this),e.on(T.SUBTITLE_TRACKS_CLEARED,this.onSubtitleTracksCleared,this),e.on(T.BUFFER_FLUSHING,this.onBufferFlushing,this)}destroy(){const{hls:e}=this;e.off(T.MEDIA_ATTACHING,this.onMediaAttaching,this),e.off(T.MEDIA_DETACHING,this.onMediaDetaching,this),e.off(T.MANIFEST_LOADING,this.onManifestLoading,this),e.off(T.MANIFEST_LOADED,this.onManifestLoaded,this),e.off(T.SUBTITLE_TRACKS_UPDATED,this.onSubtitleTracksUpdated,this),e.off(T.FRAG_LOADING,this.onFragLoading,this),e.off(T.FRAG_LOADED,this.onFragLoaded,this),e.off(T.FRAG_PARSING_USERDATA,this.onFragParsingUserdata,this),e.off(T.FRAG_DECRYPTED,this.onFragDecrypted,this),e.off(T.INIT_PTS_FOUND,this.onInitPtsFound,this),e.off(T.SUBTITLE_TRACKS_CLEARED,this.onSubtitleTracksCleared,this),e.off(T.BUFFER_FLUSHING,this.onBufferFlushing,this),this.hls=this.config=this.media=null,this.cea608Parser1=this.cea608Parser2=void 0}initCea608Parsers(){const e=new ui(this,"textTrack1"),t=new ui(this,"textTrack2"),n=new ui(this,"textTrack3"),i=new ui(this,"textTrack4");this.cea608Parser1=new pa(1,e,t),this.cea608Parser2=new pa(3,n,i)}addCues(e,t,n,i,r){let s=!1;for(let o=r.length;o--;){const l=r[o],d=sp(l[0],l[1],t,n);if(d>=0&&(l[0]=Math.min(l[0],t),l[1]=Math.max(l[1],n),s=!0,d/(n-t)>.5))return}if(s||r.push([t,n]),this.config.renderTextTracksNatively){const o=this.captionsTracks[e];this.Cues.newCue(o,t,n,i)}else{const o=this.Cues.newCue(null,t,n,i);this.hls.trigger(T.CUES_PARSED,{type:"captions",cues:o,track:e})}}onInitPtsFound(e,{frag:t,id:n,initPTS:i,timescale:r}){const{unparsedVttFrags:s}=this;n===ce.MAIN&&(this.initPTS[t.cc]={baseTime:i,timescale:r}),s.length&&(this.unparsedVttFrags=[],s.forEach(o=>{this.onFragLoaded(T.FRAG_LOADED,o)}))}getExistingTrack(e,t){const{media:n}=this;if(n)for(let i=0;i<n.textTracks.length;i++){const r=n.textTracks[i];if(Aa(r,{name:e,lang:t,characteristics:"transcribes-spoken-dialog,describes-music-and-sound"}))return r}return null}createCaptionsTrack(e){this.config.renderTextTracksNatively?this.createNativeTrack(e):this.createNonNativeTrack(e)}createNativeTrack(e){if(this.captionsTracks[e])return;const{captionsProperties:t,captionsTracks:n,media:i}=this,{label:r,languageCode:s}=t[e],o=this.getExistingTrack(r,s);if(o)n[e]=o,Dn(n[e]),xf(n[e],i);else{const l=this.createTextTrack("captions",r,s);l&&(l[e]=!0,n[e]=l)}}createNonNativeTrack(e){if(this.nonNativeCaptionsTracks[e])return;const t=this.captionsProperties[e];if(!t)return;const n=t.label,i={_id:e,label:n,kind:"captions",default:t.media?!!t.media.default:!1,closedCaptions:t.media};this.nonNativeCaptionsTracks[e]=i,this.hls.trigger(T.NON_NATIVE_TEXT_TRACKS_FOUND,{tracks:[i]})}createTextTrack(e,t,n){const i=this.media;if(i)return i.addTextTrack(e,t,n)}onMediaAttaching(e,t){this.media=t.media,t.mediaSource||this._cleanTracks()}onMediaDetaching(e,t){const n=!!t.transferMedia;if(this.media=null,n)return;const{captionsTracks:i}=this;Object.keys(i).forEach(r=>{Dn(i[r]),delete i[r]}),this.nonNativeCaptionsTracks={}}onManifestLoading(){this.lastCc=-1,this.lastSn=-1,this.lastPartIndex=-1,this.prevCC=-1,this.vttCCs=ba(),this._cleanTracks(),this.tracks=[],this.captionsTracks={},this.nonNativeCaptionsTracks={},this.textTracks=[],this.unparsedVttFrags=[],this.initPTS=[],this.cea608Parser1&&this.cea608Parser2&&(this.cea608Parser1.reset(),this.cea608Parser2.reset())}_cleanTracks(){const{media:e}=this;if(!e)return;const t=e.textTracks;if(t)for(let n=0;n<t.length;n++)Dn(t[n])}onSubtitleTracksUpdated(e,t){const n=t.subtitleTracks||[],i=n.some(r=>r.textCodec===cr);if(this.config.enableWebVTT||i&&this.config.enableIMSC1){if(oo(this.tracks,n)){this.tracks=n;return}if(this.textTracks=[],this.tracks=n,this.config.renderTextTracksNatively){const s=this.media,o=s?gi(s.textTracks):null;if(this.tracks.forEach((l,d)=>{let c;if(o){let u=null;for(let h=0;h<o.length;h++)if(o[h]&&Aa(o[h],l)){u=o[h],o[h]=null;break}u&&(c=u)}if(c)Dn(c);else{const u=Co(l);c=this.createTextTrack(u,l.name,l.lang),c&&(c.mode="disabled")}c&&this.textTracks.push(c)}),o!=null&&o.length){const l=o.filter(d=>d!==null).map(d=>d.label);l.length&&this.hls.logger.warn(`Media element contains unused subtitle tracks: ${l.join(", ")}. Replace media element for each source to clear TextTracks and captions menu.`)}}else if(this.tracks.length){const s=this.tracks.map(o=>({label:o.name,kind:o.type.toLowerCase(),default:o.default,subtitleTrack:o}));this.hls.trigger(T.NON_NATIVE_TEXT_TRACKS_FOUND,{tracks:s})}}}onManifestLoaded(e,t){this.config.enableCEA708Captions&&t.captions&&t.captions.forEach(n=>{const i=/(?:CC|SERVICE)([1-4])/.exec(n.instreamId);if(!i)return;const r=`textTrack${i[1]}`,s=this.captionsProperties[r];s&&(s.label=n.name,n.lang&&(s.languageCode=n.lang),s.media=n)})}closedCaptionsForLevel(e){const t=this.hls.levels[e.level];return t==null?void 0:t.attrs["CLOSED-CAPTIONS"]}onFragLoading(e,t){if(this.enabled&&t.frag.type===ce.MAIN){var n,i;const{cea608Parser1:r,cea608Parser2:s,lastSn:o}=this,{cc:l,sn:d}=t.frag,c=(n=(i=t.part)==null?void 0:i.index)!=null?n:-1;r&&s&&(d!==o+1||d===o&&c!==this.lastPartIndex+1||l!==this.lastCc)&&(r.reset(),s.reset()),this.lastCc=l,this.lastSn=d,this.lastPartIndex=c}}onFragLoaded(e,t){const{frag:n,payload:i}=t;if(n.type===ce.SUBTITLE)if(i.byteLength){const r=n.decryptdata,s="stats"in t;if(r==null||!r.encrypted||s){const o=this.tracks[n.level],l=this.vttCCs;l[n.cc]||(l[n.cc]={start:n.start,prevCC:this.prevCC,new:!0},this.prevCC=n.cc),o&&o.textCodec===cr?this._parseIMSC1(n,i):this._parseVTTs(t)}}else this.hls.trigger(T.SUBTITLE_FRAG_PROCESSED,{success:!1,frag:n,error:new Error("Empty subtitle payload")})}_parseIMSC1(e,t){const n=this.hls;ma(t,this.initPTS[e.cc],i=>{this._appendCues(i,e.level),n.trigger(T.SUBTITLE_FRAG_PROCESSED,{success:!0,frag:e})},i=>{n.logger.log(`Failed to parse IMSC1: ${i}`),n.trigger(T.SUBTITLE_FRAG_PROCESSED,{success:!1,frag:e,error:i})})}_parseVTTs(e){var t;const{frag:n,payload:i}=e,{initPTS:r,unparsedVttFrags:s}=this,o=r.length-1;if(!r[n.cc]&&o===-1){s.push(e);return}const l=this.hls,d=(t=n.initSegment)!=null&&t.data?Ve(n.initSegment.data,new Uint8Array(i)).buffer:i;Zf(d,this.initPTS[n.cc],this.vttCCs,n.cc,n.start,c=>{this._appendCues(c,n.level),l.trigger(T.SUBTITLE_FRAG_PROCESSED,{success:!0,frag:n})},c=>{const u=c.message==="Missing initPTS for VTT MPEGTS";u?s.push(e):this._fallbackToIMSC1(n,i),l.logger.log(`Failed to parse VTT cue: ${c}`),!(u&&o>n.cc)&&l.trigger(T.SUBTITLE_FRAG_PROCESSED,{success:!1,frag:n,error:c})})}_fallbackToIMSC1(e,t){const n=this.tracks[e.level];n.textCodec||ma(t,this.initPTS[e.cc],()=>{n.textCodec=cr,this._parseIMSC1(e,t)},()=>{n.textCodec="wvtt"})}_appendCues(e,t){const n=this.hls;if(this.config.renderTextTracksNatively){const i=this.textTracks[t];if(!i||i.mode==="disabled")return;e.forEach(r=>mo(i,r))}else{const i=this.tracks[t];if(!i)return;const r=i.default?"default":"subtitles"+t;n.trigger(T.CUES_PARSED,{type:"subtitles",cues:e,track:r})}}onFragDecrypted(e,t){const{frag:n}=t;n.type===ce.SUBTITLE&&this.onFragLoaded(T.FRAG_LOADED,t)}onSubtitleTracksCleared(){this.tracks=[],this.captionsTracks={}}onFragParsingUserdata(e,t){if(!this.enabled||!this.config.enableCEA708Captions)return;const{frag:n,samples:i}=t;if(!(n.type===ce.MAIN&&this.closedCaptionsForLevel(n)==="NONE"))for(let r=0;r<i.length;r++){const s=i[r].bytes;if(s){this.cea608Parser1||this.initCea608Parsers();const o=this.extractCea608Data(s);this.cea608Parser1.addData(i[r].pts,o[0]),this.cea608Parser2.addData(i[r].pts,o[1])}}}onBufferFlushing(e,{startOffset:t,endOffset:n,endOffsetSubtitles:i,type:r}){const{media:s}=this;if(!(!s||s.currentTime<n)){if(!r||r==="video"){const{captionsTracks:o}=this;Object.keys(o).forEach(l=>da(o[l],t,n))}if(this.config.renderTextTracksNatively&&t===0&&i!==void 0){const{textTracks:o}=this;Object.keys(o).forEach(l=>da(o[l],t,i))}}}extractCea608Data(e){const t=[[],[]],n=e[0]&31;let i=2;for(let r=0;r<n;r++){const s=e[i++],o=127&e[i++],l=127&e[i++];if(o===0&&l===0)continue;if((4&s)!==0){const c=3&s;(c===0||c===1)&&(t[c].push(o),t[c].push(l))}}return t}}function Co(a){return a.characteristics&&/transcribes-spoken-dialog/gi.test(a.characteristics)&&/describes-music-and-sound/gi.test(a.characteristics)?"captions":"subtitles"}function Aa(a,e){return!!a&&a.kind===Co(e)&&xr(e,a)}function sp(a,e,t,n){return Math.min(e,n)-Math.max(a,t)}function ba(){return{ccOffset:0,presentationOffset:0,0:{start:0,prevCC:-1,new:!0}}}const ap=/\s/,op={newCue(a,e,t,n){const i=[];let r,s,o,l,d;const c=self.VTTCue||self.TextTrackCue;for(let h=0;h<n.rows.length;h++)if(r=n.rows[h],o=!0,l=0,d="",!r.isEmpty()){var u;for(let v=0;v<r.chars.length;v++)ap.test(r.chars[v].uchar)&&o?l++:(d+=r.chars[v].uchar,o=!1);r.cueStartTime=e,e===t&&(t+=1e-4),l>=16?l--:l++;const y=xo(d.trim()),A=Gr(e,t,y);a!=null&&(u=a.cues)!=null&&u.getCueById(A)||(s=new c(e,t,y),s.id=A,s.line=h+1,s.align="left",s.position=10+Math.min(80,Math.floor(l*8/32)*10),i.push(s))}return a&&i.length&&(i.sort((h,y)=>h.line==="auto"||y.line==="auto"?0:h.line>8&&y.line>8?y.line-h.line:h.line-y.line),i.forEach(h=>mo(a,h))),i}},lp=/^age:\s*[\d.]+\s*$/im;class dp{constructor(e){this.xhrSetup=void 0,this.requestTimeout=void 0,this.retryTimeout=void 0,this.retryDelay=void 0,this.config=null,this.callbacks=null,this.context=null,this.loader=null,this.stats=void 0,this.xhrSetup=e&&e.xhrSetup||null,this.stats=new Zd,this.retryDelay=0}destroy(){this.callbacks=null,this.abortInternal(),this.loader=null,this.config=null,this.context=null,this.xhrSetup=null}abortInternal(){const e=this.loader;self.clearTimeout(this.requestTimeout),self.clearTimeout(this.retryTimeout),e&&(e.onreadystatechange=null,e.onprogress=null,e.readyState!==4&&(this.stats.aborted=!0,e.abort()))}abort(){var e;this.abortInternal(),(e=this.callbacks)!=null&&e.onAbort&&this.callbacks.onAbort(this.stats,this.context,this.loader)}load(e,t,n){if(this.stats.loading.start)throw new Error("Loader can only be used once.");this.stats.loading.start=self.performance.now(),this.context=e,this.config=t,this.callbacks=n,this.loadInternal()}loadInternal(){const{config:e,context:t}=this;if(!e||!t)return;const n=this.loader=new self.XMLHttpRequest,i=this.stats;i.loading.first=0,i.loaded=0,i.aborted=!1;const r=this.xhrSetup;r?Promise.resolve().then(()=>{if(!(this.loader!==n||this.stats.aborted))return r(n,t.url)}).catch(s=>{if(!(this.loader!==n||this.stats.aborted))return n.open("GET",t.url,!0),r(n,t.url)}).then(()=>{this.loader!==n||this.stats.aborted||this.openAndSendXhr(n,t,e)}).catch(s=>{var o;(o=this.callbacks)==null||o.onError({code:n.status,text:s.message},t,n,i)}):this.openAndSendXhr(n,t,e)}openAndSendXhr(e,t,n){e.readyState||e.open("GET",t.url,!0);const i=t.headers,{maxTimeToFirstByteMs:r,maxLoadTimeMs:s}=n.loadPolicy;if(i)for(const o in i)e.setRequestHeader(o,i[o]);t.rangeEnd&&e.setRequestHeader("Range","bytes="+t.rangeStart+"-"+(t.rangeEnd-1)),e.onreadystatechange=this.readystatechange.bind(this),e.onprogress=this.loadprogress.bind(this),e.responseType=t.responseType,self.clearTimeout(this.requestTimeout),n.timeout=r&&te(r)?r:s,this.requestTimeout=self.setTimeout(this.loadtimeout.bind(this),n.timeout),e.send()}readystatechange(){const{context:e,loader:t,stats:n}=this;if(!e||!t)return;const i=t.readyState,r=this.config;if(!n.aborted&&i>=2&&(n.loading.first===0&&(n.loading.first=Math.max(self.performance.now(),n.loading.start),r.timeout!==r.loadPolicy.maxLoadTimeMs&&(self.clearTimeout(this.requestTimeout),r.timeout=r.loadPolicy.maxLoadTimeMs,this.requestTimeout=self.setTimeout(this.loadtimeout.bind(this),r.loadPolicy.maxLoadTimeMs-(n.loading.first-n.loading.start)))),i===4)){self.clearTimeout(this.requestTimeout),t.onreadystatechange=null,t.onprogress=null;const d=t.status,c=t.responseType==="text"?t.responseText:null;if(d>=200&&d<300){const A=c??t.response;if(A!=null){var s,o;n.loading.end=Math.max(self.performance.now(),n.loading.first);const v=t.responseType==="arraybuffer"?A.byteLength:A.length;n.loaded=n.total=v,n.bwEstimate=n.total*8e3/(n.loading.end-n.loading.first);const S=(s=this.callbacks)==null?void 0:s.onProgress;S&&S(n,e,A,t);const k={url:t.responseURL,data:A,code:d};(o=this.callbacks)==null||o.onSuccess(k,n,e,t);return}}const u=r.loadPolicy.errorRetry,h=n.retry,y={url:e.url,data:void 0,code:d};if(vi(u,h,!1,y))this.retry(u);else{var l;be.error(`${d} while loading ${e.url}`),(l=this.callbacks)==null||l.onError({code:d,text:t.statusText},e,t,n)}}}loadtimeout(){if(!this.config)return;const e=this.config.loadPolicy.timeoutRetry,t=this.stats.retry;if(vi(e,t,!0))this.retry(e);else{var n;be.warn(`timeout while loading ${(n=this.context)==null?void 0:n.url}`);const i=this.callbacks;i&&(this.abortInternal(),i.onTimeout(this.stats,this.context,this.loader))}}retry(e){const{context:t,stats:n}=this;this.retryDelay=Ir(e,n.retry),n.retry++,be.warn(`${status?"HTTP Status "+status:"Timeout"} while loading ${t==null?void 0:t.url}, retrying ${n.retry}/${e.maxNumRetry} in ${this.retryDelay}ms`),this.abortInternal(),this.loader=null,self.clearTimeout(this.retryTimeout),this.retryTimeout=self.setTimeout(this.loadInternal.bind(this),this.retryDelay)}loadprogress(e){const t=this.stats;t.loaded=e.loaded,e.lengthComputable&&(t.total=e.total)}getCacheAge(){let e=null;if(this.loader&&lp.test(this.loader.getAllResponseHeaders())){const t=this.loader.getResponseHeader("age");e=t?parseFloat(t):null}return e}getResponseHeader(e){return this.loader&&new RegExp(`^${e}:\\s*[\\d.]+\\s*$`,"im").test(this.loader.getAllResponseHeaders())?this.loader.getResponseHeader(e):null}}const cp={maxTimeToFirstByteMs:8e3,maxLoadTimeMs:2e4,timeoutRetry:null,errorRetry:null};Se(Se({autoStartLoad:!0,startPosition:-1,defaultAudioCodec:void 0,debug:!1,capLevelOnFPSDrop:!1,capLevelToPlayerSize:!1,ignoreDevicePixelRatio:!1,maxDevicePixelRatio:Number.POSITIVE_INFINITY,preferManagedMediaSource:!0,initialLiveManifestSize:1,maxBufferLength:30,backBufferLength:1/0,frontBufferFlushThreshold:1/0,maxBufferSize:60*1e3*1e3,maxFragLookUpTolerance:.25,maxBufferHole:.1,detectStallWithCurrentTimeMs:1250,highBufferWatchdogPeriod:2,nudgeOffset:.1,nudgeMaxRetry:3,nudgeOnVideoHole:!0,liveSyncDurationCount:3,liveSyncOnStallIncrease:1,liveMaxLatencyDurationCount:1/0,liveSyncDuration:void 0,liveMaxLatencyDuration:void 0,maxLiveSyncPlaybackRate:1,liveDurationInfinity:!1,liveBackBufferLength:null,maxMaxBufferLength:600,enableWorker:!0,workerPath:null,enableSoftwareAES:!0,startLevel:void 0,startFragPrefetch:!1,fpsDroppedMonitoringPeriod:5e3,fpsDroppedMonitoringThreshold:.2,appendErrorMaxRetry:3,ignorePlaylistParsingErrors:!1,loader:dp,fLoader:void 0,pLoader:void 0,xhrSetup:void 0,licenseXhrSetup:void 0,licenseResponseCallback:void 0,abrController:Oc,bufferController:Lh,capLevelController:Nr,errorController:Gc,fpsController:vf,stretchShortVideoTrack:!1,maxAudioFramesDrift:1,forceKeyFrameOnDiscontinuity:!0,abrEwmaFastLive:3,abrEwmaSlowLive:9,abrEwmaFastVoD:3,abrEwmaSlowVoD:9,abrEwmaDefaultEstimate:5e5,abrEwmaDefaultEstimateMax:5e6,abrBandWidthFactor:.95,abrBandWidthUpFactor:.7,abrMaxWithRealBitrate:!1,maxStarvationDelay:4,maxLoadingDelay:4,minAutoBitrate:0,emeEnabled:!1,widevineLicenseUrl:void 0,drmSystems:{},drmSystemOptions:{},requestMediaKeySystemAccessFunc:Pa,testBandwidth:!0,progressive:!1,lowLatencyMode:!0,cmcd:void 0,enableDateRangeMetadataCues:!0,enableEmsgMetadataCues:!0,enableEmsgKLVMetadata:!1,enableID3MetadataCues:!0,enableInterstitialPlayback:!0,interstitialAppendInPlace:!0,interstitialLiveLookAhead:10,useMediaCapabilities:!0,certLoadPolicy:{default:cp},keyLoadPolicy:{default:{maxTimeToFirstByteMs:8e3,maxLoadTimeMs:2e4,timeoutRetry:{maxNumRetry:1,retryDelayMs:1e3,maxRetryDelayMs:2e4,backoff:"linear"},errorRetry:{maxNumRetry:8,retryDelayMs:1e3,maxRetryDelayMs:2e4,backoff:"linear"}}},manifestLoadPolicy:{default:{maxTimeToFirstByteMs:1/0,maxLoadTimeMs:2e4,timeoutRetry:{maxNumRetry:2,retryDelayMs:0,maxRetryDelayMs:0},errorRetry:{maxNumRetry:1,retryDelayMs:1e3,maxRetryDelayMs:8e3}}},playlistLoadPolicy:{default:{maxTimeToFirstByteMs:1e4,maxLoadTimeMs:2e4,timeoutRetry:{maxNumRetry:2,retryDelayMs:0,maxRetryDelayMs:0},errorRetry:{maxNumRetry:2,retryDelayMs:1e3,maxRetryDelayMs:8e3}}},fragLoadPolicy:{default:{maxTimeToFirstByteMs:1e4,maxLoadTimeMs:12e4,timeoutRetry:{maxNumRetry:4,retryDelayMs:0,maxRetryDelayMs:0},errorRetry:{maxNumRetry:6,retryDelayMs:1e3,maxRetryDelayMs:8e3}}},steeringManifestLoadPolicy:{default:{maxTimeToFirstByteMs:1e4,maxLoadTimeMs:2e4,timeoutRetry:{maxNumRetry:2,retryDelayMs:0,maxRetryDelayMs:0},errorRetry:{maxNumRetry:1,retryDelayMs:1e3,maxRetryDelayMs:8e3}}},interstitialAssetListLoadPolicy:{default:{maxTimeToFirstByteMs:1e4,maxLoadTimeMs:3e4,timeoutRetry:{maxNumRetry:0,retryDelayMs:0,maxRetryDelayMs:0},errorRetry:{maxNumRetry:0,retryDelayMs:1e3,maxRetryDelayMs:8e3}}},manifestLoadingTimeOut:1e4,manifestLoadingMaxRetry:1,manifestLoadingRetryDelay:1e3,manifestLoadingMaxRetryTimeout:64e3,levelLoadingTimeOut:1e4,levelLoadingMaxRetry:4,levelLoadingRetryDelay:1e3,levelLoadingMaxRetryTimeout:64e3,fragLoadingTimeOut:2e4,fragLoadingMaxRetry:6,fragLoadingRetryDelay:1e3,fragLoadingMaxRetryTimeout:64e3},up()),{},{subtitleStreamController:Df,subtitleTrackController:Tf,timelineController:rp,audioStreamController:Ch,audioTrackController:wh,emeController:Vt,cmcdController:yf,contentSteeringController:bf,interstitialsController:_f});function up(){return{cueHandler:op,enableWebVTT:!0,enableIMSC1:!0,enableCEA708Captions:!0,captionsTextTrack1Label:"English",captionsTextTrack1LanguageCode:"en",captionsTextTrack2Label:"Spanish",captionsTextTrack2LanguageCode:"es",captionsTextTrack3Label:"Unknown CC",captionsTextTrack3LanguageCode:"",captionsTextTrack4Label:"Unknown CC",captionsTextTrack4LanguageCode:"",renderTextTracksNatively:!0}}function hp(){if(!(typeof self>"u"))return self.VTTCue||self.TextTrackCue}(()=>{const a=hp();try{a&&new a(0,Number.POSITIVE_INFINITY,"")}catch{return Number.MAX_VALUE}return Number.POSITIVE_INFINITY})();const fp={class:"player-container"},pp={class:"player-wrapper"},mp={key:0,class:"loading-container"},gp={key:1,class:"error-container"},yp={class:"player-header"},Ap={class:"player-title"},bp={key:0,class:"player-episode"},vp={class:"player-box"},xp=["src"],Ep={class:"player-info"},Sp={class:"player-info-header"},Tp={class:"player-controls"},Cp={key:0,class:"episode-list"},wp={class:"episodes-grid"},kp={__name:"PlayerView",setup(a){const e=Ld(),t=Rd(),n=kn(()=>e.params.id),i=kn(()=>e.params.episode||""),r=kn(()=>e.query.source||""),s=Gt(null),o=Gt(!1),l=Gt(""),d=Gt(null),c=Gt(null),u=Gt(""),h=L=>(console.log("使用hoplayer解析接口播放:",L),`https://hoplayer.com/index.html?url=${L}`),y=L=>{if(!L||typeof L!="string"){console.error("无效的视频URL:",L),l.value="无效的视频地址";return}console.log("准备播放视频URL:",L),L.startsWith("http")||(console.warn("URL格式可能不正确，尝试添加协议:",L),L="https:"+L);const F=h(L);console.log("设置iframe解析URL:",F),u.value=F,d.value&&(d.value.destroy(),d.value=null)},A=()=>{if(!s.value||!s.value.episodes||!s.value.episodes.length)return console.error("没有可用的剧集信息"),"";console.log("所有剧集:",s.value.episodes),console.log("当前剧集值:",i.value);let L=s.value.episodes.find(B=>B.episode===i.value);if(!L&&s.value.episodes.length>0){const B=parseInt(i.value);isNaN(B)||(L=s.value.episodes.find(M=>{const q=parseInt(M.episode);return!isNaN(q)&&q===B})),L||(L=s.value.episodes[0],console.log("未找到匹配剧集，使用第一集:",L))}if(!L)return console.error("无法找到有效的剧集"),"";if(console.log("找到的剧集:",L),!L.url||typeof L.url!="string")return console.error("剧集URL无效:",L),"";const F=L.url.trim();return F.startsWith("//")?`https:${F}`:F.startsWith("http")?F:`https://${F}`},v=async()=>{if(n.value){o.value=!0,l.value="";try{const L=await Md.getDetail(n.value,r.value);if(s.value=L,!L){l.value="未找到该影片";return}const F=A();F?y(F):l.value="未找到播放地址"}catch(L){console.error("获取详情失败:",L),l.value="获取影片详情失败，请稍后重试",Pd.error("获取影片详情失败")}finally{o.value=!1}}},S=L=>{t.push({name:"play",params:{id:n.value,episode:L},query:{source:r.value}})},k=kn(()=>!s.value||!s.value.episodes||!i.value?!1:s.value.episodes.findIndex(F=>F.episode===i.value)>0),I=kn(()=>{if(!s.value||!s.value.episodes||!i.value)return!1;const L=s.value.episodes.findIndex(F=>F.episode===i.value);return L<s.value.episodes.length-1&&L!==-1}),R=()=>{if(!k.value)return;const L=s.value.episodes.findIndex(B=>B.episode===i.value),F=s.value.episodes[L-1].episode;S(F)},_=()=>{if(!I.value)return;const L=s.value.episodes.findIndex(B=>B.episode===i.value),F=s.value.episodes[L+1].episode;S(F)};return _d(()=>i.value,()=>{if(s.value){const L=A();L&&y(L)}}),Dd(()=>{d.value&&d.value.destroy()}),Bd(()=>{v()}),(L,F)=>{const B=Zn("el-skeleton"),M=Zn("el-button"),q=Zn("el-empty"),P=Zn("el-card");return Je(),ct("div",fp,[et("div",pp,[o.value?(Je(),ct("div",mp,[qt(B,{animated:""})])):l.value?(Je(),ct("div",gp,[qt(q,{description:l.value},{default:It(()=>[qt(M,{onClick:F[0]||(F[0]=K=>L.$router.back()),type:"primary"},{default:It(()=>F[1]||(F[1]=[In("返回")])),_:1})]),_:1},8,["description"])])):s.value?(Je(),ct(Es,{key:2},[et("div",yp,[et("h1",Ap,[In(Ln(s.value.name)+" ",1),i.value?(Je(),ct("span",bp,"第"+Ln(i.value)+"集",1)):zi("",!0)])]),et("div",vp,[u.value?(Je(),ct("iframe",{key:0,src:u.value,frameborder:"0",scrolling:"no",allowfullscreen:"true",class:"player-iframe"},null,8,xp)):(Je(),ct("div",{key:1,ref_key:"playerRef",ref:c,class:"dplayer"},null,512))]),et("div",Ep,[qt(P,null,{header:It(()=>[et("div",Sp,[et("div",null,"当前播放: "+Ln(s.value.name)+" "+Ln(i.value?`第${i.value}集`:""),1),et("div",Tp,[qt(M,{size:"small",onClick:R,disabled:!k.value},{default:It(()=>F[2]||(F[2]=[In(" 上一集 ")])),_:1},8,["disabled"]),qt(M,{size:"small",onClick:_,disabled:!I.value,type:"primary"},{default:It(()=>F[3]||(F[3]=[In(" 下一集 ")])),_:1},8,["disabled"])])])]),default:It(()=>[s.value.episodes&&s.value.episodes.length?(Je(),ct("div",Cp,[F[4]||(F[4]=et("div",{class:"episodes-title"},"选集",-1)),et("div",wp,[(Je(!0),ct(Es,null,Od(s.value.episodes,K=>(Je(),Fd(M,{key:K.episode,onClick:Q=>S(K.episode),type:K.episode===i.value?"primary":"",class:"episode-btn"},{default:It(()=>[In(Ln(K.episode),1)]),_:2},1032,["onClick","type"]))),128))])])):zi("",!0)]),_:1})])],64)):zi("",!0)])])}}},Pp=Nd(kp,[["__scopeId","data-v-983d0b4a"]]);export{Pp as default};
