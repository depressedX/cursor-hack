import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/solid.js';
import '../../../controlCommon/browser/solid.js';
import '../../../../../base/common/codicons.js';
import '../../../../../platform/theme/common/iconRegistry.js';
import '../../../../../base/common/themables.js';
import '../../../ui/browser/aiInput/aiInput2.js';
import '../../../../../platform/reactivestorage/browser/reactiveStorageTypes.js';
import '../../../../../../proto/aiserver/v1/aiserver_pb.js';
import '../../../../../../external/lexical/lexical/lexical.js';
import '../../../../../base/common/platform.js';
import '../../../../../css!vs/workbench/contrib/aiFeedback/browser/components/aiFeedbackPane.js';
define(
			de[4310],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 13, 36, 14, 79, 26, 450, 205, 148, 158,
				12, 2362,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*web*/,
				i /*web*/,
				w /*web*/,
				E /*web*/,
				C /*web*/,
				d /*web*/,
				m /*web*/,
				r /*web*/,
				u /*web*/,
				a /*solid*/,
				h /*solid*/,
				c /*codicons*/,
				n /*iconRegistry*/,
				g /*themables*/,
				p /*aiInput2*/,
				o /*reactiveStorageTypes*/,
				f /*aiserver_pb*/,
				b /*lexical*/,
				s /*platform*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$XZc = k);
				const l = (0, t.template)("<div>Oh! Your issue is empty. :("),
					y = (0, t.template)("<div>Oh! Your email seems invalid. :("),
					$ = (0, t.template)(
						`<div class="feedback-container-backing"><div class="feedback-container"><div class="feedback"><div class="feedback__header"><div class="feedback__title">Cursor Feedback</div><div><i class="fas fa-times"></i></div></div><div><div class="feedback__subtitle">Help us improve the Cursor experience by providing feedback.</div><div><div><div><span class="feedback__button_title">Idea</span><div></div><span></span></div><div class="feedback__button_subtitle">I think this'd be cool!</div></div><div><div><span class="feedback__button_title">Small Bug</span><div></div><span></span></div><div class="feedback__button_subtitle">This is off...</div></div><div><div><span class="feedback__button_title">Urgent Bug</span><div></div><span></span></div><div class="feedback__button_subtitle">I can't use Cursor!</div></div></div><div></div><div><input type="checkbox" id="consoleLogs" name="consoleLogs"><label for="consoleLogs"><span>Include console logs</span></label></div></div><div><div class="feedback__button feedback__button--submit"><div></div><div class="feedback__button--submit-title">Submit</div><div class="feedback__button--submit-subtitle"></div></div></div></div><div>`,
					),
					v = (0, t.template)(
						'<div class="screenshot-drop-zone">Drop your screenshot here',
					),
					S = (0, t.template)('<input type="file" accept="image/*">'),
					I = (0, t.template)('<div class="screenshot-feedback-container">'),
					T = (0, t.template)(
						'<div class="screenshot-dropped-zone"><div><i class="fas fa-times"></i></div><img>',
					),
					P = (0, n.$$O)(
						"tabbar-remove-chat",
						c.$ak.x,
						"Icon for removing a tab in the tab list for chats.",
					);
				function k(D) {
					const M = (0, h.$odc)();
					let N;
					const [A, R] = (0, a.createSignal)(""),
						O = (0, a.createMemo)(
							() =>
								M.reactiveStorageService.nonPersistentStorage.feedbackState
									.type ?? f.ReportBugRequest_BugType.LOW,
						),
						B = (0, a.createMemo)(
							() =>
								M.reactiveStorageService.nonPersistentStorage.feedbackState
									.description ?? "",
						),
						U = (0, a.createMemo)(
							() =>
								M.reactiveStorageService.nonPersistentStorage.feedbackState
									.screenshots,
						),
						[z, F] = (0, a.createSignal)(
							M.cursorAuthenticationService.reactivePrivacyMode() !== !0,
						),
						[x, H] = (0, a.createSignal)(!1),
						[q, V] = (0, a.createSignal)(!1),
						G = (Y) => {
							M.reactiveStorageService.setNonPersistentStorage(
								"feedbackState",
								"screenshots",
								(ie) => [...ie, Y],
							);
						},
						K = async () => {
							if (B() === "") {
								H(!0);
								return;
							}
							function Y(te) {
								return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(te);
							}
							const ie = [],
								ne = [];
							for (const te of U()) {
								const Q = new FileReader();
								Q.readAsDataURL(te);
								const Z = new Promise((se, re) => {
									Q.onloadend = () => {
										ie.push(Q.result), se();
									};
								});
								ne.push(Z);
							}
							await Promise.all(ne);
							const _ = O();
							D.onSubmit(_, B(), A(), z(), ie),
								M.reactiveStorageService.setNonPersistentStorage(
									"feedbackState",
									"description",
									void 0,
								),
								M.reactiveStorageService.setNonPersistentStorage(
									"feedbackState",
									"type",
									void 0,
								),
								M.reactiveStorageService.setNonPersistentStorage(
									"feedbackState",
									"screenshots",
									[],
								);
						},
						[J, W] = (0, a.createSignal)(!1),
						X = new o.$Zzb();
					return (
						(0, a.createEffect)(() => {
							const Y = X;
							setTimeout(() => {
								Y && Y.focus();
							}, 20);
						}),
						(() => {
							const Y = $(),
								ie = Y.firstChild,
								ne = ie.firstChild,
								ee = ne.firstChild,
								_ = ee.firstChild,
								te = _.nextSibling,
								Q = ee.nextSibling,
								Z = Q.firstChild,
								se = Z.nextSibling,
								re = se.firstChild,
								le = re.firstChild,
								oe = le.firstChild,
								ae = oe.nextSibling,
								pe = ae.nextSibling,
								$e = re.nextSibling,
								ye = $e.firstChild,
								ue = ye.firstChild,
								fe = ue.nextSibling,
								me = fe.nextSibling,
								ve = $e.nextSibling,
								ge = ve.firstChild,
								be = ge.firstChild,
								Ce = be.nextSibling,
								Le = Ce.nextSibling,
								Fe = se.nextSibling,
								Oe = Fe.nextSibling,
								xe = Oe.firstChild,
								He = xe.nextSibling,
								Ke = He.firstChild,
								Je = Q.nextSibling,
								Te = Je.firstChild,
								Ee = Te.firstChild,
								Ie = Ee.nextSibling,
								Be = Ie.nextSibling,
								Se = ne.nextSibling;
							return (
								Y.addEventListener("click", (ke) => {
									D.closePane(), ke.stopPropagation();
								}),
								ie.addEventListener("click", (ke) => {
									ke.stopPropagation();
								}),
								ee.style.setProperty("display", "flex"),
								ee.style.setProperty("justify-content", "space-between"),
								ee.style.setProperty("align-items", "center"),
								te.addEventListener("click", () => {
									D.closePane();
								}),
								Q.style.setProperty("display", "flex"),
								Q.style.setProperty("flex-direction", "column"),
								Q.style.setProperty("gap", "10px"),
								se.style.setProperty("display", "grid"),
								se.style.setProperty("justify-content", "space-between"),
								se.style.setProperty("align-items", "center"),
								se.style.setProperty("width", "100%"),
								se.style.setProperty("gap", "8px"),
								se.style.setProperty("grid", "auto-flow / 1fr 1fr 1fr"),
								re.addEventListener("click", () => {
									M.reactiveStorageService.setNonPersistentStorage(
										"feedbackState",
										"type",
										f.ReportBugRequest_BugType.IDEA,
									);
								}),
								re.style.setProperty("flex-direction", "column"),
								re.style.setProperty("align-items", "flex-start"),
								le.style.setProperty("display", "flex"),
								le.style.setProperty("justify-content", "space-between"),
								le.style.setProperty("width", "100%"),
								ae.style.setProperty("flex-grow", "1"),
								pe.style.setProperty("font-size", "12px"),
								(0, u.insert)(pe, `${s.$m ? "\u2318" : "ctrl+"}1`),
								$e.addEventListener("click", () => {
									M.reactiveStorageService.setNonPersistentStorage(
										"feedbackState",
										"type",
										f.ReportBugRequest_BugType.LOW,
									);
								}),
								$e.style.setProperty("flex-direction", "column"),
								$e.style.setProperty("align-items", "flex-start"),
								ye.style.setProperty("display", "flex"),
								ye.style.setProperty("justify-content", "space-between"),
								ye.style.setProperty("width", "100%"),
								fe.style.setProperty("flex-grow", "1"),
								me.style.setProperty("font-size", "12px"),
								(0, u.insert)(me, `${s.$m ? "\u2318" : "ctrl+"}2`),
								ve.addEventListener("click", () => {
									M.reactiveStorageService.setNonPersistentStorage(
										"feedbackState",
										"type",
										f.ReportBugRequest_BugType.URGENT,
									);
								}),
								ve.style.setProperty("flex-direction", "column"),
								ve.style.setProperty("align-items", "flex-start"),
								ge.style.setProperty("display", "flex"),
								ge.style.setProperty("justify-content", "space-between"),
								ge.style.setProperty("width", "100%"),
								Ce.style.setProperty("flex-grow", "1"),
								Le.style.setProperty("font-size", "12px"),
								Le.style.setProperty("text-align", "right"),
								(0, u.insert)(Le, `${s.$m ? "\u2318" : "ctrl+"}3`),
								Fe.addEventListener("click", () => {
									X.focus();
								}),
								Fe.style.setProperty("min-height", "200px"),
								Fe.style.setProperty("font-size", "13px"),
								Fe.style.setProperty(
									"background-color",
									"var(--vscode-input-background)",
								),
								Fe.style.setProperty("color", "var(--vscode-input-foreground)"),
								Fe.style.setProperty(
									"border",
									"solid 1px var(--vscode-input-border,transparent)",
								),
								Fe.style.setProperty("border-radius", "0.25rem"),
								Fe.style.setProperty("padding", "0.5rem"),
								(0, u.insert)(
									Fe,
									(0, m.createComponent)(p.$Tac, {
										inputBoxDelegate: X,
										get initText() {
											return B();
										},
										get placeholder() {
											return O() === f.ReportBugRequest_BugType.IDEA
												? "Describe your idea..."
												: "Describe the issue...";
										},
										setText: (ke) => {
											M.reactiveStorageService.setNonPersistentStorage(
												"feedbackState",
												"description",
												ke,
											);
										},
										onEscape: () => {
											D.closePane();
										},
										onSubmit: (ke) => "do-not-stop-propagation",
										setIsFocused: (ke) => {
											W(ke);
										},
										extraCommandListeners: [
											{
												command: b.KEY_COMMAND_2_COMMAND,
												callback: (ke) => (
													M.reactiveStorageService.setNonPersistentStorage(
														"feedbackState",
														"type",
														f.ReportBugRequest_BugType.LOW,
													),
													ke.stopImmediatePropagation(),
													!0
												),
											},
											{
												command: b.KEY_COMMAND_3_COMMAND,
												callback: (ke) => (
													M.reactiveStorageService.setNonPersistentStorage(
														"feedbackState",
														"type",
														f.ReportBugRequest_BugType.URGENT,
													),
													ke.stopImmediatePropagation(),
													!0
												),
											},
											{
												command: b.KEY_COMMAND_1_COMMAND,
												callback: (ke) => (
													M.reactiveStorageService.setNonPersistentStorage(
														"feedbackState",
														"type",
														f.ReportBugRequest_BugType.IDEA,
													),
													ke.stopImmediatePropagation(),
													!0
												),
											},
											{
												command: b.KEY_COMMAND_ENTER_COMMAND,
												callback: (ke) => (
													K().catch((Ue) => {
														console.error(Ue);
													}),
													ke.stopImmediatePropagation(),
													!0
												),
											},
										],
									}),
								),
								Oe.style.setProperty("font-size", "12px"),
								Oe.style.setProperty("display", "flex"),
								Oe.style.setProperty("align-items", "center"),
								Oe.style.setProperty("opacity", "0.5"),
								xe.addEventListener("change", (ke) => {
									M.cursorAuthenticationService.reactivePrivacyMode() ||
										F(ke.target.checked);
								}),
								xe.style.setProperty("width", "12px"),
								(0, u.insert)(
									He,
									(0, m.createComponent)(a.Show, {
										get when() {
											return M.cursorAuthenticationService.reactivePrivacyMode();
										},
										children: " (logs are never included when on privacy mode)",
									}),
									null,
								),
								Je.style.setProperty("display", "flex"),
								Je.style.setProperty("flex-direction", "row"),
								Je.style.setProperty("justify-content", "flex-end"),
								Je.style.setProperty("align-items", "center"),
								(0, u.insert)(
									Je,
									(0, m.createComponent)(a.Show, {
										get when() {
											return x();
										},
										get children() {
											const ke = l();
											return (
												ke.style.setProperty(
													"color",
													"var(--vscode-inputValidation-warningBorder)",
												),
												ke.style.setProperty("font-size", "12px"),
												ke.style.setProperty("font-weight", "bold"),
												ke.style.setProperty("font-family", "monospace"),
												ke.style.setProperty("flex-grow", "1"),
												ke.style.setProperty("padding-left", "12px"),
												ke.style.setProperty("width", "220px"),
												ke
											);
										},
									}),
									Te,
								),
								(0, u.insert)(
									Je,
									(0, m.createComponent)(a.Show, {
										get when() {
											return q();
										},
										get children() {
											const ke = y();
											return (
												ke.style.setProperty(
													"color",
													"var(--vscode-inputValidation-warningBorder)",
												),
												ke.style.setProperty("font-size", "12px"),
												ke.style.setProperty("font-weight", "bold"),
												ke.style.setProperty("font-family", "monospace"),
												ke.style.setProperty("flex-grow", "1"),
												ke.style.setProperty("padding-left", "12px"),
												ke.style.setProperty("width", "220px"),
												ke
											);
										},
									}),
									Te,
								),
								Te.addEventListener("click", K),
								Ee.style.setProperty("font-size", "12px"),
								Ee.style.setProperty("color", "hsl(209, 90%, 100%)"),
								(0, u.insert)(Ee, `${s.$m ? "\u2318" : "ctrl+"}\u23CE`),
								(0, u.insert)(
									Be,
									(() => {
										const ke = (0, r.memo)(
											() => O() === f.ReportBugRequest_BugType.LOW,
										);
										return () =>
											ke()
												? "Thanks for the feedback!"
												: (() => {
														const Ue = (0, r.memo)(
															() => O() === f.ReportBugRequest_BugType.URGENT,
														);
														return () =>
															Ue()
																? "Oh no... We will fix this ASAP!"
																: O() === f.ReportBugRequest_BugType.IDEA
																	? "Thanks for the idea!"
																	: "";
													})();
									})(),
								),
								Se.style.setProperty("display", "flex"),
								Se.style.setProperty("flex-direction", "row"),
								Se.style.setProperty("flex-wrap", "wrap"),
								Se.style.setProperty("width", "100%"),
								Se.style.setProperty("gap", "10px"),
								(0, u.insert)(
									Se,
									(0, m.createComponent)(a.For, {
										get each() {
											return [...U(), void 0];
										},
										children: (ke, Ue) =>
											(0, m.createComponent)(L, {
												onImageDrop: G,
												image: ke,
												removeImage: () => {
													M.reactiveStorageService.setNonPersistentStorage(
														"feedbackState",
														"screenshots",
														U().filter((qe, Ae) => Ae !== Ue()),
													);
												},
											}),
									}),
								),
								(0, d.effect)(
									(ke) => {
										const Ue = [
												"feedback__dismiss",
												g.ThemeIcon.asClassName(P),
											].join(" "),
											qe = `feedback__button feedback__button--low ${O() === f.ReportBugRequest_BugType.IDEA ? "selected" : ""}`,
											Ae = `feedback__button feedback__button--medium ${O() === f.ReportBugRequest_BugType.LOW ? "selected" : ""}`,
											Me = `feedback__button feedback__button--high ${O() === f.ReportBugRequest_BugType.URGENT ? "selected" : ""}`,
											De = M.cursorAuthenticationService.reactivePrivacyMode(),
											Re = M.cursorAuthenticationService.reactivePrivacyMode()
												? "line-through"
												: "none",
											je = O() === f.ReportBugRequest_BugType.LOW,
											Ve = O() === f.ReportBugRequest_BugType.URGENT,
											Ze = O() === f.ReportBugRequest_BugType.IDEA;
										return (
											Ue !== ke._v$ && (0, C.className)(te, (ke._v$ = Ue)),
											qe !== ke._v$2 && (0, C.className)(re, (ke._v$2 = qe)),
											Ae !== ke._v$3 && (0, C.className)($e, (ke._v$3 = Ae)),
											Me !== ke._v$4 && (0, C.className)(ve, (ke._v$4 = Me)),
											De !== ke._v$5 && (xe.disabled = ke._v$5 = De),
											Re !== ke._v$6 &&
												((ke._v$6 = Re) != null
													? Ke.style.setProperty("text-decoration", Re)
													: Ke.style.removeProperty("text-decoration")),
											je !== ke._v$7 &&
												Te.classList.toggle(
													"feedback__button--submit-medium",
													(ke._v$7 = je),
												),
											Ve !== ke._v$8 &&
												Te.classList.toggle(
													"feedback__button--submit-high",
													(ke._v$8 = Ve),
												),
											Ze !== ke._v$9 &&
												Te.classList.toggle(
													"feedback__button--submit-low",
													(ke._v$9 = Ze),
												),
											ke
										);
									},
									{
										_v$: void 0,
										_v$2: void 0,
										_v$3: void 0,
										_v$4: void 0,
										_v$5: void 0,
										_v$6: void 0,
										_v$7: void 0,
										_v$8: void 0,
										_v$9: void 0,
									},
								),
								(0, d.effect)(() => (xe.checked = z())),
								Y
							);
						})()
					);
				}
				const L = (D) => {
					let M, N;
					const A = (F) => {
							F.preventDefault(), F.stopPropagation();
						},
						R = (F) => {
							F.preventDefault(),
								F.stopPropagation(),
								M.classList.add("drag-over");
						},
						O = (F) => {
							F.preventDefault(),
								F.stopPropagation(),
								M.classList.remove("drag-over");
						},
						B = (F) => {
							F.preventDefault(),
								F.stopPropagation(),
								M.classList.remove("drag-over");
							const x = F.dataTransfer.files;
							if (x.length > 0) {
								const H = x[0];
								H.type.startsWith("image/") && D.onImageDrop(H);
							}
						},
						U = (F) => {
							F.stopPropagation(), N.click();
						},
						z = (F) => {
							const x = F.target.files;
							if (x && x.length > 0) {
								const H = x[0];
								H.type.startsWith("image/") && D.onImageDrop(H);
							}
						};
					return (() => {
						const F = I();
						return (
							F.addEventListener("click", (x) => {
								x.stopPropagation();
							}),
							(0, E.use)((x) => {
								M = x;
							}, F),
							F.style.setProperty("width", "100%"),
							F.style.setProperty("height", "100%"),
							(0, u.insert)(
								F,
								(0, m.createComponent)(a.Switch, {
									get children() {
										return [
											(0, m.createComponent)(a.Match, {
												get when() {
													return !D.image;
												},
												get children() {
													return [
														(() => {
															const x = v();
															return (
																x.addEventListener("click", U),
																x.addEventListener("drop", B),
																x.addEventListener("dragleave", O),
																x.addEventListener("dragenter", R),
																x.addEventListener("dragover", A),
																x
															);
														})(),
														(() => {
															const x = S();
															return (
																x.addEventListener("change", z),
																(0, E.use)((H) => {
																	N = H;
																}, x),
																x.style.setProperty("display", "none"),
																x
															);
														})(),
													];
												},
											}),
											(0, m.createComponent)(a.Match, {
												get when() {
													return D.image;
												},
												children: (x) =>
													(() => {
														const H = T(),
															q = H.firstChild,
															V = q.nextSibling;
														return (
															H.style.setProperty("position", "relative"),
															(0, w.addEventListener)(
																q,
																"click",
																D.removeImage,
															),
															q.style.setProperty("cursor", "pointer"),
															q.style.setProperty("position", "absolute"),
															q.style.setProperty("top", "0"),
															q.style.setProperty("right", "0"),
															V.style.setProperty("object-fit", "cover"),
															V.style.setProperty("width", "100%"),
															V.style.setProperty("height", "100px"),
															(0, d.effect)(
																(G) => {
																	const K = [g.ThemeIcon.asClassName(P)].join(
																			" ",
																		),
																		J = URL.createObjectURL(x());
																	return (
																		K !== G._v$10 &&
																			(0, C.className)(q, (G._v$10 = K)),
																		J !== G._v$11 &&
																			(0, i.setAttribute)(
																				V,
																				"src",
																				(G._v$11 = J),
																			),
																		G
																	);
																},
																{ _v$10: void 0, _v$11: void 0 },
															),
															H
														);
													})(),
											}),
										];
									},
								}),
							),
							F
						);
					})();
				};
			},
		)
