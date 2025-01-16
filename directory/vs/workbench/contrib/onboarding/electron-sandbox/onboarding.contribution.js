define(
			de[3956],
			he([
				1, 0, 55, 30, 55, 52, 25, 96, 1282, 21, 31, 1716, 18, 22, 32, 151, 40,
				45, 12, 137, 58, 39, 315, 10, 141, 110, 118, 287, 1782, 75, 741, 1897,
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
				$,
				v,
				S,
				I,
				T,
				P,
				k,
				L,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$red = e.$qed = void 0);
				let D = class {
					static {
						this.ID = "workbench.contrib.onboarding.onStart.cursor";
					}
					constructor(A) {
						(this.a = A), A.renderPopupBar();
					}
				};
				(e.$qed = D),
					(e.$qed = D = Ne([j(0, m.$HAc)], D)),
					(0, t.$s6)(D.ID, D, t.WorkbenchPhase.BlockRestore);
				let M = class {
					constructor(
						A,
						R,
						O,
						B,
						U,
						z,
						F,
						x,
						H,
						q,
						V,
						G,
						K,
						J,
						W,
						X,
						Y,
						ie,
						ne,
					) {
						(this.a = A),
							(this.b = R),
							(this.c = O),
							(this.d = B),
							(this.e = U),
							(this.f = z),
							(this.g = F),
							(this.h = x),
							(this.i = H),
							(this.j = q),
							(this.k = V),
							(this.l = G),
							(this.m = K),
							(this.n = J),
							(this.o = W),
							(this.p = X),
							(this.q = Y),
							(this.r = ie),
							(this.s = ne),
							this.m.refreshAPIKeyModels(),
							this.q.refreshDefaultModels();
						const ee = new L.Lock();
						k.$Bfb.setInterval(() => {
							ee.withSemaphore(() => this.q.refreshDefaultModels());
						}, 5 * 6e4);
						const _ = new L.Lock();
						this.m.onDidChangeUseOpenAIKey((pe) => {
							pe && _.withSemaphore(() => this.m.refreshAPIKeyModels());
						}),
							k.$Bfb.setInterval(() => {
								_.withSemaphore(() => this.m.refreshAPIKeyModels());
							}, 30 * 6e4);
						const te = new L.Lock();
						if (
							(k.$Bfb.setInterval(() => {
								te.withSemaphore(async () => {
									try {
										await this.r.maybeRefreshFeatureStatus(
											"shouldMigrateBackFromClaudeSonnet",
										),
											this.r.getCachedFeatureStatus(
												"shouldMigrateBackFromClaudeSonnet",
											) && this.q.maybeMigrateBackFromClaudeSonnetToGpt4o();
									} catch {}
								});
							}, 60 * 6e4),
							this.k.bindInitialKeys(),
							this.s.onEditorStart(),
							this.r.maybeRefreshFeatureStatus("aiReview").then(() => {
								this.j.setApplicationUserPersistentStorage(
									"removeAIReview",
									!this.r.getCachedFeatureStatus("aiReview"),
								);
							}),
							this.j.applicationUserPersistentStorage.hasSilencedLinter,
							this.j.applicationUserPersistentStorage
								.hasDisabledErrorLensForAiLinter !== !0 &&
								(this.j.setApplicationUserPersistentStorage(
									"hasDisabledErrorLensForAiLinter",
									!0,
								),
								this.o.queryLocal().then((pe) => {
									pe.find(
										(ye) => ye.identifier.id === "usernamehw.errorlens",
									) && this.m.setWatcherEnabled(!1);
								})),
							setTimeout(() => {
								this.a.getWorkbenchState() == C.WorkbenchState.EMPTY &&
									(this.b.setPartHidden(!0, d.Parts.AUXILIARYBAR_PART),
									this.b.setPartHidden(!0, d.Parts.SIDEBAR_PART));
								const pe = this.a.getWorkspace().folders;
								pe.length > 0 &&
									(pe[0].uri.toString() ?? "").includes("cursor-tutor");
							}, 0),
							this.a.getWorkspace().folders.length > 0)
						) {
							const pe = this.a.getWorkspace().folders[0].uri;
							(0, a.$ked)(pe, this.c, "onboarding") &&
								(this.d.executeCommand(s.$PX, 3e4),
								this.d.executeCommand(s.$0W)),
								pe.fsPath.includes("cursor-tutor") ||
									this.g.publicLogCapture("did.newfolder.nontutor");
						}
						let Q = 0;
						this.e.onDidActiveEditorChange(() => {
							const pe = Date.now();
							pe - Q > 12 * 60 * 60 * 1e3 &&
								(this.g.publicLogCapture("did.editor.changed"), (Q = pe));
						});
						const Z = () => {
								this.j.setApplicationUserPersistentStorage("cmdLineHookState", {
									ignored: !0,
								});
							},
							se = this.j.applicationUserPersistentStorage.cmdLineHookState,
							re = se.remindLaterDate
								? new Date(parseInt(se.remindLaterDate))
								: void 0,
							le = re ? Date.now() - re.getTime() > 5 * 24 * 60 * 60 * 1e3 : !0,
							oe = "workbench.action.showCommands",
							ae = this.l.lookupKeybinding(oe)?.getLabel();
						!se.ignored &&
							se.timesShown < 2 &&
							(f.$l || f.$m) &&
							le &&
							setTimeout(() => {
								this.j.setApplicationUserPersistentStorage("cmdLineHookState", {
									timesShown: se.timesShown + 1,
								}),
									this.j.setApplicationUserPersistentStorage(
										"cmdLineHookState",
										"remindLaterDate",
										Date.now().toString(),
									),
									this.i.prompt(
										p.Severity.Info,
										"Want to launch Cursor from the command line? You can add the `code` or `cursor` commands" +
											(ae !== void 0
												? ` now, or later with [${ae}](command:${oe}) and typing 'install code command'.`
												: "."),
										[
											{
												label: "Install 'code'",
												run: () => {
													Z(),
														this.g.publicLogCapture(
															"submitted.notification.code_command",
														),
														this.d.executeCommand(
															"workbench.action.replaceCommandLine",
														);
												},
											},
											{
												label: "Install 'cursor'",
												run: () => {
													Z(),
														this.g.publicLogCapture(
															"submitted.notification.cursor_command",
														),
														this.d.executeCommand(
															"workbench.action.installCommandLine",
														);
												},
											},
											{
												label: "Never show again",
												run: () => {
													this.g.publicLogCapture(
														"submitted.notification.ignore_code_cursor_commands",
													),
														Z();
												},
											},
										],
										{ sticky: !0 },
									);
							}, 3e5);
					}
				};
				(e.$red = M),
					(e.$red = M =
						Ne(
							[
								j(0, C.$Vi),
								j(1, d.$mEb),
								j(2, r.$lq),
								j(3, u.$ek),
								j(4, h.$IY),
								j(5, c.$ll),
								j(6, n.$km),
								j(7, g.$ucd),
								j(8, p.$4N),
								j(9, o.$0zb),
								j(10, b.$mfc),
								j(11, l.$uZ),
								j(12, y.$S6b),
								j(13, $.$gj),
								j(14, v.$MQb),
								j(15, S.$y7c),
								j(16, I.$Nfc),
								j(17, T.$H7b),
								j(18, P.$oed),
							],
							M,
						)),
					i.$Io
						.as(w.Extensions.Workbench)
						.registerWorkbenchContribution(M, E.LifecyclePhase.Restored);
			},
		),
		