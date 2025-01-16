define(
			de[3951],
			he([1, 0, 167, 262, 395, 351, 209, 1053, 45]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.AutoContext = void 0);
				let r = class extends i.ComposerCapability {
					constructor(a, h, c, n, g) {
						super(a, h),
							(this.composerDataService = c),
							(this.contextBankService = n),
							(this.reactiveStorageService = g),
							(this.priority = 1),
							(this.type =
								t.ComposerCapabilityRequest_ComposerCapabilityType.AUTO_CONTEXT),
							(this.name =
								i.capabilityTypeLabels[
									t.ComposerCapabilityRequest_ComposerCapabilityType.AUTO_CONTEXT
								]),
							(this.schema = E.autoContextSchema);
					}
					shouldRunInPlaceMutateRequestBeforeSubmit(a) {
						return this.shouldDoAutoContext(a);
					}
					silentRunInPlaceMutateRequestBeforeSubmit(a) {
						return !0;
					}
					shouldDoAutoContext(a) {
						return (
							this.reactiveStorageService.applicationUserPersistentStorage
								.composerState.useContextBank === !0
						);
					}
					async runInPlaceMutateRequestBeforeSubmit(a, h) {
						let c;
						try {
							c = await this.contextBankService.getRankedFiles({
								numberOfChunks: 5,
								composerRequest: a,
								useCachedResults: !0,
								composerId: this.composerId,
							});
						} catch (n) {
							console.error("[composer] Error in getRankedFiles", n);
						}
						a.additionalRankedContext = c ?? [];
					}
				};
				(e.AutoContext = r),
					(e.AutoContext = r =
						Ne(
							[
								(0, w.autoCancellableAndStatusUpdater)(),
								j(2, C.IComposerDataService),
								j(3, d.$Wcc),
								j(4, m.$0zb),
							],
							r,
						)),
					(0, i.registerComposerCapability)(
						t.ComposerCapabilityRequest_ComposerCapabilityType.AUTO_CONTEXT,
						r,
					);
			},
		),
		