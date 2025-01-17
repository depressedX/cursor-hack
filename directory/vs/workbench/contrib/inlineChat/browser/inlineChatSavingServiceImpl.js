import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/async.js';
import '../../../../base/common/lifecycle.js';
import '../../../../editor/browser/editorBrowser.js';
import '../../../../nls.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../common/editor.js';
import './inlineChatSessionService.js';
import '../common/inlineChat.js';
import '../../../services/editor/common/editorGroupsService.js';
import '../../../services/editor/common/editorService.js';
import '../../../services/filesConfiguration/common/filesConfigurationService.js';
import '../../../services/textfile/common/textfiles.js';
import '../../../../base/common/iterator.js';
import '../../../../base/common/network.js';
import '../../notebook/common/notebookCommon.js';
import '../../notebook/browser/notebookBrowser.js';
import '../../../../base/common/strings.js';
import '../../../services/workingCopy/common/workingCopyFileService.js';
import '../../../../platform/log/common/log.js';
import '../../../../base/common/event.js';
import './inlineChatController.js';
define(
			de[4085],
			he([
				1, 0, 15, 3, 56, 4, 10, 44, 798, 257, 66, 18, 170, 85, 103, 23, 70, 108,
				37, 336, 34, 6, 427,
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
				l,
				y,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$kJc = void 0);
				let $ = class {
					constructor(S, I, T, P, k, L, D, M) {
						(this.g = S),
							(this.h = I),
							(this.i = T),
							(this.j = P),
							(this.k = k),
							(this.l = L),
							(this.m = D),
							(this.n = M),
							(this.c = new i.$Zc()),
							(this.d = this.c.add(new i.$2c())),
							(this.f = new Map()),
							this.c.add(
								l.Event.any(
									k.onDidEndSession,
									k.onDidStashSession,
								)((N) => {
									this.f.get(N.session)?.dispose();
								}),
							);
					}
					dispose() {
						this.c.dispose(), (0, i.$Vc)(this.f.values());
					}
					markChanged(S) {
						if (!this.f.has(S)) {
							let I = S.targetUri;
							if (I.scheme === g.Schemas.vscodeNotebookCell) {
								const P = p.CellUri.parse(I);
								if (!P) return;
								I = P?.notebook;
							}
							this.f.size === 0 && this.o();
							const T = this.g.disableAutoSave(I);
							this.f.set(S, {
								resourceUri: I,
								groupCandidate: this.h.activeGroup,
								session: S,
								dispose: () => {
									T.dispose(),
										this.f.delete(S),
										this.f.size === 0 && this.d.clear();
								},
							});
						}
					}
					o() {
						const S = new t.$Th(),
							I = this.i.files.addSaveParticipant({
								participate: (P, k, L, D) =>
									S.queue(() =>
										this.p(
											k.savedFrom ?? P.textEditorModel?.uri,
											k.reason,
											L,
											D,
										),
									),
							}),
							T = this.m.addSaveParticipant({
								participate: (P, k, L, D) =>
									S.queue(() =>
										this.p(k.savedFrom ?? P.resource, k.reason, L, D),
									),
							});
						this.d.value = (0, i.$Xc)(I, T, S);
					}
					async p(S, I, T, P) {
						if (
							I !== d.SaveReason.EXPLICIT ||
							!this.l.getValue(
								r.InlineChatConfigKeys.AcceptedOrDiscardBeforeSave,
							)
						)
							return;
						const k = new Map();
						for (const [A, R] of this.f)
							S?.toString() === R.resourceUri.toString() && k.set(A, R);
						if (k.size === 0) return;
						T.report({
							message:
								k.size === 1
									? (0, E.localize)(7103, null)
									: (0, E.localize)(7104, null, k.size),
						});
						const { groups: L, orphans: D } = this.q(k.values()),
							M = this.r(L, P).then(() => {
								if (!P.isCancellationRequested)
									return this.r(
										n.Iterable.map(D, (A) => [this.h.activeGroup, A]),
										P,
									);
							}),
							N = this.t(
								n.Iterable.concat(
									L.map((A) => A[1]),
									D,
								),
								P,
							);
						await Promise.race([N, M]);
					}
					q(S) {
						const I = new Map();
						for (const k of this.h.getGroups(
							u.GroupsOrder.MOST_RECENTLY_ACTIVE,
						)) {
							const L = k.activeEditorPane?.getControl();
							(0, w.$0sb)(L) && I.set(L, k);
						}
						const T = [],
							P = new Set();
						for (const k of S) {
							const L = this.k.getCodeEditor(k.session),
								D = I.get(L);
							D
								? T.push([D, k])
								: this.h.groups.includes(k.groupCandidate)
									? T.push([k.groupCandidate, k])
									: P.add(k);
						}
						return { groups: T, orphans: P };
					}
					async r(S, I) {
						const T = new Map();
						for (const [P, k] of S) {
							let L = T.get(P);
							L || ((L = []), T.set(P, L)), L.push(k);
						}
						for (const [P, k] of T) {
							if (I.isCancellationRequested) break;
							k.sort((L, D) =>
								(0, f.$Ff)(
									L.session.targetUri.toString(),
									D.session.targetUri.toString(),
								),
							);
							for (const L of k) {
								const D = { resource: L.resourceUri },
									M = await this.j.openEditor(D, P);
								let N;
								if (
									L.session.targetUri.scheme === g.Schemas.vscodeNotebookCell
								) {
									const A = (0, o.$eJb)(M),
										R = p.CellUri.parse(L.session.targetUri);
									if (A && A.hasModel() && R) {
										const O = A.getCellByHandle(R.handle);
										O &&
											(await A.revealRangeInCenterIfOutsideViewportAsync(
												O,
												L.session.wholeRange.value,
											)),
											(N = A.codeEditors.find(
												(U) =>
													U[1].getModel()?.uri.toString() ===
													L.session.targetUri.toString(),
											)?.[1]);
									}
								} else (0, w.$0sb)(M?.getControl()) && (N = M.getControl());
								if (!N) break;
								this.k.moveSession(L.session, N),
									y.$Z1b.get(N)?.showSaveHint(),
									this.n.info(
										"WAIT for session to end",
										N.getId(),
										L.session.targetUri.toString(),
									),
									await this.t(n.Iterable.single(L), I);
							}
						}
					}
					async t(S, I) {
						const T = new Map();
						for (const L of S) T.set(L.session, L);
						if (T.size === 0) return;
						let P;
						const k = new Promise((L) => {
							P = l.Event.any(
								this.k.onDidEndSession,
								this.k.onDidStashSession,
							)((D) => {
								const M = T.get(D.session);
								M && (M.dispose(), T.delete(D.session), T.size === 0 && L());
							});
						});
						try {
							await (0, t.$Ah)(k, I);
						} finally {
							P?.dispose();
						}
					}
				};
				(e.$kJc = $),
					(e.$kJc = $ =
						Ne(
							[
								j(0, h.$_Y),
								j(1, u.$EY),
								j(2, c.$kZ),
								j(3, a.$IY),
								j(4, m.$zLb),
								j(5, C.$gj),
								j(6, b.$iZ),
								j(7, s.$ik),
							],
							$,
						));
			},
		),
		