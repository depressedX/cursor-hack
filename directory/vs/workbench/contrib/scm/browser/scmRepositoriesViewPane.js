import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/event.js';
import '../../../browser/parts/views/viewPane.js';
import '../../../../base/browser/dom.js';
import '../common/scm.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/contextview/browser/contextView.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../../platform/list/browser/listService.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../common/views.js';
import '../../../../platform/opener/common/opener.js';
import '../../../../platform/telemetry/common/telemetry.js';
import './scmRepositoryRenderer.js';
import './util.js';
import '../../../../base/browser/ui/sash/sash.js';
import '../../../../base/common/iterator.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/hover/browser/hover.js';
import '../../../../css!vs/workbench/contrib/scm/browser/media/scm.js';
define(
			de[3838],
			he([
				1, 0, 4, 6, 146, 7, 258, 5, 49, 8, 39, 35, 93, 10, 60, 41, 32, 1257,
				614, 277, 103, 3, 11, 72, 652,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*nls*/,
				i /*event*/,
				w /*viewPane*/,
				E /*dom*/,
				C /*scm*/,
				d /*instantiation*/,
				m /*contextView*/,
				r /*contextkey*/,
				u /*keybinding*/,
				a /*themeService*/,
				h /*listService*/,
				c /*configuration*/,
				n /*views*/,
				g /*opener*/,
				p /*telemetry*/,
				o /*scmRepositoryRenderer*/,
				f /*util*/,
				b /*sash*/,
				s /*iterator*/,
				l /*lifecycle*/,
				y /*actions*/,
				$ /*hover*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$dQc = void 0);
				class v {
					getHeight() {
						return 22;
					}
					getTemplateId() {
						return o.$OPc.TEMPLATE_ID;
					}
				}
				let S = class extends w.$TMb {
					constructor(T, P, k, L, D, M, N, A, R, O, B, U) {
						super(
							{ ...T, titleMenuId: y.$XX.SCMSourceControlTitle },
							k,
							L,
							A,
							N,
							M,
							D,
							R,
							O,
							B,
							U,
						),
							(this.c = P),
							(this.b = new l.$Zc());
					}
					W(T) {
						super.W(T);
						const P = (0, E.$fhb)(
								T,
								(0, E.$)(".scm-view.scm-repositories-view"),
							),
							k = () => {
								const N = this.Ab.getValue("scm.providerCountBadge");
								P.classList.toggle("hide-provider-counts", N === "hidden"),
									P.classList.toggle("auto-provider-counts", N === "auto");
							};
						this.D(
							i.Event.filter(
								this.Ab.onDidChangeConfiguration,
								(N) => N.affectsConfiguration("scm.providerCountBadge"),
								this.b,
							)(k),
						),
							k();
						const L = new v(),
							D = this.Db.createInstance(
								o.$OPc,
								y.$XX.SCMSourceControlInline,
								(0, f.$GPc)(this.Db),
							),
							M = { getId: (N) => N.provider.id };
						(this.a = this.Db.createInstance(h.$yMb, "SCM Main", P, L, [D], {
							identityProvider: M,
							horizontalScrolling: !1,
							overrideStyles: this.Zb().listOverrideStyles,
							accessibilityProvider: {
								getAriaLabel(N) {
									return N.provider.label;
								},
								getWidgetAriaLabel() {
									return (0, t.localize)(9081, null);
								},
							},
						})),
							this.D(this.a),
							this.D(this.a.onDidChangeSelection(this.n, this)),
							this.D(this.a.onContextMenu(this.m, this)),
							this.D(this.c.onDidChangeRepositories(this.g, this)),
							this.D(this.c.onDidChangeVisibleRepositories(this.s, this)),
							this.orientation === b.Orientation.VERTICAL &&
								this.D(
									this.Ab.onDidChangeConfiguration((N) => {
										N.affectsConfiguration("scm.repositories.visible") &&
											this.j();
									}),
								),
							this.g(),
							this.s();
					}
					g() {
						this.a.splice(0, this.a.length, this.c.repositories), this.j();
					}
					focus() {
						super.focus(), this.a.domFocus();
					}
					X(T, P) {
						super.X(T, P), this.a.layout(T, P);
					}
					j() {
						if (this.orientation === b.Orientation.HORIZONTAL) return;
						const T = this.Ab.getValue("scm.repositories.visible"),
							P = this.a.length === 0,
							k = Math.min(this.a.length, T) * 22;
						(this.minimumBodySize = T === 0 ? 22 : k),
							(this.maximumBodySize =
								T === 0 || P ? Number.POSITIVE_INFINITY : k);
					}
					m(T) {
						if (!T.element) return;
						const P = T.element.provider,
							L = this.c.menus.getRepositoryMenus(P).repositoryContextMenu,
							D = (0, f.$EPc)(L),
							M = this.D(new o.$NPc(() => this.a.getSelectedElements()));
						M.onWillRun(() => this.a.domFocus()),
							this.zb.showContextMenu({
								actionRunner: M,
								getAnchor: () => T.anchor,
								getActions: () => D,
								getActionsContext: () => P,
							});
					}
					n(T) {
						if (T.browserEvent && T.elements.length > 0) {
							const P = this.a.scrollTop;
							(this.c.visibleRepositories = T.elements), (this.a.scrollTop = P);
						}
					}
					s() {
						const T = this.a.getSelection(),
							P = new Set(s.Iterable.map(T, (N) => this.a.element(N))),
							k = new Set(this.c.visibleRepositories),
							L = new Set(s.Iterable.filter(k, (N) => !P.has(N))),
							D = new Set(s.Iterable.filter(P, (N) => !k.has(N)));
						if (L.size === 0 && D.size === 0) return;
						const M = T.filter((N) => !D.has(this.a.element(N)));
						for (let N = 0; N < this.a.length; N++)
							L.has(this.a.element(N)) && M.push(N);
						this.a.setSelection(M),
							M.length > 0 &&
								M.indexOf(this.a.getFocus()[0]) === -1 &&
								(this.a.setAnchor(M[0]), this.a.setFocus([M[0]]));
					}
					dispose() {
						this.b.dispose(), super.dispose();
					}
				};
				(e.$dQc = S),
					(e.$dQc = S =
						Ne(
							[
								j(1, C.$d7),
								j(2, u.$uZ),
								j(3, m.$Xxb),
								j(4, d.$Li),
								j(5, n.$K1),
								j(6, r.$6j),
								j(7, c.$gj),
								j(8, g.$7rb),
								j(9, a.$iP),
								j(10, p.$km),
								j(11, $.$Uyb),
							],
							S,
						));
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	