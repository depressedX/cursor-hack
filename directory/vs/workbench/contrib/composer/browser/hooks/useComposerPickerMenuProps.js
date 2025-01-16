define(
			de[4193],
			he([
				1, 0, 2, 2, 2, 2, 13, 14, 54, 26, 28, 9, 47, 177, 36, 558, 156, 444,
				1071, 860, 476, 299,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.useComposerPickerMenuProps = $);
				const y = (0, t.template)("<div>");
				function $(v, S) {
					const I = (0, n.$odc)(),
						{ composerDataService: T, composerService: P } = I,
						k = I.notepadDataService,
						[L, D] = (0, C.createSignal)(""),
						[M, N] = (0, C.createSignal)(0),
						{ options: A, isLoading: R } = (0, f.$1_b)(
							L,
							() => [
								o.EverythingSearchOptionType.File,
								o.EverythingSearchOptionType.Notepad,
								o.EverythingSearchOptionType.Semantic,
							],
							() => ({ semantic: { topK: 50, finalK: 25 } }),
						),
						{ currentComposer: O, updateCurrentComposer: B } = (0,
						c.useComposerDataHandle)(v),
						[U, z] = (0, C.createSignal)([]),
						F = (0, C.createMemo)(() =>
							S
								? T.getComposerBubble(O().composerId, S())?.context
								: O().context,
						);
					(0, C.createEffect)(() => {
						const G = L(),
							K = new Set(F()?.selectedImages?.map((J) => J.path) ?? []);
						if (G === "") {
							const J = F()?.fileSelections ?? [],
								W = new Set(J.map((_) => (0, l.$8gc)(_))),
								X = F()?.notepads ?? [],
								Y = new Set(X.map((_) => _.notepadId)),
								ie = [];
							for (const _ of A())
								if (
									_.type === o.EverythingSearchOptionType.File ||
									_.type === o.EverythingSearchOptionType.Semantic
								) {
									if (!_.uri || W.has(_.uri.toString()) || K.has(_.uri.fsPath))
										continue;
									ie.push(_);
								} else if (_.type === o.EverythingSearchOptionType.Notepad) {
									if (!_.notepadId || Y.has(_.notepadId)) continue;
									ie.push(_);
								}
							const ne = (_) => k.getNotepadData(_)?.name ?? g.$F9b,
								ee = [
									...J.map((_) => ({
										type: "file",
										uri: a.URI.revive(_.uri),
										fileName: (0, m.$sc)(a.URI.revive(_.uri).fsPath),
									})),
									...X.map((_) => ({
										type: "notepad",
										id: _.notepadId,
										name: ne(_.notepadId),
									})),
									...ie
										.map((_) =>
											_.type === o.EverythingSearchOptionType.File ||
											_.type === o.EverythingSearchOptionType.Semantic
												? {
														type: "file",
														uri: a.URI.from(_.uri),
														fileName: (0, m.$sc)(
															a.URI.revive(_.uri)?.fsPath ?? "",
														),
														labelMatches: _.labelMatches,
														descriptionMatches: _.descriptionMatches,
													}
												: _.type === o.EverythingSearchOptionType.Notepad
													? {
															type: "notepad",
															id: _.notepadId,
															name: _.name,
															labelMatches: _.labelMatches,
															descriptionMatches: _.descriptionMatches,
														}
													: void 0,
										)
										.filter(u.$tg),
								];
							z(ee);
							return;
						}
						z(
							A()
								.filter((J, W, X) =>
									J.type === o.EverythingSearchOptionType.File ||
									J.type === o.EverythingSearchOptionType.Semantic
										? J.uri &&
											!K.has(J.uri.fsPath) &&
											X.findIndex(
												(Y) =>
													(Y.type === o.EverythingSearchOptionType.File ||
														Y.type === o.EverythingSearchOptionType.Semantic) &&
													Y.uri?.toString() === J.uri?.toString(),
											) === W
										: J.type === o.EverythingSearchOptionType.Notepad
											? X.findIndex(
													(Y) =>
														Y.type === o.EverythingSearchOptionType.Notepad &&
														Y.notepadId === J.notepadId,
												) === W
											: !0,
								)
								.map((J) => {
									if (
										J.type === o.EverythingSearchOptionType.File ||
										J.type === o.EverythingSearchOptionType.Semantic
									)
										return {
											type: "file",
											uri: J.uri,
											fileName: (0, m.$sc)(J.uri.fsPath),
											labelMatches: J.labelMatches,
											descriptionMatches: J.descriptionMatches,
										};
									if (J.type === o.EverythingSearchOptionType.Notepad)
										return {
											type: "notepad",
											id: J.notepadId,
											name: J.name,
											labelMatches: J.labelMatches,
											descriptionMatches: J.descriptionMatches,
										};
								})
								.filter(u.$tg),
						);
					});
					const x = (0, C.createMemo)(() => {
							const G = U(),
								K = O().composerId,
								J = S?.(),
								W = J ? T.getComposerBubble(K, J)?.context : O().context;
							if (!W)
								return console.error("[composer] No context available"), [];
							const X = W.fileSelections ?? [],
								Y = W.notepads ?? [];
							return G.map((ie) => {
								if (ie.type === "file") {
									const ne = I.customEditorLabelService.getName(
										a.URI.revive(ie.uri),
									);
									return {
										id: ie.uri.toString(),
										item: ie,
										title: ne ?? ie.fileName,
										subtitle: `${(0, m.$rc)(I.workspaceContextService.asRelativePath(a.URI.revive(ie.uri)))}/`,
										isAdded: X.some((ee) => (0, a.$Ac)(ee.uri, ie.uri)),
										icon: (0, E.createComponent)(p.$k$b, {
											get fileName() {
												return (0, m.$sc)(a.URI.revive(ie.uri).fsPath);
											},
											get workspaceContextService() {
												return I.workspaceContextService;
											},
											get modelService() {
												return I.modelService;
											},
											get languageService() {
												return I.languageService;
											},
										}),
										titleHighlights: ie.labelMatches,
										subtitleHighlights: ie.descriptionMatches,
										renderPreview:
											ie.type === "file" ? () => (0, b.$7bc)(ie.uri) : void 0,
									};
								}
								return {
									id: ie.id,
									item: ie,
									title: ie.name,
									subtitle: "Notepad",
									isAdded: Y.some((ne) => ne.notepadId === ie.id),
									icon: (() => {
										const ne = y();
										return (
											ne.style.setProperty("opacity", "0.7"),
											ne.style.setProperty("padding-right", "6px"),
											(0, w.effect)(() =>
												(0, i.className)(
													ne,
													r.ThemeIcon.asClassName(d.$ak.book),
												),
											),
											ne
										);
									})(),
									titleHighlights: ie.labelMatches,
									subtitleHighlights: ie.descriptionMatches,
								};
							});
						}),
						H = (G) => {
							const K = O().composerId;
							if (!K) return;
							const J =
									G.type === "file" &&
									(G.fileName.endsWith(".png") ||
										G.fileName.endsWith(".jpg") ||
										G.fileName.endsWith(".jpeg") ||
										G.fileName.endsWith(".gif") ||
										G.fileName.endsWith(".bmp") ||
										G.fileName.endsWith(".webp")),
								W = S?.();
							J
								? (async () => {
										const Y = new Image(),
											ie = await fetch(G.uri.fsPath).then((ee) => ee.blob());
										Y.src = URL.createObjectURL(ie);
										const ne = {
											path: G.uri.fsPath,
											uuid: (0, h.$9g)(),
											dimension: { width: Y.width, height: Y.height },
											loadedAt: Date.now(),
										};
										W
											? P.addBubbleContext({
													composerId: K,
													bubbleId: W,
													contextType: "selectedImages",
													value: ne,
													shouldShowPreview: !1,
												})
											: P.addContext({
													composerId: K,
													contextType: "selectedImages",
													value: ne,
													shouldShowPreview: !1,
												});
									})()
								: G.type === "file"
									? W
										? P.addBubbleContext({
												composerId: K,
												bubbleId: W,
												contextType: "fileSelections",
												value: { uri: G.uri },
												shouldShowPreview: !1,
											})
										: P.addContext({
												composerId: K,
												contextType: "fileSelections",
												value: { uri: G.uri },
												shouldShowPreview: !1,
											})
									: W
										? P.addBubbleContext({
												composerId: K,
												bubbleId: W,
												contextType: "notepads",
												value: { notepadId: G.id },
												shouldShowPreview: !1,
											})
										: P.addContext({
												composerId: K,
												contextType: "notepads",
												value: { notepadId: G.id },
												shouldShowPreview: !1,
											});
						},
						q = (G) => {
							const K = O().composerId;
							if (!K) return;
							const J = S?.();
							if (G.type === "file") {
								const W = J ? T.getComposerBubble(K, J)?.context : O().context;
								if (!W) return;
								const X = W.fileSelections?.findIndex((Y) =>
									(0, a.$Ac)(Y.uri, G.uri),
								);
								if (typeof X != "number" || X === -1) return;
								J
									? P.removeBubbleContext({
											composerId: K,
											bubbleId: J,
											contextType: "fileSelections",
											index: X,
										})
									: P.removeContext({
											composerId: K,
											contextType: "fileSelections",
											index: X,
										});
							} else {
								const W = J ? T.getComposerBubble(K, J)?.context : O().context;
								if (!W) return;
								const X = W.notepads?.findIndex((Y) => Y.notepadId === G.id);
								if (typeof X != "number" || X === -1) return;
								J
									? P.removeBubbleContext({
											composerId: K,
											bubbleId: J,
											contextType: "notepads",
											index: X,
										})
									: P.removeContext({
											composerId: K,
											contextType: "notepads",
											index: X,
										});
							}
						};
					return (0, C.createMemo)(() => ({
						items: x(),
						onItemAdd: H,
						onItemRemove: q,
						onSearch: D,
						selectedIndex: M(),
						setSelectedIndex: N,
						height: (0, s.$Kac)() ? 300 : void 0,
						isLoading: R(),
					}));
				}
			},
		),
		