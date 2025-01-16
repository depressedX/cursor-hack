define(
			de[3487],
			he([
				1, 0, 3, 59, 61, 4, 10, 5, 39, 30, 55, 108, 991, 70, 243, 161, 474, 52,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				let f = class {
					constructor(y, $) {
						(this.a = y), (this.b = $), (this.viewType = "*");
					}
					async provideCellStatusBarItems(y, $, v) {
						const I = this.a.getNotebookTextModel(y)?.cells[$];
						if (!I) return;
						const T = [];
						let P = I.language;
						if (I.cellKind === c.CellKind.Markup) P = "markdown";
						else if (this.b.getLanguageIdByLanguageName(I.language))
							P = this.b.getLanguageName(P) ?? P;
						else {
							const L = (0, E.localize)(7731, null, I.language);
							T.push({
								text: "$(dialog-warning)",
								command: {
									id: "workbench.extensions.search",
									arguments: [`@tag:${I.language}`],
									title: "Search Extensions",
								},
								tooltip: L,
								alignment: c.CellStatusbarAlignment.Right,
								priority: -Number.MAX_SAFE_INTEGER + 1,
							});
						}
						return (
							T.push({
								text: P,
								command: a.$0Ib,
								tooltip: (0, E.localize)(7732, null),
								alignment: c.CellStatusbarAlignment.Right,
								priority: -Number.MAX_SAFE_INTEGER,
							}),
							{ items: T }
						);
					}
				};
				f = Ne([j(0, g.$MIb), j(1, w.$nM)], f);
				let b = class {
					constructor(y, $, v, S, I, T) {
						(this.b = y),
							(this.c = $),
							(this.d = v),
							(this.e = S),
							(this.f = I),
							(this.g = T),
							(this.viewType = "*"),
							(this.a = new i.$Gc());
					}
					async provideCellStatusBarItems(y, $, v) {
						const S = this.b.getNotebookTextModel(y),
							I = S?.cells[$];
						if (!I) return;
						const T = this.e.getValue(
							"workbench.editor.languageDetectionHints",
						);
						if (!(typeof T == "object" && T?.notebookEditors)) return;
						const k = I.uri,
							L = I.textModel?.getVersionId();
						if (!L) return;
						const D =
							I.cellKind === c.CellKind.Markup
								? "markdown"
								: this.d.getLanguageIdByLanguageName(I.language) || I.language;
						this.a.has(k) ||
							this.a.set(k, {
								cellLanguage: D,
								updateTimestamp: 0,
								contentVersion: 1,
							});
						const M = this.a.get(k);
						if (
							M.cellLanguage !== D ||
							(M.updateTimestamp < Date.now() - 1e3 && M.contentVersion !== L)
						) {
							(M.updateTimestamp = Date.now()),
								(M.cellLanguage = D),
								(M.contentVersion = L);
							const A = this.c.getSelectedOrSuggestedKernel(S);
							if (A) {
								const R = [...A.supportedLanguages, "markdown"];
								M.guess = await this.f.detectLanguage(I.uri, R);
							}
						}
						const N = [];
						if (M.guess && D !== M.guess) {
							const A = this.d.getLanguageName(M.guess) || M.guess;
							let R = (0, E.localize)(7733, null, A);
							const B = this.g.lookupKeybinding(a.$9Ib)?.getLabel();
							B && (R += ` (${B})`),
								N.push({
									text: "$(lightbulb-autofix)",
									command: a.$9Ib,
									tooltip: R,
									alignment: c.CellStatusbarAlignment.Right,
									priority: -Number.MAX_SAFE_INTEGER + 1,
								});
						}
						return { items: N };
					}
				};
				b = Ne(
					[
						j(0, g.$MIb),
						j(1, n.$f6),
						j(2, w.$nM),
						j(3, C.$gj),
						j(4, p.$RO),
						j(5, m.$uZ),
					],
					b,
				);
				let s = class extends t.$1c {
					constructor(y, $) {
						super(),
							[f, b].forEach((S) => {
								this.D(
									$.registerCellStatusBarItemProvider(y.createInstance(S)),
								);
							});
					}
				};
				(s = Ne([j(0, d.$Li), j(1, h.$Bpc)], s)),
					r.$Io
						.as(u.Extensions.Workbench)
						.registerWorkbenchContribution(s, o.LifecyclePhase.Restored);
			},
		),
		