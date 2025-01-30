import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../editor/browser/services/codeEditorService.js';
import '../../../services/ai/browser/aiService.js';
import '../../../../platform/registry/common/platform.js';
import '../../../common/contributions.js';
import '../../../services/lifecycle/common/lifecycle.js';
import '../../../../platform/native/common/native.js';
import '../../../../editor/common/core/range.js';
import '../../../services/aiSettings/browser/aiSettingsService.js';
import '../../../../editor/browser/services/inlineDiffService.js';
import '../../../../editor/common/services/resolverService.js';
import '../../../services/ai/browser/aiMiscServices.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../base/common/cppUtils/diff/line.js';
define(
			de[3982],
			he([1, 0, 65, 118, 30, 55, 52, 110, 17, 315, 383, 42, 137, 3, 20, 901]),
			function (ce /*require*/,
 e /*exports*/,
 t /*codeEditorService*/,
 i /*aiService*/,
 w /*platform*/,
 E /*contributions*/,
 C /*lifecycle*/,
 d /*native*/,
 m /*range*/,
 r /*aiSettingsService*/,
 u /*inlineDiffService*/,
 a /*resolverService*/,
 h /*aiMiscServices*/,
 c /*lifecycle*/,
 n /*extensions*/,
 g /*line*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ted = e.$sed = void 0);
				async function p(l, y, $) {
					const v = await new Promise((A) => {
							(0, g.$gqb)(l, y, (R, O) => {
								A(O);
							});
						}),
						S = [];
					let I = 0;
					for (const A of v)
						if (A.added)
							S.push({ range: new m.$iL(I, 1, I + A.count, 1) }),
								(I += A.count);
						else if (A.removed) {
							const R = A.value.slice(0, -1);
							S.push({ range: new m.$iL(I, 1, I, 1), removeText: R });
						} else I += A.count;
					const T = S.sort(
							(A, R) => A.range.startLineNumber - R.range.startLineNumber,
						),
						P = y.split(`
`);
					let k = "",
						L = 0,
						D = 0,
						M = 0;
					for (const { range: A, removeText: R } of T) {
						A.startLineNumber > $ && (M = $ + D);
						const O = P.slice(L, A.startLineNumber);
						if (
							(O.length > 0 &&
								(k +=
									O.join(`
`) +
									`
`),
							(L = A.endLineNumber),
							R === void 0)
						) {
							const B = A.startLineNumber,
								U = A.endLineNumber,
								F = P.slice(B, U)
									.map((x) => `+${x}`)
									.join(`
`);
							k +=
								F +
								`
`;
						} else {
							const B = R.split(`
`),
								U = B.map((z) => `-${z}`).join(`
`);
							(k +=
								U +
								`
`),
								(D += B.length);
						}
					}
					const N = P.slice(L);
					return (
						N.length > 0 &&
							(k +=
								N.join(`
`) +
								`
`),
						{ diffString: k, newImportantLine: M }
					);
				}
				const o = 30,
					f = 15;
				let b = class extends c.$1c {
					constructor(y, $, v, S, I, T) {
						super(),
							(this.c = y),
							(this.f = $),
							(this.g = v),
							(this.h = S),
							(this.j = I),
							(this.m = T),
							(this.fileStates = {}),
							(this.changeStates = {}),
							(this.lastFire = 0);
					}
					shouldFire(y, $) {
						if (Date.now() - this.lastFire < 15e3) return !1;
						const v = this.changeStates[y] ?? [];
						for (const k of v)
							Date.now() - k.timestamp > 30 * 1e3 && v.slice(v.indexOf(k), 1);
						let S = 0,
							I = !1;
						for (const k of v)
							I &&
								k.type === "keyboard" &&
								(Math.abs(k.pos.lineNumber - $.lineNumber) < 40 && S++,
								(I = !1)),
								!I && ["mouse", "api"].includes(k.type) && (S++, (I = !0));
						const T = v[v.length - 1],
							P = Date.now() - T.timestamp;
						return S > 3 && P > 500;
					}
					startBackgroundWatch() {}
					backgroundLoop() {}
					computeTargetRange(y, $) {
						let v = y.getLineFirstNonWhitespaceColumn($),
							S = this.computeSpanWithIndentationFrom(y, $, v);
						if (S.endLineNumber - S.startLineNumber > f * 2) {
							const T = y.getLineCount(),
								P = Math.max($ - f, 1),
								k = Math.min($ + f, T);
							return new m.$iL(P, 1, k, y.getLineMaxColumn(k));
						}
						let I = S;
						for (; I.endLineNumber - I.startLineNumber <= f * 2 && v >= 0; )
							v--, (S = I), (I = this.computeSpanWithIndentationFrom(y, $, v));
						return S;
					}
					computeSpanWithIndentationFrom(y, $, v) {
						let S = $,
							I = $;
						for (; S >= 1 || I <= y.getLineCount(); ) {
							let T = !1;
							if (
								(S > 1 &&
									y.getLineFirstNonWhitespaceColumn(S - 1) >= v &&
									((T = !0), S--),
								I < y.getLineCount() &&
									y.getLineLastNonWhitespaceColumn(I + 1) >= v &&
									((T = !0), I++),
								!T)
							)
								break;
						}
						return new m.$iL(S, 1, I, y.getLineMaxColumn(I));
					}
					async run(y) {}
				};
				(e.$sed = b),
					(e.$sed = b =
						Ne(
							[
								j(0, t.$dtb),
								j(1, i.$Nfc),
								j(2, d.$y7c),
								j(3, r.$S6b),
								j(4, u.$27b),
								j(5, a.$MO),
							],
							b,
						)),
					(0, n.$lK)(h.$ffc, b, n.InstantiationType.Delayed);
				let s = class {
					constructor(y, $) {
						(this.c = y), (this.d = $);
					}
				};
				(e.$ted = s),
					(e.$ted = s = Ne([j(0, h.$ffc), j(1, r.$S6b)], s)),
					w.$Io
						.as(E.Extensions.Workbench)
						.registerWorkbenchContribution(s, C.LifecyclePhase.Eventually);
			},
		),
		