import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/browser/ui/tree/tree.js';
import '../../../../../base/common/event.js';
import '../../../../../base/common/iterator.js';
import '../../../../../base/common/marshallingIds.js';
import './testingViewState.js';
import '../../common/testTypes.js';
define(
			de[811],
			he([1, 0, 264, 6, 103, 221, 1265, 185]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$0Kc = e.$9Kc = e.$8Kc = e.$7Kc = void 0);
				let m = 0;
				const r = () => String(m++);
				class u {
					constructor(n, g = null) {
						(this.test = n),
							(this.parent = g),
							(this.e = new i.$re()),
							(this.onChange = this.e.event),
							(this.children = new Set()),
							(this.treeId = r()),
							(this.depth = this.parent ? this.parent.depth + 1 : 0),
							(this.retired = !1),
							(this.state = d.TestResultState.Unset);
					}
					toJSON() {
						if (this.depth === 0)
							return { controllerId: this.test.controllerId };
						const n = {
							$mid: E.MarshalledId.TestItemContext,
							tests: [d.InternalTestItem.serialize(this.test)],
						};
						for (let g = this.parent; g && g.depth > 0; g = g.parent)
							n.tests.unshift(d.InternalTestItem.serialize(g.test));
						return n;
					}
				}
				e.$7Kc = u;
				class a {
					get description() {
						return typeof this.message == "string"
							? this.message
							: this.message.value;
					}
					constructor(n, g) {
						(this.message = n),
							(this.parent = g),
							(this.treeId = r()),
							(this.children = new Set());
					}
				}
				(e.$8Kc = a),
					(e.$9Kc = {
						getId(c) {
							const n =
								c instanceof a
									? "error"
									: c.test.expand === d.TestItemExpandState.NotExpandable
										? !!c.children.size
										: c.test.expand;
							return c.treeId + "\0" + n;
						},
					});
				const h = (c, n, g) => {
					let p;
					if (g === null) {
						const o = [...n];
						if (o.length === 1) return (0, e.$0Kc)(c, o, o[0]);
						p = o;
					} else p = g.children;
					return w.Iterable.map(p, (o) =>
						o instanceof a
							? { element: o }
							: {
									element: o,
									collapsible:
										o.test.expand !== d.TestItemExpandState.NotExpandable,
									collapsed: o.test.item.error
										? t.ObjectTreeElementCollapseState.PreserveOrExpanded
										: ((0, C.$6Kc)(c, o.test.item.extId) ?? o.depth > 0)
											? t.ObjectTreeElementCollapseState.PreserveOrCollapsed
											: t.ObjectTreeElementCollapseState.PreserveOrExpanded,
									children: (0, e.$0Kc)(c, n, o),
								},
					);
				};
				e.$0Kc = h;
			},
		),
		