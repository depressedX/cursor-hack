import '../../../../require.js';
import '../../../../exports.js';
import '../../utils/index.js';
import '../integration.js';
import '../metadata.js';
define(de[2112], he([1, 0, 80, 316, 1438]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.moduleMetadataIntegration = void 0),
				(e.moduleMetadataIntegration = (0, i.defineIntegration)(() => ({
					name: "ModuleMetadata",
					setup(E) {
						E.on("beforeEnvelope", (C) => {
							(0, t.forEachEnvelopeItem)(C, (d, m) => {
								if (m === "event") {
									const r = Array.isArray(d) ? d[1] : void 0;
									r && ((0, w.stripMetadataFromStackFrames)(r), (d[1] = r));
								}
							});
						}),
							E.on("applyFrameMetadata", (C) => {
								if (C.type) return;
								const d = E.getOptions().stackParser;
								(0, w.addMetadataToStackFrames)(d, C);
							});
					},
				})));
		}),
		