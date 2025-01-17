import '../../../../require.js';
import '../../../../exports.js';
import '../../../solid/web.js';
import '../LexicalComposerContext.js';
import '../../lexical-utils/api.js';
import '../../lexical/api.js';
import '../../../solid/solid.js';
import '../../../../vs/base/browser/dom.js';
import '../../../../vs/base/browser/window.js';
define(
			de[925],
			he([1, 0, 2, 181, 304, 164, 13, 7, 75]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.SCROLL_TYPEAHEAD_OPTION_INTO_VIEW_COMMAND =
						e.MenuOption =
						e.PUNCTUATION =
							void 0),
					(e.getFullMatchOffset = a),
					(e.$splitNodeContainingQuery = h),
					(e.getScrollParent = c),
					(e.isTriggerVisibleInNearestScrollContainer = n),
					(e.useDynamicPositioning = g),
					(e.LexicalMenu = p),
					(e.useMenuAnchorRef = o),
					(e.PUNCTUATION = `\\.,\\+\\*\\?\\$\\@\\|#{}\\(\\)\\^\\-\\[\\]\\\\/!%'"~=<>_:;`);
				class r {
					constructor(b) {
						(this.key = b),
							(this.ref = { current: null }),
							(this.setRefElement = this.setRefElement.bind(this));
					}
					setRefElement(b) {
						this.ref = { current: b };
					}
				}
				e.MenuOption = r;
				const u = (f) => {
					const b = (0, d.$Ogb)().document.getElementById("typeahead-menu");
					if (!b) return;
					const s = b.getBoundingClientRect();
					s.top + s.height > (0, d.$Ogb)().innerHeight &&
						b.scrollIntoView({ block: "center" }),
						s.top < 0 && b.scrollIntoView({ block: "center" }),
						f.scrollIntoView({ block: "nearest" });
				};
				function a(f, b, s) {
					let l = s;
					for (let y = l; y <= b.length; y++)
						f.substr(-y) === b.substr(0, y) && (l = y);
					return l;
				}
				function h(f) {
					const b = (0, E.$getSelection)();
					if (!(0, E.$isRangeSelection)(b) || !b.isCollapsed()) return null;
					const s = b.anchor;
					if (s.type !== "text") return null;
					const l = s.getNode();
					if (!l.isSimpleText()) return null;
					const y = s.offset,
						$ = l.getTextContent().slice(0, y),
						v = f.replaceableString.length,
						S = a($, f.matchingString, v),
						I = y - S;
					if (I < 0) return null;
					let T;
					return (
						I === 0 ? ([T] = l.splitText(y)) : ([, T] = l.splitText(I, y)), T
					);
				}
				function c(f, b) {
					let s = getComputedStyle(f);
					const l = s.position === "absolute",
						y = b ? /(auto|scroll|hidden)/ : /(auto|scroll)/;
					if (s.position === "fixed") return (0, d.$Ogb)().document.body;
					for (let $ = f; ($ = $.parentElement); )
						if (
							((s = getComputedStyle($)),
							!(l && s.position === "static") &&
								y.test(s.overflow + s.overflowY + s.overflowX))
						)
							return $;
					return (0, d.$Ogb)().document.body;
				}
				function n(f, b) {
					const s = f.getBoundingClientRect(),
						l = b.getBoundingClientRect();
					return s.top > l.top && s.top < l.bottom;
				}
				function g(f, b, s, l) {
					const [y] = (0, i.useLexicalComposerContext)(),
						$ = (0, d.$Ogb)().ResizeObserver;
					(0, C.createEffect)(() => {
						if (b != null && f() != null) {
							const v = y.getRootElement(),
								S = v != null ? c(v, !1) : (0, d.$Ogb)().document.body;
							let I = !1,
								T = n(b, S);
							const P = function () {
									I ||
										((0, d.$Ogb)().requestAnimationFrame(function () {
											s(), (I = !1);
										}),
										(I = !0));
									const L = n(b, S);
									L !== T && ((T = L), l?.(L));
								},
								k = new $(s);
							(0, d.$Ogb)().addEventListener("resize", s),
								(0, d.$Ogb)().document.addEventListener("scroll", P, {
									capture: !0,
									passive: !0,
								}),
								k.observe(b),
								(0, C.onCleanup)(() => {
									k.unobserve(b),
										(0, d.$Ogb)().removeEventListener("resize", s),
										(0, d.$Ogb)().document.removeEventListener("scroll", P);
								});
						}
					});
				}
				e.SCROLL_TYPEAHEAD_OPTION_INTO_VIEW_COMMAND = (0, E.createCommand)(
					"SCROLL_TYPEAHEAD_OPTION_INTO_VIEW_COMMAND",
				);
				function p(f) {
					const [b, s] = (0, C.createSignal)(null),
						[l, y] = (0, C.createSignal)(0);
					(0, C.createEffect)(
						(0, C.on)(
							() => f.resolution.match && f.resolution.match.matchingString,
							() => {
								s(0);
							},
						),
					);
					const $ = (I, T) => {
							f.editor.update(() => {
								const P =
									f.resolution.match != null && f.shouldSplitNodeWithQuery
										? h(f.resolution.match)
										: null;
								f.onSelectOption(
									I,
									P,
									f.close,
									f.resolution.match ? f.resolution.match.matchingString : "",
									T,
								);
							});
						},
						v = (I) => {
							s(I), y(l() + 1);
							const T = f.editor.getRootElement();
							T !== null &&
								(T.setAttribute("aria-activedescendant", "typeahead-item-" + I),
								s(I));
						};
					(0, C.createEffect)(() => {
						(0, C.onCleanup)(() => {
							const I = f.editor.getRootElement();
							I !== null && I.removeAttribute("aria-activedescendant");
						});
					});
					const S = (0, C.createMemo)(() =>
						f.options.filter((I) => "type" in I && I.type !== "staticheading"),
					);
					return (
						(0, C.createEffect)(() => {
							S() === null ? s(null) : b() === null && v(0);
						}),
						(0, C.createEffect)(() => {
							S().length <= (b() ?? 0) && b() !== 0 && v(0);
						}),
						(0, C.createEffect)(() => {
							(0, C.onCleanup)(() =>
								(0, w.mergeRegister)(
									f.editor.registerCommand(
										e.SCROLL_TYPEAHEAD_OPTION_INTO_VIEW_COMMAND,
										({ option: I }) =>
											I.ref && I.ref.current != null
												? (u(I.ref.current), !0)
												: !1,
										E.COMMAND_PRIORITY_LOW,
									),
								),
							);
						}),
						(0, C.createEffect)(() => {
							(0, C.onCleanup)(
								(0, w.mergeRegister)(
									f.editor.registerCommand(
										E.KEY_ARROW_DOWN_COMMAND,
										(I) => {
											const T = I;
											if (S() !== null && S().length && b() !== null) {
												const P = b() !== S().length - 1 ? b() + 1 : 0;
												s(P);
												const k = S()[P];
												return (
													k.ref != null &&
														k.ref.current &&
														f.editor.dispatchCommand(
															e.SCROLL_TYPEAHEAD_OPTION_INTO_VIEW_COMMAND,
															{ index: P, option: k },
														),
													T.preventDefault(),
													T.stopImmediatePropagation(),
													!0
												);
											}
											return !1;
										},
										E.COMMAND_PRIORITY_CRITICAL,
									),
									f.editor.registerCommand(
										E.KEY_ARROW_UP_COMMAND,
										(I) => {
											const T = I;
											if (S() !== null && S().length && b() !== null) {
												const P = b() !== 0 ? b() - 1 : S().length - 1;
												v(P);
												const k = S()[P];
												return (
													k.ref != null && k.ref.current && u(k.ref.current),
													T.preventDefault(),
													T.stopImmediatePropagation(),
													!0
												);
											}
											return !1;
										},
										E.COMMAND_PRIORITY_CRITICAL,
									),
									f.editor.registerCommand(
										E.KEY_ESCAPE_COMMAND,
										(I) => {
											const T = I;
											return (
												T.preventDefault(),
												T.stopImmediatePropagation(),
												f.close(),
												!0
											);
										},
										E.COMMAND_PRIORITY_LOW,
									),
									f.editor.registerCommand(
										E.KEY_TAB_COMMAND,
										(I) => {
											const T = I;
											return S() === null || b === null || S()[b()] == null
												? !1
												: (T.preventDefault(),
													T.stopImmediatePropagation(),
													$(S()[b()], T),
													!0);
										},
										E.COMMAND_PRIORITY_LOW,
									),
									f.editor.registerCommand(
										E.KEY_ENTER_COMMAND,
										(I) =>
											S() === null || b === null || S()[b()] == null
												? !1
												: (I !== null &&
														(I.preventDefault(), I.stopImmediatePropagation()),
													$(S()[b()], I),
													!0),
										E.COMMAND_PRIORITY_CRITICAL,
									),
								),
							);
						}),
						(0, t.createComponent)(f.menuRenderFn, {
							get options() {
								return f.options;
							},
							get selectedIndex() {
								return b();
							},
							selectOptionAndCleanUp: $,
							setHighlightedIndex: v,
							get anchorElementRef() {
								return f.anchorElementRef;
							},
							get matchingString() {
								return f.resolution.match
									? f.resolution.match.matchingString
									: null;
							},
							get match() {
								return f.resolution.match;
							},
						})
					);
				}
				function o(f, b, s, l) {
					const [y] = (0, i.useLexicalComposerContext)();
					let $ = m.$Bfb.document.createElement("div");
					const v = () => {
						const I = y.getRootElement(),
							T = $,
							P = T.firstChild;
						if (I !== null && f() !== null) {
							const { left: k, top: L, width: D, height: M } = f().getRect();
							if (
								((T.style.top = `${L + window.pageYOffset}px`),
								(T.style.left = `${k + window.pageXOffset}px`),
								(T.style.height = `${M}px`),
								(T.style.width = `${D}px`),
								P !== null)
							) {
								const N = P.getBoundingClientRect(),
									A = N.height,
									R = N.width,
									O = I.getBoundingClientRect();
								k + R > O.right &&
									(T.style.left = `${k - R + window.pageXOffset}px`);
								const B = 10;
								(L + A > window.innerHeight || L + A > O.bottom) &&
									L - O.top > A &&
									(T.style.top = `${L - A + window.pageYOffset - (M + B)}px`);
							}
							T.isConnected ||
								(s != null && (T.className = s),
								T.setAttribute("aria-label", "Typeahead menu"),
								T.setAttribute("id", "typeahead-menu"),
								T.setAttribute("role", "listbox"),
								(T.style.display = "block"),
								(T.style.position = "absolute"),
								(l ?? (0, d.$Ogb)().document.body).append(T)),
								($ = T),
								I.setAttribute("aria-controls", "typeahead-menu");
						}
					};
					return (
						(0, C.createEffect)(() => {
							const I = y.getRootElement();
							f() !== null &&
								(v(),
								(0, C.onCleanup)(() => {
									I !== null && I.removeAttribute("aria-controls");
									const T = $;
									T !== null && T.isConnected && T.remove();
								}));
						}),
						g(f, $, v, (I) => {
							f() !== null && (I || b(null));
						}),
						{
							get current() {
								return $;
							},
						}
					);
				}
			},
		),
		