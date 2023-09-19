//=============================================================================
/*:
 * @target MZ
 * @plugindesc [v1.0] OnScreen Controls for RMMZ
 * @author Cyelis1224
 *
 * @help
 * ----------------------------------------------------------------------------
 * Terms of Use
 * ----------------------------------------------------------------------------
 *
 * Free for use in commercial and non-commercial games, with credit
 * Original concept by Ihatecsv at touchstadia.ca
 * Do NOT remove the author of this plugin
 * Do NOT post anywhere (modified or otherwise) except the RPG Maker Web site.
 *
 * ----------------------------------------------------------------------------
 * Changelog
 * ----------------------------------------------------------------------------
 *
 * v1.0 - Plugin released!
 *
 * ----------------------------------------------------------------------------
 *
 *
 * @param dpad
 * @text Dpad Size
 * @type number
 * @min 0
 * @desc Decide the size of your Dpad 
 * @default 1
 *
 * 
 * @param stick
 * @text Joystick Size
 * @type number
 * @min 0
 * @desc Decide the size of your Joystick 
 * @default 60
 *
 *
 * @param exten
 * @text Image File Extension
 * @type string
 * @desc Choose button image file extension 
 * @default .svg
 *
 *
 * @param bcAd
 * @text A button color
 * @type string
 * @desc Choose button color
 * @default #7dc242
 *
 *
 * @param bcBd
 * @text B button color
 * @type string
 * @desc Choose button color
 * @default #ed1c24
 *
 *
 * @param bcXd
 * @text X button color
 * @type string
 * @desc Choose button color
 * @default #24bcee
 *
 *
 * @param bcYd
 * @text Y button color
 * @type string
 * @desc Choose button color
 * @default #f0ea1b
 *
 *
 */
//=============================================================================
const pluginNametsg = 'tsGamepad';
const tsgParams = PluginManager.parameters(pluginNametsg);
var dpadSize = Number(tsgParams['dpad']);
var joySize = Number(tsgParams['stick']);
var exten = String(tsgParams['exten']);
var bcA = String(tsgParams['bcAd']);
var bcB = String(tsgParams['bcBd']);
var bcX = String(tsgParams['bcXd']);
var bcY = String(tsgParams['bcYd']);
var gPad = 0;


const setupTS = function() {
	console.log(bcA)
    gPad = 1;
    const t = {
        "stickRadius": joySize,
        "buttonDiameter": 50,
        "buttonBorderLeftOffset": 30,
        "buttonBorderRightOffset": 30,
        "buttonBorderTopOffset": 80,
        "buttonBorderBottomOffset": 30,
        "opacity": 155,
        "enableColors": true,
        "enableDrawSticks": true,
        "buttonConfig": null,
    };

    let o = [];
    const e = document.createElement("span"),
        n = document.createElement("canvas"),
        i = n.getContext("2d"),
        l = Date.now();
    let s = !1,
        c = !1,
        a = -1;
    let r = !1,
        u = 0,
        d = 0,
        f = 0,
        b = 0,
        m = 0,
        h = 0;
    let g = !1,
        p = 0,
        B = 0,
        w = 0,
        v = 0,
        y = 0,
        R = 0;
    const D = {
        id: "Emulated gamepad",
        index: 0,
        connected: !0,
        timestamp: 0,
        mapping: "standard",
        axes: [0, 0, 0, 0],
        buttons: [{
                label: "A",
                color: bcA,
                locRight: 0.5 + t.buttonDiameter + t.buttonBorderRightOffset,
                locBottom: 0 + t.buttonBorderBottomOffset,
                scale: 1,
                img: "img/controls/A"
            },
            {
                label: "B",
                color: bcB,
                locRight: -0.5 + t.buttonBorderRightOffset,
                locBottom: t.buttonDiameter + t.buttonBorderBottomOffset,
                scale: 1,
                img: "/img/controls/B"
            },
            {
                label: "X",
                color: bcX,
                locRight: 2 * t.buttonDiameter + t.buttonBorderRightOffset,
                locBottom: t.buttonDiameter + t.buttonBorderBottomOffset,
                scale: 1,
                img: "/img/controls/X"
            },
            {
                label: "Y",
                color: bcY,
                locRight: 0.5 + t.buttonDiameter + t.buttonBorderRightOffset,
                locBottom: 2 * t.buttonDiameter + t.buttonBorderBottomOffset,
                scale: 1,
                img: "img/controls/Y"
            },
            {
                label: "L1",
                color: "#636466",
                locLeft: 0 + t.buttonBorderLeftOffset,
                locTop: 1 * t.buttonDiameter + t.buttonBorderTopOffset,
                scale: 2,
                img: "img/controls/L1"
            },
            {
                label: "R1",
                color: "#636466",
                locRight: 0 + t.buttonBorderRightOffset,
                locTop: 1 * t.buttonDiameter + t.buttonBorderTopOffset,
                scale: 2,
                img: "img/controls/R1"
            },
            {
                label: "L2",
                color: "#636466",
                locLeft: 0 + t.buttonBorderLeftOffset,
                locTop: 0 + t.buttonBorderTopOffset,
                scale: 0,
                img: "img/controls/L2"
            },
            {
                label: "R2",
                color: "#636466",
                locRight: 0 + t.buttonBorderRightOffset,
                locTop: 0 + t.buttonBorderTopOffset,
                scale: 0,
                img: "img/controls/R2"
            },
            {
                label: "Se",
                color: "#636466",
                locLeft: 5 * t.buttonDiameter + t.buttonBorderLeftOffset,
                locTop: 1.1 * t.buttonDiameter + t.buttonBorderTopOffset,
                scale: 0,
                img: "img/controls/select"
            },
            {
                label: "St",
                color: "#636466",
                locRight: 5 * t.buttonDiameter + t.buttonBorderRightOffset,
                locTop: 1.1 * t.buttonDiameter + +t.buttonBorderTopOffset,
                scale: 0,
                img: "img/controls/start"
            },
            {
                label: "L3",
                color: "#7a24ee",
                locLeft: 5 * t.buttonDiameter + t.buttonBorderLeftOffset,
                locBottom: 0 + t.buttonBorderBottomOffset,
                scale: 0,
                img: "img/controls/L3"
            },
            {
                label: "R3",
                color: "#7a24ee",
                locRight: 5 * t.buttonDiameter + t.buttonBorderRightOffset,
                locBottom: 0 + t.buttonBorderBottomOffset,
                scale: 0,
                img: "img/controls/R3"
            },
            {
                label: "⇧",
                color: "#636466",
                locLeft: t.buttonDiameter + t.buttonBorderLeftOffset,
                locBottom: 2 * t.buttonDiameter + t.buttonBorderBottomOffset,
                scale: dpadSize,
                img: "img/controls/up"
            },
            {
                label: "⇩",
                color: "#636466",
                locLeft: t.buttonDiameter + t.buttonBorderLeftOffset,
                locBottom: 0 + t.buttonBorderBottomOffset,
                scale: dpadSize,
                img: "img/controls/down"
            },
            {
                label: "⇦",
                color: "#636466",
                locLeft: 0 + t.buttonBorderLeftOffset,
                locBottom: t.buttonDiameter + t.buttonBorderBottomOffset,
                scale: dpadSize,
                img: "img/controls/left"
            },
            {
                label: "⇨",
                color: "#636466",
                locLeft: 2 * t.buttonDiameter + t.buttonBorderLeftOffset,
                locBottom: t.buttonDiameter + t.buttonBorderBottomOffset,
                scale: dpadSize,
                img: "img/controls/right"
            },
            {
                label: "H",
                color: "#636466",
                locLeft: window.innerWidth / 2 - t.buttonDiameter / 2,
                locBottom: 0 + t.buttonBorderBottomOffset,
                scale: 0,
                img: "img/controls/home",
                dynamicUpdate: !0
            }
        ]
    };

    e.id = "tsGamepad";
    n.id = "tsCanvas";

    void 0 !== t.buttonConfig && null !== t.buttonConfig && (D.buttons = t.buttonConfig.slice());

    for (let o = 0; o < D.buttons.length; o++) {
        const e = document.createElement("img");
        e.src = D.buttons[o].img + exten, e.style.cssText = "position:fixed;z-index:6001;", e.style.cssText += "width:" + t.buttonDiameter * D.buttons[o].scale + "px;", e.style.cssText += "opacity:" + t.opacity / 155 * 100 + "%;", t.enableColors && (e.style.cssText += "filter:drop-shadow(0 0 0 " + D.buttons[o].color + ");"), void 0 !== D.buttons[o].locLeft && (e.style.left = D.buttons[o].locLeft + "px"), void 0 !== D.buttons[o].locRight && (e.style.right = D.buttons[o].locRight + "px"), void 0 !== D.buttons[o].locTop && (e.style.top = D.buttons[o].locTop + "px"), void 0 !== D.buttons[o].locBottom && (e.style.bottom = D.buttons[o].locBottom + "px"), D.buttons[o].pressed = !1, D.buttons[o].touched = !1, D.buttons[o].value = 0, D.buttons[o].buttonElem = e
    }
    n.style.cssText = "width:100%;height:100%;top:0;left:0;position:fixed;z-index:6000;overflow:hidden;touch-action:none;", n.width = window.innerWidth, n.height = window.innerHeight, e.style.display = "none";
    const L = function(o, e) {
            const i = 2 === e ? o.changedTouches : o.touches;
            for (let o = 0; o < i.length; o++) {
                if (i[o].target !== n) continue;
                const l = i[o].clientX,
                    s = i[o].clientY;
                if (l > window.innerWidth / 2 ? 1 : 0) {
                    switch (e) {
                        case 0:
                            if (g) break;
                            g = !0, p = w = l, B = v = s;
                            break;
                        case 1:
                            w = l, v = s;
                            break;
                        case 2:
                            g = !1, p = w = 0, B = v = 0
                    }
                    const o = Math.atan2(B - v, p - w) + Math.PI;
                    let n = Math.sqrt((p - w) * (p - w) + (B - v) * (B - v));

                    n > t.stickRadius && (n = t.stickRadius), y = n * Math.cos(o), R = n * Math.sin(o), k(2, y / t.stickRadius), k(3, R / t.stickRadius)
                } else {
                    switch (e) {
                        case 0:
                            if (r) break;
                            r = !0, u = f = l, d = b = s;
                            break;
                        case 1:
                            f = l, b = s;
                            break;
                        case 2:
                            r = !1, u = f = 0, d = b = 0
                    }
                    const o = Math.atan2(d - b, u - f) + Math.PI;
                    let n = Math.sqrt((u - f) * (u - f) + (d - b) * (d - b));
                    n > t.stickRadius && (n = t.stickRadius), m = n * Math.cos(o), h = n * Math.sin(o), k(0, m / t.stickRadius), k(1, h / t.stickRadius)
                }
            }
        },

        O = function() {
            i.clearRect(0, 0, window.innerWidth, window.innerHeight), r && (i.fillStyle = "#cccccc" + t.opacity.toString(16), i.beginPath(), i.arc(u, d, t.stickRadius, 0, 2 * Math.PI), i.fill(), i.fillStyle = "#82b4ff" + t.opacity.toString(16), i.beginPath(), i.arc(u + m, d + h, t.stickRadius / 2, 0, 2 * Math.PI), i.fill())
        },
        E = function(o, e) {
            D.buttons[o].pressed = e, D.buttons[o].touched = e, D.buttons[o].value = e ? 1 : 0, t.enableColors ? D.buttons[o].buttonElem.style.filter = e ? "brightness(0)" : "drop-shadow(0 0 0 " + D.buttons[o].color + ")" : D.buttons[o].buttonElem.style.filter = e ? "brightness(0)" : "", D.timestamp = Date.now() - l
        },
        k = function(t, o) {
            D.axes[t] = o, D.timestamp = Date.now() - l
        },
        T = function() {
            "localhost" != window.location.host || window.location.pathname.includes("/player/") || c ? e.style.display = "initial" : e.style.display = "none"
        },
        x = function(t, o, e) {
            let n = 0,
                i = 0;
            if (void 0 !== t.touches || void 0 !== t.changedTouches) {
                const e = 2 === o ? t.changedTouches : t.touches;
                n = e[0].clientX, i = e[0].clientY
            } else n = t.clientX, i = t.clientY;
            0 === o ? a = e : e = a;
            const l = D.buttons[e],
                s = l.buttonElem,
                c = n - s.offsetWidth / 2,
                r = i - s.offsetHeight / 2;
            if (s.style.left = c + "px", s.style.top = r + "px", 2 === o) {
                a = -1, void 0 !== l.locRight && delete l.locRight, void 0 !== l.locBottom && delete l.locBottom, void 0 !== l.dynamicUpdate && delete l.dynamicUpdate, l.locLeft = c, l.locTop = r;
                const t = JSON.parse(JSON.stringify(D.buttons));

                for (let o = 0; o < t.length; o++) void 0 !== t[o].buttonElem && delete t[o].buttonElem, void 0 !== t[o].pressed && delete t[o].pressed, void 0 !== t[o].touched && delete t[o].touched, void 0 !== t[o].value && delete t[o].value;
                window.dispatchEvent(new CustomEvent("newButtonConfig", {
                    detail: t
                }))
            }
        };
    n.addEventListener("touchstart", function(o) {
        o.preventDefault(), L(o, 0), t.enableDrawSticks && O()
    }, !1), n.addEventListener("touchmove", function(o) {
        o.preventDefault(), L(o, 1), t.enableDrawSticks && O()
    }, !1), n.addEventListener("touchend", function(o) {
        o.preventDefault(), L(o, 2), t.enableDrawSticks && O()
    }, !1), document.addEventListener("mousemove", function(t) {
        1 === t.which && s && x(t, 1, void 0)
    }, !1), window.onload = async function() {
        document.pointerLockElement = document.fullscreenElement, document.body.appendChild(e), e.appendChild(n);
        for (let t = 0; t < D.buttons.length; t++) e.appendChild(D.buttons[t].buttonElem), D.buttons[t].buttonElem.addEventListener("touchstart", function(o) {
            o.preventDefault(), s ? x(o, 0, t) : E(t, !0)
        }, !1), D.buttons[t].buttonElem.addEventListener("touchmove", function(o) {
            o.preventDefault(), s && x(o, 1, t)
        }, !1), D.buttons[t].buttonElem.addEventListener("touchend", function(o) {
            o.preventDefault(), s ? x(o, 2, t) : E(t, !1)
        }, !1), D.buttons[t].buttonElem.addEventListener("mousedown", function(o) {
            1 === o.which && (o.preventDefault(), s && x(o, 0, t))
        }, !1), D.buttons[t].buttonElem.addEventListener("mouseup", function(o) {
            1 === o.which && (o.preventDefault(), s && x(o, 2, t))
        }, !1);
        console.log("TSGamepad: Canvas and buttons created!")
    }, window.onload(), window.onresize = function() {
        n.width = window.innerWidth, n.height = window.innerHeight;
        for (let o = 0; o < D.buttons.length; o++)
            if (D.buttons[o].dynamicUpdate) {
                const e = window.innerWidth / 2 - t.buttonDiameter / 2 + "px";
                D.buttons[o].buttonElem.style.left = e
            }
    }, setInterval(T, 3e3), window.addEventListener("popstate", T), T();
    const S = navigator.getGamepads;
    navigator.getGamepads = function() {
        const t = S.apply(navigator),
            e = [D, null, null, null];
        let n = 1;
        t: for (let i = 0; i < 4 && !(n >= 4); i++)
            if (null !== t[i]) {
                for (let e = 0; e < o.length; e++)
                    if (t[i].id.includes(o[e])) continue t;
                e[n] = {};
                for (let o in t[i]) e[n][o] = t[i][o];
                e[n].index = n, n++
            }
        return e
    }
};

const removeTS = function() {
        gPad = 0;
        tsGamepad.remove();
    };
	
	setupTS();

	