import '../../../../require.js';
import '../../../../exports.js';
import '../../lexical/api.js';
import '../../lexical-overflow/api.js';
import '../../lexical-text/api.js';
import '../../lexical-utils/api.js';
import '../utils.js';
import '../../../solid/solid.js';
define(
			de[2608],
			he([1, 0, 164, 2593, 1159, 304, 1414, 13]),
			function (ce /*require*/,
 e /*exports*/,
 t /*api*/,
 i /*api*/,
 w /*api*/,
 E /*api*/,
 C /*utils*/,
 d /*solid*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.useCharacterLimit = m),
					(e.findOffset = r),
					(e.$wrapOverflowedNodes = u),
					(e.$wrapNode = a),
					(e.$unwrapNode = h),
					(e.mergePrevious = c);
				function m(n, g, p = Object.freeze({})) {
					const o = (s) => s.length,
						f = (s) => ((0, C.resolve)(p).strlen || o)(s),
						b = (s) => (0, C.resolve)(p).remainingCharacters?.(s);
					(0, d.onMount)(() => {
						if (!n.hasNodes([i.OverflowNode]))
							throw new Error(
								"useCharacterLimit: OverflowNode not registered on editor",
							);
					}),
						(0, d.createEffect)(() => {
							let s = n.getEditorState().read(w.$rootTextContent),
								l = 0;
							(0, d.onCleanup)(
								(0, E.mergeRegister)(
									n.registerTextContentListener((y) => {
										s = y;
									}),
									n.registerUpdateListener(({ dirtyLeaves: y }) => {
										const $ = n.isComposing(),
											v = y.size > 0;
										if ($ || !v) return;
										const S = f(s),
											I =
												S > (0, C.resolve)(g) ||
												(l !== null && l > (0, C.resolve)(g)),
											T = (0, C.resolve)(g) - S;
										if ((b(T), l === null || I)) {
											const P = r(s, (0, C.resolve)(g), f);
											n.update(
												() => {
													u(P);
												},
												{ tag: "history-merge" },
											);
										}
										l = S;
									}),
								),
							);
						});
				}
				function r(n, g, p) {
					const o = Intl.Segmenter;
					let f = 0,
						b = 0;
					if (typeof o == "function") {
						const l = new o().segment(n);
						for (const { segment: y } of l) {
							const $ = b + p(y);
							if ($ > g) break;
							(b = $), (f += y.length);
						}
					} else {
						const s = Array.from(n),
							l = s.length;
						for (let y = 0; y < l; y++) {
							const $ = s[y],
								v = b + p($);
							if (v > g) break;
							(b = v), (f += $.length);
						}
					}
					return f;
				}
				function u(n) {
					const g = (0, E.$dfs)(),
						p = g.length;
					let o = 0;
					for (let f = 0; f < p; f += 1) {
						const { node: b } = g[f];
						if ((0, i.$isOverflowNode)(b)) {
							const s = o;
							if (o + b.getTextContentSize() <= n) {
								const y = b.getParent(),
									$ = b.getPreviousSibling(),
									v = b.getNextSibling();
								h(b);
								const S = (0, t.$getSelection)();
								(0, t.$isRangeSelection)(S) &&
									(!S.anchor.getNode().isAttached() ||
										!S.focus.getNode().isAttached()) &&
									((0, t.$isTextNode)($)
										? $.select()
										: (0, t.$isTextNode)(v)
											? v.select()
											: y !== null && y.select());
							} else if (s < n) {
								const y = b.getFirstDescendant(),
									$ = y !== null ? y.getTextContentSize() : 0,
									v = s + $,
									S = (0, t.$isTextNode)(y) && y.isSimpleText(),
									I = v <= n;
								(S || I) && h(b);
							}
						} else if ((0, t.$isLeafNode)(b)) {
							const s = o;
							if (
								((o += b.getTextContentSize()),
								o > n && !(0, i.$isOverflowNode)(b.getParent()))
							) {
								const l = (0, t.$getSelection)();
								let y;
								if (s < n && (0, t.$isTextNode)(b) && b.isSimpleText()) {
									const [, $] = b.splitText(n - s);
									y = a($);
								} else y = a(b);
								l !== null && (0, t.$setSelection)(l), c(y);
							}
						}
					}
				}
				function a(n) {
					const g = (0, i.$createOverflowNode)();
					return n.insertBefore(g), g.append(n), g;
				}
				function h(n) {
					const g = n.getChildren(),
						p = g.length;
					for (let o = 0; o < p; o++) n.insertBefore(g[o]);
					return n.remove(), p > 0 ? g[p - 1] : null;
				}
				function c(n) {
					const g = n.getPreviousSibling();
					if (!(0, i.$isOverflowNode)(g)) return;
					const p = n.getFirstChild(),
						o = g.getChildren(),
						f = o.length;
					if (p === null) n.append(...o);
					else for (let s = 0; s < f; s++) p.insertBefore(o[s]);
					const b = (0, t.$getSelection)();
					if ((0, t.$isRangeSelection)(b)) {
						const s = b.anchor,
							l = s.getNode(),
							y = b.focus,
							$ = s.getNode();
						l.is(g)
							? s.set(n.getKey(), s.offset, "element")
							: l.is(n) && s.set(n.getKey(), f + s.offset, "element"),
							$.is(g)
								? y.set(n.getKey(), y.offset, "element")
								: $.is(n) && y.set(n.getKey(), f + y.offset, "element");
					}
					g.remove();
				}
			},
		)
