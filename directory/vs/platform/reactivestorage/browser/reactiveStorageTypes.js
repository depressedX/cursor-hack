define(de[205], he([1, 0, 158, 7, 75]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$9zb =
					e.IndexingErrorType =
					e.$8zb =
					e.$7zb =
					e.$5zb =
					e.$4zb =
					e.$3zb =
					e.$2zb =
					e.$1zb =
					e.AIPanePosition =
					e.NewProjectState =
					e.$Zzb =
					e.$Yzb =
					e.SelectionType =
						void 0),
				(e.$6zb = u),
				(i = mt(i));
			var E;
			(function (h) {
				(h[(h.None = 0)] = "None"),
					(h[(h.Code = 1)] = "Code"),
					(h[(h.File = 2)] = "File"),
					(h[(h.Failure = 3)] = "Failure"),
					(h[(h.Image = 4)] = "Image"),
					(h[(h.Folder = 5)] = "Folder"),
					(h[(h.Docs = 6)] = "Docs");
			})(E || (e.SelectionType = E = {}));
			class C {
				constructor(c) {
					(this.c = !1),
						(this.d = []),
						(this.f = []),
						(this.e = c[Symbol.asyncIterator]());
				}
				async consume() {
					for (console.log("consuming"); ; ) {
						const { done: c, value: n } = await this.e.next();
						if (c) break;
						this.d.push(n);
						for (const g of this.f) g(n);
						this.f = [];
					}
					this.c = !0;
					for (const c of this.f) c(void 0);
					(this.f = []), console.log("consumed");
				}
				getAsyncIterable() {
					let c = 0;
					const n = this;
					return {
						[Symbol.asyncIterator]() {
							return {
								async next() {
									let g = { done: !0, value: "" };
									const p = new Promise((o) => {
										n.f.push(o);
									});
									return (
										c >= n.d.length
											? n.c ||
												(console.log("going to await"),
												await p,
												n.c ||
													(console.log("done going to await"),
													(g = { done: !1, value: n.d[c] })))
											: (g = { done: !1, value: n.d[c] }),
										console.log("toret", g, c, n.d.length, n.c),
										c++,
										g
									);
								},
							};
						},
					};
				}
			}
			e.$Yzb = C;
			class d {
				constructor() {
					(this.c = void 0), (this.d = void 0), (this.e = !1);
				}
				registerTextAreaElement(c, n) {
					(this.c = c), (this.d = n), this.e && this.focus();
				}
				insertAtSymbol() {
					this.d &&
						this.d.update(() => {
							const c = (0, t.$createTextNode)(" @"),
								n = (0, t.$getRoot)();
							let g = n.getLastChild();
							g === null && ((g = (0, t.$createParagraphNode)()), n.append(g)),
								g.append(c),
								n.selectEnd();
						});
				}
				focus(c, n) {
					this.c
						? ((this.e = !1),
							n || i.$Ogb() !== w.$Bfb
								? (this.c?.focus(),
									this.d?.update(() => {
										(0, t.$getRoot)().selectEnd(), c?.();
									}))
								: setTimeout(() => {
										this.c?.focus(),
											this.d?.update(() => {
												(0, t.$getRoot)().selectEnd(), c?.();
											});
									}, 25))
						: (this.e = !0);
				}
				isFocused() {
					return (
						this.c && this.c === i.getWindow(this.c).document.activeElement
					);
				}
				getRef() {
					return this.c;
				}
			}
			e.$Zzb = d;
			var m;
			(function (h) {
				(h.initial = "initial"),
					(h.clarification = "clarification"),
					(h.plan = "plan"),
					(h.planFeedback = "planClarification"),
					(h.breakdown = "breakdown"),
					(h.breakdownFeedback = "breakdownClarification"),
					(h.steps = "steps"),
					(h.stepsFeedback = "stepsFeedback"),
					(h.undecided = "undecided");
			})(m || (e.NewProjectState = m = {}));
			var r;
			(function (h) {
				(h.SIDEBAR = "sidebar"), (h.EDITOR = "editor");
			})(r || (e.AIPanePosition = r = {})),
				(e.$1zb = {
					position: { x: 0, y: 0 },
					horizontalBarSize: 0,
					tabHeight: 0,
					selectedView: "suggested",
					devToolsPosition: { x: 0, y: 0 },
					memories: [],
					isComposerBarChatCollapsed: !1,
					composerBarPosition: null,
				}),
				(e.$2zb = {
					"auto-accept": "Auto Accept",
					"preview-accept": "Preview Accept",
				}),
				(e.$3zb = {
					isEnabled: !1,
					explicitEnableOrDisable: void 0,
					preferredModelName: "o1-preview",
					lastBackgroundBugbotAt: void 0,
				}),
				(e.$4zb = {
					isComposerEnabled2: !0,
					alwaysKeepComposerInBound: !0,
					location2: "pane",
					nonBarLocation: "pane",
					chatLocation: "pane",
					hasMigratedChatLocation: !1,
					isBackgroundComposerEnabled: !1,
					defaultCapabilities: [],
					barAnchor: "center",
					autoApplyFilesOutsideContext: !0,
					shouldAutoContinueToolCall: !1,
					useDiffHistory: !1,
					useYoloMode: !1,
					yoloPrompt: "",
					yoloCommandAllowlist: [],
					yoloCommandDenylist: [],
					preferDiffInChat: !0,
					mainComposerMode: "edit",
					useAutoContext: !1,
					useContextBank: !1,
					defaultUseToolsInEdit: !1,
					enableDataHandleDebugging: !1,
					unification: !1,
					isAutoApplyEnabled: !1,
					shouldReviewChanges: "enabled",
					autoSaveAgenticEdits: null,
					wasBarPreviouslyOpen: !1,
					doNotShowYoloModeWarningAgain: !1,
					selectedFakeStreamerId: null,
					yoloDeleteFileDisabled: !1,
				}),
				(e.$5zb = { isNotepadEnabled: !0 });
			function u(h, c) {
				if (h.action !== c.action) return !1;
				switch (h.action) {
					case "trigger_gemini":
						return !0;
					case "trigger_v0_chain":
						return (
							h.args.relativeWorkspacePath === c.args.relativeWorkspacePath
						);
					case "trigger_opus_chain":
						return (
							h.args.relativeWorkspacePath === c.args.relativeWorkspacePath
						);
					default: {
						const n = h;
						return !1;
					}
				}
			}
			(e.$7zb = []), (e.$8zb = []);
			var a;
			(function (h) {
				(h.NO_ERROR = "NO_ERROR"),
					(h.NO_REPO = "NO_REPO"),
					(h.EXTENSION_ERROR = "EXTENSION_ERROR");
			})(a || (e.IndexingErrorType = a = {})),
				(e.$9zb = { cppModels: ["main", "turbo"], defaultCppModel: "main" });
		}),
		