import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../proto/aiserver/v1/shadow_workspace_pb.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../editor/common/services/model.js';
import '../../../../editor/common/services/resolverService.js';
import '../../../../platform/markers/common/markers.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../textfile/common/textfiles.js';
import '../../../../editor/common/core/range.js';
import '../../../../base/common/cursorAsync.js';
import '../../../../editor/common/services/editorWorker.js';
import '../../../../base/common/constants.js';
import '../../../../platform/native/common/native.js';
import '../../../../editor/contrib/codeAction/common/types.js';
import '../../../../editor/contrib/codeAction/browser/codeAction.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/resources.js';
import '../../../../editor/common/services/languageFeatures.js';
import '../../../../editor/common/languages.js';
import '../../../../platform/progress/common/progress.js';
import '../../../../editor/browser/services/bulkEditService.js';
import '../../../../editor/common/languages/language.js';
import '../../editor/common/editorService.js';
import '../../../../platform/files/common/files.js';
define(
			de[3706],
			he([
				1, 0, 454, 6, 3, 67, 42, 90, 25, 85, 17, 741, 200, 58, 110, 291, 393,
				33, 19, 69, 74, 84, 199, 61, 18, 22,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*shadow_workspace_pb*/,
				i /*event*/,
				w /*lifecycle*/,
				E /*model*/,
				C /*resolverService*/,
				d /*markers*/,
				m /*workspace*/,
				r /*textfiles*/,
				u /*range*/,
				a /*cursorAsync*/,
				h /*editorWorker*/,
				c /*constants*/,
				n /*native*/,
				g /*types*/,
				p /*codeAction*/,
				o /*cancellation*/,
				f /*resources*/,
				b /*languageFeatures*/,
				s /*languages*/,
				l /*progress*/,
				y /*bulkEditService*/,
				$ /*language*/,
				v /*editorService*/,
				S /*files*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Jdd = void 0);
				let I = class extends w.$1c {
					constructor(k, L, D, M, N, A, R, O, B, U, z) {
						super(),
							(this.b = k),
							(this.c = L),
							(this.g = D),
							(this.h = M),
							(this.j = N),
							(this.n = A),
							(this.q = R),
							(this.s = O),
							(this.t = B),
							(this.u = U),
							(this.w = z),
							(this.a = new a.$Opb(1));
					}
					keepalive() {
						this.y !== void 0 && (clearTimeout(this.y), (this.y = void 0)),
							(this.y = setTimeout(
								() => {
									this.s.closeWindow();
								},
								c.$7V * 60 * 1e3,
							));
					}
					async z(k, L) {
						let D = k,
							M = (0, f.$mh)(k);
						for (; !(await this.w.exists(M)) && (0, f.$mh)(M) !== M; )
							(D = M), (M = (0, f.$mh)(M));
						return (
							await this.c.write(k, L.initialContent),
							{
								dispose: async () => {
									await this.w.del(k),
										f.$dh.isEqual(D, k) ||
											(await this.w.del(D, { recursive: !0 }));
								},
							}
						);
					}
					async acquire() {
						if ((this.keepalive(), this.a.getCount() > 10))
							throw new Error(
								"Too many waiting calls; rejecting for back pressure.",
							);
						return (
							await this.a.acquire(),
							{
								dispose: () => {
									this.a.release();
								},
							}
						);
					}
					async shadowHealthCheck(k) {
						return this.keepalive(), new t.$sx();
					}
					async getLintsForChange(k) {
						const M = new Set();
						this.c.files.models.forEach((R) => {
							R.textEditorModel && M.add(R.textEditorModel.id),
								R.isDirty() && R.revert();
						});
						let N = [];
						const A = [];
						try {
							let R = !1;
							if (
								((N = await Promise.all(
									k.files.map(async (F) => {
										const x = this.j.resolveRelativePath(
											F.relativeWorkspacePath,
										);
										let H;
										try {
											const G = await this.h.createModelReference(x);
											A.push(G),
												(H = G.object.textEditorModel),
												M.has(H.id) || (R = !0);
										} catch {
											const K =
												this.u.createByLanguageNameOrFilepathOrFirstLine(
													null,
													x,
													F.finalContent
														.split(`
`)
														.at(0) ?? "",
												);
											if (
												k.doNotUseInProdNewFilesShouldBeTemporarilyCreatedForIncreasedAccuracy
											) {
												const W = await this.z(x, F);
												A.push(W);
											}
											const J = this.b.createModel(F.initialContent, K, x);
											(H = J), A.push(J), (R = !0);
										}
										const q = await this.q.openEditor({
											resource: x,
											options: { pinned: !1 },
										});
										A.push({
											dispose: async () => {
												const G = q?.input;
												if (G === void 0) return;
												const K = q?.group?.id;
												K !== void 0 && (await G.revert(K));
											},
										});
										const V = await this.n.computeMoreMinimalEdits(H.uri, [
											{ text: F.initialContent, range: H.getFullModelRange() },
										]);
										return (
											V !== void 0 && H.pushEditOperations(null, V, () => null),
											H.pushStackElement(),
											{ file: F, model: H }
										);
									}),
								)),
								R)
							) {
								let F;
								const x = new Promise((q, V) => {
									F = q;
								});
								A.push(
									i.Event.once(this.g.onMarkerChanged)((q) => {
										F("markerChanged");
									}),
								);
								for (const q of N)
									q.model.pushEditOperations(
										null,
										[
											{
												text: "THIS SHOULD BE A LINTER ERROR",
												range: new u.$iL(1, 1, 1, 1),
											},
										],
										() => null,
									);
								(await Promise.race([
									x,
									new Promise((q) => {
										setTimeout(() => {
											q("timedout");
										}, 2e4);
									}),
								])) === "timedout" &&
									console.warn("Timed out waiting for markers to show up");
								for (const q of N) {
									q.model.undo();
									const V = this.g.read({ resource: q.model.uri });
								}
							}
							await new Promise((F) => {
								setTimeout(
									() => {
										F(void 0);
									},
									R ? 4e3 : 2e3,
								);
							});
							const O = new Map();
							for (const F of N) {
								const x = this.g.read({ resource: F.model.uri }),
									H = F.model.deltaDecorations(
										[],
										x.map((q) => ({
											range: u.$iL.lift(q),
											options: { description: "Lint error" },
										})),
									);
								O.set(
									F.model.id,
									x.map((q, V) => ({ marker: q, decorationId: H[V] })),
								);
							}
							const B = [];
							for (const F of N) {
								const x = await this.n.computeMoreMinimalEdits(F.model.uri, [
									{
										text: F.file.finalContent,
										range: F.model.getFullModelRange(),
									},
								]);
								x !== void 0 &&
									(F.model.pushEditOperations(null, x, () => null),
									B.push(F.model));
							}
							await new Promise((F) => {
								setTimeout(() => {
									F(void 0);
								}, 2e3);
							});
							const U = [];
							for (const F of N) {
								const x = this.g.read({ resource: F.model.uri }),
									H = O.get(F.model.id),
									q = x.filter((V) => {
										const G =
											F.file.getAllLintsNotJustDeltaLintsForRangesInFinalModel
												?.ranges;
										if (G !== void 0) {
											for (const K of G)
												if (u.$iL.lift(K).intersectRanges(V) !== null)
													return !0;
										}
										return H === void 0
											? !0
											: !H.some((K) => {
													const J = F.model.getDecorationRange(K.decorationId);
													return (
														K.marker.message === V.message &&
														K.marker.code === V.code &&
														K.marker.severity === V.severity &&
														K.marker.source === V.source &&
														u.$iL.lift(V).equalsRange(u.$iL.lift(J))
													);
												});
									});
								U.push(...q),
									H !== void 0 &&
										F.model.deltaDecorations(
											H.map((V) => V.decorationId),
											[],
										);
							}
							let z;
							if (k.includeQuickFixes) {
								const F = new o.$Ce(),
									x = setTimeout(() => F.cancel(), 5e3),
									H = F.token;
								(z = await Promise.all(
									U.map(async (q) => {
										const V = N.find((G) =>
											f.$dh.isEqual(G.model.uri, q.resource),
										)?.model;
										if (V === void 0)
											return (
												console.error("Could not find model for marker", q), []
											);
										try {
											return await this.getQuickFixes(q, V, H);
										} catch (G) {
											return (
												console.error(
													"Error getting quick fixes for marker",
													q,
													G,
												),
												[]
											);
										}
									}),
								)),
									clearTimeout(x);
							}
							for (const F of B) F.undo();
							return new t.$xx({
								lints: U.map((F, x) => {
									const H = z?.at(x) ?? [];
									return new t.$yx({
										message: F.message,
										severity: d.MarkerSeverity.toString(F.severity),
										relativeWorkspacePath: this.j.asRelativePath(F.resource),
										startLineNumberOneIndexed: F.startLineNumber,
										startColumnOneIndexed: F.startColumn,
										endLineNumberInclusiveOneIndexed: F.endLineNumber,
										endColumnOneIndexed: F.endColumn,
										quickFixes: H,
									});
								}),
							});
						} finally {
							for (const R of [...A].reverse())
								try {
									await R.dispose();
								} catch (O) {
									console.error("Error disposing disposable. Continuing.", O);
								}
						}
					}
					async getQuickFixes(k, L, D) {
						const M = this.t.codeActionProvider,
							N = await (0, p.$UAb)(
								M,
								L,
								u.$iL.lift(k),
								{
									type: s.CodeActionTriggerType.Auto,
									triggerAction: g.CodeActionTriggerSource.QuickFix,
								},
								l.$0N.None,
								D,
							);
						try {
							const A = [];
							for (const R of N.validActions) {
								if (
									R.action.disabled ||
									R.action.kind !== g.$GAb.QuickFix.value
								)
									continue;
								const O = R.action.edit?.edits ?? [],
									B = [];
								for (const U of O)
									y.$tzb.is(U) &&
										B.push(
											new t.$Ax({
												relativeWorkspacePath: this.j.asRelativePath(
													U.resource,
												),
												text: U.textEdit.text,
												startLineNumberOneIndexed:
													U.textEdit.range.startLineNumber,
												startColumnOneIndexed: U.textEdit.range.startColumn,
												endLineNumberInclusiveOneIndexed:
													U.textEdit.range.endLineNumber,
												endColumnOneIndexed: U.textEdit.range.endColumn,
											}),
										);
								A.push(
									new t.$zx({
										message: R.action.title,
										kind: R.action.kind,
										isPreferred: R.action.isPreferred,
										edits: B,
									}),
								);
							}
							return A;
						} finally {
							N.dispose();
						}
					}
				};
				(e.$Jdd = I),
					Ne([T], I.prototype, "getLintsForChange", null),
					(e.$Jdd = I =
						Ne(
							[
								j(0, E.$QO),
								j(1, r.$kZ),
								j(2, d.$aM),
								j(3, C.$MO),
								j(4, m.$Vi),
								j(5, h.$Cxb),
								j(6, v.$IY),
								j(7, n.$y7c),
								j(8, b.$k3),
								j(9, $.$nM),
								j(10, S.$ll),
							],
							I,
						));
				function T(P, k, L) {
					const D = L.value;
					return (
						(L.value = async function (...M) {
							const N = await this.acquire();
							try {
								return await D.apply(this, M);
							} finally {
								N.dispose();
							}
						}),
						L
					);
				}
			},
		)
