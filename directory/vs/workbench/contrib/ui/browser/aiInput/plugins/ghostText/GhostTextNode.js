define(de[1775], he([1, 0, 164, 47]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Dac = e.$Cac = void 0),
				(e.$createGhostTextNode = E),
				(e.$Cac = (0, i.$9g)());
			class w extends t.DecoratorNode {
				static clone(d) {
					return new w(d.__uuid, d.__key);
				}
				static getType() {
					return "ghosttext";
				}
				static importJSON(d) {
					return E(d.uuid, d.text);
				}
				exportJSON() {
					return {
						type: "ghosttext",
						uuid: this.__uuid,
						version: 1,
						text: this.__text,
					};
				}
				constructor(d, m, r) {
					super(r), (this.__uuid = d), (this.__text = m);
				}
				updateDOM(d, m, r) {
					return !1;
				}
				createDOM(d) {
					const m = document.createElement("span");
					return (
						(m.style.color = "var(--vscode-editorGhostText-foreground)"),
						(m.textContent = this.__text),
						m
					);
				}
				decorate(d, m) {
					return null;
				}
			}
			e.$Dac = w;
			function E(C, d) {
				return new w(C, d);
			}
		}),
		define(
			de[3190],
			he([1, 0, 181, 304, 158, 13, 1775]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Fac = d);
				function d(m) {
					const [r] = (0, t.useLexicalComposerContext)();
					let u = null;
					const a = () => {
							const c = u !== null ? (0, w.$getNodeByKey)(u) : null;
							c !== null && c.isAttached() && (c.remove(), (u = null));
						},
						h = (c) => {
							if (!c) return;
							const n = (0, w.$getSelection)();
							if (!(0, w.$isRangeSelection)(n)) return;
							const g = n.clone();
							u !== null && (0, w.$getNodeByKey)(u)?.remove();
							const p = (0, C.$createGhostTextNode)(C.$Cac, c);
							(u = p.getKey()), n.insertNodes([p]), (0, w.$setSelection)(g);
						};
					return (
						(0, E.createEffect)(() => {
							const c = m.ghostText();
							if (c)
								r.update(() => {
									h(c);
								});
							else {
								r.update(() => {
									a();
								});
								return;
							}
						}),
						(0, E.createEffect)(() => {
							(0, E.onMount)(() => {
								r.update(() => {
									a();
								});
							});
						}),
						(0, E.createEffect)(() => {
							function c(g) {
								const p = g.getKey();
								g.__uuid === C.$Cac && p !== u && a();
							}
							function n() {
								r.update(() => {
									a();
								});
							}
							(0, E.onCleanup)(
								(0, i.mergeRegister)(r.registerNodeTransform(C.$Dac, c), n),
							);
						}),
						null
					);
				}
			},
		),
		define(
			de[156],
			he([1, 0, 2, 2, 2, 13, 252, 22]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$k$b = r);
				const m = (0, t.template)("<div><div>");
				function r(u) {
					const a = (0, E.createMemo)(() =>
							u.workspaceContextService.resolveRelativePath(u.fileName),
						),
						[h, c] = (0, E.createSignal)([]);
					(0, E.createEffect)(() => {
						const g = () => {
							c(
								(0, C.$BDb)(
									u.modelService,
									u.languageService,
									a(),
									u.fileKind,
									u.fileKind === d.FileKind.FOLDER ? { id: "folder" } : void 0,
								),
							);
						};
						g();
						const p = setTimeout(() => {
							g();
						}, 3e3);
						(0, E.onCleanup)(() => clearTimeout(p));
					});
					const n = ["monaco-icon-label"];
					return (() => {
						const g = m(),
							p = g.firstChild;
						return (
							p.style.setProperty("height", "100%"),
							(0, w.effect)(
								(o) => {
									const f = ["show-file-icons"].join(" "),
										b =
											typeof u.height == "number"
												? `${u.height}px`
												: u.height
													? u.height
													: "18px",
										s = [...n, ...h(), "height-override-important"].join(" ");
									return (
										f !== o._v$ && (0, i.className)(g, (o._v$ = f)),
										b !== o._v$2 &&
											((o._v$2 = b) != null
												? g.style.setProperty("height", b)
												: g.style.removeProperty("height")),
										s !== o._v$3 && (0, i.className)(p, (o._v$3 = s)),
										o
									);
								},
								{ _v$: void 0, _v$2: void 0, _v$3: void 0 },
							),
							g
						);
					})();
				}
			},
		),
		define(
			de[397],
			he([1, 0, 2, 2, 2, 19, 19, 116, 156, 9, 7, 83, 90, 148, 83]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$cgc = e.$0fc = void 0),
					(e.$$fc = o),
					(e.$_fc = f),
					(e.$agc = b),
					(e.$bgc = s),
					(e.$dgc = y),
					(e.$egc = $),
					(e.$fgc = v),
					(e.$ggc = S),
					(e.$hgc = I);
				const g = (0, t.template)("<div>"),
					p = async (T, P, k) => {
						try {
							let L;
							const D = await k.getCurrentFileInfo(),
								M = P.resolveRelativePath(D?.relativeWorkspacePath ?? ""),
								A = T.read({ resource: M })
									.filter((R) => R.severity === h.MarkerSeverity.Error)
									.map(
										(R) =>
											new c.$yF({
												message: R.message,
												source: R.source,
												range: new n.$Ns({
													startPosition: {
														line: R.startLineNumber,
														column: R.startColumn,
													},
													endPosition: {
														line: R.endLineNumber,
														column: R.endColumn,
													},
												}),
												relativeWorkspacePath: P.asRelativePath(M),
											}),
									);
							return (
								A.length > 0 &&
									(L = new a.$4s({
										relativeWorkspacePath: P.asRelativePath(M),
										errors: A,
										fileContents: D?.contents ?? "",
									})),
								L
							);
						} catch (L) {
							console.error("[aichat] error getting linter errors", L);
							return;
						}
					};
				e.$0fc = p;
				function o(T) {
					if (T.type !== "user") return !1;
					const P =
							(T.selections && T.selections.length > 0) ||
							(T.folderSelections && T.folderSelections.length > 0) ||
							(T.selectedDocs && T.selectedDocs.length > 0) ||
							(T.selectedCommits && T.selectedCommits.length > 0) ||
							(T.selectedPullRequests && T.selectedPullRequests.length > 0) ||
							(T.terminalSelections && T.terminalSelections.length > 0) ||
							(T.terminalFiles && T.terminalFiles.length > 0) ||
							(T.quotes && T.quotes.length > 0) ||
							(T.externalLinks && T.externalLinks.length > 0) ||
							(T.notepads && T.notepads.length > 0) ||
							(T.selectedImages && T.selectedImages.length > 0) ||
							T.gitDiff !== void 0 ||
							T.gitDiffFromBranchToMain !== void 0 ||
							T.usesCodebase === !0 ||
							T.useWeb === !0,
						k =
							T.fileSelections &&
							T.fileSelections.some((L) => !L.isCurrentFile);
					return P || k;
				}
				function f(T) {
					const P = new Set();
					return T.filter((D) =>
						P.has(D.uri.toString()) ? !1 : (P.add(D.uri.toString()), !0),
					).filter((D) => D.isCurrentFile !== !0);
				}
				function b(T) {
					return T.filter((k) => {
						const L = T.findIndex(
							(D) =>
								(0, r.$Ac)(D.uri, k.uri) &&
								D.range.positionLineNumber === k.range.positionLineNumber &&
								D.range.positionColumn === k.range.positionColumn &&
								D.range.selectionStartLineNumber ===
									k.range.selectionStartLineNumber &&
								D.range.selectionStartColumn === k.range.selectionStartColumn &&
								D.text === k.text,
						);
						return L === -1 || L === T.indexOf(k);
					});
				}
				function s(T) {
					const P = Math.floor((Date.now() - T) / 1e3);
					return P < 60
						? "Just now"
						: P < 3600
							? `${Math.floor(P / 60)}m ago`
							: P < 86400
								? `${Math.floor(P / 3600)}h ago`
								: P < 604800
									? `${Math.floor(P / 86400)}d ago`
									: P < 2592e3
										? `${Math.floor(P / 604800)}w ago`
										: P < 31536e3
											? `${Math.floor(P / 2592e3)}mo ago`
											: `${Math.floor(P / 31536e3)}y ago`;
				}
				const l = (T, P, k, L, D) => {
					const M = k.workspaceContextService;
					let N = "";
					if (M) {
						const O = r.URI.revive(T.uri),
							B = M.getWorkspaceFolder(O);
						B && (N = (0, C.$ph)(B.uri, O) ?? "");
					}
					const A = k.workspaceContextService.resolveRelativePath(N),
						R = () => {
							k.openerService.open(A, {
								openToSide: !1,
								editorOptions: {
									revealIfVisible: !0,
									revealIfOpened: !0,
									source: d.EditorOpenSource.USER,
								},
								fromUserGesture: !0,
							});
						};
					return {
						title: (0, E.$kh)(A),
						subTitle: N,
						icon: (() => {
							const O = g();
							return (
								O.style.setProperty("padding-left", "2px"),
								(0, i.insert)(
									O,
									(0, w.createComponent)(m.$k$b, {
										get fileName() {
											return A.fsPath;
										},
										get workspaceContextService() {
											return k.workspaceContextService;
										},
										get modelService() {
											return k.modelService;
										},
										get languageService() {
											return k.languageService;
										},
									}),
								),
								O
							);
						})(),
						onRemove:
							L !== void 0
								? () => {
										L(P());
									}
								: void 0,
						onTitleClick() {
							R();
						},
						...(D || {}),
					};
				};
				e.$cgc = l;
				function y(T) {
					return `bubble-${T.split("-").pop()}`;
				}
				function $(T) {
					const P = (0, u.$Ogb)().document.getElementById(y(T));
					P && P.focus();
				}
				async function v(T, P) {
					const k = T.activeInstance;
					if (k && (await k.focusWhenReady(!0), P)) {
						const L = k.xterm;
						if (L) {
							const D = Math.max(0, P.startLineNumber - 1),
								M = Math.max(0, P.startColumn - 1);
							L.scrollToLine(D);
							const N =
								L.raw.cols * (P.endLineNumber - P.startLineNumber) +
								(P.endColumn - P.startColumn) +
								1;
							L.raw.select(M, D, N);
						}
					}
				}
				function S(T, P) {
					return (
						(0, r.$Ac)(T.uri, P.uri) &&
						T.range.positionLineNumber === P.range.positionLineNumber &&
						T.range.positionColumn === P.range.positionColumn &&
						T.range.selectionStartLineNumber ===
							P.range.selectionStartLineNumber &&
						T.range.selectionStartColumn === P.range.selectionStartColumn &&
						T.text === P.text
					);
				}
				function I(T, P) {
					return (
						r.URI.revive(T.uri).toString() === r.URI.revive(P.uri).toString()
					);
				}
			},
		),
		