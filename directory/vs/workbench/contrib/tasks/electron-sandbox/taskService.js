import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/semver/semver.js';
import '../../../../platform/workspace/common/workspace.js';
import '../common/tasks.js';
import '../browser/abstractTaskService.js';
import '../common/taskService.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../browser/terminalTaskSystem.js';
import '../../../../platform/dialogs/common/dialogs.js';
import '../../../../base/common/processes.js';
import '../../../../editor/common/services/model.js';
import '../../../../editor/common/services/resolverService.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/files/common/files.js';
import '../../../../platform/log/common/log.js';
import '../../../../platform/markers/common/markers.js';
import '../../../../platform/notification/common/notification.js';
import '../../../../platform/opener/common/opener.js';
import '../../../../platform/progress/common/progress.js';
import '../../../../platform/quickinput/common/quickInput.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../common/views.js';
import '../../../services/views/common/viewsService.js';
import '../../../services/output/common/output.js';
import '../../terminal/browser/terminal.js';
import '../../../services/configurationResolver/common/configurationResolver.js';
import '../../../services/editor/common/editorService.js';
import '../../../services/environment/common/environmentService.js';
import '../../../services/extensions/common/extensions.js';
import '../../../services/lifecycle/common/lifecycle.js';
import '../../../services/path/common/pathService.js';
import '../../../services/preferences/common/preferences.js';
import '../../../services/textfile/common/textfiles.js';
import '../../../../platform/workspace/common/workspaceTrust.js';
import '../../terminal/common/terminal.js';
import '../../../services/panecomposite/browser/panecomposite.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../services/remote/common/remoteAgentService.js';
import '../../../services/onFirstStartup/electron-sandbox/consol.js';
import '../../../../platform/accessibilitySignal/browser/accessibilitySignalService.js';
define(
		de[3840],
		he([
			1, 0, 4, 464, 25, 424, 1907, 419, 20, 1817, 57, 919, 67, 42, 31, 10, 8,
			22, 34, 90, 40, 41, 84, 63, 21, 32, 60, 89, 297, 107, 358, 18, 78, 53, 52,
			165, 131, 85, 174, 145, 142, 35, 5, 143, 3508, 184,
		]),
		function (			ce /*require*/,
			e /*exports*/,
			t /*nls*/,
			i /*semver*/,
			w /*workspace*/,
			E /*tasks*/,
			C /*abstractTaskService*/,
			d /*taskService*/,
			m /*extensions*/,
			r /*terminalTaskSystem*/,
			u /*dialogs*/,
			a /*processes*/,
			h /*model*/,
			c /*resolverService*/,
			n /*commands*/,
			g /*configuration*/,
			p /*contextkey*/,
			o /*files*/,
			f /*log*/,
			b /*markers*/,
			s /*notification*/,
			l /*opener*/,
			y /*progress*/,
			$ /*quickInput*/,
			v /*storage*/,
			S /*telemetry*/,
			I /*views*/,
			T /*viewsService*/,
			P /*output*/,
			k /*terminal*/,
			L /*configurationResolver*/,
			D /*editorService*/,
			M /*environmentService*/,
			N /*extensions*/,
			A /*lifecycle*/,
			R /*pathService*/,
			O /*preferences*/,
			B /*textfiles*/,
			U /*workspaceTrust*/,
			z /*terminal*/,
			F /*panecomposite*/,
			x /*themeService*/,
			H /*instantiation*/,
			q /*remoteAgentService*/,
			V /*consol*/,
			G /*accessibilitySignalService*/,
) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Egd = void 0),
				(t = mt(t)),
				(i = mt(i)),
				(V = xi(V));
			let K = class extends C.$jXc {
				constructor(
					W,
					X,
					Y,
					ie,
					ne,
					ee,
					_,
					te,
					Q,
					Z,
					se,
					re,
					le,
					oe,
					ae,
					pe,
					$e,
					ye,
					ue,
					fe,
					me,
					ve,
					ge,
					be,
					Ce,
					Le,
					Fe,
					Oe,
					xe,
					He,
					Ke,
					Je,
					Te,
					Ee,
					Ie,
					Be,
					Se,
				) {
					super(
						W,
						X,
						Y,
						ie,
						ne,
						ee,
						_,
						te,
						Q,
						Z,
						se,
						le,
						oe,
						ae,
						pe,
						$e,
						ye,
						ue,
						fe,
						me,
						ve,
						ge,
						be,
						Ce,
						Le,
						Fe,
						Oe,
						xe,
						He,
						Ke,
						Je,
						Te,
						Ee,
						re,
						Be,
						Ie,
					),
						V.default.log(this.ub, "checking for unusual line terminators"),
						this.D(
							re.onBeforeShutdown((ke) =>
								ke.veto(this.beforeShutdown(), "veto.tasks"),
							),
						);
				}
				Lc() {
					if (this.I) return this.I;
					const W = this.Kc();
					return (
						(this.I = W),
						(this.J = [
							this.I.onDidStateChange((X) => {
								this.O.set(this.I.isActiveSync()), this.Q.fire(X);
							}),
						]),
						this.I
					);
				}
				bd(W) {
					const { config: X, hasParseErrors: Y } = this.fd(W);
					return Y
						? Promise.resolve({
								workspaceFolder: W,
								hasErrors: !0,
								config: void 0,
							})
						: X
							? Promise.resolve({
									workspaceFolder: W,
									config: X,
									hasErrors: !1,
								})
							: Promise.resolve({
									workspaceFolder: W,
									hasErrors: !0,
									config: void 0,
								});
				}
				Zb(W) {
					const X = W && W.version ? W.version : void 0,
						Y = this.Ob;
					return (
						X === void 0 ||
						(i.satisfies("0.1.0", X) && Y === E.ExecutionEngine.Process) ||
						(i.satisfies("2.0.0", X) && Y === E.ExecutionEngine.Terminal)
					);
				}
				beforeShutdown() {
					if (!this.I || !this.I.isActiveSync() || this.I instanceof r.$dXc)
						return !1;
					let W;
					return (
						this.I.canAutoTerminate()
							? (W = Promise.resolve({ confirmed: !0 }))
							: (W = this.ub.confirm({
									message: t.localize(9957, null),
									primaryButton: t.localize(9958, null),
								})),
						W.then((X) =>
							X.confirmed
								? this.I.terminateAll().then(
										(Y) => {
											let ie = !0,
												ne;
											for (const ee of Y)
												(ie = ie && ee.success),
													ne === void 0 && ee.code !== void 0 && (ne = ee.code);
											return ie
												? ((this.I = void 0), this.Vb(), !1)
												: ne && ne === a.TerminateResponseCode.ProcessNotFound
													? this.ub
															.confirm({
																message: t.localize(9959, null),
																primaryButton: t.localize(9960, null),
																type: "info",
															})
															.then((ee) => !ee.confirmed)
													: !0;
										},
										(Y) => !0,
									)
								: !0,
						)
					);
				}
			};
			(e.$Egd = K),
				(e.$Egd = K =
					Ne(
						[
							j(0, g.$gj),
							j(1, b.$aM),
							j(2, P.$o8),
							j(3, F.$6Sb),
							j(4, T.$HMb),
							j(5, n.$ek),
							j(6, D.$IY),
							j(7, o.$ll),
							j(8, w.$Vi),
							j(9, S.$km),
							j(10, B.$kZ),
							j(11, A.$n6),
							j(12, h.$QO),
							j(13, N.$q2),
							j(14, $.$DJ),
							j(15, L.$zeb),
							j(16, k.$iIb),
							j(17, k.$lIb),
							j(18, v.$lq),
							j(19, y.$8N),
							j(20, l.$7rb),
							j(21, u.$GO),
							j(22, s.$4N),
							j(23, p.$6j),
							j(24, M.$r8),
							j(25, z.$reb),
							j(26, R.$I8),
							j(27, c.$MO),
							j(28, O.$7Z),
							j(29, I.$K1),
							j(30, U.$qO),
							j(31, U.$pO),
							j(32, f.$ik),
							j(33, x.$iP),
							j(34, H.$Li),
							j(35, q.$$m),
							j(36, G.$Owb),
						],
						K,
					)),
				(0, m.$lK)(d.$Zpc, K, m.InstantiationType.Delayed);
		},
	)
