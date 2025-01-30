import '../../../../../../require.js';
import '../../../../../../exports.js';
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
import '../../../../../base/browser/baseSolidComponents/combobox/api.js';
import '../../../../../base/browser/baseSolidComponents/separator/api.js';
import '../../../../../../proto/aiserver/v1/uploadserver_pb.js';
import '../../../../services/ai/browser/utils.js';
import '../../../../../base/common/uuid.js';
import '../../../../../css!vs/workbench/contrib/aiDocs/browser/components/docsPane.js';
define(
			de[4123],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 13, 36, 14, 79, 26, 2673, 2657, 735, 191, 47,
				2360,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*web*/,
 E /*web*/,
 C /*web*/,
 d /*web*/,
 m /*solid*/,
 r /*solid*/,
 u /*codicons*/,
 a /*iconRegistry*/,
 h /*themables*/,
 c /*api*/,
 n /*api*/,
 g /*uploadserver_pb*/,
 p /*utils*/,
 o /*uuid*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$5Yc = e.$3Yc = void 0),
					(e.$4Yc = O),
					(c = mt(c)),
					(n = mt(n));
				const f = (0, t.template)('<button class="docs--button">submit'),
					b = (0, t.template)('<button class="docs--button">use documenation'),
					s = (0, t.template)(
						'<div class="docs__subtitle">Requests in progress:',
					),
					l = (0, t.template)(
						'<div class="docs__subtitle">Your documentation is ready to be used!',
					),
					y = (0, t.template)(
						'<div class="docs__subtitle">There was an error uploading your documentation.',
					),
					$ = (0, t.template)(
						'<div class="docs__subtitle">There is already a similar documentation that exists.',
					),
					v = (0, t.template)(
						'<div class="docs--selected-doc"><div class="docs--selected-doc__title">Enter a link above to add docs',
					),
					S = (0, t.template)(
						'<div class="docs__title">Previously selected docs.',
					),
					I = (0, t.template)(
						'<div class="docs__subtitle">These are the docs that you have previously selected.',
					),
					T = (0, t.template)(
						`<div class="docs-container-backing"><div class="docs-container"><div class="docs__title">Show documentation to the AI</div><div class="docs__subtitle">Paste a link to a library's documentation to improve our chat AI's answers about the library.</div><div></div><div></div><div class="docs__title">Docs currently in context</div><div class="docs__subtitle">These are the docs that the chat AI can currently see.`,
					),
					P = (0, t.template)(
						'<div class="docs--selected-doc__subtitle">(url: <!>)',
					),
					k = (0, t.template)(
						'<div class="docs--selected-doc"><div class="docs--selected-doc__title"></div>&nbsp;',
					),
					L = (0, t.template)("<div>Something went wrong"),
					D = (0, t.template)("<div>"),
					M = (0, t.template)("<span>"),
					N = (z) => {
						const [F, x] = (0, m.createSignal)([]),
							[H, q] = (0, m.createSignal)(),
							V = (ne) => {
								q({ name: ne, identifier: ne, url: ne }),
									x(
										z
											.options()
											.filter((ee) =>
												ee.name.toLowerCase().includes(ne.toLowerCase()),
											),
									);
							},
							G = (ne, ee) => {
								ne && ee === "manual" && x(z.options());
							},
							K = (ne) => {
								if (!ne) return !1;
								try {
									return new URL(ne), !0;
								} catch {
									return !1;
								}
							},
							J = () => {
								const ne = H();
								return ne
									? K(H()?.url) ||
										z
											.options()
											.map((ee) => ee.name)
											.includes(ne.name) ||
										ne.name === ""
										? "valid"
										: "invalid"
									: "valid";
							},
							[W, X] = (0, m.createSignal)(!1),
							[Y, ie] = (0, m.createSignal)(!1);
						return (
							(0, m.createEffect)(() => {
								z.uploadStatus() !== "no-ongoing-request" &&
									(z.uploadStatus() === g.UploadResponse_Status.SUCCESS &&
										(ie(!0), X(!0)),
									z.uploadStatus() === g.UploadResponse_Status.FAILURE &&
										(ie(!0), X(!1)),
									z.uploadStatus() === g.UploadResponse_Status.ALREADY_EXISTS &&
										(ie(!0), X(!0)),
									z.uploadStatus() ===
										g.UploadResponse_Status.SIMILAR_ALREADY_EXISTS &&
										(ie(!0), X(!1)));
							}),
							(() => {
								const ne = T(),
									ee = ne.firstChild,
									_ = ee.firstChild,
									te = _.nextSibling,
									Q = te.nextSibling,
									Z = Q.nextSibling,
									se = Z.nextSibling,
									re = se.nextSibling;
								return (
									ne.addEventListener("click", (le) => {
										z.close(), le.stopPropagation();
									}),
									ee.addEventListener("click", (le) => {
										le.stopPropagation();
									}),
									Q.style.setProperty("width", "100%"),
									Q.style.setProperty("height", "100%"),
									Q.style.setProperty("margin-right", "auto"),
									(0, C.insert)(
										Q,
										(0, d.createComponent)(c.Root, {
											get options() {
												return F().map((le) => le.name);
											},
											get value() {
												return H()?.name;
											},
											onInputChange: V,
											onOpenChange: G,
											onChange: (le) => {
												q({ name: le, identifier: le, url: le });
											},
											placeholder: "E.g. https://codemirror.net/docs/",
											virtualized: !0,
											required: !0,
											shouldFocusWrap: !0,
											disallowEmptySelection: !0,
											get validationState() {
												return J();
											},
											itemComponent: (le) =>
												(0, d.createComponent)(c.Item, {
													class: "docs--combobox__item",
													get item() {
														return le.item;
													},
													get children() {
														return (0, d.createComponent)(c.ItemLabel, {
															get children() {
																return le.item.rawValue;
															},
														});
													},
												}),
											get children() {
												return (0, d.createComponent)(c.Control, {
													class: "docs--combobox__control",
													get children() {
														return (0, d.createComponent)(c.Input, {
															class: "docs--combobox__input",
														});
													},
												});
											},
										}),
									),
									(0, C.insert)(
										ee,
										(0, d.createComponent)(n.Root, {
											style: {
												height: "1px",
												width: "100%",
												color: "transparent",
												background: "transparent",
												border: "none",
												outline: "none",
											},
										}),
										Z,
									),
									Z.style.setProperty("display", "flex"),
									Z.style.setProperty("flex-direction", "row"),
									Z.style.setProperty("margin-left", "auto"),
									Z.style.setProperty("margin-right", "14px"),
									(0, C.insert)(
										Z,
										(0, d.createComponent)(m.Show, {
											get when() {
												return K(H()?.url);
											},
											get children() {
												return [
													(0, d.createComponent)(B, {}),
													(() => {
														const le = f();
														return (
															le.addEventListener("mousedown", async (oe) => {
																ie(!0), await z.submitUrl(H()?.url);
															}),
															le
														);
													})(),
												];
											},
										}),
										null,
									),
									(0, C.insert)(
										Z,
										(0, d.createComponent)(m.Show, {
											get when() {
												return (
													(0, E.memo)(
														() => H() !== void 0 && H()?.name !== "",
													)() &&
													z
														.options()
														.map((le) => le.name)
														.includes(H()?.name)
												);
											},
											get children() {
												return [
													(0, d.createComponent)(B, {}),
													(() => {
														const le = b();
														return (
															le.addEventListener("mousedown", (oe) => {
																ie(!0);
																let ae = H();
																ae && z.submitDoc(ae);
															}),
															le
														);
													})(),
												];
											},
										}),
										null,
									),
									(0, C.insert)(
										ee,
										(0, d.createComponent)(m.Show, {
											get when() {
												return Y();
											},
											get children() {
												return [
													(0, d.createComponent)(m.Show, {
														get when() {
															return z.ongoingRequests().length > 0;
														},
														get children() {
															return [
																s(),
																(0, d.createComponent)(m.For, {
																	get each() {
																		return z.ongoingRequests();
																	},
																	children: (le) =>
																		(() => {
																			const oe = k(),
																				ae = oe.firstChild,
																				pe = ae.nextSibling;
																			return (
																				(0, C.insert)(ae, () => le.doc.name),
																				(0, C.insert)(
																					oe,
																					(0, d.createComponent)(m.Show, {
																						get when() {
																							return le.doc.url !== "";
																						},
																						get children() {
																							const $e = P(),
																								ye = $e.firstChild,
																								ue = ye.nextSibling,
																								fe = ue.nextSibling;
																							return (
																								(0, C.insert)(
																									$e,
																									() => le.doc.url,
																									ue,
																								),
																								$e
																							);
																						},
																					}),
																					null,
																				),
																				oe
																			);
																		})(),
																}),
															];
														},
													}),
													(0, d.createComponent)(m.Show, {
														get when() {
															return W();
														},
														get children() {
															return l();
														},
													}),
													(0, d.createComponent)(m.Show, {
														get when() {
															return !W();
														},
														get children() {
															return (0, d.createComponent)(m.Switch, {
																get fallback() {
																	return L();
																},
																get children() {
																	return [
																		(0, d.createComponent)(m.Match, {
																			get when() {
																				return (
																					z.uploadStatus() ===
																					g.UploadResponse_Status.FAILURE
																				);
																			},
																			get children() {
																				return y();
																			},
																		}),
																		(0, d.createComponent)(m.Match, {
																			get when() {
																				return (
																					z.uploadStatus() ===
																					g.UploadResponse_Status
																						.SIMILAR_ALREADY_EXISTS
																				);
																			},
																			get children() {
																				return $();
																			},
																		}),
																	];
																},
															});
														},
													}),
												];
											},
										}),
										se,
									),
									(0, C.insert)(
										ee,
										(0, d.createComponent)(n.Root, {
											class: "docs--separator__root",
										}),
										se,
									),
									(0, C.insert)(
										ee,
										(0, d.createComponent)(m.Show, {
											get when() {
												return z.currentlySelectedDocs().length === 0;
											},
											get children() {
												return v();
											},
										}),
										null,
									),
									(0, C.insert)(
										ee,
										(0, d.createComponent)(m.Show, {
											get when() {
												return z.currentlySelectedDocs().length > 0;
											},
											get children() {
												return (0, d.createComponent)(m.For, {
													get each() {
														return z.currentlySelectedDocs();
													},
													children: (le) =>
														(() => {
															const oe = k(),
																ae = oe.firstChild,
																pe = ae.nextSibling;
															return (
																(0, C.insert)(ae, () => le.name),
																(0, C.insert)(
																	oe,
																	(0, d.createComponent)(m.Show, {
																		get when() {
																			return le.url !== "";
																		},
																		get children() {
																			const $e = P(),
																				ye = $e.firstChild,
																				ue = ye.nextSibling,
																				fe = ue.nextSibling;
																			return (
																				(0, C.insert)($e, () => le.url, ue), $e
																			);
																		},
																	}),
																	null,
																),
																oe
															);
														})(),
												});
											},
										}),
										null,
									),
									(0, C.insert)(
										ee,
										(0, d.createComponent)(m.Show, {
											get when() {
												return (
													(0, E.memo)(() => !!z.previouslySelectedDocs())() &&
													z.previouslySelectedDocs().length > 0
												);
											},
											get children() {
												return [
													(0, d.createComponent)(n.Root, {
														class: "docs--separator__root",
													}),
													S(),
													I(),
													(0, d.createComponent)(m.For, {
														get each() {
															return z.previouslySelectedDocs().slice(0, 5);
														},
														children: (le) =>
															(() => {
																const oe = k(),
																	ae = oe.firstChild,
																	pe = ae.nextSibling;
																return (
																	(0, C.insert)(ae, () => le.name),
																	(0, C.insert)(
																		oe,
																		(0, d.createComponent)(m.Show, {
																			get when() {
																				return le.url !== "";
																			},
																			get children() {
																				const $e = P(),
																					ye = $e.firstChild,
																					ue = ye.nextSibling,
																					fe = ue.nextSibling;
																				return (
																					(0, C.insert)($e, () => le.url, ue),
																					$e
																				);
																			},
																		}),
																		null,
																	),
																	oe
																);
															})(),
													}),
												];
											},
										}),
										null,
									),
									ne
								);
							})()
						);
					};
				e.$3Yc = N;
				const A = (0, a.$$O)(
						"docs-chevron-down",
						u.$ak.chevronDown,
						"Icon for the chevron down",
					),
					R = (0, a.$$O)(
						"tabbar-remove-chat",
						u.$ak.x,
						"Icon for the close button",
					);
				function O(z) {
					const F = (0, r.$odc)(),
						[x, H] = (0, m.createSignal)(!1),
						[q, V] = (0, m.createSignal)("no-ongoing-request"),
						[G, K] = (0, m.createSignal)([]),
						J = () =>
							F.reactiveStorageService.applicationUserPersistentStorage
								.docState,
						W = () => J().previosulyUsedDocs,
						X = () => {
							const ee = J().visibleDocs;
							return ee.filter(
								(te, Q) => ee.findIndex((Z) => Z.name === te.name) === Q,
							);
						},
						Y = () => J().usableDocs,
						ie = async (ee) => {
							const _ = await F.aiService.uploadClient(),
								te = { identifier: ee, name: ee, url: ee };
							H(!0);
							const Q = await _.uploadDocumentation(
								{
									docIdentifier: te.identifier,
									metadata: { docName: te.name, prefixUrl: te.url },
								},
								{ headers: (0, p.$m6b)((0, o.$9g)()) },
							);
							V(Q.status);
							const Z = G();
							K([
								...Z,
								{ doc: te, status: g.UploadedStatus_Status.IN_PROGRESS },
							]);
							const se = async () => {
								const re = await _.uploadDocumentationStatus(
									{ docIdentifier: ee },
									{ headers: (0, p.$m6b)((0, o.$9g)()) },
								);
								if (
									(re.status !== g.UploadedStatus_Status.SUCCEEDED &&
										(K(
											G().map((le) =>
												le.doc.identifier === te.identifier
													? { doc: le.doc, status: re.status }
													: le,
											),
										),
										setTimeout(se, 1e3)),
									re.status === g.UploadedStatus_Status.SUCCEEDED)
								) {
									K(
										G().map((ae) =>
											ae.doc.identifier === te.identifier
												? { doc: ae.doc, status: re.status }
												: ae,
										),
									);
									const le = Y();
									F.reactiveStorageService.setApplicationUserPersistentStorage(
										"docState",
										{ usableDocs: [...le, te] },
									);
									const oe = W();
									F.reactiveStorageService.setApplicationUserPersistentStorage(
										"docState",
										{ previosulyUsedDocs: [...oe, te] },
									);
								}
							};
							se();
						},
						ne = async (ee) => {
							const _ = new Set(Y().map((te) => te.identifier));
							try {
								return (
									_.has(ee.identifier) ||
										(F.reactiveStorageService.setApplicationUserPersistentStorage(
											"docState",
											{ usableDocs: [...Y(), ee] },
										),
										F.reactiveStorageService.setApplicationUserPersistentStorage(
											"docState",
											{ previosulyUsedDocs: [...W(), ee] },
										)),
									!0
								);
							} catch {
								return !1;
							}
						};
					return (0, d.createComponent)(m.ErrorBoundary, {
						fallback: (ee) => (
							F.notificationService.error(
								"There was an error opening the documentation modal. Please report to admin@cursor.so",
							),
							console.error(ee),
							D()
						),
						get children() {
							return (0, d.createComponent)(e.$3Yc, {
								options: X,
								get close() {
									return z.close;
								},
								get chevronDown() {
									return (() => {
										const ee = D();
										return (
											ee.style.setProperty("height", "100%"),
											ee.style.setProperty("width", "100%"),
											ee.style.setProperty("border", "none"),
											ee.style.setProperty("outline", "none"),
											(0, w.effect)(() =>
												(0, i.className)(
													ee,
													[h.ThemeIcon.asClassName(A)].join(" "),
												),
											),
											ee
										);
									})();
								},
								previouslySelectedDocs: W,
								currentlySelectedDocs: Y,
								submitUrl: ie,
								submitDoc: ne,
								uploadStatus: q,
								ongoingRequests: G,
							});
						},
					});
				}
				const B = () =>
						(() => {
							const z = D();
							return z.style.setProperty("flex-grow", "1"), z;
						})(),
					U = (z) => {
						const [F, x] = (0, m.createSignal)(1),
							H = (0, r.$odc)();
						return (
							(0, m.createEffect)(() => {
								if (!z.show) return;
								x(1);
								const q = H.window.setInterval(() => {
									x((V) => (V === 3 ? 0 : V + 1));
								}, 175);
								(0, m.onCleanup)(() => {
									H.window.clearInterval(q);
								});
							}),
							(() => {
								const q = M();
								return (
									q.style.setProperty("user-select", "text"),
									(0, C.insert)(
										q,
										(0, d.createComponent)(m.Show, {
											get when() {
												return z.show;
											},
											get fallback() {
												return "\xA0";
											},
											get children() {
												return [
													(0, E.memo)(() => ".".repeat(F())),
													(0, d.createComponent)(m.Show, {
														get when() {
															return F() === 0;
														},
														get children() {
															return "\xA0";
														},
													}),
												];
											},
										}),
									),
									q
								);
							})()
						);
					};
				e.$5Yc = U;
			},
		),
		