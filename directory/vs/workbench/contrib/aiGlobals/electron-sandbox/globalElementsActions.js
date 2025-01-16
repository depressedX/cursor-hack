define(
			de[3940],
			he([
				1, 0, 893, 83, 75, 58, 9, 47, 65, 499, 11, 31, 119, 22, 371, 110, 62,
				45, 134, 32, 280, 118, 191, 401, 151, 148, 418, 140, 57, 258, 14, 232,
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
				y,
				$,
				v,
				S,
				I,
				T,
				P,
				k,
				L,
				D,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(0, u.$4X)(
						class extends u.$3X {
							constructor() {
								super({
									id: "cursor.doupdate",
									title: {
										value: "Cursor: Attempt Update",
										original: "Cursor: Attempt Update",
									},
									f1: !0,
								});
							}
							run(A, R, ...O) {
								A.get(n.$V8c).sendRawMessage("vscode:do-update", "");
							}
						},
					),
					(0, u.$4X)(
						class extends u.$3X {
							constructor() {
								super({
									id: "cursor.checkonupdate",
									title: {
										value: "Cursor: Check for Update",
										original: "Cursor: Check for Update",
									},
									f1: !1,
								});
							}
							async run(A, R, ...O) {
								const B = A.get(c.$ll),
									U = A.get(v.$ucd),
									z = A.get(o.$0zb);
								if (z.nonPersistentStorage.showingUpdate) return;
								const F = C.URI.joinPath(
									U.userHome,
									A.get(p.$Bk).dataFolderName,
									"shouldUpdate",
								);
								if (!(await B.exists(F))) return;
								(await B.readFile(F)).value.toString().trim() === "1" &&
									z.setNonPersistentStorage("showingUpdate", !0);
							}
						},
					),
					(0, u.$4X)(
						class extends u.$3X {
							constructor() {
								super({
									id: "cursor.publicLogCapture",
									title: { value: "Send Event", original: "Send Event" },
									f1: !1,
								});
							}
							async run(A, R) {
								A.get(b.$km).publicLogCapture(R);
							}
						},
					),
					(0, u.$4X)(
						class extends u.$3X {
							constructor() {
								super({
									id: "cursor.newdocs",
									title: {
										value: "Add New Custom Docs",
										original: "Add New Custom Docs",
									},
									f1: !0,
								});
							}
							async run(A, R, ...O) {
								const B = A.get(o.$0zb);
								B.setNonPersistentStorage("showingDocsModal", !0),
									await new Promise((U) => {
										const z = w.$Bfb.setInterval(() => {
											B.nonPersistentStorage.showingDocsModal ||
												(w.$Bfb.clearInterval(z), U());
										}, 100);
									});
							}
						},
					),
					(0, u.$4X)(
						class extends u.$3X {
							constructor() {
								super({
									id: "cursor.checkOkToIndexLink",
									title: {
										value: "Check OK to Index Link",
										original: "Check OK to Index Link",
									},
									f1: !1,
								});
							}
							async run(A, R, ...O) {
								const B = A.get(o.$0zb);
								return (
									B.setNonPersistentStorage("potentialIndexLink", R),
									B.setNonPersistentStorage("showDocsLinkConfirmation", !0),
									await new Promise((U) => {
										const z = w.$Bfb.setInterval(() => {
											B.nonPersistentStorage.showDocsLinkConfirmation ||
												(w.$Bfb.clearInterval(z), U());
										}, 100);
									}),
									B.nonPersistentStorage.okToIndexDocsLink
								);
							}
						},
					),
					(0, u.$4X)(
						class extends u.$3X {
							constructor() {
								super({
									id: "cursor.mentionLinkToolbar",
									title: {
										value: "Mention Link Toolbar",
										original: "Mention Link Toolbar",
									},
									f1: !1,
								});
							}
							async run(A, R, ...O) {
								const B = A.get(o.$0zb);
								B.setNonPersistentStorage("mentionLinkToolbarInfo", R),
									await new Promise((U) => {
										const z = w.$Bfb.setInterval(() => {
											B.nonPersistentStorage.mentionLinkToolbarInfo ||
												(w.$Bfb.clearInterval(z), U());
										}, 100);
									});
							}
						},
					),
					(0, u.$4X)(
						class extends u.$3X {
							constructor() {
								super({
									id: "cursor.submitdocs",
									title: {
										value: "Submit New Docs",
										original: "Submit New Docs",
									},
									f1: !1,
								});
							}
							async run(A, R, ...O) {
								const B = A.get(o.$0zb),
									U = A.get(l.$Nfc),
									z = A.get(a.$ek),
									F = A.get($.$W6b),
									x = await U.uploadClient(),
									H =
										t.$6_.typeName +
										"/" +
										t.$6_.methods.uploadDocumentation.name;
								try {
									const V = (
										await x.uploadDocumentation(R, {
											headers: (0, y.$m6b)((0, d.$9g)()),
										})
									).docUuid;
									return z.executeCommand(E.$$W, V), V;
								} catch (q) {
									F.handleError(q, new i.$Zs(), (0, d.$9g)(), H, "other");
								}
							}
						},
					),
					(0, u.$4X)(
						class extends u.$3X {
							constructor() {
								super({
									id: E.$YW,
									title: {
										value: "Show Usage Pricing Modal",
										original: "Show Usage Pricing Modal",
									},
									f1: !1,
								});
							}
							async run(A, ...R) {
								A.get(o.$0zb).setNonPersistentStorage(
									"showUsageBasedPricingModal",
									"justshow",
								);
							}
						},
					),
					(0, u.$4X)(
						class extends u.$3X {
							constructor() {
								super({
									id: E.$ZW,
									title: {
										value: "Show Turbo Mode Modal",
										original: "Show Turbo Mode Modal",
									},
									f1: !1,
								});
							}
							async run(A, ...R) {
								A.get(o.$0zb).setNonPersistentStorage("showTurboModeModal", !0);
							}
						},
					),
					(0, u.$4X)(
						class extends u.$3X {
							constructor() {
								super({
									id: E.$1W,
									title: {
										value: "Show Add Fast Requests Modal",
										original: "Show Add Fast Requests Modal",
									},
									f1: !1,
								});
							}
							async run(A, ...R) {
								A.get(o.$0zb).setNonPersistentStorage(
									"showAddFastRequestsModal",
									!0,
								);
							}
						},
					),
					(0, u.$4X)(
						class extends u.$3X {
							constructor() {
								super({
									id: E.$2W,
									title: {
										value: "Open Account Settings",
										original: "Open Account Settings",
									},
									f1: !1,
								});
							}
							async run(A, ...R) {
								A.get(D.$x6b).settings();
							}
						},
					),
					(0, u.$4X)(
						class extends u.$3X {
							constructor() {
								super({
									id: "cursor.removevim",
									title: {
										value: "Cursor Vim: Remove Vim Mode",
										original: "Cursor Vim: Remove Vim Mode",
									},
									f1: !0,
								});
							}
							async run(A, R, ...O) {
								const B = A.get(h.$Hp),
									U = A.get(g.$y7c),
									z = await B.getInstalled();
								for (const F of z)
									F.identifier.id === "vscodevim.vim" && B.uninstall(F);
								U.reload(void 0);
							}
						},
					),
					(0, u.$4X)(
						class extends u.$3X {
							constructor() {
								super({
									id: E.$EV,
									title: { value: "Exec command", original: "Exec command" },
									f1: !0,
								});
							}
							async run(A, ...R) {
								return await A.get(g.$y7c).exec4(...R);
							}
						},
					),
					(0, u.$4X)(
						class extends u.$3X {
							constructor() {
								super({
									id: E.$SW,
									title: { value: "Submit Fix", original: "Submit Fix" },
									f1: !1,
								});
							}
							async run(A, ...R) {
								const O = A.get(a.$ek),
									B = A.get(o.$0zb),
									U = A.get(m.$dtb),
									[z, F] = R,
									x = U.getActiveCodeEditor(),
									H = x?.getModel();
								if (x === null || H?.uri.toString() !== z.toString() || !H)
									return;
								const q = Math.max(1, F.startLineNumber - 2),
									V = Math.min(H.getLineCount(), F.endLineNumber + 4);
								await x.setSelection({
									startLineNumber: q,
									startColumn: F.startColumn,
									endLineNumber: V,
									endColumn: F.endColumn,
								}),
									await O.executeCommand(r.$t7b);
								const G = B.nonPersistentStorage.promptBars.at(-1),
									K = "Please fix";
								G?.data.delegate.setText(K, K);
								let J = 0;
								do await new Promise((W) => setTimeout(W, 150)), J++;
								while (
									(G?.data.delegate.numSubmitListeners() === 0 ||
										G?.data.delegate.getText()?.trim() !== K) &&
									J < 3
								);
								G?.data.delegate.submit();
							}
						},
					);
				const M = "cursor.ai.reportBadChat";
				(0, u.$4X)(
					class extends u.$3X {
						constructor() {
							super({
								id: M,
								title: {
									value: "Report Latest Chat as Bad",
									original: "Report Latest Chat as Bad",
								},
								f1: !0,
							});
						}
						async run(A, ...R) {
							const O = A.get(l.$Nfc),
								B = A.get(P.$GO),
								z = A.get(I.$qgc)
									.selectedTab()
									.bubbles.filter(
										(F) =>
											F.messageType === i.PureMessage_MessageType.ASSISTANT &&
											F.type === T.BubbleType.AI_CHAT,
									)
									.at(-1);
							z && z.requestId
								? (O.reportGenerationFeedback(
										z.requestId,
										S.ReportGenerationFeedbackRequest_FeedbackType.THUMBS_DOWN,
									),
									B.info("Done!"))
								: B.error("No AI response found in the current chat");
						}
					},
				),
					(0, u.$4X)(
						class extends u.$3X {
							constructor() {
								super({
									id: "cursor.generateGitCommitMessage",
									title: {
										value: "Generate Commit Message",
										original: "Generate Commit Message",
									},
									f1: !0,
									icon: L.$ak.sparkle,
								});
							}
							async run(A, R, O, B) {
								const U = A.get(l.$Nfc),
									z = A.get(k.$c7),
									F = R
										? Array.from(z.repositories).find(
												(J) => J.provider.rootUri?.toString() === R?.toString(),
											)
										: Array.from(z.repositories)[0];
								if (!F) throw new Error("No repository found");
								if (R === void 0 && ((R = F.provider.rootUri), !R))
									throw new Error("No rootUri found");
								if (O === void 0) {
									O = [];
									for (const J of F.provider.groups)
										O.push({
											resourceGroupId: J.id,
											resources: [...J.resources.map((W) => W.sourceUri)],
										});
								}
								let x = O.filter((J) => J.resourceGroupId === "index").flatMap(
									(J) => J.resources,
								);
								x.length === 0 &&
									(x = O.filter(
										(J) => J.resourceGroupId === "workingTree",
									).flatMap((J) => J.resources));
								const q = await A.get(s.$3Db).provider?.runCommand(
									f.GitActions.GetCurrentIndexAndRecentCommits,
									{ rawUris: x.map((J) => J.toString()), rootPath: R.path },
								);
								if (!q) throw new Error("No contents found");
								const { diffs: V, previousCommitMessages: G } = q;
								if (V.length === 0) throw new Error("No diffs found");
								const K = await U.generateCommitMessage({
									diffs: V,
									previousCommitMessages: G,
								});
								F.input.setValue(K, !1);
							}
						},
					);
			},
		),
		