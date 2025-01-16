define(
			de[4284],
			he([1, 0, 2, 13, 14, 225, 485, 1004, 36]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ComposerMessageCodeblockActions = r);
				function r(u) {
					const a = (0, m.$odc)(),
						h = { height: "16px", padding: "0px 3px" },
						c = (0, t.createComponent)(C.ComposerToolbarSimpleButton, {
							get style() {
								return {
									...h,
									"background-color": u.actionMenuPosition
										? "var(--vscode-input-background)"
										: void 0,
									gap: "4px",
								};
							},
							type: "secondary",
							hintText: "Apply",
							get onClick() {
								return u.onApplyClick;
							},
							get codicon() {
								return w.$ak.play;
							},
							title: "Apply",
						});
					return (0, t.createComponent)(d.$q$b, {
						get forceRerender() {
							return u.forceToolsRerender;
						},
						style: {
							display: "flex",
							"align-items": "center",
							padding: "0px 4px",
						},
						forceGap: 2,
						get children() {
							return [
								(0, t.createComponent)(C.ComposerToolbarSimpleButton, {
									type: "secondary",
									onClick: (n) => {
										n.stopPropagation(),
											u.handleCopy(),
											a.analyticsService.trackEvent("composer.code_block.copy");
									},
									get codicon() {
										return u.copyEnabled ? w.$ak.copy : w.$ak.check;
									},
									get hintText() {
										return u.copyEnabled ? "Copy" : "Copied";
									},
									get style() {
										return {
											...h,
											opacity: u.isMouseOver ? 1 : 0,
											transition: "opacity 0.1s ease-in-out",
										};
									},
								}),
								(0, t.createComponent)(i.Show, {
									get when() {
										return (
											E.REAPPLY_RELATED_STATUSES.includes(u.currentStatus) &&
											!u.reactiveCodeBlock?.isNotApplied
										);
									},
									get fallback() {
										return (0, t.createComponent)(i.Show, {
											get when() {
												return (
													E.APPLY_RELATED_STATUSES.includes(u.currentStatus) &&
													u.reactiveCodeBlock?.isNotApplied
												);
											},
											children: c,
										});
									},
									get children() {
										return (0, t.createComponent)(
											C.ComposerToolbarSimpleButton,
											{
												type: "secondary",
												onClick: (n) => {
													n.stopPropagation(),
														a.analyticsService.trackEvent(
															"composer.code_block.reapply",
														),
														a.composerService.reapply(
															u.composerId,
															u.codeBlockUri,
															u.versionExcludingNonAppliedCodeblocks,
														);
												},
												get codicon() {
													return w.$ak.refresh;
												},
												hintText: "Reapply",
												get style() {
													return {
														...h,
														opacity:
															u.isMouseOver || u.currentStatus === "cancelled"
																? 1
																: 0,
														transition: "opacity 0.1s ease-in-out",
													};
												},
											},
										);
									},
								}),
								(0, t.createComponent)(i.Show, {
									get when() {
										return u.shouldShowAcceptReject;
									},
									get children() {
										return (0, t.createComponent)(
											C.ComposerToolbarSimpleButton,
											{
												type: "secondary",
												onClick: (n) => {
													n.stopPropagation(),
														a.analyticsService.trackEvent(
															"composer.code_block.reject",
														),
														a.composerService.reject(
															u.composerId,
															u.codeBlockUri,
															u.codeBlockVersion,
														);
												},
												style: h,
												get codicon() {
													return w.$ak.close;
												},
												hintText: "Reject",
											},
										);
									},
								}),
								(0, t.createComponent)(i.Show, {
									get when() {
										return u.shouldShowAcceptReject;
									},
									get children() {
										return (0, t.createComponent)(
											C.ComposerToolbarSimpleButton,
											{
												type: "secondary",
												onClick: (n) => {
													n.stopPropagation(),
														a.analyticsService.trackEvent(
															"composer.code_block.accept",
														),
														a.composerService.accept(
															u.composerId,
															u.codeBlockUri,
															u.codeBlockVersion,
														);
												},
												style: h,
												get codicon() {
													return w.$ak.check;
												},
												hintText: "Accept",
											},
										);
									},
								}),
								(0, t.createComponent)(i.Show, {
									get when() {
										return u.hasDiffData && u.canShowDiff;
									},
									get children() {
										return (0, t.createComponent)(
											C.ComposerToolbarSimpleButton,
											{
												type: "secondary",
												get codicon() {
													return u.preferShowType === "diff"
														? w.$ak.codeOss
														: w.$ak.compareChanges;
												},
												get hintText() {
													return u.preferShowType === "diff"
														? "Show code"
														: "Show diff";
												},
												style: h,
												onClick: (n) => {
													n.stopPropagation();
													const g =
														u.preferShowType === "diff" ? "code" : "diff";
													a.analyticsService.trackEvent(
														"composer.code_block.toggle_diff",
														{ preferShowType: g },
													),
														u.setNonChatCollapsed(!1),
														u.setPreferShowType(g);
												},
											},
										);
									},
								}),
							];
						},
					});
				}
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	