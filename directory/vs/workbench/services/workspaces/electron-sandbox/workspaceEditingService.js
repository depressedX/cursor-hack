define(
			de[4418],
			he([
				1, 0, 4, 449, 9, 25, 423, 256, 21, 53, 335, 31, 19, 40, 22, 151, 52, 57,
				20, 73, 85, 87, 3918, 110, 12, 1912, 68, 174, 261, 129, 133, 10,
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
				D,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Bdd = void 0);
				let M = class extends y.$j5c {
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
						ee,
						_,
						te,
					) {
						super(A, R, B, x, H, q, V, G, K, J, W, ie, ne, ee, _, te),
							(this.S = O),
							(this.U = U),
							(this.W = z),
							(this.X = F),
							(this.Y = X),
							(this.Z = Y),
							this.$();
					}
					$() {
						this.D(
							this.Y.onBeforeShutdown((A) => {
								const R = this.ab(A.reason);
								A.veto(R, "veto.untitledWorkspace");
							}),
						);
					}
					async ab(A) {
						if (A !== p.ShutdownReason.LOAD && A !== p.ShutdownReason.CLOSE)
							return !1;
						const R = this.R();
						if (!R || !(0, E.$aj)(R.configPath, this.n)) return !1;
						const O = await this.S.getWindowCount();
						if (A === p.ShutdownReason.CLOSE && !v.$m && O === 1) return !1;
						if (
							!(this.c.getValue("window.confirmSaveUntitledWorkspace") !== !1)
						)
							return await this.m.deleteUntitledWorkspace(R), !1;
						let U = !1;
						const { result: z, checkboxChecked: F } = await this.r.prompt({
							type: c.Severity.Warning,
							message: (0, t.localize)(13173, null),
							detail: (0, t.localize)(13174, null),
							buttons: [
								{
									label: (0, t.localize)(13175, null),
									run: async () => {
										const x = await this.pickNewWorkspacePath();
										if (!x || !(0, E.$fj)(x)) return !0;
										try {
											await this.H(R, x);
											const H = await this.m.getWorkspaceIdentifier(x);
											await this.m.addRecentlyOpened([
												{
													label: this.Z.getWorkspaceLabel(H, {
														verbose: b.Verbosity.LONG,
													}),
													workspace: H,
													remoteAuthority: this.n.remoteAuthority,
												},
											]),
												await this.m.deleteUntitledWorkspace(R);
										} catch {}
										return !1;
									},
								},
								{
									label: (0, t.localize)(13176, null),
									run: async () => (
										await this.m.deleteUntitledWorkspace(R), !1
									),
								},
							],
							cancelButton: { run: () => ((U = !0), !0) },
							checkbox: { label: (0, t.localize)(13177, null) },
						});
						return (
							!U &&
								F &&
								(await this.c.updateValue(
									"window.confirmSaveUntitledWorkspace",
									!1,
									D.ConfigurationTarget.USER,
								)),
							z
						);
					}
					async isValidTargetWorkspacePath(A) {
						return (
							await this.S.getWindows({ includeAuxiliaryWindows: !1 })
						).some(
							(O) =>
								(0, E.$2i)(O.workspace) &&
								this.t.extUri.isEqual(O.workspace.configPath, A),
						)
							? (await this.r.info(
									(0, t.localize)(13178, null, (0, h.$kh)(A)),
									(0, t.localize)(13179, null),
								),
								!1)
							: !0;
					}
					async enterWorkspace(A) {
						if (
							!(await this.W.stopExtensionHosts((0, t.localize)(13180, null)))
						)
							return;
						const O = await this.N(A);
						if (
							O &&
							(await this.U.switch(O.workspace, !0), this.X instanceof S.$w5c)
						) {
							const B = O.backupPath
								? w.URI.file(O.backupPath).with({
										scheme: this.n.userRoamingDataHome.scheme,
									})
								: void 0;
							this.X.reinitialize(B);
						}
						this.n.remoteAuthority
							? this.s.reload()
							: this.W.startExtensionHosts();
					}
				};
				(e.$Bdd = M),
					(e.$Bdd = M =
						Ne(
							[
								j(0, C.$$Qb),
								j(1, E.$Vi),
								j(2, $.$y7c),
								j(3, P.$RZ),
								j(4, m.$lq),
								j(5, r.$q2),
								j(6, u.$WO),
								j(7, c.$4N),
								j(8, a.$ek),
								j(9, n.$ll),
								j(10, s.$kZ),
								j(11, d.$cRb),
								j(12, g.$ucd),
								j(13, o.$IO),
								j(14, o.$GO),
								j(15, p.$n6),
								j(16, b.$3N),
								j(17, l.$asb),
								j(18, I.$Vl),
								j(19, T.$pO),
								j(20, k.$Xl),
								j(21, L.$P8),
							],
							M,
						)),
					(0, f.$lK)(i.$mRb, M, f.InstantiationType.Delayed);
			},
		),
		