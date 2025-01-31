import '../../../../../require.js';
import '../../../../../exports.js';
import '../common/callHierarchy.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/filters.js';
import '../../../../base/browser/ui/iconLabel/iconLabel.js';
import '../../../../editor/common/languages.js';
import '../../../../base/common/strings.js';
import '../../../../editor/common/core/range.js';
import '../../../../nls.js';
import '../../../../base/common/themables.js';
define(
			de[3006],
			he([1, 0, 978, 33, 132, 325, 74, 37, 17, 4, 26]),
			function (ce /*require*/,
 e /*exports*/,
 t /*callHierarchy*/,
 i /*cancellation*/,
 w /*filters*/,
 E /*iconLabel*/,
 C /*languages*/,
 d /*strings*/,
 m /*range*/,
 r /*nls*/,
 u /*themables*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$IYc =
						e.$HYc =
						e.$GYc =
						e.$FYc =
						e.$EYc =
						e.$DYc =
						e.Call =
							void 0);
				class a {
					constructor(s, l, y, $) {
						(this.item = s),
							(this.locations = l),
							(this.model = y),
							(this.parent = $);
					}
					static compare(s, l) {
						let y = (0, d.$Ff)(s.item.uri.toString(), l.item.uri.toString());
						return (
							y === 0 &&
								(y = m.$iL.compareRangesUsingStarts(
									s.item.range,
									l.item.range,
								)),
							y
						);
					}
				}
				e.Call = a;
				class h {
					constructor(s) {
						this.getDirection = s;
					}
					hasChildren() {
						return !0;
					}
					async getChildren(s) {
						if (s instanceof t.$P1)
							return s.roots.map(($) => new a($, void 0, s, void 0));
						const { model: l, item: y } = s;
						return this.getDirection() === t.CallHierarchyDirection.CallsFrom
							? (await l.resolveOutgoingCalls(y, i.CancellationToken.None)).map(
									($) =>
										new a(
											$.to,
											$.fromRanges.map((v) => ({ range: v, uri: y.uri })),
											l,
											s,
										),
								)
							: (await l.resolveIncomingCalls(y, i.CancellationToken.None)).map(
									($) =>
										new a(
											$.from,
											$.fromRanges.map((v) => ({ range: v, uri: $.from.uri })),
											l,
											s,
										),
								);
					}
				}
				e.$DYc = h;
				class c {
					compare(s, l) {
						return a.compare(s, l);
					}
				}
				e.$EYc = c;
				class n {
					constructor(s) {
						this.getDirection = s;
					}
					getId(s) {
						let l =
							this.getDirection() +
							JSON.stringify(s.item.uri) +
							JSON.stringify(s.item.range);
						return s.parent && (l += this.getId(s.parent)), l;
					}
				}
				e.$FYc = n;
				class g {
					constructor(s, l) {
						(this.icon = s), (this.label = l);
					}
				}
				class p {
					constructor() {
						this.templateId = p.id;
					}
					static {
						this.id = "CallRenderer";
					}
					renderTemplate(s) {
						s.classList.add("callhierarchy-element");
						const l = document.createElement("div");
						s.appendChild(l);
						const y = new E.$Xob(s, { supportHighlights: !0 });
						return new g(l, y);
					}
					renderElement(s, l, y) {
						const { element: $, filterData: v } = s,
							S = $.item.tags?.includes(C.SymbolTag.Deprecated);
						(y.icon.className = ""),
							y.icon.classList.add(
								"inline",
								...u.ThemeIcon.asClassNameArray(
									C.SymbolKinds.toIcon($.item.kind),
								),
							),
							y.label.setLabel($.item.name, $.item.detail, {
								labelEscapeNewLines: !0,
								matches: (0, w.$3k)(v),
								strikethrough: S,
							});
					}
					disposeTemplate(s) {
						s.label.dispose();
					}
				}
				e.$GYc = p;
				class o {
					getHeight(s) {
						return 22;
					}
					getTemplateId(s) {
						return p.id;
					}
				}
				e.$HYc = o;
				class f {
					constructor(s) {
						this.getDirection = s;
					}
					getWidgetAriaLabel() {
						return (0, r.localize)(4537, null);
					}
					getAriaLabel(s) {
						return this.getDirection() === t.CallHierarchyDirection.CallsFrom
							? (0, r.localize)(4538, null, s.item.name)
							: (0, r.localize)(4539, null, s.item.name);
					}
				}
				e.$IYc = f;
			},
		)
