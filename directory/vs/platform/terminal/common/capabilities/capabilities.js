define(de[189], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.CommandInvalidationReason = e.TerminalCapability = void 0);
			var t;
			(function (w) {
				(w[(w.CwdDetection = 0)] = "CwdDetection"),
					(w[(w.NaiveCwdDetection = 1)] = "NaiveCwdDetection"),
					(w[(w.CommandDetection = 2)] = "CommandDetection"),
					(w[(w.PartialCommandDetection = 3)] = "PartialCommandDetection"),
					(w[(w.BufferMarkDetection = 4)] = "BufferMarkDetection");
			})(t || (e.TerminalCapability = t = {}));
			var i;
			(function (w) {
				(w.Windows = "windows"), (w.NoProblemsReported = "noProblemsReported");
			})(i || (e.CommandInvalidationReason = i = {}));
		}),
		