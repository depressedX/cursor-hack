import '../../../require.js';
import '../../../exports.js';
import '../lexical-selection/api.js';
import '../lexical/api.js';
define(de[304], he([1, 0, 921, 164]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$splitNode = void 0),
				(e.invariant = w),
				(e.objectKlassEquals = E),
				(e.addClassNamesToElement = C),
				(e.removeClassNamesFromElement = d),
				(e.isMimeType = m),
				(e.mediaFileReader = r),
				(e.$dfs = u),
				(e.$getDepth = a),
				(e.$getNearestNodeOfType = h),
				(e.$getNearestBlockElementAncestorOrThrow = c),
				(e.$findMatchingParent = n),
				(e.mergeRegister = g),
				(e.registerNestedElementResolver = p),
				(e.$restoreEditorState = o),
				(e.$insertNodeToNearestRoot = f),
				(e.$wrapNodeInElement = b),
				(e.isHTMLAnchorElement = s),
				(e.isHTMLElement = l),
				Object.defineProperty(e, "$splitNode", {
					enumerable: !0,
					get: function () {
						return i.$splitNode;
					},
				});
			function w(y, $, ...v) {
				if (!y) throw new Error($);
			}
			function E(y, $) {
				return y !== null
					? Object.getPrototypeOf(y).constructor.name === $.name
					: !1;
			}
			function C(y, ...$) {
				$.forEach((v) => {
					if (typeof v == "string") {
						const S = v.split(" ").filter((I) => I !== "");
						y.classList.add(...S);
					}
				});
			}
			function d(y, ...$) {
				$.forEach((v) => {
					typeof v == "string" && y.classList.remove(...v.split(" "));
				});
			}
			function m(y, $) {
				for (const v of $) if (y.type.startsWith(v)) return !0;
				return !1;
			}
			function r(y, $) {
				const v = y[Symbol.iterator]();
				return new Promise((S, I) => {
					const T = [],
						P = () => {
							const { done: k, value: L } = v.next();
							if (k) return S(T);
							const D = new FileReader();
							D.addEventListener("error", I),
								D.addEventListener("load", () => {
									const M = D.result;
									typeof M == "string" && T.push({ file: L, result: M }), P();
								}),
								m(L, $) ? D.readAsDataURL(L) : P();
						};
					P();
				});
			}
			function u(y, $) {
				const v = [],
					S = (y || (0, i.$getRoot)()).getLatest(),
					I = $ || ((0, i.$isElementNode)(S) ? S.getLastDescendant() : S);
				let T = S,
					P = a(T);
				for (; T !== null && !T.is(I); )
					if (
						(v.push({ depth: P, node: T }),
						(0, i.$isElementNode)(T) && T.getChildrenSize() > 0)
					)
						(T = T.getFirstChild()), P++;
					else {
						let k = null;
						for (; k === null && T !== null; )
							(k = T.getNextSibling()),
								k === null ? ((T = T.getParent()), P--) : (T = k);
					}
				return T !== null && T.is(I) && v.push({ depth: P, node: T }), v;
			}
			function a(y) {
				let $ = y,
					v = 0;
				for (; ($ = $.getParent()) !== null; ) v++;
				return v;
			}
			function h(y, $) {
				let v = y;
				for (; v != null; ) {
					if (v instanceof $) return v;
					v = v.getParent();
				}
				return null;
			}
			function c(y) {
				const $ = n(y, (v) => (0, i.$isElementNode)(v) && !v.isInline());
				return (
					(0, i.$isElementNode)($) ||
						w(
							!1,
							"Expected node %s to have closest block element node.",
							y.__key,
						),
					$
				);
			}
			function n(y, $) {
				let v = y;
				for (; v !== (0, i.$getRoot)() && v != null; ) {
					if ($(v)) return v;
					v = v.getParent();
				}
				return null;
			}
			function g(...y) {
				return () => {
					y.forEach(($) => $());
				};
			}
			function p(y, $, v, S) {
				const I = (k) => k instanceof $,
					T = (k) => {
						const L = k.getChildren();
						for (let N = 0; N < L.length; N++) {
							const A = L[N];
							if (I(A)) return null;
						}
						let D = k,
							M = k;
						for (; D !== null; )
							if (((M = D), (D = D.getParent()), I(D)))
								return { child: M, parent: D };
						return null;
					},
					P = (k) => {
						const L = T(k);
						if (L !== null) {
							const { child: D, parent: M } = L;
							if (D.is(k)) {
								S(M, k);
								const N = D.getNextSiblings(),
									A = N.length;
								if ((M.insertAfter(D), A !== 0)) {
									const R = v(M);
									D.insertAfter(R);
									for (let O = 0; O < A; O++) R.append(N[O]);
								}
								!M.canBeEmpty() && M.getChildrenSize() === 0 && M.remove();
							}
						}
					};
				return y.registerNodeTransform($, P);
			}
			function o(y, $) {
				const S = new Map(),
					I = y._pendingEditorState;
				for (const [P, k] of $._nodeMap) {
					const L = (0, t.$cloneWithProperties)(k);
					(0, i.$isTextNode)(L) && (L.__text = k.__text), S.set(P, L);
				}
				I && (I._nodeMap = S), (y._dirtyType = 2);
				const T = $._selection;
				(0, i.$setSelection)(T === null ? null : T.clone());
			}
			function f(y) {
				const $ = (0, i.$getSelection)();
				if ((0, i.$isRangeSelection)($)) {
					const { focus: v } = $,
						S = v.getNode(),
						I = v.offset;
					if ((0, i.$isRootOrShadowRoot)(S)) {
						const T = S.getChildAtIndex(I);
						T == null ? S.append(y) : T.insertBefore(y), y.selectNext();
					} else {
						let T, P;
						(0, i.$isTextNode)(S)
							? ((T = S.getParentOrThrow()),
								(P = S.getIndexWithinParent()),
								I > 0 && ((P += 1), S.splitText(I)))
							: ((T = S), (P = I));
						const [, k] = (0, i.$splitNode)(T, P);
						k.insertBefore(y), k.selectStart();
					}
				} else {
					if (
						(0, i.$isNodeSelection)($) ||
						(0, i.DEPRECATED_$isGridSelection)($)
					) {
						const S = $.getNodes();
						S[S.length - 1].getTopLevelElementOrThrow().insertAfter(y);
					} else (0, i.$getRoot)().append(y);
					const v = (0, i.$createParagraphNode)();
					y.insertAfter(v), v.select();
				}
				return y.getLatest();
			}
			function b(y, $) {
				const v = $();
				return y.replace(v), v.append(y), v;
			}
			function s(y) {
				return l(y) && y.tagName === "A";
			}
			function l(y) {
				return y.nodeType === 1;
			}
		});
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	