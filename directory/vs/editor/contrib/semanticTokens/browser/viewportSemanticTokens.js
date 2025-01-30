import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/async.js';
import '../../../../base/common/lifecycle.js';
import '../../../browser/editorExtensions.js';
import '../common/getSemanticTokens.js';
import '../common/semanticTokensConfig.js';
import '../../../common/services/semanticTokensProviderStyling.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../common/services/languageFeatureDebounce.js';
import '../../../../base/common/stopwatch.js';
import '../../../common/services/languageFeatures.js';
import '../../../common/services/semanticTokensStyling.js';
define(
			de[956],
			he([1, 0, 15, 3, 46, 1602, 1156, 1209, 10, 35, 391, 162, 69, 1180]),
			function (ce /*require*/,
 e /*exports*/,
 t /*async*/,
 i /*lifecycle*/,
 w /*editorExtensions*/,
 E /*getSemanticTokens*/,
 C /*semanticTokensConfig*/,
 d /*semanticTokensProviderStyling*/,
 m /*configuration*/,
 r /*themeService*/,
 u /*languageFeatureDebounce*/,
 a /*stopwatch*/,
 h /*languageFeatures*/,
 c /*semanticTokensStyling*/) {
				"use strict";
				var n;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$iPb = void 0);
				let g = class extends i.$1c {
					static {
						n = this;
					}
					static {
						this.ID = "editor.contrib.viewportSemanticTokens";
					}
					static get(o) {
						return o.getContribution(n.ID);
					}
					constructor(o, f, b, s, l, y) {
						super(),
							(this.h = f),
							(this.j = b),
							(this.m = s),
							(this.a = o),
							(this.b = y.documentRangeSemanticTokensProvider),
							(this.c = l.for(this.b, "DocumentRangeSemanticTokens", {
								min: 100,
								max: 500,
							})),
							(this.f = this.D(new t.$Yh(() => this.s(), 100))),
							(this.g = []);
						const $ = () => {
							this.a.hasModel() &&
								this.f.schedule(this.c.get(this.a.getModel()));
						};
						this.D(
							this.a.onDidScrollChange(() => {
								$();
							}),
						),
							this.D(
								this.a.onDidChangeModel(() => {
									this.n(), $();
								}),
							),
							this.D(
								this.a.onDidChangeModelContent((v) => {
									this.n(), $();
								}),
							),
							this.D(
								this.b.onDidChange(() => {
									this.n(), $();
								}),
							),
							this.D(
								this.m.onDidChangeConfiguration((v) => {
									v.affectsConfiguration(C.$dPb) && (this.n(), $());
								}),
							),
							this.D(
								this.j.onDidColorThemeChange(() => {
									this.n(), $();
								}),
							),
							$();
					}
					n() {
						for (const o of this.g) o.cancel();
						this.g = [];
					}
					q(o) {
						for (let f = 0, b = this.g.length; f < b; f++)
							if (this.g[f] === o) {
								this.g.splice(f, 1);
								return;
							}
					}
					s() {
						if (!this.a.hasModel()) return;
						const o = this.a.getModel();
						if (o.tokenization.hasCompleteSemanticTokens()) return;
						if (!(0, C.$ePb)(o, this.j, this.m)) {
							o.tokenization.hasSomeSemanticTokens() &&
								o.tokenization.setSemanticTokens(null, !1);
							return;
						}
						if (!(0, E.$bPb)(this.b, o)) {
							o.tokenization.hasSomeSemanticTokens() &&
								o.tokenization.setSemanticTokens(null, !1);
							return;
						}
						const f = this.a.getVisibleRangesPlusViewportAboveBelow();
						this.g = this.g.concat(f.map((b) => this.t(o, b)));
					}
					t(o, f) {
						const b = o.getVersionId(),
							s = (0, t.$zh)((y) =>
								Promise.resolve((0, E.$cPb)(this.b, o, f, y)),
							),
							l = new a.$le(!1);
						return (
							s
								.then((y) => {
									if (
										(this.c.update(o, l.elapsed()),
										!y || !y.tokens || o.isDisposed() || o.getVersionId() !== b)
									)
										return;
									const { provider: $, tokens: v } = y,
										S = this.h.getStyling($);
									o.tokenization.setPartialSemanticTokens(
										f,
										(0, d.$gPb)(v, S, o.getLanguageId()),
									);
								})
								.then(
									() => this.q(s),
									() => this.q(s),
								),
							s
						);
					}
				};
				(e.$iPb = g),
					(e.$iPb =
						g =
						n =
							Ne(
								[
									j(1, c.$hPb),
									j(2, r.$iP),
									j(3, m.$gj),
									j(4, u.$PBb),
									j(5, h.$k3),
								],
								g,
							)),
					(0, w.$qtb)(
						g.ID,
						g,
						w.EditorContributionInstantiation.AfterFirstRender,
					);
			},
		),
		