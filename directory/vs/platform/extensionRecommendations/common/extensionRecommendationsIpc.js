define(de[2707], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$G9c = e.$F9c = void 0);
			class t {
				constructor(E) {
					this.a = E;
				}
				get ignoredRecommendations() {
					throw new Error("not supported");
				}
				promptImportantExtensionsInstallNotification(E) {
					return this.a.call("promptImportantExtensionsInstallNotification", [
						E,
					]);
				}
				promptWorkspaceRecommendations(E) {
					throw new Error("not supported");
				}
				hasToIgnoreRecommendationNotifications() {
					throw new Error("not supported");
				}
			}
			e.$F9c = t;
			class i {
				constructor(E) {
					this.a = E;
				}
				listen(E, C) {
					throw new Error(`Event not found: ${C}`);
				}
				call(E, C, d) {
					switch (C) {
						case "promptImportantExtensionsInstallNotification":
							return this.a.promptImportantExtensionsInstallNotification(d[0]);
					}
					throw new Error(`Call not found: ${C}`);
				}
			}
			e.$G9c = i;
		}),
		