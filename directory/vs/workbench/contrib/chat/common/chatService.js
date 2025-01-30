import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/uri.js';
import '../../../../editor/common/core/range.js';
import '../../../../platform/instantiation/common/instantiation.js';
define(de[218], he([1, 0, 9, 17, 5]), function (ce /*require*/,
 e /*exports*/,
 t /*uri*/,
 i /*range*/,
 w /*instantiation*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$K2 =
					e.$J2 =
					e.ChatCopyKind =
					e.ChatAgentVoteDownReason =
					e.ChatAgentVoteDirection =
					e.ChatResponseReferencePartStatusKind =
						void 0),
				(e.$H2 = E),
				(e.$I2 = C);
			function E(a) {
				return (
					!!a &&
					typeof a == "object" &&
					"uri" in a &&
					a.uri instanceof t.URI &&
					"version" in a &&
					typeof a.version == "number" &&
					"ranges" in a &&
					Array.isArray(a.ranges) &&
					a.ranges.every(i.$iL.isIRange)
				);
			}
			function C(a) {
				return (
					!!a &&
					typeof a == "object" &&
					"documents" in a &&
					Array.isArray(a.documents) &&
					a.documents.every(E)
				);
			}
			var d;
			(function (a) {
				(a[(a.Complete = 1)] = "Complete"),
					(a[(a.Partial = 2)] = "Partial"),
					(a[(a.Omitted = 3)] = "Omitted");
			})(d || (e.ChatResponseReferencePartStatusKind = d = {}));
			var m;
			(function (a) {
				(a[(a.Down = 0)] = "Down"), (a[(a.Up = 1)] = "Up");
			})(m || (e.ChatAgentVoteDirection = m = {}));
			var r;
			(function (a) {
				(a.IncorrectCode = "incorrectCode"),
					(a.DidNotFollowInstructions = "didNotFollowInstructions"),
					(a.IncompleteCode = "incompleteCode"),
					(a.MissingContext = "missingContext"),
					(a.PoorlyWrittenOrFormatted = "poorlyWrittenOrFormatted"),
					(a.RefusedAValidRequest = "refusedAValidRequest"),
					(a.OffensiveOrUnsafe = "offensiveOrUnsafe"),
					(a.Other = "other"),
					(a.WillReportIssue = "willReportIssue");
			})(r || (e.ChatAgentVoteDownReason = r = {}));
			var u;
			(function (a) {
				(a[(a.Action = 1)] = "Action"), (a[(a.Toolbar = 2)] = "Toolbar");
			})(u || (e.ChatCopyKind = u = {})),
				(e.$J2 = (0, w.$Mi)("IChatService")),
				(e.$K2 = "accessibility.voice.keywordActivation");
		}),
		