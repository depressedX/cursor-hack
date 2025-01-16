define(de[1903], he([1, 0, 14, 4, 79]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$grc = e.$frc = void 0),
				(e.$frc = (0, w.$$O)(
					"settings-view-bar-icon",
					t.$ak.settingsGear,
					(0, i.localize)(12964, null),
				)),
				(e.$grc = [
					e.$frc,
					t.$ak.vm,
					t.$ak.server,
					t.$ak.recordKeys,
					t.$ak.deviceMobile,
					t.$ak.watch,
					t.$ak.vr,
					t.$ak.piano,
					t.$ak.ruby,
					t.$ak.code,
					t.$ak.coffee,
					t.$ak.snake,
					t.$ak.window,
					t.$ak.library,
					t.$ak.extensions,
					t.$ak.terminal,
					t.$ak.beaker,
					t.$ak.package,
					t.$ak.cloud,
					t.$ak.book,
					t.$ak.globe,
					t.$ak.database,
					t.$ak.notebook,
					t.$ak.robot,
					t.$ak.game,
					t.$ak.chip,
					t.$ak.music,
					t.$ak.gift,
					t.$ak.send,
					t.$ak.briefcase,
					t.$ak.megaphone,
					t.$ak.comment,
					t.$ak.telescope,
					t.$ak.creditCard,
					t.$ak.map,
					t.$ak.deviceCameraVideo,
					t.$ak.unmute,
					t.$ak.law,
					t.$ak.graphLine,
					t.$ak.heart,
					t.$ak.home,
					t.$ak.inbox,
					t.$ak.mortarBoard,
					t.$ak.rocket,
					t.$ak.magnet,
					t.$ak.lock,
					t.$ak.milestone,
					t.$ak.tag,
					t.$ak.pulse,
					t.$ak.radioTower,
					t.$ak.smiley,
					t.$ak.zap,
					t.$ak.squirrel,
					t.$ak.symbolColor,
					t.$ak.mail,
					t.$ak.key,
					t.$ak.pieChart,
					t.$ak.organization,
					t.$ak.preview,
					t.$ak.wand,
					t.$ak.starEmpty,
					t.$ak.lightbulb,
					t.$ak.symbolRuler,
					t.$ak.dashboard,
					t.$ak.calendar,
					t.$ak.shield,
					t.$ak.flame,
					t.$ak.compass,
					t.$ak.paintcan,
					t.$ak.archive,
					t.$ak.mic,
					t.$ak.jersey,
				]);
		}),
		define(
			de[3791],
			he([1, 0, 15, 6, 3, 82, 26, 133]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$R3c = void 0);
				class m extends w.$1c {
					get currentProfile() {
						return this.b;
					}
					constructor(u) {
						super(),
							(this.a = this.D(new i.$re())),
							(this.onDidChangeCurrentProfile = this.a.event),
							(this.b = u);
					}
					async updateCurrentProfile(u) {
						if ((0, E.$zo)(this.b, u)) return;
						const a = this.b;
						this.b = u;
						const h = [];
						this.a.fire({
							previous: a,
							profile: u,
							join(c) {
								h.push(c);
							},
						}),
							await t.Promises.settled(h);
					}
					getShortName(u) {
						return !u.isDefault &&
							u.shortName &&
							C.ThemeIcon.fromId(u.shortName)
							? u.shortName
							: `$(${d.$X8.id})`;
					}
				}
				e.$R3c = m;
			},
		),
		