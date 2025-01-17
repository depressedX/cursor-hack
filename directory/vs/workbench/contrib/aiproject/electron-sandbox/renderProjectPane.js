import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/solid.js';
import '../../controlCommon/browser/solid.js';
import '../../ui/browser/simpleButton/simpleButton.js';
import '../../../../base/common/codicons.js';
import '../../../../editor/browser/widget/markdownRenderer/browser/markdownRenderer.js';
define(
			de[4251],
			he([1, 0, 2, 2, 2, 2, 13, 36, 147, 14, 251]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Afd = p);
				const a = (0, t.template)(
						"<div><div><div>Step </div><div></div></div><div>",
					),
					h = (0, t.template)("<div>"),
					c = (0, t.template)(
						'<div class="cursor-overlay-div"><div><div>Generating Project...</div><div></div></div><div>',
					),
					n = (o) => {
						const [f, b] = (0, C.createSignal)([]);
						return (
							(0, C.createEffect)(() => {
								f().map((s, l) => {
									const y = o.data.outputs[l]
										.replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;")
										.replace(/\n/g, "<br>")
										.replace("  ", "&nbsp;&nbsp;");
									s.innerHTML = u.$Qzb._ttpTokenizer?.createHTML(y) ?? y;
								});
							}),
							(() => {
								const s = a(),
									l = s.firstChild,
									y = l.firstChild,
									$ = y.firstChild,
									v = y.nextSibling,
									S = l.nextSibling;
								return (
									s.style.setProperty("display", "flex"),
									s.style.setProperty("flex-direction", "column"),
									s.style.setProperty("align-items", "center"),
									l.style.setProperty("display", "flex"),
									l.style.setProperty("flex-direction", "row"),
									l.style.setProperty("align-items", "center"),
									l.style.setProperty("width", "100%"),
									l.style.setProperty("margin-top", "12px"),
									l.style.setProperty("background-color", "#222"),
									l.style.setProperty("padding", "8px 0px"),
									l.style.setProperty("font-size", "14px"),
									y.style.setProperty("margin-left", "16px"),
									y.style.setProperty("margin-right", "8px"),
									(0, E.insert)(y, () => o.index, null),
									(0, E.insert)(v, () => o.data.title),
									S.style.setProperty("display", "flex"),
									S.style.setProperty("flex-direction", "column"),
									S.style.setProperty("justify-content", "center"),
									S.style.setProperty("width", "100%"),
									S.style.setProperty("color", "#ccc"),
									S.style.setProperty("padding", "8px 0px"),
									S.style.setProperty("font-size", "12px"),
									S.style.setProperty("font-family", "Courier"),
									(0, E.insert)(
										S,
										(0, w.createComponent)(C.For, {
											get each() {
												return o.data.outputs;
											},
											children: (I, T) =>
												(() => {
													const P = h();
													return (
														(0, i.use)((k) => {
															b(
																f()
																	.slice(0, T())
																	.concat([k])
																	.concat(f().slice(T() + 1)),
															);
														}, P),
														P.style.setProperty("margin-left", "32px"),
														P
													);
												})(),
										}),
									),
									s
								);
							})()
						);
					},
					g = (o) => {
						const f = (0, d.$odc)();
						return (
							(0, C.createEffect)(() => {
								f.telemetryService.publicLogCapture("viewed.aiproject.pane");
							}),
							(() => {
								const b = c(),
									s = b.firstChild,
									l = s.firstChild,
									y = l.nextSibling,
									$ = s.nextSibling;
								return (
									b.style.setProperty("padding", "16px 0px 12px 0px"),
									b.style.setProperty("border-radius", "0px"),
									b.style.setProperty("font-size", "16px"),
									b.style.setProperty(
										"background-color",
										"var(--vscode-editor-background)",
									),
									b.style.setProperty("opacity", "0.8"),
									b.style.setProperty("border", "1px solid #333"),
									b.style.setProperty("z-index", "1000001"),
									b.style.setProperty("color", "#fff"),
									b.style.setProperty("position", "absolute"),
									b.style.setProperty("top", "100px"),
									b.style.setProperty("right", "64px"),
									b.style.setProperty("width", "500px"),
									b.style.setProperty("display", "flex"),
									b.style.setProperty("flex-direction", "column"),
									b.style.setProperty("max-height", "600px"),
									b.style.setProperty("overflow", "auto"),
									s.style.setProperty("display", "flex"),
									s.style.setProperty("align-items", "center"),
									l.style.setProperty("display", "flex"),
									l.style.setProperty("align-items", "center"),
									l.style.setProperty("margin-left", "16px"),
									l.style.setProperty("margin-bottom", "0px"),
									l.style.setProperty("font-size", "12px"),
									l.style.setProperty("color", "var(--vscode-foreground)"),
									l.style.setProperty("text-transform", "uppercase"),
									y.style.setProperty("flex-grow", "1"),
									(0, E.insert)(
										s,
										(0, w.createComponent)(m.$rdc, {
											get codicon() {
												return r.$ak.x;
											},
											type: "secondary",
											onClick: () => {
												o.closeModal(), console.log("cancel");
											},
											extras: {
												style: { "font-size": "16px", "margin-right": "16px" },
											},
										}),
										null,
									),
									(0, E.insert)(
										$,
										(0, w.createComponent)(C.For, {
											get each() {
												return o.reactiveStorageService.nonPersistentStorage
													.aiProjectSteps;
											},
											children: (v, S) =>
												(0, w.createComponent)(n, {
													get index() {
														return S().toString();
													},
													data: v,
												}),
										}),
									),
									b
								);
							})()
						);
					};
				function p({
					container: o,
					isModalOpen: f,
					paneDelegate: b,
					onClose: s,
					reactiveStorageService: l,
					instantiationService: y,
				}) {
					return (0, d.$ndc)(
						() =>
							(0, w.createComponent)(g, {
								isModalOpen: f,
								paneDelegate: b,
								closeModal: () => {
									s();
								},
								reactiveStorageService: l,
							}),
						o,
						y,
					);
				}
			},
		),
		