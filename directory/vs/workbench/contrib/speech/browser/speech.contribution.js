define(de[3390], he([1, 0, 20, 511, 3389]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(0, t.$lK)(i.$V7, w.$uIc, t.InstantiationType.Eager);
		}),
		define(
			de[3391],
			he([
				1, 0, 6, 87, 110, 20, 73, 78, 253, 3, 2744, 151, 371, 7, 138, 75, 320,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				let o = class extends u.$Y8c {
					constructor(s, l) {
						super(s.window.id, l);
					}
				};
				o = Ne([j(0, a.$ucd), j(1, h.$V8c)], o);
				let f = class extends r.$1c {
					constructor(s, l, y) {
						super(),
							(this.a = s),
							(this.b = l),
							(this.c = y),
							(this.onDidChangeFocus = t.Event.latch(
								t.Event.any(
									t.Event.map(
										t.Event.filter(
											this.a.onDidFocusMainOrAuxiliaryWindow,
											($) => (0, c.hasWindow)($),
											this.B,
										),
										() => this.hasFocus,
										this.B,
									),
									t.Event.map(
										t.Event.filter(
											this.a.onDidBlurMainOrAuxiliaryWindow,
											($) => (0, c.hasWindow)($),
											this.B,
										),
										() => this.hasFocus,
										this.B,
									),
									t.Event.map(
										this.onDidChangeActiveWindow,
										() => this.hasFocus,
										this.B,
									),
								),
								void 0,
								this.B,
							)),
							(this.onDidChangeFullScreen = t.Event.filter(
								this.a.onDidChangeWindowFullScreen,
								($) => (0, c.hasWindow)($.windowId),
								this.B,
							));
					}
					get hasFocus() {
						return (0, c.$Ngb)().hasFocus();
					}
					async hadLastFocus() {
						const s = await this.a.getActiveWindowId();
						return typeof s > "u" ? !1 : s === this.a.windowId;
					}
					get onDidChangeActiveWindow() {
						const s = this.D(new t.$re());
						return (
							this.D(
								t.Event.filter(
									this.a.onDidFocusMainOrAuxiliaryWindow,
									(l) => (0, c.hasWindow)(l),
									this.B,
								)((l) => s.fire(l)),
							),
							this.D(
								(0, c.onDidRegisterWindow)(({ window: l, disposables: y }) => {
									y.add(
										(0, c.$igb)(
											l,
											() => {
												const $ = l.document.hasFocus();
												return $ && s.fire(l.vscodeWindowId), $;
											},
											100,
											20,
										),
									);
								}),
							),
							t.Event.latch(s.event, void 0, this.B)
						);
					}
					openWindow(s, l) {
						return Array.isArray(s) ? this.f(s, l) : this.h(s);
					}
					async f(s, l) {
						const y = this.c.remoteAuthority;
						y &&
							(s.forEach(($) => ($.label = $.label || this.g($))),
							l?.remoteAuthority === void 0 &&
								(l = l
									? { ...l, remoteAuthority: y }
									: { remoteAuthority: y })),
							await this.a.openWindow(s, l);
					}
					g(s) {
						return (0, m.$uY)(s)
							? this.b.getWorkspaceLabel(s.folderUri, {
									verbose: C.Verbosity.LONG,
								})
							: (0, m.$tY)(s)
								? this.b.getWorkspaceLabel(
										{ id: "", configPath: s.workspaceUri },
										{ verbose: C.Verbosity.LONG },
									)
								: this.b.getUriLabel(s.fileUri);
					}
					async h(s) {
						const l = this.c.remoteAuthority;
						l &&
							s?.remoteAuthority === void 0 &&
							(s = s ? { ...s, remoteAuthority: l } : { remoteAuthority: l }),
							await this.a.openWindow(s);
					}
					toggleFullScreen(s) {
						return this.a.toggleFullScreen({
							targetWindowId: (0, g.$Dfb)(s) ? s.vscodeWindowId : void 0,
						});
					}
					async moveTop(s) {
						if (!((0, c.getWindowsCount)() <= 1))
							return this.a.moveWindowTop(
								(0, g.$Dfb)(s) ? { targetWindowId: s.vscodeWindowId } : void 0,
							);
					}
					getCursorScreenPoint() {
						return this.a.getCursorScreenPoint();
					}
					focus(s, l) {
						return this.a.focusWindow({
							force: l?.force,
							targetWindowId: (0, c.getWindowId)(s),
						});
					}
					restart() {
						return this.a.relaunch();
					}
					reload(s) {
						return this.a.reload(s);
					}
					close() {
						return this.a.closeWindow();
					}
					async withExpectedShutdown(s) {
						return await s();
					}
					getPathForFile(s) {
						return p.$U.getPathForFile(s);
					}
				};
				Ne([n.$ei], f.prototype, "onDidChangeActiveWindow", null),
					(f = Ne([j(0, w.$y7c), j(1, C.$3N), j(2, d.$r8)], f)),
					(0, E.$lK)(i.$asb, f, E.InstantiationType.Delayed),
					(0, E.$lK)(w.$y7c, o, E.InstantiationType.Delayed);
			},
		),
		