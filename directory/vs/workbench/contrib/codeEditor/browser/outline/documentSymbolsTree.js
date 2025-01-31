import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/browser/dom.js';
import '../../../../../base/browser/ui/highlightedlabel/highlightedLabel.js';
import '../../../../../base/common/filters.js';
import '../../../../../editor/common/core/range.js';
import '../../../../../editor/common/languages.js';
import '../../../../../editor/contrib/documentSymbols/browser/outlineModel.js';
import '../../../../../nls.js';
import '../../../../../base/browser/ui/iconLabel/iconLabel.js';
import '../../../../../platform/configuration/common/configuration.js';
import '../../../../../platform/markers/common/markers.js';
import '../../../../../platform/theme/common/themeService.js';
import '../../../../../platform/theme/common/colorRegistry.js';
import '../../../../../editor/common/services/textResourceConfiguration.js';
import '../../../../services/outline/browser/outline.js';
import '../../../../../base/common/themables.js';
import '../../../../../base/browser/window.js';
import '../../../../../css!vs/workbench/contrib/codeEditor/browser/outline/documentSymbolsTree.js';
import '../../../../../editor/contrib/symbolIcons/browser/symbolIcons.js';
define(
			de[3518],
			he([
				1, 0, 7, 410, 132, 17, 74, 204, 4, 325, 10, 90, 35, 51, 125, 475, 26,
				75, 2401, 1205,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*highlightedLabel*/,
 w /*filters*/,
 E /*range*/,
 C /*languages*/,
 d /*outlineModel*/,
 m /*nls*/,
 r /*iconLabel*/,
 u /*configuration*/,
 a /*markers*/,
 h /*themeService*/,
 c /*colorRegistry*/,
 n /*textResourceConfiguration*/,
 g /*outline*/,
 p /*themables*/,
 o /*window*/) {
				"use strict";
				var f;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ZYc =
						e.$YYc =
						e.$XYc =
						e.$WYc =
						e.$VYc =
						e.$UYc =
						e.$TYc =
						e.$SYc =
							void 0),
					(t = mt(t));
				class b {
					getKeyboardNavigationLabel(L) {
						return L instanceof d.$7Db ? L.label : L.symbol.name;
					}
				}
				e.$SYc = b;
				class s {
					constructor(L) {
						this.c = L;
					}
					getWidgetAriaLabel() {
						return this.c;
					}
					getAriaLabel(L) {
						return L instanceof d.$7Db
							? L.label
							: (0, C.$hM)(L.symbol.name, L.symbol.kind);
					}
				}
				e.$TYc = s;
				class l {
					getId(L) {
						return L.id;
					}
				}
				e.$UYc = l;
				class y {
					static {
						this.id = "DocumentSymbolGroupTemplate";
					}
					constructor(L, D) {
						(this.labelContainer = L), (this.label = D);
					}
					dispose() {
						this.label.dispose();
					}
				}
				class $ {
					static {
						this.id = "DocumentSymbolTemplate";
					}
					constructor(L, D, M, N) {
						(this.container = L),
							(this.iconLabel = D),
							(this.iconClass = M),
							(this.decoration = N);
					}
				}
				class v {
					getHeight(L) {
						return 22;
					}
					getTemplateId(L) {
						return L instanceof d.$7Db ? y.id : $.id;
					}
				}
				e.$VYc = v;
				class S {
					constructor() {
						this.templateId = y.id;
					}
					renderTemplate(L) {
						const D = t.$(".outline-element-label");
						return (
							L.classList.add("outline-element"),
							t.$fhb(L, D),
							new y(D, new i.$Wob(D))
						);
					}
					renderElement(L, D, M) {
						M.label.set(L.element.label, (0, w.$3k)(L.filterData));
					}
					disposeTemplate(L) {
						L.dispose();
					}
				}
				e.$WYc = S;
				let I = class {
					constructor(L, D, M, N) {
						(this.c = L), (this.d = M), (this.e = N), (this.templateId = $.id);
					}
					renderTemplate(L) {
						L.classList.add("outline-element");
						const D = new r.$Xob(L, { supportHighlights: !0 }),
							M = t.$(".outline-element-icon"),
							N = t.$(".outline-element-decoration");
						return L.prepend(M), L.appendChild(N), new $(L, D, M, N);
					}
					renderElement(L, D, M) {
						const { element: N } = L,
							A = ["nowrap"],
							R = {
								matches: (0, w.$3k)(L.filterData),
								labelEscapeNewLines: !0,
								extraClasses: A,
								title: (0, m.localize)(
									4886,
									null,
									N.symbol.name,
									C.$gM[N.symbol.kind],
								),
							};
						this.d.getValue(g.OutlineConfigKeys.icons) &&
							((M.iconClass.className = ""),
							M.iconClass.classList.add(
								"outline-element-icon",
								"inline",
								...p.ThemeIcon.asClassNameArray(
									C.SymbolKinds.toIcon(N.symbol.kind),
								),
							)),
							N.symbol.tags.indexOf(C.SymbolTag.Deprecated) >= 0 &&
								(A.push("deprecated"), (R.matches = [])),
							M.iconLabel.setLabel(N.symbol.name, N.symbol.detail, R),
							this.c && this.f(N, M);
					}
					f(L, D) {
						if (!L.marker) {
							t.hide(D.decoration),
								D.container.style.removeProperty("--outline-element-color");
							return;
						}
						const { count: M, topSev: N } = L.marker,
							A = this.e
								.getColorTheme()
								.getColor(N === a.MarkerSeverity.Error ? c.$TS : c.$US),
							R = A ? A.toString() : "inherit",
							O = this.d.getValue("problems.visibility"),
							B = this.d.getValue(g.OutlineConfigKeys.problemsColors);
						if (
							(!O || !B
								? D.container.style.removeProperty("--outline-element-color")
								: D.container.style.setProperty("--outline-element-color", R),
							O === void 0)
						)
							return;
						!this.d.getValue(g.OutlineConfigKeys.problemsBadges) || !O
							? t.hide(D.decoration)
							: M > 0
								? (t.show(D.decoration),
									D.decoration.classList.remove("bubble"),
									(D.decoration.innerText = M < 10 ? M.toString() : "+9"),
									(D.decoration.title =
										M === 1
											? (0, m.localize)(4887, null)
											: (0, m.localize)(4888, null, M)),
									D.decoration.style.setProperty("--outline-element-color", R))
								: (t.show(D.decoration),
									D.decoration.classList.add("bubble"),
									(D.decoration.innerText = "\uEA71"),
									(D.decoration.title = (0, m.localize)(4889, null)),
									D.decoration.style.setProperty("--outline-element-color", R));
					}
					disposeTemplate(L) {
						L.iconLabel.dispose();
					}
				};
				(e.$XYc = I), (e.$XYc = I = Ne([j(2, u.$gj), j(3, h.$iP)], I));
				let T = class {
					static {
						f = this;
					}
					static {
						this.kindToConfigName = Object.freeze({
							[C.SymbolKind.File]: "showFiles",
							[C.SymbolKind.Module]: "showModules",
							[C.SymbolKind.Namespace]: "showNamespaces",
							[C.SymbolKind.Package]: "showPackages",
							[C.SymbolKind.Class]: "showClasses",
							[C.SymbolKind.Method]: "showMethods",
							[C.SymbolKind.Property]: "showProperties",
							[C.SymbolKind.Field]: "showFields",
							[C.SymbolKind.Constructor]: "showConstructors",
							[C.SymbolKind.Enum]: "showEnums",
							[C.SymbolKind.Interface]: "showInterfaces",
							[C.SymbolKind.Function]: "showFunctions",
							[C.SymbolKind.Variable]: "showVariables",
							[C.SymbolKind.Constant]: "showConstants",
							[C.SymbolKind.String]: "showStrings",
							[C.SymbolKind.Number]: "showNumbers",
							[C.SymbolKind.Boolean]: "showBooleans",
							[C.SymbolKind.Array]: "showArrays",
							[C.SymbolKind.Object]: "showObjects",
							[C.SymbolKind.Key]: "showKeys",
							[C.SymbolKind.Null]: "showNull",
							[C.SymbolKind.EnumMember]: "showEnumMembers",
							[C.SymbolKind.Struct]: "showStructs",
							[C.SymbolKind.Event]: "showEvents",
							[C.SymbolKind.Operator]: "showOperators",
							[C.SymbolKind.TypeParameter]: "showTypeParameters",
						});
					}
					constructor(L, D) {
						(this.c = L), (this.d = D);
					}
					filter(L) {
						const D = d.$8Db.get(L);
						if (!(L instanceof d.$6Db)) return !0;
						const M = f.kindToConfigName[L.symbol.kind],
							N = `${this.c}.${M}`;
						return this.d.getValue(D?.uri, N);
					}
				};
				(e.$YYc = T), (e.$YYc = T = f = Ne([j(1, n.$XO)], T));
				class P {
					constructor() {
						this.c = new t.$fgb(
							o.$Bfb,
							() => new Intl.Collator(void 0, { numeric: !0 }),
						);
					}
					compareByPosition(L, D) {
						return L instanceof d.$7Db && D instanceof d.$7Db
							? L.order - D.order
							: L instanceof d.$6Db && D instanceof d.$6Db
								? E.$iL.compareRangesUsingStarts(
										L.symbol.range,
										D.symbol.range,
									) || this.c.value.compare(L.symbol.name, D.symbol.name)
								: 0;
					}
					compareByType(L, D) {
						return L instanceof d.$7Db && D instanceof d.$7Db
							? L.order - D.order
							: L instanceof d.$6Db && D instanceof d.$6Db
								? L.symbol.kind - D.symbol.kind ||
									this.c.value.compare(L.symbol.name, D.symbol.name)
								: 0;
					}
					compareByName(L, D) {
						return L instanceof d.$7Db && D instanceof d.$7Db
							? L.order - D.order
							: L instanceof d.$6Db && D instanceof d.$6Db
								? this.c.value.compare(L.symbol.name, D.symbol.name) ||
									E.$iL.compareRangesUsingStarts(L.symbol.range, D.symbol.range)
								: 0;
					}
				}
				e.$ZYc = P;
			},
		)
