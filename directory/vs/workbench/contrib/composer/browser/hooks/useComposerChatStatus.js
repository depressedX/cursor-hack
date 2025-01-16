define(de[858], he([1, 0, 13, 126, 177, 36]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.useComposerChatStatus = C);
			function C(d) {
				const m = (0, E.$odc)(),
					{ composerDataService: r, composerService: u } = m,
					{ currentComposer: a, composerDataHandle: h } = (0,
					w.useComposerDataHandle)(d),
					c = (0, t.createMemo)(() => a()?.status ?? "none"),
					n = (0, t.createMemo)(() =>
						Object.values(a()?.codeBlockData ?? {}).some((b) =>
							b.some((s) => s.status === "applying" && !s.isNotApplied),
						),
					),
					g = (0, t.createMemo)(() => r.isRunningCapabilities(a().composerId)),
					p = (b) => {
						const s = [];
						for (let l = b.length - 1; l >= 0; l--) {
							const y = b[l];
							if (y.type !== i.ConversationMessage_MessageType.AI) break;
							s.unshift(y);
						}
						return s;
					},
					o = (0, t.createMemo)(() => {
						const b = a()?.conversation;
						if (!b || b.length === 0) return !1;
						const s = p(b);
						if (
							s.length === 0 ||
							!s.some((v) => v.codeBlocks && v.codeBlocks.length > 0)
						)
							return !1;
						const y =
								c() === "aborted" &&
								s.every((v) => (v.codeBlocks?.length ?? 0) === 0),
							$ = s.every((v) =>
								!v.codeBlocks || v.codeBlocks.length === 0
									? !0
									: !v.codeBlocks.some(
											(S) =>
												r.getCodeBlockStatus(h(), S.uri, S.version) !==
													"cancelled" &&
												r.getCodeBlockStatus(h(), S.uri, S.version) !==
													"aborted" &&
												r.getCodeBlockStatus(h(), S.uri, S.version) !==
													"rejected",
										),
							);
						return y || $;
					});
				return (0, t.createMemo)(() =>
					c() === "generating"
						? "generating"
						: n()
							? "applying"
							: g()
								? "running"
								: o()
									? "cancelled"
									: c() === "completed"
										? "completed"
										: "cancelled",
				);
			}
		}),
		