import '../../../require.js';
import '../../../exports.js';
define(de[2194], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$jjb = t),
				(e.$kjb = i),
				(e.$ljb = w);
			async function t(E) {
				const C = navigator.usb;
				if (!C) return;
				const d = await C.requestDevice({ filters: E?.filters ?? [] });
				if (d)
					return {
						deviceClass: d.deviceClass,
						deviceProtocol: d.deviceProtocol,
						deviceSubclass: d.deviceSubclass,
						deviceVersionMajor: d.deviceVersionMajor,
						deviceVersionMinor: d.deviceVersionMinor,
						deviceVersionSubminor: d.deviceVersionSubminor,
						manufacturerName: d.manufacturerName,
						productId: d.productId,
						productName: d.productName,
						serialNumber: d.serialNumber,
						usbVersionMajor: d.usbVersionMajor,
						usbVersionMinor: d.usbVersionMinor,
						usbVersionSubminor: d.usbVersionSubminor,
						vendorId: d.vendorId,
					};
			}
			async function i(E) {
				const C = navigator.serial;
				if (!C) return;
				const d = await C.requestPort({ filters: E?.filters ?? [] });
				if (!d) return;
				const m = d.getInfo();
				return { usbVendorId: m.usbVendorId, usbProductId: m.usbProductId };
			}
			async function w(E) {
				const C = navigator.hid;
				if (!C) return;
				const d = await C.requestDevice({ filters: E?.filters ?? [] });
				if (!d.length) return;
				const m = d[0];
				return {
					opened: m.opened,
					vendorId: m.vendorId,
					productId: m.productId,
					productName: m.productName,
					collections: m.collections,
				};
			}
		}); /*! @license DOMPurify 3.0.5 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.5/LICENSE */
	const {
		entries: $a,
		setPrototypeOf: ya,
		isFrozen: za,
		getPrototypeOf: ja,
		getOwnPropertyDescriptor: Ua,
	} = Object;
	let { freeze: pr, seal: So, create: Wa } = Object,
		{ apply: ra, construct: oa } = typeof Reflect < "u" && Reflect;
	ra ||
		(ra = function (e, t, i) {
			return e.apply(t, i);
		}),
		pr ||
			(pr = function (e) {
				return e;
			}),
		So ||
			(So = function (e) {
				return e;
			}),
		oa ||
			(oa = function (e, t) {
				return new e(...t);
			});
	const qa = lo(Array.prototype.forEach),
		wa = lo(Array.prototype.pop),
		Zo = lo(Array.prototype.push),
		ta = lo(String.prototype.toLowerCase),
		aa = lo(String.prototype.toString),
		Va = lo(String.prototype.match),
		Eo = lo(String.prototype.replace),
		Ha = lo(String.prototype.indexOf),
		Ka = lo(String.prototype.trim),
		Jr = lo(RegExp.prototype.test),
		Qo = Ga(TypeError);
	function lo(ce) {
		return function (e) {
			for (
				var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), w = 1;
				w < t;
				w++
			)
				i[w - 1] = arguments[w];
			return ra(ce, e, i);
		};
	}
	function Ga(ce) {
		return function () {
			for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
				t[i] = arguments[i];
			return oa(ce, t);
		};
	}
	function qn(ce, e, t) {
		var i;
		(t = (i = t) !== null && i !== void 0 ? i : ta), ya && ya(ce, null);
		let w = e.length;
		for (; w--; ) {
			let E = e[w];
			if (typeof E == "string") {
				const C = t(E);
				C !== E && (za(e) || (e[w] = C), (E = C));
			}
			ce[E] = !0;
		}
		return ce;
	}
	function Ko(ce) {
		const e = Wa(null);
		for (const [t, i] of $a(ce)) e[t] = i;
		return e;
	}
	function ia(ce, e) {
		for (; ce !== null; ) {
			const i = Ua(ce, e);
			if (i) {
				if (i.get) return lo(i.get);
				if (typeof i.value == "function") return lo(i.value);
			}
			ce = ja(ce);
		}
		function t(i) {
			return console.warn("fallback value for", i), null;
		}
		return t;
	}
	const va = pr([
			"a",
			"abbr",
			"acronym",
			"address",
			"area",
			"article",
			"aside",
			"audio",
			"b",
			"bdi",
			"bdo",
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
			"decorator",
			"del",
			"details",
			"dfn",
			"dialog",
			"dir",
			"div",
			"dl",
			"dt",
			"element",
			"em",
			"fieldset",
			"figcaption",
			"figure",
			"font",
			"footer",
			"form",
			"h1",
			"h2",
			"h3",
			"h4",
			"h5",
			"h6",
			"head",
			"header",
			"hgroup",
			"hr",
			"html",
			"i",
			"img",
			"input",
			"ins",
			"kbd",
			"label",
			"legend",
			"li",
			"main",
			"map",
			"mark",
			"marquee",
			"menu",
			"menuitem",
			"meter",
			"nav",
			"nobr",
			"ol",
			"optgroup",
			"option",
			"output",
			"p",
			"picture",
			"pre",
			"progress",
			"q",
			"rp",
			"rt",
			"ruby",
			"s",
			"samp",
			"section",
			"select",
			"shadow",
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
			"tr",
			"track",
			"tt",
			"u",
			"ul",
			"var",
			"video",
			"wbr",
		]),
		ca = pr([
			"svg",
			"a",
			"altglyph",
			"altglyphdef",
			"altglyphitem",
			"animatecolor",
			"animatemotion",
			"animatetransform",
			"circle",
			"clippath",
			"defs",
			"desc",
			"ellipse",
			"filter",
			"font",
			"g",
			"glyph",
			"glyphref",
			"hkern",
			"image",
			"line",
			"lineargradient",
			"marker",
			"mask",
			"metadata",
			"mpath",
			"path",
			"pattern",
			"polygon",
			"polyline",
			"radialgradient",
			"rect",
			"stop",
			"style",
			"switch",
			"symbol",
			"text",
			"textpath",
			"title",
			"tref",
			"tspan",
			"view",
			"vkern",
		]),
		la = pr([
			"feBlend",
			"feColorMatrix",
			"feComponentTransfer",
			"feComposite",
			"feConvolveMatrix",
			"feDiffuseLighting",
			"feDisplacementMap",
			"feDistantLight",
			"feDropShadow",
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
		]),
		Ja = pr([
			"animate",
			"color-profile",
			"cursor",
			"discard",
			"font-face",
			"font-face-format",
			"font-face-name",
			"font-face-src",
			"font-face-uri",
			"foreignobject",
			"hatch",
			"hatchpath",
			"mesh",
			"meshgradient",
			"meshpatch",
			"meshrow",
			"missing-glyph",
			"script",
			"set",
			"solidcolor",
			"unknown",
			"use",
		]),
		ua = pr([
			"math",
			"menclose",
			"merror",
			"mfenced",
			"mfrac",
			"mglyph",
			"mi",
			"mlabeledtr",
			"mmultiscripts",
			"mn",
			"mo",
			"mover",
			"mpadded",
			"mphantom",
			"mroot",
			"mrow",
			"ms",
			"mspace",
			"msqrt",
			"mstyle",
			"msub",
			"msup",
			"msubsup",
			"mtable",
			"mtd",
			"mtext",
			"mtr",
			"munder",
			"munderover",
			"mprescripts",
		]),
		Xa = pr([
			"maction",
			"maligngroup",
			"malignmark",
			"mlongdiv",
			"mscarries",
			"mscarry",
			"msgroup",
			"mstack",
			"msline",
			"msrow",
			"semantics",
			"annotation",
			"annotation-xml",
			"mprescripts",
			"none",
		]),
		Ca = pr(["#text"]),
		Sa = pr([
			"accept",
			"action",
			"align",
			"alt",
			"autocapitalize",
			"autocomplete",
			"autopictureinpicture",
			"autoplay",
			"background",
			"bgcolor",
			"border",
			"capture",
			"cellpadding",
			"cellspacing",
			"checked",
			"cite",
			"class",
			"clear",
			"color",
			"cols",
			"colspan",
			"controls",
			"controlslist",
			"coords",
			"crossorigin",
			"datetime",
			"decoding",
			"default",
			"dir",
			"disabled",
			"disablepictureinpicture",
			"disableremoteplayback",
			"download",
			"draggable",
			"enctype",
			"enterkeyhint",
			"face",
			"for",
			"headers",
			"height",
			"hidden",
			"high",
			"href",
			"hreflang",
			"id",
			"inputmode",
			"integrity",
			"ismap",
			"kind",
			"label",
			"lang",
			"list",
			"loading",
			"loop",
			"low",
			"max",
			"maxlength",
			"media",
			"method",
			"min",
			"minlength",
			"multiple",
			"muted",
			"name",
			"nonce",
			"noshade",
			"novalidate",
			"nowrap",
			"open",
			"optimum",
			"pattern",
			"placeholder",
			"playsinline",
			"poster",
			"preload",
			"pubdate",
			"radiogroup",
			"readonly",
			"rel",
			"required",
			"rev",
			"reversed",
			"role",
			"rows",
			"rowspan",
			"spellcheck",
			"scope",
			"selected",
			"shape",
			"size",
			"sizes",
			"span",
			"srclang",
			"start",
			"src",
			"srcset",
			"step",
			"style",
			"summary",
			"tabindex",
			"title",
			"translate",
			"type",
			"usemap",
			"valign",
			"value",
			"width",
			"xmlns",
			"slot",
		]),
		da = pr([
			"accent-height",
			"accumulate",
			"additive",
			"alignment-baseline",
			"ascent",
			"attributename",
			"attributetype",
			"azimuth",
			"basefrequency",
			"baseline-shift",
			"begin",
			"bias",
			"by",
			"class",
			"clip",
			"clippathunits",
			"clip-path",
			"clip-rule",
			"color",
			"color-interpolation",
			"color-interpolation-filters",
			"color-profile",
			"color-rendering",
			"cx",
			"cy",
			"d",
			"dx",
			"dy",
			"diffuseconstant",
			"direction",
			"display",
			"divisor",
			"dur",
			"edgemode",
			"elevation",
			"end",
			"fill",
			"fill-opacity",
			"fill-rule",
			"filter",
			"filterunits",
			"flood-color",
			"flood-opacity",
			"font-family",
			"font-size",
			"font-size-adjust",
			"font-stretch",
			"font-style",
			"font-variant",
			"font-weight",
			"fx",
			"fy",
			"g1",
			"g2",
			"glyph-name",
			"glyphref",
			"gradientunits",
			"gradienttransform",
			"height",
			"href",
			"id",
			"image-rendering",
			"in",
			"in2",
			"k",
			"k1",
			"k2",
			"k3",
			"k4",
			"kerning",
			"keypoints",
			"keysplines",
			"keytimes",
			"lang",
			"lengthadjust",
			"letter-spacing",
			"kernelmatrix",
			"kernelunitlength",
			"lighting-color",
			"local",
			"marker-end",
			"marker-mid",
			"marker-start",
			"markerheight",
			"markerunits",
			"markerwidth",
			"maskcontentunits",
			"maskunits",
			"max",
			"mask",
			"media",
			"method",
			"mode",
			"min",
			"name",
			"numoctaves",
			"offset",
			"operator",
			"opacity",
			"order",
			"orient",
			"orientation",
			"origin",
			"overflow",
			"paint-order",
			"path",
			"pathlength",
			"patterncontentunits",
			"patterntransform",
			"patternunits",
			"points",
			"preservealpha",
			"preserveaspectratio",
			"primitiveunits",
			"r",
			"rx",
			"ry",
			"radius",
			"refx",
			"refy",
			"repeatcount",
			"repeatdur",
			"restart",
			"result",
			"rotate",
			"scale",
			"seed",
			"shape-rendering",
			"specularconstant",
			"specularexponent",
			"spreadmethod",
			"startoffset",
			"stddeviation",
			"stitchtiles",
			"stop-color",
			"stop-opacity",
			"stroke-dasharray",
			"stroke-dashoffset",
			"stroke-linecap",
			"stroke-linejoin",
			"stroke-miterlimit",
			"stroke-opacity",
			"stroke",
			"stroke-width",
			"style",
			"surfacescale",
			"systemlanguage",
			"tabindex",
			"targetx",
			"targety",
			"transform",
			"transform-origin",
			"text-anchor",
			"text-decoration",
			"text-rendering",
			"textlength",
			"type",
			"u1",
			"u2",
			"unicode",
			"values",
			"viewbox",
			"visibility",
			"version",
			"vert-adv-y",
			"vert-origin-x",
			"vert-origin-y",
			"width",
			"word-spacing",
			"wrap",
			"writing-mode",
			"xchannelselector",
			"ychannelselector",
			"x",
			"x1",
			"x2",
			"xmlns",
			"y",
			"y1",
			"y2",
			"z",
			"zoomandpan",
		]),
		Ea = pr([
			"accent",
			"accentunder",
			"align",
			"bevelled",
			"close",
			"columnsalign",
			"columnlines",
			"columnspan",
			"denomalign",
			"depth",
			"dir",
			"display",
			"displaystyle",
			"encoding",
			"fence",
			"frame",
			"height",
			"href",
			"id",
			"largeop",
			"length",
			"linethickness",
			"lspace",
			"lquote",
			"mathbackground",
			"mathcolor",
			"mathsize",
			"mathvariant",
			"maxsize",
			"minsize",
			"movablelimits",
			"notation",
			"numalign",
			"open",
			"rowalign",
			"rowlines",
			"rowspacing",
			"rowspan",
			"rspace",
			"rquote",
			"scriptlevel",
			"scriptminsize",
			"scriptsizemultiplier",
			"selection",
			"separator",
			"separators",
			"stretchy",
			"subscriptshift",
			"supscriptshift",
			"symmetric",
			"voffset",
			"width",
			"xmlns",
		]),
		na = pr([
			"xlink:href",
			"xml:id",
			"xlink:title",
			"xml:space",
			"xmlns:xlink",
		]),
		Ya = So(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
		Za = So(/<%[\w\W]*|[\w\W]*%>/gm),
		Qa = So(/\${[\w\W]*}/gm),
		_a = So(/^data-[\-\w.\u00B7-\uFFFF]/),
		ec = So(/^aria-[\-\w]+$/),
		Ia = So(
			/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i,
		),
		tc = So(/^(?:\w+script|data):/i),
		ic = So(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
		Ta = So(/^html$/i);
	var Pa = Object.freeze({
		__proto__: null,
		MUSTACHE_EXPR: Ya,
		ERB_EXPR: Za,
		TMPLIT_EXPR: Qa,
		DATA_ATTR: _a,
		ARIA_ATTR: ec,
		IS_ALLOWED_URI: Ia,
		IS_SCRIPT_OR_DATA: tc,
		ATTR_WHITESPACE: ic,
		DOCTYPE_NAME: Ta,
	});
	const nc = () => (typeof window > "u" ? null : window),
		sc = function (e, t) {
			if (typeof e != "object" || typeof e.createPolicy != "function")
				return null;
			let i = null;
			const w = "data-tt-policy-suffix";
			t && t.hasAttribute(w) && (i = t.getAttribute(w));
			const E = "dompurify" + (i ? "#" + i : "");
			try {
				return e.createPolicy(E, {
					createHTML(C) {
						return C;
					},
					createScriptURL(C) {
						return C;
					},
				});
			} catch {
				return (
					console.warn("TrustedTypes policy " + E + " could not be created."),
					null
				);
			}
		};
	function ka() {
		let ce =
			arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : nc();
		const e = (bt) => ka(bt);
		if (
			((e.version = "3.0.5"),
			(e.removed = []),
			!ce || !ce.document || ce.document.nodeType !== 9)
		)
			return (e.isSupported = !1), e;
		const t = ce.document,
			i = t.currentScript;
		let { document: w } = ce;
		const {
				DocumentFragment: E,
				HTMLTemplateElement: C,
				Node: d,
				Element: m,
				NodeFilter: r,
				NamedNodeMap: u = ce.NamedNodeMap || ce.MozNamedAttrMap,
				HTMLFormElement: a,
				DOMParser: h,
				trustedTypes: c,
			} = ce,
			n = m.prototype,
			g = ia(n, "cloneNode"),
			p = ia(n, "nextSibling"),
			o = ia(n, "childNodes"),
			f = ia(n, "parentNode");
		if (typeof C == "function") {
			const bt = w.createElement("template");
			bt.content && bt.content.ownerDocument && (w = bt.content.ownerDocument);
		}
		let b,
			s = "";
		const {
				implementation: l,
				createNodeIterator: y,
				createDocumentFragment: $,
				getElementsByTagName: v,
			} = w,
			{ importNode: S } = t;
		let I = {};
		e.isSupported =
			typeof $a == "function" &&
			typeof f == "function" &&
			l &&
			l.createHTMLDocument !== void 0;
		const {
			MUSTACHE_EXPR: T,
			ERB_EXPR: P,
			TMPLIT_EXPR: k,
			DATA_ATTR: L,
			ARIA_ATTR: D,
			IS_SCRIPT_OR_DATA: M,
			ATTR_WHITESPACE: N,
		} = Pa;
		let { IS_ALLOWED_URI: A } = Pa,
			R = null;
		const O = qn({}, [...va, ...ca, ...la, ...ua, ...Ca]);
		let B = null;
		const U = qn({}, [...Sa, ...da, ...Ea, ...na]);
		let z = Object.seal(
				Object.create(null, {
					tagNameCheck: {
						writable: !0,
						configurable: !1,
						enumerable: !0,
						value: null,
					},
					attributeNameCheck: {
						writable: !0,
						configurable: !1,
						enumerable: !0,
						value: null,
					},
					allowCustomizedBuiltInElements: {
						writable: !0,
						configurable: !1,
						enumerable: !0,
						value: !1,
					},
				}),
			),
			F = null,
			x = null,
			H = !0,
			q = !0,
			V = !1,
			G = !0,
			K = !1,
			J = !1,
			W = !1,
			X = !1,
			Y = !1,
			ie = !1,
			ne = !1,
			ee = !0,
			_ = !1;
		const te = "user-content-";
		let Q = !0,
			Z = !1,
			se = {},
			re = null;
		const le = qn({}, [
			"annotation-xml",
			"audio",
			"colgroup",
			"desc",
			"foreignobject",
			"head",
			"iframe",
			"math",
			"mi",
			"mn",
			"mo",
			"ms",
			"mtext",
			"noembed",
			"noframes",
			"noscript",
			"plaintext",
			"script",
			"style",
			"svg",
			"template",
			"thead",
			"title",
			"video",
			"xmp",
		]);
		let oe = null;
		const ae = qn({}, ["audio", "video", "img", "source", "image", "track"]);
		let pe = null;
		const $e = qn({}, [
				"alt",
				"class",
				"for",
				"id",
				"label",
				"name",
				"pattern",
				"placeholder",
				"role",
				"summary",
				"title",
				"value",
				"style",
				"xmlns",
			]),
			ye = "http://www.w3.org/1998/Math/MathML",
			ue = "http://www.w3.org/2000/svg",
			fe = "http://www.w3.org/1999/xhtml";
		let me = fe,
			ve = !1,
			ge = null;
		const be = qn({}, [ye, ue, fe], aa);
		let Ce;
		const Le = ["application/xhtml+xml", "text/html"],
			Fe = "text/html";
		let Oe,
			xe = null;
		const He = w.createElement("form"),
			Ke = function (nt) {
				return nt instanceof RegExp || nt instanceof Function;
			},
			Je = function (nt) {
				if (!(xe && xe === nt)) {
					if (
						((!nt || typeof nt != "object") && (nt = {}),
						(nt = Ko(nt)),
						(Ce =
							Le.indexOf(nt.PARSER_MEDIA_TYPE) === -1
								? (Ce = Fe)
								: (Ce = nt.PARSER_MEDIA_TYPE)),
						(Oe = Ce === "application/xhtml+xml" ? aa : ta),
						(R = "ALLOWED_TAGS" in nt ? qn({}, nt.ALLOWED_TAGS, Oe) : O),
						(B = "ALLOWED_ATTR" in nt ? qn({}, nt.ALLOWED_ATTR, Oe) : U),
						(ge =
							"ALLOWED_NAMESPACES" in nt
								? qn({}, nt.ALLOWED_NAMESPACES, aa)
								: be),
						(pe =
							"ADD_URI_SAFE_ATTR" in nt
								? qn(Ko($e), nt.ADD_URI_SAFE_ATTR, Oe)
								: $e),
						(oe =
							"ADD_DATA_URI_TAGS" in nt
								? qn(Ko(ae), nt.ADD_DATA_URI_TAGS, Oe)
								: ae),
						(re =
							"FORBID_CONTENTS" in nt ? qn({}, nt.FORBID_CONTENTS, Oe) : le),
						(F = "FORBID_TAGS" in nt ? qn({}, nt.FORBID_TAGS, Oe) : {}),
						(x = "FORBID_ATTR" in nt ? qn({}, nt.FORBID_ATTR, Oe) : {}),
						(se = "USE_PROFILES" in nt ? nt.USE_PROFILES : !1),
						(H = nt.ALLOW_ARIA_ATTR !== !1),
						(q = nt.ALLOW_DATA_ATTR !== !1),
						(V = nt.ALLOW_UNKNOWN_PROTOCOLS || !1),
						(G = nt.ALLOW_SELF_CLOSE_IN_ATTR !== !1),
						(K = nt.SAFE_FOR_TEMPLATES || !1),
						(J = nt.WHOLE_DOCUMENT || !1),
						(Y = nt.RETURN_DOM || !1),
						(ie = nt.RETURN_DOM_FRAGMENT || !1),
						(ne = nt.RETURN_TRUSTED_TYPE || !1),
						(X = nt.FORCE_BODY || !1),
						(ee = nt.SANITIZE_DOM !== !1),
						(_ = nt.SANITIZE_NAMED_PROPS || !1),
						(Q = nt.KEEP_CONTENT !== !1),
						(Z = nt.IN_PLACE || !1),
						(A = nt.ALLOWED_URI_REGEXP || Ia),
						(me = nt.NAMESPACE || fe),
						(z = nt.CUSTOM_ELEMENT_HANDLING || {}),
						nt.CUSTOM_ELEMENT_HANDLING &&
							Ke(nt.CUSTOM_ELEMENT_HANDLING.tagNameCheck) &&
							(z.tagNameCheck = nt.CUSTOM_ELEMENT_HANDLING.tagNameCheck),
						nt.CUSTOM_ELEMENT_HANDLING &&
							Ke(nt.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) &&
							(z.attributeNameCheck =
								nt.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),
						nt.CUSTOM_ELEMENT_HANDLING &&
							typeof nt.CUSTOM_ELEMENT_HANDLING
								.allowCustomizedBuiltInElements == "boolean" &&
							(z.allowCustomizedBuiltInElements =
								nt.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),
						K && (q = !1),
						ie && (Y = !0),
						se &&
							((R = qn({}, [...Ca])),
							(B = []),
							se.html === !0 && (qn(R, va), qn(B, Sa)),
							se.svg === !0 && (qn(R, ca), qn(B, da), qn(B, na)),
							se.svgFilters === !0 && (qn(R, la), qn(B, da), qn(B, na)),
							se.mathMl === !0 && (qn(R, ua), qn(B, Ea), qn(B, na))),
						nt.ADD_TAGS && (R === O && (R = Ko(R)), qn(R, nt.ADD_TAGS, Oe)),
						nt.ADD_ATTR && (B === U && (B = Ko(B)), qn(B, nt.ADD_ATTR, Oe)),
						nt.ADD_URI_SAFE_ATTR && qn(pe, nt.ADD_URI_SAFE_ATTR, Oe),
						nt.FORBID_CONTENTS &&
							(re === le && (re = Ko(re)), qn(re, nt.FORBID_CONTENTS, Oe)),
						Q && (R["#text"] = !0),
						J && qn(R, ["html", "head", "body"]),
						R.table && (qn(R, ["tbody"]), delete F.tbody),
						nt.TRUSTED_TYPES_POLICY)
					) {
						if (typeof nt.TRUSTED_TYPES_POLICY.createHTML != "function")
							throw Qo(
								'TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.',
							);
						if (typeof nt.TRUSTED_TYPES_POLICY.createScriptURL != "function")
							throw Qo(
								'TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.',
							);
						(b = nt.TRUSTED_TYPES_POLICY), (s = b.createHTML(""));
					} else
						b === void 0 && (b = sc(c, i)),
							b !== null && typeof s == "string" && (s = b.createHTML(""));
					pr && pr(nt), (xe = nt);
				}
			},
			Te = qn({}, ["mi", "mo", "mn", "ms", "mtext"]),
			Ee = qn({}, ["foreignobject", "desc", "title", "annotation-xml"]),
			Ie = qn({}, ["title", "style", "font", "a", "script"]),
			Be = qn({}, ca);
		qn(Be, la), qn(Be, Ja);
		const Se = qn({}, ua);
		qn(Se, Xa);
		const ke = function (nt) {
				let lt = f(nt);
				(!lt || !lt.tagName) &&
					(lt = { namespaceURI: me, tagName: "template" });
				const ct = ta(nt.tagName),
					gt = ta(lt.tagName);
				return ge[nt.namespaceURI]
					? nt.namespaceURI === ue
						? lt.namespaceURI === fe
							? ct === "svg"
							: lt.namespaceURI === ye
								? ct === "svg" && (gt === "annotation-xml" || Te[gt])
								: !!Be[ct]
						: nt.namespaceURI === ye
							? lt.namespaceURI === fe
								? ct === "math"
								: lt.namespaceURI === ue
									? ct === "math" && Ee[gt]
									: !!Se[ct]
							: nt.namespaceURI === fe
								? (lt.namespaceURI === ue && !Ee[gt]) ||
									(lt.namespaceURI === ye && !Te[gt])
									? !1
									: !Se[ct] && (Ie[ct] || !Be[ct])
								: !!(Ce === "application/xhtml+xml" && ge[nt.namespaceURI])
					: !1;
			},
			Ue = function (nt) {
				Zo(e.removed, { element: nt });
				try {
					nt.parentNode.removeChild(nt);
				} catch {
					nt.remove();
				}
			},
			qe = function (nt, lt) {
				try {
					Zo(e.removed, { attribute: lt.getAttributeNode(nt), from: lt });
				} catch {
					Zo(e.removed, { attribute: null, from: lt });
				}
				if ((lt.removeAttribute(nt), nt === "is" && !B[nt]))
					if (Y || ie)
						try {
							Ue(lt);
						} catch {}
					else
						try {
							lt.setAttribute(nt, "");
						} catch {}
			},
			Ae = function (nt) {
				let lt, ct;
				if (X) nt = "<remove></remove>" + nt;
				else {
					const Rt = Va(nt, /^[\r\n\t ]+/);
					ct = Rt && Rt[0];
				}
				Ce === "application/xhtml+xml" &&
					me === fe &&
					(nt =
						'<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' +
						nt +
						"</body></html>");
				const gt = b ? b.createHTML(nt) : nt;
				if (me === fe)
					try {
						lt = new h().parseFromString(gt, Ce);
					} catch {}
				if (!lt || !lt.documentElement) {
					lt = l.createDocument(me, "template", null);
					try {
						lt.documentElement.innerHTML = ve ? s : gt;
					} catch {}
				}
				const ht = lt.body || lt.documentElement;
				return (
					nt &&
						ct &&
						ht.insertBefore(w.createTextNode(ct), ht.childNodes[0] || null),
					me === fe
						? v.call(lt, J ? "html" : "body")[0]
						: J
							? lt.documentElement
							: ht
				);
			},
			Me = function (nt) {
				return y.call(
					nt.ownerDocument || nt,
					nt,
					r.SHOW_ELEMENT | r.SHOW_COMMENT | r.SHOW_TEXT,
					null,
					!1,
				);
			},
			De = function (nt) {
				return (
					nt instanceof a &&
					(typeof nt.nodeName != "string" ||
						typeof nt.textContent != "string" ||
						typeof nt.removeChild != "function" ||
						!(nt.attributes instanceof u) ||
						typeof nt.removeAttribute != "function" ||
						typeof nt.setAttribute != "function" ||
						typeof nt.namespaceURI != "string" ||
						typeof nt.insertBefore != "function" ||
						typeof nt.hasChildNodes != "function")
				);
			},
			Re = function (nt) {
				return typeof d == "object"
					? nt instanceof d
					: nt &&
							typeof nt == "object" &&
							typeof nt.nodeType == "number" &&
							typeof nt.nodeName == "string";
			},
			je = function (nt, lt, ct) {
				I[nt] &&
					qa(I[nt], (gt) => {
						gt.call(e, lt, ct, xe);
					});
			},
			Ve = function (nt) {
				let lt;
				if ((je("beforeSanitizeElements", nt, null), De(nt))) return Ue(nt), !0;
				const ct = Oe(nt.nodeName);
				if (
					(je("uponSanitizeElement", nt, { tagName: ct, allowedTags: R }),
					nt.hasChildNodes() &&
						!Re(nt.firstElementChild) &&
						(!Re(nt.content) || !Re(nt.content.firstElementChild)) &&
						Jr(/<[/\w]/g, nt.innerHTML) &&
						Jr(/<[/\w]/g, nt.textContent))
				)
					return Ue(nt), !0;
				if (!R[ct] || F[ct]) {
					if (
						!F[ct] &&
						et(ct) &&
						((z.tagNameCheck instanceof RegExp && Jr(z.tagNameCheck, ct)) ||
							(z.tagNameCheck instanceof Function && z.tagNameCheck(ct)))
					)
						return !1;
					if (Q && !re[ct]) {
						const gt = f(nt) || nt.parentNode,
							ht = o(nt) || nt.childNodes;
						if (ht && gt) {
							const Rt = ht.length;
							for (let Nt = Rt - 1; Nt >= 0; --Nt)
								gt.insertBefore(g(ht[Nt], !0), p(nt));
						}
					}
					return Ue(nt), !0;
				}
				return (nt instanceof m && !ke(nt)) ||
					((ct === "noscript" || ct === "noembed" || ct === "noframes") &&
						Jr(/<\/no(script|embed|frames)/i, nt.innerHTML))
					? (Ue(nt), !0)
					: (K &&
							nt.nodeType === 3 &&
							((lt = nt.textContent),
							(lt = Eo(lt, T, " ")),
							(lt = Eo(lt, P, " ")),
							(lt = Eo(lt, k, " ")),
							nt.textContent !== lt &&
								(Zo(e.removed, { element: nt.cloneNode() }),
								(nt.textContent = lt))),
						je("afterSanitizeElements", nt, null),
						!1);
			},
			Ze = function (nt, lt, ct) {
				if (ee && (lt === "id" || lt === "name") && (ct in w || ct in He))
					return !1;
				if (!(q && !x[lt] && Jr(L, lt))) {
					if (!(H && Jr(D, lt))) {
						if (!B[lt] || x[lt]) {
							if (
								!(
									(et(nt) &&
										((z.tagNameCheck instanceof RegExp &&
											Jr(z.tagNameCheck, nt)) ||
											(z.tagNameCheck instanceof Function &&
												z.tagNameCheck(nt))) &&
										((z.attributeNameCheck instanceof RegExp &&
											Jr(z.attributeNameCheck, lt)) ||
											(z.attributeNameCheck instanceof Function &&
												z.attributeNameCheck(lt)))) ||
									(lt === "is" &&
										z.allowCustomizedBuiltInElements &&
										((z.tagNameCheck instanceof RegExp &&
											Jr(z.tagNameCheck, ct)) ||
											(z.tagNameCheck instanceof Function &&
												z.tagNameCheck(ct))))
								)
							)
								return !1;
						} else if (!pe[lt]) {
							if (!Jr(A, Eo(ct, N, ""))) {
								if (
									!(
										(lt === "src" || lt === "xlink:href" || lt === "href") &&
										nt !== "script" &&
										Ha(ct, "data:") === 0 &&
										oe[nt]
									)
								) {
									if (!(V && !Jr(M, Eo(ct, N, "")))) {
										if (ct) return !1;
									}
								}
							}
						}
					}
				}
				return !0;
			},
			et = function (nt) {
				return nt.indexOf("-") > 0;
			},
			rt = function (nt) {
				let lt, ct, gt, ht;
				je("beforeSanitizeAttributes", nt, null);
				const { attributes: Rt } = nt;
				if (!Rt) return;
				const Nt = {
					attrName: "",
					attrValue: "",
					keepAttr: !0,
					allowedAttributes: B,
				};
				for (ht = Rt.length; ht--; ) {
					lt = Rt[ht];
					const { name: jt, namespaceURI: ti } = lt;
					if (
						((ct = jt === "value" ? lt.value : Ka(lt.value)),
						(gt = Oe(jt)),
						(Nt.attrName = gt),
						(Nt.attrValue = ct),
						(Nt.keepAttr = !0),
						(Nt.forceKeepAttr = void 0),
						je("uponSanitizeAttribute", nt, Nt),
						(ct = Nt.attrValue),
						Nt.forceKeepAttr || (qe(jt, nt), !Nt.keepAttr))
					)
						continue;
					if (!G && Jr(/\/>/i, ct)) {
						qe(jt, nt);
						continue;
					}
					K &&
						((ct = Eo(ct, T, " ")),
						(ct = Eo(ct, P, " ")),
						(ct = Eo(ct, k, " ")));
					const kt = Oe(nt.nodeName);
					if (Ze(kt, gt, ct)) {
						if (
							(_ &&
								(gt === "id" || gt === "name") &&
								(qe(jt, nt), (ct = te + ct)),
							b &&
								typeof c == "object" &&
								typeof c.getAttributeType == "function" &&
								!ti)
						)
							switch (c.getAttributeType(kt, gt)) {
								case "TrustedHTML": {
									ct = b.createHTML(ct);
									break;
								}
								case "TrustedScriptURL": {
									ct = b.createScriptURL(ct);
									break;
								}
							}
						try {
							ti ? nt.setAttributeNS(ti, jt, ct) : nt.setAttribute(jt, ct),
								wa(e.removed);
						} catch {}
					}
				}
				je("afterSanitizeAttributes", nt, null);
			},
			ft = function bt(nt) {
				let lt;
				const ct = Me(nt);
				for (je("beforeSanitizeShadowDOM", nt, null); (lt = ct.nextNode()); )
					je("uponSanitizeShadowNode", lt, null),
						!Ve(lt) && (lt.content instanceof E && bt(lt.content), rt(lt));
				je("afterSanitizeShadowDOM", nt, null);
			};
		return (
			(e.sanitize = function (bt) {
				let nt =
						arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
					lt,
					ct,
					gt,
					ht;
				if (
					((ve = !bt), ve && (bt = "<!-->"), typeof bt != "string" && !Re(bt))
				)
					if (typeof bt.toString == "function") {
						if (((bt = bt.toString()), typeof bt != "string"))
							throw Qo("dirty is not a string, aborting");
					} else throw Qo("toString is not a function");
				if (!e.isSupported) return bt;
				if (
					(W || Je(nt), (e.removed = []), typeof bt == "string" && (Z = !1), Z)
				) {
					if (bt.nodeName) {
						const jt = Oe(bt.nodeName);
						if (!R[jt] || F[jt])
							throw Qo(
								"root node is forbidden and cannot be sanitized in-place",
							);
					}
				} else if (bt instanceof d)
					(lt = Ae("<!---->")),
						(ct = lt.ownerDocument.importNode(bt, !0)),
						(ct.nodeType === 1 && ct.nodeName === "BODY") ||
						ct.nodeName === "HTML"
							? (lt = ct)
							: lt.appendChild(ct);
				else {
					if (!Y && !K && !J && bt.indexOf("<") === -1)
						return b && ne ? b.createHTML(bt) : bt;
					if (((lt = Ae(bt)), !lt)) return Y ? null : ne ? s : "";
				}
				lt && X && Ue(lt.firstChild);
				const Rt = Me(Z ? bt : lt);
				for (; (gt = Rt.nextNode()); )
					Ve(gt) || (gt.content instanceof E && ft(gt.content), rt(gt));
				if (Z) return bt;
				if (Y) {
					if (ie)
						for (ht = $.call(lt.ownerDocument); lt.firstChild; )
							ht.appendChild(lt.firstChild);
					else ht = lt;
					return (
						(B.shadowroot || B.shadowrootmode) && (ht = S.call(t, ht, !0)), ht
					);
				}
				let Nt = J ? lt.outerHTML : lt.innerHTML;
				return (
					J &&
						R["!doctype"] &&
						lt.ownerDocument &&
						lt.ownerDocument.doctype &&
						lt.ownerDocument.doctype.name &&
						Jr(Ta, lt.ownerDocument.doctype.name) &&
						(Nt =
							"<!DOCTYPE " +
							lt.ownerDocument.doctype.name +
							`>
` +
							Nt),
					K &&
						((Nt = Eo(Nt, T, " ")),
						(Nt = Eo(Nt, P, " ")),
						(Nt = Eo(Nt, k, " "))),
					b && ne ? b.createHTML(Nt) : Nt
				);
			}),
			(e.setConfig = function (bt) {
				Je(bt), (W = !0);
			}),
			(e.clearConfig = function () {
				(xe = null), (W = !1);
			}),
			(e.isValidAttribute = function (bt, nt, lt) {
				xe || Je({});
				const ct = Oe(bt),
					gt = Oe(nt);
				return Ze(ct, gt, lt);
			}),
			(e.addHook = function (bt, nt) {
				typeof nt == "function" && ((I[bt] = I[bt] || []), Zo(I[bt], nt));
			}),
			(e.removeHook = function (bt) {
				if (I[bt]) return wa(I[bt]);
			}),
			(e.removeHooks = function (bt) {
				I[bt] && (I[bt] = []);
			}),
			(e.removeAllHooks = function () {
				I = {};
			}),
			e
		);
	}
	var rc = ka();
	define("vs/base/browser/dompurify/dompurify", function () {
		return rc;
	}),
		