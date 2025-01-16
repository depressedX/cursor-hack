define(de[3462], he([1, 0, 1623, 230]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(0, i.$Ubd)(t.$8bd, "menubar");
		}),
		define(
			de[834],
			he([1, 0, 76, 59, 23, 20, 5]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$N6 = e.$I6 = void 0),
					(e.$J6 = u),
					(e.$K6 = a),
					(e.$L6 = h),
					(e.$M6 = c),
					(e.$I6 = (0, C.$Mi)("notebookDocumentService"));
				const d = ["W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f"],
					m = new RegExp(`^[${d.join("")}]+`),
					r = 7;
				function u(g) {
					if (g.scheme !== w.Schemas.vscodeNotebookCell) return;
					const p = g.fragment.indexOf("s");
					if (p < 0) return;
					const o = parseInt(g.fragment.substring(0, p).replace(m, ""), r),
						f = (0, t.$af)(g.fragment.substring(p + 1)).toString();
					if (!isNaN(o))
						return {
							handle: o,
							notebook: g.with({ scheme: f, fragment: null }),
						};
				}
				function a(g, p) {
					const o = p.toString(r),
						b = `${o.length < d.length ? d[o.length - 1] : "z"}${o}s${(0, t.$cf)(t.$Te.fromString(g.scheme), !0, !0)}`;
					return g.with({ scheme: w.Schemas.vscodeNotebookCell, fragment: b });
				}
				function h(g) {
					if (g.scheme !== w.Schemas.vscodeNotebookMetadata) return;
					const p = (0, t.$af)(g.fragment).toString();
					return g.with({ scheme: p, fragment: null });
				}
				function c(g) {
					const p = `${(0, t.$cf)(t.$Te.fromString(g.scheme), !0, !0)}`;
					return g.with({
						scheme: w.Schemas.vscodeNotebookMetadata,
						fragment: p,
					});
				}
				class n {
					constructor() {
						this.a = new i.$Gc();
					}
					getNotebook(p) {
						if (p.scheme === w.Schemas.vscodeNotebookCell) {
							const o = u(p);
							if (o) {
								const f = this.a.get(o.notebook);
								if (f) return f;
							}
						}
						return this.a.get(p);
					}
					addNotebookDocument(p) {
						this.a.set(p.uri, p);
					}
					removeNotebookDocument(p) {
						this.a.delete(p.uri);
					}
				}
				(e.$N6 = n), (0, E.$lK)(e.$I6, n, E.InstantiationType.Delayed);
			},
		),
		define(
			de[70],
			he([1, 0, 76, 215, 103, 266, 23, 54, 12, 8, 834]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$96 =
						e.$66 =
						e.CellStatusbarAlignment =
						e.$56 =
						e.NotebookFindScopeType =
						e.NotebookEditorPriority =
						e.$26 =
						e.$16 =
						e.$Y6 =
						e.CellUri =
						e.NotebookUri =
						e.CellEditType =
						e.SelectionStateType =
						e.NotebookCellsChangeType =
						e.RendererMessagingSpec =
						e.NotebookRendererMatch =
						e.NotebookExecutionState =
						e.NotebookCellExecutionState =
						e.NotebookRunState =
						e.$X6 =
						e.$W6 =
						e.$V6 =
						e.$U6 =
						e.CellKind =
						e.$T6 =
						e.$S6 =
						e.$R6 =
						e.$Q6 =
						e.$P6 =
						e.$O6 =
							void 0),
					(e.$Z6 = v),
					(e.$36 = T),
					(e.$46 = P),
					(e.$76 = D),
					(e.$86 = N),
					(i = mt(i)),
					(e.$O6 = "workbench.editor.notebook"),
					(e.$P6 = "workbench.editor.notebookTextDiffEditor"),
					(e.$Q6 = "workbench.editor.notebookMultiTextDiffEditor"),
					(e.$R6 = "workbench.editor.interactive"),
					(e.$S6 = "workbench.editor.repl"),
					(e.$T6 = "replNotebook.input.execute");
				var a;
				(function (H) {
					(H[(H.Markup = 1)] = "Markup"), (H[(H.Code = 2)] = "Code");
				})(a || (e.CellKind = a = {})),
					(e.$U6 = [
						"application/json",
						"application/javascript",
						"text/html",
						"image/svg+xml",
						E.$EK.latex,
						E.$EK.markdown,
						"image/png",
						"image/jpeg",
						E.$EK.text,
					]),
					(e.$V6 = [
						E.$EK.latex,
						E.$EK.markdown,
						"application/json",
						"text/html",
						"image/svg+xml",
						"image/png",
						"image/jpeg",
						E.$EK.text,
					]),
					(e.$W6 = new Map([
						[
							"ms-toolsai.jupyter",
							new Set(["jupyter-notebook", "interactive"]),
						],
						[
							"ms-toolsai.jupyter-renderers",
							new Set(["jupyter-notebook", "interactive"]),
						],
					])),
					(e.$X6 = "_notAvailable");
				var h;
				(function (H) {
					(H[(H.Running = 1)] = "Running"), (H[(H.Idle = 2)] = "Idle");
				})(h || (e.NotebookRunState = h = {}));
				var c;
				(function (H) {
					(H[(H.Unconfirmed = 1)] = "Unconfirmed"),
						(H[(H.Pending = 2)] = "Pending"),
						(H[(H.Executing = 3)] = "Executing");
				})(c || (e.NotebookCellExecutionState = c = {}));
				var n;
				(function (H) {
					(H[(H.Unconfirmed = 1)] = "Unconfirmed"),
						(H[(H.Pending = 2)] = "Pending"),
						(H[(H.Executing = 3)] = "Executing");
				})(n || (e.NotebookExecutionState = n = {}));
				var g;
				(function (H) {
					(H[(H.WithHardKernelDependency = 0)] = "WithHardKernelDependency"),
						(H[(H.WithOptionalKernelDependency = 1)] =
							"WithOptionalKernelDependency"),
						(H[(H.Pure = 2)] = "Pure"),
						(H[(H.Never = 3)] = "Never");
				})(g || (e.NotebookRendererMatch = g = {}));
				var p;
				(function (H) {
					(H.Always = "always"), (H.Never = "never"), (H.Optional = "optional");
				})(p || (e.RendererMessagingSpec = p = {}));
				var o;
				(function (H) {
					(H[(H.ModelChange = 1)] = "ModelChange"),
						(H[(H.Move = 2)] = "Move"),
						(H[(H.ChangeCellLanguage = 5)] = "ChangeCellLanguage"),
						(H[(H.Initialize = 6)] = "Initialize"),
						(H[(H.ChangeCellMetadata = 7)] = "ChangeCellMetadata"),
						(H[(H.Output = 8)] = "Output"),
						(H[(H.OutputItem = 9)] = "OutputItem"),
						(H[(H.ChangeCellContent = 10)] = "ChangeCellContent"),
						(H[(H.ChangeDocumentMetadata = 11)] = "ChangeDocumentMetadata"),
						(H[(H.ChangeCellInternalMetadata = 12)] =
							"ChangeCellInternalMetadata"),
						(H[(H.ChangeCellMime = 13)] = "ChangeCellMime"),
						(H[(H.Unknown = 100)] = "Unknown");
				})(o || (e.NotebookCellsChangeType = o = {}));
				var f;
				(function (H) {
					(H[(H.Handle = 0)] = "Handle"), (H[(H.Index = 1)] = "Index");
				})(f || (e.SelectionStateType = f = {}));
				var b;
				(function (H) {
					(H[(H.Replace = 1)] = "Replace"),
						(H[(H.Output = 2)] = "Output"),
						(H[(H.Metadata = 3)] = "Metadata"),
						(H[(H.CellLanguage = 4)] = "CellLanguage"),
						(H[(H.DocumentMetadata = 5)] = "DocumentMetadata"),
						(H[(H.Move = 6)] = "Move"),
						(H[(H.OutputItems = 7)] = "OutputItems"),
						(H[(H.PartialMetadata = 8)] = "PartialMetadata"),
						(H[(H.PartialInternalMetadata = 9)] = "PartialInternalMetadata");
				})(b || (e.CellEditType = b = {}));
				var s;
				(function (H) {
					H.scheme = C.Schemas.vscodeNotebookMetadata;
					function q(G) {
						return (0, u.$M6)(G);
					}
					H.generate = q;
					function V(G) {
						return (0, u.$L6)(G);
					}
					H.parse = V;
				})(s || (e.NotebookUri = s = {}));
				var l;
				(function (H) {
					H.scheme = C.Schemas.vscodeNotebookCell;
					function q(X, Y) {
						return (0, u.$K6)(X, Y);
					}
					H.generate = q;
					function V(X) {
						return (0, u.$J6)(X);
					}
					H.parse = V;
					function G(X, Y) {
						return X.with({
							scheme: C.Schemas.vscodeNotebookCellOutput,
							fragment: `op${Y ?? ""},${X.scheme !== C.Schemas.file ? X.scheme : ""}`,
						});
					}
					H.generateCellOutputUri = G;
					function K(X) {
						if (X.scheme !== C.Schemas.vscodeNotebookCellOutput) return;
						const Y =
							/^op([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})?\,(.*)$/i.exec(
								X.fragment,
							);
						if (!Y) return;
						const ie = Y[1] && Y[1] !== "" ? Y[1] : void 0,
							ne = Y[2];
						return {
							outputId: ie,
							notebook: X.with({
								scheme: ne || C.Schemas.file,
								fragment: null,
							}),
						};
					}
					H.parseCellOutputUri = K;
					function J(X, Y, ie) {
						return H.generate(X, Y).with({ scheme: ie });
					}
					H.generateCellPropertyUri = J;
					function W(X, Y) {
						if (X.scheme === Y) return H.parse(X.with({ scheme: H.scheme }));
					}
					H.parseCellPropertyUri = W;
				})(l || (e.CellUri = l = {}));
				const y = (H) => (m.$l ? H.replace(/\//g, "\\") : H);
				class $ {
					constructor(q = [], V = e.$U6) {
						(this.e = V),
							(this.d = [...new Set(q)].map((G) => ({
								pattern: G,
								matches: i.$Jk(y(G)),
							})));
					}
					sort(q) {
						const V = new Map(w.Iterable.map(q, (K) => [K, y(K)]));
						let G = [];
						for (const { matches: K } of this.d)
							for (const [J, W] of V)
								if (K(W)) {
									G.push(J), V.delete(J);
									break;
								}
						return (
							V.size &&
								(G = G.concat(
									[...V.keys()].sort(
										(K, J) => this.e.indexOf(K) - this.e.indexOf(J),
									),
								)),
							G
						);
					}
					prioritize(q, V) {
						const G = this.f(q);
						if (G === -1) {
							this.d.unshift({ pattern: q, matches: i.$Jk(y(q)) });
							return;
						}
						const K = new Set(V.map((W) => this.f(W, G)));
						K.delete(-1);
						const J = Array.from(K).sort();
						this.d.splice(G + 1, 0, ...J.map((W) => this.d[W]));
						for (let W = J.length - 1; W >= 0; W--) this.d.splice(J[W], 1);
					}
					toArray() {
						return this.d.map((q) => q.pattern);
					}
					f(q, V = this.d.length) {
						const G = y(q);
						for (let K = 0; K < V; K++) if (this.d[K].matches(G)) return K;
						return -1;
					}
				}
				e.$Y6 = $;
				function v(H, q, V, G = (K, J) => K === J) {
					const K = [];
					function J(Y, ie, ne) {
						if (ie === 0 && ne.length === 0) return;
						const ee = K[K.length - 1];
						ee && ee.start + ee.deleteCount === Y
							? ((ee.deleteCount += ie), ee.toInsert.push(...ne))
							: K.push({ start: Y, deleteCount: ie, toInsert: ne });
					}
					let W = 0,
						X = 0;
					for (;;) {
						if (W === H.length) {
							J(W, 0, q.slice(X));
							break;
						}
						if (X === q.length) {
							J(W, H.length - W, []);
							break;
						}
						const Y = H[W],
							ie = q[X];
						if (G(Y, ie)) {
							(W += 1), (X += 1);
							continue;
						}
						V(ie) ? (J(W, 1, []), (W += 1)) : (J(W, 0, [ie]), (X += 1));
					}
					return K;
				}
				(e.$16 = new r.$5j("notebookEditorCursorAtBoundary", "none")),
					(e.$26 = new r.$5j("notebookEditorCursorAtLineBoundary", "none"));
				var S;
				(function (H) {
					(H.default = "default"), (H.option = "option");
				})(S || (e.NotebookEditorPriority = S = {}));
				var I;
				(function (H) {
					(H.Cells = "cells"), (H.Text = "text"), (H.None = "none");
				})(I || (e.NotebookFindScopeType = I = {}));
				function T(H) {
					const q = H;
					return !!(
						(typeof q.include == "string" || i.$Kk(q.include)) &&
						(typeof q.exclude == "string" || i.$Kk(q.exclude))
					);
				}
				function P(H, q, V) {
					if (
						(Array.isArray(H.viewType) && H.viewType.indexOf(q) >= 0) ||
						H.viewType === q
					)
						return !0;
					if (H.filenamePattern) {
						const G = T(H.filenamePattern)
								? H.filenamePattern.include
								: H.filenamePattern,
							K = T(H.filenamePattern) ? H.filenamePattern.exclude : void 0;
						if (i.$Ik(G, (0, d.$sc)(V.fsPath).toLowerCase()))
							return !(K && i.$Ik(K, (0, d.$sc)(V.fsPath).toLowerCase()));
					}
					return !1;
				}
				e.$56 = {
					displayOrder: "notebook.displayOrder",
					cellToolbarLocation: "notebook.cellToolbarLocation",
					cellToolbarVisibility: "notebook.cellToolbarVisibility",
					showCellStatusBar: "notebook.showCellStatusBar",
					textDiffEditorPreview: "notebook.diff.enablePreview",
					diffOverviewRuler: "notebook.diff.overviewRuler",
					experimentalInsertToolbarAlignment:
						"notebook.experimental.insertToolbarAlignment",
					compactView: "notebook.compactView",
					focusIndicator: "notebook.cellFocusIndicator",
					insertToolbarLocation: "notebook.insertToolbarLocation",
					globalToolbar: "notebook.globalToolbar",
					stickyScrollEnabled: "notebook.stickyScroll.enabled",
					stickyScrollMode: "notebook.stickyScroll.mode",
					undoRedoPerCell: "notebook.undoRedoPerCell",
					consolidatedOutputButton: "notebook.consolidatedOutputButton",
					showFoldingControls: "notebook.showFoldingControls",
					dragAndDropEnabled: "notebook.dragAndDropEnabled",
					cellEditorOptionsCustomizations:
						"notebook.editorOptionsCustomizations",
					consolidatedRunButton: "notebook.consolidatedRunButton",
					openGettingStarted: "notebook.experimental.openGettingStarted",
					globalToolbarShowLabel: "notebook.globalToolbarShowLabel",
					markupFontSize: "notebook.markup.fontSize",
					markdownLineHeight: "notebook.markdown.lineHeight",
					interactiveWindowCollapseCodeCells:
						"interactiveWindow.collapseCellInputCode",
					outputScrollingDeprecated: "notebook.experimental.outputScrolling",
					outputScrolling: "notebook.output.scrolling",
					textOutputLineLimit: "notebook.output.textLineLimit",
					LinkifyOutputFilePaths: "notebook.output.linkifyFilePaths",
					minimalErrorRendering: "notebook.output.minimalErrorRendering",
					formatOnSave: "notebook.formatOnSave.enabled",
					insertFinalNewline: "notebook.insertFinalNewline",
					defaultFormatter: "notebook.defaultFormatter",
					formatOnCellExecution: "notebook.formatOnCellExecution",
					codeActionsOnSave: "notebook.codeActionsOnSave",
					outputWordWrap: "notebook.output.wordWrap",
					outputLineHeightDeprecated: "notebook.outputLineHeight",
					outputLineHeight: "notebook.output.lineHeight",
					outputFontSizeDeprecated: "notebook.outputFontSize",
					outputFontSize: "notebook.output.fontSize",
					outputFontFamilyDeprecated: "notebook.outputFontFamily",
					outputFontFamily: "notebook.output.fontFamily",
					findFilters: "notebook.find.filters",
					logging: "notebook.logging",
					confirmDeleteRunningCell: "notebook.confirmDeleteRunningCell",
					remoteSaving: "notebook.experimental.remoteSave",
					gotoSymbolsAllSymbols: "notebook.gotoSymbols.showAllSymbols",
					outlineShowMarkdownHeadersOnly:
						"notebook.outline.showMarkdownHeadersOnly",
					outlineShowCodeCells: "notebook.outline.showCodeCells",
					outlineShowCodeCellSymbols: "notebook.outline.showCodeCellSymbols",
					breadcrumbsShowCodeCells: "notebook.breadcrumbs.showCodeCells",
					scrollToRevealCell: "notebook.scrolling.revealNextCellOnExecute",
					cellChat: "notebook.experimental.cellChat",
					cellGenerate: "notebook.experimental.generate",
					notebookVariablesView: "notebook.experimental.variablesView",
					InteractiveWindowPromptToSave:
						"interactiveWindow.promptToSaveOnClose",
					cellFailureDiagnostics: "notebook.cellFailureDiagnostics",
					outputBackupSizeLimit: "notebook.backup.sizeLimit",
				};
				var k;
				(function (H) {
					(H[(H.Left = 1)] = "Left"), (H[(H.Right = 2)] = "Right");
				})(k || (e.CellStatusbarAlignment = k = {}));
				class L {
					static {
						this.d = "notebook/";
					}
					static create(q) {
						return `${L.d}${q}`;
					}
					static parse(q) {
						if (q.startsWith(L.d)) return q.substring(L.d.length);
					}
				}
				e.$66 = L;
				function D(H) {
					return [
						"application/vnd.code.notebook.stdout",
						"application/vnd.code.notebook.stderr",
					].includes(H);
				}
				const M = new TextDecoder();
				function N(H) {
					const q = [];
					let V = !1;
					for (const W of H) (q.length === 0 || V) && (q.push(W), (V = !0));
					let G = O(q);
					const K = t.$Te.concat(q.map((W) => t.$Te.wrap(W))),
						J = x(K);
					return (
						(G = G || J.byteLength !== K.byteLength),
						{ data: J, didCompression: G }
					);
				}
				e.$96 = "\x1B[A";
				const A = e.$96.split("").map((H) => H.charCodeAt(0)),
					R = 10;
				function O(H) {
					let q = !1;
					return (
						H.forEach((V, G) => {
							if (G === 0 || V.length < e.$96.length) return;
							const K = H[G - 1],
								J = V.subarray(0, e.$96.length);
							if (J[0] === A[0] && J[1] === A[1] && J[2] === A[2]) {
								const W = K.lastIndexOf(R);
								if (W === -1) return;
								(q = !0),
									(H[G - 1] = K.subarray(0, W)),
									(H[G] = V.subarray(e.$96.length));
							}
						}),
						q
					);
				}
				function B(H) {
					let q = H;
					do (H = q), (q = H.replace(/[^\n]\x08/gm, ""));
					while (q.length < H.length);
					return H;
				}
				function U(H) {
					for (
						H = H.replace(
							/\r+\n/gm,
							`
`,
						);
						H.search(/\r[^$]/g) > -1;
					) {
						const q = H.match(/^(.*)\r+/m)[1];
						let V = H.match(/\r+(.*)$/m)[1];
						(V = V + q.slice(V.length, q.length)),
							(H = H.replace(/\r+.*$/m, "\r").replace(/^.*\r/m, V));
					}
					return H;
				}
				const z = 8,
					F = 13;
				function x(H) {
					return !H.buffer.includes(z) && !H.buffer.includes(F)
						? H
						: t.$Te.fromString(U(B(M.decode(H.buffer))));
				}
			},
		),
		