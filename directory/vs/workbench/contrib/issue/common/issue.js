import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/instantiation/common/instantiation.js';
define(de[376], he([1, 0, 5]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$8Xb = e.$7Xb = e.$6Xb = e.IssueSource = e.IssueType = void 0);
			var i;
			(function (E) {
				(E[(E.Bug = 0)] = "Bug"),
					(E[(E.PerformanceIssue = 1)] = "PerformanceIssue"),
					(E[(E.FeatureRequest = 2)] = "FeatureRequest");
			})(i || (e.IssueType = i = {}));
			var w;
			(function (E) {
				(E.VSCode = "vscode"),
					(E.Extension = "extension"),
					(E.Marketplace = "marketplace");
			})(w || (e.IssueSource = w = {})),
				(e.$6Xb = (0, t.$Mi)("issueFormService")),
				(e.$7Xb = (0, t.$Mi)("workbenchIssueService")),
				(e.$8Xb = (0, t.$Mi)("workbenchProcessService"));
		}),
		