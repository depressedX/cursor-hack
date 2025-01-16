define(
			de[379],
			he([1, 0, 229, 33, 103, 221, 743, 5, 259, 185]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$yqc =
						e.$xqc =
						e.$wqc =
						e.$vqc =
						e.$uqc =
						e.$tqc =
						e.$sqc =
							void 0),
					(e.$sqc = (0, d.$Mi)("testService"));
				const u = (o) =>
					!w.Iterable.some(o.rootItems, (f) => f.children.size > 0);
				e.$tqc = u;
				const a = (o, f) => {
					if ((typeof f == "string" && (f = m.$k4.fromString(f)), f.isRoot))
						return { controller: f.toString() };
					const b = { $mid: E.MarshalledId.TestItemContext, tests: [] };
					for (const s of f.idsFromRoot())
						if (!s.isRoot) {
							const l = o.getNodeById(s.toString());
							l && b.tests.push(l);
						}
					return b;
				};
				e.$uqc = a;
				const h = async (o, f, b = i.CancellationToken.None) => {
					const s = [...m.$k4.fromString(f).idsFromRoot()];
					let l = 0;
					for (let y = s.length - 1; !b.isCancellationRequested && y >= l; ) {
						const $ = s[y].toString(),
							v = o.getNodeById($);
						if (!v) {
							y--;
							continue;
						}
						if (y === s.length - 1) return v;
						v.children.has(s[y + 1].toString()) || (await o.expand($, 0)),
							(l = y + 1),
							(y = s.length - 1);
					}
				};
				e.$vqc = h;
				const c = (o, f) => {
						if (f.item.busy)
							return new Promise((b) => {
								const s = o.onDidProcessDiff(() => {
									o.collection.getNodeById(f.item.extId)?.item.busy !== !0 &&
										(b(), s.dispose());
								});
							});
					},
					n = async function* (o, f, b, s = !0) {
						for (const l of o.collection.all)
							l.item.uri &&
								(f.extUri.isEqual(b, l.item.uri) && (yield l),
								f.extUri.isEqualOrParent(b, l.item.uri) &&
									(l.expand === r.TestItemExpandState.Expandable &&
										(await o.collection.expand(l.item.extId, 1)),
									s && (await c(o, l))));
					};
				e.$wqc = n;
				const g = async function* (o, f, b, s = !0) {
					const l = [o.collection.rootIds];
					for (; l.length; )
						for (const y of l.pop()) {
							const $ = o.collection.getNodeById(y);
							$ &&
								($.item.uri && f.extUri.isEqualOrParent($.item.uri, b)
									? yield $
									: (!$.item.uri || f.extUri.isEqualOrParent(b, $.item.uri)) &&
										($.expand === r.TestItemExpandState.Expandable &&
											(await o.collection.expand($.item.extId, 1)),
										s && (await c(o, $)),
										l.push($.children.values())));
						}
				};
				e.$xqc = g;
				const p = (o, f) => {
					if (f.length < 2) return f;
					const b = new C.$j4();
					for (const y of f) b.insert(m.$k4.fromString(y.item.extId).path, y);
					const s = [],
						l = (y, $) => {
							if ($.value) return $.value;
							(0, t.$ld)(!!$.children, "expect to have children");
							const v = [];
							for (const [T, P] of $.children) {
								y.push(T);
								const k = l(y, P);
								k && v.push(k), y.pop();
							}
							if (!v.length) return;
							const S = new m.$k4(y),
								I = o.getNodeById(S.toString());
							if (I?.children.size === v.length) return I;
							s.push(...v);
						};
					for (const [y, $] of b.entries) {
						const v = l([y], $);
						v && s.push(v);
					}
					return s;
				};
				e.$yqc = p;
			},
		),
		