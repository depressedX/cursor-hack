import '../../../../../require.js';
import '../../../../../exports.js';
define(de[789], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$$cc =
					e.$0cc =
					e.$9cc =
					e.$8cc =
					e.$7cc =
					e.$6cc =
					e.$5cc =
					e.$4cc =
						void 0),
				(e.$4cc = 1),
				(e.$5cc = 100),
				(e.$6cc = 10),
				(e.$7cc = {
					enabled: !1,
					isSubsidized: !1,
					backgroundCallFrequencyMs: 3 * 60 * 60 * 1e3,
					killSwitch: !1,
					showIntrusiveNotificationOnlyIfLastTimeWasMoreThanMsAgo: 10,
					backgroundDiffAbsoluteMaxTokens: 128e3,
					backgroundDiffMinMinTokenThreshold: 2e3,
					backgroundDiffMinMaxTokenThreshold: 5e4,
					defaultDiffContextLines: 10,
					defaultFallbackIterations: 12,
					diffAbsoluteMaxTokens: 5e5,
					backgroundDiffLastCommitLessThanThisManyMsAgo: 1e3 * 60 * 15,
					customInstructionsMaxCharLength: 4e3,
					thresholdForExpensiveRunModalCents: 10 * 100,
					backgroundUnifiedContextLines: 10,
					backgroundDiffIncludeUncommitted: !1,
					cheapModelName: "accounts/anysphere/models/bugbot-12-10",
					cheapAbsoluteMaxTokens: 15e4,
					expensiveAbsoluteMaxTokens: 15e5,
				}),
				(e.$8cc = {
					none: "None",
					generating: "Generating",
					errored: "Errored",
					completed: "Completed",
				}),
				(e.$9cc = 0),
				(e.$0cc = [
					{
						type: "text",
						content:
							"Bug Finder analyzes code changes between your current branch and the main branch in your Git remote repository.",
					},
					{
						type: "text",
						content:
							"For the best results, run it on feature branches before merging into main to catch potential issues early in development. Cost increases with the number of lines changed.",
					},
				]),
				(e.$$cc = [
					...e.$0cc,
					{ type: "text", content: "" },
					{
						type: "highlight",
						before:
							"AI-powered bug detection is still experimental and may not catch all issues in your code. ",
						highlight: "You may lose your money and get zero valid bugs back.",
						after: " Please use at your own risk.",
					},
					{ type: "text", content: "" },
					{
						type: "text",
						content:
							"We're hoping to make the bug finder both much more accurate and much cheaper in the coming months.",
					},
				]);
		}),
		