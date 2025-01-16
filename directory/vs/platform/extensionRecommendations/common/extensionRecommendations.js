define(de[666], he([1, 0, 5]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$HTc =
					e.RecommendationsNotificationResult =
					e.RecommendationSource =
						void 0),
				(e.$GTc = w);
			var i;
			(function (C) {
				(C[(C.FILE = 1)] = "FILE"),
					(C[(C.WORKSPACE = 2)] = "WORKSPACE"),
					(C[(C.EXE = 3)] = "EXE");
			})(i || (e.RecommendationSource = i = {}));
			function w(C) {
				switch (C) {
					case i.FILE:
						return "file";
					case i.WORKSPACE:
						return "workspace";
					case i.EXE:
						return "exe";
				}
			}
			var E;
			(function (C) {
				(C.Ignored = "ignored"),
					(C.Cancelled = "cancelled"),
					(C.TooMany = "toomany"),
					(C.IncompatibleWindow = "incompatibleWindow"),
					(C.Accepted = "reacted");
			})(E || (e.RecommendationsNotificationResult = E = {})),
				(e.$HTc = (0, t.$Mi)("IExtensionRecommendationNotificationService"));
		}),
		