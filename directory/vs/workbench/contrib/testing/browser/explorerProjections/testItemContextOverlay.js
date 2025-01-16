define(de[1267], he([1, 0, 420, 259, 380]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$UKc = void 0);
			const E = (C, d) => {
				if (!C) return [];
				const m = i.$k4.fromString(C.item.extId);
				return [
					[w.TestingContextKeys.testItemExtId.key, m.localId],
					[w.TestingContextKeys.controllerId.key, C.controllerId],
					[w.TestingContextKeys.testItemHasUri.key, !!C.item.uri],
					...(0, t.$Dqc)(d),
				];
			};
			e.$UKc = E;
		}),
		