import '../../../require.js';
import '../../../exports.js';
import '../lexical/api.js';
import './constants.js';
import './utils.js';
define(de[1561], he([1, 0, 164, 1413, 1157]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$updateElementNodeProperties = E),
				(e.$updateTextNodeProperties = C),
				(e.$cloneWithProperties = d),
				(e.$sliceSelectedTextNodeContent = m),
				(e.$isAtNodeEnd = r),
				(e.trimTextContentFromAnchor = u),
				(e.$addNodeStyle = a),
				(e.$patchStyle = h),
				(e.$patchStyleText = c);
			function E(n, g) {
				return (
					(n.__first = g.__first),
					(n.__last = g.__last),
					(n.__size = g.__size),
					(n.__format = g.__format),
					(n.__indent = g.__indent),
					(n.__dir = g.__dir),
					n
				);
			}
			function C(n, g) {
				return (
					(n.__format = g.__format),
					(n.__style = g.__style),
					(n.__mode = g.__mode),
					(n.__detail = g.__detail),
					n
				);
			}
			function d(n) {
				const g = n.getLatest(),
					o = g.constructor.clone(g);
				return (
					(o.__parent = g.__parent),
					(o.__next = g.__next),
					(o.__prev = g.__prev),
					(0, t.$isElementNode)(g) && (0, t.$isElementNode)(o)
						? E(o, g)
						: (0, t.$isTextNode)(g) && (0, t.$isTextNode)(o)
							? C(o, g)
							: o
				);
			}
			function m(n, g) {
				if (
					g.isSelected() &&
					!g.isSegmented() &&
					!g.isToken() &&
					((0, t.$isRangeSelection)(n) || (0, t.DEPRECATED_$isGridSelection)(n))
				) {
					const p = n.anchor.getNode(),
						o = n.focus.getNode(),
						f = g.is(p),
						b = g.is(o);
					if (f || b) {
						const s = n.isBackward(),
							[l, y] = n.getCharacterOffsets(),
							$ = p.is(o),
							v = g.is(s ? o : p),
							S = g.is(s ? p : o);
						let I = 0,
							T;
						if ($) (I = l > y ? y : l), (T = l > y ? l : y);
						else if (v) (I = s ? y : l), (T = void 0);
						else if (S) {
							const P = s ? l : y;
							(I = 0), (T = P);
						}
						return (g.__text = g.__text.slice(I, T)), g;
					}
				}
				return g;
			}
			function r(n) {
				return n.type === "text"
					? n.offset === n.getNode().getTextContentSize()
					: n.offset === n.getNode().getChildrenSize();
			}
			function u(n, g, p) {
				let o = g.getNode(),
					f = p;
				if ((0, t.$isElementNode)(o)) {
					const b = o.getDescendantByIndex(g.offset);
					b !== null && (o = b);
				}
				for (; f > 0 && o !== null; ) {
					let b = o.getPreviousSibling(),
						s = 0;
					if (b === null) {
						let $ = o.getParentOrThrow(),
							v = $.getPreviousSibling();
						for (; v === null; ) {
							if ((($ = $.getParent()), $ === null)) {
								b = null;
								break;
							}
							v = $.getPreviousSibling();
						}
						$ !== null &&
							((s = $.isInline() ? 0 : 2),
							(0, t.$isElementNode)(v) ? (b = v.getLastDescendant()) : (b = v));
					}
					let l = o.getTextContent();
					l === "" &&
						(0, t.$isElementNode)(o) &&
						!o.isInline() &&
						(l = `

`);
					const y = o.getTextContentSize();
					if (!(0, t.$isTextNode)(o) || f >= y) {
						const $ = o.getParent();
						o.remove(),
							$ != null &&
								$.getChildrenSize() === 0 &&
								!(0, t.$isRootNode)($) &&
								$.remove(),
							(f -= y + s),
							(o = b);
					} else {
						const $ = o.getKey(),
							v = n.getEditorState().read(() => {
								const T = (0, t.$getNodeByKey)($);
								return (0, t.$isTextNode)(T) && T.isSimpleText()
									? T.getTextContent()
									: null;
							}),
							S = y - f,
							I = l.slice(0, S);
						if (v !== null && v !== l) {
							const T = (0, t.$getPreviousSelection)();
							let P = o;
							if (o.isSimpleText()) o.setTextContent(v);
							else {
								const k = (0, t.$createTextNode)(v);
								o.replace(k), (P = k);
							}
							if ((0, t.$isRangeSelection)(T) && T.isCollapsed()) {
								const k = T.anchor.offset;
								P.select(k, k);
							}
						} else if (o.isSimpleText()) {
							const T = g.key === $;
							let P = g.offset;
							P < f && (P = y);
							const k = T ? P - f : 0,
								L = T ? P : S;
							if (T && k === 0) {
								const [D] = o.splitText(k, L);
								D.remove();
							} else {
								const [, D] = o.splitText(k, L);
								D.remove();
							}
						} else {
							const T = (0, t.$createTextNode)(I);
							o.replace(T);
						}
						f = 0;
					}
				}
			}
			function a(n) {
				const g = n.getStyle(),
					p = (0, w.getStyleObjectFromRawCSS)(g);
				i.CSS_TO_STYLES.set(g, p);
			}
			function h(n, g) {
				const p = (0, w.getStyleObjectFromCSS)(
						"getStyle" in n ? n.getStyle() : n.style,
					),
					o = Object.entries(g).reduce(
						(b, [s, l]) => (l === null ? delete b[s] : (b[s] = l), b),
						{ ...p },
					),
					f = (0, w.getCSSFromStyleObject)(o);
				n.setStyle(f), i.CSS_TO_STYLES.set(f, o);
			}
			function c(n, g) {
				const p = n.getNodes(),
					f = p.length - 1;
				let b = p[0],
					s = p[f];
				if (n.isCollapsed()) {
					h(n, g);
					return;
				}
				const l = n.anchor,
					y = n.focus,
					v = b.getTextContent().length,
					S = y.offset;
				let I = l.offset;
				const T = l.isBefore(y);
				let P = T ? I : S,
					k = T ? S : I;
				const L = T ? l.type : y.type,
					D = T ? y.type : l.type,
					M = T ? y.key : l.key;
				if ((0, t.$isTextNode)(b) && P === v) {
					const N = b.getNextSibling();
					(0, t.$isTextNode)(N) && ((I = 0), (P = 0), (b = N));
				}
				if (p.length === 1) {
					if ((0, t.$isTextNode)(b)) {
						if (
							((P = L === "element" ? 0 : I > S ? S : I),
							(k = D === "element" ? v : I > S ? I : S),
							P === k)
						)
							return;
						if (P === 0 && k === v) h(b, g), b.select(P, k);
						else {
							const N = b.splitText(P, k),
								A = P === 0 ? N[0] : N[1];
							h(A, g), A.select(0, k - P);
						}
					}
				} else {
					if (
						((0, t.$isTextNode)(b) &&
							P < b.getTextContentSize() &&
							(P !== 0 && ((b = b.splitText(P)[1]), (P = 0)), h(b, g)),
						(0, t.$isTextNode)(s))
					) {
						const A = s.getTextContent().length;
						s.__key !== M && k !== 0 && (k = A),
							k !== A && ([s] = s.splitText(k)),
							k !== 0 && h(s, g);
					}
					for (let N = 1; N < f; N++) {
						const A = p[N],
							R = A.getKey();
						(0, t.$isTextNode)(A) &&
							R !== b.getKey() &&
							R !== s.getKey() &&
							!A.isToken() &&
							h(A, g);
					}
				}
			}
		}),
		