import '../../../require.js';
import '../../../exports.js';
import './arrays.js';
import './extpath.js';
import './path.js';
import './platform.js';
import './resources.js';
import './strings.js';
define(
			de[222],
			he([1, 0, 24, 249, 54, 12, 19, 37]),
			function (ce /*require*/,
 e /*exports*/,
 t /*arrays*/,
 i /*extpath*/,
 w /*path*/,
 E /*platform*/,
 C /*resources*/,
 d /*strings*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$wO = m),
					(e.$xO = u),
					(e.$yO = h),
					(e.$zO = c),
					(e.$AO = o),
					(e.$BO = b),
					(e.$CO = s),
					(e.$DO = l),
					(e.$EO = y),
					(e.$FO = $);
				function m(S, I) {
					const { os: T, tildify: P, relative: k } = I;
					if (k) {
						const M = r(S, k, T);
						if (typeof M == "string") return M;
					}
					let L = S.fsPath;
					if (
						(T === E.OperatingSystem.Windows && !E.$l
							? (L = L.replace(/\//g, "\\"))
							: T !== E.OperatingSystem.Windows &&
								E.$l &&
								(L = L.replace(/\\/g, "/")),
						T !== E.OperatingSystem.Windows && P?.userHome)
					) {
						const M = P.userHome.fsPath;
						let N;
						S.scheme !== P.userHome.scheme &&
						S.path[0] === w.$lc.sep &&
						S.path[1] !== w.$lc.sep
							? (N = P.userHome.with({ path: S.path }).fsPath)
							: (N = L),
							(L = h(N, M, T));
					}
					return (T === E.OperatingSystem.Windows ? w.$kc : w.$lc).normalize(
						u(L, T === E.OperatingSystem.Windows),
					);
				}
				function r(S, I, T) {
					const P = T === E.OperatingSystem.Windows ? w.$kc : w.$lc,
						k = T === E.OperatingSystem.Linux ? C.$dh : C.$fh,
						L = I.getWorkspace(),
						D = (0, t.$Sb)(L.folders);
					if (!D) return;
					S.scheme !== D.uri.scheme &&
						S.path[0] === w.$lc.sep &&
						S.path[1] !== w.$lc.sep &&
						(S = D.uri.with({ path: S.path }));
					const M = I.getWorkspaceFolder(S);
					if (!M) return;
					let N;
					if (
						(k.isEqual(M.uri, S)
							? (N = "")
							: (N = k.relativePath(M.uri, S) ?? ""),
						N && (N = P.normalize(N)),
						L.folders.length > 1 && !I.noPrefix)
					) {
						const A = M.name ? M.name : k.basenameOrAuthority(M.uri);
						N = N ? `${A} \u2022 ${N}` : A;
					}
					return N;
				}
				function u(S, I = E.$l) {
					return (0, i.$Qg)(S, I) ? S.charAt(0).toUpperCase() + S.slice(1) : S;
				}
				let a = Object.create(null);
				function h(S, I, T = E.OS) {
					if (T === E.OperatingSystem.Windows || !S || !I) return S;
					let P = a.original === I ? a.normalized : void 0;
					P ||
						((P = I),
						E.$l && (P = (0, i.$Fg)(P)),
						(P = `${(0, d.$uf)(P, w.$lc.sep)}${w.$lc.sep}`),
						(a = { original: I, normalized: P }));
					let k = S;
					return (
						E.$l && (k = (0, i.$Fg)(k)),
						(T === E.OperatingSystem.Linux ? k.startsWith(P) : (0, d.$Nf)(k, P))
							? `~/${k.substr(P.length)}`
							: S
					);
				}
				function c(S, I) {
					return S.replace(/^~($|\/|\\)/, `${I}$1`);
				}
				const n = "\u2026",
					g = "\\\\",
					p = "~";
				function o(S, I = w.sep) {
					const T = new Array(S.length);
					let P = !1;
					for (let k = 0; k < S.length; k++) {
						const L = S[k];
						if (L === "") {
							T[k] = `.${I}`;
							continue;
						}
						if (!L) {
							T[k] = L;
							continue;
						}
						P = !0;
						let D = "",
							M = L;
						M.indexOf(g) === 0
							? ((D = M.substr(0, M.indexOf(g) + g.length)),
								(M = M.substr(M.indexOf(g) + g.length)))
							: M.indexOf(I) === 0
								? ((D = M.substr(0, M.indexOf(I) + I.length)),
									(M = M.substr(M.indexOf(I) + I.length)))
								: M.indexOf(p) === 0 &&
									((D = M.substr(0, M.indexOf(p) + p.length)),
									(M = M.substr(M.indexOf(p) + p.length)));
						const N = M.split(I);
						for (let A = 1; P && A <= N.length; A++)
							for (let R = N.length - A; P && R >= 0; R--) {
								P = !1;
								let O = N.slice(R, R + A).join(I);
								for (let B = 0; !P && B < S.length; B++)
									if (B !== k && S[B] && S[B].indexOf(O) > -1) {
										const U = R + A === N.length,
											z = R > 0 && S[B].indexOf(I) > -1 ? I + O : O,
											F = S[B].endsWith(z);
										P = !U || F;
									}
								if (!P) {
									let B = "";
									(N[0].endsWith(":") || D !== "") &&
										(R === 1 && ((R = 0), A++, (O = N[0] + I + O)),
										R > 0 && (B = N[0] + I),
										(B = D + B)),
										R > 0 && (B = B + n + I),
										(B = B + O),
										R + A < N.length && (B = B + I + n),
										(T[k] = B);
								}
							}
						P && (T[k] = L);
					}
					return T;
				}
				var f;
				(function (S) {
					(S[(S.TEXT = 0)] = "TEXT"),
						(S[(S.VARIABLE = 1)] = "VARIABLE"),
						(S[(S.SEPARATOR = 2)] = "SEPARATOR");
				})(f || (f = {}));
				function b(S, I = Object.create(null)) {
					const T = [];
					let P = !1,
						k = "";
					for (const L of S)
						if (L === "$" || (P && L === "{"))
							k && T.push({ value: k, type: f.TEXT }), (k = ""), (P = !0);
						else if (L === "}" && P) {
							const D = I[k];
							if (typeof D == "string")
								D.length && T.push({ value: D, type: f.VARIABLE });
							else if (D) {
								const M = T[T.length - 1];
								(!M || M.type !== f.SEPARATOR) &&
									T.push({ value: D.label, type: f.SEPARATOR });
							}
							(k = ""), (P = !1);
						} else k += L;
					return (
						k && !P && T.push({ value: k, type: f.TEXT }),
						T.filter((L, D) => {
							if (L.type === f.SEPARATOR) {
								const M = T[D - 1],
									N = T[D + 1];
								return [M, N].every(
									(A) =>
										A &&
										(A.type === f.VARIABLE || A.type === f.TEXT) &&
										A.value.length > 0,
								);
							}
							return !0;
						})
							.map((L) => L.value)
							.join("")
					);
				}
				function s(S, I) {
					return E.$m || I
						? S.replace(/\(&&\w\)|&&/g, "").replace(/&/g, E.$m ? "&" : "&&")
						: S.replace(/&&|&/g, (T) => (T === "&" ? "&&" : "&"));
				}
				function l(S, I) {
					return E.$m || I
						? S.replace(/\(&&\w\)|&&/g, "")
						: E.$l
							? S.replace(/&&|&/g, (T) => (T === "&" ? "&&" : "&"))
							: S.replace(/&&/g, "_");
				}
				function y(S) {
					return S.replace(/&/g, "&&");
				}
				function $(S) {
					if (S.endsWith("]")) {
						const I = S.lastIndexOf(" [", S.length - 2);
						if (I !== -1) {
							const T = v(S.substring(0, I)),
								P = S.substring(I);
							return { name: T.name + P, parentPath: T.parentPath };
						}
					}
					return v(S);
				}
				function v(S) {
					const I = S.indexOf("/") !== -1 ? w.$lc : w.$kc,
						T = I.basename(S),
						P = I.dirname(S);
					return T.length
						? { name: T, parentPath: P }
						: { name: P, parentPath: "" };
				}
			},
		),
		