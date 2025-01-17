import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/ui/hover/hoverDelegateFactory.js';
import '../../../../base/common/htmlContent.js';
import '../../../../base/common/lazy.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/observable.js';
import '../../../../base/common/types.js';
import '../../../../nls.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/hover/browser/hover.js';
import '../../../../platform/registry/common/platform.js';
import '../../files/browser/explorerFileContrib.js';
import './codeCoverageDisplayUtils.js';
import '../common/configuration.js';
import '../common/testCoverageService.js';
define(
			de[1335],
			he([
				1, 0, 7, 95, 94, 149, 3, 77, 28, 4, 10, 72, 30, 1732, 1266, 443, 630,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				var o;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$WJc = e.$VJc = void 0),
					(n = mt(n));
				let f = class extends C.$1c {
					get visible() {
						return !!this.a;
					}
					constructor(P, k, L) {
						super(),
							(this.j = P),
							(this.m = k),
							(this.n = L),
							(this.b = new E.$Y(() => {
								if (this.j.compact) {
									const D = (0, t.h)(".test-coverage-bars.compact", [
										(0, t.h)(".tpc@overall"),
										(0, t.h)(".bar@tpcBar"),
									]);
									return this.q(D.tpcBar, S), D;
								} else {
									const D = (0, t.h)(".test-coverage-bars", [
										(0, t.h)(".tpc@overall"),
										(0, t.h)(".bar@statement"),
										(0, t.h)(".bar@function"),
										(0, t.h)(".bar@branch"),
									]);
									return (
										this.q(D.statement, y),
										this.q(D.function, $),
										this.q(D.branch, v),
										D
									);
								}
							})),
							(this.f = this.D(new C.$Zc())),
							(this.g = []);
					}
					q(P, k) {
						this.D(
							this.n.setupManagedHover(
								(0, i.$cib)("element"),
								P,
								() => this.a && k(this.a),
							),
						);
					}
					setCoverageInfo(P) {
						const k = this.f;
						if (!P) {
							this.a &&
								((this.a = void 0), this.g.forEach((L) => L.hide()), k.clear());
							return;
						}
						if (!this.a) {
							const L = this.b.value.root;
							k.add((0, C.$Yc)(() => L.remove())),
								this.j.container.appendChild(L),
								k.add(
									this.m.onDidChangeConfiguration((D) => {
										this.a &&
											(D.affectsConfiguration(
												g.TestingConfigKeys.CoveragePercent,
											) ||
												D.affectsConfiguration(
													g.TestingConfigKeys.CoverageBarThresholds,
												)) &&
											this.r(this.a);
									}),
								);
						}
						(this.a = P), this.r(P);
					}
					r(P) {
						const k = this.b.value,
							L = this.j.compact ? 0 : 2,
							D = (0, g.$RJc)(
								this.m,
								g.TestingConfigKeys.CoverageBarThresholds,
							),
							M = n.$1Jc(
								P,
								(0, g.$RJc)(this.m, g.TestingConfigKeys.CoveragePercent),
							);
						this.j.overall !== !1
							? (k.overall.textContent = n.$ZJc(M, L))
							: (k.overall.style.display = "none"),
							"tpcBar" in k
								? s(k.tpcBar, M, !1, D)
								: (s(
										k.statement,
										n.$XJc(P.statement),
										P.statement.total === 0,
										D,
									),
									s(
										k.function,
										P.declaration && n.$XJc(P.declaration),
										P.declaration?.total === 0,
										D,
									),
									s(
										k.branch,
										P.branch && n.$XJc(P.branch),
										P.branch?.total === 0,
										D,
									));
					}
				};
				(e.$VJc = f), (e.$VJc = f = Ne([j(1, u.$gj), j(2, a.$Uyb)], f));
				const b = 16,
					s = (T, P, k, L) => {
						if (P === void 0) {
							T.style.display = "none";
							return;
						}
						if (
							((T.style.display = "block"),
							(T.style.width = `${b}px`),
							T.style.setProperty(
								"--test-bar-width",
								`${Math.floor(P * 16)}px`,
							),
							k)
						) {
							(T.style.color = "currentColor"), (T.style.opacity = "0.5");
							return;
						}
						(T.style.color = n.$YJc(P, L)), (T.style.opacity = "1");
					},
					l = new Intl.NumberFormat(),
					y = (T) =>
						(0, r.localize)(
							10661,
							null,
							l.format(T.statement.covered),
							l.format(T.statement.total),
							n.$ZJc(n.$XJc(T.statement)),
						),
					$ = (T) =>
						T.declaration &&
						(0, r.localize)(
							10662,
							null,
							l.format(T.declaration.covered),
							l.format(T.declaration.total),
							n.$ZJc(n.$XJc(T.declaration)),
						),
					v = (T) =>
						T.branch &&
						(0, r.localize)(
							10663,
							null,
							l.format(T.branch.covered),
							l.format(T.branch.total),
							n.$ZJc(n.$XJc(T.branch)),
						),
					S = (T) => {
						const P = [y(T), $(T), v(T)].filter(m.$tg).join(`

`);
						return {
							markdown: new w.$cl().appendText(P),
							markdownNotSupportedFallback: P,
						};
					};
				let I = class extends f {
					static {
						o = this;
					}
					static {
						this.t = !1;
					}
					static register() {
						this.t ||
							((this.t = !0),
							h.$Io.as(c.ExplorerExtensions.FileContributionRegistry).register({
								create(P, k) {
									return P.createInstance(o, { compact: !0, container: k });
								},
							}));
					}
					constructor(P, k, L, D) {
						super(P, k, L), (this.s = (0, d.observableValue)(this, void 0));
						const M = (0, g.$SJc)(
							k,
							g.TestingConfigKeys.ShowCoverageInExplorer,
						);
						this.D(
							(0, d.autorun)(async (N) => {
								let A;
								const R = D.selected.read(N);
								if (R && M.read(N)) {
									const O = this.s.read(N);
									O && (A = R.getComputedForUri(O));
								}
								this.setCoverageInfo(A);
							}),
						);
					}
					setResource(P, k) {
						this.s.set(P, k);
					}
					setCoverageInfo(P) {
						super.setCoverageInfo(P),
							this.j.container?.classList.toggle(
								"explorer-item-with-test-coverage",
								this.visible,
							);
					}
				};
				(e.$WJc = I),
					(e.$WJc = I = o = Ne([j(1, u.$gj), j(2, a.$Uyb), j(3, p.$TJc)], I));
			},
		),
		