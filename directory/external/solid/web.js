import '../../require.js';
import '../../exports.js';
import './solid.js';
import './solid.js';
define(de[2], he([1, 0, 13, 13]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.isServer =
					e.isDev =
					e.SVGNamespace =
					e.SVGElements =
					e.Properties =
					e.DelegatedEvents =
					e.DOMElements =
					e.ChildProperties =
					e.Aliases =
					e.untrack =
					e.mergeProps =
					e.memo =
					e.getOwner =
					e.effect =
					e.createComponent =
					e.Switch =
					e.SuspenseList =
					e.Suspense =
					e.Show =
					e.Match =
					e.Index =
					e.For =
					e.ErrorBoundary =
						void 0),
				(e.getPropAlias = u),
				(e.reconcileArrays = g),
				(e.render = o),
				(e.template = f),
				(e.delegateEvents = b),
				(e.clearDelegatedEvents = s),
				(e.setAttribute = l),
				(e.setAttributeNS = y),
				(e.className = $),
				(e.addEventListener = v),
				(e.classList = S),
				(e.style = I),
				(e.spread = T),
				(e.dynamicProperty = P),
				(e.innerHTML = k),
				(e.use = L),
				(e.insert = D),
				(e.assign = M),
				(e.hydrate$1 = N),
				(e.getNextElement = A),
				(e.getNextMatch = R),
				(e.getNextMarker = O),
				(e.runHydrationEvents = B),
				(e.toPropertyName = U),
				(e.toggleClassKey = z),
				(e.assignProp = F),
				(e.eventHandler = x),
				(e.insertExpression = H),
				(e.normalizeIncomingArray = q),
				(e.appendNodes = V),
				(e.cleanChildren = G),
				(e.gatherHydratable = K),
				(e.getHydrationKey = J),
				(e.NoHydration = W),
				(e.Hydration = X),
				(e.Assets = Y),
				(e.HydrationScript = ie),
				(e.generateHydrationScript = ne),
				(e.getAssets = ee),
				(e.useAssets = _),
				(e.throwInBrowser = te),
				(e.renderToString = Q),
				(e.renderToStringAsync = Z),
				(e.renderToStream = se),
				(e.ssr = re),
				(e.ssrElement = le),
				(e.ssrClassList = oe),
				(e.ssrStyle = ae),
				(e.ssrAttribute = pe),
				(e.ssrHydrationKey = $e),
				(e.resolveSSRNode = ye),
				(e.escape = ue),
				(e.ssrSpread = fe),
				(e.createElement = be),
				(e.Portal = Le),
				(e.Dynamic = Fe);
			const w = window.trustedTypes?.createPolicy("solidjs", {
				createHTML: (Oe) => Oe,
			});
			Object.defineProperty(e, "ErrorBoundary", {
				enumerable: !0,
				get: function () {
					return i.ErrorBoundary;
				},
			}),
				Object.defineProperty(e, "For", {
					enumerable: !0,
					get: function () {
						return i.For;
					},
				}),
				Object.defineProperty(e, "Index", {
					enumerable: !0,
					get: function () {
						return i.Index;
					},
				}),
				Object.defineProperty(e, "Match", {
					enumerable: !0,
					get: function () {
						return i.Match;
					},
				}),
				Object.defineProperty(e, "Show", {
					enumerable: !0,
					get: function () {
						return i.Show;
					},
				}),
				Object.defineProperty(e, "Suspense", {
					enumerable: !0,
					get: function () {
						return i.Suspense;
					},
				}),
				Object.defineProperty(e, "SuspenseList", {
					enumerable: !0,
					get: function () {
						return i.SuspenseList;
					},
				}),
				Object.defineProperty(e, "Switch", {
					enumerable: !0,
					get: function () {
						return i.Switch;
					},
				}),
				Object.defineProperty(e, "createComponent", {
					enumerable: !0,
					get: function () {
						return i.createComponent;
					},
				}),
				Object.defineProperty(e, "effect", {
					enumerable: !0,
					get: function () {
						return i.createRenderEffect;
					},
				}),
				Object.defineProperty(e, "getOwner", {
					enumerable: !0,
					get: function () {
						return i.getOwner;
					},
				}),
				Object.defineProperty(e, "memo", {
					enumerable: !0,
					get: function () {
						return i.createMemo;
					},
				}),
				Object.defineProperty(e, "mergeProps", {
					enumerable: !0,
					get: function () {
						return i.mergeProps;
					},
				}),
				Object.defineProperty(e, "untrack", {
					enumerable: !0,
					get: function () {
						return i.untrack;
					},
				});
			const E = [
					"allowfullscreen",
					"async",
					"autofocus",
					"autoplay",
					"checked",
					"controls",
					"default",
					"disabled",
					"formnovalidate",
					"hidden",
					"indeterminate",
					"ismap",
					"loop",
					"multiple",
					"muted",
					"nomodule",
					"novalidate",
					"open",
					"playsinline",
					"readonly",
					"required",
					"reversed",
					"seamless",
					"selected",
				],
				C = new Set([
					"className",
					"value",
					"readOnly",
					"formNoValidate",
					"isMap",
					"noModule",
					"playsInline",
					...E,
				]);
			e.Properties = C;
			const d = new Set(["innerHTML", "textContent", "innerText", "children"]);
			e.ChildProperties = d;
			const m = Object.assign(Object.create(null), {
				className: "class",
				htmlFor: "for",
			});
			e.Aliases = m;
			const r = Object.assign(Object.create(null), {
				class: "className",
				formnovalidate: { $: "formNoValidate", BUTTON: 1, INPUT: 1 },
				ismap: { $: "isMap", IMG: 1 },
				nomodule: { $: "noModule", SCRIPT: 1 },
				playsinline: { $: "playsInline", VIDEO: 1 },
				readonly: { $: "readOnly", INPUT: 1, TEXTAREA: 1 },
			});
			function u(Oe, xe) {
				const He = r[Oe];
				return typeof He == "object" ? (He[xe] ? He.$ : void 0) : He;
			}
			const a = new Set([
				"beforeinput",
				"click",
				"dblclick",
				"contextmenu",
				"focusin",
				"focusout",
				"input",
				"keydown",
				"keyup",
				"mousedown",
				"mousemove",
				"mouseout",
				"mouseover",
				"mouseup",
				"pointerdown",
				"pointermove",
				"pointerout",
				"pointerover",
				"pointerup",
				"touchend",
				"touchmove",
				"touchstart",
			]);
			e.DelegatedEvents = a;
			const h = new Set([
				"altGlyph",
				"altGlyphDef",
				"altGlyphItem",
				"animate",
				"animateColor",
				"animateMotion",
				"animateTransform",
				"circle",
				"clipPath",
				"color-profile",
				"cursor",
				"defs",
				"desc",
				"ellipse",
				"feBlend",
				"feColorMatrix",
				"feComponentTransfer",
				"feComposite",
				"feConvolveMatrix",
				"feDiffuseLighting",
				"feDisplacementMap",
				"feDistantLight",
				"feFlood",
				"feFuncA",
				"feFuncB",
				"feFuncG",
				"feFuncR",
				"feGaussianBlur",
				"feImage",
				"feMerge",
				"feMergeNode",
				"feMorphology",
				"feOffset",
				"fePointLight",
				"feSpecularLighting",
				"feSpotLight",
				"feTile",
				"feTurbulence",
				"filter",
				"font",
				"font-face",
				"font-face-format",
				"font-face-name",
				"font-face-src",
				"font-face-uri",
				"foreignObject",
				"g",
				"glyph",
				"glyphRef",
				"hkern",
				"image",
				"line",
				"linearGradient",
				"marker",
				"mask",
				"metadata",
				"missing-glyph",
				"mpath",
				"path",
				"pattern",
				"polygon",
				"polyline",
				"radialGradient",
				"rect",
				"set",
				"stop",
				"svg",
				"switch",
				"symbol",
				"text",
				"textPath",
				"tref",
				"tspan",
				"use",
				"view",
				"vkern",
			]);
			e.SVGElements = h;
			const c = {
				xlink: "http://www.w3.org/1999/xlink",
				xml: "http://www.w3.org/XML/1998/namespace",
			};
			e.SVGNamespace = c;
			const n = new Set([
				"html",
				"base",
				"head",
				"link",
				"meta",
				"style",
				"title",
				"body",
				"address",
				"article",
				"aside",
				"footer",
				"header",
				"main",
				"nav",
				"section",
				"body",
				"blockquote",
				"dd",
				"div",
				"dl",
				"dt",
				"figcaption",
				"figure",
				"hr",
				"li",
				"ol",
				"p",
				"pre",
				"ul",
				"a",
				"abbr",
				"b",
				"bdi",
				"bdo",
				"br",
				"cite",
				"code",
				"data",
				"dfn",
				"em",
				"i",
				"kbd",
				"mark",
				"q",
				"rp",
				"rt",
				"ruby",
				"s",
				"samp",
				"small",
				"span",
				"strong",
				"sub",
				"sup",
				"time",
				"u",
				"var",
				"wbr",
				"area",
				"audio",
				"img",
				"map",
				"track",
				"video",
				"embed",
				"iframe",
				"object",
				"param",
				"picture",
				"portal",
				"source",
				"svg",
				"math",
				"canvas",
				"noscript",
				"script",
				"del",
				"ins",
				"caption",
				"col",
				"colgroup",
				"table",
				"tbody",
				"td",
				"tfoot",
				"th",
				"thead",
				"tr",
				"button",
				"datalist",
				"fieldset",
				"form",
				"input",
				"label",
				"legend",
				"meter",
				"optgroup",
				"option",
				"output",
				"progress",
				"select",
				"textarea",
				"details",
				"dialog",
				"menu",
				"summary",
				"details",
				"slot",
				"template",
				"acronym",
				"applet",
				"basefont",
				"bgsound",
				"big",
				"blink",
				"center",
				"content",
				"dir",
				"font",
				"frame",
				"frameset",
				"hgroup",
				"image",
				"keygen",
				"marquee",
				"menuitem",
				"nobr",
				"noembed",
				"noframes",
				"plaintext",
				"rb",
				"rtc",
				"shadow",
				"spacer",
				"strike",
				"tt",
				"xmp",
				"a",
				"abbr",
				"acronym",
				"address",
				"applet",
				"area",
				"article",
				"aside",
				"audio",
				"b",
				"base",
				"basefont",
				"bdi",
				"bdo",
				"bgsound",
				"big",
				"blink",
				"blockquote",
				"body",
				"br",
				"button",
				"canvas",
				"caption",
				"center",
				"cite",
				"code",
				"col",
				"colgroup",
				"content",
				"data",
				"datalist",
				"dd",
				"del",
				"details",
				"dfn",
				"dialog",
				"dir",
				"div",
				"dl",
				"dt",
				"em",
				"embed",
				"fieldset",
				"figcaption",
				"figure",
				"font",
				"footer",
				"form",
				"frame",
				"frameset",
				"head",
				"header",
				"hgroup",
				"hr",
				"html",
				"i",
				"iframe",
				"image",
				"img",
				"input",
				"ins",
				"kbd",
				"keygen",
				"label",
				"legend",
				"li",
				"link",
				"main",
				"map",
				"mark",
				"marquee",
				"menu",
				"menuitem",
				"meta",
				"meter",
				"nav",
				"nobr",
				"noembed",
				"noframes",
				"noscript",
				"object",
				"ol",
				"optgroup",
				"option",
				"output",
				"p",
				"param",
				"picture",
				"plaintext",
				"portal",
				"pre",
				"progress",
				"q",
				"rb",
				"rp",
				"rt",
				"rtc",
				"ruby",
				"s",
				"samp",
				"script",
				"section",
				"select",
				"shadow",
				"slot",
				"small",
				"source",
				"spacer",
				"span",
				"strike",
				"strong",
				"style",
				"sub",
				"summary",
				"sup",
				"table",
				"tbody",
				"td",
				"template",
				"textarea",
				"tfoot",
				"th",
				"thead",
				"time",
				"title",
				"tr",
				"track",
				"tt",
				"u",
				"ul",
				"var",
				"video",
				"wbr",
				"xmp",
				"input",
			]);
			e.DOMElements = n;
			function g(Oe, xe, He) {
				let Ke = He.length,
					Je = xe.length,
					Te = Ke,
					Ee = 0,
					Ie = 0,
					Be = xe[Je - 1].nextSibling,
					Se = null;
				for (; Ee < Je || Ie < Te; ) {
					if (xe[Ee] === He[Ie]) {
						Ee++, Ie++;
						continue;
					}
					for (; xe[Je - 1] === He[Te - 1]; ) Je--, Te--;
					if (Je === Ee) {
						const ke =
							Te < Ke ? (Ie ? He[Ie - 1].nextSibling : He[Te - Ie]) : Be;
						for (; Ie < Te; ) Oe.insertBefore(He[Ie++], ke);
					} else if (Te === Ie)
						for (; Ee < Je; ) (!Se || !Se.has(xe[Ee])) && xe[Ee].remove(), Ee++;
					else if (xe[Ee] === He[Te - 1] && He[Ie] === xe[Je - 1]) {
						const ke = xe[--Je].nextSibling;
						Oe.insertBefore(He[Ie++], xe[Ee++].nextSibling),
							Oe.insertBefore(He[--Te], ke),
							(xe[Je] = He[Te]);
					} else {
						if (!Se) {
							Se = new Map();
							let Ue = Ie;
							for (; Ue < Te; ) Se.set(He[Ue], Ue++);
						}
						const ke = Se.get(xe[Ee]);
						if (ke != null)
							if (Ie < ke && ke < Te) {
								let Ue = Ee,
									qe = 1,
									Ae;
								for (
									;
									++Ue < Je &&
									Ue < Te &&
									!((Ae = Se.get(xe[Ue])) == null || Ae !== ke + qe);
								)
									qe++;
								if (qe > ke - Ie) {
									const Me = xe[Ee];
									for (; Ie < ke; ) Oe.insertBefore(He[Ie++], Me);
								} else Oe.replaceChild(He[Ie++], xe[Ee++]);
							} else Ee++;
						else xe[Ee++].remove();
					}
				}
			}
			const p = "_$DX_DELEGATE";
			function o(Oe, xe, He, Ke = {}) {
				let Je;
				return (
					(0, t.createRoot)((Te) => {
						(Je = Te),
							xe === document
								? Oe()
								: D(xe, Oe(), xe.firstChild ? null : void 0, He);
					}, Ke.owner),
					() => {
						Je(), (xe.textContent = "");
					}
				);
			}
			function f(Oe, xe, He) {
				let Ke;
				const Je = () => {
						const Ee = document.createElement("template");
						return (
							(Ee.innerHTML = w ? w.createHTML(Oe) : Oe),
							He ? Ee.content.firstChild.firstChild : Ee.content.firstChild
						);
					},
					Te = xe
						? () => (Ke || (Ke = Je())).cloneNode(!0)
						: () =>
								(0, t.untrack)(() =>
									document.importNode(Ke || (Ke = Je()), !0),
								);
				return (Te.cloneNode = Te), Te;
			}
			function b(Oe, xe = window.document) {
				const He = xe[p] || (xe[p] = new Set());
				for (let Ke = 0, Je = Oe.length; Ke < Je; Ke++) {
					const Te = Oe[Ke];
					He.has(Te) || (He.add(Te), xe.addEventListener(Te, x));
				}
			}
			function s(Oe = window.document) {
				if (Oe[p]) {
					for (let xe of Oe[p].keys()) Oe.removeEventListener(xe, x);
					delete Oe[p];
				}
			}
			function l(Oe, xe, He) {
				He == null ? Oe.removeAttribute(xe) : Oe.setAttribute(xe, He);
			}
			function y(Oe, xe, He, Ke) {
				Ke == null
					? Oe.removeAttributeNS(xe, He)
					: Oe.setAttributeNS(xe, He, Ke);
			}
			function $(Oe, xe) {
				xe == null ? Oe.removeAttribute("class") : (Oe.className = xe);
			}
			function v(Oe, xe, He, Ke) {
				if (Ke)
					Array.isArray(He)
						? ((Oe[`$$${xe}`] = He[0]), (Oe[`$$${xe}Data`] = He[1]))
						: (Oe[`$$${xe}`] = He);
				else if (Array.isArray(He)) {
					const Je = He[0];
					Oe.addEventListener(xe, (He[0] = (Te) => Je.call(Oe, He[1], Te)));
				} else Oe.addEventListener(xe, He);
			}
			function S(Oe, xe, He = {}) {
				const Ke = Object.keys(xe || {}),
					Je = Object.keys(He);
				let Te, Ee;
				for (Te = 0, Ee = Je.length; Te < Ee; Te++) {
					const Ie = Je[Te];
					!Ie || Ie === "undefined" || xe[Ie] || (z(Oe, Ie, !1), delete He[Ie]);
				}
				for (Te = 0, Ee = Ke.length; Te < Ee; Te++) {
					const Ie = Ke[Te],
						Be = !!xe[Ie];
					!Ie ||
						Ie === "undefined" ||
						He[Ie] === Be ||
						!Be ||
						(z(Oe, Ie, !0), (He[Ie] = Be));
				}
				return He;
			}
			function I(Oe, xe, He) {
				if (!xe) return He ? l(Oe, "style") : xe;
				const Ke = Oe.style;
				if (typeof xe == "string") return (Ke.cssText = xe);
				typeof He == "string" && (Ke.cssText = He = void 0),
					He || (He = {}),
					xe || (xe = {});
				let Je, Te;
				for (Te in He) xe[Te] == null && Ke.removeProperty(Te), delete He[Te];
				for (Te in xe)
					(Je = xe[Te]),
						Je !== He[Te] && (Ke.setProperty(Te, Je), (He[Te] = Je));
				return He;
			}
			function T(Oe, xe = {}, He, Ke) {
				const Je = {};
				return (
					Ke ||
						(0, t.createRenderEffect)(
							() => (Je.children = H(Oe, xe.children, Je.children)),
						),
					(0, t.createRenderEffect)(() => xe.ref && xe.ref(Oe)),
					(0, t.createRenderEffect)(() => M(Oe, xe, He, !0, Je, !0)),
					Je
				);
			}
			function P(Oe, xe) {
				const He = Oe[xe];
				return (
					Object.defineProperty(Oe, xe, {
						get() {
							return He();
						},
						enumerable: !0,
					}),
					Oe
				);
			}
			function k(Oe, xe) {
				!t.sharedConfig.context && (Oe.innerHTML = w ? w.createHTML(xe) : xe);
			}
			function L(Oe, xe, He) {
				return (0, t.untrack)(() => Oe(xe, He));
			}
			function D(Oe, xe, He, Ke) {
				if ((He !== void 0 && !Ke && (Ke = []), typeof xe != "function"))
					return H(Oe, xe, Ke, He);
				(0, t.createRenderEffect)((Je) => H(Oe, xe(), Je, He), Ke);
			}
			function M(Oe, xe, He, Ke, Je = {}, Te = !1) {
				xe || (xe = {});
				for (const Ee in Je)
					if (!(Ee in xe)) {
						if (Ee === "children") continue;
						Je[Ee] = F(Oe, Ee, null, Je[Ee], He, Te);
					}
				for (const Ee in xe) {
					if (Ee === "children") {
						Ke || H(Oe, xe.children);
						continue;
					}
					const Ie = xe[Ee];
					Je[Ee] = F(Oe, Ee, Ie, Je[Ee], He, Te);
				}
			}
			function N(Oe, xe, He = {}) {
				(t.sharedConfig.completed = globalThis._$HY.completed),
					(t.sharedConfig.events = globalThis._$HY.events),
					(t.sharedConfig.load = globalThis._$HY.load),
					(t.sharedConfig.gather = (Je) => K(xe, Je)),
					(t.sharedConfig.registry = new Map()),
					(t.sharedConfig.context = { id: He.renderId || "", count: 0 }),
					K(xe, He.renderId);
				const Ke = o(Oe, xe, [...xe.childNodes], He);
				return (t.sharedConfig.context = null), Ke;
			}
			function A(Oe) {
				let xe, He;
				if (
					!t.sharedConfig.context ||
					!(xe = t.sharedConfig.registry.get((He = J())))
				) {
					if (
						(t.sharedConfig.context &&
							console.warn("Unable to find DOM nodes for hydration key:", He),
						!Oe)
					)
						throw new Error(
							"Unrecoverable Hydration Mismatch. No template for key: " + He,
						);
					return Oe();
				}
				return (
					t.sharedConfig.completed && t.sharedConfig.completed.add(xe),
					t.sharedConfig.registry.delete(He),
					xe
				);
			}
			function R(Oe, xe) {
				for (; Oe && Oe.localName !== xe; ) Oe = Oe.nextSibling;
				return Oe;
			}
			function O(Oe) {
				let xe = Oe,
					He = 0,
					Ke = [];
				if (t.sharedConfig.context)
					for (; xe; ) {
						if (xe.nodeType === 8) {
							const Je = xe.nodeValue;
							if (Je === "#") He++;
							else if (Je === "/") {
								if (He === 0) return [xe, Ke];
								He--;
							}
						}
						Ke.push(xe), (xe = xe.nextSibling);
					}
				return [xe, Ke];
			}
			function B() {
				t.sharedConfig.events &&
					!t.sharedConfig.events.queued &&
					(queueMicrotask(() => {
						const { completed: Oe, events: xe } = t.sharedConfig;
						for (xe.queued = !1; xe.length; ) {
							const [He, Ke] = xe[0];
							if (!Oe.has(He)) return;
							x(Ke), xe.shift();
						}
					}),
					(t.sharedConfig.events.queued = !0));
			}
			function U(Oe) {
				return Oe.toLowerCase().replace(/-([a-z])/g, (xe, He) =>
					He.toUpperCase(),
				);
			}
			function z(Oe, xe, He) {
				const Ke = xe.trim().split(/\s+/);
				for (let Je = 0, Te = Ke.length; Je < Te; Je++)
					Oe.classList.toggle(Ke[Je], He);
			}
			function F(Oe, xe, He, Ke, Je, Te) {
				let Ee, Ie, Be, Se, ke;
				if (xe === "style") return I(Oe, He, Ke);
				if (xe === "classList") return S(Oe, He, Ke);
				if (He === Ke) return Ke;
				if (xe === "ref") Te || He(Oe);
				else if (xe.slice(0, 3) === "on:") {
					const Ue = xe.slice(3);
					Ke && Oe.removeEventListener(Ue, Ke),
						He && Oe.addEventListener(Ue, He);
				} else if (xe.slice(0, 10) === "oncapture:") {
					const Ue = xe.slice(10);
					Ke && Oe.removeEventListener(Ue, Ke, !0),
						He && Oe.addEventListener(Ue, He, !0);
				} else if (xe.slice(0, 2) === "on") {
					const Ue = xe.slice(2).toLowerCase(),
						qe = a.has(Ue);
					if (!qe && Ke) {
						const Ae = Array.isArray(Ke) ? Ke[0] : Ke;
						Oe.removeEventListener(Ue, Ae);
					}
					(qe || He) && (v(Oe, Ue, He, qe), qe && b([Ue]));
				} else if (xe.slice(0, 5) === "attr:") l(Oe, xe.slice(5), He);
				else if (
					(ke = xe.slice(0, 5) === "prop:") ||
					(Be = d.has(xe)) ||
					(!Je && ((Se = u(xe, Oe.tagName)) || (Ie = C.has(xe)))) ||
					(Ee = Oe.nodeName.includes("-"))
				)
					ke && ((xe = xe.slice(5)), (Ie = !0)),
						xe === "class" || xe === "className"
							? $(Oe, He)
							: Ee && !Ie && !Be
								? (Oe[U(xe)] = He)
								: (Oe[Se || xe] = He);
				else {
					const Ue = Je && xe.indexOf(":") > -1 && c[xe.split(":")[0]];
					Ue ? y(Oe, Ue, xe, He) : l(Oe, m[xe] || xe, He);
				}
				return He;
			}
			function x(Oe) {
				const xe = `$$${Oe.type}`;
				let He = (Oe.composedPath && Oe.composedPath()[0]) || Oe.target;
				for (
					Oe.target !== He &&
						Object.defineProperty(Oe, "target", {
							configurable: !0,
							value: He,
						}),
						Object.defineProperty(Oe, "currentTarget", {
							configurable: !0,
							get() {
								return He || document;
							},
						}),
						t.sharedConfig.registry &&
							!t.sharedConfig.done &&
							(t.sharedConfig.done = _$HY.done = !0);
					He;
				) {
					const Ke = He[xe];
					if (Ke && !He.disabled) {
						const Je = He[`${xe}Data`];
						if (
							(Je !== void 0 ? Ke.call(He, Je, Oe) : Ke.call(He, Oe),
							Oe.cancelBubble)
						)
							return;
					}
					He = He._$host || He.parentNode || He.host;
				}
			}
			function H(Oe, xe, He, Ke, Je) {
				if (t.sharedConfig.context) {
					!He && (He = [...Oe.childNodes]);
					let Ie = [];
					for (let Be = 0; Be < He.length; Be++) {
						const Se = He[Be];
						Se.nodeType === 8 && Se.data.slice(0, 2) === "!$"
							? Se.remove()
							: Ie.push(Se);
					}
					He = Ie;
				}
				for (; typeof He == "function"; ) He = He();
				if (xe === He) return He;
				const Te = typeof xe,
					Ee = Ke !== void 0;
				if (
					((Oe = (Ee && He[0] && He[0].parentNode) || Oe),
					Te === "string" || Te === "number")
				) {
					if (t.sharedConfig.context) return He;
					if ((Te === "number" && (xe = xe.toString()), Ee)) {
						let Ie = He[0];
						Ie && Ie.nodeType === 3
							? (Ie.data = xe)
							: (Ie = document.createTextNode(xe)),
							(He = G(Oe, He, Ke, Ie));
					} else
						He !== "" && typeof He == "string"
							? (He = Oe.firstChild.data = xe)
							: (He = Oe.textContent = xe);
				} else if (xe == null || Te === "boolean") {
					if (t.sharedConfig.context) return He;
					He = G(Oe, He, Ke);
				} else {
					if (Te === "function")
						return (
							(0, t.createRenderEffect)(() => {
								let Ie = xe();
								for (; typeof Ie == "function"; ) Ie = Ie();
								He = H(Oe, Ie, He, Ke);
							}),
							() => He
						);
					if (Array.isArray(xe)) {
						const Ie = [],
							Be = He && Array.isArray(He);
						if (q(Ie, xe, He, Je))
							return (
								(0, t.createRenderEffect)(() => (He = H(Oe, Ie, He, Ke, !0))),
								() => He
							);
						if (t.sharedConfig.context) {
							if (!Ie.length) return He;
							for (let Se = 0; Se < Ie.length; Se++)
								if (Ie[Se].parentNode) return (He = Ie);
						}
						if (Ie.length === 0) {
							if (((He = G(Oe, He, Ke)), Ee)) return He;
						} else
							Be
								? He.length === 0
									? V(Oe, Ie, Ke)
									: g(Oe, He, Ie)
								: (He && G(Oe), V(Oe, Ie));
						He = Ie;
					} else if (xe instanceof Node) {
						if (t.sharedConfig.context && xe.parentNode)
							return (He = Ee ? [xe] : xe);
						if (Array.isArray(He)) {
							if (Ee) return (He = G(Oe, He, Ke, xe));
							G(Oe, He, null, xe);
						} else
							He == null || He === "" || !Oe.firstChild
								? Oe.appendChild(xe)
								: Oe.replaceChild(xe, Oe.firstChild);
						He = xe;
					} else console.warn("Unrecognized value. Skipped inserting", xe);
				}
				return He;
			}
			function q(Oe, xe, He, Ke) {
				let Je = !1;
				for (let Te = 0, Ee = xe.length; Te < Ee; Te++) {
					let Ie = xe[Te],
						Be = He && He[Te];
					if (Ie instanceof Node) Oe.push(Ie);
					else if (!(Ie == null || Ie === !0 || Ie === !1))
						if (Array.isArray(Ie)) Je = q(Oe, Ie, Be) || Je;
						else if (typeof Ie == "function")
							if (Ke) {
								for (; typeof Ie == "function"; ) Ie = Ie();
								Je =
									q(
										Oe,
										Array.isArray(Ie) ? Ie : [Ie],
										Array.isArray(Be) ? Be : [Be],
									) || Je;
							} else Oe.push(Ie), (Je = !0);
						else {
							const Se = String(Ie);
							Be && Be.nodeType === 3
								? ((Be.data = Se), Oe.push(Be))
								: Oe.push(document.createTextNode(Se));
						}
				}
				return Je;
			}
			function V(Oe, xe, He = null) {
				for (let Ke = 0, Je = xe.length; Ke < Je; Ke++)
					Oe.insertBefore(xe[Ke], He);
			}
			function G(Oe, xe, He, Ke) {
				if (He === void 0) return (Oe.textContent = "");
				const Je = Ke || document.createTextNode("");
				if (xe.length) {
					let Te = !1;
					for (let Ee = xe.length - 1; Ee >= 0; Ee--) {
						const Ie = xe[Ee];
						if (Je !== Ie) {
							const Be = Ie.parentNode === Oe;
							!Te && !Ee
								? Be
									? Oe.replaceChild(Je, Ie)
									: Oe.insertBefore(Je, He)
								: Be && Ie.remove();
						} else Te = !0;
					}
				} else Oe.insertBefore(Je, He);
				return [Je];
			}
			function K(Oe, xe) {
				const He = Oe.querySelectorAll("*[data-hk]");
				for (let Ke = 0; Ke < He.length; Ke++) {
					const Je = He[Ke],
						Te = Je.getAttribute("data-hk");
					(!xe || Te.startsWith(xe)) &&
						!t.sharedConfig.registry.has(Te) &&
						t.sharedConfig.registry.set(Te, Je);
				}
			}
			function J() {
				const Oe = t.sharedConfig.context;
				return `${Oe.id}${Oe.count++}`;
			}
			function W(Oe) {
				return t.sharedConfig.context ? void 0 : Oe.children;
			}
			function X(Oe) {
				return Oe.children;
			}
			function Y() {}
			function ie() {}
			function ne() {}
			function ee() {}
			function _() {}
			function te(Oe) {
				const xe = new Error(
					`${Oe.name} is not supported in the browser, returning undefined`,
				);
				console.error(xe);
			}
			function Q(Oe, xe) {
				te(Q);
			}
			function Z(Oe, xe) {
				te(Z);
			}
			function se(Oe, xe) {
				te(se);
			}
			function re(Oe, ...xe) {}
			function le(Oe, xe, He, Ke) {}
			function oe(Oe) {}
			function ae(Oe) {}
			function pe(Oe, xe) {}
			function $e() {}
			function ye(Oe) {}
			function ue(Oe) {}
			function fe(Oe, xe, He) {}
			const me = !1;
			e.isServer = me;
			const ve = !1;
			e.isDev = ve;
			const ge = "http://www.w3.org/2000/svg";
			function be(Oe, xe = !1) {
				return xe
					? document.createElementNS(ge, Oe)
					: document.createElement(Oe);
			}
			const Ce = (...Oe) => ((0, t.enableHydration)(), N(...Oe));
			function Le(Oe) {
				const { useShadow: xe } = Oe,
					He = document.createTextNode(""),
					Ke = () => Oe.mount || document.body,
					Je = (0, t.createMemo)(Te());
				function Te() {
					if (t.sharedConfig.context) {
						const [Ee, Ie] = (0, t.createSignal)(!1);
						return (0, t.onMount)(() => Ie(!0)), () => Ee() && Oe.children;
					} else return () => Oe.children;
				}
				return (
					(0, t.createEffect)(() => {
						const Ee = Ke();
						if (Ee instanceof HTMLHeadElement) {
							const [Ie, Be] = (0, t.createSignal)(!1),
								Se = () => Be(!0);
							(0, t.createRoot)((ke) =>
								D(Ee, () => (Ie() ? ke() : Je()), null),
							),
								(0, t.onCleanup)(Se);
						} else {
							const Ie = be(Oe.isSVG ? "g" : "div", Oe.isSVG),
								Be =
									xe && Ie.attachShadow
										? Ie.attachShadow({ mode: "open" })
										: Ie;
							Object.defineProperty(Ie, "_$host", {
								get() {
									return He.parentNode;
								},
								configurable: !0,
							}),
								D(Be, Je),
								Ee.appendChild(Ie),
								Oe.ref && Oe.ref(Ie),
								(0, t.onCleanup)(() => Ee.removeChild(Ie));
						}
					}),
					He
				);
			}
			function Fe(Oe) {
				const [xe, He] = (0, t.splitProps)(Oe, ["component"]),
					Ke = (0, t.createMemo)(() => xe.component);
				return (0, t.createMemo)(() => {
					const Je = Ke();
					switch (typeof Je) {
						case "function":
							return (
								Object.assign(Je, { [t.$DEVCOMP]: !0 }),
								(0, t.untrack)(() => Je(He))
							);
						case "string":
							const Te = h.has(Je),
								Ee = t.sharedConfig.context ? A() : be(Je, Te);
							return T(Ee, He, Te), Ee;
					}
				});
			}
		}),
		