define(de[264], he([1, 0, 431]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$npb =
					e.$mpb =
					e.$lpb =
					e.TreeDragOverBubble =
					e.TreeMouseEventTarget =
					e.ObjectTreeElementCollapseState =
					e.TreeVisibility =
						void 0);
			var i;
			(function (r) {
				(r[(r.Hidden = 0)] = "Hidden"),
					(r[(r.Visible = 1)] = "Visible"),
					(r[(r.Recurse = 2)] = "Recurse");
			})(i || (e.TreeVisibility = i = {}));
			var w;
			(function (r) {
				(r[(r.Expanded = 0)] = "Expanded"),
					(r[(r.Collapsed = 1)] = "Collapsed"),
					(r[(r.PreserveOrExpanded = 2)] = "PreserveOrExpanded"),
					(r[(r.PreserveOrCollapsed = 3)] = "PreserveOrCollapsed");
			})(w || (e.ObjectTreeElementCollapseState = w = {}));
			var E;
			(function (r) {
				(r[(r.Unknown = 0)] = "Unknown"),
					(r[(r.Twistie = 1)] = "Twistie"),
					(r[(r.Element = 2)] = "Element"),
					(r[(r.Filter = 3)] = "Filter");
			})(E || (e.TreeMouseEventTarget = E = {}));
			var C;
			(function (r) {
				(r[(r.Down = 0)] = "Down"), (r[(r.Up = 1)] = "Up");
			})(C || (e.TreeDragOverBubble = C = {})),
				(e.$lpb = {
					acceptBubbleUp() {
						return { accept: !0, bubble: C.Up };
					},
					acceptBubbleDown(r = !1) {
						return { accept: !0, bubble: C.Down, autoExpand: r };
					},
					acceptCopyBubbleUp() {
						return {
							accept: !0,
							bubble: C.Up,
							effect: {
								type: t.ListDragOverEffectType.Copy,
								position: t.ListDragOverEffectPosition.Over,
							},
						};
					},
					acceptCopyBubbleDown(r = !1) {
						return {
							accept: !0,
							bubble: C.Down,
							effect: {
								type: t.ListDragOverEffectType.Copy,
								position: t.ListDragOverEffectPosition.Over,
							},
							autoExpand: r,
						};
					},
				});
			class d extends Error {
				constructor(u, a) {
					super(`TreeError [${u}] ${a}`);
				}
			}
			e.$mpb = d;
			class m {
				constructor(u) {
					(this.a = u), (this.b = new WeakMap());
				}
				map(u) {
					let a = this.b.get(u);
					return a || ((a = this.a(u)), this.b.set(u, a)), a;
				}
			}
			e.$npb = m;
		}),
		