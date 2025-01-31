import '../../../require.js';
import '../../../exports.js';
import '../lexical/api.js';
import './utils.js';
define(de[1562], he([1, 0, 164, 1157]), function (ce /*require*/,
 e /*exports*/,
 t /*api*/,
 i /*utils*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$setBlocksType = w),
				(e.isBlock = E),
				(e.isPointAttached = C),
				(e.$removeParentEmptyElements = d),
				(e.$wrapNodes = m),
				(e.$wrapNodesImpl = r),
				(e.$shouldOverrideDefaultCharacterSelection = u),
				(e.$moveCaretSelection = a),
				(e.$isParentElementRTL = h),
				(e.$moveCharacter = c),
				(e.$selectAll = n),
				(e.$getNodeStyleValueForProperty = g),
				(e.$getSelectionStyleValueForProperty = p);
			function w(o, f) {
				if (o.anchor.key === "root") {
					const l = f(),
						y = (0, t.$getRoot)(),
						$ = y.getFirstChild();
					$ ? $.replace(l, !0) : y.append(l);
					return;
				}
				const b = o.getNodes();
				let s = o.anchor.getNode().getParentOrThrow();
				b.indexOf(s) === -1 && b.push(s),
					s.isInline() &&
						((s = s.getParentOrThrow()), b.indexOf(s) === -1 && b.push(s));
				for (let l = 0; l < b.length; l++) {
					const y = b[l];
					if (!E(y)) continue;
					const $ = f();
					$.setFormat(y.getFormatType()),
						$.setIndent(y.getIndent()),
						y.replace($, !0);
				}
			}
			function E(o) {
				if (!(0, t.$isElementNode)(o) || (0, t.$isRootOrShadowRoot)(o))
					return !1;
				const f = o.getFirstChild(),
					b = f === null || (0, t.$isTextNode)(f) || f.isInline();
				return !o.isInline() && o.canBeEmpty() !== !1 && b;
			}
			function C(o) {
				return o.getNode().isAttached();
			}
			function d(o) {
				let f = o;
				for (; f !== null && !(0, t.$isRootOrShadowRoot)(f); ) {
					const b = f.getLatest(),
						s = f.getParent();
					b.getChildrenSize() === 0 && f.remove(!0), (f = s);
				}
			}
			function m(o, f, b = null) {
				const s = o.getNodes(),
					l = s.length,
					y = o.anchor;
				if (
					l === 0 ||
					(l === 1 &&
						y.type === "element" &&
						y.getNode().getChildrenSize() === 0)
				) {
					const S =
							y.type === "text" ? y.getNode().getParentOrThrow() : y.getNode(),
						I = S.getChildren();
					let T = f();
					T.setFormat(S.getFormatType()),
						T.setIndent(S.getIndent()),
						I.forEach((P) => T.append(P)),
						b && (T = b.append(T)),
						S.replace(T);
					return;
				}
				let $ = null,
					v = [];
				for (let S = 0; S < l; S++) {
					const I = s[S];
					(0, t.$isRootOrShadowRoot)(I)
						? (r(o, v, v.length, f, b), (v = []), ($ = I))
						: $ === null || ($ !== null && (0, t.$hasAncestor)(I, $))
							? v.push(I)
							: (r(o, v, v.length, f, b), (v = [I]));
				}
				r(o, v, v.length, f, b);
			}
			function r(o, f, b, s, l = null) {
				if (f.length === 0) return;
				const y = f[0],
					$ = new Map(),
					v = [];
				let S = (0, t.$isElementNode)(y) ? y : y.getParentOrThrow();
				S.isInline() && (S = S.getParentOrThrow());
				let I = !1;
				for (; S !== null; ) {
					const D = S.getPreviousSibling();
					if (D !== null) {
						(S = D), (I = !0);
						break;
					}
					if (((S = S.getParentOrThrow()), (0, t.$isRootOrShadowRoot)(S)))
						break;
				}
				const T = new Set();
				for (let D = 0; D < b; D++) {
					const M = f[D];
					(0, t.$isElementNode)(M) &&
						M.getChildrenSize() === 0 &&
						T.add(M.getKey());
				}
				const P = new Set();
				for (let D = 0; D < b; D++) {
					const M = f[D];
					let N = M.getParent();
					if (
						(N !== null && N.isInline() && (N = N.getParent()),
						N !== null && (0, t.$isLeafNode)(M) && !P.has(M.getKey()))
					) {
						const A = N.getKey();
						if ($.get(A) === void 0) {
							const R = s();
							R.setFormat(N.getFormatType()),
								R.setIndent(N.getIndent()),
								v.push(R),
								$.set(A, R),
								N.getChildren().forEach((O) => {
									R.append(O),
										P.add(O.getKey()),
										(0, t.$isElementNode)(O) &&
											O.getChildrenKeys().forEach((B) => P.add(B));
								}),
								d(N);
						}
					} else if (T.has(M.getKey())) {
						const A = s();
						A.setFormat(M.getFormatType()),
							A.setIndent(M.getIndent()),
							v.push(A),
							M.remove(!0);
					}
				}
				if (l !== null)
					for (let D = 0; D < v.length; D++) {
						const M = v[D];
						l.append(M);
					}
				let k = null;
				if ((0, t.$isRootOrShadowRoot)(S))
					if (I)
						if (l !== null) S.insertAfter(l);
						else
							for (let D = v.length - 1; D >= 0; D--) {
								const M = v[D];
								S.insertAfter(M);
							}
					else {
						const D = S.getFirstChild();
						if (((0, t.$isElementNode)(D) && (S = D), D === null))
							if (l) S.append(l);
							else
								for (let M = 0; M < v.length; M++) {
									const N = v[M];
									S.append(N), (k = N);
								}
						else if (l !== null) D.insertBefore(l);
						else
							for (let M = 0; M < v.length; M++) {
								const N = v[M];
								D.insertBefore(N), (k = N);
							}
					}
				else if (l) S.insertAfter(l);
				else
					for (let D = v.length - 1; D >= 0; D--) {
						const M = v[D];
						S.insertAfter(M), (k = M);
					}
				const L = (0, t.$getPreviousSelection)();
				(0, t.$isRangeSelection)(L) && C(L.anchor) && C(L.focus)
					? (0, t.$setSelection)(L.clone())
					: k !== null
						? k.selectEnd()
						: (o.dirty = !0);
			}
			function u(o, f) {
				const b = (0, t.$getAdjacentNode)(o.focus, f);
				return (
					((0, t.$isDecoratorNode)(b) && !b.isIsolated()) ||
					((0, t.$isElementNode)(b) && !b.isInline() && !b.canBeEmpty())
				);
			}
			function a(o, f, b, s) {
				o.modify(f ? "extend" : "move", b, s);
			}
			function h(o) {
				const f = o.anchor.getNode();
				return (
					((0, t.$isRootNode)(f) ? f : f.getParentOrThrow()).getDirection() ===
					"rtl"
				);
			}
			function c(o, f, b) {
				const s = h(o);
				a(o, f, b ? !s : s, "character");
			}
			function n(o) {
				const f = o.anchor,
					b = o.focus,
					y = f.getNode().getTopLevelElementOrThrow().getParentOrThrow();
				let $ = y.getFirstDescendant(),
					v = y.getLastDescendant(),
					S = "element",
					I = "element",
					T = 0;
				(0, t.$isTextNode)($)
					? (S = "text")
					: !(0, t.$isElementNode)($) &&
						$ !== null &&
						($ = $.getParentOrThrow()),
					(0, t.$isTextNode)(v)
						? ((I = "text"), (T = v.getTextContentSize()))
						: !(0, t.$isElementNode)(v) &&
							v !== null &&
							(v = v.getParentOrThrow()),
					$ && v && (f.set($.getKey(), 0, S), b.set(v.getKey(), T, I));
			}
			function g(o, f, b) {
				const s = o.getStyle(),
					l = (0, i.getStyleObjectFromCSS)(s);
				return (l !== null && l[f]) || b;
			}
			function p(o, f, b = "") {
				let s = null;
				const l = o.getNodes(),
					y = o.anchor,
					$ = o.focus,
					v = o.isBackward(),
					S = v ? $.offset : y.offset,
					I = v ? $.getNode() : y.getNode();
				if (o.style !== "") {
					const T = o.style,
						P = (0, i.getStyleObjectFromCSS)(T);
					if (P !== null && f in P) return P[f];
				}
				for (let T = 0; T < l.length; T++) {
					const P = l[T];
					if (!(T !== 0 && S === 0 && P.is(I)) && (0, t.$isTextNode)(P)) {
						const k = g(P, f, b);
						if (s === null) s = k;
						else if (s !== k) {
							s = "";
							break;
						}
					}
				}
				return s === null ? b : s;
			}
		})
