import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/ui/scrollbar/scrollableElement.js';
import '../../../../base/common/scrollable.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/contextview/browser/contextView.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../platform/opener/common/opener.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../browser/parts/views/viewPane.js';
import '../../../common/views.js';
import './aicontext.js';
import './contextPaneData.js';
import './entrypoint.js';
import '../../../services/ai/browser/aiContextService.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/hover/browser/hover.js';
import '../../../../css!vs/workbench/contrib/aicontext/browser/aicontextPane.js';
define(
			de[4205],
			he([
				1, 0, 7, 203, 195, 3, 10, 8, 49, 5, 39, 41, 32, 35, 146, 60, 1713, 1714,
				4204, 1347, 21, 72, 2380,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*dom*/,
				i /*scrollableElement*/,
				w /*scrollable*/,
				E /*lifecycle*/,
				C /*configuration*/,
				d /*contextkey*/,
				m /*contextView*/,
				r /*instantiation*/,
				u /*keybinding*/,
				a /*opener*/,
				h /*telemetry*/,
				c /*themeService*/,
				n /*viewPane*/,
				g /*views*/,
				p /*aicontext*/,
				o /*contextPaneData*/,
				f /*entrypoint*/,
				b /*aiContextService*/,
				s /*storage*/,
				l /*hover*/,
) {
				"use strict";
				var y;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$zDc = void 0),
					(t = mt(t));
				let $ = class extends n.$TMb {
					static {
						y = this;
					}
					static {
						this.Id = p.IAIContextPaneConstants.VIEW_ID;
					}
					constructor(S, I, T, P, k, L, D, M, N, A, R, O, B) {
						super(S, L, M, k, D, P, I, N, A, R, B),
							(this.m = I),
							(this.n = T),
							(this.a = new E.$Zc()),
							(this.b = new E.$Zc()),
							(this.c = new E.$Zc()),
							(this.g = new E.$2c()),
							([this.h, this.j] = (0, o.$lDc)(
								this.n,
								this.experimentalIndexStorageId,
							)),
							this.a.add(
								this.onDidChangeBodyVisibility((U) => {
									this.j("isVisible", U);
								}),
							);
					}
					get experimentalIndexStorageId() {
						return y.Id + ".experimental-index.data";
					}
					dispose() {
						this.a.dispose(),
							this.c.dispose(),
							this.b.dispose(),
							this.g.dispose(),
							this.f?.dispose(),
							this.r?.dispose(),
							super.dispose();
					}
					focus() {
						super.focus();
					}
					W(S) {
						super.W(S),
							(this.s = t.$(".aichat-aicontext")),
							(this.s.tabIndex = 0),
							(this.s.style.outline = "none"),
							this.s.setAttribute("role", "list"),
							(this.r = new i.$8hb(this.s, {
								alwaysConsumeMouseWheel: !0,
								horizontal: w.ScrollbarVisibility.Hidden,
								vertical: w.ScrollbarVisibility.Visible,
							})),
							S.appendChild(this.r.getDomNode()),
							(this.f = (0, f.$yDc)(this.s, this.m, this.h, this.j));
					}
					X(S, I) {
						super.X(S, I),
							this.s &&
								((this.s.style.height = `${S}px`),
								(this.s.style.width = `${I}px`)),
							this.r?.scanDomNode();
					}
					serializedState() {
						return {
							experimentalIndexId: this.h.experimentalIndexId,
							files: this.h.files.map((S) => ({ ...S })),
						};
					}
					saveState() {
						this.n.store(
							this.experimentalIndexStorageId,
							this.serializedState(),
							s.StorageScope.WORKSPACE,
							s.StorageTarget.MACHINE,
						);
					}
				};
				(e.$zDc = $),
					(e.$zDc =
						$ =
						y =
							Ne(
								[
									j(1, r.$Li),
									j(2, s.$lq),
									j(3, g.$K1),
									j(4, C.$gj),
									j(5, u.$uZ),
									j(6, d.$6j),
									j(7, m.$Xxb),
									j(8, a.$7rb),
									j(9, c.$iP),
									j(10, h.$km),
									j(11, b.$Y9b),
									j(12, l.$Uyb),
								],
								$,
							));
			},
		),
		