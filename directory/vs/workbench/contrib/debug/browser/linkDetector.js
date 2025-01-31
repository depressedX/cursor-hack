import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/keyboardEvent.js';
import '../../../../base/browser/ui/hover/hoverDelegateFactory.js';
import '../../../../base/common/keyCodes.js';
import '../../../../base/common/network.js';
import '../../../../base/common/path.js';
import '../../../../base/common/platform.js';
import '../../../../base/common/uri.js';
import '../../../../nls.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/files/common/files.js';
import '../../../../platform/hover/browser/hover.js';
import '../../../../platform/opener/common/opener.js';
import '../../../../platform/tunnel/common/tunnel.js';
import '../../../services/editor/common/editorService.js';
import '../../../services/environment/common/environmentService.js';
import '../../../services/path/common/pathService.js';
define(
			de[709],
			he([
				1, 0, 7, 114, 95, 27, 23, 54, 12, 9, 4, 10, 22, 72, 41, 374, 18, 78,
				165,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*keyboardEvent*/,
 w /*hoverDelegateFactory*/,
 E /*keyCodes*/,
 C /*network*/,
 d /*path*/,
 m /*platform*/,
 r /*uri*/,
 u /*nls*/,
 a /*configuration*/,
 h /*files*/,
 c /*hover*/,
 n /*opener*/,
 g /*tunnel*/,
 p /*editorService*/,
 o /*environmentService*/,
 f /*pathService*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$7Hc = e.DebugLinkHoverBehavior = void 0),
					(d = mt(d)),
					(m = mt(m));
				const b = "\\u0000-\\u0020\\u007f-\\u009f",
					s = new RegExp(
						"(?:[a-zA-Z][a-zA-Z0-9+.-]{2,}:\\/\\/|data:|www\\.)[^\\s" +
							b +
							'"]{2,}[^\\s' +
							b +
							`"')}\\],:;.!?]`,
						"ug",
					),
					l = /(?:[a-zA-Z]:(?:(?:\\|\/)[\w\.-]*)+)/,
					y = /(?:(?:\~|\.)(?:(?:\\|\/)[\w\.-]*)+)/,
					$ = new RegExp(`(${l.source}|${y.source})`),
					v = /((?:\~|\.)?(?:\/[\w\.-]*)+)/,
					S = /(?:\:([\d]+))?(?:\:([\d]+))?/,
					I = new RegExp(`${m.$l ? $.source : v.source}${S.source}`, "g"),
					T = /:([\d]+)(?::([\d]+))?$/,
					P = 2e3;
				var k;
				(function (D) {
					(D[(D.Rich = 0)] = "Rich"),
						(D[(D.Basic = 1)] = "Basic"),
						(D[(D.None = 2)] = "None");
				})(k || (e.DebugLinkHoverBehavior = k = {}));
				let L = class {
					constructor(M, N, A, R, O, B, U, z) {
						(this.a = M),
							(this.b = N),
							(this.c = A),
							(this.d = R),
							(this.f = O),
							(this.g = B),
							(this.h = U),
							(this.j = z);
					}
					linkify(M, N, A, R, O) {
						if (N) {
							const U = M.split(`
`);
							for (let x = 0; x < U.length - 1; x++)
								U[x] =
									U[x] +
									`
`;
							U[U.length - 1] || U.pop();
							const z = U.map((x) => this.linkify(x, !1, A, R));
							if (z.length === 1) return z[0];
							const F = document.createElement("span");
							return z.forEach((x) => F.appendChild(x)), F;
						}
						const B = document.createElement("span");
						for (const U of this.o(M))
							try {
								switch (U.kind) {
									case "text":
										B.appendChild(document.createTextNode(U.value));
										break;
									case "web":
										B.appendChild(this.k(R ? M : void 0, U.value, O));
										break;
									case "path": {
										const z = U.captures[0],
											F = U.captures[1] ? Number(U.captures[1]) : 0,
											x = U.captures[2] ? Number(U.captures[2]) : 0;
										B.appendChild(
											this.l(R ? M : void 0, U.value, z, F, x, A, O),
										);
										break;
									}
								}
							} catch {
								B.appendChild(document.createTextNode(U.value));
							}
						return B;
					}
					linkifyLocation(M, N, A, R) {
						const O = this.m(M);
						return (
							this.n(O, void 0, M, R, async (B) => {
								const U = await A.resolveLocationReference(N);
								await U.source.openInEditor(
									this.a,
									{
										startLineNumber: U.line,
										startColumn: U.column,
										endLineNumber: U.endLine ?? U.line,
										endColumn: U.endColumn ?? U.column,
									},
									B,
								);
							}),
							O
						);
					}
					k(M, N, A) {
						const R = this.m(N);
						let O = r.URI.parse(N);
						const B = T.exec(O.path);
						return (
							B &&
								(O = O.with({
									path: O.path.slice(0, B.index),
									fragment: `L${B[0].slice(1)}`,
								})),
							this.n(R, O, M, A, async () => {
								if (O.scheme === C.Schemas.file) {
									const U = O.fsPath,
										z = await this.d.path,
										F = d.$mc(
											z.sep === d.$lc.sep && m.$l
												? U.replace(/\\/g, d.$lc.sep)
												: U,
										),
										x = r.URI.parse(F);
									if (!(await this.b.exists(x))) return;
									await this.a.openEditor({
										resource: x,
										options: {
											pinned: !0,
											selection: B
												? { startLineNumber: +B[1], startColumn: +B[2] }
												: void 0,
										},
									});
									return;
								}
								this.c.open(N, {
									allowTunneling:
										!!this.g.remoteAuthority &&
										this.h.getValue("remote.forwardOnOpen"),
								});
							}),
							R
						);
					}
					l(M, N, A, R, O, B, U) {
						if (A[0] === "/" && A[1] === "/") return document.createTextNode(N);
						const z = { selection: { startLineNumber: R, startColumn: O } };
						if (A[0] === ".") {
							if (!B) return document.createTextNode(N);
							const H = B.toResource(A),
								q = this.m(N);
							return (
								this.n(q, H, M, U, (V) =>
									this.a.openEditor({
										resource: H,
										options: { ...z, preserveFocus: V },
									}),
								),
								q
							);
						}
						if (A[0] === "~") {
							const H = this.d.resolvedUserHome;
							H && (A = d.$oc(H.fsPath, A.substring(1)));
						}
						const F = this.m(N);
						F.tabIndex = 0;
						const x = r.URI.file(d.$mc(A));
						return (
							this.b
								.stat(x)
								.then((H) => {
									H.isDirectory ||
										this.n(F, x, M, U, (q) =>
											this.a.openEditor({
												resource: x,
												options: { ...z, preserveFocus: q },
											}),
										);
								})
								.catch(() => {}),
							F
						);
					}
					m(M) {
						const N = document.createElement("a");
						return (N.textContent = M), N;
					}
					n(M, N, A, R, O) {
						M.classList.add("link");
						const B =
								N && this.f.canTunnel(N)
									? (0, u.localize)(5675, null)
									: (0, u.localize)(5676, null),
							U = (M.ariaLabel = A
								? m.$m
									? (0, u.localize)(5677, null, B, A)
									: (0, u.localize)(5678, null, B, A)
								: m.$m
									? (0, u.localize)(5679, null, B)
									: (0, u.localize)(5680, null, B));
						R?.type === k.Rich
							? R.store.add(
									this.j.setupManagedHover((0, w.$cib)("element"), M, U),
								)
							: R?.type !== k.None && (M.title = U),
							(M.onmousemove = (z) => {
								M.classList.toggle("pointer", m.$m ? z.metaKey : z.ctrlKey);
							}),
							(M.onmouseleave = () => M.classList.remove("pointer")),
							(M.onclick = (z) => {
								const F = (0, t.getWindow)(M).getSelection();
								!F ||
									F.type === "Range" ||
									((m.$m ? z.metaKey : z.ctrlKey) &&
										(z.preventDefault(), z.stopImmediatePropagation(), O(!1)));
							}),
							(M.onkeydown = (z) => {
								const F = new i.$7fb(z);
								(F.keyCode === E.KeyCode.Enter ||
									F.keyCode === E.KeyCode.Space) &&
									(F.preventDefault(),
									F.stopPropagation(),
									O(F.keyCode === E.KeyCode.Space));
							});
					}
					o(M) {
						if (M.length > P) return [{ kind: "text", value: M, captures: [] }];
						const N = [s, I],
							A = ["web", "path"],
							R = [],
							O = (B, U) => {
								if (U >= N.length) {
									R.push({ value: B, kind: "text", captures: [] });
									return;
								}
								const z = N[U];
								let F = 0,
									x;
								for (z.lastIndex = 0; (x = z.exec(B)) !== null; ) {
									const q = B.substring(F, x.index);
									q && O(q, U + 1);
									const V = x[0];
									R.push({ value: V, kind: A[U], captures: x.slice(1) }),
										(F = x.index + V.length);
								}
								const H = B.substring(F);
								H && O(H, U + 1);
							};
						return O(M, 0), R;
					}
				};
				(e.$7Hc = L),
					(e.$7Hc = L =
						Ne(
							[
								j(0, p.$IY),
								j(1, h.$ll),
								j(2, n.$7rb),
								j(3, f.$I8),
								j(4, g.$cO),
								j(5, o.$r8),
								j(6, a.$gj),
								j(7, c.$Uyb),
							],
							L,
						));
			},
		)
