import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../common/workingCopyBackup.js';
import '../../filesConfiguration/common/filesConfigurationService.js';
import '../common/workingCopyService.js';
import '../common/workingCopy.js';
import '../../lifecycle/common/lifecycle.js';
import '../../../../platform/dialogs/common/dialogs.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../../base/common/platform.js';
import '../../../../platform/files/common/files.js';
import '../../../../platform/native/common/native.js';
import '../common/workingCopyBackupTracker.js';
import '../../../../platform/log/common/log.js';
import '../../editor/common/editorService.js';
import '../../../common/editor.js';
import '../../../../platform/environment/common/environment.js';
import '../../../../base/common/cancellation.js';
import '../../../../platform/progress/common/progress.js';
import '../../../../base/common/async.js';
import '../common/workingCopyEditorService.js';
import '../../editor/common/editorGroupsService.js';
define(
			de[3915],
			he([
				1, 0, 4, 335, 170, 227, 334, 52, 57, 25, 12, 22, 110, 3854, 34, 18, 44,
				113, 33, 84, 15, 403, 66,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*nls*/,
				i /*workingCopyBackup*/,
				w /*filesConfigurationService*/,
				E /*workingCopyService*/,
				C /*workingCopy*/,
				d /*lifecycle*/,
				m /*dialogs*/,
				r /*workspace*/,
				u /*platform*/,
				a /*files*/,
				h /*native*/,
				c /*workingCopyBackupTracker*/,
				n /*log*/,
				g /*editorService*/,
				p /*editor*/,
				o /*environment*/,
				f /*cancellation*/,
				b /*progress*/,
				s /*async*/,
				l /*workingCopyEditorService*/,
				y /*editorGroupsService*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Wdd = void 0);
				let $ = class extends c.$z5c {
					static {
						this.ID = "workbench.contrib.nativeWorkingCopyBackupTracker";
					}
					constructor(S, I, T, P, k, L, D, M, N, A, R, O, B, U) {
						super(S, T, N, P, I, O, B, U),
							(this.Y = k),
							(this.Z = L),
							(this.$ = D),
							(this.ab = M),
							(this.bb = A),
							(this.cb = R);
					}
					async q(S) {
						this.O();
						const { resume: I } = this.P();
						try {
							const T = this.b.modifiedWorkingCopies;
							return T.length ? await this.eb(S, T) : await this.nb();
						} finally {
							I();
						}
					}
					async eb(S, I) {
						const T = I.filter(
							(P) =>
								!(P.capabilities & C.WorkingCopyCapabilities.Untitled) &&
								this.g.getAutoSaveMode(P.resource).mode !== w.AutoSaveMode.OFF,
						);
						if (T.length > 0) {
							try {
								await this.lb(T, p.SaveReason.AUTO);
							} catch (k) {
								this.c.error(
									`[backup tracker] error saving modified working copies: ${k}`,
								);
							}
							const P = this.b.modifiedWorkingCopies;
							return P.length ? this.fb(P, S) : this.ob([...I]);
						}
						return this.fb(I, S);
					}
					async fb(S, I) {
						let T = [],
							P;
						const k = await this.gb(I, S);
						if (k.length > 0)
							try {
								const D = await this.jb(k);
								if (((T = D.backups), (P = D.error), T.length === S.length))
									return !1;
							} catch (D) {
								P = D;
							}
						const L = S.filter((D) => !T.includes(D));
						if (P)
							return this.bb.isExtensionDevelopment
								? (this.c.error(
										`[backup tracker] error creating backups: ${P}`,
									),
									!1)
								: this.hb((0, t.localize)(13155, null), L, P, I);
						try {
							return await this.kb(L);
						} catch (D) {
							return this.bb.isExtensionDevelopment
								? (this.c.error(
										`[backup tracker] error saving or reverting modified working copies: ${D}`,
									),
									!1)
								: this.hb((0, t.localize)(13156, null), L, D, I);
						}
					}
					async gb(S, I) {
						if (!this.g.isHotExitEnabled) return [];
						if (this.bb.isExtensionDevelopment) return I;
						switch (S) {
							case d.ShutdownReason.CLOSE:
								return this.$.getWorkbenchState() !== r.WorkbenchState.EMPTY &&
									this.g.hotExitConfiguration === a.$Kl.ON_EXIT_AND_WINDOW_CLOSE
									? I
									: u.$m || (await this.ab.getWindowCount()) > 1
										? this.$.getWorkbenchState() !== r.WorkbenchState.EMPTY
											? I.filter(
													(T) =>
														T.capabilities &
														C.WorkingCopyCapabilities.Scratchpad,
												)
											: []
										: I;
							case d.ShutdownReason.QUIT:
								return I;
							case d.ShutdownReason.RELOAD:
								return I;
							case d.ShutdownReason.LOAD:
								return this.$.getWorkbenchState() !== r.WorkbenchState.EMPTY
									? this.g.hotExitConfiguration ===
										a.$Kl.ON_EXIT_AND_WINDOW_CLOSE
										? I
										: I.filter(
												(T) =>
													T.capabilities & C.WorkingCopyCapabilities.Scratchpad,
											)
									: [];
						}
					}
					async hb(S, I, T, P) {
						this.c.error(`[backup tracker] ${S}: ${T}`);
						const k = I.filter((N) => N.isModified()),
							L = (0, t.localize)(13157, null),
							D = k.length
								? `${(0, m.$JO)(k.map((N) => N.name))}
${L}`
								: L,
							{ result: M } = await this.Z.prompt({
								type: "error",
								message: S,
								detail: D,
								buttons: [
									{ label: (0, t.localize)(13158, null), run: () => !0 },
									{ label: this.ib(P), run: () => !1 },
								],
							});
						return M ?? !0;
					}
					ib(S) {
						switch (S) {
							case d.ShutdownReason.CLOSE:
							case d.ShutdownReason.LOAD:
								return (0, t.localize)(13159, null);
							case d.ShutdownReason.QUIT:
								return (0, t.localize)(13160, null);
							case d.ShutdownReason.RELOAD:
								return (0, t.localize)(13161, null);
						}
					}
					async jb(S) {
						const I = [];
						let T;
						return (
							await this.qb(
								async (P) => {
									try {
										await s.Promises.settled(
											S.map(async (k) => {
												const L = this.I(k);
												if (this.a.hasBackupSync(k, L)) I.push(k);
												else {
													const D = await k.backup(P);
													if (
														P.isCancellationRequested ||
														(await this.a.backup(k, D.content, L, D.meta, P),
														P.isCancellationRequested)
													)
														return;
													I.push(k);
												}
											}),
										);
									} catch (k) {
										T = k;
									}
								},
								(0, t.localize)(13162, null),
								(0, t.localize)(13163, null),
							),
							{ backups: I, error: T }
						);
					}
					async kb(S) {
						const I = await this.Y.showSaveConfirm(S.map((T) => T.name));
						if (I === m.ConfirmResult.SAVE) {
							const T = this.b.modifiedCount;
							try {
								await this.lb(S, p.SaveReason.EXPLICIT);
							} catch (k) {
								this.c.error(
									`[backup tracker] error saving modified working copies: ${k}`,
								);
							}
							return T - this.b.modifiedCount < S.length ? !0 : this.ob(S);
						} else if (I === m.ConfirmResult.DONT_SAVE) {
							try {
								await this.mb(S);
							} catch (T) {
								this.c.error(
									`[backup tracker] error reverting modified working copies: ${T}`,
								);
							}
							return this.ob(S);
						}
						return !0;
					}
					lb(S, I) {
						return this.qb(
							async () => {
								const T = { skipSaveParticipants: !0, reason: I };
								let P;
								S.length === this.b.modifiedCount &&
									(P = (
										await this.j.saveAll({
											includeUntitled: { includeScratchpad: !0 },
											...T,
										})
									).success),
									P !== !1 &&
										(await s.Promises.settled(
											S.map((k) =>
												k.isModified() ? k.save(T) : Promise.resolve(!0),
											),
										));
							},
							(0, t.localize)(13164, null),
							void 0,
							S.some(
								(T) =>
									T.capabilities & C.WorkingCopyCapabilities.Untitled ||
									T.capabilities & C.WorkingCopyCapabilities.Scratchpad,
							)
								? b.ProgressLocation.Window
								: b.ProgressLocation.Dialog,
						);
					}
					mb(S) {
						return this.qb(
							async () => {
								const I = { soft: !0 };
								S.length === this.b.modifiedCount &&
									(await this.j.revertAll(I)),
									await s.Promises.settled(
										S.map((T) =>
											T.isModified() ? T.revert(I) : Promise.resolve(),
										),
									);
							},
							(0, t.localize)(13165, null),
						);
					}
					nb() {
						return this.ob({
							except:
								this.$.getWorkbenchState() === r.WorkbenchState.EMPTY
									? []
									: Array.from(this.Q),
						});
					}
					async ob(S) {
						return await this.pb(S), !1;
					}
					async pb(S) {
						this.U &&
							(await this.qb(
								async () => {
									try {
										Array.isArray(S)
											? await s.Promises.settled(
													S.map((I) => this.a.discardBackup(I)),
												)
											: await this.a.discardBackups(S);
									} catch (I) {
										this.c.error(
											`[backup tracker] error discarding backups: ${I}`,
										);
									}
								},
								(0, t.localize)(13166, null),
							));
					}
					qb(S, I, T, P = b.ProgressLocation.Dialog) {
						const k = new f.$Ce();
						return this.cb.withProgress(
							{ location: P, cancellable: !0, delay: 800, title: I, detail: T },
							() => (0, s.$Ah)(S(k.token), k.token),
							() => k.dispose(!0),
						);
					}
				};
				(e.$Wdd = $),
					(e.$Wdd = $ =
						Ne(
							[
								j(0, i.$WO),
								j(1, w.$_Y),
								j(2, E.$gY),
								j(3, d.$n6),
								j(4, m.$IO),
								j(5, m.$GO),
								j(6, r.$Vi),
								j(7, h.$y7c),
								j(8, n.$ik),
								j(9, o.$Ti),
								j(10, b.$8N),
								j(11, l.$bZ),
								j(12, g.$IY),
								j(13, y.$EY),
							],
							$,
						));
			},
		),
		