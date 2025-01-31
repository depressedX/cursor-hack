import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/solid.js';
import '../../../../../base/common/themables.js';
import '../codeSelections.js';
import './icons.js';
import '../../../ui/browser/scrollableDiv.js';
import '../../../controlCommon/browser/solid.js';
define(
			de[1980],
			he([1, 0, 2, 2, 2, 2, 2, 2, 2, 13, 26, 354, 502, 135, 36]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*web*/,
 E /*web*/,
 C /*web*/,
 d /*web*/,
 m /*web*/,
 r /*solid*/,
 u /*themables*/,
 a /*codeSelections*/,
 h /*icons*/,
 c /*scrollableDiv*/,
 n /*solid*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Cbc = void 0),
					(e.$Dbc = b);
				const g = (0, t.template)("<span>"),
					p = (0, t.template)(
						'<div><div class="input-box-code-selection-collapse-toggle">',
					),
					o = (0, t.template)("<a>"),
					f = (s, l) => {
						const [y, $] = (0, r.createSignal)(!0);
						return (() => {
							const v = p(),
								S = v.firstChild;
							return (
								v.style.setProperty("white-space", "pre"),
								(0, E.insert)(
									v,
									(0, m.createComponent)(c.$w0b, {
										scrollingDirection: "vertical",
										style: {
											width: "100%",
											height: "100%",
											"box-sizing": "border-box",
										},
										innerContainerStyle: {
											padding: "0.6rem 1rem",
											overflow: "hidden",
											width: "calc(100% - 2rem)",
										},
										get children() {
											return (0, m.createComponent)(r.For, {
												get each() {
													return s.doc?.pages;
												},
												children: (I, T) =>
													(() => {
														const P = o();
														return (
															P.addEventListener("click", () => {
																l.openerService.open(I.url);
															}),
															P.style.setProperty(
																"color",
																"var(--vscode-textLink-foreground)",
															),
															P.style.setProperty("overflow", "hidden"),
															P.style.setProperty("text-overflow", "ellipsis"),
															P.style.setProperty("white-space", "nowrap"),
															P.style.setProperty("display", "block"),
															P.style.setProperty("width", "100%"),
															(0, E.insert)(P, () => I.title),
															(0, d.effect)(
																(k) => {
																	const L = I.url,
																		D = I.url;
																	return (
																		L !== k._v$ &&
																			(0, w.setAttribute)(
																				P,
																				"href",
																				(k._v$ = L),
																			),
																		D !== k._v$2 &&
																			(0, w.setAttribute)(
																				P,
																				"title",
																				(k._v$2 = D),
																			),
																		k
																	);
																},
																{ _v$: void 0, _v$2: void 0 },
															),
															P
														);
													})(),
											});
										},
									}),
									S,
								),
								S.addEventListener("click", () => {
									$(!y());
								}),
								(0, E.insert)(
									S,
									(0, m.createComponent)(r.Switch, {
										get children() {
											return [
												(0, m.createComponent)(r.Match, {
													get when() {
														return y();
													},
													get children() {
														const I = g();
														return (
															(0, d.effect)(() =>
																(0, C.className)(
																	I,
																	u.ThemeIcon.asClassName(h.$E0b),
																),
															),
															I
														);
													},
												}),
												(0, m.createComponent)(r.Match, {
													get when() {
														return !y();
													},
													get children() {
														const I = g();
														return (
															(0, d.effect)(() =>
																(0, C.className)(
																	I,
																	u.ThemeIcon.asClassName(h.$F0b),
																),
															),
															I
														);
													},
												}),
											];
										},
									}),
								),
								(0, d.effect)(() =>
									(y() ? "100px" : "300px") != null
										? v.style.setProperty("height", y() ? "100px" : "300px")
										: v.style.removeProperty("height"),
								),
								v
							);
						})();
					};
				e.$Cbc = f;
				function b(s) {
					const l = (0, n.$odc)(),
						[y, $] = (0, r.createSignal)();
					return (
						(0, r.createEffect)(() => {
							y() === void 0 &&
								(0, a.$3fc)(
									l.aiService,
									l.reactiveStorageService,
									s.selection,
								).then((v) => {
									$(v);
								});
						}),
						(0, m.createComponent)(r.Show, {
							get when() {
								return (
									(0, i.memo)(() => !!(y() && y()?.doc))() &&
									(y()?.doc?.pages?.length ?? 0) > 0
								);
							},
							get children() {
								return (0, e.$Cbc)(y(), l);
							},
						})
					);
				}
			},
		)
