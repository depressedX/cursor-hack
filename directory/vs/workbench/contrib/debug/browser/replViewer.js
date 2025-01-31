import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/ui/countBadge/countBadge.js';
import '../../../../base/browser/ui/highlightedlabel/highlightedLabel.js';
import '../../../../base/browser/ui/hover/hoverDelegateFactory.js';
import '../../../../base/browser/ui/list/list.js';
import '../../../../base/common/filters.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/path.js';
import '../../../../base/common/severity.js';
import '../../../../base/common/themables.js';
import '../../../../nls.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/contextview/browser/contextView.js';
import '../../../../platform/hover/browser/hover.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/label/common/label.js';
import '../../../../platform/theme/browser/defaultStyles.js';
import '../../../../platform/theme/common/themeService.js';
import './baseDebugView.js';
import './debugANSIHandling.js';
import './debugIcons.js';
import '../common/debug.js';
import '../common/debugModel.js';
import '../common/replModel.js';
import '../../../services/editor/common/editorService.js';
define(
		de[3824],
		he([
			1, 0, 7, 495, 410, 95, 431, 132, 3, 54, 111, 26, 4, 31, 49, 72, 5, 73,
			106, 35, 629, 3150, 352, 112, 300, 843, 18,
		]),
		function (			ce /*require*/,
			e /*exports*/,
			t /*dom*/,
			i /*countBadge*/,
			w /*highlightedLabel*/,
			E /*hoverDelegateFactory*/,
			C /*list*/,
			d /*filters*/,
			m /*lifecycle*/,
			r /*path*/,
			u /*severity*/,
			a /*themables*/,
			h /*nls*/,
			c /*commands*/,
			n /*contextView*/,
			g /*hover*/,
			p /*instantiation*/,
			o /*label*/,
			f /*defaultStyles*/,
			b /*themeService*/,
			s /*baseDebugView*/,
			l /*debugANSIHandling*/,
			y /*debugIcons*/,
			$ /*debug*/,
			v /*debugModel*/,
			S /*replModel*/,
			I /*editorService*/,
) {
			"use strict";
			var T, P, k;
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$MJc =
					e.$LJc =
					e.$KJc =
					e.$JJc =
					e.$IJc =
					e.$HJc =
					e.$GJc =
					e.$FJc =
					e.$EJc =
						void 0),
				(t = mt(t)),
				(u = xi(u));
			const L = t.$;
			class D {
				static {
					this.ID = "replEvaluationInput";
				}
				get templateId() {
					return D.ID;
				}
				renderTemplate(V) {
					t.$fhb(V, L("span.arrow" + a.ThemeIcon.asCSSSelector(y.$IKb)));
					const G = t.$fhb(V, L(".expression"));
					return { label: new w.$Wob(G) };
				}
				renderElement(V, G, K) {
					const J = V.element;
					K.label.set(J.value, (0, d.$3k)(V.filterData));
				}
				disposeTemplate(V) {
					V.label.dispose();
				}
			}
			e.$EJc = D;
			let M = class {
				static {
					T = this;
				}
				static {
					this.ID = "replGroup";
				}
				constructor(V, G, K) {
					(this.a = V), (this.b = G), (this.c = K);
				}
				get templateId() {
					return T.ID;
				}
				renderTemplate(V) {
					V.classList.add("group");
					const G = t.$fhb(V, L(".output.expression.value-and-source")),
						K = t.$fhb(G, L("span.label")),
						J = this.c.createInstance(H, G);
					return { label: K, source: J };
				}
				renderElement(V, G, K) {
					const J = V.element;
					t.$9fb(K.label);
					const W = (0, l.$BJc)(J.name, this.a, this.b, void 0);
					K.label.appendChild(W), K.source.setSource(J.sourceData);
				}
				disposeTemplate(V) {
					V.source.dispose();
				}
			};
			(e.$FJc = M), (e.$FJc = M = T = Ne([j(1, b.$iP), j(2, p.$Li)], M));
			class N {
				static {
					this.ID = "replEvaluationResult";
				}
				get templateId() {
					return N.ID;
				}
				constructor(V, G) {
					(this.a = V), (this.b = G);
				}
				renderTemplate(V) {
					const G = t.$fhb(V, L(".evaluation-result.expression"));
					return {
						value: t.$fhb(G, L("span.value")),
						elementStore: new m.$Zc(),
					};
				}
				renderElement(V, G, K) {
					K.elementStore.clear();
					const J = V.element;
					(0, s.$dIc)(
						K.elementStore,
						J,
						K.value,
						{ colorize: !0, hover: !1, linkDetector: this.a },
						this.b,
					);
				}
				disposeTemplate(V) {
					V.elementStore.dispose();
				}
			}
			e.$GJc = N;
			let A = class {
				static {
					P = this;
				}
				static {
					this.ID = "outputReplElement";
				}
				constructor(V, G, K) {
					(this.a = V), (this.b = G), (this.c = K);
				}
				get templateId() {
					return P.ID;
				}
				renderTemplate(V) {
					const G = Object.create(null);
					V.classList.add("output");
					const K = t.$fhb(V, L(".output.expression.value-and-source"));
					return (
						(G.container = V),
						(G.countContainer = t.$fhb(K, L(".count-badge-wrapper"))),
						(G.count = new i.$Hob(G.countContainer, {}, f.$zyb)),
						(G.value = t.$fhb(K, L("span.value.label"))),
						(G.source = this.c.createInstance(H, K)),
						G
					);
				}
				renderElement({ element: V }, G, K) {
					this.d(V, K),
						(K.elementListener = V.onDidChangeCount(() => this.d(V, K))),
						t.$9fb(K.value),
						(K.value.className = "value"),
						K.value.appendChild(
							(0, l.$BJc)(V.value, this.a, this.b, V.session.root),
						),
						K.value.classList.add(
							V.severity === u.default.Warning
								? "warn"
								: V.severity === u.default.Error
									? "error"
									: V.severity === u.default.Ignore
										? "ignore"
										: "info",
						),
						K.source.setSource(V.sourceData),
						(K.getReplElementSource = () => V.sourceData);
				}
				d(V, G) {
					V.count >= 2
						? (G.count.setCount(V.count), (G.countContainer.hidden = !1))
						: (G.countContainer.hidden = !0);
				}
				disposeTemplate(V) {
					V.source.dispose();
				}
				disposeElement(V, G, K) {
					K.elementListener.dispose();
				}
			};
			(e.$HJc = A), (e.$HJc = A = P = Ne([j(1, b.$iP), j(2, p.$Li)], A));
			let R = class extends s.$gIc {
				static {
					k = this;
				}
				static {
					this.ID = "replVariable";
				}
				get templateId() {
					return k.ID;
				}
				constructor(V, G, K, J, W) {
					super(G, K, W), (this.i = V), (this.j = J);
				}
				renderElement(V, G, K) {
					const J = V.element;
					K.elementDisposable.clear(),
						super.d(J instanceof S.$9Hc ? J.expression : J, V, K);
				}
				f(V, G, K) {
					const J = V instanceof S.$9Hc;
					J || !V.name
						? (G.label.set(""),
							(0, s.$dIc)(
								G.elementDisposable,
								J ? V.expression : V,
								G.value,
								{ colorize: !0, linkDetector: this.i, hover: !1 },
								this.c,
							),
							G.expression.classList.remove("nested-variable"))
						: ((0, s.$eIc)(
								G.elementDisposable,
								this.j,
								this.c,
								V,
								G,
								!0,
								K,
								this.i,
							),
							G.expression.classList.toggle("nested-variable", B(V)));
				}
				g(V) {}
			};
			(e.$IJc = R),
				(e.$IJc =
					R =
					k =
						Ne([j(1, $.$75), j(2, n.$Wxb), j(3, c.$ek), j(4, g.$Uyb)], R));
			class O {
				static {
					this.ID = "rawObject";
				}
				constructor(V, G) {
					(this.a = V), (this.b = G);
				}
				get templateId() {
					return O.ID;
				}
				renderTemplate(V) {
					V.classList.add("output");
					const G = t.$fhb(V, L(".output.expression")),
						K = t.$fhb(G, L("span.name")),
						J = new w.$Wob(K),
						W = t.$fhb(G, L("span.value"));
					return {
						container: V,
						expression: G,
						name: K,
						label: J,
						value: W,
						elementStore: new m.$Zc(),
					};
				}
				renderElement(V, G, K) {
					K.elementStore.clear();
					const J = V.element;
					K.label.set(J.name ? `${J.name}:` : "", (0, d.$3k)(V.filterData)),
						J.name
							? (K.name.textContent = `${J.name}:`)
							: (K.name.textContent = ""),
						(0, s.$dIc)(
							K.elementStore,
							J.value,
							K.value,
							{ linkDetector: this.a, hover: !1 },
							this.b,
						);
				}
				disposeTemplate(V) {
					V.elementStore.dispose(), V.label.dispose();
				}
			}
			e.$JJc = O;
			function B(q) {
				return (
					q instanceof v.$K3 &&
					(q.parent instanceof S.$_Hc || q.parent instanceof v.$K3)
				);
			}
			class U extends C.$Cib {
				constructor(V, G) {
					super(), (this.a = V), (this.b = G);
				}
				getHeight(V) {
					return this.a.getValue("debug").console.wordWrap
						? super.getHeight(V)
						: this.d(V, !0);
				}
				d(V, G = !1) {
					const K = this.b.replConfiguration.lineHeight,
						J = (X) => X.match(/\n/g)?.length ?? 0;
					if (((X) => typeof X.value == "string")(V) && !B(V)) {
						const X = V.value,
							Y =
								J(X) +
								(G ? 0 : Math.floor(X.length / 70)) +
								(V instanceof S.$8Hc ? 0 : 1);
						return Math.max(Y, 1) * K;
					}
					return K;
				}
				getTemplateId(V) {
					return V instanceof v.$K3 || V instanceof S.$9Hc
						? R.ID
						: V instanceof S.$_Hc
							? N.ID
							: V instanceof S.$$Hc
								? D.ID
								: V instanceof S.$8Hc
									? A.ID
									: V instanceof S.$aIc
										? M.ID
										: O.ID;
				}
				hasDynamicHeight(V) {
					return B(V) ? !1 : V.toString().length > 0;
				}
			}
			e.$KJc = U;
			function z(q) {
				return typeof q.getReplElements == "function";
			}
			class F {
				hasChildren(V) {
					return z(V) ? !0 : !!V.hasChildren;
				}
				getChildren(V) {
					return z(V)
						? Promise.resolve(V.getReplElements())
						: Promise.resolve(V.getChildren());
				}
			}
			e.$LJc = F;
			class x {
				getWidgetAriaLabel() {
					return (0, h.localize)(5718, null);
				}
				getAriaLabel(V) {
					return V instanceof v.$K3
						? (0, h.localize)(5719, null, V.name, V.value)
						: V instanceof S.$8Hc || V instanceof S.$$Hc || V instanceof S.$_Hc
							? V.value +
								(V instanceof S.$8Hc && V.count > 1
									? (0, h.localize)(5720, null, V.count)
									: "")
							: V instanceof S.$0Hc
								? (0, h.localize)(5721, null, V.name, V.value)
								: V instanceof S.$aIc
									? (0, h.localize)(5722, null, V.name)
									: "";
				}
			}
			e.$MJc = x;
			let H = class extends m.$1c {
				constructor(V, G, K, J) {
					super(),
						(this.f = K),
						(this.g = J),
						(this.a = t.$fhb(V, L(".source"))),
						this.D(
							t.$0fb(this.a, "click", (W) => {
								W.preventDefault(),
									W.stopPropagation(),
									this.b &&
										this.b.source.openInEditor(G, {
											startLineNumber: this.b.lineNumber,
											startColumn: this.b.column,
											endLineNumber: this.b.lineNumber,
											endColumn: this.b.column,
										});
							}),
						);
				}
				setSource(V) {
					(this.b = V),
						(this.a.textContent = V
							? `${(0, r.$sc)(V.source.name)}:${V.lineNumber}`
							: ""),
						(this.c ??= this.D(
							this.f.setupManagedHover((0, E.$cib)("mouse"), this.a, ""),
						)),
						this.c.update(
							V ? `${this.g.getUriLabel(V.source.uri)}:${V.lineNumber}` : "",
						);
				}
			};
			H = Ne([j(1, I.$IY), j(2, g.$Uyb), j(3, o.$3N)], H);
		},
	)
