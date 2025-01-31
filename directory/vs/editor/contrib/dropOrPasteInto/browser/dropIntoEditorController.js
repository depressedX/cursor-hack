import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/async.js';
import '../../../../base/common/dataTransfer.js';
import '../../../../base/common/hierarchicalKind.js';
import '../../../../base/common/lifecycle.js';
import '../../../browser/dnd.js';
import '../../../common/config/editorOptions.js';
import '../../../common/core/range.js';
import '../../../common/services/languageFeatures.js';
import '../../../common/services/treeViewsDnd.js';
import '../../../common/services/treeViewsDndService.js';
import '../../editorState/browser/editorState.js';
import '../../inlineProgress/browser/inlineProgress.js';
import '../../../../nls.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/dnd/browser/dnd.js';
import '../../../../platform/instantiation/common/instantiation.js';
import './edit.js';
import './postEditWidget.js';
define(
			de[962],
			he([
				1, 0, 24, 15, 489, 318, 3, 1197, 38, 17, 69, 749, 764, 439, 1220, 4, 10,
				8, 347, 5, 1181, 1632,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*arrays*/,
				i /*async*/,
				w /*dataTransfer*/,
				E /*hierarchicalKind*/,
				C /*lifecycle*/,
				d /*dnd*/,
				m /*editorOptions*/,
				r /*range*/,
				u /*languageFeatures*/,
				a /*treeViewsDnd*/,
				h /*treeViewsDndService*/,
				c /*editorState*/,
				n /*inlineProgress*/,
				g /*nls*/,
				p /*configuration*/,
				o /*contextkey*/,
				f /*dnd*/,
				b /*instantiation*/,
				s /*edit*/,
				l /*postEditWidget*/,
) {
				"use strict";
				var y;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$g3b = e.$f3b = e.$e3b = e.$d3b = void 0),
					(e.$d3b = "editor.experimental.dropIntoEditor.defaultProvider"),
					(e.$e3b = "editor.changeDropType"),
					(e.$f3b = new o.$5j(
						"dropWidgetVisible",
						!1,
						(0, g.localize)(998, null),
					));
				let $ = class extends C.$1c {
					static {
						y = this;
					}
					static {
						this.ID = "editor.contrib.dropIntoEditorController";
					}
					static get(S) {
						return S.getContribution(y.ID);
					}
					constructor(S, I, T, P, k) {
						super(),
							(this.g = T),
							(this.h = P),
							(this.j = k),
							(this.f = f.$ozb.getInstance()),
							(this.b = this.D(I.createInstance(n.$Pzb, "dropIntoEditor", S))),
							(this.c = this.D(
								I.createInstance(l.$Tzb, "dropIntoEditor", S, e.$f3b, {
									id: e.$e3b,
									label: (0, g.localize)(999, null),
								}),
							)),
							this.D(S.onDropIntoEditor((L) => this.m(S, L.position, L.event)));
					}
					clearWidgets() {
						this.c.clear();
					}
					changeDropType() {
						this.c.tryShowSelector();
					}
					async m(S, I, T) {
						if (!T.dataTransfer || !S.hasModel()) return;
						this.a?.cancel(), S.focus(), S.setPosition(I);
						const P = (0, i.$zh)(async (k) => {
							const L = new C.$Zc(),
								D = L.add(
									new c.$Nzb(S, c.CodeEditorStateFlag.Value, void 0, k),
								);
							try {
								const M = await this.r(T);
								if (M.size === 0 || D.token.isCancellationRequested) return;
								const N = S.getModel();
								if (!N) return;
								const A = this.h.documentDropEditProvider
										.ordered(N)
										.filter((O) =>
											O.dropMimeTypes
												? O.dropMimeTypes.some((B) => M.matches(B))
												: !0,
										),
									R = L.add(await this.n(A, N, I, M, D));
								if (D.token.isCancellationRequested) return;
								if (R.edits.length) {
									const O = this.q(N, R.edits),
										B =
											S.getOption(m.EditorOption.dropIntoEditor)
												.showDropSelector === "afterDrop";
									await this.c.applyEditAndShowIfNeeded(
										[r.$iL.fromPositions(I)],
										{ activeEditIndex: O, allEdits: R.edits },
										B,
										async (U) => U,
										k,
									);
								}
							} finally {
								L.dispose(), this.a === P && (this.a = void 0);
							}
						});
						this.b.showWhile(I, (0, g.localize)(1e3, null), P, {
							cancel: () => P.cancel(),
						}),
							(this.a = P);
					}
					async n(S, I, T, P, k) {
						const L = new C.$Zc(),
							D = await (0, i.$Ah)(
								Promise.all(
									S.map(async (N) => {
										try {
											const A = await N.provideDocumentDropEdits(
												I,
												T,
												P,
												k.token,
											);
											return (
												A && L.add(A),
												A?.edits.map((R) => ({ ...R, providerId: N.id }))
											);
										} catch (A) {
											console.error(A);
										}
									}),
								),
								k.token,
							),
							M = (0, t.$Lb)(D ?? []).flat();
						return { edits: (0, s.$Kzb)(M), dispose: () => L.dispose() };
					}
					q(S, I) {
						const T = this.g.getValue(e.$d3b, { resource: S.uri });
						for (const [P, k] of Object.entries(T)) {
							const L = new E.$1L(k),
								D = I.findIndex(
									(M) =>
										L.value === M.providerId &&
										M.handledMimeType &&
										(0, w.$YL)(P, [M.handledMimeType]),
								);
							if (D >= 0) return D;
						}
						return 0;
					}
					async r(S) {
						if (!S.dataTransfer) return new w.$XL();
						const I = (0, d.$qzb)(S.dataTransfer);
						if (this.f.hasData(a.$b3b.prototype)) {
							const T = this.f.getData(a.$b3b.prototype);
							if (Array.isArray(T))
								for (const P of T) {
									const k = await this.j.removeDragOperationTransfer(
										P.identifier,
									);
									if (k) for (const [L, D] of k) I.replace(L, D);
								}
						}
						return I;
					}
				};
				(e.$g3b = $),
					(e.$g3b =
						$ =
						y =
							Ne([j(1, b.$Li), j(2, p.$gj), j(3, u.$k3), j(4, h.$c3b)], $));
			},
		)
