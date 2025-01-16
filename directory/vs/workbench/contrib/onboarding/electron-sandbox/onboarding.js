define(
			de[4340],
			he([
				1, 0, 180, 3, 5, 18, 4339, 832, 3, 1282, 20, 21, 22, 87, 151, 45, 96,
				110, 78, 31, 256, 58,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ped = void 0);
				let y = class extends m.$1c {
					constructor(v, S, I, T, P, k, L, D, M, N, A, R, O, B) {
						super(),
							(this.c = v),
							(this.f = S),
							(this.g = I),
							(this.h = T),
							(this.j = P),
							(this.m = k),
							(this.n = L),
							(this.q = D),
							(this.r = M),
							(this.s = N),
							(this.t = A),
							(this.u = R),
							(this.w = O),
							(this.y = B),
							(this.a = new i.$Zc()),
							this.h.activate();
					}
					renderPopupBar() {
						const v = this.j.get(l.$IV, a.StorageScope.APPLICATION, "true");
						if (C.$hed || (v === "true" && !this.u.skipOnboarding)) {
							(0, g.$nAb)(this.r),
								this.r.setApplicationUserPersistentStorage(
									"shouldNotTryToGetThemToNoticeCpp",
									!0,
								),
								this.r.setApplicationUserPersistentStorage(
									"bubbleTimesLeft",
									1,
								),
								this.r.setApplicationUserPersistentStorage("checklistState", {
									shouldSeeOnboardingChecklist: !0,
								}),
								this.r.setApplicationUserPersistentStorage(
									"newUserData",
									"toolUsageCount",
									"plainChat",
									0,
								),
								this.r.setApplicationUserPersistentStorage(
									"newUserData",
									"toolUsageCount",
									"contextChat",
									0,
								),
								this.r.setApplicationUserPersistentStorage(
									"newUserData",
									"toolUsageCount",
									"intentChat",
									0,
								),
								this.r.setApplicationUserPersistentStorage(
									"aiSettings",
									"openAIModel",
									"claude-3.5-sonnet",
								),
								this.r.setApplicationUserPersistentStorage(
									"oneTimeSettings",
									"didMigrateFromGpt4oToClaudeSonnet",
									!0,
								),
								this.r.setApplicationUserPersistentStorage(
									"haveNotImportedFromVSC",
									!0,
								),
								this.w.executeCommand(l.$PX, 10 * 6e4);
							let S = this.c.mainContainer;
							this.b = (0, C.$ied)(S, this.f, this.q, this.t, () => {
								this.j.store(
									l.$IV,
									"false",
									a.StorageScope.APPLICATION,
									a.StorageTarget.MACHINE,
								),
									!C.$hed &&
										(this.w.executeCommand(l.$PX, 3e4), this.b?.dispose());
							});
						}
					}
					dispose() {
						super.dispose(),
							this.a.dispose(),
							this.b?.dispose(),
							(this.b = void 0);
					}
				};
				(e.$ped = y),
					(e.$ped = y =
						Ne(
							[
								j(0, t.$jEb),
								j(1, w.$Li),
								j(2, E.$IY),
								j(3, d.$u0b),
								j(4, a.$lq),
								j(5, h.$ll),
								j(6, c.$asb),
								j(7, n.$ucd),
								j(8, g.$0zb),
								j(9, p.$mEb),
								j(10, o.$y7c),
								j(11, f.$r8),
								j(12, b.$ek),
								j(13, s.$cRb),
							],
							y,
						)),
					(0, u.$lK)(r.$HAc, y, u.InstantiationType.Delayed);
			},
		),
		