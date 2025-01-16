define(
			de[3187],
			he([1, 0, 1003, 33, 132, 325, 74, 37, 17, 4, 26]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$QYc =
						e.$PYc =
						e.$OYc =
						e.$NYc =
						e.$MYc =
						e.$LYc =
						e.Type =
							void 0);
				class a {
					constructor(s, l, y) {
						(this.item = s), (this.model = l), (this.parent = y);
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
				e.Type = a;
				class h {
					constructor(s) {
						this.getDirection = s;
					}
					hasChildren() {
						return !0;
					}
					async getChildren(s) {
						if (s instanceof t.$77)
							return s.roots.map(($) => new a($, s, void 0));
						const { model: l, item: y } = s;
						return this.getDirection() === t.TypeHierarchyDirection.Supertypes
							? (await l.provideSupertypes(y, i.CancellationToken.None)).map(
									($) => new a($, l, s),
								)
							: (await l.provideSubtypes(y, i.CancellationToken.None)).map(
									($) => new a($, l, s),
								);
					}
				}
				e.$LYc = h;
				class c {
					compare(s, l) {
						return a.compare(s, l);
					}
				}
				e.$MYc = c;
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
				e.$NYc = n;
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
						this.id = "TypeRenderer";
					}
					renderTemplate(s) {
						s.classList.add("typehierarchy-element");
						const l = document.createElement("div");
						s.appendChild(l);
						const y = new E.$Xob(s, { supportHighlights: !0 });
						return new g(l, y);
					}
					renderElement(s, l, y) {
						const { element: $, filterData: v } = s,
							S = $.item.tags?.includes(C.SymbolTag.Deprecated);
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
				e.$OYc = p;
				class o {
					getHeight(s) {
						return 22;
					}
					getTemplateId(s) {
						return p.id;
					}
				}
				e.$PYc = o;
				class f {
					constructor(s) {
						this.getDirection = s;
					}
					getWidgetAriaLabel() {
						return (0, r.localize)(11045, null);
					}
					getAriaLabel(s) {
						return this.getDirection() === t.TypeHierarchyDirection.Supertypes
							? (0, r.localize)(11046, null, s.item.name)
							: (0, r.localize)(11047, null, s.item.name);
					}
				}
				e.$QYc = f;
			},
		),
		