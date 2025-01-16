define(
			de[859],
			he([1, 0, 2, 2, 2, 13, 58, 12, 36, 315, 1979]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$3bc = c),
					(e.$4bc = n),
					(e.$5bc = g);
				const a = (0, t.template)("<div> toggle, <!> open"),
					h = (0, t.template)("<div>");
				function c(p) {
					const o = (0, m.$odc)(),
						f = o.reactiveStorageService,
						b = (0, E.createMemo)(() =>
							o.aiSettingsService.getAvailableModelsReactive({
								isLongContextOrDebuggerMode:
									p.isLongContextMode || p.isDebuggerMode,
								isChat: p.isChat,
							}),
						);
					f.setApplicationUserPersistentStorage("aiSettings", (y) => {
						let $ = y.modelOverrideEnabled ?? [];
						for (const v of p.additionalModels ?? []) $.push(v);
						return { ...y, modelOverrideEnabled: $ };
					}),
						(0, E.onCleanup)(() => {
							f.setApplicationUserPersistentStorage("aiSettings", (y) => {
								const $ = y.modelOverrideEnabled ?? [],
									v = p.additionalModels ?? [],
									S = $.filter((I) => !v.includes(I));
								return { ...y, modelOverrideEnabled: S };
							}),
								p.additionalModels?.includes(s()) &&
									o.reactiveStorageService.setApplicationUserPersistentStorage(
										"aiSettings",
										(y) => ({
											...y,
											openAIModel: b()[0],
											longContextOpenAIModel: b()[0],
										}),
									);
						});
					const s = (0, E.createMemo)(() =>
							(0, r.$U6b)(
								o.reactiveStorageService,
								b(),
								p.isLongContextMode,
								p.specificModelField,
							),
						),
						l = (y) => (y === "gpt-3.5-turbo" ? "gpt-3.5" : y);
					return (0, w.createComponent)(u.$2bc, {
						isRelative: !1,
						get buttonHint() {
							return p.buttonHint;
						},
						get setTriggerFn() {
							return p.setTriggerFn;
						},
						get value() {
							return l(s());
						},
						get forceRerender() {
							return p.forceRerender;
						},
						get class() {
							return p.class;
						},
						get reverseChevron() {
							return p.reverseChevron;
						},
						get buttonId() {
							return p.buttonId;
						},
						get buttonStyle() {
							return {
								"max-width": "100%",
								display: "inline-flex",
								"min-width": "0",
								"flex-shrink": 1,
								...p.style,
							};
						},
						get anchor() {
							return p.anchor;
						},
						labelStyle: {
							overflow: "hidden",
							"text-overflow": "ellipsis",
							"white-space": "nowrap",
						},
						containerStyle: {
							"flex-shrink": 1,
							overflow: "hidden",
							display: "flex",
							"align-items": "center",
						},
						get onOpen() {
							return p.onOpen;
						},
						get onCloseIgnoresClicking() {
							return p.onClose;
						},
						get items() {
							return b().map((y) => ({ id: y, label: l(y) }));
						},
						get origLabel() {
							return l(s());
						},
						onSelect: (y) => {
							p.onOverwriteSelectBehavior?.(y) ||
								(o.commandService.executeCommand(
									C.$0V,
									y,
									p.isLongContextMode,
									p.specificModelField,
								),
								p.onSelect?.(y));
						},
						get belowListComponent() {
							return (() => {
								const y = a(),
									$ = y.firstChild,
									v = $.nextSibling,
									S = v.nextSibling;
								return (
									y.style.setProperty("font-size", "8px"),
									y.style.setProperty("line-height", "150%"),
									y.style.setProperty(
										"color",
										"var(--vscode-input-placeholderForeground)",
									),
									y.style.setProperty("padding", "0px 4px"),
									y.style.setProperty("text-align", "right"),
									y.style.setProperty("width", "100%"),
									y.style.setProperty("box-sizing", "border-box"),
									(0, i.insert)(y, `${d.$m ? "\u2318" : "ctrl+"}/`, $),
									(0, i.insert)(
										y,
										`${d.$m ? "\u2318\u21E7" : "ctrl+shift+"}/`,
										v,
									),
									y
								);
							})();
						},
					});
				}
				function n(p) {
					return h();
				}
				function g(p) {
					const o = (0, m.$odc)(),
						f = (0, E.createMemo)(() =>
							o.aiSettingsService.getAvailableModelsReactive({
								isLongContextOrDebuggerMode: !1,
								isChat: !1,
							}),
						),
						b = (s) => (s === "gpt-3.5-turbo" ? "gpt-3.5" : s);
					return (0, w.createComponent)(u.$2bc, {
						isRelative: !1,
						get buttonHint() {
							return p.buttonHint;
						},
						get value() {
							return b(p.value);
						},
						get class() {
							return p.class;
						},
						get reverseChevron() {
							return p.reverseChevron;
						},
						get buttonStyle() {
							return {
								...p.style,
								"max-width": "100%",
								display: "inline-flex",
								"min-width": "0",
								"flex-shrink": 1,
							};
						},
						labelStyle: {
							overflow: "hidden",
							"text-overflow": "ellipsis",
							"white-space": "nowrap",
						},
						containerStyle: {
							"flex-shrink": 1,
							overflow: "hidden",
							display: "flex",
							"align-items": "center",
						},
						get items() {
							return f().map((s) => ({ id: s, label: b(s) }));
						},
						get origLabel() {
							return b(p.value);
						},
						get onSelect() {
							return p.onSelect;
						},
					});
				}
			},
		),
		