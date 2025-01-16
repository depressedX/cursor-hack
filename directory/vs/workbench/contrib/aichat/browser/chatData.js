define(
			de[140],
			he([1, 0, 13, 27, 343, 12, 205]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Sgc =
						e.$Rgc =
						e.$Qgc =
						e.$Pgc =
						e.$Ogc =
						e.$Ngc =
						e.$Mgc =
						e.$Lgc =
						e.$Kgc =
						e.$Jgc =
						e.$Igc =
						e.$Hgc =
						e.$Ggc =
						e.$Fgc =
						e.$Egc =
						e.$Dgc =
						e.$Cgc =
						e.TabState =
						e.$Agc =
						e.$ygc =
						e.RepoStep =
						e.BubbleType =
						e.$vgc =
							void 0),
					(e.$wgc = m),
					(e.$xgc = r),
					(e.$zgc = a),
					(e.$Bgc = h),
					(e.$vgc = 0);
				var d;
				(function (p) {
					(p.USER_CHAT = "user"),
						(p.USER_CODE_INTERPRETER = "userCodeInterpreter"),
						(p.AI_CHAT = "ai"),
						(p.AI_CODE_INTERPRETER = "aiCodeInterpreter");
				})(d || (e.BubbleType = d = {}));
				function m() {}
				function r() {}
				var u;
				(function (p) {
					(p[(p.None = 0)] = "None"),
						(p[(p.GeneratingQueries = 1)] = "GeneratingQueries"),
						(p[(p.SearchingFiles = 2)] = "SearchingFiles"),
						(p[(p.RerankingFiles = 3)] = "RerankingFiles"),
						(p[(p.GeneratingTokens = 4)] = "GeneratingTokens"),
						(p[(p.Done = 5)] = "Done");
				})(u || (e.RepoStep = u = {})),
					(e.$ygc = (0, t.createContext)());
				function a() {
					return (0, t.useContext)(e.$ygc);
				}
				e.$Agc = (0, t.createContext)();
				function h() {
					return (0, t.useContext)(e.$Agc);
				}
				var c;
				(function (p) {
					(p.chat = "chat"), (p.codeInterpreter = "codeInterpreter");
				})(c || (e.TabState = c = {}));
				function n(p) {
					const o = p.bubbles.filter((f) => f.type === "user");
				}
				(e.$Cgc = "aichat.newfollowupaction"),
					(e.$Dgc = "aichat.chatToTask"),
					(e.$Egc = i.KeyMod.CtrlCmd | i.KeyCode.KeyE),
					(e.$Fgc = "aichat.showchatdropdown"),
					(e.$Ggc = "aichat.hidechatdropdown"),
					(e.$Hgc = "aichat.sladsheditsubmitfrombutton"),
					(e.$Igc = "aichat.warmfastapply"),
					(e.$Jgc = "aichat.multifileslasheditsubmitfrombutton"),
					(e.$Kgc = i.KeyMod.Alt | i.KeyMod.CtrlCmd | i.KeyCode.KeyL),
					(e.$Lgc = E.$l
						? i.KeyMod.CtrlCmd | i.KeyMod.Shift | i.KeyCode.KeyY
						: i.KeyMod.CtrlCmd | i.KeyCode.KeyY),
					(e.$Mgc = "aichat.open-ai-chat-side-pane"),
					(e.$Ngc = "aichat.open-ai-chat-editor"),
					(e.$Ogc = "aichat.open-ai-chat-window"),
					(e.$Pgc = "aichat.cancelchat"),
					(e.$Qgc = i.KeyMod.CtrlCmd | i.KeyCode.Backspace),
					(e.$Rgc = (0, w.$rs)(e.$Qgc, E.OS));
				class g {
					constructor(o) {
						(this.c = o), (this.a = new Map());
					}
					register(o, f) {
						return (
							this.a.set(o, f),
							() => {
								this.a.delete(o);
							}
						);
					}
					focus(o) {
						if (o?.inChatDontFocusBubble) return;
						const f = this.c(),
							b = f.selectedTabId
								? f.tabs.find((y) => y.tabId === f.selectedTabId)
								: f.tabs[0];
						if (b === void 0) return;
						const s = b.bubbles.filter((y) => y.type === "user"),
							l = b.lastFocusedBubbleId ?? s.at(s.length - 1)?.id;
						if (l) {
							const y = this.a.get(l);
							y && y.focus();
						}
					}
					focusFollowup() {
						const o = this.c(),
							f = o.selectedTabId
								? o.tabs.find((s) => s.tabId === o.selectedTabId)
								: o.tabs[0];
						if (f === void 0) return;
						const b = f.bubbles.at(f.bubbles.length - 1);
						if (b?.type === "user") {
							const s = this.a.get(b.id);
							s && s.focus();
						}
					}
					focusBubble(o) {
						const f = this.c();
						if (
							!(
								f.selectedTabId
									? f.tabs.find((l) => l.tabId === f.selectedTabId)
									: f.tabs[0]
							)?.bubbles.some((l) => l.id === o)
						)
							return;
						const s = this.a.get(o);
						s && s.focus();
					}
					isFocused(o) {
						const f = this.c(),
							b = f.selectedTabId
								? f.tabs.find((s) => s.tabId === f.selectedTabId)
								: f.tabs[0];
						return this.a.get(o)?.isFocused() ?? !1;
					}
				}
				e.$Sgc = g;
			},
		),
		