define(
			de[2940],
			he([1, 0, 6, 3, 9, 10, 62, 21, 966]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$l9c = e.$k9c = e.$j9c = e.$i9c = void 0);
				class r {
					constructor(n) {
						this.a = n;
					}
					listen(n, g) {
						switch (g) {
							case "onDidChangeAccount":
								return this.a.onDidChangeAccount;
							case "onTokenFailed":
								return this.a.onTokenFailed;
						}
						throw new Error(
							`[UserDataSyncAccountServiceChannel] Event not found: ${g}`,
						);
					}
					call(n, g, p) {
						switch (g) {
							case "_getInitialData":
								return Promise.resolve(this.a.account);
							case "updateAccount":
								return this.a.updateAccount(p);
						}
						throw new Error("Invalid call");
					}
				}
				e.$i9c = r;
				class u extends i.$1c {
					get account() {
						return this.a;
					}
					get onTokenFailed() {
						return this.c.listen("onTokenFailed");
					}
					constructor(n) {
						super(),
							(this.c = n),
							(this.b = this.D(new t.$re())),
							(this.onDidChangeAccount = this.b.event),
							this.c.call("_getInitialData").then((g) => {
								(this.a = g),
									this.D(
										this.c.listen("onDidChangeAccount")((p) => {
											(this.a = p), this.b.fire(p);
										}),
									);
							});
					}
					updateAccount(n) {
						return this.c.call("updateAccount", n);
					}
				}
				e.$j9c = u;
				class a {
					constructor(n) {
						this.a = n;
					}
					listen(n, g) {
						switch (g) {
							case "onDidChangeUserDataSyncStore":
								return this.a.onDidChangeUserDataSyncStore;
						}
						throw new Error(
							`[UserDataSyncStoreManagementServiceChannel] Event not found: ${g}`,
						);
					}
					call(n, g, p) {
						switch (g) {
							case "switch":
								return this.a.switch(p[0]);
							case "getPreviousUserDataSyncStore":
								return this.a.getPreviousUserDataSyncStore();
						}
						throw new Error("Invalid call");
					}
				}
				e.$k9c = a;
				let h = class extends m.$3xc {
					constructor(n, g, p, o) {
						super(g, p, o),
							(this.n = n),
							this.D(
								this.n.listen("onDidChangeUserDataSyncStore")(() => this.j()),
							);
					}
					async switch(n) {
						return this.n.call("switch", [n]);
					}
					async getPreviousUserDataSyncStore() {
						const n = await this.n.call("getPreviousUserDataSyncStore");
						return this.q(n);
					}
					q(n) {
						return {
							url: w.URI.revive(n.url),
							type: n.type,
							defaultUrl: w.URI.revive(n.defaultUrl),
							insidersUrl: w.URI.revive(n.insidersUrl),
							stableUrl: w.URI.revive(n.stableUrl),
							canSwitch: n.canSwitch,
							authenticationProviders: n.authenticationProviders,
						};
					}
				};
				(e.$l9c = h),
					(e.$l9c = h = Ne([j(1, C.$Bk), j(2, E.$gj), j(3, d.$lq)], h));
			},
		),
		