import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../base/common/uri.js';
import '../../../../platform/actions/common/actions.js';
import '../../terminal/browser/terminal.js';
import '../../../common/contextkeys.js';
import '../../../../platform/files/common/files.js';
import '../../files/browser/files.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../base/common/network.js';
import '../../../../base/common/arrays.js';
import '../../../services/remote/common/remoteAgentService.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../common/contributions.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/platform.js';
import '../../../../base/common/path.js';
import '../../../services/lifecycle/common/lifecycle.js';
import '../../../../platform/registry/common/platform.js';
import '../../../../platform/externalTerminal/common/externalTerminal.js';
import '../../../../platform/terminal/common/terminal.js';
import '../../../../platform/list/browser/listService.js';
import '../../../services/editor/common/editorService.js';
import '../../../services/editor/common/editorGroupsService.js';
define(
			de[3688],
			he([
				1, 0, 4, 10, 9, 11, 107, 100, 22, 382, 31, 23, 24, 143, 8, 55, 3, 12,
				54, 52, 30, 1612, 117, 93, 18, 66,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*nls*/,
				i /*configuration*/,
				w /*uri*/,
				E /*actions*/,
				C /*terminal*/,
				d /*contextkeys*/,
				m /*files*/,
				r /*files*/,
				u /*commands*/,
				a /*network*/,
				h /*arrays*/,
				c /*remoteAgentService*/,
				n /*contextkey*/,
				g /*contributions*/,
				p /*lifecycle*/,
				o /*platform*/,
				f /*path*/,
				b /*lifecycle*/,
				s /*platform*/,
				l /*externalTerminal*/,
				y /*terminal*/,
				$ /*listService*/,
				v /*editorService*/,
				S /*editorGroupsService*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ExternalTerminalContribution = void 0),
					(t = mt(t));
				const I = "openInTerminal",
					T = "openInIntegratedTerminal";
				function P(L, D) {
					u.$fk.registerCommand({
						id: L,
						handler: async (M, N) => {
							const A = M.get(i.$gj),
								R = M.get(m.$ll),
								O = M.get(C.$iIb),
								B = M.get(c.$$m),
								U = M.get(C.$lIb);
							let z;
							try {
								z = M.get(l.IExternalTerminalService);
							} catch {}
							const F = (0, r.$NWb)(
								N,
								M.get($.$fMb),
								M.get(v.$IY),
								M.get(S.$EY),
								M.get(r.$LWb),
							);
							return R.resolveAll(F.map((x) => ({ resource: x }))).then(
								async (x) => {
									const H = A.getValue(),
										q = B.getConnection() || D === "integrated",
										V = (0, h.$Qb)(x.filter((G) => G.success));
									if (q) {
										const G = {},
											K = V.map(({ stat: J }) => {
												const W = J.resource;
												return J.isDirectory
													? W
													: w.URI.from({
															scheme: W.scheme,
															authority: W.authority,
															fragment: W.fragment,
															query: W.query,
															path: (0, f.$rc)(W.path),
														});
											});
										for (const J of K) {
											if (G[J.path]) return;
											G[J.path] = !0;
											const W = await O.createTerminal({ config: { cwd: J } });
											W &&
												W.target !== y.TerminalLocation.Editor &&
												(F.length === 1 ||
													!N ||
													J.path === N.path ||
													J.path === (0, f.$rc)(N.path)) &&
												(O.setActiveInstance(W), U.showPanel(!0));
										}
									} else
										z &&
											(0, h.$Qb)(
												V.map(({ stat: G }) =>
													G.isDirectory
														? G.resource.fsPath
														: (0, f.$rc)(G.resource.fsPath),
												),
											).forEach((G) => {
												z.openTerminal(H.terminal.external, G);
											});
								},
							);
						},
					});
				}
				P(I, "external"), P(T, "integrated");
				let k = class extends p.$1c {
					constructor(D) {
						super(), (this._configurationService = D);
						const M = n.$Kj.and(
								d.$BQb.Scheme.isEqualTo(a.Schemas.file),
								n.$Kj.or(
									n.$Kj.equals("config.terminal.explorerKind", "integrated"),
									n.$Kj.equals("config.terminal.explorerKind", "both"),
								),
							),
							N = n.$Kj.and(
								d.$BQb.Scheme.isEqualTo(a.Schemas.file),
								n.$Kj.or(
									n.$Kj.equals("config.terminal.explorerKind", "external"),
									n.$Kj.equals("config.terminal.explorerKind", "both"),
								),
							);
						(this._openInIntegratedTerminalMenuItem = {
							group: "navigation",
							order: 30,
							command: { id: T, title: t.localize(6630, null) },
							when: n.$Kj.or(
								M,
								d.$BQb.Scheme.isEqualTo(a.Schemas.vscodeRemote),
							),
						}),
							(this._openInTerminalMenuItem = {
								group: "navigation",
								order: 31,
								command: { id: I, title: t.localize(6631, null) },
								when: N,
							}),
							E.$ZX.appendMenuItem(
								E.$XX.ExplorerContext,
								this._openInTerminalMenuItem,
							),
							E.$ZX.appendMenuItem(
								E.$XX.ExplorerContext,
								this._openInIntegratedTerminalMenuItem,
							),
							this.D(
								this._configurationService.onDidChangeConfiguration((A) => {
									(A.affectsConfiguration("terminal.explorerKind") ||
										A.affectsConfiguration("terminal.external")) &&
										this._refreshOpenInTerminalMenuItemTitle();
								}),
							),
							this._refreshOpenInTerminalMenuItemTitle();
					}
					isWindows() {
						const D = this._configurationService.getValue().terminal;
						if (o.$l && D.external?.windowsExec) {
							const M = (0, f.$sc)(D.external.windowsExec);
							if (M === "wt" || M === "wt.exe") return !0;
						}
						return !1;
					}
					_refreshOpenInTerminalMenuItemTitle() {
						this.isWindows() &&
							(this._openInTerminalMenuItem.command.title = t.localize(
								6632,
								null,
							));
					}
				};
				(e.ExternalTerminalContribution = k),
					(e.ExternalTerminalContribution = k = Ne([j(0, i.$gj)], k)),
					s.$Io
						.as(g.Extensions.Workbench)
						.registerWorkbenchContribution(k, b.LifecyclePhase.Restored);
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	