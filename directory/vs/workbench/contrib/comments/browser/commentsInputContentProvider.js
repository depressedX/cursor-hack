define(
			de[3768],
			he([1, 0, 3, 23, 65, 98, 61, 67, 42, 549, 846]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$mSc = void 0);
				let a = class extends t.$1c {
					static {
						this.ID = "comments.input.contentProvider";
					}
					constructor(c, n, g, p) {
						super(),
							(this.a = g),
							(this.b = p),
							this.D(
								c.registerTextModelContentProvider(
									i.Schemas.commentsInput,
									this,
								),
							),
							this.D(
								n.registerCodeEditorOpenHandler(async (o, f, b) =>
									!(f instanceof u.$k3b) ||
									f.getModel()?.uri.toString() !== o.resource.toString()
										? null
										: (o.options &&
												(0, r.applyTextEditorOptions)(
													o.options,
													f,
													E.ScrollType.Immediate,
												),
											f),
								),
							);
					}
					async provideTextContent(c) {
						return (
							this.a.getModel(c) ??
							this.a.createModel("", this.b.createById("markdown"), c)
						);
					}
				};
				(e.$mSc = a),
					(e.$mSc = a =
						Ne([j(0, m.$MO), j(1, w.$dtb), j(2, d.$QO), j(3, C.$nM)], a));
			},
		),
		