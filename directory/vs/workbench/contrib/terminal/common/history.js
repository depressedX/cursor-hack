import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/process.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/map.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/files/common/files.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/terminal/common/terminal.js';
import '../../../../base/common/uri.js';
import '../../../services/remote/common/remoteAgentService.js';
import '../../../../base/common/network.js';
import '../../../../base/common/platform.js';
import '../../../../base/common/path.js';
define(
			de[1314],
			he([1, 0, 344, 3, 59, 10, 22, 5, 21, 117, 9, 143, 23, 12, 54]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$oUc = void 0),
					(e.$kUc = f),
					(e.$lUc = s),
					(e.$mUc = y),
					(e.$nUc = $),
					(e.$pUc = S),
					(e.$qUc = I),
					(e.$rUc = T),
					(e.$sUc = P),
					(e.$tUc = k),
					(e.$uUc = L);
				var g;
				(function (N) {
					N[(N.DefaultHistoryLimit = 100)] = "DefaultHistoryLimit";
				})(g || (g = {}));
				var p;
				(function (N) {
					(N.Entries = "terminal.history.entries"),
						(N.Timestamp = "terminal.history.timestamp");
				})(p || (p = {}));
				let o;
				function f(N) {
					return o || (o = N.get(d.$Li).createInstance(v, "commands")), o;
				}
				let b;
				function s(N) {
					return b || (b = N.get(d.$Li).createInstance(v, "dirs")), b;
				}
				const l = new Map();
				async function y(N, A) {
					const R = l.get(A);
					if (R === null) return [];
					if (R !== void 0) return R;
					let O;
					switch (A) {
						case r.PosixShellType.Bash:
							O = await S(N);
							break;
						case r.GeneralShellType.PowerShell:
							O = await P(N);
							break;
						case r.PosixShellType.Zsh:
							O = await I(N);
							break;
						case r.PosixShellType.Fish:
							O = await k(N);
							break;
						case r.GeneralShellType.Python:
							O = await T(N);
							break;
						default:
							return [];
					}
					if (O === void 0) return l.set(A, null), [];
					const B = Array.from(O);
					return l.set(A, B), B;
				}
				function $() {
					l.clear();
				}
				let v = class extends i.$1c {
					get entries() {
						return this.n(), this.a.entries();
					}
					constructor(A, R, O) {
						super(),
							(this.h = A),
							(this.j = R),
							(this.m = O),
							(this.b = 0),
							(this.f = !1),
							(this.g = !0),
							(this.a = new w.$Jc(this.t())),
							this.D(
								this.j.onDidChangeConfiguration((B) => {
									B.affectsConfiguration(
										r.TerminalSettingId.ShellIntegrationCommandHistory,
									) && (this.a.limit = this.t());
								}),
							),
							this.D(
								this.m.onDidChangeValue(
									m.StorageScope.APPLICATION,
									this.u(),
									this.B,
								)(() => {
									this.g ||
										(this.g =
											this.m.getNumber(
												this.u(),
												m.StorageScope.APPLICATION,
												0,
											) !== this.b);
								}),
							);
					}
					add(A, R) {
						this.n(), this.a.set(A, R), this.s();
					}
					remove(A) {
						this.n(), this.a.delete(A), this.s();
					}
					clear() {
						this.n(), this.a.clear(), this.s();
					}
					n() {
						this.f || (this.q(), (this.f = !0)),
							this.g && (this.a.clear(), this.q(), (this.g = !1));
					}
					q() {
						this.b = this.m.getNumber(this.u(), m.StorageScope.APPLICATION, 0);
						const A = this.r();
						if (A) for (const R of A.entries) this.a.set(R.key, R.value);
					}
					r() {
						const A = this.m.get(this.w(), m.StorageScope.APPLICATION);
						if (A === void 0 || A.length === 0) return;
						let R;
						try {
							R = JSON.parse(A);
						} catch {
							return;
						}
						return R;
					}
					s() {
						const A = { entries: [] };
						this.a.forEach((R, O) => A.entries.push({ key: O, value: R })),
							this.m.store(
								this.w(),
								JSON.stringify(A),
								m.StorageScope.APPLICATION,
								m.StorageTarget.MACHINE,
							),
							(this.b = Date.now()),
							this.m.store(
								this.u(),
								this.b,
								m.StorageScope.APPLICATION,
								m.StorageTarget.MACHINE,
							);
					}
					t() {
						const A = this.j.getValue(
							r.TerminalSettingId.ShellIntegrationCommandHistory,
						);
						return typeof A == "number" ? A : g.DefaultHistoryLimit;
					}
					u() {
						return `${p.Timestamp}.${this.h}`;
					}
					w() {
						return `${p.Entries}.${this.h}`;
					}
				};
				(e.$oUc = v), (e.$oUc = v = Ne([j(1, E.$gj), j(2, m.$lq)], v));
				async function S(N) {
					const A = N.get(C.$ll),
						R = N.get(a.$$m),
						O = await R.getEnvironment();
					if (O?.os === c.OperatingSystem.Windows || (!O && c.$l)) return;
					const B = await M(t.env.HOME, ".bash_history", !1, A, R);
					if (B === void 0) return;
					const U = B.split(`
`),
						z = new Set();
					let F, x, H;
					for (let q = 0; q < U.length; q++) {
						(F = U[q]),
							x === void 0
								? (x = F)
								: (x += `
${F}`);
						for (let V = 0; V < F.length; V++)
							H ? F[V] === H && (H = void 0) : F[V].match(/['"]/) && (H = F[V]);
						H === void 0 && (x.length > 0 && z.add(x.trim()), (x = void 0));
					}
					return z.values();
				}
				async function I(N) {
					const A = N.get(C.$ll),
						R = N.get(a.$$m),
						O = await R.getEnvironment();
					if (O?.os === c.OperatingSystem.Windows || (!O && c.$l)) return;
					const B = await M(t.env.HOME, ".zsh_history", !1, A, R);
					if (B === void 0) return;
					const U = B.split(/\:\s\d+\:\d+;/),
						z = new Set();
					for (let F = 0; F < U.length; F++) {
						const x = U[F]
							.replace(
								/\\\n/g,
								`
`,
							)
							.trim();
						x.length > 0 && z.add(x);
					}
					return z.values();
				}
				async function T(N) {
					const A = N.get(C.$ll),
						R = N.get(a.$$m),
						O = await M(t.env.HOME, ".python_history", !1, A, R);
					if (O === void 0) return;
					const B = O.split(`
`),
						U = new Set();
					return (
						B.forEach((z) => {
							z.trim().length > 0 && U.add(z.trim());
						}),
						U.values()
					);
				}
				async function P(N) {
					const A = N.get(C.$ll),
						R = N.get(a.$$m);
					let O, B;
					const U = await R.getEnvironment(),
						z = U?.os === c.OperatingSystem.Windows || (!U && c.$l);
					z
						? ((O = t.env.APPDATA),
							(B =
								"Microsoft\\Windows\\PowerShell\\PSReadLine\\ConsoleHost_history.txt"))
						: ((O = t.env.HOME),
							(B =
								".local/share/powershell/PSReadline/ConsoleHost_history.txt"));
					const F = await M(O, B, z, A, R);
					if (F === void 0) return;
					const x = F.split(`
`),
						H = new Set();
					let q, V, G;
					for (let K = 0; K < x.length; K++) {
						if (
							((q = x[K]),
							V === void 0
								? (V = q)
								: (V += `
${q}`),
							!q.endsWith("`"))
						) {
							const J = V.trim();
							J.length > 0 && H.add(J), (V = void 0);
							continue;
						}
						for (let J = 0; J < q.length; J++)
							G ? q[J] === G && (G = void 0) : q[J].match(/`/) && (G = q[J]);
						if (G) (V = V.replace(/`$/, "")), (G = void 0);
						else {
							const J = V.trim();
							J.length > 0 && H.add(J), (V = void 0);
						}
					}
					return H.values();
				}
				async function k(N) {
					const A = N.get(C.$ll),
						R = N.get(a.$$m),
						O = await R.getEnvironment();
					if (O?.os === c.OperatingSystem.Windows || (!O && c.$l)) return;
					const U = await (t.env.XDG_DATA_HOME
						? M(t.env.XDG_DATA_HOME, "fish/fish_history", !1, A, R)
						: M(t.env.HOME, ".local/share/fish/fish_history", !1, A, R));
					if (U === void 0) return;
					const z = new Set(),
						F = U.split(`
`)
							.filter((x) => x.startsWith("- cmd:"))
							.map((x) => x.substring(6).trimStart());
					for (let x = 0; x < F.length; x++) {
						const H = L(F[x]).trim();
						H.length > 0 && z.add(H);
					}
					return z.values();
				}
				function L(N) {
					return D(
						/(^|[^\\])((?:\\\\)*)(\\n)/g,
						N,
						`$1$2
`,
					);
				}
				function D(N, A, R) {
					let O,
						B = A;
					for (;;) if (((O = B), (B = B.replace(N, R)), B === O)) return B;
				}
				async function M(N, A, R, O, B) {
					if (!N) return;
					const U = B.getConnection(),
						z = !!U?.remoteAuthority,
						F = u.URI.from({
							scheme: z ? h.Schemas.vscodeRemote : h.Schemas.file,
							authority: z ? U.remoteAuthority : void 0,
							path: u.URI.file((0, n.$oc)(N, A)).path,
						});
					let x;
					try {
						x = await O.readFile(F);
					} catch (H) {
						if (
							H instanceof C.$Gl &&
							H.fileOperationResult === C.FileOperationResult.FILE_NOT_FOUND
						)
							return;
						throw H;
					}
					if (x !== void 0) return x.value.toString();
				}
			},
		),
		