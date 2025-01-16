define(de[1696], he([1, 0, 6, 3, 129, 1172]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$gfb = e.$ffb = void 0);
			class C {
				constructor(r, u) {
					(this.a = r), (this.b = u);
				}
				listen(r, u) {
					const a = this.b(r);
					switch (u) {
						case "onDidChangeProfiles":
							return t.Event.map(this.a.onDidChangeProfiles, (h) => ({
								all: h.all.map((c) => (0, E.$4n)({ ...c }, a)),
								added: h.added.map((c) => (0, E.$4n)({ ...c }, a)),
								removed: h.removed.map((c) => (0, E.$4n)({ ...c }, a)),
								updated: h.updated.map((c) => (0, E.$4n)({ ...c }, a)),
							}));
					}
					throw new Error(`Invalid listen ${u}`);
				}
				async call(r, u, a) {
					const h = this.b(r);
					switch (u) {
						case "createProfile": {
							const c = await this.a.createProfile(a[0], a[1], a[2]);
							return (0, E.$4n)({ ...c }, h);
						}
						case "updateProfile": {
							let c = (0, w.$Yl)(
								(0, E.$5n)(a[0], h),
								this.a.profilesHome.scheme,
							);
							return (
								(c = await this.a.updateProfile(c, a[1])),
								(0, E.$4n)({ ...c }, h)
							);
						}
						case "removeProfile": {
							const c = (0, w.$Yl)(
								(0, E.$5n)(a[0], h),
								this.a.profilesHome.scheme,
							);
							return this.a.removeProfile(c);
						}
					}
					throw new Error(`Invalid call ${u}`);
				}
			}
			e.$ffb = C;
			class d extends i.$1c {
				get defaultProfile() {
					return this.profiles[0];
				}
				get profiles() {
					return this.a;
				}
				constructor(r, u, a) {
					super(),
						(this.profilesHome = u),
						(this.f = a),
						(this.a = []),
						(this.b = this.D(new t.$re())),
						(this.onDidChangeProfiles = this.b.event),
						(this.c = !0),
						(this.a = r.map((h) => (0, w.$Yl)(h, this.profilesHome.scheme))),
						this.D(
							this.f.listen("onDidChangeProfiles")((h) => {
								const c = h.added.map((p) =>
										(0, w.$Yl)(p, this.profilesHome.scheme),
									),
									n = h.removed.map((p) =>
										(0, w.$Yl)(p, this.profilesHome.scheme),
									),
									g = h.updated.map((p) =>
										(0, w.$Yl)(p, this.profilesHome.scheme),
									);
								(this.a = h.all.map((p) =>
									(0, w.$Yl)(p, this.profilesHome.scheme),
								)),
									this.b.fire({
										added: c,
										removed: n,
										updated: g,
										all: this.profiles,
									});
							}),
						),
						(this.onDidResetWorkspaces = this.f.listen("onDidResetWorkspaces"));
				}
				setEnablement(r) {
					this.c = r;
				}
				isEnabled() {
					return this.c;
				}
				async createNamedProfile(r, u, a) {
					const h = await this.f.call("createNamedProfile", [r, u, a]);
					return (0, w.$Yl)(h, this.profilesHome.scheme);
				}
				async createProfile(r, u, a, h) {
					const c = await this.f.call("createProfile", [r, u, a, h]);
					return (0, w.$Yl)(c, this.profilesHome.scheme);
				}
				async createTransientProfile(r) {
					const u = await this.f.call("createTransientProfile", [r]);
					return (0, w.$Yl)(u, this.profilesHome.scheme);
				}
				async setProfileForWorkspace(r, u) {
					await this.f.call("setProfileForWorkspace", [r, u]);
				}
				removeProfile(r) {
					return this.f.call("removeProfile", [r]);
				}
				async updateProfile(r, u) {
					const a = await this.f.call("updateProfile", [r, u]);
					return (0, w.$Yl)(a, this.profilesHome.scheme);
				}
				resetWorkspaces() {
					return this.f.call("resetWorkspaces");
				}
				cleanUp() {
					return this.f.call("cleanUp");
				}
				cleanUpTransientProfiles() {
					return this.f.call("cleanUpTransientProfiles");
				}
			}
			e.$gfb = d;
		}),
		