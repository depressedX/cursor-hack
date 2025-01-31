import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/async.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/errors.js';
import '../../../../base/common/htmlContent.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/network.js';
import '../../../../base/common/platform.js';
import '../../../../base/common/resources.js';
import '../../../../base/common/stopwatch.js';
import '../../../../base/common/uri.js';
import '../../../browser/editorBrowser.js';
import '../../../browser/editorExtensions.js';
import '../../../common/config/editorOptions.js';
import '../../../common/model.js';
import '../../../common/model/textModel.js';
import '../../../common/services/languageFeatureDebounce.js';
import '../../../common/services/languageFeatures.js';
import '../../gotoSymbol/browser/link/clickLinkGesture.js';
import './getLinks.js';
import '../../../../nls.js';
import '../../../../platform/notification/common/notification.js';
import '../../../../platform/opener/common/opener.js';
import '../../../../css!vs/editor/contrib/links/browser/links.js';
define(
			de[963],
			he([
				1, 0, 15, 33, 29, 94, 3, 23, 12, 19, 162, 9, 56, 46, 38, 64, 122, 391,
				69, 766, 2710, 4, 40, 41, 2313,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*async*/,
				i /*cancellation*/,
				w /*errors*/,
				E /*htmlContent*/,
				C /*lifecycle*/,
				d /*network*/,
				m /*platform*/,
				r /*resources*/,
				u /*stopwatch*/,
				a /*uri*/,
				h /*editorBrowser*/,
				c /*editorExtensions*/,
				n /*editorOptions*/,
				g /*model*/,
				p /*textModel*/,
				o /*languageFeatureDebounce*/,
				f /*languageFeatures*/,
				b /*clickLinkGesture*/,
				s /*getLinks*/,
				l /*nls*/,
				y /*notification*/,
				$ /*opener*/,
) {
				"use strict";
				var v;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$6Ob = void 0),
					(m = mt(m)),
					(r = mt(r)),
					(l = mt(l));
				let S = class extends C.$1c {
					static {
						v = this;
					}
					static {
						this.ID = "editor.linkDetector";
					}
					static get(D) {
						return D.getContribution(v.ID);
					}
					constructor(D, M, N, A, R) {
						super(),
							(this.m = D),
							(this.n = M),
							(this.q = N),
							(this.r = A),
							(this.a = this.r.linkProvider),
							(this.b = R.for(this.a, "Links", { min: 1e3, max: 4e3 })),
							(this.c = this.D(new t.$Yh(() => this.s(), 1e3))),
							(this.f = null),
							(this.g = null),
							(this.j = {}),
							(this.h = null);
						const O = this.D(new b.$6Mb(D));
						this.D(
							O.onMouseMoveOrRelevantKeyDown(([B, U]) => {
								this.u(B, U);
							}),
						),
							this.D(
								O.onExecute((B) => {
									this.y(B);
								}),
							),
							this.D(
								O.onCancel((B) => {
									this.w();
								}),
							),
							this.D(
								D.onDidChangeConfiguration((B) => {
									B.hasChanged(n.EditorOption.links) &&
										(this.t([]), this.C(), this.c.schedule(0));
								}),
							),
							this.D(
								D.onDidChangeModelContent((B) => {
									this.m.hasModel() &&
										this.c.schedule(this.b.get(this.m.getModel()));
								}),
							),
							this.D(
								D.onDidChangeModel((B) => {
									(this.j = {}), (this.h = null), this.C(), this.c.schedule(0);
								}),
							),
							this.D(
								D.onDidChangeModelLanguage((B) => {
									this.C(), this.c.schedule(0);
								}),
							),
							this.D(
								this.a.onDidChange((B) => {
									this.C(), this.c.schedule(0);
								}),
							),
							this.c.schedule(0);
					}
					async s() {
						if (!this.m.hasModel() || !this.m.getOption(n.EditorOption.links))
							return;
						const D = this.m.getModel();
						if (!D.isTooLargeForSyncing() && this.a.has(D)) {
							this.g && (this.g.dispose(), (this.g = null)),
								(this.f = (0, t.$zh)((M) => (0, s.$5Ob)(this.a, D, M)));
							try {
								const M = new u.$le(!1);
								if (
									((this.g = await this.f),
									this.b.update(D, M.elapsed()),
									D.isDisposed())
								)
									return;
								this.t(this.g.links);
							} catch (M) {
								(0, w.$4)(M);
							} finally {
								this.f = null;
							}
						}
					}
					t(D) {
						const M =
								this.m.getOption(n.EditorOption.multiCursorModifier) ===
								"altKey",
							N = [],
							A = Object.keys(this.j);
						for (const O of A) {
							const B = this.j[O];
							N.push(B.decorationId);
						}
						const R = [];
						if (D) for (const O of D) R.push(T.decoration(O, M));
						this.m.changeDecorations((O) => {
							const B = O.deltaDecorations(N, R);
							(this.j = {}), (this.h = null);
							for (let U = 0, z = B.length; U < z; U++) {
								const F = new T(D[U], B[U]);
								this.j[F.decorationId] = F;
							}
						});
					}
					u(D, M) {
						const N =
							this.m.getOption(n.EditorOption.multiCursorModifier) === "altKey";
						if (this.z(D, M)) {
							this.w();
							const A = this.getLinkOccurrence(D.target.position);
							A &&
								this.m.changeDecorations((R) => {
									A.activate(R, N), (this.h = A.decorationId);
								});
						} else this.w();
					}
					w() {
						const D =
							this.m.getOption(n.EditorOption.multiCursorModifier) === "altKey";
						if (this.h) {
							const M = this.j[this.h];
							M &&
								this.m.changeDecorations((N) => {
									M.deactivate(N, D);
								}),
								(this.h = null);
						}
					}
					y(D) {
						if (!this.z(D)) return;
						const M = this.getLinkOccurrence(D.target.position);
						M && this.openLinkOccurrence(M, D.hasSideBySideModifier, !0);
					}
					openLinkOccurrence(D, M, N = !1) {
						if (!this.n) return;
						const { link: A } = D;
						A.resolve(i.CancellationToken.None).then(
							(R) => {
								if (typeof R == "string" && this.m.hasModel()) {
									const O = this.m.getModel().uri;
									if (
										O.scheme === d.Schemas.file &&
										R.startsWith(`${d.Schemas.file}:`)
									) {
										const B = a.URI.parse(R);
										if (B.scheme === d.Schemas.file) {
											const U = r.$bh(B);
											let z = null;
											U.startsWith("/./") || U.startsWith("\\.\\")
												? (z = `.${U.substr(1)}`)
												: (U.startsWith("//./") || U.startsWith("\\\\.\\")) &&
													(z = `.${U.substr(2)}`),
												z && (R = r.$nh(O, z));
										}
									}
								}
								return this.n.open(R, {
									openToSide: M,
									fromUserGesture: N,
									allowContributedOpeners: !0,
									allowCommands: !0,
									fromWorkspace: !0,
								});
							},
							(R) => {
								const O = R instanceof Error ? R.message : R;
								O === "invalid"
									? this.q.warn(l.localize(1304, null, A.url.toString()))
									: O === "missing"
										? this.q.warn(l.localize(1305, null))
										: (0, w.$4)(R);
							},
						);
					}
					getLinkOccurrence(D) {
						if (!this.m.hasModel() || !D) return null;
						const M = this.m
							.getModel()
							.getDecorationsInRange(
								{
									startLineNumber: D.lineNumber,
									startColumn: D.column,
									endLineNumber: D.lineNumber,
									endColumn: D.column,
								},
								0,
								!0,
							);
						for (const N of M) {
							const A = this.j[N.id];
							if (A) return A;
						}
						return null;
					}
					z(D, M) {
						return !!(
							D.target.type === h.MouseTargetType.CONTENT_TEXT &&
							(D.hasTriggerModifier || (M && M.keyCodeIsTriggerKey))
						);
					}
					C() {
						this.c.cancel(),
							this.g && (this.g?.dispose(), (this.g = null)),
							this.f && (this.f.cancel(), (this.f = null));
					}
					dispose() {
						super.dispose(), this.C();
					}
				};
				(e.$6Ob = S),
					(e.$6Ob =
						S =
						v =
							Ne([j(1, $.$7rb), j(2, y.$4N), j(3, f.$k3), j(4, o.$PBb)], S));
				const I = {
					general: p.$eY.register({
						description: "detected-link",
						stickiness: g.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
						collapseOnReplaceEdit: !0,
						inlineClassName: "detected-link",
					}),
					active: p.$eY.register({
						description: "detected-link-active",
						stickiness: g.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
						collapseOnReplaceEdit: !0,
						inlineClassName: "detected-link-active",
					}),
				};
				class T {
					static decoration(D, M) {
						return { range: D.range, options: T.a(D, M, !1) };
					}
					static a(D, M, N) {
						const A = { ...(N ? I.active : I.general) };
						return (A.hoverMessage = P(D, M)), A;
					}
					constructor(D, M) {
						(this.link = D), (this.decorationId = M);
					}
					activate(D, M) {
						D.changeDecorationOptions(this.decorationId, T.a(this.link, M, !0));
					}
					deactivate(D, M) {
						D.changeDecorationOptions(this.decorationId, T.a(this.link, M, !1));
					}
				}
				function P(L, D) {
					const M = L.url && /^command:/i.test(L.url.toString()),
						N = L.tooltip
							? L.tooltip
							: M
								? l.localize(1306, null)
								: l.localize(1307, null),
						A = D
							? m.$m
								? l.localize(1308, null)
								: l.localize(1309, null)
							: m.$m
								? l.localize(1310, null)
								: l.localize(1311, null);
					if (L.url) {
						let R = "";
						if (/^command:/i.test(L.url.toString())) {
							const B = L.url.toString().match(/^command:([^?#]+)/);
							if (B) {
								const U = B[1];
								R = l.localize(1312, null, U);
							}
						}
						return new E.$cl("", !0)
							.appendLink(L.url.toString(!0).replace(/ /g, "%20"), N, R)
							.appendMarkdown(` (${A})`);
					} else return new E.$cl().appendText(`${N} (${A})`);
				}
				class k extends c.$itb {
					constructor() {
						super({
							id: "editor.action.openLink",
							label: l.localize(1313, null),
							alias: "Open Link",
							precondition: void 0,
						});
					}
					run(D, M) {
						const N = S.get(M);
						if (!N || !M.hasModel()) return;
						const A = M.getSelections();
						for (const R of A) {
							const O = N.getLinkOccurrence(R.getEndPosition());
							O && N.openLinkOccurrence(O, !1);
						}
					}
				}
				(0, c.$qtb)(
					S.ID,
					S,
					c.EditorContributionInstantiation.AfterFirstRender,
				),
					(0, c.$ntb)(k);
			},
		)
