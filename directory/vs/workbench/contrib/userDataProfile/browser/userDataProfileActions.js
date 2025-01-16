define(
			de[3778],
			he([1, 0, 4, 99, 11, 129, 133]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				class d extends w.$3X {
					static {
						this.ID = "workbench.profiles.actions.createTemporaryProfile";
					}
					static {
						this.TITLE = (0, t.localize2)(11147, "Create a Temporary Profile");
					}
					constructor() {
						super({
							id: d.ID,
							title: d.TITLE,
							category: C.$Z8,
							f1: !0,
							precondition: C.$38,
						});
					}
					async run(r) {
						return r.get(C.$Q8).createAndEnterTransientProfile();
					}
				}
				(0, w.$4X)(d),
					(0, w.$4X)(
						class extends w.$3X {
							constructor() {
								super({
									id: "workbench.profiles.actions.cleanupProfiles",
									title: (0, t.localize2)(11148, "Cleanup Profiles"),
									category: i.$ck.Developer,
									f1: !0,
									precondition: C.$38,
								});
							}
							async run(r) {
								return r.get(E.$Xl).cleanUp();
							}
						},
					),
					(0, w.$4X)(
						class extends w.$3X {
							constructor() {
								super({
									id: "workbench.profiles.actions.resetWorkspaces",
									title: (0, t.localize2)(
										11149,
										"Reset Workspace Profiles Associations",
									),
									category: i.$ck.Developer,
									f1: !0,
									precondition: C.$38,
								});
							}
							async run(r) {
								return r.get(E.$Xl).resetWorkspaces();
							}
						},
					);
			},
		),
		