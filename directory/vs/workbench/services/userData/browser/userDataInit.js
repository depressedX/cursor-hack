define(
			de[1041],
			he([1, 0, 5, 55, 30, 52, 12, 53, 240]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$nwc = e.$mwc = void 0),
					(e.$mwc = (0, t.$Mi)("IUserDataInitializationService"));
				class r {
					constructor(h = []) {
						this.a = h;
					}
					async whenInitializationFinished() {
						(await this.requiresInitialization()) &&
							(await Promise.all(
								this.a.map((h) => h.whenInitializationFinished()),
							));
					}
					async requiresInitialization() {
						return (
							await Promise.all(this.a.map((h) => h.requiresInitialization()))
						).some((h) => h);
					}
					async initializeRequiredResources() {
						(await this.requiresInitialization()) &&
							(await Promise.all(
								this.a.map((h) => h.initializeRequiredResources()),
							));
					}
					async initializeOtherResources(h) {
						(await this.requiresInitialization()) &&
							(await Promise.all(
								this.a.map((c) => c.initializeOtherResources(h)),
							));
					}
					async initializeInstalledExtensions(h) {
						(await this.requiresInitialization()) &&
							(await Promise.all(
								this.a.map((c) => c.initializeInstalledExtensions(h)),
							));
					}
				}
				e.$nwc = r;
				let u = class {
					constructor(h, c, n) {
						n.whenInstalledExtensionsRegistered().then(() => this.a(h, c));
					}
					async a(h, c) {
						(await h.requiresInitialization()) &&
							((0, m.mark)("code/willInitOtherUserData"),
							await h.initializeOtherResources(c),
							(0, m.mark)("code/didInitOtherUserData"));
					}
				};
				(u = Ne([j(0, e.$mwc), j(1, t.$Li), j(2, d.$q2)], u)),
					C.$r &&
						w.$Io
							.as(i.Extensions.Workbench)
							.registerWorkbenchContribution(u, E.LifecyclePhase.Restored);
			},
		),
		