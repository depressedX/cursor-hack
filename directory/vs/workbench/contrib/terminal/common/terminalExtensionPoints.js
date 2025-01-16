define(de[1818], he([1, 0, 175, 145, 5, 9]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$vVc = e.$uVc = void 0),
				(t = mt(t));
			const C = t.$n2.registerExtensionPoint(i.$xeb);
			e.$uVc = (0, w.$Mi)("terminalContributionsService");
			class d {
				get terminalProfiles() {
					return this.a;
				}
				constructor() {
					(this.a = []),
						C.setHandler((u) => {
							this.a = u
								.map(
									(a) =>
										a.value?.profiles
											?.filter((h) => m(h))
											.map((h) => ({
												...h,
												extensionIdentifier: a.description.identifier.value,
											})) || [],
								)
								.flat();
						});
				}
			}
			e.$vVc = d;
			function m(r) {
				return (
					!r.icon ||
					typeof r.icon == "string" ||
					E.URI.isUri(r.icon) ||
					("light" in r.icon &&
						"dark" in r.icon &&
						E.URI.isUri(r.icon.light) &&
						E.URI.isUri(r.icon.dark))
				);
			}
		}),
		