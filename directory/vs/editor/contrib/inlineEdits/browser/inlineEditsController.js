define(
			de[1694],
			he([
				1, 0, 3, 77, 319, 542, 755, 104, 391, 69, 1604, 2931, 1693, 10, 8, 5,
				326,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				var o;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Yjc = void 0);
				let f = class extends t.$1c {
					static {
						o = this;
					}
					static {
						this.ID = "editor.contrib.inlineEditsController";
					}
					static get(l) {
						return l.getContribution(o.ID);
					}
					constructor(l, y, $, v, S, I) {
						super(),
							(this.editor = l),
							(this.j = y),
							(this.n = $),
							(this.q = v),
							(this.s = S),
							(this.t = I),
							(this.a = (0, p.$Mwb)("editor.inlineEdits.enabled", !1, this.t)),
							(this.b = (0, E.$Uwb)(this.editor)),
							(this.c = (0, i.derived)(
								this,
								(T) => this.b.cursorSelection.read(T) ?? new d.$kL(1, 1, 1, 1),
							)),
							(this.f = this.q.for(
								this.s.inlineCompletionsProvider,
								"InlineEditsDebounce",
								{ min: 50, max: 50 },
							)),
							(this.model = (0, w.$Yd)(this, (T) => {
								if (!this.a.read(T) || this.b.isReadonly.read(T)) return;
								const P = this.b.model.read(T);
								return P
									? this.j.createInstance(
											(0, C.$Tpb)(a.$Xjc, T),
											P,
											this.b.versionId,
											this.c,
											this.f,
										)
									: void 0;
							})),
							(this.g = (0, i.derivedObservableWithCache)(
								this,
								(T, P) =>
									P || this.model.read(T)?.inlineEdit.read(T) !== void 0,
							)),
							(this.h = (0, w.$Yd)(this, (T) => {
								if (this.g.read(T))
									return this.j.createInstance(
										(0, C.$Tpb)(h.$Wjc, T),
										this.editor,
										this.model.map((P, k) => P?.inlineEdit.read(k)),
										b(
											(P) =>
												this.model.read(P)?.userPrompt ??
												(0, i.observableValue)("empty", ""),
										),
									);
							})),
							this.D(
								(0, p.$Nwb)(
									u.$Sjc,
									this.n,
									(T) => !!this.model.read(T)?.inlineEdit.read(T),
								),
							),
							this.D(
								(0, p.$Nwb)(
									u.$Tjc,
									this.n,
									(T) => !!this.model.read(T)?.isPinned.read(T),
								),
							),
							this.model.recomputeInitiallyAndOnChange(this.B),
							this.h.recomputeInitiallyAndOnChange(this.B);
					}
				};
				(e.$Yjc = f),
					(e.$Yjc =
						f =
						o =
							Ne(
								[
									j(1, g.$Li),
									j(2, n.$6j),
									j(3, m.$PBb),
									j(4, r.$k3),
									j(5, c.$gj),
								],
								f,
							));
				function b(s) {
					return (0, w.$Ud)(
						void 0,
						(l) => s(l).read(l),
						(l, y) => {
							s(void 0).set(l, y);
						},
					);
				}
			},
		),
		