import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/browser/dom.js';
import '../../../../../base/common/cancellation.js';
import '../../../../../base/common/event.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../base/common/network.js';
import '../../../../../base/common/resources.js';
import '../../../../../base/common/types.js';
import '../../../../../base/common/uri.js';
import '../../../../../base/common/uuid.js';
import '../../../../../editor/common/languages.js';
import '../../../../../editor/common/model/textModel.js';
import '../../../../../editor/common/services/model.js';
import '../../../../../editor/common/services/modelService.js';
import '../../../../../editor/common/services/resolverService.js';
import '../../../../../nls.js';
import '../../../../../platform/actions/common/actions.js';
import '../../../../../platform/instantiation/common/extensions.js';
import '../../../../../platform/instantiation/common/instantiation.js';
import './chatCollections.js';
import '../codeBlockPart.js';
import '../../common/chatService.js';
import '../../common/chatViewModel.js';
define(
			de[3762],
			he([
				1, 0, 7, 33, 6, 3, 23, 19, 28, 9, 47, 74, 122, 67, 960, 42, 4, 11, 20,
				5, 979, 845, 218, 283,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*dom*/,
				i /*cancellation*/,
				w /*event*/,
				E /*lifecycle*/,
				C /*network*/,
				d /*resources*/,
				m /*types*/,
				r /*uri*/,
				u /*uuid*/,
				a /*languages*/,
				h /*textModel*/,
				c /*model*/,
				n /*modelService*/,
				g /*resolverService*/,
				p /*nls*/,
				o /*actions*/,
				f /*extensions*/,
				b /*instantiation*/,
				s /*chatCollections*/,
				l /*codeBlockPart*/,
				y /*chatService*/,
				$ /*chatViewModel*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$NXb = e.$MXb = void 0),
					(t = mt(t));
				const v = t.$,
					S = (0, b.$Mi)("ICodeCompareModelService");
				let I = class extends E.$1c {
					constructor(L, D, M, N, A, R) {
						super(),
							(this.c = R),
							(this.b = this.D(new w.$re())),
							(this.onDidChangeHeight = this.b.event);
						const O = D.element;
						if (
							((0, m.$vg)((0, $.$$Tb)(O)), M.renderTextEditsAsSummary?.(L.uri))
						)
							O.response.value.every((B) => B.kind === "textEditGroup")
								? (this.domNode = v(
										".interactive-edits-summary",
										void 0,
										O.isComplete
											? O.isCanceled
												? (0, p.localize)(4664, null)
												: (0, p.localize)(4665, null)
											: "",
									))
								: (this.domNode = v("div"));
						else {
							const B = new i.$Ce();
							let U = !1;
							this.D(
								(0, E.$Yc)(() => {
									(U = !0), B.dispose(!0);
								}),
							),
								(this.a = this.D(N.get())),
								this.D(
									this.a.object.onDidChangeContentHeight(() => {
										this.b.fire();
									}),
								);
							const z = {
								element: O,
								edit: L,
								diffData: (async () => {
									const F = await this.c.createModel(O, L);
									if (U) {
										F.dispose();
										return;
									}
									return (
										this.D(F),
										{
											modified: F.object.modified.textEditorModel,
											original: F.object.original.textEditorModel,
											originalSha1: F.object.originalSha1,
										}
									);
								})(),
							};
							this.a.object.render(z, A, B.token),
								(this.domNode = this.a.object.element);
						}
					}
					layout(L) {
						this.a?.object.layout(L);
					}
					hasSameContent(L) {
						return L.kind === "textEditGroup";
					}
					addDisposable(L) {
						this.D(L);
					}
				};
				(e.$MXb = I), (e.$MXb = I = Ne([j(5, S)], I));
				let T = class extends E.$1c {
					inUse() {
						return this.a.inUse;
					}
					constructor(L, D, M, N) {
						super(),
							(this.a = this.D(
								new s.$hUb(() =>
									N.createInstance(l.$EYb, L, o.$XX.ChatCompareBlock, D, M),
								),
							));
					}
					get() {
						const L = this.a.get();
						let D = !1;
						return {
							object: L,
							isStale: () => D,
							dispose: () => {
								L.reset(), (D = !0), this.a.release(L);
							},
						};
					}
				};
				(e.$NXb = T), (e.$NXb = T = Ne([j(3, b.$Li)], T));
				let P = class {
					constructor(L, D, M) {
						(this.a = L), (this.b = D), (this.c = M);
					}
					async createModel(L, D) {
						const M = await this.a.createModelReference(D.uri),
							N = await this.a.createModelReference(
								this.b.createModel(
									(0, h.$9X)(M.object.textEditorModel.createSnapshot()),
									{
										languageId: M.object.textEditorModel.getLanguageId(),
										onDidChange: w.Event.None,
									},
									r.URI.from({
										scheme: C.Schemas.vscodeChatCodeBlock,
										path: D.uri.path,
										query: (0, u.$9g)(),
									}),
									!1,
								).uri,
							),
							A = new E.$4c(
								(0, E.$Yc)(() => {
									M.dispose(), N.dispose();
								}),
							);
						let R = "";
						if (D.state) R = D.state.sha1;
						else {
							const U = new n.$1Mb();
							U.canComputeSHA1(M.object.textEditorModel) &&
								((R = U.computeSHA1(M.object.textEditorModel)),
								(D.state = { sha1: R, applied: 0 }));
						}
						const O = this.c.getSession(L.sessionId),
							B = [];
						for (const U of O.getRequests())
							if (U.response) {
								for (const z of U.response.response.value)
									if (
										!(
											z.kind !== "textEditGroup" ||
											z.state?.applied ||
											!(0, d.$gh)(z.uri, D.uri)
										)
									)
										for (const F of z.edits) {
											const x = F.map(a.$iM.asEditOperation);
											B.push(x);
										}
								if (U.response === L.model) break;
							}
						for (const U of B)
							N.object.textEditorModel.pushEditOperations(null, U, () => null);
						return (
							A.acquire(),
							setTimeout(() => A.release(), 5e3),
							{
								object: {
									originalSha1: R,
									original: M.object,
									modified: N.object,
								},
								dispose() {
									A.release();
								},
							}
						);
					}
				};
				(P = Ne([j(0, g.$MO), j(1, c.$QO), j(2, y.$J2)], P)),
					(0, f.$lK)(S, P, f.InstantiationType.Delayed);
			},
		)
