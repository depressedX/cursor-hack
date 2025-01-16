define(
			de[3758],
			he([1, 0, 3, 10, 5, 25, 3757, 131, 838]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$sCc = void 0);
				let r = class extends t.$1c {
					static {
						this.ID = "editor.contrib.settings";
					}
					constructor(a, h, c, n) {
						super(),
							(this.c = a),
							(this.f = h),
							(this.g = c),
							(this.h = n),
							(this.b = this.D(new t.$Zc())),
							this.j(),
							this.D(this.c.onDidChangeModel((g) => this.j())),
							this.D(this.h.onDidChangeWorkbenchState(() => this.j()));
					}
					async j() {
						this.b.clear(), (this.a = void 0);
						const a = this.c.getModel();
						if (a && /\.(json|code-workspace)$/.test(a.uri.path)) {
							const h = await this.g.createPreferencesEditorModel(a.uri);
							if (h instanceof m.$XZ && this.c.getModel())
								switch ((this.b.add(h), h.configurationTarget)) {
									case i.ConfigurationTarget.WORKSPACE:
										this.a = this.b.add(
											this.f.createInstance(C.$rCc, this.c, h),
										);
										break;
									default:
										this.a = this.b.add(
											this.f.createInstance(C.$qCc, this.c, h),
										);
										break;
								}
							this.a?.render();
						}
					}
				};
				(e.$sCc = r),
					(e.$sCc = r = Ne([j(1, w.$Li), j(2, d.$7Z), j(3, E.$Vi)], r));
			},
		),
		