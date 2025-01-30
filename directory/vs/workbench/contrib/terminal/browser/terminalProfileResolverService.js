import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/network.js';
import '../../../../base/common/process.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../services/configurationResolver/common/configurationResolver.js';
import '../../../services/history/common/history.js';
import '../../../../base/common/platform.js';
import '../../../../platform/terminal/common/terminal.js';
import '../common/terminal.js';
import '../../../../base/common/path.js';
import '../../../../base/common/codicons.js';
import '../../../../platform/theme/common/iconRegistry.js';
import '../../../services/remote/common/remoteAgentService.js';
import '../../../../base/common/decorators.js';
import '../../../../base/common/themables.js';
import '../../../../base/common/uri.js';
import '../../../../base/common/objects.js';
import '../../../../platform/terminal/common/terminalProfiles.js';
import './terminal.js';
import '../../../../base/common/lifecycle.js';
define(
			de[3566],
			he([
				1, 0, 23, 344, 10, 25, 358, 245, 12, 117, 145, 54, 14, 79, 143, 138, 26,
				9, 82, 955, 107, 3,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*network*/,
				i /*process*/,
				w /*configuration*/,
				E /*workspace*/,
				C /*configurationResolver*/,
				d /*history*/,
				m /*platform*/,
				r /*terminal*/,
				u /*terminal*/,
				a /*path*/,
				h /*codicons*/,
				c /*iconRegistry*/,
				n /*remoteAgentService*/,
				g /*decorators*/,
				p /*themables*/,
				o /*uri*/,
				f /*objects*/,
				b /*terminalProfiles*/,
				s /*terminal*/,
				l /*lifecycle*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$l6c = e.$k6c = void 0),
					(a = mt(a));
				const y = "Generated";
				class $ extends l.$1c {
					get defaultProfileName() {
						return this.c;
					}
					constructor(I, T, P, k, L, D, M, N) {
						super(),
							(this.f = I),
							(this.g = T),
							(this.h = P),
							(this.j = k),
							(this.m = L),
							(this.n = D),
							(this.q = M),
							(this.r = N),
							(this.b = (0, c.$_O)()),
							this.r.getConnection()
								? this.r.getEnvironment().then((A) => (this.a = A?.os || m.OS))
								: (this.a = m.OS),
							this.D(
								this.g.onDidChangeConfiguration((A) => {
									(A.affectsConfiguration(
										r.TerminalSettingId.DefaultProfileWindows,
									) ||
										A.affectsConfiguration(
											r.TerminalSettingId.DefaultProfileMacOs,
										) ||
										A.affectsConfiguration(
											r.TerminalSettingId.DefaultProfileLinux,
										)) &&
										this.s();
								}),
							),
							this.D(this.n.onDidChangeAvailableProfiles(() => this.s()));
					}
					async s() {
						this.a &&
							(this.c = (
								await this.getDefaultProfile({
									remoteAuthority: this.r.getConnection()?.remoteAuthority,
									os: this.a,
								})
							)?.profileName);
					}
					resolveIcon(I, T) {
						if (I.icon) {
							I.icon = this.t(I.icon) || this.getDefaultIcon();
							return;
						}
						if (I.customPtyImplementation) {
							I.icon = this.getDefaultIcon();
							return;
						}
						if (I.executable) return;
						const P = this.y(T);
						P && (I.icon = P.icon), I.icon || (I.icon = this.getDefaultIcon());
					}
					getDefaultIcon(I) {
						return (
							this.b.getIcon(
								this.g.getValue(r.TerminalSettingId.TabsDefaultIcon, {
									resource: I,
								}),
							) || h.$ak.terminal
						);
					}
					async resolveShellLaunchConfig(I, T) {
						let P;
						I.executable
							? (P = await this.F(
									{
										path: I.executable,
										args: I.args,
										profileName: y,
										isDefault: !1,
									},
									T,
								))
							: (P = await this.getDefaultProfile(T)),
							(I.executable = P.path),
							(I.args = P.args),
							P.env &&
								(I.env ? (I.env = { ...I.env, ...P.env }) : (I.env = P.env));
						const k = I === void 0 || typeof I.cwd == "string" ? void 0 : I.cwd;
						(I.icon =
							this.t(I.icon) || this.t(P.icon) || this.getDefaultIcon(k)),
							P.overrideName && (I.name = P.profileName),
							(I.color =
								I.color ||
								P.color ||
								this.g.getValue(r.TerminalSettingId.TabsDefaultColor, {
									resource: k,
								})),
							I.useShellEnvironment === void 0 &&
								(I.useShellEnvironment = this.g.getValue(
									r.TerminalSettingId.InheritEnv,
								));
					}
					async getDefaultShell(I) {
						return (await this.getDefaultProfile(I)).path;
					}
					async getDefaultShellArgs(I) {
						return (await this.getDefaultProfile(I)).args || [];
					}
					async getDefaultProfile(I) {
						return this.F(await this.u(I), I);
					}
					getEnvironment(I) {
						return this.f.getEnvironment(I);
					}
					t(I) {
						if (I) {
							if (typeof I == "string") return p.ThemeIcon.fromId(I);
							if (p.ThemeIcon.isThemeIcon(I)) return I;
							if (o.URI.isUri(I) || (0, b.$7J)(I)) return o.URI.revive(I);
							if (typeof I == "object" && "light" in I && "dark" in I) {
								const T = I;
								if (
									(o.URI.isUri(T.light) || (0, b.$7J)(T.light)) &&
									(o.URI.isUri(T.dark) || (0, b.$7J)(T.dark))
								)
									return {
										light: o.URI.revive(T.light),
										dark: o.URI.revive(T.dark),
									};
							}
						}
					}
					async u(I) {
						if (I.allowAutomationShell) {
							const P = this.C(I);
							if (P) return P;
						}
						await this.n.profilesReady;
						const T = this.y(I.os);
						return T ? this.w(I, T) : this.w(I, await this.z(I));
					}
					w(I, T) {
						if (I.allowAutomationShell) {
							const P = (0, f.$vo)(T);
							return (P.icon = h.$ak.tools), P;
						}
						return T;
					}
					y(I) {
						return this.n.getDefaultProfile(I);
					}
					async z(I) {
						const T = await this.f.getDefaultSystemShell(
							I.remoteAuthority,
							I.os,
						);
						if (I.os === m.OS) {
							let L = this.n.availableProfiles.find(
								(D) => a.$vc(D.path).name === a.$vc(T).name,
							);
							if (L)
								return (
									I.allowAutomationShell &&
										((L = (0, f.$vo)(L)), (L.icon = h.$ak.tools)),
									L
								);
						}
						let P;
						I.os === m.OperatingSystem.Macintosh &&
						a.$vc(T).name.match(/(zsh|bash)/)
							? (P = ["--login"])
							: (P = []);
						const k = this.I(T);
						return { profileName: y, path: T, args: P, icon: k, isDefault: !1 };
					}
					C(I) {
						const T = this.g.getValue(
							`terminal.integrated.automationProfile.${this.H(I.os)}`,
						);
						if (this.J(T, I.os))
							return (T.icon = this.t(T.icon) || h.$ak.tools), T;
					}
					async F(I, T) {
						const P = await this.f.getEnvironment(T.remoteAuthority);
						if (T.os === m.OperatingSystem.Windows) {
							const D = !!P.hasOwnProperty("PROCESSOR_ARCHITEW6432"),
								M = P.windir;
							if (!D && M) {
								const N = a
									.$oc(M, "Sysnative")
									.replace(/\//g, "\\")
									.toLowerCase();
								I.path &&
									I.path.toLowerCase().indexOf(N) === 0 &&
									(I.path = a.$oc(M, "System32", I.path.substr(N.length + 1)));
							}
							I.path && (I.path = I.path.replace(/\//g, "\\"));
						}
						const k = this.j.getLastActiveWorkspaceRoot(
								T.remoteAuthority ? t.Schemas.vscodeRemote : t.Schemas.file,
							),
							L = k ? (this.q.getWorkspaceFolder(k) ?? void 0) : void 0;
						return (
							(I.path = await this.G(I.path, P, L)),
							I.args &&
								(typeof I.args == "string"
									? (I.args = await this.G(I.args, P, L))
									: (I.args = await Promise.all(
											I.args.map((D) => this.G(D, P, L)),
										))),
							I
						);
					}
					async G(I, T, P) {
						try {
							I = await this.h.resolveWithEnvironment(T, P, I);
						} catch (k) {
							this.m.error("Could not resolve shell", k);
						}
						return I;
					}
					H(I) {
						switch (I) {
							case m.OperatingSystem.Linux:
								return "linux";
							case m.OperatingSystem.Macintosh:
								return "osx";
							case m.OperatingSystem.Windows:
								return "windows";
						}
					}
					I(I) {
						switch (a.$vc(I).name) {
							case "bash":
								return h.$ak.terminalBash;
							case "pwsh":
							case "powershell":
								return h.$ak.terminalPowershell;
							case "tmux":
								return h.$ak.terminalTmux;
							case "cmd":
								return h.$ak.terminalCmd;
							default:
								return;
						}
					}
					J(I, T) {
						return I == null || typeof I != "object"
							? !1
							: "path" in I && typeof I.path == "string";
					}
				}
				(e.$k6c = $), Ne([(0, g.$fi)(200)], $.prototype, "s", null);
				let v = class extends $ {
					constructor(I, T, P, k, L, D, M, N) {
						super(
							{
								getDefaultSystemShell: async (A, R) => {
									const O = await L.getBackend(A);
									return !A || !O
										? R === m.OperatingSystem.Windows
											? "pwsh"
											: "bash"
										: O.getDefaultSystemShell(R);
								},
								getEnvironment: async (A) => {
									const R = await L.getBackend(A);
									return !A || !R ? i.env : R.getEnvironment();
								},
							},
							T,
							I,
							P,
							k,
							D,
							M,
							N,
						);
					}
				};
				(e.$l6c = v),
					(e.$l6c = v =
						Ne(
							[
								j(0, C.$zeb),
								j(1, w.$gj),
								j(2, d.$Feb),
								j(3, r.$YJ),
								j(4, s.$mIb),
								j(5, u.$teb),
								j(6, E.$Vi),
								j(7, n.$$m),
							],
							v,
						));
			},
		),
		