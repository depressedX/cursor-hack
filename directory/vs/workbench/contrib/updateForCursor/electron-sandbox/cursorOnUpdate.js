define(
			de[3210],
			he([1, 0, 20, 5, 41, 62, 21, 1782]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				var m;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Pfd = void 0);
				let r = class {
					static {
						m = this;
					}
					static {
						this.UPDATE_VERSION_STORAGE_KEY =
							"cursorupdate.lastUpdatedAndShown.version";
					}
					constructor(a, h, c) {
						(this.a = a), (this.b = h), (this.c = c);
					}
					async onEditorStart() {
						const a = this.c.get(
							m.UPDATE_VERSION_STORAGE_KEY,
							C.StorageScope.APPLICATION,
						);
						if (a === void 0) {
							this.saveNewVersion();
							return;
						}
						const h = this.a.version;
						a !== h && (await this.onNewUpdate());
					}
					async openChangelog() {
						await new Promise((a) => setTimeout(a, 1e3)),
							this.b.invokeFunction((a) => {
								const h = a.get(w.$7rb);
							});
					}
					saveNewVersion() {
						const a = this.a.version;
						this.c.store(
							m.UPDATE_VERSION_STORAGE_KEY,
							a,
							C.StorageScope.APPLICATION,
							C.StorageTarget.MACHINE,
						);
					}
					async onNewUpdate() {
						this.saveNewVersion(), await this.openChangelog();
					}
				};
				(e.$Pfd = r),
					(e.$Pfd = r = m = Ne([j(0, E.$Bk), j(1, i.$Li), j(2, C.$lq)], r)),
					(0, t.$lK)(d.$oed, r, t.InstantiationType.Eager);
			},
		),
		