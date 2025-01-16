define(
			de[3967],
			he([1, 0, 85, 25, 42, 241, 22, 124, 90]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$H8b = void 0);
				let r = class {
					constructor(a, h, c, n, g, p) {
						(this.a = a),
							(this.b = h),
							(this.c = c),
							(this.d = n),
							(this.e = g),
							(this.f = p);
					}
					async call(a, h, c, n) {}
					async finish(a, h, c, n) {
						if (!h)
							throw new Error(
								"No edit parameters provided. Need to give at least the relative workspace path.",
							);
						if (h.relativeWorkspacePath === void 0)
							throw new Error("Need to give the path to know where to edit.");
						const g = await this.d.getMagicURIForText(h.relativeWorkspacePath);
						if (!g)
							throw new Error(
								`Could not find file ${h.relativeWorkspacePath} in the workspace.`,
							);
						let p;
						try {
							p = await this.c.createModelReference(g);
							const f = p.object.textEditorModel
									.getValue()
									.split(p.object.textEditorModel.getEOL()),
								b = [];
							let s = null,
								l = null;
							for (const y of f)
								y.includes("@cursor-agent:test-begin")
									? ((s = y.split("@cursor-agent:test-begin:")[1].trim()),
										(l = ""))
									: y.includes("@cursor-agent:test-end")
										? (s &&
												l &&
												b.push({
													name: s,
													lines: l.split(p.object.textEditorModel.getEOL()),
												}),
											(s = null),
											(l = null))
										: s &&
											l !== null &&
											(l += y + p.object.textEditorModel.getEOL());
							return new d.$Ez({ tests: b });
						} finally {
							p?.dispose();
						}
					}
				};
				(e.$H8b = r),
					(e.$H8b = r =
						Ne(
							[
								j(0, t.$kZ),
								j(1, i.$Vi),
								j(2, w.$MO),
								j(3, E.$q8b),
								j(4, C.$ll),
								j(5, m.$aM),
							],
							r,
						));
			},
		),
		