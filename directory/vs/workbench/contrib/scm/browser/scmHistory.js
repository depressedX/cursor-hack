import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/objects.js';
import '../../../../base/common/themables.js';
import '../../../../platform/theme/common/colorRegistry.js';
import '../../../../platform/theme/common/colors/chartsColors.js';
import '../../../../platform/theme/common/colorUtils.js';
import '../../../../base/common/numbers.js';
import '../../../../base/browser/dom.js';
define(
			de[1747],
			he([1, 0, 4, 24, 82, 26, 51, 1658, 306, 201, 7]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$5Pc =
						e.$4Pc =
						e.$3Pc =
						e.$2Pc =
						e.$1Pc =
						e.$ZPc =
						e.$YPc =
							void 0),
					(e.$6Pc = f),
					(e.$7Pc = b),
					(e.$8Pc = s),
					(e.$YPc = 22),
					(e.$ZPc = 11);
				const a = 4,
					h = 5;
				(e.$1Pc = (0, m.$wP)(
					"scmGraph.historyItemGroupLocal",
					d.$OR,
					(0, t.localize)(9062, null),
				)),
					(e.$2Pc = (0, m.$wP)(
						"scmGraph.historyItemGroupRemote",
						d.$SR,
						(0, t.localize)(9063, null),
					)),
					(e.$3Pc = (0, m.$wP)(
						"scmGraph.historyItemGroupBase",
						d.$QR,
						(0, t.localize)(9064, null),
					)),
					(e.$4Pc = (0, m.$wP)(
						"scmGraph.historyItemHoverLabelForeground",
						C.$cS,
						(0, t.localize)(9065, null),
					)),
					(e.$5Pc = [
						(0, m.$wP)(
							"scmGraph.foreground1",
							d.$RR,
							(0, t.localize)(9066, null),
						),
						(0, m.$wP)(
							"scmGraph.foreground2",
							d.$NR,
							(0, t.localize)(9067, null),
						),
						(0, m.$wP)(
							"scmGraph.foreground3",
							d.$PR,
							(0, t.localize)(9068, null),
						),
					]);
				function c(l, y) {
					for (const $ of l.labels ?? []) {
						const v = y.get($.title);
						if (v !== void 0) return v;
					}
				}
				function n(l) {
					const y = document.createElementNS(
						"http://www.w3.org/2000/svg",
						"path",
					);
					return (
						y.setAttribute("fill", "none"),
						y.setAttribute("stroke-width", "1px"),
						y.setAttribute("stroke-linecap", "round"),
						(y.style.stroke = (0, m.$rP)(l)),
						y
					);
				}
				function g(l, y, $) {
					const v = document.createElementNS(
						"http://www.w3.org/2000/svg",
						"circle",
					);
					return (
						v.setAttribute("cx", `${e.$ZPc * (l + 1)}`),
						v.setAttribute("cy", `${e.$ZPc}`),
						v.setAttribute("r", `${y}`),
						(v.style.fill = (0, m.$rP)($)),
						v
					);
				}
				function p(l, y, $, v) {
					const S = n(v);
					return S.setAttribute("d", `M ${l} ${y} V ${$}`), S;
				}
				function o(l, y) {
					for (let $ = l.length - 1; $ >= 0; $--) if (l[$].id === y) return $;
					return -1;
				}
				function f(l) {
					const y = document.createElementNS(
						"http://www.w3.org/2000/svg",
						"svg",
					);
					y.classList.add("graph");
					const $ = l.historyItem,
						v = l.inputSwimlanes,
						S = l.outputSwimlanes,
						I = v.findIndex((L) => L.id === $.id),
						T = I !== -1 ? I : v.length,
						P = T < S.length ? S[T].color : T < v.length ? v[T].color : e.$1Pc;
					let k = 0;
					for (let L = 0; L < v.length; L++) {
						const D = v[L].color;
						if (v[L].id === $.id)
							if (L !== T) {
								const M = [],
									N = n(D);
								M.push(`M ${e.$ZPc * (L + 1)} 0`),
									M.push(`A ${e.$ZPc} ${e.$ZPc} 0 0 1 ${e.$ZPc * L} ${e.$ZPc}`),
									M.push(`H ${e.$ZPc * (T + 1)}`),
									N.setAttribute("d", M.join(" ")),
									y.append(N);
							} else k++;
						else if (k < S.length && v[L].id === S[k].id) {
							if (L === k) {
								const M = p(e.$ZPc * (L + 1), 0, e.$YPc, D);
								y.append(M);
							} else {
								const M = [],
									N = n(D);
								M.push(`M ${e.$ZPc * (L + 1)} 0`),
									M.push("V 6"),
									M.push(
										`A ${h} ${h} 0 0 1 ${e.$ZPc * (L + 1) - h} ${e.$YPc / 2}`,
									),
									M.push(`H ${e.$ZPc * (k + 1) + h}`),
									M.push(
										`A ${h} ${h} 0 0 0 ${e.$ZPc * (k + 1)} ${e.$YPc / 2 + h}`,
									),
									M.push(`V ${e.$YPc}`),
									N.setAttribute("d", M.join(" ")),
									y.append(N);
							}
							k++;
						}
					}
					for (let L = 1; L < $.parentIds.length; L++) {
						const D = o(S, $.parentIds[L]);
						if (D === -1) continue;
						const M = [],
							N = n(S[D].color);
						M.push(`M ${e.$ZPc * D} ${e.$YPc / 2}`),
							M.push(
								`A ${e.$ZPc} ${e.$ZPc} 0 0 1 ${e.$ZPc * (D + 1)} ${e.$YPc}`,
							),
							M.push(`M ${e.$ZPc * D} ${e.$YPc / 2}`),
							M.push(`H ${e.$ZPc * (T + 1)} `),
							N.setAttribute("d", M.join(" ")),
							y.append(N);
					}
					if (I !== -1) {
						const L = p(e.$ZPc * (T + 1), 0, e.$YPc / 2, v[I].color);
						y.append(L);
					}
					if ($.parentIds.length > 0) {
						const L = p(e.$ZPc * (T + 1), e.$YPc / 2, e.$YPc, P);
						y.append(L);
					}
					if ($.parentIds.length > 1) {
						const L = g(T, a + 1, P);
						y.append(L);
						const D = g(T, a - 1, P);
						y.append(D);
					} else {
						if (
							$.labels?.some(
								(D) =>
									E.ThemeIcon.isThemeIcon(D.icon) && D.icon.id === "target",
							)
						) {
							const D = g(T, a + 2, P);
							y.append(D);
						}
						const L = g(T, a, P);
						y.append(L);
					}
					return (
						(y.style.height = `${e.$YPc}px`),
						(y.style.width = `${e.$ZPc * (Math.max(v.length, S.length, 1) + 1)}px`),
						y
					);
				}
				function b(l) {
					const y = (0, u.$Jhb)("svg", {
						style: {
							height: `${e.$YPc}px`,
							width: `${e.$ZPc * (l.length + 1)}px`,
						},
					});
					for (let $ = 0; $ < l.length; $++) {
						const v = p(e.$ZPc * ($ + 1), 0, e.$YPc, l[$].color);
						y.root.append(v);
					}
					return y.root;
				}
				function s(l, y = new Map()) {
					let $ = -1;
					const v = [];
					for (let S = 0; S < l.length; S++) {
						const I = l[S],
							P = ((0, i.$Tb)(v)?.outputSwimlanes ?? []).map((D) =>
								(0, w.$vo)(D),
							),
							k = [];
						let L = !1;
						if (I.parentIds.length > 0)
							for (const D of P) {
								if (D.id === I.id) {
									L ||
										(k.push({ id: I.parentIds[0], color: c(I, y) ?? D.color }),
										(L = !0));
									continue;
								}
								k.push((0, w.$vo)(D));
							}
						for (let D = L ? 1 : 0; D < I.parentIds.length; D++) {
							let M;
							if (!L) M = c(I, y);
							else {
								const N = l.find((A) => A.id === I.parentIds[D]);
								M = N ? c(N, y) : void 0;
							}
							M || (($ = (0, r.rot)($ + 1, e.$5Pc.length)), (M = e.$5Pc[$])),
								k.push({ id: I.parentIds[D], color: M });
						}
						v.push({ historyItem: I, inputSwimlanes: P, outputSwimlanes: k });
					}
					return v;
				}
			},
		),
		