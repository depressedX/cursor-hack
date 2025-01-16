define(
			de[3736],
			he([1, 0, 4, 19, 42, 57, 151, 52, 1892, 53, 121, 9, 41, 110, 62, 22, 73]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Agd = void 0);
				let o = class {
					constructor(b, s, l, y, $, v, S, I, T, P, k) {
						(this.a = b),
							(this.b = s),
							(this.c = l),
							(this.d = y),
							(this.e = S),
							(this.f = I),
							(this.g = T),
							(this.h = P),
							(this.i = k),
							Promise.all([
								$.when(d.LifecyclePhase.Eventually),
								v.whenInstalledExtensionsRegistered(),
							]).then(() => {
								this.j();
							});
					}
					j() {
						if (!this.b.args["prof-startup-prefix"]) return;
						const b = a.URI.file(this.b.args["prof-startup-prefix"]),
							s = (0, i.$mh)(b),
							l = (0, i.$kh)(b),
							y = ["--prof-startup"];
						this.h
							.readFile(b)
							.then((v) => y.push(...v.toString().split("|")))
							.then(() => this.h.del(b, { recursive: !0 }))
							.then(
								() =>
									new Promise((v) => {
										const S = () => {
											this.h.exists(b).then((I) => {
												I ? v() : setTimeout(S, 500);
											});
										};
										S();
									}),
							)
							.then(() => this.h.del(b, { recursive: !0 }))
							.then(() =>
								this.h
									.resolve(s)
									.then((v) =>
										(v.children
											? v.children.filter((S) => S.resource.path.includes(l))
											: []
										).map((S) => S.resource),
									),
							)
							.then((v) => {
								const S = v.reduce(
									(I, T) => `${I}${this.i.getUriLabel(T)}
`,
									`
`,
								);
								return this.a
									.confirm({
										type: "info",
										message: (0, t.localize)(8330, null),
										detail: (0, t.localize)(8331, null, S),
										primaryButton: (0, t.localize)(8332, null),
										cancelButton: (0, t.localize)(8333, null),
									})
									.then((I) => {
										I.confirmed
											? Promise.all([
													this.f.showItemInFolder(v[0].fsPath),
													this.k(v.map((T) => (0, i.$kh)(T))),
												]).then(() =>
													this.a
														.confirm({
															type: "info",
															message: (0, t.localize)(8334, null),
															detail: (0, t.localize)(
																8335,
																null,
																this.g.nameLong,
															),
															primaryButton: (0, t.localize)(8336, null),
														})
														.then((T) => {
															T.confirmed && this.f.relaunch({ removeArgs: y });
														}),
												)
											: this.f.relaunch({ removeArgs: y });
									});
							});
					}
					async k(b) {
						const s = this.g.reportIssueUrl;
						if (!s) return;
						const l = m.$lEc.get(),
							y = await this.c.createModelReference(l.getInputUri());
						try {
							await this.d.writeText(y.object.textEditorModel.getValue());
						} finally {
							y.dispose();
						}
						const $ = `
1. :warning: We have copied additional data to your clipboard. Make sure to **paste** here. :warning:
1. :warning: Make sure to **attach** these files from your *home*-directory: :warning:
${b
	.map((I) => `-\`${I}\``)
	.join(`
`)}
`,
							v = s,
							S = v.indexOf("?") === -1 ? "?" : "&";
						this.e.open(a.URI.parse(`${v}${S}body=${encodeURIComponent($)}`));
					}
				};
				(e.$Agd = o),
					(e.$Agd = o =
						Ne(
							[
								j(0, E.$GO),
								j(1, C.$ucd),
								j(2, w.$MO),
								j(3, u.$Vxb),
								j(4, d.$n6),
								j(5, r.$q2),
								j(6, h.$7rb),
								j(7, c.$y7c),
								j(8, n.$Bk),
								j(9, g.$ll),
								j(10, p.$3N),
							],
							o,
						));
			},
		),
		