import '../../../require.js';
import '../../../exports.js';
import '../lexical-list/api.js';
import '../lexical/api.js';
import './LexicalComposerContext.js';
import '../lexical-utils/api.js';
import '../../solid/solid.js';
define(
			de[2601],
			he([1, 0, 924, 164, 181, 304, 13]),
			function (ce /*require*/,
 e /*exports*/,
 t /*api*/,
 i /*api*/,
 w /*LexicalComposerContext*/,
 E /*api*/,
 C /*solid*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.CheckListPlugin = d),
					(e.listenPointerDown = r),
					(e.handleCheckItemEvent = u),
					(e.handleClick = a),
					(e.handlePointerDown = h),
					(e.findEditor = c),
					(e.getActiveCheckListItem = n),
					(e.findCheckListItemSibling = g),
					(e.handleArrownUpOrDown = p);
				function d() {
					const [o] = (0, w.useLexicalComposerContext)();
					return (
						(0, C.createEffect)(() => {
							(0, C.onCleanup)(
								(0, E.mergeRegister)(
									o.registerCommand(
										t.INSERT_CHECK_LIST_COMMAND,
										() => ((0, t.insertList)(o, "check"), !0),
										i.COMMAND_PRIORITY_LOW,
									),
									o.registerCommand(
										i.KEY_ARROW_DOWN_COMMAND,
										(f) => p(f, o, !1),
										i.COMMAND_PRIORITY_LOW,
									),
									o.registerCommand(
										i.KEY_ARROW_UP_COMMAND,
										(f) => p(f, o, !0),
										i.COMMAND_PRIORITY_LOW,
									),
									o.registerCommand(
										i.KEY_ESCAPE_COMMAND,
										(f) => {
											if (n() != null) {
												const s = o.getRootElement();
												return s?.focus(), !0;
											}
											return !1;
										},
										i.COMMAND_PRIORITY_LOW,
									),
									o.registerCommand(
										i.KEY_SPACE_COMMAND,
										(f) => {
											const b = n();
											return b != null && o.isEditable()
												? (o.update(() => {
														const s = (0, i.$getNearestNodeFromDOMNode)(b);
														(0, t.$isListItemNode)(s) &&
															(f.preventDefault(), s.toggleChecked());
													}),
													!0)
												: !1;
										},
										i.COMMAND_PRIORITY_LOW,
									),
									o.registerCommand(
										i.KEY_ARROW_LEFT_COMMAND,
										(f) =>
											o.getEditorState().read(() => {
												const b = (0, i.$getSelection)();
												if ((0, i.$isRangeSelection)(b) && b.isCollapsed()) {
													const { anchor: s } = b,
														l = s.type === "element";
													if (l || s.offset === 0) {
														const y = s.getNode(),
															$ = (0, E.$findMatchingParent)(
																y,
																(v) =>
																	(0, i.$isElementNode)(v) && !v.isInline(),
															);
														if ((0, t.$isListItemNode)($)) {
															const v = $.getParent();
															if (
																(0, t.$isListNode)(v) &&
																v.getListType() === "check" &&
																(l || $.getFirstDescendant() === y)
															) {
																const S = o.getElementByKey($.__key);
																if (S != null && document.activeElement !== S)
																	return S.focus(), f.preventDefault(), !0;
															}
														}
													}
												}
												return !1;
											}),
										i.COMMAND_PRIORITY_LOW,
									),
									r(),
								),
							);
						}),
						null
					);
				}
				let m = 0;
				function r() {
					return (
						m++ === 0 &&
							(document.addEventListener("click", a),
							document.addEventListener("pointerdown", h)),
						() => {
							--m === 0 &&
								(document.removeEventListener("click", a),
								document.removeEventListener("pointerdown", h));
						}
					);
				}
				function u(o, f) {
					const b = o.target;
					if (b === null || !(0, E.isHTMLElement)(b)) return;
					const s = b.firstChild;
					if (
						s != null &&
						(0, E.isHTMLElement)(s) &&
						(s.tagName === "UL" || s.tagName === "OL")
					)
						return;
					const l = b.parentNode;
					if (!l || l.__lexicalListType !== "check") return;
					const y = o.pageX,
						$ = b.getBoundingClientRect();
					(b.dir === "rtl"
						? y < $.right && y > $.right - 20
						: y > $.left && y < $.left + 20) && f();
				}
				function a(o) {
					u(o, () => {
						const f = o.target,
							b = c(f);
						b != null &&
							b.isEditable() &&
							b.update(() => {
								if (o.target) {
									const s = (0, i.$getNearestNodeFromDOMNode)(f);
									(0, t.$isListItemNode)(s) && (f.focus(), s.toggleChecked());
								}
							});
					});
				}
				function h(o) {
					u(o, () => {
						o.preventDefault();
					});
				}
				function c(o) {
					let f = o;
					for (; f; ) {
						if (f.__lexicalEditor) return f.__lexicalEditor;
						f = f.parentNode;
					}
					return null;
				}
				function n() {
					const o = document.activeElement;
					return o != null &&
						o.tagName === "LI" &&
						o.parentNode != null &&
						o.parentNode.__lexicalListType === "check"
						? o
						: null;
				}
				function g(o, f) {
					let b = f ? o.getPreviousSibling() : o.getNextSibling(),
						s = o;
					for (; b == null && (0, t.$isListItemNode)(s); )
						(s = s.getParentOrThrow().getParent()),
							s != null &&
								(b = f ? s.getPreviousSibling() : s.getNextSibling());
					for (; (0, t.$isListItemNode)(b); ) {
						const l = f ? b.getLastChild() : b.getFirstChild();
						if (!(0, t.$isListNode)(l)) return b;
						b = f ? l.getLastChild() : l.getFirstChild();
					}
					return null;
				}
				function p(o, f, b) {
					const s = n();
					return (
						s != null &&
							f.update(() => {
								const l = (0, i.$getNearestNodeFromDOMNode)(s);
								if (!(0, t.$isListItemNode)(l)) return;
								const y = g(l, b);
								if (y != null) {
									y.selectStart();
									const $ = f.getElementByKey(y.__key);
									$ != null &&
										(o.preventDefault(),
										setTimeout(() => {
											$.focus();
										}, 0));
								}
							}),
						!1
					);
				}
			},
		)
