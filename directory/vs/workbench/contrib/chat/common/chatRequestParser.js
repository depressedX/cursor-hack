import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../editor/common/core/offsetRange.js';
import '../../../../editor/common/core/position.js';
import '../../../../editor/common/core/range.js';
import './chatAgents.js';
import './chatParserTypes.js';
import './chatSlashCommands.js';
import './chatVariables.js';
import './languageModelToolsService.js';
define(
			de[1022],
			he([1, 0, 289, 48, 17, 153, 329, 829, 503, 569]),
			function (ce /*require*/,
 e /*exports*/,
 t /*offsetRange*/,
 i /*position*/,
 w /*range*/,
 E /*chatAgents*/,
 C /*chatParserTypes*/,
 d /*chatSlashCommands*/,
 m /*chatVariables*/,
 r /*languageModelToolsService*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$G2 = void 0);
				const u = /^@([\w_\-\.]+)(?=(\s|$|\b))/i,
					a = /^#([\w_\-]+)(:\d+)?(?=(\s|$|\b))/i,
					h = /\/([\w_\-]+)(?=(\s|$|\b))/i;
				let c = class {
					constructor(g, p, o, f) {
						(this.b = g), (this.d = p), (this.e = o), (this.f = f);
					}
					parseChatRequest(g, p, o = E.ChatAgentLocation.Panel, f) {
						const b = [],
							s = this.d.getDynamicVariables(g);
						let l = 1,
							y = 1;
						for (let S = 0; S < p.length; S++) {
							const I = p.charAt(S - 1),
								T = p.charAt(S);
							let P;
							if (
								((I.match(/\s/) || S === 0) &&
									(T === C.$P2
										? (P = this.h(p.slice(S), S, new i.$hL(l, y), b))
										: T === C.$Q2
											? (P = this.g(p.slice(S), p, S, new i.$hL(l, y), b, o, f))
											: T === C.$R2 &&
												(P = this.j(p.slice(S), p, S, new i.$hL(l, y), b, o)),
									P || (P = this.k(p.slice(S), S, new i.$hL(l, y), s))),
								P)
							) {
								if (S !== 0) {
									const k = b.at(-1),
										L = k?.range.endExclusive ?? 0,
										D = k?.editorRange.endLineNumber ?? 1,
										M = k?.editorRange.endColumn ?? 1;
									b.push(
										new C.$O2(
											new t.$pL(L, S),
											new w.$iL(D, M, l, y),
											p.slice(L, S),
										),
									);
								}
								b.push(P);
							}
							T ===
							`
`
								? (l++, (y = 1))
								: y++;
						}
						const $ = b.at(-1),
							v = $?.range.endExclusive ?? 0;
						return (
							v < p.length &&
								b.push(
									new C.$O2(
										new t.$pL(v, p.length),
										new w.$iL(
											$?.editorRange.endLineNumber ?? 1,
											$?.editorRange.endColumn ?? 1,
											l,
											y,
										),
										p.slice(v, p.length),
									),
								),
							{ parts: b, text: p }
						);
					}
					g(g, p, o, f, b, s, l) {
						const y = g.match(u);
						if (!y) return;
						const [$, v] = y,
							S = new t.$pL(o, o + $.length),
							I = new w.$iL(
								f.lineNumber,
								f.column,
								f.lineNumber,
								f.column + $.length,
							);
						let T = this.b.getAgentsByName(v);
						if (!T.length) {
							const M = this.b.getAgentByFullyQualifiedId(v);
							M && (T = [M]);
						}
						const P =
							T.length > 1 && l?.selectedAgent
								? l.selectedAgent
								: T.find((M) => M.locations.includes(s));
						if (
							!P ||
							b.some((M) => M instanceof C.$U2) ||
							b.some(
								(M) =>
									(M instanceof C.$O2 && M.text.trim() !== "") ||
									!(M instanceof C.$U2),
							)
						)
							return;
						const L = b.at(-1)?.range.endExclusive ?? 0;
						if (p.slice(L, o).trim() === "") return new C.$U2(S, I, P);
					}
					h(g, p, o, f) {
						const b = g.match(a);
						if (!b) return;
						const [s, l] = b,
							y = b[2] ?? "",
							$ = new t.$pL(p, p + s.length),
							v = new w.$iL(
								o.lineNumber,
								o.column,
								o.lineNumber,
								o.column + s.length,
							),
							S = f.find((k) => k instanceof C.$U2),
							I = !S || S.agent.metadata.supportsSlowVariables,
							T = this.d.getVariable(l);
						if (T && (!T.isSlow || I)) return new C.$S2($, v, l, y, T.id);
						const P = this.f.getToolByName(l);
						if (
							P &&
							P.canBeInvokedManually &&
							(!S || S.agent.supportsToolReferences)
						)
							return new C.$T2($, v, l, P.id);
					}
					j(g, p, o, f, b, s) {
						const l = g.match(h);
						if (!l || b.some((T) => T instanceof C.$W2)) return;
						const [y, $] = l,
							v = new t.$pL(o, o + y.length),
							S = new w.$iL(
								f.lineNumber,
								f.column,
								f.lineNumber,
								f.column + y.length,
							),
							I = b.find((T) => T instanceof C.$U2);
						if (I) {
							if (
								b.some(
									(D) =>
										(D instanceof C.$O2 && D.text.trim() !== "") ||
										(!(D instanceof C.$U2) && !(D instanceof C.$O2)),
								)
							)
								return;
							const P = b.at(-1)?.range.endExclusive ?? 0;
							if (p.slice(P, o).trim() !== "") return;
							const L = I.agent.slashCommands.find((D) => D.name === $);
							if (L) return new C.$V2(v, S, L);
						} else {
							const P = this.e.getCommands(s).find((k) => k.command === $);
							if (P) return new C.$W2(v, S, P);
							{
								const L = this.b
									.getDefaultAgent(s)
									?.slashCommands.find((D) => D.name === $);
								if (L) return new C.$V2(v, S, L);
							}
						}
					}
					k(g, p, o, f) {
						const b = f.find(
							(s) =>
								s.range.startLineNumber === o.lineNumber &&
								s.range.startColumn === o.column,
						);
						if (b) {
							const s = b.range.endColumn - b.range.startColumn,
								l = g.substring(0, s),
								y = new t.$pL(p, p + s);
							return new C.$X2(y, b.range, l, b.id, b.modelDescription, b.data);
						}
					}
				};
				(e.$G2 = c),
					(e.$G2 = c =
						Ne([j(0, E.$c3), j(1, m.$D2), j(2, d.$L2), j(3, r.$E2)], c));
			},
		),
		