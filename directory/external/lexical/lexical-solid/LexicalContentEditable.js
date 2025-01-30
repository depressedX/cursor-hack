import '../../../require.js';
import '../../../exports.js';
import '../../solid/web.js';
import '../../solid/web.js';
import '../../solid/web.js';
import '../../solid/web.js';
import '../../solid/solid.js';
import './LexicalComposerContext.js';
import '../../../vs/workbench/contrib/controlCommon/browser/solid.js';
import '../../../vs/base/common/constants.js';
define(
			de[1362],
			he([1, 0, 2, 2, 2, 2, 13, 181, 36, 58]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*web*/,
 E /*web*/,
 C /*solid*/,
 d /*LexicalComposerContext*/,
 m /*solid*/,
 r /*constants*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ContentEditable = a);
				const u = (0, t.template)("<div>");
				function a(h) {
					h = (0, C.mergeProps)({ role: "textbox", spellCheck: !0 }, h);
					const [c] = (0, d.useLexicalComposerContext)(),
						[n, g] = (0, C.createSignal)(!1);
					let p;
					(0, C.onMount)(() => {
						c.setRootElement(p);
					}),
						(0, C.onMount)(() => {
							g(c.isEditable()),
								(0, C.onCleanup)(
									c.registerEditableListener((s) => {
										g(s);
									}),
								);
						});
					function o(s, l) {
						return n() ? s : l;
					}
					const f = (0, m.$odc)(),
						b = () => {
							f.commandService.executeCommand(r.$SX).catch(() => {});
						};
					return (() => {
						const s = u();
						s.addEventListener("focus", b);
						const l = p;
						return (
							typeof l == "function" ? (0, i.use)(l, s) : (p = s),
							(0, w.spread)(
								s,
								(0, E.mergeProps)(
									{
										get "aria-activedescendant"() {
											return o(h.ariaActiveDescendant);
										},
										get "aria-autocomplete"() {
											return o(h.ariaAutoComplete, "none");
										},
										get "aria-controls"() {
											return o(h.ariaControls);
										},
										get "aria-describedby"() {
											return h.ariaDescribedBy;
										},
										get "aria-expanded"() {
											return o(
												h.role === "combobox" ? !!h.ariaExpanded : void 0,
											);
										},
										get "aria-label"() {
											return h.ariaLabel;
										},
										get "aria-labelledby"() {
											return h.ariaLabelledBy;
										},
										get "aria-multiline"() {
											return h.ariaMultiline;
										},
										get "aria-owns"() {
											return o(h.ariaOwns);
										},
										get "aria-required"() {
											return h.ariaRequired;
										},
										get autoCapitalize() {
											return h.autoCapitalize;
										},
										get class() {
											return h.class;
										},
										get contentEditable() {
											return n();
										},
										get "data-testid"() {
											return h.testid;
										},
										get id() {
											return h.id;
										},
										get role() {
											return o(h.role);
										},
										get spellcheck() {
											return h.spellCheck;
										},
										get style() {
											return h.style;
										},
										get tabIndex() {
											return h.tabIndex;
										},
										get ondragover() {
											return h.onDragOver;
										},
										get onDrop() {
											return h.onDrop;
										},
										get ondragleave() {
											return h.onDragLeave;
										},
									},
									() =>
										h.turnOffCmdZ
											? {
													onKeyDown: (y) => {
														(y.metaKey || y.ctrlKey) &&
															(y.key === "z" || y.key === "Z") &&
															(y.preventDefault(), y.stopPropagation());
													},
												}
											: {},
								),
								!1,
								!1,
							),
							s
						);
					})();
				}
			},
		);
	var Yi =
		(this && this.__exportStar) ||
		function (ce, e) {
			for (var t in ce)
				t !== "default" &&
					!Object.prototype.hasOwnProperty.call(e, t) &&
					Ns(e, ce, t);
		};
	