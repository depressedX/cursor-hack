import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/strings.js';
import '../../../../base/common/platform.js';
import '../../../../base/common/filters.js';
import '../../../../base/common/keybindingLabels.js';
import '../../../../platform/actions/common/actions.js';
import '../../../common/editor/editorModel.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../platform/keybinding/common/resolvedKeybindingItem.js';
import '../../keybinding/browser/unboundCommands.js';
import '../../../../base/common/types.js';
import '../../extensions/common/extensions.js';
import '../../../../platform/extensions/common/extensions.js';
import '../../../../platform/contextkey/common/contextkey.js';
define(
			de[1309],
			he([
				1, 0, 4, 24, 37, 12, 132, 592, 11, 416, 39, 939, 1824, 28, 53, 109, 8,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				var o;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$svc = e.$qvc = void 0),
					(e.$rvc = l),
					(w = mt(w)),
					(e.$qvc = "keybinding.entry.template");
				const f = (0, t.localize)(12574, null),
					b = (0, t.localize)(12575, null),
					s = (0, t.localize)(12576, null);
				function l(L, D) {
					const M = D ? ` +when:${D}` : "";
					return `@command:${L}${M}`;
				}
				const y = (0, C.or)(C.$Tk, C.$Yk, C.$Uk),
					$ = /@command:\s*([^\+]+)/i,
					v = /\+when:\s*(.+)/i,
					S = /@source:\s*(user|default|system|extension)/i,
					I = /@ext:\s*((".+")|([^\s]+))/i,
					T = /@keybinding:\s*((\".+\")|(\S+))/i;
				let P = (o = class extends r.$PO {
					constructor(D, M, N) {
						super(),
							(this.n = M),
							(this.q = N),
							(this.c = []),
							(this.g = []),
							(this.j = {
								ui: d.$2ob.modifierLabels[D],
								aria: d.$3ob.modifierLabels[D],
								user: d.$5ob.modifierLabels[D],
							});
					}
					fetch(D, M = !1) {
						let N = M ? this.g : this.c;
						const A = $.exec(D);
						if (A && A[1]) {
							const R = A[1].trim();
							let O = N.filter((B) => B.command === R);
							if (O.length) {
								const B = v.exec(D);
								if (B && B[1]) {
									const U = B[1].trim();
									O = this.u(O, R, U);
								}
							}
							return O.map((B) => ({
								id: o.y(B),
								keybindingItem: B,
								templateId: e.$qvc,
							}));
						}
						if (S.test(D)) (N = this.r(N, D)), (D = D.replace(S, ""));
						else {
							const R = I.exec(D);
							if (R && (R[2] || R[3])) {
								const O = R[2] ? R[2].substring(1, R[2].length - 1) : R[3];
								(N = this.s(N, O)), (D = D.replace(I, ""));
							} else {
								const O = T.exec(D);
								O && (O[2] || O[3]) && (D = O[2] || `"${O[3]}"`);
							}
						}
						return (
							(D = D.trim()),
							D
								? this.t(N, D)
								: N.map((R) => ({
										id: o.y(R),
										keybindingItem: R,
										templateId: e.$qvc,
									}))
						);
					}
					r(D, M) {
						return /@source:\s*default/i.test(M) || /@source:\s*system/i.test(M)
							? D.filter((N) => N.source === f)
							: /@source:\s*user/i.test(M)
								? D.filter((N) => N.source === s)
								: /@source:\s*extension/i.test(M)
									? D.filter((N) => !(0, c.$lg)(N.source) || N.source === b)
									: D;
					}
					s(D, M) {
						return (
							(M = M.toLowerCase().trim()),
							D.filter(
								(N) =>
									!(0, c.$lg)(N.source) &&
									(g.$Gn.equals(N.source.identifier, M) ||
										N.source.displayName?.toLowerCase() === M.toLowerCase()),
							)
						);
					}
					t(D, M) {
						const N = M.charAt(0) === '"',
							A = M.charAt(M.length - 1) === '"',
							R = N && A;
						N && (M = M.substring(1)),
							A && (M = M.substring(0, M.length - 1)),
							(M = M.trim());
						const O = [],
							B = M.split(" "),
							U = this.w(B);
						for (const z of D) {
							const F = new k(this.j, z, M, B, U, R);
							(F.commandIdMatches ||
								F.commandLabelMatches ||
								F.commandDefaultLabelMatches ||
								F.sourceMatches ||
								F.whenMatches ||
								F.keybindingMatches ||
								F.extensionIdMatches ||
								F.extensionLabelMatches) &&
								O.push({
									id: o.y(z),
									templateId: e.$qvc,
									commandLabelMatches: F.commandLabelMatches || void 0,
									commandDefaultLabelMatches:
										F.commandDefaultLabelMatches || void 0,
									keybindingItem: z,
									keybindingMatches: F.keybindingMatches || void 0,
									commandIdMatches: F.commandIdMatches || void 0,
									sourceMatches: F.sourceMatches || void 0,
									whenMatches: F.whenMatches || void 0,
									extensionIdMatches: F.extensionIdMatches || void 0,
									extensionLabelMatches: F.extensionLabelMatches || void 0,
								});
						}
						return O;
					}
					u(D, M, N) {
						if (D.length === 0) return [];
						const A = D.filter((U) => U.when === N);
						if (A.length) return A;
						const R = D[0].commandLabel,
							O = new a.$qZ(
								void 0,
								M,
								null,
								p.$Kj.deserialize(N),
								!1,
								null,
								!1,
							),
							B = new Map([[M, R]]);
						return [o.F(M, O, B, this.z())];
					}
					w(D) {
						const M = [];
						for (const N of D) M.push(...(0, i.$Lb)(N.split("+")));
						return M;
					}
					async resolve(D = new Map()) {
						const M = this.z();
						this.g = [];
						const N = new Map();
						for (const R of this.n.getKeybindings())
							R.command &&
								(this.g.push(o.F(R.command, R, D, M)), N.set(R.command, !0));
						const A = this.n.getDefaultKeybindings().map((R) => R.command);
						for (const R of (0, h.$pvc)(N)) {
							const O = new a.$qZ(
								void 0,
								R,
								null,
								void 0,
								A.indexOf(R) === -1,
								null,
								!1,
							);
							this.g.push(o.F(R, O, D, M));
						}
						return (
							(this.g = (0, i.$Qb)(this.g, (R) => o.y(R))),
							(this.c = this.g.slice(0).sort((R, O) => o.C(R, O))),
							super.resolve()
						);
					}
					static y(D) {
						return (
							D.command +
							(D?.keybinding?.getAriaLabel() ?? "") +
							D.when +
							((0, c.$lg)(D.source) ? D.source : D.source.identifier.value)
						);
					}
					z() {
						const D = new g.$In();
						for (const M of this.q.extensions) D.set(M.identifier, M);
						return D;
					}
					static C(D, M) {
						return D.keybinding && !M.keybinding
							? -1
							: M.keybinding && !D.keybinding
								? 1
								: D.commandLabel && !M.commandLabel
									? -1
									: M.commandLabel && !D.commandLabel
										? 1
										: D.commandLabel &&
												M.commandLabel &&
												D.commandLabel !== M.commandLabel
											? D.commandLabel.localeCompare(M.commandLabel)
											: D.command === M.command
												? D.keybindingItem.isDefault
													? 1
													: -1
												: D.command.localeCompare(M.command);
					}
					static F(D, M, N, A) {
						const R = m.$ZX.getCommand(D),
							O = N.get(D);
						let B = s;
						if (M.isDefault) {
							const U =
								M.extensionId ??
								(M.resolvedKeybinding ? void 0 : R?.source?.id);
							B = U ? (A.get(U) ?? b) : f;
						}
						return {
							keybinding: M.resolvedKeybinding,
							keybindingItem: M,
							command: D,
							commandLabel: o.H(R, O),
							commandDefaultLabel: o.G(R),
							when: M.when ? M.when.serialize() : "",
							source: B,
						};
					}
					static G(D) {
						if (
							!E.Language.isDefaultVariant() &&
							D &&
							D.title &&
							D.title.original
						) {
							const M = D.category ? D.category.original : void 0,
								N = D.title.original;
							return M ? (0, t.localize)(12577, null, M, N) : N;
						}
						return null;
					}
					static H(D, M) {
						if (D) {
							const N = D.category
									? typeof D.category == "string"
										? D.category
										: D.category.value
									: void 0,
								A = typeof D.title == "string" ? D.title : D.title.value;
							return N ? (0, t.localize)(12578, null, N, A) : A;
						}
						return M || "";
					}
				});
				(e.$svc = P), (e.$svc = P = o = Ne([j(1, u.$uZ), j(2, n.$q2)], P));
				class k {
					constructor(D, M, N, A, R, O) {
						(this.c = D),
							(this.commandIdMatches = null),
							(this.commandLabelMatches = null),
							(this.commandDefaultLabelMatches = null),
							(this.sourceMatches = null),
							(this.whenMatches = null),
							(this.keybindingMatches = null),
							(this.extensionIdMatches = null),
							(this.extensionLabelMatches = null),
							O ||
								((this.commandIdMatches = this.d(
									N,
									M.command,
									(0, C.or)(C.$Yk, C.$Xk),
									A,
								)),
								(this.commandLabelMatches = M.commandLabel
									? this.d(
											N,
											M.commandLabel,
											(B, U) => (0, C.$Yk)(B, M.commandLabel, !0),
											A,
										)
									: null),
								(this.commandDefaultLabelMatches = M.commandDefaultLabel
									? this.d(
											N,
											M.commandDefaultLabel,
											(B, U) => (0, C.$Yk)(B, M.commandDefaultLabel, !0),
											A,
										)
									: null),
								(this.whenMatches = M.when
									? this.d(null, M.when, (0, C.or)(C.$Yk, C.$Xk), A)
									: null),
								(0, c.$lg)(M.source)
									? (this.sourceMatches = this.d(
											N,
											M.source,
											(B, U) => (0, C.$Yk)(B, M.source, !0),
											A,
										))
									: (this.extensionLabelMatches = M.source.displayName
											? this.d(
													N,
													M.source.displayName,
													(B, U) => (0, C.$Yk)(B, M.commandLabel, !0),
													A,
												)
											: null)),
							(this.keybindingMatches = M.keybinding
								? this.g(M.keybinding, N, R, O)
								: null);
					}
					d(D, M, N, A) {
						let R = D ? y(D, M) : null;
						return R || (R = this.e(A, M, N)), R && (R = this.f(R)), R;
					}
					e(D, M, N) {
						let A = [];
						for (const R of D) {
							const O = N(R, M);
							if (O) A = [...(A || []), ...O];
							else {
								A = null;
								break;
							}
						}
						return A;
					}
					f(D) {
						return (0, i.$Qb)(D, (M) => M.start + "." + M.end)
							.filter(
								(M) =>
									!D.some(
										(N) =>
											!(N.start === M.start && N.end === M.end) &&
											N.start <= M.start &&
											N.end >= M.end,
									),
							)
							.sort((M, N) => M.start - N.start);
					}
					g(D, M, N, A) {
						const [R, O] = D.getChords(),
							B = D.getUserSettingsLabel(),
							U = D.getAriaLabel(),
							z = D.getLabel();
						if (
							(B && w.$Hf(M, B) === 0) ||
							(U && w.$Hf(M, U) === 0) ||
							(z && w.$Hf(M, z) === 0)
						)
							return { firstPart: this.r(R), chordPart: this.r(O) };
						const F = {};
						let x = {};
						const H = [],
							q = [];
						let V = [],
							G = !0;
						for (let K = 0; K < N.length; K++) {
							const J = N[K];
							let W = !1,
								X = !1;
							G = G && !F.keyCode;
							let Y = !x.keyCode;
							if (G && ((W = this.h(R, F, J, A)), F.keyCode)) {
								for (const ie of V)
									q.indexOf(ie) === -1 && H.splice(H.indexOf(ie), 1);
								(x = {}), (V = []), (Y = !1);
							}
							Y && (X = this.h(O, x, J, A)),
								W && q.push(K),
								X && V.push(K),
								(W || X) && H.push(K),
								(G = G && this.s(J));
						}
						return H.length !== N.length ||
							(A && (!this.q(R, F) || (!(0, c.$yg)(x) && !this.q(O, x))))
							? null
							: this.p(F) || this.p(x)
								? { firstPart: F, chordPart: x }
								: null;
					}
					h(D, M, N, A) {
						let R = !1;
						return (
							this.j(D, N) && ((R = !0), (M.metaKey = !0)),
							this.l(D, N) && ((R = !0), (M.ctrlKey = !0)),
							this.n(D, N) && ((R = !0), (M.shiftKey = !0)),
							this.o(D, N) && ((R = !0), (M.altKey = !0)),
							this.i(D, N, A) && ((M.keyCode = !0), (R = !0)),
							R
						);
					}
					i(D, M, N) {
						if (!D) return !1;
						const A = D.keyAriaLabel || "";
						if (N || A.length === 1 || M.length === 1) {
							if (w.$Hf(A, M) === 0) return !0;
						} else if ((0, C.$Uk)(M, A)) return !0;
						return !1;
					}
					j(D, M) {
						return !D || !D.metaKey ? !1 : this.v(M);
					}
					l(D, M) {
						return !D || !D.ctrlKey ? !1 : this.u(M);
					}
					n(D, M) {
						return !D || !D.shiftKey ? !1 : this.w(M);
					}
					o(D, M) {
						return !D || !D.altKey ? !1 : this.t(M);
					}
					p(D) {
						return (
							!!D.altKey ||
							!!D.ctrlKey ||
							!!D.metaKey ||
							!!D.shiftKey ||
							!!D.keyCode
						);
					}
					q(D, M) {
						return D
							? !(
									!M.keyCode ||
									(D.metaKey && !M.metaKey) ||
									(D.altKey && !M.altKey) ||
									(D.ctrlKey && !M.ctrlKey) ||
									(D.shiftKey && !M.shiftKey)
								)
							: !0;
					}
					r(D) {
						const M = {};
						return (
							D &&
								((M.keyCode = !0),
								D.metaKey && (M.metaKey = !0),
								D.altKey && (M.altKey = !0),
								D.ctrlKey && (M.ctrlKey = !0),
								D.shiftKey && (M.shiftKey = !0)),
							M
						);
					}
					s(D) {
						return !!(this.t(D) || this.u(D) || this.v(D) || this.w(D));
					}
					t(D) {
						return !!(
							w.$Mf(this.c.ui.altKey, D) ||
							w.$Mf(this.c.aria.altKey, D) ||
							w.$Mf(this.c.user.altKey, D) ||
							w.$Mf((0, t.localize)(12579, null), D)
						);
					}
					u(D) {
						return !!(
							w.$Mf(this.c.ui.ctrlKey, D) ||
							w.$Mf(this.c.aria.ctrlKey, D) ||
							w.$Mf(this.c.user.ctrlKey, D)
						);
					}
					v(D) {
						return !!(
							w.$Mf(this.c.ui.metaKey, D) ||
							w.$Mf(this.c.aria.metaKey, D) ||
							w.$Mf(this.c.user.metaKey, D) ||
							w.$Mf((0, t.localize)(12580, null), D)
						);
					}
					w(D) {
						return !!(
							w.$Mf(this.c.ui.shiftKey, D) ||
							w.$Mf(this.c.aria.shiftKey, D) ||
							w.$Mf(this.c.user.shiftKey, D)
						);
					}
				}
			},
		),
		