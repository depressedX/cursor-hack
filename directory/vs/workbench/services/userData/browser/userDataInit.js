import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../common/contributions.js';
import '../../../../platform/registry/common/platform.js';
import '../../lifecycle/common/lifecycle.js';
import '../../../../base/common/platform.js';
import '../../extensions/common/extensions.js';
import '../../../../base/common/performance.js';
define(
			de[1041],
			he([1, 0, 5, 55, 30, 52, 12, 53, 240]),
			function (ce /*require*/,
 e /*exports*/,
 t /*instantiation*/,
 i /*contributions*/,
 w /*platform*/,
 E /*lifecycle*/,
 C /*platform*/,
 d /*extensions*/,
 m /*performance*/) {
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
		