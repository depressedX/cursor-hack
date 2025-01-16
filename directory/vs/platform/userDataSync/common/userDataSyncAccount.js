define(de[1212], he([1, 0, 6, 3, 5, 150]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$wwc = e.$vwc = void 0),
				(e.$vwc = (0, w.$Mi)("IUserDataSyncAccountService"));
			let C = class extends i.$1c {
				get account() {
					return this.a;
				}
				constructor(m, r) {
					super(),
						(this.g = m),
						(this.h = r),
						(this.b = this.D(new t.$re())),
						(this.onDidChangeAccount = this.b.event),
						(this.c = this.D(new t.$re())),
						(this.onTokenFailed = this.c.event),
						(this.f = !1),
						this.D(
							m.onTokenFailed((u) => {
								this.h.info(
									"Settings Sync auth token failed",
									this.account?.authenticationProviderId,
									this.f,
									u,
								),
									this.updateAccount(void 0),
									u === E.UserDataSyncErrorCode.Forbidden
										? this.c.fire(!0)
										: this.c.fire(this.f),
									(this.f = !0);
							}),
						),
						this.D(m.onTokenSucceed(() => (this.f = !1)));
				}
				async updateAccount(m) {
					(m && this.a
						? m.token !== this.a.token ||
							m.authenticationProviderId !== this.a.authenticationProviderId
						: m !== this.a) &&
						((this.a = m),
						this.a &&
							this.g.setAuthToken(
								this.a.token,
								this.a.authenticationProviderId,
							),
						this.b.fire(m));
				}
			};
			(e.$wwc = C), (e.$wwc = C = Ne([j(0, E.$TRb), j(1, E.$9Rb)], C));
		}),
		define(
			de[2886],
			he([1, 0, 19, 4, 113, 34, 150]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$WAc = void 0);
				let d = class extends E.$nk {
					constructor(r, u) {
						super(),
							(this.g = this.D(
								r.createLogger((0, t.$nh)(u.logsHome, `${C.$0Rb}.log`), {
									id: C.$0Rb,
									name: (0, i.localize)(2464, null),
								}),
							));
					}
					trace(r, ...u) {
						this.g.trace(r, ...u);
					}
					debug(r, ...u) {
						this.g.debug(r, ...u);
					}
					info(r, ...u) {
						this.g.info(r, ...u);
					}
					warn(r, ...u) {
						this.g.warn(r, ...u);
					}
					error(r, ...u) {
						this.g.error(r, ...u);
					}
					flush() {
						this.g.flush();
					}
				};
				(e.$WAc = d), (e.$WAc = d = Ne([j(0, E.$jk), j(1, w.$Ti)], d));
			},
		),
		