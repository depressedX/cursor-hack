import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/async.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/dataTransfer.js';
import '../../../../base/common/hierarchicalKind.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/mime.js';
import '../../../../base/common/platform.js';
import '../../../../base/common/uuid.js';
import '../../../browser/controller/textAreaInput.js';
import '../../../browser/dnd.js';
import '../../../browser/services/bulkEditService.js';
import '../../../common/config/editorOptions.js';
import '../../../common/core/range.js';
import '../../../common/editorCommon.js';
import '../../../common/languages.js';
import '../../../common/services/languageFeatures.js';
import './defaultProviders.js';
import './edit.js';
import '../../editorState/browser/editorState.js';
import '../../inlineProgress/browser/inlineProgress.js';
import '../../message/browser/messageController.js';
import '../../../../nls.js';
import '../../../../platform/clipboard/common/clipboardService.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/progress/common/progress.js';
import '../../../../platform/quickinput/common/quickInput.js';
import './postEditWidget.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../../../platform/tooltipService/common/tooltipService.js';
import '../../../../base/common/errors.js';
define(
			de[609],
			he([
				1, 0, 7, 24, 15, 33, 489, 318, 3, 266, 12, 47, 942, 1197, 199, 38, 17,
				98, 74, 69, 1213, 1181, 439, 1220, 440, 4, 121, 8, 5, 84, 63, 1632, 45,
				308, 29,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*dom*/,
				i /*arrays*/,
				w /*async*/,
				E /*cancellation*/,
				C /*dataTransfer*/,
				d /*hierarchicalKind*/,
				m /*lifecycle*/,
				r /*mime*/,
				u /*platform*/,
				a /*uuid*/,
				h /*textAreaInput*/,
				c /*dnd*/,
				n /*bulkEditService*/,
				g /*editorOptions*/,
				p /*range*/,
				o /*editorCommon*/,
				f /*languages*/,
				b /*languageFeatures*/,
				s /*defaultProviders*/,
				l /*edit*/,
				y /*editorState*/,
				$ /*inlineProgress*/,
				v /*messageController*/,
				S /*nls*/,
				I /*clipboardService*/,
				T /*contextkey*/,
				P /*instantiation*/,
				k /*progress*/,
				L /*quickInput*/,
				D /*postEditWidget*/,
				M /*reactiveStorageService*/,
				N /*tooltipService*/,
				A /*errors*/,
) {
				"use strict";
				var R;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$zAb = e.$yAb = e.$xAb = void 0),
					(u = mt(u)),
					(e.$xAb = "editor.changePasteType"),
					(e.$yAb = new T.$5j(
						"pasteWidgetVisible",
						!1,
						(0, S.localize)(982, null),
					));
				const O = "application/vnd.code.copyMetadata";
				let B = class extends m.$1c {
					static {
						R = this;
					}
					static {
						this.ID = "editor.contrib.copyPasteActionController";
					}
					static get(z) {
						return z.getContribution(R.ID);
					}
					constructor(z, F, x, H, q, V, G, K, J) {
						super(),
							(this.j = x),
							(this.m = H),
							(this.n = q),
							(this.q = V),
							(this.r = G),
							(this.s = K),
							(this.t = J),
							(this.b = z);
						const W = z.getContainerDomNode();
						this.D((0, t.$0fb)(W, "copy", (X) => this.w(X))),
							this.D((0, t.$0fb)(W, "cut", (X) => this.w(X))),
							this.D((0, t.$0fb)(W, "paste", (X) => this.y(X), !0)),
							(this.g = this.D(new $.$Pzb("pasteIntoEditor", z, F))),
							(this.h = this.D(
								F.createInstance(D.$Tzb, "pasteIntoEditor", z, e.$yAb, {
									id: e.$xAb,
									label: (0, S.localize)(983, null),
								}),
							));
					}
					changePasteType() {
						this.h.tryShowSelector();
					}
					pasteAs(z) {
						this.b.focus();
						try {
							(this.f = { preferred: z }), (0, t.$Ngb)().execCommand("paste");
						} finally {
							this.f = void 0;
						}
					}
					clearWidgets() {
						this.h.clear();
					}
					u() {
						return this.b.getOption(g.EditorOption.pasteAs).enabled;
					}
					async finishedPaste() {
						await this.c;
					}
					w(z) {
						if (
							(this.b.isChatCodeblock === !0
								? this.t.registerEvent("chat.copy.codeblock.manual")
								: this.b.isSimpleWidget === !1 &&
									this.t.registerEvent("editor.copy.non_vim_mode"),
							!this.b.hasTextFocus() ||
								(this.m.clearInternalState?.(), !z.clipboardData || !this.u()))
						)
							return;
						const F = this.b.getModel(),
							x = this.b.getSelections();
						if (!F || !x?.length) return;
						const H = this.b.getOption(g.EditorOption.emptySelectionClipboard);
						let q = x;
						const V = x.length === 1 && x[0].isEmpty();
						if (V) {
							if (!H) return;
							q = [
								new p.$iL(
									q[0].startLineNumber,
									1,
									q[0].startLineNumber,
									1 + F.getLineLength(q[0].startLineNumber),
								),
							];
						}
						const G = this.b._getViewModel()?.getPlainTextToCopy(x, H, u.$l),
							K = Array.isArray(G) ? G : null;
						this.s.setNonPersistentStorage({
							lastCopy: {
								text: Array.isArray(G)
									? G.join(`
`)
									: (G ?? ""),
								range: {
									selectionStartLineNumber: q[0].startLineNumber,
									selectionStartColumn: q[0].startColumn,
									positionLineNumber: q[0].endLineNumber,
									positionColumn: q[0].endColumn,
								},
								languageId:
									F?.getLanguageIdAtPosition(
										q[0].startLineNumber,
										q[0].startColumn,
									) ?? "",
								uri: F.uri,
							},
						});
						const J = { multicursorText: K, pasteOnNewLine: V, mode: null },
							W = this.n.documentPasteEditProvider
								.ordered(F)
								.filter((ee) => !!ee.prepareDocumentPaste);
						if (!W.length) {
							this.G(z.clipboardData, { defaultPastePayload: J });
							return;
						}
						const X = (0, c.$pzb)(z.clipboardData),
							Y = W.flatMap((ee) => ee.copyMimeTypes ?? []),
							ie = (0, a.$9g)();
						this.G(z.clipboardData, {
							id: ie,
							providerCopyMimeTypes: Y,
							defaultPastePayload: J,
						});
						const ne = (0, w.$zh)(async (ee) => {
							const _ = (0, i.$Lb)(
								await Promise.all(
									W.map(async (te) => {
										try {
											return await te.prepareDocumentPaste(F, q, X, ee);
										} catch (Q) {
											console.error(Q);
											return;
										}
									}),
								),
							);
							_.reverse();
							for (const te of _) for (const [Q, Z] of te) X.replace(Q, Z);
							return X;
						});
						R.a?.dataTransferPromise.cancel(),
							(R.a = { handle: ie, dataTransferPromise: ne });
					}
					async y(z) {
						if (!z.clipboardData || !this.b.hasTextFocus()) return;
						v.$Szb.get(this.b)?.closeMessage(),
							this.c?.cancel(),
							(this.c = void 0);
						const F = this.b.getModel(),
							x = this.b.getSelections();
						if (
							!x?.length ||
							!F ||
							this.b.getOption(g.EditorOption.readOnly) ||
							(!this.u() && !this.f)
						)
							return;
						const H = this.H(z),
							q = (0, c.$qzb)(z.clipboardData);
						q.delete(O);
						const V = [
								...z.clipboardData.types,
								...(H?.providerCopyMimeTypes ?? []),
								r.$EK.uriList,
							],
							G = this.n.documentPasteEditProvider.ordered(F).filter((K) => {
								const J = this.f?.preferred;
								return J && K.providedPasteEditKinds && !this.N(K, J)
									? !1
									: K.pasteMimeTypes?.some((W) => (0, C.$YL)(W, V));
							});
						if (!G.length) {
							this.f?.preferred && this.z(x, this.f.preferred);
							return;
						}
						z.preventDefault(),
							z.stopImmediatePropagation(),
							!this.b.isSimpleWidget &&
								!this.b.isChatCodeblock &&
								this.t.registerEvent("editor.paste"),
							this.f
								? this.F(this.f.preferred, G, x, q, H)
								: this.C(G, x, q, H, z);
					}
					z(z, F) {
						v.$Szb
							.get(this.b)
							?.showMessage(
								(0, S.localize)(
									984,
									null,
									F instanceof d.$1L ? F.value : F.providerId,
								),
								z[0].getStartPosition(),
							);
					}
					C(z, F, x, H, q) {
						const V = this.b;
						if (!V.hasModel()) return;
						const G = new y.$Nzb(
								V,
								y.CodeEditorStateFlag.Value | y.CodeEditorStateFlag.Selection,
								void 0,
							),
							K = (0, w.$zh)(async (J) => {
								const W = this.b;
								if (!W.hasModel()) return;
								const X = W.getModel(),
									Y = new m.$Zc(),
									ie = Y.add(new E.$Ce(J));
								Y.add(G.token.onCancellationRequested(() => ie.cancel()));
								const ne = ie.token;
								try {
									if ((await this.I(x, H, ne), ne.isCancellationRequested))
										return;
									const ee = z.filter((Q) => this.M(Q, x));
									if (
										!ee.length ||
										(ee.length === 1 && ee[0] instanceof s.$vzb)
									)
										return this.L(x, H, ne, q);
									const _ = {
											triggerKind: f.DocumentPasteTriggerKind.Automatic,
										},
										te = await this.J(ee, x, X, F, _, ne);
									if ((Y.add(te), ne.isCancellationRequested)) return;
									if (
										te.edits.length === 1 &&
										te.edits[0].provider instanceof s.$vzb
									)
										return this.L(x, H, ne, q);
									if (te.edits.length) {
										const Q =
											W.getOption(g.EditorOption.pasteAs).showPasteSelector ===
											"afterPaste";
										return this.h.applyEditAndShowIfNeeded(
											F,
											{ activeEditIndex: 0, allEdits: te.edits },
											Q,
											(Z, se) =>
												new Promise((re, le) => {
													(async () => {
														try {
															const oe = Z.provider.resolveDocumentPasteEdit?.(
																	Z,
																	se,
																),
																ae = new w.$0h(),
																pe =
																	oe &&
																	(await this.g.showWhile(
																		F[0].getEndPosition(),
																		(0, S.localize)(985, null),
																		Promise.race([ae.p, oe]),
																		{
																			cancel: () => (
																				ae.cancel(), le(new A.$9())
																			),
																		},
																		0,
																	));
															return (
																pe && (Z.additionalEdit = pe.additionalEdit),
																re(Z)
															);
														} catch (oe) {
															return le(oe);
														}
													})();
												}),
											ne,
										);
									}
									await this.L(x, H, ne, q);
								} finally {
									Y.dispose(), this.c === K && (this.c = void 0);
								}
							});
						this.g
							.showWhile(F[0].getEndPosition(), (0, S.localize)(986, null), K, {
								cancel: async () => {
									try {
										if ((K.cancel(), G.token.isCancellationRequested)) return;
										await this.L(x, H, G.token, q);
									} finally {
										G.dispose();
									}
								},
							})
							.then(() => {
								G.dispose();
							}),
							(this.c = K);
					}
					F(z, F, x, H, q) {
						const V = (0, w.$zh)(async (G) => {
							const K = this.b;
							if (!K.hasModel()) return;
							const J = K.getModel(),
								W = new m.$Zc(),
								X = W.add(
									new y.$Nzb(
										K,
										y.CodeEditorStateFlag.Value |
											y.CodeEditorStateFlag.Selection,
										void 0,
										G,
									),
								);
							try {
								if (
									(await this.I(H, q, X.token), X.token.isCancellationRequested)
								)
									return;
								let Y = F.filter((te) => this.M(te, H, z));
								z && (Y = Y.filter((te) => this.N(te, z)));
								const ie = {
									triggerKind: f.DocumentPasteTriggerKind.PasteAs,
									only: z && z instanceof d.$1L ? z : void 0,
								};
								let ne = W.add(await this.J(Y, H, J, x, ie, X.token));
								if (X.token.isCancellationRequested) return;
								if (
									(z &&
										(ne = {
											edits: ne.edits.filter((te) =>
												z instanceof d.$1L
													? z.contains(te.kind)
													: z.providerId === te.provider.id,
											),
											dispose: ne.dispose,
										}),
									!ne.edits.length)
								) {
									ie.only && this.z(x, ie.only);
									return;
								}
								let ee;
								if (
									(z
										? (ee = ne.edits.at(0))
										: (ee = (
												await this.q.pick(
													ne.edits.map((Q) => ({
														label: Q.title,
														description: Q.kind?.value,
														edit: Q,
													})),
													{ placeHolder: (0, S.localize)(987, null) },
												)
											)?.edit),
									!ee)
								)
									return;
								const _ = (0, l.$Jzb)(J.uri, x, ee);
								await this.j.apply(_, { editor: this.b });
							} finally {
								W.dispose(), this.c === V && (this.c = void 0);
							}
						});
						this.r.withProgress(
							{
								location: k.ProgressLocation.Window,
								title: (0, S.localize)(988, null),
							},
							() => V,
						);
					}
					G(z, F) {
						z.setData(O, JSON.stringify(F));
					}
					H(z) {
						if (!z.clipboardData) return;
						const F = z.clipboardData.getData(O);
						if (F)
							try {
								return JSON.parse(F);
							} catch {
								return;
							}
						const [x, H] = h.$8ub.getTextData(z.clipboardData);
						if (H)
							return {
								defaultPastePayload: {
									mode: H.mode,
									multicursorText: H.multicursorText ?? null,
									pasteOnNewLine: !!H.isFromEmptySelection,
								},
							};
					}
					async I(z, F, x) {
						if (F?.id && R.a?.handle === F.id) {
							const H = await R.a.dataTransferPromise;
							if (x.isCancellationRequested) return;
							for (const [q, V] of H) z.replace(q, V);
						}
						if (!z.has(r.$EK.uriList)) {
							const H = await this.m.readResources();
							if (x.isCancellationRequested) return;
							H.length && z.append(r.$EK.uriList, (0, C.$VL)(C.$ZL.create(H)));
						}
					}
					async J(z, F, x, H, q, V) {
						const G = new m.$Zc(),
							K = await (0, w.$Ah)(
								Promise.all(
									z.map(async (W) => {
										try {
											const X = await W.provideDocumentPasteEdits?.(
												x,
												H,
												F,
												q,
												V,
											);
											return (
												X && G.add(X),
												X?.edits?.map((Y) => ({ ...Y, provider: W }))
											);
										} catch (X) {
											(0, A.$8)(X) || console.error(X);
											return;
										}
									}),
								),
								V,
							),
							J = (0, i.$Lb)(K ?? [])
								.flat()
								.filter((W) => !q.only || q.only.contains(W.kind));
						return { edits: (0, l.$Kzb)(J), dispose: () => G.dispose() };
					}
					async L(z, F, x, H) {
						const V =
							(await (z.get(r.$EK.text) ?? z.get("text"))?.asString()) ?? "";
						if (x.isCancellationRequested) return;
						const G = {
							clipboardEvent: H,
							text: V,
							pasteOnNewLine: F?.defaultPastePayload.pasteOnNewLine ?? !1,
							multicursorText: F?.defaultPastePayload.multicursorText ?? null,
							mode: null,
						};
						this.b.trigger("keyboard", o.Handler.Paste, G);
					}
					M(z, F, x) {
						return z.pasteMimeTypes?.some((H) => F.matches(H))
							? !x || this.N(z, x)
							: !1;
					}
					N(z, F) {
						return F instanceof d.$1L
							? z.providedPasteEditKinds
								? z.providedPasteEditKinds.some((x) => F.contains(x))
								: !0
							: z.id === F.providerId;
					}
				};
				(e.$zAb = B),
					(e.$zAb =
						B =
						R =
							Ne(
								[
									j(1, P.$Li),
									j(2, n.$rzb),
									j(3, I.$Vxb),
									j(4, b.$k3),
									j(5, L.$DJ),
									j(6, k.$8N),
									j(7, M.$0zb),
									j(8, N.$5X),
								],
								B,
							));
			},
		),
		