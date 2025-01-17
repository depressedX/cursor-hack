import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/solid.js';
import '../simpleButton/simpleButton.js';
import '../../../../../base/common/constants.js';
import '../../../../../base/common/codicons.js';
import '../../../../../css!vs/workbench/contrib/ui/browser/loadingStateButton/loadingStateButton.js';
define(
			de[1073],
			he([1, 0, 2, 2, 2, 2, 2, 13, 147, 58, 14, 2520]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$18b = void 0);
				const a = (0, t.template)(
						'<div class="cursor-loading-button-error">Something went wrong. Please contact <!> if this persists.',
					),
					h = (0, t.template)(
						'<div class="cursor-outer-loading-button-group"><div class="cursor-loading-button-group">',
					),
					c = (n) => {
						const [g, p] = (0, d.createSignal)("before"),
							[o, f] = (0, d.createSignal)(!1),
							b = (0, d.createMemo)(() => ({
								"border-radius": "2px",
								gap: "4px",
								...n.buttonProps.style,
							}));
						return (() => {
							const s = h(),
								l = s.firstChild;
							return (
								(0, i.insert)(
									l,
									(0, w.createComponent)(d.Show, {
										get when() {
											return (
												g() === "before" ||
												g() === "error" ||
												(n.revertToOrig && g() === "after")
											);
										},
										get children() {
											return (0, w.createComponent)(
												m.$rdc,
												(0, E.mergeProps)(() => n.buttonProps, {
													get style() {
														return b();
													},
													onClick: () => {
														f(!0);
														try {
															n.onClick()
																.then(() => {
																	f(!1), p("after");
																})
																.catch((y) => {
																	console.error(y), p("error");
																});
														} catch {
															p("error");
														}
													},
													get isLoading() {
														return o();
													},
												}),
											);
										},
									}),
									null,
								),
								(0, i.insert)(
									l,
									(0, w.createComponent)(d.Show, {
										get when() {
											return (
												(0, C.memo)(() => !n.revertToOrig)() && g() === "after"
											);
										},
										get children() {
											return (0, w.createComponent)(
												m.$rdc,
												(0, E.mergeProps)(() => n.buttonProps, {
													get style() {
														return { ...b(), opacity: 0.5 };
													},
													get codicon() {
														return u.$ak.check;
													},
													get title() {
														return n.doneTitle || "Done";
													},
													type: "disabled",
												}),
											);
										},
									}),
									null,
								),
								(0, i.insert)(
									s,
									(0, w.createComponent)(d.Show, {
										get when() {
											return g() === "error";
										},
										get children() {
											const y = a(),
												$ = y.firstChild,
												v = $.nextSibling,
												S = v.nextSibling;
											return (0, i.insert)(y, r.$vV, v), y;
										},
									}),
									null,
								),
								s
							);
						})();
					};
				e.$18b = c;
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	