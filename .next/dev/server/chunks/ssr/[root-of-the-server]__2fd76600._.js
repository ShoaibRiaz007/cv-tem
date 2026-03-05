module.exports = [
"[externals]/node:https [external] (node:https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:https", () => require("node:https"));

module.exports = mod;
}),
"[project]/cv-tem/src/lib/emailjs.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"403a7d96f112358678226a1fee240fe7d2bd328930":"sendContactEmail"},"",""] */ __turbopack_context__.s([
    "sendContactEmail",
    ()=>sendContactEmail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tem/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f40$emailjs$2f$nodejs$2f$mjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/cv-tem/node_modules/@emailjs/nodejs/mjs/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tem/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
async function sendContactEmail(params) {
    const serviceId = process.env.EMAILJS_SERVICE_ID;
    const publicKey = process.env.EMAILJS_PUBLIC_KEY;
    const templateId = process.env.EMAILJS_TEMPLATE_ID;
    const privateKey = process.env.EMAILJS_PRIVATE_KEY;
    if (!serviceId || !templateId || !publicKey || !privateKey) {
        return {
            success: false,
            error: "Email service is not configured. Please try again later."
        };
    }
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f40$emailjs$2f$nodejs$2f$mjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].send(serviceId, templateId, {
            from_name: params.name,
            from_email: params.email,
            message: params.message,
            reply_to: params.email
        }, {
            publicKey,
            privateKey
        });
        return {
            success: true
        };
    } catch (err) {
        const message = err instanceof Error ? err.message : "Failed to send message.";
        return {
            success: false,
            error: message
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    sendContactEmail
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(sendContactEmail, "403a7d96f112358678226a1fee240fe7d2bd328930", null);
}),
"[project]/cv-tem/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/cv-tem/src/lib/emailjs.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$src$2f$lib$2f$emailjs$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tem/src/lib/emailjs.ts [app-rsc] (ecmascript)");
;
}),
"[project]/cv-tem/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/cv-tem/src/lib/emailjs.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "403a7d96f112358678226a1fee240fe7d2bd328930",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$src$2f$lib$2f$emailjs$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendContactEmail"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$cv$2d$tem$2f$src$2f$lib$2f$emailjs$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/cv-tem/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => "[project]/cv-tem/src/lib/emailjs.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$src$2f$lib$2f$emailjs$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tem/src/lib/emailjs.ts [app-rsc] (ecmascript)");
}),
"[project]/cv-tem/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* eslint-disable import/no-extraneous-dependencies */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "registerServerReference", {
    enumerable: true,
    get: function() {
        return _server.registerServerReference;
    }
});
const _server = __turbopack_context__.r("[project]/cv-tem/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)"); //# sourceMappingURL=server-reference.js.map
}),
"[project]/cv-tem/node_modules/@emailjs/nodejs/mjs/models/EmailJSResponseStatus.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EmailJSResponseStatus",
    ()=>EmailJSResponseStatus
]);
class EmailJSResponseStatus {
    constructor(_status = 0, _text = 'Network Error'){
        this.status = _status;
        this.text = _text;
    }
}
}),
"[project]/cv-tem/node_modules/@emailjs/nodejs/mjs/utils/createMemoryStorage/createMemoryStorage.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createMemoryStorage",
    ()=>createMemoryStorage
]);
class MemoryStorage {
    constructor(){
        this.store = {};
    }
    get(key) {
        return this.store[key];
    }
    set(key, value) {
        this.store[key] = value;
    }
    remove(key) {
        delete this.store[key];
    }
}
const createMemoryStorage = ()=>{
    const memoryStorage = new MemoryStorage();
    return {
        get: (key)=>Promise.resolve(memoryStorage.get(key)),
        set: (key, value)=>Promise.resolve(memoryStorage.set(key, value)),
        remove: (key)=>Promise.resolve(memoryStorage.remove(key))
    };
};
}),
"[project]/cv-tem/node_modules/@emailjs/nodejs/mjs/store/store.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "store",
    ()=>store
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f40$emailjs$2f$nodejs$2f$mjs$2f$utils$2f$createMemoryStorage$2f$createMemoryStorage$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tem/node_modules/@emailjs/nodejs/mjs/utils/createMemoryStorage/createMemoryStorage.js [app-rsc] (ecmascript)");
;
const store = {
    origin: 'api.emailjs.com',
    storageProvider: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f40$emailjs$2f$nodejs$2f$mjs$2f$utils$2f$createMemoryStorage$2f$createMemoryStorage$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createMemoryStorage"])()
};
}),
"[project]/cv-tem/node_modules/@emailjs/nodejs/mjs/methods/init/init.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "init",
    ()=>init
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f40$emailjs$2f$nodejs$2f$mjs$2f$store$2f$store$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tem/node_modules/@emailjs/nodejs/mjs/store/store.js [app-rsc] (ecmascript)");
;
const init = (options, origin = 'api.emailjs.com')=>{
    if (!options) return;
    __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f40$emailjs$2f$nodejs$2f$mjs$2f$store$2f$store$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["store"].publicKey = options.publicKey;
    __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f40$emailjs$2f$nodejs$2f$mjs$2f$store$2f$store$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["store"].privateKey = options.privateKey;
    __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f40$emailjs$2f$nodejs$2f$mjs$2f$store$2f$store$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["store"].storageProvider = options.storageProvider;
    __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f40$emailjs$2f$nodejs$2f$mjs$2f$store$2f$store$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["store"].blockList = options.blockList;
    __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f40$emailjs$2f$nodejs$2f$mjs$2f$store$2f$store$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["store"].limitRate = options.limitRate;
    __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f40$emailjs$2f$nodejs$2f$mjs$2f$store$2f$store$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["store"].origin = options.origin || origin;
};
}),
"[project]/cv-tem/node_modules/@emailjs/nodejs/mjs/api/sendPost.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sendPost",
    ()=>sendPost
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$https__$5b$external$5d$__$28$node$3a$https$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:https [external] (node:https, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f40$emailjs$2f$nodejs$2f$mjs$2f$store$2f$store$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tem/node_modules/@emailjs/nodejs/mjs/store/store.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f40$emailjs$2f$nodejs$2f$mjs$2f$models$2f$EmailJSResponseStatus$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tem/node_modules/@emailjs/nodejs/mjs/models/EmailJSResponseStatus.js [app-rsc] (ecmascript)");
;
;
;
const sendPost = (data)=>{
    const options = {
        host: __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f40$emailjs$2f$nodejs$2f$mjs$2f$store$2f$store$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["store"].origin,
        path: '/api/v1.0/email/send',
        port: 443,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    return new Promise((resolve, reject)=>{
        const req = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$https__$5b$external$5d$__$28$node$3a$https$2c$__cjs$29$__["request"])(options, (res)=>{
            const chunks = [];
            res.on('data', (chunk)=>chunks.push(chunk));
            res.on('end', ()=>{
                const message = Buffer.concat(chunks).toString();
                const responseStatus = new __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f40$emailjs$2f$nodejs$2f$mjs$2f$models$2f$EmailJSResponseStatus$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EmailJSResponseStatus"](res.statusCode, message);
                if (res.statusCode === 200) {
                    resolve(responseStatus);
                } else {
                    reject(responseStatus);
                }
            });
            res.on('error', (error)=>{
                reject(error);
            });
        });
        req.on('error', (error)=>{
            reject(error);
        });
        if (data) {
            req.write(data);
        }
        req.end();
    });
};
}),
"[project]/cv-tem/node_modules/@emailjs/nodejs/mjs/utils/validateParams/validateParams.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "validateParams",
    ()=>validateParams
]);
const validateParams = (publicKey, serviceID, templateID)=>{
    if (!publicKey || typeof publicKey !== 'string') {
        throw 'The public key is required. Visit https://dashboard.emailjs.com/admin/account';
    }
    if (!serviceID || typeof serviceID !== 'string') {
        throw 'The service ID is required. Visit https://dashboard.emailjs.com/admin';
    }
    if (!templateID || typeof templateID !== 'string') {
        throw 'The template ID is required. Visit https://dashboard.emailjs.com/admin/templates';
    }
};
}),
"[project]/cv-tem/node_modules/@emailjs/nodejs/mjs/utils/validateTemplateParams/validateTemplateParams.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "validateTemplateParams",
    ()=>validateTemplateParams
]);
const validateTemplateParams = (templateParams)=>{
    // eslint-disable-next-line @typescript-eslint/no-base-to-string
    if (templateParams && templateParams.toString() !== '[object Object]') {
        throw 'The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/';
    }
};
}),
"[project]/cv-tem/node_modules/@emailjs/nodejs/mjs/utils/validateBlockListParams/validateBlockListParams.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "validateBlockListParams",
    ()=>validateBlockListParams
]);
const validateBlockListParams = (list, watchVariable)=>{
    if (!Array.isArray(list)) {
        throw 'The BlockList list has to be an array';
    }
    if (typeof watchVariable !== 'string') {
        throw 'The BlockList watchVariable has to be a string';
    }
};
}),
"[project]/cv-tem/node_modules/@emailjs/nodejs/mjs/utils/isBlockedValueInParams/isBlockedValueInParams.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isBlockedValueInParams",
    ()=>isBlockedValueInParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f40$emailjs$2f$nodejs$2f$mjs$2f$utils$2f$validateBlockListParams$2f$validateBlockListParams$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tem/node_modules/@emailjs/nodejs/mjs/utils/validateBlockListParams/validateBlockListParams.js [app-rsc] (ecmascript)");
;
const isBlockListDisabled = (options)=>{
    return !options.list?.length || !options.watchVariable;
};
const getValue = (data, name)=>{
    return data instanceof FormData ? data.get(name) : data[name];
};
const isBlockedValueInParams = (options, params)=>{
    if (isBlockListDisabled(options)) return false;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f40$emailjs$2f$nodejs$2f$mjs$2f$utils$2f$validateBlockListParams$2f$validateBlockListParams$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["validateBlockListParams"])(options.list, options.watchVariable);
    const value = getValue(params, options.watchVariable);
    if (typeof value !== 'string') return false;
    return options.list.includes(value);
};
}),
"[project]/cv-tem/node_modules/@emailjs/nodejs/mjs/errors/blockedEmailError/blockedEmailError.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "blockedEmailError",
    ()=>blockedEmailError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f40$emailjs$2f$nodejs$2f$mjs$2f$models$2f$EmailJSResponseStatus$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tem/node_modules/@emailjs/nodejs/mjs/models/EmailJSResponseStatus.js [app-rsc] (ecmascript)");
;
const blockedEmailError = ()=>{
    return new __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f40$emailjs$2f$nodejs$2f$mjs$2f$models$2f$EmailJSResponseStatus$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EmailJSResponseStatus"](403, 'Forbidden');
};
}),
"[project]/cv-tem/node_modules/@emailjs/nodejs/mjs/utils/validateLimitRateParams/validateLimitRateParams.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "validateLimitRateParams",
    ()=>validateLimitRateParams
]);
const validateLimitRateParams = (throttle, id)=>{
    if (typeof throttle !== 'number' || throttle < 0) {
        throw 'The LimitRate throttle has to be a positive number';
    }
    if (id && typeof id !== 'string') {
        throw 'The LimitRate ID has to be a non-empty string';
    }
};
}),
"[project]/cv-tem/node_modules/@emailjs/nodejs/mjs/utils/isLimitRateHit/isLimitRateHit.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isLimitRateHit",
    ()=>isLimitRateHit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f40$emailjs$2f$nodejs$2f$mjs$2f$utils$2f$validateLimitRateParams$2f$validateLimitRateParams$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tem/node_modules/@emailjs/nodejs/mjs/utils/validateLimitRateParams/validateLimitRateParams.js [app-rsc] (ecmascript)");
;
const getLeftTime = async (id, throttle, storage)=>{
    const lastTime = Number(await storage.get(id) || 0);
    return throttle - Date.now() + lastTime;
};
const isLimitRateHit = async (options, storage)=>{
    if (!options.throttle || !storage) {
        return false;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f40$emailjs$2f$nodejs$2f$mjs$2f$utils$2f$validateLimitRateParams$2f$validateLimitRateParams$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["validateLimitRateParams"])(options.throttle, options.id);
    const id = options.id || 'default';
    const leftTime = await getLeftTime(id, options.throttle, storage);
    if (leftTime > 0) {
        return true;
    }
    await storage.set(id, Date.now());
    return false;
};
}),
"[project]/cv-tem/node_modules/@emailjs/nodejs/mjs/errors/limitRateError/limitRateError.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "limitRateError",
    ()=>limitRateError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f40$emailjs$2f$nodejs$2f$mjs$2f$models$2f$EmailJSResponseStatus$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tem/node_modules/@emailjs/nodejs/mjs/models/EmailJSResponseStatus.js [app-rsc] (ecmascript)");
;
const limitRateError = ()=>{
    return new __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f40$emailjs$2f$nodejs$2f$mjs$2f$models$2f$EmailJSResponseStatus$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EmailJSResponseStatus"](429, 'Too Many Requests');
};
}),
"[project]/cv-tem/node_modules/@emailjs/nodejs/mjs/methods/send/send.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "send",
    ()=>send
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f40$emailjs$2f$nodejs$2f$mjs$2f$store$2f$store$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tem/node_modules/@emailjs/nodejs/mjs/store/store.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f40$emailjs$2f$nodejs$2f$mjs$2f$api$2f$sendPost$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tem/node_modules/@emailjs/nodejs/mjs/api/sendPost.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f40$emailjs$2f$nodejs$2f$mjs$2f$utils$2f$validateParams$2f$validateParams$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tem/node_modules/@emailjs/nodejs/mjs/utils/validateParams/validateParams.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f40$emailjs$2f$nodejs$2f$mjs$2f$utils$2f$validateTemplateParams$2f$validateTemplateParams$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tem/node_modules/@emailjs/nodejs/mjs/utils/validateTemplateParams/validateTemplateParams.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f40$emailjs$2f$nodejs$2f$mjs$2f$utils$2f$isBlockedValueInParams$2f$isBlockedValueInParams$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tem/node_modules/@emailjs/nodejs/mjs/utils/isBlockedValueInParams/isBlockedValueInParams.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f40$emailjs$2f$nodejs$2f$mjs$2f$errors$2f$blockedEmailError$2f$blockedEmailError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tem/node_modules/@emailjs/nodejs/mjs/errors/blockedEmailError/blockedEmailError.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f40$emailjs$2f$nodejs$2f$mjs$2f$utils$2f$isLimitRateHit$2f$isLimitRateHit$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tem/node_modules/@emailjs/nodejs/mjs/utils/isLimitRateHit/isLimitRateHit.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f40$emailjs$2f$nodejs$2f$mjs$2f$errors$2f$limitRateError$2f$limitRateError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tem/node_modules/@emailjs/nodejs/mjs/errors/limitRateError/limitRateError.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
const send = async (serviceID, templateID, templateParams, options)=>{
    const publicKey = options?.publicKey || __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f40$emailjs$2f$nodejs$2f$mjs$2f$store$2f$store$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["store"].publicKey;
    const privateKey = options?.privateKey || __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f40$emailjs$2f$nodejs$2f$mjs$2f$store$2f$store$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["store"].privateKey;
    const storageProvider = options?.storageProvider || __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f40$emailjs$2f$nodejs$2f$mjs$2f$store$2f$store$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["store"].storageProvider;
    const blockList = {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f40$emailjs$2f$nodejs$2f$mjs$2f$store$2f$store$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["store"].blockList,
        ...options?.blockList
    };
    const limitRate = {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f40$emailjs$2f$nodejs$2f$mjs$2f$store$2f$store$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["store"].limitRate,
        ...options?.limitRate
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f40$emailjs$2f$nodejs$2f$mjs$2f$utils$2f$validateParams$2f$validateParams$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["validateParams"])(publicKey, serviceID, templateID);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f40$emailjs$2f$nodejs$2f$mjs$2f$utils$2f$validateTemplateParams$2f$validateTemplateParams$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["validateTemplateParams"])(templateParams);
    if (templateParams && (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f40$emailjs$2f$nodejs$2f$mjs$2f$utils$2f$isBlockedValueInParams$2f$isBlockedValueInParams$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isBlockedValueInParams"])(blockList, templateParams)) {
        return Promise.reject((0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f40$emailjs$2f$nodejs$2f$mjs$2f$errors$2f$blockedEmailError$2f$blockedEmailError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["blockedEmailError"])());
    }
    if (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f40$emailjs$2f$nodejs$2f$mjs$2f$utils$2f$isLimitRateHit$2f$isLimitRateHit$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isLimitRateHit"])(limitRate, storageProvider)) {
        return Promise.reject((0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f40$emailjs$2f$nodejs$2f$mjs$2f$errors$2f$limitRateError$2f$limitRateError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["limitRateError"])());
    }
    const params = {
        lib_version: '5.0.2',
        user_id: publicKey,
        accessToken: privateKey,
        service_id: serviceID,
        template_id: templateID,
        template_params: templateParams
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f40$emailjs$2f$nodejs$2f$mjs$2f$api$2f$sendPost$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendPost"])(JSON.stringify(params));
};
}),
"[project]/cv-tem/node_modules/@emailjs/nodejs/mjs/index.js [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f40$emailjs$2f$nodejs$2f$mjs$2f$models$2f$EmailJSResponseStatus$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tem/node_modules/@emailjs/nodejs/mjs/models/EmailJSResponseStatus.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f40$emailjs$2f$nodejs$2f$mjs$2f$methods$2f$init$2f$init$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tem/node_modules/@emailjs/nodejs/mjs/methods/init/init.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f40$emailjs$2f$nodejs$2f$mjs$2f$methods$2f$send$2f$send$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tem/node_modules/@emailjs/nodejs/mjs/methods/send/send.js [app-rsc] (ecmascript)");
;
;
;
;
const __TURBOPACK__default__export__ = {
    init: __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f40$emailjs$2f$nodejs$2f$mjs$2f$methods$2f$init$2f$init$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["init"],
    send: __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f40$emailjs$2f$nodejs$2f$mjs$2f$methods$2f$send$2f$send$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["send"],
    EmailJSResponseStatus: __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f40$emailjs$2f$nodejs$2f$mjs$2f$models$2f$EmailJSResponseStatus$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EmailJSResponseStatus"]
};
}),
"[project]/cv-tem/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This function ensures that all the exported values are valid server actions,
// during the runtime. By definition all actions are required to be async
// functions, but here we can only check that they are functions.
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ensureServerEntryExports", {
    enumerable: true,
    get: function() {
        return ensureServerEntryExports;
    }
});
function ensureServerEntryExports(actions) {
    for(let i = 0; i < actions.length; i++){
        const action = actions[i];
        if (typeof action !== 'function') {
            throw Object.defineProperty(new Error(`A "use server" file can only export async functions, found ${typeof action}.\nRead more: https://nextjs.org/docs/messages/invalid-use-server-value`), "__NEXT_ERROR_CODE", {
                value: "E352",
                enumerable: false,
                configurable: true
            });
        }
    }
} //# sourceMappingURL=action-validate.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__2fd76600._.js.map