define(
			de[3110],
			he([1, 0, 7, 3, 173, 11, 49, 5, 801]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$p4b = void 0),
					(t = mt(t));
				let r = class extends i.$1c {
					constructor(a, h, c, n, g) {
						super(),
							(this.h = a),
							(this.j = h),
							(this.m = c),
							(this.n = n),
							(this.q = g),
							(this.c = this.D(new i.$2c())),
							(this.f = this.D(new i.$Zc())),
							(this.a = t.$("div")),
							(this.b = t.$(".cell-list-top-cell-toolbar-container")),
							this.a.appendChild(this.b),
							this.D(
								this.h.onDidAttachViewModel(() => {
									this.r();
								}),
							),
							this.D(
								this.j.onDidChangeOptions((p) => {
									(p.insertToolbarAlignment ||
										p.insertToolbarPosition ||
										p.cellToolbarLocation) &&
										this.r();
								}),
							);
					}
					r() {
						const a = this.j.getLayoutConfiguration();
						if (
							((this.c.value = new i.$Zc()),
							a.insertToolbarPosition === "hidden" ||
								a.insertToolbarPosition === "notebookToolbar")
						) {
							const h = this.j.computeTopInsertToolbarHeight(
								this.h.textModel?.viewType,
							);
							h !== 0 &&
								this.h.changeViewZones((c) => {
									const n = c.addZone({
										afterModelPosition: 0,
										heightInPx: h,
										domNode: t.$("div"),
									});
									c.layoutZone(n),
										this.c.value?.add({
											dispose: () => {
												this.h.isDisposed ||
													this.h.changeViewZones((g) => {
														g.removeZone(n);
													});
											},
										});
								});
							return;
						}
						this.h.changeViewZones((h) => {
							const c = this.j.computeTopInsertToolbarHeight(
									this.h.textModel?.viewType,
								),
								n = h.addZone({
									afterModelPosition: 0,
									heightInPx: c,
									domNode: this.a,
								});
							h.layoutZone(n),
								this.c.value?.add({
									dispose: () => {
										this.h.isDisposed ||
											this.h.changeViewZones((p) => {
												p.removeZone(n);
											});
									},
								}),
								t.$9fb(this.b);
							const g = this.m.createInstance(
								w.$Tyb,
								this.b,
								this.h.creationOptions.menuIds.cellTopInsertToolbar,
								{
									actionViewItemProvider: (p, o) => {
										if (p instanceof E.$2X)
											return this.m.createInstance(m.$M3b, p, {
												hoverDelegate: o.hoverDelegate,
											});
									},
									menuOptions: { shouldForwardArgs: !0 },
									toolbarOptions: { primaryGroup: (p) => /^inline/.test(p) },
									hiddenItemStrategy: w.HiddenItemStrategy.Ignore,
								},
							);
							this.h.hasModel() && (g.context = { notebookEditor: this.h }),
								this.c.value?.add(g),
								this.c.value?.add(
									this.h.onDidChangeModel(() => {
										this.f.clear(),
											this.h.hasModel() &&
												(this.f.add(
													this.h.onDidChangeViewCells(() => {
														this.s();
													}),
												),
												this.s());
									}),
								),
								this.s();
						});
					}
					s() {
						this.h.hasModel() && this.h.getLength() === 0
							? this.b.classList.add("emptyNotebook")
							: this.b.classList.remove("emptyNotebook");
					}
				};
				(e.$p4b = r),
					(e.$p4b = r = Ne([j(2, d.$Li), j(3, C.$Xxb), j(4, E.$YX)], r));
			},
		),
		