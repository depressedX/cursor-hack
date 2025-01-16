define(de[2606], he([1, 0, 925]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.MenuOption = void 0),
				Object.defineProperty(e, "MenuOption", {
					enumerable: !0,
					get: function () {
						return t.MenuOption;
					},
				});
		}),
		define(
			de[756],
			he([1, 0, 2, 181, 925, 164, 13, 7, 75]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.MenuOption =
						e.SCROLL_TYPEAHEAD_OPTION_INTO_VIEW_COMMAND =
						e.PUNCTUATION =
							void 0),
					(e.getTextUpToAnchor = u),
					(e.tryToPositionRange = a),
					(e.getQueryTextForSearch = h),
					(e.isSelectionOnEntityBoundary = c),
					(e.getScrollParent = n),
					(e.isTriggerVisibleInNearestScrollContainer = g),
					(e.useDynamicPositioning = p),
					(e.useBasicTypeaheadTriggerMatch = o),
					(e.LexicalTypeaheadMenuPlugin = f),
					Object.defineProperty(e, "MenuOption", {
						enumerable: !0,
						get: function () {
							return w.MenuOption;
						},
					}),
					(e.PUNCTUATION = `\\.,\\+\\*\\?\\$\\@\\|#{}\\(\\)\\^\\-\\[\\]\\\\/!%'"~=<>_:;`);
				const r = (b) => {
					const s = (0, d.$Ogb)().document.getElementById("typeahead-menu");
					if (!s) return;
					const l = s.getBoundingClientRect();
					l.top + l.height > (0, d.$Ogb)().innerHeight &&
						s.scrollIntoView({ block: "center" }),
						l.top < 0 && s.scrollIntoView({ block: "center" }),
						b.scrollIntoView({ block: "nearest" });
				};
				function u(b) {
					const s = b.anchor;
					if (s.type !== "text") return null;
					const l = s.getNode();
					if (!l.isSimpleText()) return null;
					let y = s.offset;
					const $ = l.getTextContent(),
						v = $.indexOf(" ", y);
					return (
						v !== -1 ? (y = v) : (y = $.length), l.getTextContent().slice(0, y)
					);
				}
				function a(b, s) {
					const l = (0, d.$Ogb)().getSelection();
					if (l === null || !l.isCollapsed) return !1;
					const y = l.anchorNode,
						$ = b,
						v = l.anchorOffset;
					if (y == null || v == null) return !1;
					try {
						s.setStart(y, $), s.setEnd(y, v);
					} catch {
						return !1;
					}
					return !0;
				}
				function h(b) {
					let s = null;
					return (
						b.getEditorState().read(() => {
							const l = (0, E.$getSelection)();
							(0, E.$isRangeSelection)(l) && (s = u(l));
						}),
						s
					);
				}
				function c(b, s) {
					return s !== 0
						? !1
						: b.getEditorState().read(() => {
								const l = (0, E.$getSelection)();
								if ((0, E.$isRangeSelection)(l)) {
									const v = l.anchor.getNode().getPreviousSibling();
									return (0, E.$isTextNode)(v) && v.isTextEntity();
								}
								return !1;
							});
				}
				function n(b, s) {
					let l = getComputedStyle(b);
					const y = l.position === "absolute",
						$ = s ? /(auto|scroll|hidden)/ : /(auto|scroll)/;
					if (l.position === "fixed") return (0, d.$Ogb)().document.body;
					for (let v = b; (v = v.parentElement); )
						if (
							((l = getComputedStyle(v)),
							!(y && l.position === "static") &&
								$.test(l.overflow + l.overflowY + l.overflowX))
						)
							return v;
					return (0, d.$Ogb)().document.body;
				}
				function g(b, s) {
					const l = b.getBoundingClientRect(),
						y = s.getBoundingClientRect();
					return l.top > y.top && l.top < y.bottom;
				}
				function p(b, s, l, y) {
					const [$] = (0, i.useLexicalComposerContext)(),
						v = (0, d.$Ogb)().ResizeObserver;
					(0, C.createEffect)(
						(0, C.on)(
							() => [s(), b()],
							() => {
								const S = s();
								if (S != null && b() != null) {
									const I = $.getRootElement(),
										T = I != null ? n(I, !1) : (0, d.$Ogb)().document.body;
									let P = !1,
										k = g(S, T);
									const L = function () {
											P ||
												((0, d.$Ogb)().requestAnimationFrame(function () {
													l(), (P = !1);
												}),
												(P = !0));
											const M = g(S, T);
											M !== k && ((k = M), y?.(M));
										},
										D = new v(l);
									return (
										(0, d.$Ogb)().addEventListener("resize", l),
										(0, d.$Ogb)().document.addEventListener("scroll", L, {
											capture: !0,
											passive: !0,
										}),
										D.observe(S),
										() => {
											D.unobserve(S),
												(0, d.$Ogb)().removeEventListener("resize", l),
												(0, d.$Ogb)().document.removeEventListener("scroll", L);
										}
									);
								}
							},
						),
					);
				}
				e.SCROLL_TYPEAHEAD_OPTION_INTO_VIEW_COMMAND = (0, E.createCommand)(
					"SCROLL_TYPEAHEAD_OPTION_INTO_VIEW_COMMAND",
				);
				function o(b, { minLength: s = 1, maxLength: l = 75 }) {
					return (y) => {
						const $ = "[^" + b + e.PUNCTUATION + "\\s]",
							S = new RegExp(
								"(^|\\s|\\()([" + b + "]((?:" + $ + "){0," + l + "}))$",
							).exec(y);
						if (S !== null) {
							const I = S[1],
								T = S[3];
							if (T.length >= s)
								return {
									leadOffset: S.index + I.length,
									matchingString: T,
									replaceableString: S[2],
								};
						}
						return null;
					};
				}
				function f(b) {
					const [s] = (0, i.useLexicalComposerContext)(),
						[l, y] = (0, C.createSignal)(null),
						$ = (0, w.useMenuAnchorRef)(
							l,
							y,
							b.anchorClassName,
							b.attachToElement,
						),
						v = () => {
							b.onClose && b.onClose(), y(null);
						},
						S = (I) => {
							b.onOpen != null && l() === null && b.onOpen(I), y(I);
						};
					return (
						(0, C.createEffect)(() => {
							const I = (T) => {
								T.target instanceof HTMLElement &&
									!T.target.closest(
										"." + (b.anchorClassName ?? ".typeahead-popover"),
									) &&
									v();
							};
							(0, d.$Ogb)().document.addEventListener("mousedown", I),
								(0, C.onCleanup)(() => {
									(0, d.$Ogb)().document.removeEventListener("mousedown", I);
								});
						}),
						(0, C.createEffect)(
							(0, C.on)(l, () => {
								const I = () => {
										s.getEditorState().read(() => {
											const P = m.$Bfb.document.createRange(),
												k = (0, E.$getSelection)(),
												L = h(s);
											if (
												!(0, E.$isRangeSelection)(k) ||
												!k.isCollapsed() ||
												L === null ||
												P === null
											) {
												b.onQueryChange(null), v();
												return;
											}
											const D = b.triggerFn(L, s);
											if (
												(b.onQueryChange(D ? D.matchingString : null),
												D !== null &&
													!c(s, D.leadOffset) &&
													a(D.leadOffset, P) !== null)
											) {
												(0, C.startTransition)(() =>
													S({
														getRect: () => P.getBoundingClientRect(),
														match: D,
													}),
												);
												return;
											}
											v();
										});
									},
									T = s.registerUpdateListener(I);
								(0, C.onCleanup)(() => {
									T();
								});
							}),
						),
						(0, t.createComponent)(C.Show, {
							get when() {
								return l() !== null && s !== null;
							},
							get children() {
								return (0, t.createComponent)(w.LexicalMenu, {
									close: v,
									get resolution() {
										return l();
									},
									editor: s,
									anchorElementRef: $,
									get options() {
										return b.options;
									},
									get menuRenderFn() {
										return b.menuRenderFn;
									},
									get onSelectOption() {
										return b.onSelectOption;
									},
									shouldSplitNodeWithQuery: !0,
								});
							},
						})
					);
				}
			},
		),
		