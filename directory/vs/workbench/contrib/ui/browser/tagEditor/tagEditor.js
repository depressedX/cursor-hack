import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/solid.js';
import '../../../../../base/common/codicons.js';
import '../../../../../base/common/themables.js';
import '../inlineTextArea/inlineTextArea.js';
import '../simpleButton/simpleButton.js';
import '../../../../../css!vs/workbench/contrib/ui/browser/tagEditor/tagEditor.js';
define(
		de[4349],
		he([1, 0, 2, 2, 2, 2, 2, 2, 13, 14, 26, 695, 147, 2530]),
		function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$hDc = p),
				(a = xi(a));
			const c = (0, t.template)("<div>"),
				n = (0, t.template)(
					'<div class="tag-editor"><div class="element-list">',
				),
				g = (0, t.template)('<div class="element"><span></span><button>');
			function p(o) {
				const [f, b] = (0, m.createSignal)(""),
					[s, l] = (0, m.createSignal)(void 0),
					y = () => {
						const I = f().trim();
						I &&
							!o.elements.includes(I) &&
							(o.onChange([...o.elements, I]), b(""));
					},
					$ = (I) => {
						I.key === "Enter"
							? (I.preventDefault(), y())
							: I.key === "Escape"
								? b("")
								: I.key === "Backspace" &&
									f() === "" &&
									(I.preventDefault(),
									o.elements.length > 0 && o.onChange(o.elements.slice(0, -1)));
					},
					v = (I) => {
						const T = I.target;
						b(T.value);
					},
					S = { height: "25px", "box-sizing": "border-box" };
				return (() => {
					const I = n(),
						T = I.firstChild;
					return (
						(0, C.insert)(
							T,
							(0, d.createComponent)(m.For, {
								get each() {
									return o.elements;
								},
								children: (P) =>
									(() => {
										const k = g(),
											L = k.firstChild,
											D = L.nextSibling;
										return (
											k.style.setProperty("display", "flex"),
											k.style.setProperty("gap", "4px"),
											k.style.setProperty("align-items", "center"),
											k.style.setProperty("max-width", "240px"),
											k.style.setProperty("overflow", "hidden"),
											k.style.setProperty("text-overflow", "ellipsis"),
											k.style.setProperty("white-space", "nowrap"),
											L.style.setProperty("overflow", "hidden"),
											L.style.setProperty("text-overflow", "ellipsis"),
											L.style.setProperty("white-space", "nowrap"),
											(0, C.insert)(L, P),
											D.addEventListener("click", () =>
												o.onChange(o.elements.filter((M) => M !== P)),
											),
											(0, E.effect)(() =>
												(0, w.className)(
													D,
													"tag-editor-remove-button " +
														u.ThemeIcon.asClassName(r.$ak.x),
												),
											),
											k
										);
									})(),
							}),
						),
						(0, C.insert)(
							I,
							(0, d.createComponent)(m.Show, {
								get when() {
									return f() !== void 0;
								},
								get fallback() {
									return (0, d.createComponent)(h.$rdc, {
										size: "small",
										type: "true-secondary",
										onClick: () => {
											b(""),
												setTimeout(() => {
													s()?.focus();
												}, 0);
										},
										style: S,
										get children() {
											return ["Add ", (0, i.memo)(() => o.elementName)];
										},
									});
								},
								get children() {
									const P = c();
									return (
										P.style.setProperty("display", "flex"),
										P.style.setProperty("gap", "6px"),
										(0, C.insert)(
											P,
											(0, d.createComponent)(a.default, {
												get value() {
													return f();
												},
												size: "small",
												get extras() {
													return {
														onKeyDown: $,
														onInput: v,
														placeholder: "Enter new " + o.elementName,
													};
												},
												extraStyles: S,
												setRef: l,
											}),
											null,
										),
										(0, C.insert)(
											P,
											(0, d.createComponent)(h.$rdc, {
												size: "small",
												type: "true-secondary",
												onClick: y,
												style: S,
												children: "Add",
											}),
											null,
										),
										P
									);
								},
							}),
							null,
						),
						I
					);
				})();
			}
		},
	);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	