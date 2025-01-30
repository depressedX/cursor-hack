import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/severity.js';
import '../../../../editor/browser/editorBrowser.js';
import '../../../services/editor/common/editorService.js';
import '../../../services/languageStatus/common/languageStatusService.js';
import '../../../../platform/registry/common/platform.js';
import '../../../common/contributions.js';
import '../../../services/lifecycle/common/lifecycle.js';
import '../../../../nls.js';
import '../../../../editor/contrib/folding/browser/folding.js';
import '../../../../editor/contrib/colorPicker/browser/colorDetector.js';
define(
		de[3429],
		he([1, 0, 3, 111, 56, 18, 1024, 30, 55, 52, 4, 350, 785]),
		function (ce /*require*/,
 e /*exports*/,
 t /*lifecycle*/,
 i /*severity*/,
 w /*editorBrowser*/,
 E /*editorService*/,
 C /*languageStatusService*/,
 d /*platform*/,
 m /*contributions*/,
 r /*lifecycle*/,
 u /*nls*/,
 a /*folding*/,
 h /*colorDetector*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$8Xc = void 0),
				(i = xi(i)),
				(u = mt(u));
			const c = "workbench.action.openSettings",
				n = u.localize(7341, null);
			let g = class extends t.$1c {
				constructor(s, l) {
					super();
					const $ = [new p(), new o()].map((I) => new f(l, I));
					$.forEach((I) => this.D(I));
					let v;
					const S = () => {
						const I = s.activeTextEditorControl;
						if (I === v) return;
						v = I;
						const T = (0, w.$btb)(I);
						$.forEach((P) => P.onActiveEditorChanged(T));
					};
					this.D(s.onDidActiveEditorChange(S)), S();
				}
			};
			(e.$8Xc = g), (e.$8Xc = g = Ne([j(0, E.$IY), j(1, C.$c8)], g));
			class p {
				constructor() {
					(this.id = "decoratorsLimitInfo"),
						(this.name = u.localize(7342, null)),
						(this.label = u.localize(7343, null)),
						(this.source = u.localize(7344, null)),
						(this.settingsId = "editor.colorDecoratorsLimit");
				}
				getLimitReporter(s) {
					return h.$YBb.get(s)?.limitReporter;
				}
			}
			class o {
				constructor() {
					(this.id = "foldingLimitInfo"),
						(this.name = u.localize(7345, null)),
						(this.label = u.localize(7346, null)),
						(this.source = u.localize(7347, null)),
						(this.settingsId = "editor.foldingMaximumRegions");
				}
				getLimitReporter(s) {
					return a.$ZNb.get(s)?.limitReporter;
				}
			}
			class f {
				constructor(s, l) {
					(this.c = s), (this.d = l);
				}
				onActiveEditorChanged(s) {
					this.b && (this.b.dispose(), (this.b = void 0));
					let l;
					return (
						s && (l = this.d.getLimitReporter(s)),
						this.e(l),
						l
							? ((this.b = l.onDidChange((y) => {
									this.e(l);
								})),
								!0)
							: !1
					);
				}
				e(s) {
					if (
						(this.a && (this.a.dispose(), (this.a = void 0)),
						s && s.limited !== !1)
					) {
						const l = {
							id: this.d.id,
							selector: "*",
							name: this.d.name,
							severity: i.default.Warning,
							label: this.d.label,
							detail: u.localize(7348, null, s.limited),
							command: { id: c, arguments: [this.d.settingsId], title: n },
							accessibilityInfo: void 0,
							source: this.d.source,
							busy: !1,
						};
						this.a = this.c.addStatus(l);
					}
				}
				dispose() {
					this.a?.dispose,
						(this.a = void 0),
						this.b?.dispose,
						(this.b = void 0);
				}
			}
			d.$Io
				.as(m.Extensions.Workbench)
				.registerWorkbenchContribution(g, r.LifecyclePhase.Restored);
		},
	),
		