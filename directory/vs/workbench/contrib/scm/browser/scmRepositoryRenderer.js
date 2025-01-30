import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/observable.js';
import '../../../../base/browser/dom.js';
import '../common/scm.js';
import '../../../../base/browser/ui/countBadge/countBadge.js';
import '../../../../platform/contextview/browser/contextView.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../base/common/actions.js';
import './util.js';
import '../../../../platform/theme/browser/defaultStyles.js';
import '../../../../platform/actions/browser/toolbar.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/hover/browser/hover.js';
import '../../../../base/browser/ui/hover/hoverDelegateFactory.js';
import '../../../../css!vs/workbench/contrib/scm/browser/media/scm.js';
define(
			de[1257],
			he([
				1, 0, 3, 77, 7, 258, 495, 49, 31, 50, 614, 106, 173, 11, 8, 39, 32, 72,
				95, 652,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*lifecycle*/,
 i /*observable*/,
 w /*dom*/,
 E /*scm*/,
 C /*countBadge*/,
 d /*contextView*/,
 m /*commands*/,
 r /*actions*/,
 u /*util*/,
 a /*defaultStyles*/,
 h /*toolbar*/,
 c /*actions*/,
 n /*contextkey*/,
 g /*keybinding*/,
 p /*telemetry*/,
 o /*hover*/,
 f /*hoverDelegateFactory*/) {
				"use strict";
				var b;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$OPc = e.$NPc = void 0);
				class s extends r.$sj {
					constructor($) {
						super(), (this.a = $);
					}
					async q($, v) {
						if (!($ instanceof c.$2X)) return super.q($, v);
						const S = this.a().map((T) => T.provider),
							I = S.some((T) => T === v) ? S : [v];
						await $.run(...I);
					}
				}
				e.$NPc = s;
				let l = class {
					static {
						b = this;
					}
					static {
						this.TEMPLATE_ID = "repository";
					}
					get templateId() {
						return b.TEMPLATE_ID;
					}
					constructor($, v, S, I, T, P, k, L, D, M) {
						(this.a = $),
							(this.b = v),
							(this.d = S),
							(this.f = I),
							(this.g = T),
							(this.h = P),
							(this.i = k),
							(this.j = L),
							(this.k = D),
							(this.l = M);
					}
					renderTemplate($) {
						$.classList.contains("monaco-tl-contents") &&
							$.parentElement.parentElement
								.querySelector(".monaco-tl-twistie")
								.classList.add("force-twistie");
						const v = (0, w.$fhb)($, (0, w.$)(".scm-provider")),
							S = (0, w.$fhb)(v, (0, w.$)(".label")),
							I = this.h.setupManagedHover((0, f.$cib)("mouse"), S, "", {}),
							T = (0, w.$fhb)(S, (0, w.$)("span.name")),
							P = (0, w.$fhb)(S, (0, w.$)("span.description")),
							k = (0, w.$fhb)(v, (0, w.$)(".actions")),
							L = new h.$Syb(
								k,
								{ actionViewItemProvider: this.b, resetMenu: this.a },
								this.j,
								this.f,
								this.g,
								this.i,
								this.d,
								this.l,
							),
							D = (0, w.$fhb)(v, (0, w.$)(".count")),
							M = new C.$Hob(D, {}, a.$zyb),
							N = L.onDidChangeDropdownVisibility((R) =>
								v.classList.toggle("active", R),
							),
							A = (0, t.$Xc)(I, N, L);
						return {
							label: S,
							labelCustomHover: I,
							name: T,
							description: P,
							countContainer: D,
							count: M,
							toolBar: L,
							elementDisposables: new t.$Zc(),
							templateDisposable: A,
						};
					}
					renderElement($, v, S, I) {
						const T = (0, u.$oPc)($) ? $ : $.element;
						(S.name.textContent = T.provider.name),
							T.provider.rootUri
								? (S.labelCustomHover.update(
										`${T.provider.label}: ${T.provider.rootUri.fsPath}`,
									),
									(S.description.textContent = T.provider.label))
								: (S.labelCustomHover.update(T.provider.label),
									(S.description.textContent = ""));
						let P = [],
							k = [],
							L = [];
						const D = () => {
							S.toolBar.setActions([...P, ...k], L);
						};
						S.elementDisposables.add(
							(0, i.autorun)((A) => {
								(P = (T.provider.statusBarCommands.read(A) ?? []).map(
									(O) => new u.$FPc(O, this.d),
								)),
									D();
							}),
						),
							S.elementDisposables.add(
								(0, i.autorun)((A) => {
									const R = T.provider.count.read(A) ?? (0, u.$IPc)(T.provider);
									S.countContainer.setAttribute("data-count", String(R)),
										S.count.setCount(R);
								}),
							);
						const M = this.k.menus.getRepositoryMenus(T.provider),
							N =
								this.a === c.$XX.SCMTitle ? M.titleMenu.menu : M.repositoryMenu;
						S.elementDisposables.add(
							(0, u.$CPc)(N, (A, R) => {
								(k = A), (L = R), D();
							}),
						),
							(S.toolBar.context = T.provider);
					}
					renderCompressedElements() {
						throw new Error("Should never happen since node is incompressible");
					}
					disposeElement($, v, S) {
						S.elementDisposables.clear();
					}
					disposeTemplate($) {
						$.elementDisposables.dispose(), $.templateDisposable.dispose();
					}
				};
				(e.$OPc = l),
					(e.$OPc =
						l =
						b =
							Ne(
								[
									j(2, m.$ek),
									j(3, n.$6j),
									j(4, d.$Xxb),
									j(5, o.$Uyb),
									j(6, g.$uZ),
									j(7, c.$YX),
									j(8, E.$d7),
									j(9, p.$km),
								],
								l,
							));
			},
		),
		