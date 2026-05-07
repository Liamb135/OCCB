// ==UserScript==
// @name            One Click Cake Button
// @namespace       https://www.deviantart.com/liamb135
// @description     Adds a give Cake button after the names of every Deviant and Group.
// @author          Liamb135 | https://www.deviantart.com/liamb135
// @version         2.0.2
// @icon            data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAACXBIWXMAAAsTAAALEwEAmpwYAAACB0lEQVQ4jZ2SvU9TYRSHn/e2t/QDSqoGlosuJXa6TBJ2/wMTIgziZkJMUBdjU0ycNHYyJH6wslgYmujg5ubg4kAHJYEm8jGgCdpAb7W2vcfh9r60QG+Nv+QmJ+fjec895yAiiAh22hJAAPF9//MdGyC17QWx01ZP4OGrK30fMybGx2RifEzstAVAaWsP30eHjpYnJWpf4Gh5sst/UuHS1h617QXt8O34paVTySoTh1IQDsJ+sZ22+Pj+GlNXi6eSZm6MyNS5BBuf7pD5vMjdIKCIKIDOX1zf3FWdsHz+Ma4Lt4rveHA/x+zcqM59vfJNdQJVeyEopQTATlsa6MPKuwUMJdx8dpm13A6ppKUBD7NFlFIaroEnNTs3KvmnS3z5+gIAM2RiKCGWiDEQNaFdNxi9qGsWs6v0BN6esWX63hB/3DDlzSoAw0MJwmYoYILtpfSSYSj2dw6Zv/4EgJ+VGqmk6QVDCQDcxg8Aqo5DYe1NMLBLzTKpQcCF/e9VRs4bGKE4tGoA1J2K10QQIzJwdlgpPNgZ6tmhoRSq5dkvV3P9+qde/UWcTG+gK0Ik5i1gfvoRrlvviovbRBnH5f80w0bTbbdrQmND+5uN39qORLxH644D9NlyzWlq++CgwnAy6hWZUT1Dt70UX33PBmDlbTYoTWv9Q6v3YYN33OAtyA3I8/W8UFJ/ASNLIgCpZsHzAAAAAElFTkSuQmCC
// @match           *://*.deviantart.com/*
// @match           *://*.sta.sh/*
// @grant           GM_getValue
// @grant           GM_setValue
// @run-at          document-end
// @updateURL       https://raw.githubusercontent.com/Liamb135/OCCB/master/OCCB.user.js
// @downloadURL     https://raw.githubusercontent.com/Liamb135/OCCB/master/OCCB.user.js
// ==/UserScript==

//                  Inspired by Kishan Bagaria's One Click Llama Button 💚

(function() {
    'use strict';

    const IMG = {
        ALREADY: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAsTAAALEwEAmpwYAAAArklEQVQYlX2KsQ6CMAAFX4EKQaIQF50hcXFyILhL4m/pb3VwJTg5GSY+QbElJZUWF3HklhvuCLtegobXjLdVqrWG7yZlFMb56XgWAOA0vGatvGeuS6GUwvN9y/r+wwAcAMDibZVSSuF5HmzbBiEEL/5I8cPRWkMphdHGGBhjxg7Ld5NSCAEhBKSU6LoOi/m2/A9RGOfLYF8o5Zi+n5lVmBab9S4fBzIMA6awJiuAL+XrUQXvWcEAAAAAAElFTkSuQmCC',
        SPAM: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAVCAMAAACE9bUqAAAAe1BMVEUAMmb0zTM4DRCcX0HOt4ifSyxmAADMmWZlOCSojjDMiGGPPSFlAADVs5vElXfUp6oAAC5KR0NPNTyeSi6fgHYgH0+dX0Cbg4AAMWaZZmara2a4dG4/QFLHik9jCQ13Tkw6KUUAADMILVRLEhbMj22KSSgsDg0tR2YAKmIz6elIAAAAj0lEQVR4AX3LBRrDMAxDYSdlGDMz3P+Es6tF4/1lva+S/SL/OeeaS+y014JFOKJIgE9cOAhfXB3GafPLR4HuKI7jdqkStdnuBPa9WB0RBonpo1xihZ1QXgMMURAiM45gci8rfAaz+WIppqZ1bdJUbwz4JpQWUAWh5MHB+xMLdk9nb7TkgBU6SsuVO2eU7JcbjM8Lv+nDU0gAAAAASUVORK5CYII=',
        ENOUGH: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAsTAAALEwEAmpwYAAAArklEQVQYlX2KsQ6CMAAFX4EKQaIQF50hcXFyILhL4m/pb3VwJTg5GSY+QbElJZUWF3HklhvuCLtegobXjLdVqrWG7yZlFMb56XgWAOA0vGatvGeuS6GUwvN9y/r+wwAcAMDibZVSSuF5HmzbBiEEL/5I8cPRWkMphdHGGBhjxg7Ld5NSCAEhBKSU6LoOi/m2/A9RGOfLYF8o5Zi+n5lVmBab9S4fBzIMA6awJiuAL+XrUQXvWcEAAAAAAElFTkSuQmCC',
        ERROR: 'data:image/gif;base64,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',
        GIVE: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAACXBIWXMAAAsTAAALEwEAmpwYAAACB0lEQVQ4jZ2SvU9TYRSHn/e2t/QDSqoGlosuJXa6TBJ2/wMTIgziZkJMUBdjU0ycNHYyJH6wslgYmujg5ubg4kAHJYEm8jGgCdpAb7W2vcfh9r60QG+Nv+QmJ+fjec895yAiiAh22hJAAPF9//MdGyC17QWx01ZP4OGrK30fMybGx2RifEzstAVAaWsP30eHjpYnJWpf4Gh5sst/UuHS1h617QXt8O34paVTySoTh1IQDsJ+sZ22+Pj+GlNXi6eSZm6MyNS5BBuf7pD5vMjdIKCIKIDOX1zf3FWdsHz+Ma4Lt4rveHA/x+zcqM59vfJNdQJVeyEopQTATlsa6MPKuwUMJdx8dpm13A6ppKUBD7NFlFIaroEnNTs3KvmnS3z5+gIAM2RiKCGWiDEQNaFdNxi9qGsWs6v0BN6esWX63hB/3DDlzSoAw0MJwmYoYILtpfSSYSj2dw6Zv/4EgJ+VGqmk6QVDCQDcxg8Aqo5DYe1NMLBLzTKpQcCF/e9VRs4bGKE4tGoA1J2K10QQIzJwdlgpPNgZ6tmhoRSq5dkvV3P9+qde/UWcTG+gK0Ik5i1gfvoRrlvviovbRBnH5f80w0bTbbdrQmND+5uN39qORLxH644D9NlyzWlq++CgwnAy6hWZUT1Dt70UX33PBmDlbTYoTWv9Q6v3YYN33OAtyA3I8/W8UFJ/ASNLIgCpZsHzAAAAAElFTkSuQmCC',
        GIVING: 'data:image/gif;base64,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',
        BATCH_GIVING: 'data:image/gif;base64,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',
        SUCCESS: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAASCAYAAABIB77kAAAACXBIWXMAAAsTAAALEwEAmpwYAAADPUlEQVQ4jb2VX2hTVxzHP+f23pi0iaJmUWhnSil3oWEOnEif6qoyxrQFJ9OMzT3sYVuZoPvHyBQ3NnFTtr2NofNh+FLdwzbH/j20KKHqkDmYoyVcY2i11ZhiF5akWpPe48NtTpPeDPog+8GFc373/H6f3/d3zrlXSCn5P02r58wf2/BQq2g1orLViEoAvR7MuzZI/tgGGXjtkngYsN9+OsNIwqLViEoXEEBEGuHK4hJuCvaqbuTu5QD4s5CoKXQkYTH4SwKYU1iR2xmbpHNFE8nLe4mMHGDfIkA93dtc79b5u2QFPFoaFpX8o6VhIcJ6h5L81tF3OTf6Jq9+d5bjz3UTj+9XSfpP3lZVbwr2yp7ubYTNFjq6TKbGHWWZdBaAMWucVCrNxasXXGr1hZLHbvZj/f4Y2c0/8NHh7WphbHdICuHE9nR/rGCBR5oAmBrPsbotRCadJWy2cOT7T9nx+E7W+btkNVTEdofkxf4gAMcTQYwGA01IfE0+lngNmLs2fu8aBT8QP80HL55XsPxk8T9VDiYHSN79QwH1FfdX8c1QgPu2zrWrBQCWBZrQDXvBzvytRtt3dvDU1qe5fOk8+ckiW3t3APBPaRKAE/ETau2jgTVEfOtlBaoDaJogc/1f+nZ94gTmplm+1HAiGhwVdmkKgEKxyKlvz3Du569rlFXbmDWuxmazyY3kdTV3X4vyNZb7ARsy2QKhlRpaQyPMTgMwU3QA1aChX98DILrlHeVLpdJYExbPbnyGweR8eg3As6TuBwchcGB1LJPOqofMLQCGBz5zrUul0jVzXRMCMetMvjq93xWw0GYKd2kkUqeCW0Rf+lxBKurCZguDyYF5oC0lHl8DAH3Pf4htz9TkkXYZoc13vrKH1fs0ZgWI9fkBeOGJl7EmLMxmk7DZwvtfHKw9pQCl8tyJ1AwozTe8XLqnxh6PU9RMsahUVNuht+HJYGeNstVtIVcjdIDpYlk57tzJsWyp13lpeNUe2nOHpmLWhOVKZjabtLe3Kdgre16vUaeAmub4Tv4YdyWpZ38NzXIj7wFgc2QL7e1tADUgwAUDEFJK3oitlQCaENiL+CF/eeqKShTxrXcF1ANV7AE+IV3JRMqolgAAAABJRU5ErkJggg==',
        UNKNOWN: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAARCAYAAADtyJ2fAAAACXBIWXMAAAsTAAALEwEAmpwYAAABZElEQVQokY2SzY4BURCFv2rdLeJn0YnnuZ6gH0QkPIYFC4l4AGsrT8CuYy9WdiQ2WgghiJqF6TuMHqZW994651SdugUp0e12Ne39MZw0Urlc/kh+IQIUCoVPBXEfL8YYjaIIESGKov8RjTHabDZRVfr9PtVqlcViYdsdjUbyQkxIk8kEEWE+nzOdTmk0GhaoqioiVkQqlYq2Wi3G4/FdyXUREXK5HNlsFtV70SAIrEi73UbCMFRjDADL5RKAYrGI6z7ZT/foOA6r1Yp6vQ7Abrcjn88D4HkeAMfjEYDD4cBgMOBFdrvdArDf71mv15RKJTzP43K5ABDHMfD9j4nq7xCRP3OuiNgBdDqdt76SloMgwFVVfN8HoFarcb1en4C32w3H+VmwJ48JOJPJsNlsLOh8Pttz0nKSdwFOp5MFxHFsd9X3fUtIhmM9AraVXq/30SPAbDZDAMIwVLhPMRnUuxgOh/IFDvmVXTqOHWEAAAAASUVORK5CYII=',
        TOKEN_MISS: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAARCAYAAADtyJ2fAAAACXBIWXMAAAsTAAALEwEAmpwYAAABZElEQVQokY2SzY4BURCFv2rdLeJn0YnnuZ6gH0QkPIYFC4l4AGsrT8CuYy9WdiQ2WgghiJqF6TuMHqZW994651SdugUp0e12Ne39MZw0Urlc/kh+IQIUCoVPBXEfL8YYjaIIESGKov8RjTHabDZRVfr9PtVqlcViYdsdjUbyQkxIk8kEEWE+nzOdTmk0GhaoqioiVkQqlYq2Wi3G4/FdyXUREXK5HNlsFtV70SAIrEi73UbCMFRjDADL5RKAYrGI6z7ZT/foOA6r1Yp6vQ7Abrcjn88D4HkeAMfjEYDD4cBgMOBFdrvdArDf71mv15RKJTzP43K5ABDHMfD9j4nq7xCRP3OuiNgBdDqdt76SloMgwFVVfN8HoFarcb1en4C32w3H+VmwJ48JOJPJsNlsLOh8Pttz0nKSdwFOp5MFxHFsd9X3fUtIhmM9AraVXq/30SPAbDZDAMIwVLhPMRnUuxgOh/IFDvmVXTqOHWEAAAAASUVORK5CYII=',
    };

    const STYLE = `
        span.occb {
        display:inline-block;
        pointer-events:all;
        image-rendering:pixelated;
        image-rendering:-moz-crisp-edges;
        image-rendering:crisp-edges;
        height:18px;
        vertical-align:middle;
        margin:0 3px;
        cursor:default;
        transition:.3s all;
        }

        span.occb-give { background:url(${IMG.GIVE}) center no-repeat; width:20px; cursor:pointer; }
        span.occb-giving { background:url(${IMG.GIVING}) center no-repeat; width:14px; cursor:progress; }
        span.occb-batch-giving { background:url(${IMG.BATCH_GIVING}) center no-repeat; width:20px; cursor:progress; }
        span.occb-already { background:url(${IMG.ALREADY}) center no-repeat; width:8px; margin:0; }
        span.occb-success { background:url(${IMG.SUCCESS}) center no-repeat; width:28px; }
        span.occb-error { background:url(${IMG.ERROR}) center no-repeat; width:20px; cursor:pointer; }
        span.occb-token_miss { background:url(${IMG.TOKEN_MISS}) center no-repeat; width:14px; cursor:pointer; }
        span.occb-spam { background:url(${IMG.SPAM}) center no-repeat; width:25px; cursor:pointer; }
        span.occb-unknown { background:url(${IMG.UNKNOWN}) center no-repeat; width:14px; cursor:help; }
        span.occb-enough { background:url(${IMG.ENOUGH}) center no-repeat; width:8px; }
    `;

    const TITLES = {
        give: 'Give a Cake',
        giving: 'Giving Cake...',
        already: 'Already gave a Cake',
        enough: 'Has Cakes enough for love (max 20)',
        token_miss: 'CSRF token not found. Please refresh the page and try again.',
        unknown: {
            loading: 'This Deviant\'s Cake status is a mystery! (Loading...)',
            err_network: 'Cake status error: Network error',
            err_dev_id: 'Cake status error: Invalid Deviant ID',
            err_server_response: 'Cake status error: Invalid server response',
        },
        spam: 'Cake badges are being given too quickly! Please wait 60 seconds.',
    };

    function addCSS(css) {
        const styleElem = document.createElement('style');
        styleElem.textContent = css;
        document.head.appendChild(styleElem);
    }

    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }


    function cakeStorage(action, key, value) {
        const prefixedKey = 'cake-' + key;
        try {
            if (action === 'set') return window.localStorage.setItem(prefixedKey, value);
            if (action === 'get') return window.localStorage.getItem(prefixedKey);
        } catch {}
        return null;
    }

    function setting(key, value) {
        if (value !== undefined) {
            if (typeof GM_setValue !== 'undefined') GM_setValue(key, value);
        } else {
            if (typeof GM_getValue !== 'undefined' && GM_getValue(key) !== undefined) return GM_getValue(key);
            const DEFAULTS = {
                showIn: '*',
                showPos: 'after',
                addForGroups: 'true',
                animation: 'true',
            };
            return DEFAULTS[key];
        }
    }

    let csrfTokenCache = null;
    let csrfTokenCacheTime = 0;
    const CSRF_CACHE_DURATION = 30 * 60 * 1000;

    function getTokenFromDOM(doc) {
        let scripts = doc.scripts;
        if (scripts) {
            for (let i = 0; i < scripts.length; i++) {
                const current = scripts[i];
                if (current.innerHTML && current.innerHTML.includes('window.__CSRF_TOKEN__')) {
                    const htmlChunks = current.innerHTML.split('window.__CSRF_TOKEN__');
                    const splitForToken = htmlChunks[1].split(/'/);
                    const token = splitForToken[1];
                    if (token) return token;
                }
            }
        }

        try {
            const logoutForm = doc.querySelector("#logout-form input[type='hidden']");
            if (logoutForm && logoutForm.value) return logoutForm.value;
        } catch (e) {}

        try {
            const metaToken = doc.querySelector('meta[name="csrf-token"]');
            if (metaToken) return metaToken.getAttribute('content');
        } catch (e) {}

        return null;
    }

    async function getCsrfToken() {
        const now = Date.now();

        if (csrfTokenCache && (now - csrfTokenCacheTime) < CSRF_CACHE_DURATION) {
            return csrfTokenCache;
        }

        const currentLoggedInDev = getLoggedInDevName();
        const prevLoggedInDev = cakeStorage('get', 'occb_last_user');
        if (currentLoggedInDev !== prevLoggedInDev) {
            csrfTokenCache = null;
            csrfTokenCacheTime = 0;
            cakeStorage('set', 'occb_last_user', currentLoggedInDev);
        }

        let token = getTokenFromDOM(document);
        if (token) {
            csrfTokenCache = token;
            csrfTokenCacheTime = now;
            cakeStorage('set', 'cached_csrf', token);
            return token;
        }

        try {
            const apiUrl = 'https://www.deviantart.com/';
            const response = await fetch(apiUrl, {
                credentials: 'include',
                cache: 'no-store'
            });

            if (response.ok) {
                const htmlContent = await response.text();
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = htmlContent;

                token = getTokenFromDOM(tempDiv);
                if (token) {
                    csrfTokenCache = token;
                    csrfTokenCacheTime = now;
                    cakeStorage('set', 'cached_csrf', token);
                    return token;
                }
            }
        } catch (error) {
            console.error('Error fetching CSRF token:', error);
        }

        try {
            const sessionToken = window.sessionStorage.getItem('csrf_token');
            if (sessionToken) {
                csrfTokenCache = sessionToken;
                csrfTokenCacheTime = now;
                return sessionToken;
            }
        } catch (e) {}

        return null;
    }

    function getLoggedInDevName() {
        if (window.deviantART && window.deviantART.deviant && window.deviantART.deviant.username) {
            return window.deviantART.deviant.username.toLowerCase();
        }
        const eclipseElem = document.querySelector('header a[data-username]');
        if (eclipseElem) return eclipseElem.getAttribute('data-username').toLowerCase();

        const userinfo = document.cookie.split(';').find(c => c.trim().startsWith('userinfo='));
        if (userinfo) {
            try {
                return JSON.parse(decodeURIComponent(userinfo.split('=')[1])).username.toLowerCase();
            } catch {}
        }
        return null;
    }

    function waitForLoggedInDevName(timeoutMs = 5000) {
        return new Promise(resolve => {
            const intervalMs = 100;
            let elapsed = 0;
            (function check() {
                const u = getLoggedInDevName();
                if (u) resolve(u);
                else if (elapsed >= timeoutMs) resolve(null);
                else {
                    elapsed += intervalMs;
                    setTimeout(check, intervalMs);
                }
            })();
        });
    }

    let cakeLastStates = {};
    let cakeSpamTimeouts = {};
    let loggedInDev = null;

    function setButtonState(button, className, title) {
        button.className = 'occb occb-' + className;
        button.title = title || TITLES[className];
    }

    function saveLastState(devName, className, title) {
        if (className !== 'unknown') cakeLastStates[devName] = {
            className,
            title
        };
    }

    function setButtonsState(devName, className, title, skipStorage) {
        if (!skipStorage) {
            cakeStorage('set', 'sbsCall', JSON.stringify({
                loggedInDev,
                devName,
                className,
                title
            }));
        }
        if (cakeSpamTimeouts[devName]) clearTimeout(cakeSpamTimeouts[devName]);
        if (className === 'spam') {
            cakeSpamTimeouts[devName] = setTimeout(() => {
                setButtonsState(devName, 'give', null, true);
            }, 60000);
        }
        saveLastState(devName, className, title);
        document.querySelectorAll(`span.occb[data-cake-devname="${devName}"]`)
            .forEach(button => setButtonState(button, className, title));
    }

    async function sendCakeBadge(token, devNameReg, devName) {
        const url = 'https://www.deviantart.com/_puppy/dashared/badges/give';
        const params = {
            foruser: devNameReg,
            type: 'cake',
            csrf_token: token
        };
        try {
            const resp = await fetch(url, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(params),
                mode: 'cors',
                referrer: `https://www.deviantart.com/${devName}`
            });
            return await resp.json();
        } catch {
            return {
                errorDescription: 'Network error'
            };
        }
    }

    async function checkCakeStatus(devName, token) {
        const statusUrl = `https://www.deviantart.com/_puppy/dauserprofile/give_menu/status?username=${encodeURIComponent(devName)}&csrf_token=${encodeURIComponent(token)}`;
        try {
            const res = await fetch(statusUrl, {
                credentials: 'include'
            });
            return await res.json();
        } catch {
            return null;
        }
    }

    function disableOtherButtons(activeDevName) {

        document.querySelectorAll('span.occb[data-cake-devname]').forEach(button => {
            const devName = button.getAttribute('data-cake-devname');
            if (devName !== activeDevName) {
                setButtonState(button, 'unknown', 'Other Cake buttons disabled during repeat giving');
                button.style.pointerEvents = 'none';
            } else {
                button.style.pointerEvents = 'all';
            }
        });
    }

    function enableAllButtons() {
        document.querySelectorAll('span.occb[data-cake-devname]').forEach(button => {
            const devName = button.getAttribute('data-cake-devname');
            if (cakeLastStates[devName]) {
                setButtonState(button, cakeLastStates[devName].className, cakeLastStates[devName].title);
            } else {
                setButtonState(button, 'give');
            }
            button.style.pointerEvents = 'all';
        });
    }

    async function cakeButtonClicked(event) {
        event.preventDefault();
        event.stopPropagation();

        const classState = this.className.slice(10);
        if (!['give', 'error', 'spam', 'token_miss'].includes(classState)) return;

        const devName = this.getAttribute('data-cake-devname');
        const devNameReg = this.getAttribute('data-cake-devname-reg');

        const repeatGive = event.shiftKey === true;

        if (repeatGive) {
            if (window.repeatGiveActive && window.repeatGiveActive !== devName) {
                setButtonsState(devName, 'spam', 'Only one user can be repeat-given at a time.');
                return;
            }
            window.repeatGiveActive = devName;
            disableOtherButtons(devName);
        }

        setButtonsState(devName, 'giving');

        let token = await getCsrfToken();

        if (!token) {
            setButtonsState(devName, 'token_miss');
            if (repeatGive) {
                window.repeatGiveActive = null;
                enableAllButtons();
            }
            return;
        }

        if (repeatGive) {
            let giveCount = 0;
            while (giveCount < 20) {
                const sendResult = await sendCakeBadge(token, devNameReg, devName);

                if (sendResult.errorDescription) {
                    const spamKeywords = ['quickly', 'Whoa there', 'spam filter', 'too fast'];
                    const isSpam = spamKeywords.some(keyword =>
                        sendResult.errorDescription.toLowerCase().includes(keyword.toLowerCase())
                    );

                    if (isSpam) {
                        setButtonsState(devName, 'spam');
                        break;
                    }
                    if (sendResult.errorDescription.includes('Cannot give badge to this user')) {
                        setButtonsState(devName, 'already');
                        break;
                    }
                    setButtonsState(devName, 'error', sendResult.errorDescription);
                    break;
                } else {
                    giveCount++;
                    setButtonsState(devName, 'batch-giving', `Cake given! (${giveCount}/20)`);
                }

                await delay(2500);

                token = await getCsrfToken();
                if (!token) {
                    setButtonsState(devName, 'token_miss');
                    break;
                }

                const status = await checkCakeStatus(devName, token);
                if (!status || status.canGiveCake === false) {
                    setButtonsState(devName, 'enough');
                    break;
                }
                if (status.spamFilter) {
                    setButtonsState(devName, 'spam');
                    break;
                }
                if (giveCount >= 20) {
                    setButtonsState(devName, 'enough', 'Maximum cakes given!');
                }
            }
            window.repeatGiveActive = null;
            enableAllButtons();
        } else {
            const sendResult = await sendCakeBadge(token, devNameReg, devName);

            if (sendResult.errorDescription) {
                const spamKeywords = ['quickly', 'Whoa there', 'spam filter', 'too fast'];
                const isSpam = spamKeywords.some(keyword =>
                    sendResult.errorDescription.toLowerCase().includes(keyword.toLowerCase())
                );

                if (isSpam) {
                    setButtonsState(devName, 'spam');
                    return;
                }
                if (sendResult.errorDescription.includes('Cannot give badge to this user')) {
                    setButtonsState(devName, 'already');
                    return;
                }
                setButtonsState(devName, 'error', sendResult.errorDescription);
                return;
            } else {
                setButtonsState(devName, 'success', 'Cake given!');
            }

            await delay(5000);

            const newToken = await getCsrfToken();
            if (!newToken) {
                setButtonsState(devName, 'token_miss');
                return;
            }

            const status = await checkCakeStatus(devName, newToken);
            if (!status) {
                setButtonsState(devName, 'unknown', TITLES.unknown.err_network);
                return;
            }
            if (status.spamFilter) {
                setButtonsState(devName, 'spam');
                setTimeout(() => setButtonsState(devName, 'give'), 60000);
            } else if (status.canGiveCake === false) {
                setButtonsState(devName, 'enough');
            } else if (status.canGiveCake === true) {
                setButtonsState(devName, 'give');
            } else {
                setButtonsState(devName, 'unknown', TITLES.unknown.err_server_response);
            }
        }
    }

    function getDevName(link, lower = true) {
        const eclipseUsername = link.getAttribute('data-username');
        if (eclipseUsername) return lower ? eclipseUsername.toLowerCase() : eclipseUsername;

        let m = /([a-zA-Z0-9-]+)\.deviantart\.com/.exec(link.href);
        if (m && m[1] !== 'www') return lower ? m[1].toLowerCase() : m[1];
        m = /www\.deviantart\.com\/([a-zA-Z0-9-]+)/.exec(link.href);
        return m ? (lower ? m[1].toLowerCase() : m[1]) : null;
    }

    function initCakeButton(button, devName) {
        button.onclick = cakeButtonClicked;
        if (cakeLastStates[devName]) {
            setButtonState(button, cakeLastStates[devName].className, cakeLastStates[devName].title);
        } else if (cakeStorage('get', `${loggedInDev}|${devName}`)) {
            setButtonState(button, 'already');
        } else if (loggedInDev === devName) {
            setButtonState(button, 'enough');
        } else {
            setButtonState(button, 'unknown', TITLES.unknown.loading);
            askServerForStatus(button, devName);
        }
    }

    let cakeButtonsToUpdate = {};
    let cakeDevIDs = {};

    function askServerForStatus(button, devName) {
        if (cakeButtonsToUpdate[devName]) {
            cakeButtonsToUpdate[devName].push(button);
        } else {
            cakeButtonsToUpdate[devName] = [button];
            getGiveMenu(devName, (devID, className, title) => {
                saveLastState(devName, className, title);
                if (devID) cakeDevIDs[devName] = devID;
                cakeButtonsToUpdate[devName].forEach(b => setButtonState(b, className, title));
                delete cakeButtonsToUpdate[devName];
            });
        }
    }

    function getGiveMenu(devName, callback) {
        getCsrfToken()
            .then(csrfToken => {
                if (!csrfToken) {
                    callback(0, 'token_miss', TITLES.token_miss);
                    return;
                }
                const url = `https://www.deviantart.com/_puppy/dauserprofile/give_menu/status?username=${encodeURIComponent(devName)}&csrf_token=${encodeURIComponent(csrfToken)}`;
                fetch(url, {
                        credentials: 'include'
                    })
                    .then(res => res.json())
                    .then(data => {
                        if (!data || typeof data.canGiveCake === 'undefined') {
                            callback(0, 'unknown', TITLES.unknown.err_server_response);
                            return;
                        }
                        if (data.canGiveCake === false) {
                            callback(cakeDevIDs[devName], 'enough', TITLES.enough);
                        } else if (data.canGiveCake === true) {
                            callback(cakeDevIDs[devName], 'give', TITLES.give);
                        } else {
                            callback(cakeDevIDs[devName], 'unknown', TITLES.unknown.err_server_response);
                        }
                    })
                    .catch(() => callback(0, 'unknown', TITLES.unknown.err_network));
            })
            .catch(() => callback(0, 'token_miss', TITLES.token_miss));
    }

    function addCakeButton(devNameLink) {
        if (devNameLink.classList && devNameLink.classList.contains('banned')) return;

        let devName, devNameReg;
        if (devNameLink.tagName.toLowerCase() === 'span') {
            devName = devNameLink.innerText.toLowerCase();
            devNameReg = devNameLink.innerText;
        } else {
            devName = getDevName(devNameLink, true);
            devNameReg = getDevName(devNameLink, false);
        }
        if (!devName || !loggedInDev || devName === loggedInDev) return;

        if (devNameLink.parentNode && devNameLink.parentNode.querySelector(`span.occb[data-cake-devname="${devName}"]`)) return;

        const btn = document.createElement('span');
        btn.setAttribute('data-cake-devname', devName);
        btn.setAttribute('data-cake-devname-reg', devNameReg);
        btn.className = 'occb occb-unknown';
        btn.style.pointerEvents = 'all';
        btn.style.userSelect = 'none';

        initCakeButton(btn, devName);

        const pos = setting('showPos') === 'before' ? 'before' : 'after';

        let ref;

        const oclbButton = devNameLink.parentNode ? devNameLink.parentNode.querySelector(`span.oclb[devName="${devName}"]`) : null;

        if (pos === 'after') {
            if (oclbButton) {
                ref = oclbButton.nextSibling;
            } else {
                ref = devNameLink.nextSibling;
            }
        } else {
            ref = devNameLink;
        }

        if (pos === 'after' && ref && ref.classList && ref.classList.contains('user-symbol')) {
            ref = ref.nextSibling;
        }

        if (devNameLink.parentNode) {
            devNameLink.parentNode.insertBefore(btn, ref);
        }
    }

    const usernameSelector =
        setting('addForGroups') === 'true' ?
        'a.username, a[data-username]' :
        'a.username:not(.group), a[data-username]:not([data-usertype=group])';

    const badgesLinkSelector = 'a[href*=".deviantart.com/"][href*="/badges/"]';
    const watchersSelector = '#watchers div > span';
    const watchingSelector = '#watching div > span';
    const membersSelector = '#group_members div > span';
    const adminSelector = '#group_admins div > span';

    function scanAndAddButtons() {
        [badgesLinkSelector, usernameSelector, watchersSelector, watchingSelector, membersSelector, adminSelector]
        .forEach(sel => {
            document.querySelectorAll(sel).forEach(addCakeButton);
        });
    }

    function observeDOMChanges() {
        const observer = new MutationObserver(mutations => {
            mutations.forEach(m => {
                m.addedNodes.forEach(node => {
                    if (node.nodeType !== 1) return;
                    [
                        badgesLinkSelector,
                        usernameSelector,
                        watchersSelector,
                        watchingSelector,
                        membersSelector,
                        adminSelector,
                    ].forEach(sel => {
                        if (node.matches && node.matches(sel)) addCakeButton(node);
                        if (node.querySelectorAll) node.querySelectorAll(sel).forEach(addCakeButton);
                    });
                });
            });
        });
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    async function initWhenReady() {
        loggedInDev = await waitForLoggedInDevName();
        if (!loggedInDev) return;

        addCSS(STYLE);
        if (setting('animation') !== 'true') addCSS('span.occb{transition:none}');
        scanAndAddButtons();
        observeDOMChanges();

        window.addEventListener('storage', e => {
            if (!e.key || !e.key.startsWith('cake-sbsCall') || !e.newValue) return;
            let data;
            try {
                data = JSON.parse(e.newValue);
            } catch {
                return;
            }
            if (data.loggedInDev !== loggedInDev) return;
            document.querySelectorAll(`span.occb[data-cake-devname="${data.devName}"]`)
                .forEach(button => setButtonState(button, data.className, data.title));
        });
    }

    try {
        if (
            window.location.host.includes('deviantart.com') &&
            !window.location.host.includes('llamatrade.deviantart.com')
        ) {
            if (window.location.href.includes('/notifications')) {
                initWhenReady();
            } else {
                loggedInDev = getLoggedInDevName();
                if (loggedInDev) {
                    addCSS(STYLE);
                    if (setting('animation') !== 'true') addCSS('span.occb{transition:none}');
                    scanAndAddButtons();
                    observeDOMChanges();
                    window.addEventListener('storage', e => {
                        if (!e.key || !e.key.startsWith('cake-sbsCall') || !e.newValue) return;
                        let data;
                        try {
                            data = JSON.parse(e.newValue);
                        } catch {
                            return;
                        }
                        if (data.loggedInDev !== loggedInDev) return;
                        document.querySelectorAll(`span.occb[data-cake-devname="${data.devName}"]`)
                            .forEach(button => setButtonState(button, data.className, data.title));
                    });
                } else {
                    initWhenReady();
                }
            }
        }
    } catch (err) {
        console.error('One Click Cake Button error:', err,
            '\n\nPlease send a note here with details:\nhttps://www.deviantart.com/notifications/notes/#to=Liamb135');
    }

})();
