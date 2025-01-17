import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/errors.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/uri.js';
import '../../../browser/services/bulkEditService.js';
import '../../../common/core/range.js';
import '../../../common/core/selection.js';
import '../../../common/languages.js';
import '../../../common/services/languageFeatures.js';
import '../../../common/services/model.js';
import '../../editorState/browser/editorState.js';
import '../../../../nls.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/notification/common/notification.js';
import '../../../../platform/progress/common/progress.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../common/types.js';
import '../../../../base/common/hierarchicalKind.js';
define(
			de[393],
			he([
				1, 0, 24, 33, 29, 3, 9, 199, 17, 104, 74, 69, 67, 439, 4, 31, 40, 84,
				32, 291, 318,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ApplyCodeActionReason =
						e.$TAb =
						e.$SAb =
						e.$RAb =
						e.$QAb =
						e.$PAb =
						e.$OAb =
						e.$NAb =
						e.$MAb =
						e.$LAb =
							void 0),
					(e.$UAb = $),
					(e.$VAb = P),
					(u = mt(u)),
					(n = mt(n)),
					(e.$LAb = "editor.action.codeAction"),
					(e.$MAb = "editor.action.quickFix"),
					(e.$NAb = "editor.action.autoFix"),
					(e.$OAb = "editor.action.refactor"),
					(e.$PAb = "editor.action.refactor.preview"),
					(e.$QAb = "editor.action.sourceAction"),
					(e.$RAb = "editor.action.organizeImports"),
					(e.$SAb = "editor.action.fixAll"),
					(e.$TAb = "editor.action.aiRefactor");
				class l extends E.$1c {
					static c(D, M) {
						return D.isPreferred && !M.isPreferred
							? -1
							: !D.isPreferred && M.isPreferred
								? 1
								: 0;
					}
					static f({ action: D }, { action: M }) {
						return D.isAI && !M.isAI
							? 1
							: !D.isAI && M.isAI
								? -1
								: (0, t.$Pb)(D.diagnostics)
									? (0, t.$Pb)(M.diagnostics)
										? l.c(D, M)
										: -1
									: (0, t.$Pb)(M.diagnostics)
										? 1
										: l.c(D, M);
					}
					constructor(D, M, N) {
						super(),
							(this.documentation = M),
							this.D(N),
							(this.allActions = [...D].sort(l.f)),
							(this.validActions = this.allActions.filter(
								({ action: A }) => !A.disabled,
							));
					}
					get hasAutoFix() {
						return this.validActions.some(
							({ action: D }) =>
								!!D.kind &&
								b.$GAb.QuickFix.contains(new s.$1L(D.kind)) &&
								!!D.isPreferred,
						);
					}
					get hasAIFix() {
						return this.validActions.some(({ action: D }) => !!D.isAI);
					}
					get allAIFixes() {
						return this.validActions.every(({ action: D }) => !!D.isAI);
					}
				}
				const y = { actions: [], documentation: void 0 };
				async function $(L, D, M, N, A, R, O, B) {
					const U = N.filter || {},
						z = { ...U, excludes: [...(U.excludes || []), b.$GAb.Notebook] },
						F = { only: U.include?.value, trigger: N.type },
						x = new c.$Ozb(D, R),
						H = N.type === u.CodeActionTriggerType.Auto,
						q = v(L, D, H ? z : U),
						V = new E.$Zc(),
						G = q.map(async (J) => {
							try {
								A.report(J);
								const W = await J.provideCodeActions(D, M, F, x.token);
								if ((W && V.add(W), x.token.isCancellationRequested)) return y;
								const X = (W?.actions || []).filter(
										(ie) => ie && (0, b.$IAb)(U, ie),
									),
									Y = I(J, X, U.include);
								return {
									actions: X.map((ie) => new b.$KAb(ie, J)),
									documentation: Y,
								};
							} catch (W) {
								if ((0, w.$8)(W)) throw W;
								return (0, w.$5)(W), y;
							}
						}),
						K = L.onDidChange(() => {
							const J = L.all(D);
							(0, t.$yb)(J, q) || x.cancel();
						});
					try {
						const J = await Promise.all(G),
							W = J.map((Y) => Y.actions).flat(),
							X = [
								...(0, t.$Lb)(J.map((Y) => Y.documentation).filter((Y) => !!Y)),
								...S(L, D, N, W),
							];
						return new l(W, X, V);
					} finally {
						K.dispose(), x.dispose();
					}
				}
				function v(L, D, M) {
					return L.all(D).filter((N) =>
						N.providedCodeActionKinds
							? N.providedCodeActionKinds.some((A) =>
									(0, b.$HAb)(M, new s.$1L(A)),
								)
							: !0,
					);
				}
				function* S(L, D, M, N) {
					if (D && N.length)
						for (const A of L.all(D))
							A._getAdditionalMenuItems &&
								(yield* A._getAdditionalMenuItems?.(
									{ trigger: M.type, only: M.filter?.include?.value },
									N.map((R) => R.action),
								));
				}
				function I(L, D, M) {
					if (!L.documentation) return;
					const N = L.documentation.map((A) => ({
						kind: new s.$1L(A.kind),
						command: A.command,
					}));
					if (M) {
						let A;
						for (const R of N)
							R.kind.contains(M) &&
								(A ? A.kind.contains(R.kind) && (A = R) : (A = R));
						if (A) return A?.command;
					}
					for (const A of D)
						if (A.kind) {
							for (const R of N)
								if (R.kind.contains(new s.$1L(A.kind))) return R.command;
						}
				}
				var T;
				(function (L) {
					(L.OnSave = "onSave"),
						(L.FromProblemsView = "fromProblemsView"),
						(L.FromCodeActions = "fromCodeActions"),
						(L.FromAILightbulb = "fromAILightbulb");
				})(T || (e.ApplyCodeActionReason = T = {}));
				async function P(L, D, M, N, A = i.CancellationToken.None) {
					const R = L.get(d.$rzb),
						O = L.get(g.$ek),
						B = L.get(f.$km),
						U = L.get(p.$4N);
					if (
						(B.publicLog2("codeAction.applyCodeAction", {
							codeActionTitle: D.action.title,
							codeActionKind: D.action.kind,
							codeActionIsPreferred: !!D.action.isPreferred,
							reason: M,
						}),
						await D.resolve(A),
						!A.isCancellationRequested &&
							!(
								D.action.edit?.edits.length &&
								!(
									await R.apply(D.action.edit, {
										editor: N?.editor,
										label: D.action.title,
										quotableLabel: D.action.title,
										code: "undoredo.codeAction",
										respectAutoSaveConfig: M !== T.OnSave,
										showPreview: N?.preview,
									})
								).isApplied
							) &&
							D.action.command)
					)
						try {
							await O.executeCommand(
								D.action.command.id,
								...(D.action.command.arguments || []),
							);
						} catch (z) {
							const F = k(z);
							U.error(typeof F == "string" ? F : n.localize(897, null));
						}
				}
				function k(L) {
					return typeof L == "string"
						? L
						: L instanceof Error && typeof L.message == "string"
							? L.message
							: void 0;
				}
				g.$fk.registerCommand(
					"_executeCodeActionProvider",
					async function (L, D, M, N, A) {
						if (!(D instanceof C.URI)) throw (0, w.$$)();
						const { codeActionProvider: R } = L.get(a.$k3),
							O = L.get(h.$QO).getModel(D);
						if (!O) throw (0, w.$$)();
						const B = r.$kL.isISelection(M)
							? r.$kL.liftSelection(M)
							: m.$iL.isIRange(M)
								? O.validateRange(M)
								: void 0;
						if (!B) throw (0, w.$$)();
						const U = typeof N == "string" ? new s.$1L(N) : void 0,
							z = await $(
								R,
								O,
								B,
								{
									type: u.CodeActionTriggerType.Invoke,
									triggerAction: b.CodeActionTriggerSource.Default,
									filter: { includeSourceActions: !0, include: U },
								},
								o.$0N.None,
								i.CancellationToken.None,
							),
							F = [],
							x = Math.min(z.validActions.length, typeof A == "number" ? A : 0);
						for (let H = 0; H < x; H++)
							F.push(z.validActions[H].resolve(i.CancellationToken.None));
						try {
							return await Promise.all(F), z.validActions.map((H) => H.action);
						} finally {
							setTimeout(() => z.dispose(), 100);
						}
					},
				);
			},
		),
		