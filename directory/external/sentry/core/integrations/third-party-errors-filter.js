define(de[2116], he([1, 0, 80, 316, 1438]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.thirdPartyErrorFilterIntegration = void 0),
				(e.thirdPartyErrorFilterIntegration = (0, i.defineIntegration)((d) => ({
					name: "ThirdPartyErrorsFilter",
					setup(m) {
						m.on("beforeEnvelope", (r) => {
							(0, t.forEachEnvelopeItem)(r, (u, a) => {
								if (a === "event") {
									const h = Array.isArray(u) ? u[1] : void 0;
									h && ((0, w.stripMetadataFromStackFrames)(h), (u[1] = h));
								}
							});
						}),
							m.on("applyFrameMetadata", (r) => {
								if (r.type) return;
								const u = m.getOptions().stackParser;
								(0, w.addMetadataToStackFrames)(u, r);
							});
					},
					processEvent(m) {
						const r = E(m);
						if (r) {
							const u =
								d.behaviour === "drop-error-if-contains-third-party-frames" ||
								d.behaviour === "apply-tag-if-contains-third-party-frames"
									? "some"
									: "every";
							if (r[u]((h) => !h.some((c) => d.filterKeys.includes(c)))) {
								if (
									d.behaviour === "drop-error-if-contains-third-party-frames" ||
									d.behaviour ===
										"drop-error-if-exclusively-contains-third-party-frames"
								)
									return null;
								m.tags = { ...m.tags, third_party_code: !0 };
							}
						}
						return m;
					},
				})));
			function E(d) {
				const m = (0, t.getFramesFromEvent)(d);
				if (m)
					return m
						.filter((r) => !!r.filename)
						.map((r) =>
							r.module_metadata
								? Object.keys(r.module_metadata)
										.filter((u) => u.startsWith(C))
										.map((u) => u.slice(C.length))
								: [],
						);
			}
			const C = "_sentryBundlerPluginAppKey:";
		}),
		