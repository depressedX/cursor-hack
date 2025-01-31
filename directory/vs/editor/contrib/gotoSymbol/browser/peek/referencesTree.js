import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/browser/dom.js';
import '../../../../../base/browser/ui/countBadge/countBadge.js';
import '../../../../../base/browser/ui/highlightedlabel/highlightedLabel.js';
import '../../../../../base/browser/ui/iconLabel/iconLabel.js';
import '../../../../../base/common/filters.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../base/common/resources.js';
import '../../../../common/services/resolverService.js';
import '../../../../../nls.js';
import '../../../../../platform/instantiation/common/instantiation.js';
import '../../../../../platform/keybinding/common/keybinding.js';
import '../../../../../platform/label/common/label.js';
import '../../../../../platform/theme/browser/defaultStyles.js';
import '../referencesModel.js';
define(
			de[2833],
			he([1, 0, 7, 495, 410, 325, 132, 3, 19, 42, 4, 5, 39, 73, 106, 541]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*countBadge*/,
 w /*highlightedLabel*/,
 E /*iconLabel*/,
 C /*filters*/,
 d /*lifecycle*/,
 m /*resources*/,
 r /*resolverService*/,
 u /*nls*/,
 a /*instantiation*/,
 h /*keybinding*/,
 c /*label*/,
 n /*defaultStyles*/,
 g /*referencesModel*/) {
				"use strict";
				var p;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$wNb =
						e.$vNb =
						e.$uNb =
						e.$tNb =
						e.$sNb =
						e.$rNb =
						e.$qNb =
							void 0),
					(t = mt(t));
				let o = class {
					constructor(T) {
						this.a = T;
					}
					hasChildren(T) {
						return T instanceof g.$pNb || T instanceof g.$oNb;
					}
					getChildren(T) {
						if (T instanceof g.$pNb) return T.groups;
						if (T instanceof g.$oNb)
							return T.resolve(this.a).then((P) => P.children);
						throw new Error("bad tree");
					}
				};
				(e.$qNb = o), (e.$qNb = o = Ne([j(0, r.$MO)], o));
				class f {
					getHeight() {
						return 23;
					}
					getTemplateId(T) {
						return T instanceof g.$oNb ? y.id : v.id;
					}
				}
				e.$rNb = f;
				let b = class {
					constructor(T) {
						this.a = T;
					}
					getKeyboardNavigationLabel(T) {
						if (T instanceof g.$mNb) {
							const P = T.parent.getPreview(T)?.preview(T.range);
							if (P) return P.value;
						}
						return (0, m.$kh)(T.uri);
					}
					mightProducePrintableCharacter(T) {
						return this.a.mightProducePrintableCharacter(T);
					}
				};
				(e.$sNb = b), (e.$sNb = b = Ne([j(0, h.$uZ)], b));
				class s {
					getId(T) {
						return T instanceof g.$mNb ? T.id : T.uri;
					}
				}
				e.$tNb = s;
				let l = class extends d.$1c {
					constructor(T, P) {
						super(), (this.a = P);
						const k = document.createElement("div");
						k.classList.add("reference-file"),
							(this.file = this.D(new E.$Xob(k, { supportHighlights: !0 }))),
							(this.badge = new i.$Hob(t.$fhb(k, t.$(".count")), {}, n.$zyb)),
							T.appendChild(k);
					}
					set(T, P) {
						const k = (0, m.$mh)(T.uri);
						this.file.setLabel(
							this.a.getUriBasenameLabel(T.uri),
							this.a.getUriLabel(k, { relative: !0 }),
							{ title: this.a.getUriLabel(T.uri), matches: P },
						);
						const L = T.children.length;
						this.badge.setCount(L),
							L > 1
								? this.badge.setTitleFormat((0, u.localize)(1146, null, L))
								: this.badge.setTitleFormat((0, u.localize)(1147, null, L));
					}
				};
				l = Ne([j(1, c.$3N)], l);
				let y = class {
					static {
						p = this;
					}
					static {
						this.id = "FileReferencesRenderer";
					}
					constructor(T) {
						(this.a = T), (this.templateId = p.id);
					}
					renderTemplate(T) {
						return this.a.createInstance(l, T);
					}
					renderElement(T, P, k) {
						k.set(T.element, (0, C.$3k)(T.filterData));
					}
					disposeTemplate(T) {
						T.dispose();
					}
				};
				(e.$uNb = y), (e.$uNb = y = p = Ne([j(0, a.$Li)], y));
				class $ extends d.$1c {
					constructor(T) {
						super(), (this.label = this.D(new w.$Wob(T)));
					}
					set(T, P) {
						const k = T.parent.getPreview(T)?.preview(T.range);
						if (!k || !k.value)
							this.label.set(
								`${(0, m.$kh)(T.uri)}:${T.range.startLineNumber + 1}:${T.range.startColumn + 1}`,
							);
						else {
							const { value: L, highlight: D } = k;
							P && !C.FuzzyScore.isDefault(P)
								? (this.label.element.classList.toggle("referenceMatch", !1),
									this.label.set(L, (0, C.$3k)(P)))
								: (this.label.element.classList.toggle("referenceMatch", !0),
									this.label.set(L, [D]));
						}
					}
				}
				class v {
					constructor() {
						this.templateId = v.id;
					}
					static {
						this.id = "OneReferenceRenderer";
					}
					renderTemplate(T) {
						return new $(T);
					}
					renderElement(T, P, k) {
						k.set(T.element, T.filterData);
					}
					disposeTemplate(T) {
						T.dispose();
					}
				}
				e.$vNb = v;
				class S {
					getWidgetAriaLabel() {
						return (0, u.localize)(1148, null);
					}
					getAriaLabel(T) {
						return T.ariaMessage;
					}
				}
				e.$wNb = S;
			},
		)
