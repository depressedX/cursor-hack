import '../../../../require.js';
import '../../../../exports.js';
import '../../instantiation/common/instantiation.js';
define(de[769], he([1, 0, 5]), function (ce /*require*/,
 e /*exports*/,
 t /*instantiation*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$5Xb = e.$4Xb = e.IssueSource = e.OldIssueType = void 0);
			var i;
			(function (E) {
				(E[(E.Bug = 0)] = "Bug"),
					(E[(E.PerformanceIssue = 1)] = "PerformanceIssue"),
					(E[(E.FeatureRequest = 2)] = "FeatureRequest");
			})(i || (e.OldIssueType = i = {}));
			var w;
			(function (E) {
				(E.VSCode = "vscode"),
					(E.Extension = "extension"),
					(E.Marketplace = "marketplace");
			})(w || (e.IssueSource = w = {})),
				(e.$4Xb = (0, t.$Mi)("issueService")),
				(e.$5Xb = (0, t.$Mi)("processService"));
		}),
		