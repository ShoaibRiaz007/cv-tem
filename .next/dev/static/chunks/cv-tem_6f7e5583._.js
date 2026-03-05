(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/cv-tem/src/components/portfolio/projects-hub.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectsHub
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tem/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tem/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/cv-tem/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/cv-tem/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tem/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tem/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tem/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tem/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function extractUnique(items, getter) {
    const set = new Set();
    for (const p of items){
        const val = getter(p);
        if (val?.trim()) set.add(val.trim());
    }
    return Array.from(set).sort();
}
function extractSkills(items) {
    const set = new Set();
    for (const p of items){
        for (const t of p.techStack ?? []){
            if (t?.trim()) set.add(t.trim());
        }
    }
    return Array.from(set).sort();
}
function FilterPill(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "77326460daeb6ab524529e08a6dd1f407a0d0e9d0b5ab9fb402e710604f3e661") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "77326460daeb6ab524529e08a6dd1f407a0d0e9d0b5ab9fb402e710604f3e661";
    }
    const { label, active, onClick } = t0;
    const t1 = active ? "bg-purple-500/20 border-purple-500/40 text-purple-300" : "bg-white/5 border-white/10 text-muted-foreground hover:border-purple-500/30 hover:text-purple-300";
    let t2;
    if ($[1] !== t1) {
        t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-full border px-3 py-1 font-mono text-xs transition-all duration-200", t1);
        $[1] = t1;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    let t3;
    if ($[3] !== label || $[4] !== onClick || $[5] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: onClick,
            className: t2,
            children: label
        }, void 0, false, {
            fileName: "[project]/cv-tem/src/components/portfolio/projects-hub.tsx",
            lineNumber: 52,
            columnNumber: 10
        }, this);
        $[3] = label;
        $[4] = onClick;
        $[5] = t2;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    return t3;
}
_c = FilterPill;
function ProjectCard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(31);
    if ($[0] !== "77326460daeb6ab524529e08a6dd1f407a0d0e9d0b5ab9fb402e710604f3e661") {
        for(let $i = 0; $i < 31; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "77326460daeb6ab524529e08a6dd1f407a0d0e9d0b5ab9fb402e710604f3e661";
    }
    const { project } = t0;
    const t1 = `/projects/${project.slug}`;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("glass-card group flex h-full flex-col rounded-xl overflow-hidden", "transition-all duration-300 hover:-translate-y-1", "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring");
        $[1] = t2;
    } else {
        t2 = $[1];
    }
    let t3;
    if ($[2] !== project.coverImage || $[3] !== project.title) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: project.coverImage,
            alt: project.title,
            fill: true,
            className: "object-cover group-hover:scale-105 transition-transform duration-500",
            sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        }, void 0, false, {
            fileName: "[project]/cv-tem/src/components/portfolio/projects-hub.tsx",
            lineNumber: 83,
            columnNumber: 10
        }, this);
        $[2] = project.coverImage;
        $[3] = project.title;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
        }, void 0, false, {
            fileName: "[project]/cv-tem/src/components/portfolio/projects-hub.tsx",
            lineNumber: 92,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] !== t3) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative aspect-[16/10] w-full overflow-hidden bg-muted",
            children: [
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/cv-tem/src/components/portfolio/projects-hub.tsx",
            lineNumber: 99,
            columnNumber: 10
        }, this);
        $[6] = t3;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] !== project.title) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "font-display text-lg font-semibold group-hover:text-purple-300 transition-colors",
            children: project.title
        }, void 0, false, {
            fileName: "[project]/cv-tem/src/components/portfolio/projects-hub.tsx",
            lineNumber: 107,
            columnNumber: 10
        }, this);
        $[8] = project.title;
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] !== project.tagline) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-muted-foreground text-sm line-clamp-2",
            children: project.tagline
        }, void 0, false, {
            fileName: "[project]/cv-tem/src/components/portfolio/projects-hub.tsx",
            lineNumber: 115,
            columnNumber: 10
        }, this);
        $[10] = project.tagline;
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    let t8;
    if ($[12] !== project.platform || $[13] !== project.projectType) {
        t8 = (project.platform || project.projectType) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs px-2 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300/80",
            children: project.platform ?? project.projectType
        }, void 0, false, {
            fileName: "[project]/cv-tem/src/components/portfolio/projects-hub.tsx",
            lineNumber: 123,
            columnNumber: 55
        }, this);
        $[12] = project.platform;
        $[13] = project.projectType;
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    let t9;
    if ($[15] !== project.techStack) {
        t9 = project.techStack?.slice(0, 3).map(_ProjectCardAnonymous);
        $[15] = project.techStack;
        $[16] = t9;
    } else {
        t9 = $[16];
    }
    let t10;
    if ($[17] !== project.techStack?.length) {
        t10 = (project.techStack?.length ?? 0) > 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs text-muted-foreground",
            children: [
                "+",
                (project.techStack?.length ?? 0) - 3
            ]
        }, void 0, true, {
            fileName: "[project]/cv-tem/src/components/portfolio/projects-hub.tsx",
            lineNumber: 140,
            columnNumber: 51
        }, this);
        $[17] = project.techStack?.length;
        $[18] = t10;
    } else {
        t10 = $[18];
    }
    let t11;
    if ($[19] !== t10 || $[20] !== t8 || $[21] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-auto flex flex-wrap items-center gap-2 pt-2",
            children: [
                t8,
                t9,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/cv-tem/src/components/portfolio/projects-hub.tsx",
            lineNumber: 148,
            columnNumber: 11
        }, this);
        $[19] = t10;
        $[20] = t8;
        $[21] = t9;
        $[22] = t11;
    } else {
        t11 = $[22];
    }
    let t12;
    if ($[23] !== t11 || $[24] !== t6 || $[25] !== t7) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-1 flex-col gap-2.5 p-4",
            children: [
                t6,
                t7,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/cv-tem/src/components/portfolio/projects-hub.tsx",
            lineNumber: 158,
            columnNumber: 11
        }, this);
        $[23] = t11;
        $[24] = t6;
        $[25] = t7;
        $[26] = t12;
    } else {
        t12 = $[26];
    }
    let t13;
    if ($[27] !== t1 || $[28] !== t12 || $[29] !== t5) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: t1,
            className: t2,
            children: [
                t5,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/cv-tem/src/components/portfolio/projects-hub.tsx",
            lineNumber: 168,
            columnNumber: 11
        }, this);
        $[27] = t1;
        $[28] = t12;
        $[29] = t5;
        $[30] = t13;
    } else {
        t13 = $[30];
    }
    return t13;
}
_c1 = ProjectCard;
function _ProjectCardAnonymous(tech) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "text-xs px-2 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300/80",
        children: tech
    }, tech, false, {
        fileName: "[project]/cv-tem/src/components/portfolio/projects-hub.tsx",
        lineNumber: 179,
        columnNumber: 10
    }, this);
}
function ProjectsHub(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(51);
    if ($[0] !== "77326460daeb6ab524529e08a6dd1f407a0d0e9d0b5ab9fb402e710604f3e661") {
        for(let $i = 0; $i < 51; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "77326460daeb6ab524529e08a6dd1f407a0d0e9d0b5ab9fb402e710604f3e661";
    }
    const { projects } = t0;
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = new Set();
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const [activePlatforms, setActivePlatforms] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = new Set();
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const [activeSkills, setActiveSkills] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t2);
    let t3;
    if ($[3] !== projects) {
        t3 = extractUnique(projects, _ProjectsHubExtractUnique);
        $[3] = projects;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const platforms = t3;
    let t4;
    if ($[5] !== projects) {
        t4 = extractSkills(projects);
        $[5] = projects;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    const skills = t4;
    let t5;
    if ($[7] !== activePlatforms || $[8] !== activeSkills || $[9] !== projects || $[10] !== query) {
        const sorted = [
            ...projects
        ].sort(_ProjectsHubAnonymous);
        let t6;
        if ($[12] !== activePlatforms || $[13] !== activeSkills || $[14] !== query) {
            t6 = ({
                "ProjectsHub[sorted.filter()]": (p_0)=>{
                    if (query.trim()) {
                        const q = query.toLowerCase();
                        const haystack = [
                            p_0.title,
                            p_0.tagline,
                            ...p_0.techStack ?? [],
                            p_0.industry,
                            p_0.platform,
                            p_0.projectType
                        ].filter(Boolean).join(" ").toLowerCase();
                        if (!haystack.includes(q)) {
                            return false;
                        }
                    }
                    if (activePlatforms.size > 0) {
                        const pPlatform = (p_0.platform ?? p_0.projectType ?? p_0.industry ?? "").trim();
                        if (!activePlatforms.has(pPlatform)) {
                            return false;
                        }
                    }
                    if (activeSkills.size > 0) {
                        const pSkills = new Set((p_0.techStack ?? []).map(_ProjectsHubSortedFilterAnonymous));
                        const hasAny = Array.from(activeSkills).some({
                            "ProjectsHub[sorted.filter() > (anonymous)()]": (s_0)=>pSkills.has(s_0)
                        }["ProjectsHub[sorted.filter() > (anonymous)()]"]);
                        if (!hasAny) {
                            return false;
                        }
                    }
                    return true;
                }
            })["ProjectsHub[sorted.filter()]"];
            $[12] = activePlatforms;
            $[13] = activeSkills;
            $[14] = query;
            $[15] = t6;
        } else {
            t6 = $[15];
        }
        t5 = sorted.filter(t6);
        $[7] = activePlatforms;
        $[8] = activeSkills;
        $[9] = projects;
        $[10] = query;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    const filtered = t5;
    let t6;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = ({
            "ProjectsHub[togglePlatform]": (p_1)=>{
                setActivePlatforms({
                    "ProjectsHub[togglePlatform > setActivePlatforms()]": (prev)=>{
                        const next = new Set(prev);
                        if (next.has(p_1)) {
                            next.delete(p_1);
                        } else {
                            next.add(p_1);
                        }
                        return next;
                    }
                }["ProjectsHub[togglePlatform > setActivePlatforms()]"]);
            }
        })["ProjectsHub[togglePlatform]"];
        $[16] = t6;
    } else {
        t6 = $[16];
    }
    const togglePlatform = t6;
    let t7;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = ({
            "ProjectsHub[toggleSkill]": (s_1)=>{
                setActiveSkills({
                    "ProjectsHub[toggleSkill > setActiveSkills()]": (prev_0)=>{
                        const next_0 = new Set(prev_0);
                        if (next_0.has(s_1)) {
                            next_0.delete(s_1);
                        } else {
                            next_0.add(s_1);
                        }
                        return next_0;
                    }
                }["ProjectsHub[toggleSkill > setActiveSkills()]"]);
            }
        })["ProjectsHub[toggleSkill]"];
        $[17] = t7;
    } else {
        t7 = $[17];
    }
    const toggleSkill = t7;
    let t8;
    if ($[18] !== activePlatforms || $[19] !== activeSkills || $[20] !== query) {
        t8 = query.trim() || activePlatforms.size > 0 || activeSkills.size > 0;
        $[18] = activePlatforms;
        $[19] = activeSkills;
        $[20] = query;
        $[21] = t8;
    } else {
        t8 = $[21];
    }
    const hasActiveFilters = t8;
    let t9;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = ({
            "ProjectsHub[clearAll]": ()=>{
                setQuery("");
                setActivePlatforms(new Set());
                setActiveSkills(new Set());
            }
        })["ProjectsHub[clearAll]"];
        $[22] = t9;
    } else {
        t9 = $[22];
    }
    const clearAll = t9;
    let t10;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border-b border-purple-500/10 px-5 py-12 md:py-16",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-5xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-mono text-xs font-semibold uppercase tracking-[0.2em] text-purple-400",
                        children: "Portfolio"
                    }, void 0, false, {
                        fileName: "[project]/cv-tem/src/components/portfolio/projects-hub.tsx",
                        lineNumber: 347,
                        columnNumber: 113
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "mt-2 font-display text-3xl font-bold gradient-text md:text-5xl",
                        children: "Projects"
                    }, void 0, false, {
                        fileName: "[project]/cv-tem/src/components/portfolio/projects-hub.tsx",
                        lineNumber: 347,
                        columnNumber: 216
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground",
                        children: "A curated collection of games, interactive experiences, and technical projects."
                    }, void 0, false, {
                        fileName: "[project]/cv-tem/src/components/portfolio/projects-hub.tsx",
                        lineNumber: 347,
                        columnNumber: 308
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/cv-tem/src/components/portfolio/projects-hub.tsx",
                lineNumber: 347,
                columnNumber: 78
            }, this)
        }, void 0, false, {
            fileName: "[project]/cv-tem/src/components/portfolio/projects-hub.tsx",
            lineNumber: 347,
            columnNumber: 11
        }, this);
        $[23] = t10;
    } else {
        t10 = $[23];
    }
    let t11;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
            className: "absolute left-3 top-1/2 size-4 -translate-y-1/2 text-purple-400/60"
        }, void 0, false, {
            fileName: "[project]/cv-tem/src/components/portfolio/projects-hub.tsx",
            lineNumber: 354,
            columnNumber: 11
        }, this);
        $[24] = t11;
    } else {
        t11 = $[24];
    }
    let t12;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = ({
            "ProjectsHub[<input>.onChange]": (e)=>setQuery(e.target.value)
        })["ProjectsHub[<input>.onChange]"];
        $[25] = t12;
    } else {
        t12 = $[25];
    }
    let t13;
    let t14;
    if ($[26] !== query) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "text",
            value: query,
            onChange: t12,
            placeholder: "Search projects...",
            className: "w-full rounded-lg bg-transparent py-2.5 pl-10 pr-10 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none"
        }, void 0, false, {
            fileName: "[project]/cv-tem/src/components/portfolio/projects-hub.tsx",
            lineNumber: 371,
            columnNumber: 11
        }, this);
        t14 = query && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: {
                "ProjectsHub[<button>.onClick]": ()=>setQuery("")
            }["ProjectsHub[<button>.onClick]"],
            className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                className: "size-4"
            }, void 0, false, {
                fileName: "[project]/cv-tem/src/components/portfolio/projects-hub.tsx",
                lineNumber: 374,
                columnNumber: 139
            }, this)
        }, void 0, false, {
            fileName: "[project]/cv-tem/src/components/portfolio/projects-hub.tsx",
            lineNumber: 372,
            columnNumber: 20
        }, this);
        $[26] = query;
        $[27] = t13;
        $[28] = t14;
    } else {
        t13 = $[27];
        t14 = $[28];
    }
    let t15;
    if ($[29] !== t13 || $[30] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative rounded-lg bg-white/5 border border-purple-500/20 focus-within:border-purple-500/40 focus-within:shadow-[0_0_20px_rgba(168,85,247,0.15)] transition-all",
            children: [
                t11,
                t13,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/cv-tem/src/components/portfolio/projects-hub.tsx",
            lineNumber: 384,
            columnNumber: 11
        }, this);
        $[29] = t13;
        $[30] = t14;
        $[31] = t15;
    } else {
        t15 = $[31];
    }
    let t16;
    if ($[32] !== activePlatforms || $[33] !== platforms) {
        t16 = platforms.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mb-2 font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground",
                    children: "Platform"
                }, void 0, false, {
                    fileName: "[project]/cv-tem/src/components/portfolio/projects-hub.tsx",
                    lineNumber: 393,
                    columnNumber: 40
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap gap-2",
                    children: platforms.map({
                        "ProjectsHub[platforms.map()]": (p_2)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterPill, {
                                label: p_2,
                                active: activePlatforms.has(p_2),
                                onClick: {
                                    "ProjectsHub[platforms.map() > <FilterPill>.onClick]": ()=>togglePlatform(p_2)
                                }["ProjectsHub[platforms.map() > <FilterPill>.onClick]"]
                            }, p_2, false, {
                                fileName: "[project]/cv-tem/src/components/portfolio/projects-hub.tsx",
                                lineNumber: 394,
                                columnNumber: 50
                            }, this)
                    }["ProjectsHub[platforms.map()]"])
                }, void 0, false, {
                    fileName: "[project]/cv-tem/src/components/portfolio/projects-hub.tsx",
                    lineNumber: 393,
                    columnNumber: 151
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/cv-tem/src/components/portfolio/projects-hub.tsx",
            lineNumber: 393,
            columnNumber: 35
        }, this);
        $[32] = activePlatforms;
        $[33] = platforms;
        $[34] = t16;
    } else {
        t16 = $[34];
    }
    let t17;
    if ($[35] !== activeSkills || $[36] !== skills) {
        t17 = skills.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mb-2 font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground",
                    children: "Skills"
                }, void 0, false, {
                    fileName: "[project]/cv-tem/src/components/portfolio/projects-hub.tsx",
                    lineNumber: 406,
                    columnNumber: 37
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap gap-2",
                    children: skills.map({
                        "ProjectsHub[skills.map()]": (s_2)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterPill, {
                                label: s_2,
                                active: activeSkills.has(s_2),
                                onClick: {
                                    "ProjectsHub[skills.map() > <FilterPill>.onClick]": ()=>toggleSkill(s_2)
                                }["ProjectsHub[skills.map() > <FilterPill>.onClick]"]
                            }, s_2, false, {
                                fileName: "[project]/cv-tem/src/components/portfolio/projects-hub.tsx",
                                lineNumber: 407,
                                columnNumber: 47
                            }, this)
                    }["ProjectsHub[skills.map()]"])
                }, void 0, false, {
                    fileName: "[project]/cv-tem/src/components/portfolio/projects-hub.tsx",
                    lineNumber: 406,
                    columnNumber: 146
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/cv-tem/src/components/portfolio/projects-hub.tsx",
            lineNumber: 406,
            columnNumber: 32
        }, this);
        $[35] = activeSkills;
        $[36] = skills;
        $[37] = t17;
    } else {
        t17 = $[37];
    }
    let t18;
    if ($[38] !== filtered.length || $[39] !== hasActiveFilters) {
        t18 = hasActiveFilters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "font-mono text-xs text-muted-foreground/60",
                    children: [
                        filtered.length,
                        " project",
                        filtered.length !== 1 ? "s" : "",
                        " ",
                        "found"
                    ]
                }, void 0, true, {
                    fileName: "[project]/cv-tem/src/components/portfolio/projects-hub.tsx",
                    lineNumber: 419,
                    columnNumber: 72
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: clearAll,
                    className: "font-mono text-xs text-purple-400 hover:text-purple-300 transition-colors",
                    children: "Clear filters"
                }, void 0, false, {
                    fileName: "[project]/cv-tem/src/components/portfolio/projects-hub.tsx",
                    lineNumber: 419,
                    columnNumber: 203
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/cv-tem/src/components/portfolio/projects-hub.tsx",
            lineNumber: 419,
            columnNumber: 31
        }, this);
        $[38] = filtered.length;
        $[39] = hasActiveFilters;
        $[40] = t18;
    } else {
        t18 = $[40];
    }
    let t19;
    if ($[41] !== t15 || $[42] !== t16 || $[43] !== t17 || $[44] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border-b border-purple-500/10 px-5 py-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-5xl space-y-5",
                children: [
                    t15,
                    t16,
                    t17,
                    t18
                ]
            }, void 0, true, {
                fileName: "[project]/cv-tem/src/components/portfolio/projects-hub.tsx",
                lineNumber: 428,
                columnNumber: 68
            }, this)
        }, void 0, false, {
            fileName: "[project]/cv-tem/src/components/portfolio/projects-hub.tsx",
            lineNumber: 428,
            columnNumber: 11
        }, this);
        $[41] = t15;
        $[42] = t16;
        $[43] = t17;
        $[44] = t18;
        $[45] = t19;
    } else {
        t19 = $[45];
    }
    let t20;
    if ($[46] !== filtered) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-5 py-8 md:py-12",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-5xl",
                children: filtered.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3",
                    children: filtered.map(_ProjectsHubFilteredMap)
                }, void 0, false, {
                    fileName: "[project]/cv-tem/src/components/portfolio/projects-hub.tsx",
                    lineNumber: 439,
                    columnNumber: 105
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center justify-center py-20 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-mono text-lg text-muted-foreground",
                            children: "No projects match your filters"
                        }, void 0, false, {
                            fileName: "[project]/cv-tem/src/components/portfolio/projects-hub.tsx",
                            lineNumber: 439,
                            columnNumber: 300
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: clearAll,
                            className: "gradient-btn mt-4 text-sm",
                            children: "Clear all filters"
                        }, void 0, false, {
                            fileName: "[project]/cv-tem/src/components/portfolio/projects-hub.tsx",
                            lineNumber: 439,
                            columnNumber: 389
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/cv-tem/src/components/portfolio/projects-hub.tsx",
                    lineNumber: 439,
                    columnNumber: 223
                }, this)
            }, void 0, false, {
                fileName: "[project]/cv-tem/src/components/portfolio/projects-hub.tsx",
                lineNumber: 439,
                columnNumber: 47
            }, this)
        }, void 0, false, {
            fileName: "[project]/cv-tem/src/components/portfolio/projects-hub.tsx",
            lineNumber: 439,
            columnNumber: 11
        }, this);
        $[46] = filtered;
        $[47] = t20;
    } else {
        t20 = $[47];
    }
    let t21;
    if ($[48] !== t19 || $[49] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen",
            children: [
                t10,
                t19,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/cv-tem/src/components/portfolio/projects-hub.tsx",
            lineNumber: 447,
            columnNumber: 11
        }, this);
        $[48] = t19;
        $[49] = t20;
        $[50] = t21;
    } else {
        t21 = $[50];
    }
    return t21;
}
_s(ProjectsHub, "RHkLuYp4qiV2BY/QxPgQRw6jeAQ=");
_c2 = ProjectsHub;
function _ProjectsHubFilteredMap(project) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProjectCard, {
        project: project
    }, project.id, false, {
        fileName: "[project]/cv-tem/src/components/portfolio/projects-hub.tsx",
        lineNumber: 457,
        columnNumber: 10
    }, this);
}
function _ProjectsHubSortedFilterAnonymous(s) {
    return s.trim();
}
function _ProjectsHubAnonymous(a, b) {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
}
function _ProjectsHubExtractUnique(p) {
    return p.platform ?? p.projectType ?? p.industry;
}
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "FilterPill");
__turbopack_context__.k.register(_c1, "ProjectCard");
__turbopack_context__.k.register(_c2, "ProjectsHub");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/cv-tem/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Search
]);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tem/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m21 21-4.34-4.34",
            key: "14j7rj"
        }
    ],
    [
        "circle",
        {
            cx: "11",
            cy: "11",
            r: "8",
            key: "4ej97u"
        }
    ]
];
const Search = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("search", __iconNode);
;
 //# sourceMappingURL=search.js.map
}),
"[project]/cv-tem/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Search",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tem/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript)");
}),
"[project]/cv-tem/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "X",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cv$2d$tem$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cv-tem/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=cv-tem_6f7e5583._.js.map