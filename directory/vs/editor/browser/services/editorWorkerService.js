import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/async.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/worker/simpleWorker.js';
import '../../../base/browser/defaultWorkerFactory.js';
import '../../common/core/range.js';
import '../../common/languages.js';
import '../../common/languages/languageConfigurationRegistry.js';
import '../../common/services/editorSimpleWorker.js';
import '../../common/services/model.js';
import '../../common/services/textResourceConfiguration.js';
import '../../../base/common/arrays.js';
import '../../../platform/log/common/log.js';
import '../../../base/common/stopwatch.js';
import '../../../base/common/errors.js';
import '../../common/services/languageFeatures.js';
import '../../common/diff/linesDiffComputer.js';
import '../../common/diff/rangeMapping.js';
import '../../common/core/lineRange.js';
import '../../../base/browser/window.js';
import '../../../base/browser/dom.js';
import '../../../../proto/aiserver/v1/utils_pb.js';
import '../../common/services/textModelSync/textModelSync.impl.js';
import '../../common/services/editorWorkerHost.js';
define(
			de[2771],
			he([
				1, 0, 15, 3, 1584, 540, 17, 74, 152, 2764, 67, 125, 24, 34, 162, 29, 69,
				1147, 342, 196, 75, 7, 83, 935, 1541,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*async*/,
				i /*lifecycle*/,
				w /*simpleWorker*/,
				E /*defaultWorkerFactory*/,
				C /*range*/,
				d /*languages*/,
				m /*languageConfigurationRegistry*/,
				r /*editorSimpleWorker*/,
				u /*model*/,
				a /*textResourceConfiguration*/,
				h /*arrays*/,
				c /*log*/,
				n /*stopwatch*/,
				g /*errors*/,
				p /*languageFeatures*/,
				o /*linesDiffComputer*/,
				f /*rangeMapping*/,
				b /*lineRange*/,
				s /*window*/,
				l /*dom*/,
				y /*utils_pb*/,
				$ /*textModelSync.impl*/,
				v /*editorWorkerHost*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Oyc = e.$Nyc = void 0),
					(d = mt(d));
				const S = 5 * 60 * 1e3;
				function I(M, N) {
					const A = M.getModel(N);
					return !(!A || A.isTooLargeForSyncing());
				}
				let T = class extends i.$1c {
					constructor(N, A, R, O, B, U) {
						super(),
							(this.g = B),
							(this.a = A),
							(this.b = this.D(new k(N, this.a))),
							(this.f = O),
							this.D(
								U.linkProvider.register(
									{ language: "*", hasAccessToAllModels: !0 },
									{
										provideLinks: async (z, F) => {
											if (!I(this.a, z.uri))
												return Promise.resolve({ links: [] });
											const H = await (await this.h([z.uri])).$computeLinks(
												z.uri.toString(),
											);
											return H && { links: H };
										},
									},
								),
							),
							this.D(
								U.completionProvider.register(
									"*",
									new P(this.b, R, this.a, this.g),
								),
							);
					}
					dispose() {
						super.dispose();
					}
					canComputeUnicodeHighlights(N) {
						return I(this.a, N);
					}
					async computedUnicodeHighlights(N, A, R) {
						return (await this.h([N])).$computeUnicodeHighlights(
							N.toString(),
							A,
							R,
						);
					}
					async computeDiff(N, A, R, O) {
						const U = await (await this.h([N, A], !0)).$computeDiff(
							N.toString(),
							A.toString(),
							R,
							O,
						);
						if (!U) return null;
						return {
							identical: U.identical,
							quitEarly: U.quitEarly,
							changes: F(U.changes),
							moves: U.moves.map(
								(x) =>
									new o.$FL(
										new f.$BL(new b.$rL(x[0], x[1]), new b.$rL(x[2], x[3])),
										F(x[4]),
									),
							),
						};
						function F(x) {
							return x.map(
								(H) =>
									new f.$CL(
										new b.$rL(H[0], H[1]),
										new b.$rL(H[2], H[3]),
										H[4]?.map(
											(q) =>
												new f.$DL(
													new C.$iL(q[0], q[1], q[2], q[3]),
													new C.$iL(q[4], q[5], q[6], q[7]),
												),
										),
									),
							);
						}
					}
					async computeWordDiff_FOR_STRINGS_SMALLER_THAN_100_KB_ONLY(N, A, R) {
						const B = await (await this.h([])).$computeWordDiff(N, A, R);
						return {
							identical: B.identical,
							quitEarly: B.quitEarly,
							changes: B.changes.map((z) => ({
								value: z[0],
								added: z[1],
								removed: z[2],
							})),
						};
					}
					async computeLinesDiff(N, A, R) {
						const B = new y.$Bs({ original: N, modified: A }).toBinary();
						return await (await this.h([])).$computeLinesDiff(B, R);
					}
					canComputeDirtyDiff(N, A) {
						return I(this.a, N) && I(this.a, A);
					}
					async computeDirtyDiff(N, A, R) {
						return (await this.h([N, A])).$computeDirtyDiff(
							N.toString(),
							A.toString(),
							R,
						);
					}
					async computeMoreMinimalEdits(N, A, R = !1) {
						if ((0, h.$Pb)(A)) {
							if (!I(this.a, N)) return Promise.resolve(A);
							const O = n.$le.create(),
								B = this.h([N]).then((U) =>
									U.$computeMoreMinimalEdits(N.toString(), A, R),
								);
							return (
								B.finally(() =>
									this.f.trace(
										"FORMAT#computeMoreMinimalEdits",
										N.toString(!0),
										O.elapsed(),
									),
								),
								Promise.race([B, (0, t.$Nh)(1e3).then(() => A)])
							);
						} else return Promise.resolve(void 0);
					}
					computeHumanReadableDiff(N, A) {
						if ((0, h.$Pb)(A)) {
							if (!I(this.a, N)) return Promise.resolve(A);
							const R = n.$le.create(),
								O = {
									ignoreTrimWhitespace: !1,
									maxComputationTimeMs: 1e3,
									computeMoves: !1,
								},
								B = this.h([N])
									.then((U) => U.$computeHumanReadableDiff(N.toString(), A, O))
									.catch(
										(U) => (
											(0, g.$4)(U), this.computeMoreMinimalEdits(N, A, !0)
										),
									);
							return (
								B.finally(() =>
									this.f.trace(
										"FORMAT#computeHumanReadableDiff",
										N.toString(!0),
										R.elapsed(),
									),
								),
								B
							);
						} else return Promise.resolve(void 0);
					}
					canNavigateValueSet(N) {
						return I(this.a, N);
					}
					async navigateValueSet(N, A, R) {
						const O = this.a.getModel(N);
						if (!O) return null;
						const B = this.g
								.getLanguageConfiguration(O.getLanguageId())
								.getWordDefinition(),
							U = B.source,
							z = B.flags;
						return (await this.h([N])).$navigateValueSet(
							N.toString(),
							A,
							R,
							U,
							z,
						);
					}
					canComputeWordRanges(N) {
						return I(this.a, N);
					}
					async computeWordRanges(N, A) {
						const R = this.a.getModel(N);
						if (!R) return Promise.resolve(null);
						const O = this.g
								.getLanguageConfiguration(R.getLanguageId())
								.getWordDefinition(),
							B = O.source,
							U = O.flags;
						return (await this.h([N])).$computeWordRanges(
							N.toString(),
							A,
							B,
							U,
						);
					}
					async findSectionHeaders(N, A) {
						return (await this.h([N])).$findSectionHeaders(N.toString(), A);
					}
					async computeDefaultDocumentColors(N) {
						return (await this.h([N])).$computeDefaultDocumentColors(
							N.toString(),
						);
					}
					async h(N, A = !1) {
						return await (await this.b.withWorker()).workerWithSyncedResources(
							N,
							A,
						);
					}
				};
				(e.$Nyc = T),
					(e.$Nyc = T =
						Ne(
							[j(1, u.$QO), j(2, a.$XO), j(3, c.$ik), j(4, m.$aN), j(5, p.$k3)],
							T,
						));
				class P {
					constructor(N, A, R, O) {
						(this.e = O),
							(this._debugDisplayName = "wordbasedCompletions"),
							(this.a = N),
							(this.b = A),
							(this.d = R);
					}
					async provideCompletionItems(N, A) {
						if (N.uri.scheme === "aiEditorBox-anysphere") return;
						const R = this.b.getValue(N.uri, A, "editor");
						if (R.wordBasedSuggestions === "off") return;
						const O = [];
						if (R.wordBasedSuggestions === "currentDocument")
							I(this.d, N.uri) && O.push(N.uri);
						else
							for (const q of this.d.getModels())
								I(this.d, q.uri) &&
									(q === N
										? O.unshift(q.uri)
										: (R.wordBasedSuggestions === "allDocuments" ||
												q.getLanguageId() === N.getLanguageId()) &&
											O.push(q.uri));
						if (O.length === 0) return;
						const B = this.e
								.getLanguageConfiguration(N.getLanguageId())
								.getWordDefinition(),
							U = N.getWordAtPosition(A),
							z = U
								? new C.$iL(
										A.lineNumber,
										U.startColumn,
										A.lineNumber,
										U.endColumn,
									)
								: C.$iL.fromPositions(A),
							F = z.setEndPosition(A.lineNumber, A.column),
							H = await (await this.a.withWorker()).textualSuggest(
								O,
								U?.word,
								B,
							);
						if (H)
							return {
								duration: H.duration,
								suggestions: H.words.map((q) => ({
									kind: d.CompletionItemKind.Text,
									label: q,
									insertText: q,
									range: { insert: F, replace: z },
								})),
							};
					}
				}
				let k = class extends i.$1c {
					constructor(N, A) {
						super(),
							(this.g = N),
							(this.a = A),
							(this.b = null),
							(this.f = new Date().getTime()),
							this.D(new l.$jgb()).cancelAndSet(
								() => this.j(),
								Math.round(S / 2),
								s.$Bfb,
							),
							this.D(this.a.onModelRemoved((O) => this.h()));
					}
					dispose() {
						this.b && (this.b.dispose(), (this.b = null)), super.dispose();
					}
					h() {
						if (!this.b) return;
						this.a.getModels().length === 0 &&
							(this.b.dispose(), (this.b = null));
					}
					j() {
						if (!this.b) return;
						new Date().getTime() - this.f > S &&
							(this.b.dispose(), (this.b = null));
					}
					withWorker() {
						return (
							(this.f = new Date().getTime()),
							this.b || (this.b = new D(this.g, !1, this.a)),
							Promise.resolve(this.b)
						);
					}
				};
				k = Ne([j(1, u.$QO)], k);
				class L {
					constructor(N) {
						(this.a = N), (this.proxy = this.a);
					}
					dispose() {
						this.a.dispose();
					}
					setChannel(N, A) {
						throw new Error("Not supported");
					}
					getChannel(N) {
						throw new Error("Not supported");
					}
				}
				let D = class extends i.$1c {
					constructor(N, A, R) {
						super(),
							(this.j = N),
							(this.h = !1),
							(this.a = R),
							(this.b = A),
							(this.f = null),
							(this.g = null);
					}
					fhr(N, A) {
						throw new Error("Not implemented!");
					}
					n() {
						if (!this.f)
							try {
								(this.f = this.D((0, E.$ijb)(this.j))),
									v.$6wb.setChannel(this.f, this.t());
							} catch (N) {
								(0, w.logOnceWebWorkerWarning)(N), (this.f = this.s());
							}
						return this.f;
					}
					async q() {
						try {
							const N = this.n().proxy;
							return await N.$ping(), N;
						} catch (N) {
							return (
								(0, w.logOnceWebWorkerWarning)(N),
								(this.f = this.s()),
								this.f.proxy
							);
						}
					}
					s() {
						return new L(new r.EditorSimpleWorker(this.t(), null));
					}
					t() {
						return { $fhr: (N, A) => this.fhr(N, A) };
					}
					u(N) {
						return (
							this.g || (this.g = this.D(new $.$wxb(N, this.a, this.b))), this.g
						);
					}
					async workerWithSyncedResources(N, A = !1) {
						if (this.h) return Promise.reject((0, g.$0)());
						const R = await this.q();
						return this.u(R).ensureSyncedResources(N, A), R;
					}
					async textualSuggest(N, A, R) {
						const O = await this.workerWithSyncedResources(N),
							B = R.source,
							U = R.flags;
						return O.$textualSuggest(
							N.map((z) => z.toString()),
							A,
							B,
							U,
						);
					}
					dispose() {
						super.dispose(), (this.h = !0);
					}
				};
				(e.$Oyc = D), (e.$Oyc = D = Ne([j(2, u.$QO)], D));
			},
		)
