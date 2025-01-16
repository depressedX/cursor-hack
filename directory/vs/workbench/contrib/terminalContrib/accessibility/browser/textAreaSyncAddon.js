define(
			de[3153],
			he([1, 0, 138, 6, 3, 91, 10, 189, 117]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$MVc = void 0);
				let r = class extends w.$1c {
					activate(a) {
						(this.a = a), this.j();
					}
					constructor(a, h, c, n) {
						super(),
							(this.c = a),
							(this.f = h),
							(this.g = c),
							(this.h = n),
							(this.b = this.D(new w.$2c())),
							this.D(
								i.Event.runAndSubscribe(
									i.Event.any(
										this.c.onDidAddCapability,
										this.c.onDidRemoveCapability,
										this.f.onDidChangeScreenReaderOptimized,
									),
									() => {
										this.j();
									},
								),
							);
					}
					j() {
						const a = this.c.get(d.TerminalCapability.CommandDetection);
						if (this.m() && a) {
							if (!this.b.value) {
								const h = this.a?.textarea;
								h &&
									(this.b.value = i.Event.runAndSubscribe(
										a.promptInputModel.onDidChangeInput,
										() => this.n(h),
									));
							}
						} else this.b.clear();
					}
					m() {
						return (
							this.f.isScreenReaderOptimized() ||
							this.g.getValue(m.TerminalSettingId.DevMode)
						);
					}
					n(a) {
						const h = this.c.get(d.TerminalCapability.CommandDetection);
						h &&
							((a.value = h.promptInputModel.value),
							(a.selectionStart = h.promptInputModel.cursorIndex),
							(a.selectionEnd = h.promptInputModel.cursorIndex),
							this.h.debug(
								`TextAreaSyncAddon#sync: text changed to "${a.value}"`,
							));
					}
				};
				(e.$MVc = r),
					Ne([(0, t.$fi)(50)], r.prototype, "n", null),
					(e.$MVc = r = Ne([j(1, E.$XK), j(2, C.$gj), j(3, m.$YJ)], r));
			},
		),
		