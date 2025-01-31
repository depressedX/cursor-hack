import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../platform/clipboard/common/clipboardService.js';
import '../../../../platform/label/common/label.js';
import '../../../services/views/common/viewsService.js';
import '../common/constants.js';
import './searchModel.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../../base/common/keyCodes.js';
import './searchActionsBase.js';
import '../../../../base/common/platform.js';
define(
			de[4165],
			he([1, 0, 4, 121, 73, 89, 377, 405, 11, 43, 27, 483, 12]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*clipboardService*/,
 w /*label*/,
 E /*viewsService*/,
 C /*constants*/,
 d /*searchModel*/,
 m /*actions*/,
 r /*keybindingsRegistry*/,
 u /*keyCodes*/,
 a /*searchActionsBase*/,
 h /*platform*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$gPc = void 0),
					(t = mt(t)),
					(C = mt(C)),
					(0, m.$4X)(
						class extends m.$3X {
							constructor() {
								super({
									id: C.SearchCommandIds.CopyMatchCommandId,
									title: t.localize2(9227, "Copy"),
									category: a.$oOc,
									keybinding: {
										weight: r.KeybindingWeight.WorkbenchContrib,
										when: C.$ooc.FileMatchOrMatchFocusKey,
										primary: u.KeyMod.CtrlCmd | u.KeyCode.KeyC,
									},
									menu: [
										{
											id: m.$XX.SearchContext,
											when: C.$ooc.FileMatchOrMatchFocusKey,
											group: "search_2",
											order: 1,
										},
									],
								});
							}
							async run($, v) {
								await n($, v);
							}
						},
					),
					(0, m.$4X)(
						class extends m.$3X {
							constructor() {
								super({
									id: C.SearchCommandIds.CopyPathCommandId,
									title: t.localize2(9228, "Copy Path"),
									category: a.$oOc,
									keybinding: {
										weight: r.KeybindingWeight.WorkbenchContrib,
										when: C.$ooc.FileMatchOrFolderMatchWithResourceFocusKey,
										primary: u.KeyMod.CtrlCmd | u.KeyMod.Alt | u.KeyCode.KeyC,
										win: {
											primary: u.KeyMod.Shift | u.KeyMod.Alt | u.KeyCode.KeyC,
										},
									},
									menu: [
										{
											id: m.$XX.SearchContext,
											when: C.$ooc.FileMatchOrFolderMatchWithResourceFocusKey,
											group: "search_2",
											order: 2,
										},
									],
								});
							}
							async run($, v) {
								await c($, v);
							}
						},
					),
					(0, m.$4X)(
						class extends m.$3X {
							constructor() {
								super({
									id: C.SearchCommandIds.CopyAllCommandId,
									title: t.localize2(9229, "Copy All"),
									category: a.$oOc,
									menu: [
										{
											id: m.$XX.SearchContext,
											when: C.$ooc.HasSearchResults,
											group: "search_2",
											order: 3,
										},
									],
								});
							}
							async run($) {
								await g($);
							}
						},
					),
					(e.$gPc = h.$l
						? `\r
`
						: `
`);
				async function c(y, $) {
					if (!$) {
						const T = l(y);
						if (!(T instanceof d.$INc || T instanceof d.$KNc)) return;
						$ = T;
					}
					const v = y.get(i.$Vxb),
						I = y.get(w.$3N).getUriLabel($.resource, { noPrefix: !0 });
					await v.writeText(I);
				}
				async function n(y, $) {
					if (!$) {
						const T = l(y);
						if (!T) return;
						$ = T;
					}
					const v = y.get(i.$Vxb),
						S = y.get(w.$3N);
					let I;
					$ instanceof d.$FNc
						? (I = p($))
						: $ instanceof d.$INc
							? (I = f($, S).text)
							: $ instanceof d.$JNc && (I = b($, S).text),
						I && (await v.writeText(I));
				}
				async function g(y) {
					const $ = y.get(E.$HMb),
						v = y.get(i.$Vxb),
						S = y.get(w.$3N),
						I = (0, a.$rOc)($);
					if (I) {
						const T = I.searchResult,
							P = s(T.folderMatches(), S);
						await v.writeText(P);
					}
				}
				function p(y, $ = 0) {
					const v = () =>
							`${y.range().startLineNumber},${y.range().startColumn}`,
						S = (k) => y.range().startLineNumber + k + "",
						I = y.fullPreviewLines(),
						T = I.reduce((k, L, D) => {
							const M = D === 0 ? v().length : S(D).length;
							return Math.max(M, k);
						}, 0);
					return I.map((k, L) => {
						const D = L === 0 ? v() : S(L),
							M = " ".repeat(T - D.length);
						return `${" ".repeat($)}${D}: ${M}${k}`;
					}).join(`
`);
				}
				function o(y, $) {
					return y instanceof d.$INc ? f(y, $) : b(y, $);
				}
				function f(y, $) {
					const v = y
						.matches()
						.sort(d.$NNc)
						.map((I) => p(I, 2));
					return {
						text: `${$.getUriLabel(y.resource, { noPrefix: !0 })}${e.$gPc}${v.join(e.$gPc)}`,
						count: v.length,
					};
				}
				function b(y, $) {
					const v = [];
					let S = 0;
					return (
						y
							.matches()
							.sort(d.$NNc)
							.forEach((T) => {
								const P = o(T, $);
								(S += P.count), v.push(P.text);
							}),
						{ text: v.join(e.$gPc + e.$gPc), count: S }
					);
				}
				function s(y, $) {
					const v = [];
					y = y.sort(d.$NNc);
					for (let S = 0; S < y.length; S++) {
						const I = b(y[S], $);
						I.count && v.push(I.text);
					}
					return v.join(e.$gPc + e.$gPc);
				}
				function l(y) {
					const $ = y.get(E.$HMb);
					return (0, a.$rOc)($)?.getControl().getSelection()[0];
				}
			},
		)
