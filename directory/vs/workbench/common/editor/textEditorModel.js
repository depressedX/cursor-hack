import '../../../../require.js';
import '../../../../exports.js';
import '../../../editor/common/model.js';
import './editorModel.js';
import '../../../editor/common/languages/language.js';
import '../../../editor/common/services/model.js';
import '../../../base/common/lifecycle.js';
import '../../../editor/common/languages/modesRegistry.js';
import '../../services/languageDetection/common/languageDetectionWorkerService.js';
import '../../../base/common/async.js';
import '../../../platform/accessibility/common/accessibility.js';
import '../../../nls.js';
define(
			de[702],
			he([1, 0, 64, 416, 61, 67, 3, 172, 474, 15, 91, 4]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				var h;
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$VO = void 0);
				let c = class extends i.$PO {
					static {
						h = this;
					}
					static {
						this.a = 600;
					}
					constructor(g, p, o, f, b) {
						super(),
							(this.n = g),
							(this.q = p),
							(this.r = o),
							(this.s = f),
							(this.b = void 0),
							(this.j = this.D(new C.$2c())),
							(this.m = this.D(new r.$Kh(h.a))),
							(this.w = !1),
							b && this.t(b);
					}
					t(g) {
						const p = this.n.getModel(g);
						if (!p)
							throw new Error(
								`Document with resource ${g.toString(!0)} does not exist`,
							);
						(this.b = g), this.u(p);
					}
					u(g) {
						this.j.value = g.onWillDispose(() => {
							(this.b = void 0), this.dispose();
						});
					}
					get textEditorModel() {
						return this.b ? this.n.getModel(this.b) : null;
					}
					isReadonly() {
						return !0;
					}
					get hasLanguageSetExplicitly() {
						return this.w;
					}
					setLanguageId(g, p) {
						(this.w = !0), this.y(g, p);
					}
					y(g, p) {
						this.isResolved() &&
							(!g ||
								g === this.textEditorModel.getLanguageId() ||
								this.textEditorModel.setLanguage(this.q.createById(g), p));
					}
					z(g) {
						const p = this.D(
							g.onDidChangeLanguage((o) => {
								o.source !== m.$SO && ((this.w = !0), p.dispose());
							}),
						);
					}
					getLanguageId() {
						return this.textEditorModel?.getLanguageId();
					}
					C() {
						return this.m.trigger(() => this.F());
					}
					async F() {
						if (
							this.hasLanguageSetExplicitly ||
							!this.b ||
							!this.r.isEnabledForLanguage(this.getLanguageId() ?? d.$0M)
						)
							return;
						const g = await this.r.detectLanguage(this.b),
							p = this.getLanguageId();
						if (g && g !== p && !this.isDisposed()) {
							this.y(g, m.$SO);
							const o = this.q.getLanguageName(g);
							this.s.alert((0, a.localize)(4080, null, o ?? g));
						}
					}
					G(g, p, o) {
						const f = this.I(g),
							b = this.J(p, this.q, o, f);
						return this.H(g, b, p);
					}
					H(g, p, o) {
						let f = o && this.n.getModel(o);
						return (
							f
								? this.updateTextEditorModel(g, p.languageId)
								: ((f = this.n.createModel(g, p, o)), (this.g = !0), this.u(f)),
							(this.b = f.uri),
							f
						);
					}
					I(g) {
						const p = g;
						return typeof p.getFirstLineText == "function"
							? p.getFirstLineText(
									t.ModelConstants.FIRST_LINE_DETECTION_LENGTH_LIMIT,
								)
							: g
									.getLineContent(1)
									.substr(
										0,
										t.ModelConstants.FIRST_LINE_DETECTION_LENGTH_LIMIT,
									);
					}
					J(g, p, o, f) {
						return !o || o === d.$0M
							? p.createByFilepathOrFirstLine(g ?? null, f)
							: p.createById(o);
					}
					updateTextEditorModel(g, p) {
						this.isResolved() &&
							(g && this.n.updateModel(this.textEditorModel, g),
							p &&
								p !== d.$0M &&
								this.textEditorModel.getLanguageId() !== p &&
								this.textEditorModel.setLanguage(this.q.createById(p)));
					}
					createSnapshot() {
						return this.textEditorModel
							? this.textEditorModel.createSnapshot(!0)
							: null;
					}
					isResolved() {
						return !!this.b;
					}
					dispose() {
						this.j.dispose(),
							this.b && this.g && this.n.destroyModel(this.b),
							(this.b = void 0),
							(this.g = !1),
							super.dispose();
					}
				};
				(e.$VO = c),
					(e.$VO =
						c =
						h =
							Ne([j(0, E.$QO), j(1, w.$nM), j(2, m.$RO), j(3, u.$XK)], c));
			},
		),
		