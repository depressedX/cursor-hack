define(
			de[3992],
			he([1, 0, 42, 118, 45, 280, 134, 287]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$UZc = void 0);
				let m = class {
					constructor(u, a, h, c, n, g) {
						(this.a = u),
							(this.b = a),
							(this.c = h),
							(this.d = c),
							(this.e = n),
							(this.f = g),
							(this.g = new AbortController()),
							(this.h = !1),
							(this.j = void 0);
					}
					update_IS_CALLED_ON_EVERY_KEYSTROKE_SO_BE_CAREFUL(u, a) {
						this.g.signal.aborted ||
							this.h ||
							((this.h = !0),
							(this.j = (async () => {
								try {
									if (
										(Promise.resolve()
											.then(() => {
												this.f.maybeRefreshFeatureStatus(
													"shouldSendCmdKDiffHistory",
												);
											})
											.catch(() => {}),
										this.f.getCachedFeatureStatus(
											"shouldSendCmdKDiffHistory",
										) !== !0)
									)
										return;
									const c =
										(await this.e.onlyLocalProvider?.runCommand(
											C.EditHistoryActions.CompileGlobalDiffTrajectoriesForCmdk,
											{ relativePathToDisplayName: {}, mustUseCmdkNotCpp: !0 },
										)) ?? [];
									u.case,
										(
											await this.a.newItems([
												...c.map((g, p) => ({
													intent: a,
													item: {
														case: "fileDiffHistory",
														value: {
															cppFileDiffHistory: g,
															howManyDiffsAgo: c.length - p - 1,
														},
													},
												})),
											])
										).ok() ||
											this.a.error({
												message: "Failed to add in diff history.",
											});
								} catch (h) {
									console.warn(
										"Failed to get diff history for cmdk. Falling back to no diff history.",
										h,
									);
								}
							})()));
					}
					async blockForFinalInput(u, a) {
						return "fallBackToCachedReranked";
					}
					freeze() {
						this.g.abort();
					}
					unfreeze() {
						this.g = new AbortController();
					}
					dispose() {
						this.g.abort();
					}
				};
				(e.$UZc = m),
					(e.$UZc = m =
						Ne(
							[
								j(1, t.$MO),
								j(2, i.$Nfc),
								j(3, w.$0zb),
								j(4, E.$3Db),
								j(5, d.$H7b),
							],
							m,
						));
			},
		),
		