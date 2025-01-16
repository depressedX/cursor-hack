define(
			de[3444],
			he([1, 0, 121, 10, 57, 39, 180, 34, 110, 62, 55, 2945, 3219, 3, 5, 149]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$idd = void 0);
				let p = class extends c.$1c {
					static {
						this.ID = "workbench.contrib.dialogHandler";
					}
					constructor(f, b, s, l, y, $, v, S, I) {
						super(),
							(this.g = f),
							(this.h = b),
							(this.b = new g.$Y(() => new a.$O2c(s, l, y, $, v, S))),
							(this.a = new g.$Y(() => new h.$hdd(s, I, v, S))),
							(this.c = this.h.model),
							this.D(
								this.c.onWillShowDialog(() => {
									this.f || this.j();
								}),
							),
							this.j();
					}
					async j() {
						for (; this.c.dialogs.length; ) {
							this.f = this.c.dialogs[0];
							let f;
							try {
								if (this.f.args.confirmArgs) {
									const b = this.f.args.confirmArgs;
									f =
										this.m || b?.confirmation.custom
											? await this.b.value.confirm(b.confirmation)
											: await this.a.value.confirm(b.confirmation);
								} else if (this.f.args.inputArgs) {
									const b = this.f.args.inputArgs;
									f = await this.b.value.input(b.input);
								} else if (this.f.args.promptArgs) {
									const b = this.f.args.promptArgs;
									f =
										this.m || b?.prompt.custom
											? await this.b.value.prompt(b.prompt)
											: await this.a.value.prompt(b.prompt);
								} else
									this.m
										? await this.b.value.about()
										: await this.a.value.about();
							} catch (b) {
								f = b;
							}
							this.f.close(f), (this.f = void 0);
						}
					}
					get m() {
						return this.g.getValue("window.dialogStyle") === "custom";
					}
				};
				(e.$idd = p),
					(e.$idd = p =
						Ne(
							[
								j(0, i.$gj),
								j(1, w.$GO),
								j(2, d.$ik),
								j(3, C.$jEb),
								j(4, E.$uZ),
								j(5, n.$Li),
								j(6, r.$Bk),
								j(7, t.$Vxb),
								j(8, m.$y7c),
							],
							p,
						)),
					(0, u.$s6)(p.ID, p, u.WorkbenchPhase.BlockStartup);
			},
		),
		