define(
			de[3632],
			he([
				1, 0, 3, 56, 4, 30, 55, 18, 52, 166, 474, 15, 61, 39, 11, 40, 8, 43,
				176, 27, 71, 23, 10,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
			) {
				"use strict";
				var $;
				Object.defineProperty(e, "__esModule", { value: !0 });
				const v = "editor.detectLanguage";
				let S = class {
					static {
						$ = this;
					}
					static {
						this.a = "status.languageDetectionStatus";
					}
					constructor(T, P, k, L, D, M) {
						(this.f = T),
							(this.g = P),
							(this.h = k),
							(this.i = L),
							(this.j = D),
							(this.k = M),
							(this.b = new t.$Zc()),
							(this.d = new a.$Kh(1e3)),
							(this.e = new t.$Zc()),
							L.onDidActiveEditorChange(() => this.l(!0), this, this.b),
							this.l(!1);
					}
					dispose() {
						this.b.dispose(),
							this.d.dispose(),
							this.c?.dispose(),
							this.e.dispose();
					}
					l(T) {
						T && (this.c?.dispose(), (this.c = void 0)),
							this.d.trigger(() => this.m());
					}
					async m() {
						const T = (0, i.$btb)(this.i.activeTextEditorControl);
						this.e.clear(),
							T?.onDidChangeModelLanguage(() => this.l(!0), this, this.e),
							T?.onDidChangeModelContent(() => this.l(!1), this, this.e);
						const P = T?.getModel(),
							k = P?.uri,
							L = P?.getLanguageId(),
							D = this.h.getValue("workbench.editor.languageDetectionHints");
						if (
							!(typeof D == "object" && D?.untitledEditors) ||
							k?.scheme !== l.Schemas.untitled ||
							!L ||
							!k
						)
							this.c?.dispose(), (this.c = void 0);
						else {
							const A = await this.f.detectLanguage(k),
								R = { jsonc: "json" },
								O = P.getLanguageId();
							if (A && A !== O && R[O] !== A) {
								const B = this.j.getLanguageName(A) || A;
								let U = (0, w.localize)(7328, null, B);
								const F = this.k.lookupKeybinding(v)?.getLabel();
								F && (U += ` (${F})`);
								const x = {
									name: (0, w.localize)(7329, null),
									ariaLabel: (0, w.localize)(7330, null, A),
									tooltip: U,
									command: v,
									text: "$(lightbulb-autofix)",
								};
								this.c
									? this.c.update(x)
									: (this.c = this.g.addEntry(
											x,
											$.a,
											r.StatusbarAlignment.RIGHT,
											{
												id: "status.editor.mode",
												alignment: r.StatusbarAlignment.RIGHT,
												compact: !0,
											},
										));
							} else this.c?.dispose(), (this.c = void 0);
						}
					}
				};
				(S = $ =
					Ne(
						[
							j(0, u.$RO),
							j(1, r.$d6b),
							j(2, y.$gj),
							j(3, d.$IY),
							j(4, h.$nM),
							j(5, c.$uZ),
						],
						S,
					)),
					E.$Io
						.as(C.Extensions.Workbench)
						.registerWorkbenchContribution(S, m.LifecyclePhase.Restored),
					(0, n.$4X)(
						class extends n.$3X {
							constructor() {
								super({
									id: v,
									title: (0, w.localize2)(7332, "Detect Language from Content"),
									f1: !0,
									precondition: p.$Kj.and(
										f.$tJb.toNegated(),
										s.EditorContextKeys.editorTextFocus,
									),
									keybinding: {
										primary: b.KeyCode.KeyD | b.KeyMod.Alt | b.KeyMod.Shift,
										weight: o.KeybindingWeight.WorkbenchContrib,
									},
								});
							}
							async run(I) {
								const T = I.get(d.$IY),
									P = I.get(u.$RO),
									k = (0, i.$btb)(T.activeTextEditorControl),
									L = I.get(g.$4N),
									D = k?.getModel()?.uri;
								if (D) {
									const M = await P.detectLanguage(D);
									M
										? k.getModel()?.setLanguage(M, u.$SO)
										: L.warn((0, w.localize)(7331, null));
								}
							}
						},
					);
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	